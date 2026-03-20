import React from "react";
import Layout from "../components/layout/Layout";
import { Button, Section, ItineraryDay, IncludedItem } from "../components/ui";

export default function FourteenDayEpicDetail() {
  return (
    <Layout>
      <main className="pt-24">
        {/* HERO SECTION */}
        <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/90 z-10"></div>
          <img
            className="absolute inset-0 w-full h-full object-cover scale-105 z-0"
            alt="Stunning sunset over the Masai Mara plains"
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2068&ixlib=rb-4.0.3"
          />
          <div className="relative z-20 px-8 max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-3xl">
                <span className="inline-block px-3 py-1 bg-tertiary-container/10 text-on-tertiary-container text-xs font-bold tracking-widest uppercase mb-4 rounded-full backdrop-blur-md">
                  Featured Expedition
                </span>
                <h1 className="text-5xl md:text-7xl font-headline font-bold text-primary tracking-tight leading-tight mb-6">
                  The Great Migration:
                  <br />
                  Kenya &amp; Tanzania
                </h1>
                <div className="flex flex-wrap gap-8 items-center text-on-surface-variant font-medium">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined material-fill">
                      schedule
                    </span>
                    <span>14 Days / 13 Nights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined material-fill">
                      map
                    </span>
                    <span>Nairobi to Arusha</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined material-fill">
                      group
                    </span>
                    <span>Private or Small Group</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative py-20">
          <div className="lg:col-span-8">
            <div className="mb-20">
              <h2 className="text-3xl font-headline font-bold text-primary mb-8 tracking-tight">
                An Untamed Odyssey
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6 font-light">
                Traverse the legendary landscapes of East Africa in this curated
                14-day expedition. From the rolling golden hills of the Masai
                Mara to the infinite horizons of the Serengeti, witness the
                world's most dramatic wildlife spectacle in unparalleled luxury.
              </p>
              <p className="text-lg text-on-surface-variant leading-relaxed font-light">
                Our expert guides bring you closer to the Big Five than ever
                before, utilizing private conservancies and exclusive access
                routes that bypass the tourist crowds. This is more than a
                safari; it is an immersion into the rhythm of the wild.
              </p>
            </div>

            <div className="mb-24">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-on-surface-variant/60 mb-8">
                Iconic Destinations
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative h-96 group overflow-hidden rounded-xl col-span-1">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Masai Mara"
                    src="https://images.unsplash.com/photo-1547471080-7fc2caa6ec71?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-headline font-bold mb-1">
                      Masai Mara
                    </h4>
                    <p className="text-sm opacity-80">
                      Kenya's premier wildlife sanctuary
                    </p>
                  </div>
                </div>
                <div className="relative h-96 group overflow-hidden rounded-xl col-span-1">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Serengeti"
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-headline font-bold mb-1">
                      Serengeti
                    </h4>
                    <p className="text-sm opacity-80">
                      A boundless ecosystem of life
                    </p>
                  </div>
                </div>
                <div className="relative h-80 group overflow-hidden rounded-xl md:col-span-2">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Ngorongoro Crater"
                    src="https://images.unsplash.com/photo-1547471080-7fc2caa6ec71?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h4 className="text-xl font-headline font-bold mb-1">
                      Ngorongoro Crater
                    </h4>
                    <p className="text-sm opacity-80">
                      The world's largest volcanic caldera
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-24">
              <h3 className="text-3xl font-headline font-bold text-primary mb-10 tracking-tight">
                Expedition Log
              </h3>
              <div className="space-y-4">
                <ItineraryDay
                  dayNum="01"
                  title="Arrival &amp; Nairobi Highlands"
                  subtitle="Giraffe Manor &amp; David Sheldrick Wildlife Trust"
                  desc="Welcome to Nairobi. Begin your journey with an intimate encounter at Giraffe Manor, where these gentle giants may join you for morning tea. In the afternoon, visit the David Sheldrick elephant orphanage to support conservation efforts."
                  image="https://images.unsplash.com/photo-1547471080-7fc2caa6ec71?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
                  tags={["Stay: Hemmingways Nairobi", "Activity: Private Tour"]}
                  defaultOpen={true}
                />
                <ItineraryDay
                  dayNum="03"
                  title="Into the Wild: Masai Mara"
                  subtitle="3 Nights in Private Conservancies"
                  desc="Fly directly into the heart of the Mara. Your stay at a boutique tented camp offers off-road game driving, walking safaris, and night drives—experiences forbidden in the main reserve."
                  image="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
                  tags={["Stay: Angama Mara", "Activity: Hot Air Balloon"]}
                />
                <ItineraryDay
                  dayNum="06"
                  title="The Great Serengeti Migration"
                  subtitle="Across the Border to Tanzania"
                  desc="Witness the endless plains. We move following the migration herds. Expect dramatic river crossings or the quiet majesty of the calving season depending on the time of year."
                  image="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
                  tags={["Stay: Sayari Camp", "Meals: All Inclusive"]}
                />
                <ItineraryDay
                  dayNum="11"
                  title="Crater Living &amp; Lake Manyara"
                  subtitle="A World Within a World"
                  desc="Descend into the Ngorongoro Crater, a UNESCO World Heritage site home to nearly 30,000 animals. Conclude your safari with the tree-climbing lions of Lake Manyara."
                  image="https://images.unsplash.com/photo-1547471080-7fc2caa6ec71?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
                  tags={["Stay: Ngorongoro Crater Lodge"]}
                />
              </div>
            </div>

            <div className="mb-24">
              <h3 className="text-3xl font-headline font-bold text-primary mb-10 tracking-tight">
                Luxury Retreats
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Luxury safari tent"
                      src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
                    />
                  </div>
                  <h5 className="text-lg font-headline font-bold">
                    The Aventara Standard
                  </h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Each lodge is hand-picked for its architectural integrity,
                    sustainable practices, and proximity to the finest game
                    viewing locations.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Infinity pool"
                      src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3"
                    />
                  </div>
                  <h5 className="text-lg font-headline font-bold">
                    Unrivaled Comfort
                  </h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Enjoy private plunge pools, gourmet bush dining, and
                    personal butler service in the most remote corners of the
                    wilderness.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-12 bg-surface-container-low rounded-3xl border border-outline-variant/10">
              <h3 className="text-2xl font-headline font-bold text-primary mb-8 tracking-tight">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                <IncludedItem text="All internal regional flights (Light aircraft transfers)" />
                <IncludedItem text="Professional Silver/Gold rated private guides" />
                <IncludedItem text="Luxury accommodation on a full board basis" />
                <IncludedItem text="All National Park &amp; Conservancy entrance fees" />
                <IncludedItem text="Unlimited private game drives in 4x4 Land Cruisers" />
                <IncludedItem text="Flying Doctors emergency medical evacuation insurance" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 editorial-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-xs uppercase font-bold tracking-widest text-on-surface-variant/60 mb-1">
                      Pricing From
                    </p>
                    <h3 className="text-4xl font-headline font-bold text-primary">
                      $12,450{" "}
                      <span className="text-sm font-body font-normal text-on-surface-variant">
                        /pp
                      </span>
                    </h3>
                  </div>
                  <div className="px-2 py-1 bg-secondary-container/20 text-on-secondary-container text-xs font-bold rounded">
                    BEST VALUE
                  </div>
                </div>
                <hr className="border-outline-variant/20 mb-6" />
                <div className="space-y-4 mb-8">
                  <label className="block">
                    <span className="text-xs uppercase font-bold tracking-wider text-on-surface-variant mb-2 block">
                      Select Departure Month
                    </span>
                    <select className="w-full bg-surface-container-high border-none rounded-lg text-sm focus:ring-2 focus:ring-surface-tint py-3 px-4">
                      <option>July 2024 (Peak Season)</option>
                      <option>August 2024 (Peak Season)</option>
                      <option>September 2024</option>
                      <option>October 2024</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs uppercase font-bold tracking-wider text-on-surface-variant mb-2 block">
                      Number of Guests
                    </span>
                    <div className="flex items-center bg-surface-container-high rounded-lg p-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-10 h-10 flex items-center justify-center text-primary"
                      >
                        <span className="material-symbols-outlined material-fill">
                          remove
                        </span>
                      </Button>
                      <span className="flex-1 text-center font-bold text-sm">
                        2 Guests
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-10 h-10 flex items-center justify-center text-primary"
                      >
                        <span className="material-symbols-outlined material-fill">
                          add
                        </span>
                      </Button>
                    </div>
                  </label>
                </div>
                <Button className="w-full py-4 rounded-xl font-bold tracking-wide mb-4">
                  Book This Expedition
                </Button>
                <Button
                  variant="outline"
                  className="w-full py-4 rounded-xl font-bold tracking-wide"
                >
                  Enquire for Customization
                </Button>
                <p className="text-xs text-center text-on-surface-variant/60 mt-6 leading-relaxed">
                  Price includes all local taxes and conservation fees. <br />A
                  25% deposit is required to secure your safari.
                </p>
              </div>

              <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="font-headline font-bold text-xl mb-3">
                    Expert Planning
                  </h4>
                  <p className="text-sm opacity-80 leading-relaxed mb-6">
                    Talk to a Safari Specialist to tailor this itinerary to your
                    specific interests.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="material-symbols-outlined material-fill">
                        call
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold opacity-60">TOLL FREE</p>
                      <p className="font-bold">+1-800-AVENTARA</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 opacity-10">
                  <span className="material-symbols-outlined material-fill text-9xl">
                    landscape
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <section className="bg-surface-container border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col items-center text-center">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary/60 mb-4">
              The Explorer Journal
            </span>
            <h3 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-8 max-w-2xl">
              Receive curated stories from the Savanna.
            </h3>
            <form className="w-full max-w-lg flex gap-2">
              <input
                className="flex-1 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-surface-tint px-6 py-4"
                placeholder="Email address"
                type="email"
              />
              <Button className="px-8 rounded-lg font-bold">Join</Button>
            </form>
          </div>
        </section>
      </main>
    </Layout>
  );
}
