-- The app records the Razorpay gateway fee as a wallet_transactions row with
-- type='gateway_fee' (app/api/wallet/route.ts, app/api/webhooks/razorpay/route.ts),
-- but the live CHECK constraint only permits ('credit','debit','refund'). Every
-- gateway-fee insert silently fails (the inserts swallow the error), so the admin
-- KPI "gateway fees collected" always reads ₹0.
--
-- Add 'gateway_fee' to the allowed set so fee revenue is actually recorded.
ALTER TABLE wallet_transactions DROP CONSTRAINT IF EXISTS wallet_transactions_type_check;
ALTER TABLE wallet_transactions
  ADD CONSTRAINT wallet_transactions_type_check
  CHECK (type = ANY (ARRAY['credit','debit','refund','gateway_fee']));
