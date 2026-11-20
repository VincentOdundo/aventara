import { PHOTOS } from "../../photos";

const heroImg = PHOTOS.giraffeSunset.src;

export const package5DayMaraNakuruNaivasha = {
  id: "5-day-mara-nakuru-naivasha",
  slug: "5-day-triple-gem-kenya",
  title: "5-Day Masai Mara, Lake Nakuru & Naivasha Budget Safari",
  subtitle:
    "The Masai Mara, Lake Nakuru and Lake Naivasha, with a visit to Hell's Gate.",
  days: 5,
  country: "kenya",
  destinations: ["Masai Mara", "Lake Nakuru", "Lake Naivasha", "Hell's Gate"],
  price: { low: 861, high: 1116 },
  singlePrice: { low: 873, high: 1127 },
  image: heroImg,
  difficulty: "Budget",
  highlights: [
    "Exhilarating cycle safaris in Hell's Gate National Park",
    "Seasonal flamingos at Lake Nakuru",
    "Big Five and Great Migration encounters",
    "Dramatic gorge hiking and Great Rift Valley viewpoints",
  ],
  included: [
    "Transportation in a customized safari vehicle",
    "Services of a professional local guide",
    "Outstanding accommodation as per the itinerary",
    "Delicious daily meals as specified",
    "All comprehensive park entry fees and taxes",
    "Extensive daily game drives and tracking",
    "Hell's Gate cycling and gorge access",
  ],
  excluded: [
    "International flights and local visas",
    "Personal expenses (souvenirs, drinks, laundry)",
    "Tips and gratuities for your expert guide",
    "Optional activities at Lake Naivasha",
    "Comprehensive travel insurance",
  ],
  optionalActivities: [
    { name: "Lake Naivasha Scenic Boat ride", price: 20 },
    { name: "Crescent Island Guided Walking Safari", price: 33 },
  ],
  accommodation: {
    mara: "Miti Mingi Eco Camp",
    nakuru: "Buraha Zenoni Hotel & Resort",
    naivasha: "Leisure Apex Resort",
  },
  itinerary: [
    {
      day: 1,
      title: "Nairobi to the Masai Mara & Evening Game Drive",
      description:
        "Your 5-day Kenyan journey kicks off with a prompt pick-up from your Nairobi hotel or airport. Journey deep into the African wilderness as we descend into the Great Rift Valley. We'll stop at the famous viewpoint, allowing you to capture panoramic photographs of the dramatic escarpment before we continue to the Maasai Mara. You'll arrive in perfect time for a hearty lunch at your authentic safari camp, followed by a brief period of relaxation. As the fierce African sun begins to soften, head out for an evening game drive. This is prime time to spot apex predators-fierce lions, agile leopards, and towering giraffes-roaming the savannah. Watch the wilderness come alive under a golden sunset. Ready to step into a documentary? Secure your booking now!",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      
      highlights: [
        "Dramatic Great Rift Valley viewpoints",
        "Golden-hour evening game drive",
        "Breath-taking African savannah sunset views",
        "Unbeatable Big Five territory access",
      ],
    },
    {
      day: 2,
      title: "Full-Day Game Drive in Masai Mara",
      description:
        "Fuel up with an early breakfast before embarking on the full-day game drive across the sweeping plains of the Masai Mara. Equipped with picnic lunch boxes, we venture deep into different sectors of the reserve on the prowl for the Big Five: lions, leopards, elephants, formidable buffaloes, and rare rhinos. Keep an eye out for lightning-fast cheetahs, scavenging hyenas, and an array of bird life. If you are traveling during the season of the Great Migration, we will head directly toward the dramatic Mara River to witness millions of wildebeests and zebras braving the crocodile-infested waters. Enjoy a scenic picnic lunch right in the middle of the untamed park before proceeding with an action-packed afternoon of game viewing. This is wild Africa at its finest.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      
      highlights: [
        "Relentless tracking of the Big Five",
        "Dramtic Mara River ecosystem exploration",
        "Great Migration crossings (seasonal)",
        "Immersive wild savannah picnic lunch",
      ],
    },
    {
      day: 3,
      title:
        "Masai Mara to Lake Nakuru (Optional Naivasha Stop)",
      description:
        "Savor your final Mara sunrise and breakfast before checking out and setting your sights on the Lake Nakuru National Park. The drive offers scenic views along the floor of the Great Rift Valley. En route, time permitting, we can make a stop at the beautiful freshwater Lake Naivasha. Here, you have the highly recommended option to embark on a serene boat ride ($20) amongst massive hippo pods, or take a guided walking safari on Crescent Island ($33) walking freely alongside gentle giraffes and zebras. Afterwards, we proceed directly to Lake Nakuru, arriving in the afternoon to check into your comfortable hotel. Relax, unwind, and prepare for a rhino-filled adventure the next morning. Don't wait-upgrade your Rift Valley experience by booking this multi-park tour today!",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel & Resort",
      
      highlights: [
        "Lake Naivasha optional boat rides",
        "Lake Nakuru landscape scenery",
        "Crescent Island walking safari",
        "Comfortable Great Rift Valley accommodations",
      ],
    },
    {
      day: 4,
      title:
        "Lake Nakuru to Lake Naivasha",
      description:
        "Start your day with an early breakfast followed by a morning game drive in Lake Nakuru National Park. Globally renowned as a highly successful rhino sanctuary, this park offers opportunities to photograph both white and elusive black rhinos in their natural habitat. Watch endangered Rothschild giraffes grazing elegantly, and scan the striking yellow fever tree forests for tree-climbing lions and stealthy leopards. Depending on the season, the alkaline lake shores may be dramatically painted pink by massive flocks of brilliant flamingos. After maximizing your wildlife viewing, we exit the park and take a short drive to the gorgeous Lake Naivasha. Arrive in time for a sumptuous lunch and spend the afternoon completely at leisure by the serene, hippo-filled waters.",
      destination: "Lake Naivasha",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Leisure Apex Resort",
      
      highlights: [
        "Highly protected Rhino sanctuary",
        "White and black rhino photography",
        "Vibrant seasonal Flamingo flocks and birding",
        "Tranquil Lake Naivasha waterfront relaxation",
      ],
    },
    {
      day: 5,
      title: "Hell's Gate National Park & Return to Nairobi",
      description:
        "Conclude your Kenyan safari with a unique African adventure. After breakfast, head straight to the dramatic landscapes of Hell's Gate National Park. Unlike traditional wildlife parks, Hell's Gate allows you to safely step out of the safari vehicle! Enjoy an exhilarating cycling safari right alongside grazing zebras, towering giraffes, bounding gazelles, and massive buffaloes. Following the ride, take a guided hiking expedition deep into the sweeping, ancient volcanic gorges and immense cliffs that inspired blockbuster movies. After this hands-on excursion, we depart for Nairobi, arriving in the afternoon. You'll be dropped off at your hotel or the airport, buzzing with stories and memories that will last a lifetime. Book now and make this action-packed Kenyan dream your reality!",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      
      highlights: [
        "Exhilarating cycle safari alongside wild animals",
        "Adventurous guided gorge and cliff walking safari",
        "Ancient volcanic gorges",
        "Seamless and return to Nairobi",
      ],
    },
  ],
};
