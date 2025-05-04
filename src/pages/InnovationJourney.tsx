
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

      <section className="mb-8">
        <ContentCard>
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-vault-primary mb-4">Chief Innovation Adviser, Oracle (2016–2019)</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Built humanitarian relief platforms for ASEAN governments—integrating real‑time Twitter, Facebook and agency feeds.</li>
              <li>Led expansion of Oracle Cloud regions and first sovereign‑cloud deployments with data‑residency controls.</li>
              <li>Piloted Halal‑blockchain proofs‑of‑origin for regulated‑supply transparency.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-vault-primary mb-4">Principal Solutions Architect, AWS (2019–2023)</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Designed digital‑twin frameworks for smart‑city simulations—meshed networks mapping utilities, transport and services.</li>
              <li>Deployed edge‑powered meshed networks for low‑latency IoT in urban and remote zones.</li>
              <li>Advised on AI policy & responsible‑AI legislation balancing innovation with public trust.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-vault-primary mb-4">APAC CTO & Head of Strategic Foresight, Unisys (2024–Mar '25)</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li><span className="font-medium">Internal Innovation:</span> Rolled out Microsoft Semantic Kernel, Google AI and IBM Watson to automate ticket triage, procurement and reporting.</li>
              <li><span className="font-medium">Agent‑Powered Augmentation:</span> Developed AI agents for service‑desk, finance and HR—boosting productivity 30 % in six months.</li>
              <li><span className="font-medium">Customer Transformation:</span> Re‑architected legacy SaaS contracts for Home Affairs and DFAT into cloud‑native microservices—escaping technical debt and accelerating delivery.</li>
            </ul>
          </div>
        </ContentCard>
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
