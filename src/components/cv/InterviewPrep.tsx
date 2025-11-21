import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, MessageSquare, HelpCircle } from "lucide-react";
import type { JobAnalysis } from "@/lib/job-analyzer";
import type { MatchScore } from "@/lib/match-scoring";

interface InterviewPrepProps {
  jobDescription: string;
  analysis: JobAnalysis;
  matchScore: MatchScore;
  prepContent: string;
}

export function InterviewPrep({ jobDescription, analysis, matchScore, prepContent }: InterviewPrepProps) {
  // Parse the AI-generated prep content into sections
  const sections = parseInterviewPrep(prepContent);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            Interview Preparation
          </CardTitle>
          <CardDescription>
            Likely questions and strategic answers based on the job analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Likely Questions */}
          {sections.questions.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Likely Interview Questions
              </h3>
              <div className="space-y-4">
                {sections.questions.map((q, i) => (
                  <div key={i} className="border-l-4 border-primary/30 pl-4 space-y-2">
                    <p className="font-medium text-foreground">{q.question}</p>
                    {q.framework && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Framework:</span> {q.framework}
                      </p>
                    )}
                    {q.story && (
                      <p className="text-sm">
                        <span className="font-medium text-foreground">Your story:</span>{" "}
                        <span className="text-muted-foreground">{q.story}</span>
                      </p>
                    )}
                    {q.keyMessage && (
                      <p className="text-sm">
                        <span className="font-medium text-foreground">Key message:</span>{" "}
                        <span className="text-muted-foreground">{q.keyMessage}</span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Questions to Ask */}
          {sections.questionsToAsk.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Questions to Ask Them
              </h3>
              <div className="space-y-2">
                {sections.questionsToAsk.map((q, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Badge variant="outline" className="mt-1 shrink-0">
                      {q.category}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{q.question}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Raw content fallback */}
          {sections.questions.length === 0 && sections.questionsToAsk.length === 0 && (
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <div className="whitespace-pre-wrap text-sm text-muted-foreground">
                {prepContent}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

interface ParsedQuestion {
  question: string;
  framework?: string;
  story?: string;
  keyMessage?: string;
}

interface ParsedQuestionToAsk {
  category: string;
  question: string;
}

interface ParsedSections {
  questions: ParsedQuestion[];
  questionsToAsk: ParsedQuestionToAsk[];
}

function parseInterviewPrep(content: string): ParsedSections {
  const sections: ParsedSections = {
    questions: [],
    questionsToAsk: [],
  };

  // Try to parse structured content
  const questionMatches = content.match(/\d+\.\s+"(.+?)"/g);
  if (questionMatches) {
    questionMatches.forEach((match) => {
      const questionText = match.replace(/^\d+\.\s+"/, '').replace(/"$/, '');
      
      // Find framework
      const frameworkMatch = content.match(new RegExp(`${questionText.slice(0, 30)}[\\s\\S]*?Framework:\\s*(.+?)\\n`, 'i'));
      const storyMatch = content.match(new RegExp(`${questionText.slice(0, 30)}[\\s\\S]*?Your story:\\s*(.+?)\\n`, 'i'));
      const messageMatch = content.match(new RegExp(`${questionText.slice(0, 30)}[\\s\\S]*?Key message:\\s*(.+?)\\n`, 'i'));

      sections.questions.push({
        question: questionText,
        framework: frameworkMatch?.[1]?.trim(),
        story: storyMatch?.[1]?.trim(),
        keyMessage: messageMatch?.[1]?.trim(),
      });
    });
  }

  // Parse questions to ask
  const questionsToAskMatch = content.match(/QUESTIONS TO ASK THEM:([\s\S]*?)(?=\n\n|$)/i);
  if (questionsToAskMatch) {
    const questionLines = questionsToAskMatch[1].split('\n').filter(line => line.trim().startsWith('-'));
    questionLines.forEach((line) => {
      const cleaned = line.replace(/^-\s*/, '').trim();
      const category = cleaned.includes('Strategic') ? 'Strategic' :
                      cleaned.includes('role') ? 'Role' :
                      cleaned.includes('Timeline') ? 'Process' : 'General';
      sections.questionsToAsk.push({
        category,
        question: cleaned,
      });
    });
  }

  return sections;
}
