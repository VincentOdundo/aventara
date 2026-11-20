// Server entry for the static prerender. `vite build --ssr` bundles this file
// and scripts/prerender.mjs calls render() once per route at build time.
import React from "react";
import { prerenderToNodeStream } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./App.jsx";

// Data and copy builders, re-exported so the build scripts read the same
// modules the pages do instead of parsing source files.
export {
  safariPackages,
  allPackages,
  SEASONS,
  CONTACT_EMAIL,
  WHATSAPP_NUMBER,
  SOCIAL_LINKS,
} from "./data/safaris";
export { destinations } from "./data/destinations";
export { PHOTO_META } from "./data/photos";
export * as company from "./data/company";
export * as seo from "./lib/seo";

/** Renders one route to HTML and returns it with the head values it asked for. */
export async function render(url) {
  globalThis.__SEO__ = null;
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </React.StrictMode>,
  );
  const chunks = [];
  for await (const chunk of prelude) chunks.push(Buffer.from(chunk));
  return { html: Buffer.concat(chunks).toString("utf8"), seo: globalThis.__SEO__ };
}
