import { useEffect } from "react";
import { SITE_URL, SITE_NAME, absoluteUrl, safariLd } from "../lib/seo";

export { SITE_URL, SITE_NAME };
/** Kept for existing imports; the builder now lives in src/lib/seo.js. */
export const safariJsonLd = safariLd;

const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpeg`;
const INDEXABLE = "index, follow, max-image-preview:large, max-snippet:-1";

function setMeta(selector, attr, key, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** The full set of head values for a page, shared by browser and prerender. */
export function resolveSeo({
  title,
  description,
  path = "/",
  jsonLd = null,
  image = null,
  noindex = false,
}) {
  // Search results show the site name separately, so a long title keeps its
  // own words (and its price) instead of spending 24 characters on the brand.
  const branded = `${title} | ${SITE_NAME}`;
  return {
    title: title.includes(SITE_NAME) || branded.length > 70 ? title : branded,
    description,
    url: `${SITE_URL}${path === "/" ? "/" : path}`,
    image: image ? absoluteUrl(image) : DEFAULT_IMAGE,
    robots: noindex ? "noindex, follow" : INDEXABLE,
    jsonLd: jsonLd ? JSON.stringify(jsonLd) : "",
  };
}

/**
 * Gives each page its own title, description, canonical URL, share tags and
 * (optionally) structured data, so search results and link previews describe
 * the page that was actually opened.
 *
 * During the static prerender there is no document: the values are handed to
 * scripts/prerender.mjs through globalThis.__SEO__, which writes them into the
 * HTML file for the route. One call, one source for both.
 */
export function useSeo(options = {}) {
  const { title, description, path = "/" } = options;
  const seo = title ? resolveSeo(options) : null;

  if (seo && typeof document === "undefined") {
    globalThis.__SEO__ = seo;
  }

  const { url, image, robots, jsonLd: ld } = seo || {};
  const fullTitle = seo ? seo.title : "";

  useEffect(() => {
    if (!fullTitle) return;

    document.title = fullTitle;
    if (description) {
      setMeta('meta[name="description"]', "name", "description", description);
      setMeta('meta[property="og:description"]', "property", "og:description", description);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }
    setMeta('meta[name="robots"]', "name", "robots", robots);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:url"]', "name", "twitter:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", image);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    let script = document.getElementById("page-jsonld");
    if (ld) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "page-jsonld";
        document.head.appendChild(script);
      }
      script.textContent = ld;
    } else if (script) {
      script.remove();
    }
  }, [fullTitle, description, path, url, image, robots, ld]);
}
