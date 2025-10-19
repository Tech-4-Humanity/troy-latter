import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Brain } from 'lucide-react';
import { useState } from 'react';

interface JDSkillsExtractorProps {
  jobDescription: string;
  onComplete?: () => void;
}

export function JDSkillsExtractor({ jobDescription, onComplete }: JDSkillsExtractorProps) {
  const [extracting, setExtracting] = useState(false);

  const handleExtract = async () => {
    if (!jobDescription || jobDescription.length < 50) {
      toast.error('Job description too short');
      return;
    }

    setExtracting(true);
    const jobId = `jd-${Date.now()}`;

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
      console.error('Extraction error:', error);
      toast.warning('Skills extraction feature is being set up. Please use standard CV generation for now.');
    } finally {
      setExtracting(false);
    }
  };

  return (
    <Button onClick={handleExtract} disabled={extracting} variant="outline" size="sm">
      <Brain className="w-4 h-4 mr-2" />
      {extracting ? 'Extracting Skills...' : 'Extract Skills from JD'}
    </Button>
  );
}
