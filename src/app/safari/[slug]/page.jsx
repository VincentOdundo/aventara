import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  CheckCircle,
  XCircle,
  Utensils,
  Hotel,
  ChevronDown,
  Users,
  Compass,
  Truck,
  Clock,
  Briefcase,
} from "lucide-react";
import { buildMetadata } from "../../../lib/metadata";
import {
  SITE_URL,
  breadcrumbLd,
  destinationsForSafari,
  durationLabel as lengthOf,
  faqLd,
  graph,
  safariCrumbs,
  safariDescription,
  safariFaqs,
  safariLd,
  safariTitle,
  similarSafaris,
  usd,
  webPageLd,
} from "../../../lib/seo";
import {
  safariPackages,
  getSafariBySlug,
  getCurrentSeason,
  SEASONS,
} from "../../../data/safaris";
import { SAFARI_CONTENT } from "../../../data/safariContent";
import { Photo } from "../../../components/ui/Photo";
import { TripAdvisorCard } from "../../../components/ui/TripAdvisorCard";
import { AnimatedSection, Breadcrumbs, FaqSection } from "../../../components/ui";
import { JsonLd } from "../../../components/seo/JsonLd";
import { SafariBookingCard } from "../../../components/safari/SafariBookingCard";

export const dynamicParams = false;

export function generateStaticParams() {
  return safariPackages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);
  if (!safari) return {};
  return buildMetadata({
    title: safariTitle(safari),
    description: safariDescription(safari),
    path: `/safari/${safari.slug}`,
    imageAlt: `${safari.title} — ${safari.destinations.join(", ")}`,
  });
}

export default async function SafariDetailPage({ params }) {
  const { slug } = await params;
  const safari = getSafariBySlug(slug);
  if (!safari) notFound();

  const crumbs = safariCrumbs(safari);
  const faqs = safariFaqs(safari);
  const editorial = SAFARI_CONTENT[safari.slug];
  const safariPath = `/safari/${safari.slug}`;
  const breadcrumb = breadcrumbLd(crumbs, safariPath);
  const title = safariTitle(safari);
  const desc = safariDescription(safari);
  const season = getCurrentSeason();

  const durationLabel = safari.days === 0.5 ? "Half Day" : `${safari.days} Days`;
  const maxGroupLabel =
    safari.maxGroupSize ||
    (safari.days < 1
      ? "Private"
      : safari.difficulty === "Budget" && safari.country !== "nairobi"
        ? "Max 7"
        : "Max 6");
  const mealsLabel = safari.itinerary.every((day) => /^none/i.test(day.meals))
    ? "Not included"
    : safari.days < 1
      ? "As listed"
      : "Full Board";
  const parks = destinationsForSafari(safari);
  const related = similarSafaris(safari);

  const ld = graph(
    webPageLd({
      path: safariPath,
      title,
      description: desc,
      image: safari.image,
      mainEntityId: `${SITE_URL}${safariPath}#trip`,
      breadcrumbId: breadcrumb["@id"],
    }),
    safariLd(safari),
    breadcrumb,
    faqLd(faqs),
  );

  return (
    <>
      <JsonLd id="page-jsonld" data={ld} />

      {/* Hero Banner */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-midnight-black">
        <Photo
          src={safari.image}
          fill
          priority
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/70 via-transparent to-midnight-black/25"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
          <Breadcrumbs crumbs={crumbs} tone="light" className="mb-5" />
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-safari-brown/90 text-sand-cream border border-savannah-gold/40 px-4 py-1.5 rounded-full text-xs font-body font-bold capitalize">
              {safari.country === "combined" ? "Kenya & Tanzania" : safari.country}
            </span>
            <span className="bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-4 py-1.5 rounded-full text-xs font-body font-bold shadow-md">
              {durationLabel}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-sand-cream tracking-[-0.02em] mb-2 drop-shadow-md">
            {safari.title}
          </h1>
          <p className="text-sand-cream/95 font-body text-lg max-w-xl drop-shadow-sm">
            {safari.subtitle}
          </p>
        </div>
      </section>

      {/* Sticky Nav Bar */}
      <section className="bg-sand-cream editorial-shadow sticky top-[64px] lg:top-[72px] z-30 border-b border-savannah-gold/25">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center gap-8 overflow-x-auto py-3 text-sm font-body">
          <a href="#overview" className="font-bold text-sunset-orange whitespace-nowrap">
            Overview
          </a>
          <a href="#itinerary" className="font-medium text-safari-brown hover:text-sunset-orange transition-colors whitespace-nowrap">
            Itinerary
          </a>
          <a href="#seasonal-rates" className="font-medium text-safari-brown hover:text-sunset-orange transition-colors whitespace-nowrap">
            Seasonal Pricing
          </a>
          <a href="#included" className="font-medium text-safari-brown hover:text-sunset-orange transition-colors whitespace-nowrap">
            What&apos;s Included
          </a>
          <a href="#booking" className="font-medium text-safari-brown hover:text-sunset-orange transition-colors whitespace-nowrap">
            Book Now
          </a>
          <a href="#faq" className="font-medium text-safari-brown hover:text-sunset-orange transition-colors whitespace-nowrap">
            Questions
          </a>
        </div>
      </section>

      <div className="bg-sand-cream">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <AnimatedSection id="overview" className="mb-14 scroll-mt-[120px]">
                <h2 className="text-3xl font-headline font-bold text-safari-brown mb-6">
                  Why Choose This Route
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-4 text-center shadow-sm">
                    <Calendar size={20} className="mx-auto text-sunset-orange mb-2" />
                    <p className="text-xs font-body text-safari-brown/75 font-bold uppercase">
                      Duration
                    </p>
                    <p className="font-headline font-bold text-lg text-safari-brown">
                      {durationLabel}
                    </p>
                  </div>
                  <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-4 text-center shadow-sm">
                    <MapPin size={20} className="mx-auto text-sunset-orange mb-2" />
                    <p className="text-xs font-body text-safari-brown/75 font-bold uppercase">
                      Parks
                    </p>
                    <p className="font-headline font-bold text-lg text-safari-brown">
                      {[...new Set(safari.destinations)].length}
                    </p>
                  </div>
                  <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-4 text-center shadow-sm">
                    <Utensils size={20} className="mx-auto text-sunset-orange mb-2" />
                    <p className="text-xs font-body text-safari-brown/75 font-bold uppercase">
                      Meals
                    </p>
                    <p className="font-headline font-bold text-lg text-safari-brown">
                      {mealsLabel}
                    </p>
                  </div>
                  <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-4 text-center shadow-sm">
                    <Users size={20} className="mx-auto text-sunset-orange mb-2" />
                    <p className="text-xs font-body text-safari-brown/75 font-bold uppercase">
                      Group
                    </p>
                    <p className="font-headline font-bold text-lg text-safari-brown">
                      {maxGroupLabel}
                    </p>
                  </div>
                </div>

                {editorial?.overviewParagraphs && (
                  <div className="space-y-4 mb-8 text-safari-brown/90 font-body text-[15px] leading-relaxed">
                    {editorial.overviewParagraphs.map((para, i) => (
                      <p key={i} data-speakable={i === 0 ? "true" : undefined}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {(parks.length > 0 || related.length > 0) && (
                  <div className="mb-8 rounded-2xl border border-savannah-gold/35 bg-savannah-gold/10 px-5 py-4 text-sm leading-relaxed text-safari-brown font-body">
                    {editorial?.relatedCopy && <p className="mb-2.5">{editorial.relatedCopy}</p>}
                    <p className="text-xs text-safari-brown/85 flex flex-wrap items-center gap-x-2 gap-y-1">
                      {parks.length > 0 && (
                        <>
                          <span className="font-bold uppercase tracking-wider text-sunset-orange">
                            Park guides:
                          </span>
                          {parks.map((park, idx) => (
                            <React.Fragment key={park.slug}>
                              <Link
                                href={`/destinations/${park.slug}`}
                                className="font-bold text-safari-brown underline decoration-savannah-gold underline-offset-2 hover:text-sunset-orange"
                              >
                                {park.name}
                              </Link>
                              {idx < parks.length - 1 && <span>·</span>}
                            </React.Fragment>
                          ))}
                        </>
                      )}
                      {related.length > 0 && (
                        <>
                          <span className="font-bold uppercase tracking-wider text-sunset-orange ml-1">
                            Compare routes:
                          </span>
                          {related.map((other, idx) => (
                            <React.Fragment key={other.slug}>
                              <Link
                                href={`/safari/${other.slug}`}
                                className="font-bold text-safari-brown underline decoration-savannah-gold underline-offset-2 hover:text-sunset-orange"
                              >
                                {other.title}
                              </Link>
                              {idx < related.length - 1 && <span>·</span>}
                            </React.Fragment>
                          ))}
                        </>
                      )}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  {safari.highlights.map((h, idx) => (
                    <span
                      key={idx}
                      className="bg-sand-cream border-2 border-savannah-gold text-safari-brown px-4 py-2 rounded-full text-xs font-body font-bold"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              {/* Always-Visible Seasonal Pricing Table */}
              <div
                id="seasonal-rates"
                className="mb-14 scroll-mt-[120px] bg-sand-cream border border-savannah-gold/40 rounded-2xl p-6 shadow-sm"
              >
                <h2 className="text-2xl font-headline font-bold text-safari-brown mb-2">
                  Per-Person Rates by Season (USD)
                </h2>
                <p className="text-sm font-body text-safari-brown/80 mb-5">
                  All rates below are per person in US dollars for {safari.title}.
                  Multi-day sharing rates apply when two or more travellers share a
                  room or tent.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm font-body">
                    <thead>
                      <tr className="border-b border-savannah-gold/40 text-xs uppercase tracking-wider text-safari-brown/80">
                        <th className="py-3 pr-4 font-bold">Season</th>
                        <th className="py-3 pr-4 font-bold">Travel Dates</th>
                        <th className="py-3 pr-4 font-bold">2+ Sharing (per person)</th>
                        <th className="py-3 font-bold">Single Room (1 traveller)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-savannah-gold/20 text-safari-brown">
                      <tr>
                        <td className="py-3 pr-4 font-bold">Low Season</td>
                        <td className="py-3 pr-4">{SEASONS.low.dates}</td>
                        <td className="py-3 pr-4 font-bold text-sunset-orange">
                          {usd(safari.price.low)}
                        </td>
                        <td className="py-3 font-semibold">
                          {safari.singlePrice
                            ? usd(safari.singlePrice.low)
                            : usd(safari.price.low)}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 font-bold">High Season</td>
                        <td className="py-3 pr-4">{SEASONS.high.dates}</td>
                        <td className="py-3 pr-4 font-bold text-sunset-orange">
                          {usd(safari.price.high)}
                        </td>
                        <td className="py-3 font-semibold">
                          {safari.singlePrice
                            ? usd(safari.singlePrice.high)
                            : usd(safari.price.high)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Itinerary (native <details> elements — SSR readable with zero JS) */}
              <div
                id="itinerary"
                className="mb-14 scroll-mt-[120px] md:scroll-mt-[136px] lg:scroll-mt-[150px]"
              >
                <h2 className="text-3xl font-headline font-bold text-safari-brown mb-8">
                  Day-by-Day Itinerary
                </h2>
                <div className="space-y-3">
                  {safari.itinerary.map((day, idx) => (
                    <details
                      key={day.day}
                      open={idx === 0}
                      className="group bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden shadow-sm"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-savannah-gold/10 transition-colors">
                        <div className="flex items-center gap-5">
                          <span className="text-3xl font-headline font-bold text-savannah-gold w-12">
                            {String(day.day).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="text-lg font-headline font-bold text-safari-brown">
                              {day.title}
                            </h3>
                            <p className="text-xs font-body text-sunset-orange font-semibold mt-0.5 flex items-center gap-1.5">
                              <MapPin size={12} /> {day.destination}
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          size={18}
                          className="text-safari-brown transition-transform duration-300 group-open:rotate-180"
                        />
                      </summary>
                      <div className="px-6 pb-6 flex flex-col md:flex-row gap-6">
                        {day.image && (
                          <div className="md:w-1/3 shrink-0 rounded-xl overflow-hidden h-48 relative border border-savannah-gold/25">
                            <Photo
                              src={day.image}
                              fill
                              sizes="(max-width: 768px) 100vw, 250px"
                              className="w-full h-full"
                            />
                          </div>
                        )}
                        <div className="flex-1 space-y-4">
                          <p className="text-safari-brown/85 font-body text-sm leading-relaxed whitespace-pre-line">
                            {day.description}
                          </p>
                          <div className="flex flex-wrap gap-3 text-xs font-body">
                            <span className="flex items-center gap-1.5 bg-sand-cream border border-savannah-gold/40 text-safari-brown px-3.5 py-1.5 rounded-full font-bold">
                              <Utensils size={12} className="text-sunset-orange" />{" "}
                              {day.meals}
                            </span>
                            {day.accommodation && (
                              <span className="flex items-center gap-1.5 bg-sand-cream border border-savannah-gold/40 text-safari-brown px-3.5 py-1.5 rounded-full font-bold">
                                <Hotel size={12} className="text-sunset-orange" />{" "}
                                {day.accommodation}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Route & Practical Logistics */}
              {editorial?.logistics && (
                <div className="mb-14 bg-sand-cream border border-savannah-gold/35 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-2xl font-headline font-bold text-safari-brown mb-5">
                    Route Logistics, Vehicle &amp; Packing Notes
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm font-body text-safari-brown/85">
                    <div className="flex items-start gap-3">
                      <Clock size={18} className="text-sunset-orange mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold text-safari-brown mb-1">
                          Departure &amp; Return
                        </h3>
                        <p>{editorial.logistics.departure}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Compass size={18} className="text-sunset-orange mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold text-safari-brown mb-1">
                          Road Legs &amp; Distances
                        </h3>
                        <p>{editorial.logistics.driving}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Truck size={18} className="text-sunset-orange mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold text-safari-brown mb-1">
                          Safari Vehicle &amp; Group Size
                        </h3>
                        <p>{editorial.logistics.vehicle}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase size={18} className="text-sunset-orange mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-bold text-safari-brown mb-1">
                          Stays &amp; Luggage Guidance
                        </h3>
                        <p>{editorial.logistics.stayAndLuggage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Included / Excluded */}
              <div
                id="included"
                className="scroll-mt-[120px] md:scroll-mt-[136px] lg:scroll-mt-[150px]"
              >
                <h2 className="text-3xl font-headline font-bold text-safari-brown mb-8">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-sand-cream border border-savannah-gold/40 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-headline font-bold text-lg mb-4 text-safari-brown">
                      ✓ Included
                    </h3>
                    <ul className="space-y-3">
                      {safari.included.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-body">
                          <CheckCircle size={16} className="text-savannah-gold mt-0.5 flex-shrink-0" />
                          <span className="text-safari-brown/85">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-sand-cream border border-crane-red/30 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-headline font-bold text-lg mb-4 text-crane-red">
                      ✗ Excluded
                    </h3>
                    <ul className="space-y-3">
                      {safari.excluded.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm font-body">
                          <XCircle size={16} className="text-crane-red mt-0.5 flex-shrink-0" />
                          <span className="text-safari-brown/85">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {safari.optionalActivities && safari.optionalActivities.length > 0 && (
                  <div className="mt-8 bg-sand-cream border border-savannah-gold/40 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-headline font-bold text-lg mb-4 text-safari-brown">
                      Optional Add-On Experiences
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {safari.optionalActivities.map((act, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl bg-savannah-gold/10 border border-savannah-gold/25 text-sm font-body"
                        >
                          <span className="font-medium text-safari-brown">{act.name}</span>
                          <span className="font-bold text-sunset-orange shrink-0">
                            ${act.price}/pp
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <FaqSection
                faqs={faqs}
                title={`${safari.title}: questions and answers`}
                className="mt-16"
              />

              {/* Park guides and similar trips */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                {parks.length > 0 && (
                  <div className="bg-sand-cream border border-savannah-gold/40 rounded-2xl p-6 shadow-sm">
                    <h2 className="font-headline font-bold text-lg mb-4 text-safari-brown">
                      Parks on this safari
                    </h2>
                    <ul className="space-y-2 text-sm font-body">
                      {parks.map((park) => (
                        <li key={park.slug}>
                          <Link
                            href={`/destinations/${park.slug}`}
                            className="font-bold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline"
                          >
                            {park.name} guide
                          </Link>
                          <span className="text-safari-brown/75"> · {park.country}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {related.length > 0 && (
                  <div className="bg-sand-cream border border-savannah-gold/40 rounded-2xl p-6 shadow-sm">
                    <h2 className="font-headline font-bold text-lg mb-4 text-safari-brown">
                      Related itineraries
                    </h2>
                    <ul className="space-y-2 text-sm font-body">
                      {related.map((other) => (
                        <li key={other.slug}>
                          <Link
                            href={`/safari/${other.slug}`}
                            className="font-bold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline"
                          >
                            {other.title}
                          </Link>
                          <span className="text-safari-brown/75">
                            {" "}
                            · {lengthOf(other.days)} · from {usd(other.price.low)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <TripAdvisorCard variant="compact" className="mt-12" />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1" id="pricing">
              <SafariBookingCard safari={safari} initialSeason={season} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
