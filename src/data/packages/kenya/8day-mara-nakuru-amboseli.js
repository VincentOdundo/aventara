import imgAsset_1 from "../../../assets/cheater-safari.jpeg";
import imgAsset_3 from "../../../assets/elefant-vegetation.jpeg";
import imgAsset_5 from "../../../assets/flamingo-water.jpeg";
import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_11 from "../../../assets/rhino_plain.jpeg";

export const package8DayMaraNakuruAmboseli = {
  id: "8-day-mara-nakuru-amboseli",
  slug: "8-day-mara-nakuru-amboseli-budget",
  title: "8-Days Masai Mara, Lake Nakuru and Amboseli Budget Safari",
  subtitle: "Extended Kenyan adventure with multiple game drives",
  days: 8,
  country: "kenya",
  destinations: ["Masai Mara", "Lake Nakuru", "Amboseli"],
  price: { low: 1500, high: 1950 },
  image: imgAsset_9,
  gallery: [imgAsset_11, imgAsset_3, imgAsset_5],
  difficulty: "Budget",
  highlights: [
    "Two full days in Mara",
    "Rhino sanctuary",
    "Mount Kilimanjaro",
    "Elephant herds",
  ],
  included: [
    "Transportation in safari vehicle",
    "Professional guide/driver",
    "7 nights accommodation",
    "All meals as per itinerary",
    "Park entry fees",
    "Game drives",
    "Mount Kilimanjaro views",
  ],
  excluded: [
    "International flights",
    "Personal expenses",
    "Tips and gratuities",
    "Optional activities",
    "Travel insurance",
  ],
  accommodation: {
    mara: "Miti Mingi Eco Camp",
    nakuru: "Buraha Zenoni Hotel",
    amboseli: "Ositua Rafiki Camp",
  },
  itinerary: [
    {
      day: 1,
      title: "Nairobi – Masai Mara",
      description:
        "Early morning pickup from hotel or airport. Drive through scenic Great Rift Valley. Arrive for lunch. First evening game drive.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: ["Great Rift Valley", "Evening game drive", "Sunset"],
    },
    {
      day: 2,
      title: "Full-Day Game Drive in Maasai Mara",
      description:
        "Early breakfast, full-day game drive across Maasai Mara. Explore multiple reserve areas searching for Big Five and other wildlife.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_3,
      highlights: ["Big Five", "Mara River", "Great Migration (seasonal)"],
    },
    {
      day: 3,
      title: "Second Full-Day Game Drive in Maasai Mara",
      description:
        "Spend second full day in Maasai Mara maximizing wildlife viewing. Morning and afternoon drives exploring new park areas.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: [
        "New areas exploration",
        "Predators",
        "Grazing herds",
        "Birdlife",
      ],
    },
    {
      day: 4,
      title: "Maasai Mara – Lake Nakuru (Optional Lake Naivasha)",
      description:
        "After breakfast, depart Maasai Mara for Lake Nakuru. Optional Lake Naivasha stop. Arrive Lake Nakuru afternoon.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_5,
      highlights: ["Lake Naivasha (optional)", "Lake Nakuru arrival"],
    },
    {
      day: 5,
      title: "Game Drive in Lake Nakuru National Park",
      description:
        "Morning and afternoon game drives in Lake Nakuru, renowned rhino sanctuary. See black and white rhinos and flamingos.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_11,
      highlights: [
        "Rhino sanctuary",
        "Black and white rhinos",
        "Rothschild giraffes",
        "Flamingos (seasonal)",
      ],
    },
    {
      day: 6,
      title: "Lake Nakuru – Amboseli National Park",
      description:
        "After breakfast, drive to Amboseli with scenic stops. Arrive late afternoon.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_9,
      highlights: [
        "Large elephant herds",
        "Mount Kilimanjaro",
        "Scenic photography stops",
      ],
    },
    {
      day: 7,
      title: "Full-Day Game Drive in Amboseli",
      description:
        "Early breakfast, full-day game drive. Morning and afternoon drives focusing on waterholes where wildlife gathers.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_11,
      highlights: [
        "Elephants",
        "Lions",
        "Cheetahs",
        "Mount Kilimanjaro",
        "Sunset photography",
      ],
    },
    {
      day: 8,
      title: "Amboseli – Nairobi",
      description:
        "Final day, optional early morning game drive, then drive back to Nairobi arriving afternoon.",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Optional early game drive",
        "Final wildlife viewing",
        "Return to Nairobi",
      ],
    },
  ],
};
