import { cities, getCity, getVenue } from "./data.js";

const app = document.querySelector("#app");

function cityPath(city) {
  return `/cities/${city.slug}/`;
}

function venuePath(city, venue) {
  return `/cities/${city.slug}/venues/${venue.slug}/`;
}

function pageShell(content, meta = {}) {
  document.title = meta.title ? `${meta.title} - PlayDude` : "PlayDude - Nightlife Intelligence";

  const description =
    meta.description ||
    "PlayDude is Nightlife Intelligence for visitors who want to know before they go.";
  setMeta("description", description);
  setMeta("og:title", document.title, "property");
  setMeta("og:description", description, "property");

  return `
    <header class="site-header">
      <a class="brand" href="/" data-link>
        <span class="brand-mark">PD</span>
        <span>
          <strong>PlayDude</strong>
          <small>Nightlife Intelligence</small>
        </span>
      </a>
      <nav class="nav" aria-label="Main navigation">
        ${cities.map((city) => `<a href="${cityPath(city)}" data-link>${city.name}</a>`).join("")}
      </nav>
    </header>
    ${content}
    <footer class="site-footer">
      <p><strong>PlayDude</strong> helps you know before you go.</p>
      <p>Editorial MVP. No membership, login, payment, or ads.</p>
    </footer>
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

function renderHome() {
  return pageShell(
    `
      <main>
        <section class="hero editorial-band">
          <div class="hero-copy">
            <p class="eyebrow">Nightlife Intelligence</p>
            <h1>Know Before You Go.</h1>
            <p class="lede">
              PlayDude helps you choose the right nightlife area, understand the venue mood,
              and avoid walking into the wrong night blind.
            </p>
            <div class="hero-actions">
              <a class="button primary" href="/cities/bangkok/" data-link>Start with Bangkok</a>
              <a class="button secondary" href="#cities">Browse cities</a>
            </div>
          </div>
          <aside class="intelligence-panel" aria-label="PlayDude editorial promise">
            <span>Founder-edited</span>
            <strong>70% city guide. 30% visitor reality check.</strong>
            <p>Clear, practical, non-sensational nightlife context for first-time and returning visitors.</p>
          </aside>
        </section>

        <section class="section" aria-labelledby="what-playdude-does">
          <div class="section-heading">
            <p class="eyebrow">The purpose</p>
            <h2 id="what-playdude-does">Reduce uncertainty before the night starts.</h2>
          </div>
          <div class="feature-grid">
            <article>
              <h3>City context</h3>
              <p>Understand the nightlife map before choosing a district.</p>
            </article>
            <article>
              <h3>Area fit</h3>
              <p>Match the neighborhood to your mood, budget, timing, and comfort level.</p>
            </article>
            <article>
              <h3>Venue expectations</h3>
              <p>Know the atmosphere, crowd, price signal, timing, and entry notes before arriving.</p>
            </article>
          </div>
        </section>

        <section class="section" id="cities" aria-labelledby="city-guides">
          <div class="section-heading">
            <p class="eyebrow">Initial guides</p>
            <h2 id="city-guides">City landing pages</h2>
          </div>
          <div class="city-grid">
            ${cities.map(renderCityCard).join("")}
          </div>
        </section>
      </main>
    `,
    {
      title: "Nightlife Intelligence",
      description: "PlayDude helps nightlife visitors know before they go."
    }
  );
}

function renderCityCard(city) {
  return `
    <article class="city-card">
      <p class="eyebrow">${city.country}</p>
      <h3>${city.name}</h3>
      <p>${city.summary}</p>
      <dl>
        <div>
          <dt>First-night area</dt>
          <dd>${city.firstNightArea}</dd>
        </div>
        <div>
          <dt>Arrival window</dt>
          <dd>${city.arrivalWindow}</dd>
        </div>
      </dl>
      <a href="${cityPath(city)}" data-link>Read the guide</a>
    </article>
  `;
}

function renderCityGuide(city) {
  return pageShell(
    `
      <main>
        <article class="guide">
          <section class="city-hero">
            <div>
              <p class="eyebrow">${city.country} nightlife guide</p>
              <h1>${city.name} Nightlife Guide</h1>
              <p class="lede">${city.summary}</p>
            </div>
            <div class="quick-verdict">
              <h2>Quick verdict</h2>
              <dl>
                <div><dt>Best for</dt><dd>${city.bestFor.join(", ")}</dd></div>
                <div><dt>Not ideal for</dt><dd>${city.notIdealFor.join(", ")}</dd></div>
                <div><dt>Best first-night area</dt><dd>${city.firstNightArea}</dd></div>
                <div><dt>Typical cost</dt><dd>${city.costSignal}</dd></div>
                <div><dt>Arrival window</dt><dd>${city.arrivalWindow}</dd></div>
              </dl>
            </div>
          </section>

          <section class="article-section">
            <h2>Main thing to know</h2>
            <p>${city.mainThing}</p>
          </section>

          <section class="article-section">
            <h2>Nightlife areas</h2>
            <div class="area-list">
              ${city.areas.map(renderArea).join("")}
            </div>
          </section>

          <section class="article-section split-section">
            <div>
              <h2>First-night plan</h2>
              <p>
                Start in ${city.firstNightArea} around ${city.arrivalWindow}. Choose one composed first stop,
                keep a second venue nearby, and decide before the night gets busy whether you want a louder,
                calmer, or more premium route.
              </p>
            </div>
            <div>
              <h2>Budget and etiquette</h2>
              <p>
                Treat prices as signals, not guarantees. Check cover charges, minimum spends, dress expectations,
                and transport home before committing to a late stop.
              </p>
            </div>
          </section>

          <section class="article-section">
            <h2>Venue profiles</h2>
            <div class="venue-list">
              ${city.venues.map((venue) => renderVenuePreview(city, venue)).join("")}
            </div>
          </section>
        </article>
      </main>
    `,
    {
      title: `${city.name} Nightlife Guide`,
      description: `${city.name} nightlife guide from PlayDude: areas, first-night plan, venue expectations, and practical notes.`
    }
  );
}

function renderArea(area) {
  return `
    <article class="area-item">
      <h3>${area.name}</h3>
      <dl>
        <div><dt>Best for</dt><dd>${area.bestFor}</dd></div>
        <div><dt>Atmosphere</dt><dd>${area.atmosphere}</dd></div>
        <div><dt>Visitor confidence</dt><dd>${area.confidence}</dd></div>
        <div><dt>Price signal</dt><dd>${area.price}</dd></div>
      </dl>
      <p>${area.know}</p>
    </article>
  `;
}

function renderVenuePreview(city, venue) {
  return `
    <article class="venue-preview">
      <div>
        <p class="eyebrow">${venue.area} / ${venue.type}</p>
        <h3>${venue.name}</h3>
        <p>${venue.summary}</p>
      </div>
      <a href="${venuePath(city, venue)}" data-link>Open profile</a>
    </article>
  `;
}

function renderVenueProfile(city, venue) {
  return pageShell(
    `
      <main>
        <article class="guide">
          <section class="city-hero">
            <div>
              <p class="eyebrow">${city.name} venue profile</p>
              <h1>${venue.name}</h1>
              <p class="lede">${venue.summary}</p>
            </div>
            <div class="quick-verdict">
              <h2>Quick verdict</h2>
              <dl>
                <div><dt>Best for</dt><dd>${venue.bestFor.join(", ")}</dd></div>
                <div><dt>Not ideal for</dt><dd>${venue.notIdealFor.join(", ")}</dd></div>
                <div><dt>Venue type</dt><dd>${venue.type}</dd></div>
                <div><dt>Area</dt><dd>${venue.area}</dd></div>
                <div><dt>Price signal</dt><dd>${venue.priceSignal}</dd></div>
                <div><dt>Best time</dt><dd>${venue.timing}</dd></div>
                <div><dt>Last verified</dt><dd>${venue.lastVerified}</dd></div>
              </dl>
            </div>
          </section>

          <section class="article-section split-section">
            <div>
              <h2>What to expect</h2>
              <p>${venue.atmosphere}</p>
            </div>
            <div>
              <h2>Crowd</h2>
              <p>${venue.crowd}</p>
            </div>
          </section>

          <section class="article-section split-section">
            <div>
              <h2>Location context</h2>
              <p>
                ${venue.name} sits in ${venue.area}, making it part of the broader ${city.name}
                nightlife route. Use the city guide to decide whether this area fits your night.
              </p>
            </div>
            <div>
              <h2>Entry expectations</h2>
              <p>${venue.entryNotes}</p>
            </div>
          </section>

          <section class="article-section">
            <h2>Practical tips</h2>
            <ul class="tip-list">
              ${venue.tips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
          </section>

          <nav class="article-nav" aria-label="Related pages">
            <a href="${cityPath(city)}" data-link>Back to ${city.name} guide</a>
            <a href="/" data-link>All PlayDude cities</a>
          </nav>
        </article>
      </main>
    `,
    {
      title: `${venue.name}, ${city.name}`,
      description: `${venue.name} venue profile: what to expect, crowd, price signal, timing, and entry notes.`
    }
  );
}

function renderNotFound() {
  return pageShell(
    `
      <main class="not-found">
        <p class="eyebrow">Page not found</p>
        <h1>This PlayDude guide is not published yet.</h1>
        <p>Return to the city guides and choose one of the MVP destinations.</p>
        <a class="button primary" href="/" data-link>Go home</a>
      </main>
    `,
    { title: "Page Not Found" }
  );
}

function renderRoute() {
  const path = window.location.pathname;
  const cityMatch = path.match(/^\/cities\/([^/]+)\/?$/);
  const venueMatch = path.match(/^\/cities\/([^/]+)\/venues\/([^/]+)\/?$/);

  if (path === "/") {
    app.innerHTML = renderHome();
  } else if (cityMatch) {
    const city = getCity(cityMatch[1]);
    app.innerHTML = city ? renderCityGuide(city) : renderNotFound();
  } else if (venueMatch) {
    const city = getCity(venueMatch[1]);
    const venue = getVenue(venueMatch[1], venueMatch[2]);
    app.innerHTML = city && venue ? renderVenueProfile(city, venue) : renderNotFound();
  } else {
    app.innerHTML = renderNotFound();
  }

  window.scrollTo({ top: 0, behavior: "instant" });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-link]");
  if (!link || link.origin !== window.location.origin) return;

  event.preventDefault();
  window.history.pushState({}, "", link.href);
  renderRoute();
});

window.addEventListener("popstate", renderRoute);
renderRoute();
