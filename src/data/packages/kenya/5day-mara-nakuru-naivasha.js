import imgAsset_1 from "../../../assets/cheater_plain.jpeg";
import imgAsset_3 from "../../../assets/elephant.jpeg";
import imgAsset_5 from "../../../assets/flamingo.jpeg";
import imgAsset_11 from "../../../assets/rhino.jpeg";

export const package5DayMaraNakuruNaivasha = {
  id: "5-day-mara-nakuru-naivasha",
  slug: "5-day-triple-gem-kenya",
  title: "5-Days Masai Mara, Lake Nakuru & Naivasha Budget Safari",
  subtitle: "Three iconic parks in five unforgettable days",
  days: 5,
  country: "kenya",
  destinations: ["Masai Mara", "Lake Nakuru", "Lake Naivasha", "Hell's Gate"],
  price: { low: 950, high: 1250 },
  image: imgAsset_5,
  gallery: [imgAsset_11, imgAsset_3],
  difficulty: "Budget",
  highlights: [
    "Hell's Gate cycling",
    "Flamingos at Lake Nakuru",
    "Big Five",
    "Gorge hiking",
  ],
  included: [
    "Transportation in safari vehicle",
    "Professional guide",
    "Accommodation as per itinerary",
    "Meals as specified",
    "Park entry fees",
    "Game drives",
    "Hell's Gate access",
  ],
  excluded: [
    "International flights",
    "Personal expenses",
    "Tips and gratuities",
    "Optional activities at Lake Naivasha",
    "Travel insurance",
  ],
  optionalActivities: [
    { name: "Lake Naivasha Boat ride", price: 20 },
    { name: "Crescent Island Guided Walking Safari", price: 33 },
  ],
  accommodation: {
    mara: "Miti Mingi Eco Camp",
    nakuru: "Buraha Zenoni Hotel",
    naivasha: "Leisure Apex Resort",
  },
  itinerary: [
    {
      day: 1,
      title: "Nairobi – Masai Mara",
      description:
        "Pick up from hotel or airport in Nairobi and depart for Maasai Mara via scenic Great Rift Valley with stopover at viewpoint. Arrive in time for lunch at camp and relaxation. Afternoon evening game drive to spot lions, elephants, giraffes, zebras, buffaloes as sun sets across savannah.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: ["Great Rift Valley", "Evening game drive", "Sunset views"],
    },
    {
      day: 2,
      title: "Full-Day Game Drive in Masai Mara",
      description:
        "Early breakfast, then full-day game drive with picnic lunch boxes. Explore different reserve sections searching for Big Five (lion, leopard, elephant, buffalo, rhino), cheetahs, hyenas, antelopes, and bird species. May visit Mara River famous for Great Migration crossings (seasonal). Picnic lunch inside park with afternoon game viewing.",
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
      title: "Masai Mara – Lake Nakuru (Optional Stop at Lake Naivasha)",
      description:
        "After breakfast, check out and depart for Lake Nakuru National Park. En route, if time allows, may pass by Lake Naivasha for optional activities (Boat ride $20/person, Crescent Island walking safari $33/person). Proceed to Lake Nakuru arriving afternoon for check-in to budget hotel and relaxation.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_5,
      highlights: ["Lake Naivasha (optional)", "Lake Nakuru scenery"],
    },
    {
      day: 4,
      title: "Lake Nakuru – Lake Naivasha",
      description:
        "Early breakfast, then morning game drive in Lake Nakuru, renowned rhino sanctuary with white and black rhinos. Famous for Rothschild giraffes, lions, leopards, buffaloes, and flamingos (seasonal). After game drive, exit park and proceed to Lake Naivasha. Arrive in time for lunch at hotel and relax afternoon at leisure.",
      destination: "Lake Naivasha",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Leisure Apex Resort",
      image: imgAsset_11,
      highlights: [
        "Rhino sanctuary",
        "White and black rhinos",
        "Flamingos (seasonal)",
        "Lake Naivasha",
      ],
    },
    {
      day: 5,
      title: "Hell's Gate National Park – Return to Nairobi",
      description:
        "After breakfast, visit Hell's Gate National Park for unique safari experience with cycling among wildlife, guided walking safari, exploration of scenic gorges and cliffs. View zebras, giraffes, gazelles, buffaloes, and various bird species. After excursion, depart for Nairobi arriving afternoon for hotel or airport drop-off.",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Cycling among wildlife",
        "Guided walking safari",
        "Scenic gorges",
        "Return to Nairobi",
      ],
    },
  ],
};
