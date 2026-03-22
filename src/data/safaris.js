// Safari packages data re-export from modular structure
// LOW SEASON: Jan 1 - Jun 30, 2026 | HIGH SEASON: Jul 1 - Dec 31, 2026

import {
  safariPackages,
  allPackages,
  getSafarisByCountry,
  getSafarisByDays,
  getSafariBySlug,
  getSafarisByPriceRange,
  getUniqueDestinations,
  getUniqueDays,
} from "./packages/index";

export const WHATSAPP_NUMBER = "254112346049"; // Replace with actual number

export const SEASONS = {
  low: {
    label: "Low Season",
    dates: "Jan 1 - Jun 30",
    months: [0, 1, 2, 3, 4, 5],
  },
  high: {
    label: "High Season",
    dates: "Jul 1 - Dec 31",
    months: [6, 7, 8, 9, 10, 11],
  },
};

export function getCurrentSeason() {
  const month = new Date().getMonth();
  return SEASONS.low.months.includes(month) ? "low" : "high";
}

// Re-export all safari packages and utilities for use throughout the app
export {
  safariPackages,
  allPackages,
  getSafarisByCountry,
  getSafarisByDays,
  getSafariBySlug,
  getSafarisByPriceRange,
  getUniqueDestinations,
  getUniqueDays,
};
