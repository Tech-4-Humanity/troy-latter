import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { data: skills, error } = await supabase
      .from('175+ Skills Matrix')
      .select('*')
      .order('alignment_score', { ascending: false });

    if (error) throw error;

    // Generate CSV
    const headers = [
      'skill', 'domain', 'rating', 'status', 'trend', 'proof', 
      'source_cv', 'recency_year', 'role_alignment', 'evidence_level',
      'impact_metric', 'seniority_band', 'skill_usage_count', 
      'market_trend', 'alignment_score', 'Certification',
      'Proficiency Level', 'Project Examples', 'Job Keywords Matched',
      'Transferability', 'Endorsements Count', 'Tools Used',
      'Training Needed', 'last_updated', 'source_jd', 'auto_weight'
    ];

    let csv = headers.join(',') + '\n';

    for (const skill of skills || []) {
      const row = headers.map(h => {
        const value = skill[h] || '';
        // Escape commas and quotes
        const escaped = String(value).replace(/"/g, '""');
        return escaped.includes(',') ? `"${escaped}"` : escaped;
      });
      csv += row.join(',') + '\n';
    }

    return new Response(csv, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename="skills_master.csv"'
      }
    });
  } catch (error) {
    console.error('Error exporting DB to CSV:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
