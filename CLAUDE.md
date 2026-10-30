# katun.ch

Personal one-page site of Silas Knobel. Astro, fully static, German at `/`, English at `/en/`.
`HANDOFF.md` and `design-{dark,light}.dc.html` are the original design brief and mockups; the built site has since moved on from them (i18n, product section, photo, 404 page).

## Commands

```sh
npm run dev       # dev server, http://localhost:4321
npm run check     # astro check (types); keep it at 0 errors, 0 warnings
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
```

There are no tests. Verify changes in a browser at 360, 390, 768 and 1440 px, in both languages and both themes, with no horizontal scrolling. Lighthouse should stay at 95+ in every category (currently 99–100).

## Layout

- `src/components/Home.astro` is the whole one-pager; `src/pages/index.astro` and `src/pages/en/index.astro` only render it. Same pattern for `NotFound.astro` and the two `404.astro` pages.
- `src/i18n/de.ts` / `en.ts` hold all copy, typed by `src/i18n/types.ts`. Components read it with `getDictionary(Astro.currentLocale)`. Facts shared by both languages (links, bike) live in `src/data/site.ts`.
- `src/styles/global.css` has the design tokens and shared primitives (`.card`, `.icon-button`, `.lift`, `.dot`, …). Everything else is scoped `<style>` in the component.
- `src/lib/brand.ts` draws the favicon, touch icon and per-language OG image at build time (`src/pages/*.ts` endpoints) with the site fonts converted to outlines.
- `public/.htaccess` and `public/en/.htaccess` are the Apache config (404 pages, caching, compression, an optional HTTPS redirect that is commented out).

## Conventions

- **No inline styles** and no client framework. Plain JS only for the theme toggle and the terminal tabs.
- **Copy changes go into both dictionaries.** German is Swiss: `ss`, never `ß`; informal `du`; Swiss terms (Couvert, innert, Pikettdienst). Code-flavoured strings stay English in both languages: YAML keys, git tags (`running`, `HEAD → main`), gauge labels, pipeline stage names, `no route to host`.
- **Section headings** are `{ index, note, title, titleAccent? }`. The accent part is orange and wraps as a unit. Sections are numbered `01`–`07`; renumber when adding one, and update the photo caption ("fig. 06").
- **Nav:** six links. On phones they must stay on one row from 360 px up (`SiteHeader.astro` tightens the gap and font size ≤ 27rem). Check German, which is the longest, when adding or renaming links.
- **Themes:** dark is the default and does *not* follow the OS setting; light only applies after the visitor clicks the toggle (stored in `localStorage` as `theme`). Light theme = `:root[data-theme='light']` token overrides. The terminal, marquee, footer and product pipeline are dark "islands" in both themes (`--term-*`, `--island-*` tokens). The green `--island-ok` dot is only used for "live/healthy" status.
- **Placeholders** like `[MODEL]` are rendered highlighted by `PlaceholderText`; keep them in brackets until Silas fills them in.
- **Images** go in `src/assets/` and through `astro:assets` (`PhotoSlot` takes `src` + `alt`, 4:5). Strip metadata before committing. `stelvio.jpg` has the number plate blurred on purpose; keep it that way in any re-crop.
- **Privacy:** Silas's e-mail address must not appear on the site. Contact goes through LinkedIn/GitHub/Zenify.

## Deploy

Pushing to `main` deploys to production. `.github/workflows/deploy.yml` checks and builds the site (pull requests too), uploads `dist/` over FTPS with `lftp` to an Apache host (a dedicated FTP account whose login folder is the web root, `public_html/katun.ch`), then smoke-tests https://katun.ch. The smoke test requires the live `/` and `/en/` to match the build byte for byte, so anything that rewrites HTML on the server will fail it.

- Secrets `FTP_HOST`, `FTP_USERNAME`, `FTP_PASSWORD` live in the GitHub `production` environment, which only `main` can deploy to.
- The upload only ever deletes inside `_astro/` (content-hashed, stale after a build). Keep it that way; the folder on the host may hold files the host needs.
- Actions are pinned to commit SHAs with the version in a comment; update both together.
- `site` in `astro.config.mjs` (`https://katun.ch`) is used for the canonical, hreflang and OG URLs.
- Don't push to `main` without being asked: it goes live.
