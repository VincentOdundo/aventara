import Link from "next/link";
import { ArrowRight, Sun, CloudRain } from "lucide-react";
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

const heroImg = P.elephantKiliRight.src;
const kiliImg = P.kilimanjaro.src;
const migrationImg = P.wildebeest.src;
const lionImg = P.lionessYawn.src;
const leopardImg = P.leopardRockTall.src;
const elephantImg = P.elephantDust.src;
const rhinoImg = P.rhinosTall.src;
const drySeasonImg = P.giraffeSunset.src;
const greenSeasonImg = P.lionPack.src;
const cultureImg1 = P.leopardVan.src;
const cultureImg2 = P.egretShore.src;

const title = "Tanzania Safari Guide: Serengeti, Ngorongoro & Budget Trips";
const description =
  "Northern Tanzania safaris from 3 to 6 days: Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara, starting in Arusha.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/tanzania",
  imageAlt: "Tanzania northern circuit safari plains below Mount Kilimanjaro",
});

export default function TanzaniaPage() {
  const crumbs = pageCrumbs("Tanzania Safari Guide", "/tanzania");
  const breadcrumb = breadcrumbLd(crumbs, "/tanzania");
  const faqs = countryFaqs("tanzania");
  const tanzaniaPackages = allPackages.tanzania;

  const ld = graph(
    webPageLd({
      path: "/tanzania",
      title,
      description,
      image: heroImg,
      breadcrumbId: breadcrumb["@id"],
    }),
    breadcrumb,
    safariListLd(tanzaniaPackages, "Tanzania Budget Safari Packages"),
    faqLd(faqs),
  );

  return (
    <div className="bg-sand-cream text-midnight-black font-body">
      <JsonLd id="page-jsonld" data={ld} />

      <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-center bg-midnight-black">
        <Photo className="absolute inset-0 w-full h-full z-0" fill priority src={heroImg} />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/25 z-10"></div>
        <div className="relative z-20 max-w-screen-2xl mx-auto w-full px-8">
          <span className="inline-block py-2 px-5 bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md text-sunrise-yellow font-body font-bold text-xs uppercase tracking-[0.25em] leading-normal rounded-full mb-6">
            Northern Circuit Field Guide
          </span>
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-sand-cream font-bold -tracking-[0.03em] leading-tight max-w-4xl">
            Tanzania Safari Guide
          </h1>
          <p className="text-sand-cream/90 font-body text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
            Everything you need to plan an Arusha-based Northern Circuit safari
            across the Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara
            — or cross overland from Kenya.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/safaris/tanzania"
              className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-body font-bold rounded-full px-8 py-4 shadow-lg hover:brightness-105 transition-all inline-flex items-center gap-2"
            >
              Tanzania Safari Packages <ArrowRight size={16} />
            </Link>
            <Link
              href="/safaris/combined"
              className="btn-destinations bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream border border-savannah-gold/30 font-body font-semibold rounded-full px-8 py-4 hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              Kenya &amp; Tanzania Combined <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn-plan border-2 border-savannah-gold text-sand-cream hover:bg-savannah-gold/15 font-body font-semibold rounded-full px-8 py-4 transition-all inline-flex items-center gap-2"
            >
              Request a Quote
            </Link>
          </div>
          <Breadcrumbs crumbs={crumbs} tone="light" className="mt-6" />
        </div>
      </section>

      <section className="py-24 px-8 max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7">
            <span className="text-sunset-orange font-body font-bold uppercase tracking-widest text-xs mb-4 block">
              Northern Circuit Overview
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-safari-brown font-bold mb-6 leading-tight">
              How Northern Tanzania&apos;s Four Parks Connect
            </h2>
            <div className="space-y-5 text-safari-brown/90 text-base leading-relaxed font-body">
              <p data-speakable="true">
                Over a third of Tanzania&apos;s landmass is protected for
                wildlife conservation, and the Northern Circuit out of Arusha
                concentrates four world-class ecosystems along a single scenic
                corridor.{" "}
                <Link href="/destinations/tarangire" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                  Tarangire National Park
                </Link>{" "}
                and{" "}
                <Link href="/destinations/lake-manyara" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                  Lake Manyara
                </Link>{" "}
                sit just two hours west of Arusha, making ideal Day 1 openers or
                final-morning stops before climbing the Rift Valley wall to the{" "}
                <Link href="/destinations/ngorongoro" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                  Ngorongoro Crater
                </Link>{" "}
                rim (3.5 hours) and descending onto the vast plains of{" "}
                <Link href="/destinations/serengeti" className="font-bold text-safari-brown underline decoration-savannah-gold hover:text-sunset-orange">
                  Serengeti National Park
                </Link>{" "}
                (6–7 hours from Arusha).
              </p>
              <p>
                Because TANAPA park conservation fees in Tanzania are higher than
                in Kenya, our published 3-to-6-day budget itineraries use
                full-service wilderness camping at Nyani Camp (central Serengeti)
                and Simba Campsite (Ngorongoro rim) with a private camp chef
                preparing hot meals — keeping prices honest ($650 to $1,650 per
                person) while keeping you inside the parks at dawn and dusk. Lodge
                upgrades are quoted on request.
              </p>
              <p>
                Arriving via Kilimanjaro International Airport (JRO) puts you
                roughly one hour from Arusha, while travellers flying into Nairobi
                can join our{" "}
                <Link href="/safaris/combined" className="font-bold text-sunset-orange hover:underline">
                  10-to-12-day Kenya &amp; Tanzania overland itineraries
                </Link>{" "}
                crossing directly at Namanga after Amboseli.
              </p>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-low relative overflow-hidden rounded-2xl shadow-lg">
              <Photo className="w-full h-full scale-110" fill sizes="(max-width: 768px) 100vw, 40vw" src={kiliImg} />
            </div>

            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-safari-brown flex items-center justify-center p-8 rounded-full border-4 border-sand-cream shadow-xl hidden lg:flex">
              <p className="text-sunrise-yellow text-center font-headline italic text-lg leading-tight">
                Arusha to Serengeti &amp; Crater.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low/70 border-y border-safari-brown/12 py-24 px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-sunset-orange font-body font-bold uppercase tracking-widest text-xs mb-3 block">
              Big Five &amp; Migration
            </span>
            <h2 className="font-headline text-4xl md:text-5xl text-safari-brown font-bold mb-6">
              Wildlife Across Tanzania&apos;s Northern Circuit
            </h2>
            <p className="text-safari-brown/85 font-body">
              Serengeti&apos;s permanent Seronera rivers hold dense resident prides
              of lions, leopards, and cheetahs year-round, Ngorongoro Crater
              shelters northern Tanzania&apos;s most reliable black rhinos, and
              Tarangire draws hundreds of elephants along its dry season riverbed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
            <Link
              href="/destinations/serengeti"
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl cursor-pointer min-h-[280px]"
            >
              <Photo
                className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src={migrationImg}
                focus="52% 55%"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/15 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="font-headline text-3xl text-sand-cream font-bold mb-2">
                  Serengeti &amp; The Great Migration
                </h3>
                <p className="text-sand-cream/85 font-body text-sm max-w-md">
                  Over two million wildebeest, zebras, and gazelles circle Serengeti
                  year-round — from February southern calving to July–October
                  northern river crossings.
                </p>
              </div>
            </Link>

            {[
              { img: lionImg, label: "Seronera Lions" },
              { img: leopardImg, label: "Kopje Leopards" },
              { img: elephantImg, label: "Tarangire Elephants" },
              { img: rhinoImg, label: "Ngorongoro Rhinos" },
            ].map((item) => (
              <div key={item.label} className="group relative overflow-hidden rounded-2xl min-h-[220px]">
                <Photo
                  className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  src={item.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/55 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-sunrise-yellow font-body font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-safari-brown/80 border border-savannah-gold/40 backdrop-blur-md">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-8 max-w-screen-xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl text-safari-brown font-bold mb-16 text-center">
          Best Times to Visit Tanzania
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-savannah-gold/40 hidden md:block"></div>
          <div className="space-y-20">
            <div className="relative flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 md:text-right">
                <span className="text-sunset-orange font-body font-bold uppercase tracking-widest text-xs mb-2 block">
                  June – October
                </span>
                <h3 className="font-headline text-3xl text-safari-brown font-bold mb-4">
                  The Long Dry Season
                </h3>
                <p className="text-safari-brown/85 font-body leading-relaxed">
                  Thinned vegetation and shrinking rivers concentrate elephant
                  herds along the Tarangire River and predators across central
                  Seronera, while the Great Migration pushes into the northern
                  Serengeti toward the Mara River.
                </p>
              </div>
              <div className="relative z-10 w-12 h-12 bg-gradient-to-b from-sunrise-yellow to-savannah-gold rounded-full border-4 border-sand-cream flex items-center justify-center shrink-0 shadow-md">
                <Sun size={20} className="text-midnight-black" />
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video relative bg-surface-container-low rounded-2xl overflow-hidden shadow-md">
                  <Photo className="w-full h-full" fill sizes="(max-width: 768px) 100vw, 50vw" src={drySeasonImg} />
                </div>
              </div>
            </div>

            <div className="relative flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2 text-left">
                <span className="text-sunset-orange font-body font-bold uppercase tracking-widest text-xs mb-2 block">
                  December – May
                </span>
                <h3 className="font-headline text-3xl text-safari-brown font-bold mb-4">
                  Calving &amp; Green Season
                </h3>
                <p className="text-safari-brown/85 font-body leading-relaxed">
                  From January through March, hundreds of thousands of wildebeest
                  calve on the southern Serengeti short-grass plains, triggering
                  intense cheetah and lion activity at low-season package prices
                  — followed by lush green skies and migratory birdlife in April
                  and May.
                </p>
              </div>
              <div className="relative z-10 w-12 h-12 bg-safari-brown rounded-full border-4 border-sand-cream flex items-center justify-center shrink-0 shadow-md">
                <CloudRain size={20} className="text-sunrise-yellow" />
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video relative bg-surface-container-low rounded-2xl overflow-hidden shadow-md">
                  <Photo className="w-full h-full" fill sizes="(max-width: 768px) 100vw, 50vw" src={greenSeasonImg} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-midnight-black via-safari-brown to-midnight-black text-sand-cream py-24 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 w-full aspect-[3/4] rounded-2xl overflow-hidden editorial-shadow rotate-3 scale-95 origin-bottom-right border border-savannah-gold/30">
              <Photo className="w-full h-full" fill sizes="(max-width: 768px) 100vw, 45vw" src={cultureImg1} focus="50% 40%" />
            </div>
            <div className="absolute -top-10 -right-10 w-2/3 aspect-square rounded-2xl overflow-hidden border-[10px] border-savannah-gold/30 -rotate-6 z-0">
              <Photo className="w-full h-full" fill sizes="30vw" src={cultureImg2} />
            </div>
          </div>
          <div>
            <span className="text-sunrise-yellow font-body font-bold uppercase tracking-widest text-xs mb-6 block">
              Practical Tanzania Logistics
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8 leading-tight italic text-sand-cream">
              Visas, Rim Temperatures &amp; Zanzibar Connections
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-headline font-bold text-xl mb-2 text-sunrise-yellow">
                  Tanzania e-Visa &amp; Yellow Fever Rules
                </h3>
                <p className="font-body text-sand-cream/85 leading-relaxed text-sm">
                  Apply online for a Tanzania Tourist e-Visa ahead of travel (or
                  obtain visa on arrival at Kilimanjaro Airport or Namanga).
                  Anyone crossing overland from Kenya must carry a valid
                  international Yellow Fever certificate.
                </p>
              </div>
              <div className="h-px bg-savannah-gold/20 w-full"></div>
              <div>
                <h3 className="font-headline font-bold text-xl mb-2 text-sunrise-yellow">
                  Ngorongoro Highlands &amp; Onward Zanzibar Flights
                </h3>
                <p className="font-body text-sand-cream/85 leading-relaxed text-sm">
                  Pack a warm fleece for chilly nights at 2,300 metres on the
                  Ngorongoro Crater rim. After returning to Arusha, daily direct
                  flights from Arusha Airport (ARK) and Kilimanjaro (JRO) reach
                  Zanzibar&apos;s beaches in roughly 75 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <span className="text-sunset-orange font-body font-bold uppercase tracking-widest text-xs mb-2 block">
              Tanzania Safari Packages &amp; Parks
            </span>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-safari-brown">
              Published Northern Circuit Safaris
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 text-xs font-body">
            {[
              { label: "Serengeti", to: "/destinations/serengeti" },
              { label: "Ngorongoro Crater", to: "/destinations/ngorongoro" },
              { label: "Tarangire", to: "/destinations/tarangire" },
              { label: "Lake Manyara", to: "/destinations/lake-manyara" },
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
          {tanzaniaPackages.map((pkg) => (
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
          title="Tanzania safaris: questions and answers"
          className="max-w-4xl"
        />
      </section>

      <section className="py-28 px-8 text-center bg-sand-cream relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-script text-3xl text-sunset-orange italic mb-3">
            Wild by Nature. Guided by Heart.
          </p>
          <h2 className="font-headline text-4xl md:text-5xl text-safari-brown font-bold mb-6">
            Ready for Northern Tanzania?
          </h2>
          <p className="text-safari-brown/80 text-lg font-body mb-10">
            Compare our Arusha-based 3-to-6-day Northern Circuit packages or
            combine both countries overland from Nairobi.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
            <Link
              href="/safaris/tanzania"
              className="btn-explore bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black px-10 py-4 rounded-full font-body font-bold text-base hover:brightness-105 transition-all shadow-xl inline-flex items-center gap-2"
            >
              Explore Tanzania Trips <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="btn-plan bg-transparent border-2 border-savannah-gold text-midnight-black px-10 py-4 rounded-full font-body font-bold text-base hover:bg-savannah-gold/15 transition-colors inline-flex items-center gap-2"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
