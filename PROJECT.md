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
| Session blocks | Fixed only: **15 min**, **30 min**, or **45 min**. No open-ended metered calls. |
| Free trial | Up to 5 free 5-minute sessions per seeker (one per listener). |
| Platform fee | **Flat ₹10 per paid session**, paid by the seeker on top of the listener's rate, shown as a separate transparent line item at checkout. Razorpay's gateway commission is also borne by the seeker. Do not over-advertise the fee — just keep the logic and checkout display honest. |
| Listener keeps | **100% of their stated rate.** The fee never comes out of listener earnings. |
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
4. **Incoming session:** banner with **60-second countdown**. Accept or decline. If ignored, slot times out and the seeker's reservation reverts.
5. **Earnings ledger:** on completion, `payout = rate × duration` (the listener's full stated rate — the flat ₹10 platform fee is paid by the seeker on top, never deducted) is appended to the listener's internal balance ledger.

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
4. **Flat ₹10 fee, shown transparently.** Listener keeps their full rate; seeker sees the fee as a separate line at checkout. Don't over-advertise the fee in marketing copy.
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

*Source of truth for LeanOn 2.0. Update only on major, deliberate decisions.
Volatile items — roadmap, build status, accounts, costs — belong in STATUS.md.*
