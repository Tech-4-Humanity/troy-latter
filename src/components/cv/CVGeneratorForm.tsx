import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Sparkles } from "lucide-react";
import { JobDescriptionInput } from "./JobDescriptionInput";
import { CVPreview } from "./CVPreview";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const SAMPLE_JD_CTO = `Chief Technology Officer - SaaS Scale-up (Series B)
Location: Sydney, Australia | Hybrid

We're seeking a visionary CTO to architect our next phase of growth from $20M to $100M ARR. This role requires deep technical expertise combined with strategic business acumen to lead our engineering organization of 40+ across platform, data, and ML teams.

Key Responsibilities:
• Define and execute technical strategy aligned with aggressive growth targets
• Build and scale high-performing engineering teams across multiple locations
• Architect resilient, secure cloud-native infrastructure supporting 10M+ users
• Drive innovation in AI/ML capabilities to enhance product differentiation
• Establish engineering excellence through modern DevOps, testing, and deployment practices
• Partner with C-suite on product roadmap, budgeting, and strategic technology investments

Requirements:
• 15+ years software engineering with 8+ in senior leadership roles
• Proven track record scaling SaaS platforms through hypergrowth phases
• Deep expertise in cloud architectures (AWS/Azure/GCP), microservices, event-driven systems
• Experience leading 50+ person engineering organizations
• Strong background in data engineering, ML/AI implementation
• Excellent stakeholder management and board-level communication skills`;

const SAMPLE_JD_INNOVATION = `Head of Innovation & Digital Transformation
Enterprise Technology Organization | Melbourne

Lead enterprise-wide digital transformation initiatives leveraging emerging technologies (AI, IoT, cloud) to drive operational excellence and competitive advantage. This role sits at the intersection of business strategy and technology execution.

Key Accountabilities:
• Design and implement innovation frameworks and governance processes
• Identify, evaluate, and pilot emerging technologies for business impact
• Lead cross-functional teams in agile transformation initiatives
• Build strategic partnerships with technology vendors and startups
• Establish innovation labs and centers of excellence
• Measure and communicate ROI of innovation investments to executive leadership

Essential Criteria:
• 10+ years technology leadership with focus on innovation/transformation
• Deep knowledge of emerging tech landscape (GenAI, automation, cloud)
• Experience managing $5M+ innovation portfolios
• Strong change management and organizational design capabilities
• Track record delivering measurable business outcomes from technology investments`;

const SAMPLE_JD_TECHNICAL = `Principal Software Architect - Platform Engineering
Global Fintech | Remote-first

Design and evolve our core banking platform serving 2M+ customers across Asia-Pacific. This role combines deep architectural expertise with hands-on technical leadership to ensure our platform remains secure, scalable, and innovative.

Technical Focus:
• Event-driven microservices architecture (Kafka, RabbitMQ)
• Container orchestration (Kubernetes, Docker, service mesh)
• Polyglot persistence (PostgreSQL, MongoDB, Redis, Elasticsearch)
• Observability stack (Prometheus, Grafana, ELK, distributed tracing)
• Security & compliance (PCI-DSS, ISO27001, GDPR)
• CI/CD automation (GitHub Actions, ArgoCD, Terraform)

Requirements:
• 12+ years software development, 5+ as architect/principal engineer
• Expert-level knowledge of distributed systems and cloud-native patterns
• Production experience with high-throughput, low-latency systems
• Strong mentoring and technical leadership skills
• Financial services domain knowledge preferred`;

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
        <div className="flex flex-wrap gap-2 mb-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setJobDescription(SAMPLE_JD_CTO)}
            disabled={isGenerating}
          >
            📋 Sample: CTO Role
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setJobDescription(SAMPLE_JD_INNOVATION)}
            disabled={isGenerating}
          >
            💡 Sample: Innovation Leader
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setJobDescription(SAMPLE_JD_TECHNICAL)}
            disabled={isGenerating}
          >
            🔧 Sample: Technical Architect
          </Button>
        </div>
        
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