import { PHOTOS as P } from "./photos";

// Destinations data
export const destinations = [
  {
    id: "masai-mara",
    slug: "masai-mara",
    name: "Masai Mara",
    country: "Kenya",
    tagline:
      "Kenya's best-known reserve, and the northern end of the wildebeest migration",
    description:
      "The Masai Mara National Reserve lies in south-west Kenya on the border with Tanzania's Serengeti. It is open grassland with a high density of lions, leopards and cheetahs, and wildlife is present all year. From roughly July to October the wildebeest migration moves through, including the river crossings on the Mara. Most of our Kenya safaris start here, about five to six hours by road from Nairobi.",
    highlights: [
      "Witness Great Migration river crossings with millions of wildebeests",
      "Guaranteed year-round sightings of the Big Five",
      "Engage in authentic Maasai cultural visits and traditional ceremonies",
      "Experience sunrise hot air balloon safaris over the plains",
      "Explore the African bush on action-packed nocturnal game drives",
    ],
    bestTime: "July – October (Peak Migration season for river crossings)",
    image: P.lionPack.src,
    gallery: [P.leopardRock.src, P.vanSunrise.src, P.wildebeest.src],
  },
  {
    id: "lake-nakuru",
    slug: "lake-nakuru",
    name: "Lake Nakuru",
    country: "Kenya",
    tagline:
      "A Rift Valley lake with a rhino sanctuary and, in season, flamingos",
    description:
      "Lake Nakuru National Park surrounds a shallow soda lake on the floor of the Great Rift Valley. The park is fenced and protects both black and white rhino, which makes it one of the more reliable places in Kenya to see them. You can also expect Rothschild's giraffe, buffalo, waterbuck and a long bird list. Flamingo numbers rise and fall with the water level, so they are a bonus, not a guarantee.",
    highlights: [
      "Marvel at a highly successful black and white rhino sanctuary",
      "Photograph flocks of pink flamingos",
      "Track elusive leopards resting in the ancient yellow fever trees",
      "Encounter the rare and towering Rothschild's giraffe",
      "Take in sweeping panoramic vistas from the Baboon Cliff viewpoint",
    ],
    bestTime: "Year-round (Excellent birding and rhino spotting continuously)",
    image: P.flamingoPair.src,
    gallery: [P.rhinosFlamingos.src, P.flamingoFlock.src, P.giraffeSunset.src],
  },
  {
    id: "hells-gate",
    slug: "hells-gate",
    name: "Hell's Gate",
    country: "Kenya",
    tagline:
      "One of the few Kenyan parks you can explore on foot or by bicycle",
    description:
      "Hell's Gate National Park sits just south of Lake Naivasha. There are very few large predators here, so visitors are allowed to walk and cycle among zebra, giraffe, gazelle and buffalo. The scenery is the main draw: red cliffs, rock towers and a narrow gorge you can hike through with a local guide. It works well as an active half day inside a longer safari.",
    highlights: [
      "Experience the thrill of cycling safaris directly alongside wild animals",
      "Conquer the sheer volcanic rock walls of the famous Fischer's Tower",
      "Hike the twisting, water-carved depths of the Ol Njorowa Gorge",
      "Witness powerful, natural geothermal hot springs and steam vents",
      "Enjoy rock climbing on cliff faces",
    ],
    bestTime: "Year-round (Perfect for active, outdoor exploration)",
    image: P.sunsetAcacia.src,
    gallery: [P.impala.src, P.giraffeSunset.src, P.vanSunrise.src],
  },
  {
    id: "lake-naivasha",
    slug: "lake-naivasha",
    name: "Lake Naivasha",
    country: "Kenya",
    tagline:
      "A freshwater Rift Valley lake known for hippos and birdlife",
    description:
      "Lake Naivasha is a freshwater lake about two hours north-west of Nairobi. A boat ride takes you past hippo pods and a wide range of water birds, including fish eagles. On Crescent Island you can walk among giraffe, zebra, wildebeest and antelope, since there are no predators on the island. Both the boat ride and the walk are optional extras on our itineraries.",
    highlights: [
      "Glide on tranquil boat rides to closely observe massive hippo pods",
      "Take a unique walking safari among giraffes on Crescent Island",
      "Engage in bird watching with over 400 recorded species",
      "Visit nearby colorful horticultural flower farms",
      "Soak up dramatically scenic, sunset-drenched Rift Valley views",
    ],
    bestTime: "Year-round (Exceptional birding and boating consistently)",
    image: P.giraffeSunset.src,
    gallery: [P.egretShore.src, P.francolin.src, P.vanSunrise.src],
  },
  {
    id: "amboseli",
    slug: "amboseli",
    name: "Amboseli",
    country: "Kenya",
    tagline:
      "Large elephant herds on open plains below Mount Kilimanjaro",
    description:
      "Amboseli National Park is in southern Kenya, close to the Tanzanian border. It is best known for its elephants, which gather around the park's swamps, and for views of Mount Kilimanjaro across the border, clearest in the early morning and late afternoon. The open terrain makes animals easy to spot. Lions, cheetahs, hyenas, buffalo and many bird species are also here.",
    highlights: [
      "Marvel at the unencumbered backdrop of Mount Kilimanjaro",
      "Observe and photograph some of the largest elephant herds in all of Africa",
      "Climb Observation Hill for 360-degree panoramic landscape views",
      "Discover intense wildlife concentrations around the lush Enkongo Narok swamps",
      "Capture award-winning photography in the classic African setting",
    ],
    bestTime:
      "June – October (Dry season ensures the clearest views of Kilimanjaro)",
    image: P.elephantKiliRight.src,
    gallery: [P.kilimanjaro.src, P.tuskerKili.src, P.elephantKiliLeft.src],
  },
  {
    id: "tsavo",
    slug: "tsavo",
    name: "Tsavo National Park",
    country: "Kenya",
    tagline:
      "Kenya's largest protected area, between Nairobi and the coast",
    description:
      "Tsavo East and Tsavo West together form the largest protected area in Kenya. Tsavo East is flat, dry bush country known for elephants dusted red by the soil. Tsavo West is hillier, with lava flows and the clear pools of Mzima Springs. Wildlife is more spread out than in the Mara, so game drives here are about space and scenery as much as numbers. We include Tsavo on custom itineraries.",
    highlights: [
      "Photograph the dust-coated red elephants of Tsavo",
      "Explore the crystal-clear, underwater oasis of Mzima Springs",
      "Hike alongside the dramatic, jagged black rock of the Shetani lava flows",
      "Wonder at the powerful, churning water channels of Lugard Falls",
      "Experience a profound sense of isolation in a vast, untamed wilderness",
    ],
    bestTime:
      "June – October (Best conditions for wildlife congregation at water sources)",
    image: P.tuskerKili.src,
    gallery: [P.lionessResting.src, P.leopardRock.src, P.sunsetAcacia.src],
  },
  {
    id: "ol-pejeta",
    slug: "ol-pejeta",
    name: "Ol Pejeta Conservancy",
    country: "Kenya",
    tagline:
      "A Laikipia conservancy that protects rhinos, including the last northern whites",
    description:
      "Ol Pejeta Conservancy lies on the Laikipia plateau near Nanyuki, with Mount Kenya on the horizon. It holds a large black rhino population and is home to the last two northern white rhinos in the world. The conservancy also runs a chimpanzee sanctuary. Lions, elephants, buffalo and leopard are all present. We include Ol Pejeta on custom itineraries.",
    highlights: [
      "Pay your respects to the very last two Northern White Rhinos on Earth",
      "Visit the heartwarming Sweetwaters Chimpanzee Sanctuary",
      "Embark on specialized night game drives for nocturnal predators",
      "Enjoy consistently exceptional, high-density Big Five wildlife sightings",
      "Participate in hands-on, educational behind-the-scenes conservation tours",
    ],
    bestTime: "Year-round (Excellent road conditions and consistent wildlife)",
    image: P.rhinosSanctuary.src,
    gallery: [P.lionessResting.src, P.vanSunrise.src, P.leopardRock.src],
  },
  {
    id: "serengeti",
    slug: "serengeti",
    name: "Serengeti",
    country: "Tanzania",
    tagline:
      "Northern Tanzania's great plains, and the heart of the wildebeest migration",
    description:
      "Serengeti National Park covers close to 15,000 square kilometres of northern Tanzania. The wildebeest and zebra migration circles through it over the year, so where the herds are depends on the month you travel. Even away from the herds, the central Serengeti has resident lions, leopards and cheetahs. Our Tanzania safaris camp inside the park, which keeps you close to the wildlife at dawn and dusk.",
    highlights: [
      "Follow the earth-shaking path of the Great Wildebeest Migration",
      "Explore the undisputed, big cat capital of the African continent",
      "Gaze across visually endlessly stretching golden grass plains",
      "Float silently over massive herds on a sunrise hot air balloon safari",
      "Spot lions resting atop the ancient granite Kopje rock formations",
    ],
    bestTime:
      "June – October (Dry season), December – March (Wildebeest calving season)",
    image: P.leopardTree.src,
    gallery: [P.wildebeest.src, P.cheetahMound.src, P.vanSunrise.src],
  },
  {
    id: "ngorongoro",
    slug: "ngorongoro",
    name: "Ngorongoro Crater",
    country: "Tanzania",
    tagline:
      "A volcanic crater about 600 metres deep, with wildlife across its floor",
    description:
      "Ngorongoro Crater is the collapsed cone of an ancient volcano and a UNESCO World Heritage Site. The floor, around 260 square kilometres, holds lions, hyenas, elephants, buffalo, hippos and a small population of black rhino. Because the crater walls keep most animals in, a half-day game drive usually covers a lot of species. Our itineraries camp on the rim and descend in the morning.",
    highlights: [
      "Descend into a globally recognized UNESCO World Heritage geological marvel",
      "Experience an unbelievably dense, high-action concentration of wildlife",
      "Seize rare, excellent opportunities to photograph the elusive black rhinos",
      "View massive, colorful flocks of flamingos fringing the shores of Lake Magadi",
      "Sip morning coffee while taking in panoramas from the crater rim",
    ],
    bestTime: "Year-round (Wildlife is permanently enclosed within the crater)",
    image: P.lionVehicle.src,
    gallery: [P.lionessResting.src, P.lionPack.src, P.wildebeest.src],
  },
  {
    id: "tarangire",
    slug: "tarangire",
    name: "Tarangire",
    country: "Tanzania",
    tagline:
      "Baobab country with large elephant herds, best in the dry season",
    description:
      "Tarangire National Park is about two hours from Arusha. Its landscape is marked by old baobab trees and the Tarangire River, which draws animals in from the surrounding area during the dry months of June to October. Elephant herds here can be very large. You may also see lions, giraffe, zebra, wildebeest and more than 500 recorded bird species.",
    highlights: [
      "Wander through surreal landscapes dotted with ancient, giant baobab trees",
      "Encounter shockingly large, peaceful herds of grazing elephants",
      "Witness intense predator-prey action along the life-giving Tarangire River",
      "Keep your eyes peeled for rare, agile tree-climbing lions",
      "Enjoy birding spotting with a 550+ recorded species",
    ],
    bestTime:
      "June – October (Dry season triggers massive wildlife migration to the river)",
    image: P.elephantTrunkUp.src,
    gallery: [P.sunsetAcacia.src, P.giraffeSunset.src, P.lionessResting.src],
  },
  {
    id: "lake-manyara",
    slug: "lake-manyara",
    name: "Lake Manyara",
    country: "Tanzania",
    tagline:
      "A small park below the Rift Valley escarpment, strong on birds and forest",
    description:
      "Lake Manyara National Park is a narrow strip between the Rift Valley escarpment and a shallow alkaline lake. You drive through groundwater forest with baboons and blue monkeys before reaching open floodplain. The lake attracts flamingos and many other water birds. The park is known for lions that sometimes rest in trees, though sightings are occasional.",
    highlights: [
      "Search the high acacia branches for the elusive tree-climbing lions",
      "Photograph vibrant, shimmering flocks of flamingos stretching across the water",
      "Drive through deep, ancient groundwater forests completely lush with dense canopy",
      "Enjoy sheer drop views of the mighty Great Rift Valley escarpment",
      "Identify over 400 unique, colorful bird species within a compact ecosystem",
    ],
    bestTime:
      "June – October (Dry season ensures easier driving and active wildlife)",
    image: P.lionessResting.src,
    gallery: [P.flamingoFlock.src, P.giraffeSunset.src, P.elephantTrunkUp.src],
  },
  {
    id: "nairobi-np",
    slug: "nairobi-national-park",
    name: "Nairobi National Park",
    country: "Kenya",
    tagline:
      "Lions, rhinos and giraffes a short drive from the city centre",
    description:
      "Nairobi National Park is about seven kilometres from the centre of Nairobi, with the city skyline visible behind the plains. It has lions, leopards, buffalo, giraffe, zebra and one of Kenya's most successful black rhino sanctuaries. There are no elephants in the park. A half-day game drive here fits easily into a stopover or a free day before or after a longer safari.",
    highlights: [
      "Frame surreal, photographs linking wild animals with a modern city skyline",
      "Support and witness one of Kenya's most successful black rhino protected sanctuaries",
      "Easily pair your visit with the David Sheldrick Elephant Orphanage",
      "Hand-feed the friendly, towering residents at the nearby AFEW Giraffe Centre",
      "Spot over 400 distinct bird species mere minutes away from international flights",
    ],
    bestTime:
      "Year-round (Exceptional convenience and year-round urban wildlife viewing)",
    image: P.nairobiGiraffes.src,
    gallery: [P.rhinosSanctuary.src, P.impala.src, P.giraffeSunset.src],
  },
];

export function getDestinationBySlug(slug) {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationsByCountry(country) {
  return destinations.filter((d) => d.country === country);
}
