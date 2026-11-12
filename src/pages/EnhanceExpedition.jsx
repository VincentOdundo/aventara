import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";

import savannaImg from "../assets/nairobi/girfe-sunset.jpeg";

export default function EnhanceExpedition() {
  return (
    <Layout>
      <div className="bg-sand-cream text-midnight-black min-h-screen">
        <main className="pt-32 pb-20 px-8 max-w-screen-2xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-20">
              <section>
                <div className="relative group overflow-hidden rounded-2xl bg-sand-cream border border-savannah-gold/30 shadow-md">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        alt="Savanna Landscape"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        src={savannaImg}
                      />
                    </div>
                    <div className="md:w-1/2 p-10 flex flex-col justify-center">
                      <div className="inline-flex items-center space-x-2 text-sunset-orange mb-4">
                        <span
                          className="material-symbols-outlined material-fill text-sm"
                          data-icon="explore"
                        >
                          explore
                        </span>
                        <span className="text-xs font-body font-bold tracking-widest uppercase">
                          Base Expedition
                        </span>
                      </div>
                      <h2 className="text-3xl font-headline font-bold text-safari-brown mb-4 leading-tight">
                        14-Day Kenya &amp; Tanzania Safari
                      </h2>
                      <p className="text-safari-brown/80 mb-8 font-body">
                        An extensive traversal across the Maasai Mara and
                        Serengeti plains, focusing on the Great Migration and
                        peak predator sightings.
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-savannah-gold/25">
                        <div>
                          <p className="text-xs font-body text-safari-brown/70 uppercase tracking-tighter mb-1">
                            Duration
                          </p>
                          <p className="font-headline font-bold text-safari-brown">
                            14 Days / 13 Nights
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-body text-safari-brown/70 uppercase tracking-tighter mb-1">
                            Starting From
                          </p>
                          <p className="text-2xl font-headline font-bold text-sunset-orange">
                            $12,450{" "}
                            <span className="text-sm font-body font-normal text-safari-brown/70">
                              pp
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8 border-b border-savannah-gold/25 pb-4">
                  <h3 className="text-2xl font-headline font-bold text-safari-brown">
                    Premium Enhancements
                  </h3>
                  <p className="text-sm font-body text-safari-brown/75 italic">
                    Select the rituals to complete your journey
                  </p>
                </div>
                <div className="space-y-6">
                  <label className="flex items-start p-8 rounded-2xl bg-sand-cream border border-savannah-gold/30 hover:border-savannah-gold transition-all cursor-pointer group relative shadow-sm">
                    <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-sunrise-yellow/35 to-savannah-gold/35 border border-savannah-gold/50 flex items-center justify-center flex-shrink-0">
                        <span
                          className="material-symbols-outlined material-fill text-sunset-orange text-3xl"
                          data-icon="airballoon"
                        >
                          air
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-headline font-bold text-safari-brown leading-tight">
                          Hot Air Balloon Safari (Maasai Mara)
                        </h4>
                        <p className="text-safari-brown/80 font-body text-sm mt-1">
                          Includes a champagne breakfast in the wild after your
                          sunrise flight.
                        </p>
                      </div>
                      <div className="text-right md:min-w-[120px]">
                        <p className="text-xl font-headline font-bold text-sunset-orange">
                          $450{" "}
                          <span className="text-xs font-body font-normal text-safari-brown/70">
                            pp
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="ml-8 flex items-center h-full">
                      <input
                        defaultChecked
                        className="w-6 h-6 rounded border-savannah-gold accent-savannah-gold focus:ring-savannah-gold"
                        type="checkbox"
                      />
                    </div>
                  </label>

                  <label className="flex items-start p-8 rounded-2xl bg-sand-cream border border-savannah-gold/30 hover:border-savannah-gold transition-all cursor-pointer group relative shadow-sm">
                    <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-sunrise-yellow/35 to-savannah-gold/35 border border-savannah-gold/50 flex items-center justify-center flex-shrink-0">
                        <span
                          className="material-symbols-outlined material-fill text-sunset-orange text-3xl"
                          data-icon="photo_camera"
                        >
                          photo_camera
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-headline font-bold text-safari-brown leading-tight">
                          Private Professional Photographer
                        </h4>
                        <p className="text-safari-brown/80 font-body text-sm mt-1">
                          Capture every moment with a dedicated pro and a
                          curated digital album.
                        </p>
                      </div>
                      <div className="text-right md:min-w-[120px]">
                        <p className="text-xl font-headline font-bold text-sunset-orange">
                          $1,200{" "}
                          <span className="text-xs font-body font-normal text-safari-brown/70">
                            total
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="ml-8 flex items-center h-full">
                      <input
                        className="w-6 h-6 rounded border-savannah-gold accent-savannah-gold focus:ring-savannah-gold"
                        type="checkbox"
                      />
                    </div>
                  </label>

                  <label className="flex items-start p-8 rounded-2xl bg-sand-cream border border-savannah-gold/30 hover:border-savannah-gold transition-all cursor-pointer group relative shadow-sm">
                    <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-sunrise-yellow/35 to-savannah-gold/35 border border-savannah-gold/50 flex items-center justify-center flex-shrink-0">
                        <span
                          className="material-symbols-outlined material-fill text-sunset-orange text-3xl"
                          data-icon="groups"
                        >
                          groups
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-headline font-bold text-safari-brown leading-tight">
                          Cultural Maasai Village Visit
                        </h4>
                        <p className="text-safari-brown/80 font-body text-sm mt-1">
                          An immersive community experience learning traditions
                          and artisanal crafts.
                        </p>
                      </div>
                      <div className="text-right md:min-w-[120px]">
                        <p className="text-xl font-headline font-bold text-sunset-orange">
                          $50{" "}
                          <span className="text-xs font-body font-normal text-safari-brown/70">
                            pp
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="ml-8 flex items-center h-full">
                      <input
                        defaultChecked
                        className="w-6 h-6 rounded border-savannah-gold accent-savannah-gold focus:ring-savannah-gold"
                        type="checkbox"
                      />
                    </div>
                  </label>

                  <label className="flex items-start p-8 rounded-2xl bg-sand-cream border border-savannah-gold/30 hover:border-savannah-gold transition-all cursor-pointer group relative shadow-sm">
                    <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-sunrise-yellow/35 to-savannah-gold/35 border border-savannah-gold/50 flex items-center justify-center flex-shrink-0">
                        <span
                          className="material-symbols-outlined material-fill text-sunset-orange text-3xl"
                          data-icon="spa"
                        >
                          spa
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-headline font-bold text-safari-brown leading-tight">
                          Luxury Hot Springs Detox
                        </h4>
                        <p className="text-safari-brown/80 font-body text-sm mt-1">
                          Afternoon relaxation at Naivasha natural thermal pools
                          with mineral treatment.
                        </p>
                      </div>
                      <div className="text-right md:min-w-[120px]">
                        <p className="text-xl font-headline font-bold text-sunset-orange">
                          $150{" "}
                          <span className="text-xs font-body font-normal text-safari-brown/70">
                            pp
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="ml-8 flex items-center h-full">
                      <input
                        className="w-6 h-6 rounded border-savannah-gold accent-savannah-gold focus:ring-savannah-gold"
                        type="checkbox"
                      />
                    </div>
                  </label>
                </div>
              </section>
            </div>

            <aside className="lg:w-[400px]">
              <div className="sticky top-[80px] p-10 rounded-3xl bg-gradient-to-b from-midnight-black via-safari-brown to-safari-brown text-sand-cream border border-savannah-gold/30 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <pattern
                      height="10"
                      id="pattern-grid"
                      patternUnits="userSpaceOnUse"
                      width="10"
                      x="0"
                      y="0"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      ></path>
                    </pattern>
                    <rect
                      fill="url(#pattern-grid)"
                      height="100%"
                      width="100%"
                    ></rect>
                  </svg>
                </div>
                <div className="relative z-10">
                  <h3 className="font-headline font-bold text-sunrise-yellow border-b border-savannah-gold/25 pb-6 mb-8 uppercase tracking-widest text-sm">
                    Expedition Summary
                  </h3>
                  <div className="space-y-6 font-body">
                    <div className="flex justify-between items-center group">
                      <span className="text-sand-cream/80 text-sm uppercase tracking-tighter">
                        Base Investment
                      </span>
                      <span className="font-bold text-lg text-sand-cream">
                        $12,450.00
                      </span>
                    </div>
                    <div className="py-6 border-y border-savannah-gold/25">
                      <span className="text-sunrise-yellow text-xs font-bold uppercase tracking-widest mb-4 block">
                        Selected Add-ons
                      </span>
                      <ul className="space-y-4">
                        <li className="flex justify-between text-sm items-start">
                          <span className="max-w-44 text-sand-cream/85">
                            Hot Air Balloon Safari
                          </span>
                          <span className="font-semibold text-sunrise-yellow">
                            +$450.00
                          </span>
                        </li>
                        <li className="flex justify-between text-sm items-start">
                          <span className="max-w-44 text-sand-cream/85">
                            Cultural Maasai Visit
                          </span>
                          <span className="font-semibold text-sunrise-yellow">
                            +$50.00
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4 pb-8">
                      <div className="flex justify-between items-baseline">
                        <span className="text-lg font-headline italic text-sand-cream">
                          Total Investment
                        </span>
                        <div className="text-right">
                          <span className="text-4xl font-headline font-bold text-sunrise-yellow">
                            $12,950.00
                          </span>
                          <p className="text-xs uppercase tracking-widest text-sand-cream/70 mt-1">
                            Per Person • USD
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link
                      to="/safaris/secure-spot"
                      className="w-full bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black py-4 px-6 rounded-full font-body font-bold tracking-[0.12em] uppercase hover:brightness-105 transition-all duration-300 shadow-xl flex items-center justify-center space-x-3 group text-sm"
                    >
                      <span>Proceed to Summary</span>
                      <span
                        className="material-symbols-outlined material-fill text-sm group-hover:translate-x-1 transition-transform"
                        data-icon="arrow_forward"
                      >
                        arrow_forward
                      </span>
                    </Link>
                    <p className="text-center text-xs text-sand-cream/60 uppercase tracking-widest mt-6">
                      Secure Booking • Cima Brava Adventures
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </Layout>
  );
}
