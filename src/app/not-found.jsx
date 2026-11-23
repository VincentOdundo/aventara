import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "../lib/metadata";

const LINKS = [
  { to: "/safaris", label: "All safari packages and prices" },
  { to: "/safaris/kenya", label: "Kenya safaris" },
  { to: "/safaris/tanzania", label: "Tanzania safaris" },
  { to: "/safaris/combined", label: "Kenya & Tanzania safaris" },
  { to: "/destinations", label: "Parks and reserves" },
  { to: "/contact", label: "Ask for a quote" },
];

export const metadata = buildMetadata({
  title: "Page Not Found",
  description:
    "This page does not exist. Browse our Kenya and Tanzania safari packages or contact us for a quote.",
  path: "/404",
  noindex: true,
  markdown: false,
});

export default function NotFound() {
  return (
    <section className="bg-sand-cream text-midnight-black font-body pt-36 pb-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-sunset-orange font-bold mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-safari-brown mb-4">
          We could not find that page
        </h1>
        <p className="text-safari-brown/80 mb-10">
          The link may be old or mistyped. These pages will get you back on the
          trail.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
          {LINKS.map((link) => (
            <li key={link.to}>
              <Link
                href={link.to}
                className="flex items-center justify-between gap-3 px-5 py-4 rounded-2xl border border-savannah-gold/40 bg-sand-cream text-sm font-bold text-safari-brown hover:bg-savannah-gold/15 hover:text-sunset-orange transition-colors"
              >
                {link.label}
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
