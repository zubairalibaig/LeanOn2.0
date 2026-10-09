# Launching LeanOn on Google Play — plain-English guide (v2, Oct 2026)

This replaces the earlier version of this guide. **Do not use the GitHub
"Build Android TWA" button any more** — see "Why the old route changed" at the end.

How it works in one sentence: the Play Store app is a thin Android "frame"
(a **TWA — Trusted Web Activity**) that opens www.leanon.app full-screen inside
Chrome, with no address bar. Everything users see is the live website, so
**website changes reach the app instantly — no app update needed.**

Whenever a step says "send to Claude", paste the value into chat and Claude
changes the code. You never edit files yourself.

---

## What you need
- A **laptop/desktop with Chrome** (most steps).
- An **Android phone** signed into a Gmail you control (testing).
- Your **Google Play Console** login.
- A **Google Drive** folder to keep the app's signing key safe.
- Time: **3–5 hours of clicking** in total. Google's review then takes
  **several days** (you just wait).

---

## PART 0 — Three checks (do these first, 15 minutes)

### Check A — Is your account exempt from the 14-day testing rule?
Personal accounts created **after 13 November 2023** must run a **closed test
with at least 12 testers for 14 days** before going public. Older accounts and
organisation accounts are exempt.

Your account is "about 3 years old" — that is **right on the cutoff**, so find
the exact date:
1. Open **Gmail**, search for: `Google Play Console` registration (or
   `Google Play Developer` receipt / "Welcome to Google Play Console").
2. Or open **pay.google.com → Activity** and look for the **US$25** Google Play
   developer registration payment.
3. Note the date. **Before 13 Nov 2023 → exempt (Route A in Part 8).**
   **On/after → not exempt (Route B in Part 8).**
4. Also note whether the account type is **Personal** or **Organisation**
   (Play Console → ⚙ Settings → **Developer account** → Account details).

### Check B — Is the account healthy?
1. Go to **play.google.com/console** and sign in.
2. Look for any **red or yellow banner**: "Verify your identity", "Verify your
   contact details", or "account closed due to inactivity".
3. If there is one, **complete it now**. Identity verification can take a few
   days — that is the one thing that could block your weekend.

### Check C — Was anything uploaded in the earlier attempt?
1. In Play Console, look at **All apps**.
2. If there is already a LeanOn app, open it → **Test and release** → look for
   any uploaded bundle. **Tell Claude** what you see (app name + package name
   shown under the title). This decides the package name below.

### Check D — Public developer name (protects your privacy)
The **developer name is shown publicly** on the Play Store page.
1. ⚙ Settings → **Developer account** → **Account details** (or "Developer
   profile").
2. Make sure the **Developer name** is **`LeanOn`** — not your personal name.
3. Make sure the **public contact email** is a support address, not your
   personal one.

---

## PART 1 — Things Claude does (before you build)
Send Claude the answers from Part 0. Claude will:
- **Confirm the package name** (planned: `app.leanon`). It is permanent once
  uploaded.
- **Build a reviewer login** (Google's reviewers can't receive your OTP SMS —
  see Concerns). Needed before Part 8, not before testing.

---

## PART 2 — Build the Android app on PWABuilder (30 minutes)

1. On your laptop, open **https://www.pwabuilder.com** in Chrome.
2. In the box, type **`https://www.leanon.app`** → click **Start**.
3. Wait for the report card. Yellow/red warnings (e.g. "screenshots") are fine —
   ignore them.
4. Click **Package For Stores** (top right).
5. Under **Android**, click **Generate Package** (or **Options**).
6. Fill in the options **exactly** like this (leave anything not listed as is):

   | Field | Value |
   |---|---|
   | Package ID | **`app.leanon`** (or what Claude confirms in Part 1) |
   | App name | `LeanOn — Peer Support` |
   | Launcher name | `LeanOn` |
   | App version | `1.0.0` |
   | App version code | `1` |
   | Host | `www.leanon.app` |
   | Start URL | `/` |
   | Theme color | `#1A8FA0` |
   | Background color | `#0F4867` |
   | Nav color | `#0F4867` |
   | Display mode | **Standalone** |
   | Notification delegation | **ON** (listeners get request alerts) |
   | Location delegation | OFF |
   | Google Play billing | **OFF** |
   | Signing key | **Create new** |
   | Key full name | **`LeanOn`** (NOT your personal name) |
   | Key organization | `LeanOn` |
   | Key organizational unit | `App` |
   | Key country code | `IN` |
   | Key password / Store password | leave the generated ones |

7. Click **Download Package**. You get a **.zip** file.
8. **Right now, before anything else:** upload the whole .zip to a **private
   Google Drive folder** named `LeanOn Android signing — DO NOT DELETE`, and keep
   a second copy on a USB stick or another drive.
   - Inside are `signing.keystore` and `signing-key-info.txt` (passwords).
     You need them for every future app update.
   - **Never email them, never share them, never paste the passwords to anyone
     — including Claude.**
9. Unzip it on your computer. Find:
   - **`app-release-bundle.aab`** → this is what you upload to Google Play.
   - **`assetlinks.json`** → open it with Notepad. Copy the long code after
     `"sha256_cert_fingerprints"` (looks like `AB:12:CD:...`, 32 pairs).
     **Send that code to Claude** (it's public, safe to share).

---

## PART 3 — Create the app in Play Console (15 minutes)
1. **play.google.com/console** → **Create app** (top right).
2. Fill in:
   - App name: `LeanOn — Peer Support`
   - Default language: **English (India) – en-IN**
   - App or game: **App**
   - Free or paid: **Free**
3. Tick both declaration boxes → **Create app**.

---

## PART 4 — Upload to Internal testing (15 minutes)
Internal testing has **no Google review** — it's for you to try the app.

1. Left menu → **Test and release** → **Testing** → **Internal testing**.
2. Open the **Testers** tab → **Create email list** → name it `LeanOn team` →
   add **your Gmail** (the one on your Android phone) and 1–2 others → **Save**.
   Tick the list → **Save**.
3. Open the **Releases** tab → **Create new release**.
4. If asked about **Play App Signing**, choose the default
   (**"Use Google-generated key"**) → Continue.
5. Under **App bundles** → **Upload** → choose **`app-release-bundle.aab`**.
   Wait until it finishes processing.
   - If it shows an error about **target API level**, stop and tell Claude.
6. Release name: `1.0.0 (1)`. Release notes: `First internal test build.`
7. **Next** → **Save and publish** (or **Start rollout to Internal testing**) →
   confirm.
8. Back on the **Testers** tab, click **Copy link** under "How testers join".
   Send that link to your phone (WhatsApp it to yourself).

---

## PART 5 — Link the app to the website (5 minutes + Claude)
This removes the web address bar inside the app.

1. Left menu → **Test and release** → **App integrity** (or **Setup → App
   signing**).
2. Under **App signing key certificate**, copy the **SHA-256 certificate
   fingerprint**.
3. **Send it to Claude.** Claude puts both fingerprints (this one + the one from
   Part 2 step 9) into the website's `assetlinks.json` and deploys.
4. After Claude confirms, open
   **https://www.leanon.app/.well-known/assetlinks.json** in Chrome — you should
   see `app.leanon` and two long codes.

---

## PART 6 — Test on your Android phone (45 minutes — don't skip)
1. On the phone, open the tester link from Part 4 step 8 → **Accept invite** →
   **Download it on Google Play** → **Install**.
   (If Play says "not available", wait 30 minutes — new apps take time to appear.)
2. Open LeanOn and check each item:
   - [ ] **No address bar** at the top. (If you see one: wait 15 min, uninstall,
         reinstall. Still there → tell Claude.)
   - [ ] **Login** with your phone number + OTP works.
   - [ ] **Wallet recharge** with a small real payment → UPI app opens → after
         paying you come **back into LeanOn** and the balance updates.
   - [ ] **Voice session** with a second account (a friend as listener): the app
         asks for **microphone** permission, and both of you can hear each other.
   - [ ] **Notifications**: log in as a listener on the phone, allow
         notifications, go online, **close the app**, have someone request a
         session → the alert appears on the phone.
   - [ ] Tapping a **crisis number** opens the phone dialler.
   - [ ] The phone's **back button** behaves sensibly (doesn't trap you).
3. Anything wrong → tell Claude exactly what happened (a screenshot helps).
   Most fixes are website changes — no new upload needed.

---

## PART 7 — Store listing + App content (60–90 minutes)

### 7a. Main store listing
Left menu → **Grow users** → **Store presence** → **Main store listing**.
Copy text from **`docs/PLAY_STORE_LISTING.md`** in the repo.
- App name: `LeanOn — Peer Support`
- Short description (max 80 characters) and Full description: from that file.
- **App icon**: download **https://www.leanon.app/icon-512.png** (right-click →
  Save image as) and upload it.
- **Feature graphic** (1024 × 500): on **canva.com** search "Google Play feature
  graphic", put the LeanOn logo + "Someone to lean on, anytime." on a navy/teal
  background → Download PNG → upload.
- **Phone screenshots** (2–8): take them **inside the installed app** on your
  phone — home, browse listeners, a chat, wallet. **Hide or blur real users'
  names/photos** — use your own test accounts.
- App category: **Health & Fitness**. Contact email: your **support** address.
  Website: `https://www.leanon.app`.
- **Save**.

### 7b. App content (left menu → **Policy and programs** → **App content**)
Complete every item that shows "Start" / red:

| Item | What to choose |
|---|---|
| Privacy policy | `https://www.leanon.app/privacy` |
| App access | **All or some functionality is restricted** → add the reviewer login Claude gives you (Part 1) |
| Ads | **No, my app does not contain ads** |
| Content rating | Start questionnaire → category **All other app types** → answer honestly: users can **interact/communicate**: **Yes**; digital purchases: **Yes**; violence/sexual/drugs/gambling: **No**. Accept whatever rating comes out. |
| Target audience | **18 and over only**. "Appeals to children": **No** |
| News app | No |
| Government app | No |
| Financial features | **My app doesn't provide any financial features** |
| Health apps | Tick only the **mental / behavioural health or wellness** option(s). **Do not** tick anything medical, clinical, diagnosis or treatment. |
| Data safety | See table below |
| Account deletion URL (inside Data safety) | `https://www.leanon.app/privacy#delete-account` |

**Data safety answers** (if a question isn't covered here, screenshot it and send
to Claude):
- Collects data: **Yes**. Encrypted in transit: **Yes**. Users can request
  deletion: **Yes**.
- **Personal info → Phone number**: collected, required, purpose *Account
  management*. **Name** (display name): collected, purpose *App functionality*.
- **Personal info → Other** (listeners only: UPI/bank details for payouts):
  collected, optional, purpose *App functionality*.
- **Financial info → Purchase history**: collected, *App functionality*. (Card/UPI
  details are entered on Razorpay, not stored by LeanOn.)
- **Messages → Other in-app messages**: collected (session chats), *App
  functionality*.
- **Photos** (listener profile photo + verification selfie): collected,
  optional, *App functionality*.
- **Audio**: voice calls are live and **not recorded** → answer **not collected**.
- **Device or other IDs** (push notification token): collected, *App
  functionality*.
- **Shared with third parties**: **No** (Razorpay, Agora etc. act as service
  providers on LeanOn's behalf — that is not "sharing" under Google's definition).
- Data sold: **No**.

---

## PART 8 — Go live

### Route A — account exempt (created before 13 Nov 2023, or organisation)
1. Left menu → **Test and release** → **Production** → **Countries/regions** →
   **Add countries** → India + USA, UK, Canada, Australia, UAE, Oman, Kuwait,
   Singapore, Malaysia (or all countries) → Save.
2. **Releases** → **Create new release** → **Add from library** → choose the
   `1.0.0 (1)` bundle you already uploaded → release notes:
   `LeanOn — talk to a real person, anytime.` → **Next** → **Save**.
3. Left menu → **Publishing overview** → **Send changes for review**.
4. Wait. New apps usually take **a few days, sometimes 1–2 weeks** (health apps
   can get extra scrutiny). You get an email when it's live.

### Route B — 14-day rule applies
1. Left menu → **Testing** → **Closed testing** → **Create track** (or use
   "Alpha") → **Testers**: create an email list with **at least 15 people**
   (12 is the minimum — extras protect you if someone drops out).
   Good testers: friends, family, trusted listeners. They need an Android phone.
2. **Create new release** → **Add from library** → `1.0.0 (1)` → roll out.
   This one **is reviewed** by Google (needs the reviewer login).
3. Send everyone the opt-in link. Each must **tap "Become a tester", install the
   app, and keep it installed for 14 days**. Ask them to open it a few times.
4. After **14 full days**, the **Dashboard** shows **Apply for production**.
   Answer the questions (what you tested, what you changed) → submit. Google
   replies in about **7 days**.
5. Once approved, do **Route A** steps 1–4.

---

## After launch
- Website changes appear in the app **immediately** — no app update.
- A **new app build** is only needed for Android-level changes (icon, name,
  notification settings, yearly Google target-API requirement every August).
  For that, rebuild on PWABuilder using **"Use existing key"** with the files
  from your Google Drive, and increase the **version code** (2, 3, …).

---

## Why the old route changed
The earlier GitHub "Build Android TWA" button (and the `android/` folder):
- targets Android API 34 — Google now **rejects** new apps below **API 36**;
- creates a **brand-new signing key on every run**, so the second upload would be
  refused by Play;
- printed the key password into the build log;
- used the package name `app.leanon.therapy` — LeanOn is **not therapy**, and the
  package name is shown in the Play Store link forever.

---

## Quick reference — you vs Claude
| You do | You send Claude |
|---|---|
| Part 0 checks | Account date + type, any banners, any existing app/package |
| PWABuilder build | Fingerprint from `assetlinks.json` (never the passwords) |
| Play Console → App integrity | Google's SHA-256 fingerprint |
| Phone testing | Anything that breaks |
| Listing + App content | Any form question you're unsure about |
