import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_5 from "../../../assets/flamingo-water.jpeg";
import imgAsset_14 from "../../../assets/wildbeasts.jpg";

export const package6DayTanzania = {
  id: "6-day-tanzania",
  slug: "6-day-tanzania-safari",
  title: "6-Days Tanzania Package",
  subtitle: "Complete Tanzania national parks tour",
  days: 6,
  country: "tanzania",
  destinations: ["Serengeti", "Ngorongoro", "Lake Manyara"],
  price: { low: 1250, high: 1650 },
  image: imgAsset_9,
  gallery: [imgAsset_5, imgAsset_14],
  difficulty: "Budget",
  highlights: [
    "Serengeti exploration",
    "Ngorongoro Crater",
    "Lake Manyara",
    "Birdlife",
  ],
  included: [
    "Transportation in 4x4 safari vehicle",
    "Professional guide",
    "Accommodation at camps",
    "All meals (breakfast, lunch, dinner)",
    "Park entry fees",
    "Game drives",
    "Picnic lunches",
  ],
  excluded: [
    "International and domestic flights",
    "Visa fees and travel insurance",
    "Personal expenses",
    "Optional city tour in Arusha",
    "Tips and gratuities",
  ],
  accommodation: {
    serengeti: "Nyani Camp",
    ngorongoro: "Simba Campsite",
    lakemanyara: "Migombani Campsite",
  },
  itinerary: [
    {
      day: 1,
      title: "Arusha – Serengeti National Park",
      description:
        "Morning departure from Arusha travelling through picturesque landscapes of Great Rift Valley toward Serengeti. Enjoy scenic views of rolling plains and traditional Maasai villages. Upon entering Serengeti, experience afternoon game drive.",
      destination: "Serengeti National Park",
      meals: "Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_9,
      highlights: [
        "Great Rift Valley",
        "Ngorongoro Highlands",
        "Rolling plains",
        "Maasai villages",
      ],
    },
    {
      day: 2,
      title: "Full Day in Serengeti National Park",
      description:
        "Day devoted to exploring magnificent Serengeti. Sweeping plains and seasonal rivers support extraordinary concentration of wildlife. May witness prides of lions, cheetahs on hunt, elephants roaming freely, large herds of wildebeest and zebras.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_14,
      highlights: [
        "Lions",
        "Cheetahs",
        "Elephants",
        "Wildebeest herds",
        "Photography opportunities",
      ],
    },
    {
      day: 3,
      title: "Serengeti – Ngorongoro Conservation Area",
      description:
        "After breakfast, depart Serengeti with scenic game drive. Journey gradually transitions from vast plains to lush highlands. Ngorongoro landscape characterized by rolling green hills. Upon arrival near crater rim, appreciate dramatic scenery.",
      destination: "Ngorongoro Conservation Area",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite",
      image: imgAsset_5,
      highlights: [
        "Game drive",
        "Plains transition",
        "Panoramic views",
        "Crater rim scenery",
      ],
    },
    {
      day: 4,
      title: "Ngorongoro Crater Full-Day Exploration",
      description:
        "Descend into Ngorongoro Crater, UNESCO World Heritage Site. Crater floor forms unique ecosystem teeming with wildlife including lions, elephants, buffaloes, flamingos, and rare black rhinoceros. Picnic lunch beside hippo pool.",
      destination: "Ngorongoro Crater",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Simba Campsite",
      image: imgAsset_5,
      highlights: [
        "Crater descent",
        "UNESCO World Heritage Site",
        "Flamingos",
        "Black rhinoceros",
        "Hippo pool",
      ],
    },
    {
      day: 5,
      title: "Lake Manyara National Park",
      description:
        "Following breakfast, travel to Lake Manyara National Park, scenic gem nestled at base of Great Rift Valley escarpment. Park renowned for lush groundwater forests and vibrant birdlife. May encounter tree-climbing lions and elephants.",
      destination: "Lake Manyara National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Migombani Campsite",
      image: imgAsset_5,
      highlights: [
        "Great Rift Valley",
        "Lush groundwater forests",
        "Flamingos",
        "Tree-climbing lions",
        "Birdlife",
      ],
    },
    {
      day: 6,
      title: "Return to Arusha",
      description:
        "Final day with breakfast at Migombani Campsite before scenic drive back to Arusha. Journey offers beautiful views of highlands, local farms, and rural communities. Upon arrival in Arusha, transfer to hotel or optional city tour.",
      destination: "Arusha",
      meals: "Breakfast only",
      accommodation: null,
      image: null,
      highlights: [
        "Highland views",
        "Local farms",
        "Rural communities",
        "Safari conclusion",
      ],
    },
  ],
};
