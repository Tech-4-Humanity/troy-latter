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
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { action } = await req.json();

    console.log(`CV Ingestion Cleanup - Action: ${action}`);

    let result: any = {};

    switch (action) {
      case 'reset-stuck-session': {
        // Mark stuck processing session as timeout
        const { data: sessions, error: sessionsError } = await supabase
          .from('processing_sessions')
          .update({ status: 'timeout' })
          .eq('status', 'running')
          .select();

        if (sessionsError) throw sessionsError;

        // Reset stuck processing files
        const { data: logs, error: logsError } = await supabase
          .from('ingestion_log')
          .update({ 
            status: 'pending',
            error_message: 'Reset from stuck processing state'
          })
          .eq('status', 'processing')
          .select();

        if (logsError) throw logsError;

        result = {
          message: 'Reset stuck session and processing files',
          sessionsReset: sessions?.length || 0,
          filesReset: logs?.length || 0
        };
        break;
      }

      case 'deduplicate-logs': {
        // Find all duplicate entries (keep most recent)
        const { data: duplicates, error: dupError } = await supabase
          .rpc('deduplicate_ingestion_logs');

        if (dupError) {
          // If RPC doesn't exist, do it manually
          console.log('Manual deduplication...');
          
          // Get all source files with counts
          const { data: files, error: filesError } = await supabase
            .from('ingestion_log')
            .select('source_file, id, processed_at')
            .order('source_file')
            .order('processed_at', { ascending: false });

          if (filesError) throw filesError;

          // Group by source_file and keep only the most recent
          const fileMap = new Map();
          const toDelete: string[] = [];

          files?.forEach(file => {
            if (!fileMap.has(file.source_file)) {
              fileMap.set(file.source_file, file.id);
            } else {
              toDelete.push(file.id);
            }
          });

          // Delete duplicates in batches
          if (toDelete.length > 0) {
            const { error: deleteError } = await supabase
              .from('ingestion_log')
              .delete()
              .in('id', toDelete);

            if (deleteError) throw deleteError;
          }

          result = {
            message: 'Deduplicated log entries',
            duplicatesRemoved: toDelete.length,
            uniqueFiles: fileMap.size
          };
        } else {
          result = {
            message: 'Deduplicated log entries via RPC',
            result: duplicates
          };
        }
        break;
      }

      case 'complete-session': {
        // Mark the current running session as completed
        const { data: session, error: sessionError } = await supabase
          .from('processing_sessions')
          .update({ 
            status: 'completed',
            completed_at: new Date().toISOString()
          })
          .eq('status', 'running')
          .select()
          .single();

        if (sessionError) throw sessionError;

        // Mark all processing files as completed
        const { data: logs, error: logsError } = await supabase
          .from('ingestion_log')
          .update({ 
            status: 'completed',
            error_message: null
          })
          .eq('status', 'processing')
          .select();

        if (logsError) throw logsError;

        result = {
          message: 'Completed stuck session',
          session: session,
          filesCompleted: logs?.length || 0
        };
        break;
      }

      case 'full-cleanup': {
        // Nuclear option: reset everything
        
        // 1. Complete all running sessions
        const { error: sessionsError } = await supabase
          .from('processing_sessions')
          .update({ 
            status: 'timeout',
            completed_at: new Date().toISOString()
          })
          .eq('status', 'running');

        if (sessionsError) throw sessionsError;

        // 2. Reset all processing files to pending
        const { error: processingError } = await supabase
          .from('ingestion_log')
          .update({ 
            status: 'pending',
            error_message: 'Reset by full cleanup'
          })
          .eq('status', 'processing');

        if (processingError) throw processingError;

        // 3. Deduplicate all entries
        const { data: files, error: filesError } = await supabase
          .from('ingestion_log')
          .select('source_file, id, processed_at')
          .order('source_file')
          .order('processed_at', { ascending: false });

        if (filesError) throw filesError;

        const fileMap = new Map();
        const toDelete: string[] = [];

        files?.forEach(file => {
          if (!fileMap.has(file.source_file)) {
            fileMap.set(file.source_file, file.id);
          } else {
            toDelete.push(file.id);
          }
        });

        if (toDelete.length > 0) {
          const { error: deleteError } = await supabase
            .from('ingestion_log')
            .delete()
            .in('id', toDelete);

          if (deleteError) throw deleteError;
        }

        result = {
          message: 'Full cleanup completed',
          duplicatesRemoved: toDelete.length,
          uniqueFiles: fileMap.size
        };
        break;
      }

      default:
        throw new Error(`Unknown action: ${action}`);
    }

    console.log('Cleanup result:', result);

    return new Response(
      JSON.stringify(result),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in cv-ingestion-cleanup:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
