import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const manifestPath = path.join(output, "build-manifest.json");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(fs.existsSync(manifestPath), "dist/build-manifest.json is missing. Run npm run build first.");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
assert(manifest.cities === 6, `Expected 6 cities, received ${manifest.cities}.`);
assert(manifest.guides === 26, `Expected 26 playbooks, received ${manifest.guides}.`);
assert(manifest.venues === 214, `Expected 214 venues, received ${manifest.venues}.`);
assert(manifest.pages === 247, `Expected 247 indexable pages, received ${manifest.pages}.`);

const required = [
  "index.html",
  "robots.txt",
  "sitemap.xml",
  "404.html",
  "_redirects",
  "_headers",
  "favicon.svg",
  "apple-touch-icon.png",
  "cities/bangkok/index.html",
  "cities/pattaya/index.html",
  "cities/hanoi/index.html",
  "cities/ho-chi-minh-city/index.html",
  "cities/jakarta/index.html",
  "cities/kuala-lumpur/index.html"
];

for (const file of required) assert(fs.existsSync(path.join(output, file)), `Missing ${file}.`);

const htmlFiles = [];
const canonicals = new Set();
function collect(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(target);
    else if (entry.name === "index.html") htmlFiles.push(target);
  }
}
collect(output);
assert(htmlFiles.length === 247, `Expected 247 route index files, received ${htmlFiles.length}.`);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const canonical = html.match(/<link rel="canonical" href="(https:\/\/playdude\.club\/[^"]*)"/)?.[1];
  assert(canonical, `Canonical missing in ${file}.`);
  assert(!canonicals.has(canonical), `Duplicate canonical ${canonical}.`);
  canonicals.add(canonical);
  assert(/<meta name="description" content="[^"]+"/.test(html), `Description missing in ${file}.`);
  assert(/<h1>[^<]+<\/h1>/.test(html), `H1 missing in ${file}.`);

  const schema = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)?.[1];
  assert(schema, `Structured data missing in ${file}.`);
  JSON.parse(schema);

  for (const href of html.matchAll(/href="(\/cities\/[^"]+\/)"/g)) {
    const target = path.join(output, href[1].slice(1), "index.html");
    assert(fs.existsSync(target), `Broken internal route ${href[1]} in ${file}.`);
  }
}
assert(canonicals.size === 247, `Expected 247 unique canonicals, received ${canonicals.size}.`);

const sitemap = fs.readFileSync(path.join(output, "sitemap.xml"), "utf8");
const sitemapUrls = sitemap.match(/<loc>/g)?.length || 0;
assert(sitemapUrls === 247, `Expected 247 sitemap URLs, received ${sitemapUrls}.`);

const venueVisuals = fs.readdirSync(path.join(output, "media", "venues")).filter((file) => file.endsWith(".svg"));
const playbookVisuals = fs.readdirSync(path.join(output, "media", "playbooks")).filter((file) => file.endsWith(".svg"));
assert(venueVisuals.length === manifest.venues, `Expected ${manifest.venues} venue visuals, received ${venueVisuals.length}.`);
assert(playbookVisuals.length === manifest.guides, `Expected ${manifest.guides} playbook visuals, received ${playbookVisuals.length}.`);

console.log(`SEO build verified: ${manifest.pages} pages and ${sitemapUrls} sitemap URLs.`);
