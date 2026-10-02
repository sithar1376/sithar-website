# AI Marketing Expert Portfolio

A production-ready, multi-page personal brand and lead-generation website built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal. Create a production build with `npm run build`.

## Project structure

- `app/` — routes, page metadata, sitemap, and global styles
- `components/` — reusable navigation, CTAs, cards, blog controls, and form UI
- `lib/site-content.ts` — personal details, booking URL, service content, and blog posts
- `public/` — favicon and visual assets

## Update the site

1. **Personal information:** edit `siteConfig` in `lib/site-content.ts`.
2. **Consultation link:** set `siteConfig.bookingUrl` once; all consultation buttons update automatically.
3. **Services:** edit the `services` array in `lib/site-content.ts`.
4. **Blog posts:** edit the `posts` array. Each slug automatically creates a route at `/blog/[slug]`.
5. **Testimonials and case studies:** the homepage contains clearly labeled placeholders. Replace them only with verified, approved material.
6. **Images:** replace `public/ai-growth-hero.jpg`; update the image alt text if its meaning changes. Replace the About page portrait placeholder with an optimized image component when a headshot is available.
7. **Contact form:** `components/contact-form.tsx` includes accessible validation and a honeypot integration point. It intentionally does not claim delivery. Connect a server-side form provider or email API and keep credentials in server-side environment variables.
8. **SEO:** update `siteConfig.url`, titles, and descriptions. Sitemap, robots, canonical links, and JSON-LD use this configuration.
9. **Analytics:** `data-event` attributes identify consultation clicks and form submissions. Add your analytics provider in `app/layout.tsx`; do not add IDs until supplied.
10. **Legal:** replace `/privacy` and `/terms` placeholders with reviewed copy before public launch.

## Deploy

The project is configured for OpenAI Sites. For another platform, follow that provider's Next.js deployment guide and supply any environment variables through its secret manager.
