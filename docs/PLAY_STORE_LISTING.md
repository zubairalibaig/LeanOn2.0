# LeanOn — Google Play Store listing copy

Ready-to-paste copy for the Play Console listing. Written with a deliberate
**human, real-time service** framing throughout — this is what keeps LeanOn on
the safe side of Google Play's payments policy (real-world services delivered
by a person are exempt from mandatory Google Play Billing; digital goods /
in-app currency are not). Never describe the wallet as "coins", "credits",
"tokens" or "digital currency" anywhere in the listing — it is a **prepaid
balance for sessions with real people**.

Rules honored: no "free" as a marketing hook; crisis line is NIMHANS +
Tele-MANAS only; peer-support-not-therapy disclaimer included; no owner name.

---

## App title  (max 30 characters)

**LeanOn — Peer Support**   (21 chars)

Alternatives if you want more keyword weight:
- `LeanOn: Talk to a Listener`   (26 chars)
- `LeanOn: Emotional Support`   (25 chars)

---

## Short description  (max 80 characters)

**Talk to a verified peer listener in India — anonymous, human, 24/7.**   (69 chars)

Alternative:
- `Someone to lean on, anytime. Real peer listeners, private sessions, 24/7.` (72)

---

## Full description  (max 4000 characters)

Some nights feel heavier than others. When there's no one to call, LeanOn
connects you with a real person who has been through what you're facing —
a verified peer listener, available any hour, over private text or voice.

This is not a chatbot, and it is not therapy. It's a human being who listens,
without judgment, for as long as you need.

WHO YOU TALK TO
Every LeanOn listener is a real, verified person with lived experience of the
things people carry — loneliness, anxiety, burnout, grief, breakups, career
stress, student pressure, family expectations. They're trained in active,
compassionate listening. No scripts. No bots. No advice you didn't ask for.

HOW A SESSION WORKS
1. Sign up in about 30 seconds with just your phone number — no email, no full
   name required.
2. Browse verified listeners by topic. Read their stories and ratings before
   you talk to anyone.
3. Choose how you want to connect — private text chat or a voice call.
4. Pick a session length and start. Someone is usually available right now,
   with no appointment.

REAL-TIME, HUMAN SUPPORT
Sessions are live, one-on-one conversations with a real listener — the same
way you'd book time with any consultant. You pay for the listener's time at
their per-minute rate, plus a small flat platform fee per session. You keep a
prepaid balance in the app to start sessions instantly, and any unused balance
is fully refundable — no subscription, no lock-in.

BUILT FOR INDIA
- Phone-number sign-in — private and quick, safe even in a joint family.
- First name only — no last name or profile photo required.
- Talk in English or Hindi.
- Listeners across Bengaluru, Mumbai, Delhi, Chennai, Hyderabad, Pune and
  everywhere else — it's fully online.
- Available late — someone is online even at 2 AM.

WHAT PEOPLE COME HERE FOR
- Loneliness — the quiet after everyone's asleep
- Work stress and burnout
- Career confusion
- Relationships and breakups
- Grief and loss
- Student and exam pressure
- The founder's journey
- Or no reason at all — sometimes you just need to talk

YOUR PRIVACY
Sessions are private and confidential. LeanOn never shares your personal
details or the contents of your conversations. You stay anonymous to your
listener beyond a first name.

IMPORTANT — PEER SUPPORT, NOT THERAPY
LeanOn listeners are real people with lived experience, not licensed
therapists or counselors. Peer support is genuine and valuable, and it is
different from — not a replacement for — professional mental health treatment.
If you need clinical care, please consult a qualified professional.

IN CRISIS RIGHT NOW?
Please reach out to a professional helpline immediately:
- NIMHANS: 080-46110007
- Tele-MANAS: 14416
(Both free, 24/7, Government of India.)

You don't have to carry it alone. Someone is ready to listen.

---

## Category & tags (Play Console fields)

- **Category:** Health & Fitness  (or Lifestyle — Health & Fitness is the
  stronger fit and matches the manifest `categories`)
- **Tags:** emotional support, peer support, mental wellbeing, listening,
  counselling alternative
- **Content rating:** complete the questionnaire honestly — expect "Teen"
  given mature emotional themes; it is not an adult app.
- **Contains ads:** No
- **In-app purchases:** Yes — declare the prepaid session balance. In the data
  safety + payments sections, describe it as payment for real-time sessions
  with human listeners via a third-party gateway (Razorpay), NOT digital goods.

## Data safety form — key answers
- Collects phone number (account) — yes, for sign-in.
- Payment info handled by Razorpay (processor) — not stored by LeanOn.
- No data sold. Conversation content not shared.
- Data encrypted in transit.

## Assets still needed before submission
- **App icon** 512×512 PNG (see icons note below).
- **Feature graphic** 1024×500 PNG.
- **Phone screenshots** — at least 2 (up to 8), 1080×1920. Drop them at
  `public/screenshots/01-home.png` … `04-wallet.png` to match the manifest,
  and upload the same to Play Console.

## Icons reminder
`public/manifest.json` references `/icon-192.png` and `/icon-512.png`, which do
not exist yet (only `/logo.png` does). Generate proper **maskable** 192 and 512
PNGs from the logo (PWABuilder's image generator, or realfavicongenerator.net)
and drop them in `public/` before running PWABuilder, or the Android package /
install icon will be broken.
