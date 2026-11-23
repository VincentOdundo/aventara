import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://cimabravasafaris.co.ke";

function slugsIn(file) {
  return [...fs.readFileSync(file, "utf8").matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map(
    (m) => m[1],
  );
}

const packageDir = path.join(process.cwd(), "src/data/packages");
const safariSlugs = fs
  .readdirSync(packageDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .flatMap((d) =>
    fs
      .readdirSync(path.join(packageDir, d.name))
      .filter((f) => f.endsWith(".js") && f !== "index.js")
      .flatMap((f) => slugsIn(path.join(packageDir, d.name, f))),
  );
const destinationSlugs = slugsIn(path.join(process.cwd(), "src/data/destinations.js"));

const markdownCanonicalRoutes = [
  { md: "/index.md", canonical: "/" },
  { md: "/safaris.md", canonical: "/safaris" },
  { md: "/safaris/kenya.md", canonical: "/safaris/kenya" },
  { md: "/safaris/tanzania.md", canonical: "/safaris/tanzania" },
  { md: "/safaris/combined.md", canonical: "/safaris/combined" },
  ...safariSlugs.map((slug) => ({ md: `/safari/${slug}.md`, canonical: `/safari/${slug}` })),
  { md: "/destinations.md", canonical: "/destinations" },
  ...destinationSlugs.map((slug) => ({
    md: `/destinations/${slug}.md`,
    canonical: `/destinations/${slug}`,
  })),
  { md: "/kenya.md", canonical: "/kenya" },
  { md: "/tanzania.md", canonical: "/tanzania" },
  { md: "/company-profile.md", canonical: "/company-profile" },
  { md: "/about.md", canonical: "/about" },
  { md: "/contact.md", canonical: "/contact" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/safaris/nairobi",
        destination: "/safari/half-day-nairobi-tour",
        statusCode: 301,
      },
      {
        source: "/safaris/nairobi.md",
        destination: "/safari/half-day-nairobi-tour.md",
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/sitemap.xsl",
        headers: [{ key: "Content-Type", value: "application/xslt+xml; charset=utf-8" }],
      },
      {
        source: "/(.*)\\.md",
        headers: [{ key: "Content-Type", value: "text/markdown; charset=utf-8" }],
      },
      {
        source: "/llms.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
      },
      {
        source: "/llms-full.txt",
        headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
      },
      ...markdownCanonicalRoutes.map(({ md, canonical }) => ({
        source: md,
        headers: [
          {
            key: "Link",
            value: `<${SITE_URL}${canonical}>; rel="canonical"`,
          },
        ],
      })),
    ];
  },
};

export default nextConfig;
