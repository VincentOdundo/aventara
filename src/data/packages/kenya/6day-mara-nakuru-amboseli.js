import imgAsset_1 from "../../../assets/cheater-safari.jpeg";
import imgAsset_3 from "../../../assets/elefant-vegetation.jpeg";
import imgAsset_5 from "../../../assets/flamingo-water.jpeg";
import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_11 from "../../../assets/rhino_plain.jpeg";

export const package6DayMaraNakuruAmboseli = {
  id: "6-day-mara-nakuru-amboseli",
  slug: "6-day-mara-nakuru-amboseli-budget",
  title: "6-Days Masai Mara, Lake Nakuru and Amboseli Budget Safari",
  subtitle: "Complete East African safari experience",
  days: 6,
  country: "kenya",
  destinations: ["Masai Mara", "Lake Nakuru", "Amboseli"],
  price: { low: 1200, high: 1600 },
  image: imgAsset_9,
  gallery: [imgAsset_11, imgAsset_3],
  difficulty: "Budget",
  highlights: [
    "Big Five",
    "Rhino sanctuary",
    "Mount Kilimanjaro views",
    "Elephant herds",
  ],
  included: [
    "Transportation in safari vehicle",
    "Professional guide/driver",
    "5 nights accommodation",
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
        "Early morning pickup from hotel or Jomo Kenyatta International Airport. Drive through scenic Great Rift Valley, stopping briefly at viewpoint for photography before reaching Maasai Mara in time for lunch. After relaxation, embark on first evening game drive spotting lions, elephants, giraffes, zebras, buffaloes.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: ["Great Rift Valley", "Evening game drive", "Sunset photos"],
    },
    {
      day: 2,
      title: "Full-Day Game Drive in Masai Mara",
      description:
        "Early breakfast, then full-day game drive across Maasai Mara with packed picnic lunch. Explore different areas searching for Big Five, cheetahs, hyenas, gazelles, and birds. Visit Mara River for dramatic wildlife activity including seasonal Great Migration crossings. Scenic picnic lunch before afternoon game viewing.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_3,
      highlights: [
        "Big Five",
        "Mara River",
        "Great Migration (seasonal)",
        "Picnic lunch",
      ],
    },
    {
      day: 3,
      title: "Masai Mara – Lake Nakuru",
      description:
        "After breakfast, check out and depart for Lake Nakuru National Park. En route, if time allows, may pass by Lake Naivasha for optional activities at extra cost. Continue to Lake Nakuru arriving afternoon at hotel. Enjoy rest of day at leisure.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_5,
      highlights: [
        "Scenic drive",
        "Lake Naivasha (optional)",
        "Lake Nakuru views",
      ],
    },
    {
      day: 4,
      title: "Lake Nakuru – Amboseli",
      description:
        "Begin day with early morning game drive in Lake Nakuru National Park, famous for rhino sanctuary and abundant wildlife. After morning game drive, depart for Amboseli National Park. Enjoy scenic landscapes along journey. Arrive at camp in Amboseli late evening.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_9,
      highlights: [
        "Rhino sanctuary",
        "Scenic drive",
        "Amboseli arrival",
        "Mount Kilimanjaro views",
      ],
    },
    {
      day: 5,
      title: "Full-Day Game Drive in Amboseli",
      description:
        "Early breakfast, then full day of game viewing in Amboseli. Park renowned for large elephant herds set against Mount Kilimanjaro backdrop. Spend morning exploring park spotting lions, cheetahs, giraffes, zebras, buffaloes. Picnic lunch in park. Continue afternoon game drive focusing on swamps and waterholes. Capture sunset photos with Mount Kilimanjaro background.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_11,
      highlights: [
        "Large elephant herds",
        "Mount Kilimanjaro views",
        "Swamps and waterholes",
        "Sunset photography",
      ],
    },
    {
      day: 6,
      title: "Amboseli – Nairobi",
      description:
        "Final day, after breakfast, check out of camp and begin scenic drive back to Nairobi. Along way, enjoy rolling savannah landscapes. Arrive in Nairobi afternoon for hotel or Jomo Kenyatta International Airport drop-off.",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Savannah landscapes",
        "Return to Nairobi",
        "Trip conclusion",
      ],
    },
  ],
};
