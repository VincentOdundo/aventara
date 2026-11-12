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

export function PriceDisplay({ safari, season = null, className = "" }) {
  const s = season || getCurrentSeason();
  const price = safari.price[s];
  const otherPrice = safari.price[s === "low" ? "high" : "low"];

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
      <p className="text-xs text-safari-brown/65 mt-1 font-medium">
        {s === "low" ? "High" : "Low"} season: ${otherPrice.toLocaleString()}/pp
      </p>
    </div>
  );
}
