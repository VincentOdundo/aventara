// Writes public/sitemap.xml, public/robots.txt and vercel.json from the safari
// and destination data. Runs automatically before every build.
import fs from "node:fs";
import path from "node:path";
import { SITE_URL, allPages, markdownPath } from "./routes.mjs";

const today = new Date().toISOString().slice(0, 10);

const slugsIn = (file) =>
  [...fs.readFileSync(file, "utf8").matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);

const packageDir = "src/data/packages";
const safariSlugs = fs
  .readdirSync(packageDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .flatMap((d) =>
    fs
      .readdirSync(path.join(packageDir, d.name))
      .filter((f) => f.endsWith(".js") && f !== "index.js")
      .flatMap((f) => slugsIn(path.join(packageDir, d.name, f))),
  );
const destinationSlugs = slugsIn("src/data/destinations.js");
const pages = allPages(safariSlugs, destinationSlugs);

/* ---------- sitemap.xml ---------- */
// The comment is a navigation hint for LLM readers; the URL entries are the
// canonical HTML pages only. Markdown versions are not listed here.
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- LLM readers: a Markdown guide to this site is at ${SITE_URL}/llms.txt and a map with a Markdown version of every page is at ${SITE_URL}/sitemap.md -->
${pages
  .map(
    (p) =>
      `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync("public/sitemap.xml", xml);

/* ---------- robots.txt ---------- */
fs.writeFileSync(
  "public/robots.txt",
  `User-agent: *
Allow: /

# Markdown guide to this site for LLM readers: ${SITE_URL}/llms.txt
# Map with a Markdown version of every page: ${SITE_URL}/sitemap.md

Sitemap: ${SITE_URL}/sitemap.xml
`,
);

/* ---------- vercel.json ---------- */
// - One URL per page: /about/ redirects to /about.
// - Hashed build assets never change, so browsers may keep them for a year.
// - Each Markdown version names its HTML page as canonical, so search engines
//   treat it as an alternate copy and not as a competing page.
const header = (key, value) => ({ key, value });
const vercel = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  trailingSlash: false,
  headers: [
    {
      source: "/assets/(.*)",
      headers: [header("Cache-Control", "public, max-age=31536000, immutable")],
    },
    {
      source: "/(.*)\\.md",
      headers: [header("Content-Type", "text/markdown; charset=utf-8")],
    },
    {
      source: "/llms.txt",
      headers: [header("Content-Type", "text/plain; charset=utf-8")],
    },
    ...pages
      .filter((p) => markdownPath(p))
      .map((p) => ({
        source: markdownPath(p),
        headers: [
          header("Link", `<${SITE_URL}${p.path}>; rel="canonical"`),
        ],
      })),
  ],
};
fs.writeFileSync("vercel.json", JSON.stringify(vercel, null, 2) + "\n");

console.log(
  `sitemap: ${pages.length} URLs (${safariSlugs.length} safaris, ${destinationSlugs.length} destinations); vercel.json: ${vercel.headers.length} header rules`,
);
