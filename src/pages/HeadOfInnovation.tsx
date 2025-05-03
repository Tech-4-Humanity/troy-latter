
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeadOfInnovation = () => {
  return (
    <div className="space-y-12">
      <div className="bg-[#141E33] text-white p-8 md:p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Head of Innovation</h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Leading bleeding - edge innovation for Australia's sovereign cloud
        </p>
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/debf0aec-1583-4cf6-9bce-523fdf3eb009.png" 
            alt="Vault Cloud" 
            className="h-28" 
          />
        </div>
        <Button size="lg" className="bg-[#56A4E3] hover:bg-[#4290D3] text-white" asChild>
          <Link to="/your-pitch" className="flex items-center">
            Explore Opportunity <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
      
      <div className="flex justify-center mt-6">
        <Button size="lg" className="bg-[#56A4E3] hover:bg-[#4290D3] text-white" asChild>
          <Link to="/your-pitch">
            Explore Troy's Application
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default HeadOfInnovation;
