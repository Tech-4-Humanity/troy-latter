
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Building, Shield, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div>
      <PageTitle title="About Vault Cloud" />
      
      <div className="text-center mb-10">
        <p className="text-lg max-w-3xl mx-auto">
          Vault Cloud is Australia's only ASD‑certified, hyperscale sovereign cloud operator—trusted by the Australian Government,
          National Intelligence Community and Critical Infrastructure sector.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <FeatureCard
          icon={Building}
          title="100% Australian‑owned"
          description="Secure data centres strategically located in Canberra & Sydney with full sovereignty guarantees."
          imageSrc="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
        />
        <FeatureCard
          icon={Shield}
          title="Security by Design"
          description="Zero‑Trust networking architecture, quantum‑hardened key management & SCEC Zone 5 Security Operations Centre."
          imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
        />
        <FeatureCard
          icon={Rocket}
          title="Innovation DNA"
          description="First‑of‑a‑Kind PoCs in sovereign AI, battlefield clouds and regulated environments for critical infrastructure."
          imageSrc="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80"
        />
      </div>
    </div>
  );
};

export default About;
