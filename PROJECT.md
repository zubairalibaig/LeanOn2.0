# LeanOn 2.0 — Project Bible

> Last updated: May 2025
> Live URL: https://leanon.app
> Domain: leanon.app

---

## 🎯 The One-Line Mission

**Connect lonely, overwhelmed people with real humans who have lived through the same thing — instantly, affordably, and safely.**

---

## 💡 The Core Insight (never forget this)

AstroTalk's founder discovered that a massive % of night-session bookings were not about astrology.
People were booking astrologers just to talk. Because they were lonely.

LeanOn removes the astrology wrapper and monetises the real thing: **human connection and lived-experience guidance**.

- India has millions of emotionally isolated people
- Almost no affordable emotional support exists
- Therapy stigma is real and deep
- Joint families mean people need text privacy
- People are willing to pay at 2 AM when they are hurting

---

## 🚫 What LeanOn Is NOT (critical positioning)

This is a **PEER SUPPORT** platform. Not a mental health platform.

- ❌ Not therapy
- ❌ Not counselling
- ❌ Not clinical mental health support
- ❌ Not a substitute for professional psychiatric care
- ✅ Real people with lived experience
- ✅ Pay-per-session peer conversations
- ✅ Emotional support from someone who has been there

**Why this matters:** MH professionals will attack any platform that blurs the line.
LeanOn must be crystal clear: we are the peer support layer, not the clinical layer.
Like AA is to rehab. Like a support group is to therapy. Legitimate, needed, different.

**Legal protection:** "Peer support" does not require clinical licensing.
"Counselling" and "therapy" do. Never use those words for our listeners.

---

## 👥 Who Uses LeanOn

### Seekers (people who book sessions)
- Urban Indians 22–45
- Lonely at night (joint families, need text privacy)
- Going through: breakups, career confusion, startup stress, grief, loneliness, student pressure
- Cannot afford ₹2000/session therapy
- Don't need diagnosis — need to be heard

### Listeners (people who earn)
- People with lived experience in specific situations
- NOT professionals (that's LeanOn v1 — it failed)
- Examples: startup founder who survived, person who recovered from grief, career changer, student who got through exams
- Earn ₹8–25/min (₹13,500–₹72,000/month depending on volume)
- Work from phone, anytime

---

## 💰 Business Model

| Element | Detail |
|---|---|
| Session pricing | ₹10/min base (listeners set ₹8–25/min) |
| Session lengths | 15 min (₹165) and 30 min (₹330) |
| Free trial | 5 min text chat for new users |
| Platform fee | 10% of session value (transparent line item) |
| Payment gateway | Razorpay — 2% per transaction |
| Listener keeps | 90% of their stated rate |
| Wallet model | Recharge-based (₹200/₹500/₹1000), refundable anytime |

### Revenue projection
- 100 sessions/day → ₹15,000/day platform fee → ₹4.5L/month
- 500 sessions/day → ₹75,000/day → ₹22.5L/month
- Break-even estimate: ~30–50 sessions/day

---

## 🛠️ Tech Stack

| Layer | Tool | Cost |
|---|---|---|
| Frontend + Backend | Next.js 14 (App Router) | Free |
| Database + Auth + Realtime | Supabase | Free → ₹2,100/mo |
| Voice calls | Agora.io | Free (10K min/mo) |
| Payments | Razorpay | 2% per txn |
| AI moderation | Claude API (Haiku) | ~₹2,000/mo |
| Hosting | Vercel | Free |
| Email | Resend | Free |
| Admin panel | Retool (connect to Supabase) | Free |
| KYC (later) | Surepass (Aadhaar OTP) | ₹3–5/verify |
| Total at beta | — | ₹5,000–9,000/mo |

---

## 📱 Pages / Screens

| Screen | Path | Status |
|---|---|---|
| Landing page | / | ✅ Live |
| Auth (phone OTP) | /auth | 🔲 Built, not deployed |
| Browse listeners | /browse | 🔲 Built, not deployed |
| Listener profile | /listener/[id] | 🔲 Built, not deployed |
| Wallet & recharge | /wallet | 🔲 Built, not deployed |
| Live session | /session/[id] | 🔲 Built, not deployed |
| Listener dashboard | /dashboard | 🔲 Built, not deployed |
| Become a listener | /become-listener | 🔲 Built, not deployed |
| Admin panel | Retool (external) | 🔲 Not started |
| Privacy policy | /privacy | 🔲 Not started |
| Terms of use | /terms | 🔲 Not started |

---

## 🗓️ Build Roadmap

### Week 1–2 (done)
- [x] Business model finalised
- [x] Tech stack chosen
- [x] Database schema written
- [x] GitHub + Vercel + Supabase set up
- [x] Landing page live

### Week 3–4 (now)
- [ ] Auth page (phone OTP) live
- [ ] Browse page live
- [ ] Listener profile page live
- [ ] Wallet + Razorpay recharge live
- [ ] First end-to-end test session

### Week 5–6
- [ ] Voice calls (Agora) integrated
- [ ] Live text chat (Supabase Realtime)
- [ ] Session timer + auto-end
- [ ] Listener payout dashboard
- [ ] Retool admin panel

### Month 2
- [ ] Onboard 15–20 real peer listeners (manual DM outreach)
- [ ] Run 10 real paid sessions
- [ ] Aadhaar KYC via Surepass
- [ ] Bank account verification via Razorpay
- [ ] Android PWA — "Add to Home Screen" prompt
- [ ] Hire growth person / bring on co-founder

---

## 🔴 Key Risks (never forget)

1. **Supply side** — LeanOn v1 failed because counselors wouldn't onboard. v2 targets peer listeners (not professionals). This MUST work differently.
2. **Platform drift** — Monetising attention always risks drift toward parasocial/romantic dynamics. Every product decision must structurally prevent this.
3. **AI companions** — ChatGPT, Claude etc. are getting better at emotional support. Our moat is HUMAN lived experience. Lean into it.
4. **MHP backlash** — Mental health professionals will critique us. Positioning as "peer support" (not therapy) is our legal and ethical shield.
5. **Moderation** — Sexual content, manipulation, fake identities. Claude API moderation is first line. Human review is necessary at scale.

---

## ✅ Non-Negotiable Product Principles

1. **Phone OTP only** — No email friction. India is mobile-first.
2. **Session-based, not open-ended** — 15 or 30 min blocks. No meter anxiety.
3. **Wallet refundable anytime** — Trust driver. Users recharge more when they know they can get it back.
4. **10% platform fee, shown transparently** — Listeners see their full rate. Users see fee as separate line. No hidden cuts.
5. **No photos in profile prominence** — Specialty + lived experience first. Prevents attractiveness-based selection.
6. **No tipping, gifting, or streaks** — These create emotional dependency. Do not build them.
7. **Text-first** — Voice is secondary. Most Indian users need privacy from joint family.
8. **Same-gender default** — Users can choose, but default protects everyone and reduces drift risk.

---

## 📞 Crisis Resources (always show these)

If a user appears in crisis, the platform must surface ONLY these two
official helplines (no others are permitted anywhere on the platform):
- **NIMHANS:** 080-46110007
- **Tele-MANAS:** 14416

---

## 🔑 Accounts & Access

| Service | Account | Notes |
|---|---|---|
| GitHub | (private) | LeanOn2.0 repo |
| Vercel | Connected to GitHub | Auto-deploys on push |
| Supabase | — | Mumbai region |
| Razorpay | Registered | Individual/sole prop |
| Agora.io | To create | Free 10K min/mo |
| Resend | To create | Email OTPs |
| Retool | To create | Admin panel |

---

*This document is the source of truth for LeanOn 2.0. Update it when major decisions are made.*
