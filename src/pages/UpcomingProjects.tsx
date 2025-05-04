
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const UpcomingProjects = () => {
  return (
    <div className="animate-fade-in">
      <PageTitle title="Upcoming Customer Innovation Projects" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
            alt="Upcoming Projects" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Digital Health Cloud (QLD Health)</span>
                <br /> 
                K8s microservices, zero‑trust, regional sovereignty → 99.99% SLA.
              </li>
              <li>
                <span className="font-semibold">Procurement Analytics (DoF)</span>
                <br /> 
                Serverless NLP RFT pipelines → 60% faster reviews & auditable shortlists.
              </li>
              <li>
                <span className="font-semibold">Sovereign Hybrid Cloud (Def Intel)</span>
                <br /> 
                Air‑gapped K8s + policy‑as‑code → IL2/IL3 compliance, 50% faster deploys.
              </li>
              <li>
                <span className="font-semibold">Economic Data Mesh (Treasury)</span>
                <br /> 
                Federated streams + lineage → near‑real‑time dashboards, 85% faster reporting.
              </li>
              <li>
                <span className="font-semibold">Cyber Resilience (DVA)</span>
                <br /> 
                AI detection + SOAR → 70% MTTR reduction & proactive threat hunting.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default UpcomingProjects;
