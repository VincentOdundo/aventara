import imgAsset_1 from "../../../assets/cheater_plain.jpeg";
import imgAsset_3 from "../../../assets/elephant.jpeg";
import imgAsset_5 from "../../../assets/flamingo.jpeg";
import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_11 from "../../../assets/rhino.jpeg";
import imgAsset_14 from "../../../assets/wildbeasts.jpg";

export const package12DayKenyaTanzaniaSerengeti = {
  id: "12-day-kenya-tanzania-serengeti",
  slug: "12-day-serengeti-ngorongoro-focus",
  title: "12-Days Kenya and Tanzania - Serengeti & Ngorongoro Budget Safari",
  subtitle: "Epic safari with extended Serengeti stay",
  days: 12,
  country: "combined",
  destinations: [
    "Masai Mara",
    "Lake Nakuru",
    "Amboseli",
    "Serengeti",
    "Ngorongoro",
  ],
  price: { low: 2050, high: 2750 },
  image: imgAsset_14,
  gallery: [imgAsset_11, imgAsset_3, imgAsset_5, imgAsset_9],
  difficulty: "Budget",
  highlights: [
    "Big Five",
    "Extended Serengeti",
    "Ngorongoro Crater",
    "Migration season",
  ],
  included: [
    "Transportation in safari vehicle",
    "Professional guide",
    "11 nights accommodation",
    "All meals as per itinerary",
    "Park entry fees",
    "Game drives",
    "Safari briefing in Arusha",
  ],
  excluded: [
    "International flights",
    "Visa fees",
    "Travel insurance",
    "Personal expenses",
    "Tips and gratuities",
  ],
  accommodation: {
    mara: "Miti Mingi Eco Camp",
    nakuru: "Buraha Zenoni Hotel",
    amboseli: "Ositua Rafiki Camp",
    serengeti: "Nyani Camp",
    ngorongoro: "Simba Campsite",
    arusha: "Charity Hotel",
  },
  itinerary: [
    {
      day: 1,
      title: "Nairobi – Masai Mara",
      description:
        "Early morning pickup. Drive through scenic Great Rift Valley viewpoint. Arrive for lunch and first evening game drive.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: ["Great Rift Valley", "Evening game drive"],
    },
    {
      day: 2,
      title: "Full-Day Game Drive in Maasai Mara",
      description:
        "Early breakfast, full-day game drive. Search for Big Five (lion, leopard, elephant, buffalo, rhino). Visit Mara River for Great Migration crossings (seasonal).",
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
        "Spend second full day maximizing wildlife viewing. Morning and afternoon drives exploring new park areas.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: ["Predators", "Grazing herds", "Birdlife", "Photography"],
    },
    {
      day: 4,
      title: "Maasai Mara – Lake Nakuru (Optional Lake Naivasha)",
      description:
        "After breakfast, depart for Lake Nakuru. En route, optional activities at Lake Naivasha (boat ride, Crescent Island walking safari). Proceed to Lake Nakuru arriving afternoon.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_5,
      highlights: ["Lake Naivasha (optional)", "Lake Nakuru scenery"],
    },
    {
      day: 5,
      title: "Game Drive in Lake Nakuru National Park",
      description:
        "Morning and afternoon game drives. Lake Nakuru is famous for its rhino sanctuary and large populations of white and black rhinos. See Rothschild giraffes, lions, leopards, buffaloes, and seasonal flamingos.",
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
        "After breakfast, drive to Amboseli National Park, famous for large elephant herds and breathtaking Mount Kilimanjaro views. Scenic stops for photography and refreshments. Arrive late afternoon.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_9,
      highlights: [
        "Large elephant herds",
        "Mount Kilimanjaro views",
        "Scenic photography stops",
      ],
    },
    {
      day: 7,
      title: "Full-Day Game Drive in Amboseli",
      description:
        "Early breakfast, full-day game drive in Amboseli. Morning is best time to spot wildlife. See lions, cheetahs, giraffes, zebras, buffaloes, hyenas, and bird species. Focus on swamps and waterholes in afternoon. Sunset photos with Mount Kilimanjaro backdrop.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_11,
      highlights: [
        "Large elephant herds",
        "Mount Kilimanjaro views",
        "Waterholes and swamps",
        "Sunset photography",
      ],
    },
    {
      day: 8,
      title: "Amboseli – Namanga Border – Arusha",
      description:
        "After breakfast, exit Amboseli and drive to Namanga Border, the Kenya-Tanzania frontier. Meet Tanzania transfer driver and continue to Arusha. Evening safari briefing about upcoming Tanzania safari.",
      destination: "Arusha",
      meals: "Breakfast & Dinner",
      accommodation: "Charity Hotel",
      image: null,
      highlights: [
        "Border crossing",
        "Tanzania entry",
        "Arusha arrival",
        "Safari briefing",
      ],
    },
    {
      day: 9,
      title: "Arusha – Serengeti National Park",
      description:
        "After breakfast, depart Arusha for Serengeti National Park. Scenic drive through northern Tanzania with beautiful landscapes. Pass through Ngorongoro Conservation Area. Arrive at Serengeti for lunch and afternoon game drive.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_14,
      highlights: [
        "Northern Tanzania landscapes",
        "Ngorongoro Conservation Area",
        "Afternoon game drive",
      ],
    },
    {
      day: 10,
      title: "Full Day in Serengeti National Park",
      description:
        "Full day devoted to exploring magnificent Serengeti. Depart with guide to explore different park areas searching for Big Five. Serengeti is famous for Great Migration and high density of predators. May see lions hunting, cheetahs, elephants, wildebeest herds, and zebras. Picnic lunch in the park.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_14,
      highlights: [
        "Great Migration",
        "High predator density",
        "Lions",
        "Cheetahs",
        "Photography",
      ],
    },
    {
      day: 11,
      title: "Serengeti – Ngorongoro Crater",
      description:
        "After breakfast, enjoy final morning game drive in Serengeti. Transition from vast plains to lush highlands toward Ngorongoro Conservation Area. Ascend to crater rim enjoying breathtaking views. Afternoon ascent and dinner at lodge near crater rim.",
      destination: "Ngorongoro Crater",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite",
      image: imgAsset_5,
      highlights: [
        "Final Serengeti game drive",
        "Highland views",
        "Crater rim views",
        "Photography",
      ],
    },
    {
      day: 12,
      title: "Ngorongoro Crater – Arusha",
      description:
        "Early breakfast, then enjoy leisurely morning with panoramic Ngorongoro Crater views. Check out and begin scenic drive back to Arusha, taking in northern Tanzanian landscapes. Arrive in Arusha afternoon for hotel or Kilimanjaro International Airport drop-off.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Crater views",
        "Scenic drive",
        "Return to Arusha",
        "Trip conclusion",
      ],
    },
  ],
};
