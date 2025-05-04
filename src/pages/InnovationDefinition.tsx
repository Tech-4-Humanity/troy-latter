
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ContentCard } from '@/components/ContentCard';
import { ListItem } from '@/components/ListItem';
import { Card, CardContent } from '@/components/ui/card';

const InnovationDefinition = () => {
  const definitionItems = [
    {
      title: "Something new—for someone",
      description: "Could be a new partner, framework, technology, policy or people."
    },
    {
      title: "It drives change",
      description: "Change is complex and often stalls when only one \"winner\" emerges."
    },
    {
      title: "True innovation finds multiple winners",
      description: "Deliver value to more than one stakeholder and momentum builds."
    },
    {
      title: "Not always net‑new",
      description: "Often a clever reuse or repurposing of existing ideas—or even knowing when to stop."
    },
    {
      title: "Must align to needs",
      description: "Only sticks if it solves a genuine customer need and advances the organisation's goals."
    },
    {
      title: "Path of least resistance → multiple small wins",
      description: "Secure quick, easy victories that add up—real breakthroughs follow."
    }
  ];

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
      <PageTitle title="What Is Innovation?" />
      
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-1/3">
            <img 
              src="/lovable-uploads/21d8626a-dcf2-4933-b949-d1e72347b2c7.png" 
              alt="Australian Government Trade and Investment Commission" 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
            />
            <p className="text-sm text-gray-600 mt-2 italic text-center">
              Partnership with Australian Government Trade and Investment Commission
            </p>
          </div>
          
          <Card className="md:w-2/3 border rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <ul className="list-disc list-outside ml-5 space-y-6 text-gray-700">
                {definitionItems.map((item, index) => (
                  <ListItem key={index} title={item.title} description={item.description} />
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">Frameworks I Use</h2>
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

export default InnovationDefinition;
