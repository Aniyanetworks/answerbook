# ANS GHL SaaS

Marketing/lead-gen site for **ANS GHL SaaS** — a GoHighLevel-based
automation product ("Growth Tier — Book More Jobs", $397/month) for Ontario
home-service trade contractors.

## Stack

- Next.js (App Router, TypeScript) + Tailwind CSS
- Netlify, via `@netlify/plugin-nextjs`
- Blog: dynamic, fetched from an external API fed by an n8n publishing
  workflow (see `lib/blog.ts`), with 5-minute ISR
- Lead forms: GoHighLevel native embeds (`components/GHLFormEmbed.tsx`)

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in real values
npm run dev
```

## Configuration

All brand name, contact info, and third-party IDs are centralized in
[`lib/config.ts`](lib/config.ts), sourced from environment variables — see
[`.env.example`](.env.example) for the full list. Nothing else in the
codebase should hardcode a brand name, domain, or third-party ID.

## Content that needs review before launch

- [`app/privacy/page.tsx`](app/privacy/page.tsx) and
  [`app/terms/page.tsx`](app/terms/page.tsx) contain placeholder legal
  boilerplate — needs legal review, a real business address, and confirmed
  data-handling practices.
- Testimonials in the niche/home pages are placeholders marked
  `{/* TODO: replace with real testimonial */}`.
- Visual system (colors, type) in `app/globals.css` is a placeholder —
  swap the CSS variables once final brand assets are ready.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
