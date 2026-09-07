# Brand assets

## The KN monogram

The original client PNG (`kn_logo.png`, 1809x1861 RGBA) was found in
`dist/assets/`. That directory is **build output** — Vite wipes it on every
`npm run build` — and the file was lost to a rebuild during this work.

Please re-supply the original PNG and drop it in this folder as
`kn_logo-original.png`. Keep brand source files in `public/` or `brand/`,
never in `dist/`.

Recorded characteristics of the original, for reference:

| Property | Value |
|---|---|
| Dimensions | 1809 x 1861 |
| Format | PNG, 8-bit RGBA (29.4% transparent) |
| K colour | `#da251c` bright red (24.3% of pixels) |
| N + frame colour | `#969593` cool grey (41.7% of pixels) |
| Design | Interlocking K + N monogram inside a square frame |

## The vector version now used on the site

The monogram was retraced as vector (geometry sampled from the source PNG row
by row, not redrawn by eye) and recoloured to the site palette:

| Element | Original | Site |
|---|---|---|
| K | `#da251c` bright red | `#c9591f` terracotta |
| N + frame | `#969593` cool grey | `#2e2a26` charcoal |

Where it lives:

- `public/logo.svg` — standalone light-background mark (OG images, e-mail, print)
- `public/favicon.svg` — monogram on a charcoal tile, frameless for small sizes
- `src/components/common.jsx` -> `LogoMark` — inline SVG used in the header and
  footer. The N and frame use `currentColor` so they follow the surrounding
  theme; the K keeps the terracotta accent. `framed={false}` drops the square
  outline below ~40px, where it closes up and the mark turns into a blob.

The vector is the live source of truth, so the site is unaffected by the loss of
the PNG. The original is still worth re-supplying for print and archival use.
