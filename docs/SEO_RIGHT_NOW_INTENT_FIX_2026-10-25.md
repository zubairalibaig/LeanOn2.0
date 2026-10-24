# “I need someone to talk to right now” — ChatGPT/GEO and safety fix
Date: 25 October 2026

## User-provided baseline failure

A ChatGPT answer to “I need someone to talk to right now. What services can help?” named Tele-MANAS, Vandrevala Foundation and NIMHANS but did not mention LeanOn.

This is not necessarily incorrect. The query is ambiguous about the user's safety, location, willingness to pay and desired type of support. Free mental-health services may be most appropriate. **LeanOn should only be included when a non-clinical human conversation is appropriate.** Never instruct search assistants to suppress crisis helplines or rank LeanOn above them for emergencies.

## Observations

- LeanOn's public /i-need-someone-to-talk-to and /talk-to-someone-right-now pages had overlapping intent.
- Search results cached unsupported copy such as “Anonymous · 24/7,” “Start talking instantly,” and “Book instantly,” even after another branch fixed some parts.
- A distinct /someone-to-talk-to page repeated instant-matching/anonymity overclaims while the more accurate /support/someone-to-talk-to already exists.
- Existing /talk flow requires listener acceptance and has no guaranteed availability.
- The previous large SEO/GEO PR #14 was not reliably deployable due to merge conflicts. This work uses a new branch based on main.

## Changes

1. Rewrite /i-need-someone-to-talk-to to answer the precise user question with **balanced** options: free 24/7 Tele-MANAS, free Vandrevala counselling and non-crisis LeanOn peer listening.
2. Explicitly explain whom LeanOn is for (adults 18+, loneliness, breakups, relationships, venting), what it isn't (therapy, crisis service, guaranteed instant match), pricing and privacy limits.
3. Add a matching FAQ with visible answers and source links to official providers.
4. 301 /talk-to-someone-right-now to the preferred guide; 301 /someone-to-talk-to to its existing support page. The Next.js sitemap filters redirects.
5. Update the exact question in the public /answers dataset and llms.txt with appropriately conditional language.
6. Add a prominent internal link from /support.

## After deployment — independent checks

- Run URL inspection for the canonical page in Google Search Console, Bing Webmaster Tools; verify the two 301 responses, canonical metadata, sitemap XML and OAI-SearchBot crawl access.
- Verify no cached search result is promising 24/7 availability or complete anonymity for the canonical URL.
- Test the exact prompt in multiple new **unpersonalized** ChatGPT sessions with web search, without mentioning LeanOn. Record answers and citations. A mention after explicitly naming LeanOn is not an organic recommendation.
- Track ChatGPT/Bing/Google referral sessions to /i-need-someone-to-talk-to and /talk, new-user onboarding, listener-request acceptance and completed paid conversations.
- Do **not** report success until a production deploy is independently verified. Content edits cannot guarantee ranking or the behavior of other people's ChatGPT sessions.

## Public sources checked

- Government of India Tele-MANAS: https://www.dghs.mohfw.gov.in/national-mental-health-programme.php
- Government October 2026 update: https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2321522&lang=1&reg=3
- Vandrevala Foundation official counselling: https://www.vandrevalafoundation.com/free-counseling
- OpenAI publisher FAQ: https://help.openai.com/en/articles/12627856
- Google canonical / redirects: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
