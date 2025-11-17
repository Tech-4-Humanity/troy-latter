-- Add all 27 certifications to Skills Matrix
INSERT INTO "175+ Skills Matrix" (
  skill, 
  domain, 
  "Proficiency Level", 
  rating, 
  recency_year, 
  status,
  proof,
  alignment_score,
  auto_weight,
  last_updated
) VALUES
-- Cloud Platforms (4)
('AWS Solutions Architect', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Active certification', '95', 1.0, NOW()),
('Azure AI Engineer', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Active certification', '95', 1.0, NOW()),
('Google Cloud Architect', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Active certification', '95', 1.0, NOW()),
('Oracle Cloud', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Active certification', '90', 1.0, NOW()),

-- AI & ML Platforms (6)
('OpenAI', 'Certifications & Credentials', 'Certified', 5, '2025', 'active', 'Platform expertise', '98', 1.0, NOW()),
('Claude (Anthropic)', 'Certifications & Credentials', 'Certified', 5, '2025', 'active', 'Platform expertise', '95', 1.0, NOW()),
('Hugging Face', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Platform expertise', '92', 1.0, NOW()),
('NVIDIA NIM', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Platform expertise', '90', 1.0, NOW()),
('Snowflake', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Platform expertise', '93', 1.0, NOW()),
('Databricks', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Platform expertise', '92', 1.0, NOW()),

-- Agentic Frameworks (4)
('LangChain', 'Certifications & Credentials', 'Certified', 5, '2025', 'active', 'Framework mastery', '98', 1.0, NOW()),
('LangGraph', 'Certifications & Credentials', 'Certified', 5, '2025', 'active', 'Framework mastery', '95', 1.0, NOW()),
('Semantic Kernel', 'Certifications & Credentials', 'Certified', 5, '2025', 'active', 'Framework mastery', '93', 1.0, NOW()),
('MCP Practitioner', 'Certifications & Credentials', 'Certified', 5, '2025', 'active', 'Framework mastery', '90', 1.0, NOW()),

-- Automation & Integration (5)
('n8n', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Platform expertise', '95', 1.0, NOW()),
('Make', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Platform expertise', '93', 1.0, NOW()),
('Pipedream', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Platform expertise', '92', 1.0, NOW()),
('Supabase', 'Certifications & Credentials', 'Certified', 5, '2025', 'active', 'Platform expertise', '98', 1.0, NOW()),
('Relevance AI', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Platform expertise', '90', 1.0, NOW()),

-- Development Tools (1)
('GitHub Copilot', 'Certifications & Credentials', 'Certified', 5, '2025', 'active', 'Daily use', '95', 1.0, NOW()),

-- AI Governance & Ethics (3)
('Responsible AI Governance', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Active certification', '98', 1.0, NOW()),
('AI Ethics and Policy', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Active certification', '95', 1.0, NOW()),
('Data Privacy and Security', 'Certifications & Credentials', 'Certified', 5, '2024', 'active', 'Active certification', '95', 1.0, NOW()),

-- Delivery Methodologies (4)
('PRINCE2', 'Certifications & Credentials', 'Certified', 5, '2023', 'active', 'Active certification', '90', 1.0, NOW()),
('Prosci ADKAR', 'Certifications & Credentials', 'Certified', 5, '2023', 'active', 'Active certification', '88', 1.0, NOW()),
('ITIL', 'Certifications & Credentials', 'Certified', 5, '2023', 'active', 'Active certification', '87', 1.0, NOW()),
('TOGAF', 'Certifications & Credentials', 'Certified', 5, '2023', 'active', 'Active certification', '86', 1.0, NOW())
ON CONFLICT DO NOTHING;