-- One-off (2026-09-24): broadcast the text/voice pricing + service fee
-- announcement to every existing listener. Idempotent — safe to re-run.
-- Generated from lib/listener-announcements.ts PRICING_NOTICE; keep in sync.
-- Listeners with the dashboard open see it instantly via the realtime bell.
INSERT INTO public.notifications (user_id, type, title, body, action_url)
SELECT lp.user_id, 'pricing_update_2026_09', 'Voice calls now earn you more — and an update on how you earn',
       'Seekers can now choose text chat or a voice call, and voice is always priced ₹5/min above your text rate. From 24 Sep 2026, you keep 60% of every session; LeanOn''s 40% service fee covers finding seekers for you, secure payments, verification, safety and support. Sessions you''ve already completed aren''t affected. You set your own price — now is a good time to review it.',
       '/dashboard?edit=pricing'
FROM public.listener_profiles lp
JOIN public.users u ON u.id = lp.user_id
WHERE COALESCE(u.phone, '') NOT LIKE 'DELETE%'
  AND NOT COALESCE(lp.is_suspended, false)
  AND NOT EXISTS (
    SELECT 1 FROM public.listener_applications a
    WHERE a.user_id = lp.user_id AND a.status = 'rejected'
  )
  AND NOT EXISTS (
    SELECT 1 FROM public.notifications x
    WHERE x.user_id = lp.user_id AND x.type = 'pricing_update_2026_09'
  );
