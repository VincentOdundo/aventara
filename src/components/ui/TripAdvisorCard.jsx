"use client";
import Script from "next/script";
import { ExternalLink, MessageSquarePlus, ShieldCheck } from "lucide-react";
import {
  TRIPADVISOR_LOCATION_ID,
  TRIPADVISOR_REVIEW_URL,
  TRIPADVISOR_URL,
} from "../../data/company";
import TripAdvisorIcon from "./TripAdvisorIcon";

const WIDGET_UNIQ = (process.env.NEXT_PUBLIC_TRIPADVISOR_WIDGET_UNIQ || "").trim();

/**
 * Editorial TripAdvisor trust card + optional official self-serve widget.
 * Never hardcodes star ratings or review counts; mounts the official script
 * only when NEXT_PUBLIC_TRIPADVISOR_WIDGET_UNIQ is set.
 */
export function TripAdvisorCard({ variant = "banner", className = "" }) {
  const isBanner = variant === "banner";

  return (
    <div
      className={`rounded-2xl border border-savannah-gold/35 bg-sand-cream shadow-sm ${
        isBanner ? "p-8 md:p-10" : "p-6"
      } ${className}`}
    >
      <div
        className={`flex flex-col ${
          isBanner ? "lg:flex-row lg:items-center lg:justify-between gap-8" : "gap-5"
        }`}
      >
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-label uppercase tracking-[0.22em] text-sunset-orange font-bold">
            <ShieldCheck size={15} />
            <span>Verified Operator Listing</span>
          </div>
          <p className="text-xl md:text-2xl font-headline font-bold text-safari-brown">
            Find &amp; Review Cima Brava Adventures Safaris on TripAdvisor
          </p>
          <p className="text-sm text-safari-brown/85 font-body leading-relaxed">
            Our City Market, Nairobi safari dispatch is an owner-verified operator
            listing on TripAdvisor. Read independent traveller feedback as reviews
            are published, or share your experience if you have already travelled
            with our guides.
          </p>
        </div>

        <div
          className={`flex flex-wrap items-center gap-3 ${
            isBanner ? "shrink-0" : ""
          }`}
        >
          <a
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-6 py-3 font-body font-bold text-sm shadow-sm hover:brightness-105 transition-all"
          >
            <TripAdvisorIcon size={18} />
            <span>Find us on TripAdvisor</span>
            <ExternalLink size={14} />
          </a>
          <a
            href={TRIPADVISOR_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-savannah-gold text-safari-brown bg-sand-cream px-5 py-2.5 font-body font-bold text-sm hover:bg-savannah-gold/15 transition-all"
          >
            <MessageSquarePlus size={16} className="text-sunset-orange" />
            <span>Review us on TripAdvisor</span>
          </a>
        </div>
      </div>

      {WIDGET_UNIQ && (
        <div className="mt-6 pt-5 border-t border-savannah-gold/25">
          <div id={`TA_selfserveprop${WIDGET_UNIQ}`} className="TA_selfserveprop">
            <ul id="TA_links" className="TA_links">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={TRIPADVISOR_URL}
                  className="text-xs font-body text-safari-brown underline"
                >
                  Cima Brava Adventures Safaris on TripAdvisor
                </a>
              </li>
            </ul>
          </div>
          <Script
            id={`ta-widget-${WIDGET_UNIQ}`}
            src={`https://www.jscache.com/wejs?wtype=selfserveprop&uniq=${WIDGET_UNIQ}&locationId=${TRIPADVISOR_LOCATION_ID}&lang=en_US&rating=true&nreviews=5&writereviewlink=true&popIdx=true&iswide=false&border=true&display_version=2`}
            strategy="lazyOnload"
          />
        </div>
      )}
    </div>
  );
}
