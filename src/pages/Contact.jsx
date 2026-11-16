import React from "react";
import { useSeo } from "../hooks/useSeo";
import { breadcrumbLd, pageCrumbs } from "../lib/seo";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection } from "../components/ui";
import { useWhatsApp } from "../hooks/useWhatsApp";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  ArrowRight,
} from "lucide-react";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";
import logo from "./cima_logo.png";

import heroImg from "../assets/leapard-car.jpeg";

function TikTokIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.82a4.84 4.84 0 0 1-1-.13Z" />
    </svg>
  );
}

export default function Contact() {
  useSeo({
    title: "Contact & Safari Quotes",
    description:
      "Send your travel dates and group size by WhatsApp or email. We reply within 24 hours with availability, the final price and a day-by-day plan.",
    path: "/contact",
    jsonLd: breadcrumbLd(pageCrumbs("Contact", "/contact")),
  });
  const { generateInquiry } = useWhatsApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = formData.get("subject");

    // Redirect to WhatsApp with form details
    const waText = `🌍 *Cima Brava Adventures Contact Form*\n\n👤 Name: ${name}\n📧 Email: ${email}\n📋 Subject: ${subject}\n\n💬 Message:\n${message}\n\n- Sent to cimabravaadventures@gmail.com`;
    const waUrl = `https://wa.me/254112346049?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center bg-midnight-black">
        <img
          src={heroImg}
          alt="Contact Cima Brava Adventures"
          className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/30"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center pt-20">
          <span className="text-xs uppercase tracking-[0.4em] text-sunrise-yellow font-bold mb-3 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-sand-cream tracking-[-0.02em]">
            Contact Us
          </h1>
          <p className="font-script italic text-3xl md:text-4xl text-sunrise-yellow mt-4">
            Wild by Nature. Guided by Heart.
          </p>
        </div>
      </section>

      <Section className="py-16 md:py-24 bg-sand-cream text-midnight-black font-body">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="left">
              <span className="text-xs uppercase tracking-[0.3em] text-sunset-orange font-bold mb-3 block">
                Bespoke Safari Planning
              </span>
              <h2 className="text-3xl font-headline font-bold text-safari-brown mb-6">
                Let&apos;s Plan Your Safari
              </h2>
              <p className="text-safari-brown/80 leading-relaxed mb-10 font-body">
                Whether you have a question about our packages, need help
                choosing the right safari, or want a custom itinerary — we&apos;re
                here to help. Reach out through any channel and we&apos;ll respond
                within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black flex-shrink-0 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-midnight-black">
                      Phone
                    </p>
                    <a
                      href="tel:+254112346049"
                      className="text-safari-brown/85 text-sm hover:text-sunset-orange transition-colors"
                    >
                      +254 112 346 049
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black flex-shrink-0 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-midnight-black">
                      Email
                    </p>
                    <a
                      href="mailto:cimabravaadventures@gmail.com"
                      className="text-safari-brown/85 text-sm hover:text-sunset-orange transition-colors"
                    >
                      cimabravaadventures@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black flex-shrink-0 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-midnight-black">
                      Location
                    </p>
                    <p className="text-safari-brown/85 text-sm">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black flex-shrink-0 shadow-sm">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-midnight-black">
                      Response Time
                    </p>
                    <p className="text-safari-brown/85 text-sm">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10 pt-8 border-t border-savannah-gold/25">
                <p className="text-xs uppercase tracking-widest text-safari-brown font-bold mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/cima_brava_adventures?mdxt=MWQ1OHpkOWQ1bHZoaQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full bg-safari-brown text-sand-cream flex items-center justify-center hover:bg-gradient-to-b hover:from-sunrise-yellow hover:to-savannah-gold hover:text-midnight-black transition-all shadow-sm"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@cima_brava_adventures"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-11 h-11 rounded-full bg-safari-brown text-sand-cream flex items-center justify-center hover:bg-gradient-to-b hover:from-sunrise-yellow hover:to-savannah-gold hover:text-midnight-black transition-all shadow-sm"
                  >
                    <TikTokIcon size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/187nSmsCH8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full bg-safari-brown text-sand-cream flex items-center justify-center hover:bg-gradient-to-b hover:from-sunrise-yellow hover:to-savannah-gold hover:text-midnight-black transition-all shadow-sm"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 space-y-3">
                <a
                  href={generateInquiry("Custom Safari Request")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-destinations w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream border border-savannah-gold/40 px-8 py-4 rounded-full font-semibold hover:brightness-110 transition-all active:scale-95 shadow-md"
                >
                  <WhatsAppIcon size={20} className="text-sunrise-yellow" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  to="/safaris"
                  className="btn-plan w-full inline-flex items-center justify-center gap-2 border-2 border-savannah-gold text-midnight-black bg-sand-cream px-8 py-3.5 rounded-full font-bold hover:bg-savannah-gold/15 transition-all"
                >
                  <span>Explore Trips</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection animation="right">
              <form
                onSubmit={handleSubmit}
                className="bg-sand-cream border border-savannah-gold/30 rounded-2xl shadow-xl p-8 md:p-10"
              >
                <h3 className="text-2xl font-headline font-bold text-safari-brown mb-8">
                  Send Us a Message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-safari-brown font-bold mb-2">
                      Full Name <span className="text-crane-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-sand-cream border border-savannah-gold/40 rounded-xl px-4 py-3 text-midnight-black focus:outline-none focus:ring-2 focus:ring-savannah-gold placeholder:text-safari-brown/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-safari-brown font-bold mb-2">
                      Email <span className="text-crane-red">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-sand-cream border border-savannah-gold/40 rounded-xl px-4 py-3 text-midnight-black focus:outline-none focus:ring-2 focus:ring-savannah-gold placeholder:text-safari-brown/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-safari-brown font-bold mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full bg-sand-cream border border-savannah-gold/40 rounded-xl px-4 py-3 text-midnight-black focus:outline-none focus:ring-2 focus:ring-savannah-gold"
                  >
                    <option>General Inquiry</option>
                    <option>Safari Booking</option>
                    <option>Custom Itinerary</option>
                    <option>Group Booking</option>
                    <option>Partnership Inquiry</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-xs uppercase tracking-wider text-safari-brown font-bold mb-2">
                    Message <span className="text-crane-red">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-sand-cream border border-savannah-gold/40 rounded-xl px-4 py-3 text-midnight-black focus:outline-none focus:ring-2 focus:ring-savannah-gold resize-none placeholder:text-safari-brown/40"
                    placeholder="Tell us about your dream safari..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-explore inline-flex items-center justify-center gap-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:brightness-105 transition-all active:scale-95 w-full md:w-auto"
                >
                  <Send size={18} />
                  <span>Send via WhatsApp</span>
                </button>
                <p className="text-xs text-safari-brown/75 mt-3">
                  Your message will be sent via WhatsApp or email us directly at{" "}
                  <a
                    href="mailto:cimabravaadventures@gmail.com"
                    className="text-sunset-orange font-semibold underline"
                  >
                    cimabravaadventures@gmail.com
                  </a>
                  .
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
