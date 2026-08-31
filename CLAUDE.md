# LeanOn.app — Engineering Ground Rules

## ⚠️ Read these files BEFORE changing code

1. **`db/LIVE_SCHEMA.md`** — the authoritative production DB schema.
   Migration files describe intent, NOT reality. The live DB has drifted
   from migrations multiple times (phone constraints, duration checks,
   missing policies, missing FK cascades). Validate every DB-touching
   change against LIVE_SCHEMA.md. If it's stale, ask the owner to re-run
   `db/dump-live-schema.sql` and refresh it.
2. **`PROJECT.md`** — business rules (fee model, session durations, trials).

## Architecture rules (learned from production bugs)

- **Never write to `users` / `listener_profiles` / `listener_applications`
  from the browser client.** RLS policies + guard triggers + constraints
  make browser writes fragile. All writes go through server API routes
  using `createAdminClient()` with identity from the verified session
  cookie (see `app/api/auth/profile`, `app/api/listener/apply`,
  `lib/ensure-user-row.ts`).
- **`@supabase/ssr` is pinned at v0.3.0.** Cookie API is `get`/`set`/
  `remove`. `getAll`/`setAll` DO NOT EXIST in this version — they
  silently no-op (this broke all authenticated routing once). If you
  upgrade the package, update `middleware.ts`, `lib/supabase-server.ts`,
  and re-test login + protected routes.
- `public.users.id` has **no FK to auth.users** in the live DB. Deleting
  an auth user orphans the public row. `lib/ensure-user-row.ts` reconciles
  the resulting phone-uniqueness conflicts — keep using it.
- Admin auth: env-var based (`ADMIN_SECRET` / `ADMIN_PHONE`+`ADMIN_PIN`),
  see `lib/require-admin.ts`. The synthetic admin user id must never be
  written to FK columns — use `dbUserIdOrNull()`.

- **SMS OTP is delivered by MSG91, not Twilio** (switched Aug 2026 — Twilio
  cost ~₹4.75/SMS via a US long code that Indian carriers filter under DLT;
  MSG91 is ~₹0.20 and DLT-compliant). Supabase Auth has no native MSG91
  provider, so delivery goes through the **Send SMS auth hook** →
  `app/api/webhooks/supabase-sms`. **Supabase still generates, verifies and
  rate-limits the OTP and mints the session** — the hook only swaps the
  delivery truck, which is why `app/auth/page.tsx` needed zero changes. Never
  replace this with a client-side OTP widget: that would require minting
  Supabase sessions by hand, which is the exact fragile path this file warns
  about. To roll back, disable the hook in the dashboard — no deploy needed.
- The hook lives under `/api/webhooks/` deliberately: `middleware.ts` exempts
  that prefix from the CSRF origin check, and Supabase calls it
  server-to-server with no `Origin` header.

## Business invariants

- Platform fee: **flat ₹10 per paid session** (`PLATFORM_FEE`), listener
  keeps 100% of their rate. Seeker bears the Razorpay gateway fee at
  recharge (`grossRechargeAmount`). Wallet credits the tier amount from
  server-set order notes — never the gross.
- Session durations: 5 (free trial) / 15 / 30 / 45 minutes.
- Crisis helplines: ONLY NIMHANS (080-46110007) and Tele-MANAS (14416).
  Never add iCall, Vandrevala, SNEHI, or any other number.
- Soft delete only — never hard-delete user data.
- The owner's full name must never appear anywhere on the platform.
- Admin email/phone live in env vars only — never in code or UI.

## Cost control (Vercel free tier — Fluid Active CPU is the binding limit)

The constraint is **Fluid Active CPU** (billed on compute, NOT DB-wait time), not
invocation count — so the levers are SSR/CPU-heavy work, not request volume.
Done so far: e2e suite gated to manual/PR (was hammering prod every push +
daily cron); `/contact,/wallet,/history,/profile,/sessions` made static (were
`force-dynamic` client shells); `/listener/[id]` put on 60s ISR.

**Deferred levers — pick these up only if CPU climbs toward the cap again:**
- **`/browse` fallback poll 60s → 120s** (`app/browse/page.tsx`). It re-fetches
  all listeners per open tab; the realtime `listener-availability` channel is
  the primary and this is only the dropped-socket fallback. Trade-off: up to an
  extra 60s of stale availability on a missed realtime message. NOT changed yet
  because this poll is the freshness safety-net behind the old "online but shows
  offline" ghost bug — treat with the same care as the presence heartbeat.
- **Short-cache `/api/listeners`** (currently `force-dynamic` + `no-store`).
  Same freshness caveat, more acute — leave `no-store` unless CPU forces it.
- **Presence incoming-check 20s → 30s** (`ListenerPresence.tsx`) — small, and
  also freshness-sensitive.

## Testing

- `tests/e2e-leanon.spec.ts` — anonymous flows + API security (1900 lines).
- `tests/e2e-authenticated.spec.ts` — authenticated journeys. Requires
  Supabase **test phone numbers** (Dashboard → Auth → Providers → Phone →
  Test phone numbers) and env vars — see that file's header.
- Run: `PLAYWRIGHT_BASE_URL=https://www.leanon.app npx playwright test`
- TypeScript: `npx tsc --noEmit` must stay clean.
- Build needs `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  set (placeholders fine for build-only).

## Deploy flow

- Push to `main` → Vercel auto-deploys leanon.app.
- Also push to `claude/setup-leanon-access-eEw0A`.
- Migrations are MANUAL: owner runs them in Supabase SQL Editor, then
  refreshes `db/LIVE_SCHEMA.md`.
