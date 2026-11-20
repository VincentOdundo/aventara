import React from "react";
import { Photo } from "../components/ui/Photo";
import { useSeo } from "../hooks/useSeo";
import {
  SITE_URL,
  breadcrumbLd,
  destinationCrumbs,
  destinationFaqs,
  destinationLd,
  faqLd,
  graph,
  safariListLd,
  safarisForDestination,
  truncateText,
  usd,
  webPageLd,
} from "../lib/seo";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import Layout from "../components/layout/Layout";
import {
  Section,
  AnimatedSection,
  StaggerContainer,
  Breadcrumbs,
  FaqSection,
} from "../components/ui";
import { getDestinationBySlug } from "../data/destinations";
import { getCurrentSeason } from "../data/safaris";
import { MapPin, ArrowRight, Sparkles, Calendar } from "lucide-react";

export default function DestinationDetail() {
  const { slug } = useParams();
  const dest = getDestinationBySlug(slug);
  // Safaris that actually visit this destination
  const relatedSafaris = dest ? safarisForDestination(dest) : [];
  const crumbs = dest ? destinationCrumbs(dest) : [];
  const faqs = dest ? destinationFaqs(dest, relatedSafaris) : [];
  const fromPrice = relatedSafaris.length
    ? Math.min(...relatedSafaris.map((s) => s.price.low))
    : null;
  const destPath = dest ? `/destinations/${dest.slug}` : "/destinations";
  const pageTitle = dest
    ? relatedSafaris.length
      ? `${dest.name} Safari Packages & Guide, ${dest.country}`
      : `${dest.name} Safari Guide, ${dest.country}`
    : "";
  const pageDesc = dest
    ? relatedSafaris.length
      ? truncateText(
          `What to expect in ${dest.name}, ${dest.country}, when to visit, and ${relatedSafaris.length === 1 ? "our safari" : `the ${relatedSafaris.length} safaris`} visiting there from ${usd(fromPrice)} per person.`,
          158,
        )
      : truncateText(
          `What to expect in ${dest.name}, ${dest.country}, best time to visit (${dest.bestTime}), wildlife highlights and custom private safaris from Nairobi.`,
          158,
        )
    : "";
  const breadcrumb = dest ? breadcrumbLd(crumbs, destPath) : null;
  useSeo(
    dest
      ? {
          title: pageTitle,
          description: pageDesc,
          path: destPath,
          image: dest.image,
          imageAlt: `${dest.name}, ${dest.country} wildlife safari`,
          jsonLd: graph(
            webPageLd({
              path: destPath,
              title: pageTitle,
              description: pageDesc,
              image: dest.image,
              mainEntityId: `${SITE_URL}${destPath}#destination`,
              breadcrumbId: breadcrumb["@id"],
            }),
            destinationLd(dest),
            breadcrumb,
            relatedSafaris.length
              ? safariListLd(relatedSafaris, `Safaris visiting ${dest.name}`)
              : null,
            faqLd(faqs),
          ),
        }
      : {},
  );
  const season = getCurrentSeason();

  if (!dest) return <NotFound />;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-midnight-black">
        <Photo
          src={dest.image}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
          <Breadcrumbs crumbs={crumbs} tone="light" className="mb-5" />
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-sunrise-yellow font-body font-bold mb-4 px-4 py-1.5 rounded-full bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-sm">
            <MapPin size={14} className="text-savannah-gold" /> {dest.country}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-sand-cream tracking-[-0.02em] mb-3">
            {dest.name}
            {relatedSafaris.length > 0 ? " Safaris" : ""}
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
              <p className="text-safari-brown/85 font-body leading-relaxed text-lg mb-12" data-speakable="true">
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
                      <Photo
                        src={img}
                        className="w-full h-full hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            <FaqSection
              faqs={faqs}
              title={`${dest.name}: questions and answers`}
              className="mt-14"
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-[80px] space-y-6">
              {/* Quick Info */}
              <div className="bg-surface border border-savannah-gold/25 rounded-2xl editorial-shadow p-6">
                <h2 className="font-headline font-bold text-lg text-safari-brown mb-4">
                  Quick Info
                </h2>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-sunset-orange mt-0.5" />
                    <div>
                      <p className="font-bold text-midnight-black">Country</p>
                      <Link
                        to={dest.country === "Kenya" ? "/kenya" : "/tanzania"}
                        className="text-sunset-orange font-semibold hover:underline underline-offset-2"
                      >
                        {dest.country} Safari Guide
                      </Link>
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
                  <h2 className="font-headline font-bold text-lg text-safari-brown mb-4">
                    Safaris featuring {dest.name}
                  </h2>
                  <div className="space-y-3 font-body">
                    {relatedSafaris.map((safari) => (
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
                            {safari.days === 0.5 ? "Half day" : `${safari.days} days`}
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
