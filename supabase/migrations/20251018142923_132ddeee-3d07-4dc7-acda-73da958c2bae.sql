-- Add updated_at column to processing_sessions
ALTER TABLE processing_sessions 
ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Add updated_at column to ingestion_log
ALTER TABLE ingestion_log 
ADD COLUMN updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();

-- Create trigger to auto-update processing_sessions timestamp
CREATE TRIGGER set_processing_sessions_updated_at
  BEFORE UPDATE ON processing_sessions
  FOR EACH ROW
  EXECUTE FUNCTION trigger_set_timestamp();

-- Create trigger to auto-update ingestion_log timestamp
CREATE TRIGGER set_ingestion_log_updated_at
  BEFORE UPDATE ON ingestion_log
  FOR EACH ROW
  EXECUTE FUNCTION trigger_set_timestamp();