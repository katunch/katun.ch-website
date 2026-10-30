import { isPlaceholder, splitPlaceholders } from './placeholders';

export type TokenKind = 'key' | 'punct' | 'comment' | 'string' | 'placeholder';
export type Token = { text: string; kind?: TokenKind };

/**
 * Tiny highlighter for the flat YAML shown in the hero terminal.
 * Handles comments, `key: value`, `- item`, `[flow, lists]`, "strings", null
 * and bracketed placeholders. Returns one token list per line.
 */
export function highlightYaml(source: string): Token[][] {
  return source.split('\n').map(highlightLine);
}

function highlightLine(line: string): Token[] {
  if (/^\s*#/.test(line)) return [{ text: line, kind: 'comment' }];

  const item = line.match(/^(\s*)- (.*)$/);
  if (item) return [{ text: item[1] }, { text: '-', kind: 'punct' }, { text: ' ' }, ...highlightValue(item[2])];

  const pair = line.match(/^([\w-]+):(?: (.*))?$/);
  if (pair) {
    const key: Token = { text: `${pair[1]}:`, kind: 'key' };
    return pair[2] ? [key, { text: ' ' }, ...highlightValue(pair[2])] : [key];
  }

  return highlightValue(line);
}

function highlightValue(value: string): Token[] {
  if (/^".*"$/.test(value)) return [{ text: value, kind: 'string' }];
  if (value === 'null') return [{ text: value, kind: 'punct' }];

  const list = value.match(/^\[(.*)\]$/);
  if (list && !isPlaceholder(value)) {
    return [{ text: '[', kind: 'punct' }, ...highlightPlain(list[1]), { text: ']', kind: 'punct' }];
  }

  return highlightPlain(value);
}

function highlightPlain(text: string): Token[] {
  return splitPlaceholders(text).map(({ text, placeholder }) => (placeholder ? { text, kind: 'placeholder' } : { text }));
}
