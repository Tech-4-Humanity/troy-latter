
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';

const You = () => {
  return (
    <div>
      <PageTitle title="Skills & Experience" />
      
      <div className="text-center mb-10">
        <p className="text-lg max-w-3xl mx-auto">
          You bring breakthrough innovation skills and national‑security domain mastery, with proven delivery in regulated environments.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">My Matching Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Sovereign AI Deployment"
            imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-4 rounded-lg space-y-2">
                <p><strong>S:</strong> Intelligence analysts required AI summarization capabilities without sending data to external platforms.</p>
                <p><strong>T:</strong> Build a secure, compliant on-premises LLM solution that meets stringent intelligence community standards.</p>
                <p><strong>A:</strong> Deployed containerized on-prem LLM with comprehensive audit logs and token-level telemetry. Implemented fine-tuning pipeline for domain-specific knowledge and created classifier guardails to prevent sensitive data exposure.</p>
                <p><strong>R:</strong> Delivered solution enabling 60% faster intelligence brief creation while maintaining complete data sovereignty. Zero data leaks or security incidents after 8 months in production environment.</p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Edge Network Provisioning"
            imageSrc="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-4 rounded-lg space-y-2">
                <p><strong>S:</strong> Critical infrastructure sites required computing capabilities in locations with unreliable connectivity.</p>
                <p><strong>T:</strong> Design and implement a resilient edge computing solution capable of maintaining operations during extended network outages.</p>
                <p><strong>A:</strong> Developed Terraform and Ansible automation to deploy Kubernetes-based mesh clusters. Created intelligent replication mechanism for configuration and data synchronization when connectivity was restored.</p>
                <p><strong>R:</strong> Successfully demonstrated uninterrupted operations during simulated 72-hour network outages. Solution was adopted as standard for all remote sites, improving operational resilience.</p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Agent-Based Automation"
            imageSrc="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-4 rounded-lg space-y-2">
                <p><strong>S:</strong> Security reviews were creating bottlenecks in the release cycle, delaying critical updates.</p>
                <p><strong>T:</strong> Automate security validation without compromising thoroughness or compliance requirements.</p>
                <p><strong>A:</strong> Created AI-powered security agents that continuously monitored development pipelines, inspected code changes for vulnerability patterns, and recommended fixes in real-time through IDE integrations.</p>
                <p><strong>R:</strong> Increased release frequency by 50% while simultaneously reducing security findings by 70%. Team productivity improved as developers received immediate feedback instead of delayed security reports.</p>
              </div>
            </div>
          </FeatureCard>
        </div>
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
    </div>
  );
};

export default You;
