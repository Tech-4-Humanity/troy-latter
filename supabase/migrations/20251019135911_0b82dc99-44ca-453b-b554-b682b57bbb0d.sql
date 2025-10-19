-- Phase 1: Self-Learning CV System Database Extensions
-- Extends existing tables and creates metrics tracking

-- 1. Extend Skills Matrix with auto-learning fields
ALTER TABLE "175+ Skills Matrix" 
ADD COLUMN IF NOT EXISTS auto_weight NUMERIC(5,2) DEFAULT 0.8,
ADD COLUMN IF NOT EXISTS last_jd_match TEXT,
ADD COLUMN IF NOT EXISTS market_demand_score NUMERIC(5,2) DEFAULT 50.0,
ADD COLUMN IF NOT EXISTS last_updated TIMESTAMPTZ DEFAULT NOW();

-- 2. Add extraction tracking to job_descriptions
ALTER TABLE job_descriptions 
ADD COLUMN IF NOT EXISTS extracted_skills JSONB,
ADD COLUMN IF NOT EXISTS skill_extraction_status TEXT DEFAULT 'pending';

-- 3. Add skills usage tracking to cv_generations
ALTER TABLE cv_generations 
ADD COLUMN IF NOT EXISTS skills_used JSONB,
ADD COLUMN IF NOT EXISTS skill_alignment_score NUMERIC(5,2);

-- 4. Create Skills Metrics table (feedback loop logger)
CREATE TABLE IF NOT EXISTS skills_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id TEXT NOT NULL,
  skill_name TEXT NOT NULL,
  appeared_in_jd BOOLEAN DEFAULT false,
  present_in_cv BOOLEAN DEFAULT false,
  action TEXT CHECK (action IN ('added', 'touched', 'ignored', 'promoted', 'declined')),
  confidence_score NUMERIC(5,2) CHECK (confidence_score >= 0 AND confidence_score <= 100),
  alignment_delta NUMERIC(5,2),
  trend_delta TEXT,
  old_score NUMERIC(5,2),
  new_score NUMERIC(5,2),
  timestamp TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_skills_metrics_job ON skills_metrics(job_id);
CREATE INDEX IF NOT EXISTS idx_skills_metrics_skill ON skills_metrics(skill_name);
CREATE INDEX IF NOT EXISTS idx_skills_metrics_timestamp ON skills_metrics(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_jd_extraction_status ON job_descriptions(skill_extraction_status);
CREATE INDEX IF NOT EXISTS idx_skills_last_updated ON "175+ Skills Matrix"(last_updated DESC);

-- 6. Enable RLS on skills_metrics
ALTER TABLE skills_metrics ENABLE ROW LEVEL SECURITY;

-- 7. Add RLS policies for skills_metrics
CREATE POLICY "Public read skills metrics"
ON skills_metrics FOR SELECT
TO public
USING (true);

CREATE POLICY "Admin write skills metrics"
ON skills_metrics FOR ALL
TO public
USING (has_role('admin'::app_role))
WITH CHECK (has_role('admin'::app_role));

-- 8. Create function to auto-update last_updated timestamp
CREATE OR REPLACE FUNCTION update_skills_matrix_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_updated = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 9. Create trigger for auto-updating timestamps
DROP TRIGGER IF EXISTS trigger_update_skills_timestamp ON "175+ Skills Matrix";
CREATE TRIGGER trigger_update_skills_timestamp
  BEFORE UPDATE ON "175+ Skills Matrix"
  FOR EACH ROW
  EXECUTE FUNCTION update_skills_matrix_timestamp();