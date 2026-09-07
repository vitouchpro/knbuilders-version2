// Node ESM loader hook: makes `import img from './foo.jpg'` work outside Vite.
//
// src/data.js imports images so Vite can hash + emit them. The build scripts
// (sitemap, llms) import that same module under plain `node`, where those
// asset imports blow up with ERR_UNKNOWN_FILE_EXTENSION. This hook mirrors
// what Vite does: resolve an asset import to its public URL string.
//
// URLs come from the client build's manifest, so the sitemap points at the
// real hashed files in dist/assets/ rather than dead /src/... paths. If the
// manifest is missing (loader used before a build) we fall back to the source
// path, which keeps the scripts runnable instead of crashing.
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve, relative, sep } from 'node:path'

const ASSET_RE = /\.(jpe?g|png|gif|svg|webp|avif|ico|bmp|mp4|webm|woff2?|ttf|otf|eot|css)(\?.*)?$/i

const root = process.cwd()

// Vite writes .vite/manifest.json when build.manifest is on. Keys are
// project-relative source paths with forward slashes ("src/images/a.jpg").
let manifest = {}
const manifestPath = resolve(root, 'dist/.vite/manifest.json')
if (existsSync(manifestPath)) {
  try {
    manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  } catch {
    manifest = {}
  }
}

// Percent-encode each path segment the way Vite does when it inlines an asset
// URL, so filenames containing spaces ("Business Hub.png") come out as
// "/assets/Business%20Hub-<hash>.png" and match what the site actually serves.
const encodePath = (p) => p.split('/').map(encodeURIComponent).join('/')

function publicUrl(fileUrl) {
  const abs = fileURLToPath(fileUrl)
  const key = relative(root, abs).split(sep).join('/')
  const entry = manifest[key]
  return '/' + encodePath(entry?.file ?? key)
}

export async function load(url, context, nextLoad) {
  if (url.startsWith('file:') && ASSET_RE.test(url)) {
    const source = `export default ${JSON.stringify(publicUrl(url))}`
    return { format: 'module', shortCircuit: true, source }
  }
  return nextLoad(url, context)
}
