import { useState } from "react";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader2, PlayCircle, CheckCircle, XCircle, FileText, RefreshCw, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function CVIngestionDashboard() {
  const [isIngesting, setIsIngesting] = useState(false);
  const [ingestionResult, setIngestionResult] = useState<any>(null);
  const [queueStats, setQueueStats] = useState({
    total: 0,
    processed: 0,
    failed: 0,
    current: null as string | null
  });
  const [isProcessingQueue, setIsProcessingQueue] = useState(false);
  const queryClient = useQueryClient();

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

  // PHASE 3: Fetch storage count for real-time variance
  const { data: storageStats, isLoading: storageLoading } = useQuery({
    queryKey: ['cv-storage-count'],
    queryFn: async () => {
      const { data: files, error } = await supabase
        .storage
        .from('cv-documents')
        .list('all_cvs_found/all_cvs_found', { 
          limit: 1000,
          offset: 0
        });
      
      if (error) throw error;
      
      const cvFiles = files.filter(f => 
        f.name.toLowerCase().endsWith('.pdf') || 
        f.name.toLowerCase().endsWith('.docx')
      );
      
      return {
        totalFilesInStorage: cvFiles.length,
        lastChecked: new Date().toISOString()
      };
    },
    refetchInterval: 30000 // Refresh every 30 seconds
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

  const completedLogs = logs?.filter(log => log.status === 'completed') || [];
  const failedLogs = logs?.filter(log => log.status === 'failed') || [];
  const processingLogs = logs?.filter(log => log.status === 'processing') || [];

  // PHASE 3: Calculate stuck processing files
  const stuckInProcessing = processingLogs.filter(log => {
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
    return new Date(log.updated_at || log.processed_at) < oneHourAgo;
  }).length;

  // PHASE 5: Bulk retry failed CVs
  const retryFailedMutation = useMutation({
    mutationFn: async () => {
      // Mark failed entries as pending
      const { error: updateError } = await supabase
        .from('ingestion_log')
        .update({ 
          status: 'pending',
          error_message: null,
          updated_at: new Date().toISOString()
        })
        .eq('status', 'failed');
      
      if (updateError) throw updateError;
      
      // Trigger edge function to reprocess
      const { error: invokeError } = await supabase.functions.invoke('parse-all-cvs', {
        body: { retryMode: true }
      });
      
      if (invokeError) throw invokeError;
      
      return { retriedCount: failedLogs.length };
    },
    onSuccess: (data) => {
      toast.success(`Retrying ${data.retriedCount} failed CVs...`);
      queryClient.invalidateQueries({ queryKey: ['ingestion-logs'] });
      queryClient.invalidateQueries({ queryKey: ['current-session'] });
    },
    onError: (error) => {
      toast.error(`Failed to retry: ${error.message}`);
    }
  });

  // PHASE 3: Reset stuck processing files
  const resetStuckMutation = useMutation({
    mutationFn: async () => {
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
      
      const { error } = await supabase
        .from('ingestion_log')
        .update({ 
          status: 'pending',
          error_message: 'Reset from stuck processing state'
        })
        .eq('status', 'processing')
        .lt('updated_at', oneHourAgo);
      
      if (error) throw error;
      
      return { resetCount: stuckInProcessing };
    },
    onSuccess: (data) => {
      toast.success(`Reset ${data.resetCount} stuck files - ready to retry`);
      queryClient.invalidateQueries({ queryKey: ['ingestion-logs'] });
    },
    onError: (error) => {
      toast.error(`Failed to reset: ${error.message}`);
    }
  });

  // Nuclear reset mutation
  const nuclearResetMutation = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase.functions.invoke('cv-ingestion-control', {
        body: { action: 'nuclear-reset' }
      });
      
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      toast.success(
        `Nuclear reset complete: ${data.deletedProcessing} deleted, ` +
        `${data.resetProcessing} reset, ${data.timedOutSessions} sessions timed out`
      );
      queryClient.invalidateQueries({ queryKey: ['ingestion-logs'] });
      queryClient.invalidateQueries({ queryKey: ['current-session'] });
      queryClient.invalidateQueries({ queryKey: ['cv-master-stats'] });
      queryClient.invalidateQueries({ queryKey: ['cv-storage-count'] });
    },
    onError: (error) => {
      toast.error(`Nuclear reset failed: ${error.message}`);
    }
  });

  // Single-file processor mutation
  const processSingleFileMutation = useMutation({
    mutationFn: async (filePath: string) => {
      const { data, error } = await supabase.functions.invoke('process-single-cv', {
        body: { filePath }
      });
      if (error) throw error;
      return data;
    }
  });

  // Queue processor
  const processQueue = async () => {
    setIsProcessingQueue(true);
    
    try {
      // Fetch all files from storage
      const { data: files, error: listError } = await supabase.storage
        .from('cv-documents')
        .list('all_cvs_found/all_cvs_found', { limit: 1000 });
      
      if (listError) throw listError;
      
      const cvFiles = files.filter(f => 
        f.name.toLowerCase().endsWith('.pdf') || 
        f.name.toLowerCase().endsWith('.docx') ||
        f.name.toLowerCase().endsWith('.html') ||
        f.name.toLowerCase().endsWith('.htm')
      );
      
      setQueueStats({ total: cvFiles.length, processed: 0, failed: 0, current: null });
      
      // Process each file sequentially
      for (let i = 0; i < cvFiles.length; i++) {
        const file = cvFiles[i];
        const filePath = `all_cvs_found/all_cvs_found/${file.name}`;
        
        setQueueStats(prev => ({ ...prev, current: file.name }));
        
        try {
          const result = await processSingleFileMutation.mutateAsync(filePath);
          
          if (result.success && !result.skipped) {
            setQueueStats(prev => ({ ...prev, processed: prev.processed + 1 }));
            toast.success(`✓ ${file.name} (${result.skillsExtracted} skills)`);
          } else if (result.skipped) {
            setQueueStats(prev => ({ ...prev, processed: prev.processed + 1 }));
          }
        } catch (error: any) {
          setQueueStats(prev => ({ ...prev, failed: prev.failed + 1 }));
          toast.error(`✗ ${file.name}: ${error.message}`);
        }
        
        // Small delay to avoid rate limits
        await new Promise(r => setTimeout(r, 500));
      }
      
      toast.success(`Queue complete: ${queueStats.processed} processed, ${queueStats.failed} failed`);
      queryClient.invalidateQueries({ queryKey: ['ingestion-logs'] });
      queryClient.invalidateQueries({ queryKey: ['cv-master-stats'] });
      queryClient.invalidateQueries({ queryKey: ['cv-storage-count'] });
      
    } catch (error: any) {
      toast.error(`Queue processing failed: ${error.message}`);
    } finally {
      setIsProcessingQueue(false);
      setQueueStats(prev => ({ ...prev, current: null }));
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
        {/* Auto-ingestion Status */}
        <Card className="p-6 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
            <h2 className="text-xl font-semibold">Automatic Ingestion Active</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            New CVs are automatically processed every hour at the top of the hour
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Schedule:</span>
              <span className="ml-2 font-medium">Daily at 2 AM + On-Demand</span>
            </div>
            <div>
              <span className="text-muted-foreground">Last auto-run:</span>
              <span className="ml-2 font-medium">
                {logs?.[0]?.processed_at 
                  ? new Date(logs[0].processed_at).toLocaleString()
                  : 'Never'}
              </span>
            </div>
          </div>
        </Card>
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

        {/* PHASE 3: Storage vs Database Sync */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📁 Storage vs Database Sync
            </CardTitle>
            <CardDescription>Real-time comparison of files in storage vs tracked in database</CardDescription>
          </CardHeader>
          <CardContent>
            {storageLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Counting files in storage...</span>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Files in Storage</p>
                    <p className="text-2xl font-bold">{storageStats?.totalFilesInStorage || 0}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Files Tracked in DB</p>
                    <p className="text-2xl font-bold">{logs?.length || 0}</p>
                  </div>
                </div>
                
                {(storageStats?.totalFilesInStorage || 0) > (logs?.length || 0) && (
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Unprocessed Files Detected</AlertTitle>
                    <AlertDescription>
                      {(storageStats?.totalFilesInStorage || 0) - (logs?.length || 0)} files 
                      in storage have not been ingested yet. They will be processed in the next run.
                    </AlertDescription>
                  </Alert>
                )}
                
                <div className="flex items-center justify-between pt-2 border-t">
                  <span className="text-xs text-muted-foreground">
                    Last checked: {storageStats?.lastChecked 
                      ? new Date(storageStats.lastChecked).toLocaleTimeString() 
                      : 'Never'}
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => queryClient.invalidateQueries({ queryKey: ['cv-storage-count'] })}
                  >
                    <RefreshCw className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Single-File Processor */}
        <Card>
          <CardHeader>
            <CardTitle>Single-File Processor</CardTitle>
            <CardDescription>Process files one at a time with real-time progress</CardDescription>
          </CardHeader>
          <CardContent>
            {isProcessingQueue && (
              <div className="space-y-4 mb-4">
                <Progress value={(queueStats.processed + queueStats.failed) / queueStats.total * 100} />
                <div className="text-sm text-muted-foreground">
                  Processing: {queueStats.current || '...'} 
                  ({queueStats.processed + queueStats.failed} / {queueStats.total})
                </div>
                <div className="flex gap-2 text-xs">
                  <Badge variant="outline" className="bg-green-50">✓ {queueStats.processed} success</Badge>
                  <Badge variant="destructive">✗ {queueStats.failed} failed</Badge>
                </div>
              </div>
            )}
            
            <Button 
              onClick={processQueue}
              disabled={isProcessingQueue}
              className="w-full"
              size="lg"
            >
              {isProcessingQueue ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing Queue...
                </>
              ) : (
                <>
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Start Single-File Queue
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Control Panel */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Batch CV Ingestion</h2>
              <p className="text-sm text-muted-foreground">
                Process all CVs at once (legacy batch mode - may timeout on large sets)
              </p>
            </div>
            <div className="flex gap-2">
              {currentSession && (
                <Button
                  onClick={async () => {
                    try {
                      const supabaseUrl = 'https://lzfgigiyqpuuxslsygjt.supabase.co';
                      const response = await fetch(`${supabaseUrl}/functions/v1/cv-ingestion-control?action=cancel-current`, {
                        method: 'GET',
                        headers: {
                          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`
                        }
                      });
                      
                      if (!response.ok) throw new Error('Failed to cancel session');
                      
                      toast.success('Cancelling current session...');
                      setTimeout(() => {
                        queryClient.invalidateQueries({ queryKey: ['current-session'] });
                        queryClient.invalidateQueries({ queryKey: ['ingestion-logs'] });
                      }, 2000);
                    } catch (error: any) {
                      toast.error('Failed to cancel: ' + error.message);
                    }
                  }}
                  variant="destructive"
                  size="lg"
                  className="gap-2"
                >
                  <XCircle className="h-5 w-5" />
                  Stop & Cancel
                </Button>
              )}
              
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
              
              {failedLogs.length > 0 && (
                <Button
                  onClick={() => retryFailedMutation.mutate()}
                  disabled={retryFailedMutation.isPending || !!currentSession}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  {retryFailedMutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Retrying...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4" />
                      Retry {failedLogs.length} Failed
                    </>
                  )}
                </Button>
              )}
              
              {stuckInProcessing > 0 && (
                <Button
                  onClick={() => resetStuckMutation.mutate()}
                  disabled={resetStuckMutation.isPending || !!currentSession}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  {resetStuckMutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Resetting...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4" />
                      Reset {stuckInProcessing} Stuck
                    </>
                  )}
                </Button>
              )}
              
              <Button
                onClick={() => {
                  if (confirm('Nuclear Reset will delete processing logs older than 60 minutes and reset the rest. This cannot be undone. Proceed?')) {
                    nuclearResetMutation.mutate();
                  }
                }}
                disabled={nuclearResetMutation.isPending || !!currentSession}
                variant="destructive"
                size="lg"
                className="gap-2"
              >
                {nuclearResetMutation.isPending ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Resetting...
                  </>
                ) : (
                  <>
                    💣 Nuclear Reset
                  </>
                )}
              </Button>
            </div>
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

        {/* PHASE 4: Enhanced Failed CV Display with Error Grouping */}
        {failedLogs.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>❌ Failed CVs ({failedLogs.length})</CardTitle>
              <CardDescription>Grouped by failure type for easier diagnosis</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {/* Stack Overflow Errors */}
                {(() => {
                  const stackOverflowErrors = failedLogs.filter(log => 
                    log.error_message?.includes('Maximum call stack') || 
                    log.error_message?.includes('call stack size exceeded')
                  );
                  
                  if (stackOverflowErrors.length === 0) return null;
                  
                  return (
                    <AccordionItem value="stack-overflow">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">{stackOverflowErrors.length}</Badge>
                          <span>Base64 Encoding Error (File Size)</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <Alert variant="destructive" className="mb-4">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>Technical Issue - NOW FIXED</AlertTitle>
                          <AlertDescription>
                            These CVs were too large for the old base64 encoding method. 
                            The fix has been deployed - click "Retry Failed" to reprocess.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="space-y-2">
                          {stackOverflowErrors.map(log => (
                            <div key={log.id} className="flex items-start gap-2 p-2 bg-muted rounded-md">
                              <FileText className="h-4 w-4 mt-0.5 text-muted-foreground" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{log.source_file}</p>
                                <p className="text-xs text-muted-foreground">
                                  Attempted: {new Date(log.processed_at).toLocaleString()}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })()}
                
                {/* JSON Parsing Errors */}
                {(() => {
                  const jsonErrors = failedLogs.filter(log => 
                    log.error_message?.includes('JSON') || 
                    log.error_message?.includes('parsing')
                  );
                  
                  if (jsonErrors.length === 0) return null;
                  
                  return (
                    <AccordionItem value="json-errors">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">{jsonErrors.length}</Badge>
                          <span>AI Response Parsing Error</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <Alert className="mb-4">
                          <AlertCircle className="h-4 w-4" />
                          <AlertTitle>AI Processing Issue - NOW FIXED</AlertTitle>
                          <AlertDescription>
                            The AI returned invalid responses for these CVs. 
                            Retry logic has been added - click "Retry Failed" to reprocess with new validation.
                          </AlertDescription>
                        </Alert>
                        
                        <div className="space-y-2">
                          {jsonErrors.map(log => (
                            <div key={log.id} className="flex items-start gap-2 p-2 bg-muted rounded-md">
                              <FileText className="h-4 w-4 mt-0.5 text-muted-foreground" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{log.source_file}</p>
                                <p className="text-xs text-muted-foreground break-words">
                                  {log.error_message?.substring(0, 100)}...
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })()}
                
                {/* Other Errors */}
                {(() => {
                  const otherErrors = failedLogs.filter(log => 
                    !log.error_message?.includes('Maximum call stack') &&
                    !log.error_message?.includes('JSON') &&
                    !log.error_message?.includes('parsing')
                  );
                  
                  if (otherErrors.length === 0) return null;
                  
                  return (
                    <AccordionItem value="other-errors">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Badge variant="destructive">{otherErrors.length}</Badge>
                          <span>Other Errors</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {otherErrors.map(log => (
                            <div key={log.id} className="flex items-start gap-2 p-2 bg-muted rounded-md">
                              <FileText className="h-4 w-4 mt-0.5 text-muted-foreground" />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{log.source_file}</p>
                                <p className="text-xs text-muted-foreground break-words">
                                  {log.error_message || 'Unknown error'}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })()}
              </Accordion>
            </CardContent>
          </Card>
        )}

        {/* Completed CVs Summary */}
        {completedLogs.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Successfully Processed ({completedLogs.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {completedLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-primary" />
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
                      <Badge variant="outline" className="bg-green-50">completed</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}