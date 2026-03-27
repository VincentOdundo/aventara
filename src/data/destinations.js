import cheetahSafari from "../assets/cheater-safari.jpeg";
import cheetahPlain from "../assets/cheater_plain.jpeg";
import elephantGrass from "../assets/elefant-vegetation.jpeg";
import elephantTusks from "../assets/elefant-tusk.jpeg";
import flamingoWater from "../assets/flamingo-water.jpeg";
import flamingoSolo from "../assets/flamingo-lonely.jpeg";
import lionMale from "../assets/lion-lonely.jpeg";
import lionessPortrait from "../assets/lioness.jpeg";
import lionessRoar from "../assets/lioness_open.jpeg";
import kilimanjaro from "../assets/mountain.jpeg";
import rhinoPair from "../assets/rhino.jpeg";
import rhinoClose from "../assets/rhino_plain.jpeg";
import leopardTree from "../assets/treecheta.jpeg";
import egretWater from "../assets/egret-water.jpeg";
import nairobiGiraffeCity from "../assets/nairobi/girafe-nairobi-city.jpeg";
import nairobiLionVan from "../assets/nairobi/lion-safari-van.jpeg";
import nairobiLionClose from "../assets/nairobi/lion-safari.jpeg";
import nairobiSunset from "../assets/nairobi/sunset-exotic.jpeg";
import nairobiGiraffeSunset from "../assets/nairobi/giraffe-sunsut.jpeg";
import nairobiBird from "../assets/nairobi/bird-exotic.jpeg";
import nairobiAntelopes from "../assets/nairobi/antelppes.jpeg";

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
    image: cheetahSafari,
    gallery: [lionMale, leopardTree, cheetahPlain],
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
    image: flamingoWater,
    gallery: [flamingoSolo],
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
    image: nairobiAntelopes,
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
    image: egretWater,
    gallery: [flamingoWater],
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
    image: elephantGrass,
    gallery: [elephantTusks, kilimanjaro],
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
    image: elephantTusks,
    gallery: [elephantGrass],
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
    image: rhinoClose,
    gallery: [rhinoPair],
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
    image: cheetahPlain,
    gallery: [cheetahSafari],
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
    image: rhinoPair,
    gallery: [flamingoSolo],
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
    image: lionessPortrait,
    gallery: [lionessRoar],
  },
  {
    id: "lake-manyara",
    slug: "lake-manyara",
    name: "Lake Manyara",
    country: "Tanzania",
    tagline: "Where Lions Climb Trees",
    description:
      "Lake Manyara National Park is a scenic gem nestled at the base of the Great Rift Valley escarpment. Renowned for its lush groundwater forests, sparkling alkaline lake, and vibrant birdlife including flocks of flamingos. The park is famous for its unique tree-climbing lions and remarkably diverse ecosystem packed into a compact area.",
    highlights: [
      "Tree-climbing lions",
      "Flamingo flocks",
      "Groundwater forest canopy",
      "Great Rift Valley escarpment",
      "Over 400 bird species",
    ],
    bestTime: "June – October (dry season)",
    image: flamingoSolo,
    gallery: [flamingoWater],
  },
  {
    id: "nairobi-np",
    slug: "nairobi-national-park",
    name: "Nairobi National Park",
    country: "Kenya",
    tagline: "Wildlife in the City",
    description:
      "Nairobi National Park is the only national park in the world located within a capital city. Just 7 km from Nairobi's city center, this unique park is home to lions, leopards, rhinos, giraffes, buffaloes, and over 400 bird species. The juxtaposition of wildlife against the Nairobi skyline makes for truly unforgettable photography.",
    highlights: [
      "Wildlife against city skyline",
      "Black rhino sanctuary",
      "David Sheldrick Elephant Orphanage nearby",
      "Giraffe Centre nearby",
      "Over 400 bird species",
    ],
    bestTime: "Year-round",
    image: nairobiGiraffeCity,
    gallery: [
      nairobiLionVan,
      nairobiLionClose,
      nairobiGiraffeSunset,
      nairobiSunset,
      nairobiBird,
      nairobiAntelopes,
    ],
  },
];

export function getDestinationBySlug(slug) {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationsByCountry(country) {
  return destinations.filter((d) => d.country === country);
}
