# katun.ch

Source of [katun.ch](https://katun.ch), the personal site of Silas Knobel: software architect, DevOps engineer and Harley rider from Thurgau, Switzerland.

It's a single static page in German (`/`) and English (`/en/`), built with [Astro](https://astro.build).

## What's inside

- **No client framework.** The only JavaScript is two small scripts, for the theme toggle and the terminal tabs. The CSS is inlined into each page.
- **Two languages.** Astro i18n routing, with all copy in typed dictionaries (`src/i18n/`). German is the default and uses Swiss spelling.
- **Two themes.** Dark by default, with a manual switch to light that is remembered across visits. Both themes run on CSS custom properties.
- **Self-hosted fonts.** Barlow Condensed, Barlow and JetBrains Mono come from Fontsource via Astro's Fonts API, with metric-matched fallbacks.
- **Generated artwork.** The favicon, the touch icon and an Open Graph image per language are drawn at build time from the site's own fonts (opentype.js + sharp).
- **Responsive images** through `astro:assets` (WebP, several widths, lazy-loaded).
- **Accessible.** WCAG AA contrast, visible focus states, proper tabs, reduced-motion support. Lighthouse scores 99–100 in every category.

## Getting started

Requires Node.js 22.23 or newer.

```sh
npm install
npm run dev       # http://localhost:4321
```

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Dev server with hot reload           |
| `npm run check`   | Type-check the project (astro check) |
| `npm run build`   | Build the static site into `dist/`   |
| `npm run preview` | Serve `dist/` locally                |

## Project structure

```
public/            .htaccess (404 pages, caching, compression), robots.txt
src/
  assets/          images, optimised at build time
  components/      Home.astro (the page), NotFound.astro, sections and UI parts
  data/site.ts     links and facts shared by both languages
  i18n/            de.ts, en.ts, and the Dictionary type they share
  layouts/         Base.astro: <head>, metadata, theme bootstrap
  lib/             build-time artwork, placeholder and YAML helpers
  pages/           routes per language, plus icon and OG image endpoints
  styles/          design tokens and shared primitives
```

To change any text, edit both `src/i18n/de.ts` and `src/i18n/en.ts`. TypeScript reports an error if the two get out of sync.

## Deployment

The site is plain static files on an Apache host, and [GitHub Actions](.github/workflows/deploy.yml) deploys it on every push to `main`:

1. **Check & build:** `npm ci`, `astro check` and `astro build`. This also runs on every pull request.
2. **Upload:** `dist/` goes to the webhoster over FTPS with `lftp`. New assets are uploaded first, then the pages, and stale files in `_astro/` are deleted last, so visitors never get a page whose assets are missing.
3. **Smoke test:** the live pages must match the build byte for byte, every referenced asset must load, and unknown URLs must return a real 404.

The FTP credentials are secrets (`FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD`) in the `production` environment, and only `main` may deploy to it. A deploy can also be started by hand under *Actions → Deploy → Run workflow*.

The two `.htaccess` files in `public/` set up the German and English 404 pages, long-term caching for the hashed assets in `_astro/`, and gzip compression.

`HANDOFF.md` and the `design-*.dc.html` files are the original design brief and mockups the site was built from.
