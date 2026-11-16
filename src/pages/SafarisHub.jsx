import React, { useState, useMemo } from "react";
import { useSeo } from "../hooks/useSeo";
import {
  breadcrumbLd,
  faqLd,
  generalFaqs,
  graph,
  hubCrumbs,
  safariListLd,
} from "../lib/seo";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import {
  Section,
  StaggerContainer,
  Breadcrumbs,
  FaqSection,
} from "../components/ui";
import { SeasonBadge } from "../components/ui/SeasonPrice";
import {
  safariPackages,
  getCurrentSeason,
  getSafarisByCountry,
} from "../data/safaris";
import { ArrowRight, MapPin, Calendar, Filter, X, Search } from "lucide-react";

import heroImg from "../assets/lioness.jpeg";

export default function SafarisHub() {
  const { country } = useParams();
  const hubSeo = {
    kenya: ["Kenya Budget Safari Packages & Prices (2–8 Days)", "Kenya budget safaris from 2 to 8 days with per-person prices for low and high season. Park fees, meals and transfers included."],
    tanzania: ["Tanzania Budget Safari Packages & Prices (3–6 Days)", "Serengeti, Ngorongoro, Tarangire and Lake Manyara safaris from 3 to 6 days, with per-person prices for low and high season."],
    combined: ["Kenya & Tanzania Combined Safaris (10–12 Days)", "Cross-border safaris from 10 to 12 days covering the Masai Mara, Amboseli, the Serengeti and Ngorongoro Crater in one booking."],
    nairobi: ["Nairobi Day Trips & Half-Day Tours", "Short wildlife and city outings in Nairobi for stopovers and free days."],
  }[country] || ["Kenya & Tanzania Safari Packages & Prices", "Every safari we run in Kenya and Tanzania, from a Nairobi half-day to 12 days across both countries, with prices for low and high season."];
  const crumbs = hubCrumbs(country);
  const faqs = generalFaqs();
  const listedSafaris = country ? getSafarisByCountry(country) : safariPackages;
  useSeo({
    title: hubSeo[0],
    description: hubSeo[1],
    path: country ? `/safaris/${country}` : "/safaris",
    jsonLd: graph(
      safariListLd(listedSafaris, hubSeo[0]),
      breadcrumbLd(crumbs),
      faqLd(faqs),
    ),
  });
  const season = getCurrentSeason();
  const [daysFilter, setDaysFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const pageTitle =
    country === "kenya"
      ? "Kenya Budget Safari Packages"
      : country === "tanzania"
        ? "Tanzania Budget Safari Packages"
        : country === "combined"
          ? "Kenya & Tanzania Combined Safaris"
          : country === "nairobi"
            ? "Nairobi Day Trips"
            : "Kenya & Tanzania Safari Packages";
  const pageDesc = country
    ? country === "combined"
      ? "Cross-border adventures spanning both Kenya and Tanzania."
      : country === "nairobi"
        ? "Quick Nairobi experiences perfect for stopovers and city explorers."
        : `Discover the best safari experiences ${country === "kenya" ? "Kenya" : "Tanzania"} has to offer.`
    : "From half-day Nairobi escapes & 2-day Mara getaways to 12-day cross-border expeditions — find the safari that matches your dream.";

  const baseSafaris = country ? getSafarisByCountry(country) : safariPackages;

  const filteredSafaris = useMemo(() => {
    let result = [...baseSafaris];
    if (daysFilter !== "all") {
      const [min, max] = daysFilter.split("-").map(Number);
      result = result.filter((s) => s.days >= min && s.days <= (max || 99));
    }
    if (budgetFilter !== "all") {
      const [min, max] = budgetFilter.split("-").map(Number);
      result = result.filter((s) => {
        const p = s.price[season];
        return p >= min && p <= (max || 99999);
      });
    }
    if (searchQuery.trim()) {
      const term = searchQuery.trim().toLowerCase();
      result = result.filter((s) => {
        const haystack = [s.title, s.subtitle, ...(s.destinations || [])]
          .join(" ")
          .toLowerCase();
        return haystack.includes(term);
      });
    }
    return result;
  }, [baseSafaris, daysFilter, budgetFilter, season, searchQuery]);

  const hasFilters =
    daysFilter !== "all" || budgetFilter !== "all" || searchQuery.trim() !== "";

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden text-center bg-midnight-black">
        <img
          src={heroImg}
          alt="A lioness in the grass on a Kenya safari"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
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
          <p className="text-sand-cream/95 font-body mt-3 max-w-xl drop-shadow-sm">{pageDesc}</p>
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
            { label: "Nairobi Day Trips", to: "/safaris/nairobi" },
          ].map((tab) => (
            <Link
              key={tab.to}
              to={tab.to}
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

      {/* Package Navigator */}
      <section className="bg-sand-cream border-b border-savannah-gold/20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-5">
          <p className="text-xs uppercase tracking-[0.2em] text-sunset-orange font-body font-bold mb-3">
            Jump to package
          </p>
          <div className="flex flex-wrap gap-2">
            {baseSafaris.map((pkg) => (
              <a
                key={pkg.id}
                href={`#pkg-${pkg.slug}`}
                className="px-4 py-2 rounded-full text-xs font-body font-bold bg-sand-cream border border-savannah-gold/40 text-safari-brown hover:bg-gradient-to-b hover:from-sunrise-yellow hover:to-savannah-gold hover:text-midnight-black transition-all shadow-sm"
              >
                {pkg.days}D · {pkg.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <Section className="py-16 md:py-20 bg-sand-cream">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <SeasonBadge />
            <span className="text-sm font-body text-safari-brown/80">
              {filteredSafaris.length} package
              {filteredSafaris.length !== 1 ? "s" : ""} available
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-safari-brown/70"
              />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search package or destination"
                className="bg-sand-cream text-midnight-black placeholder:text-safari-brown/50 rounded-full pl-9 pr-4 py-2 text-sm font-body font-medium border border-savannah-gold/40 focus:outline-none focus:ring-2 focus:ring-savannah-gold w-64 max-w-[80vw]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-sunset-orange" />
              <select
                value={daysFilter}
                onChange={(e) => setDaysFilter(e.target.value)}
                className="bg-sand-cream text-midnight-black rounded-full px-4 py-2 text-sm font-body font-medium border border-savannah-gold/40 focus:outline-none focus:ring-2 focus:ring-savannah-gold"
              >
                <option value="all">All Durations</option>
                <option value="0-2">0-2 Days</option>
                <option value="3-5">3–5 Days</option>
                <option value="6-8">6–8 Days</option>
                <option value="9-14">9–14 Days</option>
              </select>
            </div>
            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
              className="bg-sand-cream text-midnight-black rounded-full px-4 py-2 text-sm font-body font-medium border border-savannah-gold/40 focus:outline-none focus:ring-2 focus:ring-savannah-gold"
            >
              <option value="all">All Budgets</option>
              <option value="0-800">Under $800</option>
              <option value="800-1500">$800 – $1,500</option>
              <option value="1500-3000">$1,500 – $3,000</option>
              <option value="3000-99999">$3,000+</option>
            </select>
            {hasFilters && (
              <button
                onClick={() => {
                  setDaysFilter("all");
                  setBudgetFilter("all");
                  setSearchQuery("");
                }}
                className="text-xs font-body text-crane-red font-bold flex items-center gap-1 hover:text-sunset-orange transition-colors px-3 py-1.5 rounded-full border border-crane-red/30 bg-crane-red/10"
              >
                <X size={14} /> Clear
              </button>
            )}
          </div>
        </div>

        {filteredSafaris.length === 0 ? (
          <div className="text-center py-20 bg-sand-cream rounded-2xl border border-savannah-gold/30">
            <p className="text-safari-brown font-body text-lg">
              No safaris match your filters.
            </p>
            <button
              onClick={() => {
                setDaysFilter("all");
                setBudgetFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold px-6 py-2.5 rounded-full shadow-md hover:brightness-105 transition-all"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSafaris.map((safari) => (
              <Link
                key={safari.id}
                to={`/safari/${safari.slug}`}
                className="group"
                id={`pkg-${safari.slug}`}
              >
                <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={safari.image}
                      alt={safari.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/35 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-3 py-1 rounded-full text-xs font-body font-bold shadow-md">
                        {safari.days === 0.5 ? "Half Day" : `${safari.days} Days`}
                      </span>
                      <span className="bg-safari-brown/90 text-sand-cream border border-savannah-gold/30 px-3 py-1 rounded-full text-xs font-body font-bold capitalize">
                        {safari.country === "combined"
                          ? "KE & TZ"
                          : safari.country}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={14} className="text-sunset-orange" />
                      <span className="text-xs uppercase tracking-wider text-sunset-orange font-body font-bold">
                        {safari.destinations.slice(0, 3).join(" · ")}
                      </span>
                    </div>
                    <h3 className="text-xl font-headline font-bold text-safari-brown group-hover:text-sunset-orange transition-colors mb-1">
                      {safari.title}
                    </h3>
                    <p className="text-sm font-body text-safari-brown/80 mb-4 flex-grow">
                      {safari.subtitle}
                    </p>
                    <div className="flex items-center gap-4 mb-4 text-xs font-body text-safari-brown/75">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-savannah-gold" />{" "}
                        {safari.days === 0.5 ? "Half Day" : `${safari.days} Days`}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-savannah-gold" />{" "}
                        {safari.destinations.length} Parks
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-savannah-gold/25">
                      <div>
                        <span className="text-2xl font-headline font-bold text-safari-brown">
                          ${safari.price[season].toLocaleString()}
                        </span>
                        <span className="text-xs font-body text-safari-brown/70 ml-1">
                          /pp
                        </span>
                        {safari.singlePrice &&
                          safari.singlePrice[season] !== safari.price[season] && (
                            <span className="block text-[11px] font-body text-safari-brown/65">
                              Single: ${safari.singlePrice[season].toLocaleString()}
                            </span>
                          )}
                      </div>
                      <span className="bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-4 py-2 rounded-full text-xs font-body font-bold uppercase tracking-wider shadow-md group-hover:brightness-105 flex items-center gap-1.5 transition-all">
                        Explore Trip <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </StaggerContainer>
        )}

        <FaqSection
          faqs={faqs}
          title="Safari prices and booking: questions and answers"
          className="mt-20 max-w-4xl"
        />
      </Section>
    </Layout>
  );
}
