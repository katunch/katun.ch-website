// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://katun.ch',
  // German at /, English at /en/. Copy lives in src/i18n/.
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    // Single page: inline all CSS so nothing blocks the first paint.
    inlineStylesheets: 'always',
  },
  // Self-hosted at build time from Fontsource, with metric-matched fallbacks.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Barlow Condensed',
      cssVariable: '--font-display',
      weights: [500, 600, 700, 800],
      styles: ['normal'],
      fallbacks: ['Arial Narrow', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Barlow',
      cssVariable: '--font-body',
      weights: [400, 500, 600],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
    // Only used by the GTA release variant (src/components/gta/).
    {
      provider: fontProviders.fontsource(),
      name: 'Passion One',
      cssVariable: '--font-gta-display',
      weights: [900],
      styles: ['normal'],
      fallbacks: ['Impact', 'Arial Black', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Mr Dafoe',
      cssVariable: '--font-gta-script',
      weights: [400],
      styles: ['normal'],
      fallbacks: ['Brush Script MT', 'cursive'],
    },
  ],
});
