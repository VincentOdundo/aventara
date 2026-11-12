import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logo from "../../pages/cima_logo.svg";
import WhatsAppIcon from "../ui/WhatsAppIcon";

const navLinks = [
  {
    label: "Safaris",
    children: [
      { label: "All Safaris", to: "/safaris" },
      { label: "Kenya Safaris", to: "/safaris/kenya" },
      { label: "Tanzania Safaris", to: "/safaris/tanzania" },
      { label: "Kenya & Tanzania", to: "/safaris/combined" },
      { label: "Nairobi Day Trips", to: "/safaris/nairobi" },
    ],
  },
  {
    label: "Destinations",
    children: [
      { label: "All Destinations", to: "/destinations" },
      { label: "Masai Mara", to: "/destinations/masai-mara" },
      { label: "Serengeti", to: "/destinations/serengeti" },
      { label: "Ngorongoro Crater", to: "/destinations/ngorongoro" },
      { label: "Amboseli", to: "/destinations/amboseli" },
      { label: "Lake Nakuru", to: "/destinations/lake-nakuru" },
    ],
  },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-savannah-gold/25 editorial-shadow ${
          scrolled
            ? "bg-midnight-black/95 backdrop-blur-md py-2.5"
            : "bg-gradient-to-r from-midnight-black/95 via-safari-brown/90 to-midnight-black/95 backdrop-blur-md py-3"
        }`}
      >
        <nav className="flex justify-between items-center px-6 lg:px-12 max-w-screen-2xl mx-auto">
          {/* Logo on Dark Theme Surface */}
          <Link
            to="/"
            className="flex items-center gap-3 relative z-10  px-3.5 py-1.5 shadow-md transition-all duration-300 hover:border-sunrise-yellow/70"
          >
            <img
              src={logo}
              alt="Cima Brava Adventures"
              className="h-9 md:h-11 lg:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((item, idx) =>
              item.children ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-sand-cream/90 hover:text-sunrise-yellow hover:bg-sand-cream/10">
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 text-savannah-gold ${
                        activeDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-60 bg-safari-brown/95 backdrop-blur-xl border border-savannah-gold/25 rounded-2xl editorial-shadow overflow-hidden transition-all duration-300 origin-top ${
                      activeDropdown === idx
                        ? "opacity-100 scale-y-100 pointer-events-auto"
                        : "opacity-0 scale-y-95 pointer-events-none"
                    }`}
                  >
                    <div className="py-2">
                      {item.children.map((child, cidx) => (
                        <Link
                          key={cidx}
                          to={child.to}
                          className="block px-5 py-3 text-sm text-sand-cream/85 hover:text-sunrise-yellow hover:bg-savannah-gold/15 transition-colors font-medium"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.to}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.to
                      ? "text-sunrise-yellow bg-savannah-gold/20 border border-savannah-gold/30"
                      : "text-sand-cream/90 hover:text-sunrise-yellow hover:bg-sand-cream/10"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/safaris"
              className="hidden md:inline-flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-300 active:scale-95 btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black hover:brightness-105"
            >
              Explore Trips
              <ArrowRight size={16} />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-full transition-colors text-sand-cream bg-safari-brown/80 border border-savannah-gold/30 hover:bg-savannah-gold/20"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-midnight-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-gradient-to-b from-midnight-black to-safari-brown text-sand-cream border-l border-savannah-gold/25 editorial-shadow overflow-y-auto transition-transform duration-500 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-savannah-gold/20">
            <div className="bg-midnight-black border border-savannah-gold/35 rounded-xl px-3 py-1.5">
              <img
                src={logo}
                alt="Cima Brava Adventures"
                className="h-10 w-auto"
              />
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full hover:bg-sand-cream/10 text-sand-cream border border-savannah-gold/25"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-1.5">
            {navLinks.map((item, idx) =>
              item.children ? (
                <div key={idx}>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === idx ? null : idx)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-sand-cream font-medium rounded-xl hover:bg-sand-cream/10 transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 text-sunrise-yellow ${
                        activeDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === idx ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 space-y-1 pb-2 border-l border-savannah-gold/25 ml-4 mt-1">
                      {item.children.map((child, cidx) => (
                        <Link
                          key={cidx}
                          to={child.to}
                          className="block px-4 py-2.5 text-sm text-sand-cream/80 hover:text-sunrise-yellow hover:bg-savannah-gold/15 rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={idx}
                  to={item.to}
                  className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                    location.pathname === item.to
                      ? "text-sunrise-yellow bg-savannah-gold/20 border border-savannah-gold/30"
                      : "text-sand-cream hover:text-sunrise-yellow hover:bg-sand-cream/10"
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="mt-8 pt-6 border-t border-savannah-gold/20 space-y-3">
            <Link
              to="/safaris"
              className="flex items-center justify-center gap-2 w-full text-center btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black py-3.5 rounded-full font-bold hover:brightness-105 transition-all active:scale-95"
            >
              Explore Trips
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="block w-full text-center border-2 border-savannah-gold text-sand-cream py-3 rounded-full font-semibold hover:bg-savannah-gold/15 transition-all"
            >
              Plan Your Adventure
            </Link>
            <a
              href="https://wa.me/254112346049"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 pt-2 py-2.5 text-sm font-medium text-sand-cream/80 hover:text-sunrise-yellow transition-colors"
            >
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
