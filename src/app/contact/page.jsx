import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { buildMetadata } from "../../lib/metadata";
import { ORG_ID, breadcrumbLd, contactFaqs, faqLd, graph, pageCrumbs, webPageLd } from "../../lib/seo";
import { useWhatsApp } from "../../hooks/useWhatsApp";
import { PHOTOS as P } from "../../data/photos";
import { Photo } from "../../components/ui/Photo";
import { JsonLd } from "../../components/seo/JsonLd";
import { Section, AnimatedSection, Breadcrumbs, FaqSection } from "../../components/ui";
import WhatsAppIcon from "../../components/ui/WhatsAppIcon";
import { ContactForm } from "../../components/contact/ContactForm";

const heroImg = P.giraffeSunset.src;

const title = "Contact Cima Brava Adventures — City Market, Nairobi";
const description =
  "Book a Kenya or Tanzania safari directly with our City Market, Nairobi desk. WhatsApp +254 112 346 049 or email for a confirmed USD quote within 24 hours.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/contact",
  imageAlt: "Contact Cima Brava Adventures at City Market, Nairobi for safari quotes",
});

function TikTokIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.18 8.18 0 0 0 4.76 1.52V6.82a4.84 4.84 0 0 1-1-.13Z" />
    </svg>
  );
}

export default function ContactPage() {
  const crumbs = pageCrumbs("Contact", "/contact");
  const breadcrumb = breadcrumbLd(crumbs, "/contact");
  const faqs = contactFaqs();
  const { generateInquiry } = useWhatsApp();

  const ld = graph(
    webPageLd({
      path: "/contact",
      title,
      description,
      image: heroImg,
      type: "ContactPage",
      mainEntityId: ORG_ID,
      breadcrumbId: breadcrumb["@id"],
    }),
    breadcrumb,
    faqLd(faqs),
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
            Contact Cima Brava Adventures
          </h1>
          <p className="text-sand-cream/90 font-body max-w-2xl mt-4 text-base md:text-lg">
            Speak directly with our local safari dispatch team in Nairobi for shared
            4x4 group seats, private departures, and custom Kenya or Tanzania quotes.
          </p>
          <Breadcrumbs crumbs={crumbs} tone="light" className="mt-6" />
        </div>
      </section>

      <Section className="py-16 md:py-24 bg-sand-cream text-midnight-black font-body">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <AnimatedSection animation="left">
              <span className="text-xs uppercase tracking-[0.3em] text-sunset-orange font-bold mb-3 block">
                Direct Nairobi Safari Desk
              </span>
              <h2 className="text-3xl font-headline font-bold text-safari-brown mb-6">
                Request a Confirmed USD Quote
              </h2>
              <p className="text-safari-brown/85 leading-relaxed mb-8 font-body" data-speakable="true">
                Cima Brava Adventures operates directly from City Market in central
                Nairobi without overseas booking brokers. Send your target dates,
                traveller count, and preferred parks on WhatsApp or email — we
                check live vehicle seats and camp availability and reply within 24
                hours with a final per-person US dollar quote and day-by-day
                schedule.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black flex-shrink-0 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-midnight-black">
                      Phone &amp; WhatsApp Reservations
                    </p>
                    <a
                      href="tel:+254112346049"
                      className="text-safari-brown/85 text-sm hover:text-sunset-orange transition-colors"
                    >
                      +254 112 346 049
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black flex-shrink-0 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-midnight-black">Email</p>
                    <a
                      href="mailto:cimabravaadventures@gmail.com"
                      className="text-safari-brown/85 text-sm hover:text-sunset-orange transition-colors"
                    >
                      cimabravaadventures@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black flex-shrink-0 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-midnight-black">Operations Base</p>
                    <p className="text-safari-brown/85 text-sm">
                      City Market, Muindi Mbingu Street, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunrise-yellow to-savannah-gold flex items-center justify-center text-midnight-black flex-shrink-0 shadow-sm">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-midnight-black">
                      Response Time &amp; Departures
                    </p>
                    <p className="text-safari-brown/85 text-sm">
                      Replies within 24 hours · Daily Kenya &amp; Tanzania departures
                      year-round
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-savannah-gold/25">
                <p className="text-xs uppercase tracking-widest text-safari-brown font-bold mb-4">
                  Follow Our Field Updates
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/cima_brava_adventures?mdxt=MWQ1OHpkOWQ1bHZoaQ%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-11 h-11 rounded-full bg-safari-brown text-sand-cream flex items-center justify-center hover:bg-gradient-to-b hover:from-sunrise-yellow hover:to-savannah-gold hover:text-midnight-black transition-all shadow-sm"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@cima_brava_adventures"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-11 h-11 rounded-full bg-safari-brown text-sand-cream flex items-center justify-center hover:bg-gradient-to-b hover:from-sunrise-yellow hover:to-savannah-gold hover:text-midnight-black transition-all shadow-sm"
                  >
                    <TikTokIcon size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/share/187nSmsCH8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-11 h-11 rounded-full bg-safari-brown text-sand-cream flex items-center justify-center hover:bg-gradient-to-b hover:from-sunrise-yellow hover:to-savannah-gold hover:text-midnight-black transition-all shadow-sm"
                  >
                    <Facebook size={18} />
                  </a>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <a
                  href={generateInquiry("Custom Safari Request")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-destinations w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream border border-savannah-gold/40 px-8 py-4 rounded-full font-semibold hover:brightness-110 transition-all active:scale-95 shadow-md"
                >
                  <WhatsAppIcon size={20} className="text-sunrise-yellow" />
                  <span>Chat on WhatsApp</span>
                </a>
                <Link
                  href="/company-profile"
                  className="btn-plan w-full inline-flex items-center justify-center gap-2 border-2 border-savannah-gold text-midnight-black bg-sand-cream px-8 py-3.5 rounded-full font-bold hover:bg-savannah-gold/15 transition-all"
                >
                  <span>View 2026–2027 Rate Card</span>
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-3">
            <AnimatedSection animation="right">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-headline font-bold text-safari-brown mb-3">
              Pickup &amp; Service Areas
            </h2>
            <p className="text-sm text-safari-brown/85 leading-relaxed mb-3">
              All Kenya road safaris include complimentary pickup and drop-off
              across Nairobi CBD, City Market, Westlands, Kilimani, Karen,
              Lang&apos;ata, Wilson Airport, and Jomo Kenyatta International Airport
              (JKIA).
            </p>
            <p className="text-sm text-safari-brown/85 leading-relaxed">
              Northern Tanzania routes start from Arusha hotels, with Kilimanjaro
              International Airport (JRO) transfers and Namanga border handovers
              arranged on combined bookings.
            </p>
          </div>

          <div className="bg-surface-container-low border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-headline font-bold text-safari-brown mb-3">
              What to Include for a Fast Quote
            </h2>
            <ul className="space-y-2 text-sm text-safari-brown/85">
              <li className="flex items-start gap-2">
                <CheckCircle size={15} className="text-sunset-orange mt-0.5 shrink-0" />
                <span>Preferred start date (or travel month for low vs high season rates)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={15} className="text-sunset-orange mt-0.5 shrink-0" />
                <span>Number of adults and any children (ages 0–11 qualify for child rates)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={15} className="text-sunset-orange mt-0.5 shrink-0" />
                <span>Shared 4x4 group seat (max 7) or private 4x4 vehicle preference</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={15} className="text-sunset-orange mt-0.5 shrink-0" />
                <span>Room setup (twin/double sharing vs private single room)</span>
              </li>
            </ul>
          </div>

          <div className="bg-surface-container-low border border-savannah-gold/30 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-headline font-bold text-safari-brown mb-3">
              Why Book Directly With Our Nairobi Desk
            </h2>
            <p className="text-sm text-safari-brown/85 leading-relaxed mb-3">
              Booking directly in Nairobi cuts out overseas agency markups while
              keeping every statutory cost transparent upfront — non-resident park
              fees, 4x4 Land Cruiser transport, camps, and meals are stated clearly
              in US dollars with free cancellation up to 30 days prior.
            </p>
            <p className="text-xs font-bold text-safari-brown space-x-2">
              <Link href="/safaris/kenya" className="text-sunset-orange hover:underline">
                Kenya Safaris
              </Link>
              <span>·</span>
              <Link href="/safaris/tanzania" className="text-sunset-orange hover:underline">
                Tanzania Safaris
              </Link>
              <span>·</span>
              <Link href="/safaris/combined" className="text-sunset-orange hover:underline">
                Combined Trips
              </Link>
              <span>·</span>
              <Link href="/destinations/ol-pejeta" className="text-sunset-orange hover:underline">
                Ol Pejeta
              </Link>
              <span>·</span>
              <Link href="/destinations/tsavo" className="text-sunset-orange hover:underline">
                Tsavo
              </Link>
            </p>
          </div>
        </div>

        <FaqSection faqs={faqs} title="Booking & quote questions" className="mt-16 max-w-4xl" />
      </Section>
    </>
  );
}
