import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { ArrowRight } from "lucide-react";

import heroImg from "../assets/lioness_open.jpeg";
import kiliImg from "../assets/mountain.jpeg";
import migrationImg from "../assets/wildbeasts.jpg";
import lionImg from "../assets/lion-lonely.jpeg";
import leopardImg from "../assets/cheater.jpeg";
import elephantImg from "../assets/elefant.jpeg";
import rhinoImg from "../assets/rhino.jpeg";
import drySeasonImg from "../assets/nairobi/girfe-sunset.jpeg";
import greenSeasonImg from "../assets/elefant-vegetation.jpeg";
import cultureImg1 from "../assets/nairobi/lion-safari.jpeg";
import cultureImg2 from "../assets/flamingo-water.jpeg";

export default function Tanzania() {
  return (
    <Layout>
      <main className="bg-sand-cream text-midnight-black font-body">
        <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center bg-midnight-black">
          <img
            className="absolute inset-0 w-full h-full object-cover z-0"
            alt="Golden sunlight over the vast Serengeti plains at dusk"
            src={heroImg}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25 z-10"></div>
          <div className="relative z-20 max-w-screen-2xl mx-auto w-full px-8">
            <span className="inline-block py-2 px-5 bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md text-sunrise-yellow font-body font-bold text-xs uppercase tracking-[0.25em] rounded-full mb-6">
              Featured Destination · Tanzania
            </span>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-sand-cream font-bold -tracking-[0.03em] leading-tight max-w-4xl">
              Wild Tanzania.
            </h1>
            <p className="text-sand-cream/85 font-body text-xl md:text-2xl mt-6 max-w-2xl leading-relaxed">
              A canvas of endless horizons, where the pulse of the earth meets
              the grandeur of the savanna.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/safaris/tanzania"
                className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold rounded-full px-8 py-4 shadow-lg hover:brightness-105 transition-all inline-flex items-center gap-2"
              >
                Explore Trips <ArrowRight size={16} />
              </Link>
              <Link
                to="/destinations"
                className="btn-destinations bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream border border-savannah-gold/30 font-body font-semibold rounded-full px-8 py-4 hover:brightness-110 transition-all inline-flex items-center gap-2"
              >
                View Destinations <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="btn-plan border-2 border-savannah-gold text-sand-cream hover:bg-savannah-gold/15 font-body font-semibold rounded-full px-8 py-4 transition-all inline-flex items-center gap-2"
              >
                Plan Your Adventure
              </Link>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <span className="text-sunset-orange font-body font-bold uppercase tracking-widest text-xs mb-4 block">
                The Soul of the Savanna
              </span>
              <h2 className="font-headline text-5xl md:text-6xl text-safari-brown font-bold mb-8 leading-tight">
                Why Tanzania?
              </h2>
              <div className="space-y-6 text-safari-brown/85 text-lg leading-relaxed font-body">
                <p>
                  Tanzania is not merely a destination; it is a profound
                  immersion into the rhythms of the natural world. Home to the
                  legendary Serengeti and the snow-capped peaks of Kilimanjaro,
                  it stands as Africa's premier wildlife sanctuary.
                </p>
                <p>
                  With over a third of its land dedicated to conservation, the
                  biodiversity here is unparalleled. From the high-altitude
                  forests to the spice-scented shores of Zanzibar, every mile
                  offers a new chapter in the Modern Explorer's journal.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-low border border-savannah-gold/25 relative overflow-hidden rounded-2xl editorial-shadow">
                <img
                  className="w-full h-full object-cover scale-110"
                  alt="Majestic Mount Kilimanjaro with acacia trees in foreground"
                  src={kiliImg}
                />
              </div>

              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-safari-brown flex items-center justify-center p-8 rounded-full border-4 border-sand-cream shadow-xl hidden lg:flex">
                <p className="text-sunrise-yellow text-center font-headline italic text-lg leading-tight">
                  A world within a country.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low border-y border-savannah-gold/20 py-32 px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <span className="text-sunset-orange font-body font-bold uppercase tracking-widest text-xs mb-3 block">
                Untamed Encounters
              </span>
              <h2 className="font-headline text-5xl text-safari-brown font-bold mb-6">
                Iconic Wildlife
              </h2>
              <p className="text-safari-brown/80 font-body">
                The stage is set for nature's most dramatic performances.
                Encounter the Big Five and witness the raw power of the Great
                Migration.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
              <Link
                to="/destinations/serengeti"
                className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl cursor-pointer border border-savannah-gold/25"
              >
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Thousands of wildebeest crossing a river during migration"
                  src={migrationImg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/15 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-10">
                  <h3 className="font-headline text-3xl text-sand-cream font-bold mb-2">
                    The Great Migration
                  </h3>
                  <p className="text-sand-cream/80 font-body text-sm max-w-md">
                    Over two million wildebeest, zebras, and gazelles move in a
                    continuous cycle across the Serengeti ecosystem.
                  </p>
                </div>
              </Link>

              <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-savannah-gold/25">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Close up of a male lion's face in the tall grass"
                  src={lionImg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/55 via-transparent to-transparent group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-sunrise-yellow font-body font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md">
                    Big Five: Lion
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-savannah-gold/25">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Cheetah and leopard predator habitat in the Serengeti"
                  src={leopardImg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/55 via-transparent to-transparent group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-sunrise-yellow font-body font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md">
                    Big Five: Leopard
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-savannah-gold/25">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="An African elephant walking through the savanna"
                  src={elephantImg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/55 via-transparent to-transparent group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-sunrise-yellow font-body font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md">
                    Big Five: Elephant
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-savannah-gold/25">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Black rhino in the Ngorongoro Crater"
                  src={rhinoImg}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/55 via-transparent to-transparent group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-sunrise-yellow font-body font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md">
                    Big Five: Rhino
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-8 max-w-screen-xl mx-auto">
          <h2 className="font-headline text-5xl text-safari-brown font-bold mb-16 text-center">
            Best Times to Visit
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-savannah-gold/40 hidden md:block"></div>
            <div className="space-y-24">
              <div className="relative flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 md:text-right">
                  <span className="text-sunset-orange font-body font-bold uppercase tracking-widest text-xs mb-2 block">
                    June - October
                  </span>
                  <h3 className="font-headline text-3xl text-safari-brown font-bold mb-4">
                    The Long Dry Season
                  </h3>
                  <p className="text-safari-brown/80 font-body leading-relaxed">
                    The golden hour for wildlife viewing. As water sources
                    diminish, animals congregate around waterholes, offering
                    clear and dramatic sightings. This period marks the famous
                    Mara River crossings in the North.
                  </p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-gradient-to-b from-sunrise-yellow to-savannah-gold rounded-full border-4 border-sand-cream flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined material-fill text-midnight-black text-lg">
                    wb_sunny
                  </span>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-video bg-surface-container-low border border-savannah-gold/25 rounded-2xl overflow-hidden editorial-shadow">
                    <img
                      className="w-full h-full object-cover"
                      alt="Dry golden savanna grass at sunset"
                      src={drySeasonImg}
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row-reverse items-center gap-12">
                <div className="md:w-1/2 text-left">
                  <span className="text-sunset-orange font-body font-bold uppercase tracking-widest text-xs mb-2 block">
                    November - May
                  </span>
                  <h3 className="font-headline text-3xl text-safari-brown font-bold mb-4">
                    The Lush Green Season
                  </h3>
                  <p className="text-safari-brown/80 font-body leading-relaxed">
                    A landscape transformed into a verdant paradise. This is
                    calving season in the South Serengeti, where hundreds of
                    thousands of foals are born, attracting predators and
                    creating incredible birdwatching opportunities.
                  </p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-safari-brown rounded-full border-4 border-sand-cream flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined material-fill text-sunrise-yellow text-lg">
                    rainy
                  </span>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-video bg-surface-container-low border border-savannah-gold/25 rounded-2xl overflow-hidden editorial-shadow">
                    <img
                      className="w-full h-full object-cover"
                      alt="Lush green savanna vegetation with elephants"
                      src={greenSeasonImg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-midnight-black via-safari-brown to-midnight-black text-sand-cream py-32 overflow-hidden">
          <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 w-full aspect-[3/4] rounded-2xl overflow-hidden editorial-shadow rotate-3 scale-95 origin-bottom-right border border-savannah-gold/30">
                <img
                  className="w-full h-full object-cover"
                  alt="East African safari culture and wildlife"
                  src={cultureImg1}
                />
              </div>
              <div className="absolute -top-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden border-[10px] border-savannah-gold/30 -rotate-6 z-0">
                <img
                  className="w-full h-full object-cover"
                  alt="Scenic East African waters and birdlife"
                  src={cultureImg2}
                />
              </div>
            </div>
            <div>
              <span className="text-sunrise-yellow font-body font-bold uppercase tracking-widest text-xs mb-6 block">
                Beyond the Wild
              </span>
              <h2 className="font-headline text-5xl font-bold mb-8 leading-tight italic text-sand-cream">
                Cultural Tapestry
              </h2>
              <div className="space-y-8">
                <div>
                  <h4 className="font-headline font-bold text-2xl mb-2 text-sunrise-yellow">
                    The Maasai
                  </h4>
                  <p className="font-body text-sand-cream/85 leading-relaxed">
                    Meet the legendary guardians of the savanna. Their vibrant
                    red Shúkà and deep spiritual connection to the land offer a
                    profound perspective on coexistence.
                  </p>
                </div>
                <div className="h-px bg-savannah-gold/20 w-full"></div>
                <div>
                  <h4 className="font-headline font-bold text-2xl mb-2 text-sunrise-yellow">
                    Swahili Heritage
                  </h4>
                  <p className="font-body text-sand-cream/85 leading-relaxed">
                    From the stone-cobbled alleys of Zanzibar to the coastal
                    spice markets, experience a fusion of African, Arab, and
                    Indian influences that have shaped East Africa for
                    centuries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 px-8 text-center bg-sand-cream relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22rem] font-headline italic text-safari-brown/[0.04] pointer-events-none select-none">
            Tanzania
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="font-script text-3xl text-sunset-orange italic mb-3">
              Wild by Nature. Guided by Heart.
            </p>
            <h2 className="font-headline text-5xl md:text-6xl text-safari-brown font-bold mb-8">
              Ready for your expedition?
            </h2>
            <p className="text-safari-brown/80 text-xl font-body mb-12">
              Join us for a bespoke journey into the heart of the wildebeest
              migration and the heights of Kilimanjaro.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center items-center">
              <Link
                to="/safaris/tanzania"
                className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-10 py-4 rounded-full font-body font-bold text-base hover:brightness-105 transition-all shadow-xl inline-flex items-center gap-2"
              >
                Explore Trips <ArrowRight size={18} />
              </Link>
              <Link
                to="/destinations"
                className="btn-destinations bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream px-10 py-4 rounded-full font-body font-semibold text-base hover:brightness-110 transition-all shadow-lg inline-flex items-center gap-2"
              >
                View Destinations <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="btn-plan bg-transparent border-2 border-savannah-gold text-midnight-black px-10 py-4 rounded-full font-body font-bold text-base hover:bg-savannah-gold/15 transition-colors inline-flex items-center gap-2"
              >
                Plan Your Adventure
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
