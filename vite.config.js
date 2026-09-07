import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// Multi-page app: one real HTML entry per header menu item.
// Each page ships its own crawlable <head> (meta + JSON-LD) and, after the
// prerender step, full static body content for SEO / AI answer engines.
// The multi-page input applies to the CLIENT build only — the SSR build
// (npm run build:server) uses src/entry-server.jsx as its single input.
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
  build: isSsrBuild
    ? {}
    : {
        // Emitted to dist/.vite/manifest.json. The build scripts read it via
        // scripts/asset-loader.mjs so imported images resolve to their real
        // hashed URLs (e.g. /assets/Business Hub-BoYrR3C1.png) instead of
        // source paths, keeping sitemap image entries pointing at live files.
        manifest: true,
        rollupOptions: {
          input: {
            home: resolve(__dirname, 'index.html'),
            services: resolve(__dirname, 'services.html'),
            projects: resolve(__dirname, 'projects.html'),
            blog: resolve(__dirname, 'blog.html'),
            about: resolve(__dirname, 'about.html'),
            contact: resolve(__dirname, 'contact.html'),
            // Blog articles
            'post-cost': resolve(__dirname, 'blog/cost-to-build-house-chennai.html'),
            'post-builder': resolve(__dirname, 'blog/choosing-a-builder-tambaram.html'),
            'post-vaastu': resolve(__dirname, 'blog/vaastu-modern-homes.html'),
            'post-steps': resolve(__dirname, 'blog/successful-construction-project-steps.html'),
            'post-safety': resolve(__dirname, 'blog/site-safety-tips.html'),
            'post-tech': resolve(__dirname, 'blog/technology-modern-construction.html'),
            // Service detail pages
            'svc-residential': resolve(__dirname, 'services/residential-construction.html'),
            'svc-commercial': resolve(__dirname, 'services/commercial-construction.html'),
            'svc-renovation': resolve(__dirname, 'services/renovation-remodeling.html'),
            'svc-design': resolve(__dirname, 'services/design-and-planning.html'),
            'svc-civil': resolve(__dirname, 'services/civil-structural-works.html'),
            'svc-interior': resolve(__dirname, 'services/interior-fitout.html'),
            // Legal
            privacy: resolve(__dirname, 'privacy.html'),
            terms: resolve(__dirname, 'terms.html'),
          },
        },
      },
}))
