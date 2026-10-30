# katun.ch — design handoff

Personal website for **Silas Knobel** (Software Architect & DevOps Engineer, Harley rider).
This folder holds two finished design variants exported from a Claude design canvas, plus this brief.
Your job: turn them into a production-ready static website.

## Files

| File | What it is |
|---|---|
| `design-dark.dc.html` | Dark variant ("asphalt & amber") — the reference for the dark theme |
| `design-light.dc.html` | Light variant ("paper & burnt orange") — the reference for the light theme |

Both pages share identical structure and copy. Only colours differ (plus a few dark "islands" in the light version, see tokens below).

## How to read the `.dc.html` files

They are HTML with inline styles, written for a canvas runtime that is **not** available here. Do not try to load `support.js` or run them as-is. Read them as a spec:

- `<helmet>` → global CSS + the Google Fonts link.
- `<x-dc> … </x-dc>` → the actual page markup.
- `{{accent}}`, `{{termAccent}}` → theme values (see tokens below).
- `{{heroClass}}` → `blueprint` (the grid background on the hero) when enabled; keep it on.
- `<sc-if value="{{isBuild}}">` / `<sc-if value="{{isRide}}">` → the two panels of the hero terminal; `showBuild` / `showRide` switch between them (tabs `profile.yaml` / `garage.yaml`).
- The `<script type="text/x-dc">` block at the bottom holds that tab state and the default values.

## Goal

1. **One page, two themes.** Dark = `design-dark`, light = `design-light`. Drive both from CSS custom properties. Default to the visitor's `prefers-color-scheme`, add a small theme toggle in the header, remember the choice in `localStorage`.
2. **Clean code.** Replace the repeated inline styles with a small set of classes/components (section header, card, chip, button, runlog row, repo card). No inline styles in the final output.
3. **Copy stays verbatim.** Texts will be edited by Silas afterwards. Keep every `[PLACEHOLDER]` in brackets (bike model, engine, year, favourite road, photo, email) so they're easy to find.
4. **Stack (default, change if Silas asks):** Astro with static output, zero client framework. Vanilla JS only for the theme toggle and terminal tabs. Self-host the fonts.
5. **Deploy:** ask Silas where it should run before setting anything up.

## Design tokens

| Token | Dark | Light |
|---|---|---|
| `--bg` | `#0D0D0C` | `#F2EFE8` |
| `--surface` (cards) | `#141412` | `#FBFAF7` |
| `--section-alt` (Ride section) | `#11110F` | `#ECE8DF` |
| `--text` | `#EDE9E3` | `#151513` |
| `--text-body` | `#C9C5BD` | `#3A3833` |
| `--text-muted` | `#A39F97` | `#57534C` |
| `--text-dim` | `#8C887F` | `#67635B` |
| `--line` | `#262622` | `#D9D4C9` |
| `--chip-border` | `#33332E` | `#CFC9BD` |
| `--ghost-border` | `#3A3A34` | `#BDB6A8` |
| `--grid-line` (hero blueprint) | `#1A1A17` | `#E3DED3` |
| `--accent` | `#FF7A1A` | `#B83C0C` |
| `--on-accent` (button text) | `#0D0D0C` | `#FBFAF7` |
| `--term-accent` (inside dark islands) | `#FF7A1A` | `#FF8A4C` |

**Dark islands in the light theme:** the hero terminal, the scrolling stack marquee (with the dashed amber "lane line" under it) and the footer stay dark (`#151513`) in light mode. In dark mode they simply use the dark tokens.

Light-theme section headers use a 2px `--text` rule on top; dark uses a 1px `--line` rule.

## Typography

- Display: **Barlow Condensed** 500 / 600 / 800, uppercase
- Body: **Barlow** 400 / 500 / 600
- Mono: **JetBrains Mono** 400 / 500

## Behaviour to keep

- Terminal tabs: make them proper accessible tabs (`role="tablist"`, arrow-key support).
- Marquee and blinking cursor: disable under `prefers-reduced-motion`.
- Card hover lift: keep it subtle, none under reduced motion.
- In-page nav links (`#now`, `#stack`, `#log`, `#source`, `#ride`, `#contact`) with smooth scrolling.

## Quality bar

- Responsive: check at 390px and 1440px; nothing scrolls horizontally except the terminal content.
- Accessibility: WCAG AA contrast (tokens above already pass), visible focus states, decorative SVGs `aria-hidden`.
- Meta: title, description, Open Graph tags, `lang="en"`, a favicon from the "SK" monogram.
- Aim for Lighthouse 95+ across the board.
