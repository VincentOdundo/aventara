import { SITE_URL } from "../lib/seo";
import { safariPackages } from "../data/safaris";
import { destinations } from "../data/destinations";
import { PHOTOS as P } from "../data/photos";
import lastmodMap from "../data/lastmod.json";

const HERO_BY_ROUTE = {
  "/": P.elephantKiliRight.src,
  "/safaris": P.lionPack.src,
  "/safaris/kenya": P.elephantKiliLeft.src,
  "/safaris/tanzania": P.leopardTree.src,
  "/safaris/combined": P.kilimanjaro.src,
  "/destinations": P.lionVehicle.src,
  "/kenya": P.sunsetAcacia.src,
  "/tanzania": P.elephantKiliRight.src,
  "/company-profile": P.elephantKiliRight.src,
  "/about": P.tuskerKili.src,
  "/contact": P.giraffeSunset.src,
  "/gallery": P.elephantKiliLeft.src,
};

const absImg = (src) =>
  !src ? undefined : /^https?:/.test(src) ? src : `${SITE_URL}${src.startsWith("/") ? src : `/${src}`}`;

export default function sitemap() {
  const staticEntries = [
    { path: "/", priority: 1.0 },
    { path: "/safaris", priority: 0.9 },
    { path: "/safaris/kenya", priority: 0.8 },
    { path: "/safaris/tanzania", priority: 0.8 },
    { path: "/safaris/combined", priority: 0.8 },
  ];

  const safariEntries = safariPackages.map((s) => ({
    path: `/safari/${s.slug}`,
    priority: 0.8,
    image: s.image,
  }));

  const destEntries = destinations.map((d) => ({
    path: `/destinations/${d.slug}`,
    priority: 0.6,
    image: d.image,
  }));

  const tailEntries = [
    { path: "/destinations", priority: 0.7 },
    { path: "/kenya", priority: 0.6 },
    { path: "/tanzania", priority: 0.6 },
    { path: "/company-profile", priority: 0.7 },
    { path: "/about", priority: 0.5 },
    { path: "/contact", priority: 0.6 },
    { path: "/gallery", priority: 0.4 },
  ];

  return [
    ...staticEntries,
    ...safariEntries,
    tailEntries[0],
    ...destEntries,
    ...tailEntries.slice(1),
  ].map((entry) => {
    const img = absImg(entry.image || HERO_BY_ROUTE[entry.path]);
    return {
      url: entry.path === "/" ? SITE_URL : `${SITE_URL}${entry.path}`,
      lastModified: lastmodMap[entry.path] || "2026-11-23",
      priority: entry.priority,
      ...(img ? { images: [img] } : {}),
    };
  });
}
