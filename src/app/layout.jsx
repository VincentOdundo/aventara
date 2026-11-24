import "./globals.css";
import { Cinzel, Inter, Montserrat, Caveat } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { WhatsAppFloat } from "../components/ui/WhatsAppCTA";
import { JsonLd } from "../components/seo/JsonLd";
import { ORG_ID, SITE_NAME, SITE_URL, WEBSITE_ID, ogImageUrl, usd } from "../lib/seo";
import { CONTACT_EMAIL, safariPackages } from "../data/safaris";
import { BRAND_ALTERNATE_NAMES, BRAND_NAME, PHONE_DISPLAY, SOCIAL_LINKS } from "../data/company";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const viewport = {
  themeColor: "#2A1500",
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND_NAME,
  title: {
    default: "Cima Brava Adventures Safaris — Kenya & Tanzania Budget Safaris",
    template: "%s | Cima Brava Adventures",
  },
  description:
    "Shared and private 4x4 safaris across Kenya and Tanzania. Published per-person prices include park fees, accommodation, meals and transfers.",
  authors: [{ name: SITE_NAME }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    types: {
      "text/plain": "/llms.txt",
    },
  },
};

function globalOrgGraph() {
  const prices = safariPackages.flatMap((p) => [p.price.low, p.price.high]);
  const priceRange = `${usd(Math.min(...prices))} - ${usd(Math.max(...prices))}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": ORG_ID,
        name: BRAND_NAME,
        alternateName: BRAND_ALTERNATE_NAMES,
        brand: {
          "@type": "Brand",
          "@id": `${SITE_URL}/#brand`,
          name: "Cima Brava",
          alternateName: BRAND_ALTERNATE_NAMES,
          slogan: "Wild by Nature. Guided by Heart.",
          logo: `${SITE_URL}/favicon.png`,
        },
        slogan: "Wild by Nature. Guided by Heart.",
        url: `${SITE_URL}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/favicon.png`,
        },
        image: ogImageUrl("/"),
        email: CONTACT_EMAIL,
        telephone: PHONE_DISPLAY.replace(/\s+/g, ""),
        currenciesAccepted: "USD",
        priceRange,
        description:
          "City Market, Nairobi operator running shared and private 4x4 safaris across Kenya and Tanzania.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "City Market",
          addressLocality: "Nairobi",
          addressCountry: "KE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -1.2836,
          longitude: 36.8195,
        },
        areaServed: [
          { "@type": "Country", name: "Kenya" },
          { "@type": "Country", name: "Tanzania" },
        ],
        knowsAbout: [
          "Kenya Budget Safaris",
          "Tanzania Northern Circuit Safaris",
          "Masai Mara National Reserve",
          "Serengeti National Park",
          "Ngorongoro Crater",
          "Amboseli National Park",
          "Great Wildebeest Migration",
          "4x4 Safari Departures from Nairobi",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: PHONE_DISPLAY.replace(/\s+/g, ""),
          email: CONTACT_EMAIL,
          contactType: "reservations",
          availableLanguage: ["English", "Swahili"],
          areaServed: ["KE", "TZ"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        },
        sameAs: [
          SOCIAL_LINKS.tiktok,
          SOCIAL_LINKS.instagram,
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.tripadvisor,
          (process.env.NEXT_PUBLIC_GBP_URL || "").trim(),
          (process.env.NEXT_PUBLIC_BING_PLACES_URL || "").trim(),
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: BRAND_NAME,
        alternateName: [
          "Cima Brava",
          "Cima Brava Safaris",
          "Cima Brava Adventures",
          "Cima Brava Adventure Safaris",
        ],
        url: `${SITE_URL}/`,
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
        creator: {
          "@type": "Organization",
          name: "BYND/LABS",
          url: "https://bynd.co.ke/labs",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${SITE_URL}/safaris?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} ${montserrat.variable} ${caveat.variable}`}
    >
      <body className="flex flex-col min-h-screen bg-sand-cream text-midnight-black font-body antialiased">
        <JsonLd id="org-jsonld" data={globalOrgGraph()} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
