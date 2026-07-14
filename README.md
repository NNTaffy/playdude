# PlayDude

PlayDude is a Nightlife Intelligence website built around one promise:

**Know Before You Go.**

The project helps readers reduce uncertainty before visiting nightlife areas and venues. The current release covers Bangkok, Pattaya, Hanoi, Ho Chi Minh City, Jakarta, and Kuala Lumpur.

## Product Scope

- High-quality editorial city guides
- Venue profiles that explain what to expect before arriving
- Practical nightlife context: atmosphere, location, crowd, etiquette, timing, pricing signals, and safety considerations
- Founder-editor publishing workflow
- No paid membership in this release

## Project Structure

- `docs/` - product, content, and engineering planning documents
- `content/` - city content workspace
- `src/` - application source code and editorial data
- `public/` - static assets

## Current Status

This repository contains the six-city v7 MVP. It is a no-dependency frontend with:

- A field-intelligence homepage
- Six live city guides
- 26 decision playbooks
- 214 searchable, unique Venue Intel profiles
- One consistent Type taxonomy with 12 venue types
- 273 raw editor and source records consolidated without discarding distinct field notes
- The original 59 Bangkok/Pattaya editor profiles retained
- All previous 170 source records retained inside Venue Intel
- 44 new Ho Chi Minh City, Jakarta, and Kuala Lumpur records
- Search and filtering by city and format directly inside Venue Intel
- Search and category filters
- Observed price ledgers, source dates, timing, watch-outs, and responsible-use notes
- No membership, login, payment, or advertising features

## Source boundary

Venue Intel preserves named venues, source prices, locations, negative opinions, and operational observations from eight complete PDFs. Source-derived records and editor-built profiles now share one searchable product surface.

Discriminatory language, illegal-drug instructions, unverifiable guarantees, and private referral contacts are not reproduced. Venues tied by the source to possible underage activity remain visible as risk records rather than being silently removed; they are clearly marked as not recommended or requiring strict 20+ verification.

For the latest type-system, profile, and visual changes, see `docs/12-type-and-neon-redesign-v7.md`.

## Run Locally

Requirements:

- Node.js 18 or newer

Start the local website from the project root:

```bash
npm run dev
```

Then open the local server URL shown in the terminal:

```text
http://localhost:5173
```

Important: do not double-click `index.html`. This build uses browser ES modules and a small Node server, so opening the HTML file directly can show a blank or unstyled page.

Optional custom port:

```bash
PORT=3000 npm run dev
```


## Blank Page Troubleshooting

If the page is blank:

1. Confirm you are in the project root folder.
2. Run `npm run dev`.
3. Open `http://localhost:5173`.
4. Open DevTools → Console and check for JavaScript errors.
5. Confirm these files exist: `index.html`, `src/main.js`, `src/data.js`, `src/styles.css`, and `server.js`.

The app mounts into `#app` in `index.html`. The homepage should render “PlayDude”, “Nightlife Intelligence”, and “Know Before You Go.”
