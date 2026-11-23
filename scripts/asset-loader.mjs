// Node ESM loader hook so build-time scripts (scripts/build-seo-artifacts.mjs)
// can import src/data/ modules (resolving extensionless relative .js imports
// and stubbing static image imports normally handled by Next.js).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const IMAGE_RE = /\.(jpe?g|png|webp|avif)$/i;
const ROOT = process.cwd();

export async function resolve(specifier, context, nextResolve) {
  try {
    return await nextResolve(specifier, context);
  } catch (err) {
    if (
      (err.code === "ERR_MODULE_NOT_FOUND" || err.code === "ERR_UNSUPPORTED_DIR_IMPORT") &&
      (specifier.startsWith("./") || specifier.startsWith("../")) &&
      context.parentURL?.startsWith("file://")
    ) {
      const parentDir = path.dirname(fileURLToPath(context.parentURL));
      const base = path.resolve(parentDir, specifier);
      for (const candidate of [`${base}.js`, path.join(base, "index.js")]) {
        if (fs.existsSync(candidate)) {
          return { url: pathToFileURL(candidate).href, shortCircuit: true };
        }
      }
    }
    throw err;
  }
}

export async function load(url, context, nextLoad) {
  if (url.startsWith("file://")) {
    const filePath = fileURLToPath(url);
    if (IMAGE_RE.test(filePath) && fs.existsSync(filePath)) {
      const rel = path.relative(ROOT, filePath).replace(/\\/g, "/");
      return {
        format: "module",
        shortCircuit: true,
        source: `export default { src: ${JSON.stringify("/__asset__/" + rel)}, width: 1200, height: 800 };\n`,
      };
    }
  }
  return nextLoad(url, context);
}
