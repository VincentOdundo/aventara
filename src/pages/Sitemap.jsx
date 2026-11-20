import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Breadcrumbs, Section } from "../components/ui";
import { useSeo } from "../hooks/useSeo";
import {
  CATEGORIES,
  breadcrumbLd,
  durationLabel,
  graph,
  pageCrumbs,
  safariListLd,
  usd,
  webPageLd,
} from "../lib/seo";
import { allPackages, safariPackages } from "../data/safaris";
import { destinations } from "../data/destinations";

export default function Sitemap() {
  const title = "Site Directory & All Safari Pages";
  const description =
    "Browse every safari package, park destination guide, country guide, rate card, XML sitemap and Markdown index for Cima Brava Adventures.";
  const crumbs = pageCrumbs("Sitemap", "/sitemap");
  const breadcrumb = breadcrumbLd(crumbs, "/sitemap");

  useSeo({
    title,
    description,
    path: "/sitemap",
    markdown: false,
    noindex: true,
    jsonLd: graph(
      webPageLd({
        path: "/sitemap",
        title,
        description,
        type: "CollectionPage",
        breadcrumbId: breadcrumb["@id"],
      }),
      breadcrumb,
      safariListLd(safariPackages, "All published safari packages"),
    ),
  });

  const kenyaParks = destinations.filter((d) => d.country === "Kenya");
  const tanzaniaParks = destinations.filter((d) => d.country === "Tanzania");

  return (
    <Layout>
      <Section className="pt-32 pb-20 bg-sand-cream text-midnight-black font-body">
        <div className="max-w-5xl mx-auto">
          <Breadcrumbs crumbs={crumbs} className="mb-6" />
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-safari-brown mb-4">
            Sitemap &amp; Page Directory
          </h1>
          <p className="text-safari-brown/85 text-base max-w-2xl mb-12" data-speakable="true">
            Every public page on Cima Brava Adventures, including all{" "}
            {safariPackages.length} safari packages, {destinations.length} park
            guides, country guides, and machine-readable maps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-headline font-bold text-safari-brown mb-4">
                Safari Collections &amp; Country Guides
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/safaris" className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                    All Safari Packages ({safariPackages.length})
                  </Link>
                </li>
                {Object.entries(CATEGORIES).map(([key, cat]) => (
                  <li key={key}>
                    <Link to={cat.path} className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                      {cat.label} ({allPackages[key].length})
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/kenya" className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                    Kenya Safari Guide
                  </Link>
                </li>
                <li>
                  <Link to="/tanzania" className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                    Tanzania Safari Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-headline font-bold text-safari-brown mb-4">
                Company &amp; Machine-Readable Maps
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/company-profile" className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                    Company Profile &amp; 2026–2027 Rate Card
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                    About Cima Brava Adventures
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                    Safari Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                    Contact &amp; Safari Quotes
                  </Link>
                </li>
                <li>
                  <a href="/sitemap.xml" className="font-semibold text-sunset-orange hover:underline">
                    XML Sitemap (sitemap.xml)
                  </a>
                </li>
                <li>
                  <a href="/sitemap.md" className="font-semibold text-sunset-orange hover:underline">
                    Markdown Content Map (sitemap.md)
                  </a>
                </li>
                <li>
                  <a href="/llms.txt" className="font-semibold text-sunset-orange hover:underline">
                    LLM Guide (llms.txt)
                  </a>
                </li>
                <li>
                  <a href="/llms-full.txt" className="font-semibold text-sunset-orange hover:underline">
                    Full LLM Knowledge Base (llms-full.txt)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 bg-sand-cream border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-headline font-bold text-safari-brown mb-4">
              Safari Packages ({safariPackages.length})
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
              {safariPackages.map((s) => (
                <li key={s.slug} className="flex items-baseline justify-between gap-3 border-b border-savannah-gold/15 pb-1.5">
                  <Link to={`/safari/${s.slug}`} className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                    {s.title}
                  </Link>
                  <span className="text-xs text-safari-brown/75 shrink-0">
                    {durationLabel(s.days)} · from {usd(s.price.low)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-headline font-bold text-safari-brown mb-4">
                Kenya Parks &amp; Reserves ({kenyaParks.length})
              </h2>
              <ul className="space-y-2 text-sm">
                {kenyaParks.map((d) => (
                  <li key={d.slug}>
                    <Link to={`/destinations/${d.slug}`} className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-headline font-bold text-safari-brown mb-4">
                Tanzania Parks &amp; Reserves ({tanzaniaParks.length})
              </h2>
              <ul className="space-y-2 text-sm">
                {tanzaniaParks.map((d) => (
                  <li key={d.slug}>
                    <Link to={`/destinations/${d.slug}`} className="font-semibold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline">
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
