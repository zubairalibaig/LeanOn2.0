# Live DB Schema — Ground Truth

> **This file is the authoritative description of the production database.**
> Migration files in `supabase/migrations/` describe *intent*, not reality —
> the live DB has drifted from them before (phone NOT NULL + UNIQUE,
> duration check missing 45, missing RLS policies, no auth.users FK cascade).
> Any code or migration change MUST be validated against this file.

## How to refresh (owner)

1. Open Supabase Dashboard → SQL Editor
2. Run the query in `db/dump-live-schema.sql`
3. Export the result as Markdown
4. Replace everything below the `<!-- SNAPSHOT -->` marker
5. Update the snapshot date
6. Commit

**Refresh after:** running any migration, or making ANY change in the
Supabase dashboard (columns, constraints, policies, triggers, auth settings).

## Known live-vs-migrations drift (history)

| Found | Drift | Resolution |
|---|---|---|
| 2026-06-11 | `users.phone` had NOT NULL (no migration defines it) | Dropped via migration 033 |
| 2026-06-11 | `users_phone_key` UNIQUE on phone (no migration defines it) | Kept; recorded in 033 |
| 2026-06-11 | `sessions_duration_mins_check` only allowed 5/15/30 | Migration 034 adds 45 |
| 2026-06-11 | `public.users.id` has NO FK to `auth.users` (schema file says CASCADE) | Orphan rows possible — `ensureUserRow` reconciles |
| 2026-06-11 | `users_select_listener_public` policy missing | Re-asserted via migration 035 |

<!-- SNAPSHOT -->

## Snapshot — NOT YET CAPTURED

⚠️ Run `db/dump-live-schema.sql` and paste the Markdown export here.

### Partial constraint/trigger snapshot from 2026-06-11

(From the targeted dump run during launch debugging — core tables only.)

| kind | tbl | name | def |
| ---------- | --------------------- | ----------------------------------- | --- |
| CONSTRAINT | listener_applications | listener_applications_pkey | PRIMARY KEY (id) |
| CONSTRAINT | listener_applications | listener_applications_status_check | CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text, 'rejected'::text, 'needs_resubmission'::text]))) |
| CONSTRAINT | listener_applications | listener_applications_user_id_fkey | FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE |
| CONSTRAINT | listener_applications | listener_applications_user_id_key | UNIQUE (user_id) |
| CONSTRAINT | listener_profiles | listener_profiles_pkey | PRIMARY KEY (id) |
| CONSTRAINT | listener_profiles | listener_profiles_user_id_fkey | FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE |
| CONSTRAINT | listener_profiles | listener_profiles_user_id_key | UNIQUE (user_id) |
| CONSTRAINT | listener_profiles | lp_rate_range | CHECK (((rate_per_min >= (1)::numeric) AND (rate_per_min <= (200)::numeric))) |
| CONSTRAINT | sessions | sessions_amount_held_non_negative | CHECK ((amount_held >= (0)::numeric)) |
| CONSTRAINT | sessions | sessions_duration_mins_check | CHECK ((duration_mins = ANY (ARRAY[5, 15, 30]))) — **changed to include 45 by migration 034 (verify on next refresh)** |
| CONSTRAINT | sessions | sessions_listener_id_fkey | FOREIGN KEY (listener_id) REFERENCES users(id) |
| CONSTRAINT | sessions | sessions_pkey | PRIMARY KEY (id) |
| CONSTRAINT | sessions | sessions_platform_fee_nonneg | CHECK ((platform_fee >= (0)::numeric)) |
| CONSTRAINT | sessions | sessions_seeker_id_fkey | FOREIGN KEY (seeker_id) REFERENCES users(id) |
| CONSTRAINT | sessions | sessions_seeker_rating_check | CHECK (((seeker_rating >= 1) AND (seeker_rating <= 5))) |
| CONSTRAINT | sessions | sessions_session_type_check | CHECK ((session_type = ANY (ARRAY['text'::text, 'voice'::text]))) |
| CONSTRAINT | sessions | sessions_status_check | CHECK ((status = ANY (ARRAY['pending'::text, 'active'::text, 'completed'::text, 'cancelled'::text]))) |
| CONSTRAINT | users | users_gender_check | CHECK ((gender = ANY (ARRAY['male'::text, 'female'::text, 'other'::text, 'prefer_not_to_say'::text]))) |
| CONSTRAINT | users | users_phone_key | UNIQUE (phone) |
| CONSTRAINT | users | users_pkey | PRIMARY KEY (id) |
| CONSTRAINT | users | users_role_check | CHECK ((role = ANY (ARRAY['seeker'::text, 'listener'::text, 'admin'::text]))) |
| CONSTRAINT | users | wallet_balance_non_negative | CHECK ((wallet_balance >= (0)::numeric)) NOT VALID |
| CONSTRAINT | wallet_transactions | wallet_transactions_pkey | PRIMARY KEY (id) |
| CONSTRAINT | wallet_transactions | wallet_transactions_session_id_fkey | FOREIGN KEY (session_id) REFERENCES sessions(id) |
| CONSTRAINT | wallet_transactions | wallet_transactions_type_check | CHECK ((type = ANY (ARRAY['credit'::text, 'debit'::text, 'refund'::text]))) |
| CONSTRAINT | wallet_transactions | wallet_transactions_user_id_fkey | FOREIGN KEY (user_id) REFERENCES users(id) |
| TRIGGER | listener_applications | la_guard_status | BEFORE UPDATE → guard_listener_app_status() |
| TRIGGER | listener_profiles | listener_profiles_updated_at | BEFORE UPDATE → handle_updated_at() |
| TRIGGER | listener_profiles | lp_guard_privileged | BEFORE UPDATE → guard_lp_privileged_cols() |
| TRIGGER | users | users_guard_insert | BEFORE INSERT → guard_users_insert_cols() |
| TRIGGER | users | users_guard_privileged | BEFORE UPDATE → guard_users_privileged_cols() |
| TRIGGER | users | users_set_updated_at | BEFORE UPDATE → set_updated_at() |
| TRIGGER | users | users_updated_at | BEFORE UPDATE → handle_updated_at() |

### Key facts derived from the live DB (not from migrations)

- `users.wallet_balance` is **numeric**, not integer
- `users.phone` is UNIQUE; nullable since migration 033
- `public.users.id` has **no FK to auth.users** → deleting an auth user
  leaves an orphan `public.users` row; phone reconciliation in
  `lib/ensure-user-row.ts` handles the resulting `users_phone_key` conflicts
- Two duplicate updated_at triggers exist on `users` (set_updated_at +
  handle_updated_at) — harmless but both fire on every update
- `@supabase/ssr` is **v0.3.0**: cookie API is get/set/remove ONLY
  (getAll/setAll silently no-op — caused the global login-redirect bug)
