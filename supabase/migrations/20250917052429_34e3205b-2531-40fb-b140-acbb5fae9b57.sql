-- Create RLS policies for the most critical user data tables first
-- Enable RLS on ai_leads table only (to avoid deadlocks)
ALTER TABLE public.ai_leads ENABLE ROW LEVEL SECURITY;

-- Create basic public read and insert policies for ai_leads  
CREATE POLICY "ai_leads_public_access" ON public.ai_leads FOR ALL USING (true);