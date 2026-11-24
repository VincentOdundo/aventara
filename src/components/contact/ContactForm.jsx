"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { TRIPADVISOR_REVIEW_URL } from "../../data/company";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = formData.get("subject");

    const waText = `🌍 *Cima Brava Adventures Contact Form*\n\n👤 Name: ${name}\n📧 Email: ${email}\n📋 Subject: ${subject}\n\n💬 Message:\n${message}\n\n- Sent to cimabravaadventures@gmail.com`;
    const waUrl = `https://wa.me/254112346049?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-sand-cream border border-savannah-gold/30 rounded-2xl shadow-xl p-8 md:p-10"
    >
      <h2 className="text-2xl font-headline font-bold text-safari-brown mb-8">
        Send Us a Safari Inquiry
      </h2>

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
          <option>Safari Booking</option>
          <option>Custom Itinerary (Tsavo / Ol Pejeta / Private)</option>
          <option>Kenya &amp; Tanzania Cross-Border Quote</option>
          <option>Nairobi Half-Day Layover Tour</option>
          <option>Group or Family Booking</option>
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
          placeholder="Share your travel dates, number of travellers, shared or private 4x4 preference, and parks you want to visit..."
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
        Prefer email? Write directly to{" "}
        <a
          href="mailto:cimabravaadventures@gmail.com"
          className="text-sunset-orange font-semibold underline"
        >
          cimabravaadventures@gmail.com
        </a>
        .
      </p>
      {submitted && (
        <div className="mt-5 rounded-xl border border-savannah-gold/40 bg-savannah-gold/10 p-4 text-xs text-safari-brown leading-relaxed">
          <p className="font-bold text-midnight-black mb-1">
            WhatsApp inquiry ready — thank you!
          </p>
          <p>
            If WhatsApp did not open in a new tab, email your dates directly to{" "}
            <a
              href="mailto:cimabravaadventures@gmail.com"
              className="text-sunset-orange font-semibold underline"
            >
              cimabravaadventures@gmail.com
            </a>{" "}
            for a confirmed USD quote within 24 hours. Already travelled with us?{" "}
            <a
              href={TRIPADVISOR_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sunset-orange font-semibold underline"
            >
              Review us on TripAdvisor
            </a>
            .
          </p>
        </div>
      )}
    </form>
  );
}
