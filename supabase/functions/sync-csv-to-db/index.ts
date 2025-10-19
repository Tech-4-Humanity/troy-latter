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

    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return new Response(
        JSON.stringify({ error: 'No file provided' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const csvText = await file.text();
    const lines = csvText.split('\n').filter(l => l.trim());
    const headers = lines[0].split(',').map(h => h.trim());
    
    let added = 0;
    let updated = 0;
    const errors = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim().replace(/^"|"$/g, ''));
      const row: any = {};
      
      headers.forEach((header, idx) => {
        row[header] = values[idx] || '';
      });

      // Check if skill exists
      const { data: existing } = await supabase
        .from('175+ Skills Matrix')
        .select('skill')
        .eq('skill', row.skill)
        .maybeSingle();

      if (existing) {
        const { error } = await supabase
          .from('175+ Skills Matrix')
          .update({
            domain: row.domain,
            rating: row.rating ? parseInt(row.rating) : null,
            status: row.status,
            trend: row.trend,
            alignment_score: row.alignment_score,
            skill_usage_count: row.skill_usage_count,
            auto_weight: row.auto_weight ? parseFloat(row.auto_weight) : null,
            last_updated: new Date().toISOString(),
          })
          .eq('skill', row.skill);

        if (error) {
          errors.push({ skill: row.skill, error: error.message });
        } else {
          updated++;
        }
      } else {
        const { error } = await supabase
          .from('175+ Skills Matrix')
          .insert({
            skill: row.skill,
            domain: row.domain,
            rating: row.rating ? parseInt(row.rating) : null,
            status: row.status || 'Confirmed',
            trend: row.trend || 'Rising',
            alignment_score: row.alignment_score || '75',
            skill_usage_count: row.skill_usage_count || '1',
            auto_weight: row.auto_weight ? parseFloat(row.auto_weight) : 0.8,
            last_updated: new Date().toISOString(),
          });

        if (error) {
          errors.push({ skill: row.skill, error: error.message });
        } else {
          added++;
        }
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        added,
        updated,
        errors,
        total: lines.length - 1
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error syncing CSV to DB:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
