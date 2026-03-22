import React, { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection, StaggerContainer } from "../components/ui";
import { SeasonBadge } from "../components/ui/SeasonPrice";
import {
  safariPackages,
  getCurrentSeason,
  getSafarisByCountry,
} from "../data/safaris";
import { ArrowRight, MapPin, Calendar, Filter, X, Search } from "lucide-react";

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

export default function SafarisHub() {
  const { country } = useParams();
  const season = getCurrentSeason();
  const [daysFilter, setDaysFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const pageTitle =
    country === "kenya"
      ? "Kenya Safaris"
      : country === "tanzania"
        ? "Tanzania Safaris"
        : country === "combined"
          ? "Kenya & Tanzania Safaris"
          : country === "nairobi"
            ? "Nairobi Day Trips"
            : "All Safari Packages";
  const pageDesc = country
    ? country === "combined"
      ? "Epic cross-border adventures spanning both Kenya and Tanzania."
      : country === "nairobi"
        ? "Quick Nairobi experiences perfect for stopovers and city explorers."
        : `Discover the best safari experiences ${country === "kenya" ? "Kenya" : "Tanzania"} has to offer.`
    : "From 3-day getaways to 14-day epic expeditions - find the safari that matches your dream.";

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
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden text-center">
        <img
          src={imgAsset_7}
          alt={pageTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 img-overlay-full"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/70 font-bold mb-3 block">
            {country
              ? country === "combined"
                ? "Cross-Border"
                : country.charAt(0).toUpperCase() + country.slice(1)
              : "East Africa"}
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-[-0.02em]">
            {pageTitle}
          </h1>
          <p className="text-white/80 mt-3 max-w-xl">{pageDesc}</p>
        </div>
      </section>

      {/* Country Tabs */}
      <section className="bg-surface-container-lowest border-b border-outline-variant/10 sticky top-[64px] lg:top-[72px] z-30 editorial-shadow">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center gap-1 overflow-x-auto py-2">
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
              className={`px-5 py-2.5 rounded-md text-sm font-medium whitespace-nowrap transition-all ${
                (tab.to === "/safaris" && !country) ||
                tab.to === `/safaris/${country}`
                  ? "bg-primary text-on-primary"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Package Navigator */}
      <section className="bg-surface-container-low border-b border-outline-variant/10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-5">
          <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-3">
            Jump to package
          </p>
          <div className="flex flex-wrap gap-2">
            {baseSafaris.map((pkg) => (
              <a
                key={pkg.id}
                href={`#pkg-${pkg.slug}`}
                className="px-3 py-2 rounded-md text-xs font-bold bg-surface-container-high text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors"
              >
                {pkg.days}D · {pkg.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <Section className="py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <SeasonBadge />
            <span className="text-sm text-on-surface-variant">
              {filteredSafaris.length} package
              {filteredSafaris.length !== 1 ? "s" : ""} available
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant"
              />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search package or destination"
                className="bg-surface-container-high rounded-md pl-9 pr-4 py-2 text-sm font-medium border-none focus:ring-2 focus:ring-surface-tint w-64 max-w-[80vw]"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-on-surface-variant" />
              <select
                value={daysFilter}
                onChange={(e) => setDaysFilter(e.target.value)}
                className="bg-surface-container-high rounded-md px-4 py-2 text-sm font-medium border-none focus:ring-2 focus:ring-surface-tint"
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
              className="bg-surface-container-high rounded-md px-4 py-2 text-sm font-medium border-none focus:ring-2 focus:ring-surface-tint"
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
                className="text-xs text-primary font-bold flex items-center gap-1 hover:text-secondary transition-colors"
              >
                <X size={14} /> Clear
              </button>
            )}
          </div>
        </div>

        {filteredSafaris.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-on-surface-variant text-lg">
              No safaris match your filters.
            </p>
            <button
              onClick={() => {
                setDaysFilter("all");
                setBudgetFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 text-primary font-bold underline"
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
                <div className="bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={safari.image}
                      alt={safari.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-primary/90 text-on-primary px-3 py-1 rounded-full text-xs font-bold">
                        {safari.days} Days
                      </span>
                      <span className="bg-surface/90 text-on-surface px-3 py-1 rounded-full text-xs font-bold capitalize">
                        {safari.country === "combined"
                          ? "KE & TZ"
                          : safari.country}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin size={14} className="text-secondary" />
                      <span className="text-xs uppercase tracking-wider text-on-surface-variant font-bold">
                        {safari.destinations.slice(0, 3).join(" · ")}
                      </span>
                    </div>
                    <h3 className="text-xl font-headline font-bold text-on-surface mb-1">
                      {safari.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mb-4 flex-grow">
                      {safari.subtitle}
                    </p>
                    <div className="flex items-center gap-4 mb-4 text-xs text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} /> {safari.days} Days
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} /> {safari.destinations.length} Parks
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                      <div>
                        <span className="text-2xl font-headline font-bold text-primary">
                          ${safari.price[season].toLocaleString()}
                        </span>
                        <span className="text-xs text-on-surface-variant ml-1">
                          /pp
                        </span>
                      </div>
                      <span className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
                        Details <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </StaggerContainer>
        )}
      </Section>
    </Layout>
  );
}
