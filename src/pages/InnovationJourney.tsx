
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ContentCard } from '@/components/ContentCard';
import { ListItem } from '@/components/ListItem';

const InnovationJourney = () => {
  const journeyItems = [
    {
      title: "Government Industry Engagement",
      description: "Working with Australian Government Trade and Investment Commission to drive innovation initiatives across public sector."
    },
    {
      title: "AWS Innovation Factory",
      description: "Led AWS' innovation accelerator focusing on generative AI, medical devices and Zambrero CSR."
    },
    {
      title: "Oracle Labs FastTrack",
      description: "Machine learning for post-quantum cryptography; blockchain & dynamic data masking."
    },
    {
      title: "First POC Verified Model",
      description: "Created $1.7 million in converted pipeline and trained 30+ sellers in 6 months."
    },
    {
      title: "Edge & Sovereign Cloud",
      description: "Pioneered on-prem innovation for sovereignty-sensitive sectors (defence, critical infrastructure)."
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="My Innovation Journey" />

      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/a8c16df2-19a7-4e1a-a18d-8725f2dc5820.png" 
            alt="Innovation Partnership" 
            className="w-full max-w-3xl mx-auto h-auto object-contain rounded-lg shadow-md mb-6" 
          />
          <p className="text-gray-700 text-center italic">
            Building innovation partnerships with key stakeholders and organizations
          </p>
        </div>
      </section>
      
      <section className="mb-12">
        <ContentCard>
          <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
            {journeyItems.map((item, index) => (
              <ListItem key={index} title={item.title} description={item.description} />
            ))}
          </ul>
        </ContentCard>
      </section>
    </div>
  );
};

export default InnovationJourney;
