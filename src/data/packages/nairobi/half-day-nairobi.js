import genImg_0 from "../../../assets/lion-lonely.jpeg";
import genImg_1 from "../../../assets/nairobi/sunset-exotic.jpeg";
import nairobiGiraffeCity from "../../../assets/nairobi/girafe-nairobi-city.jpeg";
import nairobiLionVan from "../../../assets/nairobi/lion-safari-van.jpeg";

export const packageHalfDayNairobi = {
  id: "half-day-nairobi",
  slug: "half-day-nairobi-tour",
  title: "Half Day Trip in Nairobi - The Ultimate Quick Escape",
  subtitle:
    "Experience the vibrant heart of Kenya's capital with this action-packed, quick Nairobi city experience. Perfect for layovers, business travelers, or anyone craving a taste of the 'Green City in the Sun'.",
  days: 0.5,
  country: "kenya",
  destinations: ["Nairobi"],
  price: { low: 150, high: 150 },
  image: nairobiGiraffeCity,
  gallery: [genImg_0, genImg_1],
  difficulty: "Budget",
  highlights: [
    "Comprehensive Nairobi City Tour",
    "Explore iconic cultural and historical sites",
    "Perfect quick getaway for transit travelers",
    "Immersive local Kenyan experience and markets",
    "Capture breathtaking photography of urban wildlife",
  ],
  included: [
    "Professional, English-speaking local tour guide",
    "Comfortable, air-conditioned transportation",
    "Curated city highlights and cultural tour",
    "Unlimited photo opportunities and guided stops",
    "Bottled drinking water during the tour",
  ],
  excluded: [
    "Meals and dining expenses",
    "Entry fees to premium museums and wildlife parks (optional)",
    "Personal shopping and souvenirs",
    "Tips and gratuities for your expert guide",
  ],
  accommodation: null,
  itinerary: [
    {
      day: 1,
      title: "The Ultimate Half-Day Nairobi City Explorer Tour",
      description:
        "Maximize your time in Kenya with our sensational half-day tour of Nairobi city! Dive deep into the vibrant culture, rich history, and bustling energy of East Africa's most dynamic metropolis. We'll whisk you through the beating heart of the city center, revealing hidden gems, iconic cultural sites, lively local markets, and monumental landmarks you simply can't miss. Specially designed for discerning travelers with limited time or those on a quick transit layover, this unforgettable excursion guarantees a profound connection with Nairobi's unique spirit without demanding a full day's commitment. Don't just pass through-experience the magic of Nairobi!",
      destination: "Nairobi",
      meals:
        "None (Optional stops for authentic local cuisine or premium coffee can be arranged)",
      accommodation: null,
      image: nairobiLionVan,
      highlights: [
        "Iconic Nairobi City landmarks and skyline",
        "Deep dive into Kenyan cultural sites",
        "Vibrant Maasai markets and local bazaars",
        "Unforgettable photo opportunities",
      ],
    },
  ],
};
