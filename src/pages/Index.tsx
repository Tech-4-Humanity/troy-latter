
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="space-y-12">
      <div className="bg-[#0A101E] text-white px-8 py-16 md:py-20 text-center -mt-8 mx-[-24px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Leading bleeding-edge innovation</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">for Australia's sovereign cloud</h2>
        
        <div className="flex justify-center mb-12">
          <img 
            src="/lovable-uploads/debf0aec-1583-4cf6-9bce-523fdf3eb009.png" 
            alt="Vault Cloud" 
            className="h-32" 
          />
        </div>
        
        <div className="flex justify-center">
          <Button size="lg" className="bg-[#56A4E3] hover:bg-[#4290D3] text-white text-lg px-8 py-6 h-auto rounded-md" asChild>
            <Link to="/the-opportunity" className="flex items-center">
              Explore Opportunity <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="flex justify-center mt-10">
        <Button size="lg" className="bg-[#56A4E3] hover:bg-[#4290D3] text-white text-lg px-8 py-6 h-auto rounded-md" asChild>
          <Link to="/your-pitch">
            Explore Troy's Application
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
