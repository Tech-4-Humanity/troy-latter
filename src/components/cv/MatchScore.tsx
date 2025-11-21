import { MatchScore } from "@/lib/match-scoring";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, AlertCircle, XCircle } from "lucide-react";

interface MatchScoreProps {
  score: MatchScore;
}

export function MatchScoreDisplay({ score }: MatchScoreProps) {
  const getScoreColor = (value: number) => {
    if (value >= 75) return "text-green-600";
    if (value >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreIcon = (value: number) => {
    if (value >= 75) return <CheckCircle2 className="h-5 w-5 text-green-600" />;
    if (value >= 60) return <AlertCircle className="h-5 w-5 text-yellow-600" />;
    return <XCircle className="h-5 w-5 text-red-600" />;
  };

  return (
    <div className="space-y-4">
      {/* Overall Score */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Overall Match Score</span>
            <div className="flex items-center gap-2">
              {getScoreIcon(score.overall)}
              <span className={`text-3xl font-bold ${getScoreColor(score.overall)}`}>
                {score.overall}%
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-lg font-semibold">{score.interpretation}</div>
          <Progress value={score.overall} className="h-3" />
          <p className="text-sm text-muted-foreground">{score.recommendation}</p>
        </CardContent>
      </Card>

      {/* Detailed Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Score Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Technical Fit */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Technical Fit</span>
              <span className={`font-bold ${getScoreColor(score.technical)}`}>
                {score.technical}%
              </span>
            </div>
            <Progress value={score.technical} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Alignment with required technical skills and expertise
            </p>
          </div>

          {/* Leadership Alignment */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Leadership Alignment</span>
              <span className={`font-bold ${getScoreColor(score.leadership)}`}>
                {score.leadership}%
              </span>
            </div>
            <Progress value={score.leadership} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Match with leadership level and scope of responsibility
            </p>
          </div>

          {/* Domain Relevance */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Domain Relevance</span>
              <span className={`font-bold ${getScoreColor(score.domain)}`}>
                {score.domain}%
              </span>
            </div>
            <Progress value={score.domain} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Industry and sector experience alignment
            </p>
          </div>

          {/* Cultural Fit */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-medium">Cultural Fit</span>
              <span className={`font-bold ${getScoreColor(score.cultural)}`}>
                {score.cultural}%
              </span>
            </div>
            <Progress value={score.cultural} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Work style and company culture alignment
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
