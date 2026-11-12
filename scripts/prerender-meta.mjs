// Runs after `vite build`. Writes one HTML file per route into dist/, each with
// its own <title>, description, canonical URL, share tags and structured data.
//
// Why: the site is a single-page app, so without this every URL serves the
// same head. Link previews (WhatsApp, Facebook, X) and many crawlers do not run
// JavaScript, so they would show the home page's title for every safari.
// Titles here mirror the useSeo() calls in src/pages.
import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://cimabravasafaris.co.ke";
const SITE_NAME = "Cima Brava Adventures";
const usd = (n) => `$${n.toLocaleString("en-US")}`;

const loadPackage = (file) => {
  const src = fs
    .readFileSync(file, "utf8")
    .replace(/^import .*$/gm, "")
    .replace(/export const \w+ =/, "return");
  return new Function("heroImg", src)("");
};

const packageDir = "src/data/packages";
const safaris = fs
  .readdirSync(packageDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .flatMap((d) =>
    fs
      .readdirSync(path.join(packageDir, d.name))
      .filter((f) => f.endsWith(".js") && f !== "index.js")
      .map((f) => loadPackage(path.join(packageDir, d.name, f))),
  );

const destSrc = fs.readFileSync("src/data/destinations.js", "utf8");
const destinations = [...destSrc.matchAll(/slug:\s*"([^"]+)",\s*name:\s*"([^"]+)",\s*country:\s*"([^"]+)"/g)].map(
  ([, slug, name, country]) => ({ slug, name, country }),
);

const safariJsonLd = (s) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: s.title,
  description: s.subtitle,
  url: `${SITE_URL}/safari/${s.slug}`,
  touristType: "Safari",
  itinerary: {
    "@type": "ItemList",
    itemListElement: (s.itinerary || []).map((d) => ({ "@type": "ListItem", position: d.day, name: d.destination })),
  },
  provider: { "@type": "TravelAgency", name: SITE_NAME, url: SITE_URL },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: s.price.low,
    highPrice: s.price.high,
    url: `${SITE_URL}/safari/${s.slug}`,
  },
});

const routes = [
  ["/safaris", "All Safari Packages & Prices", "Every safari we run in Kenya and Tanzania, from a Nairobi half-day to 12 days across both countries, with prices for low and high season."],
  ["/safaris/kenya", "Kenya Safari Packages & Prices", "Kenya budget safaris from 2 to 8 days with per-person prices for low and high season. Park fees, meals and transfers included."],
  ["/safaris/tanzania", "Tanzania Safari Packages & Prices", "Serengeti, Ngorongoro, Tarangire and Lake Manyara safaris from 3 to 6 days, with per-person prices for low and high season."],
  ["/safaris/combined", "Kenya & Tanzania Combined Safaris", "Cross-border safaris from 10 to 12 days covering the Masai Mara, Amboseli, the Serengeti and Ngorongoro Crater in one booking."],
  ["/safaris/nairobi", "Nairobi Day Trips", "Short wildlife and city outings in Nairobi for stopovers and free days."],
  ["/destinations", "Safari Destinations in Kenya & Tanzania", "The parks and reserves on our routes: Masai Mara, Amboseli, Lake Nakuru, Lake Naivasha, Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara."],
  ["/kenya", "Kenya Safaris", "Budget 4x4 safaris in Kenya from 2 to 8 days: Masai Mara, Amboseli, Lake Nakuru and Lake Naivasha, with daily departures from Nairobi."],
  ["/tanzania", "Tanzania Safaris", "Northern Tanzania safaris from 3 to 6 days: Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara, starting in Arusha."],
  ["/about", "About Us", "Cima Brava Adventures is a Nairobi-based safari operator running shared and private 4x4 safaris across Kenya and Tanzania."],
  ["/contact", "Contact & Safari Quotes", "Send your travel dates and group size by WhatsApp or email. We reply within 24 hours with availability, the final price and a day-by-day plan."],
  ["/gallery", "Safari Photo Gallery", "Photos from our safaris in the Masai Mara, Amboseli, Lake Nakuru, Nairobi National Park and northern Tanzania."],
  ["/company-profile", "Company Profile & 2026–2027 Safari Rates", "Who we are, what every safari price includes, the full 2026–2027 rate card and every itinerary day by day. Download the PDF."],
  ...safaris.map((s) => [
    `/safari/${s.slug}`,
    `${s.title} from ${usd(s.price.low)}`,
    `${s.subtitle} From ${usd(s.price.low)} per person with park fees, accommodation, meals and transfers included.`,
    safariJsonLd(s),
  ]),
  ...destinations.map((d) => [
    `/destinations/${d.slug}`,
    `${d.name} Safaris, ${d.country}`,
    `What to expect in ${d.name}, ${d.country}, and the safaris we run there with prices for low and high season.`,
  ]),
];

const esc = (v) => String(v).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const setMeta = (html, attr, key, value) => {
  const re = new RegExp(`(<meta\\s+${attr}="${key}"\\s+content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`meta ${key} not found in dist/index.html`);
  return html.replace(re, `$1${esc(value)}$2`);
};

const template = fs.readFileSync("dist/index.html", "utf8");
for (const [route, title, description, jsonLd] of routes) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = SITE_URL + route;
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(fullTitle)}</title>`);
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "property", "og:title", fullTitle);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "name", "twitter:title", fullTitle);
  html = setMeta(html, "name", "twitter:description", description);
  html = setMeta(html, "name", "twitter:url", url);
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  if (jsonLd) {
    html = html.replace(
      "</head>",
      `  <script type="application/ld+json" id="page-jsonld">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>\n  </head>`,
    );
  }
  const out = path.join("dist", route, "index.html");
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}
console.log(`prerendered head for ${routes.length} routes`);
