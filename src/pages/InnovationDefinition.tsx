
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ContentCard } from '@/components/ContentCard';
import { ListItem } from '@/components/ListItem';

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

  return (
    <div className="animate-fade-in">
      <PageTitle title="What Is Innovation?" />
      
      <section className="mb-12">
        <ContentCard className="mb-8">
          <ul className="list-disc list-outside ml-5 space-y-6 text-gray-700">
            {definitionItems.map((item, index) => (
              <ListItem key={index} title={item.title} description={item.description} />
            ))}
          </ul>
        </ContentCard>
      </section>
    </div>
  );
};

export default InnovationDefinition;
