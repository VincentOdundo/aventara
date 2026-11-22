import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import logo from "../../pages/cima_logo.png";
import magicalKenya from "../../assets/partners/magical-kenya.png";
import tanzaniaUnforgettable from "../../assets/partners/tanzania-unforgettable.png";

// Destination and partner marks. To add another (e.g. Amref), put its logo in
// src/assets, add it to PARTNERS in scripts/build-assets.mjs, run `npm run assets`,
// then add one entry here.
const PARTNER_LOGOS = [
  { name: "Magical Kenya", href: "https://magicalkenya.com", src: magicalKenya, width: 410, height: 240 },
  { name: "Tanzania, Unforgettable", href: "https://www.tanzaniatourism.go.tz", src: tanzaniaUnforgettable, width: 706, height: 240 },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-safari-brown to-midnight-black text-sand-cream border-t border-savannah-gold/25">
      {/* Signature Safari Banner Strip */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pt-16">
        <div className="relative rounded-3xl overflow-hidden border border-savannah-gold/30 bg-gradient-to-r from-midnight-black to-safari-brown p-8 md:p-12 editorial-shadow flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-xs font-label uppercase tracking-[0.25em] text-sunrise-yellow">
              Cima Brava Adventures
            </p>
            <div className="inline-block">
              <p className="text-3xl md:text-4xl lg:text-5xl text-sand-cream font-script italic tracking-wide">
                Wild by Nature. Guided by Heart.
              </p>
              <svg
                viewBox="0 0 320 18"
                className="w-56 md:w-72 h-4 mt-1 mx-auto md:mx-0 text-sunrise-yellow"
                fill="none"
              >
                <path
                  d="M4 13C78 4 195 3 316 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/safaris"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-bold text-sm hover:brightness-105 transition-all"
            >
              Explore Trips
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-savannah-gold text-sand-cream font-bold text-sm hover:bg-savannah-gold/15 transition-all"
            >
              Plan Your Adventure
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="Cima Brava Adventures"
                className="h-16 md:h-20 lg:h-24 w-auto" loading="lazy" decoding="async" />
            </Link>
            <p className="text-sand-cream/75 text-sm leading-relaxed mb-8 max-w-sm">
              Curating East African safari expeditions that
              connect travelers with the untamed wilderness, golden savannahs,
              and rich heritage of Kenya and Tanzania.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/cima_brava_adventures?mdxt=MWQ1OHpkOWQ1bHZoaQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-sand-cream/10 border border-savannah-gold/30 text-sunrise-yellow flex items-center justify-center hover:bg-gradient-to-b hover:from-sunrise-yellow hover:to-savannah-gold hover:text-midnight-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@cima_brava_adventures"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-sand-cream/10 border border-savannah-gold/30 text-sunrise-yellow flex items-center justify-center hover:bg-gradient-to-b hover:from-sunrise-yellow hover:to-savannah-gold hover:text-midnight-black transition-all duration-300"
                aria-label="TikTok"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.7a8.16 8.16 0 004.76 1.52V6.77a4.83 4.83 0 01-1-.08z" />
                </svg>
              </a>
              <a
                href="mailto:cimabravaadventures@gmail.com"
                className="w-11 h-11 rounded-full bg-sand-cream/10 border border-savannah-gold/30 text-sunrise-yellow flex items-center justify-center hover:bg-gradient-to-b hover:from-sunrise-yellow hover:to-savannah-gold hover:text-midnight-black transition-all duration-300"
                aria-label="Email Cima Brava Adventures"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Safari Links */}
          <div className="lg:col-span-2">
            <p className="font-headline font-bold text-sm uppercase tracking-widest mb-6 text-sunrise-yellow">
              Safaris
            </p>
            <ul className="space-y-3">
              {[
                { label: "Kenya Safaris", to: "/safaris/kenya" },
                { label: "Tanzania Safaris", to: "/safaris/tanzania" },
                { label: "Kenya & Tanzania", to: "/safaris/combined" },
                { label: "Nairobi Half-Day Tour", to: "/safari/half-day-nairobi-tour" },
                { label: "All Packages", to: "/safaris" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-sand-cream/75 hover:text-sunrise-yellow transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 text-savannah-gold transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-2">
            <p className="font-headline font-bold text-sm uppercase tracking-widest mb-6 text-sunrise-yellow">
              Destinations
            </p>
            <ul className="space-y-3">
              {[
                { label: "Kenya Guide", to: "/kenya" },
                { label: "Tanzania Guide", to: "/tanzania" },
                { label: "Masai Mara", to: "/destinations/masai-mara" },
                { label: "Serengeti", to: "/destinations/serengeti" },
                { label: "Ngorongoro", to: "/destinations/ngorongoro" },
                { label: "Amboseli", to: "/destinations/amboseli" },
                { label: "Lake Nakuru", to: "/destinations/lake-nakuru" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-sand-cream/75 hover:text-sunrise-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <p className="font-headline font-bold text-sm uppercase tracking-widest mb-6 text-sunrise-yellow">
              Company
            </p>
            <ul className="space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Company Profile", to: "/company-profile" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-sand-cream/75 hover:text-sunrise-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <p className="font-headline font-bold text-sm uppercase tracking-widest mb-6 text-sunrise-yellow">
              Get in Touch
            </p>
            <ul className="space-y-4 text-sm text-sand-cream/80">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-savannah-gold" />
                <a
                  href="tel:+254112346049"
                  className="hover:text-sunrise-yellow transition-colors"
                >
                  +254 112 346 049
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-savannah-gold" />
                <a
                  href="mailto:cimabravaadventures@gmail.com"
                  className="hover:text-sunrise-yellow transition-colors break-all"
                >
                  cimabravaadventures@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-savannah-gold" />
                <span>City Market, Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Destination marks */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-12 print:hidden">
        <div className="border-t border-savannah-gold/15 pt-10 flex flex-col items-center gap-6">
          <p className="text-xs font-label uppercase tracking-[0.3em] text-sunrise-yellow/90">
            Destinations we proudly showcase
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {PARTNER_LOGOS.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={p.name}
                  className="flex h-20 md:h-24 items-center justify-center rounded-2xl bg-white px-6 border border-savannah-gold/40 shadow-md hover:-translate-y-0.5 hover:border-savannah-gold transition-all duration-300"
                >
                  <img
                    src={p.src}
                    alt={p.name}
                    width={p.width}
                    height={p.height}
                    loading="lazy"
                    decoding="async"
                    className="h-11 md:h-14 w-auto object-contain"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-savannah-gold/15 bg-midnight-black">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-sand-cream/60">
            &copy; {new Date().getFullYear()} Cima Brava Adventures. All rights
            reserved.
          </p>
          {/* Site credit. Acid green (#CCFF00) is the BYND/LABS brand colour. */}
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-7 flex justify-center print:hidden">
          <a
            href="https://bynd.co.ke/labs"
            target="_blank"
            rel="noopener"
            className="group inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.24em] text-sand-cream/60 hover:text-sand-cream/85 transition-colors"
          >
            <span>Built by</span>
            <span className="font-bold text-[#CCFF00] px-1.5 py-0.5 -mx-0.5 ">
              BYND/LABS
            </span>
          </a>
        </div>
          <div className="flex gap-6 text-xs text-sand-cream/60">
            <Link to="/sitemap" className="hover:text-sunrise-yellow transition-colors">
              Sitemap
            </Link>
            <Link to="/contact" className="hover:text-sunrise-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-sunrise-yellow transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        
      </div>
    </footer>
  );
}
