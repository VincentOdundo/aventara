import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Section, AnimatedSection, StaggerContainer } from "../components/ui";
import { getDestinationBySlug } from "../data/destinations";
import { safariPackages, getCurrentSeason } from "../data/safaris";
import { MapPin, ArrowRight, Sparkles, Calendar } from "lucide-react";

export default function DestinationDetail() {
  const { slug } = useParams();
  const dest = getDestinationBySlug(slug);
  const season = getCurrentSeason();

  if (!dest) return <Navigate to="/destinations" replace />;

  // Find safaris featuring this destination
  const relatedSafaris = safariPackages.filter((s) =>
    s.destinations.some((d) =>
      d.toLowerCase().includes(dest.name.toLowerCase().split(" ")[0]),
    ),
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-midnight-black">
        <img
          src={dest.image}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-sunrise-yellow font-body font-bold mb-4 px-4 py-1.5 rounded-full bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-sm">
            <MapPin size={14} className="text-savannah-gold" /> {dest.country}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-sand-cream tracking-[-0.02em] mb-3">
            {dest.name}
          </h1>
          <p className="text-sunrise-yellow/90 text-lg md:text-xl italic font-headline max-w-3xl">
            {dest.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/safaris"
              className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold rounded-full px-8 py-3.5 shadow-lg hover:brightness-105 transition-all inline-flex items-center gap-2"
            >
              Explore Trips <ArrowRight size={16} />
            </Link>
            <Link
              to="/destinations"
              className="btn-destinations bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream border border-savannah-gold/30 font-body font-semibold rounded-full px-8 py-3.5 hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              View Destinations <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="btn-plan border-2 border-savannah-gold text-sand-cream hover:bg-savannah-gold/15 font-body font-semibold rounded-full px-8 py-3.5 transition-all inline-flex items-center gap-2"
            >
              Plan Your Adventure
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section className="py-16 md:py-24 bg-sand-cream text-midnight-black font-body">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <span className="text-xs uppercase tracking-[0.3em] text-sunset-orange font-body font-bold mb-2 block">
                Destination Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-safari-brown mb-6">
                About {dest.name}
              </h2>
              <p className="text-safari-brown/85 font-body leading-relaxed text-lg mb-12">
                {dest.description}
              </p>
            </AnimatedSection>

            {/* Highlights */}
            <AnimatedSection>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-safari-brown mb-6">
                Signature Highlights
              </h3>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {dest.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 bg-surface-container-low border border-savannah-gold/25 rounded-xl p-5 shadow-sm"
                  >
                    <Sparkles
                      size={18}
                      className="text-sunset-orange mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm font-body font-medium text-midnight-black leading-relaxed">
                      {h}
                    </span>
                  </div>
                ))}
              </StaggerContainer>
            </AnimatedSection>

            {/* Gallery */}
            {dest.gallery && dest.gallery.length > 0 && (
              <AnimatedSection>
                <h3 className="text-2xl font-headline font-bold text-safari-brown mb-6">
                  Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {dest.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden h-48 border border-savannah-gold/20"
                    >
                      <img
                        src={img}
                        alt={`${dest.name} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-[80px] space-y-6">
              {/* Quick Info */}
              <div className="bg-surface border border-savannah-gold/25 rounded-2xl editorial-shadow p-6">
                <h4 className="font-headline font-bold text-lg text-safari-brown mb-4">
                  Quick Info
                </h4>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-sunset-orange mt-0.5" />
                    <div>
                      <p className="font-bold text-midnight-black">Country</p>
                      <p className="text-safari-brown/80">{dest.country}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar size={16} className="text-sunset-orange mt-0.5" />
                    <div>
                      <p className="font-bold text-midnight-black">
                        Best Time to Visit
                      </p>
                      <p className="text-safari-brown/80">{dest.bestTime}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-savannah-gold/20 space-y-3">
                  <Link
                    to="/contact"
                    className="btn-plan w-full border-2 border-savannah-gold text-midnight-black hover:bg-savannah-gold/15 font-body font-bold rounded-full py-3 px-6 text-sm inline-flex items-center justify-center gap-2 transition-all"
                  >
                    Plan Your Adventure
                  </Link>
                  <Link
                    to="/destinations"
                    className="btn-destinations w-full bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream font-body font-semibold rounded-full py-3 px-6 text-sm inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                  >
                    View Destinations <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Related Safaris */}
              {relatedSafaris.length > 0 && (
                <div className="bg-surface border border-savannah-gold/25 rounded-2xl editorial-shadow p-6">
                  <h4 className="font-headline font-bold text-lg text-safari-brown mb-4">
                    Safaris featuring {dest.name}
                  </h4>
                  <div className="space-y-3 font-body">
                    {relatedSafaris.slice(0, 4).map((safari) => (
                      <Link
                        key={safari.id}
                        to={`/safari/${safari.slug}`}
                        className="flex items-center justify-between py-3 border-b border-savannah-gold/20 last:border-0 group"
                      >
                        <div className="pr-3">
                          <p className="font-bold text-sm text-midnight-black group-hover:text-sunset-orange transition-colors">
                            {safari.title}
                          </p>
                          <p className="text-xs text-safari-brown/75">
                            {safari.days} Days
                          </p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="font-bold text-sunset-orange text-sm">
                            ${safari.price[season].toLocaleString()}
                          </p>
                          <p className="text-xs text-safari-brown/75">/person</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/safaris"
                    className="btn-explore w-full bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black text-sm font-body font-bold rounded-full py-3 px-6 mt-5 inline-flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all"
                  >
                    Explore Trips <ArrowRight size={15} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
