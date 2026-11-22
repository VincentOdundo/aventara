import { PHOTOS } from "../../photos";

const heroImg = PHOTOS.nairobiGiraffeSunset.src;

export const packageHalfDayNairobi = {
  id: "half-day-nairobi",
  slug: "half-day-nairobi-tour",
  title: "Nairobi Half-Day Tour",
  subtitle:
    "A half-day wildlife and city outing for stopovers and free days in Nairobi.",
  days: 0.5,
  country: "kenya",
  destinations: ["Nairobi"],
  price: { low: 180, high: 180 },
  image: heroImg,
  difficulty: "Budget",
  highlights: [
    "Flexible 4-to-5-hour morning or afternoon Nairobi circuit",
    "Pickup from Nairobi hotels, JKIA, Wilson Airport or City Market",
    "Combine city landmarks with optional Nairobi National Park or Giraffe Centre",
    "Visit City Market or the Maasai Market with a local Kenyan guide",
    "Designed around international transit layovers and pre-safari free days",
  ],
  included: [
    "Professional, English-speaking local tour guide",
    "Private air-conditioned transportation with hotel or airport pickup",
    "Curated city highlights and cultural route tailored to your schedule",
    "Unlimited guided photo stops across central Nairobi and Karen/Lang'ata",
    "Chilled bottled drinking water during the tour",
  ],
  excluded: [
    "Meals and dining expenses",
    "Optional entry tickets to wildlife parks, sanctuaries, or museums (paid directly at gate)",
    "Personal shopping and souvenirs",
    "Tips and gratuities for your guide",
  ],
  accommodation: null,
  itinerary: [
    {
      day: 1,
      title: "Half-Day Nairobi Wildlife & City Explorer (4–5 Hours)",
      description:
        "Choose a morning departure (07:30–12:30) or an afternoon window (13:30–18:00) with door-to-door pickup from your Nairobi hotel, Jomo Kenyatta International Airport (JKIA), Wilson Airport, or our City Market base in an air-conditioned private vehicle with your English-speaking Kenyan driver-guide and chilled bottled water.\n\nDepending on your interests and flight timing, your guide builds a smooth four-to-five-hour loop pairing central Nairobi's historic landmarks with optional wildlife sanctuaries in Lang'ata and Karen. Classic city stops include the Kenyatta International Convention Centre (KICC) rooftop terrace for 360-degree views of Nairobi's skyline and the open plains of Nairobi National Park, the Nairobi National Museum or Kenya National Archives, and City Market or the open-air Maasai Market for Kisii soapstone carvings, beaded jewelry, and Kenyan AA coffee.\n\nIf you prefer wildlife over museums, the route pivots directly into Lang'ata and Karen — where you can add a short game drive inside Nairobi National Park, hand-feed endangered Rothschild giraffes at the Giraffe Centre, or time the 11:00 public viewing hour at the Sheldrick Wildlife Trust elephant orphanage (gate tickets paid directly or pre-arranged at cost). Your guide drops you back at your hotel or JKIA with comfortable margin before your onward flight.",
      destination: "Nairobi",
      meals:
        "None (Optional stops for authentic Kenyan coffee or nyama choma lunch can be arranged)",
      accommodation: null,
      highlights: [
        "KICC rooftop skyline panorama & CBD heritage walk",
        "City Market & open-air Maasai craft market stop",
        "Optional Lang'ata wildlife loop (Nairobi National Park, Giraffe Centre, Sheldrick Trust)",
        "Seamless hotel, JKIA or Wilson Airport drop-off",
      ],
    },
  ],
};
