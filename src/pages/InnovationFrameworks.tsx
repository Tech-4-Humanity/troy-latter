
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
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <ContentCard>
              <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
                {frameworkItems.map((item, index) => (
                  <ListItem key={index} title={item.title} description={item.description} />
                ))}
              </ul>
            </ContentCard>
          </div>
          
          <div className="lg:w-1/3 flex items-center justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80" 
                alt="Innovation frameworks visualization" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationFrameworks;
