
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Award, Star } from 'lucide-react';

const YourPitch = () => {
  return (
    <div className="space-y-10">
      <div className="bg-gradient-to-r from-vault-primary to-vault-primary/80 text-white rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">About Troy</h1>
        <p className="text-xl opacity-90">
          Technology leader driving innovation in sovereign cloud and national security solutions
        </p>
      </div>
      
      <div className="bg-vault-light p-8 rounded-xl border border-gray-200 shadow-md">
        <div className="flex items-start gap-4">
          <div className="bg-vault-accent rounded-full p-3 text-white">
            <Rocket className="h-6 w-6" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-vault-primary">Tell Me About Yourself</h2>
            <p className="text-vault-secondary text-lg leading-relaxed">
              I'm Troy Latter—a technology leader with 15 years in sovereign cloud, AI-driven automation and national-security transformation
              for AWS, Unisys and Oracle across APAC. I thrive on turning mission-critical PoCs into production-grade capabilities under
              stringent compliance and zero-trust controls.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="overflow-hidden shadow-lg border-t-4 border-t-vault-accent transition-transform hover:scale-[1.01]">
          <div className="bg-vault-primary/5 p-4 flex items-center gap-3">
            <div className="bg-vault-accent text-white rounded-full p-2">
              <Award className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-vault-primary">Why Vault?</h2>
          </div>
          <CardContent className="pt-6">
            <p className="text-vault-secondary leading-relaxed">
              Vault's sovereign, hyperscale mission aligns with my experience and passion for delivering secure, mission-grade solutions
              that protect Australia's critical infrastructure. I've followed Vault's journey as Australia's first ASD-certified cloud
              provider and am eager to contribute to its next phase of innovation and growth.
            </p>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden shadow-lg border-t-4 border-t-vault-accent transition-transform hover:scale-[1.01]">
          <div className="bg-vault-primary/5 p-4 flex items-center gap-3">
            <div className="bg-vault-accent text-white rounded-full p-2">
              <Star className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-vault-primary">Why This Role?</h2>
          </div>
          <CardContent className="pt-6">
            <p className="text-vault-secondary leading-relaxed">
              Hands-on R&D under a visionary CEO is where I deliver my best work—rapid PoCs, strategic roadmap and seamless integration into core products.
              This position combines my passion for innovation with my deep expertise in secure, sovereign cloud technologies.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="bg-vault-primary text-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <Star className="h-5 w-5 mr-2 text-vault-accent" />
          Why You?
        </h2>
        <p className="text-lg mb-6 opacity-90 leading-relaxed">
          My NV2 clearance, Standards Australia committee role, and track record of shipping 10+ First-of-a-Kind solutions make me uniquely suited
          to drive Vault's innovation agenda. I bring a rare combination of technical depth, security clearance, and innovation leadership that
          aligns perfectly with Vault's mission-critical needs.
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <Badge className="bg-vault-accent text-white px-3 py-1 text-sm">NV2 Cleared</Badge>
          <Badge className="bg-vault-accent text-white px-3 py-1 text-sm">Standards Australia</Badge>
          <Badge className="bg-vault-accent text-white px-3 py-1 text-sm">Innovation Leadership</Badge>
          <Badge className="bg-vault-accent text-white px-3 py-1 text-sm">Sovereign Cloud</Badge>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-vault-primary border-b pb-3 border-gray-200">
          Application Motivations
        </h2>
        <ul className="space-y-6">
          <li className="flex items-start">
            <div className="bg-vault-accent/10 rounded-full p-2 mr-4 mt-1">
              <span className="text-vault-accent font-bold text-lg leading-none">01</span>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-vault-primary mb-2">Mission Alignment</h3>
              <p className="text-vault-secondary leading-relaxed">
                Vault's sovereign, hyperscale mandate matches my passion for secure national‑security tech. 
                I've dedicated my career to building secure, compliant cloud solutions for government and 
                critical infrastructure, making this role a natural progression.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-vault-accent/10 rounded-full p-2 mr-4 mt-1">
              <span className="text-vault-accent font-bold text-lg leading-none">02</span>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-vault-primary mb-2">Proven Track Record</h3>
              <p className="text-vault-secondary leading-relaxed">
                Delivered ASD‑accredited enclaves at AWS and classified PoCs at Unisys under mission SLAs.
                My experience spans the entire lifecycle of secure cloud solutions, from initial concept
                to ASD-certified production deployments for intelligence and defence clients.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-vault-accent/10 rounded-full p-2 mr-4 mt-1">
              <span className="text-vault-accent font-bold text-lg leading-none">03</span>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-vault-primary mb-2">Culture Fit</h3>
              <p className="text-vault-secondary leading-relaxed">
                I thrive in founder‑driven, fail‑fast, high‑autonomy teams—exactly Vault's ethos.
                Throughout my career, I've consistently delivered best results in environments that 
                value rapid innovation, technical excellence, and mission focus—all hallmarks of 
                Vault's organisational culture.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default YourPitch;
