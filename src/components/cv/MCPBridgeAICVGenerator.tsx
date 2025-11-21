import { useState, useCallback } from "react";
import { generateContent } from "@/lib/ai-utils";
import { analyzeJobDescription, JobAnalysis } from "@/lib/job-analyzer";
import { calculateMatchScore, MatchScore } from "@/lib/match-scoring";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CVPreview } from "./CVPreview";
import { JobAnalysisDisplay } from "./JobAnalysis";
import { MatchScoreDisplay } from "./MatchScore";
import { ApplicationStrategy } from "./ApplicationStrategy";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export function MCPBridgeAICVGenerator() {
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [jobAnalysis, setJobAnalysis] = useState<JobAnalysis | null>(null);
  const [matchScore, setMatchScore] = useState<MatchScore | null>(null);
  const [generatedCV, setGeneratedCV] = useState("");
  const [generatedHTML, setGeneratedHTML] = useState("");
  const [currentStep, setCurrentStep] = useState<'input' | 'analysis' | 'generation'>('input');

  const handleAnalyze = useCallback(async () => {
    if (!jobDescription.trim()) {
      toast.error('Please enter a job description');
      return;
    }
    
    setIsAnalyzing(true);
    try {
      const analysis = await analyzeJobDescription(jobDescription);
      const score = calculateMatchScore(analysis, jobDescription);
      
      setJobAnalysis(analysis);
      setMatchScore(score);
      setCurrentStep('analysis');
      toast.success('Job analyzed successfully!');
    } catch (error) {
      console.error('Job analysis failed:', error);
      toast.error('Failed to analyze job description');
    } finally {
      setIsAnalyzing(false);
    }
  }, [jobDescription]);

  const handleGenerate = useCallback(async () => {
    if (!jobAnalysis || !matchScore) return;
    
    setIsGenerating(true);
    try {
      const trackContext = jobAnalysis.opportunityType === 'WORK' 
        ? 'Position for fractional CTO engagement (3-6 month, $5-10K/month). Emphasize Tech 4 Humanity as proof of execution.'
        : jobAnalysis.opportunityType === 'JOB'
        ? 'Position for full-time executive role ($250-350K + equity). Emphasize transformation leadership at scale.'
        : 'Position for flexible engagement. Emphasize both consulting capability and executive leadership.';

      const prioritiesContext = jobAnalysis.decisionMakerPriorities.length > 0
        ? `\nDecision-Maker Priorities:\n${jobAnalysis.decisionMakerPriorities.map((p: string) => `- ${p}`).join('\n')}`
        : '';

      // Generate markdown CV with intelligence
      const cvMarkdown = await generateContent({
        prompt: `Generate a highly tailored CV for Troy Latter based on this job opportunity analysis.

Troy Latter's Core Profile:
- Chief Technology Officer with 15+ years enterprise transformation experience
- Current: CEO of Tech 4 Humanity, Advisory Board Member at Queensland AI Hub
- Previous: CTO Alliances & Strategic Foresight at Unisys (2024-2025)
- Previous: Principal Solutions Architect at AWS (2019-2023)
- Expertise: AI/ML strategy and execution, government digital transformation, cloud architecture
- Security Clearance: AGSVA NV2
- Board Positions: Queensland AI Hub, Standards Australia BCI Committee
- Track Record: Led AI pilots achieving 30-40% efficiency gains, 100+ executive briefings

Job Analysis Results:
- Opportunity Type: ${jobAnalysis.opportunityType}
- Match Score: ${matchScore.overall}% overall
- Company Stage: ${jobAnalysis.companySignals.stage}
- Transformation Focus: ${jobAnalysis.companySignals.transformationType}${prioritiesContext}

Positioning Strategy:
${trackContext}

Job Description:
${jobDescription}

Generate a professional CV (2-3 pages) that:
1. Opens with executive summary directly addressing their top priority
2. Uses SFIA Level 7 framing for technical roles
3. Emphasizes relevant transformation outcomes (quantified where possible)
4. Highlights NV2 clearance prominently if government role
5. Positions Tech 4 Humanity as proof Troy executes (not just advises)
6. Uses their terminology and language from job description
7. Addresses any identified red flags proactively
8. ATS-friendly formatting
9. Maximum impact in minimum words

Format as clean markdown with clear sections.`,
        type: 'cv',
        maxTokens: 3000,
      });

      // Generate HTML version
      const cvHTML = await generateContent({
        prompt: `Convert this CV to clean, professional HTML suitable for viewing in a browser.

CV Content:
${cvMarkdown}

Requirements:
- Clean, modern design
- Professional typography
- Print-friendly
- No external dependencies
- Semantic HTML5

Wrap in a complete HTML document with minimal inline CSS.`,
        type: 'cv',
        maxTokens: 3000,
      });

      setGeneratedCV(cvMarkdown);
      setGeneratedHTML(cvHTML);
      setCurrentStep('generation');
      toast.success('CV generated successfully!');
    } catch (error) {
      console.error("CV generation failed:", error);
      toast.error('Failed to generate CV');
    } finally {
      setIsGenerating(false);
    }
  }, [jobDescription, jobAnalysis, matchScore]);

  return (
    <div className="space-y-6">
      {/* Step 1: Input Job Description */}
      {currentStep === 'input' && (
        <div className="space-y-4">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start gap-3">
            <Sparkles className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="space-y-1">
              <h3 className="font-semibold text-sm">Intelligent CV Generator</h3>
              <p className="text-sm text-muted-foreground">
                Analyzes job opportunities and creates tailored applications using Troy's full context. 
                Get match scores, strategic recommendations, and positioning for both WORK (consulting) and JOB (full-time) tracks.
              </p>
            </div>
          </div>

          <div>
            <Label htmlFor="job-desc">Job Description</Label>
            <Textarea
              id="job-desc"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the complete job description here..."
              className="min-h-[200px] font-mono text-sm"
              disabled={isAnalyzing}
            />
          </div>

          <Button
            onClick={handleAnalyze}
            disabled={!jobDescription.trim() || isAnalyzing}
            className="w-full"
            size="lg"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing Job Opportunity...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Analyze Job & Calculate Match
              </>
            )}
          </Button>
        </div>
      )}

      {/* Step 2: Analysis Results */}
      {currentStep === 'analysis' && jobAnalysis && matchScore && (
        <div className="space-y-4">
          <Tabs defaultValue="score" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="score">Match Score</TabsTrigger>
              <TabsTrigger value="analysis">Job Analysis</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="score" className="space-y-4">
              <MatchScoreDisplay score={matchScore} />
            </TabsContent>
            
            <TabsContent value="analysis" className="space-y-4">
              <JobAnalysisDisplay analysis={jobAnalysis} />
            </TabsContent>
            
            <TabsContent value="strategy" className="space-y-4">
              <ApplicationStrategy 
                jobDescription={jobDescription}
                analysis={jobAnalysis}
                matchScore={matchScore}
              />
            </TabsContent>
          </Tabs>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                setCurrentStep('input');
                setJobAnalysis(null);
                setMatchScore(null);
              }}
              className="flex-1"
            >
              Analyze Different Job
            </Button>
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="flex-1"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating CV...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate Tailored CV
                </>
              )}
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Generated CV */}
      {currentStep === 'generation' && generatedCV && (
        <div className="space-y-4">
          <CVPreview
            cv={generatedCV}
            cvHTML={generatedHTML}
            matchScore={matchScore?.overall || 0}
            template="mcp-bridge"
          />
          
          <Button
            variant="outline"
            onClick={() => {
              setCurrentStep('analysis');
              setGeneratedCV("");
              setGeneratedHTML("");
            }}
            className="w-full"
          >
            Back to Analysis
          </Button>
        </div>
      )}
    </div>
  );
}
