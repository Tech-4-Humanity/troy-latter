
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const InnovationJourney = () => {
  return (
    <div className="animate-fade-in">
      <PageTitle title="My Innovation Journey" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
            alt="Innovation Journey" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-6 text-gray-700">
              <li>
                <span className="font-semibold">Chief Innovation Adviser, Oracle (2016–2019)</span>
                <br />
                • Built humanitarian relief platforms for ASEAN governments—integrating real‑time Twitter, Facebook and agency feeds.
                <br />
                • Led expansion of Oracle Cloud regions and sovereign‑cloud deployments with data‑residency controls.
                <br />
                • Piloted Halal‑blockchain proofs‑of‑origin for supply transparency.
              </li>
              <li>
                <span className="font-semibold">Principal Solutions Architect, AWS (2019–2023)</span>
                <br />
                • Designed digital‑twin frameworks for smart‑city simulations—meshed networks mapping transport and services.
                <br />
                • Deployed edge‑powered meshed networks for low‑latency IoT in urban and remote zones.
                <br />
                • Advised on AI policy & legislation balancing innovation with public trust.
              </li>
              <li>
                <span className="font-semibold">APAC CTO & Head of Strategic Foresight, Unisys (2024–Mar '25)</span>
                <br />
                • <em>Internal Innovation:</em> Rolled out Microsoft Kernel, Google AI and IBM Watson to automate ticket triage and reporting.
                <br />
                • <em>Agent‑Powered Augmentation:</em> Developed AI agents for service‑desk, finance and HR—boosting productivity 30% in six months.
                <br />
                • <em>Customer Transformation:</em> Re‑architected legacy SaaS contracts for Home Affairs and DFAT into cloud‑native microservices.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default InnovationJourney;
