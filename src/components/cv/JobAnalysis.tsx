import { JobAnalysis } from "@/lib/job-analyzer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Building2, Target, AlertTriangle, Briefcase } from "lucide-react";

interface JobAnalysisProps {
  analysis: JobAnalysis;
}

export function JobAnalysisDisplay({ analysis }: JobAnalysisProps) {
  return (
    <div className="space-y-4">
      {/* Opportunity Type */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="h-5 w-5" />
            Opportunity Classification
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2">
            <Badge variant={analysis.opportunityType === 'WORK' ? 'default' : analysis.opportunityType === 'JOB' ? 'secondary' : 'outline'} className="text-lg">
              {analysis.opportunityType === 'WORK' ? 'WORK Track - Consulting/Fractional' : 
               analysis.opportunityType === 'JOB' ? 'JOB Track - Full-time' : 
               'EITHER Track - Flexible'}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {analysis.opportunityType === 'WORK' && 'Best suited for 3-6 month fractional CTO engagement ($5-10K/month)'}
            {analysis.opportunityType === 'JOB' && 'Best suited for full-time executive role ($250-350K + equity)'}
            {analysis.opportunityType === 'EITHER' && 'Could be structured as either consulting engagement or full-time role'}
          </p>
        </CardContent>
      </Card>

      {/* Key Requirements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Key Requirements
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {analysis.keyRequirements.technical.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.keyRequirements.technical.slice(0, 10).map((skill, i) => (
                  <Badge key={i} variant="secondary">{skill}</Badge>
                ))}
                {analysis.keyRequirements.technical.length > 10 && (
                  <Badge variant="outline">+{analysis.keyRequirements.technical.length - 10} more</Badge>
                )}
              </div>
            </div>
          )}
          
          {analysis.keyRequirements.leadership.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Leadership Requirements</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {analysis.keyRequirements.leadership.slice(0, 5).map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          )}
          
          {analysis.keyRequirements.domain.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Domain Expertise</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {analysis.keyRequirements.domain.slice(0, 5).map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Company Signals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Company Signals
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <span className="font-semibold">Stage:</span>{' '}
            <Badge variant="outline" className="ml-2">
              {analysis.companySignals.stage}
            </Badge>
          </div>
          <div>
            <span className="font-semibold">Focus:</span>{' '}
            <Badge variant="outline" className="ml-2">
              {analysis.companySignals.transformationType}
            </Badge>
          </div>
          {analysis.companySignals.culture.length > 0 && (
            <div>
              <span className="font-semibold">Culture Indicators:</span>
              <ul className="list-disc list-inside mt-1 text-sm space-y-1">
                {analysis.companySignals.culture.slice(0, 3).map((indicator, i) => (
                  <li key={i}>{indicator}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Decision-Maker Priorities */}
      {analysis.decisionMakerPriorities.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Decision-Maker Priorities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {analysis.decisionMakerPriorities.map((priority, i) => (
                <li key={i} className="text-foreground">{priority}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Red Flags */}
      {analysis.redFlags.length > 0 && (
        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              Red Flags - Consider Carefully
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              {analysis.redFlags.map((flag, i) => (
                <li key={i} className="text-destructive">{flag}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Address these concerns proactively in your application or clarify during screening call.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
