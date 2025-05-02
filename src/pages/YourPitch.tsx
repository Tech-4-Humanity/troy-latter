
import { PageTitle } from '@/components/PageTitle';

const YourPitch = () => {
  return (
    <div>
      <PageTitle title="About Me" />
      
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-3 text-vault-primary">Tell Me About Yourself</h2>
          <p className="text-vault-secondary">
            I'm Troy Latter—a technology leader with 15 years in sovereign cloud, AI-driven automation and national-security transformation
            for AWS, Unisys and Oracle across APAC. I thrive on turning mission-critical PoCs into production-grade capabilities under
            stringent compliance and zero-trust controls.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3 text-vault-primary">Why Vault?</h2>
          <p className="text-vault-secondary">
            Vault's sovereign, hyperscale mission aligns with my experience and passion for delivering secure, mission-grade solutions
            that protect Australia's critical infrastructure.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3 text-vault-primary">Why This Role?</h2>
          <p className="text-vault-secondary">
            Hands-on R&D under a visionary CEO is where I deliver my best work—rapid PoCs, strategic roadmap and seamless integration into core products.
          </p>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-3 text-vault-primary">Why You?</h2>
          <p className="text-vault-secondary">
            My NV2 clearance, Standards Australia committee role, and track record of shipping 10+ First-of-a-Kind solutions make me uniquely suited
            to drive Vault's innovation agenda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default YourPitch;
