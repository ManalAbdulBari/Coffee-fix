# Coffee Fix – Faisalabad

A premium, fully responsive single-page café website for Coffee Fix, Faisalabad's finest coffee shop. Built with a luxury dark café aesthetic featuring Framer Motion animations, glassmorphism effects, and a warm espresso/amber color palette.

## Run & Operate

- `pnpm --filter @workspace/coffee-fix run dev` — run the café website (served at `/`)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS
- Animations: Framer Motion
- Forms: react-hook-form + zod
- Icons: lucide-react + react-icons
- Fonts: Playfair Display (serif headings) + Inter (body)
- API: Express 5 (api-server artifact)
- DB: PostgreSQL + Drizzle ORM (available but not used by the café site)

## Where things live

- `artifacts/coffee-fix/` — the café website (React + Vite, served at `/`)
- `artifacts/coffee-fix/src/pages/Home.tsx` — main page, imports all section components
- `artifacts/coffee-fix/src/components/` — all section components
- `artifacts/coffee-fix/src/index.css` — color palette (coffee/amber dark theme)
- `artifacts/api-server/` — Express API server (served at `/api`)
- `lib/api-spec/openapi.yaml` — API contract source of truth

## Pages & Sections

Single-page site with smooth-scroll navigation:
- **Hero** — full-screen coffee image background, animated headline + CTAs
- **About** — story, stats (4.9★, 100+ reviews, Since 2020, 2AM close)
- **Menu** — filterable grid: Signature Coffee, Hot Drinks, Cold Coffee, Desserts, Snacks (15 items)
- **Gallery** — masonry CSS columns with hover zoom effect
- **Reviews** — 6 customer testimonials with star ratings
- **Reservation** — react-hook-form table booking with confirmation modal
- **Contact** — address, phone, Instagram, embedded Google Map
- **Instagram Feed** — 6-post grid linking to @coffeefixpakistan
- **Footer** — quick links, contact, social

## Extra Features

- Loading screen: animated coffee cup spinner, fades out after 1.8s
- Sticky glassmorphism navbar with dark mode toggle
- Floating WhatsApp order button + scroll-to-top button (appear after 300px scroll)
- Dark mode default, persisted to localStorage
- Framer Motion scroll-reveal on every section
- Menu category filtering with AnimatePresence transitions
- Reservation confirmation modal popup
- SEO: title, meta description, Open Graph tags

## Business Details

- **Name:** Coffee Fix
- **Location:** Shop #28, Green Avenue, W Canal Rd, Raza Town, Faisalabad
- **Phone:** +92 311 3492349
- **Instagram:** @coffeefixpakistan
- **Hours:** Open Daily, Closes 2:00 AM
- **Rating:** 4.9/5 (100+ reviews)

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Google Fonts `@import url()` must be the absolute first line of `index.css` — before `@import "tailwindcss"`.
- All CSS custom property values use space-separated HSL (e.g. `25 55% 35%`) without the `hsl()` wrapper.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
