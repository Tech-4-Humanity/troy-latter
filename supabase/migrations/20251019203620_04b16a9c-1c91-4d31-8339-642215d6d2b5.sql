-- Add HTML storage and improve tracking for CV generations
ALTER TABLE cv_generations 
ADD COLUMN IF NOT EXISTS generated_html text,
ADD COLUMN IF NOT EXISTS template_name text,
ADD COLUMN IF NOT EXISTS ai_model text;

-- Create index for faster queries by template and email
CREATE INDEX IF NOT EXISTS idx_cv_generations_template ON cv_generations(template_name);
CREATE INDEX IF NOT EXISTS idx_cv_generations_user_email ON cv_generations(user_email);
CREATE INDEX IF NOT EXISTS idx_cv_generations_created_at ON cv_generations(created_at DESC);

-- Add comments for documentation
COMMENT ON COLUMN cv_generations.generated_html IS 'HTML version of the generated CV for preview and download';
COMMENT ON COLUMN cv_generations.template_name IS 'Template used (blue, green) for regeneration';
COMMENT ON COLUMN cv_generations.ai_model IS 'AI model used for generation tracking';