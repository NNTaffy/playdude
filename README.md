# PlayDude

PlayDude is a Nightlife Intelligence website built around one promise:

**Know Before You Go.**

The project helps readers reduce uncertainty before visiting nightlife areas and venues. It is not a general travel blog and not an adult website. The MVP focuses on trustworthy, founder-edited editorial content for Thailand and Japan, starting with Bangkok, Pattaya, Tokyo, and Osaka.

## MVP Scope

- High-quality editorial city guides
- Venue profiles that explain what to expect before arriving
- Practical nightlife context: atmosphere, location, crowd, etiquette, timing, pricing signals, and common mistakes
- A sample editorial article
- Founder-editor publishing workflow
- No paid membership, login, payment, database, backend, complex search, or ads

## Project Structure

- `docs/` - product, content, and engineering planning documents
- `content/` - city content workspace
- `src/` - frontend source code
- `public/` - future static assets
- `server.js` - small local development server

## Current Website

This repository contains a local content-driven MVP with:

- A homepage
- City guide pages for Bangkok, Pattaya, Tokyo, and Osaka
- Reusable city guide rendering
- Reusable venue profile rendering
- One sample editorial article: `Bangkok Nightlife Starter Guide: What to Know Before You Go`
- Placeholder venue profiles

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

If port `5173` is already busy, the server will automatically try the next port and print the correct URL, such as `http://localhost:5174`.

Useful routes:

```text
http://localhost:5173/
http://localhost:5173/cities/bangkok/
http://localhost:5173/cities/pattaya/
http://localhost:5173/cities/tokyo/
http://localhost:5173/cities/osaka/
http://localhost:5173/articles/bangkok-nightlife-starter-guide/
```

Important: do not double-click `index.html`. This MVP uses browser ES modules and a small Node server, so opening the HTML file directly can show a blank or unstyled page.

Optional custom port:

```powershell
$env:PORT=3000; npm run dev
```

## Blank Page Troubleshooting

If the page is blank:

1. Confirm you are in the project root folder.
2. Run `npm run dev`.
3. Open `http://localhost:5173`.
4. Open DevTools > Console and check for JavaScript errors.
5. Confirm these files exist: `index.html`, `src/main.js`, `src/data.js`, `src/styles.css`, and `server.js`.

The app mounts into `#app` in `index.html`. The homepage should render `PlayDude`, `Nightlife Intelligence`, and `Know Before You Go.`
