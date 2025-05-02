
import { PageTitle } from '@/components/PageTitle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeadOfInnovation = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Head of Innovation</h1>
        <p className="text-xl text-gray-700 mb-8">
          Lead bleeding‑edge innovation for Australia's sovereign cloud
        </p>
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/debf0aec-1583-4cf6-9bce-523fdf3eb009.png" 
            alt="Vault Cloud" 
            className="h-24 mb-8" 
          />
        </div>
      </div>
      
      <div className="prose max-w-none">
        <p className="text-lg">
          Welcome to the Vault Cloud Innovation Hub. Vault Cloud is Australia's only ASD‑certified 
          hyperscale sovereign cloud operator, uniquely positioned to deliver innovation at scale 
          for national security and critical infrastructure.
        </p>
        
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="bg-vault-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">The Role</h2>
            <p>
              As Head of Innovation, you'll lead Vault's Innovation Hub, driving cutting-edge 
              solutions for Australia's most sensitive organizations.
            </p>
            <Button className="mt-4" asChild>
              <Link to="/the-opportunity">Learn More</Link>
            </Button>
          </div>
          
          <div className="bg-vault-primary/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Customer Challenges</h2>
            <p>
              Explore the critical challenges our customers face and how Vault's innovation 
              addresses these needs.
            </p>
            <Button className="mt-4" asChild>
              <Link to="/customer-asks">View Customer Asks</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <Link to="/your-pitch">Explore the Opportunity</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeadOfInnovation;
