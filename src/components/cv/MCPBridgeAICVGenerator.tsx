import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2, Sparkles } from 'lucide-react';
import { generateContent } from '@/lib/ai-utils';
import { CVPreview } from './CVPreview';

export function MCPBridgeAICVGenerator() {
  const [jobDescription, setJobDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCV, setGeneratedCV] = useState('');
  const [generatedHTML, setGeneratedHTML] = useState('');

  const handleGenerate = useCallback(async () => {
    if (!jobDescription.trim()) {
      toast.error('Please enter a job description');
      return;
    }

    setIsGenerating(true);
    setGeneratedCV('');
    setGeneratedHTML('');

    try {
      const prompt = `Generate a professional CV tailored for this job description:

${jobDescription}

Use Troy Latter's actual experience, skills, certifications, and achievements. Focus on relevance to the role.
Format as professional markdown with clear sections.`;

      const cv = await generateContent({
        prompt,
        type: 'cv',
        context: {
          jobDescription,
          format: 'markdown'
        }
      });

      setGeneratedCV(cv);
      
      // Generate HTML version
      const htmlPrompt = `Convert this CV to professional HTML with styling:

${cv}

Use clean, professional HTML with inline CSS. Make it print-friendly.`;

      const html = await generateContent({
        prompt: htmlPrompt,
        type: 'cv',
        context: {
          format: 'html'
        }
      });

      setGeneratedHTML(html);
      toast.success('CV generated successfully using MCP Bridge AI!');
    } catch (error) {
      console.error('CV generation failed:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to generate CV');
    } finally {
      setIsGenerating(false);
    }
  }, [jobDescription]);

  return (
    <div className="space-y-6">
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
        <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
        <div className="space-y-1">
          <h3 className="font-semibold text-sm">MCP Bridge AI Generator</h3>
          <p className="text-sm text-muted-foreground">
            Powered by Troy's personal AI bridge with full context access (Tech 4 Humanity, boards, certifications, actual experience)
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mcp-job-description">Job Description</Label>
        <Textarea
          id="mcp-job-description"
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          className="min-h-[200px]"
        />
      </div>

      <Button 
        onClick={handleGenerate}
        disabled={isGenerating || !jobDescription.trim()}
        className="w-full"
        size="lg"
      >
        {isGenerating ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Generating with MCP Bridge AI...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Tailored CV with MCP Bridge
          </>
        )}
      </Button>

      {isGenerating && (
        <div className="text-center text-sm text-muted-foreground py-4">
          <p className="animate-pulse">Using Troy's actual context to tailor CV...</p>
        </div>
      )}

      {generatedCV && (
        <CVPreview
          cv={generatedCV}
          cvHTML={generatedHTML}
          matchScore={0}
          template="mcp-bridge"
        />
      )}
    </div>
  );
}
