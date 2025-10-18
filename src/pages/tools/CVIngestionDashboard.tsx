import { useState } from "react";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, PlayCircle, CheckCircle, XCircle, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";

export default function CVIngestionDashboard() {
  const [isIngesting, setIsIngesting] = useState(false);
  const [ingestionResult, setIngestionResult] = useState<any>(null);

  // Fetch ingestion logs
  const { data: logs, refetch: refetchLogs } = useQuery({
    queryKey: ['ingestion-logs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ingestion_log')
        .select('*')
        .order('processed_at', { ascending: false })
        .limit(20);
      
      if (error) throw error;
      return data;
    }
  });

  // Fetch CV master stats
  const { data: masterStats } = useQuery({
    queryKey: ['cv-master-stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cv_master')
        .select('*')
        .limit(1)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    }
  });

  // Fetch current processing session
  const { data: currentSession } = useQuery({
    queryKey: ['current-session'],
    queryFn: async () => {
      const { data } = await supabase
        .from('processing_sessions')
        .select('*')
        .eq('status', 'running')
        .order('started_at', { ascending: false })
        .limit(1)
        .maybeSingle();
      return data;
    },
    refetchInterval: 2000 // Poll every 2 seconds during ingestion
  });

  const handleStartIngestion = async () => {
    setIsIngesting(true);
    setIngestionResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('parse-all-cvs', {
        body: {}
      });

      if (error) throw error;

      setIngestionResult(data);
      toast.success(`Successfully processed ${data.filesProcessed} CV files!`);
      refetchLogs();
    } catch (error: any) {
      console.error('Ingestion error:', error);
      toast.error(error.message || 'Failed to process CVs');
    } finally {
      setIsIngesting(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">CV Ingestion Dashboard</h1>
        <p className="text-muted-foreground">
          Parse and process all CV files from storage into the master database
        </p>
      </div>

      <div className="grid gap-6">
        {/* Real-time Progress */}
        {currentSession && (
          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Loader2 className="h-5 w-5 animate-spin text-primary" />
                Processing in Progress
              </h2>
              <span className="text-sm text-muted-foreground">
                {currentSession.processed_count} / {currentSession.total_files} files
              </span>
            </div>
            <Progress 
              value={(currentSession.processed_count / currentSession.total_files) * 100} 
              className="mb-3"
            />
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Processed:</span>
                <span className="ml-2 font-semibold text-green-600">{currentSession.processed_count}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Failed:</span>
                <span className="ml-2 font-semibold text-red-600">{currentSession.failed_count}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Skipped:</span>
                <span className="ml-2 font-semibold text-yellow-600">{currentSession.skipped_count}</span>
              </div>
            </div>
          </Card>
        )}

        {/* Control Panel */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">CV Ingestion Pipeline</h2>
              <p className="text-sm text-muted-foreground">
                Parse all CV files from storage, extract structured data, and populate master database
              </p>
            </div>
            <Button
              onClick={handleStartIngestion}
              disabled={isIngesting || !!currentSession}
              size="lg"
              className="gap-2"
            >
              {isIngesting || currentSession ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <PlayCircle className="h-5 w-5" />
                  Start Ingestion
                </>
              )}
            </Button>
          </div>

          {/* Master Stats */}
          {masterStats && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h3 className="font-semibold mb-3">Master CV Database</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {masterStats.source_files?.length || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">CVs Processed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {(masterStats.parsed_data as any)?.totalCVs || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Total CVs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {masterStats.last_updated 
                      ? new Date(masterStats.last_updated).toLocaleDateString()
                      : 'Never'}
                  </div>
                  <div className="text-sm text-muted-foreground">Last Updated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">
                    {(masterStats.parsed_data as any)?.cvs?.length || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Parsed Files</div>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Ingestion Result */}
        {ingestionResult && (
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Latest Ingestion Results
            </h3>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xl font-bold">{ingestionResult.filesProcessed}</div>
                  <div className="text-sm text-muted-foreground">Files Processed</div>
                </div>
                <div>
                  <div className="text-xl font-bold">{ingestionResult.totalFiles}</div>
                  <div className="text-sm text-muted-foreground">Total Files Found</div>
                </div>
                <div>
                  <div className="text-xl font-bold">
                    {Math.round((ingestionResult.filesProcessed / ingestionResult.totalFiles) * 100)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Completion Rate</div>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Failed: {ingestionResult.failed || 0}</p>
                <p>Skipped (duplicates): {ingestionResult.skipped || 0}</p>
              </div>
              
              {ingestionResult.parsedCVs && ingestionResult.parsedCVs.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Processed Files:</h4>
                  <div className="space-y-2">
                    {ingestionResult.parsedCVs.map((cv: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{cv.fileName}</span>
                        </div>
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span>{cv.skillsFound} skill keywords</span>
                          <span>{cv.experiencesFound} experiences</span>
                          <span>{cv.achievementsFound} achievements</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        )}

        {/* Ingestion Log */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Ingestion Log</h3>
          <div className="space-y-2">
            {logs && logs.length > 0 ? (
              logs.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {log.status === 'completed' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {log.status === 'failed' && (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                    {log.status === 'processing' && (
                      <Loader2 className="h-5 w-5 text-yellow-500 animate-spin" />
                    )}
                    <div>
                      <div className="font-medium text-sm">{log.source_file}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(log.processed_at).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <span className="text-muted-foreground">
                      {log.skills_extracted || 0} skill keywords
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      log.status === 'completed' ? 'bg-green-100 text-green-700' :
                      log.status === 'failed' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {log.status}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No ingestion logs yet. Click "Start Ingestion" to begin processing CVs.
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}