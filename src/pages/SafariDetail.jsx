import React, { useState } from "react";
import { Photo } from "../components/ui/Photo";
import { useSeo } from "../hooks/useSeo";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import Layout from "../components/layout/Layout";
import { AnimatedSection, Breadcrumbs, FaqSection } from "../components/ui";
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
  safariQuickAnswer,
  safariTitle,
  similarSafaris,
  usd,
  webPageLd,
} from "../lib/seo";
import { SeasonBadge, PriceDisplay } from "../components/ui/SeasonPrice";
import { WhatsAppBookButton } from "../components/ui/WhatsAppCTA";
import { getSafariBySlug, getCurrentSeason, SEASONS } from "../data/safaris";
import {
  MapPin,
  Calendar,
  CheckCircle,
  XCircle,
  Utensils,
  Hotel,
  ChevronDown,
  Users,
  Mail,
} from "lucide-react";

export default function SafariDetail() {
  const { slug } = useParams();
  const safari = getSafariBySlug(slug);
  const crumbs = safari ? safariCrumbs(safari) : [];
  const faqs = safari ? safariFaqs(safari) : [];
  const safariPath = safari ? `/safari/${safari.slug}` : "/safaris";
  const breadcrumb = safari ? breadcrumbLd(crumbs, safariPath) : null;
  const title = safari ? safariTitle(safari) : "";
  const desc = safari ? safariDescription(safari) : "";
  useSeo(
    safari
      ? {
          title,
          description: desc,
          path: safariPath,
          image: safari.image,
          imageAlt: `${safari.title} — ${safari.destinations.join(", ")}`,
          jsonLd: graph(
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
          ),
        }
      : {},
  );
  const defaultSeason = getCurrentSeason();
  const [selectedSeason, setSelectedSeason] = useState(defaultSeason);
  const seasonLabel = SEASONS[selectedSeason].label;
  const [guests, setGuests] = useState(2);
  const [openDay, setOpenDay] = useState(0);

  if (!safari) return <NotFound />;

  const isSingle = guests === 1 && Boolean(safari.singlePrice);
  const price = isSingle
    ? safari.singlePrice[selectedSeason]
    : safari.price[selectedSeason];
  const totalPrice = price * guests;
  const durationLabel =
    safari.days === 0.5 ? "Half Day" : `${safari.days} Days`;
  const maxGroupLabel =
    safari.maxGroupSize ||
    (safari.difficulty === "Budget" && safari.country !== "nairobi"
      ? "Max 7"
      : "Max 6");
  const mealsLabel = safari.itinerary.every((day) => /^none/i.test(day.meals))
    ? "Not included"
    : safari.days < 1
      ? "As listed"
      : "Full Board";
  const parks = destinationsForSafari(safari);
  const related = similarSafaris(safari);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-midnight-black">
        <Photo
          src={safari.image}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/70 via-transparent to-midnight-black/25"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
          <Breadcrumbs crumbs={crumbs} tone="light" className="mb-5" />
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-safari-brown/90 text-sand-cream border border-savannah-gold/40 px-4 py-1.5 rounded-full text-xs font-body font-bold capitalize">
              {safari.country === "combined"
                ? "Kenya & Tanzania"
                : safari.country}
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
          <a
            href="#itinerary"
            className="font-bold text-sunset-orange whitespace-nowrap"
          >
            Itinerary
          </a>
          <a
            href="#pricing"
            className="font-medium text-safari-brown hover:text-sunset-orange transition-colors whitespace-nowrap"
          >
            Pricing
          </a>
          <a
            href="#included"
            className="font-medium text-safari-brown hover:text-sunset-orange transition-colors whitespace-nowrap"
          >
            What's Included
          </a>
          <a
            href="#booking"
            className="font-medium text-safari-brown hover:text-sunset-orange transition-colors whitespace-nowrap"
          >
            Book Now
          </a>
          <a
            href="#faq"
            className="font-medium text-safari-brown hover:text-sunset-orange transition-colors whitespace-nowrap"
          >
            Questions
          </a>
        </div>
      </section>

      <div className="bg-sand-cream">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <AnimatedSection className="mb-16">
                <h2 className="text-3xl font-headline font-bold text-safari-brown mb-6">
                  Overview
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-4 text-center shadow-sm">
                    <Calendar
                      size={20}
                      className="mx-auto text-sunset-orange mb-2"
                    />
                    <p className="text-xs font-body text-safari-brown/75 font-bold uppercase">
                      Duration
                    </p>
                    <p className="font-headline font-bold text-lg text-safari-brown">
                      {durationLabel}
                    </p>
                  </div>
                  <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-4 text-center shadow-sm">
                    <MapPin
                      size={20}
                      className="mx-auto text-sunset-orange mb-2"
                    />
                    <p className="text-xs font-body text-safari-brown/75 font-bold uppercase">
                      Parks
                    </p>
                    <p className="font-headline font-bold text-lg text-safari-brown">
                      {[...new Set(safari.destinations)].length}
                    </p>
                  </div>
                  <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-4 text-center shadow-sm">
                    <Utensils
                      size={20}
                      className="mx-auto text-sunset-orange mb-2"
                    />
                    <p className="text-xs font-body text-safari-brown/75 font-bold uppercase">
                      Meals
                    </p>
                    <p className="font-headline font-bold text-lg text-safari-brown">
                      {mealsLabel}
                    </p>
                  </div>
                  <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-4 text-center shadow-sm">
                    <Users
                      size={20}
                      className="mx-auto text-sunset-orange mb-2"
                    />
                    <p className="text-xs font-body text-safari-brown/75 font-bold uppercase">
                      Group
                    </p>
                    <p className="font-headline font-bold text-lg text-safari-brown">
                      {maxGroupLabel}
                    </p>
                  </div>
                </div>

                {/* Quick AEO Summary */}
                <p
                  data-speakable="true"
                  className="mb-6 rounded-2xl border border-savannah-gold/35 bg-savannah-gold/10 px-5 py-4 text-sm leading-relaxed text-safari-brown font-body"
                >
                  {safariQuickAnswer(safari)}
                </p>

                {/* Highlights */}
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

              {/* Itinerary */}
              <div
                id="itinerary"
                className="mb-16 scroll-mt-[120px] md:scroll-mt-[136px] lg:scroll-mt-[150px]"
              >
                <h2 className="text-3xl font-headline font-bold text-safari-brown mb-8">
                  Day-by-Day Itinerary
                </h2>
                <div className="space-y-3">
                  {safari.itinerary.map((day, idx) => (
                    <details
                      key={idx}
                      className="group bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden shadow-sm"
                      open={idx === openDay}
                      onClick={() => {
                        setOpenDay(idx === openDay ? -1 : idx);
                      }}
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
                          <div className="md:w-1/3 shrink-0 rounded-xl overflow-hidden h-48 border border-savannah-gold/25">
                            <Photo
                              src={day.image}
                              className="w-full h-full"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="flex-1 space-y-4">
                          <p className="text-safari-brown/85 font-body text-sm leading-relaxed">
                            {day.description}
                          </p>
                          <div className="flex flex-wrap gap-3 text-xs font-body">
                            <span className="flex items-center gap-1.5 bg-sand-cream border border-savannah-gold/40 text-safari-brown px-3.5 py-1.5 rounded-full font-bold">
                              <Utensils
                                size={12}
                                className="text-sunset-orange"
                              />{" "}
                              {day.meals}
                            </span>
                            {day.accommodation && (
                              <span className="flex items-center gap-1.5 bg-sand-cream border border-savannah-gold/40 text-safari-brown px-3.5 py-1.5 rounded-full font-bold">
                                <Hotel
                                  size={12}
                                  className="text-sunset-orange"
                                />{" "}
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

              {/* Included / Excluded */}
              <div
                id="included"
                className="scroll-mt-[120px] md:scroll-mt-[136px] lg:scroll-mt-[150px]"
              >
                <h2 className="text-3xl font-headline font-bold text-safari-brown mb-8">
                  What's Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-sand-cream border border-savannah-gold/40 rounded-2xl p-6 shadow-sm">
                    <h3 className="font-headline font-bold text-lg mb-4 text-safari-brown">
                      ✓ Included
                    </h3>
                    <ul className="space-y-3">
                      {safari.included.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm font-body"
                        >
                          <CheckCircle
                            size={16}
                            className="text-savannah-gold mt-0.5 flex-shrink-0"
                          />
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
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm font-body"
                        >
                          <XCircle
                            size={16}
                            className="text-crane-red mt-0.5 flex-shrink-0"
                          />
                          <span className="text-safari-brown/85">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {safari.optionalActivities &&
                  safari.optionalActivities.length > 0 && (
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
                            <span className="font-medium text-safari-brown">
                              {act.name}
                            </span>
                            <span className="font-bold text-sunset-orange shrink-0">
                              ${act.price}/pp
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>

              {/* Questions and answers, built from this safari's own data */}
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
                            to={`/destinations/${park.slug}`}
                            className="font-bold text-safari-brown hover:text-sunset-orange underline-offset-2 hover:underline"
                          >
                            {park.name} guide
                          </Link>
                          <span className="text-safari-brown/75">
                            {" "}
                            · {park.country}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {related.length > 0 && (
                  <div className="bg-sand-cream border border-savannah-gold/40 rounded-2xl p-6 shadow-sm">
                    <h2 className="font-headline font-bold text-lg mb-4 text-safari-brown">
                      Similar safaris
                    </h2>
                    <ul className="space-y-2 text-sm font-body">
                      {related.map((other) => (
                        <li key={other.slug}>
                          <Link
                            to={`/safari/${other.slug}`}
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
            </div>

            {/* Sidebar - Booking Card */}
            <div className="lg:col-span-1" id="pricing">
              <div
                id="booking"
                className="sticky top-[120px] lg:top-[128px] bg-sand-cream border border-savannah-gold/30 rounded-2xl shadow-lg p-8 scroll-mt-[120px] lg:scroll-mt-[136px]"
              >
                <SeasonBadge className="mb-4" />
                <PriceDisplay
                  safari={safari}
                  season={selectedSeason}
                  guests={guests}
                  className="mb-5"
                />

                {/* Season Toggle */}
                <div className="mb-5">
                  <label className="text-xs uppercase tracking-wider text-safari-brown/80 font-body font-bold block mb-2">
                    Travel Season
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {["low", "high"].map((sKey) => (
                      <button
                        key={sKey}
                        type="button"
                        onClick={() => setSelectedSeason(sKey)}
                        className={`px-3 py-2 rounded-xl text-left border text-xs font-body transition-all ${
                          selectedSeason === sKey
                            ? "bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black border-savannah-gold font-bold shadow-sm"
                            : "bg-sand-cream text-safari-brown border-savannah-gold/30 hover:border-savannah-gold"
                        }`}
                      >
                        <span className="block font-bold">
                          {SEASONS[sKey].label}
                        </span>
                        <span className="block text-[11px] opacity-80">
                          {SEASONS[sKey].dates}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Room Rate Breakdown when singlePrice exists */}
                {safari.singlePrice && (
                  <div className="mb-5 rounded-xl border border-savannah-gold/30 bg-savannah-gold/10 p-3 text-xs font-body space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-safari-brown/80">
                        2+ People (Sharing)
                      </span>
                      <span className="font-bold text-safari-brown">
                        ${safari.price[selectedSeason].toLocaleString()}/pp
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-safari-brown/80">
                        Single (1 Private Room)
                      </span>
                      <span className="font-bold text-safari-brown">
                        ${safari.singlePrice[selectedSeason].toLocaleString()}
                        /pp
                      </span>
                    </div>
                  </div>
                )}

                {/* Guest Selector */}
                <div className="mb-6">
                  <label className="text-xs uppercase tracking-wider text-safari-brown/80 font-body font-bold block mb-2">
                    Number of Travelers
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-midnight-black via-safari-brown to-safari-brown text-sand-cream flex items-center justify-center font-bold text-lg hover:brightness-110 transition-all shadow-sm"
                    >
                      −
                    </button>
                    <span className="text-2xl font-headline font-bold text-safari-brown w-12 text-center">
                      {guests}
                    </span>
                    <button
                      onClick={() => setGuests(Math.min(20, guests + 1))}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-midnight-black via-safari-brown to-safari-brown text-sand-cream flex items-center justify-center font-bold text-lg hover:brightness-110 transition-all shadow-sm"
                    >
                      +
                    </button>
                  </div>
                  {safari.singlePrice && (
                    <p className="text-[11px] font-body text-safari-brown/70 mt-1.5">
                      {isSingle
                        ? "Single room rate applied for 1 traveler"
                        : "Sharing room rate applied for 2+ travelers"}
                    </p>
                  )}
                </div>

                {/* Total */}
                <div className="bg-sand-cream border border-savannah-gold/40 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center mb-2 font-body">
                    <span className="text-sm text-safari-brown/80">
                      ${price.toLocaleString()} × {guests} person
                      {guests > 1 ? "s" : ""}
                    </span>
                    <span className="font-bold text-safari-brown">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-savannah-gold/25">
                    <span className="font-body font-bold text-lg text-safari-brown">
                      Total
                    </span>
                    <span className="text-2xl font-headline font-bold text-sunset-orange">
                      ${totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <WhatsAppBookButton
                  safari={safari}
                  season={seasonLabel}
                  price={price}
                  guests={guests}
                  className="w-full"
                />

                <a
                  href={`mailto:cimabravaadventures@gmail.com?subject=${encodeURIComponent(`Safari Inquiry: ${safari.title} (${seasonLabel})`)}`}
                  className="mt-3 w-full py-3 px-6 border-2 border-savannah-gold text-safari-brown hover:bg-savannah-gold/15 font-body font-bold text-sm rounded-full flex items-center justify-center gap-2 transition-all"
                >
                  <Mail size={16} className="text-sunset-orange" />
                  Inquire via Email
                </a>

                <p className="text-xs font-body text-safari-brown/70 text-center mt-4">
                  Children under 4 travel free · Free cancellation up to 30 days
                  before departure
                </p>

                {/* Quick Info */}
                <div className="mt-8 pt-6 border-t border-savannah-gold/25 space-y-4 font-body">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar size={16} className="text-sunset-orange" />
                    <div>
                      <p className="font-bold text-safari-brown">Duration</p>
                      <p className="text-safari-brown/80">
                        {safari.days === 0.5
                          ? "Half Day Tour"
                          : `${safari.days} Days / ${safari.days - 1} Nights`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={16} className="text-sunset-orange" />
                    <div>
                      <p className="font-bold text-safari-brown">
                        Destinations
                      </p>
                      <p className="text-safari-brown/80">
                        {[...new Set(safari.destinations)].join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
