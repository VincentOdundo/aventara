import React from "react";
import { ChevronDown } from "lucide-react";

/**
 * Questions and answers as native <details> elements: the answers are in the
 * HTML whether or not a question is open, and no JavaScript is needed to read
 * them. Pass the same list to faqLd() for the matching structured data.
 */
export function FaqSection({ faqs, title = "Questions and answers", id = "faq", className = "" }) {
  if (!faqs || !faqs.length) return null;
  return (
    <section
      id={id}
      className={`scroll-mt-[120px] md:scroll-mt-[136px] lg:scroll-mt-[150px] ${className}`}
    >
      <h2 className="text-3xl font-headline font-bold text-safari-brown mb-8">
        {title}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details
            key={faq.q}
            open={i === 0}
            className="group bg-sand-cream border border-savannah-gold/30 rounded-2xl overflow-hidden shadow-sm"
          >
            <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none hover:bg-savannah-gold/10 transition-colors">
              <h3 className="text-base font-headline font-bold text-safari-brown">
                {faq.q}
              </h3>
              <ChevronDown
                size={18}
                aria-hidden="true"
                className="shrink-0 text-safari-brown transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <p className="px-5 pb-5 text-safari-brown/85 font-body text-sm leading-relaxed">
              {faq.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
