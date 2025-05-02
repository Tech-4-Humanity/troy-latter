
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Rocket, Award, Target } from 'lucide-react';

const TheOpportunity = () => {
  return (
    <div>
      <PageTitle title="The Opportunity" />
      
      <div className="text-center mb-10">
        <p className="text-lg max-w-3xl mx-auto">
          This role is unlike any other at Vault. You will shape the future of Australia's sovereign tech capability by breaking
          free of rules to demonstrate the potential future of cloud and national security systems.
        </p>
      </div>
      
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

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">My Relevant Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Rocket}
            title="Accelerated AI Pilot"
            imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Situation:</strong> Required a secure ASD-certified AI cluster.</p>
              <p><strong>Action:</strong> Deployed containerized inference nodes on GovCloud in 72 hrs.</p>
              <p><strong>Result:</strong> Achieved 85% uplift in anomaly detection; zero false positives.</p>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Award}
            title="Edge Compute Demo"
            imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Situation:</strong> Needed AI inference in offline sites.</p>
              <p><strong>Action:</strong> Built Terraform/Ansible prototypes for mesh-enabled edge clusters.</p>
              <p><strong>Result:</strong> Demonstrated sub-second processing; secured $2M pilot.</p>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Target}
            title="AI Automation Framework"
            imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Situation:</strong> Manual compliance checks slowed delivery.</p>
              <p><strong>Action:</strong> Developed AI agents to auto-scan IaC and report deviations.</p>
              <p><strong>Result:</strong> Reduced audit prep from 2 weeks to &lt;1 hour, saving 85% manual effort.</p>
            </div>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default TheOpportunity;
