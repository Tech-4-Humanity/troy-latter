import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.55.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ExtractedSkill {
  skill: string;
  domain: string;
  weight: number;
  proficiency_required: string;
  context?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { extractedSkills, jobId } = await req.json();

    if (!extractedSkills || !Array.isArray(extractedSkills) || !jobId) {
      return new Response(
        JSON.stringify({ error: 'Missing or invalid extractedSkills array or jobId' }), 
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const currentYear = new Date().getFullYear();
    const updatedSkills: any[] = [];
    let addedCount = 0;
    let touchedCount = 0;

    console.log(`Processing ${extractedSkills.length} skills for job ${jobId}`);

    for (const s of extractedSkills as ExtractedSkill[]) {
      const { skill, domain, weight, proficiency_required } = s;

      // Check if skill exists in matrix
      const { data: existing, error: fetchError } = await supabase
        .from('175+ Skills Matrix')
        .select('*')
        .eq('skill', skill)
        .maybeSingle();

      if (fetchError && fetchError.code !== 'PGRST116') {
        console.error(`Error fetching skill "${skill}":`, fetchError);
        continue;
      }

      if (!existing) {
        // ADD NEW SKILL
        const newSkillData = {
          skill,
          domain: domain || 'Emerging Tech',
          rating: 3,
          status: 'Emerging',
          trend: 'Rising',
          proof: `Identified in JD ${jobId}`,
          source_cv: 'auto-extracted',
          recency_year: currentYear,
          role_alignment: 'Pending Validation',
          evidence_level: 'Low',
          seniority_band: proficiency_required === 'Expert' ? 'Executive' : 
                         proficiency_required === 'Advanced' ? 'Senior' : 'Mid-Level',
          skill_usage_count: 1,
          market_trend: 'Rising',
          alignment_score: 70,
          'Proficiency Level': proficiency_required || 'Intermediate',
          auto_weight: weight,
          last_jd_match: jobId,
          market_demand_score: weight * 100,
        };

        const { data: newSkill, error: insertError } = await supabase
          .from('175+ Skills Matrix')
          .insert(newSkillData)
          .select()
          .single();

        if (insertError) {
          console.error(`Failed to insert skill "${skill}":`, insertError);
          continue;
        }

        updatedSkills.push({ 
          skill, 
          action: 'added', 
          new_score: 70,
          old_score: 0,
          weight
        });
        addedCount++;

        // Log metric
        await supabase.from('skills_metrics').insert({
          job_id: jobId,
          skill_name: skill,
          appeared_in_jd: true,
          present_in_cv: false,
          action: 'added',
          confidence_score: weight * 100,
          alignment_delta: 70,
          old_score: 0,
          new_score: 70,
          trend_delta: 'Rising'
        });

        console.log(`✓ Added new skill: ${skill} (${domain})`);

      } else {
        // UPDATE EXISTING SKILL
        const oldScore = existing.alignment_score || 70;
        const baseIncrease = weight * 5;
        const usageBonus = Math.min((existing.skill_usage_count || 0) * 0.5, 5);
        const newScore = Math.min(100, oldScore + baseIncrease + usageBonus);

        const { error: updateError } = await supabase
          .from('175+ Skills Matrix')
          .update({
            skill_usage_count: (existing.skill_usage_count || 0) + 1,
            recency_year: currentYear,
            trend: newScore > oldScore ? 'Rising' : existing.trend,
            alignment_score: newScore,
            auto_weight: Math.max(existing.auto_weight || 0, weight),
            last_jd_match: jobId,
            market_trend: 'Rising',
            market_demand_score: Math.min(100, (existing.market_demand_score || 50) + (weight * 10)),
          })
          .eq('skill', skill);

        if (updateError) {
          console.error(`Failed to update skill "${skill}":`, updateError);
          continue;
        }

        updatedSkills.push({ 
          skill, 
          action: 'touched', 
          old_score: oldScore, 
          new_score: newScore,
          delta: newScore - oldScore,
          weight
        });
        touchedCount++;

        // Log metric
        await supabase.from('skills_metrics').insert({
          job_id: jobId,
          skill_name: skill,
          appeared_in_jd: true,
          present_in_cv: true,
          action: 'touched',
          confidence_score: weight * 100,
          alignment_delta: newScore - oldScore,
          old_score: oldScore,
          new_score: newScore,
          trend_delta: newScore > oldScore ? 'Rising' : 'Stable'
        });

        console.log(`✓ Updated skill: ${skill} (${oldScore} → ${newScore})`);
      }
    }

    console.log(`Complete: ${addedCount} added, ${touchedCount} updated`);

    return new Response(
      JSON.stringify({ 
        success: true,
        jobId,
        summary: {
          total: extractedSkills.length,
          added: addedCount,
          updated: touchedCount
        },
        updated: updatedSkills 
      }), 
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in update-skills-from-jd:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      }), 
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
