import Link from "next/link";
import { Shield, Heart, Award, Users, TreePine, ArrowRight, Play } from "lucide-react";
import { buildMetadata } from "../../lib/metadata";
import { ORG_ID, breadcrumbLd, graph, pageCrumbs, webPageLd } from "../../lib/seo";
import { PHOTOS as P } from "../../data/photos";
import { Photo } from "../../components/ui/Photo";
import { JsonLd } from "../../components/seo/JsonLd";
import { Section, AnimatedSection, StaggerContainer, Breadcrumbs } from "../../components/ui";

const heroImg = P.tuskerKili.src;
const sideImg = P.leopardRock.src;

const title = "About Cima Brava Adventures — Nairobi Safari Operator";
const description =
  "Based at City Market, Nairobi, Cima Brava Adventures operates transparent shared and private 4x4 safaris across Kenya and Tanzania.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/about",
  imageAlt: "About Cima Brava Adventures Nairobi safari operator",
});

export default function AboutPage() {
  const crumbs = pageCrumbs("About Us", "/about");
  const breadcrumb = breadcrumbLd(crumbs, "/about");
  const ld = graph(
    webPageLd({
      path: "/about",
      title,
      description,
      image: heroImg,
      type: "AboutPage",
      mainEntityId: ORG_ID,
      breadcrumbId: breadcrumb["@id"],
    }),
    breadcrumb,
  );

  return (
    <>
      <JsonLd id="page-jsonld" data={ld} />

      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center bg-midnight-black">
        <Photo src={heroImg} fill priority className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/30"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center pt-20">
          <span className="text-xs uppercase tracking-[0.4em] text-sunrise-yellow font-bold mb-3 block">
            City Market · Nairobi, Kenya
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-sand-cream tracking-[-0.02em]">
            About Cima Brava Adventures
          </h1>

          <div className="mt-6 flex flex-col items-center">
            <p className="font-script italic text-3xl md:text-5xl text-sand-cream">
              Wild by Nature. Guided by Heart.
            </p>
            <svg
              viewBox="0 0 320 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-64 md:w-80 h-4 mt-1 text-sunrise-yellow"
              aria-hidden="true"
            >
              <path
                d="M4 13C72 4 195 2 316 9C245 9 125 11 22 15"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/safaris"
              className="btn-explore inline-flex items-center gap-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-bold px-8 py-3.5 rounded-full shadow-lg hover:brightness-105 transition-all"
            >
              <span>Explore Trips</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/gallery"
              className="btn-story-play inline-flex items-center gap-3 px-4 py-2 rounded-full bg-sand-cream/10 hover:bg-sand-cream/20 border border-savannah-gold/40 backdrop-blur-sm transition-all"
            >
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-sunrise-yellow via-savannah-gold to-sunset-orange text-midnight-black flex items-center justify-center shadow-md">
                <Play size={16} fill="currentColor" className="ml-0.5" />
              </span>
              <span className="text-sm font-bold text-sand-cream pr-2">
                View Field Gallery
              </span>
            </Link>
          </div>
          <Breadcrumbs crumbs={crumbs} tone="light" className="mt-6" />
        </div>
      </section>

      <Section className="py-20 md:py-28 bg-sand-cream text-midnight-black font-body">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="left">
            <span className="text-xs uppercase tracking-[0.3em] text-sunset-orange font-bold mb-4 block">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-safari-brown tracking-[-0.02em] mb-6">
              A Local Nairobi Safari Operator Built on Price Clarity
            </h2>
            <div className="space-y-4 text-safari-brown/85 leading-relaxed font-body">
              <p data-speakable="true">
                Cima Brava Adventures is an independent Kenyan tour operator based
                at City Market in central Nairobi. We run shared and private 4x4
                overland safaris across{" "}
                <Link href="/kenya" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                  Kenya
                </Link>{" "}
                and{" "}
                <Link href="/tanzania" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                  Tanzania
                </Link>{" "}
                — from half-day capital outings for transit layovers to 12-day
                cross-border journeys spanning the Masai Mara, Lake Nakuru,
                Amboseli, Tarangire, Serengeti, and Ngorongoro Crater.
              </p>
              <p>
                Too many travellers booking East African safaris online face
                opaque &ldquo;inquire for price&rdquo; forms or surprise park-fee
                add-ons upon arrival in Nairobi. Every one of our 17 published
                itineraries displays exact low-season (Jan–Jun) and high-season
                (Jul–Dec) USD per-person rates upfront — with park entry fees,
                camp or lodge stays, full-board meals, bottled water, and airport
                transfers clearly itemized before you commit.
              </p>
              <h3 className="text-xl font-headline font-bold text-safari-brown mt-6 mb-2">
                Our Vehicles, Guides &amp; Field Standards
              </h3>
              <p>
                Every multi-day safari runs in a custom pop-up roof 4x4 safari
                Land Cruiser capped at seven guests so every traveller enjoys a
                window seat and unobstructed photographic roof access. Our
                English-speaking Kenyan and Tanzanian driver-guides know the
                seasonal wildlife corridors, river crossing patterns, and border
                handover procedures at Namanga firsthand.
              </p>
              <h3 className="text-xl font-headline font-bold text-safari-brown mt-6 mb-2">
                Our Commitment to Conservation &amp; Communities
              </h3>
              <p>
                Responsible travel means paying statutory conservation levies
                properly, respecting wildlife viewing distances inside parks,
                partnering with locally owned camps such as Miti Mingi Eco Camp
                and Nyati Safari Camp, and ensuring optional cultural visits
                support Maasai community households directly.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="right">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-savannah-gold/30 relative h-96">
                <Photo src={sideImg} fill sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-96" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream border border-savannah-gold/40 rounded-2xl p-6 shadow-xl">
                <p className="text-2xl font-headline font-bold text-sunrise-yellow">
                  City Market, Nairobi
                </p>
                <p className="text-sm text-sand-cream/85">
                  Direct dispatch · 17 published itineraries
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </Section>

      <section className="py-20 md:py-28 bg-sand-cream border-t border-savannah-gold/20">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-sunset-orange font-bold mb-3 block">
              How We Operate
            </span>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-safari-brown tracking-[-0.02em] mb-4">
              Five Principles Behind Every Departure
            </h2>
            <p className="text-safari-brown/80 max-w-2xl mx-auto font-body">
              From honest seasonal wildlife advice to transparent room rates, these
              standards govern every trip we dispatch.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award size={28} />,
                title: "Published USD Transparency",
                desc: "Low and high season per-person rates, single-room prices, optional extras, and inclusions are published openly on every safari page.",
              },
              {
                icon: <Shield size={28} />,
                title: "Honest Wildlife Expectations",
                desc: "We tell you clearly when Kilimanjaro clouds roll in, why Nakuru flamingo counts fluctuate, and how long each road leg takes — no inflated promises.",
              },
              {
                icon: <TreePine size={28} />,
                title: "Conservation First",
                desc: "We enforce strict off-road and wildlife-distance rules and support sanctuaries including Lake Nakuru, Ol Pejeta, and community conservancies.",
              },
              {
                icon: <Users size={28} />,
                title: "Small 4x4 Groups (Max 7)",
                desc: "Shared departures are capped at seven travellers per Land Cruiser so everyone gets a window seat, plus private 4x4 departures on your own dates.",
              },
              {
                icon: <Heart size={28} />,
                title: "Direct Local Accountability",
                desc: "When you message WhatsApp or email, you speak directly with the Nairobi team coordinating your vehicle, camp check-ins, and border transfers.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-sand-cream border border-savannah-gold/25 rounded-2xl p-8 hover:bg-safari-brown hover:text-sand-cream transition-all duration-500 group shadow-sm"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black mb-6 shadow-md">
                  {value.icon}
                </div>
                <h3 className="text-lg font-headline font-bold mb-3 text-midnight-black group-hover:text-sunrise-yellow">
                  {value.title}
                </h3>
                <p className="text-sm text-safari-brown/80 group-hover:text-sand-cream/85 leading-relaxed font-body">
                  {value.desc}
                </p>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Section className="py-20 md:py-28 text-center bg-sand-cream">
        <AnimatedSection>
          <p className="font-script italic text-3xl text-sunset-orange mb-2">
            Wild by Nature. Guided by Heart.
          </p>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-safari-brown tracking-[-0.02em] mb-6">
            Ready to Plan Your East African Safari?
          </h2>
          <p className="text-safari-brown/80 text-lg max-w-2xl mx-auto mb-10 font-body">
            Review our complete 2026–2027 rate card or email{" "}
            <a
              href="mailto:cimabravaadventures@gmail.com"
              className="text-sunset-orange font-semibold underline hover:text-safari-brown"
            >
              cimabravaadventures@gmail.com
            </a>{" "}
            with your dates and traveller count for a 24-hour quote.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link
              href="/safaris"
              className="btn-explore inline-flex items-center justify-center gap-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:brightness-105 transition-all active:scale-95"
            >
              <span>Explore Trips</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/destinations"
              className="btn-destinations inline-flex items-center justify-center gap-3 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:brightness-110 transition-all"
            >
              <span>View Destinations</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/company-profile"
              className="btn-plan inline-flex items-center justify-center gap-2 border-2 border-savannah-gold text-midnight-black bg-sand-cream px-10 py-4 rounded-full font-bold text-lg hover:bg-savannah-gold/15 transition-all"
            >
              <span>Company Profile &amp; Rates</span>
            </Link>
            <Link
              href="/contact"
              className="btn-plan inline-flex items-center justify-center gap-2 border-2 border-savannah-gold text-midnight-black bg-sand-cream px-10 py-4 rounded-full font-bold text-lg hover:bg-savannah-gold/15 transition-all"
            >
              <span>Contact Nairobi Desk</span>
            </Link>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
