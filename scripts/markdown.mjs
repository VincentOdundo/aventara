// Builds the Markdown versions of the public pages, /sitemap.md and /llms.txt.
//
// Everything here is generated from the same data modules the HTML pages use
// (handed in from the server bundle), so a price or itinerary change reaches
// the web page, the structured data and the Markdown in the same build.
// These files are a publisher's reading aid for LLM clients. They are not a
// ranking mechanism and nothing guarantees any engine fetches them.
import { JSDOM } from "jsdom";
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

/** Header block every document starts with. */
function header({ title, purpose, path, date }) {
  return [
    `# ${title}`,
    "",
    `> ${purpose}`,
    "",
    `- Canonical page: ${abs(path)}`,
    "- Language: English",
    `- Last generated: ${date}`,
    "- Source: generated from the same data as the web page by Cima Brava Adventures",
    "",
  ].join("\n");
}

const footer = (ctx) =>
  [
    "",
    "## Contact and booking",
    "",
    `- WhatsApp: ${ctx.company.PHONE_DISPLAY} (https://wa.me/${ctx.WHATSAPP_NUMBER})`,
    `- Email: ${ctx.CONTACT_EMAIL}`,
    `- All safari packages and prices: ${abs("/safaris.md")}`,
    `- Content map: ${abs("/sitemap.md")}`,
    "",
  ].join("\n");

const faqBlock = (faqs) =>
  faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n");

/* ---------- one safari ---------- */

function safariDoc(safari, ctx) {
  const { seo } = ctx;
  const { usd, durationLabel } = seo;
  const route = seo.startAndEnd(safari);
  const stays = seo.staysOf(safari);
  const parks = seo.destinationsForSafari(safari);
  const category = seo.CATEGORIES[seo.categoryOf(safari)];
  const single = (s) => (safari.singlePrice ? usd(safari.singlePrice[s]) : "on request");

  const facts = [
    `Length: ${durationLabel(safari.days)}`,
    route && safari.days >= 1 ? `Starts in ${route.start}, ends in ${route.end}` : null,
    `Places visited: ${safari.destinations.join(", ")}`,
    stays.length ? `Overnight stays: ${stays.join(", ")}` : null,
    `Collection: ${category.label} (${abs(category.path + ".md")})`,
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
      purpose: `${safari.subtitle} Price by season, day-by-day itinerary, inclusions and booking details.`,
      path: `/safari/${safari.slug}`,
      date: ctx.date,
    }),
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
  const { seo, allPackages, safariPackages, SEASONS } = ctx;
  const category = seo.CATEGORIES[country];
  const safaris = country ? allPackages[country] : safariPackages;
  const path = country ? `/safaris/${country}` : "/safaris";
  const title = country ? `${category.label}: packages and prices` : "Kenya and Tanzania safari packages and prices";

  const sections = country
    ? [table(SAFARI_HEAD, safariRows(safaris, ctx))]
    : Object.keys(seo.CATEGORIES).flatMap((key) => [
        `### ${seo.CATEGORIES[key].label}`,
        "",
        `More detail: ${abs(`/safaris/${key}.md`)}`,
        "",
        table(SAFARI_HEAD, safariRows(allPackages[key], ctx)),
        "",
      ]);

  return [
    header({
      title,
      purpose: "Every safari in this collection with its length, per-person price for low and high season, and the places it visits. Each row links to the full itinerary.",
      path,
      date: ctx.date,
    }),
    "## Packages",
    "",
    `Prices are per person in US dollars when two or more travellers share a room. ${SEASONS.low.label}: ${SEASONS.low.dates}. ${SEASONS.high.label}: ${SEASONS.high.dates}.`,
    "",
    ...sections,
    "",
    "## Questions and answers",
    "",
    faqBlock(seo.generalFaqs()),
    footer(ctx),
  ].join("\n");
}

/* ---------- destinations ---------- */

function destinationDoc(dest, ctx) {
  const safaris = ctx.seo.safarisForDestination(dest);
  const faqs = ctx.seo.destinationFaqs(dest, safaris);
  return [
    header({
      title: `${dest.name}, ${dest.country}`,
      purpose: `${dest.tagline}. What to expect, the best time to visit and the safaris that go there.`,
      path: `/destinations/${dest.slug}`,
      date: ctx.date,
    }),
    "## About",
    "",
    dest.description,
    "",
    `- Country: ${dest.country}`,
    `- Best time to visit: ${dest.bestTime}`,
    "",
    "## Highlights",
    "",
    bullets(dest.highlights),
    "",
    `## Safaris that visit ${dest.name}`,
    "",
    safaris.length
      ? table(SAFARI_HEAD, safariRows(safaris, ctx))
      : `No published itinerary visits ${dest.name} yet. A private safari can be built on request.`,
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
      purpose: "The parks and reserves on our routes, with the best time to visit each and a link to its guide.",
      path: "/destinations",
      date: ctx.date,
    }),
    table(
      ["Destination", "Country", "Best time to visit", "Safaris"],
      ctx.destinations.map((d) => [
        `[${d.name}](${abs(`/destinations/${d.slug}.md`)})`,
        d.country,
        d.bestTime,
        String(ctx.seo.safarisForDestination(d).length),
      ]),
    ),
    footer(ctx),
  ].join("\n");
}

/* ---------- home ---------- */

function homeDoc(ctx) {
  const { seo, safariPackages, company } = ctx;
  return [
    header({
      title: "Cima Brava Adventures: Kenya and Tanzania budget safaris from Nairobi",
      purpose: "Who Cima Brava Adventures is, what every safari price includes, and where to find each package, price and park guide.",
      path: "/",
      date: ctx.date,
    }),
    "Cima Brava Adventures is a Nairobi-based safari operator. We run shared and private 4x4 safaris across Kenya and Tanzania, and the per-person price we publish already covers park fees, accommodation, meals and transfers.",
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

/* ---------- company profile ---------- */

/**
 * COMPANY_PROFILE.md is hand-written prose around two data tables. The rate
 * card and the day-by-day tables are rebuilt from the package data here, so
 * the document cannot keep an old price. Returns the refreshed document.
 */
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

/* ---------- pages whose text lives in the component, not in data ---------- */

/**
 * Converts a prerendered page's <main> to Markdown: headings, paragraphs,
 * list items and links. Used for the guide and company pages, where the copy
 * is written in JSX. Buttons, forms, icons and images are dropped.
 */
export function htmlToMarkdown(html) {
  const dom = new JSDOM(html);
  const main = dom.window.document.querySelector("main");
  if (!main) return "";
  main.querySelectorAll("script, style, svg, button, form, nav, noscript, img").forEach((n) => n.remove());

  const inline = (node) => {
    let out = "";
    for (const child of node.childNodes) {
      if (child.nodeType === 3) out += child.textContent;
      else if (child.nodeType === 1) {
        const text = inline(child);
        if (child.tagName === "A" && text.trim()) {
          const href = child.getAttribute("href") || "";
          const url = href.startsWith("/") ? abs(href) : href;
          out += /^(https?:|mailto:|tel:)/.test(url) ? `[${text.trim()}](${url})` : text;
        } else if (child.tagName === "BR") out += " ";
        else out += ` ${text} `;
      }
    }
    return out.replace(/\s+/g, " ");
  };

  const BLOCKS = { H1: "# ", H2: "## ", H3: "### ", H4: "#### ", H5: "##### ", P: "", LI: "- " };
  const lines = [];
  const walk = (node) => {
    for (const child of node.childNodes) {
      if (child.nodeType === 3) {
        const text = child.textContent.replace(/\s+/g, " ").trim();
        if (text.length > 1) lines.push(text);
      } else if (child.nodeType === 1) {
        if (child.tagName in BLOCKS) {
          const text = inline(child).trim();
          if (text) lines.push(BLOCKS[child.tagName] + text);
        } else if (child.tagName === "A") {
          const text = inline({ childNodes: [child] }).trim();
          if (text) lines.push(text);
        } else walk(child);
      }
    }
  };
  walk(main);

  // Blank line between blocks, but keep consecutive list items together.
  return lines
    .map((line, i) => (i && !(line.startsWith("- ") && lines[i - 1].startsWith("- ")) ? `\n${line}` : line))
    .join("\n");
}

function proseDoc(page, rendered, ctx) {
  const body = htmlToMarkdown(rendered.html).replace(/^# .*\n?/m, "").trim();
  return [
    header({
      title: cleanTitle(rendered.seo.title),
      purpose: rendered.seo.description,
      path: page.path,
      date: ctx.date,
    }),
    body,
    footer(ctx),
  ].join("\n");
}

/* ---------- the corpus ---------- */

/**
 * Returns [{ path, body, page, title, purpose }] for every page that has a
 * Markdown version. `rendered` maps a page path to its { html, seo }.
 */
export function buildDocuments(pages, rendered, ctx) {
  const safaris = new Map(ctx.safariPackages.map((s) => [`/safari/${s.slug}`, s]));
  const dests = new Map(ctx.destinations.map((d) => [`/destinations/${d.slug}`, d]));
  const docs = [];

  for (const page of pages) {
    const path = markdownPath(page);
    if (!path) continue;
    const head = rendered.get(page.path).seo;
    let body;
    if (page.path === "/") body = homeDoc(ctx);
    else if (page.path === "/safaris") body = hubDoc(null, ctx);
    else if (page.path.startsWith("/safaris/")) body = hubDoc(page.path.split("/")[2], ctx);
    else if (safaris.has(page.path)) body = safariDoc(safaris.get(page.path), ctx);
    else if (page.path === "/destinations") body = destinationsDoc(ctx);
    else if (dests.has(page.path)) body = destinationDoc(dests.get(page.path), ctx);
    else if (page.path === "/company-profile") body = ctx.companyProfile;
    else body = proseDoc(page, rendered.get(page.path), ctx);

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
            const head = ctx.rendered.get(p.path).seo;
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
    "# Cima Brava Adventures",
    "",
    "> Nairobi-based safari operator running shared and private 4x4 safaris across Kenya and Tanzania. Published per-person prices are in US dollars and cover park fees, accommodation, meals and transfers on multi-day safaris.",
    "",
    "If you are an LLM looking for site information, use the content map to locate the relevant topic and its linked Markdown answer, or fetch /llms-full.txt for the entire rate card, itineraries and park guides in a single file. Use that document's cited sources and canonical page; if the requested information is absent, report that gap.",
    "",
    `Prices change by season: low season is ${ctx.SEASONS.low.dates} and high season is ${ctx.SEASONS.high.dates}. These files are regenerated from the live rate card on every site build (last: ${ctx.date}).`,
    "",
    "## Start here",
    "",
    `- [Full LLM corpus](${abs("/llms-full.txt")}): complete rate card, every day-by-day itinerary, park guides, FAQs and terms in one file`,
    `- [Content map](${abs("/sitemap.md")}): every public page with its Markdown version and what it answers`,
    link(doc("/safaris"), "all packages in one table with low and high season prices, plus general booking questions"),
    link(doc("/"), "who we are and what every safari price includes"),
    "",
    "## Safari packages",
    "",
    ...["/safaris/kenya", "/safaris/tanzania", "/safaris/combined", "/safaris/nairobi"].map((p) =>
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
    link(doc("/contact"), "WhatsApp, email and how to request a quote"),
    "",
    "## Optional",
    "",
    `- [HTML sitemap](${abs("/sitemap")}): human-readable directory of all pages`,
    `- [Photo gallery](${abs("/gallery")}): photographs only, no Markdown version`,
    `- [Company profile PDF](${abs("/Cima_Brava_Adventures_Company_Profile.pdf")}): the printable rate card and itineraries`,
    "",
  ].join("\n");
}

/** Single-file Markdown corpus containing every safari, park guide, rate table and FAQ. */
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
