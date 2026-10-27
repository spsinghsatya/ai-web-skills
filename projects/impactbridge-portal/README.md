# ImpactBridge Foundation — NGO & CSR Project Portal

A responsive single-page portal for a fictional NGO, presenting its mission, featured programs (with category filters and progress bars), impact figures and partner/donate calls to action. All content is sample data for demonstration.

This is the first website project built in **ai-web-lab**.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- react-router
- lucide-react icons

## Run

```bash
npm install
npm run dev      # development server
npm run build    # type-check + production build
npm run lint     # oxlint
```

## Structure

- `src/config/site.ts` — brand name, navigation, contact details
- `src/data/projects.ts` — sample project data
- `src/components/` — layout (navbar, footer) and UI primitives
- `src/pages/` — Home (complete); About, Projects, Contact (placeholders)

No secrets or environment variables are required.

Animation/3D (phase 2): motion page transitions and scroll reveals, plus a lazy-loaded three.js (react-three-fiber) hero accent.
