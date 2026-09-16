-- Store authoritative listener gross and service fee at settlement so the
-- earnings dashboard can show exact per-session breakdown for both India and
-- NRI sessions without deriving values from platform_fee (which includes the
-- NRI margin and would overstate the service fee for NRI rows).
ALTER TABLE listener_earnings
  ADD COLUMN IF NOT EXISTS listener_gross integer,
  ADD COLUMN IF NOT EXISTS service_fee    integer;
