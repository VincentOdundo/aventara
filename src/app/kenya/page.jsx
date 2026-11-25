import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buildMetadata } from "../../lib/metadata";
import {
  breadcrumbLd,
  countryFaqs,
  faqLd,
  graph,
  pageCrumbs,
  safariListLd,
  usd,
  webPageLd,
} from "../../lib/seo";
import { allPackages } from "../../data/safaris";
import { PHOTOS as P } from "../../data/photos";
import { Photo } from "../../components/ui/Photo";
import { JsonLd } from "../../components/seo/JsonLd";
import { Breadcrumbs, FaqSection } from "../../components/ui";

const heroImg = P.sunsetAcacia.src;
const maraImg = P.leopardRockTall.src;
const amboseliImg = P.elephantDust.src;
const tsavoImg = P.elephantMud.src;
const olPejetaImg = P.rhinosTall.src;
const bannerImg = P.vanSunrise.src;

const title = "Kenya Safari Guide: Parks, Seasons & Budget Trips";
const description =
  "Budget 4x4 safaris in Kenya from 2 to 8 days: Masai Mara, Amboseli, Lake Nakuru and Lake Naivasha, with daily departures from Nairobi.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/kenya",
  imageAlt: "Kenya safari acacia silhouette at sunset",
});

export default function KenyaPage() {
  const crumbs = pageCrumbs("Kenya Safari Guide", "/kenya");
  const breadcrumb = breadcrumbLd(crumbs, "/kenya");
  const faqs = countryFaqs("kenya");
  const kenyaPackages = allPackages.kenya;

  const ld = graph(
    webPageLd({
      path: "/kenya",
      title,
      description,
      image: heroImg,
      breadcrumbId: breadcrumb["@id"],
    }),
    breadcrumb,
    safariListLd(kenyaPackages, "Kenya Budget Safari Packages"),
    faqLd(faqs),
  );

  return (
    <div className="pt-24 lg:pt-0 bg-sand-cream text-midnight-black font-body">
      <JsonLd id="page-jsonld" data={ld} />

      <section className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-midnight-black">
        <Photo className="w-full h-full scale-105" fill priority src={heroImg} />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <span className="font-body font-bold uppercase tracking-[0.4em] text-xs leading-normal mb-6 inline-block text-sunrise-yellow bg-safari-brown/80 border border-savannah-gold/40 rounded-full px-5 py-1.5">
            East Africa Field Guide
          </span>
          <h1 className="font-headline font-bold text-5xl md:text-7xl lg:text-8xl text-sand-cream leading-none tracking-tight mb-8">
            Kenya Safari Guide
          </h1>
          <p className="font-body text-lg md:text-xl text-sand-cream/90 max-w-2xl mx-auto leading-relaxed mb-10">
            How to plan a 4x4 overland safari from Nairobi — comparing the Masai
            Mara, Amboseli, Lake Nakuru, Lake Naivasha, Tsavo, and Ol Pejeta
            across dry and green seasons.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/safaris/kenya"
              className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold rounded-full px-8 py-4 shadow-lg hover:brightness-105 transition-all inline-flex items-center gap-2"
            >
              Kenya Safari Packages <ArrowRight size={16} />
            </Link>
            <Link
              href="/destinations"
              className="btn-destinations bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream border border-savannah-gold/30 font-body font-semibold rounded-full px-8 py-4 hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              All Park Guides <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-plan border-2 border-savannah-gold text-sand-cream hover:bg-savannah-gold/15 font-body font-semibold rounded-full px-8 py-4 transition-all inline-flex items-center gap-2"
            >
              Request a Quote
            </Link>
          </div>
          <div className="mt-6 flex justify-center">
            <Breadcrumbs crumbs={crumbs} tone="light" />
          </div>
        </div>
      </section>

      {/* Planning Overview */}
      <section className="px-8 md:px-16 lg:px-24 pt-20 pb-8 bg-sand-cream">
        <div className="max-w-5xl mx-auto">
          <span className="font-body font-bold text-xs uppercase tracking-widest text-sunset-orange mb-3 block">
            Practical Kenya Safari Planning
          </span>
          <h2 className="font-headline font-bold text-3xl md:text-4xl text-safari-brown mb-6">
            Why Kenya Works So Well for Overland 4x4 Safaris
          </h2>
          <div className="space-y-4 text-safari-brown/90 font-body leading-relaxed text-[15px] md:text-base">
            <p data-speakable="true">
              Kenya&apos;s strongest advantage for travellers is geography: Nairobi
              sits right at the centre of the country&apos;s wildlife network,
              putting{" "}
              <Link href="/destinations/nairobi-national-park" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                Nairobi National Park
              </Link>{" "}
              20 minutes away,{" "}
              <Link href="/destinations/lake-naivasha" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                Lake Naivasha
              </Link>{" "}
              and{" "}
              <Link href="/destinations/hells-gate" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                Hell&apos;s Gate
              </Link>{" "}
              two hours north-west,{" "}
              <Link href="/destinations/lake-nakuru" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                Lake Nakuru
              </Link>{" "}
              three hours away,{" "}
              <Link href="/destinations/amboseli" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                Amboseli
              </Link>{" "}
              four hours south-east, and the{" "}
              <Link href="/destinations/masai-mara" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                Masai Mara
              </Link>{" "}
              five to six hours west on paved roads. You can link multiple
              contrasting ecosystems in a single 4x4 Land Cruiser without paying
              for costly bush flights.
            </p>
            <p>
              From our City Market dispatch base in Nairobi, Cima Brava Adventures
              runs daily shared 4x4 departures (capped at 7 guests with guaranteed
              window seats) as well as private itineraries covering bespoke
              northern and coastal sanctuaries like{" "}
              <Link href="/destinations/ol-pejeta" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                Ol Pejeta Conservancy
              </Link>{" "}
              and{" "}
              <Link href="/destinations/tsavo" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                Tsavo National Park
              </Link>
              . Every published multi-day rate already includes non-resident park
              entry fees, en-suite camps or lodges, full-board meals, and JKIA or
              city hotel transfers.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 lg:px-24 py-16 bg-sand-cream">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="font-body font-bold text-xs uppercase tracking-widest text-sunset-orange mb-4 block">
              Signature Parks &amp; Conservancies
            </span>
            <h2 className="font-headline font-bold text-4xl md:text-5xl text-safari-brown mb-12">
              Kenya&apos;s Key Wildlife Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/destinations/masai-mara" className="group cursor-pointer block">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-surface-container-low mb-4">
                  <Photo className="w-full h-full group-hover:scale-110 transition-transform duration-700" fill sizes="(max-width: 768px) 100vw, 25vw" src={maraImg} />
                </div>
                <h3 className="font-headline font-bold text-2xl text-safari-brown group-hover:text-sunset-orange transition-colors mb-2">
                  Masai Mara
                </h3>
                <p className="text-safari-brown/80 font-body text-sm leading-relaxed">
                  Open short-grass savannah holding Kenya&apos;s highest year-round
                  density of lions, cheetahs, and leopards, plus July–October Mara
                  River migration crossings.
                </p>
              </Link>

              <Link href="/destinations/amboseli" className="group cursor-pointer pt-12 block">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-surface-container-low mb-4">
                  <Photo className="w-full h-full group-hover:scale-110 transition-transform duration-700" fill sizes="(max-width: 768px) 100vw, 25vw" src={amboseliImg} />
                </div>
                <h3 className="font-headline font-bold text-2xl text-safari-brown group-hover:text-sunset-orange transition-colors mb-2">
                  Amboseli
                </h3>
                <p className="text-safari-brown/80 font-body text-sm leading-relaxed">
                  Over 1,600 free-ranging elephants striding across dry lakebeds
                  and emerald swamps beneath Mount Kilimanjaro&apos;s glaciers — just
                  45 minutes from the Tanzania border.
                </p>
              </Link>

              <Link href="/destinations/tsavo" className="group cursor-pointer block">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-surface-container-low mb-4">
                  <Photo className="w-full h-full group-hover:scale-110 transition-transform duration-700" fill sizes="(max-width: 768px) 100vw, 25vw" src={tsavoImg} />
                </div>
                <h3 className="font-headline font-bold text-2xl text-safari-brown group-hover:text-sunset-orange transition-colors mb-2">
                  Tsavo East &amp; West
                </h3>
                <p className="text-safari-brown/80 font-body text-sm leading-relaxed">
                  Kenya&apos;s largest wilderness between Nairobi and Mombasa:
                  red-dusted elephants along the Galana River, Shetani lava flows,
                  and crystal-clear Mzima Springs on custom routes.
                </p>
              </Link>

              <Link href="/destinations/ol-pejeta" className="group cursor-pointer pt-12 block">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-surface-container-low mb-4">
                  <Photo className="w-full h-full group-hover:scale-110 transition-transform duration-700" fill sizes="(max-width: 768px) 100vw, 25vw" src={olPejetaImg} />
                </div>
                <h3 className="font-headline font-bold text-2xl text-safari-brown group-hover:text-sunset-orange transition-colors mb-2">
                  Ol Pejeta Conservancy
                </h3>
                <p className="text-safari-brown/80 font-body text-sm leading-relaxed">
                  Laikipia&apos;s pioneering Big Five conservancy protecting East
                  Africa&apos;s largest black rhino stronghold, the last two northern
                  white rhinos, and Kenya&apos;s only chimpanzee sanctuary.
                </p>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-[80px] space-y-12">
            <div className="bg-surface-container-low/85 p-8 md:p-10 rounded-2xl">
              <span className="font-body font-bold text-xs uppercase tracking-widest text-sunset-orange mb-4 block">
                Kenya Entry &amp; Park Fees
              </span>
              <h2 className="font-headline font-bold text-3xl text-safari-brown mb-6">
                Essential Logistics Before You Fly
              </h2>
              <ul className="space-y-5 font-body text-sm text-safari-brown/85">
                <li>
                  <p className="font-semibold text-midnight-black mb-1">
                    Kenya eTA (Electronic Travel Authorisation)
                  </p>
                  <p>
                    Most international visitors must apply online at least 3–5
                    working days before arriving at JKIA. Keep a printed or PDF
                    approval ready at check-in.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-midnight-black mb-1">
                    Seasonal Masai Mara Conservation Fees
                  </p>
                  <p>
                    Narok County charges lower non-resident Masai Mara entry fees
                    from January 1 to June 30 and doubles them July 1 to December 31
                    — explaining the low vs high season price gap.
                  </p>
                </li>
                <li>
                  <p className="font-semibold text-midnight-black mb-1">
                    Combining Kenya With Tanzania or Diani Beach
                  </p>
                  <p>
                    Add our{" "}
                    <Link href="/safari/half-day-nairobi-tour" className="font-bold text-sunset-orange hover:underline">
                      Nairobi Half-Day Tour
                    </Link>{" "}
                    for layovers, connect from Amboseli onto the Emali SGR train
                    to Mombasa/Diani, or cross at Namanga on our{" "}
                    <Link href="/safaris/combined" className="font-bold text-sunset-orange hover:underline">
                      10–12 day Kenya &amp; Tanzania safaris
                    </Link>
                    .
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-body font-bold text-xs uppercase tracking-widest text-sunset-orange mb-4 block">
                People &amp; Landscapes
              </span>
              <h2 className="font-headline font-bold text-3xl text-safari-brown mb-6">
                Maasai Cultural Visits &amp; Rift Valley Lakes
              </h2>
              <p className="text-safari-brown/85 font-body leading-relaxed mb-6">
                Beyond 4x4 game drives, every Masai Mara and Amboseli package offers
                an optional US$20 visit to a neighbouring Maasai manyatta, while
                Rift Valley itineraries add freshwater hippo cruises at Lake
                Naivasha and cycling among zebras in Hell&apos;s Gate.
              </p>
              <div className="flex -space-x-4 overflow-hidden">
                <Photo alt="" className="inline-block h-16 w-16 rounded-full ring-4 ring-sand-cream" src={P.lionessFace.src} focus="50% 38%" />
                <Photo alt="" className="inline-block h-16 w-16 rounded-full ring-4 ring-sand-cream" src={P.leopardRockTall.src} focus="40% 25%" />
                <Photo alt="" className="inline-block h-16 w-16 rounded-full ring-4 ring-sand-cream" src={P.elephantDust.src} focus="35% 55%" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low/70 border-y border-safari-brown/12 py-24 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="font-body font-bold text-xs uppercase tracking-widest text-sunset-orange mb-4 block">
                Timing Your Kenya Trip
              </span>
              <h2 className="font-headline font-bold text-4xl md:text-5xl text-safari-brown">
                Best Seasons to Visit Kenya
              </h2>
            </div>
            <div className="h-px flex-1 bg-safari-brown/15 hidden md:block mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border-t border-safari-brown/15 pt-7">
              <div className="flex justify-between items-center mb-5">
                <h3 className="font-headline font-bold text-2xl text-safari-brown">
                  Dry &amp; Migration Peak
                </h3>
                <span className="font-body font-bold text-xs px-4 py-1.5 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black rounded-full uppercase tracking-wider">
                  July – October
                </span>
              </div>
              <p className="text-safari-brown/85 font-body leading-relaxed">
                Cool, dry mornings and clear Kilimanjaro views in Amboseli
                coincide with over a million wildebeest and zebra crossing into
                the Masai Mara. Book early if travelling July–September, when
                high-season park fees and camp demand peak.
              </p>
            </div>
            <div className="border-t border-safari-brown/15 pt-7">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-headline font-bold text-2xl text-safari-brown">
                  Value &amp; Green Season
                </h3>
                <span className="font-body font-bold text-xs px-4 py-1.5 bg-safari-brown text-sunrise-yellow rounded-full uppercase tracking-wider">
                  January – June
                </span>
              </div>
              <p className="text-safari-brown/85 font-body leading-relaxed">
                January to March offers warm dry mornings, short green grass,
                calving plains game, and dramatically lower low-season Mara rates.
                April and May bring afternoon rains, lush backdrops, migratory
                birds, and the quietest tracks of the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 md:px-16 lg:px-24 bg-sand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="font-body font-bold text-xs uppercase tracking-widest text-sunset-orange mb-2 block">
                Kenya Safari Packages &amp; Parks
              </span>
              <h2 className="font-headline font-bold text-3xl md:text-4xl text-safari-brown">
                Published Kenya Safaris from Nairobi
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5 text-xs font-body">
              {[
                { label: "Masai Mara", to: "/destinations/masai-mara" },
                { label: "Amboseli", to: "/destinations/amboseli" },
                { label: "Lake Nakuru", to: "/destinations/lake-nakuru" },
                { label: "Lake Naivasha", to: "/destinations/lake-naivasha" },
                { label: "Hell's Gate", to: "/destinations/hells-gate" },
                { label: "Nairobi National Park", to: "/destinations/nairobi-national-park" },
                { label: "Ol Pejeta", to: "/destinations/ol-pejeta" },
                { label: "Tsavo", to: "/destinations/tsavo" },
              ].map((park) => (
                <Link
                  key={park.to}
                  href={park.to}
                  className="px-3.5 py-1.5 rounded-full bg-surface-container-low font-bold text-safari-brown hover:bg-safari-brown hover:text-sand-cream transition-colors"
                >
                  {park.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {kenyaPackages.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/safari/${pkg.slug}`}
                className="bg-surface-container-lowest border border-safari-brown/10 rounded-xl p-5 hover:border-safari-brown/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-sunset-orange mb-1">
                    {pkg.days} Days
                  </p>
                  <h3 className="font-headline font-bold text-base text-safari-brown mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-safari-brown/75 mb-3">
                    {pkg.destinations.join(" · ")}
                  </p>
                </div>
                <p className="text-sm font-bold text-safari-brown pt-3 border-t border-safari-brown/10">
                  From {usd(pkg.price.low)} low / {usd(pkg.price.high)} high
                </p>
              </Link>
            ))}
          </div>

          <FaqSection
            faqs={faqs}
            title="Kenya safaris: questions and answers"
            className="max-w-4xl"
          />
        </div>
      </section>

      <section className="relative py-32 px-8 overflow-hidden bg-midnight-black">
        <Photo className="w-full h-full" fill sizes="100vw" src={bannerImg} focus="70% 90%" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25"></div>
        <div className="relative z-10 text-center text-sand-cream max-w-3xl mx-auto">
          <p className="font-script text-3xl md:text-4xl text-sunrise-yellow italic mb-4">
            Wild by Nature. Guided by Heart.
          </p>
          <h2 className="font-headline font-bold text-4xl md:text-6xl mb-10 leading-tight text-sand-cream">
            Start Your Kenya Safari From Nairobi
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/safaris/kenya"
              className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-10 py-4 rounded-full font-body font-bold text-sm uppercase tracking-wider hover:brightness-105 transition-all shadow-xl inline-flex items-center gap-2"
            >
              Explore Kenya Trips <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-plan border-2 border-savannah-gold text-sand-cream hover:bg-savannah-gold/15 px-10 py-4 rounded-full font-body font-semibold text-sm uppercase tracking-wider transition-all inline-flex items-center gap-2"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
