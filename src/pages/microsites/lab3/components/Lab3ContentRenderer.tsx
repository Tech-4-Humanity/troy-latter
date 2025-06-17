
import React from 'react';
import { WhyLab3Section } from './sections/WhyLab3Section';
import { CaseStudiesSection } from './sections/CaseStudiesSection';
import { StrategicPlanSection } from './sections/StrategicPlanSection';
import { 
  TechnicalStrengthsSection, 
  MarketInsightSection, 
  CultureFitSection, 
  QuestionsSection, 
  ConnectSection, 
  RelatedSection 
} from './sections/OtherSections';

interface Lab3ContentRendererProps {
  activeSection: string;
}

export const Lab3ContentRenderer = ({ activeSection }: Lab3ContentRendererProps) => {
  switch (activeSection) {
    case 'why-lab3':
      return <WhyLab3Section />;
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
    case 'connect':
      return <ConnectSection />;
    case 'related':
      return <RelatedSection />;
    default:
      return null;
  }
};
