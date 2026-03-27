import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_5 from "../../../assets/flamingo-water.jpeg";

export const package3DayTanzania = {
  id: "3-day-tanzania",
  slug: "3-day-serengeti-ngorongoro",
  title: "3-Days Serengeti & Ngorongoro Safari",
  subtitle: "Tanzania's iconic parks in three days",
  days: 3,
  country: "tanzania",
  destinations: ["Serengeti", "Ngorongoro Crater"],
  price: { low: 650, high: 950 },
  image: imgAsset_9,
  gallery: [imgAsset_5],
  difficulty: "Budget",
  highlights: [
    "Serengeti plains",
    "Ngorongoro Crater",
    "Wildlife concentration",
    "Scenic highlands",
  ],
  included: [
    "Transportation in 4x4 vehicle",
    "Professional guide",
    "Accommodation at camps",
    "Meals as per itinerary",
    "Park entry fees",
    "Game drives",
    "Picnic lunch",
  ],
  excluded: [
    "International and domestic flights",
    "Tanzania visa fees",
    "Travel insurance",
    "Personal expenses",
    "Tips and gratuities",
  ],
  accommodation: {
    serengeti: "Nyani Camp",
    ngorongoro: "Simba Campsite",
  },
  itinerary: [
    {
      day: 1,
      title: "Arusha – Serengeti National Park",
      description:
        "Early morning departure from Arusha, heading toward the vast plains of Serengeti National Park. Journey passes through scenic highlands of Ngorongoro Conservation Area. After lunch, continue into Serengeti with afternoon game drive across the famous plains.",
      destination: "Serengeti National Park",
      meals: "Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_9,
      highlights: [
        "Ngorongoro Conservation Area",
        "Scenic highlands",
        "Afternoon game drive",
      ],
    },
    {
      day: 2,
      title: "Serengeti – Ngorongoro Conservation Area",
      description:
        "Morning game drive in Serengeti National Park, taking in vast landscapes and open plains. Later, journey toward Ngorongoro Conservation Area enjoying scenic views. Arrive at Ngorongoro Crater rim in late afternoon.",
      destination: "Ngorongoro Conservation Area",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite",
      image: imgAsset_5,
      highlights: ["Morning game drive", "Open plains", "Crater rim views"],
    },
    {
      day: 3,
      title: "Ngorongoro Crater – Arusha",
      description:
        "Early breakfast, then descend into Ngorongoro Crater for a half-day game drive. The crater is one of Africa's most remarkable attractions known for its unique ecosystem. After picnic lunch inside the crater, ascend to rim and begin return journey to Arusha.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Crater descent",
        "Half-day game drive",
        "Unique ecosystem",
        "Picnic lunch",
      ],
    },
  ],
};
