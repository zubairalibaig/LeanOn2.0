-- Migration 055: account_holder_name on listener_applications and listener_profiles
--
-- Captures the legal name on the bank account / UPI registration so admin
-- can verify payouts match the account holder, not the listener's pseudonym.
--
-- Run manually in Supabase SQL Editor.
-- Existing rows (339 active listeners) will have NULL — listeners are prompted
-- via their dashboard to fill it in before their next payout.

ALTER TABLE listener_applications
  ADD COLUMN IF NOT EXISTS account_holder_name text;

ALTER TABLE listener_profiles
  ADD COLUMN IF NOT EXISTS account_holder_name text;
