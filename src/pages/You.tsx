
import { PageTitle } from '@/components/PageTitle';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { FeatureCard } from '@/components/FeatureCard';

const skillExamples = {
  sovereign: {
    title: "Sovereign AI Deployment",
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'Intelligence analysts required AI summarisation capabilities without sending data to external platforms.' },
      { label: 'Task',      text: 'Build a secure, compliant on-premises LLM solution that meets stringent intelligence community standards.' },
      { label: 'Action',    text: 'Deployed containerised on-prem LLM with comprehensive audit logs and token-level telemetry. Implemented fine-tuning pipeline for domain-specific knowledge and created classifier guardails to prevent sensitive data exposure.' },
      { label: 'Result',    text: 'Delivered solution enabling 60% faster intelligence brief creation while maintaining complete data sovereignty. Zero data leaks or security incidents after 8 months in production environment.' }
    ]
  },
  edge: {
    title: "Edge Network Provisioning",
    imageSrc: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'Critical infrastructure sites required computing capabilities in locations with unreliable connectivity.' },
      { label: 'Task',      text: 'Design and implement a resilient edge computing solution capable of maintaining operations during extended network outages.' },
      { label: 'Action',    text: 'Developed Terraform and Ansible automation to deploy Kubernetes-based mesh clusters. Created intelligent replication mechanism for configuration and data synchronisation when connectivity was restored.' },
      { label: 'Result',    text: 'Successfully demonstrated uninterrupted operations during simulated 72-hour network outages. Solution was adopted as standard for all remote sites, improving operational resilience.' }
    ]
  },
  agent: {
    title: "Agent-Based Automation",
    imageSrc: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'Security reviews were creating bottlenecks in the release cycle, delaying critical updates.' },
      { label: 'Task',      text: 'Automate security validation without compromising thoroughness or compliance requirements.' },
      { label: 'Action',    text: 'Created AI-powered security agents that continuously monitored development pipelines, inspected code changes for vulnerability patterns, and recommended fixes in real-time through IDE integrations.' },
      { label: 'Result',    text: 'Increased release frequency by 50% while simultaneously reducing security findings by 70%. Team productivity improved as developers received immediate feedback instead of delayed security reports.' }
    ]
  }
};

const You = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);
  
  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="Skills & Experience" />
      
      <div className="text-lg mb-8">
        <p className="mb-6">
          You bring breakthrough innovation skills and national‑security domain mastery, with proven delivery in regulated environments.
        </p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-8">My Matching Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillExamples).map(([key, example]) => (
            <Card key={key} className="overflow-hidden">
              <div 
                className="cursor-pointer"
                onClick={() => setOpenKey(openKey === key ? null : key)}
              >
                <AspectRatio ratio={16/9}>
                  <img 
                    src={example.imageSrc} 
                    alt={example.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </AspectRatio>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-vault-primary mb-2">{example.title}</h3>
                <p className="text-vault-secondary text-sm mb-3">Click 4 Details</p>
                {openKey === key && (
                  <div className="bg-vault-light p-4 rounded-lg text-left space-y-3 animate-fade-in">
                    {example.star.map((item) => (
                      <div key={item.label} className="space-y-1">
                        <p className="font-medium text-vault-primary">{item.label}:</p>
                        <p className="text-vault-secondary text-sm">{item.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Required Skills & Experience</h2>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Visionary Innovator:</span> You've led AI‑agent frameworks and zero‑trust architectures in National Security settings with a track record of delivery.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">NatSec Fluency:</span> NV2‑cleared professional with deep understanding of the National Security landscape and Standards Australia BCI committee membership.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Hands‑On Technologist:</span> Experience with Terraform, Ansible, Kubernetes & post‑quantum KMS with tangible examples in your GitHub repositories.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Agile Leader:</span> Built "tiger teams" of 3–8 high‑performers with lean kill/scale criteria.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Data‑Driven:</span> Every prototype instrumented with live metrics and ROI dashboards.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default You;
