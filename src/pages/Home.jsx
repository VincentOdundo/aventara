import React, { useState, useEffect } from "react";
import { useSeo } from "../hooks/useSeo";
import {
  ORG_ID,
  faqLd,
  generalFaqs,
  graph,
  offerCatalogLd,
  safariListLd,
  truncateText,
  usd,
  webPageLd,
} from "../lib/seo";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import {
  Section,
  AnimatedSection,
  StaggerContainer,
  FaqSection,
} from "../components/ui";
import { SeasonBadge } from "../components/ui/SeasonPrice";
import { safariPackages, allPackages, getCurrentSeason } from "../data/safaris";
import { destinations } from "../data/destinations";
import { useCounter } from "../hooks/useScrollAnimation";
import {
  ArrowRight,
  Star,
  Shield,
  Users,
  Compass,
  Camera,
  TreePine,
  Clock,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import logo from "./cima_logo.png";

import elephantGrass from "../assets/nairobi/antelppes.jpeg";
import elephantTusks from "../assets/rhino.jpeg";
import flamingoWater from "../assets/flamingo.jpeg";
import sunsetExotic from "../assets/cheater_plain.jpeg";
import rhinoClose from "../assets/nairobi/bird-exotic.jpeg";
import kilimanjaro from "../assets/lion pack.jpeg";
import elephtain from "../assets/leapard-car.jpeg";
import wildImg from "../assets/cheater-safari.jpeg";
import heroImg from "../assets/cheater-safari.jpeg";

function StatCounter({ target, suffix = "", label }) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-headline font-bold text-savannah-gold">
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="text-sm text-safari-brown mt-2 font-body font-medium">
        {label}
      </p>
    </div>
  );
}

const heroImages = [
  elephantGrass,
  elephantTusks,
  flamingoWater,
  sunsetExotic,
  rhinoClose,
  kilimanjaro,
  elephtain,
];

export default function Home() {
  const faqs = generalFaqs();
  // Lowest published prices, so the search snippet follows the rate card.
  const fromPrice = Math.min(
    ...safariPackages.filter((s) => s.days >= 1).map((s) => s.price.low),
  );
  const dayTripPrice = Math.min(...allPackages.nairobi.map((s) => s.price.low));
  const homeTitle = "Kenya & Tanzania Budget Safaris from Nairobi";
  const homeDesc = truncateText(
    `Shared and private 4x4 safaris across Kenya & Tanzania from ${usd(fromPrice)}/pp (Nairobi tours from ${usd(dayTripPrice)}). Park fees, lodging, meals & transfers included.`,
    158,
  );
  useSeo({
    title: homeTitle,
    description: homeDesc,
    path: "/",
    jsonLd: graph(
      webPageLd({
        path: "/",
        title: homeTitle,
        description: homeDesc,
        mainEntityId: ORG_ID,
      }),
      safariListLd(safariPackages, "Kenya and Tanzania safari packages"),
      offerCatalogLd(safariPackages),
      faqLd(faqs),
    ),
  });
  const [heroIdx, setHeroIdx] = useState(0);
  const season = getCurrentSeason();
  const featuredSlugs = [
    "3-day-masai-mara-budget",
    "6-day-tanzania-safari",
    "12-day-kenya-tanzania-complete",
  ];
  const featuredSafaris = safariPackages.filter((s) =>
    featuredSlugs.includes(s.slug),
  );
  const safariCountsByCountry = {
    all: safariPackages.length,
    kenya: safariPackages.filter((s) => s.country === "kenya").length,
    tanzania: safariPackages.filter((s) => s.country === "tanzania").length,
    combined: safariPackages.filter((s) => s.country === "combined").length,
  };
  const featuredDestinations = destinations.filter((d) =>
    ["masai-mara", "serengeti", "ngorongoro", "tarangire"].includes(d.slug),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* ========== HERO BENTO ========== */}
      <section className="pt-24 pb-6 px-6 max-w-screen-2xl mx-auto md:h-[100svh] md:max-h-[100svh] flex flex-col justify-center bg-sand-cream text-midnight-black font-body overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 w-full flex-1 min-h-0">
          {/* Main Hero Block - Spans 2x2 */}
          <div className="md:col-span-2 md:row-span-2 bg-midnight-black rounded-[2rem] p-6 md:p-8 lg:p-10 flex flex-col justify-between text-sand-cream shadow-xl overflow-hidden relative border border-savannah-gold/20 min-h-0">
            <img
              src={heroImages[heroIdx]}
              alt="Wildlife on the East African savannah at sunset"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/80 via-midnight-black/25 to-transparent"></div>

            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-sunrise-yellow text-xs font-bold uppercase tracking-widest">
                Cima Brava Adventures
              </span>
            </div>

            <div className="relative z-10 my-auto py-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-headline leading-[1.05] font-bold tracking-tight text-sand-cream">
                <span className="block mb-3 font-body text-xs lg:text-sm font-bold uppercase tracking-[0.2em] leading-snug text-sand-cream/90">
                  Kenya &amp; Tanzania budget safaris from Nairobi
                </span>
                UNTAMED
                <span className="block text-sunrise-yellow">EAST AFRICA</span>
              </h1>

              {/* Signature Script Quote from theme.png */}
              <div className="mt-3 inline-block">
                <p className="font-script italic text-2xl lg:text-3xl text-sand-cream tracking-wide leading-tight">
                  Wild by Nature. Guided by Heart.
                </p>
                <svg
                  viewBox="0 0 320 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-56 lg:w-72 h-3.5 mt-0.5 text-sunrise-yellow"
                  aria-hidden="true"
                >
                  <path
                    d="M4 13C72 4 195 2 316 9C245 9 125 11 22 15"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="text-sm lg:text-base text-sand-cream/85 max-w-md mt-2 font-body line-clamp-3" data-speakable="true">
                Shared and private 4x4 safaris across Kenya and Tanzania, with
                park fees, meals and transfers already in the price.
              </p>
            </div>

            {/* Primary & Story Play CTAs from theme.png */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/safaris"
                className="btn-explore inline-flex items-center gap-2.5 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-bold px-6 py-3 rounded-full shadow-lg hover:brightness-105 active:scale-95 transition-all text-sm"
              >
                <span>Explore Trips</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/about"
                className="btn-story-play inline-flex items-center gap-2.5 group px-3 py-1.5 rounded-full bg-sand-cream/10 hover:bg-sand-cream/20 border border-sand-cream/20 backdrop-blur-sm transition-all"
              >
                <span className="w-9 h-9 rounded-full bg-gradient-to-br from-sunrise-yellow via-savannah-gold to-sunset-orange text-midnight-black flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <Play size={15} fill="currentColor" className="ml-0.5" />
                </span>
                <span className="text-xs lg:text-sm font-bold text-sand-cream pr-2">
                  Watch Our Story
                </span>
              </Link>
            </div>
          </div>

          {/* Great Migration Block - Spans 2x1 */}
          <Link
            to="/safari/3-day-masai-mara-budget"
            className="md:col-span-2 md:row-span-1 rounded-[2rem] overflow-hidden relative group h-56 md:h-full min-h-0 border border-safari-brown/15 shadow-md"
          >
            <img
              src={wildImg}
              alt="The Great Migration"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-transparent to-transparent"></div>
            <div className="absolute top-4 right-4">
              <span className="bg-crane-red text-sand-cream text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow">
                Signature Experience
              </span>
            </div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="text-xs uppercase tracking-widest text-sunrise-yellow font-bold mb-1">
                Masai Mara &amp; Serengeti
              </span>
              <p className="text-sand-cream font-headline font-bold text-2xl">
                The Great Migration
              </p>
            </div>
          </Link>

          {/* Small Stat Block - Spans 1x1 */}
          <div className="md:col-span-1 md:row-span-1 bg-sand-cream border border-savannah-gold/30 rounded-[2rem] p-6 flex flex-col justify-center text-center group hover:bg-safari-brown hover:text-sand-cream transition-colors h-52 md:h-full min-h-0 shadow-sm">
            <div className="text-4xl lg:text-5xl font-headline font-extrabold text-sunset-orange group-hover:text-sunrise-yellow transition-colors">
              Max 7
            </div>
            <div className="text-xs lg:text-sm font-bold uppercase tracking-wider mt-2 text-safari-brown group-hover:text-sand-cream">
              Guests per vehicle
            </div>
            <span className="text-xs text-safari-brown/75 group-hover:text-sand-cream/80 mt-1">
              A window seat for every guest
            </span>
          </div>

          {/* Small CTA Block - Spans 1x1 */}
          <Link
            to="/contact"
            className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-safari-brown via-midnight-black to-sunset-orange rounded-[2rem] p-6 flex flex-col justify-between text-sand-cream group cursor-pointer hover:brightness-110 transition-all h-52 md:h-full min-h-0 shadow-md border border-savannah-gold/30"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest font-bold text-sunrise-yellow">
                Tailor-Made
              </span>
              <ArrowRight
                size={28}
                className="text-sunrise-yellow group-hover:translate-x-2 transition-transform"
              />
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-headline font-bold text-sand-cream">
                Plan Your Adventure
              </p>
              <p className="text-xs text-sand-cream/80 mt-1">
                Custom dates, lodges &amp; private 4x4 cruisers
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ========== STATS STRIP ========== */}
      <section className="py-12 bg-sand-cream border-y border-savannah-gold/20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter target={safariPackages.length} suffix="" label="Safari itineraries" />
          <StatCounter target={10} suffix="" label="Parks and reserves" />
          <StatCounter target={7} suffix="" label="Guests per vehicle, at most" />
          <StatCounter target={24} suffix="h" label="Reply time on quotes" />
        </div>
      </section>

      {/* ========== FEATURED SAFARIS ========== */}
      <Section className="min-h-[100svh] py-24 md:py-32 flex flex-col justify-center bg-sand-cream">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <SeasonBadge />
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-safari-brown tracking-[-0.02em]">
                Featured Safaris
              </h2>
              <p className="text-safari-brown/80 mt-4 max-w-lg leading-relaxed font-body">
                From short getaways to grand multi-country expeditions — every
                journey is tailored to your sense of adventure.
              </p>
            </div>
            <Link
              to="/safaris"
              className="btn-explore inline-flex items-center gap-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-bold text-sm px-7 py-3.5 rounded-full shadow-md hover:brightness-105 transition-all"
            >
              <span>Explore Trips</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                label: "All Packages",
                to: "/safaris",
                count: safariCountsByCountry.all,
              },
              {
                label: "Kenya",
                to: "/safaris/kenya",
                count: safariCountsByCountry.kenya,
              },
              {
                label: "Tanzania",
                to: "/safaris/tanzania",
                count: safariCountsByCountry.tanzania,
              },
              {
                label: "Kenya & Tanzania",
                to: "/safaris/combined",
                count: safariCountsByCountry.combined,
              },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="group rounded-2xl border border-savannah-gold/30 bg-sand-cream px-6 py-5 hover:border-savannah-gold hover:bg-safari-brown transition-all duration-300 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.15em] text-sunset-orange group-hover:text-sunrise-yellow font-bold mb-2">
                  Explore
                </p>
                <p className="text-lg font-headline font-bold text-midnight-black group-hover:text-sand-cream transition-colors">
                  {item.label}
                </p>
                <p className="text-sm text-safari-brown/80 group-hover:text-sand-cream/80 mt-2">
                  {item.count} package{item.count !== 1 ? "s" : ""}
                </p>
              </Link>
            ))}
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSafaris.map((safari) => (
            <Link
              key={safari.id}
              to={`/safari/${safari.slug}`}
              className="group"
            >
              <div className="bg-sand-cream border border-savannah-gold/25 rounded-2xl overflow-hidden hover:shadow-xl hover:border-savannah-gold transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={safari.image}
                    alt={safari.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-3.5 py-1 rounded-full text-xs font-bold shadow">
                      {safari.days} Days
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-midnight-black/35 to-transparent h-16"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-sunset-orange" />
                    <span className="text-xs uppercase tracking-wider text-safari-brown/80 font-bold">
                      {safari.destinations.slice(0, 3).join(" · ")}
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-midnight-black group-hover:text-sunset-orange transition-colors mb-1 tracking-tight">
                    {safari.title}
                  </h3>
                  <p className="text-sm text-safari-brown/80 mb-4 line-clamp-2 font-body">
                    {safari.subtitle}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-savannah-gold/20">
                    <div>
                      <span className="text-2xl font-headline font-bold text-safari-brown">
                        ${safari.price[season].toLocaleString()}
                      </span>
                      <span className="text-xs text-safari-brown/70 ml-1">
                        /person
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider group-hover:gap-2.5 transition-all">
                      Explore
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </StaggerContainer>
      </Section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="min-h-[100svh] py-24 md:py-32 bg-sand-cream flex flex-col justify-center border-t border-savannah-gold/20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.35em] text-sunset-orange font-bold block mb-3">
              Wild by Nature · Guided by Heart
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-safari-brown tracking-[-0.02em] mb-6">
              The Cima Brava Difference
            </h2>
            <p className="text-safari-brown/80 max-w-2xl mx-auto leading-relaxed font-body">
              We organize bespoke safaris and craft transformative experiences
              that connect you with the untamed soul of East Africa.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass size={28} />,
                title: "Expert Local Guides",
                desc: "Kenyan and Tanzanian naturalists with decades of experience, sharing secrets of the bush through stories and tracks.",
              },
              {
                icon: <Shield size={28} />,
                title: "Safety Guaranteed",
                desc: "Fully insured vehicles, certified drivers, and 24/7 support throughout your journey across East Africa.",
              },
              {
                icon: <Camera size={28} />,
                title: "Photography Ready",
                desc: "Custom 4x4 pop-top safari vehicles with dust-free camera mounts and guaranteed window seats.",
              },
              {
                icon: <TreePine size={28} />,
                title: "Conservation First",
                desc: "Every booking supports local wildlife protection and community empowerment initiatives.",
              },
              {
                icon: <Users size={28} />,
                title: "Small Groups",
                desc: "Maximum 6–7 guests per 4x4 cruiser ensuring intimate, window-seat wildlife encounters.",
              },
              {
                icon: <Clock size={28} />,
                title: "Flexible Booking",
                desc: "Free cancellation up to 30 days before departure. Reschedule with no extra fees.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-sand-cream border border-savannah-gold/25 rounded-2xl p-8 group hover:bg-safari-brown hover:text-sand-cream hover:border-savannah-gold transition-all duration-500 shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black mb-6 shadow-md group-hover:scale-105 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg font-headline font-bold mb-3 text-midnight-black group-hover:text-sunrise-yellow">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-safari-brown/80 group-hover:text-sand-cream/85 transition-colors duration-500 font-body">
                  {item.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== DESTINATIONS ========== */}
      <Section className="min-h-[100svh] py-24 md:py-32 flex flex-col justify-center bg-sand-cream">
        <AnimatedSection className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.35em] text-sunset-orange font-bold block mb-3">
              East African Horizons
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-safari-brown tracking-[-0.02em] mb-4">
              Destinations
            </h2>
            <p className="text-safari-brown/80 max-w-2xl leading-relaxed font-body">
              From Kenya&apos;s sweeping savannahs to Tanzania&apos;s ancient
              craters — explore the landscapes that make East Africa.
            </p>
          </div>
          <Link
            to="/destinations"
            className="btn-destinations inline-flex items-center gap-3 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream px-7 py-3.5 rounded-full font-semibold text-sm shadow-md hover:brightness-110 transition-all"
          >
            <span>View Destinations</span>
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>

        <AnimatedSection animation="scale">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[44rem]">
            {featuredDestinations.map((dest, idx) => {
              const spanClasses = [
                "md:col-span-2 md:row-span-2",
                "md:col-span-1 md:row-span-1",
                "md:col-span-1 md:row-span-1",
                "md:col-span-2 md:row-span-1",
              ][idx];

              return (
                <Link
                  key={dest.id}
                  to={`/destinations/${dest.slug}`}
                  className={`${spanClasses} relative group overflow-hidden rounded-2xl min-h-[240px] border border-safari-brown/15`}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-transparent to-transparent group-hover:from-midnight-black/80 transition-colors duration-500"></div>
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                    <span className="text-sunrise-yellow text-xs uppercase tracking-widest font-bold mb-1 block">
                      {dest.country}
                    </span>
                    <h3
                      className={`font-headline text-sand-cream font-bold ${
                        idx === 0
                          ? "text-3xl md:text-4xl"
                          : "text-xl md:text-2xl"
                      }`}
                    >
                      {dest.name}
                    </h3>
                    <p className="text-sand-cream/80 text-sm mt-1 max-w-xs hidden md:block font-body">
                      {dest.tagline}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-b from-sunrise-yellow to-savannah-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <ArrowRight size={18} className="text-midnight-black" />
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>
      </Section>

      {/* ========== PRICING OVERVIEW ========== */}
      <section className="min-h-[100svh] py-24 md:py-32 bg-sand-cream flex flex-col justify-center border-t border-savannah-gold/20">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-safari-brown tracking-[-0.02em] mb-6">
              Safari Packages &amp; Pricing
            </h2>
            <p className="text-safari-brown/80 max-w-2xl mx-auto leading-relaxed font-body">
              Transparent pricing with no hidden fees. All packages include
              accommodation, meals, transport, park fees, and expert guides.
            </p>
            <SeasonBadge className="mt-4" />
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden shadow-xl">
              <div className="flex flex-col">
                {/* Desktop Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sunrise-yellow px-6 py-4 font-headline font-semibold text-sm">
                  <div className="col-span-3">Safari Package</div>
                  <div className="col-span-2">Days</div>
                  <div className="col-span-3">Destinations</div>
                  <div className="col-span-2 text-center">Low Season</div>
                  <div className="col-span-2 text-center">High Season</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-savannah-gold/20">
                  {safariPackages.map((safari, idx) => (
                    <div
                      key={safari.id}
                      className={`group relative flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center p-6 md:px-6 md:py-5 transition-colors ${
                        idx % 2 === 0 ? "bg-sand-cream" : "bg-savannah-gold/5"
                      } hover:bg-savannah-gold/15`}
                    >
                      {/* Mobile Title & Badge */}
                      <div className="flex justify-between items-start md:col-span-3 mb-4 md:mb-0">
                        <Link
                          to={`/safari/${safari.slug}`}
                          className="font-bold text-xl md:text-base text-midnight-black group-hover:text-sunset-orange transition-colors pr-4"
                        >
                          {safari.title}
                        </Link>
                        <span className="md:hidden bg-savannah-gold/20 text-safari-brown px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                          {safari.days === 0.5 ? "Half Day" : `${safari.days} Days`}
                        </span>
                      </div>

                      {/* Desktop Days */}
                      <div className="hidden md:block md:col-span-2 text-sm font-medium text-safari-brown">
                        {safari.days === 0.5 ? "Half Day" : `${safari.days} Days`}
                      </div>

                      {/* Destinations */}
                      <div className="md:col-span-3 mb-6 md:mb-0 text-sm text-safari-brown/80 flex items-start gap-2 md:block">
                        <MapPin
                          size={16}
                          className="md:hidden text-sunset-orange shrink-0 mt-0.5"
                        />
                        <span>
                          {safari.destinations.slice(0, 3).join(", ")}
                          {safari.destinations.length > 3 && "..."}
                        </span>
                      </div>

                      {/* Pricing Grid */}
                      <div className="grid grid-cols-2 md:contents gap-3 mb-6 md:mb-0 border-t border-savannah-gold/20 pt-4 md:border-0 md:pt-0">
                        <div className="md:col-span-2 md:text-center flex flex-col items-center justify-center p-3 md:p-0 bg-savannah-gold/10 md:bg-transparent rounded-lg md:rounded-none">
                          <span className="md:hidden text-[10px] uppercase tracking-widest font-bold text-safari-brown/70 mb-1">
                            Low Season
                          </span>
                          <span
                            className={`font-bold ${
                              season === "low"
                                ? "text-sunset-orange text-xl md:text-lg"
                                : "text-safari-brown/80 text-lg md:text-base"
                            }`}
                          >
                            ${safari.price.low.toLocaleString()}
                          </span>
                          {safari.singlePrice &&
                            safari.singlePrice.low !== safari.price.low && (
                              <span className="text-[11px] text-safari-brown/65 font-medium mt-0.5">
                                Single: ${safari.singlePrice.low.toLocaleString()}
                              </span>
                            )}
                        </div>
                        <div className="md:col-span-2 md:text-center flex flex-col items-center justify-center p-3 md:p-0 bg-savannah-gold/10 md:bg-transparent rounded-lg md:rounded-none">
                          <span className="md:hidden text-[10px] uppercase tracking-widest font-bold text-safari-brown/70 mb-1">
                            High Season
                          </span>
                          <span
                            className={`font-bold ${
                              season === "high"
                                ? "text-sunset-orange text-xl md:text-lg"
                                : "text-safari-brown/80 text-lg md:text-base"
                            }`}
                          >
                            ${safari.price.high.toLocaleString()}
                          </span>
                          {safari.singlePrice &&
                            safari.singlePrice.high !== safari.price.high && (
                              <span className="text-[11px] text-safari-brown/65 font-medium mt-0.5">
                                Single: ${safari.singlePrice.high.toLocaleString()}
                              </span>
                            )}
                        </div>
                      </div>

                      {/* Mobile View Button */}
                      <div className="md:hidden">
                        <Link
                          to={`/safari/${safari.slug}`}
                          className="flex items-center justify-center gap-2 w-full bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black py-3 rounded-full font-bold text-sm shadow"
                        >
                          View Itinerary <ArrowRight size={16} />
                        </Link>
                      </div>

                      {/* Desktop View Link */}
                      <Link
                        to={`/safari/${safari.slug}`}
                        className="hidden md:flex absolute inset-0 z-0"
                        aria-label={`View ${safari.title}`}
                      ></Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== QUESTIONS ========== */}
      <Section className="py-20 md:py-24 bg-sand-cream">
        <FaqSection
          faqs={faqs}
          title="Safari prices and booking: questions and answers"
          className="max-w-4xl mx-auto"
        />
      </Section>

      {/* ========== FINAL CTA ========== */}
      <Section className="min-h-[100svh] py-24 md:py-32 flex flex-col justify-center bg-sand-cream">
        <AnimatedSection className="text-center max-w-4xl mx-auto">
          <p className="font-script italic text-3xl md:text-4xl text-sunset-orange mb-3">
            Wild by Nature. Guided by Heart.
          </p>
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-safari-brown mb-8 tracking-[-0.03em] leading-[0.95]">
            Your African
            <br />
            <span className="italic font-normal text-sunset-orange">
              Story Awaits
            </span>
          </h2>
          <p className="text-xl text-safari-brown/80 mb-12 leading-relaxed font-body max-w-2xl mx-auto">
            Whether you seek the thrill of the Great Migration, the serenity of
            the Ngorongoro Crater, or a family legacy trip — let us craft your
            narrative.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/safaris"
              className="btn-explore inline-flex items-center gap-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:brightness-105 transition-all duration-300 active:scale-95"
            >
              <span>Explore Trips</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/destinations"
              className="btn-destinations inline-flex items-center gap-3 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:brightness-110 transition-all"
            >
              <span>View Destinations</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/254112346049"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-plan inline-flex items-center gap-2 border-2 border-savannah-gold text-midnight-black bg-sand-cream px-9 py-4 rounded-full font-bold text-lg hover:bg-savannah-gold/15 transition-all"
            >
              <WhatsAppIcon size={20} />
              <span>Plan Your Adventure</span>
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
