
import React, { useState } from 'react';
import { Lab3Layout } from './components/Lab3Layout';
import { Lab3Sidebar } from './components/Lab3Sidebar';
import { Lab3ContentRenderer } from './components/Lab3ContentRenderer';

const Lab3Index = () => {
  const [activeSection, setActiveSection] = useState('why-lab3');

  const sections = [
    { id: 'why-lab3', label: 'Why Lab3 & Why Me' },
    { id: 'case-studies', label: 'Case Study Highlights' },
    { id: 'strategic-plan', label: 'Strategic 30/60/90 Plan' },
    { id: 'technical-strengths', label: 'Technical Strengths & Patterns' },
    { id: 'market-insight', label: 'Market Insight – Microsoft Ecosystem Trends' },
    { id: 'culture-fit', label: 'Culture Fit Snapshot' },
    { id: 'questions', label: 'Questions I\'d Ask You' },
    { id: 'connect', label: 'Let\'s Connect' },
    { id: 'related', label: 'Related Microsites' }
  ];

  return (
    <Lab3Layout
      sidebar={
        <Lab3Sidebar
          sections={sections}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      }
    >
      <Lab3ContentRenderer activeSection={activeSection} />
    </Lab3Layout>
  );
};

export default Lab3Index;
