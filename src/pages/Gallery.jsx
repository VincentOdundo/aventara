import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection } from "../components/ui";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1547471080-7fc2caa6ec71?auto=format&fit=crop&q=80&w=2071",
    caption: "Wildebeest Migration, Masai Mara",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&q=80&w=2000",
    caption: "African Elephant, Amboseli",
  },
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=2068",
    caption: "Golden Sunrise, Serengeti",
  },
  {
    src: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=2069",
    caption: "Lion Pride, Masai Mara",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80&w=2067",
    caption: "Sunset Safari Drive",
  },
  {
    src: "https://images.unsplash.com/photo-1504214208698-ea1916a2195a?auto=format&fit=crop&q=80&w=2070",
    caption: "Lake Naivasha Boat Ride",
  },
  {
    src: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80&w=2000",
    caption: "Flamingos, Lake Nakuru",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1611601322175-ef8dbb8eb636?auto=format&fit=crop&q=80&w=2073",
    caption: "Mt. Kilimanjaro from Amboseli",
  },
  {
    src: "https://images.unsplash.com/photo-1508233620467-f79f1e317a05?auto=format&fit=crop&q=80&w=2070",
    caption: "Giraffe, Tarangire",
  },
  {
    src: "https://images.unsplash.com/photo-1562283995-17a42111ae98?auto=format&fit=crop&q=80&w=1000",
    caption: "Ngorongoro Crater",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    caption: "Maasai Culture",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    caption: "Safari Explorer",
    tall: true,
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center">
        <img
          src="https://images.unsplash.com/photo-1547471080-7fc2caa6ec71?auto=format&fit=crop&q=80&w=2071"
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
