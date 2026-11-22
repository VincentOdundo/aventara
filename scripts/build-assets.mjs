// One-off asset builder: `npm run assets`. Outputs are committed, so a normal
// `npm run build` never needs to run it.
//
//   1. src/assets/crops/*.jpg: landscape crops cut from portrait photos so the
//      whole subject sits in frame (the browser's centre crop would otherwise
//      cut heads off), plus two clean-ups: a stock-photo watermark and a
//      screenshot bar that were baked into the originals.
//   2. public/favicon*.png, favicon.ico, apple-touch-icon.png: every icon size
//      Google and browsers ask for, generated from public/favicon.png.
//
// Crop rectangles are in source-image pixels: [left, top, width, height].
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const A = "src/assets";
const OUT = `${A}/crops`;
fs.mkdirSync(OUT, { recursive: true });

const CROPS = [
  // The sleeping-leopard photo carries a stock watermark in its bottom-left.
  { out: "leopard-tree", src: "cheater.jpeg", rect: [0, 0, 1440, 790], width: 1440 },
  // 3:2 landscape windows cut from tall phone photos.
  { out: "nairobi-giraffes", src: "nairobi/girafe-nairobi-city.jpeg", rect: [0, 425, 720, 480], width: 1200 },
  // Keeps the right-hand giraffe, its head and the sun in a 3:2 window; the left giraffe head is outside the original frame.
  { out: "giraffe-sunset", src: "nairobi/girfe-sunset.jpeg", rect: [110, 440, 610, 407], width: 1200 },
  { out: "van-sunrise", src: "safari-van-sunrise.jpeg", rect: [0, 560, 720, 480], width: 1200 },
  { out: "elephant-trunk-up", src: "elefabt-happy.jpeg", rect: [0, 150, 720, 480], width: 1200 },
  { out: "leopard-rock", src: "treecheta.jpeg", rect: [0, 125, 731, 487], width: 1200 },
  { out: "lioness-resting", src: "lion-lonely.jpeg", rect: [0, 410, 720, 540], width: 1200 },
  { out: "egret-shore", src: "egret-water.jpeg", rect: [0, 150, 720, 480], width: 1200 },
  { out: "francolin", src: "nairobi/bird-exotic.jpeg", rect: [0, 290, 720, 480], width: 1200 },
  // The rhino photo has a grey screenshot bar across the top 36px.
  { out: "rhinos-sanctuary", src: "rhino_plain.jpeg", rect: [0, 440, 1104, 736], width: 1200 },
  // Unique descriptive 3:2 landscape hero crops for individual safari & destination pages.
  { out: "masai-mara-male-lion", src: "lion.jpeg", rect: [0, 150, 1200, 800], width: 1200 },
  { out: "serengeti-lioness-portrait", src: "lioness.jpeg", rect: [0, 350, 979, 652], width: 1200 },
  { out: "ngorongoro-lioness-yawning", src: "lioness_open.jpeg", rect: [0, 320, 975, 650], width: 1200 },
  { out: "amboseli-bull-elephant", src: "elephant.jpeg", rect: [0, 260, 1258, 838], width: 1200 },
  { out: "tsavo-red-elephant-tusks", src: "elefant-tusk.jpeg", rect: [0, 60, 720, 480], width: 1200 },
  { out: "amboseli-elephant-marsh", src: "elefant-vegetation.jpeg", rect: [0, 320, 720, 480], width: 1200 },
  { out: "tarangire-elephant-tusks", src: "elefant.jpeg", rect: [0, 140, 720, 480], width: 1200 },
  { out: "rift-valley-pink-flamingo", src: "flamingo-water.jpeg", rect: [0, 560, 720, 480], width: 1200 },
  { out: "serengeti-leopard-track", src: "leapard-car.jpeg", rect: [0, 360, 720, 480], width: 1200 },
  { out: "masai-mara-leopard-walk", src: "cheater-safari.jpeg", rect: [0, 540, 720, 480], width: 1200 },
  { out: "nairobi-giraffe-sunset", src: "nairobi/giraffe-sunsut.jpeg", rect: [0, 450, 720, 480], width: 1200 },
  { out: "masai-mara-lion-cruiser", src: "nairobi/lion-safari-van.jpeg", rect: [0, 480, 720, 480], width: 1200 },
];

for (const { out, src, rect, width } of CROPS) {
  const [left, top, w, h] = rect;
  const meta = await sharp(`${A}/${src}`).metadata();
  if (left + w > meta.width || top + h > meta.height) {
    throw new Error(`${out}: crop ${rect} falls outside ${src} (${meta.width}x${meta.height})`);
  }
  await sharp(`${A}/${src}`)
    .extract({ left, top, width: w, height: h })
    .resize({ width: Math.max(width, w), kernel: "lanczos3" })
    .sharpen({ sigma: 0.6 })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`${OUT}/${out}.jpg`);
  console.log("crop", out);
}

/* ---------- favicons ---------- */

const icon = (size) =>
  sharp("public/favicon.png").resize(size, size, { kernel: "lanczos3" }).png({ compressionLevel: 9 });

// Google asks for a multiple of 48px; browsers pick the nearest declared size.
await icon(48).toFile("public/favicon-48x48.png");
await icon(96).toFile("public/favicon-96x96.png");
await sharp("public/favicon.png")
  .resize(180, 180)
  .flatten({ background: "#2A1500" })
  .png()
  .toFile("public/apple-touch-icon.png");

// favicon.ico: an ICO container holding 16, 32 and 48px PNGs.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((s) => icon(s).toBuffer()));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const entries = images.map((buf, i) => {
  const e = Buffer.alloc(16);
  e[0] = sizes[i];
  e[1] = sizes[i];
  e.writeUInt16LE(1, 4); // colour planes
  e.writeUInt16LE(32, 6); // bits per pixel
  e.writeUInt32LE(buf.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += buf.length;
  return e;
});
fs.writeFileSync("public/favicon.ico", Buffer.concat([header, ...entries, ...images]));

fs.writeFileSync(
  "public/site.webmanifest",
  JSON.stringify(
    {
      name: "Cima Brava Adventures",
      short_name: "Cima Brava",
      description: "Kenya and Tanzania budget safaris from Nairobi",
      start_url: "/",
      display: "browser",
      theme_color: "#2A1500",
      background_color: "#2A1500",
      icons: [
        { src: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
        { src: "/favicon.png", sizes: "192x192", type: "image/png", purpose: "any" },
      ],
    },
    null,
    2,
  ) + "\n",
);
console.log("favicons + manifest written");

/* ---------- partner logos for the footer ---------- */
// Trims the empty canvas around each supplied logo and sizes it for a ~60px-high slot.
fs.mkdirSync(`${A}/partners`, { recursive: true });
const PARTNERS = [
  { out: "magical-kenya", src: "Magical_Kenya_Logo_Wikimania_Nairobi_partner.jpeg", trim: { background: "#ffffff", threshold: 20 } },
  { out: "tanzania-unforgettable", src: "tanzania-unforgattable.png", trim: { threshold: 10 } },
];
for (const { out, src, trim } of PARTNERS) {
  await sharp(`${A}/${src}`)
    .trim(trim)
    .resize({ height: 240, withoutEnlargement: true })
    .png({ compressionLevel: 9 })
    .toFile(`${A}/partners/${out}.png`);
  console.log("partner logo", out);
}
