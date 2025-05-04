
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ContentCard } from '@/components/ContentCard';
import { ListItem } from '@/components/ListItem';

const InnovationFrameworks = () => {
  const frameworkItems = [
    {
      title: "Amazon's Culture of Innovation",
      description: "Working Backwards, Two‑Pizza Teams, Day 1 Mindset."
    },
    {
      title: "Experiment‑to‑Leadership Pathway",
      description: "Bottom‑up hackathons → top‑down sponsorship; Hackathon → Pilot → Gate → Scale."
    },
    {
      title: "Design Thinking & Empathy Mapping",
      description: "Deep customer immersion, rapid prototyping guided by user journeys."
    },
    {
      title: "Systems Thinking & Orderly Mapping",
      description: "Visualise processes, identify leverage points, de‑risk complexity."
    },
    {
      title: "Lean Business Canvas",
      description: "One‑page plan for alignment, pivots and stakeholder buy‑in."
    },
    {
      title: "Lean & Six Sigma",
      description: "Continuous improvement through waste elimination and data‑driven controls."
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="Frameworks I Use" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/0802b80f-8d0e-4e6c-b22c-90790f6ab929.png" 
            alt="Innovation Frameworks" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <ContentCard>
          <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
            {frameworkItems.map((item, index) => (
              <ListItem key={index} title={item.title} description={item.description} />
            ))}
          </ul>
        </ContentCard>
      </section>
    </div>
  );
};

export default InnovationFrameworks;
