-- 070: allow wallet_transactions.type = 'gateway_fee' (again) and retype old fee rows.
--
-- Migration 042 added 'gateway_fee' to wallet_transactions_type_check, but
-- 999_final_hardening.sql later re-asserted ('credit','debit','refund') and
-- dropped it. Since then:
--   - the Razorpay webhook's fee rows (type 'gateway_fee') were rejected silently;
--   - the in-app recharge path wrote its fee rows as 'debit', which made the
--     admin wallet check report every recharging seeker as off by their fees.
-- The app now writes 'gateway_fee' everywhere (e22ab8a). No wallet balance was
-- ever affected: the fee is paid on top of a recharge, never from the wallet.
--
-- ⚠️ MANUAL: owner runs this in the Supabase SQL Editor.

ALTER TABLE public.wallet_transactions DROP CONSTRAINT IF EXISTS wallet_transactions_type_check;
ALTER TABLE public.wallet_transactions
  ADD CONSTRAINT wallet_transactions_type_check
  CHECK (type = ANY (ARRAY['credit','debit','refund','gateway_fee']));

-- Fee rows the in-app path recorded as 'debit' (reference_id 'gf_<payment id>').
UPDATE public.wallet_transactions
SET type = 'gateway_fee'
WHERE type = 'debit' AND reference_id LIKE 'gf\_%';
