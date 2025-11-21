import React, { useEffect, useRef, useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Link } from 'react-router-dom';
import { CVGeneratorForm } from '@/components/cv/CVGeneratorForm';
import { MCPBridgeAICVGenerator } from '@/components/cv/MCPBridgeAICVGenerator';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Database, FileText, BarChart3, Sparkles, Zap } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { isMCPBridgeAIAvailable } from '@/lib/ai-utils';

export default function CVGenerator() {
  const hasRunIngestion = useRef(false);
  const hasMCPBridge = isMCPBridgeAIAvailable();
  const [activeTab, setActiveTab] = useState(hasMCPBridge ? 'mcp-bridge' : 'supabase');

  // Trigger on-demand CV ingestion when page loads (debounced, runs once)
  useEffect(() => {
    if (hasRunIngestion.current) return;

    const checkAndIngest = async () => {
      try {
        // Check if ingestion needed (last run > 1 hour ago)
        const { data: lastSession, error: sessionError } = await supabase
          .from('processing_sessions')
          .select('started_at, status')
          .order('started_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        
        if (sessionError) {
          console.warn('Could not fetch session status:', sessionError);
          return;
        }
        
        // Don't trigger if already running
        if (lastSession?.status === 'running') {
          console.log('Ingestion already running, skipping...');
          return;
        }
        
        // Trigger if last run was >1 hour ago
        const lastRun = lastSession ? new Date(lastSession.started_at) : null;
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        
        if (!lastRun || lastRun < oneHourAgo) {
          console.log('Triggering CV ingestion on page load...');
          hasRunIngestion.current = true;
          
          const { error: invokeError } = await supabase.functions.invoke('parse-all-cvs');
          
          if (!invokeError) {
            toast.success('CV ingestion started in background');
          } else {
            console.warn('Ingestion invoke error:', invokeError);
          }
        }
      } catch (error) {
        console.error('Failed to trigger ingestion:', error);
        // Silent fail - don't block user experience
      }
    };
    
    const timeoutId = setTimeout(checkAndIngest, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <PageTitle title="AI CV Generator" />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-end gap-2">
            <Button asChild variant="outline" size="sm">
              <Link to="/tools/skills">
                <BarChart3 className="h-4 w-4 mr-2" />
                Skills Matrix
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/tools/cv-generation-history">
                <FileText className="h-4 w-4 mr-2" />
                Generation History
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/tools/cv-ingestion">
                <Database className="h-4 w-4 mr-2" />
                CV Ingestion
              </Link>
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          {hasMCPBridge ? (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="mcp-bridge" className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  MCP Bridge AI
                </TabsTrigger>
                <TabsTrigger value="supabase" className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  Standard Generator
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="mcp-bridge" className="mt-0">
                <MCPBridgeAICVGenerator />
              </TabsContent>
              
              <TabsContent value="supabase" className="mt-0">
                <CVGeneratorForm />
              </TabsContent>
            </Tabs>
          ) : (
            <CVGeneratorForm />
          )}
        </div>
      </div>
    </div>
    </ErrorBoundary>
  );
}
