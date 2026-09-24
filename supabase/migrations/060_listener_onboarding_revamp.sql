-- Migration 060: listener onboarding revamp (2026-09)
-- Run in the Supabase SQL Editor, then refresh db/LIVE_SCHEMA.md.
-- Additive and idempotent. The app works before this runs (new fields are
-- simply not saved/shown); run it promptly so new applications keep them.

-- Public profile fields (shown on /listener/<id> and /browse).
ALTER TABLE listener_profiles
  ADD COLUMN IF NOT EXISTS education_level  text,
  ADD COLUMN IF NOT EXISTS education_field  text,
  ADD COLUMN IF NOT EXISTS tagline_phrases  text[] DEFAULT '{}',
  ADD COLUMN IF NOT EXISTS lived_experience text;

-- Private screening answers (admin-only): occupation, state, availability,
-- prior experience, "why", how they heard, LinkedIn, auto-scored quiz.
ALTER TABLE listener_applications
  ADD COLUMN IF NOT EXISTS screening jsonb;
