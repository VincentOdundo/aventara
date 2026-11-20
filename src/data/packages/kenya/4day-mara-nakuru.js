import { PHOTOS } from "../../photos";

const heroImg = PHOTOS.leopardRock.src;

export const package4DayMaraNakuru = {
  id: "4-day-mara-nakuru",
  slug: "4-day-mara-nakuru-budget",
  title: "4-Day Masai Mara & Lake Nakuru Budget Safari",
  subtitle:
    "Two nights in the Masai Mara and one at Lake Nakuru, home of a rhino sanctuary.",
  days: 4,
  country: "kenya",
  destinations: ["Masai Mara", "Lake Nakuru"],
  price: { low: 732, high: 931 },
  singlePrice: { low: 743, high: 942 },
  image: heroImg,
  difficulty: "Budget",
  highlights: [
    "Big Five game drives in the Masai Mara",
    "Access to the Lake Nakuru Rhino Sanctuary",
    "Witness vibrant flamingo flocks over the Great Rift Valley lakes",
    "Panoramic Great Rift Valley scenery year-round",
  ],
  included: [
    "Transportation in a customized safari vehicle",
    "Services of a professional, local guide/driver",
    "3 nights of carefully selected authentic accommodation",
    "All camp meals as per itinerary",
    "Comprehensive park entry fees and government taxes",
    "Extensive daily game drives",
    "Round-trip transport from Nairobi",
  ],
  excluded: [
    "International flights and visa fees",
    "Personal expenses (laundry, beverages, etc.)",
    "Tips and gratuities for your dedicated guide",
    "Optional cultural activities (e.g., Maasai village visit)",
    "Comprehensive travel insurance",
  ],
  accommodation: {
    mara: "Miti Mingi Eco Camp",
    nakuru: "Buraha Zenoni Hotel & Resort",
  },
  itinerary: [
    {
      day: 1,
      title:
        "Nairobi to the Masai Mara & Evening Game Drive",
      description:
        "Your safari begins with an early morning pick-up right from your Nairobi hotel or airport. Journey deep into the African landscape as we drive along the Great Rift Valley, stopping at the viewpoints to capture photographs of the escarpment. Descend into the Maasai Mara territory, arriving just in time for a freshly prepared, authentic lunch at your scenic camp. After checking in and relaxing amidst nature, head out for your very first exhilarating evening game drive. Watch the savannah come alive as top predators-powerful lions, elusive leopards, and swift cheetahs-awaken to hunt under the golden African sunset. This is the Big Five territory you've been dreaming of. Secure your spot on this tour today!",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      
      highlights: [
        "Panoramic Great Rift Valley photography",
        "Evening Big Five game drive",
        "Spot prowling lions and elephants",
        "Experience the golden savannah sunset",
      ],
    },
    {
      day: 2,
      title: "Full-Day Masai Mara Game Drive",
      description:
        "Awaken to the sounds of the African bush and enjoy an early breakfast before embarking on a full-day game drive across the vast, rolling plains of the Masai Mara. Armed with picnic lunch boxes, we venture deep into the heart of the reserve, tracking the Big Five-lion, leopard, elephant, buffalo, and the rare rhinoceros. Keep your cameras ready for action-packed sightings of stealthy cheetahs, cackling hyenas, sweeping herds of wildebeests, and vibrant bird species. Depending on the season, we journey to the famous Mara River, the highly anticipated stage for the dramatic Great Migration river crossings-a true spectacle! Enjoy your scenic picnic directly inside the national reserve, enveloped by pristine wilderness, before continuing your afternoon wildlife tracking. Book early to guarantee your front-row seat to the greatest show on earth.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      
      highlights: [
        "Extensive tracking of the Big Five",
        "Mara River exploration",
        "Witness the Great Migration (seasonal)",
        "Picnic lunch surrounded by wild nature",
      ],
    },
    {
      day: 3,
      title:
        "Masai Mara to Lake Nakuru National Park",
      description:
        "After a hearty breakfast, bid farewell to the sweeping plains of the Mara and begin your journey toward the Lake Nakuru National Park. Enjoy a picturesque drive through the dramatic landscapes of the Great Rift Valley, passing rural Kenyan communities and gorgeous scenic vistas. Arrive at your comfortable Nakuru hotel just in time to savor a delicious lunch. In the afternoon, dive right into your next adventure with a specialized game drive across the Lake Nakuru ecosystem. Internationally renowned as a rhino sanctuary, this is your best opportunity to photograph endangered black and white rhinos up close in their natural habitat. Marvel at the striking contrast of sweeping alkaline lake shores, occasionally painted pink by seasonal flocks of flamingos, and the Rothschild giraffes. Don't miss this wildlife haven-reserve your journey now.",
      destination: "Lake Nakuru National Park",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Buraha Zenoni Hotel & Resort",
      
      highlights: [
        "Scenic Great Rift Valley ecosystem drive",
        "Endangered Rhino sanctuary visit",
        "Vibrant seasonal Flamingo flocks",
        "Rare Rothschild giraffes photography",
      ],
    },
    {
      day: 4,
      title: "Lake Nakuru back to bustling Nairobi",
      description:
        "Rise early for one last morning game drive in Lake Nakuru National Park. The cool morning air offers the best lighting for wildlife photography and active animal spotting. Keep your eyes peeled for elusive leopards lounging in the yellow fever trees and lions patrolling their territory before the sun gets too hot. After maximizing every final moment of wildlife viewing, we gently exit the park. Sit back in your comfortable safari vehicle as we ascend the Great Rift Valley, reflecting on four days of life-changing memories, Big Five encounters, and nature. We'll arrive back in Nairobi in the afternoon, ensuring a seamless drop-off at your hotel or the airport for your onward journey. Transform your travel dreams into reality-contact us today to book this Kenyan itinerary!",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      
      highlights: [
        "Action-packed morning game drive",
        "Golden-hour wildlife photography",
        "Seamless and comfortable return to Nairobi",
      ],
    },
  ],
};
