"use client";
import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "../ui/Photo";

export function GalleryGrid({ images }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="break-inside-avoid group cursor-pointer relative rounded-2xl overflow-hidden border border-savannah-gold/30 shadow-md"
            onClick={() => setLightbox(idx)}
          >
            <div className={`relative w-full ${img.tall ? "h-96" : "h-64"}`}>
              <Photo
                alt={img.caption}
                src={img.src}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full group-hover:scale-105 transition-transform duration-700"
              />
            </div>
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

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-midnight-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-safari-brown border border-savannah-gold/40 text-sand-cream hover:text-sunrise-yellow flex items-center justify-center z-50 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          <div className="max-w-5xl max-h-[85vh] relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[lightbox].image || images[lightbox].src}
              alt={images[lightbox].caption}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-2xl border border-savannah-gold/30 shadow-2xl"
            />
            <p className="text-sunrise-yellow text-center mt-4 font-headline text-lg">
              {images[lightbox].caption}
            </p>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + images.length) % images.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-safari-brown/90 border border-savannah-gold/40 text-sunrise-yellow hover:bg-savannah-gold hover:text-midnight-black flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % images.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-safari-brown/90 border border-savannah-gold/40 text-sunrise-yellow hover:bg-savannah-gold hover:text-midnight-black flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </>
  );
}
