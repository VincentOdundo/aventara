import React from "react";
import { useSeo } from "../hooks/useSeo";
import {
  breadcrumbLd,
  countryFaqs,
  faqLd,
  graph,
  pageCrumbs,
  safariListLd,
  usd,
  webPageLd,
} from "../lib/seo";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Breadcrumbs, FaqSection } from "../components/ui";
import { allPackages } from "../data/safaris";
import { ArrowRight } from "lucide-react";

import { Photo } from "../components/ui/Photo";
import { PHOTOS as P } from "../data/photos";

// Left-aligned headline, so the subject (the elephant) sits on the right.
const heroImg = P.elephantKiliRight.src;
const kiliImg = P.kilimanjaro.src;
// Cells of the Big Five grid are close to portrait, so they take tall photos.
const migrationImg = P.wildebeest.src;
const lionImg = P.lionessYawn.src;
const leopardImg = P.leopardRockTall.src;
const elephantImg = P.elephantDust.src;
const rhinoImg = P.rhinosTall.src;
const drySeasonImg = P.giraffeSunset.src;
const greenSeasonImg = P.lionPack.src;
const cultureImg1 = P.leopardVan.src;
const cultureImg2 = P.egretShore.src;

export default function Tanzania() {
  const title = "Tanzania Safari Guide: Serengeti, Ngorongoro & Budget Trips";
  const description =
    "Northern Tanzania safaris from 3 to 6 days: Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara, starting in Arusha.";
  const crumbs = pageCrumbs("Tanzania Safari Guide", "/tanzania");
  const breadcrumb = breadcrumbLd(crumbs, "/tanzania");
  const faqs = countryFaqs("tanzania");
  const tanzaniaPackages = allPackages.tanzania;
  useSeo({
    title,
    description,
    path: "/tanzania",
    image: heroImg,
    imageAlt: "Tanzania northern circuit safari plains in the Serengeti",
    jsonLd: graph(
      webPageLd({
        path: "/tanzania",
        title,
        description,
        image: heroImg,
        breadcrumbId: breadcrumb["@id"],
      }),
      breadcrumb,
      safariListLd(tanzaniaPackages, "Tanzania Budget Safari Packages"),
      faqLd(faqs),
    ),
  });
  return (
    <Layout>
      <div className="bg-sand-cream text-midnight-black font-body">
        <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center bg-midnight-black">
          <Photo
            className="absolute inset-0 w-full h-full z-0"
            fetchPriority="high"
            src={heroImg}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25 z-10"></div>
          <div className="relative z-20 max-w-screen-2xl mx-auto w-full px-8">
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-sand-cream font-bold -tracking-[0.03em] leading-tight max-w-4xl">
              <span className="inline-block py-2 px-5 bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md text-sunrise-yellow font-body font-bold text-xs uppercase tracking-[0.25em] leading-normal rounded-full mb-6">
                Tanzania Safari Guide
              </span>
              <span className="block">Wild Tanzania.</span>
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
            <Breadcrumbs crumbs={crumbs} tone="light" className="mt-6" />
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
                  Serengeti and the snow-capped peaks of Kilimanjaro,
                  it stands as Africa's wildlife sanctuary.
                </p>
                <p data-speakable="true">
                  More than a third of Tanzania&apos;s land is protected in
                  national parks and reserves, holding one of Africa&apos;s
                  highest concentrations of large mammals. From the highlands
                  around Ngorongoro to the northern Serengeti plains, every
                  route covers distinct ecosystems.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-[4/5] bg-surface-container-low border border-savannah-gold/25 relative overflow-hidden rounded-2xl editorial-shadow">
                <Photo
                  className="w-full h-full scale-110"
                  src={kiliImg} loading="lazy" decoding="async" />
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
                Wildlife
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
                <Photo
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  src={migrationImg} loading="lazy" decoding="async" focus="52% 55%" />
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
                <Photo
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  src={lionImg} loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/55 via-transparent to-transparent group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-sunrise-yellow font-body font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md">
                    Big Five: Lion
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-savannah-gold/25">
                <Photo
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  src={leopardImg} loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/55 via-transparent to-transparent group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-sunrise-yellow font-body font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md">
                    Big Five: Leopard
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-savannah-gold/25">
                <Photo
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  src={elephantImg} loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/55 via-transparent to-transparent group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-sunrise-yellow font-body font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md">
                    Big Five: Elephant
                  </span>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-2xl cursor-pointer border border-savannah-gold/25">
                <Photo
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  src={rhinoImg} loading="lazy" decoding="async" />
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
                    <Photo
                      className="w-full h-full"
                      src={drySeasonImg} loading="lazy" decoding="async" />
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
                    creating birdwatching opportunities.
                  </p>
                </div>
                <div className="relative z-10 w-12 h-12 bg-safari-brown rounded-full border-4 border-sand-cream flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined material-fill text-sunrise-yellow text-lg">
                    rainy
                  </span>
                </div>
                <div className="md:w-1/2">
                  <div className="aspect-video bg-surface-container-low border border-savannah-gold/25 rounded-2xl overflow-hidden editorial-shadow">
                    <Photo
                      className="w-full h-full"
                      src={greenSeasonImg} loading="lazy" decoding="async" />
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
                <Photo
                  className="w-full h-full"
                  src={cultureImg1} loading="lazy" decoding="async" focus="50% 40%" />
              </div>
              <div className="absolute -top-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden border-[10px] border-savannah-gold/30 -rotate-6 z-0">
                <Photo
                  className="w-full h-full"
                  src={cultureImg2} loading="lazy" decoding="async" />
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
                  <h3 className="font-headline font-bold text-2xl mb-2 text-sunrise-yellow">
                    The Maasai
                  </h3>
                  <p className="font-body text-sand-cream/85 leading-relaxed">
                    Meet the guardians of the savanna. Their vibrant
                    red Shúkà and deep spiritual connection to the land offer a
                    profound perspective on coexistence.
                  </p>
                </div>
                <div className="h-px bg-savannah-gold/20 w-full"></div>
                <div>
                  <h3 className="font-headline font-bold text-2xl mb-2 text-sunrise-yellow">
                    Swahili Heritage
                  </h3>
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

        <section className="py-20 px-8 max-w-screen-xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-sunset-orange font-body font-bold uppercase tracking-widest text-xs mb-2 block">
                Tanzania Safari Packages &amp; Parks
              </span>
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-safari-brown">
                Published Northern Circuit Safaris
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 text-xs font-body">
              {[
                { label: "Serengeti", to: "/destinations/serengeti" },
                { label: "Ngorongoro Crater", to: "/destinations/ngorongoro" },
                { label: "Tarangire", to: "/destinations/tarangire" },
                { label: "Lake Manyara", to: "/destinations/lake-manyara" },
              ].map((park) => (
                <Link
                  key={park.to}
                  to={park.to}
                  className="px-3.5 py-1.5 rounded-full border border-savannah-gold/50 font-bold text-safari-brown hover:text-sunset-orange hover:border-sunset-orange transition-colors"
                >
                  {park.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {tanzaniaPackages.map((pkg) => (
              <Link
                key={pkg.slug}
                to={`/safari/${pkg.slug}`}
                className="bg-sand-cream border border-savannah-gold/35 rounded-2xl p-5 hover:border-sunset-orange transition-all shadow-sm flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sunset-orange mb-1">
                    {pkg.days} Days
                  </p>
                  <h3 className="font-headline font-bold text-base text-safari-brown mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-safari-brown/75 mb-3">
                    {pkg.destinations.join(" · ")}
                  </p>
                </div>
                <p className="text-sm font-bold text-safari-brown pt-3 border-t border-savannah-gold/20">
                  From {usd(pkg.price.low)} low / {usd(pkg.price.high)} high
                </p>
              </Link>
            ))}
          </div>

          <FaqSection
            faqs={faqs}
            title="Tanzania safaris: questions and answers"
            className="max-w-4xl"
          />
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
      </div>
    </Layout>
  );
}
