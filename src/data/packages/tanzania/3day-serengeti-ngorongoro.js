import { PHOTOS } from "../../photos";

const heroImg = PHOTOS.serengetiLioness.src;

export const package3DayTanzania = {
  id: "3-day-tanzania",
  slug: "3-day-serengeti-ngorongoro",
  title: "3-Day Serengeti & Ngorongoro Crater Safari",
  subtitle:
    "The Serengeti and Ngorongoro Crater in three days from Arusha.",
  days: 3,
  country: "tanzania",
  destinations: ["Serengeti", "Ngorongoro Crater"],
  price: { low: 650, high: 950 },
  image: heroImg,
  difficulty: "Budget",
  highlights: [
    "Central Serengeti Seronera plains and granite kopjes",
    "600-meter descent onto the Ngorongoro Crater floor",
    "High Big Five concentration including endangered black rhino",
    "Overnight camping inside Serengeti and on the Ngorongoro rim",
    "Picnic lunch beside Ngoitoktok Hippo Pool",
  ],
  included: [
    "Transportation in a custom pop-up roof 4x4 safari vehicle",
    "Expert, English-speaking professional driver-guide",
    "Wilderness camping at Nyani Camp (Serengeti) & Simba Campsite (Ngorongoro rim)",
    "All freshly prepared meals as per the detailed itinerary",
    "All necessary national park entry fees, crater service fees and concessions",
    "Daily comprehensive game drives",
    "Scenic picnic lunch on the Ngorongoro Crater floor",
  ],
  excluded: [
    "International and domestic flights",
    "Tanzania tourist visa fees",
    "Comprehensive travel and medical insurance",
    "Personal expenses (beverages, laundry, souvenirs)",
    "Tips and gratuities for your safari guide and camp cook",
  ],
  accommodation: {
    serengeti: "Nyani Camp (Wilderness Experience)",
    ngorongoro: "Simba Campsite (Crater Rim Views)",
  },
  itinerary: [
    {
      day: 1,
      title: "Arusha via Ngorongoro Highlands to Central Serengeti (Seronera)",
      description:
        "Depart Arusha around 07:00 in your custom pop-up roof 4x4 safari Land Cruiser, heading west past Mto wa Mbu's banana plantations and climbing the Great Rift Valley wall into the cool montane forest of the Ngorongoro Conservation Area. After pausing at the crater rim viewpoint for a sweeping look down into the 600-meter volcanic caldera, you descend across the Malanja Depression past Maasai bomas toward Naabi Hill Gate — the official entry point to Serengeti National Park (roughly 6 to 7 hours driving from Arusha with stops).\n\nOver a hot picnic lunch at Naabi Hill, your driver-guide completes park registration before entering the Seronera Valley for an afternoon game drive. Permanent rivers and granite kopjes make central Serengeti reliable year-round for lion prides, leopards draped across sausage tree branches, cheetahs on short-grass plains, and herds of buffalo, giraffe, and elephants. Arrive at Nyani Public Campsite before dusk for a freshly cooked dinner under Serengeti skies.",
      destination: "Serengeti National Park",
      meals: "Lunch & Dinner",
      accommodation: "Nyani Camp",
      highlights: [
        "Traverse the Ngorongoro Conservation Area highlands",
        "Crater rim viewpoint overlooking the caldera",
        "Afternoon Seronera Valley game drive in Serengeti",
      ],
    },
    {
      day: 2,
      title: "Dawn Serengeti Game Drive & Transit to Ngorongoro Crater Rim",
      description:
        "Wake early for tea or coffee and head out at sunrise onto the Seronera game tracks while nocturnal predators are still on the move and the plains glow gold. Spend the morning tracking lions, spotted hyena, serval, or leopards along the Seronera and Banagi riverlines before returning to camp late morning for a full cooked brunch and packing up.\n\nIn the early afternoon, game-drive slowly south-east across the short-grass plains toward Naabi Hill Gate, exiting the Serengeti and re-entering the Ngorongoro Conservation Area. By late afternoon you climb to Simba Campsite perched at roughly 2,300 meters on the crater rim — pack a warm fleece and beanie, as highland nights turn crisp quickly after sunset.",
      destination: "Ngorongoro Conservation Area",
      meals: "Breakfast, Lunch & Dinner",
      accommodation: "Simba Campsite",
      highlights: [
        "Sunrise game drive across Seronera river corridors",
        "Game-viewing exit across the southern plains",
        "Sunset camp perched on the Ngorongoro Crater rim",
      ],
    },
    {
      day: 3,
      title: "Ngorongoro Crater Floor Game Drive & Return to Arusha",
      description:
        "After an early 06:00 breakfast on the misty rim, you are among the first vehicles descending the steep 600-meter Seneto track onto the 260-square-kilometer floor of the Ngorongoro Crater. Because permanent springs and grazing stay available inside the caldera walls all year, resident wildlife rarely leaves: you spend five to six focused hours scanning Lerai Fever Tree Forest for old bull elephants, open grasslands for endangered black rhinos, lion prides, crowned cranes, and Lake Magadi's alkaline shallows for flamingos.\n\nPause at Ngoitoktok Hippo Pool for a picnic lunch watching hippos wallow meters from the water's edge, then climb the ascent road early afternoon. Drive back through Karatu and Mto wa Mbu to reach Arusha around 17:00–18:00 for drop-off at your hotel or onward transfer to Kilimanjaro Airport.",
      destination: "Arusha",
      meals: "Breakfast & Lunch",
      accommodation: null,
      highlights: [
        "Early 600m descent onto the Ngorongoro Crater floor",
        "Focused black rhino, lion and bull elephant viewing",
        "Picnic lunch beside Ngoitoktok Hippo Pool",
      ],
    },
  ],
};
