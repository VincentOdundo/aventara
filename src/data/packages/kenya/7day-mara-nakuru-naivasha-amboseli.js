import imgAsset_1 from "../../../assets/cheater-safari.jpeg";
import imgAsset_3 from "../../../assets/elefant-vegetation.jpeg";
import imgAsset_5 from "../../../assets/flamingo-water.jpeg";
import imgAsset_9 from "../../../assets/mountain.jpeg";
import imgAsset_11 from "../../../assets/rhino_plain.jpeg";

export const package7DayMaraNakuruNaivashaAmboseli = {
  id: "7-day-mara-nakuru-naivasha-amboseli",
  slug: "7-day-mara-nakuru-naivasha-amboseli-budget",
  title: "7-Days Masai Mara, Lake Nakuru, Naivasha and Amboseli Budget Safari", 
  subtitle: "Experience the Ultimate 7-Day Kenyan Adventure: Big Five, Rift Valley & Mount Kilimanjaro",
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
    "Witness the legendary Big Five in Masai Mara",
    "Breathtaking views of Mount Kilimanjaro in Amboseli",
    "Cycling through the geothermal wonders of Hell's Gate",
    "Spot endangered rhinos at Lake Nakuru sanctuary",
    "Incredible Great Rift Valley scenic photography",
  ],
  included: [
    "Transportation in a customized 4x4 safari vehicle",
    "Expert, English-speaking professional guide",
    "6 nights of immersive, comfortable accommodation",
    "Deluxe full-board meals as per the itinerary",
    "All comprehensive park entry fees",
    "Daily unforgettable game drives",
    "Exclusive Hell's Gate National Park access",
  ],
  excluded: [
    "International flights and visa fees",
    "Personal expenses (souvenirs, extra drinks)",
    "Tips and gratuities for your dedicated guide",
    "Optional thrilling activities (e.g., hot air balloon)",
    "Comprehensive travel insurance",
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
      title: "Nairobi to Masai Mara: Into the Heart of the Wild",
      description:
        "Your adventure begins with a prompt morning pick-up in Nairobi. We set off on a thrilling journey down into the majestic Great Rift Valley, stopping at scenic viewpoints that will leave you breathless. Arriving in the world-renowned Masai Mara in time for a hearty lunch, you'll settle into your camp before embarking on your very first late-afternoon game drive. The Mara's golden savannahs are waiting for you!",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_1,
      highlights: ["Panoramic Great Rift Valley Views", "Thrilling Sunset Game Drive", "Welcome to the Savannah"],
    },
    {
      day: 2,
      title: "Full-Day Masai Mara: In Search of the Big Five",
      description:
        "Rise with the African sun for a spectacular full-day game drive across the boundless plains of the Masai Mara. Armed with a delicious picnic lunch, we will journey deep into the reserve, exploring varied habitats. Keep your camera ready as we track down the legendary Big Five—lions, leopards, rhinos, elephants, and cape buffaloes. If the season is right, witness the dramatic Great Migration river crossings at the Mara River!",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: imgAsset_3,
      highlights: ["Unrestricted Big Five Tracking", "Legendary Mara River", "Spectacular Great Migration (seasonal)"],     
    },
    {
      day: 3,
      title: "Masai Mara to Lake Nakuru: A Shift in Scenery",
      description:
        "After a final morning gazing over the Mara, we journey towards Lake Nakuru. Along the way, choose an optional tranquil stop at Lake Naivasha for a refreshing boat ride among hippos. We proceed to Lake Nakuru National Park, a paradise for bird watchers and rhino lovers alike. You'll arrive with plenty of time to check in, relax, and anticipate the wonders of the Great Rift Valley lakes.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel",
      image: imgAsset_5,
      highlights: ["Optional Lake Naivasha Excursion", "Great Rift Valley Drive", "Relaxing Lodge Arrival"],
    },
    {
      day: 4,
      title: "Lake Nakuru to Naivasha: Rhinos & Pink Flamingos",
      description:
        "An early breakfast fuels an incredible morning game drive in Lake Nakuru National Park. Known as a vital rhino sanctuary, this is your best chance to spot both black and white rhinos grazing peacefully. Marvel at the vibrant pink flashes of seasonal flamingos and keep an eye out for tree-climbing lions. In the afternoon, we take a short drive to the serene shores of Lake Naivasha to unwind.",
      destination: "Lake Naivasha",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Leisure Apex Resort",
      image: imgAsset_5,
      highlights: [
        "Exclusive Rhino Sanctuary Visit",
        "Rare Black and White Rhinos",
        "Flamingo Flocks (seasonal)",
      ],
    },
    {
      day: 5,
      title: "Hell's Gate to Amboseli: Geothermal Wonders to Mountain Peaks",
      description:
        "Start your day with an exhilarating visit to Hell's Gate National Park, one of the few places in Africa where you can safely cycle or walk amidst wild grazing animals! After soaking in the towering cliffs and geothermal energy, we depart for Amboseli. As we approach, witness the awe-inspiring sight of Mount Kilimanjaro rising above the dusty plains. Check into your camp and prepare for tomorrow's giant encounters.",        
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_9,
      highlights: [
        "Hell's Gate Cycling/Walking",
        "Breathtaking Scenic Landscapes",
        "First Glimpse of Mount Kilimanjaro",
      ],
    },
    {
      day: 6,
      title: "Full-Day Amboseli: The Land of Giants",
      description:
        "Amboseli is globally famous for its massive elephant herds with impressive tusks. Today is dedicated to capturing the quintessential African postcard shot: majestic wildlife framed by the snow-capped peak of Mount Kilimanjaro. During morning and afternoon game drives, explore verdant swamps hosting hippos and incredible birdlife, while lions and cheetahs prowl the dry perimeters.",   
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      image: imgAsset_11,
      highlights: [
        "Massive Free-Roaming Elephant Herds",
        "Iconic Mount Kilimanjaro Backdrops",
        "Vibrant Swamps & Waterholes",
        "Golden Hour Safari Photography",
      ],
    },
    {
      day: 7,
      title: "Amboseli to Nairobi: Farewell to the Wild",
      description:
        "Savor an optional early morning game drive to catch the dawn light dancing on Kilimanjaro's peak—a deeply moving climax to your safari. After a fulfilling breakfast, we embark on a comfortable journey back to Nairobi. You'll carry home unforgettable memories of Kenya's Big Five, the Great Rift Valley, and the warmth of the African sun. Arrive in the afternoon for your onward travel or flight.",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: null,
      highlights: ["Optional Sunrise Game Drive", "Final Kilimanjaro Views", "Safe Return to Nairobi"],
    },
  ],
};
