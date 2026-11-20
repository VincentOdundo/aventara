// Builds one 1200x630 share card (og:image / twitter:image) per page.
//
// Layout: a solid text panel on the left and the page's own photograph on the
// right, in a near-square window cut around that photo's registered focal point
// (src/data/photos.js). The text never sits on top of the animal, and the window
// keeps the full height of the photo, so heads, trunks and horns are not cropped.
// The card never carries a price: prices live in src/data/packages and a number
// baked into an image would go stale at the next rate update.
//
// Text is rendered with the bundled fonts in scripts/fonts, so the output is the
// same on every machine. If text rendering fails (for example a build host with
// a broken fontconfig) the card is still written, photo only.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

const PAD = 64;
const PHOTO_X = 500; // photo window: x 500..1200 (700 x 630)
const PHOTO_W = OG_WIDTH - PHOTO_X;
const FADE_W = 120; // soft edge between panel and photo
const TEXT_W = PHOTO_X + 40 - PAD; // text may run slightly under the fade
const PANEL = "#120A03";
const FONT_TITLE = path.resolve("scripts/fonts/Cinzel-Bold.ttf");
const FONT_BODY = path.resolve("scripts/fonts/Inter-SemiBold.ttf");
const CREAM = "#FDF6E3";
const GOLD = "#FFD34D";

const esc = (v) =>
  String(v).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** "72% 75%" -> [0.72, 0.75] */
function parseFocus(focus = "50% 50%") {
  const [x, y] = focus.split(/\s+/).map((v) => Math.min(1, Math.max(0, parseFloat(v) / 100)));
  return [Number.isFinite(x) ? x : 0.5, Number.isFinite(y) ? y : 0.5];
}

/** Scales the photo to cover a w x h window, then cuts the part that keeps `focus` in view. */
async function cropWindow(file, focus, w, h) {
  const meta = await sharp(file).metadata();
  const scale = Math.max(w / meta.width, h / meta.height);
  const sw = Math.max(w, Math.round(meta.width * scale));
  const sh = Math.max(h, Math.round(meta.height * scale));
  const [fx, fy] = parseFocus(focus);
  return sharp(file)
    .resize(sw, sh, { kernel: "lanczos3" })
    .extract({
      left: Math.round((sw - w) * fx),
      top: Math.round((sh - h) * fy),
      width: w,
      height: h,
    })
    .toBuffer();
}

const edge = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${FADE_W}" height="${OG_HEIGHT}">
  <defs>
    <linearGradient id="f" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${PANEL}" stop-opacity="1"/>
      <stop offset="1" stop-color="${PANEL}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#f)"/>
</svg>`);

const goldRule = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="6">
  <rect width="100%" height="100%" fill="#F59E0B"/>
</svg>`);

async function textLayer(markup, font, fontfile, width) {
  return sharp({
    text: { text: markup, font, fontfile, width, rgba: true, wrap: "word", align: "left" },
  })
    .png()
    .toBuffer({ resolveWithObject: true });
}

/** Renders the title at the largest size that still fits the panel. */
async function titleLayer(title) {
  const sizes = title.length <= 20 ? [72, 64, 56] : title.length <= 40 ? [62, 54, 48] : [54, 48, 42, 38];
  let last;
  for (const size of sizes) {
    last = await textLayer(
      `<span foreground="${CREAM}">${esc(title)}</span>`,
      `Cinzel Bold ${size}`,
      FONT_TITLE,
      TEXT_W,
    );
    if (last.info.height <= 330) break;
  }
  return last;
}

async function logoLayer() {
  const size = 60;
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );
  return sharp("public/favicon-96x96.png")
    .resize(size, size)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

/**
 * @param {string} source absolute path of the page photo
 * @param {{ focus?: string, title: string, kicker: string, domain: string, out: string }} card
 */
export async function buildOgCard(source, { focus, title, kicker, domain, out }) {
  const layers = [
    { input: await cropWindow(source, focus, PHOTO_W, OG_HEIGHT), left: PHOTO_X, top: 0 },
    { input: edge, left: PHOTO_X, top: 0 },
  ];
  let withText = true;
  try {
    const k = await textLayer(
      `<span foreground="${GOLD}" letter_spacing="3500">${esc(kicker.toUpperCase())}</span>`,
      "Inter SemiBold 20",
      FONT_BODY,
      TEXT_W,
    );
    const t = await titleLayer(title);
    const brand = await textLayer(
      `<span foreground="${CREAM}" letter_spacing="2500">CIMA BRAVA ADVENTURES</span>`,
      "Cinzel Bold 20",
      FONT_TITLE,
      420,
    );
    const site = await textLayer(
      `<span foreground="${CREAM}" alpha="75%">${esc(domain)}</span>`,
      "Inter SemiBold 20",
      FONT_BODY,
      420,
    );
    const footerY = OG_HEIGHT - PAD - 60 + 8;
    layers.push(
      { input: k.data, left: PAD, top: PAD },
      { input: t.data, left: PAD, top: PAD + k.info.height + 22 },
      { input: await logoLayer(), left: PAD, top: footerY },
      { input: brand.data, left: PAD + 60 + 16, top: footerY + 2 },
      { input: site.data, left: PAD + 60 + 16, top: footerY + 60 - site.info.height - 2 },
    );
  } catch (error) {
    withText = false;
    console.warn(`og: text rendering failed (${error.message}); wrote ${out} without text`);
  }
  layers.push({ input: goldRule, left: 0, top: OG_HEIGHT - 6 });

  fs.mkdirSync(path.dirname(out), { recursive: true });
  await sharp({ create: { width: OG_WIDTH, height: OG_HEIGHT, channels: 3, background: PANEL } })
    .composite(layers)
    .jpeg({ quality: 84, progressive: true, mozjpeg: true })
    .toFile(out);
  return withText;
}
