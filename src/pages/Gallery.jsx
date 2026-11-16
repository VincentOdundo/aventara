import React, { useState } from "react";
import { useSeo } from "../hooks/useSeo";
import {
  SITE_URL,
  breadcrumbLd,
  graph,
  imageGalleryLd,
  pageCrumbs,
  webPageLd,
} from "../lib/seo";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection, Breadcrumbs } from "../components/ui";
import {
  X,
  ArrowRight,
  Instagram,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import logo from "./cima_logo.png";

import elephantGrass from "../assets/nairobi/lion-safari-van.jpeg";
import elephantTusks from "../assets/elefant.jpeg";
import flamingoWater from "../assets/flamingo-lonely.jpeg";
import lionMale from "../assets/rhino_plain.jpeg";
import lionessRoar from "../assets/egret-water.jpeg";
import egretWater from "../assets/safari-van-sunrise.jpeg";
import flamingoSolo from "../assets/flamingo-water.jpeg";
import kilimanjaro from "../assets/elefabt-happy.jpeg";
import leopardTree from "../assets/cheater.jpeg";
import rhinoClose from "../assets/nairobi/giraffe-sunsut.jpeg";
import cheetahSafari from "../assets/nairobi/lion-safari.jpeg";
import cheetahPlain from "../assets/lion.jpeg";
import heroImg from "../assets/elefant-tusk.jpeg";

const galleryImages = [
  {
    src: elephantGrass,
    caption: "Wildebeest Migration, Masai Mara",
    tall: true,
  },
  {
    src: elephantTusks,
    caption: "African Elephant, Amboseli",
  },
  {
    src: flamingoWater,
    caption: "Golden Sunrise, Serengeti",
  },
  {
    src: lionMale,
    caption: "Lion Pride, Masai Mara",
    tall: true,
  },
  {
    src: lionessRoar,
    caption: "Sunset Safari Drive",
  },
  {
    src: egretWater,
    caption: "Lake Naivasha Boat Ride",
  },
  {
    src: flamingoSolo,
    caption: "Flamingos, Lake Nakuru",
    tall: true,
  },
  {
    src: kilimanjaro,
    caption: "Mt. Kilimanjaro from Amboseli",
  },
  {
    src: leopardTree,
    caption: "Giraffe, Tarangire",
  },
  {
    src: rhinoClose,
    caption: "Ngorongoro Crater",
  },
  {
    src: cheetahSafari,
    caption: "Maasai Culture",
  },
  {
    src: cheetahPlain,
    caption: "Safari Explorer",
    tall: true,
  },
];

export default function Gallery() {
  const title = "East Africa Safari Photo Gallery";
  const description =
    "Wildlife and landscape photos from Cima Brava safaris in the Masai Mara, Amboseli, Lake Nakuru, Nairobi National Park, Serengeti and Ngorongoro Crater.";
  const crumbs = pageCrumbs("Gallery", "/gallery");
  const breadcrumb = breadcrumbLd(crumbs, "/gallery");
  useSeo({
    title,
    description,
    path: "/gallery",
    image: heroImg,
    imageAlt: "East Africa safari photography gallery by Cima Brava Adventures",
    markdown: false,
    jsonLd: graph(
      webPageLd({
        path: "/gallery",
        title,
        description,
        image: heroImg,
        type: "WebPage",
        mainEntityId: `${SITE_URL}/gallery#gallery`,
        breadcrumbId: breadcrumb["@id"],
      }),
      breadcrumb,
      imageGalleryLd(galleryImages),
    ),
  });
  const [lightbox, setLightbox] = useState(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center bg-midnight-black">
        <img
          src={heroImg}
          alt="Cima Brava Safari Gallery"
          className="absolute inset-0 w-full h-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/30"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center pt-20">
          <span className="text-xs uppercase tracking-[0.4em] text-sunrise-yellow font-bold mb-3 block">
            Our Moments
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-sand-cream tracking-[-0.02em]">
            Safari Gallery
          </h1>
          <p className="font-script italic text-3xl md:text-4xl text-sunrise-yellow mt-4">
            Wild by Nature. Guided by Heart.
          </p>
          <Breadcrumbs crumbs={crumbs} tone="light" className="mt-6" />
        </div>
      </section>

      {/* Masonry Grid */}
      <Section className="min-h-[100svh] py-16 md:py-24 flex flex-col justify-center bg-sand-cream text-midnight-black font-body">
        <AnimatedSection>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid group cursor-pointer relative rounded-2xl overflow-hidden border border-savannah-gold/30 shadow-md"
                onClick={() => setLightbox(idx)}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    img.tall ? "h-96" : "h-64"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-5">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-sunrise-yellow font-bold block mb-1">
                      East Africa
                    </span>
                    <p className="text-sand-cream text-base font-headline font-bold">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Social & Trip CTA */}
        <AnimatedSection className="mt-20 text-center bg-sand-cream border border-savannah-gold/30 rounded-3xl p-10 md:p-14 shadow-sm">
          <span className="text-xs uppercase tracking-[0.35em] text-sunset-orange font-bold block mb-3">
            Follow the Expedition
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-safari-brown mb-4">
            See More From the Bush
          </h2>
          <p className="text-safari-brown/80 max-w-xl mx-auto mb-8 font-body">
            Follow @cima_brava_adventures on Instagram and TikTok for daily
            wildlife sightings, golden hour drives, and behind-the-scenes safari
            stories.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/safaris"
              className="btn-explore inline-flex items-center gap-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-bold px-8 py-3.5 rounded-full shadow-md hover:brightness-105 transition-all"
            >
              <span>Explore Trips</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://www.instagram.com/cima_brava_adventures?mdxt=MWQ1OHpkOWQ1bHZoaQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-destinations inline-flex items-center gap-2 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream font-semibold px-8 py-3.5 rounded-full shadow-md hover:brightness-110 transition-all"
            >
              <Instagram size={18} className="text-sunrise-yellow" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@cima_brava_adventures"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-plan inline-flex items-center gap-2 border-2 border-savannah-gold text-midnight-black bg-sand-cream font-bold px-8 py-3.5 rounded-full hover:bg-savannah-gold/15 transition-all"
            >
              <span>TikTok</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedSection>
      </Section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-midnight-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-safari-brown border border-savannah-gold/40 text-sand-cream hover:text-sunrise-yellow flex items-center justify-center z-50 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <div
            className="max-w-5xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl border border-savannah-gold/30 shadow-2xl" loading="lazy" decoding="async" />
            <p className="text-sunrise-yellow text-center mt-4 font-headline text-lg">
              {galleryImages[lightbox].caption}
            </p>
          </div>
          {/* Nav */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (lightbox - 1 + galleryImages.length) % galleryImages.length,
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-safari-brown/90 border border-savannah-gold/40 text-sunrise-yellow hover:bg-savannah-gold hover:text-midnight-black flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % galleryImages.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-safari-brown/90 border border-savannah-gold/40 text-sunrise-yellow hover:bg-savannah-gold hover:text-midnight-black flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </Layout>
  );
}
