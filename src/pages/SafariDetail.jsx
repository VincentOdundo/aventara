import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection } from "../components/ui";
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
  ArrowRight,
} from "lucide-react";

export default function SafariDetail() {
  const { slug } = useParams();
  const safari = getSafariBySlug(slug);
  const season = getCurrentSeason();
  const seasonLabel = SEASONS[season].label;
  const [guests, setGuests] = useState(1);
  const [openDay, setOpenDay] = useState(0);

  if (!safari) return <Navigate to="/safaris" replace />;

  const price = safari.price[season];
  const totalPrice = price * guests;

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
        <img
          src={safari.image}
          alt={safari.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 img-overlay-full"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-surface/90 text-on-surface px-3 py-1 rounded-full text-xs font-bold capitalize">
              {safari.country === "combined"
                ? "Kenya & Tanzania"
                : safari.country}
            </span>
            <span className="bg-primary/90 text-on-primary px-3 py-1 rounded-full text-xs font-bold">
              {safari.days} Days
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-[-0.02em] mb-2">
            {safari.title}
          </h1>
          <p className="text-white/80 text-lg max-w-xl">{safari.subtitle}</p>
        </div>
      </section>

      {/* Sticky Nav Bar */}
      <section className="bg-surface-container-lowest editorial-shadow sticky top-[88px] md:top-[104px] lg:top-[120px] z-30 border-b border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center gap-8 overflow-x-auto py-3 text-sm">
          <a
            href="#itinerary"
            className="font-medium text-primary whitespace-nowrap"
          >
            Itinerary
          </a>
          <a
            href="#pricing"
            className="font-medium text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
          >
            Pricing
          </a>
          <a
            href="#included"
            className="font-medium text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
          >
            What's Included
          </a>
          <a
            href="#booking"
            className="font-medium text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
          >
            Book Now
          </a>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <AnimatedSection className="mb-16">
              <h2 className="text-3xl font-headline font-bold text-primary mb-6">
                Overview
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-surface-container-low rounded-xl p-4 text-center">
                  <Calendar size={20} className="mx-auto text-primary mb-2" />
                  <p className="text-xs text-on-surface-variant font-bold uppercase">
                    Duration
                  </p>
                  <p className="font-headline font-bold text-lg">
                    {safari.days} Days
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4 text-center">
                  <MapPin size={20} className="mx-auto text-primary mb-2" />
                  <p className="text-xs text-on-surface-variant font-bold uppercase">
                    Parks
                  </p>
                  <p className="font-headline font-bold text-lg">
                    {[...new Set(safari.destinations)].length}
                  </p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4 text-center">
                  <Utensils size={20} className="mx-auto text-primary mb-2" />
                  <p className="text-xs text-on-surface-variant font-bold uppercase">
                    Meals
                  </p>
                  <p className="font-headline font-bold text-lg">Full Board</p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-4 text-center">
                  <Users size={20} className="mx-auto text-primary mb-2" />
                  <p className="text-xs text-on-surface-variant font-bold uppercase">
                    Group
                  </p>
                  <p className="font-headline font-bold text-lg">Max 6</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-3">
                {safari.highlights.map((h, idx) => (
                  <span
                    key={idx}
                    className="bg-primary-fixed text-on-primary-fixed-variant px-4 py-2 rounded-full text-xs font-bold"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* Itinerary */}
            <div id="itinerary" className="mb-16 scroll-mt-[140px] md:scroll-mt-[160px] lg:scroll-mt-[180px]">
              <h2 className="text-3xl font-headline font-bold text-primary mb-8">
                Day-by-Day Itinerary
              </h2>
              <div className="space-y-3">
                {safari.itinerary.map((day, idx) => (
                  <details
                    key={idx}
                    className="group bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow"
                    open={idx === openDay}
                    onClick={(e) => {
                      // Don't prevent default — let <details> toggle naturally
                      setOpenDay(idx === openDay ? -1 : idx);
                    }}
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-surface-container-low transition-colors">
                      <div className="flex items-center gap-5">
                        <span className="text-3xl font-headline font-bold text-outline-variant/40 w-12">
                          {String(day.day).padStart(2, "0")}
                        </span>
                        <div>
                          <h4 className="text-lg font-headline font-bold text-primary">
                            {day.title}
                          </h4>
                          <p className="text-xs text-on-surface-variant mt-0.5 flex items-center gap-2">
                            <MapPin size={12} /> {day.destination}
                          </p>
                        </div>
                      </div>
                      <ChevronDown
                        size={18}
                        className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
                      />
                    </summary>
                    <div className="px-6 pb-6 flex flex-col md:flex-row gap-6">
                      {day.image && (
                        <div className="md:w-1/3 shrink-0 rounded-xl overflow-hidden h-48">
                          <img
                            src={day.image}
                            alt={day.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="flex-1 space-y-4">
                        <p className="text-on-surface-variant text-sm leading-relaxed">
                          {day.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs">
                          <span className="flex items-center gap-1.5 bg-surface-container-high px-3 py-1.5 rounded-md font-bold">
                            <Utensils size={12} className="text-primary" />{" "}
                            {day.meals}
                          </span>
                          {day.accommodation && (
                            <span className="flex items-center gap-1.5 bg-surface-container-high px-3 py-1.5 rounded-md font-bold">
                              <Hotel size={12} className="text-primary" />{" "}
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
            <div id="included" className="scroll-mt-[140px] md:scroll-mt-[160px] lg:scroll-mt-[180px]">
              <h2 className="text-3xl font-headline font-bold text-primary mb-8">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-primary-fixed/30 rounded-xl p-6">
                  <h4 className="font-headline font-bold text-lg mb-4 text-primary">
                    ✓ Included
                  </h4>
                  <ul className="space-y-3">
                    {safari.included.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <CheckCircle
                          size={16}
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span className="text-on-surface-variant">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-error-container/20 rounded-xl p-6">
                  <h4 className="font-headline font-bold text-lg mb-4 text-error">
                    ✗ Excluded
                  </h4>
                  <ul className="space-y-3">
                    {safari.excluded.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <XCircle
                          size={16}
                          className="text-error mt-0.5 flex-shrink-0"
                        />
                        <span className="text-on-surface-variant">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar — Booking Card */}
          <div className="lg:col-span-1">
            <div
              id="booking"
              className="sticky top-[150px] md:top-[170px] lg:top-[190px] bg-surface-container-lowest rounded-2xl editorial-shadow p-8 scroll-mt-[140px] md:scroll-mt-[160px] lg:scroll-mt-[180px]"
            >
              <SeasonBadge className="mb-4" />
              <PriceDisplay safari={safari} className="mb-6" />

              {/* Guest Selector */}
              <div className="mb-6">
                <label className="text-xs uppercase tracking-wider text-on-surface-variant font-bold block mb-2">
                  Number of Travelers
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="w-10 h-10 rounded-md bg-surface-container-high flex items-center justify-center font-bold text-lg hover:bg-surface-container transition-colors"
                  >
                    −
                  </button>
                  <span className="text-2xl font-headline font-bold w-12 text-center">
                    {guests}
                  </span>
                  <button
                    onClick={() => setGuests(Math.min(20, guests + 1))}
                    className="w-10 h-10 rounded-md bg-surface-container-high flex items-center justify-center font-bold text-lg hover:bg-surface-container transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="bg-surface-container-low rounded-xl p-4 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-on-surface-variant">
                    ${price.toLocaleString()} × {guests} person
                    {guests > 1 ? "s" : ""}
                  </span>
                  <span className="font-bold">
                    ${totalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-outline-variant/10">
                  <span className="font-bold text-lg">Total</span>
                  <span className="text-2xl font-headline font-bold text-primary">
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

              <p className="text-xs text-on-surface-variant text-center mt-4">
                Free cancellation up to 30 days before departure
              </p>

              {/* Quick Info */}
              <div className="mt-8 pt-6 border-t border-outline-variant/10 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar size={16} className="text-primary" />
                  <div>
                    <p className="font-bold">Duration</p>
                    <p className="text-on-surface-variant">
                      {safari.days} Days / {safari.days - 1} Nights
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-primary" />
                  <div>
                    <p className="font-bold">Destinations</p>
                    <p className="text-on-surface-variant">
                      {[...new Set(safari.destinations)].join(", ")}
                    </p>
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
