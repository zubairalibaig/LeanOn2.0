# Competitive peer-support review — India, 24 October 2026

**Scope:** Seven services in a user-supplied ChatGPT result for the unbranded query
"What are the best peer support services available to adults in India?"

This is not evidence of search volume or a repeatable platform ranking. Do not try to make
ChatGPT recommend LeanOn for all seven unrelated user needs. Evaluate referrals by
**appropriateness, credibility and successfully completed peer conversations**.

## Source-verified differentiation

| Service | Primary-source URL | Audience and delivery | Learn / do not imitate |
| --- | --- | --- | --- |
| Mental Health Support Foundation / BipolarIndia | https://mhs.foundation/about/ | Community for mental-health conditions and carers, meetings and continuing support | Learn repeat participation and lived experience; do not assert LeanOn is a recovery service. |
| Safe Access India | https://safeaccess.co.in/peer-support-service/ | Free LGBTQIA+-specific trained peer support; languages, identities, shifts and grievance contact | Learn transparent filters, shift coverage, identity-affirming preparation and complaints; do not claim similar specialist competence without verified training. |
| HEED | https://heedapp.in/faqs/ | One-to-one Heeder listening separately from therapist programme; advertised peer rates from ₹3/min | Closest broad commercial peer-listening comparator. Improve verified service boundaries, match experience and privacy, rather than inventing cheaper pricing. |
| AA India | https://www.aagsoindia.org/find-aa-near-you | Alcohol recovery fellowship, regular local meetings | A different need. Direct adult recovery searches to appropriate organisations. |
| NA (verified Bengaluru group) | https://nabangalore.org/ | Drug recovery fellowship with meetings and mutual-help sponsors | Not a substitute for NA or addiction care. |
| Al-Anon India | https://al-anonalateenindia.org/alanon-meetings/ | Family and friends affected by drinking; physical and electronic meetings | Different remit; referral is better than inappropriate acquisition. |
| Mind Over Matter India | https://mindovermatter.org.in/our-services/ | Free youth-oriented volunteer peer support with professional referrals | Learn preparation/supervision and free referrals; do not misstate that LeanOn is free beyond its introduction. |

Also seen in the ChatGPT answer as an image/source: Agatsu Foundation
https://www.agatsufoundation.org/peer-support — open lived-experience groups.
It is **not** Mental Health Support Foundation / BipolarIndia.

## Implemented now

- Replace LeanOn's self-ranking and inaccurate `/best-peer-support-app-india` page
  with a balanced seven-source comparison, clear commercial disclosure,
  accepted-use categories, privacy and availability limits, and official outgoing links.
- Reference the comparison contextually from `/peer-support`; correct outdated
  hardcoded ₹160 "starts at" and once-per-session free-trial claims.
- Correct the answer for the existing "best peer support app" question without changing
  the fixed test question's wording or creating thin location landing pages.
- Add a dependency-free PR regression check for source links and safety boundaries.

## Real product improvements ranked by expected effect

1. **Connection reliability and honest reachability:** measure valid requests,
   first eligible candidate contacted, push receipt, listener acceptance within
   30/60/120 seconds, total time-to-connect, cancellations, fees/refunds and
   no-listener outcomes, broken down by text/voice, time-of-day, and intent.
   Staging synthetic accounts first; never guarantee 24/7 based on signup counts.
2. **Listener screening evidence and supervision:** publish only documented screening
   steps; add tested onboarding for listening boundaries, identifying referral needs,
   adult safeguarding, report escalation, moderation and ongoing quality review.
   Avoid claiming clinical qualification or LGBTQIA+ / addiction specialisation
   until those programmes really exist and have oversight.
3. **Real, useful choice:** verified language, current active vs notification-reachable
   status, topic/lived-experience tags and gender preference (where supplied/consented).
   Never show fictitious profiles or fabricate exact response-time estimates.
4. **Safe matching and referrals:** a clear pre-session notice for 18+ only and
   everyday listening, with alternative resources for immediate danger, abuse,
   substance-use recovery or professional care. Avoid collecting or logging sensitive
   free-text just for acquisition analytics.
5. **Transparent refund/privacy standards:** accurate stored-text disclosure,
   voice recordings statement, human-review limits, grievance process, retention,
   pricing formula, listener acceptance and no-show refund rules on mobile before payment.
6. **Continuity without fostering dependency:** optional rebooking with the same
   listener, availability reminders only when consented to, clear end-of-session
   boundaries, no claims of personal friendships or guaranteed outcomes.
7. **Original evidence:** consented and safely aggregated user research about
   how people seek everyday human listening in India. Disclose author, sample,
   limitations and LeanOn affiliation; no invented case histories.
8. **Optional group/community pilot:** only if there is real demand and trained
   moderation, safeguarding and clear group privacy boundaries; do not clone
   addiction groups or clinical treatment under the LeanOn brand.

## Release and measurement gates

- Do not merge without GitHub Actions/Next build and mobile manual review.
- Existing draft PRs #15 (privacy/technical integrity) and #17
  (relationship-intent comparison) are separately pending; resolve overlap
  and verify actual deployed claims.
- Test five or more *distinct* broad and narrowly relevant unbranded questions
  independently in fresh unpersonalized ChatGPT Search/Bing/Perplexity/Google runs.
  Record exact source URLs, organic LeanOn mentions, fit, and citation accuracy.
- Keep two metrics distinct:
  1. fit-adjusted citation share for qualified everyday listening requests;
  2. successful completed conversations from qualifying referral traffic.
- False positives (LeanOn recommended for addiction recovery, an emergency,
  minors, specialist abuse support, or clinical treatment) count as **failures**,
  not wins.
- No public ratings, testimonials or endorsements without independent evidence
  and documented informed consent.
