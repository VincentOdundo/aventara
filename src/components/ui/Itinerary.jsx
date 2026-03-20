import React from "react";

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
      className="group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant/10 shadow-sm"
      open={defaultOpen}
    >
      <summary className="flex items-center justify-between p-8 cursor-pointer list-none hover:bg-surface-container-low transition-colors">
        <div className="flex items-center gap-6">
          <span className="text-4xl font-headline font-bold text-outline-variant/50">
            {dayNum}
          </span>
          <div>
            <h4 className="text-xl font-headline font-bold text-primary">
              {title}
            </h4>
            <p className="text-sm text-on-surface-variant font-medium">
              {subtitle}
            </p>
          </div>
        </div>
        <span className="material-symbols-outlined material-fill transition-transform duration-300 group-open:rotate-180">
          expand_more
        </span>
      </summary>
      <div className="px-8 pb-8 flex flex-col md:flex-row gap-8 items-start">
        {image && (
          <div className="md:w-1/3 shrink-0 rounded-lg overflow-hidden h-48">
            <img
              className="w-full h-full object-cover"
              alt={title}
              src={image}
            />
          </div>
        )}
        <div className="flex-1 space-y-4">
          <p className="text-on-surface-variant leading-relaxed text-sm">
            {desc}
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-surface-container-high rounded text-xs uppercase font-bold tracking-wider"
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
    <div className="flex items-start gap-4">
      <span className="material-symbols-outlined material-fill text-primary-container">
        check_circle
      </span>
      <span className="text-sm text-on-surface-variant">{text}</span>
    </div>
  );
}
