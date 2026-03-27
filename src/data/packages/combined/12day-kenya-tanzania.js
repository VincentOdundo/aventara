import imgAsset_1 from "../../../assets/cheater-safari.jpeg";
import imgAsset_3 from "../../../assets/elefant-vegetation.jpeg";
import imgAsset_5 from "../../../assets/flamingo-water.jpeg";
import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_11 from "../../../assets/rhino_plain.jpeg";
import imgAsset_14 from "../../../assets/wildbeasts.jpg";

export const package12DayKenyaTanzania = {
  id: "12-day-kenya-tanzania",
  slug: "12-day-kenya-tanzania-complete",
  title: "12-Days Kenya & Tanzania Budget Safari",
  subtitle: "The Complete East African Expedition: From the Mara to the Serengeti & Beyond",
  days: 12,
  country: "combined",
  destinations: [
    "Masai Mara",
    "Lake Nakuru",
    "Amboseli",
    "Tarangire",
    "Serengeti",
    "Ngorongoro",
  ],
  price: { low: 2000, high: 2700 },
  image: imgAsset_9,
  gallery: [imgAsset_11, imgAsset_3, imgAsset_5, imgAsset_14],
  difficulty: "Budget",
  highlights: [
    "Master the ultimate Big Five challenge across East Africa",
    "Behold Tarangire's massive elephant herds & ancient baobabs",
    "Immerse yourself in the world-renowned Serengeti migration",
    "Descend into the staggering, wildlife-rich Ngorongoro Crater",
    "Capture iconic sunset photos framed by Mount Kilimanjaro",
  ],
  included: [
    "Impeccable transport in customized 4x4 safari land cruisers",
    "Outstanding English-speaking safari guide & driver expertise",
    "11 phenomenal nights in comfortable eco-camps and lodges",
    "Delicious full-board dining across both countries",
    "All essential national park & crater conservation fees",
    "World-class, unhurried game drives in top-tier reserves",
    "Detailed safari briefing and seamless border assistance",
  ],
  excluded: [
    "International flight arrangements and visas",
    "Comprehensive personal travel insurance",
    "Personal purchases, extra drinks & souvenirs",
    "Gratuities indicating appreciation for your guide",
    "Optional adrenaline activities (e.g., hot air balloons)",
  ],
  accommodation: {
    mara: "Miti Mingi Eco Camp",
    nakuru: "Buraha Zenoni Hotel",
    amboseli: "Ositua Rafiki Camp",
    tarangire: "Tarangire Camp",
    serengeti: "Nyani Camp",
    ngorongoro: "Simba Campsite",
    arusha: "Charity Hotel",
  },
  itinerary: [
    {
      day: 1,
      title: "Descent into the Wild: Nairobi to Masai Mara",
      description:
        "Begin your transformational 12-day journey with an early morning pickup in Nairobi. Our drive plunges down the spectacular Great Rift Valley escarpment. By lunch, you'll be seated at your eco-camp on the edge of the world-famous Masai Mara. Later, as the afternoon cools, we venture out for your inaugural sunset game drive, where predators first start to actively prowl the savannah.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: ["Great Rift Valley Viewpoints", "Thrilling Introductory Game Drive", "Sunset under Acacia Trees"],
    },
    {
      day: 2,
      title: "The Heart of the Action: Full-Day Masai Mara Explorer",
      description:
        "Armed with a picnic lunch and an unyielding sense of adventure, we devote an entire day to conquering the Masai Mara. Traverse vast eco-zones in search of the coveted Big Five. You will journey to the historic Mara River, the perilous crossing point for over two million wildebeest and zebra during the Great Migration. An undisputed highlight of any African safari!",  
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_3,
      highlights: ["Extensive Big Five Tracking", "Legendary Mara River Crossings", "The Great Migration Witness (seasonal)"],     
    },
    {
      day: 3,
      title: "No Stone Unturned: A Second Day in the Mara",
      description:
        "The sheer scale of the Maasai Mara ecosystem demands a second full day of intensive exploration. We'll track stealthy leopards, roaring lion prides, and the fastest land mammal, the cheetah. With no need to rush, you have the leisure to properly observe varied social behaviors of elephants and primates, yielding wildlife photography you will cherish forever.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: ["Patient Wildlife Photography", "Exceptional Predator Sightings", "Vast Grazing Birdlife"],
    },
    {
      day: 4,
      title: "Rift Valley Drive: Masai Mara to Lake Nakuru",
      description:
        "Saying goodbye to the boundless plains of the Mara, we travel deeper into the Great Rift Valley. Enjoy the scenic journey, and perhaps indulge in an optional detour to Lake Naivasha for a serene hippopotamus boat ride. Arrive at the lush, forested boundaries of Lake Nakuru National Park with time to relax and recharge for tomorrow's incredible rhino encounters.",    
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_5,
      highlights: ["Optional Lake Naivasha Safari", "Iconic Great Rift Valley Scenery", "Arrival at Nakuru"],
    },
    {
      day: 5,
      title: "Lake Nakuru: Rhino Sanctuaries and Pink Waters",
      description:
        "Embrace a spectacular full-day focus on Lake Nakuru, recognized as a globally crucial rhinoceros sanctuary. You'll likely encounter both the heavy-set black rhino and the more docile white rhino. Beyond rhinos, the park is famous for massive seasonal flocks of pink flamingos, towering Rothschild giraffes, and tree-climbing lions slumbering on thick branches.",       
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_11,
      highlights: ["Exclusive Rhino Safaris", "Unique Tree-Climbing Lions", "Flamingo Spectacles (seasonal)"],
    },
    {
      day: 6,
      title: "Journey to the Giants: Lake Nakuru to Amboseli",
      description:
        "Departing the central Rift Valley, we pass sprawling ranches and local communities en route to the arid, dramatic landscapes of Amboseli National Park in southern Kenya. Arriving into camp in the late afternoon, you'll be greeted by one of the most famous sights on Earth—the immense, snow-capped roof of Africa, Mount Kilimanjaro, breaking through the clouds.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_9,
      highlights: ["Cross-Country Safari", "First Sighting of Mount Kilimanjaro", "Vast Elephant Herds"],
    },
    {
      day: 7,
      title: "Amboseli Revealed: Elephants in the Shadow of Kilimanjaro",
      description:
        "Your full day in Amboseli is a masterclass in iconic African photography. The park guarantees extraordinary close-up encounters with some of the continent's largest, oldest elephants. We traverse dry beds and lush, emerald swamps packed with hippopotamuses and vibrant waterbirds, all set against the breathtaking volcanic backdrop of majestic Kilimanjaro.",     
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_11,
      highlights: ["Massive Free-Roaming Elephants", "Unparalleled Kilimanjaro Views", "Wildlife-Rich Volcanic Swamps"],
    },
    {
      day: 8,
      title: "Crossing the Frontier: Amboseli to Arusha, Tanzania",
      description:
        "After an early breakfast, we journey to the Namanga border, facilitating a smooth crossing into Tanzania. Greeted by your new, highly experienced Tanzanian guide, we continue smoothly to Arusha, the lively gateway to the Northern Safari Circuit. Settle into your hotel, relish a superb dinner, and undergo a comprehensive briefing for the massive Tanzanian leg of your trip!",
      destination: "Arusha",
      meals: "Breakfast & Dinner",
      accommodation: "Charity Hotel",
      image: null,
      highlights: ["Seamless International Border Crossing", "Welcome to Tanzania", "Expert Safari Briefing"],     
    },
    {
      day: 9,
      title: "Land of Baobabs: Arusha to Tarangire & The Serengeti",
      description:
        "Your first day in Tanzania kicks off with immense drama! We head straight to Tarangire National Park, famous for rolling hills studded with ancient, colossal baobab trees and unbelievable densities of elephants. After an intensive morning assessing Tarangire's wonders, we depart in the late afternoon for the gate of the magnificent Serengeti National Park.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_14,
      highlights: ["Unreal Tarangire Elephant Herds", "Ancient Super-Sized Baobabs", "Thrilling Serengeti Entry"],   
    },
    {
      day: 10,
      title: "Endless Horizons: A Full Day in the Serengeti",
      description:
        "Wake up in the most renowned wildlife sanctuary in the world—The Serengeti. We harness a full day exploring these 'endless plains'. Expect heart-pounding predator-prey interactions as we monitor high-density lion prides and solitary cheetahs. Depending on the season, you will witness the thundering hooves of the Great Migration, stretching visually to the horizon.",    
      destination: "Serengeti National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Nyani Camp",
      image: imgAsset_14,
      highlights: ["Epic Great Migration Focus", "High-Intensity Predator Tracking", "World-Class Nature Photography"],
    },
    {
      day: 11,
      title: "Into the Volcano: Serengeti to Ngorongoro Crater",
      description:
        "After seizing a final glorious morning game drive in the Serengeti, we ascend into the cool, misty Ngorongoro Highlands. We then take the jaw-dropping 600-meter descent into the Ngorongoro Crater itself. This natural amphitheater is an isolated utopia yielding incredible chances to spot the extremely rare black rhino, massive-tusked elephants, and huge prides of crater lions.",
      destination: "Ngorongoro Crater",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite",
      image: imgAsset_5,
      highlights: ["Highland Safari Ascent", "Breathtaking 600m Crater Descent", "Unmatched Animal Density", "Rare Black Rhino Quest"],
    },
    {
      day: 12,
      title: "Farewell to Paradise: Ngorongoro to Arusha",
      description:
        "Enjoy a serene morning overlooking the expansive lip of the crater, reflecting on an unfathomable 12-day journey through the heart of untamed Africa. We then embark on a picturesque journey back to Arusha. Here, we bid our fondest farewells, ensuring you arrive in time for your flight home or your well-deserved beach extension to Zanzibar.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: ["Panoramic Crater Rim Views", "Scenic Descent to Arusha", "A Triumphant Safari Conclusion"],      
    },
  ],
};