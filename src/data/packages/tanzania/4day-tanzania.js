import genImg_0 from "../../../assets/nairobi/sunset-exotic.jpeg";
import genImg_1 from "../../../assets/lion.jpeg";
import genImg_2 from "../../../assets/nairobi/girfe-sunset.jpeg";
import genImg_3 from "../../../assets/cheater.jpeg";
import genImg_4 from "../../../assets/nairobi/girfe-sunset.jpeg";
import genImg_5 from "../../../assets/nairobi/sunset-exotic.jpeg";

;;
;;

export const package4DayTanzania = {
  id: "4-day-tanzania",
  slug: "4-day-serengeti-ngorongoro-budget",
  title: "4-Days Tanzania Package - Authentic Explorer",
  subtitle:
    "Immerse yourself in a spectacular four-day Serengeti and Ngorongoro Crater explorer safari. Witness world-class wildlife, vast savannas, and nature's grandest spectacles.",
  days: 4,
  country: "tanzania",
  destinations: ["Serengeti", "Ngorongoro"],
  price: { low: 850, high: 1150 },
  image: genImg_0,
  gallery: [genImg_1, genImg_2],
  difficulty: "Budget",
  highlights: [
    "Unforgettable full day immersed in the Serengeti National Park",
    "Exclusive descent into the renowned Ngorongoro Crater",
    "Prime opportunities for tracking and spotting the coveted Big Five",
    "Professional-grade photography moments across iconic landscapes",
    "Authentic wilderness camping under the dazzling African stars",
  ],
  included: [
    "All mandatory national park entrance fees and wildlife conservation charges",
    "Comfortable transportation in an exclusive, customized 4x4 safari vehicle",
    "Expert services of a licensed, English-speaking professional safari guide",
    "Full-board accommodation at premier public campsites within the parks",
    "Unlimited complimentary bottled drinking water during all game drives",
  ],
  excluded: [
    "International and domestic flights",
    "Tanzania tourist visa requirements and comprehensive travel insurance",
    "Tips and gratuities for your dedicated guide, driver, and support staff",
    "Personal expenses such as laundry, souvenirs, and alcoholic beverages",
    "Optional extra activities and pre/post-safari accommodation in Arusha",
  ],
  accommodation: {
    serengeti: "Nyani Camp (Immersive Wilderness)",
    ngorongoro: "Simba Campsite (Panoramic Crater Views)",
  },
  itinerary: [
    {
      day: 1,
      title: "Arusha to Serengeti National Park - Journey into the Wild",
      description:
        "Following a hearty breakfast in Arusha, prepare for the adventure of a lifetime as we set off toward the world-famous Serengeti National Park. The journey itself is a spectacular introduction to the beauty of northern Tanzania, featuring a scenic, winding drive through the lush highlands of the Ngorongoro Conservation Area. We'll pause at strategic viewpoints where the sheer scale of the landscape will leave you breathless. Upon our triumphant arrival in the Serengeti, we dive straight into the action with a thrilling afternoon game drive. Get ready to spot predators on the prowl as the golden hour bathes the savanna in magical light.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Nyani Camp (Immersive Wilderness)",
      image: genImg_3,
      highlights: [
        "Traverse the magnificent Ngorongoro Conservation Area",
        "Photography stops overlooking Northern Tanzania's epic landscapes",
        "Inaugural afternoon game drive in the endless Serengeti",
      ],
    },
    {
      day: 2,
      title: "Full Day Explorer in Serengeti National Park",
      description:
        "Rise early with the African sun for a spectacular full-day game drive in the Serengeti, undeniably one of Africa's most renowned and celebrated wildlife destinations. Today, the vast plains are yours to discover. With our expert guide leading the way, we'll traverse distinct ecosystems in search of the legendary Big Five—lions, leopards, rhinos, elephants, and buffalo—alongside a staggering array of other remarkable wildlife species. The Serengeti's seemingly endless savanna provides the ultimate backdrop for exceptional photography and intimate, undisturbed wildlife observation. Enjoy a scenic picnic lunch right in the heart of the wilderness before continuing your exploration until sunset.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Nyani Camp (Immersive Wilderness)",
      image: genImg_4,
      highlights: [
        "Intensive tracking of the legendary Big Five",
        "Unrivaled photography opportunities during the golden hours",
        "Close, respectful wildlife observation and ecological insights",
        "Unforgettable picnic lunch surrounded by pristine nature",
      ],
    },
    {
      day: 3,
      title: "Serengeti to Ngorongoro Conservation Area",
      description:
        "After enjoying breakfast at the camp while listening to the morning chorus of the savanna, embark on a final morning game drive through the Serengeti. Take this opportunity to check off any final wildlife sightings before we slowly depart the plains and begin our ascent toward the Ngorongoro Conservation Area. The transition in landscape is monumental, offering ever-changing, spectacular scenery as we climb into the cooler highlands. Keep your eyes peeled, as this transit route frequently yields incredible wildlife sightings. We'll arrive at our premium camping site perched high on the crater rim in the late afternoon, where a mesmerizing sunset awaits.",
      destination: "Ngorongoro Conservation Area",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite (Panoramic Crater Views)",
      image: genImg_5,
      highlights: [
        "Farewell morning game drive across the Serengeti plains",
        "Spectacular, varied scenery shifting from savanna to highlands",
        "En-route wildlife sightings and photography stops",
        "Breathtaking crater rim views and a magical sunset",
      ],
    },
    {
      day: 4,
      title: "Ngorongoro Crater Descent & Return to Arusha",
      description:
        "Following an early, energizing breakfast, prepare for the grand finale: a dramatic 600-meter descent straight down into the floor of the majestic Ngorongoro Crater. This incredibly unique, enclosed caldera is famously home to one of the highest concentrations of wildlife on the entire planet, including the highly endangered black rhinoceros and massive, majestic tusked elephants. Spend a captivating half-day traversing the diverse habitats within the crater, from lush forests to the alkaline Lake Magadi. After a scenic picnic lunch amid this natural wonder, we will ascend the crater walls and begin our comfortable return journey to Arusha, bringing your unforgettable Tanzanian safari to a close.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: [
        "Thrilling 600m descent into the dormant volcanic crater",
        "Intensive half-day game drive in a spectacular setting",
        "Witness an unrivaled concentration of year-round wildlife",
        "Enjoy a final picnic lunch inside an ecological wonder",
      ],
    },
  ],
};
