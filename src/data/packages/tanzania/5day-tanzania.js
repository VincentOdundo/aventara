import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_5 from "../../../assets/flamingo.jpeg";
import imgAsset_14 from "../../../assets/wildbeasts.jpg";

export const package5DayTanzania = {
  id: "5-day-tanzania",
  slug: "5-day-tanzania-complete",
  title: "5-Day Tanzania Package",
  subtitle: "Tarangire, Serengeti, Lake Manyara & Ngorongoro",
  days: 5,
  country: "tanzania",
  destinations: ["Tarangire", "Serengeti", "Ngorongoro", "Lake Manyara"],
  price: { low: 1050, high: 1400 },
  image: imgAsset_9,
  gallery: [imgAsset_5, imgAsset_14],
  difficulty: "Budget",
  highlights: [
    "Tarangire elephants",
    "Serengeti migration",
    "Ngorongoro Crater",
    "Lake Manyara",
  ],
  included: [
    "Accommodation for 5 days / 4 nights at selected safari lodges or camps",
    "All meals during the safari (breakfast, lunch, and dinner)",
    "Transportation in 4x4 safari vehicle with professional guide",
    "Park entry and conservation fees",
    "Scheduled game drives and bottled drinking water",
  ],
  excluded: [
    "International and domestic flights",
    "Visa fees and travel insurance",
    "Personal expenses and optional activities",
    "Drinks not included by the lodge (alcoholic & soft drinks)",
    "Tips and gratuities for guides and lodge staff",
  ],
  accommodation: {
    tarangire: "Tarangire Campsite",
    serengeti: "Nyani Camp",
    ngorongoro: "Simba Campsite",
    lakemanatura: "Migombani Campsite",
  },
  itinerary: [
    {
      day: 1,
      title: "Arusha – Tarangire National Park",
      description:
        "After breakfast, meet in Arusha and depart for Tarangire National Park with picnic lunch. Upon arrival, enjoy full-day game drive in this beautiful park, famous for large elephant herds, ancient baobab trees, and diverse wildlife.",
      destination: "Tarangire National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Tarangire Campsite",
      image: imgAsset_9,
      highlights: [
        "Large elephant herds",
        "Ancient baobab trees",
        "Tarangire River",
      ],
    },
    {
      day: 2,
      title: "Tarangire – Serengeti National Park",
      description:
        "After breakfast, depart Tarangire and drive towards legendary Serengeti National Park, passing through scenic Ngorongoro Conservation Area. Upon entering Serengeti, begin game drive across vast plains.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_14,
      highlights: [
        "Ngorongoro Conservation Area",
        "Scenic landscapes",
        "Wildlife herds",
      ],
    },
    {
      day: 3,
      title: "Full Day in Serengeti National Park",
      description:
        "Full day of game drives in Serengeti. After breakfast, set out with guide to explore different park areas. Serengeti famous for Great Migration and high density of predators.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_9,
      highlights: ["Great Migration", "High predator density", "Picnic lunch"],
    },
    {
      day: 4,
      title: "Serengeti – Ngorongoro Conservation Area",
      description:
        "After breakfast, enjoy final morning game drive in Serengeti as you exit the park. Drive towards Ngorongoro Conservation Area enjoying stunning highland views. Upon arrival, ascend to crater rim.",
      destination: "Ngorongoro Conservation Area",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite",
      image: imgAsset_5,
      highlights: ["Final game drive", "Crater exit", "Highland views"],
    },
    {
      day: 5,
      title: "Ngorongoro – Lake Manyara – Arusha",
      description:
        "Early breakfast, then descend into Ngorongoro Crater for game drive. Natural wonder home to high concentration of wildlife. After game drive and lunch, proceed to Lake Manyara National Park.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: ["Crater game drive", "Lake Manyara", "Return to Arusha"],
    },
  ],
};
