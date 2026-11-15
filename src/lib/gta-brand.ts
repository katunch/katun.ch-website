// Build-time artwork for the GTA release variant: favicon and touch icon in the
// style of the "SK" badge (src/components/gta/PauseMenu.astro). Same approach as
// brand.ts: text as outlines, rasterised with sharp. The OG image stays in brand.ts.
// The favicon uses Passion One 700 instead of the badge's 900: 900's K has too
// shallow a notch to show at 16–32px and reads as an H.

import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import opentype, { type Font } from 'opentype.js';
import sharp from 'sharp';

// See src/styles/gta.css.
const color = {
  ink: '#160c29',
  flamingo: '#ff4f9a',
  tangerine: '#ff9142',
};

type Weight = 700 | 900;

const require = createRequire(import.meta.url);
const fonts = new Map<Weight, Promise<Font>>();

/** Passion One, the badge's typeface. */
function passionOne(weight: Weight): Promise<Font> {
  if (!fonts.has(weight)) {
    fonts.set(
      weight,
      readFile(require.resolve(`@fontsource/passion-one/files/passion-one-latin-${weight}-normal.woff`)).then((buffer) =>
        opentype.parse(buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength)),
      ),
    );
  }
  return fonts.get(weight)!;
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

type LettersOptions = {
  /** Centre of the letters' ink. */
  cx: number;
  cy: number;
  capHeight: number;
  /** Letter spacing in em. */
  tracking: number;
  weight: Weight;
};

/**
 * "SK" in ink, centred on the letters' ink rather than their advance width,
 * because the glyphs' side bearings are uneven.
 */
async function letters({ cx, cy, capHeight, tracking, weight }: LettersOptions) {
  const font = await passionOne(weight);
  const size = (capHeight * font.unitsPerEm) / (font.tables.os2?.sCapHeight ?? font.unitsPerEm * 0.7);
  const options = { letterSpacing: tracking };
  const box = font.getPath('SK', 0, 0, size, options).getBoundingBox();
  const path = font.getPath('SK', cx - (box.x1 + box.x2) / 2, cy - (box.y1 + box.y2) / 2, size, options);
  return `<path d="${pathData(path.commands)}" fill="${color.ink}"/>`;
}

/** The badge's pink-to-orange gradient, top left to bottom right (CSS 135deg on a square). */
const gradient =
  `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">` +
  `<stop offset="0" stop-color="${color.flamingo}"/><stop offset="1" stop-color="${color.tangerine}"/>` +
  `</linearGradient></defs>`;

const svg = (width: number, height: number, body: string, viewBox = `0 0 ${width} ${height}`) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}">${gradient}${body}</svg>`;

/**
 * Browser-tab icon: the badge with an ink frame. Drawn on a 48-unit grid in steps of 3,
 * so the frame, cap line and baseline land on whole pixels at 16, 32 and 48px.
 */
export async function faviconSvg(size = 48) {
  const frame = 3; // 1px at 16px
  const body =
    `<rect width="48" height="48" rx="6" fill="${color.ink}"/>` +
    `<rect x="${frame}" y="${frame}" width="${48 - 2 * frame}" height="${48 - 2 * frame}" rx="3" fill="url(#g)"/>` +
    // Caps 6px tall at 16px; tracking puts S and K 1px apart. Nudged 0.2px left (at 16px)
    // so S's right edge and K's stem land on whole pixels at 16, 32 and 48px.
    (await letters({ cx: 23.37, cy: 24, capHeight: 18, tracking: 0.0535, weight: 700 }));
  return svg(size, size, body, '0 0 48 48');
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

/**
 * iOS home-screen icon: the gradient full-bleed with ink letters. No ink frame, because iOS
 * rounds the corners itself (and other platforms mask to circles), which would clip it unevenly.
 */
export async function appleTouchIcon() {
  const size = 180;
  const body =
    `<rect width="${size}" height="${size}" fill="url(#g)"/>` +
    (await letters({ cx: size / 2, cy: size / 2, capHeight: 60, tracking: 0.02, weight: 900 }));
  return sharp(Buffer.from(svg(size, size, body))).png().toBuffer();
}
