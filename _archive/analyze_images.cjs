const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else if (file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walkDir('./src/data');
const map = {};
const inverseMap = {}; // imgPath -> [files]

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach(line => {
    const match = line.match(/import\s+(\w+)\s+from\s+['"](.*?\.(jpeg|jpg|png|webp|svg))['"]/);
    if (match) {
      const varName = match[1];
      const imgPath = match[2];
      
      if (!map[file]) map[file] = [];
      map[file].push({ varName, imgPath });

      if (!inverseMap[imgPath]) inverseMap[imgPath] = [];
      inverseMap[imgPath].push(file);
    }
  });
});

console.log("=== FILE TO IMAGE MAPPING ===");
for (const file in map) {
  console.log(`\n${file}:`);
  map[file].forEach(img => {
    console.log(`  ${img.varName} -> ${img.imgPath}`);
  });
}

console.log("\n\n=== IMAGE TO FILE USAGE (DUPLICATES) ===");
for (const img in inverseMap) {
  console.log(`\nImage: ${img}`);
  console.log(`  Used in:`);
  inverseMap[img].forEach(file => {
    console.log(`    - ${file}`);
  });
}
