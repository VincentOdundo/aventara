"use client";
import { useState, useEffect } from "react";
import { Photo } from "../ui/Photo";

export function HomeHeroPhotos({ photos }) {
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIdx((prev) => (prev + 1) % photos.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <>
      {photos.map((p, idx) => (
        <Photo
          key={p.src}
          src={p.src}
          alt={p.alt}
          focus={p.focus}
          priority={idx === 0}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            idx === heroIdx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
