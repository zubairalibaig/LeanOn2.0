-- 051_refund_dedupe_and_reactions.sql
-- MANUAL: run in the Supabase SQL Editor, then refresh db/LIVE_SCHEMA.md.
--
-- Part A — stop duplicate pending refund requests (double cash refund)
-- Part B — message reactions (supportive only)

-- ─────────────────────────────────────────────────────────────────────────────
-- PART A: one pending refund request per user, enforced by the DB
--
-- /api/refund guarded against duplicates with a read-then-insert, which is not
-- atomic: two concurrent submissions (double-click, two tabs) both saw zero
-- pending rows and both inserted. The admin then approved both, and because
-- both rows carry the SAME razorpay_payment_id the gateway refunded the amount
-- twice against one payment — real cash out for wallet value that only existed
-- once. Rate limiting did not help: it is per-container in serverless.
--
-- A partial unique index makes the second insert impossible. The route now
-- catches 23505 and returns the normal "already pending" message.
-- Completed/rejected rows are excluded, so a user can request again later.

-- Safety: collapse any pre-existing duplicates before adding the index, keeping
-- the OLDEST pending row per user (the one whose wallet hold actually landed).
UPDATE public.refund_requests r
   SET status = 'rejected',
       admin_notes = COALESCE(admin_notes, '') || ' [auto-closed duplicate pending request]'
 WHERE r.status = 'pending'
   AND EXISTS (
     SELECT 1 FROM public.refund_requests older
      WHERE older.user_id = r.user_id
        AND older.status  = 'pending'
        AND (older.created_at < r.created_at
             OR (older.created_at = r.created_at AND older.id < r.id))
   );

CREATE UNIQUE INDEX IF NOT EXISTS refund_requests_one_pending_per_user
  ON public.refund_requests (user_id)
  WHERE status = 'pending';

-- ─────────────────────────────────────────────────────────────────────────────
-- PART B: message reactions
--
-- Deliberately a separate table rather than a JSONB column on `messages`:
-- a JSONB blob needs read-modify-write, which races when both people in a
-- session react at the same moment. A row per (message, user) with a unique
-- constraint makes toggling atomic and idempotent.
--
-- `emoji` is CHECK-constrained to a small supportive set. See the API route for
-- the reasoning: this is an emotional-support product, so a thumbs-down on
-- someone's vulnerable message is a wellbeing risk, not a feature. The set is
-- enforced in the DB as well as the API so it cannot drift.

CREATE TABLE IF NOT EXISTS public.message_reactions (
  id         uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id uuid        NOT NULL REFERENCES public.messages(id) ON DELETE CASCADE,
  user_id    uuid        NOT NULL,
  emoji      text        NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT message_reactions_emoji_chk CHECK (emoji IN ('❤️','🙏','🫂','😊')),
  -- One reaction per person per message; re-reacting replaces, tapping the same
  -- one removes. Gives WhatsApp-style behaviour without a race.
  CONSTRAINT message_reactions_unique_per_user UNIQUE (message_id, user_id)
);

CREATE INDEX IF NOT EXISTS message_reactions_message_idx
  ON public.message_reactions (message_id);

ALTER TABLE public.message_reactions ENABLE ROW LEVEL SECURITY;

-- Read: only the two participants of the parent session.
-- Writes go through /api/messages/react using the service-role client, so no
-- INSERT/UPDATE/DELETE policy is granted here — mirroring the lesson from
-- migration 050, where an over-broad write policy on `sessions` became a
-- money-minting hole. Least privilege by default.
DROP POLICY IF EXISTS "message_reactions_select_participant" ON public.message_reactions;
CREATE POLICY "message_reactions_select_participant"
  ON public.message_reactions FOR SELECT
  USING (
    EXISTS (
      SELECT 1
        FROM public.messages m
        JOIN public.sessions s ON s.id = m.session_id
       WHERE m.id = message_reactions.message_id
         AND (s.seeker_id = auth.uid() OR s.listener_id = auth.uid())
    )
  );

REVOKE INSERT, UPDATE, DELETE ON public.message_reactions FROM authenticated, anon;

-- Realtime so a reaction appears instantly for the other person (idempotent).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables
     WHERE pubname = 'supabase_realtime' AND tablename = 'message_reactions'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.message_reactions;
  END IF;
END $$;

ALTER TABLE public.message_reactions REPLICA IDENTITY FULL;
