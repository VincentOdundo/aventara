"use client";
import { useState } from "react";
import { Calendar, MapPin, Mail } from "lucide-react";
import { SEASONS } from "../../data/safaris";
import { SeasonBadge, PriceDisplay } from "../ui/SeasonPrice";
import { WhatsAppBookButton } from "../ui/WhatsAppCTA";

export function SafariBookingCard({ safari, initialSeason }) {
  const [selectedSeason, setSelectedSeason] = useState(initialSeason);
  const seasonLabel = SEASONS[selectedSeason].label;
  const [guests, setGuests] = useState(2);

  const isSingle = guests === 1 && Boolean(safari.singlePrice);
  const price = isSingle
    ? safari.singlePrice[selectedSeason]
    : safari.price[selectedSeason];
  const totalPrice = price * guests;

  return (
    <div
      id="booking"
      className="sticky top-[120px] lg:top-[128px] bg-sand-cream border border-savannah-gold/30 rounded-2xl shadow-lg p-8 scroll-mt-[120px] lg:scroll-mt-[136px]"
    >
      <SeasonBadge className="mb-4" />
      <PriceDisplay
        safari={safari}
        season={selectedSeason}
        guests={guests}
        className="mb-5"
      />

      {/* Season Toggle */}
      <div className="mb-5">
        <label className="text-xs uppercase tracking-wider text-safari-brown/80 font-body font-bold block mb-2">
          Travel Season
        </label>
        <div className="grid grid-cols-2 gap-2">
          {["low", "high"].map((sKey) => (
            <button
              key={sKey}
              type="button"
              onClick={() => setSelectedSeason(sKey)}
              className={`px-3 py-2 rounded-xl text-left border text-xs font-body transition-all ${
                selectedSeason === sKey
                  ? "bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black border-savannah-gold font-bold shadow-sm"
                  : "bg-sand-cream text-safari-brown border-savannah-gold/30 hover:border-savannah-gold"
              }`}
            >
              <span className="block font-bold">{SEASONS[sKey].label}</span>
              <span className="block text-[11px] opacity-80">
                {SEASONS[sKey].dates}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Room Rate Breakdown when singlePrice exists */}
      {safari.singlePrice && (
        <div className="mb-5 rounded-xl border border-savannah-gold/30 bg-savannah-gold/10 p-3 text-xs font-body space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-safari-brown/80">2+ People (Sharing)</span>
            <span className="font-bold text-safari-brown">
              ${safari.price[selectedSeason].toLocaleString()}/pp
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-safari-brown/80">Single (1 Private Room)</span>
            <span className="font-bold text-safari-brown">
              ${safari.singlePrice[selectedSeason].toLocaleString()}/pp
            </span>
          </div>
        </div>
      )}

      {/* Guest Selector */}
      <div className="mb-6">
        <label className="text-xs uppercase tracking-wider text-safari-brown/80 font-body font-bold block mb-2">
          Number of Travelers
        </label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setGuests(Math.max(1, guests - 1))}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-midnight-black via-safari-brown to-safari-brown text-sand-cream flex items-center justify-center font-bold text-lg hover:brightness-110 transition-all shadow-sm"
          >
            −
          </button>
          <span className="text-2xl font-headline font-bold text-safari-brown w-12 text-center">
            {guests}
          </span>
          <button
            type="button"
            onClick={() => setGuests(Math.min(20, guests + 1))}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-midnight-black via-safari-brown to-safari-brown text-sand-cream flex items-center justify-center font-bold text-lg hover:brightness-110 transition-all shadow-sm"
          >
            +
          </button>
        </div>
        {safari.singlePrice && (
          <p className="text-[11px] font-body text-safari-brown/70 mt-1.5">
            {isSingle
              ? "Single room rate applied for 1 traveler"
              : "Sharing room rate applied for 2+ travelers"}
          </p>
        )}
      </div>

      {/* Total */}
      <div className="bg-sand-cream border border-savannah-gold/40 rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-2 font-body">
          <span className="text-sm text-safari-brown/80">
            ${price.toLocaleString()} × {guests} person{guests > 1 ? "s" : ""}
          </span>
          <span className="font-bold text-safari-brown">
            ${totalPrice.toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between items-center pt-2 border-t border-savannah-gold/25">
          <span className="font-body font-bold text-lg text-safari-brown">
            Total
          </span>
          <span className="text-2xl font-headline font-bold text-sunset-orange">
            ${totalPrice.toLocaleString()}
          </span>
        </div>
      </div>

      <WhatsAppBookButton
        safari={safari}
        season={seasonLabel}
        price={price}
        guests={guests}
        className="w-full"
      />

      <a
        href={`mailto:cimabravaadventures@gmail.com?subject=${encodeURIComponent(`Safari Inquiry: ${safari.title} (${seasonLabel})`)}`}
        className="mt-3 w-full py-3 px-6 border-2 border-savannah-gold text-safari-brown hover:bg-savannah-gold/15 font-body font-bold text-sm rounded-full flex items-center justify-center gap-2 transition-all"
      >
        <Mail size={16} className="text-sunset-orange" />
        Inquire via Email
      </a>

      <p className="text-xs font-body text-safari-brown/70 text-center mt-4">
        Children under 4 travel free · Free cancellation up to 30 days before
        departure
      </p>

      {/* Quick Info */}
      <div className="mt-8 pt-6 border-t border-savannah-gold/25 space-y-4 font-body">
        <div className="flex items-center gap-3 text-sm">
          <Calendar size={16} className="text-sunset-orange" />
          <div>
            <p className="font-bold text-safari-brown">Duration</p>
            <p className="text-safari-brown/80">
              {safari.days === 0.5
                ? "Half Day Tour"
                : `${safari.days} Days / ${safari.days - 1} Nights`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <MapPin size={16} className="text-sunset-orange" />
          <div>
            <p className="font-bold text-safari-brown">Destinations</p>
            <p className="text-safari-brown/80">
              {[...new Set(safari.destinations)].join(", ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
