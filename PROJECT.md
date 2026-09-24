# LeanOn 2.0 — Project Bible (Source of Truth)

> This file is the durable contract for how LeanOn works. It changes rarely.
> Roadmap, build status, account credentials, and cost estimates live in a
> SEPARATE file (STATUS.md). Do NOT put volatile information here.
>
> **Claude: read this file in full before writing or modifying any feature.
> If a request contradicts anything here, stop and flag it — do not silently
> reinterpret. If a detail you need is not specified here, ask rather than invent.**

---

## 0. How to Use This File

- This is the authority on **mission, positioning, workflows, data contracts, and invariants.**
- The tech stack listed in §6 is fixed. Do not substitute libraries or services without an explicit decision being recorded here first.
- When in doubt about *why* a rule exists, see §2 and §4 — the reasoning is intentionally preserved so judgment calls stay aligned.

---

## 1. Mission (One Line)

**Connect lonely, overwhelmed people with real humans who have lived through the same thing — instantly, affordably, and safely.**

---

## 2. The Core Insight (never forget this)

AstroTalk's founder discovered that a large share of night-session bookings were not about astrology. People booked astrologers just to talk, because they were lonely.

LeanOn removes the astrology wrapper and monetises the real thing: **human connection and lived-experience guidance.**

**This is not just an internal theory — it is documented.** Reporting on India's astrology-app boom (The Revealer, "Why Young People in India Are Turning to Astrology Apps for Answers") quotes an astrologer describing exactly this pattern on the record: *"When I am doing night sessions, most people just wanna talk. I am just a stranger they can tell their stories to."* Post-midnight, these chat apps reportedly shift from divination into confessionals. This is the exact searcher LeanOn's discoverability strategy (see `DISCOVERABILITY.md`) now deliberately targets — see `/talk-to-someone-not-astrologer` and `/blog/why-people-call-astrologers-to-talk`. When building anything that references this comparison: never disparage astrology or its users, never name a specific competitor by brand, and only cite facts actually sourced — do not invent statistics beyond what is documented here.

- India has millions of emotionally isolated people.
- Almost no affordable emotional support exists.
- Therapy stigma is real and deep.
- Joint families mean people need text privacy.
- People are willing to pay at 2 AM when they are hurting.

This insight is the reason the product exists. Every feature should serve it.

---

## 3. What LeanOn Is NOT (critical positioning)

LeanOn is a **PEER SUPPORT** platform. It is not a mental health, clinical, or therapy platform.

- ❌ Not therapy, counselling, or treatment
- ❌ Not clinical or psychiatric care
- ❌ Not a substitute for professional help
- ✅ Real people with lived experience
- ✅ Pay-per-session peer conversations
- ✅ Emotional support from someone who has been there

**Language rules (enforce in all UI, copy, and data models):**
- NEVER use the words *therapy, counselling, counsellor, treatment, patient, clinician, diagnosis* anywhere user-facing or in schema names.
- Use *listener, seeker, session, lived experience, peer support.*

**Why it matters:** "Peer support" does not require clinical licensing; "counselling" and "therapy" do. This is both the legal shield and the ethical line. Analogy: LeanOn is to therapy what a support group (or AA) is to clinical rehab — legitimate, needed, and deliberately different.

**Do not build:** diagnostic tools, assessment forms, symptom trackers, or medical intake logs.

---

## 4. Who Uses LeanOn

### Seekers (book sessions)
- Urban Indians, ~22–45.
- Lonely, often at night; joint-family households needing text privacy.
- Going through breakups, career confusion, startup stress, grief, loneliness, student pressure.
- Cannot afford ₹2000/session therapy. Don't want a diagnosis — want to be heard.

### Listeners (earn)
- Everyday people with **lived experience** in a specific situation — NOT professionals.
  (LeanOn v1 used professionals and failed on supply. v2 must work differently — see §11.)
- Examples: a founder who survived a failed startup, someone who recovered from grief, a career changer, a student who got through exams.
- Work from their phone, anytime.

---

## 5. Business & Wallet Model

| Element | Specification |
|---|---|
| Base rate | ₹10/min base; listeners set ₹8–25/min |
| Text vs voice (2026-09-24) | Listener sets the **text** rate; **voice = text + ₹5/min** (`VOICE_RATE_PREMIUM`), always. Only the text rate is stored. The booked mode's rate is saved on the session (`listener_rate_per_min`) and settlement uses it. NRI flat prices are the same for both modes. Kill switch: `NEXT_PUBLIC_VOICE_PRICING=false`. |
| Session blocks | Fixed only: **15 min**, **30 min**, or **45 min**. No open-ended metered calls. |
| Free trial | **1 free 5-minute session per seeker** (one per listener). Reduced from 5 → 3 → 2 → 1 as each reduction improved paid conversion without hurting top-of-funnel. |
| Platform fee (seeker) | **Flat ₹10 per paid session**, paid by the seeker on top of the listener's rate, shown as a separate transparent line item at checkout. Razorpay's gateway commission is also borne by the seeker. Do not over-advertise the fee — just keep the logic and checkout display honest. |
| Service fee (listener) | **40% of listener earnings** since 2026-09-24 (was 15% from 2026-09-14) (`LISTENER_SERVICE_FEE_RATE`, `lib/constants.ts`), deducted at settlement (`lib/session-billing.ts`). Sessions settled before a change are untouched (settlement runs once, at session completion, never retroactively). Listeners keep **60%** of every session. Listener-facing copy leads with what they keep (60%) and what the fee covers, but always states the 40% plainly. Never call this a "commission" in user-facing copy — "service fee" only. This is entirely separate from the seeker's flat ₹10: the seeker's charge and refund math are completely unaffected by this fee. |
| Wallet | Recharge in fixed pools: ₹200 / ₹500 / ₹1000 / ₹2000. **Refundable anytime.** |
| Payments | Razorpay. |

**Wallet integrity:** balance must be validated **server-side** before any session is matched. See §9 race-condition rules.

---

## 6. Tech Stack (FIXED — do not substitute)

| Layer | Tool |
|---|---|
| Frontend + Backend | Next.js 14 (App Router, TypeScript, Tailwind CSS) |
| Database + Auth + Realtime | Supabase (PostgreSQL, Auth, Realtime) |
| Phone OTP auth | **Supabase Auth phone OTP** (not a third-party SMS verifier) |
| Voice calls | Agora.io Web SDK (RTC tokens generated server-side, never client-side) |
| Payments | Razorpay (server-created orders; webhook-validated) |
| AI moderation | Claude API (Haiku) — first-line content moderation |
| Email (OTP fallback / receipts) | Resend |
| Admin panel | Internal secure Next.js API routes + admin UI (Retool acceptable as interim external option) |
| Hosting | Vercel |
| KYC (later) | Surepass (Aadhaar OTP) |

> If any service above needs to change, record the decision in this file **before** building against the new service.

---

## 7. Screens & Routing Map

| Path | Access scope | Notes |
|---|---|---|
| `/` | Public | Landing / conversion |
| `/auth` | Public | Phone + OTP |
| `/browse` | Authenticated seekers | Listener card grid |
| `/listener/[id]` | Authenticated seekers | Single profile |
| `/wallet` | Authenticated seekers | Recharge portal |
| `/session/[id]` | Validated seeker + assigned listener only | Live session |
| `/dashboard` | Verified listeners only | Availability + earnings ledger |
| `/become-listener` | Authenticated users | Onboarding form |
| `/privacy` | Public | Privacy policy |
| `/terms` | Public | Terms of use |
| Admin | Admin role only | Verification, finance, moderation |

Build status for each lives in STATUS.md, not here.

---

## 8. Core Workflows

### 8.1 Seeker workflow
1. **Auth:** phone number → Supabase phone OTP → session.
2. **Discovery:** browse online listeners; filter by language and category tags. Profiles show text bio + lived-experience bullets. **No prominent profile photos** (see §10).
3. **Recharge:** user initiates → backend creates Razorpay order → frontend checkout → **webhook** validates → wallet credited atomically.
4. **Booking:**
   a. Server checks `balance >= (rate × duration) + platform_fee`.
   b. If sufficient, an RPC reserves funds, moves seeker to a waiting state, and fires a realtime notification to the listener.
   c. On acceptance → status `active`, channels open.

### 8.2 Listener workflow
1. **Onboarding & vetting:** sign up → profile details → identity verification (placeholder for manual/Surepass) → payout bank details (account no. + IFSC).
2. **Profile status lifecycle:** `unverified` → `pending_review` (on submission) → `verified` (on admin approval).
3. **Availability:** persistent Online/Offline toggle.
   - *Heartbeat guard:* going online sets `is_available = true` and stamps `last_heartbeat_at`. The client re-stamps it every **60 seconds** while the listener is online, and a background sweep removes a listener from public discovery once that timestamp is older than **15 minutes**.
   - **Why 15 minutes, not the 3 originally specified:** mobile browsers aggressively throttle (and often suspend) background timers. At a 3-minute threshold, a genuinely-online listener who simply switched apps or locked their phone for a few minutes was repeatedly swept offline — the single most-reported listener bug, and one that took weeks to stabilise. 15 minutes is wide enough to absorb that throttling while still clearing genuinely dead sessions. **Treat this number as load-bearing: do not lower it without first proving heartbeats survive mobile backgrounding.**
   - `is_available` is written ONLY by the authenticated availability toggle. Heartbeats refresh the timestamp and may never set availability back to `true` — a stale tab doing so was a real source of "ghost online" listeners.
   - **Away mode (2026-09-24):** listeners go online and then use other apps, where the phone pauses LeanOn and heartbeats stop. A listener with at least one working push device (`push_tokens` / `users.fcm_token`) therefore stays online for up to **4 hours** without heartbeats (`AWAY_WITH_ALERTS_MINS`); without push, the 15-minute rule is unchanged. To stop this reviving ghosts: a request that times out while the listener is away (no heartbeat for 15+ min), or a second timed-out request in a row, sets them offline immediately and tells them why (`recordMissedRequest`, `lib/listener-presence.ts`). Heartbeats report `is_available` back, so the dashboard never keeps showing "online" after the sweep. Full design and troubleshooting: `docs/NOTIFICATIONS.md`.
4. **Incoming session:** accept/decline modal with a **3-minute countdown** (`REQUEST_RESPONSE_WINDOW_SECS`), plus a push notification to every device the listener registered. If ignored, the request is cancelled as `timed_out` and the seeker is refunded.
5. **Earnings ledger:** on completion, `payout = (rate × duration) × 60%` — the listener's full stated rate (voice = text + ₹5/min) minus LeanOn's 40% service fee (§5). The seeker's flat ₹10 platform fee is separate, paid by the seeker on top, and never deducted from the listener's share. Recorded in `listener_earnings` (`gross_amount`, `platform_fee` — which for a session settled after 2026-09-14 holds the seeker's ₹10 PLUS the 15% service fee combined, `net_amount`).

### 8.3 Admin workflow
1. **Verification desk:** list profiles in `pending_review`; Approve / Reject actions flip verification flags.
2. **Financial exceptions:** list wallet transactions; allow manual reversal/refund to the original Razorpay source for failed sessions.
3. **Moderation ledger:** show transcripts flagged by the Claude moderation layer. **All identities masked** as `Seeker_ID_Ref` / `Listener_ID_Ref` in admin views.

---

## 9. Critical State & Data Contracts

### 9.1 Session status enum (authoritative)
- `requested` — funds reserved; awaiting listener response.
- `active` — live; timer running; sockets open.
- `completed` — ended by timer expiry or clean mutual exit; funds transferred.
- `cancelled` — declined by listener or cancelled by seeker before acceptance.
- `timed_out` — no listener response within the 60-second window.

No other session states may exist. Any new state requires updating this file first.

### 9.2 Race-condition protection (non-negotiable)
- Wallet balance checks and fund allocation must **never** run on the client or as two separate client queries.
- They must execute inside a **single Supabase RPC** using row locking (`SELECT ... FOR UPDATE`) to prevent multi-click wallet-drain exploits.
- Fund reservation and session creation happen in the same transaction.

### 9.3 Token & secret rules
- Agora RTC tokens: server-generated only.
- Razorpay order creation and webhook verification: server-side only.
- No API keys or secrets in client code or in this repo's committed files.

---

## 10. Non-Negotiable Product Principles

1. **Phone OTP only.** No email/password friction. Mobile-first.
2. **Session-based, not open-ended.** 15 or 30 min blocks. No meter anxiety.
3. **Wallet refundable anytime.** Trust driver.
4. **Flat ₹10 seeker fee, shown transparently.** Seeker sees the fee as a separate line at checkout. Don't over-advertise the fee in marketing copy. Separately (2026-09-14; 40% since 2026-09-24), a listener service fee applies to listener earnings — see §5 and §8.2.5. Never call it a "commission" in user-facing copy.
5. **No photo prominence.** Specialty + lived experience first; prevents attractiveness-based selection.
6. **No parasocial hooks.** No tipping, gifting, gift delivery, public comments, profile-photo enlargement, or login streaks. These create dependency — do not build them.
7. **Text-first.** Voice is secondary; most users need privacy from joint family.
8. **Same-gender default.** Users may toggle, but default-on reduces drift risk.
9. **Mobile-width layout.** Lock content to a centered mobile container (`max-w-md` / ~480px) to mimic a native app feel.

---

## 11. Key Risks (keep front of mind)

1. **Supply side.** v1 failed because professionals wouldn't onboard. v2 targets peer listeners; recruitment and vetting must be lightweight.
2. **Platform drift.** Monetising attention risks parasocial/romantic dynamics. Every decision must structurally prevent this (see §10.5–10.8).
3. **AI companions.** General AI keeps improving at emotional support. The moat is **human lived experience** — lean into it.
4. **MHP backlash.** Strict "peer support" positioning (§3) is the legal and ethical shield.
5. **Moderation.** Sexual content, manipulation, fake identities. Claude (Haiku) moderation is first line; human review required at scale.

---

## 12. Crisis Safety Rail (mandatory)

Every screen showing an active or pending conversation must render a fixed, **un-dismissible** footer with **only** these two official helplines — no others permitted anywhere on the platform:

- **NIMHANS:** 080-46110007
- **Tele-MANAS:** 14416

If a user appears to be in crisis, surface these and do not attempt to handle the crisis through the peer-support flow.

---

---

## 13. Engineering Rule: No Regressions

**Every fix must preserve existing working functionality.** Before shipping any change, mentally (or actually) trace the full user flows that touch the modified code — seeker browse, booking, session, listener dashboard, admin panel, wallet — and confirm none are broken. A fix that solves problem A while silently breaking feature B is not a fix; it's a new bug. When a column or behaviour did not previously exist in production (e.g. a column just added by migration), the code must degrade gracefully for rows that predate the migration rather than treating the absence of the new value as an error state.

---

---

## 14. Geographic Strategy (decided 2026-09-13)

**Current:** India-only supply and demand.

**Strategic direction decided:** Test global demand (UK, US, Indian diaspora) with Indian listener supply as the sole supply engine. Decision is "demand experiment first" — do NOT build global listener supply, do NOT create a parallel pricing tier, do NOT build separate /us or /uk booking flows yet.

### Why this is interesting
The LeanOn supply/demand cost arbitrage becomes much stronger internationally:
- Indian listeners' rates in INR = low absolute cost
- International willingness-to-pay is 3–5× India on the same absolute time
- "Global customers, Indian supply" is the Fiverr / Toptal model

### First beachhead: Indian diaspora (US, UK, Canada, UAE, Australia)
Strong cultural alignment with Indian listeners. Distinct pain points — immigration isolation, family pressure, arranged marriage — that generic Western peer support cannot serve. Near-zero competition in this niche.

### What NOT to do
- Do NOT create /us or /uk booking pages with different prices — creates arbitrage where Indian users bypass the India price by visiting the US URL. The browse page is a single universal page.
- Do NOT build a global listener base yet. Keep all listeners as Indian supply.
- Do NOT build separate Stripe or international payment infrastructure until demand is confirmed. Razorpay already accepts international cards.

### Technical approach for geo-pricing (when ready to build)
Use `x-vercel-ip-country` header (set automatically on Vercel, no extra infra) to detect country server-side. Phase 1 (experiment): display prices in USD/GBP equivalent on browse and listener profile pages for international visitors — same underlying INR cost, Razorpay handles FX at checkout. Phase 2 (confirmed demand): add `account_country` field to users table set at registration; international accounts get USD pricing; platform takes the FX margin above the listener's INR rate.

### The single /browse approach
SEO landing pages (/india-diaspora, /us-peer-support) are marketing copy that link to /browse. All actual booking happens on /browse. Geo-detection happens on /browse itself via server header — no separate page with a different booking flow.

### Payments
Razorpay international gateway is the first option — already approved for most markets, no new entity needed. Stripe India (currently invite-only) is the fallback. Do not build custom cross-border infrastructure — this is table stakes that Razorpay solves.

### Decision trigger for full build
Run a 30-day demand experiment (diaspora landing page + ₹25–30k Meta spend targeting Indians in US/UK). If paid conversion ≥ 2× India, build the real geo-pricing layer. If flat, fix product first before expanding.

---

## 15. Product-Market Fit Learnings (from live usage, Sept 2026)

### The core mechanism that actually drives paid repeat usage

A listener (Aanchal) earned ₹7K + ₹2K in two consecutive days from a single seeker (Hemang, divorced man seeking someone who would genuinely listen to his daily life). Validated learnings:

**Why he pays:**
- He tried the free 5-minute trial first — that's the correct funnel working.
- He tried multiple other listeners and rejected them. He pays specifically for Aanchal's voice, empathy, and genuine engagement — not for "a listener" generically.
- His stated reason: "no one else actually listens."

**What this means for the product:**
People do not pay for access to listeners. They pay for a specific human who makes them feel genuinely heard. The product-market fit is: *seeker discovers the right listener via trial → feels heard → returns and pays repeatedly*. This is a relationship marketplace, not a commodity chat marketplace. Every product decision should serve the "discovery → trust → repeat" loop, not just session volume.

**The supply-side fraud problem (highest priority risk):**
Multiple listeners apparently accepted Hemang's calls and then said nothing — just holding the line to earn the per-minute fee. He reported this explicitly and it drove him to only trust Aanchal. This is the single most dangerous failure mode:
- A seeker experiencing a silent listener attributes it to LeanOn, not to the individual.
- It directly destroys the core value proposition.
- It is technically detectable (very short completed sessions, no meaningful duration).
- **This must be monitored and acted on before scaling acquisition.**

**The concentration risk:**
₹9K spent with one listener in 2 days by one seeker is a strong revenue signal AND a platform-drift warning (§10.6). The product principles deliberately exclude tipping, gifting, and parasocial features. High single-listener concentration should be flagged — not to block it, but to ensure the seeker's wellbeing is the goal, not dependency.

### What to measure (priority order)

1. **Repeat paid sessions per listener** — listeners with seekers who book them 3+ times paid are the Aanchal pattern. This is the quality signal that matters most.
2. **Free-to-paid conversion per listener** — what % of a listener's free trials convert to a paid session. Low conversion = low quality or poor fit.
3. **Silent session rate** — voice sessions completed with duration < 2 minutes (accepted call, no real engagement). Any listener with >10% silent-session rate needs review.
4. **Seeker concentration** — seekers where >70% of paid sessions are with one listener. Monitor, don't block.
5. **Session completion rate** — sessions that start but end much earlier than booked duration (listener or seeker leaves early).

### What NOT to build based on this signal

- ❌ A "favorite listener" or follow feature — this is a parasocial hook (§10.6). The discovery loop already creates affinity without building it in explicitly.
- ❌ Rating or review system visible on listener profiles — creates attractiveness-based selection (§10.5) and reputational gaming. Use quality metrics internally for moderation, never publicly.
- ❌ Tipping or gifting (§10.6).
- ❌ "₹9K in 2 days" as a marketing angle — the seeker's spend is private data.

### The listener playbook (Aanchal as prototype)

What makes the Aanchal pattern work (from her own description):
- Genuine, active listening — not just being present but asking, engaging, remembering
- Consistency — available reliably, seeker can predict she'll be there
- Psychology background helps but is not the filter — the real trait is treating the seeker's stories as genuinely worth hearing, not as a job to sit through

This suggests the listener onboarding and vetting criteria should screen for **genuine empathy and active listening** above credentials or topic expertise. The admin interview/approval step should probe this, not just check bank details.
