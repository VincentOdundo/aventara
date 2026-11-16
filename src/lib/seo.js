// Search-facing copy and structured data, all derived from the safari,
// destination and company data so prices and facts cannot drift apart.
// Pure functions only: this file is used in the browser, during the static
// prerender and by the Markdown generator.
import {
  SEASONS,
  CONTACT_EMAIL,
  safariPackages,
  allPackages,
} from "../data/safaris";
import { destinations } from "../data/destinations";
import {
  INCLUDED,
  MAX_GUESTS_PER_VEHICLE,
  PHONE_DISPLAY,
  TERMS,
} from "../data/company";

export const SITE_URL = "https://cimabravasafaris.co.ke";
export const SITE_NAME = "Cima Brava Adventures";
export const ORG_ID = `${SITE_URL}/#organization`;

export const usd = (n) => `$${n.toLocaleString("en-US")}`;
export const durationLabel = (days) =>
  days === 0.5 ? "Half day" : `${days} days`;
export const absoluteUrl = (path) =>
  /^https?:/.test(path) ? path : `${SITE_URL}${path}`;

const seasonDates = (key) => SEASONS[key].dates.replace(" - ", " – ");
const list = (items) =>
  items.length <= 1
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

/* ---------- catalogue helpers ---------- */

export const CATEGORIES = {
  kenya: { label: "Kenya Safaris", path: "/safaris/kenya" },
  tanzania: { label: "Tanzania Safaris", path: "/safaris/tanzania" },
  combined: { label: "Kenya & Tanzania Safaris", path: "/safaris/combined" },
  nairobi: { label: "Nairobi Day Trips", path: "/safaris/nairobi" },
};

/** Which collection a safari is sold under: kenya, tanzania, combined or nairobi. */
export function categoryOf(safari) {
  return (
    Object.keys(allPackages).find((key) =>
      allPackages[key].some((p) => p.slug === safari.slug),
    ) || "kenya"
  );
}

const destinationTerm = (dest) =>
  dest.name
    .toLowerCase()
    .replace(/ (national park|crater|conservancy)$/, "");

const visits = (safari, dest) => {
  const term = destinationTerm(dest);
  return safari.destinations.some((d) => d.toLowerCase().includes(term));
};

/** Destination guides for the parks a safari actually visits. */
export const destinationsForSafari = (safari) =>
  destinations.filter((dest) => visits(safari, dest));

/** Safaris that actually visit a destination. */
export const safarisForDestination = (dest) =>
  safariPackages.filter((safari) => visits(safari, dest));

/** Up to `count` other safaris from the same collection, closest in length. */
export function similarSafaris(safari, count = 3) {
  const category = categoryOf(safari);
  const pool =
    allPackages[category].length > 1 ? allPackages[category] : safariPackages;
  return pool
    .filter((p) => p.slug !== safari.slug)
    .sort(
      (a, b) =>
        Math.abs(a.days - safari.days) - Math.abs(b.days - safari.days),
    )
    .slice(0, count);
}

export const staysOf = (safari) => [
  ...new Set(
    (safari.itinerary || [])
      .map((d) => d.accommodation)
      .filter(Boolean)
      .map((a) => String(a).split(" (")[0].trim()),
  ),
];

/** Where the trip starts and ends, read from the itinerary itself. */
export function startAndEnd(safari) {
  const days = safari.itinerary || [];
  if (!days.length) return null;
  const first = `${days[0].title} ${days[0].description}`;
  const start =
    categoryOf(safari) === "tanzania" && /Arusha/.test(first)
      ? "Arusha"
      : "Nairobi";
  const end = String(days[days.length - 1].destination || start);
  return { start, end };
}

/* ---------- page copy ---------- */

export function safariTitle(safari) {
  return `${safari.title} from ${usd(safari.price.low)}`;
}

export function safariDescription(safari) {
  const { low, high } = safari.price;
  if (categoryOf(safari) === "nairobi") {
    return `${safari.subtitle} ${usd(low)} per person with guide, transport and bottled water.`;
  }
  const price =
    low === high
      ? `${usd(low)} per person all year.`
      : `From ${usd(low)} per person in low season, ${usd(high)} in high season.`;
  return `${price} ${safari.subtitle} Park fees, accommodation, meals and transfers included.`;
}

export function safariPriceAnswer(safari) {
  const { low, high } = safari.price;
  const single = safari.singlePrice;
  if (categoryOf(safari) === "nairobi") {
    return `The ${safari.title} costs ${usd(low)} per person. The price is the same all year.`;
  }
  let answer =
    low === high
      ? `The ${safari.title} costs ${usd(low)} per person all year, when two or more travellers share a room.`
      : `The ${safari.title} costs ${usd(low)} per person in low season (${seasonDates("low")}) and ${usd(high)} per person in high season (${seasonDates("high")}), when two or more travellers share a room.`;
  if (single && (single.low !== low || single.high !== high)) {
    answer +=
      single.low === single.high
        ? ` A solo traveller in a single room pays ${usd(single.low)}.`
        : ` A solo traveller in a single room pays ${usd(single.low)} in low season and ${usd(single.high)} in high season.`;
  }
  return `${answer} Prices are in US dollars.`;
}

const BOOKING_ANSWER = `Send your travel dates and the number of travellers on WhatsApp (${PHONE_DISPLAY}) or by email (${CONTACT_EMAIL}). We reply within 24 hours with availability, the final price and the day-by-day plan. You can cancel free of charge up to 30 days before departure.`;

/** Questions a traveller asks about one safari, answered from its own data. */
export function safariFaqs(safari) {
  const faqs = [
    {
      q: `How much does the ${safari.title} cost?`,
      a: safariPriceAnswer(safari),
    },
    {
      q: "What is included in the price?",
      a: `${safari.included.join("; ")}.`,
    },
    {
      q: "What is not included?",
      a: `${safari.excluded.join("; ")}.`,
    },
  ];

  const route = startAndEnd(safari);
  if (route && safari.days >= 1) {
    faqs.push({
      q: "Where does the safari start and end, and which parks does it visit?",
      a: `It starts in ${route.start} and ends in ${route.end}. The route covers ${list(safari.destinations)}.`,
    });
  }

  const stays = staysOf(safari);
  if (stays.length) {
    faqs.push({
      q: "Where do you stay?",
      a: `Overnight stays are at ${list(stays)}. Your quote confirms the exact property for each night.`,
    });
  }

  if (safari.days >= 1) {
    faqs.push({
      q: "How many people share a vehicle?",
      a: `Shared departures carry a maximum of ${MAX_GUESTS_PER_VEHICLE} guests in each 4x4, and every guest has a window seat. A private vehicle and driver-guide can be arranged on your own dates.`,
    });
  }

  if (safari.optionalActivities && safari.optionalActivities.length) {
    faqs.push({
      q: "Which optional activities can I add?",
      a: `Optional extras are paid per person: ${list(
        safari.optionalActivities.map((x) => `${x.name} (${usd(x.price)})`),
      )}.`,
    });
  }

  faqs.push({ q: "How do I book?", a: BOOKING_ANSWER });
  return faqs;
}

/** Questions that apply to every safari, answered from the company terms. */
export function generalFaqs() {
  const term = (title) => TERMS.find((t) => t.title === title).body;
  const multiDay = safariPackages.filter((p) => p.days >= 1);
  const cheapest = [...multiDay].sort((a, b) => a.price.low - b.price.low)[0];
  const dayTrips = allPackages.nairobi || [];
  const longest = [...multiDay].sort((a, b) => b.days - a.days)[0];

  return [
    {
      q: "What is the cheapest safari you run?",
      a: `The lowest-priced multi-day safari is the ${cheapest.title} at ${usd(cheapest.price.low)} per person in low season.${
        dayTrips.length
          ? ` The ${dayTrips[0].title} costs ${usd(dayTrips[0].price.low)} per person.`
          : ""
      } The longest trip is ${longest.days} days.`,
    },
    {
      q: "What does the safari price include?",
      a: `${INCLUDED.join("; ")}. Each safari page lists its own inclusions in full.`,
    },
    {
      q: "When are low season and high season?",
      a: `Low season runs ${seasonDates("low")} and high season runs ${seasonDates("high")}. Every safari shows its per-person price for both.`,
    },
    { q: "Can I cancel my booking?", a: term("Cancellation") },
    { q: "Do children pay full price?", a: term("Children") },
    { q: "Can I travel alone?", a: term("Solo travellers") },
    { q: "Are tips included?", a: term("Tipping") },
    { q: "What happens if park fees go up?", a: term("Park fees") },
    { q: "How do I book a safari?", a: BOOKING_ANSWER },
  ];
}

/* ---------- structured data ---------- */

const strip = (node) => {
  const { "@context": _context, ...rest } = node;
  return rest;
};

/** Combines several JSON-LD nodes into one @graph document. */
export function graph(...nodes) {
  const items = nodes.filter(Boolean).map(strip);
  if (!items.length) return null;
  return { "@context": "https://schema.org", "@graph": items };
}

export function breadcrumbLd(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

const provider = {
  "@type": "TravelAgency",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
};

/** One safari: what it is, where it goes, who runs it, what it costs. */
export function safariLd(safari) {
  if (!safari) return null;
  const url = `${SITE_URL}/safari/${safari.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${url}#trip`,
    name: safari.title,
    description: safari.subtitle,
    url,
    image: absoluteUrl(safari.image),
    touristType: "Safari",
    itinerary: {
      "@type": "ItemList",
      itemListElement: (safari.itinerary || []).map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: `${day.destination}: ${day.title}`,
      })),
    },
    provider,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: safari.price.low,
      highPrice: safari.price.high,
      url,
    },
  };
}

export function safariListLd(safaris, name) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: safaris.length,
    itemListElement: safaris.map((safari, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: safari.title,
      url: `${SITE_URL}/safari/${safari.slug}`,
    })),
  };
}

export function destinationLd(dest) {
  const url = `${SITE_URL}/destinations/${dest.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `${url}#destination`,
    name: dest.name,
    description: dest.description,
    url,
    image: absoluteUrl(dest.image),
    containedInPlace: { "@type": "Country", name: dest.country },
  };
}

/* ---------- breadcrumb trails ---------- */

const HOME = { name: "Home", path: "/" };
const SAFARIS = { name: "Safaris", path: "/safaris" };
const DESTINATIONS = { name: "Destinations", path: "/destinations" };

export function safariCrumbs(safari) {
  const category = CATEGORIES[categoryOf(safari)];
  return [
    HOME,
    SAFARIS,
    { name: category.label, path: category.path },
    { name: safari.title, path: `/safari/${safari.slug}` },
  ];
}

export function hubCrumbs(country) {
  const category = CATEGORIES[country];
  return category
    ? [HOME, SAFARIS, { name: category.label, path: category.path }]
    : [HOME, SAFARIS];
}

export function destinationCrumbs(dest) {
  return [
    HOME,
    DESTINATIONS,
    { name: dest.name, path: `/destinations/${dest.slug}` },
  ];
}

export const pageCrumbs = (name, path) => [HOME, { name, path }];
