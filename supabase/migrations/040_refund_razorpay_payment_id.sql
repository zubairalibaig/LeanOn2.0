-- Extend refund_requests for automated Razorpay refund processing.
--
-- 1. razorpay_payment_id: captured at request time from wallet_transactions.reference_id
--    so admin complete_refund can call the Razorpay Refund API automatically.
-- 2. admin_notes: store Razorpay refund ID after auto-processing, or manual notes.
-- 3. Add 'cancelled' to status check so /api/refund can roll back on deduction failure.

ALTER TABLE refund_requests ADD COLUMN IF NOT EXISTS razorpay_payment_id text;
ALTER TABLE refund_requests ADD COLUMN IF NOT EXISTS admin_notes text;

-- Extend status check to include 'cancelled' (used when wallet deduction fails at request time).
ALTER TABLE refund_requests DROP CONSTRAINT IF EXISTS refund_requests_status_check;
ALTER TABLE refund_requests
  ADD CONSTRAINT refund_requests_status_check
  CHECK (status = ANY (ARRAY['pending','completed','rejected','cancelled']));
