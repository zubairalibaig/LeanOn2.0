-- Per-listener custom service fee rate (individual override of the global schedule).
--
-- Resolution order at session booking:
--   1. listener_profiles.custom_service_fee_rate   — set by admin for this one listener
--   2. serviceFeeRateAt(now)                        — global SERVICE_FEE_SCHEDULE in lib/constants.ts
--
-- The resolved rate is locked onto the session (sessions.service_fee_rate) at booking
-- time, so settlement always uses the rate that was in effect when the session started,
-- even if the override is later cleared.
--
-- Future tier support: a fee_tier column (e.g. 'standard' | 'veteran' | 'partner')
-- can be inserted between step 1 and step 2 without changing this structure — the
-- resolution function in app/api/sessions/route.ts is the single callsite to update.

ALTER TABLE listener_profiles
  ADD COLUMN IF NOT EXISTS custom_service_fee_rate NUMERIC(5,4) DEFAULT NULL
  CHECK (custom_service_fee_rate IS NULL OR (custom_service_fee_rate >= 0 AND custom_service_fee_rate <= 1));

COMMENT ON COLUMN listener_profiles.custom_service_fee_rate IS
  'Per-listener override of the global SERVICE_FEE_SCHEDULE. NULL = use global rate. '
  'Set by admin only. Range 0–1 (e.g. 0.30 = 30%). Locked onto sessions.service_fee_rate at booking.';

-- Snapshot the resolved fee rate onto each session at booking time.
-- NULL on pre-existing sessions — settlement falls back to serviceFeeRateAt(started_at).
ALTER TABLE sessions
  ADD COLUMN IF NOT EXISTS service_fee_rate NUMERIC(5,4) DEFAULT NULL
  CHECK (service_fee_rate IS NULL OR (service_fee_rate >= 0 AND service_fee_rate <= 1));

COMMENT ON COLUMN sessions.service_fee_rate IS
  'Service fee rate in force when this session was booked (listener custom rate or global schedule). '
  'NULL for sessions created before migration 062 — settlement falls back to serviceFeeRateAt(started_at). '
  'This value NEVER changes after booking; it is the source of truth for settlement.';
