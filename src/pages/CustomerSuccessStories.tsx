
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const CustomerSuccessStories = () => {
  return (
    <div className="animate-fade-in">
      <PageTitle title="Customer Success Stories" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
            alt="Customer Success" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">$3B Digital Precinct (AWS)</span> &mdash; Unified cloud ops, 70% faster provisioning, single‑pane catalogue.
              </li>
              <li>
                <span className="font-semibold">Halal Food Traceability (Oracle)</span> &mdash; Blockchain proofs‑of‑origin pilot → 40% drop in exceptions.
              </li>
              <li>
                <span className="font-semibold">RFT‑Parsing & Scoring (Unisys)</span> &mdash; NLP pipeline + SFIA scoring → 60% faster shortlists.
              </li>
              <li>
                <span className="font-semibold">National Cyber Resilience (Indonesia)</span> &mdash; AI anomaly detection + SOAR runbooks → 70% MTTR reduction.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default CustomerSuccessStories;
