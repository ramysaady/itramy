# IT Ramy — itramy.com

Personal business website for **IT Ramy**, IT & Network Automation Specialist based in Tripoli, Lebanon.

Built as a fast, SEO-ready single page marketing site with no backend and no database. Leads arrive
through WhatsApp and email.

## Stack

- React 18 + Vite 6
- Tailwind CSS 3 (dark mode via `class`)
- Framer Motion for scroll and layout animation
- lucide-react icons
- vite-plugin-pwa (installable, offline precache)
- Deployed on Cloudflare Pages

## Local development

```bash
npm install
npm run dev
```

Then open the printed local URL (default `http://localhost:5173`).

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run icons` | Regenerate the PWA PNG icons from the brand mark |

## Configuration

All contact details and navigation live in one file:

```text
src/config/site.js
```

Before going live, set the real WhatsApp number there. Use international format, digits only, no
`+` and no spaces:

```js
const WHATSAPP_NUMBER = '9613123456';
```

The same file also holds the email address, LinkedIn URL, location and the pre-filled WhatsApp
message.

## Project structure

```text
public/            Static assets served as-is
  _headers         Cloudflare security and caching headers
  favicon.svg      Brand favicon
  og-image.svg     Open Graph / social preview image
  robots.txt       Crawler rules
  sitemap.xml      Sitemap for search engines
  icons/           Generated PWA icons (180, 192, 512)

scripts/
  generate-icons.mjs   Renders the PNG icons with zero image dependencies

src/
  components/
    layout/        Navbar, Footer, Loader, BackToTop, FloatingWhatsApp, ScrollProgress
    sections/      Hero, About, Services, WhyMe, Portfolio, Skills, Testimonials, Contact
    ui/            Reveal, SectionHeading, Counter, Logo, ThemeToggle, ParticleField, Seo
  config/site.js   Single source of truth for contact details and navigation
  data/            Content for services, portfolio, skills, testimonials, about, why-me
  hooks/           useTheme, useTypewriter, useActiveSection
  pages/           Home, NotFound
  App.jsx          Shell, routing, loading screen
  main.jsx         Entry point
  index.css        Tailwind layers and reusable component classes
```

## Editing content

Content is data-driven, so no JSX changes are needed for routine updates:

- Services: `src/data/services.js`
- Portfolio projects: `src/data/portfolio.js`
- Skills and levels: `src/data/skills.js`
- Testimonials: `src/data/testimonials.js`
- About text, expertise cards and stats: `src/data/about.js`
- Why-choose-me cards and process steps: `src/data/whyMe.js`

## Deploying to Cloudflare Pages

The repository is connected to Cloudflare Pages. Use these build settings:

| Setting | Value |
|---------|-------|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |
| Node version | 20 or newer |

Pushing to `main` triggers a new deployment automatically.

DNS for `itramy.com` is managed in Cloudflare. The apex record is handled by the Pages project and
`www` is a proxied CNAME to the `pages.dev` hostname. Email records for Private Email
(`MX`, `SPF`, `mail`, `autoconfig`, `autodiscover`, `_autodiscover._tcp`) must stay in place, with the
mail hostnames set to **DNS only**.

## Performance and accessibility notes

- Route-level code splitting plus manual vendor chunks for React, Framer Motion and icons
- Animated particle background pauses when scrolled out of view and is disabled under
  `prefers-reduced-motion`
- Fonts load with `display=swap` and preconnect hints
- Semantic landmarks, skip link, visible focus rings and `aria-label`s on all icon-only controls
- Long-lived immutable caching for hashed assets, revalidation for `index.html`

## License

Copyright © IT Ramy. All rights reserved.
