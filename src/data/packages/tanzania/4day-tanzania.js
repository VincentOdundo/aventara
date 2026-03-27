import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_5 from "../../../assets/flamingo-water.jpeg";

export const package4DayTanzania = {
  id: "4-day-tanzania",
  slug: "4-day-serengeti-ngorongoro-budget",
  title: "4-Days Tanzania Package",
  subtitle: "Serengeti and Ngorongoro explorer",
  days: 4,
  country: "tanzania",
  destinations: ["Serengeti", "Ngorongoro"],
  price: { low: 850, high: 1150 },
  image: imgAsset_9,
  gallery: [imgAsset_5],
  difficulty: "Budget",
  highlights: [
    "Full day in Serengeti",
    "Ngorongoro Crater",
    "Big Five",
    "Photography",
  ],
  included: [
    "All park entrance fees",
    "Transportation in 4x4 safari vehicle",
    "Professional English-speaking safari guide",
    "Full board accommodation at public campsites",
    "Bottled drinking water during game drives",
  ],
  excluded: [
    "International and domestic flights",
    "Tanzania visa fees and travel insurance",
    "Tips and gratuities for guide, driver, and staff",
    "Personal expenses",
    "Optional activities and accommodation in Arusha",
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
        "After breakfast in Arusha, depart for Serengeti National Park enjoying scenic drive through beautiful landscapes of northern Tanzania. En route, pass through Ngorongoro Conservation Area. Upon arrival, enjoy afternoon game drive.",
      destination: "Serengeti National Park",
      meals: "Breakfast & Afternoon Lunch, Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_9,
      highlights: [
        "Ngorongoro Conservation Area",
        "Northern Tanzania landscapes",
        "Afternoon game drive",
      ],
    },
    {
      day: 2,
      title: "Full Day in Serengeti National Park",
      description:
        "Full-day game drive in Serengeti, one of Africa's most renowned wildlife destinations. Explore vast plains in search of Big Five and remarkable wildlife species. Serengeti's endless savannah offers excellent photography and wildlife observation.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_9,
      highlights: [
        "Big Five",
        "Photography opportunities",
        "Close wildlife observation",
        "Picnic lunch",
      ],
    },
    {
      day: 3,
      title: "Serengeti – Ngorongoro Conservation Area",
      description:
        "After breakfast at camp, enjoy morning game drive before departing for Ngorongoro Conservation Area. Journey offers spectacular scenery and possible wildlife sightings. Arrive at camping site on crater rim in late afternoon.",
      destination: "Ngorongoro Conservation Area",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite",
      image: imgAsset_5,
      highlights: [
        "Morning game drive",
        "Spectacular scenery",
        "Wildlife sightings",
        "Crater rim views",
      ],
    },
    {
      day: 4,
      title: "Ngorongoro Crater – Arusha",
      description:
        "Early breakfast, then descend into Ngorongoro Crater for half-day game drive. Crater is home to high concentration of wildlife. After picnic lunch, ascend crater and return to Arusha.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Crater descent",
        "Half-day game drive",
        "Wildlife concentration",
        "Picnic lunch",
      ],
    },
  ],
};
