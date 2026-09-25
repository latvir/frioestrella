# Frioestrella — Next.js migration baseline

Clean Next.js version of the original React/Vite + FastAPI/MetaGPTX project.

## What is already removed

- Python / FastAPI backend
- SQLAlchemy / Alembic / database requirement
- MetaGPTX SDK and runtime
- generated auth/admin/payment/storage scaffolding
- React Router

The site is now one Next.js project suitable for Vercel.

## Start locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## AI chatbot

The chatbot now calls the local Next route:

`POST /api/chat`

For OpenAI, add this to `.env.local`:

```env
OPENAI_API_KEY=sk-...
AI_MODEL=gpt-5.6-luna
AI_BASE_URL=https://api.openai.com/v1
```

The secret stays server-side and is safe to add as a Vercel Environment Variable.

If another OpenAI-compatible provider is used later, change `AI_BASE_URL`, `AI_MODEL`, and use either `OPENAI_API_KEY` or `AI_API_KEY`.

## Lead saving

There is intentionally no database in this migration.

If `LEAD_WEBHOOK_URL` is configured, a detected phone/email from AI chat is POSTed there together with the conversation. If it is not configured, the bot does not ask visitors to leave contact details and instead directs them to the public phone/email.

## Contact form

The original project only simulated a successful form submission. This migration does not fake a send.

To make the form send, configure `CONTACT_WEBHOOK_URL` to an endpoint that accepts JSON. This can later be replaced with EmailJS/Resend/etc. if preferred.

## Important remaining asset cleanup

Four large visual images in the original project were not stored in the ZIP. The source references them on the original MetaGPT image CDN. Those URLs are preserved so the layout remains the same.

Before final production handoff, download those images from the live/original project and place them under `/public/images`, then replace the four external URLs in:

- `components/HeroSection.tsx`
- `components/AboutSection.tsx`
- `components/ServicesSection.tsx`
- `app/layout.tsx` (OG image)

## SEO / languages

The visual language switcher is preserved as in the original project. The base Next metadata is now server-rendered for Latvian. Proper locale routes (`/ru`, `/es`, `/en`, `/de`) can be added as the next refactor if multilingual SEO is important.
