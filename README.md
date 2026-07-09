# PlayDude

PlayDude is a Nightlife Intelligence website built around one promise:

**Know Before You Go.**

The project helps readers reduce uncertainty before visiting nightlife areas and venues. It is not a general travel blog and not an adult website. The MVP focuses on trustworthy, founder-edited editorial content for Bangkok, Pattaya, Tokyo, and Osaka.

## MVP Scope

- High-quality editorial city guides
- Venue profiles that explain what to expect before arriving
- Practical nightlife context: atmosphere, location, crowd, etiquette, timing, pricing signals, and safety considerations
- Founder-editor publishing workflow
- No paid membership in the MVP

## Initial Structure

- `docs/` - product, content, and engineering planning documents
- `content/` - city content workspace
- `src/` - future application source code
- `public/` - future static assets

## Current Status

This repository contains the first local MVP website build. It is a no-dependency frontend with:

- A homepage
- City guide pages for Bangkok, Pattaya, Tokyo, and Osaka
- Reusable city guide rendering
- Reusable venue profile rendering
- Placeholder venue profiles
- No membership, login, payment, or advertising features

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

Important: do not double-click `index.html`. This MVP uses browser ES modules and a small Node server, so opening the HTML file directly can show a blank or unstyled page.

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
