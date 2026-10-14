-- 069: why a listener's device couldn't register for request alerts.
--
-- The admin sessions list shows "Alert: listener has no device" when a request
-- found no push token, but not WHY the listener's phone never registered
-- (notifications blocked for the site, browser unsupported, token error, …).
-- lib/firebase-client.ts now reports each failed registration to
-- /api/push/register-failure, which stores it here; a successful registration
-- (/api/push/register) clears it. Code tolerates these columns being absent.
--
-- ⚠️ MANUAL: owner runs this in the Supabase SQL Editor.

ALTER TABLE public.users ADD COLUMN IF NOT EXISTS push_last_error    text;
ALTER TABLE public.users ADD COLUMN IF NOT EXISTS push_last_error_at timestamptz;
