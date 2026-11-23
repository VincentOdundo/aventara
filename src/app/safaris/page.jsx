import { buildMetadata } from "../../lib/metadata";
import { SafarisHubView, hubMetaForCountry } from "../../components/safaris/SafarisHubView";

const [title, description] = hubMetaForCountry(null);

export const metadata = buildMetadata({
  title,
  description,
  path: "/safaris",
  imageAlt: `${title} — Cima Brava Adventures`,
});

export default function SafarisPage() {
  return <SafarisHubView country={null} />;
}
