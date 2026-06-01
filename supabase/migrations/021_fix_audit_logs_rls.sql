-- Fix: admin_audit_logs was created without RLS, making it readable by any
-- authenticated user via the anon/user Supabase client.
-- Service role bypasses RLS so existing admin API routes continue to work.

ALTER TABLE public.admin_audit_logs ENABLE ROW LEVEL SECURITY;

-- Only admins may read audit logs; no direct write access (service role only)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'admin_audit_logs' AND policyname = 'admin_read_audit_logs'
  ) THEN
    CREATE POLICY "admin_read_audit_logs" ON public.admin_audit_logs
      FOR SELECT
      USING (EXISTS (
        SELECT 1 FROM public.users WHERE id = auth.uid() AND role = 'admin'
      ));
  END IF;
END $$;
