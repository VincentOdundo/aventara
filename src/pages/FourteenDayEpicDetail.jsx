import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Section, ItineraryDay, IncludedItem } from "../components/ui";

import cheetahSafari from "../assets/elephtain.jpeg";
import cheetahPlain from "../assets/elephant.jpeg";
import elephantGrass from "../assets/treecheta.jpeg";
import elephantTusks from "../assets/mountain.jpeg";
import flamingoWater from "../assets/flamingo-water.jpeg";
import flamingoSolo from "../assets/flamingo.jpeg";
import lionMale from "../assets/nairobi/girafe-nairobi-city.jpeg";
import lionessPortrait from "../assets/plain_elefabt.jpeg";
import lionessRoar from "../assets/wildbeasts.jpg";
import kilimanjaro from "../assets/elefpalin.jpeg";
import rhinoPair from "../assets/lioness_open.jpeg";
import rhinoClose from "../assets/lion-lonely.jpeg";
import leopardTree from "../assets/nairobi/girfe-sunset.jpeg";
import egretWater from "../assets/elefant-vegetation.jpeg";

export default function FourteenDayEpicDetail() {
  return (
    <Layout>
      <main className="bg-sand-cream text-midnight-black">
        {/* HERO SECTION */}
        <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center bg-midnight-black">
          <img
            className="absolute inset-0 w-full h-full object-cover scale-105 z-0"
            alt="Stunning sunset over the Masai Mara plains"
            src={lionMale}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/70 via-transparent to-midnight-black/25 z-10"></div>
          <div className="relative z-20 px-8 max-w-7xl mx-auto w-full pt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <span className="inline-block px-4 py-1.5 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black text-xs font-body font-bold tracking-widest uppercase mb-4 rounded-full shadow-md">
                  Featured Expedition
                </span>
                <h1 className="text-5xl md:text-7xl font-headline font-bold text-sand-cream tracking-tight leading-tight mb-6 drop-shadow-md">
                  The Great Migration:
                  <br />
                  <span className="text-sunrise-yellow">
                    Kenya &amp; Tanzania
                  </span>
                </h1>
                <div className="flex flex-wrap gap-8 items-center text-sand-cream/95 font-body font-medium drop-shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined material-fill text-savannah-gold">
                      schedule
                    </span>
                    <span>14 Days / 13 Nights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined material-fill text-savannah-gold">
                      map
                    </span>
                    <span>Nairobi to Arusha</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined material-fill text-savannah-gold">
                      group
                    </span>
                    <span>Private or Small Group</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative py-20 bg-sand-cream">
          <div className="lg:col-span-8">
            <div className="mb-20">
              <h2 className="text-3xl font-headline font-bold text-safari-brown mb-8 tracking-tight">
                An Untamed Odyssey
              </h2>
              <p className="text-lg font-body text-safari-brown/85 leading-relaxed mb-6">
                Traverse the legendary landscapes of East Africa in this curated
                14-day expedition. From the rolling golden hills of the Masai
                Mara to the infinite horizons of the Serengeti, witness the
                world's most dramatic wildlife spectacle in unparalleled luxury.
              </p>
              <p className="text-lg font-body text-safari-brown/85 leading-relaxed">
                Our expert guides bring you closer to the Big Five than ever
                before, utilizing private conservancies and exclusive access
                routes that bypass the tourist crowds. This is more than a
                safari; it is an immersion into the rhythm of the wild.
              </p>
            </div>

            <div className="mb-24">
              <h3 className="text-sm font-body font-bold tracking-[0.2em] uppercase text-sunset-orange mb-8">
                Iconic Destinations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-96 group overflow-hidden rounded-2xl col-span-1 border border-savannah-gold/25">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Masai Mara"
                    src={lionessRoar}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-sand-cream">
                    <h4 className="text-xl font-headline font-bold mb-1 text-sunrise-yellow">
                      Masai Mara
                    </h4>
                    <p className="text-sm font-body opacity-90">
                      Kenya's premier wildlife sanctuary
                    </p>
                  </div>
                </div>
                <div className="relative h-96 group overflow-hidden rounded-2xl col-span-1 border border-savannah-gold/25">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Serengeti"
                    src={lionessPortrait}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-sand-cream">
                    <h4 className="text-xl font-headline font-bold mb-1 text-sunrise-yellow">
                      Serengeti
                    </h4>
                    <p className="text-sm font-body opacity-90">
                      A boundless ecosystem of life
                    </p>
                  </div>
                </div>
                <div className="relative h-80 group overflow-hidden rounded-2xl md:col-span-2 border border-savannah-gold/25">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Ngorongoro Crater"
                    src={kilimanjaro}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-sand-cream">
                    <h4 className="text-xl font-headline font-bold mb-1 text-sunrise-yellow">
                      Ngorongoro Crater
                    </h4>
                    <p className="text-sm font-body opacity-90">
                      The world's largest volcanic caldera
                    </p>
                  </div>
                </div>
                <div className="relative h-72 group overflow-hidden rounded-2xl col-span-1 border border-savannah-gold/25">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Amboseli & Kilimanjaro"
                    src={elephantTusks}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-sand-cream">
                    <h4 className="text-xl font-headline font-bold mb-1 text-sunrise-yellow">
                      Amboseli Plains
                    </h4>
                    <p className="text-sm font-body opacity-90">
                      Iconic elephant herds beneath Kilimanjaro
                    </p>
                  </div>
                </div>
                <div className="relative h-72 group overflow-hidden rounded-2xl col-span-1 border border-savannah-gold/25">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Lake Nakuru Flamingos"
                    src={flamingoWater}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-sand-cream">
                    <h4 className="text-xl font-headline font-bold mb-1 text-sunrise-yellow">
                      Rift Valley Lakes
                    </h4>
                    <p className="text-sm font-body opacity-90">
                      Shimmering soda lakes &amp; flamingo flocks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-24">
              <h3 className="text-3xl font-headline font-bold text-safari-brown mb-10 tracking-tight">
                Expedition Log
              </h3>
              <div className="space-y-4">
                <ItineraryDay
                  dayNum="01"
                  title="Arrival & Nairobi Highlands"
                  subtitle="Giraffe Manor & David Sheldrick Wildlife Trust"
                  desc="Welcome to Nairobi. Begin your journey with an intimate encounter at Giraffe Manor, where these gentle giants may join you for morning tea. In the afternoon, visit the David Sheldrick elephant orphanage to support conservation efforts."
                  image={rhinoClose}
                  tags={["Stay: Hemingways Nairobi", "Activity: Private Tour"]}
                  defaultOpen={true}
                />
                <ItineraryDay
                  dayNum="03"
                  title="Into the Wild: Masai Mara"
                  subtitle="3 Nights in Private Conservancies"
                  desc="Fly directly into the heart of the Mara. Your stay at a boutique tented camp offers off-road game driving, walking safaris, and night drives-experiences forbidden in the main reserve."
                  image={leopardTree}
                  tags={["Stay: Angama Mara", "Activity: Hot Air Balloon"]}
                />
                <ItineraryDay
                  dayNum="06"
                  title="The Great Serengeti Migration"
                  subtitle="Across the Border to Tanzania"
                  desc="Witness the endless plains. We move following the migration herds. Expect dramatic river crossings or the quiet majesty of the calving season depending on the time of year."
                  image={cheetahSafari}
                  tags={["Stay: Sayari Camp", "Meals: All Inclusive"]}
                />
                <ItineraryDay
                  dayNum="09"
                  title="Predator Plains & Kopjes"
                  subtitle="Central & Southern Serengeti"
                  desc="Explore the granite kopjes of the Serengeti where cheetahs and leopards survey the golden grasslands, followed by sundowners in the bush."
                  image={elephantGrass}
                  tags={["Stay: Four Seasons Serengeti", "Activity: Sundowner"]}
                />
                <ItineraryDay
                  dayNum="11"
                  title="Crater Living & Lake Manyara"
                  subtitle="A World Within a World"
                  desc="Descend into the Ngorongoro Crater, a UNESCO World Heritage site home to nearly 30,000 animals. Conclude your safari with the tree-climbing lions and flamingos of Lake Manyara."
                  image={cheetahPlain}
                  tags={["Stay: Ngorongoro Crater Lodge"]}
                />
              </div>
            </div>

            <div className="mb-24">
              <h3 className="text-3xl font-headline font-bold text-safari-brown mb-10 tracking-tight">
                Luxury Retreats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4 bg-sand-cream p-5 rounded-2xl border border-savannah-gold/30 shadow-sm">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Luxury safari tent"
                      src={egretWater}
                    />
                  </div>
                  <h5 className="text-lg font-headline font-bold text-safari-brown">
                    The Cima Brava Standard
                  </h5>
                  <p className="text-sm font-body text-safari-brown/80 leading-relaxed">
                    Each lodge is hand-picked for its architectural integrity,
                    sustainable practices, and proximity to the finest game
                    viewing locations.
                  </p>
                </div>
                <div className="space-y-4 bg-sand-cream p-5 rounded-2xl border border-savannah-gold/30 shadow-sm">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Infinity pool"
                      src={rhinoPair}
                    />
                  </div>
                  <h5 className="text-lg font-headline font-bold text-safari-brown">
                    Unrivaled Comfort
                  </h5>
                  <p className="text-sm font-body text-safari-brown/80 leading-relaxed">
                    Enjoy private plunge pools, gourmet bush dining, and
                    personal butler service in the most remote corners of the
                    wilderness.
                  </p>
                </div>
                <div className="space-y-4 bg-sand-cream p-5 rounded-2xl border border-savannah-gold/30 shadow-sm">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Rift Valley Sanctuary"
                      src={flamingoSolo}
                    />
                  </div>
                  <h5 className="text-lg font-headline font-bold text-safari-brown">
                    Conservation First
                  </h5>
                  <p className="text-sm font-body text-safari-brown/80 leading-relaxed">
                    Every stay directly supports wildlife corridors, anti-poaching
                    rangers, and community-owned conservancies in Kenya and Tanzania.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-12 bg-sand-cream rounded-3xl border border-savannah-gold/40 shadow-sm">
              <h3 className="text-2xl font-headline font-bold text-safari-brown mb-8 tracking-tight">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <IncludedItem text="All internal regional flights (Light aircraft transfers)" />
                <IncludedItem text="Professional Silver/Gold rated private guides" />
                <IncludedItem text="Luxury accommodation on a full board basis" />
                <IncludedItem text="All National Park & Conservancy entrance fees" />
                <IncludedItem text="Unlimited private game drives in 4x4 Land Cruisers" />
                <IncludedItem text="Flying Doctors emergency medical evacuation insurance" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-[80px] space-y-6">
              <div className="bg-sand-cream p-8 rounded-3xl border border-savannah-gold/40 shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs font-body uppercase font-bold tracking-widest text-safari-brown/70 mb-1">
                      Pricing From
                    </p>
                    <h3 className="text-4xl font-headline font-bold text-safari-brown">
                      $12,450{" "}
                      <span className="text-sm font-body font-normal text-safari-brown/70">
                        /pp
                      </span>
                    </h3>
                  </div>
                  <div className="px-3 py-1 bg-crane-red text-sand-cream text-xs font-body font-bold rounded-full shadow-sm">
                    BEST VALUE
                  </div>
                </div>
                <hr className="border-savannah-gold/25 mb-6" />
                <div className="space-y-4 mb-8">
                  <label className="block">
                    <span className="text-xs font-body uppercase font-bold tracking-wider text-safari-brown mb-2 block">
                      Select Departure Month
                    </span>
                    <select className="w-full bg-sand-cream text-midnight-black border border-savannah-gold/40 rounded-full text-sm font-body focus:outline-none focus:ring-2 focus:ring-savannah-gold py-3 px-4">
                      <option>July (Peak Season)</option>
                      <option>August (Peak Season)</option>
                      <option>September</option>
                      <option>October</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-body uppercase font-bold tracking-wider text-safari-brown mb-2 block">
                      Number of Guests
                    </span>
                    <div className="flex items-center bg-sand-cream border border-savannah-gold/40 rounded-full p-1">
                      <button
                        type="button"
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-midnight-black via-safari-brown to-safari-brown text-sand-cream flex items-center justify-center hover:brightness-110 transition-all"
                      >
                        <span className="material-symbols-outlined material-fill text-base">
                          remove
                        </span>
                      </button>
                      <span className="flex-1 text-center font-body font-bold text-sm text-safari-brown">
                        2 Guests
                      </span>
                      <button
                        type="button"
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-midnight-black via-safari-brown to-safari-brown text-sand-cream flex items-center justify-center hover:brightness-110 transition-all"
                      >
                        <span className="material-symbols-outlined material-fill text-base">
                          add
                        </span>
                      </button>
                    </div>
                  </label>
                </div>
                <Link
                  to="/safaris/enhance"
                  className="w-full py-4 px-6 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold rounded-full shadow-md hover:brightness-105 transition-all tracking-wide mb-4 flex items-center justify-center gap-2"
                >
                  <span>Book This Expedition</span>
                  <span>→</span>
                </Link>
                <Link
                  to="/inquire"
                  className="w-full py-4 px-6 border-2 border-savannah-gold text-safari-brown hover:bg-savannah-gold/15 font-body font-bold rounded-full transition-all tracking-wide flex items-center justify-center"
                >
                  Plan Your Adventure
                </Link>
                <p className="text-xs font-body text-center text-safari-brown/70 mt-6 leading-relaxed">
                  Price includes all local taxes and conservation fees. <br />A
                  25% deposit is required to secure your safari.
                </p>
              </div>

              <div className="bg-gradient-to-r from-midnight-black via-safari-brown to-safari-brown text-sand-cream p-8 rounded-3xl relative overflow-hidden border border-savannah-gold/30 shadow-xl">
                <div className="relative z-10">
                  <h4 className="font-headline font-bold text-xl text-sunrise-yellow mb-3">
                    Expert Planning
                  </h4>
                  <p className="text-sm font-body text-sand-cream/85 leading-relaxed mb-6">
                    Talk to a Cima Brava Safari Specialist to tailor this
                    itinerary to your specific interests.
                  </p>
                  <div className="space-y-4 font-body">
                    <a
                      href="mailto:cimabravaadventures@gmail.com"
                      className="flex items-center gap-3 hover:text-sunrise-yellow transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-savannah-gold/20 border border-savannah-gold/40 flex items-center justify-center text-sunrise-yellow">
                        <span className="material-symbols-outlined material-fill text-lg">
                          mail
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-sunrise-yellow/80 uppercase tracking-wider">
                          Direct Email
                        </p>
                        <p className="font-bold text-sm">
                          cimabravaadventures@gmail.com
                        </p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3 pt-2">
                      <a
                        href="https://www.instagram.com/cima_brava_adventures?mdxt=MWQ1OHpkOWQ1bHZoaQ%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 rounded-full border border-savannah-gold/50 text-xs font-bold text-sand-cream hover:bg-savannah-gold hover:text-midnight-black transition-all"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.tiktok.com/@cima_brava_adventures"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 rounded-full border border-savannah-gold/50 text-xs font-bold text-sand-cream hover:bg-savannah-gold hover:text-midnight-black transition-all"
                      >
                        TikTok
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 opacity-10 text-sunrise-yellow">
                  <span className="material-symbols-outlined material-fill text-9xl">
                    landscape
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <section className="bg-sand-cream border-t border-savannah-gold/25">
          <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col items-center text-center">
            <span className="text-xs font-body font-bold tracking-[0.3em] uppercase text-sunset-orange mb-4">
              The Explorer Journal
            </span>
            <h3 className="text-3xl md:text-5xl font-headline font-bold text-safari-brown mb-8 max-w-2xl">
              Receive curated stories from the Savanna.
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full max-w-lg flex flex-col sm:flex-row gap-3"
            >
              <input
                className="flex-1 bg-sand-cream text-midnight-black placeholder:text-safari-brown/50 border border-savannah-gold/40 rounded-full focus:outline-none focus:ring-2 focus:ring-savannah-gold px-6 py-4 font-body text-sm"
                placeholder="Email address"
                type="email"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold rounded-full shadow-md hover:brightness-105 transition-all"
              >
                Join →
              </button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
