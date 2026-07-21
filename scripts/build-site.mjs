import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getAllVenues, getPublishedCities } from "../src/data.js";
import { sourceLedger } from "../src/source-ledger.js";
import { sourceRecordToVenue } from "../src/expanded-cities.js";
import { guideMedia, venueMedia } from "../src/media.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const siteUrl = "https://playdude.club";

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeXml(value = "") {
  return escapeHtml(value);
}

function visualHash(value = "") {
  let hash = 2166136261;
  for (const character of String(value)) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function compactLabel(value = "", limit = 34) {
  const text = String(value).trim();
  return text.length > limit ? `${text.slice(0, limit - 1)}…` : text;
}

const cityPalettes = {
  bangkok: ["#ff5eb4", "#8b245f", "#180d17"],
  pattaya: ["#ff9a52", "#b73d54", "#160d12"],
  hanoi: ["#e3b45d", "#6d3d3f", "#15100e"],
  "ho-chi-minh-city": ["#4fc6b3", "#225f63", "#091316"],
  jakarta: ["#88a8ff", "#3f457d", "#0b0d19"],
  "kuala-lumpur": ["#c88cff", "#573d7a", "#100b18"]
};

function editorialSvg({ citySlug, cityName, title, subtitle, kind, slug }) {
  const [accent, secondary, base] = cityPalettes[citySlug] || cityPalettes.bangkok;
  const hash = visualHash(`${citySlug}|${slug}|${kind}`);
  const orbitX = 730 + (hash % 250);
  const orbitY = 160 + ((hash >>> 8) % 240);
  const initials = title.split(/\s+/).filter(Boolean).slice(0, 2).map((word) => word[0]).join("").toUpperCase();
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" role="img" aria-labelledby="title desc">
    <title id="title">${escapeXml(title)} editorial visual</title>
    <desc id="desc">PlayDude editorial visual for ${escapeXml(cityName)} ${escapeXml(kind.toLowerCase())}.</desc>
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${base}"/><stop offset="1" stop-color="#050406"/></linearGradient>
      <radialGradient id="glow"><stop stop-color="${accent}" stop-opacity=".74"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="34"/></filter>
      <pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse"><path d="M52 0H0V52" fill="none" stroke="#fff" stroke-opacity=".045"/></pattern>
    </defs>
    <rect width="1200" height="675" fill="url(#bg)"/>
    <rect width="1200" height="675" fill="url(#grid)"/>
    <circle cx="${orbitX}" cy="${orbitY}" r="280" fill="url(#glow)" filter="url(#blur)"/>
    <path d="M-40 ${520 - (hash % 90)} C260 ${300 + (hash % 110)} 510 ${690 - (hash % 120)} 1260 ${180 + (hash % 140)}" fill="none" stroke="${secondary}" stroke-width="86" stroke-opacity=".38"/>
    <path d="M-20 575 C320 420 700 610 1220 260" fill="none" stroke="${accent}" stroke-width="3" stroke-opacity=".85"/>
    <rect x="62" y="56" width="1076" height="563" rx="4" fill="none" stroke="#fff" stroke-opacity=".16"/>
    <text x="82" y="112" fill="${accent}" font-family="Arial,Helvetica,sans-serif" font-size="22" font-weight="800" letter-spacing="5">PLAYDUDE / ${escapeXml(kind.toUpperCase())}</text>
    <text x="82" y="390" fill="#fff" font-family="Georgia,Times New Roman,serif" font-size="64" font-weight="700">${escapeXml(compactLabel(title, 30))}</text>
    <text x="85" y="441" fill="#fff" fill-opacity=".62" font-family="Arial,Helvetica,sans-serif" font-size="23" letter-spacing="2">${escapeXml(compactLabel(subtitle, 48))}</text>
    <text x="946" y="559" fill="#fff" fill-opacity=".09" font-family="Arial,Helvetica,sans-serif" font-size="170" font-style="italic" font-weight="900" text-anchor="middle">${escapeXml(initials)}</text>
    <text x="82" y="573" fill="#fff" fill-opacity=".48" font-family="Arial,Helvetica,sans-serif" font-size="17" letter-spacing="4">${escapeXml(cityName.toUpperCase())} · KNOW BEFORE YOU GO</text>
  </svg>`;
}

function normaliseVenueName(value = "") {
  return String(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function venueMergeKey(item) {
  const rawKey = `${item.citySlug}|${normaliseVenueName(item.name)}`;
  return {
    "bangkok|baccara soi cowboy": "bangkok|baccara",
    "bangkok|sherbet": "bangkok|sherbet club bangkok",
    "bangkok|czech": "bangkok|czech club bangkok"
  }[rawKey] || rawKey;
}

function uniqueItems(items, keyFn = (item) => String(item)) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item);
    if (!item || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function editorSourceEntry(item) {
  return {
    source: `PlayDude editor profile · ${item.sourceUpdated}`,
    page: null,
    note: item.summary,
    price: item.priceSignal,
    status: item.confidence || "Editor profile",
    url: item.officialUrl || item.mapUrl || null
  };
}

function sourceEntriesFor(item) {
  return item.sourceEntries?.length ? item.sourceEntries : [editorSourceEntry(item)];
}

function mergeVenueIntel(items) {
  const merged = new Map();
  items.forEach((item) => {
    const key = venueMergeKey(item);
    const existing = merged.get(key);
    if (!existing) {
      merged.set(key, {
        ...item,
        bestFor: [...(item.bestFor || [])],
        notIdealFor: [...(item.notIdealFor || [])],
        priceItems: [...(item.priceItems || [])],
        tips: [...(item.tips || [])],
        sourceEntries: sourceEntriesFor(item),
        mergedRecordCount: 1
      });
      return;
    }

    existing.mergedRecordCount += 1;
    existing.sourceEntries = uniqueItems(
      [...existing.sourceEntries, ...sourceEntriesFor(item)],
      (entry) => [entry.source, entry.page, entry.note, entry.price, entry.status].join("|")
    );
    existing.priceItems = uniqueItems(
      [...existing.priceItems, ...(item.priceItems || [])],
      (price) => `${price.label}|${price.value}`
    );
    existing.bestFor = uniqueItems([...existing.bestFor, ...(item.bestFor || [])]);
    existing.notIdealFor = uniqueItems([...existing.notIdealFor, ...(item.notIdealFor || [])]);
    existing.tips = uniqueItems([...existing.tips, ...(item.tips || [])]);
    existing.officialUrl ||= item.officialUrl;
    existing.mapUrl ||= item.mapUrl;
  });
  return [...merged.values()];
}

function getVenueType(item) {
  const category = String(item.category || "").toLowerCase();
  const name = String(item.name || "").toLowerCase();
  const detail = `${item.name} ${item.type} ${item.summary}`.toLowerCase();

  if (/79 show|tiffany|oriental princess|haitian shengyan/.test(detail)) return "Adult Show";
  if (/1% barber|sharr barbershop/.test(detail)) return "Korean Massage";
  if (/spa de palace/.test(detail)) return "Nuru & Spa";
  if (/member club|premium club|hosted restaurant/.test(category)) return "Member Club";
  if (/ktv|karaoke/.test(category) || /ktv|karaoke/.test(detail)) return "KTV";
  if (/hotel entertainment complex/.test(category)) return "Hotel Entertainment Complex";
  if (/adult show|cabaret/.test(category)) return "Adult Show";
  if (/soapy massage/.test(category)) return "Thai Shower";
  if (/go-go|beer bar|nightlife district/.test(category)) return "Go-Go Bar";
  if (/nightclub/.test(category)) return "Nightclub";
  if (/independent/.test(category) || (/grooming \/ cafe/.test(category) && /cafe|café|coffee/.test(name))) return "Cafe";
  if (/korean massage|recovery/.test(category) || /korean-style/.test(detail)) return "Korean Massage";
  if (/japanese massage/.test(category) || /japanese-style/.test(detail)) return "Japanese Massage";
  if (/nuru \/ spa|massage \/ spa|day spa|^spa$/.test(category) || /nuru|themed spa|luxury themed/.test(detail)) return "Nuru & Spa";
  if (/grooming \/ cafe/.test(category)) return "Korean Massage";
  return "Thai Massage";
}

function applyVenueType(item) {
  const type = getVenueType(item);
  return { ...item, category: type, type };
}

const cities = getPublishedCities();
const cityMap = new Map(cities.map((city) => [city.slug, city]));
const editorVenues = getAllVenues().filter((item) => ["bangkok", "pattaya"].includes(item.citySlug));
const allVenues = mergeVenueIntel([...editorVenues, ...sourceLedger.map(sourceRecordToVenue)]).map(applyVenueType);
const allGuides = cities.flatMap((city) => city.guides.map((guide) => ({ ...guide, citySlug: city.slug, cityName: city.name })));

function cityPath(city) {
  return `/cities/${city.slug}/`;
}

function guidePath(city, guide) {
  return `/cities/${city.slug}/guides/${guide.slug}/`;
}

function venuePath(city, venue) {
  return `/cities/${city.slug}/venues/${venue.slug}/`;
}

function list(items, render) {
  return items?.length ? `<ul>${items.map((item) => `<li>${render(item)}</li>`).join("")}</ul>` : "";
}

function breadcrumbs(items) {
  return `<nav class="seo-breadcrumbs" aria-label="Breadcrumb">${items
    .map((item) => item.url ? `<a href="${item.url}">${escapeHtml(item.name)}</a>` : `<span>${escapeHtml(item.name)}</span>`)
    .join("<span aria-hidden=\"true\"> / </span>")}</nav>`;
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url ? `${siteUrl}${item.url}` : undefined
    }))
  };
}

function staticMedia(media, className = "seo-media") {
  const image = `<img src="${media.src}" alt="${escapeHtml(media.alt)}" width="1200" height="675" loading="eager" />`;
  return `<figure class="${className}">${media.sourceUrl ? `<a href="${media.sourceUrl}">${image}</a>` : image}<figcaption>${escapeHtml(media.credit)}</figcaption></figure>`;
}

function homeContent() {
  return `<main class="static-fallback seo-fallback" id="main-content">
    <p class="eyebrow">Field-sourced Nightlife Intelligence</p>
    <h1>Know the price. Read the room. Choose the night.</h1>
    <p>PlayDude helps adult travellers plan nightlife in Bangkok, Pattaya, Hanoi, Ho Chi Minh City, Jakarta, and Kuala Lumpur with observed prices, decision playbooks, and concise Venue Intel.</p>
    <section><h2>Explore six cities</h2>${list(cities, (city) => `<a href="${cityPath(city)}">${escapeHtml(city.name)} Nightlife Intelligence</a> — ${escapeHtml(city.summary)}`)}</section>
    <section><h2>Decision playbooks</h2>${list(allGuides, (guide) => `<a href="/cities/${guide.citySlug}/guides/${guide.slug}/">${escapeHtml(guide.title)}</a> — ${escapeHtml(guide.summary)}`)}</section>
  </main>`;
}

function cityContent(city) {
  const venues = allVenues.filter((venue) => venue.citySlug === city.slug);
  const crumbs = [{ name: "Home", url: "/" }, { name: city.name }];
  return `<main class="static-fallback seo-fallback" id="main-content">
    ${breadcrumbs(crumbs)}
    <p class="eyebrow">${escapeHtml(city.country)} · Field guide live</p>
    <h1>${escapeHtml(city.name)} Nightlife Intelligence</h1>
    <p>${escapeHtml(city.summary)}</p>
    <p><strong>Best first-night area:</strong> ${escapeHtml(city.firstNightArea)} · <strong>Cost signal:</strong> ${escapeHtml(city.costSignal)}</p>
    <section><h2>${escapeHtml(city.name)} playbooks</h2>${list(city.guides, (guide) => `<a href="${guidePath(city, guide)}">${escapeHtml(guide.title)}</a> — ${escapeHtml(guide.summary)}`)}</section>
    <section><h2>${venues.length} Venue Intel profiles</h2>${list(venues, (venue) => `<a href="${venuePath(city, venue)}">${escapeHtml(venue.name)}</a> — ${escapeHtml(venue.type)} · ${escapeHtml(venue.area)}`)}</section>
  </main>`;
}

function guideContent(city, guide) {
  const crumbs = [
    { name: "Home", url: "/" },
    { name: city.name, url: cityPath(city) },
    { name: guide.title }
  ];
  const related = allVenues.filter((venue) => venue.citySlug === city.slug && guide.venueSlugs?.includes(venue.slug));
  const media = guideMedia(city, guide);
  return `<main class="static-fallback seo-fallback" id="main-content">
    ${breadcrumbs(crumbs)}
    ${staticMedia(media)}
    <p class="eyebrow">${escapeHtml(city.name)} · ${escapeHtml(guide.kicker)}</p>
    <h1>${escapeHtml(guide.title)}</h1>
    <p>${escapeHtml(guide.summary)}</p>
    <p><strong>Decision:</strong> ${escapeHtml(guide.verdict)}</p>
    <p><strong>Best time:</strong> ${escapeHtml(guide.bestTime)} · <strong>Budget:</strong> ${escapeHtml(guide.budget)}</p>
    ${guide.sections.map((section) => `<section><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.body)}</p></section>`).join("")}
    <section><h2>Checklist</h2>${list(guide.checklist, escapeHtml)}</section>
    ${guide.sources?.length ? `<section><h2>Sources for this edition</h2>${list(guide.sources, (source) => `<a href="${source.url}">${escapeHtml(source.title)}</a> — ${escapeHtml(source.date)}. ${escapeHtml(source.note)}`)}</section>` : ""}
    ${related.length ? `<section><h2>Related Venue Intel</h2>${list(related, (venue) => `<a href="${venuePath(city, venue)}">${escapeHtml(venue.name)}</a>`)}</section>` : ""}
  </main>`;
}

function venueContent(city, venue) {
  const crumbs = [
    { name: "Home", url: "/" },
    { name: city.name, url: cityPath(city) },
    { name: venue.name }
  ];
  const media = venueMedia({ ...venue, cityName: city.name });
  return `<main class="static-fallback seo-fallback" id="main-content">
    ${breadcrumbs(crumbs)}
    ${staticMedia(media)}
    <p class="eyebrow">${escapeHtml(city.name)} · ${escapeHtml(venue.type)}</p>
    <h1>${escapeHtml(venue.name)}</h1>
    <p>${escapeHtml(venue.verdict || venue.summary)}</p>
    <p><strong>Area:</strong> ${escapeHtml(venue.area)} · <strong>Observed price:</strong> ${escapeHtml(venue.priceSignal)}</p>
    <p><strong>Timing:</strong> ${escapeHtml(venue.timing)} · <strong>Source updated:</strong> ${escapeHtml(venue.sourceUpdated)}</p>
    ${venue.bestFor?.length ? `<section><h2>Best for</h2>${list(venue.bestFor, escapeHtml)}</section>` : ""}
    ${venue.priceItems?.length ? `<section><h2>Observed price details</h2>${list(venue.priceItems, (item) => `<strong>${escapeHtml(item.label)}:</strong> ${escapeHtml(item.value)}`)}</section>` : ""}
    ${venue.tips?.length ? `<section><h2>Before you go</h2>${list(venue.tips, escapeHtml)}</section>` : ""}
  </main>`;
}

function pageTemplate({ title, description, pathname, content, schema = [], type = "website", image = null }) {
  const canonical = `${siteUrl}${pathname}`;
  const safeTitle = escapeHtml(`${title} - PlayDude`);
  const safeDescription = escapeHtml(description);
  const imageUrl = image ? (image.startsWith("http") ? image : `${siteUrl}${image}`) : null;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "PlayDude",
      url: siteUrl,
      description: "Field-sourced nightlife intelligence for adult travellers."
    },
    ...schema
  ];

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${safeTitle}</title>
    <meta name="description" content="${safeDescription}" />
    <meta name="theme-color" content="#080609" />
    <meta property="og:title" content="${safeTitle}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="${canonical}" />
    ${imageUrl ? `<meta property="og:image" content="${escapeHtml(imageUrl)}" />` : ""}
    <meta name="twitter:card" content="${imageUrl ? "summary_large_image" : "summary"}" />
    ${imageUrl ? `<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />` : ""}
    <link rel="canonical" href="${canonical}" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="stylesheet" href="/src/styles.css" />
    <link rel="stylesheet" href="/src/theme-v7.css" />
    <script type="application/ld+json">${JSON.stringify(schemas)}</script>
  </head>
  <body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div id="app">${content}</div>
    <noscript><p class="noscript">JavaScript is optional for reading this page and required for interactive filters.</p></noscript>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>`;
}

function structuredDate(value = "") {
  const match = String(value).match(/^(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})$/i);
  if (!match) return undefined;
  const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  return `${match[2]}-${String(months.indexOf(match[1].toLowerCase()) + 1).padStart(2, "0")}-01`;
}

function writeRoute(pathname, html) {
  const relative = pathname === "/" ? "index.html" : path.join(pathname.slice(1), "index.html");
  const target = path.join(output, relative);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);
}

function addPage(pages, details) {
  pages.push(details);
  writeRoute(details.pathname, pageTemplate(details));
}

function writeEditorialMedia() {
  const venueDirectory = path.join(output, "media", "venues");
  const guideDirectory = path.join(output, "media", "playbooks");
  fs.mkdirSync(venueDirectory, { recursive: true });
  fs.mkdirSync(guideDirectory, { recursive: true });

  for (const venue of allVenues) {
    const city = cityMap.get(venue.citySlug);
    if (!city) continue;
    fs.writeFileSync(
      path.join(venueDirectory, `${venue.citySlug}-${venue.slug}.svg`),
      editorialSvg({
        citySlug: venue.citySlug,
        cityName: city.name,
        title: venue.name,
        subtitle: `${venue.type} · ${venue.area}`,
        kind: "Venue Intel",
        slug: venue.slug
      })
    );
  }

  for (const guide of allGuides) {
    fs.writeFileSync(
      path.join(guideDirectory, `${guide.citySlug}-${guide.slug}.svg`),
      editorialSvg({
        citySlug: guide.citySlug,
        cityName: guide.cityName,
        title: guide.title,
        subtitle: `${guide.kicker} · ${guide.bestTime}`,
        kind: "Playbook",
        slug: guide.slug
      })
    );
  }
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
fs.cpSync(path.join(root, "src"), path.join(output, "src"), { recursive: true });
if (fs.existsSync(path.join(root, "public"))) {
  fs.cpSync(path.join(root, "public"), output, { recursive: true });
}
writeEditorialMedia();

const pages = [];
addPage(pages, {
  pathname: "/",
  lastmod: new Date().toISOString().slice(0, 10),
  title: "Six-City Nightlife Intelligence",
  description: `Nightlife intelligence for Bangkok, Pattaya, Hanoi, Ho Chi Minh City, Jakarta, and Kuala Lumpur with ${allVenues.length} unique Venue Intel profiles and ${allGuides.length} playbooks.`,
  content: homeContent(),
  schema: [{ "@context": "https://schema.org", "@type": "Organization", name: "PlayDude", url: siteUrl }]
});

for (const city of cities) {
  const cityCrumbs = [{ name: "Home", url: "/" }, { name: city.name }];
  addPage(pages, {
    pathname: cityPath(city),
    lastmod: structuredDate(city.sourceUpdated),
    title: `${city.name} Nightlife Intelligence`,
    description: `${city.name} field guide with ${city.guides.length} decision playbooks and ${allVenues.filter((venue) => venue.citySlug === city.slug).length} Venue Intel profiles, including observed prices and timing.`,
    content: cityContent(city),
    schema: [breadcrumbSchema(cityCrumbs)]
  });

  for (const guide of city.guides) {
    const media = guideMedia(city, guide);
    const guideCrumbs = [{ name: "Home", url: "/" }, { name: city.name, url: cityPath(city) }, { name: guide.title }];
    addPage(pages, {
      pathname: guidePath(city, guide),
      lastmod: structuredDate(guide.sourceUpdated),
      title: `${guide.title}, ${city.name}`,
      description: `${guide.summary} Source updated ${guide.sourceUpdated}.`,
      content: guideContent(city, guide),
      type: "article",
      image: media.src,
      schema: [
        breadcrumbSchema(guideCrumbs),
        { "@context": "https://schema.org", "@type": "Article", headline: guide.title, description: guide.summary, image: `${siteUrl}${media.src}`, dateModified: structuredDate(guide.sourceUpdated), mainEntityOfPage: `${siteUrl}${guidePath(city, guide)}`, publisher: { "@type": "Organization", name: "PlayDude" } }
      ]
    });
  }
}

for (const venue of allVenues) {
  const city = cityMap.get(venue.citySlug);
  if (!city) continue;
  const media = venueMedia({ ...venue, cityName: city.name });
  const venueCrumbs = [{ name: "Home", url: "/" }, { name: city.name, url: cityPath(city) }, { name: venue.name }];
  addPage(pages, {
    pathname: venuePath(city, venue),
    lastmod: structuredDate(venue.sourceUpdated),
    title: `${venue.name}, ${city.name}`,
    description: `${venue.name}: ${venue.verdict || venue.summary} Observed price signal: ${venue.priceSignal}.`,
    content: venueContent(city, venue),
    image: media.src,
    schema: [breadcrumbSchema(venueCrumbs)]
  });
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url><loc>${siteUrl}${page.pathname}</loc>${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}</url>`).join("\n")}
</urlset>\n`;

fs.writeFileSync(path.join(output, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(output, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
fs.writeFileSync(path.join(output, "_redirects"), `/index.html / 301\n/home / 301\n/cities/bangkok/venues/sherbet-bangkok-100/ /cities/bangkok/venues/sherbet-club-bangkok/ 301\n/cities/bangkok/venues/czech-bangkok-101/ /cities/bangkok/venues/czech-club-bangkok/ 301\n`);
fs.writeFileSync(path.join(output, "_headers"), `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n\n/sitemap.xml\n  Cache-Control: public, max-age=3600\n`);
fs.writeFileSync(path.join(output, "404.html"), pageTemplate({
  pathname: "/404/",
  title: "Page Not Found",
  description: "The requested PlayDude page could not be found.",
  content: `<main class="static-fallback seo-fallback" id="main-content"><p class="eyebrow">404</p><h1>Page not found.</h1><p><a href="/">Return to PlayDude</a></p></main>`
}));

fs.writeFileSync(path.join(output, "build-manifest.json"), JSON.stringify({
  generatedAt: new Date().toISOString(),
  pages: pages.length,
  cities: cities.length,
  guides: allGuides.length,
  venues: allVenues.length
}, null, 2));

console.log(`Built ${pages.length} pages: ${cities.length} cities, ${allGuides.length} playbooks, ${allVenues.length} venues.`);
