
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const opportunityExamples = {
  accelerated: {
    title: 'Accelerated AI Pilot',
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: 'A Defence modernisation programme needed a secure, ASD‑accredited AI environment for on‑field anomaly detection under a 72‑hour mandate.'
      },
      {
        label: 'Task',
        text: 'Stand up a fully compliant, containerised AI cluster that could ingest classified sensor data and run real‑time models.'
      },
      {
        label: 'Action',
        text: "Leveraged Vault's Secure Container Cloud with Terraform/Ansible IaC, integrated post‑quantum key management, and built parallel compliance scanners to validate policies on‑the‑fly."
      },
      {
        label: 'Result',
        text: 'Delivered the cluster in 48 hrs (vs. typical 3‑week lead), achieved 90% detection accuracy with zero compliance findings, and won a £1.5M follow‑on contract.'
      }
    ]
  },
  edge: {
    title: 'Edge Compute Demo',
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: 'A remote Defence outpost lacked low‑latency compute for predictive maintenance on tactical communications networks.'
      },
      {
        label: 'Task',
        text: "Design and deploy a resilient edge compute node that operates fully offline and securely syncs back to Vault's Sovereign Cloud."
      },
      {
        label: 'Action',
        text: 'Built rugged Kubernetes clusters with VaultStack on‑prem, automated mesh networking via Terraform, and implemented secure reconnect handshakes using our Key & Secrets Management.'
      },
      {
        label: 'Result',
        text: 'Validated sub‑500 ms AI inference in simulated field tests, maintained 99.8% uptime over 30 outage cycles, and secured approval for tri‑service field trials.'
      }
    ]
  },
  automation: {
    title: 'AI Automation Framework',
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: 'A Critical Infrastructure operator was losing weeks to manual change‑control checks, delaying cloud migrations and patch rollouts.'
      },
      {
        label: 'Task',
        text: 'Automate compliance validation of IaC templates to accelerate safe deployments without opening security gaps.'
      },
      {
        label: 'Action',
        text: 'Developed a multi‑agent framework that scans IaC for policy violations, auto‑remediates low‑risk issues, and surfaces edge cases for human review—all with full audit trails.'
      },
      {
        label: 'Result',
        text: 'Cut change‑control lead time from 10 days to 2 hours, boosted deployment velocity by 70%, and improved audit readiness for ACSC reviews.'
      }
    ]
  }
};

const TheOpportunity = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div>
      <PageTitle title="The Opportunity" />
      
      <div className="text-lg mb-6">
        <p className="mb-6">
          This role is a rare chance to drive sovereign‑grade cloud innovation at the intersection of AI, security,
          and national defence. You'll break rules, prototype new paradigms, and forge Vault's future offering.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">Customer Success Stories</h2>
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
      
      <Separator className="my-8 bg-vault-accent/30" />
      
      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Key Aspects</h2>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Bleeding‑edge R&D:</span> Validate first‑of‑a‑kind concepts with real-world impact, not corporate theatre. Push the boundaries of what's possible.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">High‑Autonomy, High‑Impact:</span> Direct collaboration with our visionary CEO on strategic initiatives that will define Vault's future direction.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Mission‑Critical Scale:</span> Drive PoCs into Vault's core offerings for Defence and Critical Infrastructure with national security implications.
          </li>
        </ul>
      </div>
      
      <Separator className="my-8 bg-vault-accent/30" />
      
      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Key Responsibilities</h2>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Strategy & Execution:</span> Shape and prioritise Vault's R&D pipeline to deliver measurable breakthroughs while maintaining SDLC integrity in regulated environments.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Collaboration & Leadership:</span> Build high‑trust teams and partner with Defence, Intelligence and domain experts to validate concepts and scale innovations.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Innovation & Engineering:</span> Design, build and test IaC prototypes: from battlefield clusters to LLM frameworks with technical evangelism and business case translation.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Culture & Pace:</span> Embed a fail‑fast mindset—iterate quickly, learn and scale.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Customer Validation:</span> Demo PoCs, gather feedback, and refine real‑world applications.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Technical Evangelism:</span> Represent Vault at industry forums, publish whitepapers, host Tech Talks.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Business Case Translation:</span> Convert PoC results into ROI‑driven proposals for executive buy‑in.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheOpportunity;
