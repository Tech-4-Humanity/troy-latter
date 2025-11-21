import { generateContent } from './ai-utils';

export interface JobAnalysis {
  keyRequirements: {
    technical: string[];
    leadership: string[];
    domain: string[];
  };
  companySignals: {
    stage: 'startup' | 'scale-up' | 'enterprise' | 'government';
    culture: string[];
    transformationType: 'transformation' | 'maintenance' | 'hybrid';
  };
  decisionMakerPriorities: string[];
  redFlags: string[];
  opportunityType: 'WORK' | 'JOB' | 'EITHER';
  rawAnalysis: string;
}

export async function analyzeJobDescription(jobDescription: string): Promise<JobAnalysis> {
  const analysisPrompt = `Analyze this job description and provide a structured assessment:

Job Description:
${jobDescription}

Provide analysis in the following format:

TECHNICAL REQUIREMENTS:
- List specific technical skills, tools, platforms required
- Note depth level (basic, intermediate, expert)

LEADERSHIP REQUIREMENTS:
- Identify leadership level (IC, Manager, Director, Executive)
- Note team size, scope of responsibility
- SFIA level if applicable

DOMAIN REQUIREMENTS:
- Industry/sector expertise needed
- Specific domain knowledge areas

COMPANY SIGNALS:
- Stage: startup/scale-up/enterprise/government
- Culture indicators from job description language
- Transformation vs maintenance focus

DECISION-MAKER PRIORITIES:
- What outcomes do they care about most?
- What problems are they trying to solve?
- What motivates this hire?

RED FLAGS:
- Unrealistic expectations
- Misaligned requirements
- Warning signs about role/company

OPPORTUNITY TYPE:
- Best fit: WORK (consulting/fractional 3-6 months) or JOB (full-time) or EITHER
- Reasoning for classification

Be specific and analytical.`;

  const rawAnalysis = await generateContent({
    prompt: analysisPrompt,
    type: 'analysis',
    maxTokens: 2000,
  });

  // Parse the raw analysis into structured format
  return parseAnalysis(rawAnalysis, jobDescription);
}

function parseAnalysis(rawAnalysis: string, jobDescription: string): JobAnalysis {
  const analysis: JobAnalysis = {
    keyRequirements: {
      technical: [],
      leadership: [],
      domain: [],
    },
    companySignals: {
      stage: 'enterprise',
      culture: [],
      transformationType: 'hybrid',
    },
    decisionMakerPriorities: [],
    redFlags: [],
    opportunityType: 'EITHER',
    rawAnalysis,
  };

  // Extract technical requirements
  const techMatch = rawAnalysis.match(/TECHNICAL REQUIREMENTS:([\s\S]*?)(?=LEADERSHIP REQUIREMENTS:|$)/i);
  if (techMatch) {
    analysis.keyRequirements.technical = techMatch[1]
      .split('\n')
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.replace(/^-\s*/, '').trim())
      .filter(Boolean);
  }

  // Extract leadership requirements
  const leadershipMatch = rawAnalysis.match(/LEADERSHIP REQUIREMENTS:([\s\S]*?)(?=DOMAIN REQUIREMENTS:|$)/i);
  if (leadershipMatch) {
    analysis.keyRequirements.leadership = leadershipMatch[1]
      .split('\n')
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.replace(/^-\s*/, '').trim())
      .filter(Boolean);
  }

  // Extract domain requirements
  const domainMatch = rawAnalysis.match(/DOMAIN REQUIREMENTS:([\s\S]*?)(?=COMPANY SIGNALS:|$)/i);
  if (domainMatch) {
    analysis.keyRequirements.domain = domainMatch[1]
      .split('\n')
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.replace(/^-\s*/, '').trim())
      .filter(Boolean);
  }

  // Extract company stage
  const stageMatch = rawAnalysis.match(/Stage:\s*(startup|scale-up|enterprise|government)/i);
  if (stageMatch) {
    analysis.companySignals.stage = stageMatch[1].toLowerCase() as any;
  }

  // Extract culture indicators
  const cultureMatch = rawAnalysis.match(/Culture indicators[:\s]*([\s\S]*?)(?=Transformation|$)/i);
  if (cultureMatch) {
    analysis.companySignals.culture = cultureMatch[1]
      .split('\n')
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.replace(/^-\s*/, '').trim())
      .filter(Boolean);
  }

  // Extract transformation type
  if (rawAnalysis.toLowerCase().includes('transformation focus')) {
    analysis.companySignals.transformationType = 'transformation';
  } else if (rawAnalysis.toLowerCase().includes('maintenance')) {
    analysis.companySignals.transformationType = 'maintenance';
  }

  // Extract decision-maker priorities
  const prioritiesMatch = rawAnalysis.match(/DECISION-MAKER PRIORITIES:([\s\S]*?)(?=RED FLAGS:|$)/i);
  if (prioritiesMatch) {
    analysis.decisionMakerPriorities = prioritiesMatch[1]
      .split('\n')
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.replace(/^-\s*/, '').trim())
      .filter(Boolean);
  }

  // Extract red flags
  const redFlagsMatch = rawAnalysis.match(/RED FLAGS:([\s\S]*?)(?=OPPORTUNITY TYPE:|$)/i);
  if (redFlagsMatch) {
    analysis.redFlags = redFlagsMatch[1]
      .split('\n')
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.replace(/^-\s*/, '').trim())
      .filter(Boolean);
  }

  // Extract opportunity type
  const oppTypeMatch = rawAnalysis.match(/Best fit:\s*(WORK|JOB|EITHER)/i);
  if (oppTypeMatch) {
    analysis.opportunityType = oppTypeMatch[1].toUpperCase() as 'WORK' | 'JOB' | 'EITHER';
  }

  return analysis;
}
