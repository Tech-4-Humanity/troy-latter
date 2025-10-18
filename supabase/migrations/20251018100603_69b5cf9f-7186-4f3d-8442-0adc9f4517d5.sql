-- Phase 1: CV Ingestion Pipeline - Database Schema

-- Ingestion log to track all parsing activities
CREATE TABLE IF NOT EXISTS public.ingestion_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_type VARCHAR(50) NOT NULL,
  source_file VARCHAR(200) NOT NULL,
  skills_extracted INT DEFAULT 0,
  new_skills_discovered INT DEFAULT 0,
  existing_skills_updated INT DEFAULT 0,
  star_examples_added INT DEFAULT 0,
  status VARCHAR(50) DEFAULT 'processing',
  error_message TEXT,
  processed_at TIMESTAMP DEFAULT NOW()
);

-- Pending skills for manual review
CREATE TABLE IF NOT EXISTS public.pending_skills_review (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  skill_name TEXT NOT NULL,
  suggested_rating INT,
  suggested_domain TEXT,
  suggested_trend VARCHAR(10),
  source_document TEXT,
  context TEXT,
  approved BOOLEAN DEFAULT FALSE,
  reviewed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Extend cv_profiles to include missing columns
DO $$ 
BEGIN
  -- Add experience JSONB column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'cv_profiles' 
    AND column_name = 'experience'
  ) THEN
    ALTER TABLE public.cv_profiles ADD COLUMN experience JSONB DEFAULT '[]'::jsonb;
  END IF;

  -- Add skills JSONB column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'cv_profiles' 
    AND column_name = 'skills'
  ) THEN
    ALTER TABLE public.cv_profiles ADD COLUMN skills JSONB DEFAULT '[]'::jsonb;
  END IF;

  -- Add achievements JSONB column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'cv_profiles' 
    AND column_name = 'achievements'
  ) THEN
    ALTER TABLE public.cv_profiles ADD COLUMN achievements JSONB DEFAULT '[]'::jsonb;
  END IF;

  -- Add education JSONB column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'cv_profiles' 
    AND column_name = 'education'
  ) THEN
    ALTER TABLE public.cv_profiles ADD COLUMN education JSONB DEFAULT '[]'::jsonb;
  END IF;

  -- Add full_name column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'cv_profiles' 
    AND column_name = 'full_name'
  ) THEN
    ALTER TABLE public.cv_profiles ADD COLUMN full_name TEXT;
  END IF;

  -- Add professional_title column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'cv_profiles' 
    AND column_name = 'professional_title'
  ) THEN
    ALTER TABLE public.cv_profiles ADD COLUMN professional_title TEXT;
  END IF;

  -- Add summary column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'cv_profiles' 
    AND column_name = 'summary'
  ) THEN
    ALTER TABLE public.cv_profiles ADD COLUMN summary TEXT;
  END IF;
END $$;

-- Extend cv_master to include parsed_data JSONB
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'cv_master' 
    AND column_name = 'parsed_data'
  ) THEN
    ALTER TABLE public.cv_master ADD COLUMN parsed_data JSONB DEFAULT '{}'::jsonb;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'cv_master' 
    AND column_name = 'source_files'
  ) THEN
    ALTER TABLE public.cv_master ADD COLUMN source_files TEXT[] DEFAULT ARRAY[]::TEXT[];
  END IF;
END $$;

-- Enable RLS on new tables
ALTER TABLE public.ingestion_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pending_skills_review ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read ingestion_log" ON public.ingestion_log
  FOR SELECT USING (true);

CREATE POLICY "Public read pending_skills" ON public.pending_skills_review
  FOR SELECT USING (true);

-- Create policies for admin write access
CREATE POLICY "Admin write ingestion_log" ON public.ingestion_log
  FOR ALL USING (true);

CREATE POLICY "Admin write pending_skills" ON public.pending_skills_review
  FOR ALL USING (true);

-- Create trigger to update cv_profiles updated_at
CREATE OR REPLACE FUNCTION public.update_cv_profiles_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_cv_profiles_updated_at ON public.cv_profiles;
CREATE TRIGGER update_cv_profiles_updated_at
  BEFORE UPDATE ON public.cv_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_cv_profiles_timestamp();