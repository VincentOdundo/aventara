import imgAsset_0 from "../assets/cheater.jpeg";
import imgAsset_1 from "../assets/cheater_plain.jpeg";
import imgAsset_2 from "../assets/elefpalin.jpeg";
import imgAsset_3 from "../assets/elephant.jpeg";
import imgAsset_4 from "../assets/elephtain.jpeg";
import imgAsset_5 from "../assets/flamingo.jpeg";
import imgAsset_6 from "../assets/lion.jpeg";
import imgAsset_7 from "../assets/lioness.jpeg";
import imgAsset_8 from "../assets/lioness_open.jpeg";
import imgAsset_9 from "../assets/mountain.jpeg";
import imgAsset_10 from "../assets/plain_elefabt.jpeg";
import imgAsset_11 from "../assets/rhino.jpeg";
import imgAsset_12 from "../assets/rhino_plain.jpeg";
import imgAsset_13 from "../assets/treecheta.jpeg";

// Destinations data - all parks, reserves, and key locations

export const destinations = [
  {
    id: "masai-mara",
    slug: "masai-mara",
    name: "Masai Mara",
    country: "Kenya",
    tagline: "Where the Great Migration Thunders",
    description:
      "The Masai Mara National Reserve is Kenya's most celebrated wildlife sanctuary and one of the greatest wildlife spectacles on Earth. Famous for the annual Great Migration, when over two million wildebeest, zebra, and gazelle cross the Mara River in a dramatic display of nature's raw power. Home to the Big Five and the Maasai people's ancient culture.",
    highlights: [
      "Great Migration river crossings",
      "Big Five guaranteed sightings",
      "Maasai cultural visits",
      "Hot air balloon safaris",
      "Nocturnal game drives",
    ],
    bestTime: "July – October (Migration season)",
    image: imgAsset_1,
    gallery: [imgAsset_6, imgAsset_13, imgAsset_12],
  },
  {
    id: "lake-nakuru",
    slug: "lake-nakuru",
    name: "Lake Nakuru",
    country: "Kenya",
    tagline: "The Rhino Sanctuary of the Rift",
    description:
      "Lake Nakuru National Park is a rhino sanctuary set in the heart of the Great Rift Valley. The alkaline lake draws thousands of flamingos creating a pink carpet across the water. The park is also home to lions, leopards, giraffes, and the endangered Rothschild's giraffe within a compact, wildlife-rich environment.",
    highlights: [
      "Rhino sanctuary",
      "Flamingo flocks",
      "Leopard sightings",
      "Rothschild's giraffe",
      "Baboon Cliff viewpoint",
    ],
    bestTime: "Year-round",
    image: imgAsset_5,
    gallery: [],
  },
  {
    id: "hells-gate",
    slug: "hells-gate",
    name: "Hell's Gate",
    country: "Kenya",
    tagline: "Walk Among the Wildlife",
    description:
      "Hell's Gate National Park is one of the few parks in Kenya where you can walk or cycle among wildlife. Named after a narrow break in the cliffs, the park features dramatic gorges, towering rock columns, and geothermal hot springs. It inspired the landscapes in Disney's The Lion King.",
    highlights: [
      "Cycling through the park",
      "Fischer's Tower rock column",
      "Ol Njorowa Gorge hiking",
      "Geothermal springs",
      "Rock climbing",
    ],
    bestTime: "Year-round",
    image: imgAsset_5,
    gallery: [],
  },
  {
    id: "lake-naivasha",
    slug: "lake-naivasha",
    name: "Lake Naivasha",
    country: "Kenya",
    tagline: "A Freshwater Paradise",
    description:
      "Lake Naivasha is a stunning freshwater lake in the Kenyan Rift Valley. Famous for its large hippo population, over 400 bird species, and the beautiful Crescent Island - a private wildlife sanctuary accessible by boat. The lake's papyrus-fringed shores teem with life.",
    highlights: [
      "Boat rides with hippos",
      "Crescent Island walk",
      "Bird watching (400+ species)",
      "Flower farms",
      "Scenic Rift Valley views",
    ],
    bestTime: "Year-round",
    image: imgAsset_11,
    gallery: [],
  },
  {
    id: "amboseli",
    slug: "amboseli",
    name: "Amboseli",
    country: "Kenya",
    tagline: "In the Shadow of Kilimanjaro",
    description:
      "Amboseli National Park offers the most classic image of Africa - vast herds of elephants crossing sun-baked plains with the towering snow-capped peak of Mount Kilimanjaro rising in the background. The park's swamps and springs attract diverse wildlife year-round.",
    highlights: [
      "Mount Kilimanjaro backdrop",
      "Large elephant herds",
      "Observation Hill panorama",
      "Swamp wildlife",
      "Photography paradise",
    ],
    bestTime: "June – October (dry season, Kilimanjaro clearest)",
    image: imgAsset_3,
    gallery: [],
  },
  {
    id: "tsavo",
    slug: "tsavo",
    name: "Tsavo National Park",
    country: "Kenya",
    tagline: "The Theatre of the Wild",
    description:
      "Tsavo is Kenya's largest national park, divided into Tsavo East and Tsavo West. Famous for its red elephants (dust-coated), dramatic lava flows at Shetani, and the crystal-clear Mzima Springs. The park offers a true wilderness experience far from the tourist crowds.",
    highlights: [
      "Red elephants of Tsavo",
      "Mzima Springs",
      "Shetani lava flows",
      "Lugard Falls",
      "Vast wilderness",
    ],
    bestTime: "June – October",
    image: imgAsset_3,
    gallery: [],
  },
  {
    id: "ol-pejeta",
    slug: "ol-pejeta",
    name: "Ol Pejeta Conservancy",
    country: "Kenya",
    tagline: "Where Conservation Meets Adventure",
    description:
      "Ol Pejeta Conservancy is home to the last two Northern White Rhinos on Earth, making it the epicenter of global rhino conservation. The conservancy also houses the Sweetwaters Chimpanzee Sanctuary and offers unparalleled Big Five game viewing in a stunning Laikipia Plateau setting.",
    highlights: [
      "Last Northern White Rhinos",
      "Sweetwaters Chimpanzee Sanctuary",
      "Night game drives",
      "Big Five",
      "Conservation tours",
    ],
    bestTime: "Year-round",
    image: imgAsset_8,
    gallery: [],
  },
  {
    id: "serengeti",
    slug: "serengeti",
    name: "Serengeti",
    country: "Tanzania",
    tagline: "The Endless Plains",
    description:
      'The Serengeti National Park is Tanzania\'s crown jewel and arguably the most famous safari destination in the world. Its name means "endless plains" in Maasai, and the park delivers on this promise with 14,763 square kilometers of pristine grasslands, woodlands, and riverine forests teeming with life.',
    highlights: [
      "Great Migration",
      "Big cat capital of Africa",
      "Endless golden plains",
      "Balloon safaris",
      "Kopje rock formations",
    ],
    bestTime: "June – October (dry season), December – March (calving)",
    image: imgAsset_1,
    gallery: [],
  },
  {
    id: "ngorongoro",
    slug: "ngorongoro",
    name: "Ngorongoro Crater",
    country: "Tanzania",
    tagline: "The Eighth Wonder of the World",
    description:
      "The Ngorongoro Crater is the world's largest unbroken volcanic caldera and a UNESCO World Heritage Site. This natural amphitheater supports an incredibly dense concentration of wildlife - approximately 25,000 animals within its 260 square kilometer floor, including the critically endangered black rhino.",
    highlights: [
      "UNESCO World Heritage Site",
      "Dense wildlife population",
      "Black rhinos",
      "Lake Magadi flamingos",
      "Crater rim panoramas",
    ],
    bestTime: "Year-round",
    image: imgAsset_12,
    gallery: [],
  },
  {
    id: "tarangire",
    slug: "tarangire",
    name: "Tarangire",
    country: "Tanzania",
    tagline: "Land of the Baobab Giants",
    description:
      "Tarangire National Park is famous for its massive ancient baobab trees and the largest elephant population in northern Tanzania. During the dry season, the Tarangire River becomes a lifeline attracting thousands of animals from the surrounding Maasai Steppe.",
    highlights: [
      "Giant baobab trees",
      "Largest elephant herds",
      "Tarangire River",
      "Tree-climbing lions",
      "Over 550 bird species",
    ],
    bestTime: "June – October (dry season)",
    image: imgAsset_7,
    gallery: [],
  },
];

export function getDestinationBySlug(slug) {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationsByCountry(country) {
  return destinations.filter((d) => d.country === country);
}
