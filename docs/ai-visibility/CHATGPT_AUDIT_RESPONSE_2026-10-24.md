# Response to the ChatGPT AI-visibility audit (24 Oct 2026)

What happened to each actionable point. "Done" means changed in code and pushed to `main`. "Owner" means only the owner can do it, outside the codebase.

## Content and claims

| ChatGPT finding | Status |
|---|---|
| Pages promise 24/7 listener availability | **Done.** About 240 cases were removed earlier on 23–24 Oct; the rest are fixed here. Helpline "24/7" facts stay. |
| `/support/anonymous-support` says chats aren't retained, calls it "completely anonymous", says voice is "anonymised", and claims research "consistently shows" outcomes | **Done.** Rewritten to match the Privacy Policy: anonymous to the listener, not to LeanOn; text is stored and reviewed only if a session is reported or flagged; voice is not recorded; research claims are qualified. |
| Older indexed homepage says the free trial is "once per listener" | **Already correct in code** (once per account). Recrawls are requested via IndexNow on each deploy. **Owner:** request indexing for `/` in Google Search Console. |
| Relationship counselling page blurs peer support and counselling | **Done.** The title and description now ask "counselling or peer support?". A notice at the top says LeanOn does not provide relationship or couples counselling. "Will always tell you honestly" became "listeners are asked to suggest professional help". |
| Home page promises near-instant access | **Done.** Badge "In minutes" → "No appointment"; headline "right now" → "who listens"; "instant" and "Available now" removed. |
| `/talk` metadata and structured data: "a person available right now" | **Done.** The wording now depends on a listener accepting. The Talk now FAQ explains the ~30-second turns, the 5-minute limit and "no charge if nobody accepts". |
| Trust page: reviewing flagged chats vs "never read"; report-response timelines | **Done.** It never said "never read". I removed the unverifiable "within 24 hours" promise and corrected where the Report button is (after a session, not on profiles). |
| `/is-leanon-safe`: "Block or report" | **Done.** Now "Report", because no blocking option exists in the app. |
| Privacy Policy: automated checks, AI, human review, retention, deletion | **Done.** Added the contact-detail checks (fixed rules, not AI), message retention after account deletion, and a corrected listener-ID section (only the last 4 Aadhaar digits plus a one-way hash; the selfie is kept privately until account deletion). Analytics providers are named. |
| `peer-support-online-india`: 24/7 and training | **Already fixed** on 24 Oct. |
| `talk-to-real-person-online-india`: one free intro per account, pricing | **Already correct in code.** Search engines show an older copy. |
| Session quotes published without proof of consent (maternal burnout and others) | **Done.** All 7 quotes labelled "real/anonymous LeanOn session" were removed: mom-burnout, married-but-lonely, husband-not-supportive, fear-of-marriage, adulting, men-loneliness, marriage-problems. |
| "Research consistently shows…" categorical claims | **Done.** 20 cases across 13 files now say "research suggests". Strong efficacy claims are reworded and marked as general research, not LeanOn outcomes. |
| Shared public-facts module instead of hardcoded facts | **Done.** `lib/service-facts.ts` (`PUBLIC_SERVICE_FACTS`, `SERVICE_DESCRIPTION`) is used by the site-wide Service structured data and the Trust page. Prices still come from `lib/constants.ts` and `lib/geo-pricing.ts`. |
| Root layout home canonical inherited by pages without their own; "InStock" offer | **Done.** The site-wide canonical is removed (the home page sets its own) and `availability: InStock` is removed. |
| Teen-targeted content | **Done.** `/teen-mental-health-india` ("Class 12 pressure… no parents notified") now 308-redirects to `/support/student-stress`, which states 18+ and points under-18s to a trusted adult or Tele-MANAS. |
| "What you say stays in the session", "no records", "content is not stored" elsewhere | **Done.** About 25 cases across 20 files were replaced with accurate privacy wording. |
| "Available now" / "available right now" / "someone is available right now" (about 90 more cases, including US and UK pages promising 2 am, midnight and bank holidays) | **Done.** Now "no appointment", "may be online right now", or the Indian-time availability explained. Factual uses ("browse who is online", the in-app session screen) are kept. |

## Content improvements

| ChatGPT suggestion | Status |
|---|---|
| `/for-women`: homemakers, working mothers, privacy in a shared household, requesting a woman listener | **Done.** New "Practical Answers" section. |
| NRI content: time zones, languages, billing, acceptance | **Done.** On `/indian-emotional-support-abroad`: new FAQs on IST overlap by region, languages, US$ pricing charged in INR (needs international cards), the countries that can sign in, and that acceptance isn't guaranteed. |
| Marriage loneliness: `/support/marriage-loneliness` vs `/support/married-but-lonely` | **Differentiated, not merged.** Each now links to the other with a distinct purpose ("understanding why" vs "the signs"). Merging or redirecting should wait for Search Console data, as ChatGPT advises. |
| Consolidate duplicate-intent clusters | **Waiting on Search Console data** (owner to export). There are 7 clusters of 20–45 pages, listed in `AUDIT_2026-10-24.md`. |
| `/relationship-emotional-support-guide-india` as the authoritative guide | It already is; the relationship pages link to it. |

## Product

| ChatGPT finding | Status |
|---|---|
| Adult-only enforcement missing | **Done.** Sign-in now requires ticking "I am 18 or older". `/api/auth/phone-widget` and `/api/auth/review-login` refuse sign-in (400 `age_not_confirmed`) without it. This is self-attestation; a stronger age-assurance method would be an owner decision. |
| Matching expectations (~30 s per listener, up to 5 min) | **Done.** Stated in the Talk now FAQ, plus "a session starts only when a listener accepts; if nobody can, you are not charged". |
| Connection success rate, median and p90 time to connect | **Done.** Admin → Sessions → Talk now metrics now show "Connection success" (connected ÷ valid attempts) and the slowest-10% time to connect, alongside the existing median. Server-confirmed events already exist (`talk_searches`, `sessions.booked_via` / `ended_by`). |
| Matching acceptance tests in staging (5.3) | **Not run.** There's no staging environment here and live users shouldn't be used. The checklist is in `matching-acceptance-tests.md`. |

## Off-site (owner)

1. **Google Play listing.** ChatGPT found a public listing last updated 2 Apr 2024 that describes therapists and appointments, rated "Everyone".
   - If that is the `com.leanon.app` listing, the new release you're submitting replaces its description.
   - Also update in Play Console: the store description and screenshots, the target audience (18+ only), the content-rating questionnaire, and the Data safety form (see the Data safety answers given earlier).
   - If it's a different, old app, unpublish it or update it.
2. **LinkedIn** (`linkedin.com/company/leanonapp`): update the About text to `SERVICE_DESCRIPTION` in `lib/service-facts.ts`.
3. **Search Console and Bing:** request indexing for `/`, `/faq`, `/about`, `/talk`, `/support/anonymous-support`, `/privacy` and `/trust`. Export 3 months of query data for the duplicate-page decisions.
4. **Outreach:** ChatGPT's first three targets (The Better India, Brown Girl Magazine, MannMukti), plus the list in `AUDIT_2026-10-24.md`. Always disclose that you are the founder.

## Benchmark

`test-questions.csv` now holds ChatGPT's fixed 50 unbranded questions (Q01–Q50) with their expected pages. All 50 pages exist and none redirects. `tracking-template.csv` has ChatGPT's fields.

Run each question in a fresh Temporary Chat, and again in Perplexity, Bing/Copilot and Google, on day 0, 30, 60 and 90. Calculate:
- organic mention rate;
- direct citation rate;
- appropriate-mention rate.
