import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden editorial-shadow hover:border-savannah-gold/60 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function DestinationCard({ image, title, desc, link, price }) {
  return (
    <Card className="flex flex-col group cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/35 via-transparent to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline font-bold text-2xl text-midnight-black mb-2 tracking-tight group-hover:text-sunset-orange transition-colors">
          {title}
        </h3>
        <p className="text-safari-brown/80 font-medium text-sm flex-grow mb-4">
          {desc}
        </p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-savannah-gold/25">
          {price && <span className="font-bold text-sunset-orange">{price}</span>}
          <span className="text-safari-brown group-hover:text-sunset-orange font-bold text-xs uppercase tracking-widest flex items-center group-hover:gap-2 transition-all">
            Explore{" "}
            <span className="material-symbols-outlined text-sm ml-1 text-savannah-gold">
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </Card>
  );
}
