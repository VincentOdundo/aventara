import genImg_0 from "../../../assets/lioness_open.jpeg";
import genImg_1 from "../../../assets/treecheta.jpeg";
import genImg_2 from "../../../assets/nairobi/sunset-exotic.jpeg";
import genImg_3 from "../../../assets/nairobi/girfe-sunset.jpeg";
import genImg_4 from "../../../assets/nairobi/sunset-exotic.jpeg";

;;
;;

export const package3DayTanzania = {
  id: "3-day-tanzania",
  slug: "3-day-serengeti-ngorongoro",
  title: "3-Days Serengeti & Ngorongoro Crater Big Five Safari",
  subtitle:
    "Experience Tanzania's most iconic wildlife parks in a thrilling, action-packed three-day adventure. Witness the Great Migration and the majestic Big Five!",
  days: 3,
  country: "tanzania",
  destinations: ["Serengeti", "Ngorongoro Crater"],
  price: { low: 650, high: 950 },
  image: genImg_0,
  gallery: [genImg_1, genImg_2],
  difficulty: "Budget",
  highlights: [
    "Endless Serengeti plains teeming with magnificent wildlife",
    "Descent into the world-famous Ngorongoro Crater",
    "Unmatched Big Five wildlife concentration and viewing",
    "Breathtaking landscapes of the scenic volcanic highlands",
    "Unforgettable African sunsets and starlit nights",
  ],
  included: [
    "Exclusive transportation in a custom pop-up roof 4x4 safari vehicle",
    "Expert, English-speaking professional driver-guide",
    "Comfortable wilderness accommodation at selected camps",
    "All freshly prepared meals as per the detailed itinerary",
    "All necessary national park entry fees and concessions",
    "Daily comprehensive and thrilling game drives",
    "Scenic picnic lunch in the heart of the African bush",
  ],
  excluded: [
    "International and domestic flights",
    "Tanzania tourist visa fees",
    "Comprehensive travel and medical insurance",
    "Personal expenses (beverages, laundry, souvenirs)",
    "Tips and gratuities for your dedicated safari crew",
  ],
  accommodation: {
    serengeti: "Nyani Camp (Wilderness Experience)",
    ngorongoro: "Simba Campsite (Crater Rim Views)",
  },
  itinerary: [
    {
      day: 1,
      title: "Arusha to Serengeti National Park - The Journey Begins",
      description:
        "Your adventure kicks off with an early morning departure from Arusha, charting a course toward the legendary, seemingly endless plains of the Serengeti National Park. The journey itself is a visual feast, winding through the lush, scenic highlands of the Ngorongoro Conservation Area, where you might catch your first glimpse of grazing wildlife. Following a delicious lunch, we venture deep into the Serengeti for an electrifying afternoon game drive. Get your cameras ready as we track majestic predators, massive elephant herds, and the incredibly diverse plains game that make this UNESCO World Heritage site a true marvel of nature.",
      destination: "Serengeti National Park",
      meals: "Lunch & Dinner",
      accommodation: "Nyani Camp (Wilderness Experience)",
      image: genImg_3,
      highlights: [
        "Traverse the Ngorongoro Conservation Area",
        "Breathtaking scenery of the highlands",
        "Thrilling inaugural afternoon game drive in the Serengeti",
      ],
    },
    {
      day: 2,
      title: "Serengeti Plains to Ngorongoro Conservation Area",
      description:
        "Wake up to the melodic sounds of the African bush! Following a hearty breakfast, embark on a comprehensive morning game drive across the Serengeti. We'll navigate the vast landscapes and iconic open plains, seeking out the Big Five and capturing the raw, untamed beauty of the wilderness. As the day progresses, we'll slowly game-drive our way toward the Ngorongoro Conservation Area, soaking in panoramic views. By late afternoon, we'll arrive at the spectacular Ngorongoro Crater rim, where you'll settle into camp and marvel at an unforgettable sunset overlooking the largest intact volcanic caldera in the world.",
      destination: "Ngorongoro Conservation Area",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite (Crater Rim Views)",
      image: genImg_4,
      highlights: [
        "Extensive morning game drive",
        "Iconic wildlife on the open plains",
        "Jaw-dropping views from the crater rim",
      ],
    },
    {
      day: 3,
      title: "Descent into Ngorongoro Crater & Return to Arusha",
      description:
        "After an early breakfast, brace yourself for the highlight of the trip as we descend 600 meters into the magnificent Ngorongoro Crater for a spectacular half-day game drive. Known as the 'Eighth Wonder of the World,' the crater boasts a unique and enclosed ecosystem harboring an incredibly dense population of wildlife, including the rare black rhino. Enjoy a magical picnic lunch right by the hippo pool situated within the crater floor. After savoring this incredible experience, we'll ascend back to the rim and begin our scenic return journey to Arusha, concluding a safari adventure that will live in your memories forever.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Dramatic 600m crater descent",
        "Intensive half-day game drive in the caldera",
        "Explore a globally unique ecosystem",
        "Unforgettable picnic lunch inside the crater",
      ],
    },
  ],
};
