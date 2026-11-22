// Computes an honest, per-route YYYY-MM-DD <lastmod> date from the actual
// source files that contribute to each URL, instead of bulk-stamping today's
// date onto unchanged pages on every build.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const packageDir = "src/data/packages";

// Map safari slug -> package file path once per process.
const safariFileBySlug = new Map();
if (fs.existsSync(packageDir)) {
  for (const dir of fs.readdirSync(packageDir, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    for (const file of fs.readdirSync(path.join(packageDir, dir.name))) {
      if (!file.endsWith(".js") || file === "index.js") continue;
      const full = path.join(packageDir, dir.name, file).replace(/\\/g, "/");
      const txt = fs.readFileSync(full, "utf8");
      const m = txt.match(/^\s*slug:\s*"([^"]+)"/m);
      if (m) safariFileBySlug.set(m[1], full);
    }
  }
}

function sourceFilesForRoute(routePath) {
  if (routePath === "/") return ["src/pages/Home.jsx", "src/data/company.js", "index.html"];
  if (routePath === "/safaris" || routePath.startsWith("/safaris/")) {
    return ["src/pages/SafarisHub.jsx", "src/data/hubContent.js", "src/data/packages/index.js"];
  }
  if (routePath.startsWith("/safari/")) {
    const slug = routePath.slice("/safari/".length);
    const pkgFile = safariFileBySlug.get(slug);
    return [pkgFile, "src/data/safariContent.js", "src/pages/SafariDetail.jsx"].filter(Boolean);
  }
  if (routePath === "/destinations") {
    return ["src/pages/DestinationsHub.jsx", "src/data/destinations.js"];
  }
  if (routePath.startsWith("/destinations/")) {
    return ["src/data/destinations.js", "src/data/destinationContent.js", "src/pages/DestinationDetail.jsx"];
  }
  if (routePath === "/kenya") return ["src/pages/Kenya.jsx"];
  if (routePath === "/tanzania") return ["src/pages/Tanzania.jsx"];
  if (routePath === "/company-profile") return ["src/pages/CompanyProfile.jsx", "COMPANY_PROFILE.md"];
  if (routePath === "/about") return ["src/pages/About.jsx", "src/data/company.js"];
  if (routePath === "/contact") return ["src/pages/Contact.jsx", "src/data/company.js"];
  if (routePath === "/gallery") return ["src/pages/Gallery.jsx", "src/data/photos.js"];
  return ["src/App.jsx"];
}

// Track files with uncommitted local changes so freshly edited routes get
// their working-tree modification date while untouched routes keep their last
// real commit date.
const dirtyFiles = new Set();
try {
  const out = execFileSync("git", ["status", "--porcelain"], { encoding: "utf8" });
  for (const line of out.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const file = line.slice(3).trim().replace(/^"|"$/g, "").replace(/\\/g, "/");
    dirtyFiles.add(file);
  }
} catch {
  // Outside git (e.g. shallow tarball deploy); mtime fallback handles it.
}

const gitDateCache = new Map();
function gitCommitDate(file) {
  if (gitDateCache.has(file)) return gitDateCache.get(file);
  let date = null;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(out)) date = out;
  } catch {
    date = null;
  }
  gitDateCache.set(file, date);
  return date;
}

function fileLastMod(file) {
  if (!fs.existsSync(file)) return null;
  if (dirtyFiles.has(file)) {
    return fs.statSync(file).mtime.toISOString().slice(0, 10);
  }
  return gitCommitDate(file) || fs.statSync(file).mtime.toISOString().slice(0, 10);
}

/** Returns the most recent real YYYY-MM-DD modification date for a route. */
export function lastmodForRoute(routePath) {
  const dates = sourceFilesForRoute(routePath)
    .map(fileLastMod)
    .filter(Boolean)
    .sort();
  return dates.length ? dates[dates.length - 1] : new Date().toISOString().slice(0, 10);
}
