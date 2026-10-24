# Talk now / booking acceptance tests

Run on a **staging** deployment with synthetic accounts, never with real users. For each case, record:
- the session or request id;
- timestamps;
- state transitions (`sessions.status`, `cancel_reason`, `ended_by`, `talk_searches`);
- the wallet before and after.

Don't copy message text into notes or analytics.

| # | Case | Expected result | Code to check |
|---|---|---|---|
| 1 | Listener online with a fresh heartbeat | Eligible for matching unless busy or suspended | `app/api/talk/candidates/route.ts`, `lib/listener-presence.ts` |
| 2 | Listener closes the app and has no push token seen in the last 3 days | Offline about 15 min after the last heartbeat; the tab-close beacon ages it (180 s grace) | `lib/listener-presence.ts`, `/api/presence` |
| 3 | Listener in the background with reachable push | Stays "online" up to `AWAY_WITH_ALERTS_MINS` (60) and ranks below in-app listeners. The first miss → offline | `lib/listener-presence.ts`, `recordMissedRequest()` |
| 4 | Listener misses a request | Talk now moves to the next listener after `TALK_TRY_SECS`. The request is cancelled as `timed_out` or `talk_unanswered`, and the held amount is refunded | decline route, `lib/talk-match.ts` |
| 5 | Listener accepts just as Talk now switches | Exactly one active session, with no double charge and no wrong cancellation | `app/api/sessions/route.ts` (`replacesSessionId`), accept route |
| 6 | Two seekers request the same listener | At most one session reserves the listener | sessions POST busy checks |
| 7 | Seeker leaves during matching | Pending request withdrawn; held money restored | `app/talk/page.tsx` withdraw / `keepalive` decline |
| 8 | Free trial already completed | No second free trial, even after retries or with a new listener | `MAX_FREE_TRIALS`, sessions POST |
| 9 | Seeker asks for voice | Voice rate (text + `VOICE_RATE_PREMIUM`) stored; switching to text refunds the unused premium | `sessionRatePerMin()`, `/api/sessions/switch-to-text` |
| 10 | Seeker does not tick 18+ | Sign-in refused: `/api/auth/phone-widget` returns 400 `age_not_confirmed` | `app/auth/page.tsx`, phone-widget route |
| 11 | No listeners online | "Nobody could pick up" state, no charge, a suggestion to leave a message; never shows an invented listener | `app/talk/page.tsx` (`phase.k === 'none'`) |
| 12 | Overseas (+971 / +61) seeker | NRI prices in local currency; wallet presets ₹840 / ₹1260 / ₹1680 / ₹3360 | `lib/geo-pricing.ts`, `app/wallet/page.tsx` |
