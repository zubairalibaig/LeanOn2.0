# LeanOn on Google Play

The Play Store app is a **Trusted Web Activity (TWA)** — a thin native shell
that opens `https://www.leanon.app` full-screen in Chrome, with no browser UI.

**There is one codebase.** `android/` contains no product code: no screens, no
API calls, no copy. It is the launcher, the icons, the notification plumbing,
and the manifest Play requires. Everything a user sees is the same Next.js app
Vercel already serves, hitting the same Supabase database.

## Why a TWA and not Capacitor / React Native

- **Real Chrome, not Android System WebView.** Razorpay's `upi://` and
  `intent://` hand-offs to GPay/PhonePe work natively. In a WebView they need
  hand-written `shouldOverrideUrlLoading` interception or UPI payments break.
  Agora WebRTC voice and Supabase realtime also run unmodified.
- **Google's own technology**, which is the safest posture against the
  "minimum functionality / webview spam" rejection that kills wrapper apps.
- **Vercel deploys are app updates.** No store release for a copy change. You
  only rebuild the shell when `android/` itself changes.

## What ships when

| Change | How it reaches users |
| --- | --- |
| Anything in `app/`, `lib/`, styling, copy, API routes | Push to `main` → Vercel → live in the app immediately |
| Anything in `android/` (icons, permissions, launch URL) | Tag `android-v*` → CI builds an `.aab` → upload to Play |

---

## One-time setup

### 1. Create the upload keystore

Do this **once**, on a machine you control, and back it up. If you lose it you
cannot ship an update under the same listing without Google's key-reset process.

```bash
keytool -genkeypair -v \
  -keystore leanon-upload.jks \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias leanon
```

### 2. Add the GitHub secrets

`Settings → Secrets and variables → Actions`:

| Secret | Value |
| --- | --- |
| `ANDROID_KEYSTORE_BASE64` | `base64 -w0 leanon-upload.jks` |
| `ANDROID_KEYSTORE_PASSWORD` | keystore password from step 1 |
| `ANDROID_KEY_ALIAS` | `leanon` |
| `ANDROID_KEY_PASSWORD` | key password from step 1 |
| `GOOGLE_SERVICES_JSON` | contents of `google-services.json` from step 3 |

Nothing here is ever committed — `android/.gitignore` blocks `*.jks` and
`app/google-services.json`, and the workflow deletes both after the build.

### 3. Register the Android app in Firebase

Push must come from the **same Firebase project the server already sends
through** (`lib/firebase-admin.ts`), or tokens will not match.

Firebase Console → Project settings → Your apps → **Add app → Android**:

- Package name: `app.leanon` (exactly — asset-link verification is keyed on it)
- Download `google-services.json` → paste into the `GOOGLE_SERVICES_JSON` secret
- For local builds, save it at `android/app/google-services.json`

`assembleRelease`/`bundleRelease` fail loudly if this file is missing, because a
release without it would install fine and never deliver a single session request.

### 4. Build and upload the first bundle

```bash
git tag android-v1.0.0 && git push origin android-v1.0.0
```

Download the `.aab` from the workflow run's artifacts and upload it to Play
Console. Keep **Play App Signing** enabled (the default).

### 5. Publish the asset-link fingerprint — do not skip this

This is the step with a chicken-and-egg in it. The fingerprint that matters is
**Play's app signing key**, which does not exist until after the first upload.

1. Play Console → your app → **Test and release → Setup → App integrity**
2. Copy the **SHA-256 certificate fingerprint** under *App signing key certificate*
3. Vercel → Project → Settings → Environment Variables:
   `ANDROID_ASSETLINKS_SHA256` = that fingerprint
4. **Redeploy** so the value is picked up
5. Confirm: `curl https://www.leanon.app/.well-known/assetlinks.json`

The variable accepts several fingerprints, comma or newline separated — add the
upload key and your local debug key too so debug builds verify. The CI run
prints the upload key's fingerprint for you.

**Until this verifies, every screen shows a Chrome URL bar across the top.** That
is the single most common TWA launch mistake, it looks broken, and it invites a
"this is just a website" rejection.

### 6. Verify on a real device

Install the bundle via Play internal testing, then check:

- [ ] No URL bar anywhere in the app
- [ ] Launcher icon and splash render correctly
- [ ] A wallet top-up completes, including the UPI app switch to GPay/PhonePe
- [ ] A voice session gets the mic (the app prompts for `RECORD_AUDIO`)
- [ ] Phone OTP sign-in completes
- [ ] Background the app, trigger a session request, confirm the notification
      arrives and **tapping it opens that session**
- [ ] Repeat the notification check on a Xiaomi/Oppo/Vivo device with battery
      optimisation on — that is the case native FCM exists to survive

---

## Cutting a release

```bash
git tag android-v1.0.1 && git push origin android-v1.0.1
```

`versionName` comes from the tag; `versionCode` is the CI run number, so it only
ever increases (Play rejects a bundle whose code is not strictly higher).
`workflow_dispatch` lets you set both by hand.

---

## How push works

There are two delivery paths and they coexist safely.

**Native (primary, app only).** `LeanOnMessagingService` receives the FCM message
in the app's own process. This exists because the pre-existing web-push path
routes through Chrome's background process, which the battery managers on
Xiaomi, Oppo, Vivo and Realme routinely kill — a large share of the Indian
install base. A listener who misses a request is a paid session lost.

**Web (fallback, browsers).** The existing service worker at
`app/firebase-messaging-sw.js`, unchanged. `LeanOnDelegationService` lets Chrome
hand those notifications to the app for display so they appear as LeanOn.

**The token bridge.** A TWA is real Chrome, so there is no JS bridge. The shell
cannot call `/api/push/register` itself — that route authenticates with the
Supabase session cookie, which belongs to Chrome. So the shell appends its token
to the launch URL as a **fragment** (`#lo_fcm=…`), and
`app/components/NativePushBridge.tsx` posts it and strips it from the URL. A
fragment rather than a query string because fragments are never sent to the
server, keeping the token out of access logs, analytics and `Referer`.

Two consequences worth knowing:

- On a device's **very first launch** the token may not be ready in time and is
  attached to the *next* launch instead. Push starts working on second open.
- `users.fcm_token` is a single column, so whichever surface registered last
  wins. A listener who uses both the app and a desktop browser will have push
  land on whichever they opened most recently. Per-device tokens would need a
  schema change; migrations here are manual (see `CLAUDE.md`).

---

## Play Console checklist

### Payments — read this before you submit

**This is the highest launch risk.** LeanOn sells wallet top-ups through Razorpay
that are spent on sessions consumed inside the app. Google Play's payments
policy requires Play Billing (15–30%) for digital content and services consumed
in-app, with a carve-out for services delivered by real people. LeanOn sits in
the grey zone between those.

Arguments that you are within the carve-out: sessions are one-to-one time with a
real human, not digital content; AstroTalk is structurally identical (Razorpay
wallet recharge, paid chat/call with a person) and is a top-grossing Indian Play
app; Practo and comparable consultation apps do the same; and India's CCI orders
forced Google to permit third-party billing here.

**Verify against the current policy text before submitting** — this area moves,
and precedent is not permission. If Google does require Play Billing, the change
is contained: order creation and wallet crediting are already separate on the
server (`app/api/wallet`, the Razorpay webhook), so an Android-only Play Billing
path can credit the same wallet without touching seeker or listener flows.

### Forms you will have to fill

- **Data safety.** Declare phone number, name, chat messages, and payment info.
  Chat content is collected and stored; do not answer "no data collected".
- **Account deletion.** Deletion URL: `https://www.leanon.app/delete-account`
  (added for this, reachable without login). ⚠️ Note that deletion here is a
  **soft delete** by project rule — the account is deactivated and signed out,
  but session and transaction records are retained. Play expects deletion of
  account *and* associated data unless retained data is disclosed with a reason.
  The `/delete-account` page states what is kept and why; confirm that wording
  matches `/privacy` before submitting.
- **Health apps declaration.** LeanOn is peer support, not medical care or
  therapy. Say so plainly — the listing must not imply clinical treatment.
- **Sensitive content.** The app references self-harm and crisis. Crisis
  resources are present and correct (NIMHANS `080-46110007`, Tele-MANAS `14416`
  — per `CLAUDE.md`, never add others).
- **Content rating questionnaire**, **privacy policy URL**
  (`https://www.leanon.app/privacy`), **target audience**: 18+.

### Store listing assets

Generated into `android/store-assets/`:

- `play-icon-512.png` — 512×512 listing icon
- `play-feature-graphic-1024x500.png` — feature graphic

Still needed: **at least two phone screenshots** (Play requires them and they
cannot be generated from source — take them on device once installed).

---

## Local builds

Requires JDK 17 and the Android SDK.

```bash
cd android
./gradlew assembleDebug          # unsigned debug APK
./gradlew bundleRelease          # needs the ANDROID_KEYSTORE_* env vars
```

The debug build deliberately keeps the `app.leanon` package name — asset-link
verification is keyed on it, so a suffixed debug build could never verify and
would always show a URL bar, hiding the exact thing you install it to check. Add
your debug keystore's SHA-256 to `ANDROID_ASSETLINKS_SHA256` to verify locally.

---

## Not yet verified

The build environment these files were authored in has `dl.google.com` blocked
by egress policy, so the Android Gradle Plugin, the Android SDK and the Firebase
Android artifacts could not be downloaded. **The Android project has therefore
never been compiled**, and nothing has been run on a device or emulator. The web
half is verified: `tsc` is clean, `next build` passes, and
`/.well-known/assetlinks.json`, `/manifest.json` and the icons were confirmed
serving correctly from a local production server.

Expect the first CI run to surface ordinary first-compile issues (a dependency
version, a resource reference). Run the workflow before you plan a submission
rather than the night of.
