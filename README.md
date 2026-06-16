# Decentralized AI Advertising Platform

A next.js + solana + monad stack for transparent AI-powered ads, creator rewards, and analytics.

## Repository Structure
```
/
├─ src/
│  ├─ app/
│  │  ├─ api/
│  │  │  ├─ blockchain/
│  │  │  │  └─ route.ts          # API entrypoint for blockchain ops
│  │  │  └─ ads/
│  │  │     └─ route.ts            # Ads API (create/list/analytics)
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ globals.css
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ WalletProvider.tsx   # Solana wallet connect hook
│  │  │  ├─ AdCard.tsx
│  │  │  └─ AdsDashboard.tsx
│  │  └─ analytics/
│  │     └─ ChartComponent.tsx
│  ├─ lib/
│  │  ├─ solana.ts               # Solana client singleton
│  │  └─ drizzle.ts              # Drizzle store wrapper
│  └─ types/
│     └─ ads.d.ts                  # Ads data model
├─ public/
│  └─ favicon.ico
├─ .env.example
├─ next.config.ts
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Architecture Overview
- **AI Engine**: Server‑less inference via Vercel AI SDK
- **Blockchain Layer**: Solana Programs + SPL Tokens for reward distribution
- **Data Store**: Drizzle store for on‑chain contract state sync
- **Analytics**: Real‑time dashboards using Recharts + WebSockets
- **Routing**: File‑based Next.js 16 App Router (dynamic ad routes)
- **Security**: OAuth2 + wallet signature verification for creator actions

## Quick Start
```bash
bun install
cp .env.example .env
bun dev
```

## Blockchain Integration
- **Solana Provider**: `@solana/web3.js` + `wagmi`/`@rainbow-me/rainbowkit`
- **Token Minting**: `@solana/spl-token` program interaction
- **Ads API**: Protected routes with JWT + wallet signature checks

## Contribution
1. Fork the repo  
2. Create feature branch  
3. Run `bun typecheck && bun lint`  
4. Submit PR
