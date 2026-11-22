// Unique collection editorial guides and bespoke FAQs for each /safaris/* hub.
// Eliminates the 48%–66% text overlap caused previously by repeating the same
// 9-question generalFaqs() block across every /safaris/* collection page.

export const HUB_CONTENT = {
  all: {
    heading: "How to Choose Between Kenya, Tanzania & Cross-Border Safaris",
    paragraphs: [
      "Every safari published below carries transparent low-season (Jan 1 – Jun 30) and high-season (Jul 1 – Dec 31) per-person USD rates for both sharing rooms (2+ travellers) and single rooms. Multi-day departures use custom pop-up roof 4x4 safari Land Cruisers capped at seven guests so every traveller gets a guaranteed window seat, with national park entry fees, camps or lodges, full-board meals, and airport transfers already built into the quote.",
      "If you have 2 to 8 days starting in Nairobi, our Kenya safaris deliver the best price-to-wildlife ratio — pairing the Masai Mara with Lake Nakuru's rhinos, Lake Naivasha's hippos, and Amboseli's Kilimanjaro elephant herds. If your priority is the Serengeti and Ngorongoro Crater on a 3-to-6-day window, fly into Kilimanjaro (JRO) and join our Arusha-based Tanzania northern circuit. Travellers with 10 to 12 days can link both countries overland via the Namanga border in one coordinated itinerary.",
    ],
    quickLinks: [
      { label: "Compare Kenya Safaris (2–8 Days)", to: "/safaris/kenya" },
      { label: "Compare Tanzania Safaris (3–6 Days)", to: "/safaris/tanzania" },
      { label: "Cross-Border Kenya & Tanzania (10–12 Days)", to: "/safaris/combined" },
      { label: "Nairobi Half-Day Stopover Tour ($180)", to: "/safari/half-day-nairobi-tour" },
      { label: "Full 2026–2027 Rate Card", to: "/company-profile" },
    ],
    faqs: [
      {
        q: "What is the cheapest multi-day safari you operate?",
        a: "Our lowest-priced multi-day safari is the 3-Day Amboseli Budget Safari at $382 per person sharing all year ($420 single room), followed by the 2-Day Masai Mara Budget Safari from $407 in low season. For stopovers in the capital, the Nairobi Half-Day Tour is $180 per person.",
      },
      {
        q: "When do low-season and high-season safari prices apply?",
        a: "Low season runs January 1 to June 30 and high season runs July 1 to December 31 (reflecting higher July–December Masai Mara conservation fees and peak migration demand). Every itinerary page displays both seasons side by side.",
      },
      {
        q: "What is included in published multi-day safari rates?",
        a: "Published multi-day rates cover transport in a pop-up roof 4x4 Land Cruiser (max 7 guests), English-speaking driver-guide, all park and reserve entry fees, camp or lodge accommodation, meals per itinerary, drinking water, and Nairobi or Arusha transfers.",
      },
      {
        q: "Can I book a private 4x4 departure instead of joining a shared group?",
        a: "Yes. Every published itinerary can be upgraded to a private 4x4 vehicle on your exact dates, or customized with mid-range lodges, Tsavo, or Ol Pejeta Conservancy. Message us on WhatsApp or email for a 24-hour tailored quote.",
      },
    ],
  },

  kenya: {
    heading: "Planning a Budget 4x4 Safari in Kenya from Nairobi",
    paragraphs: [
      "All eight published Kenya itineraries start and finish in Nairobi with complimentary pickup from city hotels, City Market, or Jomo Kenyatta International Airport (JKIA). Shared group departures run daily in 4x4 Land Cruisers capped at seven guests, keeping per-person costs accessible while still covering full non-resident Kenya Wildlife Service and Narok County park fees, en-suite budget tented camps, and three meals a day on safari.",
      "Choosing the right Kenya duration comes down to how many distinct habitats you want alongside the Masai Mara. Two to three days focuses purely on either the Mara's big cats or Amboseli's elephants below Kilimanjaro. Four to five days adds Rift Valley highlights — Lake Nakuru's black and white rhinos, Lake Naivasha's hippo boat rides, and cycling in Hell's Gate — while six to eight days loops the entire southern circuit from Mara through Nakuru and Naivasha all the way to Amboseli.",
    ],
    quickLinks: [
      { label: "Read the Kenya Safari Guide", to: "/kenya" },
      { label: "Masai Mara Destination Guide", to: "/destinations/masai-mara" },
      { label: "Amboseli Destination Guide", to: "/destinations/amboseli" },
      { label: "Lake Nakuru Destination Guide", to: "/destinations/lake-nakuru" },
      { label: "Need just 4–5 hours? Nairobi Half-Day Tour", to: "/safari/half-day-nairobi-tour" },
    ],
    faqs: [
      {
        q: "Why are Kenya safari prices lower between January and June?",
        a: "Narok County applies a lower non-resident Masai Mara entry fee from January through June and doubles it from July through December during the Great Migration. Our low-season rates pass those lower conservation and camp costs directly to travellers.",
      },
      {
        q: "How do I choose between a 3-day Masai Mara and a 3-day Amboseli safari?",
        a: "Pick the 3-Day Masai Mara ($577 low / $870 high) for the highest density of lions, cheetahs, leopards, and seasonal wildebeest herds. Pick the 3-Day Amboseli ($382 all year) for huge elephant herds beneath Mount Kilimanjaro at a flat year-round price.",
      },
      {
        q: "What accommodation is used on Kenya budget safaris?",
        a: "We stay at vetted budget tented camps and safari hotels right outside park gates — including Miti Mingi Eco Camp in the Masai Mara, Buraha Zenoni Resort in Nakuru, Taphe Guest Resort in Naivasha, and Nyati Safari Camp in Amboseli — with hot showers, mosquito nets, and buffet meals.",
      },
      {
        q: "Do I need a Kenya eTA before arriving in Nairobi?",
        a: "Most international visitors must apply online for Kenya's Electronic Travel Authorisation (eTA) at least 3 to 5 working days before flying into JKIA. Visa/eTA fees are excluded from safari package rates.",
      },
    ],
  },

  tanzania: {
    heading: "Northern Circuit Tanzania Safaris from Arusha",
    paragraphs: [
      "Our four Tanzania itineraries (3 to 6 days) launch directly from Arusha, the gateway city roughly one hour from Kilimanjaro International Airport (JRO) and five hours south of Nairobi by daily shuttle. Each route explores the classic Northern Circuit — anchoring on central Serengeti's predator-rich Seronera plains and a dawn 600-metre descent onto the Ngorongoro Crater floor — in custom pop-up roof 4x4 Land Cruisers.",
      "Because driving from Arusha to Serengeti takes six to seven hours each way, trip length directly shapes your pace. Three days hits Serengeti and Ngorongoro back-to-back for tight calendars; four days unlocks a full uninterrupted day inside Serengeti; five days layers in Tarangire's baobab elephant herds plus Lake Manyara; and six days pairs two unhurried Serengeti nights with Ngorongoro Crater and Lake Manyara's groundwater forest.",
    ],
    quickLinks: [
      { label: "Read the Tanzania Safari Guide", to: "/tanzania" },
      { label: "Serengeti Destination Guide", to: "/destinations/serengeti" },
      { label: "Ngorongoro Crater Guide", to: "/destinations/ngorongoro" },
      { label: "Tarangire Destination Guide", to: "/destinations/tarangire" },
      { label: "Lake Manyara Guide", to: "/destinations/lake-manyara" },
    ],
    faqs: [
      {
        q: "Where do Cima Brava Tanzania safaris begin and end?",
        a: "All four Tanzania-only itineraries (3 to 6 days) start and finish in Arusha, with pickup from Arusha town hotels. Airport transfers from Kilimanjaro International Airport (JRO) or cross-border shuttles from Nairobi can be arranged on request.",
      },
      {
        q: "What type of accommodation is included on Tanzania budget safaris?",
        a: "Published Tanzania budget rates use established public wilderness campsites inside the parks — such as Nyani Camp in central Serengeti and Simba Campsite on the Ngorongoro Crater rim — with tents, sleeping mats, camp cook, and freshly prepared hot meals provided.",
      },
      {
        q: "Are Tanzania national park and Ngorongoro Crater descent fees included?",
        a: "Yes. TANAPA Serengeti, Tarangire, and Lake Manyara entry fees, Ngorongoro Conservation Area transit fees, and crater descent service fees are built into our published USD prices.",
      },
      {
        q: "Should I book 3 days or 5 days in northern Tanzania?",
        a: "Choose 3 days ($650 low / $950 high) only if your calendar is tight and you specifically want Serengeti plus Ngorongoro. Choose 4 to 6 days ($850–$1,650) if you want full unhurried game drives inside Serengeti and time for Tarangire's elephants or Lake Manyara.",
      },
    ],
  },

  combined: {
    heading: "Cross-Border Kenya & Tanzania Safaris in One Seamless Booking",
    paragraphs: [
      "Combining Kenya and Tanzania overland lets you experience the full breadth of East Africa's classic parks without booking separate international flights between Nairobi and Arusha. All four published cross-border packages (10 to 12 days) start in Nairobi, traverse Kenya's Masai Mara, Lake Nakuru, and Amboseli, cross smoothly at the Namanga border post into Arusha, and continue into Tanzania's Serengeti and Ngorongoro Crater (plus Tarangire on the 12-day Complete route).",
      "We manage the Namanga border handover directly so your Kenya driver-guide escorts you through immigration formalities and introduces you to your Tanzania safari crew on the Arusha side, keeping luggage, meals, park permits, and camp check-ins synchronized throughout the journey.",
    ],
    quickLinks: [
      { label: "Compare 10-Day Ultimate Budget ($1,719)", to: "/safari/10-day-kenya-tanzania-ultimate-budget" },
      { label: "Compare 12-Day Complete with Tarangire ($2,100)", to: "/safari/12-day-kenya-tanzania-complete" },
      { label: "Kenya Safari Guide", to: "/kenya" },
      { label: "Tanzania Safari Guide", to: "/tanzania" },
      { label: "Request a Custom Cross-Border Route", to: "/contact" },
    ],
    faqs: [
      {
        q: "How does the Kenya-to-Tanzania border crossing at Namanga work?",
        a: "After finishing your morning game drive in Amboseli, you drive roughly 45 minutes to the Namanga One-Stop Border Post. Your Kenyan guide assists with exit and Tanzanian entry stamps before handing you over to your Tanzanian vehicle and guide for the 2-hour tarmac drive into Arusha.",
      },
      {
        q: "What is the difference between the two 12-day Kenya & Tanzania safaris?",
        a: "The 12-Day Kenya & Tanzania Complete ($2,100 low / $2,900 high) adds Tarangire National Park for maximum park variety across six ecosystems. The 12-Day Serengeti & Ngorongoro Focus ($2,150 low / $2,950 high) skips Tarangire to invest extra full game-drive time deeper inside the Serengeti.",
      },
      {
        q: "Where do combined Kenya & Tanzania safaris finish?",
        a: "Depending on the itinerary and your onward flights, you can finish either in Arusha (convenient for Kilimanjaro International Airport or flights to Zanzibar) or return by road shuttle to Nairobi (JKIA). Confirm your preferred drop-off city when booking.",
      },
      {
        q: "What visas and vaccinations are needed for a combined Kenya & Tanzania trip?",
        a: "Travellers need both Kenya's online eTA and a Tanzanian tourist visa (online e-Visa or visa on arrival at Namanga for eligible nationalities). A valid Yellow Fever vaccination certificate is strictly required when crossing overland from Kenya into Tanzania.",
      },
    ],
  },
};
