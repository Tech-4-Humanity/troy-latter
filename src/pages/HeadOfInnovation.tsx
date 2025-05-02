
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight, Rocket, Star, Globe } from 'lucide-react';

const HeadOfInnovation = () => {
  return (
    <div className="space-y-12">
      <div className="bg-gradient-to-r from-vault-primary to-vault-primary/80 text-white rounded-xl p-8 md:p-12 shadow-lg text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Head of Innovation</h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Lead bleeding‑edge innovation for Australia's sovereign cloud
        </p>
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/debf0aec-1583-4cf6-9bce-523fdf3eb009.png" 
            alt="Vault Cloud" 
            className="h-28" 
          />
        </div>
        <Button size="lg" className="bg-vault-accent hover:bg-vault-accent/90 text-white" asChild>
          <Link to="/your-pitch" className="flex items-center">
            Explore Opportunity <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <div className="prose max-w-none">
        <div className="flex items-center gap-3 mb-4">
          <Globe className="h-6 w-6 text-vault-accent" />
          <h2 className="text-2xl md:text-3xl font-bold text-vault-primary m-0">Vault Cloud Innovation Hub</h2>
        </div>
        <p className="text-lg text-vault-secondary leading-relaxed">
          Vault Cloud is Australia's only ASD‑certified hyperscale sovereign cloud operator, 
          uniquely positioned to deliver innovation at scale for national security and critical 
          infrastructure. Our Innovation Hub serves as the catalyst for next-generation secure 
          cloud solutions that address the most pressing challenges facing Australia's most 
          sensitive organizations.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg transition-transform hover:scale-[1.01]">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-vault-accent rounded-full p-2 text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-vault-primary m-0">The Role</h2>
          </div>
          <p className="text-vault-secondary mb-6 leading-relaxed">
            As Head of Innovation, you'll lead Vault's Innovation Hub, driving cutting-edge 
            solutions for Australia's most sensitive organizations. You'll collaborate with 
            government agencies, critical infrastructure providers, and technology partners 
            to develop sovereign cloud innovations that address unique security and compliance requirements.
          </p>
          <Button className="bg-vault-primary hover:bg-vault-primary/90" asChild>
            <Link to="/the-opportunity" className="flex items-center">
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg transition-transform hover:scale-[1.01]">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-vault-accent rounded-full p-2 text-white">
              <Star className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-semibold text-vault-primary m-0">Customer Challenges</h2>
          </div>
          <p className="text-vault-secondary mb-6 leading-relaxed">
            Explore the critical challenges our customers face and how Vault's innovation 
            addresses these needs. From achieving ASD certification to enabling secure 
            AI workloads, our customers rely on Vault's innovation capabilities to solve 
            complex problems while maintaining the highest security and sovereignty standards.
          </p>
          <Button className="bg-vault-primary hover:bg-vault-primary/90" asChild>
            <Link to="/customer-asks" className="flex items-center">
              View Customer Asks <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <Button size="lg" className="bg-vault-accent hover:bg-vault-accent/90 text-white" asChild>
          <Link to="/your-pitch">
            Explore Troy's Application
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeadOfInnovation;
