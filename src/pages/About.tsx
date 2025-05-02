
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Building, Shield, Database, Server, Globe } from 'lucide-react';

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
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">Customer Challenges We're Solving</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={Globe}
            title="Sovereign AI Operations"
            imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Challenge:</strong> Government agencies need AI capabilities without foreign data exposure.</p>
              <p><strong>Innovation:</strong> Isolated LLM training infrastructure with zero external dependencies.</p>
              <p><strong>Impact:</strong> On-shore AI with complete data sovereignty and audit capabilities.</p>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Server}
            title="Battlefield-Ready Cloud"
            imageSrc="https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Challenge:</strong> Defence needs secure compute in disconnected environments.</p>
              <p><strong>Innovation:</strong> Ruggedized, portable cloud nodes with mesh networking.</p>
              <p><strong>Impact:</strong> Mission-critical analysis capabilities in forward operating bases.</p>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Database}
            title="Critical Infrastructure Protection"
            imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Challenge:</strong> Energy/utility companies facing increased cyber threats.</p>
              <p><strong>Innovation:</strong> Zero-trust OT/IT segregation with real-time threat modeling.</p>
              <p><strong>Impact:</strong> Reduced attack surface and continuous compliance monitoring.</p>
            </div>
          </FeatureCard>
        </div>
      </div>
      
      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Our Foundation</h2>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">100% Australian‑owned:</span> Secure data centres strategically located in Canberra & Sydney with full sovereignty guarantees.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Security by Design:</span> Zero‑Trust networking architecture, quantum‑hardened key management & SCEC Zone 5 Security Operations Centre.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Innovation DNA:</span> First‑of‑a‑Kind PoCs in sovereign AI, battlefield clouds and regulated environments for critical infrastructure.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
