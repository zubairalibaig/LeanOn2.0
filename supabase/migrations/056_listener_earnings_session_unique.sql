-- Add a unique constraint on listener_earnings.session_id so upsert
-- with onConflict:'session_id' works correctly.  One session can only
-- ever produce one earnings row; this prevents double-ledger entries
-- and makes the settlement insert idempotent (safe to retry).
ALTER TABLE listener_earnings
  ADD CONSTRAINT listener_earnings_session_id_key UNIQUE (session_id);
