import { BRAND_NAME } from "../data/company";
import { SITE_NAME, SITE_URL, ogImageUrl } from "./seo";

/**
 * Builds a complete Next.js App Router Metadata object with canonical URL,
 * Markdown alternate discovery, robots directives, 1200x630 OpenGraph share
 * card, and Twitter summary_large_image tags.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  imageAlt,
  noindex = false,
  markdown = true,
  ogType = "website",
}) {
  const ogImg = noindex ? ogImageUrl("/") : ogImageUrl(path);
  const fullTitle =
    title.includes(SITE_NAME) || title.includes("Cima Brava") || title.length > 52
      ? { absolute: title.includes("Cima Brava") ? title : `${title} | Cima Brava` }
      : title;
  const socialTitle =
    typeof fullTitle === "string" ? `${title} | ${SITE_NAME}` : fullTitle.absolute;

  const altTypes =
    markdown && !noindex
      ? { "text/markdown": path === "/" ? "/index.md" : `${path}.md` }
      : undefined;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: path,
      ...(altTypes ? { types: altTypes } : {}),
    },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: ogType,
      siteName: BRAND_NAME,
      locale: "en_US",
      url: `${SITE_URL}${path}`,
      title: socialTitle,
      description,
      images: [
        {
          url: ogImg,
          width: 1200,
          height: 630,
          type: "image/jpeg",
          alt: imageAlt || `${title} — ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [
        {
          url: ogImg,
          alt: imageAlt || `${title} — ${SITE_NAME}`,
        },
      ],
    },
  };
}
