const fs = require("fs");
const path = require("path");

function removeImagesFromItinerary(p) {
  let content = fs.readFileSync(p, "utf8");
  content = content.replace(/gallery:\s*\[[^\]]*\],?/g, "");

  // Save the first image which is the package cover
  content = content.replace(/image:\s*\w+,/, "PLACEHOLDER_MAIN_IMAGE");

  // Remove all other image: assignments (like in itineraries)
  content = content.replace(/image:\s*\w+,/g, "");

  // Restore the package cover and set it to imported heroImg
  content = content.replace("PLACEHOLDER_MAIN_IMAGE", "image: heroImg,");
  fs.writeFileSync(p, content);
}
const w = (dir) => {
  fs.readdirSync(dir).forEach((f) => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) w(p);
    else if (f.endsWith(".js") && f !== "index.js") {
      removeImagesFromItinerary(p);
      console.log("Cleaned props for", p);
    }
  });
};
w("./src/data/packages");
