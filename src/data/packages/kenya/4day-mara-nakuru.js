import imgAsset_1 from "../../../assets/cheater_plain.jpeg";
import imgAsset_3 from "../../../assets/elephant.jpeg";
import imgAsset_5 from "../../../assets/flamingo.jpeg";
import imgAsset_11 from "../../../assets/rhino.jpeg";

export const package4DayMaraNakuru = {
  id: "4-day-mara-nakuru",
  slug: "4-day-mara-nakuru-budget",
  title: "Masai Mara & Lake Nakuru Budget Safari",
  subtitle: "Big Five meets rhino sanctuary",
  days: 4,
  country: "kenya",
  destinations: ["Masai Mara", "Lake Nakuru"],
  price: { low: 770, high: 1110 },
  image: imgAsset_5,
  gallery: [imgAsset_11, imgAsset_3],
  difficulty: "Budget",
  highlights: [
    "Big Five game drives",
    "Rhino sanctuary",
    "Flamingo flocks",
    "Rift Valley views",
  ],
  included: [
    "Transportation in safari vehicle",
    "Professional guide/driver",
    "3 nights accommodation",
    "All meals as per itinerary",
    "Park entry fees",
    "Game drives",
    "Transport",
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
  },
  itinerary: [
    {
      day: 1,
      title: "Nairobi – Masai Mara",
      description:
        "Your safari begins with an early morning pick-up from your hotel or airport in Nairobi. Drive through the scenic Great Rift Valley with a stop at the viewpoint for photos before proceeding to Maasai Mara. Arrive in time for lunch at lodge/camp and relaxation. Afternoon evening game drive to spot wildlife as it becomes active before sunset.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: [
        "Great Rift Valley",
        "Evening game drive",
        "Lions",
        "Elephants",
      ],
    },
    {
      day: 2,
      title: "Full-Day Game Drive",
      description:
        "Early breakfast, then full-day game drive across vast plains with picnic lunch boxes. Explore different areas searching for Big Five (lion, leopard, elephant, buffalo, rhino), cheetahs, hyenas, wildebeests, antelopes, and bird species. May visit Mara River known for dramatic wildlife activity and Great Migration crossings (seasonal). Afternoon game viewing before return to camp.",
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
      title: "Masai Mara – Lake Nakuru National Park",
      description:
        "After breakfast, check out and depart for Lake Nakuru National Park. Enjoy scenic drive through Great Rift Valley landscapes. Arrive in Nakuru in time for lunch at hotel. Afternoon game drive in Lake Nakuru, famous for rhino sanctuary and large populations of white and black rhinos.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_5,
      highlights: [
        "Scenic drive",
        "Rhino sanctuary",
        "Flamingos (seasonal)",
        "Rothschild giraffes",
      ],
    },
    {
      day: 4,
      title: "Lake Nakuru – Nairobi",
      description:
        "After breakfast, enjoy morning game drive in Lake Nakuru National Park for final wildlife opportunity. Exit the park and drive back to Nairobi, arriving in the afternoon for drop-off at hotel or airport.",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Morning game drive",
        "Final wildlife viewing",
        "Return to Nairobi",
      ],
    },
  ],
};
