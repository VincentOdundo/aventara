import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_5 from "../../../assets/flamingo-water.jpeg";
import imgAsset_14 from "../../../assets/wildbeasts.jpg";

export const package6DayTanzania = {
  id: "6-day-tanzania",
  slug: "6-day-tanzania-safari",
  title: "6-Days Tanzania Package - The Grand Serengeti & Beyond",
  subtitle:
    "Experience the ultimate 6-day comprehensive safari covering Tanzania's most iconic national parks: Serengeti, Ngorongoro Crater, and Lake Manyara.",
  days: 6,
  country: "tanzania",
  destinations: ["Serengeti", "Ngorongoro", "Lake Manyara"],
  price: { low: 1250, high: 1650 },
  image: imgAsset_9,
  gallery: [imgAsset_5, imgAsset_14],
  difficulty: "Budget",
  highlights: [
    "Unrivaled 2-day in-depth exploration of the Serengeti",
    "Full-day descent and discovery in the Ngorongoro Crater",
    "Encounter Lake Manyara's famous tree-climbing lions",
    "Spectacular Great Rift Valley edge and scenic highland views",
    "Exclusive opportunities to photograph the rare Big Five",
  ],
  included: [
    "Exclusive use of a customized 4x4 safari cruiser with a pop-up roof",
    "Services of a highly experienced, English-speaking professional guide",
    "5 nights of comfortable wilderness accommodation at selected public campsites",
    "All freshly prepared meals (hearty breakfasts, picnic lunches, hot dinners)",
    "All national park entry fees, concession fees, and transit taxes",
    "Comprehensive daily game drives and complimentary bottled drinking water",
  ],
  excluded: [
    "International and domestic flights to/from Kilimanjaro/Arusha",
    "Tanzania tourist visa processing fees and comprehensive travel insurance",
    "Personal expenses (souvenirs, laundry, extra snacks)",
    "Optional cultural tours or pre/post-safari accommodation in Arusha",
    "Tips and gratuities to appropriately reward your dedicated safari crew",
  ],
  accommodation: {
    serengeti: "Nyani Camp (Deep Wilderness)",
    ngorongoro: "Simba Campsite (Panoramic Crater Rim)",
    lakemanyara: "Migombani Campsite (Rift Valley Escarpment)",
  },
  itinerary: [
    {
      day: 1,
      title: "Arusha to Serengeti National Park - The Adventure Begins",
      description:
        "Your grand Tanzanian safari kicks off with a morning departure from Arusha. We will traverse the dramatically picturesque landscapes of the Great Rift Valley, heading ever closer to the world-famous Serengeti. The journey offers breathtaking scenic views of the rolling plains, winding through the Ngorongoro Highlands where you can spot traditional Maasai villages dotting the landscape. The excitement peaks as we cross through the park gates and immediately embark on an electrifying afternoon game drive, tracking your first African predators as the golden hour settles over the savanna.",
      destination: "Serengeti National Park",
      meals: "Lunch & Dinner",
      accommodation: "Nyani Camp (Deep Wilderness)",
      image: imgAsset_9,
      highlights: [
        "Traverse the edge of the majestic Great Rift Valley",
        "Scenic drive through the lush Ngorongoro Highlands",
        "Cultural sights of traditional Maasai villages",
        "Thrilling afternoon game drive across the rolling plains",
      ],
    },
    {
      day: 2,
      title: "Full Day Extensive Explorer in Serengeti National Park",
      description:
        "Rise and shine for a full, uninterrupted day devoted entirely to exploring the immense and magnificent Serengeti. The park's sweeping plains and winding seasonal rivers support an absolutely extraordinary concentration of wildlife. Based on the season, your expert guide will track the incredible Great Migration or focus on the abundant resident wildlife. Prepare to witness majestic prides of lions lounging on kopjes, cheetahs scanning the horizon for a hunt, massive elephants roaming freely, and seemingly endless herds of wildebeest and zebras. We will enjoy a mid-day picnic in the wild before continuing our tracking until dusk.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Nyani Camp (Deep Wilderness)",
      image: imgAsset_14,
      highlights: [
        "Intensive tracking of massive lion prides and elusive cheetahs",
        "Close encounters with roaming elephant herds",
        "Witness visually stunning wildebeest and zebra herds",
        "Unbeatable, golden-hour photography opportunities",
      ],
    },
    {
      day: 3,
      title: "Serengeti Plains to the Ngorongoro Highlands",
      description:
        "After enjoying breakfast surrounded by the sounds of the African bush, we depart the Serengeti with a final scenic morning game drive. The environment slowly and dramatically shifts as we transition from the vast, dry plains up into the lush, towering highlands of the Ngorongoro Conservation Area. The landscape transforms into rolling green hills wrapped in misty forests. We will arrive at our selected campsite near the crater rim in the late afternoon, just in time to appreciate the crisp air and dramatic panoramic scenery overlooking the caldera before sitting down to a hot dinner.",
      destination: "Ngorongoro Conservation Area",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite (Panoramic Crater Rim)",
      image: imgAsset_5,
      highlights: [
        "Final thrilling morning game drive on the expansive plains",
        "Dramatic, scenic transition into the verdant highlands",
        "Breathtaking panoramic views of the crater rim",
        "Relaxing evening at an elevated, scenic campsite",
      ],
    },
    {
      day: 4,
      title: "Ngorongoro Crater Full-Day Immersion",
      description:
        "Today, you will descend 600 meters directly into the Ngorongoro Crater, famously designated as a UNESCO World Heritage Site and the 'Eighth Wonder of the World'. The enclosed crater floor has formed a uniquely self-sustained ecosystem teeming with an astonishing density of year-round wildlife. It is one of the absolute best places in Africa to spot the Big Five in a single day, including massive black-maned lions, giant tusked elephants, cape buffaloes, and the incredibly rare black rhinoceros. We will break for an unforgettable picnic lunch hosted right beside the famous hippo pool before continuing our exploration.",
      destination: "Ngorongoro Crater",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Simba Campsite (Panoramic Crater Rim)",
      image: imgAsset_5,
      highlights: [
        "Dramatic 600m descent into a dormant volcanic caldera",
        "Explore a legendary, UNESCO-protected natural wonder",
        "Premium chances to spot the highly endangered black rhinoceros",
        "Memorable picnic lunch beside a bustling hippo pool",
      ],
    },
    {
      day: 5,
      title: "Lake Manyara National Park - Forests & Flamingos",
      description:
        "Following a hearty breakfast, we travel to our final wildlife destination: Lake Manyara National Park. Described by Ernest Hemingway as 'the loveliest I had seen in Africa', this scenic gem is nestled right at the base of the dramatic Great Rift Valley escarpment. The park is uniquely renowned for its lush, underground water forests, vast baboon troops, and vibrant, colorful birdlife, including thousands of pink flamingos on the alkaline lake. If we are lucky, we may even encounter Manyara's famous and highly unusual tree-climbing lions resting in the high acacia branches.",
      destination: "Lake Manyara National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Migombani Campsite (Rift Valley Escarpment)",
      image: imgAsset_5,
      highlights: [
        "Explore lush, ancient groundwater forests",
        "Marvel at vibrant flocks of pink flamingos along the lake",
        "Track Lake Manyara's legendary tree-climbing lions",
        "Spectacular views of the towering Great Rift Valley wall",
      ],
    },
    {
      day: 6,
      title: "Scenic Return Journey to Arusha",
      description:
        "Enjoy your final safari breakfast at the Migombani Campsite, soaking in the sweeping views of the rift valley below. We will then pack up and begin our incredibly scenic and relaxing drive back to Arusha. The return journey offers culturally rich glimpses of the highlands, local Tanzanian farms, bustling rural communities, and vibrant roadside markets. Upon your arrival back in Arusha town by early afternoon, you can opt for an exciting local city tour, or we can transfer you directly to your hotel or the airport, marking the end of a truly epic 6-day Tanzanian adventure.",
      destination: "Arusha",
      meals: "Breakfast only",
      accommodation: null,
      image: null,
      highlights: [
        "Relaxing, culturally enriching drive through the highlands",
        "Observe lush local farms and welcoming rural communities",
        "Optional Arusha city tour and souvenir shopping",
        "Smooth, hassle-free conclusion to an unforgettable safari",
      ],
    },
  ],
};
