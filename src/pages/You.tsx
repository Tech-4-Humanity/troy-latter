
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <FeatureCard
          icon={Lightbulb}
          title="Visionary Innovator"
          description="You've led AI‑agent frameworks and zero‑trust architectures in National Security settings with a track record of delivery."
          imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
        />
        <FeatureCard
          icon={Shield}
          title="NatSec Fluency"
          description="NV2‑cleared professional with deep understanding of the National Security landscape and Standards Australia BCI committee membership."
          imageSrc="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80"
        />
        <FeatureCard
          icon={Code}
          title="Hands‑On Technologist"
          description="Experience with Terraform, Ansible, Kubernetes & post‑quantum KMS with tangible examples in your GitHub repositories."
          imageSrc="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&fit=crop&q=80"
        />
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-vault-primary">Additional Qualifications</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Agile Leader:</strong> Built "tiger teams" of 3–8 high‑performers with lean kill/scale criteria.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Data‑Driven:</strong> Every prototype instrumented with live metrics and ROI dashboards.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default You;
