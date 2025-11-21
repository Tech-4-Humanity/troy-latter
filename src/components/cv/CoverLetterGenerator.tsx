import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Mail, FileText } from "lucide-react";
import { toast } from "sonner";
import type { JobAnalysis } from "@/lib/job-analyzer";

interface CoverLetterGeneratorProps {
  coverLetter: string;
  jobAnalysis: JobAnalysis;
}

export function CoverLetterGenerator({ coverLetter, jobAnalysis }: CoverLetterGeneratorProps) {
  const handleCopy = async (content: string, label: string) => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success(`${label} copied to clipboard`);
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    }
  };

  // Extract subject line if present
  const subjectMatch = coverLetter.match(/Subject(?:\s+Line)?:\s*(.+?)(?:\n|$)/i);
  const subjectLine = subjectMatch?.[1]?.trim() || generateSubjectLine(jobAnalysis);
  
  // Remove subject line from main content if it was extracted
  const letterContent = subjectMatch 
    ? coverLetter.replace(/Subject(?:\s+Line)?:\s*.+?(?:\n|$)/i, '').trim()
    : coverLetter;

  return (
    <div className="space-y-4">
      {/* Subject Line Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Mail className="h-4 w-4 text-primary" />
            Email Subject Line
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <div className="flex-1 p-3 bg-muted/50 rounded-md">
              <p className="text-sm font-medium">{subjectLine}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleCopy(subjectLine, 'Subject line')}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Cover Letter Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Cover Letter
              </CardTitle>
              <CardDescription className="mt-1">
                Tailored for {jobAnalysis.opportunityType} track
              </CardDescription>
            </div>
            <Badge variant={jobAnalysis.opportunityType === 'WORK' ? 'default' : 'secondary'}>
              {jobAnalysis.opportunityType}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <div className="whitespace-pre-wrap p-4 bg-muted/30 rounded-lg border">
              {letterContent}
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => handleCopy(letterContent, 'Cover letter')}
              className="flex-1"
            >
              <Copy className="h-4 w-4 mr-2" />
              Copy Letter
            </Button>
            <Button
              variant="outline"
              onClick={() => handleCopy(`${subjectLine}\n\n${letterContent}`, 'Complete email')}
              className="flex-1"
            >
              <Mail className="h-4 w-4 mr-2" />
              Copy with Subject
            </Button>
          </div>

          {/* Word count */}
          <div className="text-xs text-muted-foreground text-center">
            {letterContent.split(/\s+/).length} words
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function generateSubjectLine(analysis: JobAnalysis): string {
  const trackPrefix = analysis.opportunityType === 'WORK' 
    ? 'Fractional CTO/AI Strategy Consultant' 
    : 'Chief AI Officer Application';
  
  return `${trackPrefix} - Troy Latter (NV2 Cleared, AWS/Unisys CTO)`;
}
