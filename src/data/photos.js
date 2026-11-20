// Single source of truth for every photograph on the site.
//
// Each entry records what the picture actually shows (used as alt text, so it
// must stay literal), the point of the frame that must never be cropped away
// (`focus`, an object-position value) and its shape. <Photo> applies the focus
// automatically, so a wide hero, a square card and a phone screen all keep the
// animal in view. Filenames in src/assets are not reliable ("treecheta" is a
// leopard, "elefpalin" is an elephant): trust this file, not the filename.
//
// Rules for placing a photo:
//   - wide slots (heroes, cards, itinerary thumbnails) take "wide" photos;
//   - portrait or square slots take "tall" photos;
//   - a photo is only used for a place it can honestly stand for (see `places`).
import elephantKiliRightSrc from "../assets/plain_elefabt.jpeg";
import elephantKiliLeftSrc from "../assets/elefpalin.jpeg";
import tuskerKiliSrc from "../assets/elephtain.jpeg";
import lionPackSrc from "../assets/lion pack.jpeg";
import lionVehicleSrc from "../assets/nairobi/lion-safari.jpeg";
import flamingoPairSrc from "../assets/flamingo-lonely.jpeg";
import flamingoFlockSrc from "../assets/flamingo.jpeg";
import rhinosFlamingosSrc from "../assets/rhino.jpeg";
import impalaSrc from "../assets/nairobi/antelppes.jpeg";
import sunsetAcaciaSrc from "../assets/nairobi/sunset-exotic.jpeg";
import kilimanjaroSrc from "../assets/mountain.jpeg";
import wildebeestSrc from "../assets/wildbeasts.jpg";
import cheetahMoundSrc from "../assets/cheater_plain.jpeg";
// Landscape crops cut from portrait originals (scripts/build-assets.mjs).
import leopardTreeSrc from "../assets/crops/leopard-tree.jpg";
import nairobiGiraffesSrc from "../assets/crops/nairobi-giraffes.jpg";
import giraffeSunsetSrc from "../assets/crops/giraffe-sunset.jpg";
import vanSunriseSrc from "../assets/crops/van-sunrise.jpg";
import elephantTrunkUpSrc from "../assets/crops/elephant-trunk-up.jpg";
import leopardRockSrc from "../assets/crops/leopard-rock.jpg";
import lionessRestingSrc from "../assets/crops/lioness-resting.jpg";
import egretShoreSrc from "../assets/crops/egret-shore.jpg";
import francolinSrc from "../assets/crops/francolin.jpg";
import rhinosSanctuarySrc from "../assets/crops/rhinos-sanctuary.jpg";
// Tall originals, for portrait and square slots only.
import leopardRockTallSrc from "../assets/treecheta.jpeg";
import elephantDustSrc from "../assets/elephant.jpeg";
import elephantMudSrc from "../assets/elefabt-happy.jpeg";
import lionMaleSrc from "../assets/lion.jpeg";
import lionessFaceSrc from "../assets/lioness.jpeg";
import lionessYawnSrc from "../assets/lioness_open.jpeg";
import lionessLyingSrc from "../assets/lion-lonely.jpeg";
import rhinosTallSrc from "../assets/rhino_plain.jpeg";
import leopardVanSrc from "../assets/cheater-safari.jpeg";

const wide = (src, alt, focus) => ({ src, alt, focus, shape: "wide" });
const tall = (src, alt, focus) => ({ src, alt, focus, shape: "tall" });

export const PHOTOS = {
  /* ---- wide, high resolution: safe for full-bleed heroes ---- */
  elephantKiliRight: wide(
    elephantKiliRightSrc,
    "A bull elephant with long tusks walks across green grassland below snow-capped Mount Kilimanjaro",
    "72% 75%",
  ),
  elephantKiliLeft: wide(
    elephantKiliLeftSrc,
    "An elephant walks across green plains in front of the snow-covered summit of Mount Kilimanjaro",
    "35% 70%",
  ),
  tuskerKili: wide(
    tuskerKiliSrc,
    "A large tusker elephant faces the camera with Mount Kilimanjaro and white clouds behind it",
    "30% 60%",
  ),
  lionPack: wide(
    lionPackSrc,
    "A male lion rests in lush green grass beside a lioness that is mid-yawn",
    "48% 55%",
  ),
  lionVehicle: wide(
    lionVehicleSrc,
    "A male lion wearing a tracking collar walks past a safari vehicle on a dirt track",
    "62% 50%",
  ),
  leopardTree: wide(
    leopardTreeSrc,
    "A leopard sleeps with its chin resting on a thick tree branch",
    "55% 45%",
  ),
  flamingoPair: wide(
    flamingoPairSrc,
    "Two lesser flamingos feeding in shallow lake water",
    "66% 48%",
  ),
  sunsetAcacia: wide(
    sunsetAcaciaSrc,
    "An acacia tree silhouetted against an orange African sunset",
    "45% 45%",
  ),
  impala: wide(
    impalaSrc,
    "Two male impala lock horns in a cloud of dust",
    "35% 55%",
  ),
  kilimanjaro: wide(
    kilimanjaroSrc,
    "Mount Kilimanjaro, flat-topped and dusted with snow, under a blue sky",
    "50% 55%",
  ),

  /* ---- wide crops made from tall originals ---- */
  nairobiGiraffes: wide(
    nairobiGiraffesSrc,
    "Two giraffes stand among acacia trees with the Nairobi skyline behind them",
    "55% 50%",
  ),
  giraffeSunset: wide(
    giraffeSunsetSrc,
    "A giraffe silhouetted against a setting sun",
    "58% 40%",
  ),
  vanSunrise: wide(
    vanSunriseSrc,
    "A safari vehicle parked on open plains as the sun sets",
    "75% 60%",
  ),
  elephantTrunkUp: wide(
    elephantTrunkUpSrc,
    "An elephant raises its trunk and faces the camera",
    "50% 40%",
  ),
  leopardRock: wide(
    leopardRockSrc,
    "A leopard sits alert on a rock behind green bushes",
    "35% 40%",
  ),
  lionessResting: wide(
    lionessRestingSrc,
    "A lioness rests her head on the grass and looks up at the camera",
    "55% 50%",
  ),
  egretShore: wide(
    egretShoreSrc,
    "A great egret with an orange bill stands at the water's edge",
    "45% 40%",
  ),
  francolin: wide(
    francolinSrc,
    "A yellow-necked spurfowl perches among broad green leaves",
    "55% 40%",
  ),
  rhinosSanctuary: wide(
    rhinosSanctuarySrc,
    "Two white rhinos graze on open grassland with a cattle egret on one's back",
    "35% 55%",
  ),

  /* ---- wide, lower resolution: card and thumbnail sizes only ---- */
  wildebeest: wide(
    wildebeestSrc,
    "A blue wildebeest walks across dry ground with a herd behind it",
    "55% 55%",
  ),
  cheetahMound: wide(
    cheetahMoundSrc,
    "A cheetah surveys the plains from a grassy termite mound",
    "50% 55%",
  ),
  rhinosFlamingos: wide(
    rhinosFlamingosSrc,
    "Two white rhinos graze beside a lake with a line of flamingos behind them",
    "55% 60%",
  ),
  flamingoFlock: wide(
    flamingoFlockSrc,
    "A huge flock of pink flamingos on a lake with three in flight overhead",
    "50% 50%",
  ),

  /* ---- tall originals: portrait or square slots only ---- */
  leopardRockTall: tall(
    leopardRockTallSrc,
    "A leopard sits alert on a rock behind green bushes",
    "40% 30%",
  ),
  elephantDust: tall(
    elephantDustSrc,
    "A grey elephant with dusty skin and ivory tusks beneath a clear blue sky",
    "40% 45%",
  ),
  elephantMud: tall(
    elephantMudSrc,
    "A mud-red elephant raises its trunk on a dirt track",
    "50% 40%",
  ),
  lionMale: tall(
    lionMaleSrc,
    "A male lion with a full mane looks out from tall grass",
    "50% 50%",
  ),
  lionessFace: tall(
    lionessFaceSrc,
    "A lioness looks straight into the camera",
    "50% 40%",
  ),
  lionessYawn: tall(
    lionessYawnSrc,
    "A lioness yawns with her head tilted back",
    "55% 40%",
  ),
  lionessLying: tall(
    lionessLyingSrc,
    "A lioness lies in green grass and gazes at the camera",
    "62% 72%",
  ),
  // The original has a grey screenshot bar across its top 36px: always crop with a
  // bottom-weighted focus (100%) so the bar is pushed out of frame.
  rhinosTall: tall(
    rhinosTallSrc,
    "Two white rhinos graze on open grassland with a cattle egret on one's back",
    "50% 100%",
  ),
  leopardVan: tall(
    leopardVanSrc,
    "A leopard walks along a dirt track toward a safari vehicle full of guests",
    "50% 45%",
  ),
};

/** Meta for any imported photo URL, so <Photo> can find its focus and alt. */
export const PHOTO_META = new Map(
  Object.values(PHOTOS).map((photo) => [photo.src, photo]),
);

export const focusOf = (src) => PHOTO_META.get(src)?.focus;
export const altOf = (src) => PHOTO_META.get(src)?.alt;

/* ------------------------------------------------------------------ */
/* Which photos may stand for which place.                             */
/* Pools are ordered best-first; an itinerary takes one photo per day  */
/* and only starts repeating when a pool runs out.                     */
/* ------------------------------------------------------------------ */
const P = PHOTOS;
export const PLACE_POOLS = {
  mara: [P.lionPack, P.leopardRock, P.vanSunrise, P.wildebeest, P.cheetahMound, P.lionVehicle, P.lionessResting],
  nakuru: [P.rhinosFlamingos, P.flamingoFlock, P.flamingoPair, P.giraffeSunset],
  amboseli: [P.elephantKiliRight, P.tuskerKili, P.elephantKiliLeft, P.kilimanjaro, P.sunsetAcacia],
  naivasha: [P.egretShore, P.giraffeSunset, P.francolin],
  hellsgate: [P.impala, P.sunsetAcacia, P.giraffeSunset],
  serengeti: [P.leopardTree, P.wildebeest, P.cheetahMound, P.lionVehicle, P.lionessResting],
  ngorongoro: [P.lionessResting, P.lionVehicle, P.wildebeest, P.lionPack],
  tarangire: [P.elephantTrunkUp, P.sunsetAcacia],
  manyara: [P.flamingoPair, P.giraffeSunset, P.elephantTrunkUp],
  arusha: [P.kilimanjaro, P.sunsetAcacia],
  nairobi: [P.nairobiGiraffes, P.rhinosSanctuary],
};
