
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Separator } from '@/components/ui/separator';

const skillExamples = {
  sovereign: {
    title: "Sovereign AI Deployment (AWS)",
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    content: "Situation: A top‑tier Australian intelligence agency partnered with AWS to deploy AI‑driven document summarisation, but their strict data‑sovereignty policies forbade any sensitive content from ever leaving their secure premises.\n\nTask: Deliver a fully on‑premises LLM service—leveraging AWS Outposts—that met the agency's rigorous audit, encryption, and access‑control requirements, while enabling analysts to generate rapid, accurate intelligence briefings.\n\nAction: I assembled and led a dedicated AWS team onsite, oversaw the rack‑and‑stack of Outposts hardware, and collaborated directly with intelligence analysts to tailor the fine‑tuned model to their domain. We embedded comprehensive audit logging, real‑time token telemetry, and classifier‑based bias/hallucination guardrails to ensure every output adhered to security mandates. Continuous feedback loops with the end‑users drove rapid iterations, and I presented fortnightly demos to the agency's CTO council.\n\nResult: Within eight months of launch, the solution cut briefing‑prep time by 60%—shrinking a multi‑day task into a 30‑minute analytic sprint—while maintaining 100% data‑sovereignty compliance and recording zero security incidents. This success secured a $1.8 million, multi‑year support and expansion agreement, and set the standard template for future sovereign AI deployments across the government."
  },
  edge: {
    title: "Edge Network Provisioning",
    imageSrc: "https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80",
    content: "Situation: Critical infrastructure sites required computing capabilities in locations with unreliable connectivity.\n\nTask: Design and implement a resilient edge computing solution capable of maintaining operations during extended network outages.\n\nAction: Developed Terraform and Ansible automation to deploy Kubernetes-based mesh clusters. Created intelligent replication mechanism for configuration and data synchronisation when connectivity was restored.\n\nResult: Successfully demonstrated uninterrupted operations during simulated 72-hour network outages. Solution was adopted as standard for all remote sites, improving operational resilience."
  },
  agent: {
    title: "Agent-Based Automation",
    imageSrc: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80",
    content: "Situation: Security reviews were creating bottlenecks in the release cycle, delaying critical updates.\n\nTask: Automate security validation without compromising thoroughness or compliance requirements.\n\nAction: Created AI-powered security agents that continuously monitored development pipelines, inspected code changes for vulnerability patterns, and recommended fixes in real-time through IDE integrations.\n\nResult: Increased release frequency by 50% while simultaneously reducing security findings by 70%. Team productivity improved as developers received immediate feedback instead of delayed security reports."
  }
};

const You = () => {
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skillExamples).map(([key, example]) => (
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
