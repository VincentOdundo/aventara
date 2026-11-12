import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

import serengetiSunsetImg from "../assets/nairobi/sunset-exotic.jpeg";

export default function SecureSpot() {
  return (
    <Layout>
      <div className="bg-sand-cream text-midnight-black min-h-screen">
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-12">
              <section>
                <span className="text-xs font-body font-bold uppercase tracking-[0.2em] text-sunset-orange mb-3 block">
                  Final Step
                </span>
                <h1 className="text-4xl md:text-5xl font-headline font-bold text-safari-brown mb-4 tracking-tight">
                  Guest Information
                </h1>
                <p className="text-safari-brown/80 font-body text-lg max-w-xl">
                  Please ensure traveler details match your official passport to
                  ensure seamless entry into the Serengeti and Maasai Mara
                  reserves.
                </p>
              </section>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-10"
              >
                <div className="p-8 rounded-2xl bg-sand-cream border border-savannah-gold/30 shadow-md">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black flex items-center justify-center shadow-sm">
                      <span
                        className="material-symbols-outlined material-fill"
                        data-icon="person"
                      >
                        person
                      </span>
                    </div>
                    <h3 className="text-xl font-headline font-bold text-safari-brown">
                      Lead Explorer
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-body">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold tracking-wide uppercase text-safari-brown/80">
                        First Name
                      </label>
                      <input
                        className="bg-sand-cream text-midnight-black placeholder:text-safari-brown/45 border border-savannah-gold/40 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-savannah-gold"
                        placeholder="e.g. Julian"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold tracking-wide uppercase text-safari-brown/80">
                        Last Name
                      </label>
                      <input
                        className="bg-sand-cream text-midnight-black placeholder:text-safari-brown/45 border border-savannah-gold/40 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-savannah-gold"
                        placeholder="e.g. Thorne"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                      <label className="text-xs font-bold tracking-wide uppercase text-safari-brown/80">
                        Email Address
                      </label>
                      <input
                        className="bg-sand-cream text-midnight-black placeholder:text-safari-brown/45 border border-savannah-gold/40 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-savannah-gold"
                        placeholder="julian.thorne@example.com"
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold tracking-wide uppercase text-safari-brown/80">
                        Passport Number
                      </label>
                      <input
                        className="bg-sand-cream text-midnight-black placeholder:text-safari-brown/45 border border-savannah-gold/40 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-savannah-gold"
                        placeholder="XXXX-XXXX"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-bold tracking-wide uppercase text-safari-brown/80">
                        Nationality
                      </label>
                      <select className="bg-sand-cream text-midnight-black border border-savannah-gold/40 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-savannah-gold">
                        <option>United Kingdom</option>
                        <option>United States</option>
                        <option>Kenya</option>
                        <option>Germany</option>
                        <option>France</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-headline font-bold text-safari-brown">
                    Expedition Preferences
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-body">
                    <button
                      className="p-5 rounded-2xl border-2 border-savannah-gold bg-sand-cream text-safari-brown text-left transition-all shadow-sm"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined material-fill block mb-2 text-sunset-orange"
                        data-icon="restaurant"
                      >
                        restaurant
                      </span>
                      <span className="font-headline font-bold text-sm block">
                        Fine Dining
                      </span>
                      <p className="text-xs text-safari-brown/75 mt-1">
                        Gourmet bush meals
                      </p>
                    </button>
                    <button
                      className="p-5 rounded-2xl border border-savannah-gold/30 bg-sand-cream hover:border-savannah-gold text-safari-brown transition-all text-left"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined material-fill block mb-2 text-sunset-orange"
                        data-icon="spa"
                      >
                        spa
                      </span>
                      <span className="font-headline font-bold text-sm block">
                        Wellness Focus
                      </span>
                      <p className="text-xs text-safari-brown/75 mt-1">
                        Morning yoga &amp; spa
                      </p>
                    </button>
                    <button
                      className="p-5 rounded-2xl border border-savannah-gold/30 bg-sand-cream hover:border-savannah-gold text-safari-brown transition-all text-left"
                      type="button"
                    >
                      <span
                        className="material-symbols-outlined material-fill block mb-2 text-sunset-orange"
                        data-icon="camera"
                      >
                        camera
                      </span>
                      <span className="font-headline font-bold text-sm block">
                        Photography
                      </span>
                      <p className="text-xs text-safari-brown/75 mt-1">
                        Professional gear rentals
                      </p>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
                  <Link
                    to="/safaris/enhance"
                    className="w-full sm:w-auto px-6 py-3.5 border-2 border-savannah-gold text-safari-brown rounded-full font-body font-bold flex items-center justify-center gap-2 hover:bg-savannah-gold/15 transition-all"
                  >
                    <span
                      className="material-symbols-outlined material-fill text-lg"
                      data-icon="arrow_back"
                    >
                      arrow_back
                    </span>
                    <span>Back to Enhancements</span>
                  </Link>
                  <button
                    className="w-full sm:w-auto px-10 py-4 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black rounded-full font-body font-bold text-base hover:brightness-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                    type="submit"
                  >
                    <span>Proceed to Payment</span>
                    <span>→</span>
                  </button>
                </div>
              </form>
            </div>

            <aside className="lg:col-span-5 lg:sticky lg:top-[80px]">
              <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden shadow-md">
                <div className="relative h-48 w-full">
                  <img
                    alt="Serengeti Sunset"
                    className="w-full h-full object-cover"
                    src={serengetiSunsetImg}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-4 py-1.5 rounded-full text-xs font-body font-bold tracking-widest uppercase shadow-md">
                    14 Day Expedition
                  </div>
                </div>
                <div className="p-8 space-y-8 font-body">
                  <div>
                    <h2 className="text-3xl font-headline font-bold text-safari-brown mb-2">
                      The Serengeti Majesty
                    </h2>
                    <p className="text-safari-brown/75 italic">
                      From Amboseli to the Ngorongoro Crater
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-savannah-gold/25">
                      <span className="text-safari-brown/80">Departure</span>
                      <span className="font-bold text-safari-brown">
                        Oct 14, 2025
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-savannah-gold/25">
                      <span className="text-safari-brown/80">Explorers</span>
                      <span className="font-bold text-safari-brown">
                        2 Adults
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-savannah-gold/25">
                      <span className="text-safari-brown/80">
                        Accommodation
                      </span>
                      <span className="font-bold text-safari-brown">
                        Luxury Tented Suite
                      </span>
                    </div>
                  </div>
                  <div className="bg-sand-cream border border-savannah-gold/40 p-6 rounded-2xl space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-safari-brown/80">Base Rate</span>
                      <span className="font-medium text-safari-brown">
                        $12,400.00
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-safari-brown/80">
                        Conservation Fees
                      </span>
                      <span className="font-medium text-safari-brown">
                        $850.00
                      </span>
                    </div>
                    <div className="pt-4 border-t border-savannah-gold/30 flex justify-between items-end">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-safari-brown/70">
                          Total Investment
                        </span>
                        <div className="text-3xl font-headline font-bold text-sunset-orange">
                          $13,250.00
                        </div>
                      </div>
                      <span className="text-xs font-bold text-safari-brown/70 mb-1">
                        USD
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sunset-orange">
                    <span
                      className="material-symbols-outlined material-fill"
                      data-icon="verified_user"
                    >
                      verified_user
                    </span>
                    <span
                      className="material-symbols-outlined material-fill"
                      data-icon="credit_card"
                    >
                      credit_card
                    </span>
                    <span
                      className="material-symbols-outlined material-fill"
                      data-icon="eco"
                    >
                      eco
                    </span>
                    <span
                      className="material-symbols-outlined material-fill"
                      data-icon="support_agent"
                    >
                      support_agent
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-midnight-black via-safari-brown to-safari-brown text-sand-cream border border-savannah-gold/30 rounded-2xl flex items-center gap-4 shadow-lg font-body">
                <div className="p-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black rounded-full shadow-sm">
                  <span
                    className="material-symbols-outlined material-fill"
                    data-icon="headset_mic"
                  >
                    headset_mic
                  </span>
                </div>
                <div>
                  <div className="font-headline font-bold text-sunrise-yellow">
                    Need assistance?
                  </div>
                  <p className="text-sm text-sand-cream/85">
                    Reach our expedition coordinators 24/7 at{" "}
                    <a
                      href="mailto:cimabravaadventures@gmail.com"
                      className="text-sunrise-yellow underline hover:brightness-110"
                    >
                      cimabravaadventures@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </Layout>
  );
}
