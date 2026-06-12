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
| 2026-06-11 | `sessions_duration_mins_check` only allowed 5/15/30 | Migration 034 adds 45 — **confirmed in snapshot** |
| 2026-06-11 | `public.users.id` has NO FK to `auth.users` (schema file says CASCADE) | Orphan rows possible — `ensureUserRow` reconciles |
| 2026-06-11 | `users_select_listener_public` policy missing | Re-asserted via migration 035 — **confirmed in snapshot** |
| 2026-06-11 | `wallet_txn_payment_id_unique` index missing | Added manually in SQL Editor — **confirmed in snapshot** |
| 2026-06-11 | `admin_audit_logs.admin_id` was NOT NULL (migration 030 intended nullable) | NOT NULL dropped manually in SQL Editor — **confirmed in snapshot** |

## Code-vs-DB issues found in validation (2026-06-11)

| Severity | Issue | File | Status |
|---|---|---|---|
| ✅ FIXED | `wallet_txn_payment_id_unique` partial index was missing (double-credit risk) | `app/api/wallet/route.ts`, Supabase RPC | **Fixed 2026-06-11 — index confirmed in snapshot** |
| ✅ FIXED | `admin_audit_logs.admin_id` was `NOT NULL` — audit log INSERT silently failed for password-auth admin | `lib/require-admin.ts` | **Fixed 2026-06-11 — column now nullable, confirmed in snapshot** |
| 🟡 MED | `listener_earnings.status` DEFAULT is `'settled'` — new earnings rows are immediately settled; pending→settled flow is bypassed for all new earnings | `supabase/migrations/009_payouts.sql` vs live | Harmless now (no payout pipeline uses pending), but wrong intent |
| 🟡 MED | Three duplicate SELECT policies on `wallet_transactions`: `wallet_own`, `wallet_transactions_select_own`, `wallet_txns_own` — all identical `auth.uid() = user_id`. Harmless but adds noise | migrations | Cosmetic |
| 🟡 MED | `sessions` has three SELECT policies: `sessions_own`, `sessions_participant_select`, `sessions_read_participants` — overlapping but harmless (OR logic) | migrations | Cosmetic |
| 🟡 MED | `messages` has two INSERT policies: `messages_participant_insert` lacks the sender_id and active-session checks that `messages_insert` has — a participant can insert into ended sessions (or spoof sender_id) via direct PostgREST calls. App sends go through `/api/messages` which enforces both, so no app-level breakage | migrations | **Migration 036 drops the permissive policy — owner must run it** |
| 🟡 MED | `users` has two SELECT policies for listeners: `users_select_listener_public` and `users_listener_public_read` — both check `id IN (SELECT user_id FROM listener_profiles WHERE is_approved=true)` | migration 035 vs 20250512 | Harmless |
| 🟢 LOW | `payout_requests.user_id` column (not `listener_id` as in migration 009 spec) — code must use `user_id` | `app/api/listener/payout/route.ts` | Confirmed — code already uses correct column name |

<!-- SNAPSHOT -->

## Snapshot — 2026-06-11 (second refresh, after idempotency-index + audit-log fixes)

Full dump via `db/dump-live-schema.sql`.

### 1_COLUMNS (168 total)

| table.column | definition |
| --- | --- |
| admin_audit_logs.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| admin_audit_logs.admin_id | uuid |
| admin_audit_logs.action | text NOT NULL |
| admin_audit_logs.target_id | text NOT NULL |
| admin_audit_logs.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| audit_logs.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| audit_logs.action | text NOT NULL |
| audit_logs.actor_id | uuid |
| audit_logs.target_id | uuid |
| audit_logs.metadata | jsonb |
| audit_logs.ip_address | text |
| audit_logs.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| contact_messages.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| contact_messages.name | text |
| contact_messages.email | text |
| contact_messages.type | text |
| contact_messages.message | text |
| contact_messages.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| content_flags.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| content_flags.reporter_id | uuid NOT NULL |
| content_flags.target_user_id | uuid |
| content_flags.session_id | uuid |
| content_flags.reason | text NOT NULL |
| content_flags.details | text |
| content_flags.status | text NOT NULL DEFAULT 'pending'::text |
| content_flags.resolved_by | uuid |
| content_flags.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| content_flags.updated_at | timestamp with time zone NOT NULL DEFAULT now() |
| listener_applications.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| listener_applications.user_id | uuid NOT NULL |
| listener_applications.name | text |
| listener_applications.phone | text |
| listener_applications.aadhaar_last4 | text |
| listener_applications.bank_account | text |
| listener_applications.ifsc_code | text |
| listener_applications.status | text NOT NULL DEFAULT 'pending'::text |
| listener_applications.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| listener_applications.updated_at | timestamp with time zone NOT NULL DEFAULT now() |
| listener_applications.upi_id | text |
| listener_applications.admin_notes | text |
| listener_earnings.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| listener_earnings.listener_id | uuid NOT NULL |
| listener_earnings.session_id | uuid |
| listener_earnings.gross_amount | integer NOT NULL |
| listener_earnings.platform_fee | integer NOT NULL |
| listener_earnings.net_amount | integer NOT NULL |
| listener_earnings.status | text NOT NULL DEFAULT 'settled'::text |
| listener_earnings.settled_at | timestamp with time zone NOT NULL DEFAULT now() |
| listener_earnings.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| listener_profiles.id | uuid NOT NULL DEFAULT uuid_generate_v4() |
| listener_profiles.user_id | uuid NOT NULL |
| listener_profiles.bio | text NOT NULL DEFAULT ''::text |
| listener_profiles.specialty_tags | ARRAY NOT NULL DEFAULT '{}'::text[] |
| listener_profiles.rate_per_min | numeric NOT NULL DEFAULT 10.00 |
| listener_profiles.is_available | boolean NOT NULL DEFAULT false |
| listener_profiles.is_approved | boolean NOT NULL DEFAULT false |
| listener_profiles.rating | numeric NOT NULL DEFAULT 0.00 |
| listener_profiles.total_sessions | integer NOT NULL DEFAULT 0 |
| listener_profiles.total_minutes | integer NOT NULL DEFAULT 0 |
| listener_profiles.bank_account | text |
| listener_profiles.ifsc_code | text |
| listener_profiles.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| listener_profiles.updated_at | timestamp with time zone NOT NULL DEFAULT now() |
| listener_profiles.languages_spoken | ARRAY DEFAULT '{english}'::text[] |
| listener_profiles.is_active | boolean DEFAULT true |
| listener_profiles.is_verified | boolean NOT NULL DEFAULT false |
| listener_profiles.is_suspended | boolean NOT NULL DEFAULT false |
| listener_verifications.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| listener_verifications.listener_id | uuid NOT NULL |
| listener_verifications.full_name | text NOT NULL |
| listener_verifications.id_type | text NOT NULL |
| listener_verifications.id_number_hash | text NOT NULL |
| listener_verifications.selfie_url | text |
| listener_verifications.id_doc_url | text |
| listener_verifications.status | text NOT NULL DEFAULT 'pending'::text |
| listener_verifications.admin_notes | text |
| listener_verifications.submitted_at | timestamp with time zone NOT NULL DEFAULT now() |
| listener_verifications.reviewed_at | timestamp with time zone |
| listener_verifications.reviewed_by | uuid |
| messages.id | uuid NOT NULL DEFAULT uuid_generate_v4() |
| messages.session_id | uuid NOT NULL |
| messages.sender_id | uuid NOT NULL |
| messages.content | text NOT NULL |
| messages.is_flagged | boolean NOT NULL DEFAULT false |
| messages.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| notifications.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| notifications.user_id | uuid NOT NULL |
| notifications.type | text NOT NULL |
| notifications.title | text NOT NULL |
| notifications.body | text NOT NULL |
| notifications.action_url | text |
| notifications.is_read | boolean NOT NULL DEFAULT false |
| notifications.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| payout_requests.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| payout_requests.user_id | uuid NOT NULL |
| payout_requests.amount | integer NOT NULL |
| payout_requests.status | text NOT NULL DEFAULT 'pending'::text |
| payout_requests.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| payout_requests.upi_id | text |
| payout_requests.admin_notes | text |
| payout_requests.processed_at | timestamp with time zone |
| payout_requests.processed_by | uuid |
| refund_requests.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| refund_requests.user_id | uuid NOT NULL |
| refund_requests.amount | integer NOT NULL |
| refund_requests.reason | text |
| refund_requests.status | text NOT NULL DEFAULT 'pending'::text |
| refund_requests.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| reports.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| reports.reporter_id | uuid NOT NULL |
| reports.reported_user_id | uuid |
| reports.session_id | uuid |
| reports.type | text NOT NULL |
| reports.description | text NOT NULL |
| reports.status | text NOT NULL DEFAULT 'pending'::text |
| reports.admin_notes | text |
| reports.resolved_by | uuid |
| reports.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| reports.updated_at | timestamp with time zone NOT NULL DEFAULT now() |
| sessions.id | uuid NOT NULL DEFAULT uuid_generate_v4() |
| sessions.seeker_id | uuid NOT NULL |
| sessions.listener_id | uuid NOT NULL |
| sessions.session_type | text NOT NULL |
| sessions.duration_mins | integer NOT NULL |
| sessions.status | text NOT NULL DEFAULT 'pending'::text |
| sessions.amount_held | numeric NOT NULL DEFAULT 0.00 |
| sessions.platform_fee | numeric NOT NULL DEFAULT 0.00 |
| sessions.started_at | timestamp with time zone |
| sessions.ended_at | timestamp with time zone |
| sessions.seeker_rating | smallint |
| sessions.seeker_review | text |
| sessions.is_free_trial | boolean NOT NULL DEFAULT false |
| sessions.agora_channel | text |
| sessions.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| sessions.crisis_flagged | boolean NOT NULL DEFAULT false |
| sessions.crisis_flagged_at | timestamp with time zone |
| sessions.seeker_last_seen | timestamp with time zone |
| sessions.listener_last_seen | timestamp with time zone |
| specialty_tags.id | text NOT NULL |
| specialty_tags.label | text NOT NULL |
| specialty_tags.icon | text |
| specialty_tags.sort_order | integer DEFAULT 0 |
| user_blocks.id | uuid NOT NULL DEFAULT gen_random_uuid() |
| user_blocks.blocker_id | uuid NOT NULL |
| user_blocks.blocked_id | uuid NOT NULL |
| user_blocks.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| users.id | uuid NOT NULL DEFAULT uuid_generate_v4() |
| users.phone | text |
| users.name | text |
| users.avatar_url | text |
| users.role | text NOT NULL DEFAULT 'seeker'::text |
| users.wallet_balance | numeric NOT NULL DEFAULT 0.00 |
| users.is_active | boolean NOT NULL DEFAULT true |
| users.created_at | timestamp with time zone NOT NULL DEFAULT now() |
| users.updated_at | timestamp with time zone NOT NULL DEFAULT now() |
| users.gender | text |
| users.is_suspended | boolean NOT NULL DEFAULT false |
| users.fcm_token | text |
| users.is_admin | boolean NOT NULL DEFAULT false |
| users.email | text |
| wallet_transactions.id | uuid NOT NULL DEFAULT uuid_generate_v4() |
| wallet_transactions.user_id | uuid NOT NULL |
| wallet_transactions.amount | numeric NOT NULL |
| wallet_transactions.type | text NOT NULL |
| wallet_transactions.description | text |
| wallet_transactions.reference_id | text |
| wallet_transactions.session_id | uuid |
| wallet_transactions.created_at | timestamp with time zone NOT NULL DEFAULT now() |

### 2_CONSTRAINTS (75 total)

| table constraint | definition |
| --- | --- |
| admin_audit_logs admin_audit_logs_pkey | PRIMARY KEY (id) |
| audit_logs audit_logs_actor_id_fkey | FOREIGN KEY (actor_id) REFERENCES users(id) ON DELETE SET NULL |
| audit_logs audit_logs_pkey | PRIMARY KEY (id) |
| contact_messages contact_messages_pkey | PRIMARY KEY (id) |
| content_flags content_flags_details_check | CHECK ((char_length(details) <= 1000)) |
| content_flags content_flags_pkey | PRIMARY KEY (id) |
| content_flags content_flags_reason_check | CHECK ((reason = ANY (ARRAY['harassment','spam','inappropriate','self_harm','other']))) |
| content_flags content_flags_reporter_id_fkey | FOREIGN KEY (reporter_id) REFERENCES users(id) ON DELETE CASCADE |
| content_flags content_flags_resolved_by_fkey | FOREIGN KEY (resolved_by) REFERENCES users(id) ON DELETE SET NULL |
| content_flags content_flags_session_id_fkey | FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE SET NULL |
| content_flags content_flags_status_check | CHECK ((status = ANY (ARRAY['pending','reviewed','resolved','dismissed']))) |
| content_flags content_flags_target_user_id_fkey | FOREIGN KEY (target_user_id) REFERENCES users(id) ON DELETE SET NULL |
| listener_applications listener_applications_pkey | PRIMARY KEY (id) |
| listener_applications listener_applications_status_check | CHECK ((status = ANY (ARRAY['pending','approved','rejected','needs_resubmission']))) |
| listener_applications listener_applications_user_id_fkey | FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE |
| listener_applications listener_applications_user_id_key | UNIQUE (user_id) |
| listener_earnings earnings_net_positive | CHECK ((net_amount >= 0)) NOT VALID |
| listener_earnings listener_earnings_listener_id_fkey | FOREIGN KEY (listener_id) REFERENCES users(id) ON DELETE CASCADE |
| listener_earnings listener_earnings_pkey | PRIMARY KEY (id) |
| listener_earnings listener_earnings_session_id_fkey | FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE SET NULL |
| listener_earnings listener_earnings_status_check | CHECK ((status = ANY (ARRAY['pending','settled','held','disputed']))) |
| listener_profiles listener_profiles_pkey | PRIMARY KEY (id) |
| listener_profiles listener_profiles_user_id_fkey | FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE |
| listener_profiles listener_profiles_user_id_key | UNIQUE (user_id) |
| listener_profiles lp_rate_range | CHECK (((rate_per_min >= 1) AND (rate_per_min <= 200))) |
| listener_verifications listener_verifications_id_type_check | CHECK ((id_type = ANY (ARRAY['aadhaar','pan','passport','voter_id','driving_license']))) |
| listener_verifications listener_verifications_listener_id_fkey | FOREIGN KEY (listener_id) REFERENCES users(id) ON DELETE CASCADE |
| listener_verifications listener_verifications_listener_id_key | UNIQUE (listener_id) |
| listener_verifications listener_verifications_pkey | PRIMARY KEY (id) |
| listener_verifications listener_verifications_reviewed_by_fkey | FOREIGN KEY (reviewed_by) REFERENCES users(id) |
| listener_verifications listener_verifications_status_check | CHECK ((status = ANY (ARRAY['pending','approved','rejected','needs_resubmission']))) |
| messages messages_pkey | PRIMARY KEY (id) |
| messages messages_sender_id_fkey | FOREIGN KEY (sender_id) REFERENCES users(id) |
| messages messages_session_id_fkey | FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE CASCADE |
| notifications notifications_pkey | PRIMARY KEY (id) |
| notifications notifications_user_id_fkey | FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE |
| payout_requests payout_amount_positive | CHECK ((amount > 0)) NOT VALID |
| payout_requests payout_requests_pkey | PRIMARY KEY (id) |
| payout_requests payout_requests_processed_by_fkey | FOREIGN KEY (processed_by) REFERENCES users(id) |
| payout_requests payout_requests_status_check | CHECK ((status = ANY (ARRAY['pending','approved','processing','paid','completed','rejected']))) |
| payout_requests payout_requests_user_id_fkey | FOREIGN KEY (user_id) REFERENCES users(id) |
| refund_requests refund_amount_positive | CHECK ((amount > 0)) NOT VALID |
| refund_requests refund_requests_pkey | PRIMARY KEY (id) |
| refund_requests refund_requests_status_check | CHECK ((status = ANY (ARRAY['pending','completed','rejected']))) |
| refund_requests refund_requests_user_id_fkey | FOREIGN KEY (user_id) REFERENCES users(id) |
| reports reports_pkey | PRIMARY KEY (id) |
| reports reports_reported_user_id_fkey | FOREIGN KEY (reported_user_id) REFERENCES users(id) ON DELETE SET NULL |
| reports reports_reporter_id_fkey | FOREIGN KEY (reporter_id) REFERENCES users(id) ON DELETE CASCADE |
| reports reports_resolved_by_fkey | FOREIGN KEY (resolved_by) REFERENCES users(id) ON DELETE SET NULL |
| reports reports_session_id_fkey | FOREIGN KEY (session_id) REFERENCES sessions(id) ON DELETE SET NULL |
| reports reports_status_check | CHECK ((status = ANY (ARRAY['pending','reviewed','resolved','dismissed']))) |
| sessions sessions_amount_held_non_negative | CHECK ((amount_held >= 0)) |
| sessions sessions_duration_mins_check | CHECK ((duration_mins = ANY (ARRAY[5, 15, 30, 45]))) |
| sessions sessions_listener_id_fkey | FOREIGN KEY (listener_id) REFERENCES users(id) |
| sessions sessions_pkey | PRIMARY KEY (id) |
| sessions sessions_platform_fee_nonneg | CHECK ((platform_fee >= 0)) |
| sessions sessions_seeker_id_fkey | FOREIGN KEY (seeker_id) REFERENCES users(id) |
| sessions sessions_seeker_rating_check | CHECK (((seeker_rating >= 1) AND (seeker_rating <= 5))) |
| sessions sessions_session_type_check | CHECK ((session_type = ANY (ARRAY['text','voice']))) |
| sessions sessions_status_check | CHECK ((status = ANY (ARRAY['pending','active','completed','cancelled']))) |
| specialty_tags specialty_tags_pkey | PRIMARY KEY (id) |
| user_blocks user_blocks_blocked_id_fkey | FOREIGN KEY (blocked_id) REFERENCES users(id) ON DELETE CASCADE |
| user_blocks user_blocks_blocker_id_blocked_id_key | UNIQUE (blocker_id, blocked_id) |
| user_blocks user_blocks_blocker_id_fkey | FOREIGN KEY (blocker_id) REFERENCES users(id) ON DELETE CASCADE |
| user_blocks user_blocks_check | CHECK ((blocker_id <> blocked_id)) |
| user_blocks user_blocks_pkey | PRIMARY KEY (id) |
| users users_gender_check | CHECK ((gender = ANY (ARRAY['male','female','other','prefer_not_to_say']))) |
| users users_phone_key | UNIQUE (phone) |
| users users_pkey | PRIMARY KEY (id) |
| users users_role_check | CHECK ((role = ANY (ARRAY['seeker','listener','admin']))) |
| wallet_balance_non_negative | CHECK ((wallet_balance >= 0)) NOT VALID |
| wallet_transactions wallet_transactions_pkey | PRIMARY KEY (id) |
| wallet_transactions wallet_transactions_session_id_fkey | FOREIGN KEY (session_id) REFERENCES sessions(id) |
| wallet_transactions wallet_transactions_type_check | CHECK ((type = ANY (ARRAY['credit','debit','refund']))) |
| wallet_transactions wallet_transactions_user_id_fkey | FOREIGN KEY (user_id) REFERENCES users(id) |

### 3_INDEXES (56 total)

| table index | definition |
| --- | --- |
| admin_audit_logs admin_audit_logs_pkey | CREATE UNIQUE INDEX admin_audit_logs_pkey ON public.admin_audit_logs USING btree (id) |
| admin_audit_logs idx_audit_admin | CREATE INDEX idx_audit_admin ON public.admin_audit_logs USING btree (admin_id, created_at DESC) |
| audit_logs audit_logs_action_idx | CREATE INDEX audit_logs_action_idx ON public.audit_logs USING btree (action) |
| audit_logs audit_logs_actor_idx | CREATE INDEX audit_logs_actor_idx ON public.audit_logs USING btree (actor_id) |
| audit_logs audit_logs_pkey | CREATE UNIQUE INDEX audit_logs_pkey ON public.audit_logs USING btree (id) |
| audit_logs audit_logs_time_idx | CREATE INDEX audit_logs_time_idx ON public.audit_logs USING btree (created_at DESC) |
| contact_messages contact_messages_pkey | CREATE UNIQUE INDEX contact_messages_pkey ON public.contact_messages USING btree (id) |
| content_flags content_flags_pkey | CREATE UNIQUE INDEX content_flags_pkey ON public.content_flags USING btree (id) |
| content_flags content_flags_reporter_idx | CREATE INDEX content_flags_reporter_idx ON public.content_flags USING btree (reporter_id) |
| content_flags content_flags_status_idx | CREATE INDEX content_flags_status_idx ON public.content_flags USING btree (status) |
| content_flags content_flags_target_idx | CREATE INDEX content_flags_target_idx ON public.content_flags USING btree (target_user_id) |
| listener_applications listener_applications_pkey | CREATE UNIQUE INDEX listener_applications_pkey ON public.listener_applications USING btree (id) |
| listener_applications listener_applications_user_id_key | CREATE UNIQUE INDEX listener_applications_user_id_key ON public.listener_applications USING btree (user_id) |
| listener_earnings listener_earnings_listener_idx | CREATE INDEX listener_earnings_listener_idx ON public.listener_earnings USING btree (listener_id, created_at DESC) |
| listener_earnings listener_earnings_pkey | CREATE UNIQUE INDEX listener_earnings_pkey ON public.listener_earnings USING btree (id) |
| listener_earnings listener_earnings_session_idx | CREATE INDEX listener_earnings_session_idx ON public.listener_earnings USING btree (session_id) |
| listener_profiles idx_listener_profiles_languages | CREATE INDEX idx_listener_profiles_languages ON public.listener_profiles USING gin (languages_spoken) |
| listener_profiles idx_lp_approved | CREATE INDEX idx_lp_approved ON public.listener_profiles USING btree (is_approved, is_available, rating DESC) |
| listener_profiles idx_lp_languages | CREATE INDEX idx_lp_languages ON public.listener_profiles USING gin (languages_spoken) |
| listener_profiles idx_lp_suspended | CREATE INDEX idx_lp_suspended ON public.listener_profiles USING btree (is_suspended) WHERE (is_suspended = true) |
| listener_profiles idx_lp_tags | CREATE INDEX idx_lp_tags ON public.listener_profiles USING gin (specialty_tags) |
| listener_profiles listener_profiles_pkey | CREATE UNIQUE INDEX listener_profiles_pkey ON public.listener_profiles USING btree (id) |
| listener_profiles listener_profiles_user_id_key | CREATE UNIQUE INDEX listener_profiles_user_id_key ON public.listener_profiles USING btree (user_id) |
| listener_verifications listener_verifications_listener_id_key | CREATE UNIQUE INDEX listener_verifications_listener_id_key ON public.listener_verifications USING btree (listener_id) |
| listener_verifications listener_verifications_pkey | CREATE UNIQUE INDEX listener_verifications_pkey ON public.listener_verifications USING btree (id) |
| listener_verifications listener_verifications_status_idx | CREATE INDEX listener_verifications_status_idx ON public.listener_verifications USING btree (status) |
| messages idx_messages_session_created | CREATE INDEX idx_messages_session_created ON public.messages USING btree (session_id, created_at) |
| messages idx_messages_session_id | CREATE INDEX idx_messages_session_id ON public.messages USING btree (session_id) |
| messages messages_pkey | CREATE UNIQUE INDEX messages_pkey ON public.messages USING btree (id) |
| notifications notifications_pkey | CREATE UNIQUE INDEX notifications_pkey ON public.notifications USING btree (id) |
| notifications notifications_user_unread_idx | CREATE INDEX notifications_user_unread_idx ON public.notifications USING btree (user_id, is_read, created_at DESC) |
| payout_requests payout_requests_pkey | CREATE UNIQUE INDEX payout_requests_pkey ON public.payout_requests USING btree (id) |
| refund_requests refund_requests_pkey | CREATE UNIQUE INDEX refund_requests_pkey ON public.refund_requests USING btree (id) |
| reports reports_pkey | CREATE UNIQUE INDEX reports_pkey ON public.reports USING btree (id) |
| reports reports_reporter_idx | CREATE INDEX reports_reporter_idx ON public.reports USING btree (reporter_id) |
| reports reports_status_idx | CREATE INDEX reports_status_idx ON public.reports USING btree (status) |
| sessions idx_sessions_listener_active | CREATE INDEX idx_sessions_listener_active ON public.sessions USING btree (listener_id, status) WHERE (status = 'active') |
| sessions idx_sessions_listener_id | CREATE INDEX idx_sessions_listener_id ON public.sessions USING btree (listener_id) |
| sessions idx_sessions_seeker_id | CREATE INDEX idx_sessions_seeker_id ON public.sessions USING btree (seeker_id) |
| sessions idx_sessions_started_at | CREATE INDEX idx_sessions_started_at ON public.sessions USING btree (started_at DESC) |
| sessions idx_sessions_status | CREATE INDEX idx_sessions_status ON public.sessions USING btree (status) |
| sessions sessions_crisis_idx | CREATE INDEX sessions_crisis_idx ON public.sessions USING btree (crisis_flagged) WHERE (crisis_flagged = true) |
| sessions sessions_listener_one_active | CREATE UNIQUE INDEX sessions_listener_one_active ON public.sessions USING btree (listener_id) WHERE ((status = 'active') AND (is_free_trial = false)) |
| sessions sessions_pkey | CREATE UNIQUE INDEX sessions_pkey ON public.sessions USING btree (id) |
| sessions sessions_seeker_one_active | CREATE UNIQUE INDEX sessions_seeker_one_active ON public.sessions USING btree (seeker_id) WHERE (status = 'active') |
| specialty_tags specialty_tags_pkey | CREATE UNIQUE INDEX specialty_tags_pkey ON public.specialty_tags USING btree (id) |
| user_blocks user_blocks_blocked_idx | CREATE INDEX user_blocks_blocked_idx ON public.user_blocks USING btree (blocked_id) |
| user_blocks user_blocks_blocker_id_blocked_id_key | CREATE UNIQUE INDEX user_blocks_blocker_id_blocked_id_key ON public.user_blocks USING btree (blocker_id, blocked_id) |
| user_blocks user_blocks_blocker_idx | CREATE INDEX user_blocks_blocker_idx ON public.user_blocks USING btree (blocker_id) |
| user_blocks user_blocks_pkey | CREATE UNIQUE INDEX user_blocks_pkey ON public.user_blocks USING btree (id) |
| users idx_users_fcm_token | CREATE INDEX idx_users_fcm_token ON public.users USING btree (id) WHERE (fcm_token IS NOT NULL) |
| users users_phone_key | CREATE UNIQUE INDEX users_phone_key ON public.users USING btree (phone) |
| users users_pkey | CREATE UNIQUE INDEX users_pkey ON public.users USING btree (id) |
| wallet_transactions idx_wallet_txns_user_id | CREATE INDEX idx_wallet_txns_user_id ON public.wallet_transactions USING btree (user_id) |
| wallet_transactions wallet_transactions_pkey | CREATE UNIQUE INDEX wallet_transactions_pkey ON public.wallet_transactions USING btree (id) |
| wallet_transactions wallet_txn_payment_id_unique | CREATE UNIQUE INDEX wallet_txn_payment_id_unique ON public.wallet_transactions USING btree (reference_id) WHERE (reference_id IS NOT NULL) |

> ✅ `wallet_txn_payment_id_unique` confirmed present (added 2026-06-11) —
> `credit_wallet_idempotent`'s `ON CONFLICT (reference_id) WHERE reference_id
> IS NOT NULL` now works; recharge double-credits are prevented.

### 4_RLS_POLICIES (45 total)

| table policy | definition |
| --- | --- |
| admin_audit_logs admin_read_audit_logs | SELECT TO public USING (EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND (role = 'admin' OR is_admin = true))) |
| contact_messages contact_insert | INSERT TO public WITH CHECK (char_length(name) BETWEEN 1 AND 200 AND char_length(message) BETWEEN 1 AND 5000) |
| content_flags admin_all_flags | ALL TO public USING (EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND (role = 'admin' OR is_admin = true))) |
| content_flags users_insert_content_flags | INSERT TO public WITH CHECK (reporter_id = auth.uid()) |
| content_flags users_select_own_flags | SELECT TO public USING (reporter_id = auth.uid()) |
| listener_applications la_own | ALL TO public USING (auth.uid() = user_id) |
| listener_earnings listener_own_earnings | SELECT TO public USING (auth.uid() = listener_id) |
| listener_profiles listener_profiles_own_write | ALL TO public USING (auth.uid() = user_id) |
| listener_profiles lp_insert_own | INSERT TO public WITH CHECK (auth.uid() = user_id) |
| listener_profiles lp_select_approved | SELECT TO public USING ((is_approved = true) OR (auth.uid() = user_id)) |
| listener_profiles lp_update_own | UPDATE TO public USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id) |
| listener_verifications admin_all_verifications | ALL TO public USING (EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND (role = 'admin' OR is_admin = true))) |
| listener_verifications listener_own_verification_insert | INSERT TO public WITH CHECK (auth.uid() = listener_id) |
| listener_verifications listener_own_verification_select | SELECT TO public USING (auth.uid() = listener_id) |
| listener_verifications listener_own_verification_update | UPDATE TO public USING (auth.uid() = listener_id) WITH CHECK (auth.uid() = listener_id) |
| messages messages_insert | INSERT TO public WITH CHECK (auth.uid() = sender_id AND participant of session AND session status = 'active') |
| messages messages_participant_insert | INSERT TO public WITH CHECK (participant of session — NO active-status requirement, NO sender_id check) |
| messages messages_select_admin | SELECT TO public USING (EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND (role = 'admin' OR is_admin = true))) |
| messages messages_select_participants | SELECT TO public USING (EXISTS (SELECT 1 FROM sessions WHERE ...)) |
| notifications notif_select_own | SELECT TO public USING (auth.uid() = user_id) |
| notifications notif_update_own | UPDATE TO public USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id) |
| payout_requests payout_insert_own | INSERT TO public WITH CHECK (auth.uid() = user_id AND status = 'pending' AND amount > 0) |
| payout_requests payout_select_own | SELECT TO public USING (auth.uid() = user_id) |
| refund_requests refund_insert_own | INSERT TO public WITH CHECK (auth.uid() = user_id AND status = 'pending' AND amount > 0) |
| refund_requests refund_select_own | SELECT TO public USING (auth.uid() = user_id) |
| reports users_insert_reports | INSERT TO public WITH CHECK (reporter_id = auth.uid()) |
| reports users_select_own_reports | SELECT TO public USING (reporter_id = auth.uid()) |
| sessions sessions_insert | INSERT TO public WITH CHECK (auth.uid() = seeker_id) |
| sessions sessions_own | SELECT TO public USING (auth.uid() = seeker_id OR auth.uid() = listener_id) |
| sessions sessions_participant_select | SELECT TO public USING (seeker_id = auth.uid() OR listener_id = auth.uid()) |
| sessions sessions_read_participants | SELECT TO public USING (seeker_id = auth.uid() OR listener_id = auth.uid() OR EXISTS (admin check)) |
| sessions sessions_seeker_rating_update | UPDATE TO public USING (auth.uid() = seeker_id AND status = 'completed') WITH CHECK (auth.uid() = seeker_id) |
| specialty_tags specialty_tags_read_all | SELECT TO public USING (true) |
| user_blocks users_delete_own_blocks | DELETE TO public USING (blocker_id = auth.uid()) |
| user_blocks users_insert_own_blocks | INSERT TO public WITH CHECK (blocker_id = auth.uid()) |
| user_blocks users_select_own_blocks | SELECT TO public USING (blocker_id = auth.uid()) |
| users users_insert_own | INSERT TO public WITH CHECK (auth.uid() = id) |
| users users_listener_public_read | SELECT TO public USING (id IN (SELECT user_id FROM listener_profiles WHERE is_approved = true)) |
| users users_select_listener_public | SELECT TO public USING (id IN (SELECT user_id FROM listener_profiles WHERE is_approved = true AND is_active = true)) |
| users users_select_own | SELECT TO public USING (auth.uid() = id) |
| users users_select_session_participant | SELECT TO public USING (id IN (SELECT listener_id FROM sessions WHERE seeker_id = auth.uid() UNION SELECT seeker_id FROM sessions WHERE listener_id = auth.uid())) |
| users users_update_own | UPDATE TO public USING (auth.uid() = id) |
| wallet_transactions wallet_own | SELECT TO public USING (auth.uid() = user_id) |
| wallet_transactions wallet_transactions_select_own | SELECT TO public USING (auth.uid() = user_id) |
| wallet_transactions wallet_txns_own | SELECT TO public USING (auth.uid() = user_id) |

> ⚠️ Duplicate policies noted:
> - `wallet_transactions`: 3 identical SELECT policies (`wallet_own`, `wallet_transactions_select_own`, `wallet_txns_own`)
> - `sessions`: 3 overlapping SELECT policies (`sessions_own`, `sessions_participant_select`, `sessions_read_participants`)
> - `users`: 2 identical listener SELECT policies (`users_select_listener_public`, `users_listener_public_read`)
> - `messages`: 2 INSERT policies (`messages_insert`, `messages_participant_insert`)
> These are harmless (OR semantics) but should be cleaned up.

### 5_RLS_ENABLED (18 tables, all ENABLED)

| table | status |
| --- | --- |
| admin_audit_logs | ENABLED |
| audit_logs | ENABLED |
| contact_messages | ENABLED |
| content_flags | ENABLED |
| listener_applications | ENABLED |
| listener_earnings | ENABLED |
| listener_profiles | ENABLED |
| listener_verifications | ENABLED |
| messages | ENABLED |
| notifications | ENABLED |
| payout_requests | ENABLED |
| refund_requests | ENABLED |
| reports | ENABLED |
| sessions | ENABLED |
| specialty_tags | ENABLED |
| user_blocks | ENABLED |
| users | ENABLED |
| wallet_transactions | ENABLED |

### 6_TRIGGERS (8 total)

| table trigger | definition |
| --- | --- |
| listener_applications la_guard_status | BEFORE UPDATE → guard_listener_app_status() |
| listener_profiles listener_profiles_updated_at | BEFORE UPDATE → handle_updated_at() |
| listener_profiles lp_guard_privileged | BEFORE UPDATE → guard_lp_privileged_cols() |
| listener_verifications verif_guard_status | BEFORE UPDATE → guard_verif_status() |
| users users_guard_insert | BEFORE INSERT → guard_users_insert_cols() |
| users users_guard_privileged | BEFORE UPDATE → guard_users_privileged_cols() |
| users users_set_updated_at | BEFORE UPDATE → set_updated_at() |
| users users_updated_at | BEFORE UPDATE → handle_updated_at() |

> ⚠️ Two `updated_at` triggers on `users` (`users_set_updated_at` + `users_updated_at`) — both fire on every update. Harmless but redundant.

### 7_FUNCTIONS (15 total)

All functions have `config: search_path=public, pg_temp` (search-path hardening confirmed).

| function | security |
| --- | --- |
| complete_session(p_session_id uuid) | SECURITY DEFINER returns void |
| create_session(p_seeker_id uuid, p_listener_id uuid, p_session_type text, p_duration_mins integer, p_amount_held numeric, p_platform_fee numeric, p_is_free_trial boolean, p_agora_channel text) | SECURITY DEFINER returns uuid |
| credit_wallet(p_user_id uuid, p_amount integer) | SECURITY DEFINER returns void |
| credit_wallet_idempotent(p_user_id uuid, p_amount integer, p_reference_id text, p_description text) | SECURITY DEFINER returns integer |
| deduct_wallet(p_user_id uuid, p_amount integer) | SECURITY DEFINER returns void |
| guard_listener_app_status() | SECURITY DEFINER returns trigger |
| guard_lp_privileged_cols() | SECURITY DEFINER returns trigger |
| guard_users_insert_cols() | SECURITY DEFINER returns trigger |
| guard_users_privileged_cols() | SECURITY DEFINER returns trigger |
| guard_verif_status() | SECURITY DEFINER returns trigger |
| handle_new_user() | SECURITY DEFINER returns trigger |
| handle_updated_at() | returns trigger |
| is_service_role() | returns boolean |
| set_updated_at() | SECURITY DEFINER returns trigger |
| start_session(p_session_id uuid, p_seeker_id uuid, p_amount numeric) | SECURITY DEFINER returns void |

## Key facts derived from the live DB (not from migrations)

- `users.wallet_balance` is **numeric**, not integer
- `users.phone` is **nullable** since migration 033 (was NOT NULL undocumented)
- `users.phone` has UNIQUE constraint `users_phone_key` — reconcile stale rows before new sign-ups
- `public.users.id` has **no FK to auth.users** → deleting an auth user leaves an orphan `public.users` row; phone reconciliation in `lib/ensure-user-row.ts` handles the resulting `users_phone_key` conflicts
- `admin_audit_logs.admin_id` is **nullable** (fixed 2026-06-11) — password-auth admin actions now log with `admin_id = NULL`
- Two duplicate `updated_at` triggers on `users` (`set_updated_at` + `handle_updated_at`) — both fire on every UPDATE; harmless but both run
- `@supabase/ssr` is **v0.3.0**: cookie API is get/set/remove ONLY (`getAll`/`setAll` silently no-op — caused the global login-redirect bug)
- `wallet_txn_payment_id_unique` partial unique index on `wallet_transactions.reference_id` is present (added 2026-06-11) — `credit_wallet_idempotent` is now truly idempotent
- Admin RLS policies check `role = 'admin' OR is_admin = true` (both columns honored)
- `users_select_listener_public` requires `is_approved AND is_active`; the older duplicate `users_listener_public_read` only requires `is_approved` — net effect: approved-but-inactive listeners are still publicly readable via the older policy
- `listener_earnings.status` defaults to `'settled'` (not `'pending'`); new earnings are immediately settled
- `payout_requests` column is `user_id` (not `listener_id`) — code must use `user_id`
- `sessions_duration_mins_check` includes 45 — confirmed fixed
- `sessions` has `crisis_flagged` and `crisis_flagged_at` columns — confirmed present
- Both `reports` table AND `content_flags` table exist — they serve the same purpose; use `content_flags` (older, more RLS policies) for admin moderation queue
