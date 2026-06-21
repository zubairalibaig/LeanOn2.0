-- 047_admin_aadhaar_tracking.sql
--
-- Admin KPI / vetting enhancements:
--   1. Full Aadhaar number for listener applications (manual KYC).
--
-- The owner reviews each listener manually before approval and needs to SEE the
-- full 12-digit Aadhaar number on the admin dashboard while approving. The
-- existing `aadhaar_last4` column only holds the masked tail, which is not
-- enough for verification. This adds the full number.
--
-- ⚠️ SENSITIVE PII (Aadhaar Act): this column is admin-only. It is:
--   • written ONLY by the server-side /api/listener/apply route (service role),
--   • read ONLY by the admin-gated /api/admin and /api/admin/users routes,
--   • NEVER selected by any public/listener-facing API (browse, listener
--     profile, dashboard) — keep it that way.
--
-- NOTE: "joined date" and "last login" need NO schema change:
--   • joined date  = public.users.created_at (already present)
--   • last login   = auth.users.last_sign_in_at (auto-maintained by Supabase
--                    Auth on every OTP sign-in; surfaced via the admin API).
--
-- Safe to re-run.

ALTER TABLE public.listener_applications
  ADD COLUMN IF NOT EXISTS aadhaar text;

COMMENT ON COLUMN public.listener_applications.aadhaar IS
  'Full 12-digit Aadhaar for manual KYC. SENSITIVE — admin-only. Never expose to public/listener APIs.';
