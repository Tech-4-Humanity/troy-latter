-- Add file_hash column to ingestion_log for deduplication
ALTER TABLE ingestion_log ADD COLUMN IF NOT EXISTS file_hash text;
CREATE INDEX IF NOT EXISTS idx_ingestion_log_file_hash ON ingestion_log(file_hash);

-- Create processing_sessions table for real-time progress tracking
CREATE TABLE IF NOT EXISTS processing_sessions (
  session_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  started_at timestamptz DEFAULT now(),
  completed_at timestamptz,
  total_files integer NOT NULL,
  processed_count integer DEFAULT 0,
  failed_count integer DEFAULT 0,
  skipped_count integer DEFAULT 0,
  status text DEFAULT 'running' CHECK (status IN ('running', 'completed', 'failed', 'timeout'))
);

-- Enable RLS for processing_sessions
ALTER TABLE processing_sessions ENABLE ROW LEVEL SECURITY;

-- Allow public read access to processing_sessions
CREATE POLICY "Public read processing sessions"
  ON processing_sessions
  FOR SELECT
  USING (true);

-- Trigger to update timestamp
CREATE TRIGGER update_processing_sessions_timestamp
  BEFORE UPDATE ON processing_sessions
  FOR EACH ROW
  EXECUTE FUNCTION trigger_set_timestamp();