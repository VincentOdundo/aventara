import { useEffect } from "react";
import { SITE_URL, SITE_NAME, absoluteUrl, safariLd } from "../lib/seo";

export { SITE_URL, SITE_NAME };
/** Kept for existing imports; the builder now lives in src/lib/seo.js. */
export const safariJsonLd = safariLd;

const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpeg`;
const DEFAULT_IMAGE_ALT = "Wildlife on safari in East Africa with Cima Brava Adventures";
const INDEXABLE = "index, follow, max-image-preview:large, max-snippet:-1";
const NO_MARKDOWN_PATHS = new Set(["/gallery", "/sitemap", "/404"]);

function setMeta(selector, attr, key, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(selector, rel, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  for (const [k, v] of Object.entries(attrs)) {
    el.setAttribute(k, v);
  }
}

/** The full set of head values for a page, shared by browser and prerender. */
export function resolveSeo({
  title,
  description,
  path = "/",
  jsonLd = null,
  image = null,
  imageAlt = null,
  noindex = false,
  markdown = true,
}) {
  const branded = `${title} | ${SITE_NAME}`;
  const shortBranded = `${title} | Cima Brava`;
  const resolvedTitle = title.includes(SITE_NAME)
    ? title
    : branded.length <= 70
      ? branded
      : shortBranded.length <= 68
        ? shortBranded
        : title;

  const normalizedPath = path === "/" ? "/" : path;
  const markdownUrl =
    !noindex && markdown && !NO_MARKDOWN_PATHS.has(normalizedPath)
      ? normalizedPath === "/"
        ? `${SITE_URL}/index.md`
        : `${SITE_URL}${normalizedPath}.md`
      : null;

  return {
    title: resolvedTitle,
    description,
    url: `${SITE_URL}${normalizedPath}`,
    image: image ? absoluteUrl(image) : DEFAULT_IMAGE,
    imageAlt: imageAlt || `${title} — ${SITE_NAME}`,
    robots: noindex ? "noindex, follow" : INDEXABLE,
    markdownUrl,
    jsonLd: jsonLd ? JSON.stringify(jsonLd) : "",
  };
}

/**
 * Gives each page its own title, description, canonical URL, share tags,
 * Markdown alternate discovery link and JSON-LD structured data.
 */
export function useSeo(options = {}) {
  const { title, description, path = "/" } = options;
  const seo = title ? resolveSeo(options) : null;

  if (seo && typeof document === "undefined") {
    globalThis.__SEO__ = seo;
  }

  const { url, image, imageAlt, robots, markdownUrl, jsonLd: ld } = seo || {};
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
    setMeta('meta[property="og:image:alt"]', "property", "og:image:alt", imageAlt || DEFAULT_IMAGE_ALT);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
    setMeta('meta[name="twitter:image:alt"]', "name", "twitter:image:alt", imageAlt || DEFAULT_IMAGE_ALT);

    setLink('link[rel="canonical"]', "canonical", { href: url });

    const mdSelector = 'link[rel="alternate"][type="text/markdown"]';
    if (markdownUrl) {
      setLink(mdSelector, "alternate", {
        type: "text/markdown",
        href: markdownUrl,
        title: "Markdown version",
      });
    } else {
      document.head.querySelector(mdSelector)?.remove();
    }

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
  }, [fullTitle, description, path, url, image, imageAlt, robots, markdownUrl, ld]);
}
