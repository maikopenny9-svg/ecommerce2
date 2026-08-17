# VM Engineering website

A production-ready starter website for a software engineering and digital solutions company. Business content lives centrally in `src/data/site.ts` so it can be updated without hunting through components.

## Stack

Next.js, React, TypeScript and Lucide icons. The UI uses a small custom CSS system to keep the site lightweight.

## Get started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Run `npm run build` before deployment.

## Configuration

Copy `.env.example` to `.env.local` for future server-side integrations. Never commit keys. Update the company name, contact details, founder, services and case studies in `src/data/site.ts`. The contact-form contract is isolated in `src/services/contact.ts`; replace it with a secure server action, CRM, email provider or API integration.

## Deployment

Deploy to Vercel, Netlify, Cloudflare or another Next.js-capable platform. Set the production site URL in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts` before launch.

## GitHub

The repository includes `.gitignore`, an environment example and this setup guide. Initialise it with `git init`, commit your changes, then push it to your chosen GitHub repository.

