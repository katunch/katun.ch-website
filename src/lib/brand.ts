// Build-time artwork: favicon, touch icon and Open Graph image.
// Text is converted to outlines with the site's own fonts, so the SVGs render
// identically everywhere (favicons can't load web fonts) and rasterise with sharp.

import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import opentype, { type Font } from 'opentype.js';
import sharp from 'sharp';
import type { Dictionary } from '../i18n/types';

// Dark-theme palette (see src/styles/global.css).
const color = {
  bg: '#0d0d0c',
  ink: '#151513',
  text: '#ede9e3',
  body: '#c9c5bd',
  muted: '#a39f97',
  dim: '#8c887f',
  grid: '#1a1a17',
  accent: '#ff7a1a',
};

const require = createRequire(import.meta.url);
const fonts = new Map<string, Promise<Font>>();

function font(file: string): Promise<Font> {
  if (!fonts.has(file)) {
    fonts.set(
      file,
      readFile(require.resolve(`@fontsource/${file}`)).then((buffer) =>
        opentype.parse(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength)),
      ),
    );
  }
  return fonts.get(file)!;
}

const display = () => font('barlow-condensed/files/barlow-condensed-latin-800-normal.woff');
const mono = () => font('jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff');

type TextOptions = {
  x: number;
  y: number;
  size: number;
  fill: string;
  anchor?: 'start' | 'middle';
  /** Letter spacing in em. */
  tracking?: number;
};

function textWidth(font: Font, text: string, size: number, tracking = 0) {
  return font.getAdvanceWidth(text, size, { letterSpacing: tracking });
}

// opentype.js 2.0's own toPathData() emits NaN for tiny fractions (e.g. 1e-7),
// so serialise the commands ourselves.
const round = (value: number) => String(Math.round(value * 100) / 100);

function pathData(commands: opentype.PathCommand[]) {
  return commands
    .map((cmd) => {
      switch (cmd.type) {
        case 'M':
        case 'L':
          return `${cmd.type}${round(cmd.x)} ${round(cmd.y)}`;
        case 'Q':
          return `Q${[cmd.x1, cmd.y1, cmd.x, cmd.y].map(round).join(' ')}`;
        case 'C':
          return `C${[cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y].map(round).join(' ')}`;
        case 'Z':
          return 'Z';
      }
    })
    .join('');
}

/** Text as an SVG path. `y` is the baseline. */
function text(font: Font, value: string, { x, y, size, fill, anchor = 'start', tracking = 0 }: TextOptions) {
  const start = anchor === 'middle' ? x - textWidth(font, value, size, tracking) / 2 : x;
  const d = pathData(font.getPath(value, start, y, size, { letterSpacing: tracking }).commands);
  return `<path d="${d}" fill="${fill}"/>`;
}

/** Baseline that vertically centres capitals on `centerY`. */
function capBaseline(font: Font, centerY: number, size: number) {
  const capHeight = (font.tables.os2?.sCapHeight ?? font.unitsPerEm * 0.7) / font.unitsPerEm;
  return centerY + (capHeight * size) / 2;
}

type MonogramOptions = {
  x: number;
  y: number;
  box: number;
  filled: boolean;
  /** Relative to the header monogram's proportions; >1 for tiny sizes. */
  emphasis?: number;
};

/** The "SK" monogram: rounded square, letters, accent dot on the top-right corner. */
async function monogram({ x, y, box, filled, emphasis = 1 }: MonogramOptions) {
  const font = await display();
  const k = box / 42; // the header monogram is 42px
  const stroke = 1.5 * k;
  const size = 21 * k * emphasis;
  const square = filled
    ? `<rect x="${x}" y="${y}" width="${box}" height="${box}" rx="${6 * k}" fill="${color.ink}"/>`
    : `<rect x="${x + stroke / 2}" y="${y + stroke / 2}" width="${box - stroke}" height="${box - stroke}" rx="${6 * k}" fill="none" stroke="${color.text}" stroke-width="${stroke}"/>`;
  const letters = text(font, 'SK', {
    x: x + box / 2,
    y: capBaseline(font, y + box / 2, size),
    size,
    fill: color.text,
    anchor: 'middle',
    tracking: 0.02,
  });
  const dot = `<circle cx="${x + box}" cy="${y}" r="${5 * k * emphasis}" fill="${color.accent}"/>`;
  return square + letters + dot;
}

const svg = (width: number, height: number, body: string, viewBox = `0 0 ${width} ${height}`) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}">${body}</svg>`;

/** Browser-tab icon: a solid monogram so it holds up at 16px. */
export async function faviconSvg(size = 48) {
  // 48-unit canvas: 40-unit square, dot overhanging the top-right corner.
  return svg(size, size, await monogram({ x: 1, y: 7, box: 40, filled: true, emphasis: 1.25 }), '0 0 48 48');
}

export async function faviconIco() {
  const sizes = [16, 32, 48];
  const pngs = await Promise.all(sizes.map(async (size) => sharp(Buffer.from(await faviconSvg(size))).png().toBuffer()));

  // ICO container with embedded PNGs.
  const header = Buffer.alloc(6 + 16 * sizes.length);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(sizes.length, 4);
  let offset = header.length;
  sizes.forEach((size, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4); // colour planes
    header.writeUInt16LE(32, entry + 6); // bits per pixel
    header.writeUInt32LE(pngs[i].length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += pngs[i].length;
  });
  return Buffer.concat([header, ...pngs]);
}

/** iOS home-screen icon (iOS rounds the corners itself). */
export async function appleTouchIcon() {
  const size = 180;
  const box = 96;
  const body = `<rect width="${size}" height="${size}" fill="${color.bg}"/>` + (await monogram({ x: 42, y: 46, box, filled: false }));
  return sharp(Buffer.from(svg(size, size, body))).png().toBuffer();
}

/** 1200×630 social card in the hero's style, in the dictionary's language. */
export async function ogImage({ hero, meta }: Dictionary) {
  const [head, code] = await Promise.all([display(), mono()]);
  const width = 1200;
  const height = 630;
  const left = 72;

  const grid =
    `<defs><pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse" x="-1" y="-1">` +
    `<path d="M56 0H0V56" fill="none" stroke="${color.grid}" stroke-width="2"/></pattern></defs>` +
    `<rect width="${width}" height="${height}" fill="${color.bg}"/>` +
    `<rect width="${width}" height="${height}" fill="url(#grid)"/>`;

  // Brand row
  const brand =
    (await monogram({ x: left, y: 60, box: 46, filled: false })) +
    text(code, 'katun.ch', { x: left + 46 + 18, y: capBaseline(code, 83, 22), size: 22, fill: color.muted });

  // Prompt: silas@katun:~$ whoami▍
  const promptSize = 26;
  const promptY = 222;
  const user = 'silas@katun';
  const path = ':~$';
  const command = ' whoami';
  const userWidth = textWidth(code, user, promptSize);
  const pathWidth = textWidth(code, path, promptSize);
  const commandWidth = textWidth(code, command, promptSize);
  const prompt =
    text(code, user, { x: left, y: promptY, size: promptSize, fill: color.accent }) +
    text(code, path, { x: left + userWidth, y: promptY, size: promptSize, fill: color.dim }) +
    text(code, command, { x: left + userWidth + pathWidth, y: promptY, size: promptSize, fill: color.body }) +
    `<rect x="${left + userWidth + pathWidth + commandWidth + 4}" y="${promptY - 22}" width="10" height="28" fill="${color.accent}"/>`;

  // Headline: 156px, or smaller if the longest line wouldn't fit.
  const lines = hero.title.map((line) => line.toUpperCase());
  const longest = Math.max(...lines.map((line) => textWidth(head, line, 1, -0.01)));
  const headlineSize = Math.min(156, (width - 2 * left) / longest);
  const lineHeight = headlineSize * 0.84;
  const headline =
    text(head, lines[0], { x: left - 4, y: 372, size: headlineSize, fill: color.text, tracking: -0.01 }) +
    text(head, lines[1], { x: left - 4, y: 372 + lineHeight, size: headlineSize, fill: color.accent, tracking: -0.01 });

  const byline = text(code, meta.byline, {
    x: left,
    y: 560,
    size: 24,
    fill: color.body,
  });

  // Dashed amber "lane line" along the bottom edge.
  const lane = `<line x1="0" y1="604" x2="${width}" y2="604" stroke="${color.accent}" stroke-width="6" stroke-dasharray="56 40"/>`;

  const body = grid + brand + prompt + headline + byline + lane;
  return sharp(Buffer.from(svg(width, height, body))).png().toBuffer();
}
