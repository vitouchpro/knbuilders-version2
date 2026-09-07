# KN Builders — Construction Website

A modern, single-page React marketing website for **KN Builders**, a residential &
commercial construction company in **Tambaram, Chennai**. The design is adapted from a
construction-website UI/UX reference (navy + orange theme) into a fully responsive React app.

## Tech stack

- **React 18** + **Vite 6** (fast dev server & build)
- **Tailwind CSS 3** (theme tokens for `navy` / `orange`)
- Inline SVG icons (no icon library dependency)
- Google Fonts: Plus Jakarta Sans (display) + Poppins (body)

## Sections (in engagement order)

1. Header + sticky nav with "Get A Quote"
2. Hero — headline, service tags, stats (640+ / 25+ / 450+)
3. About / Who We Are + Our Mission
4. Services — Residential, Commercial, Renovations
5. How We Work — 3-step process
6. Recent Projects — The Business Hub, Sky Haven
7. Why Choose Us — 4 value props
8. Contact — form + address/contact/hours card
9. Team — Meet the Faces
10. Testimonials — client reviews
11. News & Blogs
12. FAQ accordion
13. Newsletter + Footer

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173 (npm run start does the same)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Editing content

All copy, stats, services, projects, team, testimonials, blogs and FAQs live in
[`src/data.js`](src/data.js). Images are royalty-free Unsplash URLs defined in the same file —
swap the `IMAGES` URLs to use your own photos. Contact details (address, phone, email) are
placeholders for Tambaram, Chennai — update them in `src/App.jsx` (`Contact`, `Footer`) and
`src/data.js`.

## Images / licensing

All photos use [Unsplash](https://unsplash.com) which is free for commercial and
non-commercial use, **no attribution required, no copyright restrictions**.
