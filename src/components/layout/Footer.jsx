import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary min-h-[100svh] flex flex-col justify-center">
      {/* Main Footer */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <img
              src={logo}
              alt="Aventara Safaris"
              className="h-16 md:h-20 lg:h-24 w-auto brightness-0 invert mb-6"
            />
            <p className="text-on-primary/70 text-sm leading-relaxed mb-8 max-w-sm">
              Curating unforgettable East African safari experiences that
              connect travelers with the raw beauty and rich culture of Kenya
              and Tanzania.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/aventara_safaris_kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/187nSmsCH8/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@aventara_safaris_ke1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
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
            </div>
          </div>

          {/* Safari Links */}
          <div className="lg:col-span-2">
            <h4 className="font-headline font-semibold text-sm uppercase tracking-widest mb-6 text-on-primary/50">
              Safaris
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Kenya Safaris", to: "/safaris/kenya" },
                { label: "Tanzania Safaris", to: "/safaris/tanzania" },
                { label: "Kenya & Tanzania", to: "/safaris/combined" },
                { label: "All Packages", to: "/safaris" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-on-primary/70 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className="lg:col-span-2">
            <h4 className="font-headline font-semibold text-sm uppercase tracking-widest mb-6 text-on-primary/50">
              Destinations
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Masai Mara", to: "/destinations/masai-mara" },
                { label: "Serengeti", to: "/destinations/serengeti" },
                { label: "Ngorongoro", to: "/destinations/ngorongoro" },
                { label: "Amboseli", to: "/destinations/amboseli" },
                { label: "Tarangire", to: "/destinations/tarangire" },
                { label: "Lake Nakuru", to: "/destinations/lake-nakuru" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-on-primary/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-headline font-semibold text-sm uppercase tracking-widest mb-6 text-on-primary/50">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", to: "/about" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-on-primary/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-headline font-semibold text-sm uppercase tracking-widest mb-6 text-on-primary/50">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-on-primary/70">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span>hello@aventarasafaris.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-on-primary/50">
            &copy; {new Date().getFullYear()} Aventara Safaris. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-on-primary/50">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
