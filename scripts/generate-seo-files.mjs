// Writes public/sitemap.xml and public/robots.txt from the safari and
// destination data. Runs automatically before every build.
import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://cimabravasafaris.co.ke";
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

const pages = [
  { loc: "/", priority: "1.0" },
  { loc: "/safaris", priority: "0.9" },
  { loc: "/safaris/kenya", priority: "0.8" },
  { loc: "/safaris/tanzania", priority: "0.8" },
  { loc: "/safaris/combined", priority: "0.8" },
  { loc: "/safaris/nairobi", priority: "0.7" },
  ...safariSlugs.map((s) => ({ loc: `/safari/${s}`, priority: "0.8" })),
  { loc: "/destinations", priority: "0.7" },
  ...destinationSlugs.map((s) => ({ loc: `/destinations/${s}`, priority: "0.6" })),
  { loc: "/kenya", priority: "0.6" },
  { loc: "/tanzania", priority: "0.6" },
  { loc: "/company-profile", priority: "0.7" },
  { loc: "/about", priority: "0.5" },
  { loc: "/gallery", priority: "0.4" },
  { loc: "/contact", priority: "0.6" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) =>
      `  <url><loc>${SITE_URL}${p.loc}</loc><lastmod>${today}</lastmod><priority>${p.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", xml);
fs.writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`sitemap: ${pages.length} URLs (${safariSlugs.length} safaris, ${destinationSlugs.length} destinations)`);
