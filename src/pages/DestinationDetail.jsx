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
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
        <img
          src={dest.image}
          alt={dest.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 img-overlay-full"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
          <span className="text-xs uppercase tracking-[0.4em] text-white/70 font-bold mb-3 block flex items-center gap-2">
            <MapPin size={14} /> {dest.country}
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-[-0.02em] mb-2">
            {dest.name}
          </h1>
          <p className="text-white/80 text-lg italic font-headline">
            {dest.tagline}
          </p>
        </div>
      </section>

      {/* Content */}
      <Section className="py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection>
              <h2 className="text-3xl font-headline font-bold text-primary mb-6">
                About {dest.name}
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-10">
                {dest.description}
              </p>
            </AnimatedSection>

            {/* Highlights */}
            <AnimatedSection>
              <h3 className="text-2xl font-headline font-bold text-primary mb-6">
                Highlights
              </h3>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {dest.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-surface-container-low rounded-xl p-4"
                  >
                    <Sparkles
                      size={18}
                      className="text-secondary mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm font-medium text-on-surface">
                      {h}
                    </span>
                  </div>
                ))}
              </StaggerContainer>
            </AnimatedSection>

            {/* Gallery */}
            {dest.gallery && dest.gallery.length > 0 && (
              <AnimatedSection>
                <h3 className="text-2xl font-headline font-bold text-primary mb-6">
                  Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {dest.gallery.map((img, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden h-48">
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
            <div className="sticky top-[100px] space-y-6">
              {/* Quick Info */}
              <div className="bg-surface-container-lowest rounded-2xl editorial-shadow p-6">
                <h4 className="font-headline font-bold text-lg mb-4">
                  Quick Info
                </h4>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-bold">Country</p>
                      <p className="text-on-surface-variant">{dest.country}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar size={16} className="text-primary mt-0.5" />
                    <div>
                      <p className="font-bold">Best Time to Visit</p>
                      <p className="text-on-surface-variant">{dest.bestTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Safaris */}
              {relatedSafaris.length > 0 && (
                <div className="bg-surface-container-lowest rounded-2xl editorial-shadow p-6">
                  <h4 className="font-headline font-bold text-lg mb-4">
                    Safaris featuring {dest.name}
                  </h4>
                  <div className="space-y-3">
                    {relatedSafaris.slice(0, 4).map((safari) => (
                      <Link
                        key={safari.id}
                        to={`/safari/${safari.slug}`}
                        className="flex items-center justify-between py-3 border-b border-outline-variant/10 last:border-0 group"
                      >
                        <div>
                          <p className="font-bold text-sm group-hover:text-primary transition-colors">
                            {safari.title}
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            {safari.days} Days
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-primary text-sm">
                            ${safari.price[season].toLocaleString()}
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            /person
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/safaris"
                    className="inline-flex items-center gap-1 text-primary text-sm font-bold mt-4 hover:gap-2 transition-all"
                  >
                    View all safaris <ArrowRight size={14} />
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
