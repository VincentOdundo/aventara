import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_11 from "../../../assets/rhino_plain.jpeg";
import imgAsset_5 from "../../../assets/flamingo-water.jpeg";

export const package3DayAmboseli = {
  id: "3-day-amboseli",
  slug: "3-day-amboseli-budget",
  title: "Amboseli Budget Safari",
  subtitle: "In the Shadow of Kilimanjaro",
  days: 3,
  country: "kenya",
  destinations: ["Amboseli"],
  price: { low: 450, high: 650 },
  image: imgAsset_9,
  gallery: [imgAsset_11],
  difficulty: "Budget",
  highlights: [
    "Jumbo Elephants",
    "Mount Kilimanjaro views",
    "Diverse wildlife",
    "Swampy areas",
  ],
  included: [
    "Professional safari guide/driver",
    "Accommodation at Ositua Rafiki Camp",
    "Meals as per itinerary",
    "Park entry fees",
    "Game drives",
    "Transportation",
  ],
  excluded: [
    "International flights",
    "Personal expenses",
    "Tips and gratuities",
    "Travel insurance",
  ],
  accommodation: {
    budget: "Ositua Rafiki Camp",
  },
  itinerary: [
    {
      day: 1,
      title: "Transfer to Amboseli",
      description:
        "Pick up from hotel or airport at agreed time. Drive to Amboseli National Park, arriving in the evening. If time allows, enjoy an evening game drive until sunset. Amboseli is famous for its huge Jumbo Elephants and diverse wildlife.",
      destination: "Amboseli National Park",
      meals: "Dinner Only",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_9,
      highlights: [
        "Jumbo Elephants",
        "Evening game drive",
        "Wildlife introduction",
      ],
    },
    {
      day: 2,
      title: "Full-Day Amboseli Game Drive",
      description:
        "After breakfast and optional morning walk, head out for an early morning game drive. Explore swampy areas where elephants and hippos are often seen bathing. Enjoy stunning views of Mount Kilimanjaro as a breathtaking backdrop (weather permitting). Stop mid-day for picnic lunch, then head out for afternoon game drive.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_11,
      highlights: [
        "Mount Kilimanjaro views",
        "Elephants",
        "Hippos",
        "Picnic lunch",
      ],
    },
    {
      day: 3,
      title: "Amboseli – Nairobi",
      description:
        "Early breakfast, then packed picnic lunches for a morning game drive in the park. Traverse from Amboseli Kimana Gate to Amboseli Mashenani Gate with at least 2 hours of game drive. Exit the park and drive back to Nairobi, arriving late in the afternoon.",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Morning game drive",
        "Both gates traversal",
        "Return to Nairobi",
      ],
    },
  ],
};
