-- Phase 6: Create cv_generations table (fixed foreign key)
CREATE TABLE IF NOT EXISTS cv_generations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID REFERENCES cv_profiles(cv_id),
  job_description TEXT NOT NULL,
  generated_cv TEXT NOT NULL,
  format TEXT DEFAULT 'executive',
  match_score NUMERIC(5,2),
  user_email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Metadata
  generation_time_ms INTEGER,
  tokens_used INTEGER,
  style_version TEXT
);

-- Enable RLS
ALTER TABLE cv_generations ENABLE ROW LEVEL SECURITY;

-- Public can insert generations
CREATE POLICY "Public can insert generations"
  ON cv_generations FOR INSERT
  TO public
  WITH CHECK (true);

-- Users can view their generations
CREATE POLICY "Users can view their generations"
  ON cv_generations FOR SELECT
  TO public
  USING (
    user_email = current_setting('request.jwt.claims', true)::json->>'email' 
    OR user_email IS NULL
  );

-- Indexes
CREATE INDEX idx_cv_gen_profile ON cv_generations(profile_id);
CREATE INDEX idx_cv_gen_email ON cv_generations(user_email);
CREATE INDEX idx_cv_gen_created ON cv_generations(created_at DESC);
CREATE INDEX idx_cv_gen_match_score ON cv_generations(match_score DESC);

-- Trigger for updated_at
CREATE TRIGGER set_cv_gen_updated_at
  BEFORE UPDATE ON cv_generations
  FOR EACH ROW
  EXECUTE FUNCTION trigger_set_timestamp();