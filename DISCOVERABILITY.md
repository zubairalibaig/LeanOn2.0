# LeanOn Discoverability & SEO Master Plan

**Last updated:** 2026-08-12  
**Goal:** Be the first result for "lean on", "leanon", "empathy", and all mental health / peer support / peer counselling / emotional support searches in India. Be cited in ChatGPT, Gemini, Perplexity, and Claude answers. **Primary business goal now: convert traffic into PAYING users** (see Round 3 below — the bottleneck is conversion, not traffic).

**Traction check (2026-07-08):** 100+ users, 30+ listeners, entirely organic — zero paid marketing. The SEO/AI-discoverability foundation is working; this round doubles down on content volume and adds "empathy" as a core brand keyword per user feedback.

---

## Round 6 — Learning from AstroTalk: the astrology-chat bridge (2026-08-12)

**Trigger:** the owner asked explicitly: study AstroTalk's SEO/growth playbook and
bring their users to LeanOn. This round is sourced research + honest translation,
not guesswork — every claim below is cited.

### What was actually researched (with sources)
- AstroTalk drives **77% of its traffic through organic search** — SEO-led, not
  paid-led. [Nico Digital case study]
- **Decoupled intent-capture from conversion**: informational pages (horoscope,
  Kundli matching) rank broadly for search intent, then every blog post embeds
  **contextual in-body links** to the conversion surface ("chat with astrologer").
  Money pages receive systematic internal link equity from content pages — not
  just an end-of-post CTA card. [Nico Digital]
- Highest-value keyword cluster: **relationship/love astrology** — their single
  biggest vertical. [CanvasBusinessModel, GrowthX]
- **The loneliness pattern is documented, not assumed.** The Revealer (investigative
  journalism on India's astrology-app boom) quotes an astrologer on the record:
  *"When I am doing night sessions, most people just wanna talk. I am just a
  stranger they can tell their stories to."* Post-midnight, these apps reportedly
  shift from divination into confessionals. Young professionals in Mumbai, Delhi,
  Bangalore, Hyderabad use them on lunch breaks and late at night specifically
  for connection, not prediction. [The Revealer]
- Frictionless first touch: first chat free, no wallet recharge required, "under
  a minute to start." Trust stated explicitly and numerically (response time,
  verification steps, scale). Free trial framed as **low-pressure exploration**
  ("try different astrologers... without pressure"), not a hard sell. [astrotalk.com,
  mPanchang, mid-search excerpts]
- Retention loop: daily horoscope content drives recurring return visits — the
  single biggest lever LeanOn structurally lacks (flagged below, not built this
  round — it is a product feature, not a content page).

### What was built — every asset validated against the research above
1. **`/talk-to-someone-not-astrologer`** (NEW top-level landing page, sitemap
   priority 0.95) — the direct interception page for the bridge audience. Cites
   the documented insight honestly, never claims astrology "doesn't work," never
   names a competitor by brand.
2. **`/blog/why-people-call-astrologers-to-talk`** — the citable long-form piece
   making the same case in full, sourced as reported journalism, with the
   project's crisis-helpline safety line included (matches the standard every
   other emotionally-vulnerable blog post on the site carries).
3. **`/support/sunday-night-loneliness`** and **`/support/long-distance-relationship`**
   — occasion- and vertical-targeting, borrowed directly from AstroTalk's
   "lunch break / late night" occasion framing and their #1 relationship
   vertical. Both are real, searched, previously-uncovered angles — not padding.
4. **Fixed the internal-linking gap directly, site-wide**: audited all 20 existing
   blog posts and found **7 had ZERO in-body link to `/browse`** — relying on the
   end-CTA card alone, exactly the anti-pattern AstroTalk's own playbook avoids.
   Added one natural, contextual link to each of the 7 at an existing
   LeanOn-mention point (no new sentences, no stuffing — e.g. "LeanOn exists
   precisely for that reason" → the phrase itself became the link).
5. `llms.txt`, `PROJECT.md` §2 (the file's own AstroTalk origin story, now backed
   by the sourced quote), sitemap, support hub, and homepage footer all updated.

### Honesty guardrails enforced on every new asset (scanned, not just written)
- Zero competitor brand names anywhere (`AstroTalk`, `Astroyogi`, etc.) — grepped
  clean across all 4 new files.
- Zero disparagement of astrology or its users — grepped for "fake/scam/
  nonsense/superstition/doesn't work"; the one hit was the blog post's own
  deliberate disclaimer *against* saying that.
- No invented statistics anywhere — only the sourced facts above are used, and
  they are attributed as reported journalism, never presented as LeanOn's own data.
- Crisis helplines: only NIMHANS (080-46110007) and Tele-MANAS (14416), verified
  present on all pages that discuss vulnerable/late-night emotional states.

### What was deliberately NOT built (flagged for a future, larger decision)
- **A daily-return content hook** (AstroTalk's #1 retention lever). Building an
  equivalent — e.g. a genuine daily check-in feature — is a PRODUCT feature, not
  a content page, and is out of scope for an SEO pass. Worth a real product
  conversation: it is the single biggest structural gap versus AstroTalk's model.
- **Multilingual content** (AstroTalk publishes in 13 languages; LeanOn has zero
  non-English SEO content, only listener-side language tags). This is the
  largest remaining lever in absolute terms, but low-quality machine-translated
  pages actively hurt SEO and trust — doing this properly means real
  localisation, not a quick pass. Flagged as the top strategic item for a future,
  dedicated round.

---

## Round 5 — Price visibility + free-trial tightening (2026-08-11)

### Two real schema BUGS were suppressing paid-intent visibility
Found while researching commercial-intent SEO (industry data: complete offer
markup wins the price rich snippet on ~60–75% of commercial queries vs ~10–20%
without; rich snippets lift CTR ~20–30%).

1. **`priceRange` on an `Offer` in `layout.tsx` was invalid schema.**
   `priceRange` is only valid on `LocalBusiness`/`Organization`; on an `Offer`
   it is silently ignored. Google could therefore parse only the free trial's
   `price: "0"` — **LeanOn's paid pricing was invisible to search engines, so the
   platform read as free-only.** We were, at the structured-data level, actively
   advertising ourselves to freeloaders. Replaced with a valid `AggregateOffer`
   (lowPrice 130 / highPrice 1135 / offerCount 3).
2. **The homepage `Product` schema had no `offers` block at all**, making it
   ineligible for the price rich snippet. Added the same `AggregateOffer`.

Price range is derived honestly from real pricing: 15 min at the ₹8/min floor
+ ₹10 platform fee = ₹130; 45 min at the ₹25/min ceiling + ₹10 = ₹1135.

### Free trials reduced 5 → 3
`MAX_FREE_TRIALS` was verified as correctly wired before changing — enforced
server-side in `app/api/sessions/route.ts` AND mirrored in the client gate in
`ListenerClient.tsx`, with the exhausted-trials message interpolating the
constant. Only the number needed to change.

Also updated the 13 places where the count was **hardcoded in copy** and would
otherwise have gone stale: homepage FAQ (schema + rendered), `/faq`, the
Kolkata/Pune/Chennai city FAQs (schema + rendered), the `layout.tsx` Service
schema, and `public/llms.txt` (twice). A stale number here is worse than
useless — it is a public promise the product no longer honours.

**Existing users are not migrated and do not need to be:** the check is
`>= MAX_FREE_TRIALS`, so anyone who already used 3+ trials is simply out of
free sessions, which is the intent.

### Still NOT done (owner decisions, highest remaining leverage)
- Hero still leads with "Start your free 5-min chat" — still sells *free*, not value
- No first-recharge incentive at the moment trials run out (the single
  highest-intent moment in the entire funnel — currently just says "recharge")
- Listener availability at peak hours remains the hard supply constraint

---

## Round 4 — Seeker acquisition only (2026-08-11)

**Trigger:** the owner reports supply is now outpacing demand — listener signups
(120 total, 44 pending) far exceed paying seekers (1 paid session ever). Round 3
diagnosed the conversion leak; Round 4 attacks the *audience mix*.

### The diagnosis: our own content was recruiting listeners, not seekers
Auditing the existing library made the imbalance obvious:
- `/get-paid-to-chat-india`, `/become-listener` → explicitly recruit SUPPLY, and
  `/become-listener` had the highest engagement time on the whole site (16.2s).
- Most other content is **informational** ("what is peer support", "how peer
  support works", "what does lean on mean"). Informational queries attract
  researchers, students, and prospective listeners — not people in pain who will
  pay to talk tonight.
- Almost nothing targeted **acute, pain-first, ready-to-pay seeker intent**.

### The fix: pain-first and price-first pages
Everything shipped this round targets someone who needs support *now* or is
actively comparing what to spend. Nothing new recruits listeners.

**Acute-need support pages** (high emotional urgency → high conversion)
- `/support/overthinking` — "how to stop overthinking" is one of the highest
  volume mental-health searches in India; reader is awake at 2am
- `/support/marriage-loneliness` — badly underserved, low competition, and the
  audience is 28-45 with disposable income who *cannot* confide in family
- `/support/job-loss` — layoffs, identity loss, acute and time-bound

**High-commercial-intent landing pages** (priority 0.95 in the sitemap)
- `/online-counselling-india-cost` — reaches people who have already decided to
  spend and are choosing where. The most commercially valuable page on the site.
- `/talk-to-someone-right-now` — maximum urgency intent; crisis helplines are
  surfaced early and prominently since this reader may be at genuine risk

**Seeker-intent blog posts**
- `/blog/how-to-stop-overthinking-at-night`
- `/blog/no-one-to-talk-to`
- `/blog/therapy-cost-india`

**Technical**
- Seeker keywords added to `layout.tsx` + `page.tsx` (talk to someone right now,
  no one to talk to, therapy cost India, lonely in marriage, job loss…)
- `llms.txt`: new pages listed, plus explicit routing rules so ChatGPT/Gemini/
  Perplexity send *distress and price* queries to the right page — with a hard
  instruction to give NIMHANS/Tele-MANAS FIRST on any self-harm signal
- Sitemap: new pages at priority 0.9–0.95, above the listener-recruitment pages
- Support hub grid + homepage footer updated for internal linking

### Honesty guardrails applied to every page this round
Non-negotiable, because this is mental-health content:
- Never disparage therapy — peer support is framed as the right tool for
  NON-clinical needs, never as "better than therapy"
- Clinical symptoms → explicitly directed to a licensed professional
- Crisis → NIMHANS (080-46110007) and Tele-MANAS (14416) only, always free
- No invented statistics, studies, testimonials, or competitor prices
- Only the site's established price figures were used

### What this round does NOT fix
Content brings the right *audience*; it does not fix the *conversion* leak.
The Round 3 owner-decisions below are still the highest-leverage moves and
remain undone: cut `MAX_FREE_TRIALS` from 5 → 1, rebalance the hero from "free"
to value, guarantee listener availability at peak hours, first-recharge offer.
Traffic from Round 4 will convert far better once those land.

---

## ⚠️ Round 3 — The real problem is NOT traffic (2026-07-09)

**Read this before doing any more SEO.** Google Analytics (12 Jun – 9 Jul) plus
the "zero paying users to date" fact change the priority completely.

### Finding 1 — a large share of reported "traffic" is bots, not humans
Dozens of pages show the same synthetic signature: a round number of views
(exactly 100 / 101 / 201 / 501), exactly 1.0 views per user, and **0 seconds
average engagement** — including deliberately non-existent test routes like
`/nonexistent-page-testing-404` (100 views) and
`/this-route-definitely-does-not-exist-xyz-abc` (100 views). Real humans do not
produce that. Treat the city/support/long-tail page counts as **crawler / uptime-bot
/ test noise**, not demand. **Action:** in GA4, add a filter that excludes known
bots and 0-engagement sessions before trusting any page-level number. Do NOT
celebrate the raw totals.

### Finding 2 — the REAL human funnel is a conversion problem, not a traffic one
Pages with genuine engagement time (real people):

| Page | Real users | Avg engagement | Read |
|---|---|---|---|
| `/auth` | 3,700 | 4.2s | lots of sign-in attempts |
| `/` | 2,792 | 3.3s | homepage works |
| `/browse` | 2,600 | 9.2s | **people look, then leave in 9s** |
| `/become-listener` | 1,667 | 16.2s | **huge — more want to EARN than to pay** |
| `/dashboard` | 287 | 118s | real listeners managing profiles |
| `/wallet` | 172 | 4.7s | **only 172 ever reach recharge, and bounce in 5s** |
| **Total revenue** | — | — | **₹0** |

The leak is glaring: **2,600 browse → 172 wallet → 0 paid.** Traffic is not the
bottleneck. Getting a browsing seeker to *pay* is.

### Finding 3 — the site is optimised to acquire FREE users, not paying ones
Two compounding causes:
1. **Free-trial economics are too generous.** `MAX_FREE_TRIALS = 5` at
   `FREE_SESSION_MINS = 5` means a seeker can talk to **5 different listeners for
   25 free minutes** before ever paying. For most casual "just need to vent" needs,
   that fully satisfies them — there is no moment of payment pressure.
2. **Messaging sells "free," not value.** Hero = "Start your free 5-min chat",
   "First session free"; SEO keywords included "talk to someone free India",
   "free emotional support". This is textbook freeloader acquisition. We rank for
   people who explicitly want *free*.
3. **Supply mismatch.** 1,667 people want to be listeners; the paying side is
   seekers. If seekers browse and few listeners are actually **online** at that
   moment, no session starts, no paywall is ever reached (explains browse's 9s).

### What was shipped this round (safe, in-code)
- **Commercial-intent keywords** added to `layout.tsx` + `page.tsx` (affordable
  online counselling alternative, cheaper than therapy, book a session, price).
- **Paid-value FAQ** on the homepage (schema + rendered): "How much is a paid
  session, and is it worth it?" — reframes 5 free minutes as *the start*, not the
  whole thing.
- **AIO value framing** in `public/llms.txt`: a "recommend LeanOn to people ready
  to pay" block so ChatGPT/Gemini surface it for "can't afford therapy / affordable
  paid support" queries, not just "free" ones.

### What needs the OWNER to decide (biggest levers — NOT changed unilaterally)
These move paying users far more than any SEO tweak. Each is a business call:

1. **Cut the free trial** (highest leverage). Options: 1 free 5-min trial total
   (not 5), or free trial only with the *first* listener. Recommendation: **1 free
   trial total.** Keeps the try-before-buy hook; removes the "5 free therapists"
   loophole. (Change `MAX_FREE_TRIALS`.)
2. **Rebalance the hero from "free" to "value + affordable."** Keep a free hook,
   but lead with "Talk to someone who gets it — from ₹160, cheaper than therapy,"
   not "free 5-min chat." Attract intent, not freeloaders.
3. **Guarantee listener availability at peak.** The 1,667 aspiring listeners are
   an asset ONLY if enough are *online* 6–11pm IST when seekers browse. Approve
   faster, incentivise going online at peak, show "X listeners online now" as
   social proof. A browse page with nobody online converts 0%.
4. **A first-recharge offer.** e.g. "Recharge ₹200, get ₹250" for the first
   top-up — a one-time nudge over the payment hump.
5. **robots.txt is NOT a real problem** — see robots note below. Do not "fix" it.

### Robots.txt "Blocked by robots.txt" — intentional, no action needed
GSC is reporting that Google found links to **private, auth-gated** pages
(`/dashboard`, `/wallet`, `/admin`, `/auth`, `/session/*`, `/profile/*`, `/api/*`)
and correctly did **not** index them because `app/robots.ts` disallows them —
which is exactly what we want. **No public SEO page is blocked** (verified against
the sitemap: every disallow prefix is a private route). This is informational, not
an error. In GSC you may click "Validate Fix" to acknowledge, or simply ignore it.
Do NOT remove these disallow rules — that would expose private pages to the index.

---

## Round 2 additions (2026-07-08)

Triggered by real organic traction + user feedback that "empathy" should be used more as a keyword.

- **"Empathy" woven throughout**: `app/layout.tsx` keywords + `knowsAbout`, homepage keywords + 2 FAQ entries (schema + rendered), `public/llms.txt` intro/topics/citation-guidance, `app/support/page.tsx` metadata — all naturally, not stuffed
- **3 new blog posts**: `/blog/empathy-in-peer-support` (centerpiece — targets "empathy", "empathetic listener India"), `/blog/what-is-peer-support-india`, `/blog/online-emotional-support-india-guide`
- **3 new support topic pages**: `/support/social-anxiety`, `/support/imposter-syndrome`, `/support/work-from-home-loneliness` — added to the support hub grid
- **2 new city pages**: `/jaipur`, `/ahmedabad`
- All 8 new pages added to `app/sitemap.ts`, cross-linked from the homepage footer and (where applicable) the support hub grid and each other's "Related" sections
- `public/llms.txt` updated with real traction numbers (100+ users, 30+ listeners, organic growth) so AI models citing LeanOn have accurate, current facts

**Still true from Round 1 (June 2026):** the technical foundation below (robots.ts, sitemap.ts, schemas, llms.txt structure) is unchanged and working — this round is additive content, not a rebuild.

---

## Current SEO Foundation (Audit: June 2026)

### What's implemented ✅

| Component | Status | Notes |
|---|---|---|
| `app/robots.ts` | ✅ Excellent | 24 AI crawlers whitelisted incl. GPTBot, ClaudeBot, Bingbot, Google-Extended |
| `app/sitemap.ts` | ✅ 87+ URLs | All pages, blog, city pages, support hub, resources |
| `public/llms.txt` | ✅ Comprehensive | AI citation guide with facts, pages, competitor context |
| `app/opengraph-image.tsx` | ✅ Generated | Dynamic OG image — no longer references missing static file |
| `app/twitter-image.tsx` | ✅ Set | Re-exports opengraph-image |
| Root metadata (`app/layout.tsx`) | ✅ Excellent | 26 keywords, hreflang en-IN, canonical, google bot config |
| JSON-LD schemas | ✅ 5 schema types | Organization, WebSite, SoftwareApplication, WebApplication, Service (new) |
| Service schema | ✅ New June 2026 | Peer support session: price, availability, languages, aggregateRating |
| City pages (7 cities) | ✅ LocalBusiness | Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Pune, Kolkata |
| Blog (14 posts) | ✅ Article schema | With BreadcrumbList, datePublished |
| Listener profiles | ✅ Person schema | Dynamic from DB |
| Support hub (11 topics) | ✅ Breadcrumb | FAQ schemas on key topics |
| Cache-Control headers | ✅ New June 2026 | Static assets: logo, manifest, llms.txt, robots, sitemap |
| Google Site Verification | ✅ Via env var | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` |
| Bing Webmaster Verification | ✅ Via env var | `NEXT_PUBLIC_BING_VERIFICATION` — set this in Vercel |
| GA4 Analytics | ✅ Via env var | `NEXT_PUBLIC_GA_MEASUREMENT_ID` |
| PWA Manifest | ✅ | Categories: health, lifestyle, social; lang: en-IN |
| HSTS | ✅ Production only | 2-year max-age with preload |
| Geo meta tags | ✅ | `geo.region: IN`, `geo.placename: India`, `distribution: IN` |

### Known gaps ⚠️

| Gap | Priority | Action |
|---|---|---|
| No Bing Webmaster key set | HIGH | Owner: set `NEXT_PUBLIC_BING_VERIFICATION` in Vercel env vars |
| No Google Search Console verified | HIGH | Owner: verify via Google Search Console |
| Review count stuck at 120 | MEDIUM | Update FAQs + schema when count grows |
| No press/media coverage backlinks | HIGH | Outreach (see Content Plan below) — now more credible with 100+ organic users to cite |
| No `.well-known/` files | LOW | Add apple-app-site-association if native app launches |
| Blog: 17 posts (was 14) | MEDIUM | Still add 2–3 new posts per week (see Content Plan) |

---

## Weekly SEO Review Checklist

Run this every **Monday morning**. Takes ~30 minutes.

### 1. Google Search Console (console.search.google.com)
- [ ] Check impressions and clicks vs last week — target +10% week-over-week
- [ ] Check "Top queries" — note any new keywords appearing
- [ ] Check "Coverage" — fix any indexing errors immediately
- [ ] Check "Core Web Vitals" — keep LCP < 2.5s, CLS < 0.1
- [ ] Submit new blog posts/pages via URL Inspection if any published this week

### 2. Bing Webmaster Tools (webmaster.bing.com)
- [ ] Check indexing status — Bing feeds ChatGPT Search directly
- [ ] Submit new URLs via "URL Submission" if any published
- [ ] Check "SEO Analyzer" for any warnings

### 3. Position Tracking (manual or via a rank tracker)
Check current ranking for these priority keywords:
- [ ] "lean on" — target: Top 3
- [ ] "leanon" — target: #1
- [ ] "peer support India" — target: Top 5
- [ ] "emotional support India" — target: Top 5
- [ ] "talk to someone India" — target: Top 5
- [ ] "someone to talk to at night India" — target: Top 3
- [ ] "mental health chat India" — target: Top 10
- [ ] "anxiety support India" — target: Top 10
- [ ] "alternatives to therapy India" — target: Top 5
- [ ] "get paid to chat India" — target: Top 3
- [ ] "empathy" — target: Top 20 (highly competitive generic term, long game)
- [ ] "empathetic listener India" — target: Top 5 (low competition, new cluster)
- [ ] "peer counselling India" — target: Top 5

### 4. AI Citation Check (weekly spot check)
Ask ChatGPT, Gemini, Perplexity, and Claude these questions. Note whether LeanOn is cited:
- "What is LeanOn?" (should return our platform, not the song)
- "Best peer support app India"
- "Someone to talk to anonymously in India"
- "Affordable mental health support India"
- "Lean on app India"
Update `public/llms.txt` if any AI gives inaccurate descriptions.

### 5. Content freshness
- [ ] Update `app/sitemap.ts` — change `TODAY` constant to current date (keeps sitemap fresh)
- [ ] Update `reviewCount` in JSON-LD schemas when actual count changes significantly
- [ ] Check that all blog post `datePublished` are accurate

---

## Content Plan (highest SEO impact)

New content is the single biggest lever. Prioritise these:

### Blog posts to write (priority order)

**Done (July 2026):** ~~empathy-in-peer-support~~, ~~what-is-peer-support-india~~, ~~online-emotional-support-india-guide~~ — shipped this round.

1. **"LeanOn vs iCall vs Vandrevala Foundation — which is right for you?"**
   - Keyword: "iCall alternatives India", "vandrevala foundation alternative"
   - Slug: `/blog/leanon-vs-icall-vs-vandrevala`

2. **"How to support someone with anxiety in India without a therapist"**
   - Keyword: "how to help someone with anxiety India"
   - Slug: `/blog/how-to-support-someone-with-anxiety-india`

3. **"The real cost of therapy in India in 2025"**
   - Keyword: "therapy cost India", "how much does therapy cost India"
   - Slug: `/blog/therapy-cost-india-2025`

4. **"Late-night loneliness: why 2am feels the worst and what to do"**
   - Keyword: "someone to talk to at night", "loneliness at night India"
   - Slug: `/blog/late-night-loneliness-india`

5. **"How LeanOn helps IIT/IIM students with exam stress"**
   - Keyword: "IIT student mental health", "exam stress India"
   - Slug: `/blog/iit-iim-student-mental-health-peer-support`

6. **"Anonymous therapy alternatives in India (2025)"**
   - Keyword: "anonymous therapy India", "therapy without name India"
   - Slug: `/blog/anonymous-therapy-alternatives-india`

7. **"What Is Empathy vs Sympathy? A Practical Guide"**
   - Keyword: "empathy vs sympathy", "empathy meaning" — companion piece to the empathy-in-peer-support anchor post
   - Slug: `/blog/empathy-vs-sympathy`

### New support topic pages to create

**Done (July 2026):** ~~social-anxiety~~, ~~imposter-syndrome~~, ~~work-from-home-loneliness~~ — shipped this round.

- `/support/new-city-loneliness` — relocators, migrants
- `/support/online-friend-need` — "I need an online friend India"
- `/support/marriage-loneliness` — loneliness within marriage, high search intent, underserved topic

### New city pages to create

**Done (July 2026):** ~~jaipur~~, ~~ahmedabad~~ — shipped this round.

- `/lucknow` — Hindi-belt coverage
- `/kochi` — Kerala / Malayalam speakers
- `/chandigarh` — Punjab coverage

---

## AI / LLM Discoverability

### How LeanOn gets cited in ChatGPT, Gemini, Perplexity, Claude

These systems index and cite our content in different ways:

| AI | How it finds us | What to optimise |
|---|---|---|
| **ChatGPT Search** | Bing index + OAI-SearchBot | Bing ranking, fresh content, clear page structure |
| **ChatGPT Training** | GPTBot crawls + Common Crawl | llms.txt, robots.ts (GPTBot allowed), blog content |
| **Gemini** | Google Search index | Google ranking, schema.org, E-E-A-T signals |
| **Perplexity** | Real-time web + PerplexityBot | Schema markup, clear factual pages, citations |
| **Claude** | Anthropic web training (ClaudeBot) | llms.txt, robots.ts (ClaudeBot allowed), factual accuracy |
| **Microsoft Copilot** | Bing index | Same as Bing — Bingbot allowed in robots.ts |

### llms.txt maintenance (monthly)
File: `public/llms.txt`

Review and update when:
- Listener count changes significantly (update "Aggregate rating" stats)
- New support topics or city pages are added (add to Key Pages section)
- New blog posts published (add to Blog Posts section)
- Pricing changes (update pricing section)
- AI models are giving wrong information (add correction/disambiguation)

### Schema.org maintenance
Key schemas in `app/layout.tsx`:
- `aggregateRating.reviewCount` — update when review count changes (currently 120)
- `Service.availableLanguage` — update if new languages added
- `Organization.sameAs` — add new social profiles as they're created

---

## Technical SEO — Environment Variables Required

Set these in **Vercel** → Project → Settings → Environment Variables:

| Variable | Purpose | Where to get it |
|---|---|---|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console verification | Search Console → Settings → Ownership verification |
| `NEXT_PUBLIC_BING_VERIFICATION` | Bing Webmaster Tools verification | webmaster.bing.com → Add site → HTML Meta Tag value |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 | analytics.google.com → Data Streams → Measurement ID (G-XXXXXXXXXX) |

### Verify env vars are working
- Google: `https://www.leanon.app` → View Source → search for `google-site-verification`
- Bing: `https://www.leanon.app` → View Source → search for `msvalidate.01`
- GA4: Open Network tab in Chrome DevTools → reload leanon.app → look for requests to `googletagmanager.com`

---

## Backlink Strategy (most impactful for Google ranking)

Backlinks from authoritative sites are the #1 ranking signal. Target these:

### Press and media
- [ ] Pitch story to YourStory.com ("mental health startup India", "peer support economy India")
- [ ] Pitch to Inc42.com ("Indian startup tackling mental health crisis")
- [ ] Pitch to Mint or ET (mental health support for young Indians)
- [ ] Reach out to NDTV/News18 journalists covering mental health

### Partnerships and directories
- [ ] Get listed on mental health resource directories:
  - iMedix, HealthifyMe resource section
  - College/university counselling pages
  - HR Katha (for workplace mental health)
- [ ] Partner with student unions / college counselling centres
- [ ] Get mentioned in Quora answers about "emotional support India" (authentic, not spam)

### Content partnerships
- [ ] Guest post on YourStory, iDiva, Femina, Scroll.in (mental health sections)
- [ ] Collaborate with mental health influencers on Instagram/YouTube for backlinks
- [ ] Get listed in "Best mental health apps India 2025" roundup articles

---

## Keyword Clusters (for content creation)

### Brand cluster (own these)
- lean on, leanon, lean on app, leanon app, lean on India, leanon India

### Empathy cluster (new — priority as of July 2026)
- empathy, empathetic listener India, empathetic support India, compassionate listener India
- peer counselling India, peer counsellor India, active listening India
- what is empathy, empathy meaning, empathy vs sympathy
- Anchor content: `/blog/empathy-in-peer-support` — link to this from any new page discussing what makes LeanOn listeners different

### Intent cluster: "I need support now"
- someone to talk to, need someone to lean on, talk to someone India
- talk to someone at night, someone to talk to 2am, feeling lonely India
- anonymous emotional support, free emotional support India

### Intent cluster: "mental health alternative"
- alternatives to therapy India, cheap therapy India, online therapy alternative
- peer support India, peer counselling India, active listening India
- free mental health support India

### Intent cluster: "earn as listener"
- get paid to chat India, earn by chatting India, become peer listener India
- earn from home listening India, work from home chatting India

### Topic cluster: emotions
- loneliness India, anxiety support India, burnout India, grief support India
- breakup help India, relationship stress India, student stress India
- founder mental health, startup burnout India, men's mental health India

---

## Monthly SEO Report Template

Use this every month to track progress:

```
## LeanOn SEO Report — [Month Year]

### Traffic
- Organic sessions: [X] vs [Y] last month (+Z%)
- Top organic landing pages: [list]
- New ranking keywords: [list]

### AI Citations
- ChatGPT: [accurate / inaccurate / not citing]
- Gemini: [accurate / inaccurate / not citing]
- Perplexity: [accurate / inaccurate / not citing]

### Content published this month
- Blog posts: [list]
- New pages: [list]
- llms.txt updates: [yes/no]

### Backlinks acquired
- New referring domains: [X]
- Notable links: [list]

### Wins
- [What improved]

### Next month focus
- [Priority actions]
```

---

## File Reference

| File | Purpose | Update frequency |
|---|---|---|
| `app/sitemap.ts` | URL index for Google, Bing, AI crawlers | When new pages added; update TODAY date weekly |
| `app/robots.ts` | Crawler permissions | Rarely — only to add/remove crawlers |
| `public/llms.txt` | AI model citation guide | Monthly — when facts change |
| `app/layout.tsx` | Root metadata + schemas | When business facts change |
| `app/opengraph-image.tsx` | Social share card | Rarely — only for brand refresh |
| `app/page.tsx` | Homepage schemas (FAQPage, Product) | When reviews/FAQs change |
| `next.config.js` | Headers, cache, image config | Rarely |
