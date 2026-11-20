import React from "react";
import { Photo } from "./Photo";

export function ItineraryDay({
  dayNum,
  title,
  subtitle,
  image,
  desc,
  tags = [],
  defaultOpen = false,
}) {
  return (
    <details
      className="group bg-sand-cream rounded-2xl overflow-hidden border border-savannah-gold/30 editorial-shadow"
      open={defaultOpen}
    >
      <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none hover:bg-savannah-gold/10 transition-colors">
        <div className="flex items-center gap-6">
          <span className="text-3xl md:text-4xl font-headline font-bold text-savannah-gold">
            {dayNum}
          </span>
          <div>
            <h4 className="text-xl font-headline font-bold text-midnight-black group-hover:text-sunset-orange transition-colors">
              {title}
            </h4>
            <p className="text-sm text-safari-brown/75 font-medium">
              {subtitle}
            </p>
          </div>
        </div>
        <span className="material-symbols-outlined material-fill text-safari-brown transition-transform duration-300 group-open:rotate-180 group-open:text-sunset-orange">
          expand_more
        </span>
      </summary>
      <div className="px-6 md:px-8 pb-8 pt-2 flex flex-col md:flex-row gap-8 items-start border-t border-savannah-gold/20">
        {image && (
          <div className="md:w-1/3 shrink-0 rounded-xl overflow-hidden h-48 border border-savannah-gold/30">
            <Photo
              className="w-full h-full"
              src={image} loading="lazy" decoding="async" />
          </div>
        )}
        <div className="flex-1 space-y-4">
          <p className="text-safari-brown/85 leading-relaxed text-sm">
            {desc}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1 bg-savannah-gold/15 border border-savannah-gold/30 text-safari-brown rounded-full text-xs uppercase font-bold tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </details>
  );
}

export function IncludedItem({ text }) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="material-symbols-outlined material-fill text-savannah-gold">
        check_circle
      </span>
      <span className="text-sm text-safari-brown/85 font-medium">{text}</span>
    </div>
  );
}
