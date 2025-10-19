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
    const url = new URL(req.url);
    const { action: bodyAction } = await req.json().catch(() => ({}));
    const action = url.searchParams.get('action') ?? bodyAction;

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log(`CV Ingestion Control: action=${action}`);

    if (action === 'cancel-current') {
      // Cancel current running session
      const { data: currentSessions } = await supabase
        .from('processing_sessions')
        .select('*')
        .eq('status', 'running')
        .order('started_at', { ascending: false });

      if (currentSessions && currentSessions.length > 0) {
        const session = currentSessions[0];
        
        // Mark session as cancelled
        await supabase
          .from('processing_sessions')
          .update({
            status: 'cancelled',
            stop_requested: true,
            completed_at: new Date().toISOString()
          })
          .eq('session_id', session.session_id);

        // Reset processing logs older than 5 minutes
        const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000).toISOString();
        
        const { data: stuckLogs } = await supabase
          .from('ingestion_log')
          .update({
            status: 'pending',
            error_message: 'Reset due to manual cancellation'
          })
          .eq('status', 'processing')
          .lt('updated_at', fiveMinutesAgo)
          .select();

        console.log(`✓ Cancelled session ${session.session_id}`);
        console.log(`✓ Reset ${stuckLogs?.length || 0} stuck processing logs`);

        return new Response(
          JSON.stringify({
            success: true,
            action: 'cancel-current',
            cancelledSession: session.session_id,
            resetLogs: stuckLogs?.length || 0
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify({
          success: true,
          action: 'cancel-current',
          message: 'No running session to cancel'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (action === 'reset-stuck') {
      // Reset files stuck in processing for more than 15 minutes
      const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();
      
      const { data: resetLogs } = await supabase
        .from('ingestion_log')
        .update({
          status: 'pending',
          error_message: 'Auto-reset from stuck processing state'
        })
        .eq('status', 'processing')
        .lt('updated_at', fifteenMinutesAgo)
        .select();

      console.log(`✓ Reset ${resetLogs?.length || 0} stuck files`);

      return new Response(
        JSON.stringify({
          success: true,
          action: 'reset-stuck',
          resetCount: resetLogs?.length || 0
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (action === 'watchdog') {
      // Auto-recovery: cancel stale sessions and reset stuck logs
      const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000).toISOString();
      
      // Cancel stale sessions
      const { data: staleSessions } = await supabase
        .from('processing_sessions')
        .select('*')
        .eq('status', 'running')
        .lt('started_at', tenMinutesAgo);

      if (staleSessions && staleSessions.length > 0) {
        for (const session of staleSessions) {
          await supabase
            .from('processing_sessions')
            .update({
              status: 'timeout',
              stop_requested: true,
              completed_at: new Date().toISOString()
            })
            .eq('session_id', session.session_id);
        }
      }

      // Reset stuck logs
      const { data: stuckLogs } = await supabase
        .from('ingestion_log')
        .update({
          status: 'pending',
          error_message: 'Watchdog auto-recovery'
        })
        .eq('status', 'processing')
        .lt('updated_at', tenMinutesAgo)
        .select();

      console.log(`🐕 Watchdog: Cancelled ${staleSessions?.length || 0} stale sessions`);
      console.log(`🐕 Watchdog: Reset ${stuckLogs?.length || 0} stuck logs`);

      return new Response(
        JSON.stringify({
          success: true,
          action: 'watchdog',
          cancelledSessions: staleSessions?.length || 0,
          resetLogs: stuckLogs?.length || 0,
          timestamp: new Date().toISOString()
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (action === 'nuclear-reset') {
      // Nuclear reset: delete ghost logs + reset processing + timeout stale sessions
      const cutoffProcessing = new Date(Date.now() - 60 * 60 * 1000).toISOString();
      const cutoffSessions = new Date(Date.now() - 30 * 60 * 1000).toISOString();

      console.log('💣 Nuclear reset initiated');
      console.log(`  - Processing cutoff: ${cutoffProcessing}`);
      console.log(`  - Sessions cutoff: ${cutoffSessions}`);

      // Step 1: Delete ghost logs (processing > 60min)
      const { data: deletedLogs } = await supabase
        .from('ingestion_log')
        .delete()
        .eq('status', 'processing')
        .lt('updated_at', cutoffProcessing)
        .select();

      console.log(`  - Deleted ${deletedLogs?.length || 0} ghost logs`);

      // Step 2: Reset remaining processing → pending
      const { data: resetLogs } = await supabase
        .from('ingestion_log')
        .update({
          status: 'pending',
          error_message: 'System nuclear reset - retry',
          updated_at: new Date().toISOString()
        })
        .eq('status', 'processing')
        .select();

      console.log(`  - Reset ${resetLogs?.length || 0} processing logs to pending`);

      // Step 3: Timeout stale running sessions
      const { data: staleSessions } = await supabase
        .from('processing_sessions')
        .select('session_id')
        .eq('status', 'running')
        .lt('started_at', cutoffSessions);

      let timedOutCount = 0;
      if (staleSessions && staleSessions.length > 0) {
        for (const session of staleSessions) {
          await supabase
            .from('processing_sessions')
            .update({
              status: 'timeout',
              stop_requested: true,
              completed_at: new Date().toISOString()
            })
            .eq('session_id', session.session_id);
          timedOutCount++;
        }
      }

      console.log(`  - Timed out ${timedOutCount} stale sessions`);
      console.log('✅ Nuclear reset complete');

      return new Response(
        JSON.stringify({
          success: true,
          action: 'nuclear-reset',
          deletedProcessing: deletedLogs?.length || 0,
          resetProcessing: resetLogs?.length || 0,
          timedOutSessions: timedOutCount,
          timestamp: new Date().toISOString()
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({
        error: 'Invalid action. Use: cancel-current, reset-stuck, watchdog, or nuclear-reset'
      }),
      { 
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('CV Ingestion Control error:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});
