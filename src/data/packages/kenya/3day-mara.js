import genImg_0 from "../../../assets/lion pack.jpeg";
import genImg_1 from "../../../assets/cheater.jpeg";
import genImg_2 from "../../../assets/nairobi/giraffe-sunsut.jpeg";
import genImg_3 from "../../../assets/leapard-car.jpeg";
import genImg_4 from "../../../assets/lioness_open.jpeg";
import genImg_5 from "../../../assets/lioness_open.jpeg";

;;
;;
;;

export const package3DayMara = {
  id: "3-day-mara",
  slug: "3-day-masai-mara-budget",
  title: "Masai Mara Budget Safari",
  subtitle: "The quintessential Big Five experience",
  days: 3,
  country: "kenya",
  destinations: ["Masai Mara"],
  price: { low: 530, high: 770 },
  image: genImg_0,
  gallery: [genImg_1, genImg_2],
  difficulty: "Budget",
  highlights: [
    "Thrilling Big Five game drives in Kenya's premier wildlife reserve",
    "Spectacular Mara River area exploration & hippo pools",
    "Breathtaking African golden sunset game drives",
    "Immersive and authentic Maasai cultural village experience",
    "Unforgettable photography moments sweeping across the savannah",
  ],
  included: [
    "Transport in a custom 4x4 safari Landcruiser with pop-up roof",
    "Expert, professional English-speaking safari guide & driver",
    "2 nights comfortable budget accommodation",
    "Delicious comprehensive meals as per itinerary",
    "All national reserve entry fees and taxes",
    "Extensive daily game drives as mentioned",
    "Complimentary 1 litre of bottled drinking water per day per person",
  ],
  excluded: [
    "International flights and visas",
    "Personal expenses (souvenirs, beverages, internet)",
    "Tips and gratuities for your dedicated guide",
    "Optional activities and excursions",
    "Comprehensive travel insurance",
    "Maasai Village Cultural Visit ($20)",
    "Hot Air Balloon Safari over the Serengeti-Mara ecosystem ($500)",
  ],
  optionalActivities: [
    { name: "Maasai Village Visit", price: 20 },
    { name: "Balloon Safaris", price: 500 },
  ],
  accommodation: {
    budget: "Miti Mingi Eco Camp",
  },
  itinerary: [
    {
      day: 1,
      title: "Nairobi – Masai Mara: Journey to the Wild",
      description:
        "Your unforgettable African adventure kicks off with an early morning departure from the bustling hub of Nairobi. As we leave the city behind, prepare to be mesmerized by the dramatic, panoramic vistas of the Great Rift Valley viewpoint, where we'll pause to capture awe-inspiring photos of the escarpment plunging into the valley floor. Continuing our drive through quintessential Kenyan landscapes, we arrive at the world-renowned Maasai Mara National Reserve just in time to savor a hearty, welcoming lunch at your lodge or camp.\n\nAfter a seamless check-in and a moment to breathe in the pure savannah air, the real magic begins. We head out for an exhilarating golden-hour evening game drive in the reserve. This is the optimal window for wildlife viewing as apex predators stir from their daytime slumber and herbivores emerge into the cooling twilight. Keep your cameras ready—expect heart-pounding sightings of majestic lions on the prowl, gentle giant elephants roaming the acacia-dotted plains, graceful giraffes, massive herds of zebras and buffaloes, and if luck is on our side, an elusive leopard draped elegantly across a tree branch. As the African sun dips vividly below the horizon, we return to the camp for a delicious dinner under the stars, serenaded by the sounds of the African night. Don't wait—secure your spot on this life-changing safari today.",
      destination: "Masai Mara National Reserve",
      meals: "Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: genImg_3,
      highlights: [
        "Panoramic Great Rift Valley viewpoint",
        "Thrilling evening sunset game drive",
        "Apex predators: Lions & Leopards",
        "Elephant and Buffalo herds",
      ],
    },
    {
      day: 2,
      title: "Full-Day Masai Mara Game Drive: Heart of the Action",
      description:
        "Wake up to the crisp morning air and the symphony of wild birds. Following an early, energizing breakfast, we set out with pre-packed picnic lunch boxes for an epic, uninterrupted full-day game drive across the seemingly endless plains of the Maasai Mara. Today is dedicated to exploring the deepest corners and diverse habitats of the reserve on our ultimate quest for the legendary Big Five: the mighty lion, towering elephant, formidable Cape buffalo, elusive leopard, and the rare rhinoceros. But the Mara never stops giving—prepare to witness lightning-fast cheetahs, cunning hyenas, massive wildebeest congregations, and an incredibly diverse array of vibrant bird species.\n\nOur journey will take us completely off the beaten path towards the perilous waters of the iconic Mara River. Famous worldwide for hosting some of nature's most dramatic wildlife encounters, this river is the stage for the jaw-dropping Great Migration crossing (seasonal), where millions of wildebeest and zebras brave crocodile-infested waters. We'll find a safe, breathtaking scenic spot right in the heart of the wilderness to enjoy our packed picnic lunch, surrounded completely by untouched nature. This is raw, unfiltered Kenya at its finest. If you've ever dreamt of stepping into a real-life wildlife documentary, today is the day it comes true.",
      destination: "Masai Mara National Reserve",
      meals: "Breakfast, Picnic Lunch & Dinner",
      accommodation: "Miti Mingi Eco Camp",
      image: genImg_4,
      highlights: [
        "In-depth pursuit of the Big Five",
        "Exploration of the iconic Mara River",
        "The spectacular Great Migration (seasonal)",
        "Exclusive wilderness picnic lunch",
      ],
    },
    {
      day: 3,
      title: "Cultural Immersion & Return to Nairobi",
      description:
        "Relish a final, tranquil breakfast at the camp as the morning sun washes over the Mara. Before bidding farewell to the wilderness, we highly recommend an optional visit to an authentic, traditional Maasai village ($20 per person). This incredibly enriching cultural experience offers a profound glimpse into the ancient traditions, vibrant attire, energetic dances, and unique pastoral lifestyle of the Maasai people, who have coexisted harmoniously with this wildlife for centuries. It's a fantastic opportunity to purchase beautiful, hand-crafted beadwork directly from the artisans and support the local community.\n\nFollowing the cultural tour, we gracefully exit the Maasai Mara ecosystem, carrying memories that will last a lifetime. Sit back and relax in our comfortable 4x4 cruiser as we navigate the return journey to Nairobi. We'll arrive back in Kenya's capital in the mid-to-late afternoon, bringing an end to an extraordinary, soul-stirring safari adventure. You will be dropped off at your hotel or the airport for your onward journey, forever transformed by the magic of the Mara. Book now to start writing your own magnificent African safari story!",
      destination: "Nairobi",
      meals: "Breakfast & Lunch",
      accommodation: null,
      image: genImg_5,
      highlights: [
        "Authentic traditional Maasai village visit",
        "Unforgettable cultural immersion & dances",
        "Scenic drive back to Nairobi",
      ],
    },
  ],
};
