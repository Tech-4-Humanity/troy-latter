import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { MatchScore } from "@/lib/match-scoring";

interface MatchScoreDisplayProps {
  score: MatchScore;
}

export function MatchScoreDisplay({ score }: MatchScoreDisplayProps) {
  const getScoreColor = (value: number) => {
    if (value >= 75) return "hsl(var(--chart-2))"; // Green
    if (value >= 60) return "hsl(var(--chart-3))"; // Yellow  
    return "hsl(var(--destructive))"; // Red
  };

  const getScoreTextColor = (value: number) => {
    if (value >= 75) return "text-green-600 dark:text-green-400";
    if (value >= 60) return "text-yellow-600 dark:text-yellow-400";
    return "text-destructive";
  };

  const getScoreBadgeVariant = (value: number): "default" | "secondary" | "destructive" => {
    if (value >= 75) return "default";
    if (value >= 60) return "secondary";
    return "destructive";
  };

  // Radial progress calculation
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score.overall / 100) * circumference;

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle>Match Score Analysis</CardTitle>
        <CardDescription>AI-powered alignment assessment</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Radial Overall Score */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-48 h-48">
            <svg className="transform -rotate-90 w-48 h-48">
              {/* Background circle */}
              <circle
                cx="96"
                cy="96"
                r={radius}
                stroke="hsl(var(--muted))"
                strokeWidth="12"
                fill="none"
              />
              {/* Progress circle */}
              <circle
                cx="96"
                cy="96"
                r={radius}
                stroke={getScoreColor(score.overall)}
                strokeWidth="12"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`text-5xl font-bold ${getScoreTextColor(score.overall)}`}>
                {score.overall}%
              </div>
              <div className="text-xs text-muted-foreground mt-1">OVERALL</div>
            </div>
          </div>
          <Badge variant={getScoreBadgeVariant(score.overall)} className="text-base px-6 py-2">
            {score.interpretation}
          </Badge>
        </div>

        {/* Score Breakdown with Color Bars */}
        <div className="space-y-4 pt-4 border-t">
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Detailed Breakdown
          </h4>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Technical Fit</span>
              <span className={getScoreTextColor(score.technical)}>{score.technical}%</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-1000 ease-out rounded-full"
                style={{ 
                  width: `${score.technical}%`,
                  backgroundColor: getScoreColor(score.technical)
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Leadership Alignment</span>
              <span className={getScoreTextColor(score.leadership)}>{score.leadership}%</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-1000 ease-out rounded-full"
                style={{ 
                  width: `${score.leadership}%`,
                  backgroundColor: getScoreColor(score.leadership)
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Domain Relevance</span>
              <span className={getScoreTextColor(score.domain)}>{score.domain}%</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-1000 ease-out rounded-full"
                style={{ 
                  width: `${score.domain}%`,
                  backgroundColor: getScoreColor(score.domain)
                }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Cultural Fit</span>
              <span className={getScoreTextColor(score.cultural)}>{score.cultural}%</span>
            </div>
            <div className="h-2.5 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-1000 ease-out rounded-full"
                style={{ 
                  width: `${score.cultural}%`,
                  backgroundColor: getScoreColor(score.cultural)
                }}
              />
            </div>
          </div>
        </div>

        {/* Recommendation */}
        <div className="pt-4 border-t bg-muted/30 rounded-lg p-4">
          <p className="text-sm font-medium">{score.recommendation}</p>
        </div>
      </CardContent>
    </Card>
  );
}
