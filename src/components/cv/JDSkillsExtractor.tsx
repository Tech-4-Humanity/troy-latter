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

      if (extractError) throw extractError;

      toast.success(`Extracted ${extractData.skillsExtracted} skills`);

      // Step 2: Update matrix
      const { data: updateData, error: updateError } = await supabase.functions.invoke('update-skills-from-jd', {
        body: { extractedSkills: extractData.skills, jobId }
      });

      if (updateError) throw updateError;

      toast.success(`Updated matrix: ${updateData.summary.added} added, ${updateData.summary.updated} updated`);
      onComplete?.();
    } catch (error: any) {
      console.error('Extraction error:', error);
      toast.error(error.message || 'Failed to extract skills');
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
