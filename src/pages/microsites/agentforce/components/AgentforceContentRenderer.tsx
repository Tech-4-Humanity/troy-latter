import React from 'react';
import { WhyAgentforceSection } from './sections/WhyAgentforceSection';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { StrategicPlanSection } from './sections/StrategicPlanSection';
import { TechnicalStrengthsSection } from './sections/TechnicalStrengthsSection';
import { MarketInsightSection } from './sections/MarketInsightSection';
import { CultureFitSection } from './sections/CultureFitSection';
import { QuestionsSection } from './sections/QuestionsSection';

interface AgentforceContentRendererProps {
  activeSection: string;
}

export const AgentforceContentRenderer = ({ activeSection }: AgentforceContentRendererProps) => {
  switch (activeSection) {
    case 'why-agentforce':
      return <WhyAgentforceSection />;
    case 'case-studies':
      return <CaseStudiesSection />;
    case 'strategic-plan':
      return <StrategicPlanSection />;
    case 'technical-strengths':
      return <TechnicalStrengthsSection />;
    case 'market-insight':
      return <MarketInsightSection />;
    case 'culture-fit':
      return <CultureFitSection />;
    case 'questions':
      return <QuestionsSection />;
    default:
      return null;
  }
};