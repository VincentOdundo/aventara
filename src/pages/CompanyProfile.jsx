import React, { useState } from "react";
import { useSeo, SITE_URL } from "../hooks/useSeo";
import {
  breadcrumbLd,
  companyProfileDocLd,
  faqLd,
  generalFaqs,
  graph,
  howToBookLd,
  offerCatalogLd,
  pageCrumbs,
  webPageLd,
} from "../lib/seo";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Breadcrumbs } from "../components/ui";
import {
  safariPackages,
  allPackages,
  SEASONS,
  CONTACT_EMAIL,
  SOCIAL_LINKS,
  WHATSAPP_NUMBER,
  getCurrentSeason,
} from "../data/safaris";
import { useWhatsApp } from "../hooks/useWhatsApp";
import {
  INCLUDED,
  NOT_INCLUDED,
  PHONE_DISPLAY,
  STEPS,
  TERMS,
} from "../data/company";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Download,
  Mail,
  MapPin,
  Minus,
  Phone,
} from "lucide-react";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import logo from "./cima_logo.png";
import coverImg from "../assets/plain_elefabt.jpeg";
import vehicleImg from "../assets/safari-van-sunrise.jpeg";
import closingImg from "../assets/wildbeasts.jpg";
import lionsImg from "../assets/lion pack.jpeg";

const PDF_PATH = "/Cima_Brava_Adventures_Company_Profile.pdf";

const usd = (n) => `$${n.toLocaleString("en-US")}`;
const duration = (days) => (days === 0.5 ? "Half day" : `${days} days`);

const minPrice = Math.min(...safariPackages.map((p) => p.price.low));
const maxDays = Math.max(...safariPackages.map((p) => p.days));

const CONTENTS = [
  { id: "company", label: "The company" },
  { id: "included", label: "What's included" },
  { id: "rates", label: "Rates" },
  { id: "itineraries", label: "Day by day" },
  { id: "stay", label: "Where you stay" },
  { id: "booking", label: "How to book" },
  { id: "terms", label: "Good to know" },
];

const TRIP_STYLES = [
  {
    title: "Shared departures",
    body: "Join a small group in a shared 4x4. Daily departures from Nairobi, a maximum of seven guests per vehicle, and a window seat for everyone.",
  },
  {
    title: "Private safaris",
    body: "Your own vehicle and driver-guide, on your dates. We adapt any published itinerary or build one around your group.",
  },
  {
    title: "Kenya + Tanzania",
    body: "One booking covers both countries. We arrange the Namanga border crossing and the onward transfers.",
  },
];

const PARKS = [
  {
    country: "Kenya",
    parks: [
      "Masai Mara",
      "Amboseli",
      "Lake Nakuru",
      "Lake Naivasha",
      "Hell's Gate",
      "Nairobi National Park",
    ],
  },
  {
    country: "Tanzania",
    parks: ["Serengeti", "Ngorongoro Crater", "Tarangire", "Lake Manyara"],
  },
];

const VEHICLE_SPECS = [
  "4x4 Land Cruiser or safari jeep",
  "Pop-up roof for standing game viewing",
  "Window seat for every guest",
  "Maximum 7 guests per vehicle",
];

const EXTRAS = [
  { name: "Maasai village visit", price: 20 },
  { name: "Lake Naivasha boat ride", price: 20 },
  { name: "Crescent Island walking safari", price: 33 },
  { name: "Hot-air balloon flight, Masai Mara or Serengeti", price: 480 },
];

const COLLECTIONS = [
  {
    key: "kenya",
    title: "Kenya",
    note: "Shared 4x4 · daily departures from Nairobi",
  },
  {
    key: "combined",
    title: "Kenya & Tanzania",
    note: "Both countries in one trip · border crossing at Namanga",
  },
  {
    key: "tanzania",
    title: "Tanzania",
    note: "Northern circuit · Serengeti, Ngorongoro, Tarangire, Manyara",
  },
  {
    key: "nairobi",
    title: "Nairobi",
    note: "Short outings for stopovers and free days",
  },
];

const STAYS = [
  { park: "Masai Mara", name: "Miti Mingi Eco Camp", type: "Tented camp" },
  {
    park: "Lake Nakuru",
    name: "Buraha Zenoni Hotel & Resort",
    type: "Mid-range hotel",
  },
  {
    park: "Lake Naivasha & Hell's Gate",
    name: "Leisure Apex Resort",
    type: "Resort",
  },
  {
    park: "Amboseli",
    name: "Ositua Rafiki Camp · Nyati Safari Camp",
    type: "Safari camps",
  },
  { park: "Arusha", name: "The Charity Hotel", type: "Hotel" },
  {
    park: "Serengeti & Ngorongoro",
    name: "Public and tented campsites inside the parks",
    type: "Camping",
  },
];

/* ---------- building blocks ---------- */

function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`font-label text-[11px] font-bold uppercase tracking-[0.28em] ${
        dark ? "text-sunrise-yellow" : "text-sunset-orange"
      }`}
    >
      {children}
    </p>
  );
}

function ProfileSection({
  id,
  number,
  label,
  title,
  intro,
  dark = false,
  keepTogether = false,
  className = "",
  children,
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 md:py-24 print:py-[8mm] ${
        dark ? "bg-midnight-black text-sand-cream" : "text-midnight-black"
      } ${keepTogether ? "print:break-inside-avoid" : ""} ${className}`}
    >
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 print:px-[14mm]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8 print:gap-y-[6mm]">
          <div className="lg:col-span-4 break-inside-avoid break-after-avoid">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className={`font-headline text-sm font-bold tabular-nums ${
                    dark ? "text-savannah-gold" : "text-sunset-orange"
                  }`}
                >
                  {number}
                </span>
                <span
                  className={`h-px w-10 ${
                    dark ? "bg-savannah-gold/60" : "bg-savannah-gold"
                  }`}
                />
                <Eyebrow dark={dark}>{label}</Eyebrow>
              </div>
              <h2
                className={`font-headline font-bold text-[1.7rem] md:text-4xl leading-[1.15] text-balance ${
                  dark ? "text-sand-cream" : "text-safari-brown"
                }`}
              >
                {title}
              </h2>
              {intro && (
                <p
                  className={`mt-5 text-[15px] leading-relaxed max-w-md ${
                    keepTogether ? "print:hidden" : ""
                  } ${
                    dark ? "text-sand-cream/75" : "text-safari-brown/80"
                  }`}
                >
                  {intro}
                </p>
              )}
            </div>
          </div>
          <div className="lg:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function PriceCell({ pkg, season, current }) {
  const hasSingle =
    pkg.singlePrice && pkg.singlePrice[season] !== pkg.price[season];
  return (
    <>
      <span
        className={`block text-lg font-bold tabular-nums leading-tight ${
          current ? "text-sunset-orange print:text-safari-brown" : "text-safari-brown"
        }`}
      >
        {usd(pkg.price[season])}
      </span>
      <span className="block text-[11px] text-safari-brown/65 tabular-nums mt-0.5">
        {hasSingle
          ? `Single ${usd(pkg.singlePrice[season])}`
          : pkg.singlePrice
            ? "Same for single"
            : "Single on request"}
      </span>
    </>
  );
}

function RateCollection({ title, note, packages, season }) {
  const seasonKeys = ["low", "high"];
  return (
    <div className="mb-12 last:mb-0 print:mb-[7mm]">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pb-3 border-b-2 border-safari-brown break-after-avoid">
        <h3 className="font-headline font-bold text-xl md:text-2xl text-safari-brown">
          {title}
        </h3>
        <p className="text-xs text-safari-brown/70">{note}</p>
      </div>

      {/* Table: tablet, desktop and print */}
      <table className="hidden md:table print:table w-full text-left">
        <thead>
          <tr className="font-label text-[10px] uppercase tracking-[0.18em] text-safari-brown/70">
            <th className="py-3 pr-4 font-bold">Safari</th>
            <th className="py-3 px-3 font-bold w-24">Length</th>
            {seasonKeys.map((s) => (
              <th
                key={s}
                className={`py-3 px-4 font-bold text-right w-36 ${
                  s === season
                    ? "bg-savannah-gold/12 print:bg-transparent"
                    : ""
                }`}
              >
                {SEASONS[s].label}
                <span className="block font-body normal-case tracking-normal text-[10px] font-medium text-safari-brown/60">
                  {SEASONS[s].dates}
                </span>
              </th>
            ))}
            <th className="py-3 pl-3 w-10 print:hidden" aria-hidden="true" />
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg) => (
            <tr
              key={pkg.id}
              className="group border-t border-safari-brown/12 break-inside-avoid"
            >
              <td className="py-4 print:py-[2.2mm] pr-4 align-top">
                <Link
                  to={`/safari/${pkg.slug}`}
                  className="print:hidden font-semibold text-[15px] leading-snug text-midnight-black group-hover:text-sunset-orange transition-colors"
                >
                  {pkg.title}
                </Link>
                <a
                  href={`${SITE_URL}/safari/${pkg.slug}`}
                  className="hidden print:block font-semibold text-[13px] leading-snug text-midnight-black"
                >
                  {pkg.title}
                </a>
                <span className="block text-xs text-safari-brown/65 mt-1">
                  {pkg.destinations.join(" · ")}
                </span>
              </td>
              <td className="py-4 print:py-[2.2mm] px-3 align-top text-sm text-safari-brown whitespace-nowrap">
                {duration(pkg.days)}
              </td>
              {seasonKeys.map((s) => (
                <td
                  key={s}
                  className={`py-4 px-4 align-top text-right whitespace-nowrap ${
                    s === season
                      ? "bg-savannah-gold/12 print:bg-transparent"
                      : ""
                  }`}
                >
                  <PriceCell pkg={pkg} season={s} current={s === season} />
                </td>
              ))}
              <td className="py-4 print:py-[2.2mm] pl-3 align-top text-right print:hidden">
                <Link
                  to={`/safari/${pkg.slug}`}
                  aria-label={`View itinerary: ${pkg.title}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-savannah-gold text-safari-brown group-hover:bg-savannah-gold group-hover:text-midnight-black transition-colors"
                >
                  <ArrowUpRight size={15} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cards: phones */}
      <ul className="md:hidden print:hidden divide-y divide-safari-brown/12">
        {packages.map((pkg) => (
          <li key={pkg.id} className="py-5">
            <Link to={`/safari/${pkg.slug}`} className="block">
              <span className="font-label text-[10px] font-bold uppercase tracking-[0.18em] text-sunset-orange">
                {duration(pkg.days)}
              </span>
              <span className="mt-1 flex items-start justify-between gap-3">
                <span className="font-semibold text-base leading-snug text-midnight-black">
                  {pkg.title}
                </span>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 mt-0.5 text-savannah-gold"
                />
              </span>
              <span className="block text-xs text-safari-brown/65 mt-1">
                {pkg.destinations.join(" · ")}
              </span>
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {seasonKeys.map((s) => (
                <div
                  key={s}
                  className={`rounded-xl px-3.5 py-2.5 border ${
                    s === season
                      ? "border-savannah-gold bg-savannah-gold/12"
                      : "border-safari-brown/15"
                  }`}
                >
                  <span className="block font-label text-[10px] font-bold uppercase tracking-[0.14em] text-safari-brown/70 mb-1">
                    {SEASONS[s].label}
                  </span>
                  <PriceCell pkg={pkg} season={s} current={s === season} />
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Itinerary data carries marketing copy; the profile shows only the facts. */
const dayPlace = (d) => String(d.destination || "").split(". ")[0];
const dayActivity = (d) => {
  const t = String(d.title || "");
  const i = t.indexOf(":");
  return (i >= 0 ? t.slice(i + 1) : t).trim();
};
const dayStay = (d) =>
  d.accommodation ? String(d.accommodation).split(" (")[0].trim() : null;

/* Compact meal code for the PDF: B, L, D. */
const dayMealCode = (d) => {
  const m = String(d.meals || "").toLowerCase();
  const code = [
    m.includes("breakfast") && "B",
    m.includes("lunch") && "L",
    m.includes("dinner") && "D",
  ].filter(Boolean);
  return code.length && m.length < 40 ? code.join(" · ") : "–";
};
const dayMeals = (d) => {
  const m = String(d.meals || "");
  return m.length < 40 ? m : "Not included";
};

function ItineraryCard({ pkg, open, onToggle }) {
  const days = Array.isArray(pkg.itinerary) ? pkg.itinerary : [];
  const panelId = `itinerary-${pkg.id}`;
  return (
    <div className="border-t border-safari-brown/15 break-inside-avoid print:border-t-2 print:border-safari-brown print:mb-[5mm]">
      <h4 className="font-body">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-center gap-4 print:gap-2 py-4 print:py-1.5 text-left cursor-pointer"
        >
          <span className="w-16 print:w-auto shrink-0 font-label text-[10px] print:text-[8px] font-bold uppercase tracking-[0.16em] text-sunset-orange">
            {duration(pkg.days)}
          </span>
          <span className="flex-1 font-semibold text-[15px] print:text-[10.5px] leading-snug text-midnight-black group-hover:text-sunset-orange transition-colors">
            {pkg.title}
          </span>
          <span className="hidden sm:block print:block shrink-0 text-sm print:text-[9.5px] text-safari-brown/75 tabular-nums">
            from{" "}
            <span className="font-bold text-safari-brown">
              {usd(pkg.price.low)}
            </span>
          </span>
          <ChevronDown
            size={18}
            className={`shrink-0 text-safari-brown/60 transition-transform print:hidden ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h4>

      <div id={panelId} className={`${open ? "block" : "hidden"} print:block pb-5 print:pb-0`}>
        <div className="hidden md:grid print:grid grid-cols-[3.5rem_1.7fr_1fr_1fr] print:grid-cols-[1.4rem_1.5fr_2.6rem_1fr] gap-x-4 print:gap-x-2 pb-2 print:pb-1 font-label text-[9px] font-bold uppercase tracking-[0.18em] text-safari-brown/60">
          <span>Day</span>
          <span>Where and what</span>
          <span>Meals</span>
          <span>Overnight</span>
        </div>
        <ol>
          {days.map((d) => {
            const stay = dayStay(d);
            return (
              <li
                key={d.day}
                className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[3.5rem_1.7fr_1fr_1fr] print:grid-cols-[1.4rem_1.5fr_2.6rem_1fr] gap-x-4 print:gap-x-2 py-2.5 print:py-[0.9mm] border-t border-safari-brown/10 text-sm print:text-[9.5px] leading-snug"
              >
                <span className="font-headline font-bold text-sunset-orange tabular-nums">
                  {String(d.day).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-semibold text-midnight-black">
                    {dayPlace(d)}
                  </span>
                  <span className="block text-safari-brown/75">
                    {dayActivity(d)}
                  </span>
                  <span className="mt-1 block text-xs text-safari-brown/65 md:hidden print:hidden">
                    {dayMeals(d)}
                    {stay ? ` · ${stay}` : ""}
                  </span>
                </span>
                <span className="hidden md:block print:hidden text-safari-brown/85">
                  {dayMeals(d)}
                </span>
                <span className="hidden print:block text-safari-brown/85 whitespace-nowrap">
                  {dayMealCode(d)}
                </span>
                <span className="hidden md:block print:block text-safari-brown/85">
                  {stay || "Trip ends"}
                </span>
              </li>
            );
          })}
        </ol>
        <Link
          to={`/safari/${pkg.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sunset-orange hover:text-safari-brown transition-colors print:hidden"
        >
          Full details and booking
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

/* ---------- page ---------- */

export default function CompanyProfile() {
  const { generateInquiry } = useWhatsApp();
  const title = "Company Profile & 2026–2027 Safari Rates";
  const description =
    "Who we are, what every safari price includes, the full 2026–2027 rate card and every itinerary day by day. Download the PDF.";
  const crumbs = pageCrumbs("Company Profile", "/company-profile");
  const breadcrumb = breadcrumbLd(crumbs, "/company-profile");
  useSeo({
    title,
    description,
    path: "/company-profile",
    image: coverImg,
    imageAlt: "Cima Brava Adventures company profile and 2026–2027 safari rate card",
    jsonLd: graph(
      webPageLd({
        path: "/company-profile",
        title,
        description,
        image: coverImg,
        mainEntityId: `${SITE_URL}/company-profile#catalog`,
        breadcrumbId: breadcrumb["@id"],
      }),
      breadcrumb,
      offerCatalogLd(safariPackages),
      howToBookLd(),
      faqLd(generalFaqs()),
      companyProfileDocLd(),
    ),
  });
  const season = getCurrentSeason();
  const quoteLink = generateInquiry("Safari quote request");
  const [openItinerary, setOpenItinerary] = useState(allPackages.kenya[0].id);

  const facts = [
    { value: safariPackages.length, label: "Published itineraries" },
    { value: `½–${maxDays}`, label: "Days on safari" },
    { value: usd(minPrice), label: "Lowest price per person" },
    { value: "7", label: "Guests per vehicle, at most" },
  ];

  return (
    <Layout>
      {/* ===== Cover ===== */}
      <section className="relative isolate overflow-hidden bg-midnight-black text-sand-cream min-h-[min(100svh,980px)] print:min-h-0 print:h-[297mm] print:bg-black flex flex-col break-after-page">
        <div className="absolute inset-0 -z-10 print:relative print:inset-auto print:z-0 print:shrink-0 print:h-[118mm] print:w-full">
          <img
            src={coverImg}
            alt="An elephant crossing the Amboseli plains beneath Mount Kilimanjaro"
            className="absolute inset-0 h-full w-full object-cover object-[70%_center] print:object-center" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black via-midnight-black/35 to-midnight-black/15 print:hidden" />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-black/80 via-midnight-black/30 to-transparent print:hidden" />
        </div>

        <div className="flex-1 flex items-center w-full max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 print:px-[14mm] pt-28 md:pt-32 print:pt-[9mm] pb-10 print:pb-[6mm]">
          <div className="max-w-3xl">
            <Breadcrumbs crumbs={crumbs} tone="light" className="mb-5 print:hidden" />
            <div className="mb-8 inline-block overflow-hidden">
              <img
                src={logo}
                alt="Cima Brava Adventures"
                className="h-14 md:h-16 w-auto -mt-[3px]"
              />
            </div>
            <Eyebrow dark>Company profile · 2026–2027 rates</Eyebrow>
            <h1 className="mt-5 font-headline font-bold text-[2.5rem] sm:text-6xl lg:text-7xl print:text-[44px] leading-[1.04] text-sand-cream text-balance">
              Kenya &amp; Tanzania safaris, priced in full.
            </h1>
            <div className="mt-6 inline-block">
              <p className="font-script text-3xl md:text-4xl text-sunrise-yellow leading-none">
                Wild by Nature. Guided by Heart.
              </p>
              <svg
                viewBox="0 0 320 18"
                fill="none"
                className="w-56 md:w-72 h-3.5 mt-1 text-sunrise-yellow"
                aria-hidden="true"
              >
                <path
                  d="M4 13C72 4 195 2 316 9C245 9 125 11 22 15"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-sand-cream/90" data-speakable="true">
              Cima Brava Adventures is a Nairobi-based safari operator. We run
              shared and private 4x4 safaris across Kenya and Tanzania, and the
              price we publish already covers park fees, accommodation, meals
              and transfers.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={quoteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-explore px-7 py-3.5 text-sm"
              >
                <WhatsAppIcon size={18} />
                Get a quote on WhatsApp
              </a>
              <a
                href="#rates"
                className="btn-plan !text-sand-cream px-7 py-3.5 text-sm print:hidden"
              >
                See the rates
                <ArrowRight size={16} />
              </a>
              <a
                href={PDF_PATH}
                download
                className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-sand-cream/85 hover:text-sunrise-yellow transition-colors print:hidden"
              >
                <Download size={16} />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Fact rail */}
        <div className="w-full border-t border-savannah-gold/35 bg-midnight-black/55 print:bg-transparent backdrop-blur-sm print:backdrop-blur-none">
          <dl className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 print:px-[14mm] grid grid-cols-2 md:grid-cols-4 print:grid-cols-4">
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`py-5 md:py-7 pr-4 ${
                  i > 0
                    ? "md:pl-8 md:border-l md:border-savannah-gold/25 print:pl-6 print:border-l print:border-savannah-gold/25"
                    : ""
                } ${i % 2 === 1 ? "pl-5 border-l border-savannah-gold/25" : ""} ${
                  i > 1
                    ? "border-t border-savannah-gold/25 md:border-t-0 print:border-t-0"
                    : ""
                }`}
              >
                <dd className="font-headline font-bold text-3xl md:text-4xl text-sunrise-yellow tabular-nums">
                  {f.value}
                </dd>
                <dt className="mt-1.5 text-xs text-sand-cream/75">{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <table className="print-frame">
        <thead aria-hidden="true">
          <tr>
            <td />
          </tr>
        </thead>
        <tfoot aria-hidden="true">
          <tr>
            <td />
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>
      {/* ===== Contents ===== */}
      <nav
        aria-label="In this profile"
        className="border-b border-savannah-gold/35 print:hidden"
      >
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 flex gap-x-7 gap-y-2 overflow-x-auto py-4 text-sm font-semibold text-safari-brown whitespace-nowrap">
          {CONTENTS.map((c, i) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="inline-flex items-baseline gap-2 hover:text-sunset-orange transition-colors"
            >
              <span className="font-headline text-xs text-sunset-orange tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              {c.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ===== 01 The company ===== */}
      <ProfileSection
        id="company"
        number="01"
        label="The company"
        title="A Nairobi operator working both sides of the border."
      >
        <div className="space-y-5 text-[17px] leading-relaxed text-safari-brown/90 max-w-2xl">
          <p>
            We plan and run road safaris through East Africa&apos;s best-known
            parks. Every trip starts in Nairobi. The shortest is a half-day
            outing in the city; the longest is {maxDays} days across both
            countries.
          </p>
          <p>
            Our safaris are built for travellers watching their budget who
            still want the real thing: a pop-up-roof 4x4, a window seat, a
            professional driver-guide, and a price with the park fees already
            in it.
          </p>
        </div>

        <div className="mt-10 print:mt-[7mm] grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 max-w-2xl">
          {PARKS.map((group) => (
            <div key={group.country} className="break-inside-avoid">
              <p className="font-label text-[10px] font-bold uppercase tracking-[0.22em] text-sunset-orange mb-3">
                {group.country}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.parks.map((park) => (
                  <li
                    key={park}
                    className="rounded-full border border-savannah-gold/70 px-3.5 py-1.5 text-[13px] font-medium text-safari-brown"
                  >
                    {park}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 print:mt-[8mm] grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 border-t border-safari-brown/15">
          {TRIP_STYLES.map((style, i) => (
            <div
              key={style.title}
              className={`py-7 break-inside-avoid border-b border-safari-brown/15 md:border-b-0 print:border-b-0 ${
                i > 0
                  ? "md:pl-7 md:border-l md:border-safari-brown/15 print:pl-5 print:border-l print:border-safari-brown/15"
                  : ""
              } ${i < 2 ? "md:pr-7 print:pr-5" : ""}`}
            >
              <h3 className="font-headline font-bold text-lg text-safari-brown">
                {style.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-safari-brown/80">
                {style.body}
              </p>
            </div>
          ))}
        </div>
      </ProfileSection>

      {/* ===== Vehicle band ===== */}
      <section className="relative isolate overflow-hidden bg-midnight-black text-sand-cream break-inside-avoid print:flex print:flex-row-reverse">
        <div className="absolute inset-0 -z-10 print:relative print:inset-auto print:z-0 print:shrink-0 print:w-[72mm]">
          <img
            src={vehicleImg}
            alt="A Cima Brava pop-up-roof safari vehicle on the plains at sunrise"
            className="absolute inset-0 h-full w-full object-cover object-[center_78%] print:object-[80%_76%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-black/90 via-midnight-black/55 to-midnight-black/10 print:hidden" />
        </div>
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 print:px-[14mm] py-20 md:py-28 print:py-[5mm] print:flex-1 print:min-w-0">
          <div className="max-w-md print:max-w-none">
            <Eyebrow dark>What you ride in</Eyebrow>
            <h2 className="mt-4 print:mt-2 font-headline font-bold text-3xl md:text-4xl print:text-2xl leading-tight text-sand-cream">
              Built for game drives.
            </h2>
            <ul className="mt-7 print:mt-3 divide-y divide-savannah-gold/25 border-y border-savannah-gold/25">
              {VEHICLE_SPECS.map((spec) => (
                <li
                  key={spec}
                  className="flex items-center gap-3 py-3.5 print:py-1 text-[15px] print:text-[13px] text-sand-cream/95"
                >
                  <Check size={16} className="shrink-0 text-sunrise-yellow" />
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 02 What's included ===== */}
      <ProfileSection
        id="included"
        number="02"
        label="What's included"
        title="One price. Here is what it covers."
        intro="The same inclusions apply to every safari on the rate card, so you can compare trips like for like."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-x-10 gap-y-10">
          <div className="break-inside-avoid">
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-safari-brown pb-3 border-b-2 border-savannah-gold">
              In the price
            </h3>
            <ul className="mt-1">
              {INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-3 border-b border-safari-brown/10 text-[15px] leading-snug text-midnight-black"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-savannah-gold text-midnight-black">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="break-inside-avoid">
            <h3 className="font-label text-xs font-bold uppercase tracking-[0.2em] text-safari-brown pb-3 border-b-2 border-safari-brown/25">
              Not in the price
            </h3>
            <ul className="mt-1">
              {NOT_INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 py-3 border-b border-safari-brown/10 text-[15px] leading-snug text-safari-brown/85"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-safari-brown/35 text-safari-brown/70">
                    <Minus size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 print:mt-[8mm] rounded-2xl border border-savannah-gold/60 bg-savannah-gold/8 p-6 md:p-8 break-inside-avoid">
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
            <h3 className="font-headline font-bold text-lg text-safari-brown">
              Optional extras
            </h3>
            <p className="text-xs text-safari-brown/70">
              Per person · book with your safari or on the day
            </p>
          </div>
          <ul>
            {EXTRAS.map((extra) => (
              <li
                key={extra.name}
                className="flex items-baseline gap-3 py-2.5 text-[15px]"
              >
                <span className="text-midnight-black">{extra.name}</span>
                <span className="flex-1 border-b border-dotted border-safari-brown/35 translate-y-[-4px]" />
                <span className="font-bold tabular-nums text-safari-brown">
                  {usd(extra.price)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </ProfileSection>

      {/* ===== 03 Rates ===== */}
      <ProfileSection
        id="rates"
        number="03"
        label="Rates"
        title="2026–2027 rate card."
        intro="Prices are per person in US dollars. The main figure applies when two or more travellers share a room; the single figure is for one traveller in their own room."
        className="bg-savannah-gold/6 border-y border-savannah-gold/30 print:bg-transparent print:border-0 print:break-before-page print:pb-0"
      >
        <div className="mb-10 flex flex-wrap gap-3 break-inside-avoid">
          {["low", "high"].map((s) => (
            <div
              key={s}
              className={`flex items-center gap-3 rounded-full border px-4 py-2 text-sm ${
                s === season
                  ? "border-savannah-gold bg-savannah-gold/15 print:bg-transparent"
                  : "border-safari-brown/20"
              }`}
            >
              <span className="font-bold text-safari-brown">
                {SEASONS[s].label}
              </span>
              <span className="text-safari-brown/75">{SEASONS[s].dates}</span>
              {s === season && (
                <span className="rounded-full bg-safari-brown px-2 py-0.5 font-label text-[9px] font-bold uppercase tracking-[0.14em] text-sunrise-yellow print:hidden">
                  Now
                </span>
              )}
            </div>
          ))}
        </div>

        {COLLECTIONS.map((c) => (
          <RateCollection
            key={c.key}
            title={c.title}
            note={c.note}
            packages={allPackages[c.key]}
            season={season}
          />
        ))}

        <div className="mt-10 print:hidden flex flex-col sm:flex-row sm:items-center justify-between gap-5 rounded-2xl bg-safari-brown text-sand-cream p-6 md:p-7 break-inside-avoid">
          <div>
            <p className="font-headline font-bold text-lg text-sand-cream">
              Different dates, parks or group size?
            </p>
            <p className="mt-1 text-sm text-sand-cream/75">
              Tell us what you need and we will price it within 24 hours.
            </p>
          </div>
          <a
            href={quoteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-explore shrink-0 px-6 py-3 text-sm"
          >
            <WhatsAppIcon size={17} />
            Ask for a quote
          </a>
        </div>
      </ProfileSection>

      {/* ===== 04 Day by day ===== */}
      <ProfileSection
        id="itineraries"
        number="04"
        label="Day by day"
        title="Every itinerary, one day at a time."
        intro="Where you are each day, what the day is for, which meals are covered and where you sleep. Routes can shift with road and park conditions; your quote confirms the final plan."
      >
        <p className="hidden print:block mb-[5mm] text-[10px] text-safari-brown/75">
          Meals: B breakfast · L lunch · D dinner
        </p>
        <div className="print:columns-2 print:gap-[9mm]">
        {COLLECTIONS.map((c) => (
          <div key={c.key} className="mb-10 last:mb-0 print:mb-0">
            <h3 className="font-headline font-bold text-xl md:text-2xl print:text-sm text-safari-brown pb-3 print:pb-[2mm] break-after-avoid">
              {c.title}
            </h3>
            <div className="border-b border-safari-brown/15 print:border-b-0">
              {allPackages[c.key].map((pkg) => (
                <ItineraryCard
                  key={pkg.id}
                  pkg={pkg}
                  open={openItinerary === pkg.id}
                  onToggle={() =>
                    setOpenItinerary(openItinerary === pkg.id ? null : pkg.id)
                  }
                />
              ))}
            </div>
          </div>
        ))}
        </div>
      </ProfileSection>

      {/* ===== 05 Where you stay ===== */}
      <ProfileSection
        id="stay"
        keepTogether
        number="05"
        label="Where you stay"
        title="The camps and hotels on our routes."
        className="print:break-before-page"
        intro="These are the properties we use on the published itineraries. Your quote names the exact one for each night."
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-3 gap-x-10 print:gap-x-7">
          {STAYS.map((stay) => (
            <li
              key={stay.park}
              className="py-5 print:py-3 border-t border-safari-brown/15 break-inside-avoid"
            >
              <p className="flex items-center gap-1.5 font-label text-[10px] font-bold uppercase tracking-[0.2em] text-sunset-orange">
                <MapPin size={12} />
                {stay.park}
              </p>
              <p className="mt-2 font-semibold text-[17px] leading-snug text-midnight-black">
                {stay.name}
              </p>
              <p className="mt-1 text-sm text-safari-brown/70">{stay.type}</p>
            </li>
          ))}
        </ul>
      </ProfileSection>

      {/* Photo plate: fills out the accommodation page in the PDF */}
      <div className="hidden print:block px-[14mm] pb-[6mm] break-inside-avoid">
        <img
          src={lionsImg}
          alt="A lion and lioness resting in the grass, photographed from a safari vehicle"
          className="h-[96mm] w-full rounded-2xl object-cover object-top"
        />
      </div>

      {/* ===== 06 How to book ===== */}
      <ProfileSection
        id="booking"
        keepTogether
        number="06"
        label="How to book"
        title="Four steps from first message to confirmed seats."
        dark
        className="print:break-before-page"
      >
        <ol className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-4 gap-x-10 print:gap-x-6">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="py-6 print:py-4 border-t border-savannah-gold/30 break-inside-avoid"
            >
              <span className="font-headline font-bold text-4xl text-savannah-gold tabular-nums leading-none">
                {i + 1}
              </span>
              <h3 className="mt-4 print:mt-2 font-headline font-bold text-lg print:text-[15px] text-sand-cream">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sand-cream/75">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </ProfileSection>

      {/* ===== 07 Good to know ===== */}
      <ProfileSection
        id="terms"
        keepTogether
        number="07"
        label="Good to know"
        title="The terms, in plain words."
      >
        <dl className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-3 gap-x-10 print:gap-x-7">
          {TERMS.map((term) => (
            <div
              key={term.title}
              className="py-5 border-t border-safari-brown/15 break-inside-avoid"
            >
              <dt className="font-headline font-bold text-base text-safari-brown">
                {term.title}
              </dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-safari-brown/80">
                {term.body}
              </dd>
            </div>
          ))}
        </dl>
      </ProfileSection>

      {/* ===== Closing call to action ===== */}
      <section
        id="contact"
        className="relative isolate overflow-hidden bg-midnight-black text-sand-cream break-inside-avoid print:break-before-page print:min-h-[275mm] print:flex print:flex-col"
      >
        <div className="absolute inset-0 -z-10 print:relative print:inset-auto print:z-0 print:shrink-0 print:h-[95mm] print:w-full">
          <img
            src={closingImg}
            alt="Wildebeest on the savannah during the migration"
            className="absolute inset-0 h-full w-full object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-midnight-black via-midnight-black/85 to-safari-brown/60 print:hidden" />
        </div>

        <div className="w-full max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 print:px-[14mm] py-20 md:py-28 print:py-[14mm]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 print:gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="font-script text-3xl text-sunrise-yellow leading-none">
                Wild by Nature. Guided by Heart.
              </p>
              <h2 className="mt-5 font-headline font-bold text-4xl md:text-5xl leading-[1.08] text-sand-cream text-balance">
                Send us your dates. We reply within 24 hours.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-sand-cream/80">
                You get availability, the final price and a day-by-day plan.
                There is no charge for a quote and no obligation to book.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={quoteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-explore px-7 py-3.5 text-sm"
                >
                  <WhatsAppIcon size={18} />
                  Message us on WhatsApp
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Safari quote request")}`}
                  className="btn-plan !text-sand-cream px-7 py-3.5 text-sm"
                >
                  <Mail size={16} />
                  Email us
                </a>
              </div>
            </div>

            <address className="lg:col-span-5 not-italic border-t border-savannah-gold/35 print:grid print:grid-cols-2 print:gap-x-10">
              {[
                {
                  icon: <Phone size={15} />,
                  label: "WhatsApp",
                  value: PHONE_DISPLAY,
                  href: `https://wa.me/${WHATSAPP_NUMBER}`,
                },
                {
                  icon: <Mail size={15} />,
                  label: "Email",
                  value: CONTACT_EMAIL,
                  href: `mailto:${CONTACT_EMAIL}`,
                },
                {
                  icon: <MapPin size={15} />,
                  label: "Office",
                  value: "Nairobi, Kenya",
                },
                {
                  icon: <ArrowUpRight size={15} />,
                  label: "Website",
                  value: "cimabravasafaris.co.ke",
                  href: SITE_URL,
                  printOnly: true,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className={`${row.printOnly ? "hidden print:flex" : "flex"} items-center justify-between gap-4 py-4 border-b border-savannah-gold/35`}
                >
                  <span className="flex items-center gap-2.5 whitespace-nowrap text-xs uppercase tracking-[0.16em] font-label font-bold text-sunrise-yellow">
                    {row.icon}
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="text-sm font-semibold text-sand-cream hover:text-sunrise-yellow transition-colors [overflow-wrap:anywhere] text-right"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-sand-cream">
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 pt-4 text-sm print:col-span-2">
                <span className="text-sand-cream/70">@cima_brava_adventures</span>
                <span className="flex gap-5 font-semibold">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sand-cream hover:text-sunrise-yellow transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sand-cream hover:text-sunrise-yellow transition-colors"
                  >
                    TikTok
                  </a>
                </span>
              </div>
            </address>
          </div>
        </div>
      </section>
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
}
