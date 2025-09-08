
-- 1) Add missing "tags" column to knowledge_documents (safe if already present)
ALTER TABLE public.knowledge_documents
  ADD COLUMN IF NOT EXISTS tags text[] DEFAULT '{}'::text[];

-- 2) Helpful indexes
CREATE INDEX IF NOT EXISTS idx_knowledge_documents_source_type
  ON public.knowledge_documents (source_type);

CREATE INDEX IF NOT EXISTS idx_knowledge_documents_created_at
  ON public.knowledge_documents (created_at DESC);

-- GIN index for array search/filter on tags
CREATE INDEX IF NOT EXISTS idx_knowledge_documents_tags_gin
  ON public.knowledge_documents USING GIN (tags);

-- 3) RLS policies (idempotent where possible)

-- Ensure the table has RLS enabled
ALTER TABLE public.knowledge_documents ENABLE ROW LEVEL SECURITY;

-- Public read access (used by the client-side history query)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'knowledge_documents'
      AND policyname = 'Public read access to knowledge documents'
  ) THEN
    CREATE POLICY "Public read access to knowledge documents"
      ON public.knowledge_documents
      FOR SELECT
      TO authenticated, anon, service_role
      USING (true);
  END IF;
END $$;

-- Service role full access (edge function uses service role to save)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'knowledge_documents'
      AND policyname = 'Service role full access to knowledge documents'
  ) THEN
    CREATE POLICY "Service role full access to knowledge documents"
      ON public.knowledge_documents
      FOR ALL
      TO service_role
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;
