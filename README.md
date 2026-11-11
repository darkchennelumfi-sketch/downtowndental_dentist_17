# Downtown Dental — Jamestown, ND

A modern rebuild of the Downtown Dental website, built with Next.js (App Router), TypeScript, Tailwind CSS v4, Radix UI primitives, React Hook Form, and Zod.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Routes

- `/` — home
- `/treatments` — treatment library
- `/treatment/[slug]` — 13 treatment detail pages
- `/office/*` — about the doctors, staff, policies, financial, map & directions
- `/patient/*` — first visit, FAQ, common problems, emergencies, brushing & flossing, tooth decay prevention
- `/general-info/*` — related links, glossary
- `/contact-us/*` — contact, appointment request, payment plans
- `/resources`, `/privacy-policy`
- `/api/appointment` — appointment request endpoint

## Environment

Copy `.env.example` to `.env.local` and adjust as needed.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical/public site URL used in metadata and the sitemap. |
| `APPOINTMENT_WEBHOOK_URL` | Optional endpoint that receives appointment request JSON. When unset, requests are logged to the server console. |

## Deployment

The app is ready for Vercel. Run `vercel --prod` or connect the repository in the Vercel dashboard.
