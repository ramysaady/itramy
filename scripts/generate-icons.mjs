import { deflateSync } from 'node:zlib';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(here, '../public/icons');

const BASE = 48;
const INK = [5, 8, 15];
const GRADIENT_FROM = [47, 128, 255];
const GRADIENT_TO = [125, 211, 252];
const SAMPLES = 3;

const dots = [
  { x: 24, y: 24, r: 4 },
  { x: 12, y: 12, r: 2.75 },
  { x: 36, y: 12, r: 2.75 },
  { x: 12, y: 36, r: 2.75 },
  { x: 36, y: 36, r: 2.75 },
];

const segments = [
  [14, 14, 21, 21],
  [34, 14, 27, 21],
  [21, 27, 14, 34],
  [27, 27, 34, 34],
];

function distanceToSegment(px, py, [x1, y1, x2, y2]) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const lengthSquared = dx * dx + dy * dy;
  const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lengthSquared));
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy));
}

function insideRoundedRect(x, y, min, max, radius) {
  if (x < min || y < min || x > max || y > max) return false;

  const cx = Math.min(Math.max(x, min + radius), max - radius);
  const cy = Math.min(Math.max(y, min + radius), max - radius);
  return Math.hypot(x - cx, y - cy) <= radius;
}

function sampleColor(x, y) {
  if (!insideRoundedRect(x, y, 2, 46, 13)) return null;

  const isInk =
    dots.some((dot) => Math.hypot(x - dot.x, y - dot.y) <= dot.r) ||
    segments.some((segment) => distanceToSegment(x, y, segment) <= 1);

  if (isInk) return INK;

  const t = Math.min(Math.max((x - 4 + (y - 4)) / 80, 0), 1);
  return [
    Math.round(GRADIENT_FROM[0] + (GRADIENT_TO[0] - GRADIENT_FROM[0]) * t),
    Math.round(GRADIENT_FROM[1] + (GRADIENT_TO[1] - GRADIENT_FROM[1]) * t),
    Math.round(GRADIENT_FROM[2] + (GRADIENT_TO[2] - GRADIENT_FROM[2]) * t),
  ];
}

function renderRaw(size) {
  const scale = BASE / size;
  const raw = Buffer.alloc(size * (size * 4 + 1));
  let offset = 0;

  for (let py = 0; py < size; py += 1) {
    raw[offset] = 0;
    offset += 1;

    for (let px = 0; px < size; px += 1) {
      let r = 0;
      let g = 0;
      let b = 0;
      let a = 0;

      for (let sy = 0; sy < SAMPLES; sy += 1) {
        for (let sx = 0; sx < SAMPLES; sx += 1) {
          const x = (px + (sx + 0.5) / SAMPLES) * scale;
          const y = (py + (sy + 0.5) / SAMPLES) * scale;
          const color = sampleColor(x, y);

          if (color) {
            r += color[0];
            g += color[1];
            b += color[2];
            a += 255;
          }
        }
      }

      const total = SAMPLES * SAMPLES;
      const coverage = a / total / 255;

      if (coverage > 0) {
        const opaque = a / 255;
        raw[offset] = Math.round(r / opaque);
        raw[offset + 1] = Math.round(g / opaque);
        raw[offset + 2] = Math.round(b / opaque);
        raw[offset + 3] = Math.round(coverage * 255);
      }

      offset += 4;
    }
  }

  return raw;
}

const crcTable = Array.from({ length: 256 }, (_, index) => {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) {
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }
  return value >>> 0;
});

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);

  const typed = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typed), 0);

  return Buffer.concat([length, typed, crc]);
}

function encodePng(size, raw) {
  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8;
  header[9] = 6;

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

mkdirSync(outputDir, { recursive: true });

for (const size of [180, 192, 512]) {
  const file = resolve(outputDir, `icon-${size}.png`);
  writeFileSync(file, encodePng(size, renderRaw(size)));
  process.stdout.write(`generated icons/icon-${size}.png\n`);
}
