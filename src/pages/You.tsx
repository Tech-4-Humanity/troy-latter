
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Lightbulb, Shield, Code } from 'lucide-react';

const You = () => {
  return (
    <div>
      <PageTitle title="Your Profile" />
      
      <div className="text-center mb-10">
        <p className="text-lg max-w-3xl mx-auto">
          You bring breakthrough innovation skills and national‑security domain mastery, with proven delivery in regulated environments.
        </p>
      </div>
      
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
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">My Matching Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Lightbulb}
            title="Sovereign AI Deployment"
            imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Situation:</strong> Analysts needed compliant AI summarisation.</p>
              <p><strong>Action:</strong> Built on-prem LLM with audit logs and token telemetry.</p>
              <p><strong>Outcome:</strong> 60% faster intelligence briefs; zero data leaks.</p>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Shield}
            title="Edge Network Provisioning"
            imageSrc="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Situation:</strong> Disconnected sites required resilient compute.</p>
              <p><strong>Action:</strong> Automated Kubernetes-based mesh deployment with IaC.</p>
              <p><strong>Outcome:</strong> Uninterrupted operations during network outages.</p>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Code}
            title="Agent-Based Automation"
            imageSrc="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Situation:</strong> Manual security reviews blocking releases.</p>
              <p><strong>Action:</strong> Developed AI agents to auto-audit and remediate dev pipelines.</p>
              <p><strong>Outcome:</strong> Release frequency increased by 50%; security findings down by 70%.</p>
            </div>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default You;
