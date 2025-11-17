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
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Find sessions stuck for > 1 hour
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    
    const { data: stuckSessions, error: fetchError } = await supabase
      .from('processing_sessions')
      .select('session_id, created_at')
      .eq('status', 'running')
      .lt('created_at', oneHourAgo);

    if (fetchError) {
      throw fetchError;
    }

    if (!stuckSessions || stuckSessions.length === 0) {
      return new Response(
        JSON.stringify({ 
          message: 'No stuck sessions found',
          cleanedCount: 0
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Found ${stuckSessions.length} stuck sessions to clean up`);

    // Mark sessions as failed
    const { error: updateError } = await supabase
      .from('processing_sessions')
      .update({ 
        status: 'failed',
        completed_at: new Date().toISOString(),
        error_message: 'Session timed out - exceeded 1 hour runtime'
      })
      .in('session_id', stuckSessions.map(s => s.session_id));

    if (updateError) {
      throw updateError;
    }

    // Also mark any processing ingestion logs as failed
    const { error: logsError } = await supabase
      .from('ingestion_log')
      .update({ 
        status: 'failed',
        error_message: 'Session timeout - marked as failed by cleanup'
      })
      .eq('status', 'processing')
      .in('session_id', stuckSessions.map(s => s.session_id));

    if (logsError) {
      console.warn('Failed to update ingestion logs:', logsError);
    }

    console.log(`✅ Cleaned up ${stuckSessions.length} stuck sessions`);

    return new Response(
      JSON.stringify({ 
        success: true,
        cleanedCount: stuckSessions.length,
        sessionIds: stuckSessions.map(s => s.session_id)
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in cv-session-cleanup:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error occurred' 
      }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});