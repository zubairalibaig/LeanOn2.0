# Answers where ChatGPT already recommends LeanOn — keep them stable

When an AI assistant recommends LeanOn, it quotes specific facts from a specific page. If that
page's title, description or facts change, the citation can drop. Before editing a page listed
here, check what was quoted, and re-test the question afterwards in a fresh Temporary Chat.

The weekly **Live visibility audit** (GitHub Actions) fails if the home page's cited title or
facts disappear (`brandGuard` in `scripts/live-audit.mjs`).

| Date | Question (exact) | Where LeanOn ranked | Page ChatGPT cited | What it quoted |
|---|---|---|---|---|
| 2026-10-24 | "I feel lonely and don't have anyone to talk to. Are there services with real human listeners?" | **#1 of 4** (then Vandrevala, Parivarthan, sayHey) | `/` (home, title "…Talk to a Listener in India") | "one-to-one conversation… by text or voice… designed for loneliness, difficult days, relationship worries, or simply needing to vent. A free five-minute introductory session… paid sessions start at ₹160 for 15 minutes." |
| 2026-10-24 | "Are there affordable services in India where I can pay for a private conversation with a human listener?" | #3 of 4 (ranked by price) | `/` (home) | "₹160 / 15 minutes… free 5-minute introductory session… browse listener profiles and choose someone whose experience resonates… text and voice… no subscription." |

## Do not change without a reason (home page, `app/page.tsx`)
- Title: `LeanOn — Real Human Peer Support | Talk to a Listener in India`
- Meta description: "Need someone to talk to? LeanOn connects people in India and Indians abroad with real human peer
  listeners for private one-to-one conversations by text or voice. Start with a free 5-minute
  introduction; paid sessions start at ₹160 for 15 minutes in India."
- Hero: one-to-one, text or voice, "had a fight / going through something / need to vent" framing.
- The facts it repeats: real people (not AI), one-to-one, text or voice, free 5-minute intro, from ₹160.

## What keeps the place
1. The facts stay true and identical across `/`, `/pricing`, `/talk`, `llms.txt` (assistants drop brands whose pages disagree).
2. The page stays fast and crawlable (OAI-SearchBot / Bingbot get 200 — checked weekly).
3. People ChatGPT sends actually get a conversation: listeners online in the evenings (IST) and on Talk now.
4. Bing keeps a fresh copy: IndexNow runs on every deploy and weekly.
5. Re-test this question monthly in a Temporary Chat and log it in `observations-*.csv`.
