import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { TrendingUp, TrendingDown, Minus, Award, Target } from "lucide-react";
import type { JobAnalysis } from "@/lib/job-analyzer";
import type { MatchScore } from "@/lib/match-scoring";

interface SkillsAnalysisProps {
  analysis: JobAnalysis;
  matchScore: MatchScore;
}

interface DomainMatch {
  domain: string;
  requiredScore: number;
  troyScore: number;
  gap: number;
  status: 'strong' | 'adequate' | 'gap';
}

export function SkillsAnalysis({ analysis, matchScore }: SkillsAnalysisProps) {
  const [domainMatches, setDomainMatches] = useState<DomainMatch[]>([]);

  useEffect(() => {
    // Create domain matching analysis
    const domains = new Map<string, { required: Set<string>, coverage: number }>();
    
    // Categorize technical requirements by domain
    analysis.keyRequirements.technical.forEach(skill => {
      const domain = categorizeSkill(skill);
      if (!domains.has(domain)) {
        domains.set(domain, { required: new Set(), coverage: 0 });
      }
      domains.get(domain)!.required.add(skill);
    });

    // Map to domain scores (simulated based on Troy's profile)
    const troyDomainScores = {
      'AI/ML': 95,
      'Cloud Architecture': 90,
      'Leadership': 92,
      'Strategy': 88,
      'DevOps': 85,
      'Data Engineering': 80,
      'Security': 82,
      'Frontend': 70,
      'Backend': 85,
      'Other': 75
    };

    const matches: DomainMatch[] = Array.from(domains.entries()).map(([domain, data]) => {
      const troyScore = troyDomainScores[domain as keyof typeof troyDomainScores] || 75;
      const requiredScore = 70; // Baseline requirement
      const gap = troyScore - requiredScore;
      
      return {
        domain,
        requiredScore,
        troyScore,
        gap,
        status: gap >= 15 ? 'strong' : gap >= 0 ? 'adequate' : 'gap'
      };
    });

    setDomainMatches(matches.sort((a, b) => b.troyScore - a.troyScore));
  }, [analysis]);

  const radarData = domainMatches.map(dm => ({
    domain: dm.domain,
    required: dm.requiredScore,
    troy: dm.troyScore
  }));

  const categorizeSkill = (skill: string): string => {
    const lower = skill.toLowerCase();
    if (lower.includes('ai') || lower.includes('ml') || lower.includes('machine learning') || lower.includes('llm')) return 'AI/ML';
    if (lower.includes('aws') || lower.includes('azure') || lower.includes('cloud') || lower.includes('gcp')) return 'Cloud Architecture';
    if (lower.includes('lead') || lower.includes('manage') || lower.includes('director') || lower.includes('executive')) return 'Leadership';
    if (lower.includes('strategy') || lower.includes('vision') || lower.includes('roadmap')) return 'Strategy';
    if (lower.includes('devops') || lower.includes('ci/cd') || lower.includes('kubernetes') || lower.includes('docker')) return 'DevOps';
    if (lower.includes('data') || lower.includes('analytics') || lower.includes('pipeline')) return 'Data Engineering';
    if (lower.includes('security') || lower.includes('compliance') || lower.includes('governance')) return 'Security';
    if (lower.includes('react') || lower.includes('frontend') || lower.includes('ui')) return 'Frontend';
    if (lower.includes('backend') || lower.includes('api') || lower.includes('microservices')) return 'Backend';
    return 'Other';
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload.length) return null;
    const data = payload[0].payload;
    
    return (
      <Card className="shadow-lg border">
        <CardContent className="p-3 text-xs space-y-1">
          <div className="font-semibold">{data.domain}</div>
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Required:</span>
            <Badge variant="outline">{data.required}</Badge>
          </div>
          <div className="flex justify-between gap-4">
            <span className="text-muted-foreground">Troy's Level:</span>
            <Badge variant="default">{data.troy}</Badge>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Overall Skills Match */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Skills Match Overview
          </CardTitle>
          <CardDescription>
            Technical alignment: {matchScore.technical}% | Leadership: {matchScore.leadership}% | Domain: {matchScore.domain}%
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">Overall Match</span>
              <span className="text-muted-foreground">{matchScore.overall}%</span>
            </div>
            <Progress value={matchScore.overall} className="h-2" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-muted/50">
              <div className="text-xs text-muted-foreground mb-1">Technical</div>
              <div className="text-2xl font-bold">{matchScore.technical}%</div>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <div className="text-xs text-muted-foreground mb-1">Leadership</div>
              <div className="text-2xl font-bold">{matchScore.leadership}%</div>
            </div>
            <div className="p-3 rounded-lg bg-muted/50">
              <div className="text-xs text-muted-foreground mb-1">Domain</div>
              <div className="text-2xl font-bold">{matchScore.domain}%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Radar Chart */}
      {radarData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Domain Coverage Analysis
            </CardTitle>
            <CardDescription>
              Troy's expertise vs. role requirements across key domains
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis 
                    dataKey="domain" 
                    tick={{ fill: 'hsl(var(--foreground))', fontSize: 11 }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
                  />
                  <Radar
                    name="Troy's Level"
                    dataKey="troy"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Required Level"
                    dataKey="required"
                    stroke="hsl(var(--muted-foreground))"
                    fill="hsl(var(--muted-foreground))"
                    fillOpacity={0.2}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: '10px' }} iconType="circle" />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Domain-by-Domain Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Domain Strength Analysis</CardTitle>
          <CardDescription>
            Detailed breakdown of Troy's capabilities across required domains
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {domainMatches.map((dm, idx) => (
              <div key={idx} className="p-4 rounded-lg border bg-card">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{dm.domain}</span>
                    {dm.status === 'strong' && (
                      <Badge variant="default" className="gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Strong
                      </Badge>
                    )}
                    {dm.status === 'adequate' && (
                      <Badge variant="secondary" className="gap-1">
                        <Minus className="h-3 w-3" />
                        Adequate
                      </Badge>
                    )}
                    {dm.status === 'gap' && (
                      <Badge variant="destructive" className="gap-1">
                        <TrendingDown className="h-3 w-3" />
                        Gap
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {dm.troyScore}/100
                  </span>
                </div>
                <Progress value={dm.troyScore} className="h-2" />
                <div className="mt-2 text-xs text-muted-foreground">
                  {dm.gap >= 15 && `Significantly exceeds requirements (+${dm.gap} points)`}
                  {dm.gap >= 0 && dm.gap < 15 && `Meets requirements (+${dm.gap} points)`}
                  {dm.gap < 0 && `Below requirements (${dm.gap} points)`}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Key Requirements Match */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Requirements Coverage</CardTitle>
          <CardDescription>
            {analysis.keyRequirements.technical.length} technical requirements identified
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {analysis.keyRequirements.technical.map((req, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {req}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
