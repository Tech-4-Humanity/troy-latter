
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const opportunityExamples = {
  accelerated: {
    title: 'Accelerated AI Pilot',
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: "A Defence modernization program needed a secure, ASD‑accredited AI environment for field anomaly detection under a 72‑hour deadline."
      },
      {
        label: 'Task',
        text: "Stand up a compliant, containerized AI cluster capable of processing classified sensor feeds without delaying ongoing operations."
      },
      {
        label: 'Action',
        text: "Leveraged Vault's Secure Container Cloud with Terraform and Ansible, integrated post‑quantum key management, and implemented parallel compliance validation agents to speed rollout."
      },
      {
        label: 'Outcome',
        text: "Delivered the environment in 48 hrs (vs. typical 3 weeks), achieved 90% anomaly detection accuracy, and secured a $1.5 M follow‑on contract."
      }
    ]
  },
  edge: {
    title: 'Edge Compute Demo',
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: "Remote Defence outposts lacked low‑latency compute for tactical communications in disconnected environments."
      },
      {
        label: 'Task',
        text: "Design and deploy resilient edge nodes that can operate offline yet securely sync with Vault's sovereign cloud when connectivity is restored."
      },
      {
        label: 'Action',
        text: "Built modular Kubernetes clusters with mesh networking, automated via Terraform modules and Ansible playbooks, and integrated secure reconnect protocols using Vault's KMS."
      },
      {
        label: 'Outcome',
        text: "Achieved sub‑500 ms inference times during network outages and 99.8% availability over 20 simulated disruptions, unlocking an expanded field deployment."
      }
    ]
  },
  automation: {
    title: 'AI Automation Framework',
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: "Critical Infrastructure teams were stalled by manual change‑control reviews, delaying security patch rollouts."
      },
      {
        label: 'Task',
        text: "Automate compliance checks on IaC templates to accelerate safe deployments without loosening security guardrails."
      },
      {
        label: 'Action',
        text: "Developed an AI‑driven multi‑agent system that scans IaC for policy violations, auto‑remediates low‑risk issues, and flags exceptions for human review with full audit logs."
      },
      {
        label: 'Outcome',
        text: "Reduced deployment lead times from 10 days to under 1 hour, improved deployment frequency by 70%, and passed subsequent ACSC audits with no findings."
      }
    ]
  }
};

const OpportunityStars = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div>
      <PageTitle title="The Opportunity Stars" />
      
      <div className="mb-6">
        <p className="text-lg text-vault-secondary">
          This is your chance to shape Vault's sovereign cloud future—driving first‑of‑a‑kind AI, security, and defense innovations under a high‑autonomy mandate.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(opportunityExamples).map(([key, example]) => (
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
              <p className="text-vault-secondary text-sm mb-3">Click the image to view STAR details</p>
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
  );
};

export default OpportunityStars;
