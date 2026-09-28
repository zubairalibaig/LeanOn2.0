-- Scrub plaintext Aadhaar numbers from listener_applications.
--
-- Prior to this migration, /api/listener/apply stored the full 12-digit
-- Aadhaar in listener_applications.aadhaar (added by migration 047).
-- After this migration, the API stores only a SHA-256 hash of the number.
--
-- Existing rows cannot be re-hashed without re-collection, so they are
-- nullified here. aadhaar_last4 is intentionally preserved — it is the
-- only value shown in the admin UI going forward.
--
-- Run this ONCE in the Supabase SQL Editor after deploying the API change.

UPDATE listener_applications
SET aadhaar = NULL
WHERE aadhaar IS NOT NULL
  -- Only nullify plaintext values (exactly 12 digits).
  -- SHA-256 hashes are 64-char hex strings and will not match this pattern.
  AND aadhaar ~ '^\d{12}$';
