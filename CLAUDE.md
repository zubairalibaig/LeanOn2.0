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

- **Phone sign-in uses the MSG91 OTP WIDGET, and mints the Supabase session
  server-side** (Aug 2026). The clean "Supabase generates the OTP, MSG91 just
  delivers it" path — the old `app/api/webhooks/supabase-sms` Send-SMS hook —
  is dead: it needs a DLT-approved template, DLT needs an active GST, and
  LeanOn's GST is closed. MSG91's only no-DLT product is the **OTP Widget**,
  where **MSG91 generates AND verifies the OTP** and returns a token. So:
  - `app/auth/page.tsx` loads MSG91's `otp-provider.js` (`exposeMethods:true`,
    our own UI), calls `window.sendOtp`/`verifyOtp`, and posts the widget token
    to `app/api/auth/phone-widget`.
  - That route verifies the token with MSG91's `verifyAccessToken`
    (server-side, `MSG91_WIDGET_AUTHKEY`), **reads the verified phone from
    MSG91's response — NEVER from the request body**, then mints a real
    Supabase session: find-or-create the auth user by phone, set a throwaway
    random password, `signInWithPassword({ phone, password })`. Real Supabase
    tokens with rotation — NOT a hand-signed JWT. This is the one sanctioned
    place that bridges an external verification into a Supabase session; keep
    all of it server-side.
  - The verify auth key is called from Vercel's rotating IPs, so it MUST have
    **IP Security OFF** in the MSG91 dashboard, or every verify fails.
  - The old Send-SMS hook (`app/api/webhooks/supabase-sms`) is kept as dormant
    code for the day a DLT template + GST exist again — it lives under
    `/api/webhooks/` because `middleware.ts` exempts that prefix from the CSRF
    origin check. Do not delete it; do not wire it back without a DLT template.

- **Listener onboarding (2026-09, migration 060).** Two photos, never mixed up:
  the **verification selfie** is camera-only, uploaded via `/api/listener/selfie`
  into the `verifications` bucket at an HMAC path (`lib/selfie-storage.ts`) and is
  NEVER public — admin sees it via signed URLs; the **display photo** is uploaded
  from the gallery to `avatars/<uid>.display-<ts>.<ext>` (unique path — never
  overwrite a live photo) and is reviewed before going live. Gallery photos
  (`profile_photos`) are no longer collected or shown publicly. Option lists,
  taglines and the screening quiz live in `lib/listener-onboarding.ts` (shared by
  form + API). Education level/field are public; everything in
  `listener_applications.screening` is admin-only.
  Admin "Request Fix" with **New selfie** ticked archives the current selfie
  (`archiveSelfie()`), forcing a retake; account deletion removes all selfies.
  There is NO listener training programme — never claim listeners "complete
  training"; they are screened (quiz + review).
  **Debugging selfie failures and the service-role-key dependency of the
  selfie path: `docs/SELFIE_STORAGE.md`** — rotating `SUPABASE_SERVICE_ROLE_KEY`
  without first pinning `SELFIE_PATH_SECRET` orphans every stored selfie.

## SEO / AI-assistant rules (2026-09-24)

- **Never publish listener-earnings or "side income" content on indexable or AI-crawlable pages.**
  ChatGPT turned the old `/earn-by-listening` page into a flood of income-seeking listener sign-ups.
  Recruitment pages are listed in `lib/seo-noindex.ts` (`NOINDEX_PATHS` + `AI_BLOCKED_PATHS`,
  used by `app/robots.ts`); a new recruitment page must be added to both.
- Prices in copy must match `/pricing`, which reads `lib/constants.ts` / `lib/geo-pricing.ts`.
  Overseas pages quote US$10/15/20, never ₹160. Only ONE free 5-minute session per account.
- Near-duplicate pages are merged via `lib/seo-redirects.json` (308). Don't mass-generate
  templated keyword pages; Google declined most of the last batch.
- After deploying public-page changes, run `node scripts/indexnow.mjs` (Bing → ChatGPT search).

## Listener presence & request alerts (2026-09-24) — read `docs/NOTIFICATIONS.md` first

- **ONE service worker: `public/sw.js`** (fetch passthrough + push + notification click).
  Never register a second worker at scope `/` — the old `/firebase-messaging-sw.js`
  kept replacing `sw.js` (and vice versa) and silently dropped the push handler,
  so request alerts never showed. That URL now only `importScripts('/sw.js')`.
- Pushes are **web push**: send via `lib/push.ts sendPushToUser()` (all devices,
  `webpush` Urgency high + short TTL, data-only, dead tokens removed). `android.priority`
  does nothing for web tokens.
- In-page alerts use `showLocalNotification()` — `new Notification()` throws on Android Chrome.
- Presence rules live in `lib/listener-presence.ts` (15-min heartbeat; 4-hour away window
  only with a push device; auto-offline on missed requests). Heartbeats never set
  `is_available=true`; they report it back so the UI re-syncs.
- A request that runs out of time is cancelled as `timed_out` (decline route with
  `{ reason: 'timeout' }`), never `seeker_cancelled` / `declined`.

## Business invariants

- Platform fee: **flat ₹10 per paid session** (`PLATFORM_FEE`), paid by the
  seeker on top of the listener's rate. Seeker bears the Razorpay gateway fee
  at recharge (`grossRechargeAmount`). Wallet credits the tier amount from
  server-set order notes — never the gross.
- Listener service fee: **40%** of listener earnings since 2026-09-24 (was 15%
  from 2026-09-14) (`LISTENER_SERVICE_FEE_RATE`, `lib/constants.ts`), deducted at settlement
  (`lib/session-billing.ts settleSession()` — the single source of truth used
  by `/api/sessions` PATCH, `cleanup`, and `expire`). Listeners keep **60%**
  of every session. Copy leads with what listeners keep and what the fee covers,
  but always states the 40% plainly. Entirely separate from `PLATFORM_FEE` above — the
  seeker's charge and refund math are untouched by this fee; the seeker never
  sees or pays it. Applies only to sessions settled after the deploy date —
  `settleSession()` runs once per session at completion, so already-completed
  sessions are never recalculated. **Never call this a "commission" in any
  user-facing copy — "service fee" only.** User-facing surfaces that must stay
  in sync if this rate changes: `app/become-listener/page.tsx` (onboarding —
  mentions ONLY the 15% service fee, never the seeker's ₹10),
  `app/dashboard/page.tsx` (fee-update banner + per-session earnings display,
  which reads `listener_earnings.net_amount` — NOT `sessions.amount_held -
  sessions.platform_fee`, which no longer equals what the listener receives),
  `app/faq/page.tsx`, `app/get-paid-to-chat-india/page.tsx`, `app/terms/page.tsx`,
  `app/earn-by-listening/page.tsx`, `lib/listener-announcements.ts`,
  `public/llms-full.txt`, `app/press/page.tsx`, `app/blog/posts/therapy-cost-india.ts`.
  **The rate is LOCKED at session start:** `settleSession()` uses
  `serviceFeeRateAt(started_at)` from the dated `SERVICE_FEE_SCHEDULE` in
  `lib/constants.ts` (0% → 15% on 2026-09-14 → 40% on 2026-09-24), never the
  rate deployed at settlement time. To change the rate, ADD a dated entry at the
  top of that schedule — never edit or remove past entries. Admin breakdowns use
  the same lookup.
- **`listener_earnings.platform_fee` ≠ `sessions.platform_fee`.** On the session
  it is only the seeker's flat ₹10. On the earnings row it is LeanOn's TOTAL take
  for that session (₹10 + listener service fee + any NRI margin, ± pro-rata
  rounding). Never `SUM(listener_earnings.platform_fee)` as "seeker fees" — use
  `sessions.platform_fee` for that, and `listener_earnings.service_fee` (migration
  057) for the listener service fee alone.
- Text/voice pricing (2026-09-24): only the TEXT rate is stored
  (`listener_profiles.rate_per_min`); voice = text + `VOICE_RATE_PREMIUM` (₹5/min),
  via `sessionRatePerMin()` in `lib/constants.ts`. `/api/sessions` POST stores the
  per-mode rate in `sessions.listener_rate_per_min` — settlement caps the listener's
  share at that rate, so it MUST be the voice rate for voice sessions. Kill switch:
  `NEXT_PUBLIC_VOICE_PRICING=false` + redeploy → single rate for both modes.
  Voice→text fallback (`/api/sessions/switch-to-text`, `voiceSwitchRefund()`) refunds
  the seeker the voice premium for unused minutes by LOWERING `amount_held`; every
  settlement path (PATCH, cleanup, expire) must therefore bill from the row returned
  by its own conditional UPDATE — never an earlier read — or the premium is paid twice.
- **Settlement money movement lives in ONE place: `lib/settlement-ledger.ts applySettlement()`**
  (used by PATCH, cleanup, expire). Ledger rows are written only after the wallet credit
  succeeds. Seekers are charged pro-rata of THEIR price for minutes used (NRI included);
  the listener's share comes out of that. Abandoned sessions (nobody pressed End) bill
  up to the earlier participant's last heartbeat (`abandonedSessionEnd()`), not the cron time.
- **Payouts pay earnings only:** for a listener who also recharged, `/api/payout` caps the
  payout at settled earnings − earlier payout requests; deposits stay refundable.
- **`users.wallet_balance` can't be changed from the Supabase SQL Editor by a plain UPDATE** —
  the `users_guard_privileged_cols` trigger (migration 025) silently keeps the old value for
  any non-service-role write (the INSERTs in the same script still land). For a deliberate
  manual adjustment, inside one transaction: `set local request.jwt.claims = '{"role":"service_role"}';`
  then the UPDATE **and** a matching `wallet_transactions` row, so the admin wallet check stays clean.
  Log every manual adjustment (done and pending) in `docs/MONEY_OPERATIONS.md`.
- **Deleting an account never strands money:** self-deletion is refused while there is a wallet
  balance or a pending payout/refund; admin deletion keeps pending payouts/refunds payable, and
  leftovers show on the admin Overview as "Deleted accounts still holding money".
- Session durations: 5 (free trial) / 15 / 30 / 45 minutes. The free trial may be text OR voice.
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
- Migrations are MANUAL: owner runs them in Supabase SQL Editor, then
  refreshes `db/LIVE_SCHEMA.md`.
