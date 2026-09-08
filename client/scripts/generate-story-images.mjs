// generate-story-images.mjs
// Generates attractive placeholder cover images for the story category cards.
//
// NOTE: The rendered files are PNG-encoded but saved with a .jpg extension
// because the project path references end in `.jpg`. Browsers sniff image
// bytes and render them perfectly fine. Replace these files with genuine
// JPEG artwork whenever real images are available.
//
// Run from the `client` directory:
//   node scripts/generate-story-images.mjs

import { deflateSync } from 'node:zlib'
import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const PI = Math.PI
const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '..', 'public', 'images', 'stories')
const W = 960
const H = 540

mkdirSync(OUT, { recursive: true })

/* ---------- PNG encoder (no dependencies) ---------- */

let CRC_TABLE = null
function crcTable() {
  if (CRC_TABLE) return CRC_TABLE
  CRC_TABLE = new Uint32Array(256)
  for (let n = 0; n < 256; n++) {
    let c = n
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    }
    CRC_TABLE[n] = c >>> 0
  }
  return CRC_TABLE
}

function crc32(buf) {
  const table = crcTable()
  let c = 0xffffffff
  for (let i = 0; i < buf.length; i++) {
    c = table[(c ^ buf[i]) & 0xff] ^ (c >>> 8)
  }
  return (c ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const typeBuf = Buffer.from(type, 'ascii')
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])))
  return Buffer.concat([len, typeBuf, data, crcBuf])
}

function encodePng(width, height, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // colour type: RGBA
  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y++) {
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride)
  }
  const idat = deflateSync(raw, { level: 9 })
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))])
}

/* ---------- drawing helpers (soft anti-aliased coverage) ---------- */

const clamp01 = (v) => Math.min(1, Math.max(0, v))
const dist = (x, y) => Math.sqrt(x * x + y * y)

// 1 inside the shape, 0 outside, smooth over ~2.8px
function coverage(dist, edge) {
  const t = clamp01((dist - (edge - 1.4)) / 2.8)
  return 1 - t * t * (3 - 2 * t)
}

function circle(cx, cy, radius, color, op = 1) {
  return {
    color,
    cov(px, py) {
      return coverage(dist(px - cx, py - cy), radius) * op
    },
  }
}

function ellipse(cx, cy, rx, ry, color, op = 1) {
  return {
    color,
    cov(px, py) {
      const nx = (px - cx) / rx
      const ny = (py - cy) / ry
      return coverage(Math.sqrt(nx * nx + ny * ny), 1) * op
    },
  }
}

function rectRot(cx, cy, deg, halfW, halfL, color, op = 1) {
  const cos = Math.cos((-deg * PI) / 180)
  const sin = Math.sin((-deg * PI) / 180)
  return {
    color,
    cov(px, py) {
      const nx = px - cx
      const ny = py - cy
      const rx = nx * cos - ny * sin
      const ry = nx * sin + ny * cos
      const sd = Math.max(Math.abs(rx) - halfW, Math.abs(ry) - halfL)
      const t = clamp01((sd + 1.4) / 2.8)
      return (1 - t * t * (3 - 2 * t)) * op
    },
  }
}

function pointInPoly(px, py, pts) {
  let inside = false
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [ax, ay] = pts[i]
    const [bx, by] = pts[j]
    if (ay > py !== by > py && px < ((bx - ax) * (py - ay)) / (by - ay) + ax) {
      inside = !inside
    }
  }
  return inside
}

function distSeg(px, py, ax, ay, bx, by) {
  const vx = bx - ax
  const vy = by - ay
  const wx = px - ax
  const wy = py - ay
  const c1 = vx * wx + vy * wy
  if (c1 <= 0) return dist(px - ax, py - ay)
  const c2 = vx * vx + vy * vy
  if (c2 <= c1) return dist(px - bx, py - by)
  const t = c1 / c2
  return dist(px - (ax + t * vx), py - (ay + t * vy))
}

function polygon(pts, color, op = 1) {
  return {
    color,
    cov(px, py) {
      let inside = false
      let minD = Infinity
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const [ax, ay] = pts[i]
        const [bx, by] = pts[j]
        if (ay > py !== by > py && px < ((bx - ax) * (py - ay)) / (by - ay) + ax) {
          inside = !inside
        }
        const d = distSeg(px, py, ax, ay, bx, by)
        if (d < minD) minD = d
      }
      const sd = inside ? -minD : minD
      const t = clamp01((sd + 1.4) / 2.8)
      return (1 - t * t * (3 - 2 * t)) * op
    },
  }
}

// crescent built from a filled circle minus an offset "bite" circle
function crescent(fillPos, fillR, bitePos, biteR, color) {
  return {
    color,
    cov(px, py) {
      const d1 = dist(px - fillPos[0], py - fillPos[1])
      const d2 = dist(px - bitePos[0], py - bitePos[1])
      const c = Math.max(0, coverage(d1, fillR) - coverage(d2, biteR))
      return clamp01(c * 1.6) // boost so edges stay opaque
    },
  }
}

function starPts(cx, cy, outer, inner, n = 5, rotDeg = -90) {
  const pts = []
  for (let i = 0; i < n * 2; i++) {
    const rad = i % 2 === 0 ? outer : inner
    const a = (rotDeg * PI) / 180 + (i * PI) / n
    pts.push([cx + rad * Math.cos(a), cy + rad * Math.sin(a)])
  }
  return pts
}

function hex(hexStr) {
  const n = parseInt(hexStr.slice(1), 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
}
/* ---------- renderer ---------- */

function render({ file, top, bottom, layers }) {
  const top3 = hex(top)
  const bottom3 = hex(bottom)
  const rgba = Buffer.alloc(W * H * 4)

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      // diagonal gradient for a richer look
      const t = clamp01((y / (H - 1)) * 0.72 + (x / (W - 1)) * 0.28)
      let r = top3[0] + (bottom3[0] - top3[0]) * t
      let g = top3[1] + (bottom3[1] - top3[1]) * t
      let b = top3[2] + (bottom3[2] - top3[2]) * t

      let covSum = 0
      let cr = 0
      let cg = 0
      let cb = 0
      for (const L of layers) {
        const c = L.cov(x, y)
        if (c > 0) {
          covSum += c
          cr += c * L.color[0]
          cg += c * L.color[1]
          cb += c * L.color[2]
        }
      }
      if (covSum > 0) {
        const mix = Math.min(1, covSum)
        r = r * (1 - mix) + (cr / covSum) * mix
        g = g * (1 - mix) + (cg / covSum) * mix
        b = b * (1 - mix) + (cb / covSum) * mix
      }

      const idx = (y * W + x) * 4
      rgba[idx] = r | 0
      rgba[idx + 1] = g | 0
      rgba[idx + 2] = b | 0
      rgba[idx + 3] = 255
    }
  }

  writeFileSync(join(OUT, file), encodePng(W, H, rgba))
  console.log('generated', file)
}

/* ---------- colour palettes ---------- */

const WHITE = [255, 255, 255]
const IVORY = hex('#FFF3C8')
const GOLD = hex('#FFE3A3')
const SUN = hex('#FFF6D2')

/* ---------- image compositions ---------- */

function confetti(seed, count, area) {
  const dots = []
  let s = seed
  const rnd = () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
  for (let i = 0; i < count; i++) {
    dots.push(circle(area[0] + rnd() * area[2], area[1] + rnd() * area[3], 3 + rnd() * 6, WHITE, 0.5))
  }
  return dots
}

const W2 = W / 2

// Moral Stories — rising sun
const moral = {
  file: 'moral-stories.jpg',
  top: '#FFD34D',
  bottom: '#FF7A18',
  layers: [
    circle(W2, H * 0.46, 260, WHITE, 0.16),
    ...confetti(11, 14, [60, 60, W - 120, H - 120]),
    ...[-90, -50, -10, 30, 70, 110, 150, 190].map((deg) =>
      rectRot(W2, H * 0.46, deg, 24, 200, IVORY, 0.8),
    ),
    circle(W2, H * 0.46, 128, SUN),
    circle(W2, H * 0.46, 100, IVORY),
  ],
}

// Animal Stories — paw print
const animal = {
  file: 'animal-stories.jpg',
  top: '#6FD48A',
  bottom: '#1E8F5B',
  layers: [
    circle(W2, H * 0.48, 240, WHITE, 0.14),
    ...confetti(7, 30, [W * 0.12, H * 0.42, W * 0.76, H * 0.4]),
    ellipse(W2, H * 0.57, 96, 104, IVORY), // palm
    ellipse(W2 - 76, H * 0.32, 34, 40, IVORY),
    ellipse(W2 - 30, H * 0.24, 34, 40, IVORY),
    ellipse(W2 + 30, H * 0.24, 34, 40, IVORY),
    ellipse(W2 + 76, H * 0.32, 34, 40, IVORY),
  ],
}

// Bedtime Stories — crescent moon and stars
const bedtime = {
  file: 'bedtime-stories.jpg',
  top: '#6C63C7',
  bottom: '#282B6B',
  layers: [
    circle(W2, H * 0.44, 250, WHITE, 0.12),
    ...confetti(3, 40, [W * 0.12, H * 0.05, W * 0.76, H * 0.9]),
    // stars
    circle(W * 0.22, H * 0.3, 6, WHITE, 0.9),
    circle(W * 0.3, H * 0.16, 4, WHITE, 0.8),
    circle(W * 0.78, H * 0.28, 5, WHITE, 0.85),
    circle(W * 0.62, H * 0.18, 3.5, WHITE, 0.8),
    circle(W * 0.86, H * 0.72, 5, WHITE, 0.8),
    crescent([W2 - 30, H * 0.44], 108, [W2 + 24, H * 0.44 + 8], 92, GOLD),
  ],
}

// English Stories — open book
const english = {
  file: 'english-stories.jpg',
  top: '#5EC8F5',
  bottom: '#1B5FBF',
  layers: [
    circle(W2, H * 0.48, 240, WHITE, 0.14),
    ...confetti(33, 30, [W * 0.14, H * 0.18, W * 0.72, H * 0.5]),
    polygon(
      [
        [W2 - 175, H * 0.42],
        [W2, H * 0.76],
        [W2, H * 0.32],
        [W2 - 175, H * 0.12],
      ],
      WHITE,
    ),
    polygon(
      [
        [W2 + 175, H * 0.42],
        [W2, H * 0.76],
        [W2, H * 0.32],
        [W2 + 175, H * 0.12],
      ],
      WHITE,
    ),
    rectRot(W2, H * 0.5, 0, 4, 230, hex('#1B5FBF'), 0.35),
  ],
}

// Urdu Stories — moon and star
const urdu = {
  file: 'urdu-stories.jpg',
  top: '#9F6EDB',
  bottom: '#4A2B8C',
  layers: [
    circle(W2, H * 0.48, 250, WHITE, 0.12),
    ...confetti(88, 34, [W * 0.1, H * 0.1, W * 0.8, H * 0.8]),
    crescent([W2 - 70, H * 0.4], 92, [W2 - 16, H * 0.4 + 8], 76, GOLD),
    polygon(starPts(W2 + 160, H * 0.7, 42, 17), GOLD),
  ],
}

for (const img of [moral, animal, bedtime, english, urdu]) {
  const started = Date.now()
  try {
    render(img)
    console.error(`ok ${img.file} (${Date.now() - started}ms)`)
  } catch (err) {
    console.error(`FAILED ${img.file}:`, err)
  }
}

console.log('Done. Placeholder images written to:', OUT)