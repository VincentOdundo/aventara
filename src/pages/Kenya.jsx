import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { ArrowRight } from "lucide-react";

import heroImg from "../assets/mountain.jpeg";
import maraImg from "../assets/treecheta.jpeg";
import amboseliImg from "../assets/plain_elefabt.jpeg";
import tsavoImg from "../assets/wildbeasts.jpg";
import samburuImg from "../assets/elefpalin.jpeg";
import cultureImg1 from "../assets/nairobi/girafe-nairobi-city.jpeg";
import cultureImg2 from "../assets/nairobi/antelppes.jpeg";
import cultureImg3 from "../assets/elefant-tusk.jpeg";
import bannerImg from "../assets/safari-van-sunrise.jpeg";

export default function Kenya() {
  return (
    <Layout>
      <main className="pt-24 lg:pt-0 bg-sand-cream text-midnight-black font-body">
        <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-midnight-black">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover scale-105"
              alt="Mount Kilimanjaro peak rising above Amboseli plains at sunset"
              src={heroImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <span className="font-body font-bold uppercase tracking-[0.4em] text-xs mb-6 inline-block text-sunrise-yellow bg-safari-brown/80 border border-savannah-gold/40 rounded-full px-5 py-1.5">
              Destination Spotlight · Kenya
            </span>
            <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl text-sand-cream leading-none tracking-tight mb-8">
              Discover the Wild
            </h1>
            <p className="font-body text-lg md:text-xl text-sand-cream/85 max-w-2xl mx-auto leading-relaxed mb-10">
              Kenya remains the soul of safari. From the snow-capped peak of
              Kilimanjaro to the golden savannahs teeming with the Great
              Migration.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/safaris/kenya"
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

        <section className="px-8 md:px-16 lg:px-24 py-24 bg-sand-cream">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <span className="font-body font-bold text-xs uppercase tracking-widest text-sunset-orange mb-4 block">
                Curated Journeys
              </span>
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-safari-brown mb-12">
                Iconic National Parks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link to="/destinations/masai-mara" className="group cursor-pointer block">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface-container-low border border-savannah-gold/25 mb-4 shadow-md">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Vast golden savannah of Maasai Mara under dramatic sky"
                      src={maraImg}
                    />
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-safari-brown group-hover:text-sunset-orange transition-colors mb-2">
                    Maasai Mara
                  </h3>
                  <p className="text-safari-brown/80 font-body text-sm leading-relaxed">
                    The stage for nature’s greatest show, where millions of
                    wildebeest brave crocodile-infested waters.
                  </p>
                </Link>

                <Link to="/destinations/amboseli" className="group cursor-pointer pt-12 block">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface-container-low border border-savannah-gold/25 mb-4 shadow-md">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Elephant herd in front of Mount Kilimanjaro in Amboseli"
                      src={amboseliImg}
                    />
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-safari-brown group-hover:text-sunset-orange transition-colors mb-2">
                    Amboseli
                  </h3>
                  <p className="text-safari-brown/80 font-body text-sm leading-relaxed">
                    Home to the continent's largest 'tuskers' walking in the
                    shadow of the world's highest free-standing mountain.
                  </p>
                </Link>

                <Link to="/destinations/tsavo" className="group cursor-pointer block">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface-container-low border border-savannah-gold/25 mb-4 shadow-md">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Red volcanic earth and baobab trees in Tsavo East"
                      src={tsavoImg}
                    />
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-safari-brown group-hover:text-sunset-orange transition-colors mb-2">
                    Tsavo
                  </h3>
                  <p className="text-safari-brown/80 font-body text-sm leading-relaxed">
                    A vast, wild landscape of red-dusted elephants, ancient lava
                    flows, and endless horizons.
                  </p>
                </Link>

                <Link to="/destinations/ol-pejeta" className="group cursor-pointer pt-12 block">
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-surface-container-low border border-savannah-gold/25 mb-4 shadow-md">
                    <img
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt="Wildlife in the arid Samburu and Laikipia landscape"
                      src={samburuImg}
                    />
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-safari-brown group-hover:text-sunset-orange transition-colors mb-2">
                    Samburu & Laikipia
                  </h3>
                  <p className="text-safari-brown/80 font-body text-sm leading-relaxed">
                    An arid paradise hosting the 'Special Five' and pioneering
                    rhino conservation sanctuaries in northern Kenya.
                  </p>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 sticky top-[80px] space-y-16">
              <div className="bg-surface-container-low border border-savannah-gold/25 p-10 rounded-2xl editorial-shadow">
                <span className="font-body font-bold text-xs uppercase tracking-widest text-sunset-orange mb-4 block">
                  Curated Journeys
                </span>
                <h2 className="font-headline font-bold text-3xl text-safari-brown mb-6">
                  Unique Wildlife Experiences
                </h2>
                <ul className="space-y-6 font-body">
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined material-fill text-sunset-orange">
                      landscape
                    </span>
                    <div>
                      <p className="font-semibold text-midnight-black">
                        The Great Migration
                      </p>
                      <p className="text-sm text-safari-brown/80">
                        Witness the dramatic Mara River crossings between July
                        and October.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined material-fill text-sunset-orange">
                      pets
                    </span>
                    <div>
                      <p className="font-semibold text-midnight-black">
                        Elephant Herds of Amboseli
                      </p>
                      <p className="text-sm text-safari-brown/80">
                        Up-close encounters with legendary elephant families in
                        their marshland habitat.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="material-symbols-outlined material-fill text-sunset-orange">
                      verified_user
                    </span>
                    <div>
                      <p className="font-semibold text-midnight-black">
                        Rhino Sanctuaries
                      </p>
                      <p className="text-sm text-safari-brown/80">
                        Intimate visits to Ol Pejeta or Lake Nakuru to witness
                        critically protected black and white rhinos.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <span className="font-body font-bold text-xs uppercase tracking-widest text-sunset-orange mb-4 block">
                  Curated Journeys
                </span>
                <h2 className="font-headline font-bold text-3xl text-safari-brown mb-6">
                  Cultural Heritage
                </h2>
                <p className="text-safari-brown/85 font-body leading-relaxed mb-6">
                  Journey into the heart of the Maasai and Samburu territories.
                  Engage with proud guardians of the savanna, learning ancient
                  tracking skills and the wisdom of living in harmony with the
                  wild.
                </p>
                <div className="flex -space-x-4 overflow-hidden">
                  <img
                    className="inline-block h-16 w-16 rounded-full ring-4 ring-sand-cream object-cover"
                    alt="Kenyan wildlife and heritage"
                    src={cultureImg1}
                  />
                  <img
                    className="inline-block h-16 w-16 rounded-full ring-4 ring-sand-cream object-cover"
                    alt="Savannah wildlife encounters"
                    src={cultureImg2}
                  />
                  <img
                    className="inline-block h-16 w-16 rounded-full ring-4 ring-sand-cream object-cover"
                    alt="Majestic elephant tusks"
                    src={cultureImg3}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low border-y border-savannah-gold/20 py-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="font-body font-bold text-xs uppercase tracking-widest text-sunset-orange mb-4 block">
                  Timing your Adventure
                </span>
                <h2 className="font-headline font-bold text-4xl md:text-5xl text-safari-brown">
                  Best Times to Visit
                </h2>
              </div>
              <div className="h-px flex-1 bg-savannah-gold/30 hidden md:block mb-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-surface p-10 rounded-2xl editorial-shadow border border-savannah-gold/25">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline font-bold text-2xl text-safari-brown">
                    Peak Season
                  </h3>
                  <span className="font-body font-bold text-xs px-4 py-1.5 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black rounded-full uppercase tracking-wider">
                    June - October
                  </span>
                </div>
                <p className="text-safari-brown/80 font-body leading-relaxed">
                  The cooler dry season coincides with the Great Migration in
                  the Maasai Mara. Wildlife viewing is at its easiest as animals
                  congregate around permanent water sources.
                </p>
              </div>
              <div className="bg-surface p-10 rounded-2xl editorial-shadow border border-savannah-gold/25">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-headline font-bold text-2xl text-safari-brown">
                    The Green Season
                  </h3>
                  <span className="font-body font-bold text-xs px-4 py-1.5 bg-safari-brown text-sunrise-yellow rounded-full uppercase tracking-wider">
                    January - March
                  </span>
                </div>
                <p className="text-safari-brown/80 font-body leading-relaxed">
                  A photographer’s dream with lush green landscapes and dramatic
                  afternoon skies. Perfect for birdwatching and witnessing the
                  calving season in many parks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-32 px-8 overflow-hidden bg-midnight-black">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="Wide panoramic view of an expedition vehicle in the Kenyan savanna"
              src={bannerImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25"></div>
          </div>
          <div className="relative z-10 text-center text-sand-cream max-w-3xl mx-auto">
            <p className="font-script text-3xl md:text-4xl text-sunrise-yellow italic mb-4">
              Wild by Nature. Guided by Heart.
            </p>
            <h2 className="font-headline font-bold text-4xl md:text-6xl mb-10 leading-tight text-sand-cream">
              Your story in the savannah begins here.
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/safaris/kenya"
                className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-10 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:brightness-105 transition-all shadow-xl inline-flex items-center gap-2"
              >
                Explore Trips <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="btn-plan border-2 border-savannah-gold text-sand-cream hover:bg-savannah-gold/15 px-10 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider transition-all inline-flex items-center gap-2"
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
