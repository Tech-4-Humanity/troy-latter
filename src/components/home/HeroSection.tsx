
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0A101E] via-[#1a2332] to-[#0f1b2e] text-white px-8 py-24 md:py-32 text-centre -mt-8 mx-[-24px] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-500 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
          Former APAC CTO & CIO Adviser
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Troy Latter
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-8 text-blue-200">
          Strategic Technology Advisor
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Transforming enterprises through strategic technology leadership. 
          <span className="text-teal-300 font-semibold"> 15+ years</span> driving 
          <span className="text-blue-300 font-semibold"> $3B+ transformations</span> across government, 
          financial services, and telecommunications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-centre">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-lg px-8 py-6 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all" asChild>
            <Link to="/executive-profile">
              View Executive Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-[#0A101E] text-lg px-8 py-6 h-auto rounded-lg transition-all" asChild>
            <Link to="/core-competencies">
              Explore Capabilities
            </Link>
          </Button>
        </div>
        
        <div className="text-lg text-gray-300 flex items-centre justify-centre gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          Sydney, Australia | AGSVA NV2 Security Clearance
        </div>
      </div>
    </div>
  );
};
