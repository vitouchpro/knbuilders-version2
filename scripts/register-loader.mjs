// Registers the asset loader hook (see ./asset-loader.mjs) for build scripts
// that import src/data.js, which pulls in .jpg/.png files Node can't parse.
// Used via `node --import ./scripts/register-loader.mjs script.mjs`.
import { register } from 'node:module'
import { pathToFileURL } from 'node:url'

register('./asset-loader.mjs', pathToFileURL(import.meta.filename))
