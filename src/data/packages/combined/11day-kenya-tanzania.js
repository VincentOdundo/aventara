import { PHOTOS } from "../../photos";

const heroImg = PHOTOS.masaiMaraLeopardWalk.src;

export const package11DayKenyaTanzania = {
  id: "11-day-kenya-tanzania",
  slug: "11-day-kenya-tanzania-budget",
  title: "11-Day Kenya & Tanzania Budget Safari",
  subtitle:
    "The Masai Mara, Lake Nakuru and Amboseli, then the Serengeti and Ngorongoro Crater.",
  days: 11,
  country: "combined",
  destinations: [
    "Masai Mara",
    "Lake Nakuru",
    "Amboseli",
    "Serengeti",
    "Ngorongoro",
  ],
  price: { low: 1900, high: 2600 },
  image: heroImg,
  difficulty: "Budget",
  highlights: [
    "Track the Big Five across multiple national parks",
    "Experience the endless plains of the Serengeti",
    "Descend into the Ngorongoro Crater ecosystem",
    "Gaze upon the snow-capped majesty of Mount Kilimanjaro",
    "Witness the thundering Great Migration (seasonal)",
  ],
  included: [
    "Transport in an authentic 4x4 safari cruiser with a pop-up roof",
    "Insightful guidance from a professional, bilingual tour driver",
    "10 nights of comfortable eco-lodges and camps",
    "Scrumptious daily meals throughout the itinerary",
    "All inclusive, pre-paid park and crater entry fees",
    "Game drives tailored for maximum wildlife encounters",
    "Comprehensive pre-safari briefing and seamless border transfer",
  ],
  excluded: [
    "International flights to East Africa",
    "Tourist visas for Kenya and Tanzania",
    "Your crucial protective travel insurance",
    "Extra beverages and personal purchases",
    "Tipping your dedicated safari guides",
  ],
  accommodation: {
    mara: "Miti Mingi Eco Camp",
    nakuru: "Buraha Zenoni Hotel & Resort",
    amboseli: "Ositua Rafiki Camp",
    serengeti: "Nyani Camp",
    ngorongoro: "Simba Campsite",
    arusha: "The Charity Hotel",
  },
  itinerary: [
    {
      day: 1,
      title: "Nairobi to the Masai Mara & Evening Game Drive",
      description:
        "Your adventure commences right from your Nairobi hotel or the airport! Meet your driver-guide and set off down the walls of the Great Rift Valley, enjoying postcard-worthy viewpoints. We arrive at the Masai Mara just in time to savor a wonderful lunch. Once refreshed, we launch into an evening game drive-your first real taste of wild Africa.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      
      highlights: [
        "Great Rift Valley Drop",
        "First Evening Game Drive",
        "Welcome to Masai Mara",
      ],
    },
    {
      day: 2,
      title: "In Search of Giants",
      description:
        "Leave camp as dawn breaks, carrying a packed picnic lunch to fuel a monumental full-day safari. We meticulously comb the sprawling golden savannahs, scanning carefully for the Big Five-lions, elephants, leopards, buffalo, and rhinos. At the Mara River, witness the historic sites where immense herds bravely cross crocodile-infested waters during the Great Migration.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      
      highlights: [
        "Big Five Tracking",
        "Mara River",
        "The Great Migration Witness (seasonal)",
      ],
    },
    {
      day: 3,
      title: "Second Day in the Masai Mara",
      description:
        "Due to the Masai Mara's enormous size, a second full day is crucial to soak in its wonders properly. We venture into less-visited sectors, allowing you to photograph diverse animal families undisturbed. Marvel at stealthy predators, massive grazing herds of zebra and wildebeest, and an array of colourful birdlife that decorates the acacia trees.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      
      highlights: [
        "Intensive Wildlife Photography",
        "Untamed Predator Action",
        "Vast Savannah Views",
      ],
    },
    {
      day: 4,
      title: "Journey to Lake Nakuru",
      description:
        "Following breakfast, we commence our journey towards the Great Rift Valley lakes. You have the enticing option to halt at Lake Naivasha for a serene boat safari among hippos. We roll into Lake Nakuru National Park by the afternoon, allowing for a smooth check-in and an evening filled with relaxation amidst pristine nature.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel & Resort",
      
      highlights: [
        "Optional Lake Naivasha Safari",
        "Beautiful Rift Valley Landscapes",
        "Arrive and Unwind",
      ],
    },
    {
      day: 5,
      title: "Rhinos and Pink Shores",
      description:
        "Today, we take our time exploring Lake Nakuru. Famed worldwide as a rhino sanctuary, you are virtually guaranteed sightings of these prehistoric-looking beasts. The lake itself often shimmers pink with massive flocks of flamingos, reflecting against the deep green woodlands that shelter the endangered Rothschild giraffe and tree-climbing lions.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel & Resort",
      
      highlights: [
        "Renowned Rhino Sanctuary",
        "Endangered Rothschild Giraffes",
        "Avian Flocks",
      ],
    },
    {
      day: 6,
      title: "Lake Nakuru to Amboseli",
      description:
        "Today traces a cross-country path from the central Rift Valley to the southern borders. After breakfast, we drive past diverse Kenyan landscapes right to the boundary of Amboseli National Park. As we pull into camp in the late afternoon, keep an eye on the horizon-Mount Kilimanjaro often sheds its cloud cover just before sunset!",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      
      highlights: [
        "Scenic Cross-Country Journey",
        "The Magic of Mount Kilimanjaro",
        "Elephant Domain",
      ],
    },
    {
      day: 7,
      title: "Giant Elephants and Snow-Capped Peaks",
      description:
        "Set off for a full-day exploration of Amboseli’s contrasting terrain. Mount Kilimanjaro serves as your backdrop as you marvel at some of Africa's largest and most impressive elephants. Our drives take us around vast, dry lakebeds and lush emerald swamps teeming with hippopotamus, buffalo, and a diversity of waterfowl.",
      destination: "Amboseli National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Ositua Rafiki Camp",
      
      highlights: [
        "Massive Elephant Herds",
        "Kilimanjaro Views",
        "Wildlife-Rich Swamps",
      ],
    },
    {
      day: 8,
      title: "Amboseli to the Frontier of Arusha",
      description:
        "Enjoy a final morning gaze at Mount Kilimanjaro before heading to the Namanga border. After a smooth transition into Tanzania, you are handed over to your expert Tanzanian guide. We continue to the bustling town of Arusha, your gateway to the Serengeti. You'll enjoy a comprehensive safari briefing over a delicious dinner to prepare you for the days ahead.",
      destination: "Arusha",
      meals: "Breakfast & Dinner",
      accommodation: "The Charity Hotel",
      
      highlights: [
        "Seamless Border Crossing",
        "Welcome to Tanzania",
        "Expert Safari Briefing",
      ],
    },
    {
      day: 9,
      title: "Arusha to the Serengeti",
      description:
        "After an early breakfast, we leave Arusha, ascending the Ngorongoro Highlands before descending into the Serengeti National Park. The name 'Serengeti' means 'Endless Plains' in Maasai, and the sheer scale will leave you awestruck. You'll arrive for lunch, seamlessly transitioning into an afternoon game drive among millions of wild animals.",
      destination: "Serengeti National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Nyani Camp",
      
      highlights: [
        "Scenic Highlands Drive",
        "Gateway to the Serengeti",
        "First Tanzanian Game Drive",
      ],
    },
    {
      day: 10,
      title: "Serengeti to Ngorongoro Crater",
      description:
        "Rise to a crisp dawn and embrace a final, game drive across the Serengeti. We exit the park, making the climb towards the Ngorongoro Crater. We descend 600 meters into this ancient volcanic caldera, bursting with one of the highest concentrations of wildlife in Africa! You could easily spot lions, elephants, flamingos, and the rare black rhino in just a few hours.",
      destination: "Ngorongoro Crater",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite",
      
      highlights: [
        "Unbelievable Crater Descent",
        "Intense Predator-Prey Density",
        "The Elusive Black Rhino",
        "Volcanic Backgrounds",
      ],
    },
    {
      day: 11,
      title: "Morning Crater Views & Satisfying Return to Arusha",
      description:
        "Savor a relaxed morning surrounded by sweeping, elevated views of the world's largest unbroken caldera. After a leisurely breakfast, we descend the highlands, taking in the picturesque agricultural views of northern Tanzania. By early afternoon, we drop you off in Arusha or at the airport, completing a chapter in your life.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      
      highlights: [
        "Sweeping Sunrise Views",
        "Scenic Journey Back",
        "Triumphant Safari Conclusion",
      ],
    },
  ],
};
