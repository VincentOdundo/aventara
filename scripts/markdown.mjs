// Builds the Markdown versions of the public pages, /sitemap.md, /llms.txt and /llms-full.txt
// directly from the shared data modules (no jsdom scraping required).
import { SITE_URL, markdownPath } from "./routes.mjs";

const abs = (path) => `${SITE_URL}${path}`;
const cleanTitle = (t) => String(t || "").replace(/ \| Cima Brava(?: Adventures)?$/, "");
const cell = (text) => String(text).replace(/\|/g, "\\|").replace(/\s*\n+\s*/g, " ");
const table = (head, rows) =>
  [
    `| ${head.join(" | ")} |`,
    `| ${head.map(() => ":---").join(" | ")} |`,
    ...rows.map((r) => `| ${r.map(cell).join(" | ")} |`),
  ].join("\n");
const bullets = (items) => items.map((i) => `- ${i}`).join("\n");

function header({ title, purpose, path, date }) {
  return [
    `# ${title}`,
    "",
    `> ${purpose}`,
    "",
    `- Canonical page: ${abs(path)}`,
    "- Language: English",
    `- Last generated: ${date}`,
    "- Source: generated from the same data modules as the Next.js web page by Cima Brava Adventures",
    "",
  ].join("\n");
}

const footer = (ctx) =>
  [
    "",
    "## Contact and booking",
    "",
    "- Office: City Market, Muindi Mbingu Street, Nairobi, Kenya",
    `- WhatsApp: ${ctx.company.PHONE_DISPLAY} (https://wa.me/${ctx.WHATSAPP_NUMBER})`,
    `- Email: ${ctx.CONTACT_EMAIL}`,
    `- TripAdvisor: ${ctx.company.TRIPADVISOR_URL}`,
    `- All safari packages and prices: ${abs("/safaris.md")}`,
    `- Content map: ${abs("/sitemap.md")}`,
    "",
  ].join("\n");

const faqBlock = (faqs) => faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n");

/* ---------- one safari ---------- */

function safariDoc(safari, ctx) {
  const { seo, SAFARI_CONTENT } = ctx;
  const { usd, durationLabel } = seo;
  const route = seo.startAndEnd(safari);
  const stays = seo.staysOf(safari);
  const parks = seo.destinationsForSafari(safari);
  const category = seo.CATEGORIES[seo.categoryOf(safari)];
  const editorial = SAFARI_CONTENT?.[safari.slug];
  const single = (s) => (safari.singlePrice ? usd(safari.singlePrice[s]) : "on request");

  const facts = [
    `Length: ${durationLabel(safari.days)}`,
    route && safari.days >= 1 ? `Starts in ${route.start}, ends in ${route.end}` : null,
    `Places visited: ${safari.destinations.join(", ")}`,
    stays.length ? `Overnight stays: ${stays.join(", ")}` : null,
    `Collection: ${category.label} (${abs((category.path === "/safari/half-day-nairobi-tour" ? "/safaris" : category.path) + ".md")})`,
  ].filter(Boolean);

  const days = safari.itinerary
    .map((d) =>
      [
        `### Day ${d.day}: ${d.title}`,
        "",
        `- Where: ${d.destination}`,
        `- Meals: ${d.meals}`,
        `- Overnight: ${d.accommodation ? String(d.accommodation).split(" (")[0] : "none (trip ends)"}`,
        "",
        d.description,
      ].join("\n"),
    )
    .join("\n\n");

  return [
    header({
      title: safari.title,
      purpose: `${safari.subtitle} Price by season, day-by-day itinerary, logistics, inclusions and FAQs.`,
      path: `/safari/${safari.slug}`,
      date: ctx.lastmodForRoute(`/safari/${safari.slug}`),
    }),
    ...(editorial?.overviewParagraphs?.length
      ? ["## Why choose this route", "", editorial.overviewParagraphs.join("\n\n"), ""]
      : []),
    "## Price per person (US dollars)",
    "",
    table(
      ["Season", "Dates", "Sharing a room", "Single room"],
      ["low", "high"].map((s) => [
        ctx.SEASONS[s].label,
        ctx.SEASONS[s].dates,
        usd(safari.price[s]),
        single(s),
      ]),
    ),
    "",
    seo.safariPriceAnswer(safari),
    "",
    "## At a glance",
    "",
    bullets(facts),
    "",
    ...(editorial?.logistics
      ? [
          "## Route logistics",
          "",
          bullets([
            `Departure & return: ${editorial.logistics.departure}`,
            `Road legs: ${editorial.logistics.driving}`,
            `Vehicle: ${editorial.logistics.vehicle}`,
            `Stays & luggage: ${editorial.logistics.stayAndLuggage}`,
          ]),
          "",
        ]
      : []),
    "## Highlights",
    "",
    bullets(safari.highlights),
    "",
    "## Day-by-day itinerary",
    "",
    days,
    "",
    "## Included in the price",
    "",
    bullets(safari.included),
    "",
    "## Not included",
    "",
    bullets(safari.excluded),
    ...(safari.optionalActivities && safari.optionalActivities.length
      ? [
          "",
          "## Optional extras (per person)",
          "",
          bullets(safari.optionalActivities.map((x) => `${x.name}: ${usd(x.price)}`)),
        ]
      : []),
    ...(parks.length
      ? [
          "",
          "## Park guides",
          "",
          bullets(parks.map((p) => `[${p.name}](${abs(`/destinations/${p.slug}.md`)})`)),
        ]
      : []),
    "",
    "## Questions and answers",
    "",
    faqBlock(seo.safariFaqs(safari)),
    footer(ctx),
  ].join("\n");
}

/* ---------- safari lists ---------- */

const safariRows = (safaris, ctx) =>
  safaris.map((s) => [
    `[${s.title}](${abs(`/safari/${s.slug}.md`)})`,
    ctx.seo.durationLabel(s.days),
    ctx.seo.usd(s.price.low),
    ctx.seo.usd(s.price.high),
    s.destinations.join(", "),
  ]);

const SAFARI_HEAD = ["Safari", "Length", "Low season, per person", "High season, per person", "Places visited"];

function hubDoc(country, ctx) {
  const { seo, allPackages, safariPackages, SEASONS, HUB_CONTENT } = ctx;
  const category = seo.CATEGORIES[country];
  const safaris = country ? allPackages[country] : safariPackages;
  const path = country ? `/safaris/${country}` : "/safaris";
  const title = country ? `${category.label}: packages and prices` : "Kenya and Tanzania safari packages and prices";
  const guide = HUB_CONTENT?.[country || "all"];

  const sections = country
    ? [table(SAFARI_HEAD, safariRows(safaris, ctx))]
    : Object.keys(seo.CATEGORIES).flatMap((key) => [
        `### ${seo.CATEGORIES[key].label}`,
        "",
        key === "nairobi"
          ? `Direct itinerary: ${abs("/safari/half-day-nairobi-tour.md")}`
          : `More detail: ${abs(`/safaris/${key}.md`)}`,
        "",
        table(SAFARI_HEAD, safariRows(allPackages[key], ctx)),
        "",
      ]);

  return [
    header({
      title,
      purpose: "Every safari in this collection with its length, per-person price for low and high season, and the places it visits.",
      path,
      date: ctx.lastmodForRoute(path),
    }),
    ...(guide ? [`## ${guide.heading}`, "", guide.paragraphs.join("\n\n"), ""] : []),
    "## Packages",
    "",
    `Prices are per person in US dollars when two or more travellers share a room. ${SEASONS.low.label}: ${SEASONS.low.dates}. ${SEASONS.high.label}: ${SEASONS.high.dates}.`,
    "",
    ...sections,
    "",
    "## Questions and answers",
    "",
    faqBlock(seo.hubFaqs(country)),
    footer(ctx),
  ].join("\n");
}

/* ---------- destinations ---------- */

function destinationDoc(dest, ctx) {
  const safaris = ctx.seo.safarisForDestination(dest);
  const faqs = ctx.seo.destinationFaqs(dest, safaris);
  const editorial = ctx.DESTINATION_CONTENT?.[dest.slug];
  return [
    header({
      title: `${dest.name}, ${dest.country}`,
      purpose: `${dest.tagline}. What to expect, seasons, road distances and the safaris that go there.`,
      path: `/destinations/${dest.slug}`,
      date: ctx.lastmodForRoute(`/destinations/${dest.slug}`),
    }),
    "## About",
    "",
    dest.description,
    "",
    ...(editorial?.overviewParagraphs?.length ? [editorial.overviewParagraphs.join("\n\n"), ""] : []),
    `- Country: ${dest.country}`,
    `- Best time to visit: ${dest.bestTime}`,
    "",
    ...(editorial
      ? [
          "## Seasons, Route Fit & Typical Day",
          "",
          `### When to visit\n\n${editorial.bestTimeDetail}`,
          "",
          `### Distances & route fit\n\n${editorial.routeFit}`,
          "",
          `### Typical day\n\n${editorial.typicalDay}`,
          "",
        ]
      : []),
    "## Highlights",
    "",
    bullets(dest.highlights),
    "",
    `## Safaris that visit ${dest.name}`,
    "",
    safaris.length
      ? table(SAFARI_HEAD, safariRows(safaris, ctx))
      : `No scheduled itinerary visits ${dest.name}. A private custom 4x4 safari from Nairobi can be quoted within 24 hours.`,
    "",
    "## Questions and answers",
    "",
    faqBlock(faqs),
    footer(ctx),
  ].join("\n");
}

function destinationsDoc(ctx) {
  return [
    header({
      title: "Safari destinations in Kenya and Tanzania",
      purpose: "The 12 parks and reserves on our routes, with best time to visit and links to full field guides.",
      path: "/destinations",
      date: ctx.lastmodForRoute("/destinations"),
    }),
    table(
      ["Destination", "Country", "Best time to visit", "Safaris"],
      ctx.destinations.map((d) => [
        `[${d.name}](${abs(`/destinations/${d.slug}.md`)})`,
        d.country,
        d.bestTime,
        String(ctx.seo.safarisForDestination(d).length || "Custom"),
      ]),
    ),
    "",
    "## Questions and answers",
    "",
    faqBlock(ctx.seo.destinationsHubFaqs()),
    footer(ctx),
  ].join("\n");
}

/* ---------- home & company / country prose docs ---------- */

function homeDoc(ctx) {
  const { seo, safariPackages, company } = ctx;
  return [
    header({
      title: "Cima Brava Adventures Safaris: Kenya and Tanzania budget safaris from Nairobi",
      purpose: "Who Cima Brava Adventures Safaris (Cima Brava Safaris) is, what every safari price includes, and where to find each package, price and park guide.",
      path: "/",
      date: ctx.lastmodForRoute("/"),
    }),
    "Cima Brava Adventures Safaris — also known as Cima Brava, Cima Brava Safaris, Cima Brava Adventures, and Cima Brava Adventure Safaris — is a City Market, Nairobi-based safari operator running shared and private 4x4 safaris across Kenya and Tanzania. Published per-person rates cover park fees, accommodation, meals and transfers on multi-day safaris.",
    "",
    "## What every multi-day safari price includes",
    "",
    bullets(company.INCLUDED),
    "",
    "## Not included",
    "",
    bullets(company.NOT_INCLUDED),
    "",
    "## All safaris",
    "",
    table(SAFARI_HEAD, safariRows(safariPackages, ctx)),
    "",
    "## Questions and answers",
    "",
    faqBlock(seo.generalFaqs()),
    "",
    "## More",
    "",
    bullets([
      `[Destinations](${abs("/destinations.md")})`,
      `[Kenya safari guide](${abs("/kenya.md")})`,
      `[Tanzania safari guide](${abs("/tanzania.md")})`,
      `[Company profile and rate card](${abs("/company-profile.md")})`,
      `[About us](${abs("/about.md")})`,
      `[Contact](${abs("/contact.md")})`,
      `[Full LLM corpus](${abs("/llms-full.txt")})`,
    ]),
    footer(ctx),
  ].join("\n");
}

function countryGuideDoc(country, ctx) {
  const isKenya = country === "kenya";
  const path = `/${country}`;
  const packages = ctx.allPackages[country];
  const parks = ctx.destinations.filter((d) => d.country === (isKenya ? "Kenya" : "Tanzania"));
  return [
    header({
      title: isKenya
        ? "Kenya Safari Guide: Parks, Seasons & Budget Trips"
        : "Tanzania Safari Guide: Serengeti, Ngorongoro & Budget Trips",
      purpose: isKenya
        ? "Overland 4x4 safari planning from Nairobi across Masai Mara, Amboseli, Lake Nakuru, Naivasha, Tsavo and Ol Pejeta."
        : "Northern Circuit 4x4 safari planning from Arusha across Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara.",
      path,
      date: ctx.lastmodForRoute(path),
    }),
    isKenya
      ? "Nairobi sits at the hub of Kenya's park network: Nairobi National Park is 20 minutes from CBD, Lake Naivasha and Hell's Gate are 2 hours north-west, Lake Nakuru is 3 hours away, Amboseli is 4 hours south-east, and the Masai Mara is 5 to 6 hours west via Narok."
      : "Northern Tanzania's circuit out of Arusha connects Tarangire and Lake Manyara (~2 hours west) with the Ngorongoro Crater rim (~3.5 hours) and central Serengeti Seronera plains (~6–7 hours), or combines with Kenya overland at the Namanga border.",
    "",
    "## Park guides",
    "",
    bullets(parks.map((p) => `[${p.name}](${abs(`/destinations/${p.slug}.md`)}): ${p.tagline}`)),
    "",
    "## Published packages",
    "",
    table(SAFARI_HEAD, safariRows(packages, ctx)),
    "",
    "## Questions and answers",
    "",
    faqBlock(ctx.seo.countryFaqs(country)),
    footer(ctx),
  ].join("\n");
}

function aboutDoc(ctx) {
  return [
    header({
      title: "About Cima Brava Adventures — Nairobi Safari Operator",
      purpose: "City Market, Nairobi operator running shared (max 7 guests per 4x4) and private safaris across Kenya and Tanzania.",
      path: "/about",
      date: ctx.lastmodForRoute("/about"),
    }),
    "Cima Brava Adventures operates directly from City Market in central Nairobi without overseas booking brokers. Every multi-day itinerary displays exact low-season (Jan 1 – Jun 30) and high-season (Jul 1 – Dec 31) US dollar rates with statutory park fees, full-board meals, accommodation, and transfers included.",
    "",
    "## Operating principles",
    "",
    bullets([
      "Published USD pricing for both 2+ sharing and single rooms",
      "Custom pop-up roof 4x4 Land Cruisers capped at 7 guests (guaranteed window seats)",
      "Licensed English-speaking Kenyan and Tanzanian driver-guides",
      "Free cancellation up to 30 days before departure",
    ]),
    footer(ctx),
  ].join("\n");
}

function contactDoc(ctx) {
  const { seo, company } = ctx;
  return [
    header({
      title: "Contact Cima Brava Adventures — City Market, Nairobi",
      purpose: "Direct WhatsApp, email, City Market Nairobi office details, pickup zones, and booking FAQs.",
      path: "/contact",
      date: ctx.lastmodForRoute("/contact"),
    }),
    bullets([
      "Operations base: City Market, Muindi Mbingu Street, Nairobi, Kenya",
      `Phone & WhatsApp: ${company.PHONE_DISPLAY} (https://wa.me/${ctx.WHATSAPP_NUMBER})`,
      `Email: ${ctx.CONTACT_EMAIL}`,
      "Pickup coverage: Nairobi CBD, City Market, Westlands, Kilimani, Karen, Lang'ata, Wilson Airport, JKIA, and Arusha hotels",
      "Quote turnaround: Within 24 hours",
    ]),
    "",
    "## Questions and answers",
    "",
    faqBlock(seo.contactFaqs()),
    footer(ctx),
  ].join("\n");
}

/* ---------- company profile ---------- */

export function refreshCompanyProfile(source, ctx) {
  const { seo, allPackages, safariPackages } = ctx;
  const { usd, durationLabel } = seo;
  const groups = [
    ["kenya", "Kenya", "Kenya — shared 4x4, daily departures from Nairobi"],
    ["combined", "Kenya & Tanzania", "Kenya & Tanzania — both countries in one trip"],
    ["tanzania", "Tanzania", "Tanzania — northern circuit"],
    ["nairobi", "Nairobi", "Nairobi — short outings"],
  ];
  const single = (p, s) => (p.singlePrice ? usd(p.singlePrice[s]) : "on request");
  const place = (d) => String(d.destination || "").split(". ")[0];
  const activity = (d) => {
    const t = String(d.title || "");
    const i = t.indexOf(":");
    return (i >= 0 ? t.slice(i + 1) : t).trim();
  };
  const stay = (d) => (d.accommodation ? String(d.accommodation).split(" (")[0].trim() : "Trip ends");
  const meals = (d) => (String(d.meals || "").length < 40 ? d.meals : "Not included");

  let rates = "";
  for (const [key, , long] of groups) {
    rates += `### ${long}\n\n| Safari | Length | Low season | Low, single | High season | High, single |\n| :--- | :--- | ---: | ---: | ---: | ---: |\n`;
    for (const p of allPackages[key])
      rates += `| ${p.title} | ${durationLabel(p.days)} | **${usd(p.price.low)}** | ${single(p, "low")} | **${usd(p.price.high)}** | ${single(p, "high")} |\n`;
    rates += "\n";
  }

  let days = "";
  for (const [key, short] of groups) {
    days += `### ${short}\n\n`;
    for (const p of allPackages[key]) {
      days += `**${p.title}** · ${durationLabel(p.days)} · from ${usd(p.price.low)}\n\n| Day | Where | What | Meals | Overnight |\n| :--- | :--- | :--- | :--- | :--- |\n`;
      for (const d of p.itinerary)
        days += `| ${d.day} | ${place(d)} | ${activity(d)} | ${meals(d)} | ${stay(d)} |\n`;
      days += "\n";
    }
  }

  let md = source.replace(/\r\n/g, "\n");
  const between = (startMarker, endMarker, body) => {
    const a = md.indexOf(startMarker);
    const b = md.indexOf(endMarker);
    if (a < 0 || b < 0 || b < a) throw new Error(`COMPANY_PROFILE.md: markers not found (${startMarker})`);
    md = md.slice(0, a) + body + md.slice(b);
  };
  between("### Kenya — shared 4x4", "**Different dates, parks or group size?**", rates);
  between("### Kenya\n\n**", "---\n\n## 05 · Where you stay", days);

  const minPrice = Math.min(...safariPackages.map((p) => p.price.low));
  md = md.replace(/\| \*\*\$[\d,]+\*\* \| Lowest price per person \|/, () => `| **${usd(minPrice)}** | Lowest price per person |`);
  md = md.replace(/\| \*\*\d+\*\* \| Published itineraries \|/, () => `| **${safariPackages.length}** | Published itineraries |`);
  return md;
}

/* ---------- the corpus ---------- */

export function buildDocuments(pages, metaByPath, ctx) {
  const safaris = new Map(ctx.safariPackages.map((s) => [`/safari/${s.slug}`, s]));
  const dests = new Map(ctx.destinations.map((d) => [`/destinations/${d.slug}`, d]));
  const docs = [];

  for (const page of pages) {
    const path = markdownPath(page);
    if (!path) continue;
    const head = metaByPath.get(page.path);
    let body;
    if (page.path === "/") body = homeDoc(ctx);
    else if (page.path === "/safaris") body = hubDoc(null, ctx);
    else if (page.path.startsWith("/safaris/")) body = hubDoc(page.path.split("/")[2], ctx);
    else if (safaris.has(page.path)) body = safariDoc(safaris.get(page.path), ctx);
    else if (page.path === "/destinations") body = destinationsDoc(ctx);
    else if (dests.has(page.path)) body = destinationDoc(dests.get(page.path), ctx);
    else if (page.path === "/kenya") body = countryGuideDoc("kenya", ctx);
    else if (page.path === "/tanzania") body = countryGuideDoc("tanzania", ctx);
    else if (page.path === "/about") body = aboutDoc(ctx);
    else if (page.path === "/contact") body = contactDoc(ctx);
    else if (page.path === "/company-profile") body = ctx.companyProfile;
    else continue;

    docs.push({
      path,
      page,
      body: body.replace(/\n{3,}/g, "\n\n").trimEnd() + "\n",
      title: cleanTitle(head.title),
      purpose: head.description,
    });
  }
  return docs;
}

export function sitemapMarkdown(pages, docs, ctx) {
  const byPage = new Map(docs.map((d) => [d.page.path, d]));
  const topics = [...new Set(pages.map((p) => p.topic))];
  const out = [
    "# Content map",
    "",
    "> Every public page on cimabravasafaris.co.ke, grouped by topic, with its Markdown version and what it answers.",
    "",
    `- Site: ${SITE_URL}/`,
    "- Language: English",
    `- Last generated: ${ctx.date}`,
    `- Guide for LLM readers: ${abs("/llms.txt")}`,
    `- Full single-file LLM corpus: ${abs("/llms-full.txt")}`,
    "",
  ];
  for (const topic of topics) {
    out.push(`## ${topic}`, "");
    out.push(
      table(
        ["Page", "Web page", "Markdown version", "What it answers"],
        pages
          .filter((p) => p.topic === topic)
          .map((p) => {
            const doc = byPage.get(p.path);
            const head = ctx.metaByPath.get(p.path);
            return [
              cleanTitle(head.title),
              abs(p.path),
              doc ? abs(doc.path) : p.path === "/gallery" ? "none (photo gallery)" : "none (HTML directory)",
              head.description,
            ];
          }),
      ),
      "",
    );
  }
  return out.join("\n");
}

export function llmsTxt(pages, docs, ctx) {
  const { seo, safariPackages } = ctx;
  const doc = (path) => docs.find((d) => d.page.path === path);
  const link = (d, note) => `- [${d.title}](${abs(d.path)}): ${note}`;
  const safariLine = (s) => {
    const { low, high } = s.price;
    const price = low === high ? `${seo.usd(low)} per person` : `${seo.usd(low)} to ${seo.usd(high)} per person by season`;
    return link(doc(`/safari/${s.slug}`), `${seo.durationLabel(s.days)}, ${price}. Itinerary, inclusions, stays and booking.`);
  };

  return [
    "# Cima Brava Adventures Safaris",
    "",
    "> Cima Brava Adventures Safaris (also known as Cima Brava, Cima Brava Safaris, Cima Brava Adventures, and Cima Brava Adventure Safaris) is a City Market, Nairobi safari operator running shared and private 4x4 safaris across Kenya and Tanzania. Published per-person prices are in US dollars and cover park fees, accommodation, meals and transfers on multi-day safaris.",
    "",
    "If you are an LLM looking for site information, use the content map to locate the relevant topic and its linked Markdown answer, or fetch /llms-full.txt for the entire rate card, itineraries and park guides in a single file.",
    "",
    `Prices change by season: low season is ${ctx.SEASONS.low.dates} and high season is ${ctx.SEASONS.high.dates}.`,
    "",
    "## Start here",
    "",
    `- [Full LLM corpus](${abs("/llms-full.txt")}): complete rate card, every day-by-day itinerary, park guides, FAQs and terms in one file`,
    `- [Content map](${abs("/sitemap.md")}): every public page with its Markdown version and what it answers`,
    link(doc("/safaris"), "all packages in one table with low and high season prices"),
    link(doc("/"), "who we are and what every safari price includes"),
    "",
    "## Safari packages",
    "",
    ...["/safaris/kenya", "/safaris/tanzania", "/safaris/combined"].map((p) =>
      link(doc(p), "packages and prices in this collection"),
    ),
    ...safariPackages.map(safariLine),
    "",
    "## Destinations",
    "",
    link(doc("/destinations"), "all parks and reserves with best time to visit"),
    ...ctx.destinations.map((d) =>
      link(doc(`/destinations/${d.slug}`), `${d.country}. What to expect, best time to visit and the safaris that go there.`),
    ),
    link(doc("/kenya"), "Kenya country guide, seasons, parks and packages"),
    link(doc("/tanzania"), "Tanzania country guide, seasons, parks and packages"),
    "",
    "## Company",
    "",
    link(doc("/company-profile"), "full rate card, every itinerary day by day, inclusions, terms and how to book"),
    link(doc("/about"), "who runs the safaris"),
    link(doc("/contact"), "City Market office, WhatsApp, email and how to request a quote"),
    "",
    "## Optional",
    "",
    `- [HTML sitemap](${abs("/sitemap")}): human-readable directory of all pages`,
    `- [Photo gallery](${abs("/gallery")}): photographs only, no Markdown version`,
    `- [Company profile PDF](${abs("/Cima_Brava_Adventures_Company_Profile.pdf")}): the printable rate card and itineraries`,
    "",
  ].join("\n");
}

export function llmsFullTxt(docs, ctx) {
  const sections = [
    "# Cima Brava Adventures — Full Knowledge Base",
    "",
    `> Complete 2026–2027 rate card, all ${ctx.safariPackages.length} safari itineraries, all ${ctx.destinations.length} Kenya & Tanzania destination guides, inclusions, terms and FAQs.`,
    "",
    `- Site: ${SITE_URL}/`,
    `- Index: ${abs("/llms.txt")}`,
    `- Content map: ${abs("/sitemap.md")}`,
    `- Last generated: ${ctx.date}`,
    "",
  ];
  for (const doc of docs) {
    sections.push("---", "", doc.body.trimEnd(), "");
  }
  return sections.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}
