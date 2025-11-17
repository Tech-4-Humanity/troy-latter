import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.55.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { jdText, jobId } = await req.json();

    if (!jdText || !jobId) {
      return new Response(
        JSON.stringify({ error: 'Missing jdText or jobId' }), 
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY not configured');
    }

    console.log(`Extracting skills from JD: ${jobId}`);

    // Call OpenAI to extract structured skills
    const prompt = `Extract ALL technical and professional skills from this job description. 
Return a JSON array ONLY (no markdown, no explanations) with this exact format:
[
  {
    "skill": "AI Strategy",
    "domain": "AI Engineering",
    "weight": 0.9,
    "proficiency_required": "Expert",
    "context": "Brief quote from JD showing this skill"
  }
]

Rules:
- Extract both explicit skills (e.g., "Python", "Cloud Architecture") and implicit skills (e.g., "stakeholder management" from "cross-functional collaboration")
- Weight: 0.0-1.0 based on emphasis in JD (1.0 = critical requirement, 0.5 = nice-to-have)
- Proficiency: Beginner/Intermediate/Advanced/Expert
- Domain: Group skills logically (e.g., "Cloud Engineering", "AI/ML", "Leadership")
- Include soft skills if mentioned (e.g., "Communication", "Strategic Thinking")

JOB DESCRIPTION:
${jdText}`;

    console.log('Calling Lovable AI with model: google/gemini-2.5-flash');
    const aiResponse = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: 'You are a skill extraction expert. Return ONLY valid JSON arrays.' },
          { role: 'user', content: prompt }
        ],
        max_completion_tokens: 2000,
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error('AI API error:', aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (aiResponse.status === 402) {
        return new Response(
          JSON.stringify({ error: 'OpenAI API credits exhausted. Please check your OpenAI account.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      throw new Error(`AI API returned ${aiResponse.status}: ${errorText}`);
    }

    const aiData = await aiResponse.json();
    console.log('Full AI response:', JSON.stringify(aiData, null, 2));
    
    const content = aiData.choices?.[0]?.message?.content;

    if (!content) {
      console.error('AI response structure:', {
        hasChoices: !!aiData.choices,
        choicesLength: aiData.choices?.length,
        firstChoice: aiData.choices?.[0],
        hasMessage: !!aiData.choices?.[0]?.message,
        messageKeys: aiData.choices?.[0]?.message ? Object.keys(aiData.choices[0].message) : []
      });
      throw new Error(`No content in AI response. Response: ${JSON.stringify(aiData)}`);
    }

    // Parse the JSON array from AI response
    let extractedSkills;
    try {
      // Remove markdown code blocks if present
      const cleanContent = content.replace(/```json\n?|\n?```/g, '').trim();
      extractedSkills = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error('Failed to parse AI response:', content);
      throw new Error('AI returned invalid JSON format');
    }

    if (!Array.isArray(extractedSkills)) {
      throw new Error('AI response is not an array');
    }

    console.log(`Extracted ${extractedSkills.length} skills`);

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Update job_descriptions table
    const { error: updateError } = await supabase
      .from('job_descriptions')
      .update({ 
        extracted_skills: extractedSkills,
        skill_extraction_status: 'completed'
      })
      .eq('id', jobId);

    if (updateError) {
      console.error('Failed to update job_descriptions:', updateError);
      throw updateError;
    }

    console.log(`Updated job_descriptions table for ${jobId}`);

    // Auto-invoke update-skills-from-jd function
    try {
      console.log('Auto-calling update-skills-from-jd...');
      const { data: updateResult, error: updateError } = await supabase.functions.invoke(
        'update-skills-from-jd',
        {
          body: {
            jobId: jobId,
            extractedSkills: extractedSkills
          }
        }
      );

      if (updateError) {
        console.error('Failed to auto-update skills matrix:', updateError);
      } else {
        console.log('✅ Skills matrix auto-updated:', updateResult);
      }
    } catch (autoUpdateError) {
      console.error('Error in auto-update:', autoUpdateError);
      // Don't fail the whole request
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        jobId,
        skillsExtracted: extractedSkills.length,
        skills: extractedSkills 
      }), 
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in extract-skills-from-jd:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      }), 
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
