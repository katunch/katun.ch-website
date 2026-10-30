// Locales must match `i18n.locales` in astro.config.mjs.

import de from './de';
import en from './en';
import type { Dictionary } from './types';

const dictionaries = { de, en } satisfies Record<string, Dictionary>;

export type Locale = keyof typeof dictionaries;
export const defaultLocale: Locale = 'de';
export const locales = Object.keys(dictionaries) as Locale[];

/** Pass `Astro.currentLocale`; anything unknown falls back to the default language. */
export function getLocale(value: string | undefined): Locale {
  return value && value in dictionaries ? (value as Locale) : defaultLocale;
}

export function getDictionary(value: string | undefined): Dictionary {
  return dictionaries[getLocale(value)];
}
