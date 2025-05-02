
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const YourPitch = () => {
  return (
    <div>
      <PageTitle title="About Troy" />
      
      <div className="space-y-10">
        <div className="bg-vault-light p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-vault-primary">Tell Me About Yourself</h2>
          <p className="text-vault-secondary text-lg">
            I'm Troy Latter—a technology leader with 15 years in sovereign cloud, AI-driven automation and national-security transformation
            for AWS, Unisys and Oracle across APAC. I thrive on turning mission-critical PoCs into production-grade capabilities under
            stringent compliance and zero-trust controls.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md border-t-4 border-t-vault-accent">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-3 text-vault-primary">Why Vault?</h2>
              <p className="text-vault-secondary">
                Vault's sovereign, hyperscale mission aligns with my experience and passion for delivering secure, mission-grade solutions
                that protect Australia's critical infrastructure. I've followed Vault's journey as Australia's first ASD-certified cloud
                provider and am eager to contribute to its next phase of innovation and growth.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md border-t-4 border-t-vault-accent">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-3 text-vault-primary">Why This Role?</h2>
              <p className="text-vault-secondary">
                Hands-on R&D under a visionary CEO is where I deliver my best work—rapid PoCs, strategic roadmap and seamless integration into core products.
                This position combines my passion for innovation with my deep expertise in secure, sovereign cloud technologies.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-vault-light p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-vault-primary">Why You?</h2>
          <p className="text-vault-secondary text-lg mb-4">
            My NV2 clearance, Standards Australia committee role, and track record of shipping 10+ First-of-a-Kind solutions make me uniquely suited
            to drive Vault's innovation agenda. I bring a rare combination of technical depth, security clearance, and innovation leadership that
            aligns perfectly with Vault's mission-critical needs.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-vault-primary">Application Motivations</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-vault-accent font-bold mr-2 text-2xl leading-none">•</span>
              <div>
                <strong className="text-vault-primary">Mission Alignment:</strong> 
                <p className="text-vault-secondary">
                  Vault's sovereign, hyperscale mandate matches my passion for secure national‑security tech. 
                  I've dedicated my career to building secure, compliant cloud solutions for government and 
                  critical infrastructure, making this role a natural progression.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-vault-accent font-bold mr-2 text-2xl leading-none">•</span>
              <div>
                <strong className="text-vault-primary">Proven Track Record:</strong> 
                <p className="text-vault-secondary">
                  Delivered ASD‑accredited enclaves at AWS and classified PoCs at Unisys under mission SLAs.
                  My experience spans the entire lifecycle of secure cloud solutions, from initial concept
                  to ASD-certified production deployments for intelligence and defense clients.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-vault-accent font-bold mr-2 text-2xl leading-none">•</span>
              <div>
                <strong className="text-vault-primary">Culture Fit:</strong> 
                <p className="text-vault-secondary">
                  I thrive in founder‑driven, fail‑fast, high‑autonomy teams—exactly Vault's ethos.
                  Throughout my career, I've consistently delivered best results in environments that 
                  value rapid innovation, technical excellence, and mission focus—all hallmarks of 
                  Vault's organizational culture.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default YourPitch;
