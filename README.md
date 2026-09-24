# CareNest HomeCare

A compassionate, high-converting homecare marketing site built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying

This project deploys as-is on Vercel: push to a Git repo, import it in Vercel, and it builds with the default Next.js settings.

## Structure

- `app/` — routes: landing (`/`), `/services`, `/contact`, `/about`, `/faq`, plus `/privacy-policy` and `/hipaa-notice` placeholders
- `components/` — Navbar, Footer, Hero, ServicesPreview, WhyChooseUs, Testimonials, CTASection, ServiceAccordion, ProcessSteps, ZipCodeFinder, ContactForm, FaqAccordion, Button
- `lib/constants.ts` — single source of truth for brand info, nav links, services, testimonials, FAQ data, and the ZIP-code service area list. Edit here first for content changes.

## Before launch

- Swap the Unsplash hero/about placeholder photos for licensed brand photography.
- Wire `ContactForm` to a real endpoint (API route, CRM, or email service) — it currently only shows a client-side success state.
- Replace the ZIP-code list in `lib/constants.ts` (`SERVICED_ZIP_PREFIXES`) with your real service area logic.
- Have counsel review the placeholder Privacy Policy and HIPAA Notice pages.
- Update `BRAND` in `lib/constants.ts` with your real phone number, address, and email.
