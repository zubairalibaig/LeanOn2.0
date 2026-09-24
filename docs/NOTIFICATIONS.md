# Listener presence and session-request alerts

What decides whether a listener is "online", how a new request reaches their
phone, and what to check when a listener says "I was online but got nothing".
Read this before changing `ListenerPresence.tsx`, the dashboard's toggle,
`public/sw.js`, `lib/push.ts` or `lib/listener-presence.ts`.

## How a request reaches a listener

1. The seeker books. `/api/sessions` POST creates a `pending` session. It then
   sends a web push to **every device** the listener registered, using
   `sendPushToUser()` in `lib/push.ts`. The push has:
   - `Urgency: high`, so Android delivers it straight away, even in Doze;
   - a TTL equal to the 3-minute response window, so a late push never rings
     for a dead request;
   - a per-request tag, so a second request buzzes again;
   - `requireInteraction`, so it stays on screen until the listener taps it.
2. `public/sw.js` shows the notification, even with no LeanOn tab open.
   Tapping it opens `/dashboard`, where the accept/decline modal is.
3. If a LeanOn tab is open, the in-page layer also rings. It uses the
   `/dashboard` modal or `ListenerPresence` on any other page, and relies on:
   - realtime INSERT events;
   - a poll every 20–30 seconds;
   - a re-check whenever the tab comes back to the foreground.
4. If nobody answers within 3 minutes, the request is cancelled as `timed_out`
   and the seeker is refunded.

## How "online" works

- **"Go online" is the only thing that sets `is_available = true`.** Nothing
  else ever does.
- While LeanOn is open, the page sends a heartbeat every 60–90 seconds. It
  stamps `last_heartbeat_at` and reports `is_available` back, so the dashboard
  and the offline nudge re-sync if the listener was set offline.
- **The sweep** (`sweepStaleListeners`) runs on every `/api/listeners` load:

  | Last heartbeat | Push device? | Result |
  |---|---|---|
  | under 15 min | any | online |
  | 15 min – 4 h | yes: a `push_tokens` row seen in the last 3 days | online ("away mode") |
  | 15 min – 4 h | no | offline |
  | over 4 h, or never | any | offline |

- **Missed-request guard** (`recordMissedRequest`). When a request times out,
  the listener goes offline and gets a notification and a push saying why, if
  either of these is true:
  - they were away (no heartbeat for 15+ minutes); or
  - their previous request also timed out.

  This is what keeps away mode from bringing back "ghost online" listeners.

  Only a request that expired just now counts. Requests that sat pending for
  hours and are found later by cleanup don't. "In a row" also means within 2
  hours.

  A seeker's `reason:'timeout'` only counts once the full 3 minutes have
  passed. Otherwise a seeker could book, "time out" early, and knock a listener
  offline for free.

  The miss is recorded after the seeker's refund, never before it.

## Bugs fixed on 2026-09-24 (why alerts were being missed)

1. **Two service workers were fighting.**
   - What happened: "Go online" registered `/firebase-messaging-sw.js`, and
     every page load registered `/sw.js`, both at scope `/`. A scope holds only
     one worker, so each replaced the other. Most of the time the active worker
     was `sw.js`, which had no push handler, so pushes arrived and nothing was
     shown.
   - Fix: there is now one worker, `public/sw.js`. The old URL just runs
     `importScripts('/sw.js')`.
2. **Pushes went out at normal urgency with a 4-week TTL.**
   - What happened: `android.priority` has no effect on web tokens. On a phone
     in Doze the push waited for a maintenance window, often longer than the
     3-minute request window.
3. **One device per user.**
   - What happened: `users.fcm_token` kept only the last device registered, so
     opening LeanOn on a laptop silently stopped alerts on the phone.
   - Also: a phone shared by two accounts kept ringing for the previous account.
   - Fix: the `push_tokens` table (migration 061). Registering moves the token
     to the account signed in now.
4. **The in-tab alert never showed on Android.**
   - What happened: `new Notification()` throws on Android Chrome.
   - Fix: it now goes through `showLocalNotification()`.
5. **The notification tap was an extra hop.**
   - What happened: it opened `/session/<id>`, which only says "open your
     dashboard to accept".
   - Fix: it now goes straight to `/dashboard`.
6. **The dashboard showed "online" after the sweep had set the listener
   offline.**
   - Fix: heartbeats now report `is_available` back.
7. **Timeouts were recorded as `seeker_cancelled`.**
   - What happened: the seeker's waiting screen cancels through the decline
     route, so "missed" counts were wrong.
   - Fix: they are now `timed_out`.
8. **The Play Store app (TWA) couldn't show notifications on Android 13+.**
   - What happened: `POST_NOTIFICATIONS` was missing from
     `android/app/src/main/AndroidManifest.xml`.
   - Fix: it's added, but it only takes effect in the next app build.
9. **The request popup rang forever** on non-dashboard pages after the seeker
   gave up. It now clears when the request is no longer pending.

## Peer review follow-ups (2026-09-25)

Server side:
- "Away mode" counts only push devices that registered in the last 3 days. The
  app re-registers on every open, which refreshes `last_seen_at`.
- Hours-old requests no longer set anyone offline.
- An early timeout from a seeker no longer counts as a miss.
- The refund now happens before `recordMissedRequest` in accept and cleanup.
- The final "set offline" re-checks the heartbeat.

Client side:
- Tapping a notification focuses first, then navigates, and prefers a window
  already on `/dashboard`.
- The alerts card shows "on" only when this device actually registered a
  token. Otherwise it offers **Try again**.
- Registration can't hang if the service worker never activates (10-second
  limit).
- The token is re-posted on every open, so a shared phone moves to the account
  signed in now, even after a logout without a reload.
- Request notifications close when the request is answered or expires.
- Double taps on the toggle are ignored.
- The popup layer ignores heartbeat answers that were already in flight when
  the dashboard toggled.

Known and accepted:
- A seeker who gives up early (before 3 minutes) isn't counted as a miss, so an
  away listener whose alerts silently fail stays online until a request fully
  times out, or for up to 4 hours.
- The test alert says "sent" if any of the listener's devices accepted it, not
  necessarily this one.

## Owner checklist

- [ ] **Vercel env vars.** All of these must be set, or pushes are skipped
      without any error:
  - server: `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`;
  - browser: `NEXT_PUBLIC_FIREBASE_API_KEY`, `NEXT_PUBLIC_FIREBASE_PROJECT_ID`,
    `NEXT_PUBLIC_FIREBASE_APP_ID`, `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`,
    `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`, `NEXT_PUBLIC_FIREBASE_VAPID_KEY`.

  The dashboard's **Send a test alert** button says "not set up on the server"
  when the server credentials are missing. If the browser keys are missing,
  the alerts card doesn't show at all.
- [ ] Run `supabase/migrations/061_push_tokens.sql` so each device gets its own
      token. Everything works before it runs, with one device per listener.
- [ ] Rebuild the Play Store app (Actions → Build Android TWA) with a higher
      version code, so the notification permission ships.
- [ ] After deploying, on your own phone:
  1. log in as a listener;
  2. tap **Turn on alerts**;
  3. tap **Send a test alert**;
  4. switch to another app. The alert should arrive within a few seconds.

## When a listener says "the notification didn't come"

1. Ask them to open the dashboard and read the **Phone alerts** card.
   - **"off"** → tap **Turn on alerts**.
   - **"blocked"** → Settings → Apps → Chrome (or LeanOn) → Notifications → allow.
   - **iPhone** → Share → Add to Home Screen, then use LeanOn from the
     home-screen icon. Safari tabs cannot receive push.
2. Ask them to tap **Send a test alert** and switch apps.
   - Arrives → alerts work, and the request probably expired before they
     reacted.
   - Doesn't arrive → set Chrome / LeanOn battery use to **Unrestricted**. This
     is common on Xiaomi, Oppo, Vivo, Realme and Samsung, whose battery savers
     kill background apps.
3. Server logs: `session request push not delivered` shows the session id,
   device count and FCM error codes.
