import { generateContent } from "@/lib/ai-utils";
import { JobAnalysis } from "@/lib/job-analyzer";
import { MatchScore } from "@/lib/match-scoring";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Mail, Network, Target } from "lucide-react";
import { useState, useEffect } from "react";

interface ApplicationStrategyProps {
  jobDescription: string;
  analysis: JobAnalysis;
  matchScore: MatchScore;
}

interface Strategy {
  leadWith: string;
  emphasize: string[];
  mentionEarly: string[];
  coverLetterAngle: string;
  subjectLine: string;
  networkingApproach: {
    target: string;
    introAngle: string;
  };
}

export function ApplicationStrategy({ jobDescription, analysis, matchScore }: ApplicationStrategyProps) {
  const [strategy, setStrategy] = useState<Strategy | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    generateStrategy();
  }, [jobDescription, analysis, matchScore]);

  const generateStrategy = async () => {
    setIsLoading(true);
    try {
      const strategyPrompt = `Based on this job analysis and match score, provide application strategy for Troy Latter.

Job Analysis:
- Opportunity Type: ${analysis.opportunityType}
- Company Stage: ${analysis.companySignals.stage}
- Key Priorities: ${analysis.decisionMakerPriorities.join(', ')}
- Match Score: ${matchScore.overall}%
- Technical Fit: ${matchScore.technical}%
- Leadership Fit: ${matchScore.leadership}%

Troy's Background:
- CEO, Tech 4 Humanity (current)
- CTO Alliances & Strategic Foresight, Unisys (2024-2025)
- Principal Solutions Architect, AWS (2019-2023)
- AGSVA NV2 security clearance
- Board: Queensland AI Hub, Standards Australia BCI Committee
- Expertise: AI/ML, government transformation, cloud architecture

Provide strategy in this format:

LEAD WITH:
[Single most compelling project/achievement that addresses their #1 priority]

EMPHASIZE (Top 3):
- [Relevant experience 1]
- [Relevant experience 2]
- [Relevant experience 3]

MENTION EARLY:
- [Key credential/clearance/position 1]
- [Key credential/clearance/position 2]

COVER LETTER ANGLE:
[Specific insight about their challenge - not generic]

SUBJECT LINE:
[For email applications - compelling and specific]

NETWORKING APPROACH:
Target: [Specific person/role to reach]
Intro angle: [How to connect / what to say]

Be specific and actionable. Reference actual Troy projects where relevant.`;

      const response = await generateContent({
        prompt: strategyPrompt,
        type: 'strategic',
        maxTokens: 1500,
      });

      // Parse the strategy
      const parsed = parseStrategy(response);
      setStrategy(parsed);
    } catch (error) {
      console.error('Failed to generate strategy:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const parseStrategy = (response: string): Strategy => {
    const strategy: Strategy = {
      leadWith: '',
      emphasize: [],
      mentionEarly: [],
      coverLetterAngle: '',
      subjectLine: '',
      networkingApproach: {
        target: '',
        introAngle: '',
      },
    };

    // Parse LEAD WITH
    const leadMatch = response.match(/LEAD WITH:([\s\S]*?)(?=EMPHASIZE|$)/i);
    if (leadMatch) {
      strategy.leadWith = leadMatch[1].trim().replace(/^\[|\]$/g, '');
    }

    // Parse EMPHASIZE
    const emphasizeMatch = response.match(/EMPHASIZE[^:]*:([\s\S]*?)(?=MENTION EARLY|$)/i);
    if (emphasizeMatch) {
      strategy.emphasize = emphasizeMatch[1]
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').replace(/^\[|\]$/g, '').trim())
        .filter(Boolean);
    }

    // Parse MENTION EARLY
    const mentionMatch = response.match(/MENTION EARLY:([\s\S]*?)(?=COVER LETTER|$)/i);
    if (mentionMatch) {
      strategy.mentionEarly = mentionMatch[1]
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').replace(/^\[|\]$/g, '').trim())
        .filter(Boolean);
    }

    // Parse COVER LETTER ANGLE
    const coverMatch = response.match(/COVER LETTER ANGLE:([\s\S]*?)(?=SUBJECT LINE|$)/i);
    if (coverMatch) {
      strategy.coverLetterAngle = coverMatch[1].trim().replace(/^\[|\]$/g, '');
    }

    // Parse SUBJECT LINE
    const subjectMatch = response.match(/SUBJECT LINE:([\s\S]*?)(?=NETWORKING|$)/i);
    if (subjectMatch) {
      strategy.subjectLine = subjectMatch[1].trim().replace(/^\[|\]$/g, '');
    }

    // Parse NETWORKING APPROACH
    const targetMatch = response.match(/Target:([\s\S]*?)(?=Intro angle|$)/i);
    if (targetMatch) {
      strategy.networkingApproach.target = targetMatch[1].trim().replace(/^\[|\]$/g, '');
    }

    const introMatch = response.match(/Intro angle:([\s\S]*?)$/i);
    if (introMatch) {
      strategy.networkingApproach.introAngle = introMatch[1].trim().replace(/^\[|\]$/g, '');
    }

    return strategy;
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Generating Application Strategy...</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="animate-pulse space-y-3">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!strategy) {
    return null;
  }

  return (
    <div className="space-y-4">
      {/* Lead With */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Lead With This
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-medium">{strategy.leadWith}</p>
        </CardContent>
      </Card>

      {/* Emphasize */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Emphasize in Application
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            {strategy.emphasize.map((item, i) => (
              <li key={i} className="text-sm">{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Mention Early */}
      {strategy.mentionEarly.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Mention Early
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              {strategy.mentionEarly.map((item, i) => (
                <li key={i} className="text-sm">{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Cover Letter & Email */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            Email Application
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Subject Line:</h4>
            <p className="text-sm bg-muted p-2 rounded">{strategy.subjectLine}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Cover Letter Opening:</h4>
            <p className="text-sm">{strategy.coverLetterAngle}</p>
          </div>
        </CardContent>
      </Card>

      {/* Networking */}
      {strategy.networkingApproach.target && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Network className="h-5 w-5" />
              Networking Strategy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold mb-1">Target Contact:</h4>
              <p className="text-sm">{strategy.networkingApproach.target}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Intro Angle:</h4>
              <p className="text-sm">{strategy.networkingApproach.introAngle}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
