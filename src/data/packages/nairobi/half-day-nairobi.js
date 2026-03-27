import nairobiGiraffeCity from "../../../assets/nairobi/girafe-nairobi-city.jpeg";
import nairobiLionVan from "../../../assets/nairobi/lion-safari-van.jpeg";
import nairobiLionClose from "../../../assets/nairobi/lion-safari.jpeg";
import nairobiSunset from "../../../assets/nairobi/sunset-exotic.jpeg";
import nairobiBird from "../../../assets/nairobi/bird-exotic.jpeg";

export const packageHalfDayNairobi = {
  id: "half-day-nairobi",
  slug: "half-day-nairobi-tour",
  title: "Half Day Trip in Nairobi",
  subtitle: "Quick Nairobi city experience",
  days: 0.5,
  country: "kenya",
  destinations: ["Nairobi"],
  price: { low: 150, high: 150 },
  image: nairobiGiraffeCity,
  gallery: [nairobiLionVan, nairobiLionClose, nairobiSunset, nairobiBird],
  difficulty: "Budget",
  highlights: [
    "City tour",
    "Cultural sites",
    "Quick getaway",
    "Local experience",
  ],
  included: [
    "Professional tour guide",
    "Transportation",
    "City highlights tour",
    "Photo opportunities",
  ],
  excluded: [
    "Meals",
    "Entry fees to museums (optional)",
    "Personal shopping",
    "Tips and gratuities",
  ],
  accommodation: null,
  itinerary: [
    {
      day: 1,
      title: "Half-Day Nairobi City Tour",
      description:
        "Enjoy a quick but comprehensive half-day tour of Nairobi city. Visit key landmarks including the city center, cultural sites, markets, and local attractions. Perfect for travelers with limited time or those in transit.",
      destination: "Nairobi",
      meals: "None",
      accommodation: null,
      image: nairobiLionVan,
      highlights: [
        "City landmarks",
        "Cultural sites",
        "Local markets",
        "Photo opportunities",
      ],
    },
  ],
};
