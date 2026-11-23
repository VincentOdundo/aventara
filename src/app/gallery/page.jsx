import Link from "next/link";
import { ArrowRight, Instagram } from "lucide-react";
import { buildMetadata } from "../../lib/metadata";
import { SITE_URL, breadcrumbLd, graph, imageGalleryLd, pageCrumbs, webPageLd } from "../../lib/seo";
import { PHOTOS as P } from "../../data/photos";
import { Photo } from "../../components/ui/Photo";
import { JsonLd } from "../../components/seo/JsonLd";
import { Section, AnimatedSection, Breadcrumbs } from "../../components/ui";
import { GalleryGrid } from "../../components/gallery/GalleryGrid";

const heroImg = P.elephantKiliLeft.src;

const galleryImages = [
  { src: P.elephantMud.src, image: P.elephantMud.image, caption: "African elephant raising its trunk", tall: true },
  { src: P.elephantKiliRight.src, image: P.elephantKiliRight.image, caption: "Bull elephant below Mount Kilimanjaro" },
  { src: P.flamingoPair.src, image: P.flamingoPair.image, caption: "Lesser flamingos feeding on a Rift Valley lake" },
  { src: P.lionMale.src, image: P.lionMale.image, caption: "Male lion in the long grass", tall: true },
  { src: P.lionPack.src, image: P.lionPack.image, caption: "Lion and lioness resting in the Mara grass" },
  { src: P.leopardTree.src, image: P.leopardTree.image, caption: "Leopard asleep on a tree branch" },
  { src: P.lionessYawn.src, image: P.lionessYawn.image, caption: "Lioness mid-yawn", tall: true },
  { src: P.kilimanjaro.src, image: P.kilimanjaro.image, caption: "Mount Kilimanjaro under a blue sky" },
  { src: P.nairobiGiraffes.src, image: P.nairobiGiraffes.image, caption: "Giraffes with the Nairobi skyline" },
  { src: P.rhinosFlamingos.src, image: P.rhinosFlamingos.image, caption: "White rhinos beside a lake of flamingos" },
  { src: P.lionVehicle.src, image: P.lionVehicle.image, caption: "Collared lion beside a safari vehicle" },
  { src: P.lionessFace.src, image: P.lionessFace.image, caption: "Lioness looking into the camera", tall: true },
];

const title = "East Africa Safari Photo Gallery";
const description =
  "Wildlife and landscape photos from Cima Brava safaris in the Masai Mara, Amboseli, Lake Nakuru, Nairobi National Park, Serengeti and Ngorongoro Crater.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/gallery",
  markdown: false,
  imageAlt: "East Africa safari photography gallery by Cima Brava Adventures",
});

export default function GalleryPage() {
  const crumbs = pageCrumbs("Gallery", "/gallery");
  const breadcrumb = breadcrumbLd(crumbs, "/gallery");
  const ld = graph(
    webPageLd({
      path: "/gallery",
      title,
      description,
      image: heroImg,
      type: "WebPage",
      mainEntityId: `${SITE_URL}/gallery#gallery`,
      breadcrumbId: breadcrumb["@id"],
    }),
    breadcrumb,
    imageGalleryLd(galleryImages),
  );

  return (
    <>
      <JsonLd id="page-jsonld" data={ld} />

      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-center bg-midnight-black">
        <Photo
          alt="Elephant walking across the plains below Mount Kilimanjaro"
          src={heroImg}
          fill
          priority
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-black/75 via-midnight-black/20 to-midnight-black/30"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center pt-20">
          <span className="text-xs uppercase tracking-[0.4em] text-sunrise-yellow font-bold mb-3 block">
            Our Moments
          </span>
          <h1 className="text-4xl md:text-6xl font-headline font-bold text-sand-cream tracking-[-0.02em]">
            Safari Gallery
          </h1>
          <p className="font-script italic text-3xl md:text-4xl text-sunrise-yellow mt-4">
            Wild by Nature. Guided by Heart.
          </p>
          <Breadcrumbs crumbs={crumbs} tone="light" className="mt-6" />
        </div>
      </section>

      <Section className="min-h-[100svh] py-16 md:py-24 flex flex-col justify-center bg-sand-cream text-midnight-black font-body">
        <AnimatedSection>
          <GalleryGrid images={galleryImages} />
        </AnimatedSection>

        <AnimatedSection className="mt-20 text-center bg-sand-cream border border-savannah-gold/30 rounded-3xl p-10 md:p-14 shadow-sm">
          <span className="text-xs uppercase tracking-[0.35em] text-sunset-orange font-bold block mb-3">
            Follow the Expedition
          </span>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-safari-brown mb-4">
            See More From the Bush
          </h2>
          <p className="text-safari-brown/80 max-w-xl mx-auto mb-8 font-body">
            Follow @cima_brava_adventures on Instagram and TikTok for daily wildlife
            sightings, golden hour drives, and behind-the-scenes safari stories.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/safaris"
              className="btn-explore inline-flex items-center gap-3 bg-gradient-to-b from-sunrise-yellow to-savannah-gold text-midnight-black font-bold px-8 py-3.5 rounded-full shadow-md hover:brightness-105 transition-all"
            >
              <span>Explore Trips</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://www.instagram.com/cima_brava_adventures?mdxt=MWQ1OHpkOWQ1bHZoaQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-destinations inline-flex items-center gap-2 bg-gradient-to-r from-midnight-black via-safari-brown to-midnight-black text-sand-cream font-semibold px-8 py-3.5 rounded-full shadow-md hover:brightness-110 transition-all"
            >
              <Instagram size={18} className="text-sunrise-yellow" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@cima_brava_adventures"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-plan inline-flex items-center gap-2 border-2 border-savannah-gold text-midnight-black bg-sand-cream font-bold px-8 py-3.5 rounded-full hover:bg-savannah-gold/15 transition-all"
            >
              <span>TikTok</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </AnimatedSection>
      </Section>
    </>
  );
}
