import imgAsset_1 from "../../../assets/cheater_plain.jpeg";
import imgAsset_3 from "../../../assets/elephant.jpeg";
import imgAsset_5 from "../../../assets/flamingo.jpeg";
import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_11 from "../../../assets/rhino.jpeg";

export const package7DayMaraNakuruNaivashaAmboseli = {
  id: "7-day-mara-nakuru-naivasha-amboseli",
  slug: "7-day-mara-nakuru-naivasha-amboseli-budget",
  title: "7-Days Masai Mara, Lake Nakuru, Naivasha and Amboseli Budget Safari",
  subtitle: "Ultimate seven-day Kenyan adventure",
  days: 7,
  country: "kenya",
  destinations: [
    "Masai Mara",
    "Lake Nakuru",
    "Lake Naivasha",
    "Hell's Gate",
    "Amboseli",
  ],
  price: { low: 1350, high: 1750 },
  image: imgAsset_9,
  gallery: [imgAsset_11, imgAsset_3, imgAsset_5],
  difficulty: "Budget",
  highlights: [
    "Hell's Gate cycling",
    "Big Five",
    "Mount Kilimanjaro",
    "Rhino sanctuary",
  ],
  included: [
    "Transportation in safari vehicle",
    "Professional guide",
    "6 nights accommodation",
    "All meals as per itinerary",
    "Park entry fees",
    "Game drives",
    "Hell's Gate access",
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
    naivasha: "Leisure Apex Resort",
    amboseli: "Ositua Rafiki Camp",
  },
  itinerary: [
    {
      day: 1,
      title: "Nairobi – Masai Mara",
      description:
        "Pick up from hotel or airport in Nairobi and depart for Maasai Mara via scenic Great Rift Valley. Arrive in time for lunch and relaxation. Afternoon evening game drive.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: ["Great Rift Valley", "Evening game drive"],
    },
    {
      day: 2,
      title: "Full-Day Game Drive in Masai Mara",
      description:
        "Early breakfast, full-day game drive with picnic lunch. Explore different reserve sections searching for Big Five, cheetahs, hyenas. Visit Mara River.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_3,
      highlights: ["Big Five", "Mara River", "Great Migration (seasonal)"],
    },
    {
      day: 3,
      title: "Masai Mara – Lake Nakuru (Optional Lake Naivasha)",
      description:
        "After breakfast, depart for Lake Nakuru. En route, optional activities at Lake Naivasha. Proceed to Lake Nakuru arriving afternoon.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_5,
      highlights: ["Lake Naivasha (optional)", "Lake Nakuru"],
    },
    {
      day: 4,
      title: "Lake Nakuru – Naivasha",
      description:
        "Early breakfast, morning game drive in Lake Nakuru. Exit park and proceed to Lake Naivasha. Arrive for lunch and relax.",
      destination: "Lake Naivasha",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Leisure Apex Resort",
      image: imgAsset_5,
      highlights: [
        "Rhino sanctuary",
        "White and black rhinos",
        "Flamingos (seasonal)",
      ],
    },
    {
      day: 5,
      title: "Hell's Gate National Park – Amboseli",
      description:
        "After breakfast, visit Hell's Gate then depart for Amboseli. Drive through scenic landscapes and Mount Kilimanjaro views. Check in and relax.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_9,
      highlights: [
        "Hell's Gate",
        "Scenic landscapes",
        "Mount Kilimanjaro",
        "Evening unwind",
      ],
    },
    {
      day: 6,
      title: "Full-Day Game Drive in Amboseli",
      description:
        "Early breakfast, full-day game drive famous for large elephant herds and Mount Kilimanjaro views. Morning and afternoon drives focusing on swamps.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_11,
      highlights: [
        "Large elephant herds",
        "Mount Kilimanjaro",
        "Waterholes",
        "Sunrise/sunset photography",
      ],
    },
    {
      day: 7,
      title: "Amboseli – Nairobi",
      description:
        "Final day, optional early morning game drive, then drive back to Nairobi arriving afternoon.",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: ["Optional early game drive", "Return to Nairobi"],
    },
  ],
};
