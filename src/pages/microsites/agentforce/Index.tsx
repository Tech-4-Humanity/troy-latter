import React, { useState } from 'react';
import { AgentforceLayout } from './components/AgentforceLayout';
import { AgentforceSidebar } from './components/AgentforceSidebar';
import { AgentforceContentRenderer } from './components/AgentforceContentRenderer';

const AgentforceIndex = () => {
  const [activeSection, setActiveSection] = useState('why-agentforce');

  const sections = [
    { id: 'why-agentforce', label: 'Why Agentforce & Why Me' },
    { id: 'case-studies', label: 'Case Study Highlights' },
    { id: 'strategic-plan', label: 'Strategic 30/60/90 Plan' },
    { id: 'technical-strengths', label: 'Technical Strengths & Patterns' },
    { id: 'market-insight', label: 'Market Insight – Salesforce Ecosystem Trends' },
    { id: 'culture-fit', label: 'Culture Fit Snapshot' },
    { id: 'questions', label: 'Questions I\'d Ask You' }
  ];

  return (
    <AgentforceLayout
      sidebar={
        <AgentforceSidebar
          sections={sections}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
      }
    >
      <AgentforceContentRenderer activeSection={activeSection} />
    </AgentforceLayout>
  );
};

export default AgentforceIndex;