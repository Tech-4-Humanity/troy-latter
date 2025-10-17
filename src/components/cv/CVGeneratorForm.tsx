import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Sparkles } from "lucide-react";
import { JobDescriptionInput } from "./JobDescriptionInput";
import { CVPreview } from "./CVPreview";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export function CVGeneratorForm() {
  const [jobDescription, setJobDescription] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCV, setGeneratedCV] = useState<string | null>(null);
  const [matchScore, setMatchScore] = useState<number | undefined>();

  const handleGenerate = async () => {
    if (jobDescription.trim().length < 50) {
      toast.error("Please enter a job description with at least 50 characters");
      return;
    }

    setIsGenerating(true);
    setGeneratedCV(null);
    setMatchScore(undefined);

    try {
      const { data, error } = await supabase.functions.invoke('generate-cv', {
        body: { 
          jobDescription: jobDescription.trim(),
          userEmail: userEmail.trim() || null
        }
      });

      if (error) {
        throw error;
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setGeneratedCV(data.cv);
      setMatchScore(data.matchScore);
      toast.success("CV generated successfully!");

    } catch (error: any) {
      console.error('CV generation error:', error);
      
      if (error.message?.includes('Rate limit')) {
        toast.error("Rate limit exceeded. Please wait a moment and try again.");
      } else if (error.message?.includes('credits')) {
        toast.error("AI credits exhausted. Please contact support.");
      } else {
        toast.error(error.message || "Failed to generate CV. Please try again.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const canGenerate = jobDescription.trim().length >= 50 && jobDescription.trim().length <= 5000;

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        <JobDescriptionInput
          value={jobDescription}
          onChange={setJobDescription}
          disabled={isGenerating}
        />

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-muted-foreground">
            Email (optional - for tracking your generations)
          </Label>
          <Input
            id="email"
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="your.email@example.com"
            disabled={isGenerating}
            className="max-w-md"
          />
        </div>

        <Button
          onClick={handleGenerate}
          disabled={!canGenerate || isGenerating}
          size="lg"
          className="w-full md:w-auto gap-2"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Generating Your Tailored CV...
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5" />
              Generate Tailored CV
            </>
          )}
        </Button>
      </div>

      {isGenerating && (
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-6 space-y-3">
          <div className="flex items-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
            <h3 className="font-semibold text-foreground">AI is analyzing the job description...</h3>
          </div>
          <p className="text-sm text-muted-foreground pl-8">
            Matching requirements to Troy's experience and achievements
          </p>
        </div>
      )}

      {generatedCV && (
        <CVPreview cv={generatedCV} matchScore={matchScore} />
      )}
    </div>
  );
}