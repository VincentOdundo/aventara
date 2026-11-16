// Runs after `vite build` and `vite build --ssr`. Turns the single-page app
// into one complete HTML file per route:
//
//   - the page content itself (rendered by src/entry-server.jsx), so search
//     engines, link previews and LLM clients that do not run JavaScript read
//     the real page instead of an empty <div id="root">;
//   - that page's own <title>, description, canonical URL, share tags and
//     structured data, taken from the page's useSeo() call;
//   - a real 404 page, and the Markdown versions, /sitemap.md and /llms.txt.
//
// The build fails if a page is missing its title, description or <h1>, if two
// pages share a title, or if a page refers to an asset that was not built.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { SITE_URL, allPages, htmlFile, markdownPath } from "./routes.mjs";
import { buildDocuments, llmsTxt, refreshCompanyProfile, sitemapMarkdown } from "./markdown.mjs";

const server = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href);
const { render, safariPackages, allPackages, destinations, SEASONS, CONTACT_EMAIL, WHATSAPP_NUMBER, company, seo } = server;

const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escText = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const json = (value) => JSON.stringify(value).replace(/</g, "\\u003c");

// Replacement functions throughout: values contain prices such as "$1,212",
// and in a replacement *string* "$1" would be read as a capture group.
const setMeta = (html, attr, key, value) => {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`meta ${key} not found in dist/index.html`);
  return html.replace(re, (_, open, close) => open + esc(value) + close);
};

/* ---------- template ---------- */

let template = fs.readFileSync("dist/index.html", "utf8");
if (!template.includes('<div id="root"></div>')) throw new Error("dist/index.html has no empty #root");

// Organisation data: add the price range from the rate card.
template = template.replace(
  /(<script type="application\/ld\+json" id="org-jsonld">)([\s\S]*?)(<\/script>)/,
  (_, open, body, close) => {
    const data = JSON.parse(body);
    const agency = data["@graph"].find((node) => node["@type"] === "TravelAgency");
    const prices = safariPackages.flatMap((p) => [p.price.low, p.price.high]);
    agency.priceRange = `${seo.usd(Math.min(...prices))} - ${seo.usd(Math.max(...prices))}`;
    return open + json(data) + close;
  },
);

function page(head, bodyHtml) {
  let html = template.replace(/<title>[\s\S]*?<\/title>/, () => `<title>${escText(head.title)}</title>`);
  html = setMeta(html, "name", "description", head.description);
  html = setMeta(html, "name", "robots", head.robots);
  html = setMeta(html, "property", "og:title", head.title);
  html = setMeta(html, "property", "og:description", head.description);
  html = setMeta(html, "property", "og:url", head.url);
  html = setMeta(html, "property", "og:image", head.image);
  html = setMeta(html, "name", "twitter:title", head.title);
  html = setMeta(html, "name", "twitter:description", head.description);
  html = setMeta(html, "name", "twitter:url", head.url);
  html = setMeta(html, "name", "twitter:image", head.image);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, (_, open, close) => open + esc(head.url) + close);
  if (head.jsonLd) {
    html = html.replace("</head>", () => `  <script type="application/ld+json" id="page-jsonld">${head.jsonLd.replace(/</g, "\\u003c")}</script>\n  </head>`);
  }

  // React opens the markup with a <link rel="preload"> for each image that is
  // not lazy-loaded. Preloads belong in <head>, and only the hero image (the
  // one marked fetchPriority="high") is worth fetching ahead of everything.
  let heroPreload = "";
  const body = bodyHtml.replace(/^(?:<link rel="preload"[^>]*>)+/, (links) => {
    const hero = (links.match(/<link rel="preload"[^>]*>/g) || []).find((l) => /fetchPriority="high"/i.test(l));
    if (hero) heroPreload = hero.replace(/fetchPriority/i, "fetchpriority").replace(/\/>$/, " />");
    return "";
  });
  if (heroPreload) html = html.replace("</head>", () => `  ${heroPreload}\n  </head>`);

  return html.replace('<div id="root"></div>', () => `<div id="root">${body}</div>`);
}

/* ---------- checks ---------- */

const problems = [];
const builtAssets = new Set(fs.readdirSync("dist/assets"));

function check(route, head, bodyHtml) {
  const fail = (message) => problems.push(`${route}: ${message}`);
  if (!head) return fail("the page never called useSeo()");
  if (!head.description) fail("no description");
  const h1 = (bodyHtml.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(`expected one <h1>, found ${h1}`);
  if ((bodyHtml.match(/<main[\s>]/g) || []).length !== 1) fail("expected one <main>");
  for (const [, file] of bodyHtml.matchAll(/["'(]\/assets\/([^"')\s]+)/g)) {
    if (!builtAssets.has(decodeURIComponent(file))) fail(`refers to /assets/${file}, which was not built`);
  }
  if (bodyHtml.length < 2000) fail("rendered almost no content");
}

/* ---------- render every page ---------- */

const pages = allPages(
  safariPackages.map((s) => s.slug),
  destinations.map((d) => d.slug),
);
const rendered = new Map();
const titles = new Map();

for (const p of pages) {
  const result = await render(p.path);
  check(p.path, result.seo, result.html);
  if (!result.seo) continue;
  if (result.seo.url !== SITE_URL + p.path) problems.push(`${p.path}: canonical is ${result.seo.url}`);
  if (titles.has(result.seo.title)) problems.push(`${p.path}: same title as ${titles.get(result.seo.title)}`);
  titles.set(result.seo.title, p.path);
  rendered.set(p.path, result);

  const out = path.join("dist", htmlFile(p.path));
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page(result.seo, result.html));
}

// 404: served by the host for any unknown URL. Never indexed.
const notFound = await render("/this-page-does-not-exist");
check("/404", notFound.seo, notFound.html);
if (notFound.seo) fs.writeFileSync("dist/404.html", page(notFound.seo, notFound.html));

if (problems.length) {
  console.error(`prerender failed:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}

/* ---------- Markdown versions, sitemap.md, llms.txt ---------- */

const ctx = {
  date: new Date().toISOString().slice(0, 10),
  safariPackages, allPackages, destinations, SEASONS, CONTACT_EMAIL, WHATSAPP_NUMBER, company, seo, rendered,
};

// Keep the repository's COMPANY_PROFILE.md in step with the rate card too.
const profileSource = fs.readFileSync("COMPANY_PROFILE.md", "utf8");
ctx.companyProfile = refreshCompanyProfile(profileSource, ctx);
if (ctx.companyProfile !== profileSource.replace(/\r\n/g, "\n")) {
  fs.writeFileSync("COMPANY_PROFILE.md", ctx.companyProfile);
  console.log("COMPANY_PROFILE.md refreshed from the package data");
}

const docs = buildDocuments(pages, rendered, ctx);
for (const doc of docs) {
  const out = path.join("dist", doc.path.slice(1));
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, doc.body);
}
fs.writeFileSync("dist/sitemap.md", sitemapMarkdown(pages, docs, ctx));
fs.writeFileSync("dist/llms.txt", llmsTxt(pages, docs, ctx));

const expected = pages.filter(markdownPath).length;
if (docs.length !== expected) throw new Error(`expected ${expected} Markdown documents, wrote ${docs.length}`);

console.log(`prerendered ${rendered.size} pages + 404; wrote ${docs.length} Markdown documents, sitemap.md and llms.txt`);
