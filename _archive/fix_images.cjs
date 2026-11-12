const fs = require('fs');
const path = require('path');

const packagesMap = {
  'half-day-nairobi.js': 'nairobi/lion-safari-van.jpeg',
  '3day-amboseli.js': 'mountain.jpeg',
  '4day-mara-nakuru.js': 'flamingo.jpeg',
  '3day-mara.js': 'lion pack.jpeg',
  '5day-mara-nakuru-naivasha.js': 'elefabt-happy.jpeg',
  '6day-mara-nakuru-amboseli.js': 'elefant.jpeg',
  '7day-mara-nakuru-naivasha-amboseli.js': 'elephant.jpeg',
  '8day-mara-nakuru-amboseli.js': 'elefpalin.jpeg',
  '3day-serengeti-ngorongoro.js': 'lion-lonely.jpeg',
  '4day-tanzania.js': 'treecheta.jpeg',
  '5day-tanzania.js': 'lioness_open.jpeg',
  '6day-tanzania.js': 'leapard-car.jpeg',
  '11day-kenya-tanzania.js': 'safari-van-sunrise.jpeg',
  '12day-kenya-tanzania.js': 'nairobi/sunset-exotic.jpeg',
  '12day-kenya-tanzania-serengeti.js': 'nairobi/giraffe-sunsut.jpeg'
};

const destMap = {
  'masai-mara': 'cheater-safari.jpeg',
  'lake-nakuru': 'flamingo-water.jpeg',
  'hells-gate': 'nairobi/antelppes.jpeg',
  'lake-naivasha': 'egret-water.jpeg',
  'amboseli': 'elefant-vegetation.jpeg',
  'tsavo': 'elefant-tusk.jpeg',
  'ol-pejeta': 'rhino_plain.jpeg',
  'serengeti': 'cheater_plain.jpeg',
  'ngorongoro': 'rhino.jpeg',
  'tarangire': 'lioness.jpeg',
  'lake-manyara': 'flamingo-lonely.jpeg',
  'nairobi-np': 'nairobi/girafe-nairobi-city.jpeg'
};

function processPackage(filePath, imgName) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;

  newContent = newContent.replace(/import\s+[\w]+\s+from\s+['"].*?['"];?\n/g, '');
  
  let depth = filePath.includes('combined') || filePath.includes('kenya') || filePath.includes('nairobi') || filePath.includes('tanzania') ? '../../../' : '../../';
  newContent = `import heroImg from "${depth}assets/${imgName}";\n\n` + newContent;

  newContent = newContent.replace(/gallery:\s*\[[^\]]*\],?/g, '');
  newContent = newContent.replace(/\[\s*genImg_\w+,\s*genImg_\w+\s*\]/g, '[]');

  newContent = newContent.replace(/image:\s*genImg_\d+,/g, 'image: heroImg,');
  newContent = newContent.replace(/image:\s*heroImg,\s*/, 'PLACEHOLDER_COVER_IMAGE');
  newContent = newContent.replace(/image:\s*genImg_\d+,/g, ''); 
  newContent = newContent.replace(/PLACEHOLDER_COVER_IMAGE/, 'image: heroImg,\n  ');

  fs.writeFileSync(filePath, newContent);
  console.log('Fixed', filePath);
}

function walkPackages(dir) {
  const files = fs.readdirSync(dir);
  for (let f of files) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) {
      walkPackages(p);
    } else if (f.endsWith('.js') && f !== 'index.js') {
      if (packagesMap[f]) {
        processPackage(p, packagesMap[f]);
      } else {
        console.log("NOT FOUND IN MAP: ", f);
      }
    }
  }
}

walkPackages(path.join(__dirname, 'src', 'data', 'packages'));

let destPath = path.join(__dirname, 'src', 'data', 'destinations.js');
let dContent = fs.readFileSync(destPath, 'utf8');
dContent = dContent.replace(/import\s+[\w]+\s+from\s+['"].*?['"];?\n/g, '');

let imports = '';
Object.entries(destMap).forEach(([id, imgPath], idx) => {
  imports += `import destImg${idx} from "../assets/${imgPath}";\n`;
});

const oldVars = [
  'cheetahSafari', 'flamingoWater', 'hellsGateImage', 'egretWater',
  'elephantGrass', 'elephantTusks', 'rhinoClose', 'cheetahPlain',
  'rhinoPair', 'lionessPortrait', 'flamingoSolo', 'nairobiGiraffeCity'
];

oldVars.forEach(v => {
  dContent = dContent.replace(new RegExp(`image:\\s*${v},`), "image: 'toBeReplaced',");
});

Object.entries(destMap).forEach(([id, imgPath], idx) => {
  dContent = dContent.replace("image: 'toBeReplaced',", `image: destImg${idx},`);
});

dContent = dContent.replace(/gallery:\s*\[[^\]]*\],?/g, '');
dContent = imports + "\n// Destinations data\n" + dContent.substring(dContent.indexOf('export const destinations'));

fs.writeFileSync(destPath, dContent);
console.log('Fixed destinations.js');
