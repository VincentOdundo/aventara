import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection } from "../components/ui";
import { X } from "lucide-react";

import elephantGrass from "../assets/elefant-vegetation.jpeg";
import elephantTusks from "../assets/elefant-tusk.jpeg";
import flamingoWater from "../assets/flamingo-water.jpeg";
import lionMale from "../assets/lion.jpeg";
import lionessRoar from "../assets/lioness.jpeg";
import egretWater from "../assets/egret-water.jpeg";
import flamingoSolo from "../assets/flamingo-lonely.jpeg";
import kilimanjaro from "../assets/mountain.jpeg";
import leopardTree from "../assets/treecheta.jpeg";
import rhinoClose from "../assets/rhino_plain.jpeg";
import cheetahSafari from "../assets/cheater-safari.jpeg";
import cheetahPlain from "../assets/cheater_plain.jpeg";

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

import heroImg from "../assets/nairobi/sunset-exotic.jpeg";

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center">
        <img
          src={heroImg}
          alt="Safari Gallery"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 img-overlay-full"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/70 font-bold mb-3 block">
            Our Moments
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-[-0.02em]">
            Safari Gallery
          </h1>
        </div>
      </section>

      {/* Masonry Grid */}
      <Section className="min-h-[100svh] py-12 md:py-20 flex flex-col justify-center">
        <AnimatedSection>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="break-inside-avoid group cursor-pointer relative rounded-xl overflow-hidden"
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
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                  <p className="text-white text-sm font-medium p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white z-50"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>
          <div
            className="max-w-5xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-white text-center mt-4 font-headline text-lg">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % galleryImages.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-4xl"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </Layout>
  );
}
