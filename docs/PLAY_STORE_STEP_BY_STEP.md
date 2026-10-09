# Updating the LeanOn app on Google Play — plain-English guide (v3, Oct 2026)

**Situation (confirmed 9 Oct 2026):** LeanOn is **already live** on Google Play.
- Package name: **`app.leanon.therapy`** (permanent — cannot be changed for this app)
- Live version: **2 (1.1)**, released 2 Apr 2024 · Developer account from Oct 2021
- So: **no 14-day tester rule, no new app, no new store listing.** We are
  **updating** the existing app.

How it works: the Play app is a thin Android "frame" (a **TWA — Trusted Web
Activity**) that opens www.leanon.app full-screen. Website changes reach the
app instantly; a new app build is only needed for Android-level changes.

Whenever a step says "send to Claude", paste the value in chat. You never edit
files yourself. **Never send anyone the signing-key passwords — including Claude.**

---

## PART 1 — URGENT: clear the two policy warnings (today, 30–45 minutes)
The dashboard shows **"Action by Oct 6 — fix policy violations to prevent your
data safety section from being removed"** (already past) and **"Must fix:
Incomplete health apps declaration"** (blocks every future release).
Your account already has one app **removed by Google** (Mumble, 2022), so keep
this app's record clean.

### 1a. See exactly what Google flagged
1. Play Console → LeanOn → left menu **Policy and programs** → **Policy status**
   (also check the **Inbox** bell, top right).
2. Open the data safety issue. **Screenshot the full message and send it to
   Claude** before changing anything — the fix depends on what it says.

### 1b. Health apps declaration
1. Left menu → **Policy and programs** → **App content** → **Health apps** →
   **Start** / **Manage**.
2. Tick only the **mental / behavioural health or wellness** option(s).
   **Do not** tick anything medical, clinical, diagnosis, treatment or medical
   device. If the list has an option like "peer support", tick it.
3. Save → **Submit**. If unsure about any option, screenshot the list and send it
   to Claude.

### 1c. Data safety form (redo it to match the app today)
Left menu → **App content** → **Data safety** → **Manage** → walk through:
- Collects data: **Yes**. Encrypted in transit: **Yes**. Users can request
  deletion: **Yes** → URL: `https://www.leanon.app/privacy#delete-account`
- **Personal info → Phone number**: collected, required, *Account management*.
  **Name** (display name): collected, *App functionality*.
- **Personal info → Other** (listeners only: UPI/bank details for payouts):
  collected, optional, *App functionality*.
- **Financial info → Purchase history**: collected, *App functionality*.
  (Card/UPI details are entered on Razorpay, not stored by LeanOn.)
- **Messages → Other in-app messages**: collected (session chats),
  *App functionality*.
- **Photos** (listener profile photo + verification selfie): collected,
  optional, *App functionality*.
- **Audio**: voice calls are live and **not recorded** → **not collected**.
- **Device or other IDs** (push-notification token): collected,
  *App functionality*.
- Shared with third parties: **No** (Razorpay, Agora etc. are service
  providers). Data sold: **No**.
- Save → Submit. Any question not covered here → screenshot to Claude.

### 1d. Other App content items — check each shows a green tick
| Item | Answer |
|---|---|
| Privacy policy | `https://www.leanon.app/privacy` |
| App access | **All or some functionality is restricted** → reviewer login (Claude will provide) |
| Ads | **No** |
| Content rating | Users can interact/communicate: **Yes**; digital purchases: **Yes**; violence/sexual/drugs/gambling: **No** |
| Target audience | **18 and over only**; appeals to children: **No** |
| Financial features | **My app doesn't provide any financial features** |
| News / Government | No / No |

---

## PART 2 — See what the live app does today (15 minutes)
1. On your **Android phone**, open the Play Store, search **LeanOn**, install it
   (or open https://play.google.com/store/apps/details?id=app.leanon.therapy).
2. Open it and note:
   - Does it open **www.leanon.app**? (Is it the current website?)
   - Is there an **address bar** at the top?
   - Does login work?
3. Send Claude a screenshot + these answers.

---

## PART 3 — Fix the address bar right away (5 minutes + Claude)
No new build needed for this — it's a website file.
1. Play Console → LeanOn → **Test and release** → **App integrity** → **Play app
   signing** (or **App signing**).
2. Copy **both** SHA-256 fingerprints shown:
   - **App signing key certificate** → SHA-256
   - **Upload key certificate** → SHA-256
3. **Send both to Claude** (they're public — safe to share). Claude updates
   `https://www.leanon.app/.well-known/assetlinks.json`. Within ~1 day of the
   phone re-checking (or after uninstall + reinstall), the address bar should
   disappear.

---

## PART 4 — Find the original signing ("upload") key (15 minutes)
To publish an update, the new build **must be signed with the same upload key**
as the April 2024 build.
1. Search your computer, Google Drive and email for any of:
   `signing.keystore` · `signing-key-info.txt` · `.keystore` · `.jks` ·
   `android.keystore` · a PWABuilder or Bubblewrap `.zip` from 2024.
2. **Found it (with its passwords)?** → copy it into a private Google Drive
   folder named `LeanOn Android signing — DO NOT DELETE` → go to PART 5.
3. **Not found?** → tell Claude. Google can reset the upload key
   (**App integrity → Request upload key reset**); it takes about 2–3 days and
   Claude will walk you through it. The app stays live meanwhile.

---

## PART 5 — Build the updated app on PWABuilder (30 minutes)
Why rebuild at all: the 2024 build targets an old Android version. Google now
requires **API 36** for updates, and apps on old versions **stop showing to new
users on newer phones**.

1. Laptop → Chrome → **https://www.pwabuilder.com** → type
   `https://www.leanon.app` → **Start**. Ignore warnings on the report card.
2. **Package For Stores** → **Android** → **Generate Package** / **Options**.
3. Fill in exactly (leave everything else as is):

   | Field | Value |
   |---|---|
   | Package ID | **`app.leanon.therapy`** (must match the live app exactly) |
   | App name | `LeanOn — Peer Support` |
   | Launcher name | `LeanOn` |
   | App version | `1.2.0` |
   | App version code | **`3`** (must be higher than the live `2`) |
   | Host | `www.leanon.app` |
   | Start URL | `/` |
   | Theme color | `#1A8FA0` |
   | Background color | `#0F4867` |
   | Nav color | `#0F4867` |
   | Display mode | **Standalone** |
   | Notification delegation | **ON** |
   | Location delegation | OFF |
   | Google Play billing | **OFF** |
   | Signing key | **Use mine** / **Existing** → upload the keystore from PART 4 and type its alias + passwords from `signing-key-info.txt` |

4. **Download Package** (.zip) → unzip → find **`app-release-bundle.aab`**.
5. Save the .zip to the same private Drive folder.

---

## PART 6 — Test the update privately first (30 minutes)
1. Play Console → **Test and release** → **Testing** → **Internal testing** →
   **Testers** tab → **Create email list** (your Gmail + 1–2 others) → Save.
2. **Releases** tab → **Create new release** → **Upload** the `.aab`.
   - "Signed with the wrong key" → wrong keystore; tell Claude.
   - "Target API level" error → tell Claude.
3. Release name `3 (1.2.0)`, notes `Internal test of the updated app.` →
   **Save and publish**.
4. **Testers** tab → **Copy link** → open it on your phone → **Accept** →
   update/install from Play.
5. Check on the phone:
   - [ ] No address bar (after PART 3 is live)
   - [ ] Login with phone + OTP
   - [ ] Small real wallet recharge → UPI app → comes back to LeanOn, balance updates
   - [ ] Voice session with a second account: mic permission asked, both hear
   - [ ] As a listener: allow notifications, go online, close the app, have
         someone request → alert appears
   - [ ] Crisis number opens the dialler; back button doesn't trap you

---

## PART 7 — Refresh the store listing (45 minutes)
Left menu → **Grow users** → **Store presence** → **Main store listing**.
Replace the 2024 text with the text in **`docs/PLAY_STORE_LISTING.md`**:
- App name `LeanOn — Peer Support`, short + full description from that file.
- **App icon**: download https://www.leanon.app/icon-512.png and upload.
- **Feature graphic** 1024×500 (canva.com → "Google Play feature graphic").
- **Phone screenshots** (2–8) taken **in the app** using test accounts only — no
  real users' names or photos.
- Category **Health & Fitness**. Contact email: a support address
  (see Concern below). Website `https://www.leanon.app`.

---

## PART 8 — Publish the update (10 minutes, then wait)
1. **Test and release** → **Production** → **Create new release** →
   **Add from library** → choose `3 (1.2.0)` → release notes:
   `Refreshed app: talk to a real person by text or voice, anytime.` →
   **Next** → **Save**.
2. **Publishing overview** → **Send changes for review**.
3. Review of an update usually takes **1–3 days** (health apps can take longer).
   The current version stays live until the new one is approved.

---

## Privacy notes for the developer profile
- **Developer email shown publicly** is `zubair@leanon.app`. Change it to a
  neutral one like `support@leanon.app` (Settings → Developer account →
  "Details shown as part of your Play developer profile").
- **Do not set up a merchant account** ("Monetize with Play"). LeanOn takes
  payments through Razorpay; a Play merchant account can make your **legal name
  and home address public** on the listing.
- Open **Play developer profile** → preview it and confirm no full name or
  address is shown.

---

## Quick reference — you vs Claude
| You do | You send Claude |
|---|---|
| Policy status / Inbox | Screenshot of the data safety violation |
| Health declaration + Data safety | Any question you're unsure about |
| Install live app | What it shows (screenshot) |
| App integrity | Both SHA-256 fingerprints |
| Look for the keystore | Found / not found (never the passwords) |
| PWABuilder → internal test | Anything that breaks |
| Listing + production release | — |

The GitHub "Build Android TWA" workflow and `android/` folder are deprecated —
don't use them (old Android target, new key every run, password in logs).
