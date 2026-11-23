"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Filter, X, Search } from "lucide-react";
import { SeasonBadge } from "../ui/SeasonPrice";
import { Photo } from "../ui/Photo";

export function SafarisFilterGrid({ baseSafaris, initialSeason, initialQuery = "" }) {
  const season = initialSeason;
  const [daysFilter, setDaysFilter] = useState("all");
  const [budgetFilter, setBudgetFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("q");
    if (q) setSearchQuery(q);
  }, []);

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
    <>
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
              type="button"
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
            type="button"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSafaris.map((safari) => (
            <Link
              key={safari.id}
              href={`/safari/${safari.slug}`}
              className="group"
              id={`pkg-${safari.slug}`}
            >
              <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <Photo
                    src={safari.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/35 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-3 py-1 rounded-full text-xs font-body font-bold shadow-md">
                      {safari.days === 0.5 ? "Half Day" : `${safari.days} Days`}
                    </span>
                    <span className="bg-safari-brown/90 text-sand-cream border border-savannah-gold/30 px-3 py-1 rounded-full text-xs font-body font-bold capitalize">
                      {safari.country === "combined" ? "KE & TZ" : safari.country}
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
                  <h2 className="text-xl font-headline font-bold text-safari-brown group-hover:text-sunset-orange transition-colors mb-1">
                    {safari.title}
                  </h2>
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
        </div>
      )}
    </>
  );
}
