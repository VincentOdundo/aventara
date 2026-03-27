import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_5 from "../../../assets/flamingo-water.jpeg";
import imgAsset_14 from "../../../assets/wildbeasts.jpg";

export const package5DayTanzania = {
  id: "5-day-tanzania",
  slug: "5-day-tanzania-complete",
  title: "5-Day Tanzania Package - The Ultimate Big Five Expedition",
  subtitle:
    "Embark on an epic journey discovering Tanzania's absolute best: Tarangire's giants, the endless Serengeti, Lake Manyara's beauty, & the Ngorongoro Crater.",
  days: 5,
  country: "tanzania",
  destinations: ["Tarangire", "Serengeti", "Ngorongoro", "Lake Manyara"],
  price: { low: 1050, high: 1400 },
  image: imgAsset_9,
  gallery: [imgAsset_5, imgAsset_14],
  difficulty: "Budget",
  highlights: [
    "Marvel at the massive elephant herds in Tarangire",
    "Track the world-famous Great Migration in the Serengeti",
    "Descend into the breathtaking Ngorongoro Crater",
    "Spot tree-climbing lions at Lake Manyara",
    "Experience five action-packed days of premium wildlife viewing",
  ],
  included: [
    "5 days / 4 nights of comfortable wilderness accommodation at selected public campsites",
    "All freshly prepared meals during the safari (Hearty breakfasts, picnic lunches, and hot dinners)",
    "Exclusive transportation in a custom pop-up roof 4x4 safari vehicle with a professional guide",
    "All mandatory national park entry fees, transit fees, and conservation charges",
    "Unlimited scheduled game drives and complimentary bottled drinking water daily",
  ],
  excluded: [
    "International and domestic flights to/from Tanzania",
    "Tanzania tourist visa processing fees and comprehensive travel insurance",
    "Personal expenses (souvenirs, laundry, extra snacks)",
    "Alcoholic beverages and premium soft drinks outside of standard meal service",
    "Tips and gratuities to appropriately reward your dedicated safari guide and camp chefs",
  ],
  accommodation: {
    tarangire: "Tarangire Campsite (Riverside Wilderness)",
    serengeti: "Nyani Camp (Heart of the Plains)",
    ngorongoro: "Simba Campsite (Panoramic Crater Rim)",
    lakemanatura: "Migombani Campsite (Rift Valley Views)",
  },
  itinerary: [
    {
      day: 1,
      title: "Arusha to Tarangire National Park - Realm of the Giants",
      description:
        "After a warm welcome and briefing in Arusha, your adventure officially begins as we depart for Tarangire National Park. Known as the 'Realm of Giants,' this stunning park is famous for its massive herds of elephants roaming beneath the branches of ancient, mystical baobab trees. Upon arrival, we dive straight into a full-day game drive. Keep your camera ready as we explore the vital Tarangire River, a magnet for thirsty wildlife including lions, leopards, giraffes, and a spectacular array of birdlife. As the sun sets, we'll head to our campsite for a relaxing evening in the African bush.",
      destination: "Tarangire National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Tarangire Campsite (Riverside Wilderness)",
      image: imgAsset_9,
      highlights: [
        "Unforgettable encounters with massive elephant herds",
        "Iconic landscapes dotted with ancient baobab trees",
        "Exceptional wildlife viewing along the Tarangire River",
      ],
    },
    {
      day: 2,
      title: "Tarangire to the Endless Plains of the Serengeti",
      description:
        "After an early breakfast, we leave Tarangire behind and set our sights on the legendary Serengeti National Park. The scenic drive takes us up into the sweeping, lush highlands of the Ngorongoro Conservation Area before dropping down onto the seemingly endless savanna. The sheer vastness of the Serengeti, which means 'Endless Plains' in the local Maasai language, becomes immediately apparent. We enter the park with an en-route game drive, instantly throwing you into the heart of the action. Prepare to be amazed by the incredible density of plains game and the ever-present predators that stalk them.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Nyani Camp (Heart of the Plains)",
      image: imgAsset_14,
      highlights: [
        "Traverse the dramatic Ngorongoro Conservation Area highlands",
        "Witness the awe-inspiring transition to the expansive Serengeti plains",
        "Thrilling en-route game drive seeking out diverse wildlife herds",
      ],
    },
    {
      day: 3,
      title: "Full Day Explorer in Serengeti National Park",
      description:
        "Today is entirely dedicated to exploring the unmatched wilderness of the Serengeti! After breakfast, we set out with a packed picnic lunch to maximize our time in the bush. Your expert driver-guide will customize the day's route based on the seasonal movement of the wildlife, maximizing your chances of witnessing the dramatic events of the Great Migration or spotting elusive leopards resting in sausage trees. The Serengeti boasts an incredibly high density of predators, so be prepared for thrilling encounters with lion prides, cheetahs, and hyenas out in the open savanna.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Nyani Camp (Heart of the Plains)",
      image: imgAsset_9,
      highlights: [
        "Follow the path of the legendary Great Migration (seasonal)",
        "Premium opportunities for observing high predator density and dramatic hunts",
        "Unforgettable scenic picnic lunch in the untamed wilderness",
      ],
    },
    {
      day: 4,
      title: "Serengeti to the Magnificent Ngorongoro Crater Rim",
      description:
        "Wake up to a golden Serengeti sunrise! After breakfast, we embark on a final, action-packed morning game drive through the Serengeti as we slowly make our way toward the park's exit. The drive offers a final chance to capture photographs of the iconic wildlife before we begin our scenic ascent back into the Ngorongoro Conservation Area. The temperatures cool as we climb toward the highlands, offering spectacular panoramic views. We will arrive at the Simba Campsite, situated right on the crater rim, in time to witness a breathtaking sunset overlooking the world's largest intact volcanic caldera.",
      destination: "Ngorongoro Conservation Area",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite (Panoramic Crater Rim)",
      image: imgAsset_5,
      highlights: [
        "Final thrilling morning game drive exiting the Serengeti plains",
        "Dramatic ascent back to the lush crater highlands",
        "Mesmerizing sunset views from the spectacular crater rim",
      ],
    },
    {
      day: 5,
      title: "Ngorongoro Crater, Lake Manyara, and Return to Arusha",
      description:
        "Prepare for a grand finale! After an early breakfast, we descend 600 meters straight into the belly of the Ngorongoro Crater. This natural wonder is a self-contained ecosystem boasting a staggering concentration of year-round wildlife, including a fantastic chance to spot the highly endangered black rhino. After a phenomenal morning game drive and a picnic lunch inside the crater, we ascend the walls and make a brief scenic passage to Lake Manyara National Park. Famous for its unique tree-climbing lions and vast flocks of pink flamingos, it's the perfect ending to an epic adventure before we return to Arusha to conclude your ultimate 5-day safari.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Epic morning game drive inside the legendary Ngorongoro Crater",
        "Encounter the incredible biodiversity of the 'Eighth Wonder of the World'",
        "Brief exploration of Lake Manyara's famous tree-climbing lions and flamingos",
        "Comfortable and scenic return journey to Arusha",
      ],
    },
  ],
};
