import imgAsset_1 from "../../../assets/cheater_plain.jpeg";
import imgAsset_3 from "../../../assets/elephant.jpeg";
import imgAsset_5 from "../../../assets/flamingo.jpeg";
import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_11 from "../../../assets/rhino.jpeg";

export const package11DayKenyaTanzania = {
  id: "11-day-kenya-tanzania",
  slug: "11-day-kenya-tanzania-budget",
  title: "11-Days Kenya and Tanzania Budget Safari",
  subtitle: "Epic cross-border adventure",
  days: 11,
  country: "combined",
  destinations: [
    "Masai Mara",
    "Lake Nakuru",
    "Amboseli",
    "Serengeti",
    "Ngorongoro",
  ],
  price: { low: 1800, high: 2400 },
  image: imgAsset_9,
  gallery: [imgAsset_11, imgAsset_3, imgAsset_5],
  difficulty: "Budget",
  highlights: [
    "Big Five",
    "Serengeti",
    "Ngorongoro Crater",
    "Kilimanjaro views",
  ],
  included: [
    "Transportation in safari vehicle",
    "Professional guide",
    "10 nights accommodation",
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
        "Early morning pickup. Drive through scenic Great Rift Valley. Arrive in time for lunch and first evening game drive.",
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
        "Full-day exploration with packed picnic lunch. Search for Big Five and explore Mara River area.",
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
        "Second full day maximizing wildlife viewing with morning and afternoon drives.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: ["Predators", "Grazing herds", "Birdlife"],
    },
    {
      day: 4,
      title: "Maasai Mara – Lake Nakuru",
      description:
        "Depart with optional Lake Naivasha stop. Continue to Lake Nakuru for afternoon check-in.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_5,
      highlights: ["Lake Naivasha (optional)", "Lake Nakuru"],
    },
    {
      day: 5,
      title: "Game Drive in Lake Nakuru National Park",
      description:
        "Morning and afternoon game drives in rhino sanctuary. See black and white rhinos and seasonal flamingos.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_11,
      highlights: ["Rhino sanctuary", "Flamingos (seasonal)"],
    },
    {
      day: 6,
      title: "Lake Nakuru – Amboseli National Park",
      description:
        "Drive to Amboseli with scenic stops. Arrive late afternoon.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_9,
      highlights: ["Mount Kilimanjaro", "Large elephant herds"],
    },
    {
      day: 7,
      title: "Full-Day Game Drive in Amboseli",
      description:
        "Full-day exploration with Mount Kilimanjaro backdrop. Focus on waterholes and swamps.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_11,
      highlights: ["Elephants", "Mount Kilimanjaro", "Waterholes"],
    },
    {
      day: 8,
      title: "Amboseli – Namanga Border – Arusha",
      description:
        "Drive to Kenya-Tanzania border. Meet Tanzania transfer driver for Arusha transfer. Evening safari briefing.",
      destination: "Arusha",
      meals: "Breakfast & Dinner",
      accommodation: "Charity Hotel",
      image: null,
      highlights: ["Border crossing", "Tanzania entry", "Safari briefing"],
    },
    {
      day: 9,
      title: "Arusha – Serengeti National Park",
      description:
        "Depart Arusha for Serengeti crossing scenic plains. Arrive for lunch and afternoon game drive.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_3,
      highlights: ["Afternoon game drive", "Northern Tanzania landscapes"],
    },
    {
      day: 10,
      title: "Serengeti – Ngorongoro Crater",
      description:
        "Morning game drive in Serengeti. Depart for Ngorongoro. Descend into crater for breathtaking game drive.",
      destination: "Ngorongoro Crater",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite",
      image: imgAsset_5,
      highlights: [
        "Black rhinos",
        "Lions",
        "Elephants",
        "Buffalos",
        "Flamingos",
      ],
    },
    {
      day: 11,
      title: "Ngorongoro – Arusha",
      description:
        "Leisurely morning at lodge with Ngorongoro Crater views. Drive back to Arusha.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: ["Crater views", "Return to Arusha"],
    },
  ],
};
