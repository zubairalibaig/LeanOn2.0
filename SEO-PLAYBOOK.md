# LeanOn SEO & AI-Discoverability Playbook

Everything code-side is done (see "What's already implemented" at the bottom).
This file lists the **off-site actions only a human can do**, in priority order.
Budget: most of this is free; total cost if you do everything paid is under ₹10,000.

---

## How search works now (2026 reality)

Three doors people come through — you must win all three:

1. **Classic Google/Bing** — still ~60% of discovery in India. Won by content + backlinks + technical SEO.
2. **AI assistants (ChatGPT, Gemini, Claude, Perplexity, Meta AI)** — fastest-growing door. These cite sources they (a) crawled, (b) found consistently described across the web, and (c) saw referenced on Reddit/Quora/Wikipedia-grade sites. AI answers heavily weight *consensus*: the same facts about LeanOn appearing in many independent places.
3. **Social search (Instagram, YouTube, LinkedIn search bars)** — Gen-Z searches Instagram before Google. Won by having active handles with keyword-rich bios.

The strategy below feeds all three at once.

---

## Phase 1 — This week (free, ~4 hours)

### 1. Search engine registration
- [ ] **Google Search Console** → add `leanon.app` AND `www.leanon.app`, submit `https://www.leanon.app/sitemap.xml`, set target country = India (Settings → International targeting). Put the verification code in Vercel env `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- [ ] **Bing Webmaster Tools** (powers ChatGPT Search + Copilot!) → verify, submit sitemap. Env: `NEXT_PUBLIC_BING_VERIFICATION`. This is disproportionately important now because OpenAI uses Bing's index.
- [ ] **IndexNow** — in Bing Webmaster, enable IndexNow for instant indexing.

### 2. Claim every social handle as @leanonapp (even before posting)
Consistent handles = AI models learn the entity. The JSON-LD on the site already declares these URLs, so claim exactly:
- [ ] instagram.com/leanonapp
- [ ] twitter/x.com/leanonapp
- [ ] linkedin.com/company/leanonapp
- [ ] youtube.com/@leanonapp
- [ ] reddit.com/user/leanonapp
- [ ] pinterest.com/leanonapp (huge for mental-health content in India)
- [ ] threads.net/@leanonapp
- [ ] t.me/leanonapp (Telegram channel)

**Bio template (use everywhere, keyword-rich for social search):**
> LeanOn — India's peer emotional support app 🇮🇳 Talk to someone who gets it. Loneliness, anxiety, burnout, breakups. Not therapy, real humans. First 5 min free → leanon.app

### 3. Google Knowledge panel seeds
- [ ] Create a **Crunchbase** profile (free tier) — AI models cite Crunchbase constantly for "what is X company".
- [ ] Create a **Wikidata** item: instance of = "online service"; official website = leanon.app; country = India; inception = 2024. Wikidata feeds Google's Knowledge Graph AND every LLM. This is the single highest-leverage 20 minutes for the Major-Lazer-song problem: a Wikidata entity for LeanOn-the-platform gives search engines a *thing* to disambiguate toward.

---

## Phase 2 — This month (free, ongoing)

### 4. The backlink ladder (in order of effort/value)

**Directories & listings (1 hour total, do all):**
- [ ] Product Hunt launch (huge AI-citation source; schedule a Tuesday)
- [ ] AlternativeTo.net — list as alternative to: 7 Cups, Wysa, BetterHelp, Talkspace. ("Free alternative to 7 Cups in India" is a winnable AI answer.)
- [ ] Futurepedia / There's An AI For That — counter-positioning: "human, not AI"
- [ ] IndiaBizList, Sulekha, JustDial (local India signals)
- [ ] startupindia.gov.in registration (gov backlink = high trust)

**Community presence (the #1 AI-citation source):**
- [ ] Reddit: be genuinely useful in r/india, r/mentalhealthindia, r/bangalore, r/mumbai, r/delhi, r/pune, r/kolkata, r/Chennai. Rule: 9 helpful comments for every 1 mention of LeanOn. Reddit is the most-cited domain in AI answers — one well-received "I built this" post in r/india is worth 100 directory links.
- [ ] Quora: answer "affordable therapy alternatives India", "I feel lonely and have no one to talk to India", "is there someone I can talk to online India". Quora answers rank in Google India AND get scraped into AI training data.

**Content partnerships:**
- [ ] Pitch YourStory, Inc42, FactorDaily, The Better India — founder-story angle ("peer support marketplace for Bharat"). One YourStory article = the strongest single backlink available to an Indian startup.
- [ ] Medium publication cross-posts of the blog (canonical URL back to leanon.app — Medium supports this natively, no duplicate-content risk).

### 5. Social search content engine
Make 1 reel/short per week (Canva templates, 30 minutes each). Searchable captions:
- "someone to talk to at 2am india" / "feeling lonely in bangalore" / "therapy too expensive india alternatives" / "talk to someone in hindi about stress"
- Cross-post identical content: Instagram Reel → YouTube Short → Pinterest Idea Pin. Three platforms, one effort.
- LinkedIn: 1 founder post/week about building LeanOn. LinkedIn posts rank in Google India within hours.

### 6. The Major Lazer problem — entity disambiguation
Already done in code (schema `disambiguatingDescription`, FAQ, alternateName). Off-site:
- [ ] Wikidata item (above) — the structural fix.
- [ ] Make all social bios say "LeanOn (leanon.app)" — teaches AI the entity↔domain binding.
- [ ] When people search "leanon app" or "lean on app india", your site already targets these; the song doesn't compete for them. Don't fight "lean on" generically — own "leanon" (one word), "leanon app", "lean on app", and every "<problem> + india" query instead. Within 2–3 months of GSC data you'll see brand queries win.

---

## Phase 3 — When you have ₹5–10k budget

- [ ] **Google Business Profile** (needs an address; a coworking address works) → instant map-pack presence for "emotional support bangalore".
- [ ] 2–3 sponsored posts on Indian mental-health newsletters/pages (₹2–5k each) — backlinks + social proof AI picks up.
- [ ] Press release via NewsVoir/PRNewswire India (₹5k) when you hit a milestone ("10,000 sessions") — syndicated backlinks from 50+ news domains in one shot.

---

## Measurement (monthly, 15 minutes)

1. Google Search Console → Performance → filter India → watch: `leanon`, `leanon app`, `peer support india`, `someone to talk to india`, `therapy alternative india`.
2. Ask ChatGPT/Gemini/Perplexity monthly: "affordable therapy alternatives in India", "apps to talk to someone when lonely India" — track when LeanOn starts appearing. (Expect 6–10 weeks after Reddit/Quora/directory presence builds.)
3. Bing Webmaster → confirm GPTBot/ClaudeBot/PerplexityBot in crawl logs (also visible in Vercel logs, filter user-agent).

---

## What's already implemented in code (this repo)

| Asset | Where | What it does |
|---|---|---|
| `llms.txt` | `public/llms.txt` | Canonical facts file for AI assistants — what LeanOn is, pricing, disambiguation from the song, key URLs |
| AI crawler allowlist | `app/robots.ts` | Explicitly allows GPTBot, ClaudeBot, Gemini (Google-Extended), PerplexityBot, Meta, Apple, Amazon + 9 more |
| OG/Twitter images | `app/opengraph-image.tsx` | Auto-generated 1200×630 share image (was previously a 404 — every share showed broken image) |
| Song disambiguation | `app/layout.tsx` + homepage FAQ | `disambiguatingDescription` in Organization schema + visible FAQ + FAQPage JSON-LD entry |
| India geo signals | `app/layout.tsx` | `geo.region=IN`, `geo.placename`, `distribution` meta + `en-IN` hreflang (already present) |
| Entity schema | `app/layout.tsx` | Organization + WebSite + SoftwareApplication JSON-LD with `knowsAbout`, `sameAs` social profiles, `areaServed: India` |
| 7 city pages | `/delhi /mumbai /bengaluru /hyderabad /chennai /pune /kolkata` | Each with LocalBusiness + FAQPage + Breadcrumb schema, language-specific content (Tamil/Marathi/Bengali) |
| 60+ indexed pages | sitemap.ts | Topic pages, blog, resources, comparison pages — all with canonical + FAQ schema |
| Internal link mesh | support pages | All 11 support topics link to all 7 cities |
