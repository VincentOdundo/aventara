import Link from "next/link";
import { Section, Breadcrumbs, FaqSection } from "../ui";
import {
  breadcrumbLd,
  faqLd,
  graph,
  hubCrumbs,
  hubFaqs,
  offerCatalogLd,
  safariListLd,
  webPageLd,
} from "../../lib/seo";
import { safariPackages, getCurrentSeason, getSafarisByCountry } from "../../data/safaris";
import { HUB_CONTENT } from "../../data/hubContent";
import { PHOTOS as P } from "../../data/photos";
import { Photo } from "../ui/Photo";
import { JsonLd } from "../seo/JsonLd";
import { SafarisFilterGrid } from "./SafarisFilterGrid";

const HERO_BY_COUNTRY = {
  kenya: P.elephantKiliLeft,
  tanzania: P.leopardTree,
  combined: P.kilimanjaro,
};

export function hubMetaForCountry(country) {
  return (
    {
      kenya: [
        "Kenya Budget Safari Packages & Prices (2–8 Days)",
        "Kenya budget safaris from 2 to 8 days with per-person prices for low and high season. Park fees, meals and transfers included.",
      ],
      tanzania: [
        "Tanzania Budget Safari Packages & Prices (3–6 Days)",
        "Serengeti, Ngorongoro, Tarangire and Lake Manyara safaris from 3 to 6 days, with per-person prices for low and high season.",
      ],
      combined: [
        "Kenya & Tanzania Combined Safaris (10–12 Days)",
        "Cross-border safaris from 10 to 12 days covering the Masai Mara, Amboseli, the Serengeti and Ngorongoro Crater in one booking.",
      ],
    }[country] || [
      "Kenya & Tanzania Safari Packages & Prices",
      "Every safari we run in Kenya and Tanzania, from a Nairobi half-day to 12 days across both countries, with prices for low and high season.",
    ]
  );
}

export function SafarisHubView({ country = null }) {
  const heroPhoto = HERO_BY_COUNTRY[country] || P.lionPack;
  const hubGuide = HUB_CONTENT[country || "all"] || HUB_CONTENT.all;
  const hubSeo = hubMetaForCountry(country);
  const crumbs = hubCrumbs(country);
  const faqs = hubFaqs(country);
  const baseSafaris = country ? getSafarisByCountry(country) : safariPackages;
  const pagePath = country ? `/safaris/${country}` : "/safaris";
  const breadcrumb = breadcrumbLd(crumbs, pagePath);
  const season = getCurrentSeason();

  const pageTitle =
    country === "kenya"
      ? "Kenya Budget Safari Packages"
      : country === "tanzania"
        ? "Tanzania Budget Safari Packages"
        : country === "combined"
          ? "Kenya & Tanzania Combined Safaris"
          : "Kenya & Tanzania Safari Packages";

  const pageDesc = country
    ? country === "combined"
      ? "Cross-border overland expeditions spanning Kenya and Tanzania via Namanga in one booking."
      : country === "kenya"
        ? "Daily shared and private 4x4 safaris from Nairobi covering Masai Mara, Amboseli, Lake Nakuru and Lake Naivasha."
        : "Northern Circuit 4x4 safaris from Arusha covering Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara."
    : "From Nairobi half-day tours and 2-day Mara escapes to 12-day cross-border safaris — compare seasonal USD rates, parks and itineraries.";

  const ld = graph(
    webPageLd({
      path: pagePath,
      title: hubSeo[0],
      description: hubSeo[1],
      image: heroPhoto.src,
      type: "CollectionPage",
      breadcrumbId: breadcrumb["@id"],
    }),
    breadcrumb,
    safariListLd(baseSafaris, hubSeo[0]),
    offerCatalogLd(baseSafaris, hubSeo[0]),
    faqLd(faqs),
  );

  return (
    <>
      <JsonLd id="page-jsonld" data={ld} />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden text-center bg-midnight-black">
        <Photo
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          focus={heroPhoto.focus}
          fill
          priority
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/70 via-transparent to-midnight-black/25"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-[0.4em] text-sunrise-yellow font-body font-bold mb-3 block drop-shadow-sm">
            {country
              ? country === "combined"
                ? "Cross-Border"
                : country.charAt(0).toUpperCase() + country.slice(1)
              : "East Africa"}
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-sand-cream tracking-[-0.02em] drop-shadow-md">
            {pageTitle}
          </h1>
          <p className="text-sand-cream/95 font-body mt-3 max-w-xl drop-shadow-sm">
            {pageDesc}
          </p>
          <Breadcrumbs crumbs={crumbs} tone="light" className="mt-6" />
        </div>
      </section>

      {/* Country Tabs */}
      <section className="bg-sand-cream border-b border-savannah-gold/25 sticky top-[64px] lg:top-[72px] z-30 editorial-shadow">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center gap-2 overflow-x-auto py-3">
          {[
            { label: "All Safaris", to: "/safaris" },
            { label: "Kenya", to: "/safaris/kenya" },
            { label: "Tanzania", to: "/safaris/tanzania" },
            { label: "Kenya & Tanzania", to: "/safaris/combined" },
            { label: "Nairobi Half-Day Tour", to: "/safari/half-day-nairobi-tour" },
          ].map((tab) => (
            <Link
              key={tab.to}
              href={tab.to}
              className={`px-5 py-2.5 rounded-full text-sm font-body whitespace-nowrap transition-all ${
                (tab.to === "/safaris" && !country) ||
                tab.to === `/safaris/${country}`
                  ? "bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-bold shadow-md"
                  : "text-safari-brown font-medium hover:bg-savannah-gold/15 hover:text-sunset-orange border border-transparent hover:border-savannah-gold/40"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Unique Collection Editorial Guide */}
      <section className="bg-sand-cream border-b border-savannah-gold/20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-10">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-safari-brown mb-4">
              {hubGuide.heading}
            </h2>
            <div className="space-y-3 text-sm md:text-[15px] font-body text-safari-brown/85 leading-relaxed">
              {hubGuide.paragraphs.map((p, idx) => (
                <p key={idx} data-speakable={idx === 0 ? "true" : undefined}>
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-body">
              {hubGuide.quickLinks.map((ql) => (
                <Link
                  key={ql.to}
                  href={ql.to}
                  className="font-bold text-sunset-orange hover:underline underline-offset-2"
                >
                  {ql.label} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <Section className="py-16 md:py-20 bg-sand-cream">
        <SafarisFilterGrid baseSafaris={baseSafaris} initialSeason={season} />

        <FaqSection
          faqs={faqs}
          title={`${pageTitle}: questions and answers`}
          className="mt-20 max-w-4xl"
        />
      </Section>
    </>
  );
}
