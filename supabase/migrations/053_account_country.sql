-- Migration 053: account_country field for geo-pricing and analytics
-- Stores the ISO 3166-1 alpha-2 country code selected by the user at signup
-- (e.g. 'IN', 'US', 'GB', 'AE'). Separate from the phone country code because
-- +1 is both USA and Canada — the dropdown selection is authoritative.
-- Used for: NRI vs India display pricing, geo analytics, Phase 2 USD billing.
-- NEVER used as a security gate — it is a preference, not a verified identity.

ALTER TABLE users ADD COLUMN IF NOT EXISTS account_country text;

-- Index for geo-pricing queries and analytics aggregations
CREATE INDEX IF NOT EXISTS users_account_country_idx ON users (account_country);

-- Comment for live schema reference
COMMENT ON COLUMN users.account_country IS
  'ISO 3166-1 alpha-2 country code from the phone country selector at signup. '
  'IN = India (default), others = NRI. Derive from MSG91 widget country selection '
  'passed through /api/auth/phone-widget → ensureUserRow. Distinguishes US (US) '
  'from Canada (CA) which share the +1 dial code.';
