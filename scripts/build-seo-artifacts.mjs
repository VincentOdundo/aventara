// Prebuild script for Next.js (`npm run build`):
//   1. Registers asset-loader.mjs so static image imports inside src/data/photos.js resolve cleanly.
//   2. Computes accurate per-route <lastmod> dates into src/data/lastmod.json (used by src/app/sitemap.js).
//   3. Builds all 41 1200x630 OpenGraph share cards into public/og/*.jpg (+ public/og-image.jpeg).
//   4. Refreshes COMPANY_PROFILE.md and writes public/**/*.md, public/sitemap.md, public/llms.txt, public/llms-full.txt.
import { register } from "node:module";
import fs from "node:fs";
import path from "node:path";

register(new URL("./asset-loader.mjs", import.meta.url));

const [
  { safariPackages, allPackages, SEASONS, CONTACT_EMAIL, WHATSAPP_NUMBER },
  { destinations },
  company,
  { PHOTOS, PHOTO_META },
  seo,
  { SAFARI_CONTENT },
  { DESTINATION_CONTENT },
  { HUB_CONTENT },
  { SITE_URL, allPages },
  { lastmodForRoute },
  { buildOgCard },
  { buildDocuments, llmsFullTxt, llmsTxt, refreshCompanyProfile, sitemapMarkdown },
] = await Promise.all([
  import("../src/data/safaris.js"),
  import("../src/data/destinations.js"),
  import("../src/data/company.js"),
  import("../src/data/photos.js"),
  import("../src/lib/seo.js"),
  import("../src/data/safariContent.js"),
  import("../src/data/destinationContent.js"),
  import("../src/data/hubContent.js"),
  import("./routes.mjs"),
  import("./lastmod.mjs"),
  import("./og.mjs"),
  import("./markdown.mjs"),
]);

const resolveAssetFile = (src) => {
  const s = typeof src === "string" ? src : src?.src || "";
  if (s.startsWith("/__asset__/")) return path.resolve(s.slice("/__asset__/".length));
  return path.resolve(s.replace(/^\//, ""));
};

const safariBySlug = new Map(safariPackages.map((s) => [s.slug, s]));
const destBySlug = new Map(destinations.map((d) => [d.slug, d]));
const pages = allPages(
  safariPackages.map((s) => s.slug),
  destinations.map((d) => d.slug),
);

/* ---------- page SEO metadata + share-card definitions ---------- */

const metaByPath = new Map();
const shareSpecs = [];

const minPackagePrice = Math.min(
  ...safariPackages.filter((s) => s.days >= 1).map((s) => s.price.low),
);
const dayTripPrice = Math.min(...(allPackages.nairobi || []).map((s) => s.price.low));

const STATIC_META = {
  "/": {
    title: "Kenya & Tanzania Budget Safaris from Nairobi | Cima Brava Adventures",
    ogTitle: "Kenya & Tanzania Budget Safaris from Nairobi",
    description: seo.truncateText(
      `Shared and private 4x4 safaris across Kenya & Tanzania from ${seo.usd(minPackagePrice)}/pp (Nairobi tours from ${seo.usd(dayTripPrice)}). Park fees, lodging, meals & transfers included.`,
      158,
    ),
    photo: PHOTOS.elephantKiliRight.src,
    kicker: "Safaris from Nairobi",
  },
  "/safaris": {
    title: "Kenya & Tanzania Safari Packages & Prices",
    description:
      "Every safari we run in Kenya and Tanzania, from a Nairobi half-day to 12 days across both countries, with prices for low and high season.",
    photo: PHOTOS.lionPack.src,
    kicker: "Safari packages",
  },
  "/safaris/kenya": {
    title: "Kenya Budget Safari Packages & Prices (2–8 Days)",
    description:
      "Kenya budget safaris from 2 to 8 days with per-person prices for low and high season. Park fees, meals and transfers included.",
    photo: PHOTOS.elephantKiliLeft.src,
    kicker: "Safari packages",
  },
  "/safaris/tanzania": {
    title: "Tanzania Budget Safari Packages & Prices (3–6 Days)",
    description:
      "Serengeti, Ngorongoro, Tarangire and Lake Manyara safaris from 3 to 6 days, with per-person prices for low and high season.",
    photo: PHOTOS.leopardTree.src,
    kicker: "Safari packages",
  },
  "/safaris/combined": {
    title: "Kenya & Tanzania Combined Safaris (10–12 Days)",
    description:
      "Cross-border safaris from 10 to 12 days covering the Masai Mara, Amboseli, the Serengeti and Ngorongoro Crater in one booking.",
    photo: PHOTOS.kilimanjaro.src,
    kicker: "Safari packages",
  },
  "/destinations": {
    title: "Safari Destinations in Kenya & Tanzania",
    description:
      "The parks and reserves on our routes: Masai Mara, Amboseli, Lake Nakuru, Lake Naivasha, Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara.",
    photo: PHOTOS.lionVehicle.src,
    kicker: "Safaris from Nairobi",
  },
  "/kenya": {
    title: "Kenya Safari Guide: Parks, Seasons & Budget Trips",
    description:
      "Budget 4x4 safaris in Kenya from 2 to 8 days: Masai Mara, Amboseli, Lake Nakuru and Lake Naivasha, with daily departures from Nairobi.",
    photo: PHOTOS.sunsetAcacia.src,
    kicker: "Safaris from Nairobi",
  },
  "/tanzania": {
    title: "Tanzania Safari Guide: Serengeti, Ngorongoro & Budget Trips",
    description:
      "Northern Tanzania safaris from 3 to 6 days: Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara, starting in Arusha.",
    photo: PHOTOS.elephantKiliRight.src,
    kicker: "Safaris from Nairobi",
  },
  "/company-profile": {
    title: "Company Profile & 2026–2027 Safari Rates",
    description:
      "Who we are, what every safari price includes, the full 2026–2027 rate card and every itinerary day by day. Download the PDF.",
    photo: PHOTOS.elephantKiliRight.src,
    kicker: "Safaris from Nairobi",
  },
  "/about": {
    title: "About Cima Brava Adventures — Nairobi Safari Operator",
    description:
      "Based at City Market, Nairobi, Cima Brava Adventures operates transparent shared and private 4x4 safaris across Kenya and Tanzania.",
    photo: PHOTOS.tuskerKili.src,
    kicker: "Safaris from Nairobi",
  },
  "/contact": {
    title: "Contact Cima Brava Adventures — City Market, Nairobi",
    description:
      "Book a Kenya or Tanzania safari directly with our City Market, Nairobi desk. WhatsApp +254 112 346 049 or email for a confirmed USD quote within 24 hours.",
    photo: PHOTOS.giraffeSunset.src,
    kicker: "Safaris from Nairobi",
  },
  "/gallery": {
    title: "East Africa Safari Photo Gallery",
    description:
      "Wildlife and landscape photos from Cima Brava safaris in the Masai Mara, Amboseli, Lake Nakuru, Nairobi National Park, Serengeti and Ngorongoro Crater.",
    photo: PHOTOS.elephantKiliLeft.src,
    kicker: "Safaris from Nairobi",
  },
  "/sitemap": {
    title: "Site Directory & All Safari Pages",
    description:
      "Browse every safari package, park destination guide, country guide, rate card, XML sitemap and Markdown index for Cima Brava Adventures.",
  },
};

const cap = (v) => v.charAt(0).toUpperCase() + v.slice(1);
const stripPrice = (t) => t.replace(/\s*(?:from\s+)?\$\d[\d,]*(?:\s*(?:pp|per person))?/gi, "").trim();

for (const p of pages) {
  if (p.path.startsWith("/safari/")) {
    const s = safariBySlug.get(p.path.slice("/safari/".length));
    const title = seo.safariTitle(s);
    const description = seo.safariDescription(s);
    const where = s.country === "combined" ? "Kenya & Tanzania" : cap(s.country);
    metaByPath.set(p.path, { title, description, photo: s.image });
    shareSpecs.push({
      path: p.path,
      title: stripPrice(title),
      kicker: `${where} · ${seo.durationLabel(s.days)}`,
      photo: s.image,
    });
  } else if (p.path.startsWith("/destinations/")) {
    const d = destBySlug.get(p.path.slice("/destinations/".length));
    const related = seo.safarisForDestination(d);
    const fromPrice = related.length ? Math.min(...related.map((x) => x.price.low)) : null;
    const title = related.length
      ? `${d.name} Safari Packages & Guide, ${d.country}`
      : `${d.name} Safari Guide, ${d.country}`;
    const description = related.length
      ? seo.truncateText(
          `What to expect in ${d.name}, ${d.country}, when to visit, and ${related.length === 1 ? "our safari" : `the ${related.length} safaris`} visiting there from ${seo.usd(fromPrice)} per person.`,
          158,
        )
      : seo.truncateText(
          `What to expect in ${d.name}, ${d.country}, best time to visit (${d.bestTime}), wildlife highlights and custom private safaris from Nairobi.`,
          158,
        );
    metaByPath.set(p.path, { title, description, photo: d.image });
    shareSpecs.push({
      path: p.path,
      title: stripPrice(title),
      kicker: `${d.country} destination`,
      photo: d.image,
    });
  } else {
    const m = STATIC_META[p.path];
    metaByPath.set(p.path, m);
    if (p.index !== false) {
      shareSpecs.push({
        path: p.path,
        title: stripPrice(m.ogTitle || m.title),
        kicker: m.kicker || "Safaris from Nairobi",
        photo: m.photo,
      });
    }
  }
}

/* ---------- 1. Compute real per-route lastmod.json ---------- */

const lastmodMap = {};
for (const p of pages) {
  if (p.index === false) continue;
  lastmodMap[p.path] = lastmodForRoute(p.path);
}
fs.writeFileSync("src/data/lastmod.json", JSON.stringify(lastmodMap, null, 2) + "\n");

/* ---------- 2. Generate 41 OG share cards into public/og/*.jpg ---------- */

const defaultPhoto = [...PHOTO_META.values()][0];
for (const spec of shareSpecs) {
  const meta = PHOTO_META.get(spec.photo) || defaultPhoto;
  const sourceFile = resolveAssetFile(spec.photo);
  const relOut = spec.path === "/" ? "public/og/home.jpg" : `public/og${spec.path}.jpg`;
  await buildOgCard(sourceFile, {
    focus: meta.focus,
    title: spec.title,
    kicker: spec.kicker,
    domain: SITE_URL.replace("https://", ""),
    out: relOut,
  });
}
fs.copyFileSync("public/og/home.jpg", "public/og-image.jpeg");

/* ---------- 3. Generate Markdown docs, sitemap.md, llms.txt & llms-full.txt ---------- */

const today = new Date().toISOString().slice(0, 10);
const ctx = {
  date: today,
  safariPackages,
  allPackages,
  destinations,
  SEASONS,
  CONTACT_EMAIL,
  WHATSAPP_NUMBER,
  company,
  seo,
  SAFARI_CONTENT,
  DESTINATION_CONTENT,
  HUB_CONTENT,
  lastmodForRoute,
  metaByPath,
};

const profileSource = fs.readFileSync("COMPANY_PROFILE.md", "utf8");
ctx.companyProfile = refreshCompanyProfile(profileSource, ctx);
if (ctx.companyProfile !== profileSource.replace(/\r\n/g, "\n")) {
  fs.writeFileSync("COMPANY_PROFILE.md", ctx.companyProfile);
  console.log("COMPANY_PROFILE.md refreshed from package data");
}

const docs = buildDocuments(pages, metaByPath, ctx);
for (const doc of docs) {
  const out = path.join("public", doc.path.slice(1));
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, doc.body);
}
fs.writeFileSync("public/sitemap.md", sitemapMarkdown(pages, docs, ctx));
fs.writeFileSync("public/llms.txt", llmsTxt(pages, docs, ctx));
fs.writeFileSync("public/llms-full.txt", llmsFullTxt(docs, ctx));

console.log(
  `build-seo-artifacts: wrote ${Object.keys(lastmodMap).length} lastmod dates, ${shareSpecs.length} OG cards, ${docs.length} Markdown files, sitemap.md, llms.txt & llms-full.txt`,
);
