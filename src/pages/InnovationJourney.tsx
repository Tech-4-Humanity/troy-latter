
import React, { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ContentCard } from '@/components/ContentCard';
import { ListItem } from '@/components/ListItem';
import { Card, CardContent } from '@/components/ui/card';

const InnovationJourney = () => {
  const [activeStory, setActiveStory] = useState<string | null>(null);

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

  const caseStudies = [
    {
      id: "blueprint",
      title: "Blueprint to Breakthrough",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      description: "When Interpol needed to turn scattered AI experiments into a global program, I ran \"Working Backwards\" workshops with CTOs/CIOs, scored use‑cases against mission KPIs, then embedded compliance gates and \"demo or die\" reviews.\n\nIn 12 weeks we launched four first‑of‑their‑kind AI pilots, unlocked a $7 M follow‑on pipeline, cut concept‑to‑funding time by 60 %, and got executive sign‑off on two full‑production rollouts."
    },
    {
      id: "tiger",
      title: "Tiger Teams & Trusted Partnerships",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      description: "During ASEAN monsoon floods, I formed a six‑person AWS \"tiger team\" with satellite, telco & social‑media experts to build an edge‑mesh alert platform on Snowball Edge & Greengrass.\n\nLive demos with first responders cut coordination delays 50 %, handled 500K+ alerts and seeded a $2 M regional rollout."
    },
    {
      id: "edge",
      title: "Edge Engineering & Real‑World Prototypes",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9",
      description: "For the ADF's Secure Content program, I led 48‑hour PoC sprints to field‑test shock‑proof Kubernetes clusters on Snowball Edge.\n\nBy discarding failed form‑factors each sprint, we achieved sub‑second AI inference under isolation, cut validation time 75 %, and secured $5 M to productise battlefield‑grade nodes."
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
        <h2 className="text-2xl font-bold text-vault-primary mb-6">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="group relative">
              <div 
                className="cursor-pointer h-60 overflow-hidden rounded-lg shadow-md"
                onClick={() => setActiveStory(activeStory === study.id ? null : study.id)}
              >
                <img 
                  src={study.image}
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-vault-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-2 rounded-md bg-vault-primary/70">
                    {activeStory === study.id ? 'Hide details' : 'View story'}
                  </span>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-vault-primary">{study.title}</h3>
              
              {activeStory === study.id && (
                <Card className="mt-4 animate-fade-in">
                  <CardContent className="p-4">
                    {study.description.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-gray-700 mb-3 last:mb-0">{paragraph}</p>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
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
