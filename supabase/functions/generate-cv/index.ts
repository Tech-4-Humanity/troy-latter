import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { injectContentIntoTemplate, parseMarkdownToStructuredData } from './helpers/template-injector.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { jobDescription, userEmail, template = 'blue', useHtmlTemplate = true } = await req.json();

    if (!jobDescription || jobDescription.trim().length < 50) {
      return new Response(
        JSON.stringify({ error: 'Job description must be at least 50 characters' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Use Troy's real profile from cv_master.md
    const profile = {
      full_name: 'Troy Latter',
      professional_title: 'Chief Technology Officer',
      summary: 'Strategic technology executive with proven expertise in AI/ML implementation, digital transformation, and enterprise architecture. Delivered 30-40% efficiency gains through agentic AI pilots and led global capability development across Defence, health, transport, and utilities sectors.',
      experience: [
        {
          company: 'Unisys',
          title: 'CTO Alliances and Strategic Foresight',
          period: '2024 to 2025',
          achievements: [
            'Directed agentic AI pilots across procurement and service workflows',
            'Efficiency gains 30 to 40 percent in compliance and delivery',
            'Partnered go to market for long cycle government pursuits'
          ]
        },
        {
          company: 'Amazon Web Services',
          title: 'Principal Solutions Architect and Global Capability Adviser',
          period: '2019 to 2023',
          achievements: [
            'AI and ML strategy across Defence health transport and utilities',
            'Predictive pipelines on SageMaker and Bedrock',
            'One hundred plus executive briefings'
          ]
        }
      ],
      education: [
        { institution: 'UNSW', degree: 'Master of Commerce' },
        { institution: 'UoW', degree: 'Bachelor of Economics' }
      ],
      achievements: {
        certifications: [
          'AWS Professional Solutions Architect',
          'Azure AI Engineer Associate',
          'IBM AI Ethics'
        ]
      },
      skills: {}
    };

    // Fetch top skills from Skills Matrix (EXCLUDE certifications)
    const { data: topSkills, error: skillsError } = await supabase
      .from('175+ Skills Matrix')
      .select('skill, domain, alignment_score, auto_weight, "Proficiency Level", rating, proof')
      .neq('domain', 'Certifications & Credentials')
      .order('alignment_score', { ascending: false })
      .limit(30);

    if (skillsError) {
      console.error('Error fetching skills matrix:', skillsError);
    }

    // Fetch ALL certifications separately
    const { data: certifications, error: certsError } = await supabase
      .from('175+ Skills Matrix')
      .select('skill')
      .eq('domain', 'Certifications & Credentials')
      .order('skill', { ascending: true });

    if (certsError) {
      console.error('Error fetching certifications:', certsError);
    }

    // Build weighted skills context for AI
    const skillsContext = topSkills && topSkills.length > 0
      ? topSkills
          .map((s, idx) => `${idx + 1}. ${s.skill} (${s.domain || 'General'}) — ${s['Proficiency Level'] || 'Intermediate'} — Alignment: ${Math.round(Number(s.alignment_score) || 70)}%`)
          .join('\n')
      : 'No skills matrix data available';

    // Build certifications context
    const certsContext = certifications && certifications.length > 0
      ? `\n\nCRITICAL: Include ALL ${certifications.length} certifications:\n${certifications.map(c => c.skill).join(', ')}`
      : '';

    // Fetch HTML template if requested
    let htmlTemplateData = null;
    if (useHtmlTemplate) {
      const { data: templateData, error: templateError } = await supabase
        .from('cv_templates')
        .select('full_html, display_name')
        .eq('template_name', template)
        .single();
      
      if (!templateError && templateData) {
        htmlTemplateData = templateData;
      } else {
        console.warn('HTML template not found, falling back to markdown only');
      }
    }

    // Template-specific instructions
    const templateInstructions = template === 'blue' 
      ? `
FORMAT: GOOGLE/FAANG-QUALITY COMPREHENSIVE (3-4 pages)
- 4-6 detailed achievements per major role with SPECIFIC metrics
- EVERY bullet must have quantified impact (%, $, timelines, team sizes)
- Complete technical stack details with real-world applications
- Full education, certifications, and advisory roles
- Demonstrate thought leadership and industry impact
TONE: Professional, data-driven, executive-level
COLOR THEME: Blue accents for headers and bullets
QUALITY STANDARD: Match the caliber of resumes that land FAANG/tier-1 interviews
      `
      : `
FORMAT: GOOGLE/FAANG-QUALITY EXECUTIVE (2-3 pages)
- 4-5 high-impact achievements per role with measurable outcomes
- Focus on strategic initiatives with business-level metrics
- Technical depth balanced with executive perspective
- Essential credentials with emphasis on thought leadership
TONE: Dynamic, results-focused, sophisticated
COLOR THEME: Green accents for modern executive look
QUALITY STANDARD: Match the caliber of resumes that land FAANG/tier-1 interviews
      `;

    const styleGuide = `
GOOGLE/FAANG-LEVEL CV STANDARDS:

MANDATORY QUALITY REQUIREMENTS:
- EVERY achievement bullet MUST include specific metrics (percentages, dollar amounts, timelines, team sizes)
- Use the STAR method: Situation, Task, Action, Result - focus heavily on quantified Results
- NO generic statements like "Led team" - instead "Led 25-person engineering team delivering $15M platform migration"
- NO weak verbs: "helped", "worked on", "responsible for", "managed to", "assisted with"
- ONLY strong executive verbs: "Architected", "Spearheaded", "Transformed", "Delivered", "Scaled", "Drove"

CONTENT DEPTH:
- 4-6 achievement bullets per major role (not 2-3)
- Each bullet must tell a complete story with measurable business impact
- Show HOW you achieved results, not just WHAT you did
- Include technical specifics: exact technologies, methodologies, frameworks used
- Demonstrate scale: team sizes, budget amounts, user bases, data volumes

EXECUTIVE LANGUAGE PATTERNS:
- Lead with impact: "$5M cost reduction through automated compliance workflows" not "Automated compliance workflows saving money"
- Quantify everything: timeline improvements (50% faster), quality gains (99.9% uptime), financial impact (20% ROI)
- Show strategic thinking: tie technical achievements to business outcomes
- Demonstrate leadership: cross-functional collaboration, stakeholder management, organizational change
- Use industry-standard terminology that resonates with technical and executive audiences

TECHNICAL CREDIBILITY:
- Name specific technologies and platforms (AWS SageMaker, Azure OpenAI, Terraform, Kubernetes)
- Show architectural thinking: microservices, event-driven, serverless, distributed systems
- Include methodology expertise: Agile, DevOps, CI/CD, Site Reliability Engineering
- Demonstrate modern best practices: security-first design, observability, cost optimization
`;

    // PHASE 4: Enhanced system prompt for better content quality
    const systemPrompt = `You are an expert CV/resume writer specializing in executive-level positions. Your task is to generate a tailored CV based on a job description.

${templateInstructions}

${styleGuide}

CANDIDATE PROFILE:
Name: ${profile.full_name}
Title: ${profile.professional_title}
Summary: ${profile.summary}

EXPERIENCE:
${JSON.stringify(profile.experience, null, 2)}

SKILLS:
${JSON.stringify(profile.skills, null, 2)}

ACHIEVEMENTS:
${JSON.stringify(profile.achievements, null, 2)}

EDUCATION:
${JSON.stringify(profile.education, null, 2)}

PRIORITY SKILLS (ranked by market alignment and relevance):
${skillsContext}
${certsContext}


CRITICAL INSTRUCTIONS FOR SKILLS:
- Emphasize the TOP 10 skills from the priority list heavily throughout the CV
- Integrate high-alignment skills naturally into achievements and responsibilities
- Use SPECIFIC examples and EXACT metrics when mentioning priority skills
- Ensure skills with alignment_score > 85% appear multiple times across different sections
- Match skill proficiency levels to job requirements
- Include REAL company names from Troy's experience (never use placeholder companies)
- Use SPECIFIC numbers, percentages, and dollar amounts from achievements
- Demonstrate HOW each skill was applied in real scenarios

FORMATTING RULES (CRITICAL - MUST FOLLOW EXACTLY):
- Use EXACTLY 1 blank line between major sections (##)
- Use EXACTLY 1 blank line between subsections (###)
- Use bullet character • (not * or -)
- Each bullet point must be ≤ 2 lines maximum
- Lead all metrics with numbers: "Delivered $5M revenue increase" not "Increased revenue by $5M"
- Use " to " for date ranges: "Jan 2020 to Present" (NO em dashes or hyphens)

TYPOGRAPHY STANDARDS:
- Headings: Sentence case only (Chief Technology Officer, not CHIEF TECHNOLOGY OFFICER)
- Numbers: Always comma-separated (1,000 not 1000)
- Currency: Always with symbol first ($2.5M not 2.5M dollars)
- Percentages: No space before % (95% not 95 %)
- Company names: Use exact capitalisation from their branding
- Australian English spelling: Use -ise (organise, realise), -our (colour, behaviour), -re (centre, metre)
- NO em dashes anywhere - use " to " for ranges

BREVITY RULES:
- Maximum 6 bullets per role
- Each bullet ≤ 2 lines
- Start with action verb or metric
- Eliminate: "responsible for", "worked on", "helped with", "managed to"
- Replace with: "Delivered", "Led", "Architected", "Scaled", "Transformed"

FAANG-LEVEL CONTENT REQUIREMENTS:

PROFESSIONAL SUMMARY (3-4 lines):
- Open with years of experience and core expertise areas
- Include 2-3 most impressive quantified achievements
- Highlight unique value proposition relevant to the target role
- Use executive-level language that demonstrates strategic thinking

CORE COMPETENCIES/TECHNICAL EXPERTISE:
- Organize into clear categories (Leadership & Strategy, Technical Architecture, Domain Expertise)
- Include 8-12 key competencies that directly align with job requirements
- Use industry-standard terminology
- Balance technical skills with leadership capabilities

PROFESSIONAL EXPERIENCE:
- For EACH major role, include 4-6 achievement bullets (minimum 4, never less)
- EVERY bullet must follow this pattern: [Action Verb] + [What You Did] + [Specific Technology/Method] + [Quantified Result]
- Example: "Architected enterprise AI platform using AWS Bedrock and SageMaker, reducing ML model deployment time by 70% and enabling 50+ data scientists"
- Include the full technology stack for each initiative
- Show progression of responsibility and impact across roles
- Recent roles (last 5 years) get more detail than older roles

QUANTIFICATION EXAMPLES YOU MUST FOLLOW:
- Cost savings: "$2.5M annual cost reduction through infrastructure optimization"
- Efficiency: "Improved deployment velocity by 300%, reducing release cycles from 2 weeks to 2 days"
- Scale: "Scaled platform to support 10M+ daily transactions with 99.99% uptime"
- Team impact: "Led 30-person engineering organization across 4 global locations"
- Revenue: "Delivered $15M incremental revenue through new AI-powered product features"
- Time savings: "Reduced compliance review time by 65% (from 3 days to 8 hours) via automated workflows"

AVOID THESE COMMON MISTAKES:
- ❌ "Responsible for managing AI initiatives" → ✅ "Directed $5M AI transformation program delivering 40% efficiency gains"
- ❌ "Worked on cloud migration" → ✅ "Orchestrated 200+ application migration to AWS, achieving 35% cost reduction"
- ❌ "Led team of developers" → ✅ "Built and led 25-person engineering team delivering mission-critical defense platform"
- ❌ "Improved processes" → ✅ "Re-engineered procurement workflows reducing cycle time from 14 to 3 days (78% improvement)"

CONTENT INSTRUCTIONS:
1. Analyze the job description to identify key requirements, skills, and priorities
2. Generate a COMPREHENSIVE, tailored CV that demonstrates deep relevant experience
3. Use professional, executive-level language focused on outcomes and measurable impact
4. Include quantifiable achievements with specific metrics for EVERY major role
5. Start with a compelling executive summary tailored to the specific role (4-5 sentences)
6. Prioritize experiences and skills that match the job requirements
7. Include a "Key Strengths" section with 5-7 bullet points highlighting alignment
8. For each major role, include:
   - Clear role context and scope (team size, budget, geographic coverage)
   - 4-6 detailed, quantified achievements showing progression and impact
   - Specific technologies, methodologies, and frameworks used
   - Leadership and stakeholder management accomplishments
9. Show career progression and increasing responsibility over time
10. Include ALL relevant experience - don't artificially compress for length

FORMAT:
# [Candidate Name]
### [Tailored Professional Title]

## Executive Summary
[Compelling 3-4 sentence summary tailored to the specific role with quantified impact]

## Key Strengths
• [Strength aligned with job requirement]
• [Another aligned strength]
• [Another aligned strength]

## Professional Experience

### [Most Relevant Role]
**[Company]** | [Period using "to" - e.g., Jan 2020 to Present]

• [Achievement with metrics - start with number or action verb]
• [Another achievement - maximum 2 lines]

[Continue with other relevant roles...]

## Core Competencies

**[Primary Category Name - e.g., "AI & Digital Transformation"]**
• [Specific skill 1]
• [Specific skill 2]
• [Specific skill 3]
• [Specific skill 4]

**[Secondary Category Name - e.g., "Leadership & Strategic Consulting"]**
• [Specific skill 1]
• [Specific skill 2]
• [Specific skill 3]
• [Specific skill 4]

**[Tertiary Category Name - e.g., "Cloud Architecture & DevOps"]**
• [Specific skill 1]
• [Specific skill 2]
• [Specific skill 3]

SKILL CATEGORISATION RULES:
- Group skills into 2-4 thematic categories based on the job requirements
- Each category MUST have a bold heading on its own line: **Category Name**
- List 4-6 specific skills per category using bullet points (•) - KEEP IT CONCISE
- Category names should be descriptive and aligned with job requirements
- Categories typically include: Technical/Domain expertise, Leadership/Soft Skills, Industry/Business knowledge, Methodologies & Frameworks
- Keep individual skills concise (1-5 words each)
- Example category names: "AI & Digital Transformation", "Cloud Architecture & Engineering", "Leadership & Strategic Consulting", "Industry Expertise", "Security & Compliance"

## Notable Achievements
• [Quantifiable achievement relevant to role]
• [Another achievement]

## Education & Certifications
[Relevant credentials]

---

SPACE UTILISATION & LENGTH:
- For executive roles (CTO, VP, Director level): Target 3-4 pages with comprehensive detail
- For senior individual contributor roles: Target 2-3 pages
- Use clear section breaks with consistent spacing (one blank line between sections)
- Single line spacing between bullet points within a section
- Clear visual hierarchy with proper heading levels
- Include 4-6 detailed achievements per major role
- Earlier roles (5+ years ago) can be more concise (2-3 bullets)
- DEPTH OVER BREVITY: Better to show comprehensive experience than artificially compress

FINAL REMINDER - CRITICAL:
- Australian English spelling throughout (organise, realise, colour, centre, etc.)
- NO em dashes (—) anywhere - use " to " for all date ranges
- Tight, concise spacing - reduce blank lines to maximise content density
- Use bullet character • consistently

Generate a CV optimised for this specific opportunity. Focus on ROI, leadership impact, and measurable outcomes. Follow ALL formatting rules precisely.`;

    // Call Lovable AI Gateway
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!lovableApiKey) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('Generating CV for job description length:', jobDescription.length);
    console.log('Using Lovable AI model: google/gemini-2.5-pro');

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-pro',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'user', 
            content: `Generate a comprehensive, FAANG-quality tailored CV for this job opportunity. Ensure EVERY achievement bullet includes specific quantified metrics:\n\n${jobDescription}` 
          }
        ],
        temperature: 0.7,
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('Lovable AI error:', aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (aiResponse.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please add credits to your workspace.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      throw new Error(`Lovable AI error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const generatedCV = aiData.choices[0].message.content;
    const generatedCV = aiData.choices[0].message.content;

    // QUALITY VALIDATION - Ensure Google/FAANG-level standards
    const qualityIssues: string[] = [];
    
    // Check 1: Count achievement bullets in experience section
    const experienceSection = generatedCV.match(/##\s*Professional Experience.*?(?=##|$)/is)?.[0] || '';
    const bulletCount = (experienceSection.match(/•/g) || []).length;
    if (bulletCount < 12) {
      qualityIssues.push(`Only ${bulletCount} achievement bullets found (expected 15-20 for comprehensive executive CV)`);
    }
    
    // Check 2: Verify presence of quantified metrics (numbers, %, $)
    const metricsCount = (generatedCV.match(/\d+%|\$\d+[KMB]?|\d+\+|\d{1,3}(,\d{3})+/g) || []).length;
    if (metricsCount < 15) {
      qualityIssues.push(`Only ${metricsCount} quantified metrics found (expected 20+ for FAANG-quality CV)`);
    }
    
    // Check 3: Check for weak/generic language that shouldn't be there
    const weakPhrases = ['responsible for', 'worked on', 'helped with', 'assisted', 'managed to'];
    const foundWeakPhrases = weakPhrases.filter(phrase => 
      generatedCV.toLowerCase().includes(phrase)
    );
    if (foundWeakPhrases.length > 0) {
      qualityIssues.push(`Contains weak phrases: ${foundWeakPhrases.join(', ')}`);
    }
    
    // Log quality issues for monitoring (but still return the CV)
    if (qualityIssues.length > 0) {
      console.warn('CV Quality Issues Detected:', qualityIssues);
    } else {
      console.log('✓ CV passed all quality validation checks');
    }

    // Extract which skills were actually used in the generated CV
    const usedSkills = topSkills
      ? topSkills
          .filter(s => generatedCV.toLowerCase().includes(s.skill.toLowerCase()))
          .map(s => ({
            skill: s.skill,
            domain: s.domain,
            alignment_score: s.alignment_score,
            proficiency: s['Proficiency Level']
          }))
      : [];

    // Calculate intelligent match score based on skills used and content alignment
    const jdLower = jobDescription.toLowerCase();
    const cvLower = generatedCV.toLowerCase();
    
    // 1. Skills Match (40% weight) - Check which required skills appear in CV
    const skillsMatched = usedSkills.length > 0 
      ? (usedSkills.length / Math.min(topSkills?.length || 20, 20)) * 100 
      : 0;
    
    // 2. Technical Terms Match (30% weight) - Extract and match technical keywords
    const technicalTerms = [
      'ai', 'ml', 'machine learning', 'artificial intelligence', 'cloud', 'aws', 'azure', 'gcp',
      'architecture', 'leadership', 'transformation', 'strategy', 'agile', 'devops',
      'security', 'data', 'analytics', 'platform', 'infrastructure', 'automation'
    ];
    const techMatches = technicalTerms.filter(term => 
      jdLower.includes(term) && cvLower.includes(term)
    ).length;
    const techScore = (techMatches / Math.max(technicalTerms.filter(t => jdLower.includes(t)).length, 1)) * 100;
    
    // 3. Seniority Alignment (30% weight) - Check if CV shows appropriate level
    const seniorityTerms = ['cto', 'director', 'vp', 'head of', 'chief', 'principal', 'lead', 'senior', 'executive'];
    const seniorityMatches = seniorityTerms.filter(term => 
      jdLower.includes(term) && cvLower.includes(term)
    ).length;
    const seniorityScore = jdLower.match(/\b(cto|director|vp|head of|chief)\b/i) 
      ? (seniorityMatches / Math.max(seniorityTerms.filter(t => jdLower.includes(t)).length, 1)) * 100
      : 90; // Default high if not executive role
    
    // Weighted average: Skills(40%) + Technical(30%) + Seniority(30%)
    const matchScore = Math.round(
      (skillsMatched * 0.4) + (techScore * 0.3) + (seniorityScore * 0.3)
    );

    // PHASE 2: Generate HTML version using marked library for direct conversion
    let generatedHTML = null;
    if (htmlTemplateData) {
      try {
        // Import marked for markdown to HTML conversion
        const { marked } = await import('https://esm.sh/marked@11.0.0');
        
        // Configure marked for professional formatting
        marked.setOptions({
          breaks: true,
          gfm: true
        });
        
        // Convert markdown to HTML
        const htmlBody = await marked.parse(generatedCV);
        
        // Extract CSS styles from template
        const cssMatch = htmlTemplateData.full_html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
        const cssStyles = cssMatch ? cssMatch[1] : '';
        
        // Create professional HTML document with enhanced spacing and formatting
        generatedHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profile.full_name} - CV</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.5;
      color: #111827;
      max-width: 850px;
      margin: 0 auto;
      padding: 48px 42px;
      background: #ffffff;
      font-size: 11pt;
    }
    
    h1 { 
      color: ${template === 'blue' ? '#1e40af' : '#15803d'}; 
      font-size: 2.4em;
      font-weight: 700;
      border-bottom: 3px solid ${template === 'blue' ? '#2563eb' : '#16a34a'};
      padding-bottom: 12px;
      margin-bottom: 20px;
      letter-spacing: -0.5px;
      line-height: 1.2;
    }
    
    h2 { 
      color: ${template === 'blue' ? '#1e40af' : '#15803d'}; 
      font-size: 1.6em;
      font-weight: 600;
      margin-top: 32px;
      margin-bottom: 14px;
      padding-top: 12px;
      border-top: 2px solid #e5e7eb;
      line-height: 1.3;
    }
    
    h3 { 
      color: #374151; 
      font-size: 1.2em;
      font-weight: 600;
      margin-top: 18px;
      margin-bottom: 8px;
      line-height: 1.4;
    }
    
    h4 {
      color: #4b5563;
      font-size: 1.05em;
      font-weight: 600;
      margin-top: 14px;
      margin-bottom: 8px;
      line-height: 1.4;
    }
    
    p { 
      margin-bottom: 10px;
      line-height: 1.5;
    }
    
    ul { 
      margin: 10px 0 16px 0;
      padding-left: 22px;
      list-style-type: disc;
    }
    
    li { 
      margin-bottom: 8px;
      line-height: 1.5;
      padding-left: 4px;
    }
    
    li::marker {
      color: ${template === 'blue' ? '#2563eb' : '#16a34a'};
      font-weight: bold;
    }
    
    strong, b { 
      color: #111827;
      font-weight: 600;
    }
    
    /* Professional section spacing */
    .section {
      margin-bottom: 28px;
    }
    
    /* Ensure proper spacing after headers */
    h1 + p, h2 + p, h3 + p, h4 + p {
      margin-top: 8px;
    }
    
    /* Better list spacing within sections */
    h3 + ul, h4 + ul {
      margin-top: 8px;
    }
    
    /* Print optimization */
    @media print {
      body { 
        padding: 32px 38px;
        max-width: 100%;
        font-size: 10.5pt;
        line-height: 1.45;
      }
      
      h1 {
        font-size: 2.1em;
        margin-bottom: 16px;
      }
      
      h2 {
        page-break-after: avoid;
        margin-top: 26px;
        margin-bottom: 12px;
        font-size: 1.5em;
      }
      
      h3, h4 {
        page-break-after: avoid;
      }
      
      li {
        page-break-inside: avoid;
        margin-bottom: 7px;
      }
      
      ul {
        margin: 8px 0 14px 0;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    ${htmlBody}
  </div>
</body>
</html>`;
        console.log('HTML generated successfully using marked library');
      } catch (error) {
        console.error('Error generating HTML template:', error);
      }
    }

    const skillAlignmentScore = topSkills && topSkills.length > 0
      ? (usedSkills.length / Math.min(topSkills.length, 20)) * 100
      : 0;

    console.log(`Skills used in CV: ${usedSkills.length}/${topSkills?.length || 0} (${Math.round(skillAlignmentScore)}% alignment)`);

    // Update skills_metrics with CV usage data
    if (usedSkills.length > 0) {
      const metricsUpdates = usedSkills.map(s => ({
        job_id: `cv-gen-${Date.now()}`,
        skill_name: s.skill,
        appeared_in_jd: true,
        present_in_cv: true,
        action: 'promoted',
        confidence_score: Number(s.alignment_score) || 70,
        alignment_delta: 0,
        old_score: Number(s.alignment_score) || 70,
        new_score: Number(s.alignment_score) || 70,
      }));

      const { error: metricsError } = await supabase
        .from('skills_metrics')
        .insert(metricsUpdates);

      if (metricsError) {
        console.error('Failed to log skills metrics:', metricsError);
      }
    }

    // Save EVERYTHING to database for learning and tracking
    const generationStartTime = Date.now();
    
    const { data: generation, error: saveError } = await supabase
      .from('cv_generations')
      .insert({
        profile_id: profile.cv_id,
        job_description: jobDescription,
        generated_cv: generatedCV,
        generated_html: generatedHTML, // NOW SAVING HTML
        template_name: template, // CORRECT TEMPLATE NAME
        ai_model: 'gpt-4o-mini', // TRACK WHICH MODEL
        format: 'executive',
        match_score: Math.round(matchScore * 100) / 100,
        user_email: userEmail || null,
        skills_used: usedSkills,
        skill_alignment_score: skillAlignmentScore,
        generation_time_ms: Date.now() - generationStartTime,
      })
      .select()
      .single();

    if (saveError) {
      console.error('Error saving CV generation:', saveError);
      // Don't fail the request, just log the error
    } else {
      console.log('CV generation saved successfully with ID:', generation?.id);
    }

    console.log('CV generated successfully. Match score:', matchScore.toFixed(2));

    return new Response(
      JSON.stringify({
        cv: generatedCV,
        cvHTML: generatedHTML,
        matchScore: Math.round(matchScore * 100) / 100,
        generationId: generation?.id,
        template: template,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-cv function:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});