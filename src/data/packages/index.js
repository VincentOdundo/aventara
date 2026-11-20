// Import all Kenya packages
import { package2DayMara } from "./kenya/2day-mara";
import { package3DayMara } from "./kenya/3day-mara";
import { package3DayAmboseli } from "./kenya/3day-amboseli";
import { package4DayMaraNakuru } from "./kenya/4day-mara-nakuru";
import { package5DayMaraNakuruNaivasha } from "./kenya/5day-mara-nakuru-naivasha";
import { package6DayMaraNakuruAmboseli } from "./kenya/6day-mara-nakuru-amboseli";
import { package7DayMaraNakuruNaivashaAmboseli } from "./kenya/7day-mara-nakuru-naivasha-amboseli";
import { package8DayMaraNakuruAmboseli } from "./kenya/8day-mara-nakuru-amboseli";

// Import all Tanzania packages
import { package3DayTanzania } from "./tanzania/3day-serengeti-ngorongoro";
import { package4DayTanzania } from "./tanzania/4day-tanzania";
import { package5DayTanzania } from "./tanzania/5day-tanzania";
import { package6DayTanzania } from "./tanzania/6day-tanzania";

// Import all combined packages
import { package10DayKenyaTanzania } from "./combined/10day-kenya-tanzania";
import { package11DayKenyaTanzania } from "./combined/11day-kenya-tanzania";
import { package12DayKenyaTanzania } from "./combined/12day-kenya-tanzania";
import { package12DayKenyaTanzaniaSerengeti } from "./combined/12day-kenya-tanzania-serengeti";

// Import Nairobi packages
import { packageHalfDayNairobi } from "./nairobi/half-day-nairobi";

// Itinerary photos are chosen by where each day is spent, never by position.
// See PLACE_POOLS in ../photos.js for which photos may stand for which place.
import { PLACE_POOLS } from "../photos";

const PARKS = [
  ["hellsgate", /hell'?s gate|geothermal/],
  ["amboseli", /amboseli|kilimanjaro/],
  ["mara", /masai mara|maasai mara|\bmara\b/],
  ["nakuru", /nakuru/],
  ["naivasha", /naivasha/],
  ["ngorongoro", /ngorongoro|crater/],
  ["serengeti", /serengeti/],
  ["tarangire", /tarangire/],
  ["manyara", /manyara/],
];

// Which place's photos a day should use. The overnight place wins, except on
// transit days (to or from Nairobi/Arusha) that are really spent in a park.
function placeForDay(day) {
  const dest = String(day.destination || "").toLowerCase();
  const title = String(day.title || "").toLowerCase();
  // What the day is about beats where it ends: "Rhinos & Pink Flamingos" is a
  // Nakuru day even when the night is spent at Naivasha.
  if (/rhino|flamingo/.test(title) && /nakuru|naivasha/.test(dest)) return "nakuru";
  if (/hell\'?s gate|geothermal/.test(title)) return "hellsgate";
  const direct = PARKS.find(([, re]) => re.test(dest));
  if (direct) return direct[0];
  const hub = /arusha/.test(dest) ? "arusha" : "nairobi";
  const journeyTitle = title.replace(/return to (arusha|nairobi)/g, "");
  if (/(arusha|nairobi)/.test(journeyTitle)) return hub;
  const inTitle = PARKS.find(([, re]) => re.test(title));
  return inTitle ? inTitle[0] : hub;
}

function enrichPackageImages(pkg) {
  if (!pkg || !Array.isArray(pkg.itinerary)) return pkg;
  const used = {};
  pkg.itinerary = pkg.itinerary.map((day) => {
    if (day.image) return day;
    const place = placeForDay(day);
    const pool = PLACE_POOLS[place];
    const n = used[place] || 0;
    used[place] = n + 1;
    return { ...day, image: pool[n % pool.length].src };
  });
  return pkg;
}

[
  package2DayMara,
  package3DayMara,
  package3DayAmboseli,
  package4DayMaraNakuru,
  package5DayMaraNakuruNaivasha,
  package6DayMaraNakuruAmboseli,
  package7DayMaraNakuruNaivashaAmboseli,
  package8DayMaraNakuruAmboseli,
  package3DayTanzania,
  package4DayTanzania,
  package5DayTanzania,
  package6DayTanzania,
  package10DayKenyaTanzania,
  package11DayKenyaTanzania,
  package12DayKenyaTanzania,
  package12DayKenyaTanzaniaSerengeti,
  packageHalfDayNairobi,
].forEach(enrichPackageImages);

// Export individual packages
export {
  // Kenya
  package2DayMara,
  package3DayMara,
  package3DayAmboseli,
  package4DayMaraNakuru,
  package5DayMaraNakuruNaivasha,
  package6DayMaraNakuruAmboseli,
  package7DayMaraNakuruNaivashaAmboseli,
  package8DayMaraNakuruAmboseli,
  // Tanzania
  package3DayTanzania,
  package4DayTanzania,
  package5DayTanzania,
  package6DayTanzania,
  // Combined
  package10DayKenyaTanzania,
  package11DayKenyaTanzania,
  package12DayKenyaTanzania,
  package12DayKenyaTanzaniaSerengeti,
  // Nairobi
  packageHalfDayNairobi,
};

// Consolidated list of all packages organized by category
export const allPackages = {
  kenya: [
    package2DayMara,
    package3DayMara,
    package3DayAmboseli,
    package4DayMaraNakuru,
    package5DayMaraNakuruNaivasha,
    package6DayMaraNakuruAmboseli,
    package7DayMaraNakuruNaivashaAmboseli,
    package8DayMaraNakuruAmboseli,
  ],
  tanzania: [
    package3DayTanzania,
    package4DayTanzania,
    package5DayTanzania,
    package6DayTanzania,
  ],
  combined: [
    package10DayKenyaTanzania,
    package11DayKenyaTanzania,
    package12DayKenyaTanzania,
    package12DayKenyaTanzaniaSerengeti,
  ],
  nairobi: [packageHalfDayNairobi],
};

// Flat list of all packages for backwards compatibility
export const safariPackages = [
  ...allPackages.kenya,
  ...allPackages.tanzania,
  ...allPackages.combined,
  ...allPackages.nairobi,
];

// Get packages by country (for filtering)
export function getSafarisByCountry(country) {
  if (country === "kenya") {
    return allPackages.kenya;
  } else if (country === "tanzania") {
    return allPackages.tanzania;
  } else if (country === "combined") {
    return allPackages.combined;
  } else if (country === "nairobi") {
    return allPackages.nairobi;
  }
  return safariPackages;
}

// Get packages by number of days (for filtering)
export function getSafarisByDays(days) {
  return safariPackages.filter((pkg) => pkg.days === parseInt(days));
}

// Get package by slug
export function getSafariBySlug(slug) {
  return safariPackages.find((pkg) => pkg.slug === slug);
}

// Get packages by price range
export function getSafarisByPriceRange(minPrice, maxPrice, season = "low") {
  return safariPackages.filter((pkg) => {
    const price = pkg.price[season];
    return price >= minPrice && price <= maxPrice;
  });
}

// Get unique destinations
export function getUniqueDestinations() {
  const destinations = new Set();
  safariPackages.forEach((pkg) => {
    pkg.destinations.forEach((dest) => destinations.add(dest));
  });
  return Array.from(destinations).sort();
}

// Get unique number of days
export function getUniqueDays() {
  const days = new Set(safariPackages.map((pkg) => pkg.days));
  return Array.from(days).sort((a, b) => a - b);
}
