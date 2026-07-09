# Engineering Spec

## Purpose

This document defines the initial technical direction for PlayDude. The repository currently contains documentation and structure only; the full website should be built later.

## Recommended Architecture

For the MVP, prefer a simple content-first web architecture:

- Static or hybrid-rendered website
- Markdown or MDX content source
- File-based routing or lightweight CMS integration
- Search-friendly HTML
- Minimal client-side JavaScript

Good fit options:

- Astro
- Next.js
- Eleventy

The final framework should be chosen when implementation begins.

## Content Model

Core content types:

- City Guide
- Area Guide
- Venue Profile
- Editorial Article

Suggested fields for city guides:

- `title`
- `slug`
- `city`
- `country`
- `summary`
- `best_for`
- `areas`
- `budget_notes`
- `safety_notes`
- `last_updated`

Suggested fields for venue profiles:

- `title`
- `slug`
- `city`
- `area`
- `venue_type`
- `summary`
- `best_for`
- `not_ideal_for`
- `atmosphere`
- `crowd`
- `price_signal`
- `timing`
- `entry_notes`
- `practical_tips`
- `last_verified`

## URL Structure

Recommended pattern:

- `/cities/bangkok/`
- `/cities/bangkok/areas/sukhumvit/`
- `/cities/bangkok/venues/example-venue/`
- `/guides/bangkok-first-night/`

Use stable, readable slugs. Avoid date-based URLs for evergreen guides.

## SEO Requirements

Each page should include:

- Unique title tag
- Meta description
- Canonical URL
- Open Graph metadata
- Structured headings
- Internal links to relevant city, area, and venue pages
- Last updated or last verified date

Potential schema types:

- `Article`
- `TravelGuide`
- `LocalBusiness`, only when data is accurate enough
- `FAQPage`, when a real FAQ section exists

## Performance Requirements

- Mobile-first layout
- Fast initial page load
- Optimized images
- Minimal third-party scripts
- Cached static assets
- No heavy maps or embeds on initial page load unless necessary

## Accessibility Requirements

- Semantic HTML
- Keyboard-accessible navigation
- High contrast text
- Descriptive link text
- Image alt text where images add meaning
- No content hidden only behind hover states

## Editorial Maintenance

The engineering system should make it easy to:

- Add a new city
- Add a new venue
- Update last verified dates
- Mark content as outdated
- Link related guides together
- Prepare premium versions later without rewriting the site

## Future Monetization Support

Design the content model so future paid products can be added:

- Free summaries with paid deep guides
- Member-only city dossiers
- Downloadable PDF guides
- Sponsored placements with clear labeling
- Ad slots that do not disrupt reading

## Initial Repository Structure

```text
docs/
content/
src/
public/
README.md
```

The current phase should not include application implementation unless explicitly requested.
