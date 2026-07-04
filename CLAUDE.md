# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HK ChaseTech Power Trading Limited corporate website - a multilingual Next.js site deployed to Cloudflare via OpenNext.

**GitHub**: https://github.com/KevKwak/chasetech-website

## Commands

```bash
# Development
npm run dev              # Start Next.js dev server

# Build & Deploy
npm run build            # Build with OpenNext for Cloudflare
npx wrangler deploy      # Deploy to Cloudflare Workers

# Quality
npm run lint             # Run ESLint
```

## Architecture

### i18n Structure
- **Route pattern**: `/[lang]/...` where `lang` is `zh`, `en`, or `ko`
- **Content source**: JSON files in `content/` directory (`en.json`, `zh.json`, `ko.json`)
- **Static generation**: `generateStaticParams()` in layouts/pages pre-generates all language variants
- Default language is Chinese (`zh`) for fallback

### Key Conventions
- All page components under `app/[lang]/` receive `{ params: Promise<{ lang: string }> }` - must await params
- Content is imported directly as JSON: `import zh from "@/content/zh.json"`
- Path alias `@/*` maps to root directory (configured in `tsconfig.json`)

### Deployment
- Uses `@opennextjs/cloudflare` adapter for Cloudflare Workers
- `wrangler.jsonc` defines worker config with `nodejs_compat` flag
- `open-next.config.ts` configures edge wrapper and dummy caches (static site)

### Styling
- Tailwind CSS with custom brand palette (`brand-50` through `brand-900`)
- Custom colors: `accent` (#00D4AA), `dark-900/800`
- Fonts: Noto Sans SC (Chinese), Inter, Noto Sans KR (Korean)