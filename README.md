# Sithar — AI-Powered Digital Marketing

A production-ready portfolio and lead-generation website built with a Next.js-compatible App Router, TypeScript, Tailwind CSS, and reusable React components.

## Local development

```bash
npm install
npm run dev
```

## Quality checks and production build

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content and configuration

- `lib/site-config.ts` — site URL, central booking link, contact endpoint, navigation, contact and social placeholders.
- `data/services.ts` — reusable service summaries and benefits.
- `data/posts.ts` — article metadata and structured article content. Add a new object to publish another article.
- `public/images/` — generated article images. Add Sithar's portrait here and replace the placeholder in `app/page.tsx`.
- `.env.example` — supported booking, form, Google Analytics, Google Tag Manager, and Meta Pixel variables.

Copy `.env.example` to `.env.local` for local configuration. Consultation buttons use `NEXT_PUBLIC_BOOKING_URL`; when it is empty, visitors are routed to the booking area on the contact page rather than a broken link.

The contact form submits JSON to `NEXT_PUBLIC_CONTACT_ENDPOINT` when configured. Until then it validates user input and clearly explains that delivery is not connected.

## Adding future proof

Real testimonials and case studies should be stored in dedicated data files and rendered with reusable cards only after Sithar supplies the source material. No fabricated proof is included in this version.
