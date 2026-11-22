// Search-facing copy, AEO Q&A builders and Schema.org structured data, all
// derived from the safari, destination and company data so prices and facts
// cannot drift apart. Pure functions only: shared by the browser, the static
// prerender and the Markdown generator.
import {
  SEASONS,
  CONTACT_EMAIL,
  safariPackages,
  allPackages,
} from "../data/safaris";
import { destinations } from "../data/destinations";
import { SAFARI_CONTENT } from "../data/safariContent";
import { DESTINATION_CONTENT } from "../data/destinationContent";
import { HUB_CONTENT } from "../data/hubContent";
import {
  INCLUDED,
  MAX_GUESTS_PER_VEHICLE,
  NOT_INCLUDED,
  PHONE_DISPLAY,
  STEPS,
  TERMS,
} from "../data/company";

export const SITE_URL = "https://cimabravasafaris.co.ke";
export const SITE_NAME = "Cima Brava Adventures";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const usd = (n) => `$${n.toLocaleString("en-US")}`;
export const durationLabel = (days) =>
  days === 0.5 ? "Half day" : `${days} days`;
export const isoDuration = (days) =>
  days === 0.5 ? "PT4H" : `P${days}D`;
export const absoluteUrl = (path) =>
  /^https?:/.test(path) ? path : `${SITE_URL}${path}`;

/** Share card (og:image) for a page. Generated at build time by scripts/og.mjs. */
export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const ogImageUrl = (path = "/") =>
  `${SITE_URL}/og${path === "/" ? "/home" : path.replace(/\/$/, "")}.jpg`;

const seasonDates = (key) => SEASONS[key].dates.replace(" - ", " – ");
const list = (items) =>
  items.length <= 1
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;

/** Trims text cleanly at a sentence or word boundary for SERP meta tags. */
export function truncateText(text, max = 158) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const slice = clean.slice(0, max - 1);
  const sentenceEnd = Math.max(slice.lastIndexOf(". "), slice.lastIndexOf("! "));
  if (sentenceEnd >= Math.floor(max * 0.6)) {
    return slice.slice(0, sentenceEnd + 1).trim();
  }
  const wordEnd = slice.lastIndexOf(" ");
  return (wordEnd > 40 ? slice.slice(0, wordEnd) : slice).replace(/[,;:\-–]+$/, "").trim() + "…";
}

/* ---------- factual destination metadata ---------- */

export const DESTINATION_META = {
  "masai-mara": { countryCode: "KE", lat: -1.49, lng: 35.14 },
  "lake-nakuru": { countryCode: "KE", lat: -0.37, lng: 36.08 },
  "hells-gate": { countryCode: "KE", lat: -0.92, lng: 36.32 },
  "lake-naivasha": { countryCode: "KE", lat: -0.77, lng: 36.35 },
  amboseli: { countryCode: "KE", lat: -2.65, lng: 37.26 },
  tsavo: { countryCode: "KE", lat: -2.78, lng: 38.47 },
  "ol-pejeta": { countryCode: "KE", lat: 0.0, lng: 36.96 },
  serengeti: { countryCode: "TZ", lat: -2.33, lng: 34.83 },
  ngorongoro: { countryCode: "TZ", lat: -3.16, lng: 35.59 },
  tarangire: { countryCode: "TZ", lat: -3.83, lng: 36.0 },
  "lake-manyara": { countryCode: "TZ", lat: -3.62, lng: 35.83 },
  "nairobi-national-park": { countryCode: "KE", lat: -1.37, lng: 36.86 },
};

/* ---------- catalogue helpers ---------- */

export const CATEGORIES = {
  kenya: { label: "Kenya Safaris", path: "/safaris/kenya" },
  tanzania: { label: "Tanzania Safaris", path: "/safaris/tanzania" },
  combined: { label: "Kenya & Tanzania Safaris", path: "/safaris/combined" },
  nairobi: { label: "Nairobi Half-Day Tour", path: "/safari/half-day-nairobi-tour" },
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

/** Up to `count` other safaris, preferring curated editorial pairings first. */
export function similarSafaris(safari, count = 3) {
  const curated = SAFARI_CONTENT[safari.slug]?.relatedSlugs;
  if (curated && curated.length) {
    const picked = curated
      .map((slug) => safariPackages.find((p) => p.slug === slug))
      .filter((p) => p && p.slug !== safari.slug);
    if (picked.length) return picked.slice(0, count);
  }
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

/** Concise 125-158 char SERP description with prices, route and inclusions. */
export function safariDescription(safari) {
  const { low, high } = safari.price;
  if (categoryOf(safari) === "nairobi") {
    return truncateText(
      `${safari.subtitle} ${usd(low)} per person with local guide, transport and bottled water.`,
      158,
    );
  }
  const price =
    low === high
      ? `${usd(low)} per person all year.`
      : `${usd(low)} low season, ${usd(high)} high season per person.`;
  const full = `${price} ${safari.subtitle} Park fees, lodging, meals and transfers included.`;
  if (full.length <= 158) return full;
  const compact = `${price} Covers ${list(safari.destinations)} with park fees, meals, stays and 4x4 transfers.`;
  return truncateText(compact.length <= 158 ? compact : `${price} ${safari.subtitle}`, 158);
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

/** Crisp, extractable AEO quick-answer paragraph shown at the top of a safari page. */
export function safariQuickAnswer(safari) {
  const route = startAndEnd(safari);
  const stays = staysOf(safari);
  const parts = [safariPriceAnswer(safari)];
  if (categoryOf(safari) === "nairobi") {
    parts.push("It starts and ends in Nairobi and includes an English-speaking guide, transport and bottled water.");
    return parts.join(" ");
  }
  if (route) {
    parts.push(`This ${durationLabel(safari.days)} 4x4 safari starts in ${route.start}, ends in ${route.end} and visits ${list(safari.destinations)}.`);
  }
  if (stays.length) {
    parts.push(`Stays are arranged at ${list(stays)}, with a maximum of ${MAX_GUESTS_PER_VEHICLE} guests per vehicle and free cancellation up to 30 days before departure.`);
  }
  return parts.join(" ");
}

const BOOKING_ANSWER = `Send your travel dates and the number of travellers on WhatsApp (${PHONE_DISPLAY}) or by email (${CONTACT_EMAIL}). We reply within 24 hours with availability, the final price and the day-by-day plan. You can cancel free of charge up to 30 days before departure.`;

/** Questions a traveller asks about one safari, preferring bespoke route FAQs. */
export function safariFaqs(safari) {
  const custom = SAFARI_CONTENT[safari.slug]?.faqs;
  if (custom && custom.length) return custom;

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

/** Collection-specific FAQs for /safaris, /safaris/kenya, /safaris/tanzania, /safaris/combined. */
export function hubFaqs(country) {
  const entry = HUB_CONTENT[country || "all"];
  return entry?.faqs?.length ? entry.faqs : generalFaqs();
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

/** Destination-specific AEO questions, preferring bespoke park FAQs. */
export function destinationFaqs(dest, relatedSafaris = safarisForDestination(dest)) {
  const custom = DESTINATION_CONTENT[dest.slug]?.faqs;
  if (custom && custom.length) return custom;

  const faqs = [
    {
      q: `When is the best time to visit ${dest.name}?`,
      a: `${dest.bestTime}. ${dest.description}`,
    },
    {
      q: `What highlights and wildlife can you expect in ${dest.name}?`,
      a: `${dest.highlights.join("; ")}.`,
    },
  ];

  if (relatedSafaris.length) {
    const lowMin = Math.min(...relatedSafaris.map((s) => s.price.low));
    const highMin = Math.min(...relatedSafaris.map((s) => s.price.high));
    const minDays = Math.min(...relatedSafaris.map((s) => s.days));
    const maxDays = Math.max(...relatedSafaris.map((s) => s.days));
    const dayRange =
      minDays === maxDays
        ? durationLabel(minDays)
        : `${durationLabel(minDays)} to ${durationLabel(maxDays)}`;
    const priceCopy =
      lowMin === highMin
        ? `starting from ${usd(lowMin)} per person all year`
        : `starting from ${usd(lowMin)} per person in low season (${seasonDates("low")}) and ${usd(highMin)} in high season (${seasonDates("high")})`;

    faqs.push({
      q: `How much does a ${dest.name} safari cost?`,
      a: `We run ${relatedSafaris.length} published ${relatedSafaris.length === 1 ? "itinerary" : "itineraries"} visiting ${dest.name}, ranging from ${dayRange}, ${priceCopy}.`,
    });
  } else {
    faqs.push({
      q: `Can you arrange a safari to ${dest.name}?`,
      a: `${dest.name} is arranged on custom private itineraries from Nairobi. Message us with your travel dates and group size and we will reply within 24 hours with a custom route and quote.`,
    });
  }

  faqs.push({
    q: `What is included in a ${dest.name} multi-day safari?`,
    a: `Multi-day packages cover ${INCLUDED.join("; ")}. Free cancellation applies up to 30 days before departure.`,
  });

  return faqs;
}

/** Country-guide FAQs grounded strictly in package, destination & company data. */
export function countryFaqs(country) {
  const isKenya = country === "kenya";
  const label = isKenya ? "Kenya" : "Tanzania";
  const packages = isKenya ? allPackages.kenya : allPackages.tanzania;
  const minLow = Math.min(...packages.map((p) => p.price.low));
  const maxHigh = Math.max(...packages.map((p) => p.price.high));
  const minDays = Math.min(...packages.map((p) => p.days));
  const maxDays = Math.max(...packages.map((p) => p.days));
  const parks = destinations
    .filter((d) => d.country === label)
    .map((d) => d.name);

  return [
    {
      q: `How much do ${label} budget safaris cost?`,
      a: `Published ${label} itineraries range from ${minDays} to ${maxDays} days and cost between ${usd(minLow)} and ${usd(maxHigh)} per person depending on length and season (${SEASONS.low.label}: ${seasonDates("low")}; ${SEASONS.high.label}: ${seasonDates("high")}).`,
    },
    {
      q: `Which ${label} parks and reserves can I visit?`,
      a: `Our ${label} routes and guides cover ${list(parks)}. Cross-border 10 to 12-day itineraries also combine Kenya and Tanzania in one booking.`,
    },
    {
      q: `Where do ${label} safaris start and how many people share a vehicle?`,
      a: isKenya
        ? `All Kenya safaris start and end in Nairobi with return airport or city hotel transfers. Shared 4x4 departures carry at most ${MAX_GUESTS_PER_VEHICLE} guests, and private departures can be arranged on any dates.`
        : `Our 3 to 6-day Tanzania northern circuit itineraries start in Arusha, while 10 to 12-day combined Kenya and Tanzania packages start in Nairobi and cross at Namanga. Shared 4x4 vehicles hold at most ${MAX_GUESTS_PER_VEHICLE} guests.`,
    },
    {
      q: `What is included in ${label} safari package prices?`,
      a: `${INCLUDED.join("; ")}.`,
    },
    {
      q: `When is the best time to go on a ${label} safari?`,
      a: isKenya
        ? `Kenya offers year-round wildlife viewing. Peak dry season runs June to October (coinciding with the Masai Mara Great Migration from July to October), while January to March brings lush green scenery and calving.`
        : `June to October is the long dry season for high wildlife density around rivers and waterholes, while December to March is calving season in the southern Serengeti and lush green landscapes run November to May.`,
    },
  ];
}

export function destinationsHubFaqs() {
  const kenyaParks = destinations.filter((d) => d.country === "Kenya").map((d) => d.name);
  const tzParks = destinations.filter((d) => d.country === "Tanzania").map((d) => d.name);
  return [
    {
      q: "Which parks in Kenya and Tanzania are covered?",
      a: `In Kenya we cover ${list(kenyaParks)}. In Tanzania we cover ${list(tzParks)}.`,
    },
    {
      q: "Can I combine Kenya and Tanzania parks in one safari?",
      a: "Yes. Our 10, 11 and 12-day combined itineraries visit the Masai Mara, Lake Nakuru and Amboseli in Kenya before crossing at Namanga to Arusha, the Serengeti, Ngorongoro Crater and Tarangire.",
    },
    {
      q: "Are custom safaris available to Tsavo and Ol Pejeta?",
      a: "Yes. While our scheduled departures focus on the Masai Mara, Amboseli, Nakuru, Naivasha, Serengeti, Ngorongoro, Tarangire and Lake Manyara, Tsavo and Ol Pejeta Conservancy are arranged on private custom itineraries.",
    },
    {
      q: "When is the best time to visit East African safari parks?",
      a: "Wildlife viewing runs all year. Dry months from June to October offer peak migration crossings in the Masai Mara and concentrated game around water sources; January to March offers green landscapes and calving.",
    },
  ];
}

export function contactFaqs() {
  const term = (title) => TERMS.find((t) => t.title === title).body;
  return [
    { q: "How do I request a safari quote?", a: BOOKING_ANSWER },
    { q: "How fast do you reply?", a: "We reply within 24 hours on WhatsApp and email with availability, the final USD price and a day-by-day plan." },
    { q: "Can I cancel or travel solo?", a: `${term("Cancellation")} ${term("Solo travellers")}` },
    { q: "What is excluded from published rates?", a: `${NOT_INCLUDED.join("; ")}.` },
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

/** Connected WebPage / CollectionPage / AboutPage / ContactPage / ImageGallery node. */
export function webPageLd({
  path = "/",
  title,
  description,
  image = ogImageUrl("/"),
  type = "WebPage",
  mainEntityId = null,
  breadcrumbId = null,
  speakable = true,
}) {
  const url = absoluteUrl(path === "/" ? "/" : path);
  const node = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(image),
    },
  };
  if (mainEntityId) node.mainEntity = { "@id": mainEntityId };
  if (breadcrumbId) node.breadcrumb = { "@id": breadcrumbId };
  if (speakable) {
    node.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable='true']"],
    };
  }
  return node;
}

export function breadcrumbLd(crumbs, path = null) {
  const tailPath = path || crumbs?.[crumbs.length - 1]?.path || "/";
  const id = `${absoluteUrl(tailPath)}#breadcrumb`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": id,
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

function safariOffers(safari, url) {
  const list = [];
  if (safari.price.low === safari.price.high) {
    list.push({
      "@type": "Offer",
      name: `${safari.title} — All Year Rate`,
      price: safari.price.low,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url,
    });
  } else {
    list.push(
      {
        "@type": "Offer",
        name: `${safari.title} — Low Season (Sharing, Jan 1 – Jun 30)`,
        price: safari.price.low,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url,
      },
      {
        "@type": "Offer",
        name: `${safari.title} — High Season (Sharing, Jul 1 – Dec 31)`,
        price: safari.price.high,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url,
      },
    );
  }
  if (safari.singlePrice) {
    if (safari.singlePrice.low !== safari.price.low) {
      list.push({
        "@type": "Offer",
        name: `${safari.title} — Low Season (Single Room)`,
        price: safari.singlePrice.low,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url,
      });
    }
    if (safari.singlePrice.high !== safari.price.high) {
      list.push({
        "@type": "Offer",
        name: `${safari.title} — High Season (Single Room)`,
        price: safari.singlePrice.high,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url,
      });
    }
  }
  const allPrices = list.map((o) => o.price);
  return {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: Math.min(...allPrices),
    highPrice: Math.max(...allPrices),
    offerCount: list.length,
    availability: "https://schema.org/InStock",
    url,
    offers: list,
  };
}

/** One safari: what it is, where it goes, who runs it, what it costs. */
export function safariLd(safari) {
  if (!safari) return null;
  const url = `${SITE_URL}/safari/${safari.slug}`;
  const parks = destinationsForSafari(safari);
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${url}#trip`,
    name: safari.title,
    description: safari.subtitle,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    image: absoluteUrl(safari.image),
    duration: isoDuration(safari.days),
    touristType: ["Wildlife Safari", "Budget Safari", "Small Group Safari"],
    ...(safari.days >= 1 ? { maximumAttendeeCapacity: MAX_GUESTS_PER_VEHICLE } : {}),
    ...(parks.length
      ? {
          touristDestination: parks.map((p) => ({
            "@type": "TouristDestination",
            "@id": `${SITE_URL}/destinations/${p.slug}#destination`,
            name: p.name,
            url: `${SITE_URL}/destinations/${p.slug}`,
          })),
        }
      : {}),
    itinerary: {
      "@type": "ItemList",
      numberOfItems: (safari.itinerary || []).length,
      itemListElement: (safari.itinerary || []).map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: `${day.destination}: ${day.title}`,
        description: truncateText(day.description, 220),
        item: {
          "@type": "TouristAttraction",
          name: day.destination,
        },
      })),
    },
    provider,
    offers: safariOffers(safari, url),
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

export function offerCatalogLd(safaris, name = "Cima Brava Adventures Safari Rate Card") {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/company-profile#catalog`,
    name,
    numberOfItems: safaris.length,
    itemListElement: safaris.map((safari) => ({
      "@type": "Offer",
      name: safari.title,
      description: safari.subtitle,
      url: `${SITE_URL}/safari/${safari.slug}`,
      priceCurrency: "USD",
      price: safari.price.low,
      availability: "https://schema.org/InStock",
      itemOffered: {
        "@type": "TouristTrip",
        name: safari.title,
        url: `${SITE_URL}/safari/${safari.slug}`,
      },
    })),
  };
}

export function destinationLd(dest) {
  const url = `${SITE_URL}/destinations/${dest.slug}`;
  const meta = DESTINATION_META[dest.slug];
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "@id": `${url}#destination`,
    name: dest.name,
    description: dest.description,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    image: absoluteUrl(dest.image),
    touristType: ["Wildlife Safari", "Nature & Conservation"],
    publicAccess: true,
    containedInPlace: {
      "@type": "Country",
      name: dest.country,
      ...(meta?.countryCode ? { identifier: meta.countryCode } : {}),
    },
    ...(meta
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: meta.lat,
            longitude: meta.lng,
          },
        }
      : {}),
    includesAttraction: (dest.highlights || []).map((h) => ({
      "@type": "TouristAttraction",
      name: h,
    })),
  };
}

export function destinationListLd(dests, name = "Safari Destinations in Kenya & Tanzania") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: dests.length,
    itemListElement: dests.map((dest, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: dest.name,
      url: `${SITE_URL}/destinations/${dest.slug}`,
    })),
  };
}

export function howToBookLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to book a Kenya or Tanzania safari with Cima Brava Adventures",
    description: "Four steps from first inquiry on WhatsApp or email to confirmed safari seats.",
    totalTime: "PT24H",
    step: STEPS.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
      url: `${SITE_URL}/company-profile#booking`,
    })),
  };
}

export function companyProfileDocLd() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: "Cima Brava Adventures Company Profile & 2026–2027 Safari Rates (PDF)",
    url: `${SITE_URL}/Cima_Brava_Adventures_Company_Profile.pdf`,
    encodingFormat: "application/pdf",
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };
}

export function imageGalleryLd(images) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${SITE_URL}/gallery#gallery`,
    name: "East Africa Safari Photo Gallery",
    url: `${SITE_URL}/gallery`,
    isPartOf: { "@id": WEBSITE_ID },
    associatedMedia: images.map((img) => ({
      "@type": "ImageObject",
      name: img.caption,
      caption: img.caption,
      contentUrl: absoluteUrl(img.src),
      representativeOfPage: false,
    })),
  };
}

/* ---------- breadcrumb trails ---------- */

const HOME = { name: "Home", path: "/" };
const SAFARIS = { name: "Safaris", path: "/safaris" };
const DESTINATIONS = { name: "Destinations", path: "/destinations" };

export function safariCrumbs(safari) {
  const catKey = categoryOf(safari);
  const category = CATEGORIES[catKey];
  if (catKey === "nairobi") {
    return [HOME, SAFARIS, { name: safari.title, path: `/safari/${safari.slug}` }];
  }
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
