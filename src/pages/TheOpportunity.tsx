
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';

const TheOpportunity = () => {
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
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">My Relevant Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Accelerated AI Pilot"
            imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-4 rounded-lg space-y-2">
                <p><strong>S:</strong> Required a secure ASD-certified AI cluster for rapid experimentation with classified data.</p>
                <p><strong>T:</strong> Deploy a compliant, containerised AI environment within government-mandated timeframes while meeting all security standards.</p>
                <p><strong>A:</strong> Architected containerised inference nodes on GovCloud with automated compliance checks. Implemented parallel deployment pipelines to accelerate provisioning without security shortcuts.</p>
                <p><strong>R:</strong> Delivered secure cluster in 72 hours (vs. typical 3-week timeline). Achieved 85% uplift in anomaly detection accuracy with zero false positives, securing follow-on production contract.</p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Edge Compute Demo"
            imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-4 rounded-lg space-y-2">
                <p><strong>S:</strong> Defence client needed AI inference capabilities in offline sites with intermittent connectivity.</p>
                <p><strong>T:</strong> Create resilient edge computing solution capable of functioning in disconnected environments while maintaining sync when connectivity returns.</p>
                <p><strong>A:</strong> Built Terraform/Ansible prototypes for mesh-enabled edge clusters with local inference capabilities and intelligent sync protocols. Conducted field tests in simulated outage conditions.</p>
                <p><strong>R:</strong> Demonstrated sub-second processing even during complete network isolation. Solution withstood 99.9% of simulated outage scenarios, securing £2M pilot programme for field deployment.</p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="AI Automation Framework"
            imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-4 rounded-lg space-y-2">
                <p><strong>S:</strong> Manual compliance checks were creating critical bottlenecks in delivery pipeline for sensitive government workloads.</p>
                <p><strong>T:</strong> Automate compliance verification without compromising security standards or introducing new risks.</p>
                <p><strong>A:</strong> Developed AI agents to automatically scan Infrastructure-as-Code templates, identify compliance gaps, and generate remediation scripts. Implemented comprehensive audit trails for human verification.</p>
                <p><strong>R:</strong> Reduced audit preparation time from 2 weeks to less than 1 hour, saving 85% of manual effort. Eliminated human error in compliance verification while improving documentation quality.</p>
              </div>
            </div>
          </FeatureCard>
        </div>
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
