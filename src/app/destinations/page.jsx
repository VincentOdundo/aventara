import Link from "next/link";
import { ArrowRight, MapPin, Compass } from "lucide-react";
import { buildMetadata } from "../../lib/metadata";
import {
  breadcrumbLd,
  destinationListLd,
  destinationsHubFaqs,
  faqLd,
  graph,
  pageCrumbs,
  webPageLd,
} from "../../lib/seo";
import { destinations } from "../../data/destinations";
import { PHOTOS as P } from "../../data/photos";
import { Photo } from "../../components/ui/Photo";
import { JsonLd } from "../../components/seo/JsonLd";
import { Section, AnimatedSection, StaggerContainer, Breadcrumbs, FaqSection } from "../../components/ui";

const heroImg = P.lionVehicle.src;
const bannerImg = P.vanSunrise.src;

const title = "Safari Destinations in Kenya & Tanzania";
const description =
  "The parks and reserves on our routes: Masai Mara, Amboseli, Lake Nakuru, Lake Naivasha, Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/destinations",
  imageAlt: "Safari destinations across Kenya and Tanzania national parks",
});

function DestinationCard({ dest }) {
  return (
    <Link href={`/destinations/${dest.slug}`} className="group">
      <div className="bg-surface-container-lowest border border-safari-brown/10 hover:border-safari-brown/25 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 h-full flex flex-col">
        <div className="relative h-60 overflow-hidden">
          <Photo
            src={dest.image}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/15 to-transparent"></div>
          <div className="absolute bottom-4 left-4">
            <span className="bg-safari-brown/85 text-sunrise-yellow border border-savannah-gold/40 rounded-full px-3 py-1 text-xs font-body font-semibold flex items-center gap-1.5 backdrop-blur-sm">
              <MapPin size={12} className="text-savannah-gold" /> {dest.country}
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-headline font-bold text-midnight-black group-hover:text-sunset-orange transition-colors mb-1.5">
            {dest.name}
          </h3>
          <p className="text-sm text-sunset-orange font-body font-medium italic mb-3">
            {dest.tagline}
          </p>
          <p className="text-sm text-safari-brown/80 font-body leading-relaxed mb-5 flex-grow line-clamp-3">
            {dest.description}
          </p>
          <div className="pt-4 border-t border-safari-brown/10 flex items-center justify-between mt-auto">
            <span className="text-safari-brown group-hover:text-sunset-orange text-xs font-body font-bold uppercase tracking-wider transition-colors">
              Explore Destination
            </span>
            <span className="w-8 h-8 rounded-full bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-sm">
              <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function DestinationsHubPage() {
  const crumbs = pageCrumbs("Destinations", "/destinations");
  const breadcrumb = breadcrumbLd(crumbs, "/destinations");
  const faqs = destinationsHubFaqs();
  const kenyaDestinations = destinations.filter((d) => d.country === "Kenya");
  const tzDestinations = destinations.filter((d) => d.country === "Tanzania");

  const ld = graph(
    webPageLd({
      path: "/destinations",
      title,
      description,
      image: heroImg,
      type: "CollectionPage",
      breadcrumbId: breadcrumb["@id"],
    }),
    breadcrumb,
    destinationListLd(destinations),
    faqLd(faqs),
  );

  return (
    <>
      <JsonLd id="page-jsonld" data={ld} />

      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center bg-midnight-black">
        <Photo src={heroImg} fill priority className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-sunrise-yellow font-body font-bold mb-4 px-4 py-1.5 rounded-full bg-safari-brown/75 border border-savannah-gold/40 backdrop-blur-sm">
            <Compass size={14} className="text-savannah-gold" /> East Africa
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-bold text-sand-cream tracking-[-0.02em]">
            Safari Destinations in Kenya &amp; Tanzania
          </h1>
          <p className="text-sand-cream/85 font-body text-base md:text-lg mt-4 max-w-2xl leading-relaxed">
            From Kenya&apos;s sweeping golden savannahs to Tanzania&apos;s ancient
            volcanic craters — explore the untamed landscapes that make East Africa.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/safaris"
              className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold rounded-full px-8 py-3.5 shadow-lg hover:brightness-105 transition-all inline-flex items-center gap-2"
            >
              Explore Trips <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-plan border-2 border-savannah-gold text-sand-cream hover:bg-savannah-gold/15 font-body font-semibold rounded-full px-8 py-3.5 transition-all inline-flex items-center gap-2"
            >
              Plan Your Adventure
            </Link>
          </div>
          <Breadcrumbs crumbs={crumbs} tone="light" className="mt-6" />
        </div>
      </section>

      {/* Kenya */}
      <Section className="py-20 md:py-28 bg-sand-cream">
        <AnimatedSection className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-sunset-orange font-body font-bold mb-3 block">
              Kenya · Heart of the Savannah
            </span>
            <h2 className="text-3xl md:text-5xl font-headline font-bold text-safari-brown tracking-[-0.02em]">
              Kenyan Destinations
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 self-start md:self-auto">
            <Link
              href="/kenya"
              className="btn-plan border-2 border-savannah-gold text-safari-brown font-body font-bold rounded-full px-5 py-3 text-sm inline-flex items-center gap-2 hover:bg-savannah-gold/15 transition-all"
            >
              Kenya Safari Guide <ArrowRight size={15} />
            </Link>
            <Link
              href="/safaris/kenya"
              className="btn-destinations bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream font-body font-semibold rounded-full px-6 py-3 text-sm inline-flex items-center gap-2 hover:brightness-110 transition-all shadow-md"
            >
              View Kenya Safaris <ArrowRight size={15} />
            </Link>
          </div>
        </AnimatedSection>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {kenyaDestinations.map((dest) => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </StaggerContainer>
      </Section>

      {/* Tanzania */}
      <section className="py-20 md:py-28 bg-surface-container-low/70 border-t border-safari-brown/12">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-sunset-orange font-body font-bold mb-3 block">
                Tanzania · Endless Horizons
              </span>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-safari-brown tracking-[-0.02em]">
                Tanzanian Destinations
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 self-start md:self-auto">
              <Link
                href="/tanzania"
                className="btn-plan border-2 border-savannah-gold text-safari-brown font-body font-bold rounded-full px-5 py-3 text-sm inline-flex items-center gap-2 hover:bg-savannah-gold/15 transition-all"
              >
                Tanzania Safari Guide <ArrowRight size={15} />
              </Link>
              <Link
                href="/safaris/tanzania"
                className="btn-destinations bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream font-body font-semibold rounded-full px-6 py-3 text-sm inline-flex items-center gap-2 hover:brightness-110 transition-all shadow-md"
              >
                View Tanzania Safaris <ArrowRight size={15} />
              </Link>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {tzDestinations.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Destination FAQs */}
      <Section className="py-16 md:py-20 bg-sand-cream border-t border-safari-brown/12">
        <FaqSection
          faqs={faqs}
          title="Kenya & Tanzania safari destinations: questions and answers"
          className="max-w-4xl mx-auto"
        />
      </Section>

      {/* Signature Theme Banner */}
      <section className="py-16 md:py-24 bg-sand-cream px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto rounded-3xl overflow-hidden relative bg-midnight-black border border-savannah-gold/30 p-10 md:p-16 shadow-2xl">
          <Photo
            src={bannerImg}
            fill
            sizes="100vw"
            focus="70% 90%"
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="text-xs uppercase tracking-[0.35em] text-sunrise-yellow font-body font-bold mb-3 block">
                Cima Brava Adventures
              </span>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-sand-cream mb-4">
                Ready to Chart Your East African Expedition?
              </h2>
              <p className="text-sand-cream/80 font-body text-base md:text-lg mb-6">
                Whether you dream of the Great Migration in the Masai Mara or
                descending into the Ngorongoro Crater, our local experts craft
                bespoke journeys tailored to your pace.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/safaris"
                  className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold rounded-full px-8 py-3.5 shadow-lg hover:brightness-105 transition-all inline-flex items-center gap-2"
                >
                  Explore Trips <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="btn-plan border-2 border-savannah-gold text-sand-cream hover:bg-savannah-gold/15 font-body font-semibold rounded-full px-8 py-3.5 transition-all inline-flex items-center gap-2"
                >
                  Plan Your Adventure
                </Link>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="font-script text-3xl md:text-4xl text-sand-cream italic leading-snug">
                Wild by Nature.
                <br />
                Guided by Heart.
              </p>
              <div className="h-1.5 w-44 bg-gradient-to-r from-sunrise-yellow via-savannah-gold to-transparent rounded-full mt-2 mx-auto lg:ml-auto lg:mr-0"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
