import imgAsset_1 from "../../../assets/cheater-safari.jpeg";
import imgAsset_3 from "../../../assets/elefant-vegetation.jpeg";
import imgAsset_6 from "../../../assets/lion.jpeg";

export const package3DayMara = {
  id: "3-day-mara",
  slug: "3-day-masai-mara-budget",
  title: "Masai Mara Budget Safari",
  subtitle: "The quintessential Big Five experience",
  days: 3,
  country: "kenya",
  destinations: ["Masai Mara"],
  price: { low: 530, high: 770 },
  image: imgAsset_1,
  gallery: [imgAsset_6, imgAsset_3],
  difficulty: "Budget",
  highlights: [
    "Big Five game drives",
    "Mara River area",
    "Sunset game drives",
    "Maasai culture",
  ],
  included: [
    "Transport in a safari Landcruiser with pop-up roof",
    "Professional English-speaking safari guide/driver",
    "2 nights accommodation",
    "All meals as per itinerary",
    "Park entry fees",
    "Game drives as mentioned",
    "Maasai village visit",
    "1 litre of water per day per person",
  ],
  excluded: [
    "International flights",
    "Personal expenses",
    "Tips and gratuities",
    "Optional activities",
    "Travel insurance",
    "Maasai Village ($20)",
    "Balloon Safaris ($500)",
  ],
  optionalActivities: [
    { name: "Maasai Village Visit", price: 20 },
    { name: "Balloon Safaris", price: 500 },
  ],
  accommodation: {
    budget: "Miti Mingi Eco Camp",
  },
  itinerary: [
    {
      day: 1,
      title: "Nairobi – Masai Mara",
      description:
        "Your adventure begins with an early morning departure from Nairobi. Drive through the scenic Great Rift Valley viewpoint with a brief stop for photography, then continue to Maasai Mara arriving in time for lunch at your lodge or camp. After check-in and some relaxation, head out for an evening game drive in the reserve. This is the perfect time to spot wildlife as animals become more active before sunset. Expect sightings of lions, elephants, giraffes, zebras, buffaloes, and possibly leopards.",
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
      title: "Full-Day Game Drive with Picnic Lunch",
      description:
        "After an early breakfast, depart with packed picnic lunch boxes for a full-day game drive in the vast plains of Maasai Mara. Spend the day exploring different sections of the reserve in search of the Big Five (lion, elephant, buffalo, leopard, and rhino) along with cheetahs, hyenas, wildebeests, and a variety of bird species. You may also visit the Mara River, famous for dramatic wildlife scenes and the Great Migration crossing (seasonal). Enjoy your picnic lunch inside the park at a designated scenic spot surrounded by nature.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Picnic Lunch & Dinner",
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
      title: "Return to Nairobi",
      description:
        "After breakfast, optional visit to a traditional Maasai village (20$ per person) for a cultural experience. Learn about the Maasai people's traditions, lifestyle, dances, and unique heritage. After the cultural tour, depart Maasai Mara and drive back to Nairobi, arriving in the afternoon.",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: imgAsset_6,
      highlights: [
        "Maasai village",
        "Cultural experience",
        "Return to Nairobi",
      ],
    },
  ],
};
