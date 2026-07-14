# PlayDude v8 SEO Foundation

## Goal

Make the existing six-city editorial product crawlable and measurable without removing venues, changing the 12-Type taxonomy, or redesigning the v7 interface.

## Generated release

The production build creates 247 indexable routes:

- 1 homepage
- 6 city pages
- 26 decision playbooks
- 214 unique Venue Intel pages

Every route includes readable HTML before JavaScript runs, a unique title and description, a canonical `playdude.club` URL, Open Graph metadata, and appropriate breadcrumb structured data. Playbooks also use Article structured data.

## Search files

The build produces:

- `dist/sitemap.xml`
- `dist/robots.txt`
- `dist/404.html`
- `dist/_redirects`
- `dist/_headers`
- `dist/build-manifest.json`

The source-ledger and Method pages remain unpublished.

## Commands

```bash
npm run build
npm run check
npm start
```

`npm run check` fails if the release does not contain exactly six cities, 26 playbooks, 214 venues, 247 route files, 247 sitemap URLs, or required page metadata.

## Cloudflare Pages configuration

- Production branch: `main`
- Framework preset: `None`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

After deployment, configure account-level redirects so `playdude-6mv.pages.dev` and `www.playdude.club` resolve to the canonical `https://playdude.club` host.

## Search Console handoff

After the v8 deployment is verified:

1. Add the `playdude.club` Domain property in Google Search Console.
2. Verify ownership with the supplied DNS TXT record in Cloudflare.
3. Submit `https://playdude.club/sitemap.xml`.
4. Inspect the homepage, one city page, one playbook, and one Venue Intel URL.
