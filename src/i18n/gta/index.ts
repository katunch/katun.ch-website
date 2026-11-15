// Copy for the GTA release variant. Locales and their fallback come from src/i18n/index.ts.

import { getLocale, type Locale } from '..';
import de from './de';
import en from './en';
import type { GtaDictionary } from './types';

const dictionaries = { de, en } satisfies Record<Locale, GtaDictionary>;

/** Pass `Astro.currentLocale`; anything unknown falls back to the default language. */
export function getGtaDictionary(value: string | undefined): GtaDictionary {
  return dictionaries[getLocale(value)];
}
