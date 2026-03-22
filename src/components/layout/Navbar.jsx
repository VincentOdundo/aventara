import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.svg";
import WhatsAppIcon from "../ui/WhatsAppIcon";

const navLinks = [
  {
    label: "Safaris",
    children: [
      { label: "All Safaris", to: "/safaris" },
      { label: "Kenya Safaris", to: "/safaris/kenya" },
      { label: "Tanzania Safaris", to: "/safaris/tanzania" },
      { label: "Kenya & Tanzania", to: "/safaris/combined" },
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
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "glass editorial-shadow py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="flex justify-between items-center px-6 lg:px-12 max-w-screen-2xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 relative z-10">
            <img
              src={logo}
              alt="Aventara Safaris"
              className="h-10 md:h-14 lg:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item, idx) =>
              item.children ? (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 text-on-surface/70 hover:text-primary hover:bg-surface-container-low"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        activeDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 bg-surface-container-lowest rounded-xl editorial-shadow overflow-hidden transition-all duration-300 origin-top ${
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
                          className="block px-5 py-3 text-sm text-on-surface/80 hover:text-primary hover:bg-surface-container-low transition-colors font-medium"
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
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    location.pathname === item.to
                      ? "text-primary bg-primary/5"
                      : "text-on-surface/70 hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/safaris"
              className="hidden md:inline-flex items-center gap-2 px-7 py-2.5 rounded-md text-sm font-bold transition-all duration-300 active:scale-95 bg-primary text-white hover:bg-primary-container"
            >
              Book Safari
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md transition-colors text-on-surface hover:bg-surface-container-low"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-surface-container-lowest editorial-shadow overflow-y-auto transition-transform duration-500 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <img src={logo} alt="Aventara Safaris" className="h-10" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-md hover:bg-surface-container-low text-on-surface"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="space-y-1">
            {navLinks.map((item, idx) =>
              item.children ? (
                <div key={idx}>
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === idx ? null : idx)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-on-surface font-medium rounded-md hover:bg-surface-container-low transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        activeDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === idx ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="pl-4 space-y-1 pb-2">
                      {item.children.map((child, cidx) => (
                        <Link
                          key={cidx}
                          to={child.to}
                          className="block px-4 py-2.5 text-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low rounded-md transition-colors"
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
                  className={`block px-4 py-3 rounded-md font-medium transition-colors ${
                    location.pathname === item.to
                      ? "text-primary bg-primary/5"
                      : "text-on-surface hover:text-primary hover:bg-surface-container-low"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="mt-8 pt-6 border-t border-outline-variant/20">
            <Link
              to="/safaris"
              className="block w-full text-center bg-primary text-on-primary py-3.5 rounded-md font-bold hover:bg-primary-container transition-all active:scale-95"
            >
              Book Safari
            </Link>
            <a
              href="https://wa.me/254112346049"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 py-3 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors"
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
