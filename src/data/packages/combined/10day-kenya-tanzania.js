import { PHOTOS } from "../../photos";

const heroImg = PHOTOS.kilimanjaro.src;

export const package10DayKenyaTanzania = {
  id: "10-day-kenya-tanzania",
  slug: "10-day-kenya-tanzania-ultimate-budget",
  title: "10-Day Kenya & Tanzania Budget Safari",
  subtitle:
    "Kenya's main parks, then across the border to the Serengeti and Ngorongoro Crater.",
  days: 10,
  country: "combined",
  destinations: [
    "Masai Mara",
    "Lake Nakuru",
    "Amboseli",
    "Serengeti",
    "Ngorongoro",
  ],
  price: { low: 1719, high: 1947 },
  singlePrice: { low: 1730, high: 1959 },
  image: heroImg,
  difficulty: "Budget",
  highlights: [
    "Full-day Big Five game drive in the Masai Mara",
    "Rhinos and flamingos at Lake Nakuru National Park",
    "Elephant herds beneath Mount Kilimanjaro in Amboseli",
    "Endless plains and predators of the Central Serengeti",
    "Descend 600m into the Ngorongoro Crater – a UNESCO World Heritage Site",
  ],
  included: [
    "Shared 4x4 safari vehicle with pop-up roof (max 7 people per vehicle)",
    "Professional English-speaking driver/guides in Kenya & Tanzania",
    "9 nights in budget tented camps, campsites & mid-range hotels",
    "Meals as per itinerary & drinking water on all days",
    "All park fees (non-residents), activities & taxes/VAT",
    "Namanga border assistance & Arusha – Nairobi return transfer",
    "Roundtrip airport transfer",
  ],
  excluded: [
    "International flights and visas for Kenya & Tanzania",
    "Additional accommodation before and after the tour",
    "Tips (guideline US$10 per person per day)",
    "Optional activities (Lake Naivasha boat ride, Crescent Island, Olduvai Gorge)",
    "Personal items (souvenirs, travel insurance, drinks)",
    "Government-imposed increases of taxes and/or park fees",
  ],
  optionalActivities: [
    { name: "Maasai Village Visit", price: 20 },
    { name: "Lake Naivasha Scenic Boat ride", price: 20 },
    { name: "Crescent Island Guided Walking Safari", price: 33 },
  ],
  accommodation: {
    mara: "Miti Mingi Eco Camp",
    nakuru: "Buraha Zenoni Hotel & Resort",
    amboseli: "Ositua Rafiki Camp",
    arusha: "The Charity Hotel",
    serengeti: "Budget camping, Central Serengeti",
    ngorongoro: "Budget camping, Ngorongoro",
  },
  itinerary: [
    {
      day: 1,
      title: "Nairobi to the Masai Mara & Evening Game Drive",
      description:
        "Depart Nairobi westwards toward the Masai Mara. Stop at a Great Rift Valley viewpoint for panoramic views of the escarpment, then continue to Narok town – a vibrant Maasai hub – for a hot lunch. On arrival, check in and refresh before an evening game drive as the sun sets over the reserve. Buffet dinner and overnight at our fully furnished camp with hot showers.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      highlights: ["Great Rift Valley viewpoint", "Evening game drive"],
    },
    {
      day: 2,
      title: "Full-Day Game Drive in Masai Mara",
      description:
        "After breakfast, set out for a full-day game drive across the Mara's rolling savannah, famous for the Great Wildebeest Migration (July–September). Search for the Big Five – lion, leopard, elephant, buffalo and rhino – with sightings of at least two almost guaranteed. Picnic lunch in the wilderness, then continue exploring until evening before returning to camp.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      highlights: ["Big Five search", "Great Migration (seasonal)", "Bush picnic lunch"],
    },
    {
      day: 3,
      title: "Masai Mara to Lake Nakuru National Park",
      description:
        "After breakfast, visit a traditional Maasai village to learn about their culture and traditions. Depart for Nakuru with lunch in Mai Mahiu, enjoying views of Mount Longonot and Lake Naivasha. Afternoon game drive in Lake Nakuru National Park, renowned for its rhinos, flamingos, lions, leopards and buffaloes. Dinner and overnight at a comfortable mid-range hotel in Nakuru.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel & Resort",
      highlights: ["Maasai village", "Rhinos & flamingos", "Mount Longonot views"],
    },
    {
      day: 4,
      title: "Nakuru to Amboseli via Lake Naivasha",
      description:
        "Head to Lake Naivasha with optional activities: a boat ride among hippos and waterbirds, or a guided walk on Crescent Island among free-roaming giraffes, zebras and antelopes. After lunch, continue to Amboseli National Park – famous for its large elephant herds and views of Mount Kilimanjaro. Dinner and overnight at camp.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      highlights: ["Lake Naivasha (optional boat ride)", "Crescent Island (optional)"],
    },
    {
      day: 5,
      title: "Full-Day Game Drive in Amboseli",
      description:
        "Early breakfast, then a full-day game drive in Amboseli with views of Mount Kilimanjaro. Get close to the park's elephant herds, plus lions, giraffes, zebras and a rich variety of birdlife in the wetlands. Picnic lunch overlooking Kilimanjaro before returning to camp for dinner.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      highlights: ["Mount Kilimanjaro views", "Elephant herds", "Swamp birdlife"],
    },
    {
      day: 6,
      title: "Amboseli to Arusha, Tanzania",
      description:
        "Early morning game drive through Amboseli's swamps, home to hippos and elephant families. Depart for Tanzania with lunch en route. At the Namanga border our Tanzanian team receives you, assists with immigration and transfers you to your hotel in Arusha.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: "The Charity Hotel",
      highlights: ["Morning game drive", "Namanga border crossing"],
    },
    {
      day: 7,
      title: "Arusha to Serengeti National Park",
      description:
        "After a safari briefing with your driver-guide, drive approximately six hours to the Serengeti with a picnic lunch en route. After park registration, enjoy at least three hours of game viewing on the way to your camp in the Central Serengeti. Dinner and overnight amid the sounds of the African wilderness.",
      destination: "Central Serengeti National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Budget camping, Central Serengeti",
      highlights: ["Serengeti plains", "Afternoon game drive"],
    },
    {
      day: 8,
      title: "Serengeti to Ngorongoro",
      description:
        "Early breakfast and an extended six-hour game drive across the Serengeti tracking wildebeest, zebras, giraffes and predators. Around midday exit the park, with an optional visit to the historic Olduvai Gorge, the 'Cradle of Mankind'. Continue to the Ngorongoro conservation area for dinner and overnight.",
      destination: "Ngorongoro Crater",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Budget camping, Ngorongoro",
      highlights: ["Extended Serengeti game drive", "Olduvai Gorge (optional)"],
    },
    {
      day: 9,
      title: "Ngorongoro Crater & Return to Arusha",
      description:
        "Descend 600 metres to the floor of the Ngorongoro Crater, a UNESCO World Heritage Site with a concentration of wildlife – lions, black rhinos, buffaloes, zebras and hippos. Picnic lunch on the crater rim, then after about six hours of game viewing, ascend and drive to Arusha for the night.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: "The Charity Hotel",
      highlights: ["Ngorongoro Crater floor", "Crater rim picnic"],
    },
    {
      day: 10,
      title: "Arusha to Nairobi",
      description:
        "After breakfast, check out and transfer to Arusha Airport or take the shuttle back to Nairobi – all transfers are included. In Nairobi our team welcomes you back and assists with your final transfer to your hotel or the airport.",
      destination: "Nairobi",
      meals: "Breakfast",
      accommodation: null,
      highlights: ["Shuttle back to Nairobi", "Airport / hotel drop-off"],
    },
  ],
};
