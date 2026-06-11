-- ================================================================
-- LIVE SCHEMA DUMP — run in Supabase SQL Editor, export result as
-- Markdown, and paste it into db/LIVE_SCHEMA.md (replace the body).
--
-- Re-run after ANY dashboard change (column, constraint, policy,
-- trigger) or after applying a migration. db/LIVE_SCHEMA.md is the
-- ground truth used to validate code — migrations files are NOT
-- trusted as a description of production.
-- ================================================================
SELECT section, object, definition FROM (
  SELECT '1_COLUMNS' AS section,
         table_name || '.' || column_name AS object,
         data_type
           || CASE WHEN is_nullable = 'NO' THEN ' NOT NULL' ELSE '' END
           || COALESCE(' DEFAULT ' || column_default, '') AS definition,
         table_name AS o1, ordinal_position AS o2
  FROM information_schema.columns
  WHERE table_schema = 'public'

  UNION ALL
  SELECT '2_CONSTRAINTS',
         conrelid::regclass::text || ' ' || conname,
         pg_get_constraintdef(oid),
         conrelid::regclass::text, 0
  FROM pg_constraint
  WHERE connamespace = 'public'::regnamespace

  UNION ALL
  SELECT '3_INDEXES',
         tablename || ' ' || indexname,
         indexdef,
         tablename, 0
  FROM pg_indexes
  WHERE schemaname = 'public'

  UNION ALL
  SELECT '4_RLS_POLICIES',
         tablename || ' ' || policyname,
         cmd || ' TO ' || array_to_string(roles, ',')
           || ' USING (' || COALESCE(qual, '-') || ')'
           || COALESCE(' WITH CHECK (' || with_check || ')', ''),
         tablename, 0
  FROM pg_policies
  WHERE schemaname = 'public'

  UNION ALL
  SELECT '5_RLS_ENABLED',
         c.relname,
         CASE WHEN c.relrowsecurity THEN 'ENABLED' ELSE 'DISABLED — WARNING' END,
         c.relname, 0
  FROM pg_class c
  JOIN pg_namespace n ON n.oid = c.relnamespace
  WHERE n.nspname = 'public' AND c.relkind = 'r'

  UNION ALL
  SELECT '6_TRIGGERS',
         tgrelid::regclass::text || ' ' || tgname,
         pg_get_triggerdef(oid),
         tgrelid::regclass::text, 0
  FROM pg_trigger
  WHERE NOT tgisinternal
    AND tgrelid IN (SELECT oid FROM pg_class WHERE relnamespace = 'public'::regnamespace)

  UNION ALL
  SELECT '7_FUNCTIONS',
         p.proname || '(' || pg_get_function_identity_arguments(p.oid) || ')',
         CASE WHEN p.prosecdef THEN 'SECURITY DEFINER ' ELSE '' END
           || 'returns ' || pg_get_function_result(p.oid)
           || COALESCE(' | config: ' || array_to_string(p.proconfig, '; '), ''),
         p.proname, 0
  FROM pg_proc p
  WHERE p.pronamespace = 'public'::regnamespace AND p.prokind = 'f'
) x
ORDER BY section, o1, o2, object;
