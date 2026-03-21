import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection, StaggerContainer } from "../components/ui";
import { destinations } from "../data/destinations";
import { ArrowRight, MapPin } from "lucide-react";

import imgAsset_0 from "../assets/cheater.jpeg";
import imgAsset_1 from "../assets/cheater_plain.jpeg";
import imgAsset_2 from "../assets/elefpalin.jpeg";
import imgAsset_3 from "../assets/elephant.jpeg";
import imgAsset_4 from "../assets/elephtain.jpeg";
import imgAsset_5 from "../assets/flamingo.jpeg";
import imgAsset_6 from "../assets/lion.jpeg";
import imgAsset_7 from "../assets/lioness.jpeg";
import imgAsset_8 from "../assets/lioness_open.jpeg";
import imgAsset_9 from "../assets/mountain.jpeg";
import imgAsset_10 from "../assets/plain_elefabt.jpeg";
import imgAsset_11 from "../assets/rhino.jpeg";
import imgAsset_12 from "../assets/rhino_plain.jpeg";
import imgAsset_13 from "../assets/treecheta.jpeg";

export default function DestinationsHub() {
  const kenyaDestinations = destinations.filter((d) => d.country === "Kenya");
  const tzDestinations = destinations.filter((d) => d.country === "Tanzania");

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center">
        <img
          src={imgAsset_5}
          alt="Safari destinations"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 img-overlay-full"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center">
          <span className="text-xs uppercase tracking-[0.4em] text-white/70 font-bold mb-3 block">
            East Africa
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-[-0.02em]">
            Our Destinations
          </h1>
          <p className="text-white/80 mt-3 max-w-xl">
            From Kenya's sweeping savannahs to Tanzania's ancient craters —
            explore the landscapes that make East Africa legendary.
          </p>
        </div>
      </section>

      {/* Kenya */}
      <Section className="py-20 md:py-28">
        <AnimatedSection className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-3 block">
            Kenya
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-[-0.02em]">
            Kenyan Destinations
          </h2>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kenyaDestinations.map((dest) => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </StaggerContainer>
      </Section>

      {/* Tanzania */}
      <section className="py-20 md:py-28 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-secondary font-bold mb-3 block">
              Tanzania
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary tracking-[-0.02em]">
              Tanzanian Destinations
            </h2>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tzDestinations.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
}

function DestinationCard({ dest }) {
  return (
    <Link to={`/destinations/${dest.slug}`} className="group">
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 h-full flex flex-col">
        <div className="relative h-56 overflow-hidden">
          <img
            src={dest.image}
            alt={dest.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 img-overlay-bottom opacity-60"></div>
          <div className="absolute bottom-4 left-4">
            <span className="text-white/80 text-xs flex items-center gap-1">
              <MapPin size={12} /> {dest.country}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-headline font-bold text-on-surface mb-1">
            {dest.name}
          </h3>
          <p className="text-sm text-secondary font-medium italic mb-3">
            {dest.tagline}
          </p>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-4 flex-grow line-clamp-3">
            {dest.description.substring(0, 150)}...
          </p>
          <span className="text-primary text-sm font-bold uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
            Explore <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
