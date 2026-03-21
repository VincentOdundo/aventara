import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import {
  Button,
  Section,
  DestinationCard,
  AnimatedSection,
  StaggerContainer,
} from "../components/ui";
import { SeasonBadge, PriceDisplay } from "../components/ui/SeasonPrice";
import { safariPackages, getCurrentSeason } from "../data/safaris";
import { destinations } from "../data/destinations";
import { testimonials } from "../data/testimonials";
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
} from "lucide-react";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";

import imgAsset_0 from "../assets/cheater.jpeg";
import imgAsset_1 from "../assets/cheater_plain.jpeg";
import imgAsset_2 from "../assets/elefpalin.jpeg";
import imgAsset_3 from "../assets/elephant.jpeg";
import imgAsset_4 from "../assets/elephtain.jpeg";
import imgAsset_5 from "../assets/flamingo.jpeg";
import imgAsset_6 from "../assets/lion.jpeg";
import imgAsset_7 from "../assets/lioness.jpeg";
import imgAsset_8 from "../assets/lioness_open.jpeg";
import imgAsset_9 from "../assets/mountain.jpeg";
import imgAsset_10 from "../assets/plain_elefabt.jpeg";
import imgAsset_11 from "../assets/rhino.jpeg";
import imgAsset_12 from "../assets/rhino_plain.jpeg";
import imgAsset_13 from "../assets/treecheta.jpeg";
import imgAsset_14 from "../assets/widbeasts.jpg";

function StatCounter({ target, suffix = "", label }) {
  const { count, ref } = useCounter(target);
  return (
    <div ref={ref} className="text-center">
      <span className="text-4xl md:text-5xl font-headline font-bold text-primary">
        {count.toLocaleString()}
        {suffix}
      </span>
      <p className="text-sm text-on-surface-variant mt-2 font-medium">
        {label}
      </p>
    </div>
  );
}

const heroImages = [
  imgAsset_3,
  imgAsset_4,
  imgAsset_5,
  imgAsset_6,
];

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const season = getCurrentSeason();
  const featuredSafaris = safariPackages.filter((s) =>
    [3, 7, 14].includes(s.days),
  );
  const featuredDestinations = destinations.filter((d) =>
    ["masai-mara", "serengeti", "ngorongoro", "amboseli"].includes(d.slug),
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
      <section className="pt-32 pb-16 px-6 max-w-screen-2xl mx-auto md:h-[100svh] flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-full md:max-h-[800px] min-h-[600px]">
          {/* Main Title Block - Spans 2x2 */}
          <div className="md:col-span-2 md:row-span-2 bg-primary rounded-[2rem] p-8 md:p-10 flex flex-col justify-between text-on-primary hover:scale-[0.98] transition-transform duration-500 overflow-hidden relative">
            <div className="relative z-10">
              <span className="bg-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                Aventara Safaris
              </span>
              <h1 className="text-6xl md:text-8xl mt-8 font-headline leading-[0.9] font-extrabold tracking-tight">
                WILD.
              </h1>
              <h1 className="text-6xl md:text-8xl font-headline leading-[0.9] font-extrabold text-white/50 tracking-tight">
                FREE.
              </h1>
            </div>
            <div className="relative z-10 mt-8">
              <p className="text-xl max-w-sm">
                Handcrafted East African safaris that redefine adventure.
              </p>
            </div>
            {/* Cool abstract circle */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          </div>

          {/* Video/Image Block - Spans 2x1 */}
          <Link
            to="/safari/masai-mara-express"
            className="md:col-span-2 md:row-span-1 rounded-[2rem] overflow-hidden relative group h-64 md:h-auto"
          >
            <img
              src={imgAsset_14}
              alt="Great Migration"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute inset-0 p-6 flex items-end">
              <p className="text-white font-headline font-bold text-2xl">
                The Great Migration
              </p>
            </div>
          </Link>

          {/* Small stat block 1 */}
          <div className="md:col-span-1 md:row-span-1 bg-surface-container-highest rounded-[2rem] p-8 flex flex-col justify-center text-center group hover:bg-secondary hover:text-white transition-colors h-64 md:h-auto">
            <div className="text-6xl font-headline font-extrabold text-secondary group-hover:text-white transition-colors">
              4K+
            </div>
            <div className="text-sm font-bold uppercase tracking-wider mt-2">
              Happy Travelers
            </div>
          </div>

          {/* Small CTA Block */}
          <Link
            to="/safaris"
            className="md:col-span-1 md:row-span-1 bg-tertiary rounded-[2rem] p-8 flex flex-col justify-between text-white group cursor-pointer hover:bg-[#059669] transition-all h-64 md:h-auto"
          >
            <ArrowRight
              size={40}
              className="group-hover:translate-x-2 transition-transform"
            />
            <h3 className="text-2xl font-headline font-bold">
              Book Your Safari
            </h3>
          </Link>

          {/* Wide Image Block - Spans 2x1 */}
          <div className="md:col-span-2 md:row-span-1 rounded-[2rem] overflow-hidden relative group h-64 md:h-auto hidden md:block">
            <img
              src={imgAsset_11}
              alt="Savannah"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* ========== FEATURED SAFARIS ========== */}
      <Section className="min-h-[100svh] py-24 md:py-32 flex flex-col justify-center">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <SeasonBadge />
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-[-0.02em]">
                Featured Safaris
              </h2>
              <p className="text-on-surface-variant mt-4 max-w-lg leading-relaxed">
                From short getaways to grand multi-country expeditions - every
                journey is tailored to your sense of adventure.
              </p>
            </div>
            <Link
              to="/safaris"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              View All Safaris
              <ArrowRight size={16} />
            </Link>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredSafaris.map((safari) => (
            <Link
              key={safari.id}
              to={`/safari/${safari.slug}`}
              className="group"
            >
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={safari.image}
                    alt={safari.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-on-primary px-3 py-1 rounded-full text-xs font-bold">
                      {safari.days} Days
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 img-overlay-bottom h-24"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-secondary" />
                    <span className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                      {safari.destinations.slice(0, 3).join(" · ")}
                    </span>
                  </div>
                  <h3 className="text-xl font-headline font-bold text-on-surface mb-1 tracking-tight">
                    {safari.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">
                    {safari.subtitle}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                    <div>
                      <span className="text-2xl font-headline font-bold text-primary">
                        ${safari.price[season].toLocaleString()}
                      </span>
                      <span className="text-xs text-on-surface-variant ml-1">
                        /person
                      </span>
                    </div>
                    <span className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                      View
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </StaggerContainer>
      </Section>

      {/* ========== WHY AVENTARA ========== */}
      <section className="min-h-[100svh] py-24 md:py-32 bg-surface-container-low flex flex-col justify-center">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-[-0.02em] mb-6">
              The Aventara Difference
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              We organize safaris and craft transformative experiences that
              connect you with the soul of East Africa.
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
                desc: "Maximum 6 guests per vehicle ensuring intimate, personalized wildlife encounters.",
              },
              {
                icon: <Clock size={28} />,
                title: "Flexible Booking",
                desc: "Free cancellation up to 30 days before departure. Reschedule with no extra fees.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest rounded-xl p-8 group hover:bg-primary hover:text-on-primary transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6 group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="text-lg font-headline font-bold mb-3">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-on-surface-variant group-hover:text-on-primary/80 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ========== ICONIC DESTINATIONS ========== */}
      <Section className="min-h-[100svh] py-24 md:py-32 flex flex-col justify-center">
        <AnimatedSection className="mb-16">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-[-0.02em] mb-6">
            Iconic Destinations
          </h2>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">
            From Kenya's sweeping savannahs to Tanzania's ancient craters —
            explore the landscapes that make East Africa legendary.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-auto md:h-[44rem]">
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
                  className={`${spanClasses} relative group overflow-hidden rounded-xl min-h-[220px]`}
                >
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                    <span className="text-white/70 text-xs uppercase tracking-widest font-bold mb-1 block">
                      {dest.country}
                    </span>
                    <h3
                      className={`font-headline text-white font-bold ${idx === 0 ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"}`}
                    >
                      {dest.name}
                    </h3>
                    <p className="text-white/70 text-sm mt-1 max-w-xs hidden md:block">
                      {dest.tagline}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={18} className="text-white" />
                  </div>
                </Link>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection className="text-center mt-12">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider hover:gap-3 transition-all border-b-2 border-primary/20 pb-1 hover:border-primary"
          >
            Explore All Destinations
            <ArrowRight size={16} />
          </Link>
        </AnimatedSection>
      </Section>

      {/* ========== PRICING OVERVIEW ========== */}
      <section className="min-h-[100svh] py-24 md:py-32 bg-surface-container-low flex flex-col justify-center">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-[-0.02em] mb-6">
              Safari Packages & Pricing
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Transparent pricing with no hidden fees. All packages include
              accommodation, meals, transport, park fees, and expert guides.
            </p>
            <SeasonBadge className="mt-4" />
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden editorial-shadow">
              <div className="flex flex-col">
                {/* Desktop Header */}
                <div className="hidden md:grid grid-cols-12 gap-4 bg-primary text-on-primary px-6 py-4 font-headline font-semibold text-sm">
                  <div className="col-span-3">Safari Package</div>
                  <div className="col-span-2">Days</div>
                  <div className="col-span-3">Destinations</div>
                  <div className="col-span-2 text-center">Low Season</div>
                  <div className="col-span-2 text-center">High Season</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-outline-variant/10">
                  {safariPackages.map((safari, idx) => (
                    <div
                      key={safari.id}
                      className={`group relative flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center p-6 md:px-6 md:py-5 transition-colors ${
                        idx % 2 === 0
                          ? "bg-surface-container-lowest"
                          : "bg-surface-container-low/30"
                      } hover:bg-surface-container-low`}
                    >
                      {/* Mobile Title & Badge */}
                      <div className="flex justify-between items-start md:col-span-3 mb-4 md:mb-0">
                        <Link
                          to={`/safari/${safari.slug}`}
                          className="font-bold text-xl md:text-base text-on-surface group-hover:text-primary transition-colors pr-4"
                        >
                          {safari.title}
                        </Link>
                        <span className="md:hidden bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                          {safari.days} Days
                        </span>
                      </div>

                      {/* Desktop Days */}
                      <div className="hidden md:block md:col-span-2 text-sm font-medium">
                        {safari.days} Days
                      </div>

                      {/* Destinations */}
                      <div className="md:col-span-3 mb-6 md:mb-0 text-sm text-on-surface-variant flex items-start gap-2 md:block">
                        <MapPin
                          size={16}
                          className="md:hidden text-primary shrink-0 mt-0.5"
                        />
                        <span>
                          {safari.destinations.slice(0, 3).join(", ")}
                          {safari.destinations.length > 3 && "..."}
                        </span>
                      </div>

                      {/* Pricing Grid */}
                      <div className="grid grid-cols-2 md:contents gap-3 mb-6 md:mb-0 border-t border-outline-variant/10 pt-4 md:border-0 md:pt-0">
                        <div className="md:col-span-2 md:text-center flex flex-col md:block items-center justify-center p-3 md:p-0 bg-surface-container-high/50 md:bg-transparent rounded-lg md:rounded-none">
                          <span className="md:hidden text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-1">
                            Low Season
                          </span>
                          <span
                            className={`font-bold ${season === "low" ? "text-primary text-xl md:text-lg" : "text-on-surface-variant text-lg md:text-base"}`}
                          >
                            ${safari.price.low.toLocaleString()}
                          </span>
                        </div>
                        <div className="md:col-span-2 md:text-center flex flex-col md:block items-center justify-center p-3 md:p-0 bg-surface-container-high/50 md:bg-transparent rounded-lg md:rounded-none">
                          <span className="md:hidden text-[10px] uppercase tracking-widest font-bold text-on-surface-variant mb-1">
                            High Season
                          </span>
                          <span
                            className={`font-bold ${season === "high" ? "text-primary text-xl md:text-lg" : "text-on-surface-variant text-lg md:text-base"}`}
                          >
                            ${safari.price.high.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Mobile View Button - Appears below on mobile, hidden on desktop if whole row is clickable, but let's just make it visible on both to match design */}
                      <div className="md:hidden">
                        <Link
                          to={`/safari/${safari.slug}`}
                          className="flex items-center justify-center gap-2 w-full bg-primary/10 text-primary py-3 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-colors"
                        >
                          View Itinerary <ArrowRight size={16} />
                        </Link>
                      </div>

                      {/* Desktop View Link (Optional overlay or explicit link) */}
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

      {/* ========== TESTIMONIALS ========== */}
      <section className="min-h-[100svh] py-24 md:py-32 bg-primary text-on-primary overflow-hidden flex flex-col justify-center">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.4em] text-on-primary/50 font-bold block mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-[-0.02em]">
              Stories from the Wild
            </h2>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className={`transition-all duration-700 ${
                  idx === testimonialIdx
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute inset-0 translate-x-8 pointer-events-none"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-48 h-60 rounded-2xl overflow-hidden shadow-2xl rotate-2">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="currentColor"
                          className="text-secondary-container"
                        />
                      ))}
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-headline leading-snug italic mb-8 text-on-primary/90">
                      "{t.quote}"
                    </blockquote>
                    <p className="text-lg font-bold">{t.name}</p>
                    <p className="text-sm text-on-primary/60 mt-1">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Testimonial Nav */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={() =>
                  setTestimonialIdx(
                    (prev) =>
                      (prev - 1 + testimonials.length) % testimonials.length,
                  )
                }
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === testimonialIdx
                        ? "w-8 bg-white"
                        : "w-3 bg-white/30"
                    }`}
                    aria-label={`Testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setTestimonialIdx((prev) => (prev + 1) % testimonials.length)
                }
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <Section className="min-h-[100svh] py-24 md:py-32 flex flex-col justify-center">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-8 tracking-[-0.03em] leading-[0.95]">
            Your African
            <br />
            <span className="italic font-normal">Story Awaits</span>
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 leading-relaxed">
            Whether you seek the thrill of the Great Migration, the serenity of
            the Ngorongoro Crater, or a family legacy trip - let us craft your
            narrative.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/safaris"
              className="inline-flex items-center gap-3 bg-primary text-on-primary px-12 py-5 rounded-md font-bold text-lg hover:bg-primary-container transition-all duration-300 active:scale-95"
            >
              Browse Safaris
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-outline text-primary px-10 py-4.5 rounded-md font-bold hover:bg-surface-container-low transition-all"
            >
              <WhatsAppIcon size={20} />
              Chat with Us
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </Layout>
  );
}
