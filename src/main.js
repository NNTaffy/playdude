import { articles, cities, getArticle, getCity, getVenue } from "./data.js";

const app = document.querySelector("#app");

function renderFatalError(error) {
  console.error("PlayDude failed to render:", error);
  if (!app) return;

  app.innerHTML = `
    <main class="not-found">
      <p class="eyebrow">Render error</p>
      <h1>PlayDude could not load this page.</h1>
      <p>Please run the project with <code>npm run dev</code> and check the browser console for details.</p>
    </main>
  `;
}

function cityPath(city) {
  return `/cities/${city.slug}/`;
}

function venuePath(city, venue) {
  return `/cities/${city.slug}/venues/${venue.slug}/`;
}

function articlePath(article) {
  return `/articles/${article.slug}/`;
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
        <a href="/" data-link>Home</a>
        ${cities.map((city) => `<a href="${cityPath(city)}" data-link>${city.name}</a>`).join("")}
        <a href="${articlePath(articles[0])}" data-link>Starter Guide</a>
      </nav>
    </header>
    ${content}
    <footer class="site-footer">
      <p><strong>PlayDude</strong> helps you know before you go.</p>
      <p>Editorial MVP for Thailand and Japan. No membership, login, payment, or ads.</p>
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
  const featuredArticle = articles[0];

  return pageShell(
    `
      <main>
        <section class="hero editorial-band">
          <div class="hero-copy">
            <p class="eyebrow">Nightlife Intelligence</p>
            <h1>Know Before You Go.</h1>
            <p class="lede">
              PlayDude is a Nightlife Intelligence website for readers who want fewer surprises before visiting
              nightlife venues. It helps you understand areas, venue mood, timing, etiquette, price signals, and
              common mistakes before the night starts.
            </p>
            <p class="hero-note">
              Not a general travel blog. Not an adult website. Current focus: Thailand and Japan nightlife guides,
              starting with Bangkok, Pattaya, Tokyo, and Osaka.
            </p>
            <div class="hero-actions">
              <a class="button primary" href="${articlePath(featuredArticle)}" data-link>Read the Bangkok starter guide</a>
              <a class="button secondary" href="#cities">Browse city guides</a>
            </div>
          </div>
          <aside class="intelligence-panel" aria-label="PlayDude editorial promise">
            <span>Founder-edited</span>
            <strong>Practical nightlife context before you arrive.</strong>
            <p>70% composed city guide, 30% visitor reality check: calm, specific, and built to reduce uncertainty.</p>
          </aside>
        </section>

        <section class="section" aria-labelledby="what-playdude-does">
          <div class="section-heading">
            <p class="eyebrow">What PlayDude does</p>
            <h2 id="what-playdude-does">A clearer read on the night before you commit.</h2>
          </div>
          <div class="feature-grid">
            <article>
              <h3>City context</h3>
              <p>See how each nightlife city is organized, which districts matter, and where a first night should start.</p>
            </article>
            <article>
              <h3>Venue expectations</h3>
              <p>Understand atmosphere, crowd, timing, price signal, and entry expectations before walking in.</p>
            </article>
            <article>
              <h3>Editorial judgment</h3>
              <p>Get calm guidance that explains tradeoffs rather than chasing hype, gossip, or generic top-ten lists.</p>
            </article>
          </div>
        </section>

        <section class="section article-feature" aria-labelledby="featured-guide">
          <div>
            <p class="eyebrow">${featuredArticle.category}</p>
            <h2 id="featured-guide">${featuredArticle.title}</h2>
            <p>${featuredArticle.dek}</p>
          </div>
          <a class="button dark" href="${articlePath(featuredArticle)}" data-link>Open article</a>
        </section>

        <section class="section" id="cities" aria-labelledby="city-guides">
          <div class="section-heading">
            <p class="eyebrow">Thailand and Japan</p>
            <h2 id="city-guides">Current city guides</h2>
          </div>
          <div class="city-grid">
            ${cities.map(renderCityCard).join("")}
          </div>
        </section>
      </main>
    `,
    {
      title: "Nightlife Intelligence",
      description:
        "PlayDude is a Nightlife Intelligence website for Thailand and Japan that helps visitors know before they go."
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
          <dt>Best first-night area</dt>
          <dd>${city.firstNightArea}</dd>
        </div>
        <div>
          <dt>Best for</dt>
          <dd>${city.bestFor.slice(0, 3).join(", ")}</dd>
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
              <h2>PlayDude quick verdict</h2>
              <p>${city.verdict}</p>
              <dl>
                <div><dt>First-night area</dt><dd>${city.firstNightArea}</dd></div>
                <div><dt>Cost signal</dt><dd>${city.costSignal}</dd></div>
                <div><dt>Arrival window</dt><dd>${city.arrivalWindow}</dd></div>
              </dl>
            </div>
          </section>

          <section class="article-section">
            <p class="eyebrow">City overview</p>
            <h2>How ${city.name} works at night</h2>
            <p>${city.overview}</p>
          </section>

          <section class="article-section">
            <p class="eyebrow">Best for</p>
            <h2>Who this city suits</h2>
            <div class="pill-list">
              ${city.bestFor.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </section>

          <section class="article-section">
            <p class="eyebrow">Main nightlife areas</p>
            <h2>Start with the district</h2>
            <div class="area-list">
              ${city.areas.map(renderArea).join("")}
            </div>
          </section>

          <section class="article-section split-section">
            <div>
              <p class="eyebrow">What to expect</p>
              <h2>The practical read</h2>
              <ul class="tip-list">
                ${city.whatToExpect.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div>
              <p class="eyebrow">Common mistakes</p>
              <h2>What trips visitors up</h2>
              <ul class="tip-list">
                ${city.commonMistakes.map((item) => `<li>${item}</li>`).join("")}
              </ul>
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
              <h2>Venue profiles</h2>
              <p>
                These sample profiles show how PlayDude will explain venue fit, crowd, timing, pricing signals,
                and entry expectations without turning the site into a review free-for-all.
              </p>
            </div>
          </section>

          <section class="article-section">
            <div class="venue-list">
              ${city.venues.map((venue) => renderVenuePreview(city, venue)).join("")}
            </div>
          </section>
        </article>
      </main>
    `,
    {
      title: `${city.name} Nightlife Guide`,
      description: `${city.name} nightlife guide from PlayDude: overview, best areas, what to expect, common mistakes, and quick verdict.`
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

function renderEditorialArticle(article) {
  const city = getCity(article.citySlug);

  return pageShell(
    `
      <main>
        <article class="guide editorial-article">
          <header class="article-hero">
            <p class="eyebrow">${article.category} / ${article.readTime}</p>
            <h1>${article.title}</h1>
            <p class="lede">${article.dek}</p>
            <dl class="article-meta">
              <div><dt>Updated</dt><dd>${article.updated}</dd></div>
              <div><dt>City</dt><dd>${city ? city.name : "Bangkok"}</dd></div>
              <div><dt>Purpose</dt><dd>Reduce uncertainty before going out</dd></div>
            </dl>
          </header>

          <section class="article-section article-body">
            ${article.sections
              .map(
                (section) => `
                  <section>
                    <h2>${section.heading}</h2>
                    <p>${section.body}</p>
                  </section>
                `
              )
              .join("")}
          </section>

          <aside class="quick-verdict article-tips">
            <h2>PlayDude quick checks</h2>
            <ul class="tip-list">
              ${article.quickTips.map((tip) => `<li>${tip}</li>`).join("")}
            </ul>
          </aside>

          <nav class="article-nav" aria-label="Related pages">
            ${city ? `<a href="${cityPath(city)}" data-link>Read the ${city.name} city guide</a>` : ""}
            <a href="/" data-link>Back to PlayDude home</a>
          </nav>
        </article>
      </main>
    `,
    {
      title: article.title,
      description: article.dek
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
  if (!app) {
    console.error("PlayDude could not find #app in index.html.");
    return;
  }

  const path = window.location.pathname;
  const cityMatch = path.match(/^\/cities\/([^/]+)\/?$/);
  const venueMatch = path.match(/^\/cities\/([^/]+)\/venues\/([^/]+)\/?$/);
  const articleMatch = path.match(/^\/articles\/([^/]+)\/?$/);

  if (path === "/") {
    app.innerHTML = renderHome();
  } else if (cityMatch) {
    const city = getCity(cityMatch[1]);
    app.innerHTML = city ? renderCityGuide(city) : renderNotFound();
  } else if (venueMatch) {
    const city = getCity(venueMatch[1]);
    const venue = getVenue(venueMatch[1], venueMatch[2]);
    app.innerHTML = city && venue ? renderVenueProfile(city, venue) : renderNotFound();
  } else if (articleMatch) {
    const article = getArticle(articleMatch[1]);
    app.innerHTML = article ? renderEditorialArticle(article) : renderNotFound();
  } else {
    app.innerHTML = renderNotFound();
  }

  window.scrollTo({ top: 0, behavior: "auto" });
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
