import React from "react";

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${className}`}
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
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline font-semibold text-2xl text-on-surface mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-on-surface-variant font-medium text-sm flex-grow mb-4">
          {desc}
        </p>
        <div className="flex justify-between items-center mt-auto">
          {price && <span className="font-bold text-primary">{price}</span>}
          <span className="text-primary font-semibold text-sm uppercase tracking-wider flex items-center group-hover:gap-2 transition-all">
            Explore{" "}
            <span className="material-symbols-outlined text-sm ml-1">
              arrow_forward
            </span>
          </span>
        </div>
      </div>
    </Card>
  );
}
