
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { FeatureCard } from '@/components/FeatureCard';

const opportunityExamples = {
  accelerated: {
    title: 'Accelerated AI Pilot',
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    content: "A Defence modernisation programme needed a secure, ASD‑accredited AI environment for on‑field anomaly detection under a 72‑hour mandate. Stand up a fully compliant, containerised AI cluster that could ingest classified sensor data and run real‑time models. Leveraged Vault's Secure Container Cloud with Terraform/Ansible IaC, integrated post‑quantum key management, and built parallel compliance scanners to validate policies on‑the‑fly. Delivered the cluster in 48 hrs (vs. typical 3‑week lead), achieved 90% detection accuracy with zero compliance findings, and won a £1.5M follow‑on contract."
  },
  edge: {
    title: 'Edge Compute for Pacific HADR',
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    content: "Situation: At the behest of the Royal Australian Navy, multiple defence units and humanitarian agencies lacked real‑time analytic capabilities in the field during Pacific disaster relief operations. They needed to process sensitive imagery and sensor data on‑site—under strict sovereign data requirements—and then sync only approved outputs back into AWS.\n\nTask: Prove that a fleet of AWS Snowcone edge devices could:\n\nRun AI inference on classified data in austere, disconnected environments.\n\nAutomatically and securely synchronize only vetted results to AWS Cloud.\n\nUncover where this edge‑to‑cloud pattern delivers lasting business value for defence and critical infrastructure.\n\nAction: I led a joint AWS‑Navy‑NGO \"tiger team,\" kicking off with Working Backwards workshops to align on mission‑critical use cases. We developed Terraform/Ansible modules to automate Snowcone provisioning, embedded AWS IoT Greengrass for on‑device inference pipelines, and built encrypted S3 sync scripts that only transmitted approved metadata back to AWS. Throughout 24‑hour sprint cycles, we ran simulated network outages, gathered user feedback, and tuned our mesh and security protocols.\n\nOutcome: The PoC delivered sub‑second object detection on live disaster imagery, reducing decision cycles by 60% and cutting air‑lift planning time from 8 hours to 4 hours per mission. Critically, the exercise surfaced a clear business opportunity: an AWS Outposts‑backed edge service that can slash egress costs by 30%, empower frontline units with sovereign‑controlled compute, and unlock multi‑million‑dollar region expansions—paving the way for Vault‑powered edge solutions of the future."
  },
  automation: {
    title: 'AI Automation Framework',
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    content: "A Critical Infrastructure operator was losing weeks to manual change‑control checks, delaying cloud migrations and patch rollouts. Automate compliance validation of IaC templates to accelerate safe deployments without opening security gaps. Developed a multi‑agent framework that scans IaC for policy violations, auto‑remediates low‑risk issues, and surfaces edge cases for human review—all with full audit trails. Cut change‑control lead time from 10 days to 2 hours, boosted deployment velocity by 70%, and improved audit readiness for ACSC reviews."
  }
};

const TheOpportunity = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="The Opportunity" />
      
      <div className="text-lg mb-8">
        <p className="mb-6">
          This role is a rare chance to drive sovereign‑grade cloud innovation at the intersection of AI, security,
          and national defence. You'll break rules, prototype new paradigms, and forge Vault's future offering.
        </p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-8">Customer Success Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(opportunityExamples).map(([key, example]) => (
            <FeatureCard
              key={key}
              title={example.title}
              imageSrc={example.imageSrc}
            >
              <div className="text-vault-secondary space-y-4">
                {example.content.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="space-y-8 mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary">Key Aspects</h2>
        <ul className="list-disc list-inside space-y-4 pl-4">
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
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Key Responsibilities</h2>
        <ul className="list-disc list-inside space-y-4 pl-4">
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
