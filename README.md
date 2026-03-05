# Nexus Swarm — Company Website

Futuristic, investor-focused marketing site for the drone swarm defense startup. Built with Next.js 14, TypeScript, and Tailwind CSS. Design inspired by industrial/military tech aesthetics: dark base, orange accent, status bars, grid overlays, and technical typography.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build
- `npm run start` — Run production server
- `npm run lint` — Run ESLint

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — Custom theme (brand black/orange/tan, grid patterns)
- **Fonts** — Space Grotesk (display), JetBrains Mono (labels/code feel)
- No shadcn components yet; design uses custom Tailwind + minimal custom CSS (status bars, corner brackets, grid overlay)

## Design tokens

- **Background:** `#0d0d0c` / `brand-black` `#1F1F1B`
- **Accent:** `brand-orange` `#FF5837`
- **Text:** `brand-tan` `#E9E6D4`
- **Status bars:** black bg + orange text, uppercase mono

Sections: Hero, Vision, Swarm Tech, Defense Grid, AI Control, Future Use Cases, Contact (form placeholder).
