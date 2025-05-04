
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

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

  return (
    <div className="animate-fade-in">
      <PageTitle title="Customer Success Stories" />
      
      <Card className="border rounded-xl overflow-hidden">
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
    </div>
  );
};

export default CustomerSuccessStories;
