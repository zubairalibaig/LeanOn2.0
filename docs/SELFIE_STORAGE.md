# Listener verification selfie — how it works and how to debug it

Applies to the listener onboarding flow added in Sep 2026 (`/become-listener`,
step 1 "Verification selfie").

## How it works

| Piece | Where |
|---|---|
| Upload route | `app/api/listener/selfie/route.ts` (`POST` upload, `GET` "is one on file?") |
| Path + signed-URL helpers | `lib/selfie-storage.ts` |
| Storage bucket | `verifications` (Supabase Storage) — must be **private** |
| Admin view | `/admin` → Pending approvals / Listeners → Review (10-minute signed URL) |

1. The applicant takes a live photo with the camera. The browser sends it to
   `/api/listener/selfie`. The browser never talks to storage directly.
2. The server uploads it with the **service role key** to
   `verifications/selfies/<userId>-<hash>`.
3. `<hash>` is an HMAC of the user id, keyed by a server secret (next section).
   Nobody can guess the path, even though listener ids are public.
4. `/api/listener/apply` refuses the application until a selfie exists at that path.
5. Admin sees it through a signed URL that expires after 10 minutes.

If the `verifications` bucket doesn't exist, the route **creates it as private**
and retries once. You'll see `created missing private bucket` in the logs.

## The service role key — read this before rotating it

The selfie path is derived from a secret:

```
secret = SELFIE_PATH_SECRET  (if set)  else  SUPABASE_SERVICE_ROLE_KEY
path   = selfies/<userId>-<first 32 hex chars of HMAC-SHA256(secret, "selfie:<userId>")>
```

**If that secret changes, every existing selfie becomes "missing" to the app.**
The files are still in storage, but the app looks for them at new paths. In
practice:

- Admin's review panel shows "No private selfie on file" for everyone.
- Applicants who already took a selfie are asked to take it again.

**Before rotating `SUPABASE_SERVICE_ROLE_KEY`** (Supabase dashboard → Settings → API):

1. In Vercel → Project → Settings → Environment Variables, add
   `SELFIE_PATH_SECRET` = the **current (old)** service role key value.
2. Redeploy. Nothing changes yet: the paths are identical because the secret is identical.
3. Now rotate the service role key and update `SUPABASE_SERVICE_ROLE_KEY` in Vercel.
4. Leave `SELFIE_PATH_SECRET` as it is, permanently. Never change it once selfies exist.

**Already rotated and selfies are "missing"?** Set `SELFIE_PATH_SECRET` to the
*previous* service role key value and redeploy. The old paths resolve again.

The service role key is also what every server-side database write uses
(`createAdminClient()` in `lib/supabase-server.ts`). If it's wrong or missing,
far more than selfies breaks: applications, sessions, wallet and admin all fail.

## Error codes

The applicant sees `Could not save your selfie (code: XYZ)`. Ask them for a
screenshot. The code tells you the cause.

| Code | Meaning | Fix |
|---|---|---|
| `bucket_missing` | The `verifications` bucket doesn't exist, and auto-creating it also failed | Supabase → Storage → New bucket → name `verifications`, **Public OFF**. Then retry. |
| `bucket_mime_rejected` | The bucket has "Allowed MIME types" set and JPEG/PNG/WebP isn't included | Storage → `verifications` → Edit → clear the MIME restriction, or allow `image/jpeg, image/png, image/webp` |
| `bucket_size_limit` | The bucket's file size limit is below the photo size | Storage → `verifications` → Edit → set the size limit to at least 5 MB |
| `service_key_invalid` | `SUPABASE_SERVICE_ROLE_KEY` in Vercel is wrong or was rotated | Copy the current key from Supabase → Settings → API into Vercel, then redeploy. **Read the rotation section above first.** |
| `service_key_missing` | `SUPABASE_SERVICE_ROLE_KEY` isn't set in Vercel | Add it in Vercel → Environment Variables (Production), then redeploy |
| `storage_permission` | Storage refused the service key (policy or permission) | Check the key is the **service_role** key, not the anon key |
| `storage_upload_failed` | Any other storage error | Check the Vercel logs (below) for the exact message |
| `server_error` | Unexpected exception in the route | Check the Vercel logs |
| `bad_type` | The photo wasn't JPEG/PNG/WebP | Usually an unusual browser; ask them to try Chrome |
| `bad_size` | The photo was over 4 MB after compression | Rare; ask them to retake |
| `not_authenticated` | Their login expired | Sign out and back in |
| `rate_limited` | More than 10 attempts in a minute | Wait a minute |
| `http_413` | Vercel rejected the request as too large (over 4.5 MB) | Rare; ask them to retake |
| `http_5xx` / `network` | Vercel timeout or a dropped connection | Retry on a better connection |

## Where to look

- **Vercel → Project → Logs**, filtered to `/api/listener/selfie`. Search for:
  - `selfie upload failed`: includes `code` and the raw storage error message
  - `created missing private bucket`: the auto-create ran
  - `could not create bucket`: the auto-create failed (message included)
  - `SUPABASE_SERVICE_ROLE_KEY is not set`
- **Supabase → Storage → `verifications`**: should exist, with **Public** OFF,
  and contain a `selfies/` folder.

## Quick health check

1. Supabase → Storage: the `verifications` bucket exists and is **private**.
2. Vercel env: `SUPABASE_SERVICE_ROLE_KEY` is set for Production. If
   `SELFIE_PATH_SECRET` is set, it hasn't changed since selfies were first saved.
3. Take a test selfie on `/become-listener`. It should show "✓ Selfie saved privately".
4. `/admin` → Review that applicant. The selfie should show next to the display photo.
