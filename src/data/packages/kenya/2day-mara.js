import { PHOTOS } from "../../photos";

const heroImg = PHOTOS.masaiMaraMaleLion.src;

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
    "Panoramic Great Rift Valley escarpment viewpoint stop",
    "Golden-hour evening game drive in the Masai Mara",
    "Dawn morning game drive when lions and cheetahs are most active",
    "Optional authentic Maasai village cultural visit",
    "Ideal short overland safari from Nairobi for tight schedules",
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
      title: "Nairobi to Masai Mara via Rift Valley & Evening Game Drive",
      description:
        "Your driver-guide picks you up from your Nairobi hotel, City Market meeting point, or Jomo Kenyatta International Airport between 07:30 and 08:00 in a shared pop-up roof 4x4 safari Land Cruiser (maximum 7 guests, guaranteed window seat). Climbing out of the highlands past Limuru's tea estates, you pause at the Great Rift Valley escarpment viewpoint overlooking Mount Longonot and the volcanic valley floor before descending through Mai Mahiu.\n\nA hot Kenyan buffet lunch is served in Narok town, the main Maasai trading hub on the edge of the Loita Plains, before you continue along the Sekenani approach road to Miti Mingi Eco Camp near Ololaimutiek Gate. After checking into your en-suite canvas tent with hot shower and flushing toilet, you enter the Masai Mara National Reserve around 15:30 for a golden-hour evening game drive until 18:30 — prime hours when lions stir from shade and cheetahs scan the open plains for Thomson's gazelle and zebra.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      highlights: [
        "Great Rift Valley escarpment viewpoint",
        "Hot lunch stop in Narok town",
        "Golden-hour evening game drive in the Mara",
      ],
    },
    {
      day: 2,
      title: "Early Morning Mara Game Drive, Optional Maasai Village & Return to Nairobi",
      description:
        "Rise at dawn for tea or coffee and head back into the Masai Mara National Reserve by 06:30 when temperatures are cool and big cats are still active along the Talek and Sekenani river corridors. This focused morning game drive maximizes your chances of watching lion prides, spotted hyena returning to dens, black-backed jackals, and family herds of elephants browsing acacia woodland before returning to Miti Mingi Eco Camp for a full hot breakfast.\n\nBefore leaving the Mara ecosystem, guests who add the optional US$20 Maasai village cultural visit meet elders and women at a nearby manyatta to learn about traditional beadwork, fire-making, and pastoral life. You then depart east via Narok with a hot lunch stop en route, reaching Nairobi in the late afternoon (typically 17:00–18:00) for drop-off at your hotel, residence, or JKIA.",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      highlights: [
        "Sunrise morning game drive for active predators",
        "Optional Maasai village visit ($20/pp)",
        "Scenic afternoon return to Nairobi",
      ],
    },
  ],
};
