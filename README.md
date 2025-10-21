# Hearthfire

Hearthfire is an inclusive, historically informed Heathen community website built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui conventions, and lucide-react.

## Getting Started

```bash
pnpm i
pnpm dev
```

Visit the site at http://localhost:3000 once the dev server is running.

## Production Build

```bash
pnpm build
pnpm start
```

## Features

- Poetic home and ritual storytelling alongside plain-language policies and accessibility content.
- Ember-inspired hero with reduced-motion safeguards.
- Event cards generated from typed seed data in `lib/data.ts`.
- Structured data for organization and events, SEO-friendly metadata, and sitemap/robots files.
- Accessible navigation, skip links, keyboard-friendly menus, labeled form controls, and ARIA live regions.

## Assets

- `public/logo.svg`: Minimal logomark placeholder ready for replacement.
- `public/textures/stone.jpg`: 32x32px repeating placeholder texture generated from a neutral stone swatch. Replace with a higher resolution asset if desired.

## Project Structure

See inline comments and directory names for route-specific content. Shared components live in `components/`, while brand and metadata configuration lives in `lib/`.
