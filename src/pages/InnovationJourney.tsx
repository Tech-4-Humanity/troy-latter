
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
        
        <Card className="bg-white shadow-sm mb-8">
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
                <br />
                • At AWS APAC, founded a cross‑industry AI consortium (ISVs, research bodies, agencies) → 3× faster partner certifications & $15 M new marketplace revenue in year 1.
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-vault-primary mb-4">Visionary Innovator</h3>
              <p className="text-gray-700">
                Across AWS, Oracle and Unisys, I've repeatedly turned bold ideas into first‑of‑their‑kind capabilities. At AWS APAC I launched an AI anomaly‑detection pilot in 48 hours—skipping months of red tape—to prove real‑time sensor analytics under sovereign controls. At Oracle I designed a hybrid pay‑and‑travel platform for the ADF that became the blueprint for future defence deployments. These high‑autonomy initiatives weren't just "innovation theatre" but delivered measurable business value and follow‑on funding.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-vault-primary mb-4">NatSec Fluency</h3>
              <p className="text-gray-700">
                I hold an active NV2 clearance and have served as a member of Standards Australia's BCI & Robotics Committee and the Queensland Government AI Hub advisory board. I've navigated ASD and ACSC accreditation processes firsthand—building zero‑trust enclaves and publishing neurotech and robotics guidelines that became national standards. This deep policy and compliance expertise ensures any Vault PoC aligns seamlessly with Australia's most stringent security mandates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default InnovationJourney;
