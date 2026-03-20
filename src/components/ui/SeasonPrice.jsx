import React from "react";
import { getCurrentSeason} from "../../data/safaris";

export function SeasonBadge({ className = "" }) {
  const season = getCurrentSeason();
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
        season === "low" ? "season-badge-low" : "season-badge-high"
      } ${className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          season === "low" ? "bg-primary" : "bg-secondary"
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
        <span className="text-3xl font-headline font-bold text-primary">
          ${price.toLocaleString()}
        </span>
        <span className="text-sm text-on-surface-variant font-medium">
          / person
        </span>
      </div>
      <p className="text-xs text-on-surface-variant mt-1">
        {s === "low" ? "High" : "Low"} season: ${otherPrice.toLocaleString()}/pp
      </p>
    </div>
  );
}
