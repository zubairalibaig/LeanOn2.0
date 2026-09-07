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

## Step 1 — Make the Android app file (using PWABuilder)
This turns your website into an installable Android app file. No coding.

1. On your laptop, open **Chrome** and go to **`https://www.pwabuilder.com`**
2. In the big input box in the middle, type your site address exactly:
   **`https://www.leanon.app`** — then click the **Start** button (or the arrow).
3. Wait ~30 seconds while it analyzes your site. You'll see a report card with
   scores. Some yellow warnings are fine — ignore them.
4. Near the top-right, click the button **"Package For Stores"**
   (on some versions it's a big **"Package for stores"** at the bottom).
5. You'll see store options. Find the **Android** card and click
   **"Generate Package"**.
6. A settings box pops up. Most fields are pre-filled. Two things matter:
   - **Package ID** (also called "App ID"): it shows something like
     `app.leanon.twa` or `com.leanon.www`. **Write down the EXACT value you
     see here and send it to me in chat.** This ID is permanent — it can never
     be changed after the app is published, so we want your website's
     verification file to match it exactly. (If you can type in this box, set
     it to `app.leanon.twa`.)
   - **Signing key**: choose the option **"Use mine / Google Play App
     Signing"** if offered, otherwise leave the default **"Create New"**. Don't
     overthink this — either works with the flow below.
7. Click **Download**. A **.zip** file downloads to your computer.
8. **VERY IMPORTANT — save this zip somewhere safe forever** (e.g. a folder in
   Google Drive). It contains your app's signing key. If you lose it you may
   not be able to update the app later. Do not delete it.
9. **Unzip** the file (double-click it). Inside you'll find:
   - a file ending in **`.aab`** — this is your app (you'll upload this to
     Google). It may be called `app-release-bundle.aab`.
   - a file ending in **`.apk`** — a test copy (optional).
   - a **`signing.keystore`** file and a small text file with **passwords** —
     keep these; do not share them.
   - possibly an **`assetlinks.json`** and/or a **"next steps"** readme —
     you can ignore these for now, we get the real values from Google in Step 3.

Send me the **Package ID** from step 6 when you have it.

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
   repeat Step 1 (generate a new package) with the fix.

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
| PWABuilder → generate package | The **Package ID** |
| Play Console → upload AAB | — |
| Play Console → App integrity | The **SHA-256 fingerprint** |
| Test on phone | Any bug you find |
| Fill listing, screenshots, publish | — |
