-- Reset all stuck processing records to pending
UPDATE ingestion_log 
SET status = 'pending', 
    updated_at = NOW(),
    error_message = NULL
WHERE status = 'processing';

-- Add comment for tracking
COMMENT ON TABLE ingestion_log IS 'CV ingestion tracking - reset stuck records on 2025-01-19';