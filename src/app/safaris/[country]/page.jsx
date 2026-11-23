import { notFound } from "next/navigation";
import { buildMetadata } from "../../../lib/metadata";
import { SafarisHubView, hubMetaForCountry } from "../../../components/safaris/SafarisHubView";

const VALID_COUNTRIES = ["kenya", "tanzania", "combined"];
export const dynamicParams = false;

export function generateStaticParams() {
  return VALID_COUNTRIES.map((country) => ({ country }));
}

export async function generateMetadata({ params }) {
  const { country } = await params;
  if (!VALID_COUNTRIES.includes(country)) return {};
  const [title, description] = hubMetaForCountry(country);
  return buildMetadata({
    title,
    description,
    path: `/safaris/${country}`,
    imageAlt: `${title} — Cima Brava Adventures`,
  });
}

export default async function CountrySafarisPage({ params }) {
  const { country } = await params;
  if (!VALID_COUNTRIES.includes(country)) notFound();
  return <SafarisHubView country={country} />;
}
