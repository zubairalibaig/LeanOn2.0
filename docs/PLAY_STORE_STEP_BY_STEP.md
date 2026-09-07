# Launching LeanOn on the Play Store — plain-English guide

A step-by-step guide written for a non-technical person. Do the steps in order.
Whenever a step involves editing a file or code, you don't have to do it — just
copy the value it asks for and paste it to me (Claude) in chat, and I'll handle
the file and push it live.

## What you'll need
- A **laptop/desktop** with the **Chrome** browser (not a phone) for most steps.
- Your **Google Play Developer account** (you already have this).
- An **Android phone** for testing near the end.
- About **2 hours of clicking**, spread over a few days (see the timing warning
  below).

## ⚠️ Read this first — the 14-day testing rule
Google changed its rules. **If your Play Developer account was created AFTER
13 November 2023**, Google requires you to:
- run a **closed test with at least 12 testers** who stay opted in for
- **at least 14 days**, before you're allowed to publish to the public.

If your account is **older than that date**, you're exempt and can go straight
to production. Check which applies to you before promising anyone a launch date
— if the rule applies, the *earliest* you can go public is ~2 weeks after your
closed test starts. Plan marketing around that.

---

## Step 0 — App icons ✅ DONE
I already generated your app icons (`icon-192.png`, `icon-512.png`) from the
owl logo and pushed them live. You don't need to do anything here.

You WILL need the large icon as a file on your computer for the store listing
later. To download it:
1. Open this link in your browser:
   `https://www.leanon.app/icon-512.png`
2. Right-click the owl image → **"Save image as…"** → save it somewhere easy
   like your Desktop. Name it `leanon-icon-512.png`.

---

## Step 1 — Make the Android app file (GitHub Actions — automatic)
This turns your website into an installable Android app file. No PWABuilder
needed — a GitHub Action builds it for you.

**Package ID:** `app.leanon.twa` (already set — this is permanent, never changes)

1. Go to **`https://github.com/zubairalibaig/LeanOn2.0/actions`**
2. In the left sidebar, click **"Build Android TWA"**
3. Click the blue **"Run workflow"** button on the right
4. Leave the defaults (Version code: `1`, Version name: `1.0.0`) → click
   **"Run workflow"** (green button)
5. Wait 3–5 minutes for the build to finish (the row turns green ✅)
6. Click on the completed run to open it
7. Scroll down to **Artifacts** — you'll see two downloads:
   - **`leanon-signed-aab`** — this is your app file. Click to download.
   - **`leanon-keystore-SAVE-THIS`** — this is your signing key.
     **Download it immediately and save it in Google Drive.** It expires
     from GitHub in 7 days. Losing it = can't update the app.
8. Also look at the **"Get SHA-256 fingerprint"** step in the build log —
   it prints a long code like `AB:CD:12:…:EF`. **Copy it and send it to me.**
   (You'll also get this from Google Play Console in Step 3, so don't worry
   if you miss it here.)
9. Unzip the `leanon-signed-aab` download — the file ending in **`.aab`** is
   what you upload to Google Play.

⚠️ **FIRST RUN NOTE:** The build log will also show a generated keystore
password. If you want to be extra careful, save that password as a GitHub
repository secret named `KEYSTORE_PASSWORD` (Settings → Secrets → Actions →
New repository secret) so future builds use the same key. But for your first
upload, the auto-generated one is fine.

---

## Step 2 — Create your app in Play Console and upload it
1. Go to **`https://play.google.com/console`** and sign in with your developer
   account.
2. Click **"Create app"** (top right).
3. Fill the form:
   - **App name:** `LeanOn — Peer Support`
   - **Default language:** English (India) — `en-IN`
   - **App or game:** App
   - **Free or paid:** **Free** (the app download is free; payments happen
     inside as real-time sessions).
   - Tick the required **declarations** boxes, then **Create app**.
4. You'll land on the app dashboard. In the left menu, go to
   **Test and release → Testing → Internal testing**.
5. Click **"Create new release"**.
6. If Google offers **"Play App Signing"**, **accept/continue** — this is the
   recommended default. (It means Google securely manages your final signing
   key.)
7. Under **"App bundles"**, click **Upload** and choose the **`.aab`** file from
   Step 1.8. Wait for it to process.
8. Add a short **Release name** (e.g. `1.0 first internal build`) and in
   **Release notes** type something like `First internal test build.` Click
   **Next / Save**, then **Review release**, then **Start rollout to Internal
   testing** and confirm.
9. On the Internal testing page, open the **Testers** tab, create a tester list
   and **add your own Gmail address** (and a few friends' Gmails). Save.
10. Copy the **"Join on Android"** / **testing link** shown there — you'll use
    it on your phone in Step 4.

---

## Step 3 — Connect your website to the app (the verification file)
This is what removes the ugly web-address bar from the top of your app. It needs
one code (a "fingerprint") that only Google can give you, which is why we do it
now (after uploading), not before.

1. Still in Play Console, in the left menu go to
   **Test and release → Setup → App integrity** (sometimes **"App signing"**).
2. Find the section **"App signing key certificate"**. You'll see a line called
   **"SHA-256 certificate fingerprint"** — a long code like
   `AB:CD:12:…:EF` (lots of pairs separated by colons). There's a **copy**
   button next to it.
3. **Paste that SHA-256 fingerprint to me in chat** (along with the Package ID
   from Step 1 if you haven't already).
4. I will put both values into your website's verification file
   (`assetlinks.json`) and push it live. It'll be active within a couple of
   minutes on Vercel. **You don't edit any file yourself.**
5. (Optional check) After I confirm, you can open
   `https://www.leanon.app/.well-known/assetlinks.json` in your browser and see
   your real values there.

---

## Step 4 — Test on your Android phone (do NOT skip)
1. On your **Android phone**, open the **testing link** you copied in Step 2.10.
   Tap **"Become a tester"**, then the link to download from the Play Store,
   and **install** LeanOn.
2. Open the app. Confirm there is **no web-address bar** at the top (if there
   is, the verification from Step 3 hasn't gone live yet — wait 10 minutes and
   reopen).
3. **Test these two things fully — they are the ones most likely to break:**
   - **Login + payment:** sign in with your phone number (OTP), then add money
     to the wallet with a **real small payment** and confirm the balance
     updates. This proves MSG91 login and Razorpay both work inside the app.
   - **Voice call:** have a second person (or a second phone/account) act as the
     listener, start a **voice session**, and confirm **you can hear each
     other**, and that the app asks for **microphone permission** the first
     time. (This is the feature that was broken before — test it properly.)
4. If anything fails, tell me exactly what happened and I'll fix it, then you
   re-run the GitHub Action (Step 1) to generate a new package with the fix.
   Bump the **version code** to `2` on the next run.

---

## Step 5 — Fill in the store listing (what people see on Play)
In Play Console, left menu → **Grow → Store presence → Main store listing**.
Copy-paste from the file `docs/PLAY_STORE_LISTING.md` in your repo (I wrote all
the text for you):
1. **App name:** `LeanOn — Peer Support`
2. **Short description:** paste the short description from that file.
3. **Full description:** paste the full description from that file.
4. **App icon:** upload the `leanon-icon-512.png` you saved in Step 0.
5. **Feature graphic:** you need one **1024×500** banner image. Easiest way:
   use **Canva.com** (free), search "Google Play feature graphic", drop your
   logo + the line "Someone to lean on, anytime." on a navy/teal background,
   download as PNG, upload it.
6. **Phone screenshots:** you need **at least 2** (up to 8). Easiest way: open
   `https://www.leanon.app` on your phone, screenshot the home page, the browse
   page, a chat, and the wallet page. Upload those. (They should be tall phone
   screenshots.)
7. Fill the other required sections Play highlights in red:
   - **App category:** Health & Fitness
   - **Contains ads:** No
   - **Content rating:** complete the questionnaire honestly (expect "Teen").
   - **Data safety:** phone number collected for sign-in; payments handled by
     Razorpay; no data sold; conversations not shared; data encrypted in
     transit. (See `docs/PLAY_STORE_LISTING.md` for the exact answers.)
   - **Privacy policy URL:** `https://www.leanon.app/privacy`
   - **Target audience:** adults (18+ is safest for emotional-support content).
8. Save each section (green checkmarks appear as you complete them).

---

## Step 6 — Publish
- **If your account is exempt from the 14-day rule** (older than 13 Nov 2023):
  go to **Test and release → Production → Create new release**, upload the same
  `.aab`, fill release notes, and **Start rollout to Production**. Google review
  usually takes a few hours to a few days.
- **If the 14-day rule applies to you:** first run a **Closed test** (left menu
  → Testing → Closed testing) with **12+ testers for 14 days**. After that,
  Play Console shows an **"Apply for production access"** form — fill it, then
  create the Production release as above.

Once approved, your app is live on the Play Store. 🎉

---

## Quick reference — what you send me vs. what you do
| You do (clicking) | You send me (I do the code) |
|---|---|
| GitHub Actions → Run "Build Android TWA" | — (it's automatic) |
| Download AAB + keystore from artifacts | — (save keystore to Google Drive!) |
| Play Console → upload AAB | — |
| Play Console → App integrity | The **SHA-256 fingerprint** |
| Test on phone | Any bug you find |
| Fill listing, screenshots, publish | — |
