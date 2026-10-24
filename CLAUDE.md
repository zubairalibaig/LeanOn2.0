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
- **Client-side `getUser()` error handling (Oct 2026):** `supabase.auth.getUser()`
  returns `{ data: { user: null }, error: AuthError }` on transient network/service
  failures — `user` is null even though the session is still valid. Client pages
  MUST check the `error` field before redirecting to `/auth`. The pattern is:
  ```typescript
  const { data: { user }, error: authError } = await sb.auth.getUser()
  if (authError) return  // transient — keep user on page, let them retry
  if (!user) { router.push('/auth'); return }  // genuinely not logged in
  ```
  Never do `if (!user) router.push('/auth')` without first checking `error`.
  Failing to do this causes listeners to be redirected to OTP on every network
  hiccup (root cause of the "keeps getting logged out" reports).

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
    Supabase session: find-or-create the auth user by phone, use a
    **stable HMAC-SHA256 derived password** (`HMAC(userId, SESSION_PASSWORD_SECRET)`),
    `signInWithPassword({ phone, password })`. Real Supabase tokens with rotation —
    NOT a hand-signed JWT. This is the one sanctioned place that bridges an external
    verification into a Supabase session; keep all of it server-side.
  - **`SESSION_PASSWORD_SECRET`** must be set in Vercel env and NEVER fall back to
    `SUPABASE_SERVICE_ROLE_KEY`. If the service role key rotates, every user's derived
    password changes → first login calls `updateUserById()` → all other devices logged out.
    A dedicated, never-rotating secret prevents this. The route fails closed if this env
    var is missing. Do NOT remove the `?? process.env.SUPABASE_SERVICE_ROLE_KEY` fallback
    that was deleted in Oct 2026 — it was a real mass-logout risk.
  - **Session password migration:** First time a user logs in after the HMAC migration,
    `signInWithPassword` fails (wrong password) and `updateUserById()` is called once to
    set the derived password — this invalidates other active sessions for that user. This
    is a one-time cost per account. The password migration path only runs when the error
    is status 400 AND matches `/invalid.*credentials/i` — broad transient errors are
    explicitly excluded to prevent accidental session invalidation.
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
- Prices in copy must match `/pricing`, which reads `lib/constants.ts` / `lib/geo-pricing.ts`. The India "from" price (`/pricing`, `QuickAnswer`, `llms.txt`, `lib/geo-questions.ts`) comes from the dated `lib/price-snapshot.ts` (seeker price range from listed listeners; 24 Oct 2026: 15 min from about ₹40, typically ₹160) — refresh it from the Live visibility audit's `listeners.rates`. ChatGPT ranked LeanOn by price per minute and read "from ₹160" as the minimum.
  Overseas pages quote "from US$10/15/20" (or local currency as the app shows it —
  `lib/geo-pricing.ts`, e.g. £8/12/16), never ₹160. Since 2026-10-14 the overseas price is the flat
  price OR the listener's Indian price if higher (`sessionTotalInr`) — never write "flat, whichever
  listener". India vs overseas is decided by the verified phone (`pricingCountry`), not the dropdown.
  Only ONE free 5-minute session per account — never "per listener". Listeners are in India: never claim 24/7 availability to overseas
  visitors ("availability follows Indian time"). Listeners are screened, never "trained".
- **`/talk` (Talk now) is the primary entry and the link AI assistants are given** (`llms.txt`,
  sitemap priority 1.0, home hero, footer, floating button, bottom menu, new sign-ups). The page is a
  client component whose server render is empty, so its crawlable text + JSON-LD live in
  `app/talk/layout.tsx` and the shared `TALK_FAQ` in `lib/talk-match.ts` — keep them true.
- **No listener rates, earnings, take-home % or service fee on ANY indexable / AI-readable page —
  including seeker pages and `/faq`** (2026-10-16: ChatGPT quoted /faq's earnings answers and a false
  "keep all of it" line to an under-18 asking for apps that pay to talk). Seeker pages quote the
  seeker's price only ("15 minutes from ₹160"). The listener fee lives on `/terms`, `/become-listener`
  and the dashboard. The old earnings blog post 308s to `/leanon-is-not-a-job`.
- **`/become-a-peer-supporter` is the ONE indexable, AI-readable recruitment page** (owner decision
  2026-10-16): purpose-first, 18+, screening steps, "not a job, sessions not guaranteed" — and NO
  money details of any kind. `llms.txt` points "how can I help others / become a peer supporter"
  questions there; income questions still get "LeanOn is not the answer". `/become-listener` (the
  form) stays noindex + AI-blocked.
- Near-duplicate pages are merged via `lib/seo-redirects.json` (308). Don't mass-generate
  templated keyword pages; Google declined most of the last batch.
- After deploying public-page changes, run `node scripts/indexnow.mjs` (Bing → ChatGPT search).
- **ChatGPT already recommends LeanOn (#1) for "I feel lonely… services with real human listeners?"**, quoting the
  HOME page's title and meta description (2026-10-24). Don't change the home title, meta description or the facts it
  quotes (one-to-one, text or voice, free 5-minute intro, from ₹160) without reason — see
  `docs/ai-visibility/WINNING_ANSWERS.md`. The weekly Live visibility audit fails if they disappear.

## Listener presence & request alerts (2026-09-24) — read `docs/NOTIFICATIONS.md` first

- **No SMS to users, ever.** All user notifications are in-app (`notifications` table → realtime
  bell) plus web push via `lib/push.ts`. The only SMS LeanOn triggers is the MSG91 login OTP.
  Twilio is legacy and was removed (Oct 2026) — don't reintroduce it. Note: almost no seekers
  have push enabled (only listeners are asked), so a seeker usually sees an alert only when
  they next open the app.

- **ONE service worker: `public/sw.js`** (fetch passthrough + push + notification click).
  Never register a second worker at scope `/` — the old `/firebase-messaging-sw.js`
  kept replacing `sw.js` (and vice versa) and silently dropped the push handler,
  so request alerts never showed. That URL now only `importScripts('/sw.js')`.
- Pushes are **web push**: send via `lib/push.ts sendPushToUser()` (all devices,
  `webpush` Urgency high + short TTL, data-only, dead tokens removed). `android.priority`
  does nothing for web tokens.
- In-page alerts use `showLocalNotification()` — `new Notification()` throws on Android Chrome.
- Presence rules live in `lib/listener-presence.ts`: no heartbeat for 15 min → offline, EXCEPT a listener
  push can reach (`push_tokens` seen ≤3 days) stays online up to `AWAY_WITH_ALERTS_MINS` = **60** min ("away
  mode"); auto-offline on missed requests (away → first miss). History: away mode was 4 h (2026-09-24), switched
  off 2026-10-16 (15 of 17 "online" were away), back at 60 min 2026-10-19 (listeners who lock their phone were
  going offline after 15 min; Talk now now asks in-app listeners first). Recovery branch:
  `recovery/pre-away-60-2026-10-19`. Heartbeats never set `is_available=true`; they report it back so the UI re-syncs.
- A request that runs out of time is cancelled as `timed_out` (decline route with
  `{ reason: 'timeout' }`), never `seeker_cancelled` / `declined`.
- **Talk now misses (2026-10-16):** a Talk now switch (`replacesSessionId` + `via:'talk'`) after the
  listener's full turn (≥ `TALK_SWITCH_MISS_SECS`) is stored as `cancel_reason='talk_unanswered'` and is a
  missed request — `recordMissedRequest()`
  (away → offline; active → offline on the 2nd unanswered in a row; `wasUnanswered()` defines it).
  A plain `seeker_cancelled` (incl. /browse switches) is never a miss. `/api/talk/candidates` first
  expires stale pending requests (`expireStalePendingRequests`) so they don't mark listeners busy, and ranks by presence (in-app ≤3 min > ≤15 min > away). Measured that day:
  15 of 17 "online" listeners were in away mode. Recovery branch: `recovery/pre-presence-fix-2026-10-16`.
- **Session analytics (migration 071, 2026-10-16):** `sessions.booked_via` ('talk'/'browse'),
  `talk_search_id` (one Talk now search; each request = a hop), `ended_by` ('seeker'/'listener'/
  'time_up'/'dropped') and table `talk_searches`, all written by `lib/session-analytics.ts` as separate
  best-effort updates — never in the money path, never read for decisions. Admin Sessions tab shows
  them + the Talk now funnel (`/api/admin/talk-metrics`). Sessions before 071 have NULLs.
- **Tab close (2026-10-16):** `ListenerPresence` sends a `{ leaving: true }` beacon on `pagehide`
  (not bfcache). `/api/presence` only AGES `last_heartbeat_at` to `LEAVE_GRACE_SECS` (180s) short of
  THAT listener's limit (60 min if push can reach them, else 15) — never sets offline directly — so a reload or another open LeanOn tab (90s heartbeat) keeps
  the listener online, and the normal sweep takes them offline ~3 min after the last tab closes.

## Android app (2026-10-19) — read `docs/ANDROID_APP.md`

- **`mobile/` = the Play Store app**: Capacitor shell (`server.url` www.leanon.app, package/applicationId `com.leanon.app` — Play listing is locked to it; Java namespace `app.leanon`)
  + native call-style request alerts (FCM data messages → `LeanOnMessagingService` → `RequestAlert`
  ringing CallStyle notification + full-screen `IncomingRequestActivity`). The old `android/` folder and
  `build-twa.yml` are the deprecated TWA — don't use them.
- The app's WebView has **no Push API**: the website talks to the app through `window.LeanOnAndroid`
  (`LeanOnBridge.java`, wrapped by `leanOnApp()` in `lib/firebase-client.ts`). App tokens are registered
  with `kind:'android_app'` → `push_tokens.user_agent` prefix `native:android` → `sendNativePush`
  (android priority high). Web tokens go through `sendWebPush` unchanged.
- A request's alert MUST be stoppable: `sendRequestWithdrawn()` (type `request_closed`) stops the
  ringing; the page's `closeLocalNotifications('leanon-req-<id>')` also calls `stopRinging`.
- Build: `.github/workflows/build-android.yml` (debug APK on every `mobile/` push; signed `.aab` on
  manual run with release=true, from repo secrets). Bump the version code for every Play upload.
  Never commit `google-services.json`, a keystore or its passwords.

## Contact-detail guard (2026-10-20)

- **Owner rule: no genuine message may be blocked.** Two tiers (`lib/contact-guard.ts checkContact()`): BLOCK only
  an actual contact DETAIL — a phone number written like one (Indian mobile / +intl; not marks, IDs after "PNR/roll/
  order…", round figures, toll-free 1800, known helplines), an email, a profile/chat link (wa.me, t.me, instagram.com/
  <user>…), a handle given as a handle ("ig: priya_k12", "@priya_k12", a message that is just "theurbandude_lll").
  Everything that only HINTS ("text me on my ig", "insta id do", websites, digits in pairs) is DELIVERED and flagged.
  Session chat (`/api/messages`) + offline messages refuse the block tier with 422 `contact_blocked`; both tiers are
  recorded in admin → Reports as `contact_attempt` (BLOCKED vs "delivered, please review"; max 3 per sender per
  conversation/day). **After ANY change run `npx tsx scripts/check-contact-guard.ts`** (266 genuine + 32 hints must
  pass, 50 details must block, 80k seeded fuzz messages must never block). Reason: a competitor posed as a seeker
  and got a listener's Instagram.
- Also on listener bio / lived experience (apply + profile edit — public pages). The session page drops a realtime
  `msg` broadcast carrying contact details (broadcasts come from the other browser, not the server). Migration 072
  removes the browser INSERT/UPDATE policies on `messages` and `listener_messages` — all writes go through the API.

## Suspension (2026-10-13, migration 068)

- **Suspended = `users.is_suspended` OR `listener_profiles.is_suspended`.** Both block login,
  pages and actions. Admin has two actions only: **Suspend** (undo: Unsuspend) and **Ban**
  (undo: Unban only). The listener-only "Suspend listener" was removed. Check with
  `lib/suspension.ts suspensionStatus()` (fails closed on read errors), never one flag alone.
- `auth.admin.signOut()` takes a **JWT, not a user id** — it can't log a user out by id.
  Suspension kills logins via a Supabase Auth ban: DB trigger `sync_auth_ban()` (068, also
  deletes `auth.sessions`) + `syncAuthBan()` after every admin suspend/unsuspend action.
- End-user tokens can't UPDATE/DELETE `listener_profiles` or set `users.avatar_url` (068) —
  all such writes go through server routes with the service role.

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
  `app/get-paid-to-chat-india/page.tsx`, `app/terms/page.tsx`,
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
