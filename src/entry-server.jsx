// Server-side render entry for static prerendering (SSG).
// Vite builds this with `--ssr`; scripts/prerender.mjs imports `render()`
// and bakes the HTML string into each dist/*.html file at build time.
// Uses React's built-in renderToString — no extra dependencies.
import { renderToString } from 'react-dom/server'
import Layout from './components/Layout.jsx'
import Article from './components/Article.jsx'
import ServiceDetail from './components/ServiceDetail.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import Blog from './pages/Blog.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import { getPost } from './content/posts.js'
import { getService } from './content/services.js'

const ROUTES = {
  home: Home,
  services: Services,
  projects: Projects,
  blog: Blog,
  about: About,
  contact: Contact,
  privacy: Privacy,
  terms: Terms,
}

export function render(key) {
  // Blog articles: key is "post:<slug>"
  if (key.startsWith('post:')) {
    const post = getPost(key.slice(5))
    if (!post) throw new Error(`Unknown post: ${key}`)
    return renderToString(
      <Layout current="blog">
        <Article post={post} />
      </Layout>,
    )
  }

  // Service detail pages: key is "svc:<slug>"
  if (key.startsWith('svc:')) {
    const service = getService(key.slice(4))
    if (!service) throw new Error(`Unknown service: ${key}`)
    return renderToString(
      <Layout current="services">
        <ServiceDetail service={service} />
      </Layout>,
    )
  }

  const Page = ROUTES[key]
  if (!Page) throw new Error(`Unknown route: ${key}`)
  return renderToString(
    <Layout current={key}>
      <Page />
    </Layout>,
  )
}

export const routeKeys = Object.keys(ROUTES)
