/** A placeholder is an all-caps label in brackets, e.g. `[MODEL]` or `[FAVOURITE ROAD]`. */
const PLACEHOLDER = /(\[[A-Z][A-Z ]*\])/;

export const isPlaceholder = (text: string) => new RegExp(`^${PLACEHOLDER.source}$`).test(text);

/** Splits text into plain runs and placeholder runs. */
export function splitPlaceholders(text: string) {
  return text
    .split(PLACEHOLDER)
    .filter(Boolean)
    .map((part) => ({ text: part, placeholder: isPlaceholder(part) }));
}
