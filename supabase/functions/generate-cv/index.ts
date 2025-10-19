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

    // Fetch Troy's CV profile
    const { data: profile, error: profileError } = await supabase
      .from('cv_profiles')
      .select('*')
      .limit(1)
      .single();

    // Fetch top skills from Skills Matrix for weighted CV generation
    const { data: topSkills, error: skillsError } = await supabase
      .from('175+ Skills Matrix')
      .select('skill, domain, alignment_score, auto_weight, "Proficiency Level", rating, proof')
      .order('alignment_score', { ascending: false })
      .limit(30);

    if (skillsError) {
      console.error('Error fetching skills matrix:', skillsError);
    }

    // Build weighted skills context for AI
    const skillsContext = topSkills && topSkills.length > 0
      ? topSkills
          .map((s, idx) => `${idx + 1}. ${s.skill} (${s.domain || 'General'}) — ${s['Proficiency Level'] || 'Intermediate'} — Alignment: ${Math.round(Number(s.alignment_score) || 70)}% — Evidence: ${s.proof || 'Available'}`)
          .join('\n')
      : 'No skills matrix data available';

    if (profileError || !profile) {
      console.error('Error fetching profile:', profileError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch CV profile' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

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
FORMAT: COMPREHENSIVE (2-3 pages)
- Full detail for each role
- All achievements with metrics
- Complete education and certifications
- Board positions and advisory roles
TONE: Traditional, thorough, corporate
COLOR THEME: Blue accents for headers and bullets
      `
      : `
FORMAT: EXECUTIVE (1-2 pages)
- Condensed experience highlights
- Top 3-4 achievements per role
- Essential credentials only
- Executive summary focus
TONE: Dynamic, impact-focused, modern
COLOR THEME: Green accents for modern executive look
      `;

    const styleGuide = `
EXECUTIVE CV FORMATTING STANDARDS:
- Use clear section headers (Professional Summary, Core Expertise, Professional Experience, Education)
- Lead with quantified achievements and metrics
- Focus on strategic impact and business outcomes
- Use action verbs (Led, Architected, Transformed, Delivered)
- Keep sentences concise and impactful
- Highlight leadership and decision-making authority
- Include technology stack and methodologies where relevant
- Emphasize C-suite interaction and stakeholder management
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
- Use EXACTLY 2 blank lines between major sections (##)
- Use EXACTLY 1 blank line between subsections (###)
- Use bullet character • (not * or -)
- Each bullet point must be ≤ 2 lines maximum
- Lead all metrics with numbers: "Delivered $5M revenue increase" not "Increased revenue by $5M"
- Use em-dashes (—) for date ranges: "Jan 2020 — Present"

TYPOGRAPHY STANDARDS:
- Headings: Sentence case only (Chief Technology Officer, not CHIEF TECHNOLOGY OFFICER)
- Numbers: Always comma-separated (1,000 not 1000)
- Currency: Always with symbol first ($2.5M not 2.5M dollars)
- Percentages: No space before % (95% not 95 %)
- Company names: Use exact capitalization from their branding

BREVITY RULES:
- Maximum 6 bullets per role
- Each bullet ≤ 2 lines
- Start with action verb or metric
- Eliminate: "responsible for", "worked on", "helped with", "managed to"
- Replace with: "Delivered", "Led", "Architected", "Scaled", "Transformed"

CONTENT INSTRUCTIONS:
1. Analyze the job description to identify key requirements, skills, and priorities
2. Generate a tailored CV that emphasizes the most relevant experience and skills
3. Use professional, executive-level language focused on outcomes
4. Include quantifiable achievements with metrics
5. Start with a compelling executive summary tailored to the role
6. Prioritize experiences and skills that match the job requirements
7. Include a "Key Strengths" section highlighting alignment with the role
8. Keep the CV to 2-3 pages maximum

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
**[Company]** | [Period using em-dash]

• [Achievement with metrics - start with number or action verb]
• [Another achievement - maximum 2 lines]

[Continue with other relevant roles...]


## Core Competencies
[Organize skills by relevance to the job, using categories]


## Notable Achievements
• [Quantifiable achievement relevant to role]
• [Another achievement]


## Education & Certifications
[Relevant credentials]

---

Generate a CV optimized for this specific opportunity. Focus on ROI, leadership impact, and measurable outcomes. Follow ALL formatting rules precisely.`;

    // Call Lovable AI Gateway
    const lovableApiKey = Deno.env.get('LOVABLE_API_KEY');
    if (!lovableApiKey) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log('Generating CV for job description length:', jobDescription.length);

    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${lovableApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { 
            role: 'user', 
            content: `Generate a tailored CV for this job opportunity:\n\n${jobDescription}` 
          }
        ],
        temperature: 0.7,
        max_tokens: 4000,
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI API error:', aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      if (aiResponse.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI credits exhausted. Please contact support.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      throw new Error(`AI API error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const generatedCV = aiData.choices[0].message.content;

    // Calculate a simple match score based on keyword overlap
    const jobKeywords = jobDescription.toLowerCase().match(/\b\w{4,}\b/g) || [];
    const cvKeywords = generatedCV.toLowerCase().match(/\b\w{4,}\b/g) || [];
    const matchedKeywords = jobKeywords.filter(keyword => cvKeywords.includes(keyword));
    const matchScore = Math.min(100, (matchedKeywords.length / jobKeywords.length) * 100);

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
        
        // Create professional HTML document with template styling
        generatedHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profile.full_name} - CV</title>
  <style>
    ${cssStyles}
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      background: #fff;
    }
    h1 { 
      color: ${template === 'blue' ? '#2563eb' : '#16a34a'}; 
      border-bottom: 3px solid ${template === 'blue' ? '#2563eb' : '#16a34a'};
      padding-bottom: 10px;
      margin-bottom: 20px;
    }
    h2 { 
      color: ${template === 'blue' ? '#1e40af' : '#15803d'}; 
      margin-top: 30px;
      margin-bottom: 15px;
      font-size: 1.5em;
    }
    h3 { 
      color: #374151; 
      font-size: 1.2em;
      margin-top: 20px;
    }
    ul { 
      padding-left: 20px; 
    }
    li { 
      margin-bottom: 8px; 
    }
    strong { 
      color: #1f2937; 
    }
    @media print {
      body { 
        padding: 20px; 
        max-width: 100%;
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
        ai_model: 'google/gemini-2.5-flash', // TRACK WHICH MODEL
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