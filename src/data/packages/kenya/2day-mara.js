import { PHOTOS } from "../../photos";

const heroImg = PHOTOS.lionPack.src;

export const package2DayMara = {
  id: "2-day-mara",
  slug: "2-day-masai-mara-overnight-budget",
  title: "2-Day Masai Mara Budget Safari",
  subtitle:
    "One night in the Masai Mara with game drives on both days, by road from Nairobi.",
  days: 2,
  country: "kenya",
  destinations: ["Masai Mara"],
  price: { low: 407, high: 603 },
  singlePrice: { low: 421, high: 611 },
  image: heroImg,
  difficulty: "Budget",
  highlights: [
    "Panoramic Great Rift Valley viewpoint stop",
    "Golden-hour evening game drive in the Masai Mara",
    "Chance to spot lions, cheetahs, elephants & huge wildebeest herds",
    "Authentic Maasai village cultural visit",
    "Perfect short safari for travellers with limited time",
  ],
  included: [
    "Shared 4x4 safari Land Cruiser with pop-up roof (max 7 people per vehicle)",
    "Professional English-speaking driver/guide",
    "1 night at Miti Mingi Eco Camp (budget tented camp)",
    "Meals as per itinerary & drinking water",
    "Masai Mara park entry fees (non-residents) & all taxes/VAT",
    "Roundtrip airport / Nairobi hotel transfer",
  ],
  excluded: [
    "International flights and visas",
    "Additional accommodation before and after the tour",
    "Tips (guideline US$10 per person per day)",
    "Personal items (souvenirs, travel insurance, drinks)",
    "Government-imposed increases of taxes and/or park fees",
  ],
  optionalActivities: [
    { name: "Maasai Village Visit", price: 20 },
    { name: "Balloon Safaris", price: 480 },
  ],
  accommodation: {
    budget: "Miti Mingi Eco Camp",
  },
  itinerary: [
    {
      day: 1,
      title: "Rift Valley Views & Evening Game Drive",
      description:
        "Starting from Nairobi, we travel west towards the Masai Mara, enjoying beautiful views of the Great Rift Valley escarpments. Our first stop is a viewpoint overlooking the expansive valley floor below, and our second is in Narok town for a hot lunch before continuing to the camp.\n\nAfter checking in and freshening up, we head out on an evening game drive across the Mara's golden savannah – prime time for lions, cheetahs, elephants, giraffes and vast herds of zebra and wildebeest. Dinner and overnight at our fully furnished camp with hot showers and buffet meals.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      highlights: [
        "Great Rift Valley viewpoint",
        "Lunch stop in Narok",
        "Evening game drive in the Mara",
      ],
    },
    {
      day: 2,
      title: "Maasai Culture & Return to Nairobi",
      description:
        "After an early breakfast, explore Maasai culture with a visit to a traditional Maasai village and take in the rolling hills of the savannah one last time. We then depart the Masai Mara, with lunch provided en route, arriving in Nairobi in the late afternoon for drop-off at your hotel or the airport.",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      highlights: [
        "Traditional Maasai village visit",
        "Scenic drive back to Nairobi",
      ],
    },
  ],
};
