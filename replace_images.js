import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, 'src');

const imageAssets = [
  'cheater.jpeg', 'cheater_plain.jpeg', 'elefpalin.jpeg', 'elephant.jpeg', 'elephtain.jpeg',
  'flamingo.jpeg', 'lion.jpeg', 'lioness.jpeg', 'lioness_open.jpeg', 'mountain.jpeg',
  'plain_elefabt.jpeg', 'rhino.jpeg', 'rhino_plain.jpeg', 'treecheta.jpeg'
];

function getRelativePath(fromPath, toPath) {
  let rel = path.relative(path.dirname(fromPath), toPath).replace(/\\/g, '/');
  if (!rel.startsWith('.')) rel = './' + rel;
  return rel;
}

let imgCounter = 0;

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // We process files with .unsplash.com
      if (content.includes('unsplash.com')) {
        console.log('Processing:', fullPath);
        
        // 1. Prepare imports
        let imports = '';
        let imageVars = [];
        
        imageAssets.forEach((img, idx) => {
          // make varname valid
          const varName = `imgAsset_${idx}`;
          const relPath = getRelativePath(fullPath, path.join(srcDir, 'assets', img));
          imports += `import ${varName} from "${relPath}";\n`;
          imageVars.push(varName);
        });

        // Add imports strictly below the first block of imports
        let insertPos = 0;
        const importRegex = /^import .+?;?\n/gm;
        let match;
        while ((match = importRegex.exec(content)) !== null) {
          insertPos = match.index + match[0].length;
        }

        if (insertPos === 0) {
          content = imports + '\n' + content;
        } else {
          content = content.slice(0, insertPos) + '\n' + imports + content.slice(insertPos);
        }

        // 2. Replace all src="https://images.unsplash.com..." with src={imgAsset_X}
        content = content.replace(/src=["']https:\/\/images\.unsplash\.com[^"']*["']/g, () => {
          const v = imageVars[imgCounter++ % imageVars.length];
          return `src={${v}}`;
        });
        
        // 3. Replace remaining "https://images.unsplash.com..." (e.g. in objects / arrays) with imgAsset_X
        content = content.replace(/["']https:\/\/images\.unsplash\.com[^"']*["']/g, () => {
          const v = imageVars[imgCounter++ % imageVars.length];
          return v;
        });

        fs.writeFileSync(fullPath, content, 'utf8');
      }
    }
  }
}

processDirectory(srcDir);
console.log('Done!');
