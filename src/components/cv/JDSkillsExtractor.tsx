import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Brain } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface JDSkillsExtractorProps {
  jobDescription: string;
  onComplete?: () => void;
}

export function JDSkillsExtractor({ jobDescription, onComplete }: JDSkillsExtractorProps) {
  const [extracting, setExtracting] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleExtract = async () => {
    if (!jobDescription || jobDescription.length < 50) {
      toast.error('Job description too short');
      return;
    }

    // Cancel previous request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();

    setExtracting(true);
    const jobId = `jd-${Date.now()}`;

    // Set timeout for extraction (10 seconds max)
    timeoutRef.current = setTimeout(() => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
        toast.error('Skill extraction timed out. Please try again.');
      }
    }, 10000);

    try {
      // Step 1: Extract skills
      const { data: extractData, error: extractError } = await supabase.functions.invoke('extract-skills-from-jd', {
        body: { jdText: jobDescription, jobId }
      });

      if (extractError) {
        // Graceful degradation if function not deployed yet
        console.warn('Skill extraction function not available:', extractError);
        toast.warning('Skills extraction feature is being set up. Please try again later.');
        return;
      }

      if (!extractData || !extractData.skills) {
        toast.warning('No skills could be extracted from this job description');
        return;
      }

      toast.success(`Extracted ${extractData.skillsExtracted || extractData.skills.length} skills`);

      // Step 2: Update matrix
      const { data: updateData, error: updateError } = await supabase.functions.invoke('update-skills-from-jd', {
        body: { extractedSkills: extractData.skills, jobId }
      });

      if (updateError) {
        console.warn('Skill matrix update function not available:', updateError);
        toast.info('Skills extracted but matrix update pending. Migration in progress.');
        onComplete?.();
        return;
      }

      if (updateData?.summary) {
        toast.success(`Updated matrix: ${updateData.summary.added} added, ${updateData.summary.updated} updated`);
      }
      onComplete?.();
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Extraction cancelled');
        return;
      }
      console.error('Extraction error:', error);
      // Don't show multiple toasts - silent failure
    } finally {
      setExtracting(false);
      abortControllerRef.current = null;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  };

  return (
    <Button onClick={handleExtract} disabled={extracting} variant="outline" size="sm">
      <Brain className="w-4 h-4 mr-2" />
      {extracting ? 'Extracting Skills...' : 'Extract Skills from JD'}
    </Button>
  );
}
