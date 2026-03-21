import React from "react";
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
} from "lucide-react";
import WhatsAppIcon from "../components/ui/WhatsAppIcon";

import imgAsset_0 from "../assets/cheater.jpeg";
import imgAsset_1 from "../assets/cheater_plain.jpeg";
import imgAsset_2 from "../assets/elefpalin.jpeg";
import imgAsset_3 from "../assets/elephant.jpeg";
import imgAsset_4 from "../assets/elephtain.jpeg";
import imgAsset_5 from "../assets/flamingo.jpeg";
import imgAsset_6 from "../assets/lion.jpeg";
import imgAsset_7 from "../assets/lioness.jpeg";
import imgAsset_8 from "../assets/lioness_open.jpeg";
import imgAsset_9 from "../assets/mountain.jpeg";
import imgAsset_10 from "../assets/plain_elefabt.jpeg";
import imgAsset_11 from "../assets/rhino.jpeg";
import imgAsset_12 from "../assets/rhino_plain.jpeg";
import imgAsset_13 from "../assets/treecheta.jpeg";

export default function Contact() {
  const { generateInquiry } = useWhatsApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = formData.get("subject");

    // Redirect to WhatsApp with form details
    const waText = `🌍 *Aventara Safaris Contact Form*\n\n👤 Name: ${name}\n📧 Email: ${email}\n📋 Subject: ${subject}\n\n💬 Message:\n${message}\n\n- Sent from aventarasafaris.com`;
    const waUrl = `https://wa.me/254700000000?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center">
        <img
          src={imgAsset_4}
          alt="Contact Aventara Safaris"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 img-overlay-full"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/70 font-bold mb-3 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-[-0.02em]">
            Contact Us
          </h1>
        </div>
      </section>

      <Section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="left">
              <h2 className="text-3xl font-headline font-bold text-primary mb-6">
                Let's Plan Your Safari
              </h2>
              <p className="text-on-surface-variant leading-relaxed mb-10">
                Whether you have a question about our packages, need help
                choosing the right safari, or want a custom itinerary - we're
                here to help. Reach out through any channel and we'll respond
                within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Phone</p>
                    <p className="text-on-surface-variant text-sm">
                      +254 700 000 000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Email</p>
                    <p className="text-on-surface-variant text-sm">
                      hello@aventarasafaris.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Location</p>
                    <p className="text-on-surface-variant text-sm">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Response Time</p>
                    <p className="text-on-surface-variant text-sm">
                      Within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-10 pt-8 border-t border-outline-variant/10">
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/aventara_safaris_kenya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/187nSmsCH8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={generateInquiry("Custom Safari Request")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-md font-bold hover:bg-[#20BD5C] transition-all active:scale-95"
              >
                <WhatsAppIcon size={22} className="text-white" />
                Chat on WhatsApp
              </a>
            </AnimatedSection>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <AnimatedSection animation="right">
              <form
                onSubmit={handleSubmit}
                className="bg-surface-container-lowest rounded-2xl editorial-shadow p-8 md:p-10"
              >
                <h3 className="text-2xl font-headline font-bold text-primary mb-8">
                  Send Us a Message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-surface-container-high rounded-md px-4 py-3 text-on-surface focus:ring-2 focus:ring-surface-tint border-none placeholder:text-on-surface-variant/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-surface-container-high rounded-md px-4 py-3 text-on-surface focus:ring-2 focus:ring-surface-tint border-none placeholder:text-on-surface-variant/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    className="w-full bg-surface-container-high rounded-md px-4 py-3 text-on-surface focus:ring-2 focus:ring-surface-tint border-none"
                  >
                    <option>General Inquiry</option>
                    <option>Safari Booking</option>
                    <option>Custom Itinerary</option>
                    <option>Group Booking</option>
                    <option>Partnership Inquiry</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-surface-container-high rounded-md px-4 py-3 text-on-surface focus:ring-2 focus:ring-surface-tint border-none resize-none placeholder:text-on-surface-variant/40"
                    placeholder="Tell us about your dream safari..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-md font-bold text-lg hover:bg-primary-container transition-all active:scale-95 w-full md:w-auto"
                >
                  <Send size={18} />
                  Send via WhatsApp
                </button>
                <p className="text-xs text-on-surface-variant mt-3">
                  Your message will be sent via WhatsApp for the fastest
                  response.
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
