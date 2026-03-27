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
    tagline:
      "Witness the Ultimate Wildlife Spectacle: The Great Migration Thunders Across the Savannah",
    description:
      "Prepare to be mesmerized by the Masai Mara National Reserve, Kenya's premier wildlife sanctuary and the undisputed jewel of African safaris. Famous globally for hosting the Great Wildebeest Migration, this incredibly vast savannah offers a front-row seat to one of the greatest natural wonders on Planet Earth. Every year, over two million wildebeests, zebras, and Thomson's gazelles brave the crocodile-infested waters of the deeply channeled Mara River in a heart-pounding display of survival and natural instinct. Beyond the seasonal migration, the Masai Mara guarantees phenomenal year-round viewing of the legendary Big Five—lions, leopards, elephants, Cape buffaloes, and rhinos. The undulating golden grasslands provide perfect camouflage for apex predators, meaning thrilling lion hunts and elusive cheetah sprints are frequently witnessed. Experience authentic cultural immersion with the indigenous Maasai people, sharing in their ancient traditions and vibrant heritage. From breathtaking hot air balloon safaris at dawn, soaring silently over the sprawling plains, to unforgettable nocturnal game drives beneath a canopy of stars, a Masai Mara safari promises an unparalleled, life-changing adventure that will captivate your soul.",
    highlights: [
      "Witness thrilling Great Migration river crossings with millions of wildebeests",
      "Guaranteed year-round sightings of the majestic Big Five",
      "Engage in authentic Maasai cultural visits and traditional ceremonies",
      "Experience breathtaking sunrise hot air balloon safaris over the plains",
      "Explore the African bush on exclusive, action-packed nocturnal game drives",
    ],
    bestTime: "July – October (Peak Migration season for river crossings)",
    image: cheetahSafari,
    gallery: [lionMale, leopardTree, cheetahPlain],
  },
  {
    id: "lake-nakuru",
    slug: "lake-nakuru",
    name: "Lake Nakuru",
    country: "Kenya",
    tagline:
      "The Pink Paradise and Premier Rhino Sanctuary of the Great Rift Valley",
    description:
      "Nestled deeply within the dramatic walls of the Great Rift Valley, Lake Nakuru National Park is a vibrant, ecologically diverse haven renowned as an internationally critical rhino sanctuary. Its shimmering, alkaline waters periodically draw colossal, breathtaking flocks of vibrant pink flamingos, painting the shoreline in a mesmerizing, rosy hue that leaves photographers speechless. But the magic extends far beyond birdlife; Lake Nakuru is fiercely protected, providing a safe haven for both the highly endangered black rhino and the magnificent white rhino. The dense, ancient acacia forests and sweeping grasslands also harbor stealthy leopards, roaring lions, and the rare, towering Rothschild's giraffe. A game drive here offers a compact yet intensely rewarding wildlife experience, with breathtaking panoramic vistas from the iconic Baboon Cliff overlooking the valley. Whether you're a passionate birdwatcher seeking pelicans and cormorants, or an adventurous soul craving close-up encounters with Africa's heavyweights, Lake Nakuru delivers a profoundly picturesque and moving safari experience.",
    highlights: [
      "Marvel at a highly successful black and white rhino sanctuary",
      "Photograph spectacular, world-famous flocks of pink flamingos",
      "Track elusive leopards resting in the ancient yellow fever trees",
      "Encounter the rare and majestic towering Rothschild's giraffe",
      "Take in sweeping panoramic vistas from the iconic Baboon Cliff viewpoint",
    ],
    bestTime: "Year-round (Excellent birding and rhino spotting continuously)",
    image: flamingoWater,
    gallery: [flamingoSolo],
  },
  {
    id: "hells-gate",
    slug: "hells-gate",
    name: "Hell's Gate",
    country: "Kenya",
    tagline:
      "Step Out of the Vehicle: Walk and Cycle Among the Majestic African Wildlife",
    description:
      "For the active adventurer, Hell's Gate National Park offers a thrilling departure from traditional vehicle-based safaris. As one of the very few national parks in Kenya where visitors are encouraged to explore on foot or by bicycle, it provides an exhilarating, profoundly intimate connection with nature. Traverse wide-open valleys alongside grazing zebras, elegant giraffes, and leaping gazelles, feeling the African sun on your skin without the barrier of a safari van. The park is geographically spectacular, characterized by its towering, rusty-red rock cliffs, deep, shadowy gorges, and dramatic geothermal hot springs that belch steam into the crisp air. It is this exact rugged, awe-inspiring landscape that served as the primary visual inspiration for the sweeping backdrops in Disney's classic animated film, The Lion King. Whether you are rock climbing the sheer face of Fischer's Tower, hiking deep into the watery depths of the Ol Njorowa Gorge, or simply taking a peaceful bike ride through herds of wildlife, Hell's Gate is a unique, sensory-rich adventure.",
    highlights: [
      "Experience the thrill of cycling safaris directly alongside wild animals",
      "Conquer the sheer volcanic rock walls of the famous Fischer's Tower",
      "Hike the twisting, water-carved depths of the Ol Njorowa Gorge",
      "Witness powerful, natural geothermal hot springs and steam vents",
      "Enjoy world-class rock climbing on stunning cliff faces",
    ],
    bestTime: "Year-round (Perfect for active, outdoor exploration)",
    image: nairobiAntelopes,
    gallery: [],
  },
  {
    id: "lake-naivasha",
    slug: "lake-naivasha",
    name: "Lake Naivasha",
    country: "Kenya",
    tagline:
      "A Serene Freshwater Oasis Teeming with Hippos and Exotic Birdlife",
    description:
      "Set against the stunning backdrop of Mount Longonot, Lake Naivasha is a breathtaking freshwater jewel sparkling within the arid expanse of the Kenyan Rift Valley. Fringed by thick bands of green papyrus and towering yellow fever acacia trees, the lake is an absolute paradise for nature lovers and ornithologists alike. The glassy waters are home to a massive, thriving population of hippos, which you can safely observe wallowing and grunting from the comfort of a guided boat safari. The skies and shores boast an astonishing array of over 400 distinct bird species, including the magnificent African fish eagle, pelicans, and vibrant kingfishers. A highlight of any visit is a trip to Crescent Island, a secure, private peninsula where you can embark on a guided walking safari to stroll safely right alongside peaceful giraffes, waterbucks, and wildebeests. Surrounded by flourishing local flower farms and offering serene, picturesque sunset views, Lake Naivasha provides a perfectly tranquil yet wildlife-rich contrast to the dusty savannahs.",
    highlights: [
      "Glide on tranquil boat rides to closely observe massive hippo pods",
      "Take a truly unique walking safari among giraffes on Crescent Island",
      "Engage in world-class bird watching with over 400 recorded species",
      "Visit nearby world-renowned, colorful horticultural flower farms",
      "Soak up dramatically scenic, sunset-drenched Rift Valley views",
    ],
    bestTime: "Year-round (Exceptional birding and boating consistently)",
    image: egretWater,
    gallery: [flamingoWater],
  },
  {
    id: "amboseli",
    slug: "amboseli",
    name: "Amboseli",
    country: "Kenya",
    tagline:
      "Walk with Giants in the Majestic Shadow of Snow-Capped Mount Kilimanjaro",
    description:
      "Amboseli National Park delivers the quintessential, deeply romanticized image of wild Africa: massive, ancient herds of large-tusked elephants slowly traversing a dusty, sun-baked plain, framed perfectly by the towering, snow-capped majesty of Mount Kilimanjaro in the background. Known as the best place in the world to get close to free-ranging elephants, Amboseli offers wildlife encounters that are both intimate and awe-inspiring. Despite its relatively small size, the park's underground water supply—fed by Kilimanjaro's ice cap—creates lush, emerald-green swamps that act as a magnet for a huge diversity of wildlife, especially during the dry season. Here, you will spot lions, cheetahs, hyenas, and a plethora of water birds congregating around the life-giving springs. The sweeping views from Observation Hill allow you to gaze across the entirety of the park, taking in the spectacular juxtaposition of harsh, dry lake beds against thriving wetlands. For wildlife photographers and lovers of iconic landscapes, Amboseli is a breathtaking, absolute must-visit paradise.",
    highlights: [
      "Marvel at the iconic, unencumbered backdrop of Mount Kilimanjaro",
      "Observe and photograph some of the largest elephant herds in all of Africa",
      "Climb Observation Hill for stunning, 360-degree panoramic landscape views",
      "Discover intense wildlife concentrations around the lush Enkongo Narok swamps",
      "Capture award-winning photography in the ultimate classic African setting",
    ],
    bestTime:
      "June – October (Dry season ensures the clearest views of Kilimanjaro)",
    image: elephantGrass,
    gallery: [elephantTusks, kilimanjaro],
  },
  {
    id: "tsavo",
    slug: "tsavo",
    name: "Tsavo National Park",
    country: "Kenya",
    tagline:
      "The Rugged, Untamed Theatre of the Wild and Home of the Red Elephants",
    description:
      "Venture into the raw, untamed wilderness of Tsavo, Kenya's largest national park. Covering a massive expanse of rugged terrain, it is geographically split into Tsavo East and Tsavo West, each offering a distinctly wild and dramatic experience far off the beaten tourist track. Tsavo is globally renowned for its legendary 'red elephants'—massive herds that dust-bathe in the region's rich, rust-colored laterite soil, giving them a striking, otherworldly appearance. The landscape itself is a dramatic character in your safari, featuring the immense, twisting Shetani lava flows and the violently roaring rapids of Lugard Falls. In the heart of this dry wilderness lies the miracle of Mzima Springs, where crystal-clear water gushes from volcanic rock, creating an underwater viewing sanctuary where you can watch hippos and crocodiles glide silently. For those seeking a truly immense, untouched sense of scale and the thrill of exploring one of the planet's last great wilderness frontiers, Tsavo offers an epic, unfiltered African adventure.",
    highlights: [
      "Photograph the iconic, majestic dust-coated red elephants of Tsavo",
      "Explore the crystal-clear, underwater oasis of Mzima Springs",
      "Hike alongside the dramatic, jagged black rock of the Shetani lava flows",
      "Wonder at the powerful, churning water channels of Lugard Falls",
      "Experience a profound sense of isolation in a vast, untamed wilderness",
    ],
    bestTime:
      "June – October (Best conditions for wildlife congregation at water sources)",
    image: elephantTusks,
    gallery: [elephantGrass],
  },
  {
    id: "ol-pejeta",
    slug: "ol-pejeta",
    name: "Ol Pejeta Conservancy",
    country: "Kenya",
    tagline:
      "Groundbreaking Wildlife Conservation Meets Thrilling, High-End Adventure",
    description:
      "Situated on the stunning high-altitude equator of the Laikipia Plateau, Ol Pejeta Conservancy is a shining beacon of innovative, successful wildlife conservation. It holds the profound distinction of being the sanctuary for the last two remaining Northern White Rhinos on the planet, making a visit here a deeply moving and globally significant experience. Beyond its critical rhino protection programs—which also harbor East Africa's largest population of black rhinos—Ol Pejeta guarantees some of the highest predator densities in Kenya for an unforgettable Big Five safari. It is also the exclusive home of the Sweetwaters Chimpanzee Sanctuary, established in partnership with the Jane Goodall Institute to rehabilitate rescued chimps. Visitors can engage in unique, active conservation experiences, such as lion tracking with researchers, dog tracking with anti-poaching units, and exhilarating night game drives to spot elusive nocturnal creatures. Ol Pejeta perfectly blends luxurious safari adventure with meaningful, transformative environmental stewardship.",
    highlights: [
      "Pay your respects to the very last two Northern White Rhinos on Earth",
      "Visit the incredible, heartwarming Sweetwaters Chimpanzee Sanctuary",
      "Embark on thrilling, specialized night game drives for nocturnal predators",
      "Enjoy consistently exceptional, high-density Big Five wildlife sightings",
      "Participate in hands-on, educational behind-the-scenes conservation tours",
    ],
    bestTime: "Year-round (Excellent road conditions and consistent wildlife)",
    image: rhinoClose,
    gallery: [rhinoPair],
  },
  {
    id: "serengeti",
    slug: "serengeti",
    name: "Serengeti",
    country: "Tanzania",
    tagline:
      "The Endless Plains: The Ultimate Canvas for Earth's Greatest Mammal Migration",
    description:
      "Step into the legend of the Serengeti National Park, Tanzania's undisputed crown jewel and arguably the most famous, romanticized safari destination on the globe. Deriving its name from the Maasai word 'Siringet' meaning 'endless plains,' the park delivers on that promise with nearly 15,000 square kilometers of sweeping, golden grasslands, acacia woodlands, and shimmering horizons. The Serengeti is the primary stage for the Great Migration; here you can witness massive, dust-kicking herds of wildebeest and zebra driven by ancient rhythms in search of fresh grazing. It is the uncontested big cat capital of Africa, offering daily, spectacular sightings of massive lion prides, elusive leopards draped in sausage trees, and lightning-fast cheetahs hunting on the open plains. The landscape is punctuated by beautiful granite 'kopjes'—rocky outcrops that serve as natural observation decks for predators. From dawn completely breathless hot air balloon rides to sunsets that set the sky ablaze in red and gold, the Serengeti is the absolute pinnacle of wild Africa.",
    highlights: [
      "Follow the epic, earth-shaking path of the Great Wildebeest Migration",
      "Explore the undisputed, absolute big cat capital of the African continent",
      "Gaze across visually stunning, endlessly stretching golden grass plains",
      "Float silently over massive herds on a sunrise hot air balloon safari",
      "Spot majestic lions resting atop the iconic, ancient granite Kopje rock formations",
    ],
    bestTime:
      "June – October (Dry season), December – March (Epic wildebeest calving season)",
    image: cheetahPlain,
    gallery: [cheetahSafari],
  },
  {
    id: "ngorongoro",
    slug: "ngorongoro",
    name: "Ngorongoro Crater",
    country: "Tanzania",
    tagline:
      "The Eighth Wonder of the World: A Spectacular, Unbroken Caldera Teeming with Life",
    description:
      "Prepare to be breathless at the edge of the Ngorongoro Crater, a stunning UNESCO World Heritage Site and the world's largest inactive, intact, and unfilled volcanic caldera. Dropping down into this breathtaking natural amphitheater reveals a self-contained, incredibly dense ecosystem that operates like a real-life 'Garden of Eden.' Measuring roughly 260 square kilometers, the crater floor is permanently home to a staggering concentration of approximately 25,000 large mammals. It offers one of the best opportunities in Africa to spot the critically endangered, magnificent black rhino in its natural habitat. The diverse terrain includes lush grasslands, the Lerai fever tree forest, and the shimmering, alkaline Lake Magadi, which is often bordered by a vibrant pink ribbon of flamingos. Massive bull elephants with incredibly large tusks, dense prides of highly active lions, and cackling clans of hyenas patrol this enclosed paradise. The panoramic plunge from the misty crater rim down into this densely populated wildlife bowl is an awe-inspiring, unforgettable sensory overload.",
    highlights: [
      "Descend into a globally recognized UNESCO World Heritage geological marvel",
      "Experience an unbelievably dense, high-action concentration of wildlife",
      "Seize rare, excellent opportunities to photograph the elusive black rhinos",
      "View massive, colorful flocks of flamingos fringing the shores of Lake Magadi",
      "Sip morning coffee while taking in mind-blowing panoramas from the crater rim",
    ],
    bestTime: "Year-round (Wildlife is permanently enclosed within the crater)",
    image: rhinoPair,
    gallery: [flamingoSolo],
  },
  {
    id: "tarangire",
    slug: "tarangire",
    name: "Tarangire",
    country: "Tanzania",
    tagline: "The Land of the Baobab Giants and Colossal Elephant Herds",
    description:
      "Tarangire National Park is a wildly beautiful, deeply atmospheric reserve renowned for its radically different, almost surreal landscape. The park is absolutely dominated by hundreds of massive, ancient, thick-trunked baobab trees that look as though they have been planted strictly upside down. Beyond the captivating flora, Tarangire is famous for hosting the largest concentration of elephants in northern Tanzania; incredible, dust-kicking herds numbering in the hundreds can be seen gently meandering through the bush. During the peak of the dry season, the meandering Tarangire River shrinks to a critical lifeline, creating intense, dramatic wildlife viewing as vast numbers of zebra, wildebeest, buffalo, and their trailing predators converge on the shrinking pools of water. The park is also famous for its healthy population of tree-climbing lions and offers spectacular ornithological opportunities, with an astonishing count of over 550 bird species recorded. Tarangire delivers a profoundly quiet, ruggedly authentic safari experience away from heavier tourist crowds.",
    highlights: [
      "Wander through surreal landscapes dotted with ancient, giant baobab trees",
      "Encounter shockingly large, peaceful herds of grazing elephants",
      "Witness intense predator-prey action along the life-giving Tarangire River",
      "Keep your eyes peeled for rare, incredibly agile tree-climbing lions",
      "Enjoy world-class birding spotting with an incredible 550+ recorded species",
    ],
    bestTime:
      "June – October (Dry season triggers massive wildlife migration to the river)",
    image: lionessPortrait,
    gallery: [lionessRoar],
  },
  {
    id: "lake-manyara",
    slug: "lake-manyara",
    name: "Lake Manyara",
    country: "Tanzania",
    tagline: "A Lush, Scenic Gem Where Lions Leisurely Lounge in the Trees",
    description:
      "Tucked dramatically at the sheer, towering base of the Great Rift Valley escarpment, Lake Manyara National Park is a wildly scenic, ecologically diverse gem described by Ernest Hemingway as 'the loveliest I had seen in Africa.' The park creates a striking visual contrast, moving rapidly from thick, dark, jungle-like groundwater forests teeming with swinging troops of olive baboons and blue monkeys, out to the sun-drenched, expansive alkaline shores of the lake itself. The waters are frequently coated in vibrant pink, drawn by the thousands of feeding flamingos, pelicans, and storks. However, the true icons of Lake Manyara are its uniquely adapted, deeply fascinating tree-climbing lions. Spotting a massive, maned lion draped lazily across the high branches of an umbrella acacia tree is a bizarre, breathtaking highlight that defies typical feline behavior. Packing a huge diversity of habits—forests, wetlands, and hot springs—into a highly compact area, Lake Manyara provides a rapid, overwhelmingly beautiful burst of concentrated African wildlife.",
    highlights: [
      "Search the high acacia branches for the legendary, elusive tree-climbing lions",
      "Photograph vibrant, shimmering flocks of flamingos stretching across the water",
      "Drive through deep, ancient groundwater forests completely lush with dense canopy",
      "Enjoy breathtaking, sheer drop views of the mighty Great Rift Valley escarpment",
      "Identify over 400 unique, colorful bird species within a compact ecosystem",
    ],
    bestTime:
      "June – October (Dry season ensures easier driving and active wildlife)",
    image: flamingoSolo,
    gallery: [flamingoWater],
  },
  {
    id: "nairobi-np",
    slug: "nairobi-national-park",
    name: "Nairobi National Park",
    country: "Kenya",
    tagline:
      "The World's Wildlife Capital: Big Cats Prowling Against a Soaring Urban Skyline",
    description:
      "Nairobi National Park is an absolute global anomaly; it is the only fully-fledged national wildlife park in the world that borders a bustling capital city. Located a mere 7 kilometers from the dense, high-rise center of Nairobi, this incredibly unique sanctuary offers an experience like no other. Imagine the surreal, visually striking juxtaposition of a wild, heavily maned lion stalking its prey across golden grass, set perfectly against a glittering backdrop of modern urban skyscrapers. Despite its small size, the park is incredibly potent, serving as a highly successful rhino sanctuary and offering surprisingly reliable sightings of leopards, cheetahs, buffalos, and towering giraffes. The park is an absolute haven for photographers seeking the ultimate, ironic clash between the untamed wild and human civilization. Conveniently located near the world-renowned David Sheldrick Elephant Orphanage and the Giraffe Centre, Nairobi National Park provides a perfect, action-packed introduction or grand finale to any East African safari adventure.",
    highlights: [
      "Frame surreal, iconic photographs linking wild animals with a modern city skyline",
      "Support and witness one of Kenya's most successful black rhino protected sanctuaries",
      "Easily pair your visit with the world-famous David Sheldrick Elephant Orphanage",
      "Hand-feed the friendly, towering residents at the nearby AFEW Giraffe Centre",
      "Spot over 400 distinct bird species mere minutes away from international flights",
    ],
    bestTime:
      "Year-round (Exceptional convenience and year-round urban wildlife viewing)",
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
