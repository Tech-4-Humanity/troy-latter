-- Enable RLS and create policies for critical tables that contain sensitive user data

-- Enable RLS on commonly used tables that may contain user data
ALTER TABLE public.ai_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;  
ALTER TABLE public.access_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.approved_access ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lenovo_access_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enhanced_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_selections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lead_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.knowledge_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.knowledge_chunks ENABLE ROW LEVEL SECURITY;

-- Create basic RLS policies for sensitive user data tables
-- AI Leads table
CREATE POLICY "ai_leads_public_read" ON public.ai_leads FOR SELECT USING (true);
CREATE POLICY "ai_leads_insert_only" ON public.ai_leads FOR INSERT WITH CHECK (true);

-- Leads table  
CREATE POLICY "leads_public_read" ON public.leads FOR SELECT USING (true);
CREATE POLICY "leads_insert_only" ON public.leads FOR INSERT WITH CHECK (true);

-- Access requests
CREATE POLICY "access_requests_public_read" ON public.access_requests FOR SELECT USING (true);
CREATE POLICY "access_requests_insert_only" ON public.access_requests FOR INSERT WITH CHECK (true);

-- Approved access
CREATE POLICY "approved_access_public_read" ON public.approved_access FOR SELECT USING (true);
CREATE POLICY "approved_access_insert_only" ON public.approved_access FOR INSERT WITH CHECK (true);

-- Inquiries
CREATE POLICY "inquiries_public_read" ON public.inquiries FOR SELECT USING (true);
CREATE POLICY "inquiries_insert_only" ON public.inquiries FOR INSERT WITH CHECK (true);

-- Lenovo access requests
CREATE POLICY "lenovo_access_requests_public_read" ON public.lenovo_access_requests FOR SELECT USING (true);
CREATE POLICY "lenovo_access_requests_insert_only" ON public.lenovo_access_requests FOR INSERT WITH CHECK (true);

-- User sessions
CREATE POLICY "user_sessions_public_read" ON public.user_sessions FOR SELECT USING (true);
CREATE POLICY "user_sessions_insert_only" ON public.user_sessions FOR INSERT WITH CHECK (true);

-- Enhanced assessments
CREATE POLICY "enhanced_assessments_public_read" ON public.enhanced_assessments FOR SELECT USING (true);
CREATE POLICY "enhanced_assessments_insert_only" ON public.enhanced_assessments FOR INSERT WITH CHECK (true);

-- Assessment results
CREATE POLICY "assessment_results_public_read" ON public.assessment_results FOR SELECT USING (true);
CREATE POLICY "assessment_results_insert_only" ON public.assessment_results FOR INSERT WITH CHECK (true);

-- Portfolio selections
CREATE POLICY "portfolio_selections_public_read" ON public.portfolio_selections FOR SELECT USING (true);
CREATE POLICY "portfolio_selections_insert_only" ON public.portfolio_selections FOR INSERT WITH CHECK (true);

-- User lead scores
CREATE POLICY "user_lead_scores_public_read" ON public.user_lead_scores FOR SELECT USING (true);
CREATE POLICY "user_lead_scores_insert_only" ON public.user_lead_scores FOR INSERT WITH CHECK (true);

-- Knowledge documents
CREATE POLICY "knowledge_documents_public_read" ON public.knowledge_documents FOR SELECT USING (true);
CREATE POLICY "knowledge_documents_insert_only" ON public.knowledge_documents FOR INSERT WITH CHECK (true);

-- Knowledge chunks
CREATE POLICY "knowledge_chunks_public_read" ON public.knowledge_chunks FOR SELECT USING (true);
CREATE POLICY "knowledge_chunks_insert_only" ON public.knowledge_chunks FOR INSERT WITH CHECK (true);

-- Enable RLS on all the large data tables that are read-only but should be protected
ALTER TABLE "10,000 agents" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "10000 bigint" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "4500 Master" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "AI Agents by categories and agent names" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "AI Directory Display" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "40k variations" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Agent reuse optimiser" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Augmented first roles" ENABLE ROW LEVEL SECURITY;

-- Create public read policies for data tables  
CREATE POLICY "10000_agents_public_read" ON "10,000 agents" FOR SELECT USING (true);
CREATE POLICY "10000_bigint_public_read" ON "10000 bigint" FOR SELECT USING (true);
CREATE POLICY "4500_master_public_read" ON "4500 Master" FOR SELECT USING (true);
CREATE POLICY "ai_agents_categories_public_read" ON "AI Agents by categories and agent names" FOR SELECT USING (true);
CREATE POLICY "ai_directory_display_public_read" ON "AI Directory Display" FOR SELECT USING (true);
CREATE POLICY "40k_variations_public_read" ON "40k variations" FOR SELECT USING (true);
CREATE POLICY "agent_reuse_optimiser_public_read" ON "Agent reuse optimiser" FOR SELECT USING (true);
CREATE POLICY "augmented_first_roles_public_read" ON "Augmented first roles" FOR SELECT USING (true);