import { useEffect } from "react";

export const SITE_URL = "https://cimabravasafaris.co.ke";
export const SITE_NAME = "Cima Brava Adventures";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpeg`;

function setMeta(selector, attr, key, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Gives each page its own title, description, canonical URL, share tags and
 * (optionally) structured data, so search results and link previews describe
 * the page that was actually opened.
 */
export function useSeo({ title, description, path = "/", jsonLd = null } = {}) {
  const ld = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    if (!title) return;
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.title = fullTitle;
    if (description) {
      setMeta('meta[name="description"]', "name", "description", description);
      setMeta('meta[property="og:description"]', "property", "og:description", description);
      setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    }
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[property="og:url"]', "property", "og:url", url);
    setMeta('meta[name="twitter:url"]', "name", "twitter:url", url);
    setMeta('meta[property="og:image"]', "property", "og:image", DEFAULT_IMAGE);

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
  }, [title, description, path, ld]);
}

/** Structured data for one safari: what it is, who runs it, what it costs. */
export function safariJsonLd(safari) {
  if (!safari) return null;
  const url = `${SITE_URL}/safari/${safari.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: safari.title,
    description: safari.subtitle,
    url,
    touristType: "Safari",
    itinerary: {
      "@type": "ItemList",
      itemListElement: (safari.itinerary || []).map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: day.destination,
      })),
    },
    provider: {
      "@type": "TravelAgency",
      name: SITE_NAME,
      url: SITE_URL,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: safari.price.low,
      highPrice: safari.price.high,
      url,
    },
  };
}
