
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const UpcomingProjects = () => {
  const projects = [
    {
      title: "Digital Health Cloud (QLD Health)",
      description: "K8s microservices, zero-trust, regional sovereignty → 99.99% SLA."
    },
    {
      title: "Procurement Analytics (DoF)",
      description: "Serverless NLP RFT pipelines → 60% faster reviews & auditable shortlists."
    },
    {
      title: "Sovereign Hybrid Cloud (Def Intel)",
      description: "Air-gapped K8s + policy-as-code → IL2/IL3 compliance, 50% faster deploys."
    },
    {
      title: "Economic Data Mesh (Treasury)",
      description: "Federated streams + lineage → near-real-time dashboards, 85% faster reporting."
    },
    {
      title: "Cyber Resilience (DVA)",
      description: "AI detection + SOAR → 70% MTTR reduction & proactive threat hunting."
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="Upcoming Customer Innovation Projects" />
      
      <Card className="border rounded-xl overflow-hidden">
        <CardContent className="p-8">
          <ul className="space-y-6">
            {projects.map((project, index) => (
              <li key={index} className="flex items-start">
                <span className="text-xl mr-3">•</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{project.title}</h3>
                  <p className="text-gray-700 bg-gray-100 p-2 rounded">{project.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpcomingProjects;
