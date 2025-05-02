
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <FeatureCard
          icon={Rocket}
          title="Bleeding‑edge R&D"
          description="Validate first‑of‑a‑kind concepts with real-world impact, not corporate theatre. Push the boundaries of what's possible."
          imageSrc="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
        />
        <FeatureCard
          icon={Award}
          title="High‑Autonomy, High‑Impact"
          description="Direct collaboration with our visionary CEO on strategic initiatives that will define Vault's future direction."
          imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80"
        />
        <FeatureCard
          icon={Target}
          title="Mission‑Critical Scale"
          description="Drive PoCs into Vault's core offerings for Defence and Critical Infrastructure with national security implications."
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
        />
      </div>
    </div>
  );
};

export default TheOpportunity;
