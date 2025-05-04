
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CustomerSuccessStories = () => {
  const successStories = [
    {
      title: "$3B Digital Precinct (AWS)",
      description: "Unified cloud ops, 70% faster provisioning, single‑pane catalogue."
    },
    {
      title: "Halal Food Traceability (Oracle)",
      description: "Blockchain proofs‑of‑origin pilot → 40% drop in exceptions."
    },
    {
      title: "RFT‑Parsing & Scoring (Unisys)",
      description: "NLP pipeline + SFIA scoring → 60% faster shortlists."
    },
    {
      title: "National Cyber Resilience (Indonesia)",
      description: "AI anomaly detection + SOAR runbooks → 70% MTTR reduction."
    }
  ];

  const breakthroughStories = [
    {
      title: "Blueprint to Breakthrough",
      description: "When Interpol needed to turn scattered AI experiments into a global program, I ran \"Working Backwards\" workshops with CTOs/CIOs, scored use‑cases against mission KPIs, then embedded compliance gates and \"demo or die\" reviews.\n\nIn 12 weeks we launched four first‑of‑their‑kind AI pilots, unlocked a $7 M follow‑on pipeline, cut concept‑to‑funding time by 60 %, and got executive sign‑off on two full‑production rollouts."
    },
    {
      title: "Tiger Teams & Trusted Partnerships",
      description: "During ASEAN monsoon floods, I formed a six‑person AWS \"tiger team\" with satellite, telco & social‑media experts to build an edge‑mesh alert platform on Snowball Edge & Greengrass.\n\nLive demos with first responders cut coordination delays 50 %, handled 500K+ alerts and seeded a $2 M regional rollout."
    },
    {
      title: "Edge Engineering & Real‑World Prototypes",
      description: "For the ADF's Secure Content program, I led 48‑hour PoC sprints to field‑test shock‑proof Kubernetes clusters on Snowball Edge.\n\nBy discarding failed form‑factors each sprint, we achieved sub‑second AI inference under isolation, cut validation time 75 %, and secured $5 M to productise battlefield‑grade nodes."
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="Customer Success Stories" />
      
      <Card className="border rounded-xl overflow-hidden mb-12">
        <CardContent className="p-8">
          <ul className="space-y-6">
            {successStories.map((story, index) => (
              <li key={index} className="flex items-start">
                <span className="text-xl mr-3">•</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{story.title}</h3>
                  <p className="text-gray-700 bg-gray-100 p-2 rounded">{story.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <h2 className="text-2xl font-bold text-vault-primary mb-6">Deep Dive Case Studies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {breakthroughStories.map((story, index) => (
          <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-vault-primary mb-4">{story.title}</h3>
              {story.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-700 mb-4 last:mb-0">{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <p className="text-gray-700 italic">
          These deep dives illustrate how I craft an execution roadmap, lead small high‑performing squads, 
          drive a fail‑fast culture and translate PoCs into multi‑million‑dollar programs.
        </p>
      </div>
    </div>
  );
};

export default CustomerSuccessStories;
