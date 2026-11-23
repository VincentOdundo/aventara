"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const usd = (n) => `$${n.toLocaleString("en-US")}`;
const duration = (days) => (days === 0.5 ? "Half day" : `${days} days`);
const dayPlace = (d) => String(d.destination || "").split(". ")[0];
const dayActivity = (d) => {
  const t = String(d.title || "");
  const i = t.indexOf(":");
  return (i >= 0 ? t.slice(i + 1) : t).trim();
};
const dayStay = (d) =>
  d.accommodation ? String(d.accommodation).split(" (")[0].trim() : null;
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
            from <span className="font-bold text-safari-brown">{usd(pkg.price.low)}</span>
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
                  <span className="block font-semibold text-midnight-black">{dayPlace(d)}</span>
                  <span className="block text-safari-brown/75">{dayActivity(d)}</span>
                  <span className="mt-1 block text-xs text-safari-brown/65 md:hidden print:hidden">
                    {dayMeals(d)}
                    {stay ? ` · ${stay}` : ""}
                  </span>
                </span>
                <span className="hidden md:block print:hidden text-safari-brown/85">{dayMeals(d)}</span>
                <span className="hidden print:block text-safari-brown/85 whitespace-nowrap">{dayMealCode(d)}</span>
                <span className="hidden md:block print:block text-safari-brown/85">
                  {stay || "Trip ends"}
                </span>
              </li>
            );
          })}
        </ol>
        <Link
          href={`/safari/${pkg.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sunset-orange hover:text-safari-brown transition-colors print:hidden"
        >
          Full details and booking
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}

export function CompanyProfileItineraries({ collections, allPackages }) {
  const [openItinerary, setOpenItinerary] = useState(allPackages.kenya[0].id);

  return (
    <div className="print:columns-2 print:gap-[9mm]">
      {collections.map((c) => (
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
  );
}
