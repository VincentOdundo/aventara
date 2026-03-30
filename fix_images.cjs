const fs = require('fs');
const path = require('path');

const walk = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        results.push(filePath);
      }
    }
  });
  return results;
};

const files = walk('./src');

const pools = {
  amboseli: ['elephant.jpeg', 'elefant-tusk.jpeg', 'elefabt-happy.jpeg', 'plain_elefabt.jpeg', 'elefant-vegetation.jpeg'],
  nakuru: ['flamingo-water.jpeg', 'flamingo.jpeg', 'rhino_plain.jpeg', 'rhino.jpeg'],
  mara: ['lion.jpeg', 'lion pack.jpeg', 'wildbeasts.jpg', 'cheater-safari.jpeg', 'treecheta.jpeg', 'leapard-car.jpeg', 'lioness_open.jpeg'],
  serengeti: ['lion.jpeg', 'wildbeasts.jpg', 'cheater_plain.jpeg', 'leapard-car.jpeg', 'lioness.jpeg'],
  ngorongoro: ['rhino.jpeg', 'lioness_open.jpeg', 'rhino_plain.jpeg'],
  nairobi: ['safari-van-sunrise.jpeg'],
  naivasha: ['egret-water.jpeg', 'flamingo-lonely.jpeg'],
  default: ['safari-van-sunrise.jpeg', 'cheater-safari.jpeg']
};

function getPoolByText(text) {
  const lower = text.toLowerCase();
  // Most specific checks first
  if (lower.includes('nakuru')) return pools.nakuru;
  if (lower.includes('amboseli')) return pools.amboseli;
  if (lower.includes('serengeti')) return pools.serengeti;
  if (lower.includes('ngorongoro')) return pools.ngorongoro;
  if (lower.includes('naivasha')) return pools.naivasha;
  if (lower.includes('mara')) return pools.mara;
  if (lower.includes('nairobi')) return pools.nairobi;
  return pools.default;
}

let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Find all assets logically imported
  const importRegex = /import\s+([a-zA-Z0-9_]+)\s+from\s+["']([^"']+)["']/g;
  let imports = [];
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    if(match[2].includes('assets') && !match[2].endsWith('.svg') && !match[2].endsWith('.css')) {
        imports.push({
          name: match[1],
          path: match[2],
          original: match[0]
        });
    }
  }

  imports.forEach(imp => {
    // Look ahead to see what day or destination this variable name maps to
    const nameStr = imp.name;
    const usageRegex = new RegExp('(.{0,250})' + nameStr + '(.{0,250})', 'g');
    let usageMatch;
    let contextText = '';
    
    while ((usageMatch = usageRegex.exec(content)) !== null) {
       if (!usageMatch[0].includes('import ')) {
         contextText += usageMatch[1] + usageMatch[2];
       }
    }
    
    if (!contextText.trim()) {
      contextText = file; // Fallback to checking the filename for clues
    }

    const pool = getPoolByText(contextText);
    const newImg = pool[Math.floor(Math.random() * pool.length)];
    
    const lastSlash = imp.path.lastIndexOf('/');
    const newPath = imp.path.substring(0, lastSlash + 1) + newImg;
    const newImportStr = `import ${imp.name} from "${newPath}";`;
    
    content = content.replace(imp.original, newImportStr);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
  }
});

console.log('Images intelligently replaced in ' + modifiedCount + ' files based on regional context!');
