// Runs after `vite build` and `vite build --ssr`. Turns the single-page app
// into one complete HTML file per route:
//
//   - the page content itself (rendered by src/entry-server.jsx), so search
//     engines, link previews and LLM clients that do not run JavaScript read
//     the real page instead of an empty <div id="root">;
//   - that page's own <title>, description, canonical URL, share tags, Markdown
//     alternate link and JSON-LD structured data, taken from useSeo();
//   - a real 404 page, the Markdown corpus (/sitemap.md, /llms.txt,
//     /llms-full.txt), and the image-enriched XML sitemap (dist/sitemap.xml).
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { SITE_URL, allPages, htmlFile, markdownPath } from "./routes.mjs";
import { lastmodForRoute } from "./lastmod.mjs";
import { buildOgCard } from "./og.mjs";
import {
  buildDocuments,
  llmsFullTxt,
  llmsTxt,
  refreshCompanyProfile,
  sitemapMarkdown,
} from "./markdown.mjs";

const server = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href);
const { render, safariPackages, allPackages, destinations, SEASONS, CONTACT_EMAIL, WHATSAPP_NUMBER, company, seo, PHOTO_META } = server;

const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const escText = (v) => String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
  html = setMeta(html, "property", "og:image:alt", head.imageAlt);
  html = setMeta(html, "name", "twitter:title", head.title);
  html = setMeta(html, "name", "twitter:description", head.description);
  html = setMeta(html, "name", "twitter:url", head.url);
  html = setMeta(html, "name", "twitter:image", head.image);
  html = setMeta(html, "name", "twitter:image:alt", head.imageAlt);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, (_, open, close) => open + esc(head.url) + close);

  const mdLinkRe = /<link rel="alternate" type="text\/markdown" href="[^"]*" title="Markdown version" \/>\s*/;
  if (head.markdownUrl) {
    html = html.replace(
      mdLinkRe,
      () => `<link rel="alternate" type="text/markdown" href="${esc(head.markdownUrl)}" title="Markdown version" />\n    `,
    );
  } else {
    html = html.replace(mdLinkRe, "");
  }

  if (head.jsonLd) {
    html = html.replace("</head>", () => `  <script type="application/ld+json" id="page-jsonld">${head.jsonLd.replace(/</g, "\\u003c")}</script>\n  </head>`);
  }

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
  if (head.description && head.description.length > 165) {
    fail(`description is ${head.description.length} chars (>165)`);
  }
  if (head.jsonLd) {
    try {
      JSON.parse(head.jsonLd);
    } catch (e) {
      fail(`invalid JSON-LD: ${e.message}`);
    }
  }
  const h1 = (bodyHtml.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(`expected one <h1>, found ${h1}`);
  if ((bodyHtml.match(/<main[\s>]/g) || []).length !== 1) fail("expected one <main>");
  for (const [, file] of bodyHtml.matchAll(/["'(]\/assets\/([^"')\s]+)/g)) {
    if (!builtAssets.has(decodeURIComponent(file))) fail(`refers to /assets/${file}, which was not built`);
  }
  if (bodyHtml.length < 2000) fail("rendered almost no content");
}

/* ---------- share cards ---------- */
// One 1200x630 card per page, cut from that page's own photograph around the
// photo's focal point (see src/data/photos.js and scripts/og.mjs).

const safariBySlug = new Map(safariPackages.map((s) => [s.slug, s]));
const destinationBySlug = new Map(destinations.map((d) => [d.slug, d]));
const defaultPhoto = [...PHOTO_META.values()][0];
const capitalise = (v) => v.charAt(0).toUpperCase() + v.slice(1);

function cardKicker(route) {
  if (route.startsWith("/safari/")) {
    const s = safariBySlug.get(route.slice("/safari/".length));
    if (s) {
      const where = s.country === "combined" ? "Kenya & Tanzania" : capitalise(s.country);
      return `${where} · ${seo.durationLabel(s.days)}`;
    }
  }
  if (route.startsWith("/destinations/")) {
    const d = destinationBySlug.get(route.slice("/destinations/".length));
    if (d) return `${d.country} destination`;
  }
  if (route.startsWith("/safaris")) return "Safari packages";
  return "Safaris from Nairobi";
}

// Cards never show a price: it would go stale at the next rate update.
const withoutPrice = (title) =>
  title.replace(/\s*(?:from\s+)?\$\d[\d,]*(?:\s*(?:pp|per person))?/gi, "").trim();

const cardPaths = new Set();
async function writeShareCard(route, head) {
  // noindex pages (the HTML sitemap, the 404) share the home card instead of getting their own.
  if (head.robots.startsWith("noindex")) return;
  const photoUrl = head.photo ? head.photo.replace(SITE_URL, "") : defaultPhoto.src;
  const meta = PHOTO_META.get(photoUrl) || defaultPhoto;
  const source = path.join("dist", decodeURIComponent(photoUrl));
  if (!fs.existsSync(source)) throw new Error(`share card for ${route}: source photo ${photoUrl} was not built`);
  const out = path.join("dist", head.image.replace(SITE_URL, ""));
  await buildOgCard(source, {
    focus: meta.focus,
    title: withoutPrice(head.ogTitle || head.title),
    kicker: cardKicker(route),
    domain: SITE_URL.replace("https://", ""),
    out,
  });
  cardPaths.add(out);
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

  await writeShareCard(p.path, result.seo);

  const out = path.join("dist", htmlFile(p.path));
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, page(result.seo, result.html));
}

// The old root-level share image URL keeps working: it now serves the home card.
fs.copyFileSync("dist/og/home.jpg", "dist/og-image.jpeg");

// 404: served by the host for any unknown URL. Never indexed.
const notFound = await render("/this-page-does-not-exist");
check("/404", notFound.seo, notFound.html);
if (notFound.seo) fs.writeFileSync("dist/404.html", page(notFound.seo, notFound.html));

if (problems.length) {
  console.error(`prerender failed:\n  ${problems.join("\n  ")}`);
  process.exit(1);
}

/* ---------- Markdown versions, sitemap.md, llms.txt, llms-full.txt ---------- */

const today = new Date().toISOString().slice(0, 10);
const ctx = {
  date: today,
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
fs.writeFileSync("dist/llms-full.txt", llmsFullTxt(docs, ctx));

const expected = pages.filter(markdownPath).length;
if (docs.length !== expected) throw new Error(`expected ${expected} Markdown documents, wrote ${docs.length}`);

/* ---------- Image-enriched XML sitemap ---------- */

const xmlEntries = pages
  .filter((p) => p.index !== false)
  .map((p) => {
    const head = rendered.get(p.path).seo;
    // The page's own photograph, not the share card with text laid over it.
    const imageUrl = head.photo || head.image;
    const imgTag = imageUrl
      ? `<image:image><image:loc>${escText(imageUrl)}</image:loc><image:title>${escText(head.imageAlt || head.title)}</image:title></image:image>`
      : "";
    return `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${lastmodForRoute(p.path)}</lastmod><priority>${p.priority}</priority>${imgTag}</url>`;
  })
  .join("\n");

const imageSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <!-- LLM readers: a Markdown guide to this site is at ${SITE_URL}/llms.txt, full single-file corpus at ${SITE_URL}/llms-full.txt, and a map with a Markdown version of every page at ${SITE_URL}/sitemap.md -->
${xmlEntries}
</urlset>
`;
fs.writeFileSync("dist/sitemap.xml", imageSitemapXml);

console.log(
  `prerendered ${rendered.size} pages + 404, ${cardPaths.size} share cards; wrote ${docs.length} Markdown documents, sitemap.md, llms.txt, llms-full.txt and image-enriched sitemap.xml`,
);
