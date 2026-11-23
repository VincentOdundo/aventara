import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight, Sparkles, Calendar, Compass, Sun } from "lucide-react";
import { buildMetadata } from "../../../lib/metadata";
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
} from "../../../lib/seo";
import { destinations, getDestinationBySlug } from "../../../data/destinations";
import { DESTINATION_CONTENT } from "../../../data/destinationContent";
import { getCurrentSeason } from "../../../data/safaris";
import { Photo } from "../../../components/ui/Photo";
import { JsonLd } from "../../../components/seo/JsonLd";
import { Section, AnimatedSection, StaggerContainer, Breadcrumbs, FaqSection } from "../../../components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

function destSeoCopy(dest) {
  const relatedSafaris = safarisForDestination(dest);
  const fromPrice = relatedSafaris.length
    ? Math.min(...relatedSafaris.map((s) => s.price.low))
    : null;
  const title = relatedSafaris.length
    ? `${dest.name} Safari Packages & Guide, ${dest.country}`
    : `${dest.name} Safari Guide, ${dest.country}`;
  const description = relatedSafaris.length
    ? truncateText(
        `What to expect in ${dest.name}, ${dest.country}, when to visit, and ${relatedSafaris.length === 1 ? "our safari" : `the ${relatedSafaris.length} safaris`} visiting there from ${usd(fromPrice)} per person.`,
        158,
      )
    : truncateText(
        `What to expect in ${dest.name}, ${dest.country}, best time to visit (${dest.bestTime}), wildlife highlights and custom private safaris from Nairobi.`,
        158,
      );
  return { relatedSafaris, title, description };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) return {};
  const { title, description } = destSeoCopy(dest);
  return buildMetadata({
    title,
    description,
    path: `/destinations/${dest.slug}`,
    imageAlt: `${dest.name}, ${dest.country} wildlife safari`,
  });
}

export default async function DestinationDetailPage({ params }) {
  const { slug } = await params;
  const dest = getDestinationBySlug(slug);
  if (!dest) notFound();

  const { relatedSafaris, title, description } = destSeoCopy(dest);
  const editorial = DESTINATION_CONTENT[dest.slug];
  const crumbs = destinationCrumbs(dest);
  const faqs = destinationFaqs(dest, relatedSafaris);
  const destPath = `/destinations/${dest.slug}`;
  const breadcrumb = breadcrumbLd(crumbs, destPath);
  const season = getCurrentSeason();

  const ld = graph(
    webPageLd({
      path: destPath,
      title,
      description,
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
  );

  return (
    <>
      <JsonLd id="page-jsonld" data={ld} />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-midnight-black">
        <Photo
          src={dest.image}
          fill
          priority
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
              href="/safaris"
              className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold rounded-full px-8 py-3.5 shadow-lg hover:brightness-105 transition-all inline-flex items-center gap-2"
            >
              Explore Trips <ArrowRight size={16} />
            </Link>
            <Link
              href="/destinations"
              className="btn-destinations bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream border border-savannah-gold/30 font-body font-semibold rounded-full px-8 py-3.5 hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              View Destinations <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
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
                Destination Field Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-safari-brown mb-6">
                About {dest.name}
              </h2>
              <div className="space-y-4 text-safari-brown/90 font-body leading-relaxed text-[15px] md:text-base mb-10">
                <p data-speakable="true">{dest.description}</p>
                {editorial?.overviewParagraphs?.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-safari-brown mb-6">
                Wildlife &amp; Landscape Highlights
              </h2>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {dest.highlights.map((h, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 bg-surface-container-low border border-savannah-gold/25 rounded-xl p-5 shadow-sm"
                  >
                    <Sparkles size={18} className="text-sunset-orange mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-body font-medium text-midnight-black leading-relaxed">
                      {h}
                    </span>
                  </div>
                ))}
              </StaggerContainer>
            </AnimatedSection>

            {editorial && (
              <AnimatedSection className="space-y-6 mb-12">
                <div className="bg-surface-container-low border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-headline font-bold text-safari-brown mb-3 flex items-center gap-2">
                    <Sun size={18} className="text-sunset-orange" />
                    When to Visit {dest.name}
                  </h2>
                  <p className="text-sm text-safari-brown/90 leading-relaxed">
                    {editorial.bestTimeDetail}
                  </p>
                </div>

                <div className="bg-surface-container-low border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-headline font-bold text-safari-brown mb-3 flex items-center gap-2">
                    <Compass size={18} className="text-sunset-orange" />
                    Distances &amp; How {dest.name} Fits a Safari Route
                  </h2>
                  <p className="text-sm text-safari-brown/90 leading-relaxed mb-4">
                    {editorial.routeFit}
                  </p>
                  {editorial.nearbyLinks?.length > 0 && (
                    <div className="pt-3 border-t border-savannah-gold/20">
                      <p className="text-xs font-bold uppercase tracking-wider text-sunset-orange mb-2">
                        Parks commonly paired with {dest.name}
                      </p>
                      <ul className="space-y-1.5 text-sm">
                        {editorial.nearbyLinks.map((nb) => (
                          <li key={nb.slug}>
                            <Link
                              href={`/destinations/${nb.slug}`}
                              className="font-bold text-safari-brown underline decoration-savannah-gold underline-offset-2 hover:text-sunset-orange"
                            >
                              {nb.label}
                            </Link>
                            <span className="text-safari-brown/80"> — {nb.note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="bg-surface-container-low border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
                  <h2 className="text-xl font-headline font-bold text-safari-brown mb-3 flex items-center gap-2">
                    <Calendar size={18} className="text-sunset-orange" />
                    What a Typical Day in {dest.name} Looks Like
                  </h2>
                  <p className="text-sm text-safari-brown/90 leading-relaxed">
                    {editorial.typicalDay}
                  </p>
                </div>
              </AnimatedSection>
            )}

            {dest.gallery && dest.gallery.length > 0 && (
              <AnimatedSection>
                <h2 className="text-2xl font-headline font-bold text-safari-brown mb-6">
                  Scenes from {dest.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {dest.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl overflow-hidden h-48 relative border border-savannah-gold/20"
                    >
                      <Photo
                        src={img}
                        fill
                        sizes="(max-width: 768px) 100vw, 250px"
                        className="w-full h-full hover:scale-105 transition-transform duration-500"
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
              <div className="bg-surface border border-savannah-gold/25 rounded-2xl editorial-shadow p-6">
                <h2 className="font-headline font-bold text-lg text-safari-brown mb-4">
                  Quick Facts
                </h2>
                <div className="space-y-4 text-sm font-body">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-sunset-orange mt-0.5" />
                    <div>
                      <p className="font-bold text-midnight-black">Country</p>
                      <Link
                        href={dest.country === "Kenya" ? "/kenya" : "/tanzania"}
                        className="text-sunset-orange font-semibold hover:underline underline-offset-2"
                      >
                        {dest.country} Safari Guide
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar size={16} className="text-sunset-orange mt-0.5" />
                    <div>
                      <p className="font-bold text-midnight-black">Best Time to Visit</p>
                      <p className="text-safari-brown/80">{dest.bestTime}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-savannah-gold/20 space-y-3">
                  <Link
                    href="/contact"
                    className="btn-plan w-full border-2 border-savannah-gold text-midnight-black hover:bg-savannah-gold/15 font-body font-bold rounded-full py-3 px-6 text-sm inline-flex items-center justify-center gap-2 transition-all"
                  >
                    Request a Custom Quote
                  </Link>
                  <Link
                    href="/destinations"
                    className="btn-destinations w-full bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream font-body font-semibold rounded-full py-3 px-6 text-sm inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                  >
                    All Destinations <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {relatedSafaris.length > 0 ? (
                <div className="bg-surface border border-savannah-gold/25 rounded-2xl editorial-shadow p-6">
                  <h2 className="font-headline font-bold text-lg text-safari-brown mb-4">
                    Safaris visiting {dest.name}
                  </h2>
                  <div className="space-y-3 font-body">
                    {relatedSafaris.map((safari) => (
                      <Link
                        key={safari.id}
                        href={`/safari/${safari.slug}`}
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
                    href="/safaris"
                    className="btn-explore w-full bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black text-sm font-body font-bold rounded-full py-3 px-6 mt-5 inline-flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all"
                  >
                    Compare All Safaris <ArrowRight size={15} />
                  </Link>
                </div>
              ) : (
                <div className="bg-surface border border-savannah-gold/25 rounded-2xl editorial-shadow p-6">
                  <h2 className="font-headline font-bold text-lg text-safari-brown mb-3">
                    Custom Private {dest.name} Safaris
                  </h2>
                  <p className="text-sm text-safari-brown/80 leading-relaxed mb-4">
                    We organize private 4x4 itineraries to {dest.name} from Nairobi
                    tailored to your dates, group size, and preferred camps — often
                    paired with{" "}
                    <Link
                      href="/safari/3-day-amboseli-budget"
                      className="font-bold text-sunset-orange hover:underline"
                    >
                      Amboseli
                    </Link>{" "}
                    or the{" "}
                    <Link
                      href="/safari/3-day-masai-mara-budget"
                      className="font-bold text-sunset-orange hover:underline"
                    >
                      Masai Mara
                    </Link>
                    .
                  </p>
                  <Link
                    href="/contact"
                    className="btn-explore w-full bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black text-sm font-body font-bold rounded-full py-3 px-6 inline-flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all"
                  >
                    Ask for a 24h Quote <ArrowRight size={15} />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
