
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Lab3Layout } from './components/Lab3Layout';
import { Lab3Sidebar } from './components/Lab3Sidebar';
import { Lab3ContentRenderer } from './components/Lab3ContentRenderer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const Lab3Index = () => {
  const [activeSection, setActiveSection] = useState('why-lab3');

  const sections = [
    { id: 'why-lab3', label: 'Why Lab3 & Why Me' },
    { id: 'case-studies', label: 'Case Study Highlights' },
    { id: 'strategic-plan', label: 'Strategic 30/60/90 Plan' },
    { id: 'technical-strengths', label: 'Technical Strengths & Patterns' },
    { id: 'market-insight', label: 'Market Insight – Microsoft Ecosystem Trends' },
    { id: 'culture-fit', label: 'Culture Fit Snapshot' },
    { id: 'questions', label: 'Questions I\'d Ask You' }
  ];

  return (
    <div>
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Lab3 Analysis</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
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
    </div>
  );
};

export default Lab3Index;
