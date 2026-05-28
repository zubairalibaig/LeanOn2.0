# Sentry Setup for LeanOn

## Install
```bash
npm install @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

## Environment Variables (add to Vercel)
```
SENTRY_DSN=https://xxx@yyy.ingest.sentry.io/zzz
SENTRY_AUTH_TOKEN=sntrys_xxx    # for source maps upload
NEXT_PUBLIC_SENTRY_DSN=https://xxx@yyy.ingest.sentry.io/zzz
```

## Files created by wizard
- sentry.client.config.ts
- sentry.server.config.ts
- sentry.edge.config.ts
- next.config.js (wrapped with withSentryConfig)

## Manual instrumentation (after install)
Import in API routes where needed:
```typescript
import * as Sentry from '@sentry/nextjs'
Sentry.captureException(err)
```
