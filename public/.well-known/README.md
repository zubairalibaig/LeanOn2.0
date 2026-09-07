# Digital Asset Links — TWA verification

`assetlinks.json` is what removes the browser URL bar from the Android TWA
(Trusted Web Activity) wrapper and proves leanon.app owns the Play Store app.

## Before the app works without a URL bar, fill in TWO placeholders:

1. **`package_name`** — currently `app.leanon.twa`. Set this to the exact
   Android package id you choose in PWABuilder / Play Console. Once the app is
   published you CANNOT change it, so pick deliberately (e.g. `app.leanon.twa`).

2. **`sha256_cert_fingerprints`** — currently the `REPLACE_WITH...` placeholder.
   Paste the SHA-256 fingerprint of the signing key. Get it from:
   - **PWABuilder**: shown on the Android package download screen, OR
   - **Play Console** → your app → Setup → App integrity → App signing →
     "SHA-256 certificate fingerprint" (use the **App signing key**, not the
     upload key, if Play App Signing is enabled — which it is by default).

   It looks like: `AB:CD:12:34:...:EF` (32 colon-separated hex pairs).
   You can list more than one fingerprint if you use both an upload and a
   signing key — just add them as extra strings in the array.

## After editing
Commit, push to `main`, let Vercel deploy, then verify it is live and public at:
  https://www.leanon.app/.well-known/assetlinks.json

Google fetches this URL directly — it must return HTTP 200 with
`Content-Type: application/json` and no auth/redirect. (Vercel serves files
under `public/` as-is, so this works out of the box.)

Test the link with Google's validator:
  https://developers.google.com/digital-asset-links/tools/generator
