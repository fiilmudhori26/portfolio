# AGENTS.md — Rahmad Portfolio

## Commands
- `npm run dev` — dev server at localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint

## Project Structure
- `app/` — Next.js App Router pages. `layout.tsx` is root layout (Inter font, light/dark body classes). `page.tsx` is the main portfolio home.
- `app/corporate/` — separate corporate landing page at `/corporate`
- `components/` — shared UI components (Navigation, Footer, CursorGlow, etc.)
- `components/sections/` — portfolio page sections (Hero, About, Skills, Projects, etc.)
- `lib/data.ts` — all personal content data (personalInfo, skills, experience, projects, etc.)
- `lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)

## Conventions
- `'use client'` for interactive components; server components by default
- `@/` path alias maps to project root
- `cn()` from `lib/utils` for conditional class merging
- Tailwind config has custom colors (primary, dark, accent, surface, muted, border), pill border-radius, and custom animations (fade-in, slide-up, float, pulse-glow, gradient)
- CSS uses `@layer components` with utility classes: `container-wide`, `heading-lg`, `heading-md`, `card-premium`, `btn-primary`, `btn-secondary`, `btn-ghost`, `glass`, `gradient-text`
- Icons from `lucide-react`
- Animations via `framer-motion`
- Dark mode via `class` strategy

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint

## Routes
- `/` — main portfolio page (personal portfolio of Rahmad Akbar)
- `/corporate` — corporate landing page (separate, not part of portfolio)

## Key Files
- `lib/data.ts` — single source of truth for all personal content
- `lib/utils.ts` — `cn()` utility for conditional class merging
- `tailwind.config.ts` — custom design tokens (colors, fonts, animations)
- `app/globals.css` — global styles with component layer utilities

## Conventions
- `'use client'` for interactive components
- `@/` path alias maps to project root
- Icons from `lucide-react`
- Animations via `framer-motion`
- Dark mode via `class` strategy
- Custom CSS component classes in `globals.css` (`@layer components`): `container-wide`, `heading-lg`, `heading-md`, `card-premium`, `btn-primary`, `btn-secondary`, `btn-ghost`, `glass`, `gradient-text`
