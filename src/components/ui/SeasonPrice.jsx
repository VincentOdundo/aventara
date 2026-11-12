import React from "react";
import { getCurrentSeason } from "../../data/safaris";

export function SeasonBadge({ className = "" }) {
  const season = getCurrentSeason();
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
        season === "low" ? "season-badge-low" : "season-badge-high"
      } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          season === "low" ? "bg-savannah-gold" : "bg-sunset-orange"
        }`}
      />
      {season === "low" ? "Low Season" : "High Season"}
    </span>
  );
}

export function PriceDisplay({
  safari,
  season = null,
  guests = 2,
  className = "",
}) {
  const s = season || getCurrentSeason();
  const isSingle = guests === 1 && safari.singlePrice;
  const price = isSingle ? safari.singlePrice[s] : safari.price[s];
  const otherSeason = s === "low" ? "high" : "low";
  const otherPrice = isSingle
    ? safari.singlePrice[otherSeason]
    : safari.price[otherSeason];

  return (
    <div className={className}>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-headline font-bold text-sunset-orange">
          ${price.toLocaleString()}
        </span>
        <span className="text-sm text-safari-brown/75 font-medium">
          / person
        </span>
      </div>
      <p className="text-xs text-safari-brown/70 mt-1 font-medium">
        {isSingle ? "Single (1 room)" : "2+ travelers (sharing)"} ·{" "}
        {s === "low" ? "High" : "Low"} season: ${otherPrice.toLocaleString()}/pp
      </p>
      {safari.singlePrice &&
        safari.singlePrice[s] !== safari.price[s] && (
          <p className="text-xs text-safari-brown/65 mt-0.5 font-medium">
            {isSingle
              ? `2+ sharing rate: $${safari.price[s].toLocaleString()}/pp`
              : `Solo traveler (1 room): $${safari.singlePrice[s].toLocaleString()}/pp`}
          </p>
        )}
    </div>
  );
}
