import { JobAnalysis } from './job-analyzer';

export interface MatchScore {
  technical: number;
  leadership: number;
  domain: number;
  cultural: number;
  overall: number;
  interpretation: string;
  recommendation: string;
}

const TROY_PROFILE = {
  technical: [
    'AI/ML', 'machine learning', 'artificial intelligence', 'deep learning',
    'AWS', 'Azure', 'GCP', 'cloud architecture', 'cloud native',
    'Python', 'TypeScript', 'JavaScript', 'API design',
    'microservices', 'serverless', 'containers', 'kubernetes',
    'data engineering', 'analytics', 'big data',
    'agentic systems', 'multi-agent orchestration', 'LLM', 'RAG',
    'security', 'cybersecurity', 'zero trust', 'compliance',
  ],
  leadership: [
    'CTO', 'Chief Technology Officer', 'VP', 'Director', 'Head of',
    'executive', 'strategic', 'transformation', 'change management',
    'SFIA Level 7', 'enterprise architecture', 'digital strategy',
    'innovation', 'emerging technology', 'research and development',
  ],
  domain: [
    'government', 'defense', 'defence', 'public sector', 'federal',
    'home affairs', 'immigration', 'border security',
    'financial services', 'banking', 'fintech', 'payments',
    'healthcare', 'utilities', 'transport', 'logistics',
    'enterprise transformation', 'digital transformation',
  ],
  clearance: ['NV2', 'AGSVA', 'security clearance', 'classified'],
  boards: ['advisory board', 'board member', 'standards', 'AI hub'],
};

export function calculateMatchScore(jobAnalysis: JobAnalysis, jobDescription: string): MatchScore {
  const jdLower = jobDescription.toLowerCase();
  
  // Technical fit scoring
  const technicalScore = calculateTechnicalScore(jobAnalysis, jdLower);
  
  // Leadership alignment scoring
  const leadershipScore = calculateLeadershipScore(jobAnalysis, jdLower);
  
  // Domain relevance scoring
  const domainScore = calculateDomainScore(jobAnalysis, jdLower);
  
  // Cultural fit scoring
  const culturalScore = calculateCulturalScore(jobAnalysis, jdLower);
  
  // Overall weighted score
  const overall = Math.round(
    technicalScore * 0.35 +
    leadershipScore * 0.30 +
    domainScore * 0.25 +
    culturalScore * 0.10
  );

  return {
    technical: technicalScore,
    leadership: leadershipScore,
    domain: domainScore,
    cultural: culturalScore,
    overall,
    interpretation: getInterpretation(overall),
    recommendation: getRecommendation(overall, jobAnalysis),
  };
}

function calculateTechnicalScore(analysis: JobAnalysis, jdLower: string): number {
  let matches = 0;
  let total = 0;

  // Check Troy's technical skills against requirements
  TROY_PROFILE.technical.forEach(skill => {
    if (analysis.keyRequirements.technical.some(req => 
      req.toLowerCase().includes(skill.toLowerCase())
    ) || jdLower.includes(skill.toLowerCase())) {
      matches++;
    }
    total++;
  });

  // Bonus for AI/ML focus (Troy's strongest area)
  if (jdLower.includes('ai') || jdLower.includes('machine learning') || 
      jdLower.includes('artificial intelligence')) {
    matches += 3;
  }

  // Bonus for cloud architecture
  if (jdLower.includes('cloud') || jdLower.includes('aws') || 
      jdLower.includes('azure') || jdLower.includes('gcp')) {
    matches += 2;
  }

  const baseScore = Math.min(100, Math.round((matches / total) * 150));
  
  // Penalty for missing critical skills
  const requiredSkillsCount = analysis.keyRequirements.technical.length;
  if (requiredSkillsCount > 15) {
    return Math.max(60, baseScore - 10); // Too many requirements
  }

  return baseScore;
}

function calculateLeadershipScore(analysis: JobAnalysis, jdLower: string): number {
  let score = 70; // Base score

  // Check leadership level alignment
  const leadershipReqs = analysis.keyRequirements.leadership.join(' ').toLowerCase();
  
  if (leadershipReqs.includes('cto') || leadershipReqs.includes('chief')) {
    score += 20;
  } else if (leadershipReqs.includes('director') || leadershipReqs.includes('vp') || 
             leadershipReqs.includes('head of')) {
    score += 15;
  } else if (leadershipReqs.includes('senior') || leadershipReqs.includes('lead')) {
    score += 10;
  }

  // Check for transformation focus (Troy's strength)
  if (jdLower.includes('transformation') || jdLower.includes('change management') ||
      jdLower.includes('innovation')) {
    score += 10;
  }

  // Check for strategic vs tactical
  if (jdLower.includes('strategic') || jdLower.includes('strategy')) {
    score += 5;
  }

  // SFIA Level 7 indicator
  if (leadershipReqs.includes('sfia') || leadershipReqs.includes('enterprise architect')) {
    score += 10;
  }

  return Math.min(100, score);
}

function calculateDomainScore(analysis: JobAnalysis, jdLower: string): number {
  let matches = 0;
  let total = 0;

  TROY_PROFILE.domain.forEach(domain => {
    if (analysis.keyRequirements.domain.some(req => 
      req.toLowerCase().includes(domain.toLowerCase())
    ) || jdLower.includes(domain.toLowerCase())) {
      matches++;
    }
    total++;
  });

  const baseScore = Math.min(100, Math.round((matches / total) * 150));

  // Bonus for government/defense (Troy has NV2 clearance)
  if (analysis.companySignals.stage === 'government' || 
      jdLower.includes('clearance') || jdLower.includes('nv2')) {
    return Math.min(100, baseScore + 20);
  }

  // Bonus for transformation projects
  if (analysis.companySignals.transformationType === 'transformation') {
    return Math.min(100, baseScore + 10);
  }

  return baseScore;
}

function calculateCulturalScore(analysis: JobAnalysis, jdLower: string): number {
  let score = 75; // Base score

  // Troy fits well with innovation-focused cultures
  if (analysis.companySignals.culture.some(c => 
    c.toLowerCase().includes('innovation') || 
    c.toLowerCase().includes('agile') ||
    c.toLowerCase().includes('collaborative')
  )) {
    score += 15;
  }

  // Troy's stage fit
  if (analysis.companySignals.stage === 'scale-up' || 
      analysis.companySignals.stage === 'enterprise') {
    score += 10;
  }

  return Math.min(100, score);
}

function getInterpretation(score: number): string {
  if (score >= 90) return "EXCEPTIONAL MATCH - Apply immediately";
  if (score >= 75) return "STRONG MATCH - Customize application";
  if (score >= 60) return "GOOD MATCH - Highlight transferable skills";
  return "CONSIDER CAREFULLY - May require significant reframing";
}

function getRecommendation(score: number, analysis: JobAnalysis): string {
  if (score >= 75) {
    return `This is a ${analysis.opportunityType === 'WORK' ? 'strong consulting' : analysis.opportunityType === 'JOB' ? 'excellent full-time' : 'great'} opportunity. Apply with confidence and customize your application to address their top priorities.`;
  } else if (score >= 60) {
    return "Solid opportunity with some skill gaps. Focus your application on transferable experience and emphasize your transformation track record.";
  } else {
    return "Lower match. Consider whether this aligns with your career goals. If pursuing, expect to address significant gaps in your application.";
  }
}
