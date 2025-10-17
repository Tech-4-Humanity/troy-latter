import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { jobDescription, userEmail } = await req.json();

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

    if (profileError || !profile) {
      console.error('Error fetching profile:', profileError);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch CV profile' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Build system prompt with Troy's complete profile
    const systemPrompt = `You are an expert CV/resume writer specializing in executive-level positions. Your task is to generate a tailored CV based on a job description.

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

INSTRUCTIONS:
1. Analyze the job description to identify key requirements, skills, and priorities
2. Generate a tailored CV that emphasizes the most relevant experience and skills
3. Use professional, executive-level language
4. Include quantifiable achievements where possible
5. Format as clean, ATS-friendly markdown
6. Start with a compelling executive summary tailored to the role
7. Prioritize experiences and skills that match the job requirements
8. Include a "Key Strengths" section highlighting alignment with the role
9. Keep the CV to 2-3 pages maximum
10. Use bullet points for readability

FORMAT:
# [Candidate Name]
### [Tailored Professional Title]

## Executive Summary
[Compelling 3-4 sentence summary tailored to the specific role]

## Key Strengths
- [Strength aligned with job requirement]
- [Another aligned strength]
- [Another aligned strength]

## Professional Experience
### [Most Relevant Role]
**[Company]** | [Period]
- [Achievement with metrics]
- [Another achievement]

[Continue with other relevant roles...]

## Core Competencies
[Organize skills by relevance to the job, using categories]

## Notable Achievements
- [Quantifiable achievement relevant to role]
- [Another achievement]

## Education & Certifications
[Relevant credentials]

---

Generate a CV optimized for this specific opportunity. Focus on ROI, leadership impact, and measurable outcomes.`;

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

    // Save to database
    const { data: generation, error: saveError } = await supabase
      .from('cv_generations')
      .insert({
        profile_id: profile.id,
        job_description: jobDescription,
        generated_cv: generatedCV,
        format: 'executive',
        match_score: Math.round(matchScore * 100) / 100,
        user_email: userEmail || null,
      })
      .select()
      .single();

    if (saveError) {
      console.error('Error saving CV generation:', saveError);
      // Don't fail the request, just log the error
    }

    console.log('CV generated successfully. Match score:', matchScore.toFixed(2));

    return new Response(
      JSON.stringify({
        cv: generatedCV,
        matchScore: Math.round(matchScore * 100) / 100,
        generationId: generation?.id,
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