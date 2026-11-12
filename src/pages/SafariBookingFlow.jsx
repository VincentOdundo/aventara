import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

import heroImg from "../assets/nairobi/sunset-exotic.jpeg";
import migrationImg from "../assets/wildbeasts.jpg";
import lionImg from "../assets/lioness.jpeg";
import elephantImg from "../assets/elephant.jpeg";
import cheetahImg from "../assets/treecheta.jpeg";

export default function SafariBookingFlow() {
  return (
    <Layout>
      <div className="bg-sand-cream text-midnight-black min-h-screen">
        {/* Hero Banner */}
        <section className="relative h-72 md:h-80 flex items-center overflow-hidden bg-midnight-black pt-16">
          <img
            src={heroImg}
            alt="East African Savanna at Sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-transparent"></div>
          <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sunrise-yellow font-body font-bold uppercase tracking-[0.2em] text-xs mb-3 block drop-shadow-sm">
                Curated Journeys
              </span>
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-sand-cream tracking-tight leading-tight drop-shadow-md">
                Discover the{" "}
                <span className="italic font-normal text-sunrise-yellow">
                  Wild
                </span>
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sand-cream font-body text-sm bg-safari-brown/80 border border-savannah-gold/40 px-4 py-2 rounded-full">
              <span className="font-bold text-sunrise-yellow">24</span>{" "}
              Expeditions found in East Africa
            </div>
          </div>
        </section>

        <main className="py-16 px-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <aside className="w-full lg:w-72 flex-shrink-0">
              <div className="sticky top-[80px] space-y-8">
                <div className="bg-sand-cream border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-headline text-xl font-bold mb-6 text-safari-brown">
                    Refine Expedition
                  </h3>

                  <div className="mb-8">
                    <label className="block font-body text-xs font-bold uppercase tracking-widest text-sunset-orange mb-4">
                      Destination
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center group cursor-pointer">
                        <input
                          defaultChecked
                          className="rounded border-savannah-gold text-savannah-gold focus:ring-savannah-gold accent-savannah-gold h-4 w-4"
                          type="checkbox"
                        />
                        <span className="ml-3 font-body text-sm text-midnight-black group-hover:text-sunset-orange transition-colors">
                          Kenya
                        </span>
                      </label>
                      <label className="flex items-center group cursor-pointer">
                        <input
                          className="rounded border-savannah-gold text-savannah-gold focus:ring-savannah-gold accent-savannah-gold h-4 w-4"
                          type="checkbox"
                        />
                        <span className="ml-3 font-body text-sm text-midnight-black group-hover:text-sunset-orange transition-colors">
                          Tanzania
                        </span>
                      </label>
                      <label className="flex items-center group cursor-pointer">
                        <input
                          className="rounded border-savannah-gold text-savannah-gold focus:ring-savannah-gold accent-savannah-gold h-4 w-4"
                          type="checkbox"
                        />
                        <span className="ml-3 font-body text-sm text-midnight-black group-hover:text-sunset-orange transition-colors">
                          Rwanda
                        </span>
                      </label>
                      <label className="flex items-center group cursor-pointer">
                        <input
                          className="rounded border-savannah-gold text-savannah-gold focus:ring-savannah-gold accent-savannah-gold h-4 w-4"
                          type="checkbox"
                        />
                        <span className="ml-3 font-body text-sm text-midnight-black group-hover:text-sunset-orange transition-colors">
                          Uganda
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block font-body text-xs font-bold uppercase tracking-widest text-sunset-orange mb-4">
                      Duration
                    </label>
                    <select className="w-full bg-sand-cream text-midnight-black border border-savannah-gold/40 rounded-full font-body text-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-savannah-gold">
                      <option>All Durations</option>
                      <option>1-4 Days (Quick Trips)</option>
                      <option>5-10 Days (Classic)</option>
                      <option>11+ Days (Grand Safaris)</option>
                    </select>
                  </div>

                  <div className="mb-8">
                    <label className="block font-body text-xs font-bold uppercase tracking-widest text-sunset-orange mb-4">
                      Price Range (USD)
                    </label>
                    <div className="mt-4 px-2">
                      <input
                        className="w-full h-1.5 bg-savannah-gold/30 rounded-lg appearance-none cursor-pointer accent-savannah-gold"
                        type="range"
                      />
                      <div className="flex justify-between mt-4 font-body text-sm text-safari-brown/80 font-medium">
                        <span>$1,200</span>
                        <span>$15,000+</span>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full py-3.5 px-6 text-xs font-body font-bold uppercase tracking-widest border-2 border-savannah-gold text-safari-brown rounded-full hover:bg-savannah-gold/15 transition-all duration-300"
                  >
                    Clear All Filters
                  </button>
                </div>

                <div className="bg-gradient-to-r from-midnight-black via-safari-brown to-safari-brown rounded-2xl p-6 text-sand-cream border border-savannah-gold/30 relative overflow-hidden shadow-lg">
                  <div className="relative z-10">
                    <h4 className="font-headline text-lg font-bold text-sunrise-yellow mb-2">
                      Need a Private Guide?
                    </h4>
                    <p className="font-body text-xs text-sand-cream/85 leading-relaxed mb-4">
                      Tailor your expedition with our expert conservationists at{" "}
                      <span className="text-sunrise-yellow">
                        cimabravaadventures@gmail.com
                      </span>
                      .
                    </p>
                    <Link
                      className="inline-flex items-center gap-1.5 text-xs font-body font-bold bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-4 py-2 rounded-full shadow-md hover:brightness-105 transition-all"
                      to="/inquire"
                    >
                      <span>Plan Your Adventure</span>
                      <span>→</span>
                    </Link>
                  </div>
                  <div className="absolute -bottom-4 -right-4 opacity-10 text-sunrise-yellow">
                    <span
                      className="material-symbols-outlined material-fill text-8xl"
                      data-icon="explore"
                    >
                      explore
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="group flex flex-col bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt="Great Migration wildebeest across the savanna"
                      src={migrationImg}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-crane-red px-3 py-1 text-xs font-body font-bold uppercase tracking-tighter text-sand-cream rounded-full shadow-sm">
                        Top Rated
                      </span>
                      <span className="bg-gradient-to-b from-sunrise-yellow to-savannah-gold px-3 py-1 text-xs font-body font-bold uppercase tracking-tighter text-midnight-black rounded-full shadow-sm">
                        14 Days
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center gap-1 text-savannah-gold mb-2">
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="text-xs font-body font-bold text-safari-brown/70 ml-2">
                          (48 Reviews)
                        </span>
                      </div>
                      <h3 className="text-2xl font-headline font-bold text-safari-brown group-hover:text-sunset-orange transition-colors">
                        14-Day Kenya &amp; Tanzania Safari
                      </h3>
                      <p className="text-safari-brown/80 font-body text-sm mt-3 line-clamp-2">
                        A comprehensive journey through the Great Migration
                        corridor, from Amboseli's elephants to the Ngorongoro
                        Crater.
                      </p>
                    </div>
                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 py-4 border-t border-savannah-gold/25">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined material-fill text-sunset-orange text-lg">
                            bed
                          </span>
                          <span className="text-xs font-body font-medium text-safari-brown">
                            Luxury Lodges
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined material-fill text-sunset-orange text-lg">
                            group
                          </span>
                          <span className="text-xs font-body font-medium text-safari-brown">
                            Max 6 People
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-body uppercase font-bold text-safari-brown/70 tracking-wider block">
                            From
                          </span>
                          <span className="text-xl font-headline font-bold text-safari-brown">
                            $8,450{" "}
                            <span className="text-xs font-body font-normal text-safari-brown/70">
                              pp
                            </span>
                          </span>
                        </div>
                        <Link
                          to="/safaris/enhance"
                          className="px-6 py-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black rounded-full font-body text-xs font-bold uppercase tracking-widest shadow-md hover:brightness-105 transition-all flex items-center gap-1.5"
                        >
                          <span>Select Safari</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group flex flex-col bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt="Close up of a majestic lioness in the Mara"
                      src={lionImg}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-sunset-orange px-3 py-1 text-xs font-body font-bold uppercase tracking-tighter text-sand-cream rounded-full shadow-sm">
                        New Arrival
                      </span>
                      <span className="bg-gradient-to-b from-sunrise-yellow to-savannah-gold px-3 py-1 text-xs font-body font-bold uppercase tracking-tighter text-midnight-black rounded-full shadow-sm">
                        3 Days
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center gap-1 text-savannah-gold mb-2">
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm text-safari-brown/30">
                          star
                        </span>
                        <span className="text-xs font-body font-bold text-safari-brown/70 ml-2">
                          (12 Reviews)
                        </span>
                      </div>
                      <h3 className="text-2xl font-headline font-bold text-safari-brown group-hover:text-sunset-orange transition-colors">
                        3-Day Masai Mara Quick Trip
                      </h3>
                      <p className="text-safari-brown/80 font-body text-sm mt-3 line-clamp-2">
                        Perfect for travelers short on time. Experience the
                        legendary Masai Mara including sunrise balloon flight.
                      </p>
                    </div>
                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 py-4 border-t border-savannah-gold/25">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined material-fill text-sunset-orange text-lg">
                            helicopter
                          </span>
                          <span className="text-xs font-body font-medium text-safari-brown">
                            Air Transfer
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined material-fill text-sunset-orange text-lg">
                            camera
                          </span>
                          <span className="text-xs font-body font-medium text-safari-brown">
                            Photo Pro Guide
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-body uppercase font-bold text-safari-brown/70 tracking-wider block">
                            From
                          </span>
                          <span className="text-xl font-headline font-bold text-safari-brown">
                            $2,800{" "}
                            <span className="text-xs font-body font-normal text-safari-brown/70">
                              pp
                            </span>
                          </span>
                        </div>
                        <Link
                          to="/safaris/enhance"
                          className="px-6 py-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black rounded-full font-body text-xs font-bold uppercase tracking-widest shadow-md hover:brightness-105 transition-all flex items-center gap-1.5"
                        >
                          <span>Select Safari</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group flex flex-col bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt="Herd of elephants crossing the savanna"
                      src={elephantImg}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-safari-brown/90 border border-savannah-gold/40 px-3 py-1 text-xs font-body font-bold uppercase tracking-tighter text-sand-cream rounded-full">
                        Classic
                      </span>
                      <span className="bg-gradient-to-b from-sunrise-yellow to-savannah-gold px-3 py-1 text-xs font-body font-bold uppercase tracking-tighter text-midnight-black rounded-full shadow-sm">
                        8 Days
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center gap-1 text-savannah-gold mb-2">
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="text-xs font-body font-bold text-safari-brown/70 ml-2">
                          (156 Reviews)
                        </span>
                      </div>
                      <h3 className="text-2xl font-headline font-bold text-safari-brown group-hover:text-sunset-orange transition-colors">
                        The Serengeti Spirit Expedition
                      </h3>
                      <p className="text-safari-brown/80 font-body text-sm mt-3 line-clamp-2">
                        Immerse yourself in the heart of Tanzania's wild plains.
                        Featuring private mobile camps that follow the herds.
                      </p>
                    </div>
                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 py-4 border-t border-savannah-gold/25">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined material-fill text-sunset-orange text-lg">
                            camping
                          </span>
                          <span className="text-xs font-body font-medium text-safari-brown">
                            Eco Tented Camp
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined material-fill text-sunset-orange text-lg">
                            restaurant
                          </span>
                          <span className="text-xs font-body font-medium text-safari-brown">
                            Full Board
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-body uppercase font-bold text-safari-brown/70 tracking-wider block">
                            From
                          </span>
                          <span className="text-xl font-headline font-bold text-safari-brown">
                            $4,900{" "}
                            <span className="text-xs font-body font-normal text-safari-brown/70">
                              pp
                            </span>
                          </span>
                        </div>
                        <Link
                          to="/safaris/enhance"
                          className="px-6 py-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black rounded-full font-body text-xs font-bold uppercase tracking-widest shadow-md hover:brightness-105 transition-all flex items-center gap-1.5"
                        >
                          <span>Select Safari</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group flex flex-col bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt="Cheetah overlooking the savanna"
                      src={cheetahImg}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-safari-brown/90 border border-savannah-gold/40 px-3 py-1 text-xs font-body font-bold uppercase tracking-tighter text-sunrise-yellow rounded-full">
                        Ultimate Luxury
                      </span>
                      <span className="bg-gradient-to-b from-sunrise-yellow to-savannah-gold px-3 py-1 text-xs font-body font-bold uppercase tracking-tighter text-midnight-black rounded-full shadow-sm">
                        10 Days
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center gap-1 text-savannah-gold mb-2">
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="material-symbols-outlined material-fill text-sm">
                          star
                        </span>
                        <span className="text-xs font-body font-bold text-safari-brown/70 ml-2">
                          (32 Reviews)
                        </span>
                      </div>
                      <h3 className="text-2xl font-headline font-bold text-safari-brown group-hover:text-sunset-orange transition-colors">
                        Private Samburu &amp; Lewa Retreat
                      </h3>
                      <p className="text-safari-brown/80 font-body text-sm mt-3 line-clamp-2">
                        Exclusive access to private conservancies. Search for
                        the 'Samburu Special Five' in complete seclusion.
                      </p>
                    </div>
                    <div className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-x-4 gap-y-2 py-4 border-t border-savannah-gold/25">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined material-fill text-sunset-orange text-lg">
                            shield
                          </span>
                          <span className="text-xs font-body font-medium text-safari-brown">
                            Private Conservancy
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined material-fill text-sunset-orange text-lg">
                            wine_bar
                          </span>
                          <span className="text-xs font-body font-medium text-safari-brown">
                            All Inclusive
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-body uppercase font-bold text-safari-brown/70 tracking-wider block">
                            From
                          </span>
                          <span className="text-xl font-headline font-bold text-safari-brown">
                            $12,200{" "}
                            <span className="text-xs font-body font-normal text-safari-brown/70">
                              pp
                            </span>
                          </span>
                        </div>
                        <Link
                          to="/safaris/enhance"
                          className="px-6 py-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black rounded-full font-body text-xs font-bold uppercase tracking-widest shadow-md hover:brightness-105 transition-all flex items-center gap-1.5"
                        >
                          <span>Select Safari</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 flex justify-center items-center gap-4">
                <button
                  type="button"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-sand-cream border border-savannah-gold/40 text-safari-brown hover:bg-savannah-gold/20 transition-colors"
                >
                  <span className="material-symbols-outlined material-fill">
                    chevron_left
                  </span>
                </button>
                <span className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold text-sm shadow-md">
                  1
                </span>
                <button
                  type="button"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-sand-cream border border-savannah-gold/40 text-safari-brown font-body font-bold text-sm hover:bg-savannah-gold/20 transition-colors"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-sand-cream border border-savannah-gold/40 text-safari-brown font-body font-bold text-sm hover:bg-savannah-gold/20 transition-colors"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-sand-cream border border-savannah-gold/40 text-safari-brown hover:bg-savannah-gold/20 transition-colors"
                >
                  <span className="material-symbols-outlined material-fill">
                    chevron_right
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
