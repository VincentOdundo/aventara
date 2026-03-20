import fs from "fs";
import config from "./tailwind.config.js";

const cp = config.theme.extend;
let css = '@import "tailwindcss";\n\n@theme {\n';

if (cp.colors) {
  for (let c in cp.colors) {
    css += `  --color-${c}: ${cp.colors[c]};\n`;
  }
}

if (cp.fontFamily) {
  for (let f in cp.fontFamily) {
    let fallback = f.includes("headline") ? "serif" : "sans-serif";
    let val = cp.fontFamily[f][0];
    if (val.includes(" ")) val = `"${val}"`;
    css += `  --font-${f}: ${val}, ${fallback};\n`;
  }
}

if (cp.borderRadius) {
  for (let r in cp.borderRadius) {
    if (r === "DEFAULT") css += `  --radius: ${cp.borderRadius[r]};\n`;
    else css += `  --radius-${r}: ${cp.borderRadius[r]};\n`;
  }
}

css +=
  "}\n\n@layer base {\n  body {\n    @apply antialiased text-on-surface bg-surface-container-lowest font-body;\n  }\n}\n";

fs.writeFileSync("src/index.css", css);
console.log("Migrated tokens to index.css");
