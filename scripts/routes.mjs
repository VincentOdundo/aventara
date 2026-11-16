// The public URL inventory, shared by the sitemap generator and the prerender.
// One list, so the XML sitemap, the HTML files, the Markdown versions and the
// Vercel headers cannot disagree about which pages exist.

export const SITE_URL = "https://cimabravasafaris.co.ke";

/** Pages that are not generated from safari or destination data. */
export const STATIC_PAGES = [
  { path: "/", priority: "1.0", topic: "Company" },
  { path: "/safaris", priority: "0.9", topic: "Safari packages" },
  { path: "/safaris/kenya", priority: "0.8", topic: "Safari packages" },
  { path: "/safaris/tanzania", priority: "0.8", topic: "Safari packages" },
  { path: "/safaris/combined", priority: "0.8", topic: "Safari packages" },
  { path: "/safaris/nairobi", priority: "0.7", topic: "Safari packages" },
  { path: "/destinations", priority: "0.7", topic: "Destinations" },
  { path: "/kenya", priority: "0.6", topic: "Destinations" },
  { path: "/tanzania", priority: "0.6", topic: "Destinations" },
  { path: "/company-profile", priority: "0.7", topic: "Company" },
  { path: "/about", priority: "0.5", topic: "Company" },
  { path: "/contact", priority: "0.6", topic: "Company" },
  // The gallery is photographs only, so it has no Markdown version.
  { path: "/gallery", priority: "0.4", topic: "Company", markdown: false },
];

export const safariPage = (slug) => ({
  path: `/safari/${slug}`,
  priority: "0.8",
  topic: "Safari packages",
});

export const destinationPage = (slug) => ({
  path: `/destinations/${slug}`,
  priority: "0.6",
  topic: "Destinations",
});

/** Every public page, in sitemap order. */
export function allPages(safariSlugs, destinationSlugs) {
  const hubs = STATIC_PAGES.filter((p) => p.path === "/" || p.path.startsWith("/safaris"));
  const rest = STATIC_PAGES.filter((p) => !hubs.includes(p));
  const destinationsHub = rest.find((p) => p.path === "/destinations");
  return [
    ...hubs,
    ...safariSlugs.map(safariPage),
    destinationsHub,
    ...destinationSlugs.map(destinationPage),
    ...rest.filter((p) => p !== destinationsHub),
  ];
}

/** Where a page's Markdown version lives, or null when it has none. */
export function markdownPath(page) {
  if (page.markdown === false) return null;
  return page.path === "/" ? "/index.md" : `${page.path}.md`;
}

/** dist-relative file for a page's HTML. */
export const htmlFile = (path) =>
  path === "/" ? "index.html" : `${path.slice(1)}/index.html`;
