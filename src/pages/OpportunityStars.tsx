
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';

const opportunityExamples = {
  accelerated: {
    title: 'Accelerated AI Pilot',
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    content: "Situation: A Defence modernization program needed a secure, ASD‑accredited AI environment for field anomaly detection under a 72‑hour deadline.\n\nTask: Stand up a compliant, containerized AI cluster capable of processing classified sensor feeds without delaying ongoing operations.\n\nAction: Leveraged Vault's Secure Container Cloud with Terraform and Ansible, integrated post‑quantum key management, and implemented parallel compliance validation agents to speed rollout.\n\nOutcome: Delivered the environment in 48 hrs (vs. typical 3 weeks), achieved 90% anomaly detection accuracy, and secured a $1.5 M follow‑on contract."
  },
  edge: {
    title: 'Edge Compute Demo',
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    content: "Situation: Remote Defence outposts lacked low‑latency compute for tactical communications in disconnected environments.\n\nTask: Design and deploy resilient edge nodes that can operate offline yet securely sync with Vault's sovereign cloud when connectivity is restored.\n\nAction: Built modular Kubernetes clusters with mesh networking, automated via Terraform modules and Ansible playbooks, and integrated secure reconnect protocols using Vault's KMS.\n\nOutcome: Achieved sub‑500 ms inference times during network outages and 99.8% availability over 20 simulated disruptions, unlocking an expanded field deployment."
  },
  automation: {
    title: 'AI Automation Framework',
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    content: "Situation: Critical Infrastructure teams were stalled by manual change‑control reviews, delaying security patch rollouts.\n\nTask: Automate compliance checks on IaC templates to accelerate safe deployments without loosening security guardrails.\n\nAction: Developed an AI‑driven multi‑agent system that scans IaC for policy violations, auto‑remediates low‑risk issues, and flags exceptions for human review with full audit logs.\n\nOutcome: Reduced deployment lead times from 10 days to under 1 hour, improved deployment frequency by 70%, and passed subsequent ACSC audits with no findings."
  }
};

const OpportunityStars = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="The Opportunity Stars" />
      
      <div className="mb-6">
        <p className="text-lg text-vault-secondary">
          This is your chance to shape Vault's sovereign cloud future—driving first‑of‑a‑kind AI, security, and defense innovations under a high‑autonomy mandate.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
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
  );
};

export default OpportunityStars;
