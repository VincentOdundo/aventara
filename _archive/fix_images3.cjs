const fs = require("fs");
const path = require("path");

const packagesMap = {
  "half-day-nairobi.js": "nairobi/lion-safari-van.jpeg",
  "3day-amboseli.js": "mountain.jpeg",
  "4day-mara-nakuru.js": "flamingo.jpeg",
  "3day-mara.js": "lion pack.jpeg",
  "5day-mara-nakuru-naivasha.js": "elefabt-happy.jpeg",
  "6day-mara-nakuru-amboseli.js": "elefant.jpeg",
  "7day-mara-nakuru-naivasha-amboseli.js": "elephant.jpeg",
  "8day-mara-nakuru-amboseli.js": "elefpalin.jpeg",
  "3day-serengeti-ngorongoro.js": "lion-lonely.jpeg",
  "4day-tanzania.js": "treecheta.jpeg",
  "5day-tanzania.js": "lioness_open.jpeg",
  "6day-tanzania.js": "leapard-car.jpeg",
  "11day-kenya-tanzania.js": "safari-van-sunrise.jpeg",
  "12day-kenya-tanzania.js": "nairobi/sunset-exotic.jpeg",
  "12day-kenya-tanzania-serengeti.js": "nairobi/giraffe-sunsut.jpeg",
};

const destMap = {
  "masai-mara": "cheater-safari.jpeg",
  "lake-nakuru": "flamingo-water.jpeg",
  "hells-gate": "nairobi/antelppes.jpeg",
  "lake-naivasha": "egret-water.jpeg",
  amboseli: "elefant-vegetation.jpeg",
  tsavo: "elefant-tusk.jpeg",
  "ol-pejeta": "rhino_plain.jpeg",
  serengeti: "cheater_plain.jpeg",
  ngorongoro: "rhino.jpeg",
  tarangire: "lioness.jpeg",
  "lake-manyara": "flamingo-lonely.jpeg",
  "nairobi-np": "nairobi/girafe-nairobi-city.jpeg",
};

function processPackage(filePath, imgName) {
  let content = fs.readFileSync(filePath, "utf8");

  // Strip all imports aggressively
  content = content.replace(
    /^import\s+[\w]+\s+from\s+["'].*?assets.*?["'];+.*?$/gm,
    "",
  );

  // Add new import
  let depth =
    filePath.includes("combined") ||
    filePath.includes("kenya") ||
    filePath.includes("nairobi") ||
    filePath.includes("tanzania")
      ? "../../../"
      : "../../";
  content = `import heroImg from "${depth}assets/${imgName}";\n` + content;

  // Cleanup line breaks
  content = content.replace(/\n\s*\n\s*\n/g, "\n\n");

  fs.writeFileSync(filePath, content);
  console.log("Fixed imports in", filePath);
}

function walkPackages(dir) {
  const files = fs.readdirSync(dir);
  for (let f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walkPackages(p);
    } else if (f.endsWith(".js") && f !== "index.js") {
      if (packagesMap[f]) {
        processPackage(p, packagesMap[f]);
      }
    }
  }
}

// 1. Fix Packages
walkPackages(path.join(__dirname, "src", "data", "packages"));

// 2. Fix Destinations
let destPath = path.join(__dirname, "src", "data", "destinations.js");
let dContent = fs.readFileSync(destPath, "utf8");
dContent = dContent.replace(
  /^import\s+[\w]+\s+from\s+["'].*?assets.*?["'];+.*?$/gm,
  "",
);

let imports = "";
Object.entries(destMap).forEach(([id, imgPath], idx) => {
  imports += `import destImg${idx} from "../assets/${imgPath}";\n`;
});

dContent = imports + "\n" + dContent.trim();
fs.writeFileSync(destPath, dContent);
console.log("Fixed destinations.js");
