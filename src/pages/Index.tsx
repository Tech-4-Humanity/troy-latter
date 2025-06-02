
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="space-y-12">
      <div className="bg-[#0A101E] text-white px-8 py-16 md:py-20 text-center -mt-8 mx-[-24px]">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Leading Innovation & Digital Transformation</h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Troy Latter - Technology Strategist</h2>
        
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold">TL</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-10">
        <Button size="lg" className="bg-[#56A4E3] hover:bg-[#4290D3] text-white text-lg px-8 py-6 h-auto rounded-md" asChild>
          <Link to="/about-troy">
            Explore My Profile
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
