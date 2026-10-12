-- Records whether the "new session request" push reached the listener's devices,
-- so the admin Sessions tab can answer "was this listener actually alerted?".
-- Written once by /api/sessions POST right after the push is sent.
-- Shape: {"at": iso, "configured": bool, "devices": int, "delivered": int, "errors": [codes]}
ALTER TABLE public.sessions ADD COLUMN IF NOT EXISTS request_push jsonb;
