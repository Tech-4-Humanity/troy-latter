import React, { useEffect } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Link } from 'react-router-dom';
import { CVGeneratorForm } from '@/components/cv/CVGeneratorForm';
import { SkillsMatrix } from '@/components/cv/SkillsMatrix';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Database } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export default function CVGenerator() {
  // Trigger on-demand CV ingestion when page loads
  useEffect(() => {
    const checkAndIngest = async () => {
      try {
        // Check if ingestion needed (last run > 1 hour ago)
        const { data: lastSession } = await supabase
          .from('processing_sessions')
          .select('started_at, status')
          .order('started_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        
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
          await supabase.functions.invoke('parse-all-cvs');
          toast.success('CV ingestion started in background');
        }
      } catch (error) {
        console.error('Failed to trigger ingestion:', error);
      }
    };
    
    checkAndIngest();
  }, []);

  return (
    <div className="min-h-screen">
      <PageTitle title="AI CV Generator" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-card rounded-lg shadow-lg p-6 border-l-4 border-primary">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-bold text-foreground">
                How It Works
              </h2>
              <Button asChild variant="outline" size="sm">
                <Link to="/tools/cv-ingestion">
                  <Database className="h-4 w-4 mr-2" />
                  CV Ingestion Dashboard
                </Link>
              </Button>
            </div>
            <p className="text-muted-foreground mb-4">
              Paste any job description below to instantly generate a tailored CV that highlights 
              relevant experience, skills, and achievements. Powered by advanced AI that understands 
              context, industry terminology, and executive positioning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-2xl">📋</span>
                <div>
                  <div className="font-semibold text-foreground">Paste Job Description</div>
                  <div className="text-muted-foreground">Copy requirements from any job posting</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="font-semibold text-foreground">AI Analysis</div>
                  <div className="text-muted-foreground">Smart matching of skills and experience</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">📄</span>
                <div>
                  <div className="font-semibold text-foreground">Tailored CV</div>
                  <div className="text-muted-foreground">Board-ready document in seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for CV Generator & Skills Matrix */}
        <div className="max-w-6xl mx-auto mb-12">
          <Tabs defaultValue="cv" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="cv" className="text-base">
                CV Generator
              </TabsTrigger>
              <TabsTrigger value="skills" className="text-base">
                Skills Matrix
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="cv">
              <CVGeneratorForm />
            </TabsContent>
            
            <TabsContent value="skills">
              <SkillsMatrix />
            </TabsContent>
          </Tabs>
        </div>

        {/* Features Section - Enhanced Contrast */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-lg p-6 rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🎯</span>
              <h3 className="font-bold text-xl text-foreground">
                Context-Aware Matching
              </h3>
            </div>
            <p className="text-base text-foreground/80 leading-relaxed">
              AI understands industry nuances and matches your experience to job requirements 
              with precision, highlighting transferable skills across domains.
            </p>
          </div>
          
          <div className="border-2 border-secondary/30 hover:border-secondary transition-all hover:shadow-lg p-6 rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">⚡</span>
              <h3 className="font-bold text-xl text-foreground">
                Instant Generation
              </h3>
            </div>
            <p className="text-base text-foreground/80 leading-relaxed">
              No manual formatting or rewriting. Get a professional, ATS-optimized CV 
              in seconds, ready for executive-level applications.
            </p>
          </div>
          
          <div className="border-2 border-accent/30 hover:border-accent transition-all hover:shadow-lg p-6 rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🔒</span>
              <h3 className="font-bold text-xl text-foreground">
                Privacy First
              </h3>
            </div>
            <p className="text-base text-foreground/80 leading-relaxed">
              Your data is processed securely and never stored. Generate unlimited CVs 
              without compromising your privacy.
            </p>
          </div>
          
          <div className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-lg p-6 rounded-lg bg-card">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">📊</span>
              <h3 className="font-bold text-xl text-foreground">
                Executive-Ready Format
              </h3>
            </div>
            <p className="text-base text-foreground/80 leading-relaxed">
              Optimised for C-suite and senior leadership roles with emphasis on strategic 
              impact, governance experience, and transformation delivery.
            </p>
          </div>
        </div>

        {/* CTA Section - Improved Contrast */}
        <div className="max-w-3xl mx-auto mt-12 text-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 rounded-xl shadow-2xl">
          <h3 className="text-3xl font-bold mb-4 text-white">
            Need Strategic AI Guidance?
          </h3>
          <p className="text-lg text-slate-200 mb-8 leading-relaxed max-w-2xl mx-auto">
            This tool showcases how AI can transform talent acquisition and 
            accelerate innovation. Let's discuss how I can help your organization.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100 font-semibold px-8 py-6 text-lg">
            <Link to="/contact">
              Schedule a Consultation
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
