import fs from 'fs';
import path from 'path';

const root = 'C:/Users/ADMIN/OneDrive/Desktop/aventara/src';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

let files = [];
walkDir(root, (filepath) => {
    if (filepath.endsWith('.jsx') || filepath.endsWith('.js')) {
        files.push(filepath);
    }
});

const flamingos = ['flamingo-lonely.jpeg', 'flamingo-water.jpeg', 'flamingo.jpeg'];
let flamingo_used = 0;

let _photos = [
    'cheater.jpeg', 'cheater_plain.jpeg', 'egret-water.jpeg', 'elefabt-happy.jpeg',
    'elefant-tusk.jpeg', 'elefant-vegetation.jpeg', 'elefant.jpeg', 'elefpalin.jpeg',
    'elephant.jpeg', 'elephtain.jpeg', 'flamingo-lonely.jpeg', 'flamingo-water.jpeg',
    'flamingo.jpeg', 'leapard-car.jpeg', 'lion pack.jpeg', 'lion-lonely.jpeg',
    'lion.jpeg', 'lioness.jpeg', 'lioness_open.jpeg', 'mountain.jpeg',
    'nairobi/antelppes.jpeg', 'nairobi/bird-exotic.jpeg', 'nairobi/girafe-nairobi-city.jpeg',
    'nairobi/giraffe-sunsut.jpeg', 'nairobi/girfe-sunset.jpeg', 'nairobi/lion-safari-van.jpeg',
    'nairobi/lion-safari.jpeg', 'nairobi/sunset-exotic.jpeg', 'plain_elefabt.jpeg',
    'rhino.jpeg', 'rhino_plain.jpeg', 'safari-van-sunrise.jpeg', 'treecheta.jpeg',
    'wildbeasts.jpg'
];

// exclude flamingos from standard round robin
let photos = _photos.filter(p => !flamingos.includes(p));

// pseudo-random deterministic shuffle to spread out nairobi/ folder
function shuffleArray(array) {
    let curr = array.length, rand;
    // We'll use a simple deterministic seed
    let seed = 12345;
    function random() {
        var x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }
    while (curr != 0) {
        rand = Math.floor(random() * curr);
        curr--;
        [array[curr], array[rand]] = [array[rand], array[curr]];
    }
    return array;
}
shuffleArray(photos);

let photo_idx = 0;
let total_replacements = 0;

console.log("Processing files...");

files.forEach(filepath => {
    let content = fs.readFileSync(filepath, 'utf-8');
    
    const regex = /import\s+(\w+)\s+from\s+['"]((?:\.\.\/)+assets\/)(.*?)['"];*/g;
    
    let newContent = content.replace(regex, (match, varName, prefix, oldVal) => {
        if (oldVal.toLowerCase().endsWith('.svg')) return match;
        
        if (filepath.includes('Home.jsx') && (varName === 'wildImg' || varName === 'heroImg')) {
            return match;
        }

        let photoToUse = '';
        const isFlamingoCtx = varName.toLowerCase().includes('flamingo') || 
                              filepath.toLowerCase().includes('nakuru') || 
                              filepath.toLowerCase().includes('naivasha') ||
                              oldVal.toLowerCase().includes('flamingo');

        if (isFlamingoCtx) {
            photoToUse = flamingos[flamingo_used % flamingos.length];
            flamingo_used++;
        } else {
            photoToUse = photos[photo_idx % photos.length];
            photo_idx++;
        }
        
        total_replacements++;
        return `import ${varName} from "${prefix}${photoToUse}";`;
    });

    if (content !== newContent) {
        fs.writeFileSync(filepath, newContent, 'utf-8');
        console.log(`Updated ${path.basename(filepath)}`);
    }
});

console.log(`Used ${total_replacements} total replacements. Standard photo wraps: ${Math.floor(photo_idx/photos.length)}. Flamingo wraps: ${Math.floor(flamingo_used/flamingos.length)}.`);
