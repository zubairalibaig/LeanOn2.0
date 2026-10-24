# LeanOn Android app — hybrid build with call-style alerts (v5, Oct 2026)

**This replaces the PWABuilder / TWA route in `docs/PLAY_STORE_STEP_BY_STEP.md`.**
Parts 0 and 7–8 of that guide (unpublish the old app, store listing, go live)
are repeated here so this file is all you need.

## What the app is
- A **Capacitor app** (folder `mobile/`, package **`com.leanon.app`** — the name your Play Console listing is locked to; the Java code package is still `app.leanon`) that opens
  **www.leanon.app** full-screen. The website stays the product: website
  changes reach the app instantly, no app update needed.
- Plus one native feature the website can't do: **session requests ring like a
  phone call** — full screen on a locked phone, looping ringtone, **Answer /
  Not now** — until the listener answers, the seeker withdraws (Talk now moved
  on / cancelled), or the request expires (3 minutes).
- **Answer** opens the dashboard, where the request's Accept / Decline is.
  **Not now** only stops the ringing.

## Who does what
| You | Claude (done or on request) |
|---|---|
| Firebase console, GitHub secrets, phone testing, Play Console | All code, the build workflow, fixes, the reviewer login (Part 6) |

You do **not** need Android Studio or a laptop with the Android SDK — GitHub
builds the app for you. You need: a browser, your Android phone, the Firebase
console, the Play Console. Time: ~3–4 hours of clicking, then Google's review
(several days).

**Never paste the signing-key passwords or the key file anywhere except the
GitHub secrets in Part 3 — including to Claude.**

---

## PART 0 — Before you start (30 minutes)

### 0a. Unpublish the legacy Play app (do this first)
People searching "LeanOn" on Play find the old 2024 therapist app — and
ChatGPT/Bing describe it as LeanOn. Unpublishing is reversible; installs on
phones keep working.
1. Play Console → **All apps** → the old **LeanOn (`app.leanon.therapy`)**.
2. **Test and release → Setup → Advanced settings → App availability** →
   **Unpublished** → Save → confirm.

### 0b. Public developer profile (privacy)
1. ⚙ **Settings → Developer account → About you**. Developer name: `LeanOn` ✅.
2. Change the public **Developer email** to `support@leanon.app` (create it first).
3. **Do not set up a merchant account** ("Monetize with Play") — LeanOn uses
   Razorpay; a merchant account can make your legal name and address public.

---

## PART 1 — Firebase: register the app (15 minutes)
The website already sends alerts through a Firebase project. The app must be
added to **that same project**.

1. Open **console.firebase.google.com** and pick the LeanOn project (the one
   whose *Project ID* matches `FIREBASE_PROJECT_ID` in Vercel → Settings →
   Environment Variables).
2. Project overview → **Add app** → the **Android** icon.
3. **Android package name:** `com.leanon.app` · App nickname: `LeanOn Android` ·
   leave SHA-1 empty → **Register app**.
4. **Download `google-services.json`** → skip the remaining Firebase steps
   (Claude already did the code) → Continue to console.
5. Add it to GitHub so the build can include it:
   **github.com/zubairalibaig/LeanOn2.0 → Settings → Secrets and variables →
   Actions → New repository secret**
   - Name: `GOOGLE_SERVICES_JSON`
   - Secret: open the downloaded file in Notepad, **copy everything**, paste.
   - **Add secret**.

(This file is app configuration, not a password — but keep it out of chats and
the repo anyway; `.gitignore` already excludes it.)

---

## PART 2 — Test build on your phone (60 minutes — don't skip)
1. GitHub → **Actions** → **Build Android app** → **Run workflow** → leave
   *release* **unticked** → **Run workflow**. Wait ~5–8 minutes for the green tick.
2. Open the finished run → **Artifacts** → download **leanon-debug-apk** (a zip)
   → unzip → `app-debug.apk`.
3. Send `app-debug.apk` to your Android phone (WhatsApp it to yourself / Google
   Drive) → tap it → allow **"Install unknown apps"** when asked → Install.
   (This is a test build — Play Store users get the signed one from Part 4.)
4. Open LeanOn and check each item. Use a **listener** account on this phone
   and a **seeker** account on a second phone or laptop.

   **Basics**
   - [ ] Opens straight into LeanOn, no browser address bar; LeanOn owl on the splash.
   - [ ] Login with phone number + OTP works.
   - [ ] Phone **back button** goes back a page; on the first page it closes the app.
   - [ ] A crisis number opens the dialler; the WhatsApp support button opens WhatsApp.

   **Alerts (the reason for the app)**
   - [ ] Dashboard → turn on alerts → Android asks **Allow notifications** → Allow.
   - [ ] On Android 14+ a popup **"Ring like a phone call"** → Allow → switch on
         *Allow full-screen notifications* for LeanOn → back.
   - [ ] Dashboard alerts card says alerts are **on** → tap **Send a test alert**
         → a notification arrives and the card says it reached this phone.
   - [ ] Go online → **lock the phone** → from the seeker, request a session
         (/browse) → the phone **rings full screen like a call** with Answer / Not now.
   - [ ] **Answer** → LeanOn opens on the dashboard with the request → Accept →
         the session starts.
   - [ ] Request again → tap **Not now** → ringing stops.
   - [ ] From the seeker use **Talk now** with 2+ listeners online → when Talk now
         moves on (after ~30 s), the ringing on this phone **stops by itself**.
   - [ ] Phone unlocked, LeanOn in the background → a request shows as a
         heads-up call notification that keeps ringing.

   **Everything else in the app**
   - [ ] Wallet recharge with a small real UPI payment → the UPI app opens →
         you come back into LeanOn and the balance updates.
   - [ ] Voice session: the app asks for the **microphone**; both sides hear each other.
   - [ ] Listener application: the live selfie camera opens; a gallery photo can be picked.

5. Anything wrong → tell Claude exactly what you saw (a screenshot or a short
   screen recording helps). Most fixes are website changes; app fixes need a
   new build (Claude pushes, GitHub rebuilds — repeat steps 1–3).

---

## PART 3 — Create the upload key (20 minutes, once)
Google Play needs every upload signed with *your* upload key. Create it once,
keep it forever. (Play App Signing means Google holds the real app key; if this
upload key is ever lost, Google can reset it — but avoid that.)

**Without installing anything — GitHub Codespaces (in the browser):**
1. github.com/zubairalibaig/LeanOn2.0 → green **Code** button → **Codespaces** →
   **Create codespace on main**. A VS Code window opens in the browser.
2. In its **Terminal** at the bottom, paste (one line):
   ```
   keytool -genkeypair -v -keystore leanon-upload.jks -alias leanon -keyalg RSA -keysize 2048 -validity 10000
   ```
   - It asks for a **keystore password** — make a strong one, write it down
     safely (password manager). Repeat it.
   - "First and last name": type **`LeanOn`** (NOT your personal name).
     Organizational unit `App`, Organization `LeanOn`, City/State as you like,
     country code `IN` → `yes`.
   - If it asks for a separate key password, press Enter to use the same one.
3. Still in the terminal: `base64 -w0 leanon-upload.jks > upload-key.txt`
4. In the file list on the left: right-click **leanon-upload.jks** → **Download**
   → save it in a private Google Drive folder **`LeanOn Android signing — DO NOT DELETE`**
   plus a second copy (USB/another drive), with the password noted next to it
   in your password manager.
5. Open **upload-key.txt** → copy all of it (one long line).
6. Add **four** repository secrets (Settings → Secrets and variables → Actions):
   | Name | Value |
   |---|---|
   | `ANDROID_KEYSTORE_BASE64` | the long line from upload-key.txt |
   | `ANDROID_KEYSTORE_PASSWORD` | your keystore password |
   | `ANDROID_KEY_ALIAS` | `leanon` |
   | `ANDROID_KEY_PASSWORD` | the same password (unless you set a different key password) |
7. Back in the Codespace terminal: `rm leanon-upload.jks upload-key.txt` →
   then github.com → your profile → **Codespaces** → **⋯ → Delete** this codespace.

(Have a laptop with Android Studio? Its *Build → Generate Signed Bundle → Create
new* makes the same `.jks`; then do steps 3–7 with `base64` on your laptop.)

---

## PART 4 — Build the Play Store bundle (10 minutes)
1. GitHub → **Actions → Build Android app → Run workflow** → tick **release** →
   version code **1** → version name **1.0.0** → **Run workflow**.
2. When green: the run → **Artifacts** → **leanon-release-aab** → download →
   unzip → **`app-release.aab`** (this is what you upload to Play).
3. For every later Play update, run it again with the version code **+1**
   (2, 3, …) — Play rejects a repeated number.

---

## PART 5 — Play Console: create the app and test it (30 minutes)
1. **play.google.com/console → Create app** → App name `LeanOn — Peer Support`
   · Default language **English (India)** · **App** · **Free** → tick both
   declarations → **Create app**.
2. **Test and release → Testing → Internal testing** → **Testers** tab →
   **Create email list** `LeanOn team` → your Gmail (+1–2 others) → Save → tick it → Save.
3. **Releases** tab → **Create new release** → Play App Signing: keep
   **"Use Google-generated key"** → upload **`app-release.aab`** → release name
   `1.0.0 (1)` → notes `First internal test build.` → **Next → Save and publish**.
4. **Testers** tab → **Copy link** → open it on your phone → *Accept invite* →
   install from Play. **Uninstall the test APK from Part 2 first** (different
   signature — Android won't update over it).
5. Repeat the **Alerts** checklist from Part 2 with this Play build. It must
   ring the same way. (If it doesn't, tell Claude — usually Firebase needs the
   Play signing fingerprint: Play Console → **Test and release → App integrity
   → App signing** → copy the **SHA-256** → Firebase → Project settings →
   *LeanOn Android* → **Add fingerprint**.)

---

## PART 6 — Store listing + App content (60–90 minutes)

### 6a. Main store listing
**Grow users → Store presence → Main store listing** — copy the text from
**`docs/PLAY_STORE_LISTING.md`**.
- Icon: **https://www.leanon.app/icon-512.png**. Feature graphic 1024×500 (Canva:
  LeanOn logo + a short line on navy/teal).
- 2–8 **phone screenshots from the installed app** (home, browse, a chat,
  wallet, the ringing request screen) — test accounts only, no real users.
- Category **Health & Fitness** · contact email `support@leanon.app` · website
  `https://www.leanon.app`.

### 6b. App content (Policy and programs → App content)
| Item | What to choose |
|---|---|
| Privacy policy | `https://www.leanon.app/privacy` |
| App access | **Restricted** → reviewer login: set Vercel env `REVIEW_LOGIN_PHONE` (an unused number, e.g. `+919000000001`) + `REVIEW_LOGIN_CODE` (same digit count as the OTP boxes), redeploy. That one number then signs in with that code, no SMS (`lib/review-login.ts`); reviewers must tick "I am 18 or older" on the sign-in screen (required since 2026-10-24); it's seeker-only (can't apply as a listener). Off again by removing the env vars or suspending the account. |
| Ads | No |
| Content rating | Questionnaire → "All other app types" → users interact/communicate **Yes**; digital purchases **Yes**; violence/sexual/drugs/gambling **No** |
| Target audience | **18 and over only**; appeals to children **No** |
| News / Government | No / No |
| Financial features | My app doesn't provide any financial features |
| Health apps | Tick only the **mental / behavioural health or wellness** option(s) — nothing medical, clinical, diagnosis or treatment |
| **Full-screen intent** (new, because of the call-style alert) | Declare that the app uses full-screen intents for **"Calling"** — *"Incoming session requests from people who want to talk ring like a phone call: the listener accepts or declines a live voice/text session within a few minutes."* Google decides; if they refuse, the alert still rings as a heads-up notification, just not over the lock screen. |
| Data safety | Table below |
| Account deletion URL | `https://www.leanon.app/privacy#delete-account` |

**Data safety:** collects data **Yes**; encrypted in transit **Yes**; deletion
on request **Yes**.
- Phone number — collected, required, *Account management*. Display name — *App functionality*.
- Listeners only: UPI/bank details — optional, *App functionality*.
- Purchase history — *App functionality* (card/UPI details are entered on Razorpay, not stored by LeanOn).
- Other in-app messages (session chats) — *App functionality*.
- Photos (listener display photo + verification selfie) — optional, *App functionality*.
- Audio — voice calls are live and **not recorded** → **not collected**.
- Device or other IDs (push token) — *App functionality*.
- Shared with third parties: **No** (Razorpay, Agora, Firebase are service providers). Sold: **No**.

---

## PART 7 — Go live (10 minutes, then wait)
1. **Test and release → Production → Countries/regions** → India + USA, UK,
   Canada, Australia, UAE, Oman, Kuwait, Singapore, Malaysia → Save.
2. **Releases → Create new release → Add from library** → `1.0.0 (1)` →
   notes `LeanOn — talk to a real person, by text or voice.` → Next → Save.
3. **Publishing overview → Send changes for review.** A new health-category app
   usually takes a few days, sometimes 1–2 weeks.
4. If Play Console asks for a closed test before production, **stop and tell
   Claude** (your Oct 2021 account should be exempt, but Google's screen decides).

---

## After launch
- Website changes are live in the app immediately.
- A new **app** build is needed only for native changes (alerts, icon, name,
  permissions, the yearly target-SDK update every August): Claude changes
  `mobile/`, you run Part 4 with the next version code and upload it as a new
  release.
- Listeners who install the app get reliable ringing; the website keeps working
  in Chrome for everyone else. Once most listeners use the app, presence can be
  relaxed further for app installs (Claude, on request).

## For engineers
- `mobile/capacitor.config.json` — `server.url` www.leanon.app; `appendUserAgent: LeanOnApp/android`.
- Native code: `mobile/android/app/src/main/java/app/leanon/` — `LeanOnMessagingService`
  (FCM data messages), `RequestAlert` (CallStyle + insistent ringtone channel
  `session_requests_v1` + full-screen intent), `IncomingRequestActivity`
  (lock-screen ring UI), `LeanOnBridge` (`window.LeanOnAndroid`, injected by
  `LeanOnNativePlugin` before the first page load), `MainActivity`.
- Server: `/api/push/register` with `kind:'android_app'` stores the token with
  `user_agent` prefix `native:android`; `lib/push.ts` sends those via
  `sendNativePush` (android priority high, data-only). Web tokens unchanged.
- Website: `lib/firebase-client.ts` → `leanOnApp()`; closing a request's
  notification (`closeLocalNotifications('leanon-req-<id>')`) also stops the ringing.
- Build: `.github/workflows/build-android.yml`. The old `android/` folder and
  `build-twa.yml` are the deprecated TWA — don't use them.
