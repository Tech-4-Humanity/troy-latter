
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ContentCard } from '@/components/ContentCard';
import { FeatureCard } from '@/components/FeatureCard';

const InnovationDefinition = () => {
  const principleCards = [
    {
      title: "Customer-Centric",
      description: "Innovation must address real customer pain points and deliver measurable value.",
      imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
    },
    {
      title: "Rapid Iteration",
      description: "Fast prototyping, quick feedback loops, and continuous improvement drive breakthrough results.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
    },
    {
      title: "Scalable Solutions",
      description: "Ideas must be architected for scale from day one, with clear paths to production.",
      imageSrc: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="Innovation Definition" />
      
      <ContentCard>
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">What Innovation Means to Me</h2>
        <div className="space-y-4 text-vault-secondary">
          <p>
            Innovation isn't just about having big ideas. It's about creating meaningful change that delivers real value to customers and organisations. True innovation combines creative thinking with disciplined execution, turning concepts into scalable solutions that make a lasting impact.
          </p>
          <p>
            Throughout my career at AWS, Oracle, and Unisys, I've learned that the most successful innovations share common characteristics: they solve real problems, they can be implemented quickly and iteratively, and they're designed for scale from the beginning.
          </p>
        </div>
      </ContentCard>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-8">Core Innovation Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principleCards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              imageSrc={card.imageSrc}
            >
              <p className="text-vault-secondary">{card.description}</p>
            </FeatureCard>
          ))}
        </div>
      </div>

      <ContentCard>
        <h3 className="text-xl font-bold text-vault-primary mb-4">Innovation in Practice</h3>
        <div className="space-y-4 text-vault-secondary">
          <p>
            At AWS, I led the development of sovereign AI solutions that enabled intelligence agencies to leverage machine learning while maintaining complete data sovereignty. This wasn't just a technical challenge, it required understanding policy constraints, security requirements, and operational needs.
          </p>
          <p>
            The key was rapid prototyping with real stakeholders, iterating based on feedback, and building solutions that could scale across multiple agencies. The result was a framework that reduced deployment time from months to weeks while exceeding all security requirements.
          </p>
        </div>
      </ContentCard>
    </div>
  );
};

export default InnovationDefinition;
