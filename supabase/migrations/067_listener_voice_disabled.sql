-- Per-listener switch to hide the voice-call option (UI only: browse "Call"
-- button, profile "Voice" mode, waiting-screen alternatives). Text stays on.
-- Toggle for one listener:
--   update listener_profiles set voice_disabled = true
--   where user_id = (select id from users where phone like '%<last digits>');
ALTER TABLE public.listener_profiles ADD COLUMN IF NOT EXISTS voice_disabled boolean NOT NULL DEFAULT false;
