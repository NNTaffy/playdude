import {
  getAllVenues,
  getCity,
  getGuide,
  getPublishedCities,
  getVenue
} from "./data.js";
import {
  sourceLedger
} from "./source-ledger.js";
import { sourceRecordToVenue } from "./expanded-cities.js";
import { guideMedia, venueMedia } from "./media.js";

const app = document.querySelector("#app");
const publishedCities = getPublishedCities();
const allVenues = getAllVenues();
const editorVenues = allVenues.filter((item) => ["bangkok", "pattaya"].includes(item.citySlug));
const rawIntel = [...editorVenues, ...sourceLedger.map(sourceRecordToVenue)];
const allIntel = mergeVenueIntel(rawIntel).map(applyVenueType);
const allGuides = publishedCities.flatMap((city) =>
  city.guides.map((item) => ({ ...item, citySlug: city.slug, cityName: city.name }))
);

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
  const aliases = {
    "bangkok|baccara soi cowboy": "bangkok|baccara",
    "bangkok|sherbet": "bangkok|sherbet club bangkok",
    "bangkok|czech": "bangkok|czech club bangkok"
  };
  return aliases[rawKey] || rawKey;
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

    if (item.confidence && item.confidence !== "Source-listed" && !existing.watchFor.includes(item.confidence)) {
      existing.watchFor = `${existing.watchFor} Source status: ${item.confidence}.`;
    }
  });

  return [...merged.values()];
}

const VENUE_TYPES = [
  "Thai Massage",
  "Japanese Massage",
  "Korean Massage",
  "Go-Go Bar",
  "Cafe",
  "Thai Shower",
  "Member Club",
  "KTV",
  "Adult Show",
  "Hotel Entertainment Complex",
  "Nuru & Spa",
  "Nightclub"
];

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
  if (/massage \/ planning/.test(category)) return "Thai Massage";
  return "Thai Massage";
}

function applyVenueType(item) {
  const originalCategory = item.category;
  const type = getVenueType(item);
  return {
    ...item,
    category: type,
    type,
    bestFor: uniqueItems((item.bestFor || []).map((value) => value === originalCategory ? type : value))
  };
}

function cityPath(city) {
  return `/cities/${city.slug}/`;
}

function guidePath(city, item) {
  return `/cities/${city.slug}/guides/${item.slug}/`;
}

function venuePath(city, item) {
  return `/cities/${city.slug}/venues/${item.slug}/`;
}

function escapeText(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMediaFigure(media, className, loading = "lazy") {
  const image = `<img src="${media.src}" alt="${escapeText(media.alt)}" width="1200" height="675" loading="${loading}" decoding="async" />`;
  return `
    <figure class="${className}">
      ${media.sourceUrl ? `<a href="${media.sourceUrl}" target="_blank" rel="noopener noreferrer">${image}</a>` : image}
      <figcaption>${escapeText(media.credit)}</figcaption>
    </figure>
  `;
}

function setMeta(name, content, attr = "name") {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(pathname = window.location.pathname) {
  const canonicalPath = pathname === "/" ? "/" : `${pathname.replace(/\/$/, "")}/`;
  const canonicalUrl = `https://playdude.club${canonicalPath}`;
  let tag = document.head.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", canonicalUrl);
  setMeta("og:url", canonicalUrl, "property");
}

function renderFatalError(error) {
  console.error("PlayDude failed to render:", error);
  if (!app) return;
  app.innerHTML = `
    <main class="not-found" id="main-content">
      <p class="eyebrow">Render error</p>
      <h1>PlayDude could not load this page.</h1>
      <p>Run <code>npm run dev</code> and check the browser console for details.</p>
    </main>
  `;
}

function pageShell(content, meta = {}) {
  document.title = meta.title ? `${meta.title} - PlayDude` : "PlayDude - Nightlife Intelligence";
  const description =
    meta.description ||
    "Field-sourced nightlife intelligence for Bangkok, Pattaya, Hanoi, Ho Chi Minh City, Jakarta, and Kuala Lumpur.";

  setMeta("description", description);
  setMeta("og:title", document.title, "property");
  setMeta("og:description", description, "property");
  setMeta("og:type", "website", "property");
  setMeta("twitter:card", meta.image ? "summary_large_image" : "summary");
  if (meta.image) {
    const imageUrl = meta.image.startsWith("http") ? meta.image : `https://playdude.club${meta.image}`;
    setMeta("og:image", imageUrl, "property");
    setMeta("twitter:image", imageUrl);
  }
  setCanonical();

  return `
    <div class="responsibility-bar">
      <span>20+ adult nightlife intelligence</span>
      <span>Consent is continuous</span>
      <span>Observed prices are not guarantees</span>
    </div>
    <header class="site-header">
      <a class="brand" href="/" data-link>
        <span class="brand-mark" aria-hidden="true"><b>P</b><i>D</i></span>
        <span class="brand-wordmark">
          <strong>PLAY<span>DUDE</span></strong>
          <small>Nightlife intelligence</small>
        </span>
      </a>
      <nav class="nav" aria-label="Main navigation">
        <a href="/#cities" data-link>Cities</a>
        <a href="/#playbooks" data-link>Playbooks</a>
        <a href="/#venue-intel" data-link>Venue intel</a>
      </nav>
    </header>
    ${content}
    <footer class="site-footer">
      <div class="footer-brand">
        <strong>PlayDude</strong>
        <p>Nightlife Intelligence. Know Before You Go.</p>
      </div>
      <nav class="footer-links" aria-label="Published city guides">
        ${publishedCities.map((city) => `<a href="${cityPath(city)}" data-link>${city.name}</a>`).join("")}
      </nav>
      <p class="footer-note">Adults 20+ only. Respect local law, age limits, consent, venue rules, and photography restrictions. In Thailand, Tourist Police can be reached at 1155; elsewhere, save the relevant local emergency number before going out.</p>
    </footer>
  `;
}

function renderHome() {
  const featuredGuides = [
    { city: getCity("bangkok"), item: getGuide("bangkok", "first-night-playbook") },
    { city: getCity("pattaya"), item: getGuide("pattaya", "first-night-playbook") },
    { city: getCity("hanoi"), item: getGuide("hanoi", "arrival-base-and-cash") },
    { city: getCity("ho-chi-minh-city"), item: getGuide("ho-chi-minh-city", "arrival-stay-and-money") },
    { city: getCity("jakarta"), item: getGuide("jakarta", "arrival-transport-and-cash") },
    { city: getCity("kuala-lumpur"), item: getGuide("kuala-lumpur", "kuala-lumpur-reality-check") }
  ];

  return pageShell(
    `
      <main id="main-content">
        <section class="field-hero" aria-labelledby="home-title">
          <div class="field-hero-copy">
            <p class="eyebrow">Field-sourced nightlife intelligence</p>
            <h1 id="home-title">Know the price.<br>Read the room.<br>Choose the night.</h1>
            <p class="lede">
              PlayDude turns eight commissioned field documents into decision-ready intelligence
              for Bangkok, Pattaya, Hanoi, Ho Chi Minh City, Jakarta, and Kuala Lumpur.
            </p>
            <div class="hero-actions">
              <a class="button primary" href="/#cities" data-link>Choose a city</a>
              <a class="button secondary" href="/#venue-intel" data-link>Search Venue Intel</a>
            </div>
          </div>
          <aside class="live-brief" aria-label="Latest PlayDude field briefing">
            <div class="live-brief-head">
              <span class="live-dot"></span>
              <span>Latest field brief</span>
              <span>May 2026</span>
            </div>
            <p class="brief-city">Bangkok / first night</p>
            <h2>One district. One comparison stop. One final venue.</h2>
            <div class="brief-grid">
              <div><small>Base</small><strong>Asok / Nana</strong></div>
              <div><small>Decision time</small><strong>Before 9 PM</strong></div>
              <div><small>Price rule</small><strong>Ask for the full stack</strong></div>
              <div><small>Emergency</small><strong>Tourist Police 1155</strong></div>
            </div>
            <a href="/cities/bangkok/guides/first-night-playbook/" data-link>Read the complete playbook <span aria-hidden="true">&rarr;</span></a>
          </aside>
        </section>

        <section class="proof-rail" aria-label="PlayDude content coverage">
          <div><strong>${allIntel.length}</strong><span>Venue Intel records</span></div>
          <div><strong>${allGuides.length}</strong><span>decision playbooks</span></div>
          <div><strong>8</strong><span>complete field documents</span></div>
          <div><strong>${publishedCities.length}</strong><span>live city guides</span></div>
        </section>

        <section class="section city-choice" id="cities" aria-labelledby="city-choice-title">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Explore Southeast Asia</p>
              <h2 id="city-choice-title">Six cities.<br>One smarter way to explore.</h2>
            </div>
            <p class="section-intro">Explore Southeast Asia after dark, from Bangkok's vast nightlife districts and Pattaya's compact late-night loop to Vietnam's local scenes, Jakarta's landmark complexes, and Kuala Lumpur's discreet venues. Start with a city, then compare areas, formats, budgets, etiquette, and field notes before you go.</p>
          </div>
          <div class="field-city-grid">
            ${publishedCities.map(renderFieldCityCard).join("")}
          </div>
        </section>

        <section class="section playbooks-home" id="playbooks" aria-labelledby="playbooks-title">
          <div class="section-heading">
            <div>
              <p class="eyebrow">Make the decision first</p>
              <h2 id="playbooks-title">Choose a playbook,<br>not a random venue.</h2>
            </div>
            <p class="section-intro">Every playbook converts raw field knowledge into a route, a budget, a timing window, and a set of stop conditions.</p>
          </div>
          <div class="playbook-card-grid">
            ${featuredGuides.map(({ city, item }, index) => renderGuideCard(city, item, index + 1)).join("")}
          </div>
        </section>

        <section class="intel-section" id="venue-intel" aria-labelledby="intel-title">
          <div class="intel-intro">
            <p class="eyebrow">Venue intelligence</p>
            <h2 id="intel-title">Search the field notes.</h2>
            <p>Filter by city or format. Every number is labeled as an observed price signal, not a permanent promise.</p>
          </div>
          ${renderVenueExplorer(allIntel)}
        </section>

        <section class="final-cta final-cta-v3" aria-labelledby="final-title">
          <p class="eyebrow">The night starts with a decision</p>
          <h2 id="final-title">Choose the city.<br>Then choose the format.</h2>
          <div class="hero-actions">
            <a class="button primary" href="/#cities" data-link>Compare six cities</a>
            <a class="button dark-outline" href="/#venue-intel" data-link>Search all Venue Intel</a>
          </div>
        </section>
      </main>
    `,
    {
      title: "Six-City Nightlife Intelligence",
      description: "Field-sourced Bangkok, Pattaya, Hanoi, Ho Chi Minh City, Jakarta, and Kuala Lumpur guides with observed prices, venue formats, and decision playbooks."
    }
  );
}

function renderFieldCityCard(city) {
  const primaryGuides = city.guides.slice(0, 3);
  const intelCount = allIntel.filter((item) => item.citySlug === city.slug).length;
  return `
    <article class="field-city-card field-city-${city.slug}">
      <div class="field-city-visual">
        <div class="field-city-top">
          <span>${city.country}</span>
          <span>${city.status}</span>
        </div>
        <h3>${city.name}</h3>
      </div>
      <div class="field-city-body">
        <p class="city-main-thing">${city.mainThing}</p>
        <div class="city-stat-row">
          <span><strong>${city.guides.length}</strong> playbooks</span>
          <span><strong>${intelCount}</strong> Venue Intel</span>
          <span><strong>${city.sourceUpdated}</strong> source</span>
        </div>
        <div class="mini-guide-list">
          ${primaryGuides.map((item) => `<a href="${guidePath(city, item)}" data-link><span>${item.kicker}</span>${item.title}</a>`).join("")}
        </div>
        <a class="city-open-link" href="${cityPath(city)}" data-link>Open ${city.name} field guide <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>
  `;
}

function renderGuideCard(city, item, index) {
  const media = guideMedia(city, item);
  return `
    <article class="playbook-card">
      ${renderMediaFigure(media, "card-media playbook-card-media")}
      <div class="playbook-index">${String(index).padStart(2, "0")}</div>
      <p class="eyebrow">${city.name} / ${item.kicker}</p>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <dl>
        <div><dt>Best time</dt><dd>${item.bestTime}</dd></div>
        <div><dt>Budget signal</dt><dd>${item.budget}</dd></div>
      </dl>
      <a href="${guidePath(city, item)}" data-link>Open playbook <span aria-hidden="true">&rarr;</span></a>
    </article>
  `;
}

function getVenueTypes(items) {
  const available = new Set(items.map((item) => item.type));
  return VENUE_TYPES.filter((type) => available.has(type));
}

function renderVenueExplorer(items, citySlug = "all") {
  const types = getVenueTypes(items);
  return `
    <div class="venue-explorer" data-explorer data-city-scope="${citySlug}">
      <div class="explorer-controls">
        <label class="search-control">
          <span>Search</span>
          <input type="search" data-venue-search placeholder="Venue, district, or type" autocomplete="off" />
        </label>
        ${citySlug === "all" ? `
          <label>
            <span>City</span>
            <select data-city-filter>
              <option value="all">All published cities</option>
              ${publishedCities.map((city) => `<option value="${city.slug}">${city.name}</option>`).join("")}
            </select>
          </label>
        ` : ""}
        <label>
          <span>Type</span>
          <select data-type-filter>
            <option value="all">All types</option>
            ${types.map((type) => `<option value="${escapeText(type)}">${type}</option>`).join("")}
          </select>
        </label>
        <div class="result-counter" aria-live="polite"><strong data-result-count>${items.length}</strong><span>matching profiles</span></div>
      </div>
      <div class="venue-result-grid" data-venue-results>
        ${items.slice(0, 12).map(renderVenueCard).join("")}
      </div>
      <button class="load-more" type="button" data-load-more ${items.length <= 12 ? "hidden" : ""}>Show more profiles</button>
    </div>
  `;
}

function renderVenueCard(item) {
  const city = getCity(item.citySlug) || publishedCities.find((candidate) => candidate.venues.some((venue) => venue.slug === item.slug));
  const media = venueMedia({ ...item, cityName: city?.name || item.cityName });
  return `
    <article class="venue-intel-card">
      ${renderMediaFigure(media, "card-media venue-card-media")}
      <div class="venue-card-top">
        <span>${city?.name || "Thailand"}</span>
        <span>${item.type}</span>
      </div>
      <h3>${item.name}</h3>
      <p class="venue-location">${item.area}</p>
      <p>${item.verdict || item.summary}</p>
      <div class="price-chip"><span>Price signal</span><strong>${item.priceSignal}</strong></div>
      <div class="venue-card-foot">
        <span>${item.mergedRecordCount > 1 ? `${item.mergedRecordCount} field records merged` : `Source: ${item.sourceUpdated}`}</span>
        <a href="${venuePath(city, item)}" data-link>Open profile <span aria-hidden="true">&rarr;</span></a>
      </div>
    </article>
  `;
}

function renderCityGuide(city) {
  if (city.status !== "Field guide live") return renderPreviewCity(city);
  const cityVenueItems = allIntel.filter((item) => item.citySlug === city.slug);

  return pageShell(
    `
      <main id="main-content">
        <article class="city-field-page">
          <section class="city-field-hero city-field-${city.slug}">
            <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/" data-link>Home</a><span>/</span><span>${city.name}</span></nav>
            <div class="city-field-hero-grid">
              <div>
                <p class="eyebrow">${city.country} / ${city.status}</p>
                <h1>${city.name}<br>Nightlife Intelligence</h1>
                <p class="lede">${city.summary}</p>
              </div>
              <aside class="city-verdict-box">
                <span>The main thing</span>
                <h2>${city.mainThing}</h2>
                <dl>
                  <div><dt>Start area</dt><dd>${city.firstNightArea}</dd></div>
                  <div><dt>Timing</dt><dd>${city.arrivalWindow}</dd></div>
                  <div><dt>Cost signal</dt><dd>${city.costSignal}</dd></div>
                  <div><dt>Source month</dt><dd>${city.sourceUpdated}</dd></div>
                </dl>
              </aside>
            </div>
          </section>

          <section class="planning-rail" aria-label="${city.name} planning essentials">
            ${city.planning.map((item) => `<div><span>${item.label}</span><strong>${item.value}</strong><small>${item.note}</small></div>`).join("")}
          </section>

          <section class="section city-playbooks" aria-labelledby="city-playbooks-title">
            <div class="section-heading">
              <div><p class="eyebrow">Decision playbooks</p><h2 id="city-playbooks-title">Choose the system<br>before the venue.</h2></div>
              <p class="section-intro">Each guide contains the timing window, observed prices, bill structure, watch-outs, and a usable checklist.</p>
            </div>
            <div class="playbook-card-grid">
              ${city.guides.map((item, index) => renderGuideCard(city, item, index + 1)).join("")}
            </div>
          </section>

          <section class="section district-section" aria-labelledby="district-title">
            <div class="section-heading">
              <div><p class="eyebrow">District intelligence</p><h2 id="district-title">Where the formats live.</h2></div>
              <p class="section-intro">A venue makes more sense when you understand the surrounding district and the alternatives nearby.</p>
            </div>
            <div class="district-grid">${city.areas.map(renderAreaCard).join("")}</div>
          </section>

          <section class="intel-section city-intel" aria-labelledby="city-venue-title">
            <div class="intel-intro">
              <p class="eyebrow">${city.name} directory</p>
              <h2 id="city-venue-title">${cityVenueItems.length} Venue Intel records.</h2>
              <p>Search by venue, district, or format. Every card retains its source month.</p>
            </div>
            ${renderVenueExplorer(cityVenueItems, city.slug)}
          </section>

          <section class="source-disclosure">
            <div><p class="eyebrow">Source disclosure</p><h2>Field intelligence, not a live price feed.</h2></div>
            <p>Primary ${city.name} material was collected in ${city.sourceUpdated}. Hours, staff, menus, and policies change quickly. Official entry and safety information was cross-checked in July 2026; individual venue prices remain observed field-note ranges.</p>
          </section>
        </article>
      </main>
    `,
    {
      title: `${city.name} Nightlife Intelligence`,
      description: `${city.name} field guide with ${city.guides.length} decision playbooks and ${cityVenueItems.length} Venue Intel records, including observed prices, timing, and common bill traps.`
    }
  );
}

function renderAreaCard(area) {
  return `
    <article class="district-card">
      <p class="eyebrow">${area.confidence} confidence</p>
      <h3>${area.name}</h3>
      <p class="district-best">${area.bestFor}</p>
      <dl>
        <div><dt>Atmosphere</dt><dd>${area.atmosphere}</dd></div>
        <div><dt>Price</dt><dd>${area.price}</dd></div>
      </dl>
      <p>${area.know}</p>
    </article>
  `;
}

function renderPreviewCity(city) {
  return pageShell(
    `
      <main class="not-found preview-page" id="main-content">
        <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/" data-link>Home</a><span>/</span><span>${city.name}</span></nav>
        <p class="eyebrow">${city.country} / Preview</p>
        <h1>${city.name} stays in the roadmap.</h1>
        <p>${city.summary}</p>
        <div class="publication-note">
          <h2>No placeholder venues.</h2>
          <p>${city.mainThing}</p>
        </div>
        <a class="button primary" href="/" data-link>Return to live field guides</a>
      </main>
    `,
    { title: `${city.name} Preview`, description: `${city.name} remains in the PlayDude roadmap. Venue intelligence is not yet published.` }
  );
}

function renderGuidePage(city, item) {
  const relatedVenues = item.venueSlugs.map((slug) => getVenue(city.slug, slug)).filter(Boolean);
  const media = guideMedia(city, item);

  return pageShell(
    `
      <main id="main-content">
        <article class="guide-v3">
          <header class="guide-v3-hero">
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="/" data-link>Home</a><span>/</span><a href="${cityPath(city)}" data-link>${city.name}</a><span>/</span><span>Playbook</span>
            </nav>
            ${renderMediaFigure(media, "article-hero-media guide-hero-media", "eager")}
            <div class="guide-title-grid">
              <div>
                <p class="eyebrow">${city.name} / ${item.kicker}</p>
                <h1>${item.title}</h1>
                <p class="lede">${item.summary}</p>
              </div>
              <aside class="guide-decision-box">
                <span>PlayDude verdict</span>
                <strong>${item.verdict}</strong>
                <dl>
                  <div><dt>Best time</dt><dd>${item.bestTime}</dd></div>
                  <div><dt>Budget</dt><dd>${item.budget}</dd></div>
                  <div><dt>Source</dt><dd>${item.sourceUpdated}</dd></div>
                </dl>
              </aside>
            </div>
          </header>

          <section class="guide-section-grid">
            ${item.sections.map((section, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><h2>${section.title}</h2><p>${section.body}</p></div></article>`).join("")}
          </section>

          <section class="checklist-panel">
            <div><p class="eyebrow">Before you go</p><h2>Five checks that protect the night.</h2></div>
            <ol>${item.checklist.map((check) => `<li>${check}</li>`).join("")}</ol>
          </section>

          ${item.sources?.length ? `
            <section class="guide-sources" aria-labelledby="guide-sources-title">
              <div><p class="eyebrow">Source trail</p><h2 id="guide-sources-title">What changed this edition.</h2></div>
              <div class="guide-source-list">
                ${item.sources.map((source) => `
                  <article>
                    <span>${source.date}</span>
                    <h3><a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.title} <span aria-hidden="true">&nearr;</span></a></h3>
                    <p>${source.note}</p>
                  </article>
                `).join("")}
              </div>
            </section>
          ` : ""}

          ${relatedVenues.length ? `
            <section class="related-venues">
              <div class="section-heading compact-heading">
                <div><p class="eyebrow">Related profiles</p><h2>Use the playbook on real venues.</h2></div>
                <p class="section-intro">These profiles carry the source month and observed price signal into the next decision.</p>
              </div>
              <div class="venue-result-grid">${relatedVenues.map((venue) => renderVenueCard({ ...venue, citySlug: city.slug, cityName: city.name })).join("")}</div>
            </section>
          ` : `
            <section class="publication-note guide-note"><h2>No named venue is published for this guide.</h2><p>The source material raised age-verification concerns around specific businesses. PlayDude keeps the district intelligence and excludes those businesses.</p></section>
          `}

          <nav class="article-nav" aria-label="Related pages">
            <a href="${cityPath(city)}" data-link>Back to ${city.name}</a>
            <a href="/#playbooks" data-link>All playbooks</a>
          </nav>
        </article>
      </main>
    `,
    { title: `${item.title}, ${city.name}`, description: `${item.summary} Source updated ${item.sourceUpdated}.`, image: media.src }
  );
}

function renderVenueProfile(city, item) {
  const media = venueMedia({ ...item, citySlug: city.slug, cityName: city.name });
  const sourceLabel = item.mergedRecordCount > 1
    ? `${item.mergedRecordCount} records merged`
    : item.sourceUpdated;
  return pageShell(
    `
      <main id="main-content">
        <article class="venue-profile-v3">
          <header class="venue-profile-hero">
            <nav class="breadcrumbs" aria-label="Breadcrumb">
              <a href="/" data-link>Home</a><span>/</span><a href="${cityPath(city)}" data-link>${city.name}</a><span>/</span><span>${item.name}</span>
            </nav>
            ${renderMediaFigure(media, "article-hero-media venue-hero-media", "eager")}
            <div class="venue-profile-title">
              <div>
                <p class="eyebrow">${item.type} / ${item.area}</p>
                <h1>${item.name}</h1>
                <p class="lede">${item.summary}</p>
              </div>
              <aside class="profile-signal">
                <span>Decision signal</span>
                <strong>${item.verdict}</strong>
                <small>${item.confidence} / ${sourceLabel}</small>
              </aside>
            </div>
          </header>

          <section class="profile-facts">
            <div><span>Type</span><strong>${item.type}</strong></div>
            <div><span>Best time</span><strong>${item.timing}</strong></div>
            <div><span>Price signal</span><strong>${item.priceSignal}</strong></div>
            <div><span>Source</span><strong>${sourceLabel}</strong></div>
          </section>

          <section class="profile-content-grid">
            <div class="price-ledger">
              <p class="eyebrow">Observed price ledger</p>
              <h2>Know every layer.</h2>
              <div class="ledger-table">
                ${item.priceItems.length
                  ? item.priceItems.map((price) => `<div><span>${price.label}</span><strong>${price.value}</strong></div>`).join("")
                  : `<div><span>Current menu</span><strong>Verify at venue</strong></div>`}
              </div>
              <p class="ledger-disclaimer">Observed ranges are historical field intelligence, not guaranteed current quotes.</p>
            </div>
            <div class="profile-expectation">
              <p class="eyebrow">Before committing</p>
              <h2>At a glance.</h2>
              <dl>
                <div><dt>Best for</dt><dd>${item.bestFor.join(", ") || item.type}</dd></div>
                ${item.notIdealFor.length ? `<div><dt>Not ideal for</dt><dd>${item.notIdealFor.join(", ")}</dd></div>` : ""}
              </dl>
            </div>
          </section>

          ${item.sourceEntries?.length ? `
            <section class="merged-notes-panel" aria-labelledby="merged-notes-title">
              <div class="merged-notes-heading">
                <p class="eyebrow">Source preservation</p>
                <h2 id="merged-notes-title">Merged field notes.</h2>
                <p>${item.mergedRecordCount > 1 ? "Duplicate listings have been combined into this single venue profile. Every distinct source note remains below." : "The source note behind this venue profile is retained below."}</p>
              </div>
              <div class="merged-note-grid">
                ${item.sourceEntries.map((entry) => `
                  <article class="merged-note-card">
                    <div class="merged-note-meta">
                      <span>${entry.source}</span>
                      <span>${entry.page ? `PDF p.${entry.page}` : entry.status}</span>
                    </div>
                    <strong>${entry.price}</strong>
                    <p>${entry.note}</p>
                    ${entry.url ? `<a href="${entry.url}" target="_blank" rel="noopener noreferrer">Source-listed link <span aria-hidden="true">&nearr;</span></a>` : ""}
                  </article>
                `).join("")}
              </div>
            </section>
          ` : ""}

          <section class="profile-links">
            <div>
              <p class="eyebrow">External check</p>
              <h2>Check the latest details.</h2>
              <p>Confirm current prices and opening hours before you go.</p>
            </div>
            <div class="external-actions">
              ${item.officialUrl ? `<a class="button primary" href="${item.officialUrl}" target="_blank" rel="noopener noreferrer">Official site</a>` : ""}
              ${item.mapUrl ? `<a class="button dark-outline" href="${item.mapUrl}" target="_blank" rel="noopener noreferrer">Open map</a>` : ""}
              ${!item.officialUrl && !item.mapUrl ? `<span class="no-link-note">No verified external link stored.</span>` : ""}
            </div>
          </section>

          <section class="responsible-use-note">
            <strong>PlayDude boundary</strong>
            <p>Adults 20+ only. Confirm age and identity. Consent can be withdrawn at any time. A drink, venue fee, or private agreement never overrides a person's boundaries. Use protection, avoid illegal drugs, and contact Tourist Police 1155 for serious disputes.</p>
          </section>

          <nav class="article-nav" aria-label="Related pages">
            <a href="${cityPath(city)}" data-link>Back to ${city.name} directory</a>
            <a href="/#venue-intel" data-link>Search all venues</a>
          </nav>
        </article>
      </main>
    `,
    { title: `${item.name}, ${city.name}`, description: `${item.name}: ${item.verdict} Observed price signal: ${item.priceSignal}. Source ${item.sourceUpdated}.`, image: media.src }
  );
}

function renderNotFound() {
  return pageShell(
    `
      <main class="not-found" id="main-content">
        <p class="eyebrow">Guide not available</p>
        <h1>This intelligence page is not published.</h1>
        <p>Return to the live Bangkok and Pattaya field guides.</p>
        <a class="button primary" href="/" data-link>Go home</a>
      </main>
    `,
    { title: "Page Not Found" }
  );
}

function bindVenueExplorers() {
  document.querySelectorAll("[data-explorer]").forEach((explorer) => {
    const scope = explorer.dataset.cityScope || "all";
    const baseItems = scope === "all" ? allIntel : allIntel.filter((item) => item.citySlug === scope);
    const search = explorer.querySelector("[data-venue-search]");
    const cityFilter = explorer.querySelector("[data-city-filter]");
    const typeFilter = explorer.querySelector("[data-type-filter]");
    const results = explorer.querySelector("[data-venue-results]");
    const count = explorer.querySelector("[data-result-count]");
    const loadMore = explorer.querySelector("[data-load-more]");
    let visible = 12;

    const update = () => {
      const query = search?.value.trim().toLowerCase() || "";
      const selectedCity = cityFilter?.value || scope;
      const selectedType = typeFilter?.value || "all";
      const filtered = baseItems.filter((item) => {
        const haystack = [item.name, item.area, item.type, item.summary, item.verdict].join(" ").toLowerCase();
        const matchesSearch = !query || haystack.includes(query);
        const matchesCity = selectedCity === "all" || item.citySlug === selectedCity;
        const matchesType = selectedType === "all" || item.type === selectedType;
        return matchesSearch && matchesCity && matchesType;
      });

      if (results) {
        results.innerHTML = filtered.length
          ? filtered.slice(0, visible).map(renderVenueCard).join("")
          : `<div class="empty-results"><h3>No profiles match those filters.</h3><p>Try another district, venue name, or format.</p></div>`;
      }
      if (count) count.textContent = filtered.length;
      if (loadMore) {
        loadMore.hidden = filtered.length <= visible;
        loadMore.onclick = () => {
          visible += 12;
          update();
        };
      }
    };

    [search, cityFilter, typeFilter].filter(Boolean).forEach((control) => {
      control.addEventListener(control.tagName === "INPUT" ? "input" : "change", () => {
        visible = 12;
        update();
      });
    });
    update();
  });
}

function renderRoute() {
  if (!app) throw new Error("#app is missing from index.html");

  const path = window.location.pathname;
  const cityMatch = path.match(/^\/cities\/([^/]+)\/?$/);
  const guideMatch = path.match(/^\/cities\/([^/]+)\/guides\/([^/]+)\/?$/);
  const venueMatch = path.match(/^\/cities\/([^/]+)\/venues\/([^/]+)\/?$/);

  if (path === "/") {
    app.innerHTML = renderHome();
  } else if (guideMatch) {
    const city = getCity(guideMatch[1]);
    const item = getGuide(guideMatch[1], guideMatch[2]);
    app.innerHTML = city && item ? renderGuidePage(city, item) : renderNotFound();
  } else if (venueMatch) {
    const city = getCity(venueMatch[1]);
    const item = allIntel.find((candidate) => candidate.citySlug === venueMatch[1] && candidate.slug === venueMatch[2]) || getVenue(venueMatch[1], venueMatch[2]);
    app.innerHTML = city && item ? renderVenueProfile(city, item) : renderNotFound();
  } else if (cityMatch) {
    const city = getCity(cityMatch[1]);
    app.innerHTML = city ? renderCityGuide(city) : renderNotFound();
  } else {
    app.innerHTML = renderNotFound();
  }

  bindVenueExplorers();

  const hashTarget = window.location.hash ? document.querySelector(window.location.hash) : null;
  if (hashTarget) hashTarget.scrollIntoView({ behavior: "auto", block: "start" });
  else window.scrollTo({ top: 0, behavior: "auto" });
}

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const link = target.closest("a[data-link]");
  if (!link || link.origin !== window.location.origin) return;
  event.preventDefault();
  window.history.pushState({}, "", link.href);
  renderRoute();
});

window.addEventListener("popstate", () => {
  try {
    renderRoute();
  } catch (error) {
    renderFatalError(error);
  }
});

try {
  renderRoute();
} catch (error) {
  renderFatalError(error);
}
