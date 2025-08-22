
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0A101E] via-[#1a2332] to-[#0f1b2e] text-white px-8 py-24 md:py-32 text-center -mt-8 mx-[-24px] overflow-hidden">
      {/* Enhanced animated background elements with parallax effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-teal-500 to-green-500 rounded-full animate-pulse delay-1000 blur-lg"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse delay-500 blur-md"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse delay-700 blur-lg"></div>
      </div>
      
      {/* Floating glassmorphism elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-32 bg-white/5 backdrop-blur-sm rounded-full rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/3 backdrop-blur-sm rounded-full -rotate-12 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm">
          Rising APAC CTO & AI Strategy Leader
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
          Troy Latter
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-8 bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
          Strategic AI & Technology Advisor
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Transforming enterprises through strategic AI and sovereign technology leadership. 
          <span className="text-purple-300 font-semibold"> 15+ years</span> driving 
          <span className="text-blue-300 font-semibold"> $3B+ transformations</span> across government, 
          financial services, and telecommunications.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <Button 
            size="lg" 
            onClick={() => {
              const widget = document.querySelector('[data-floating-chat]');
              if (widget) {
                const button = widget.querySelector('button');
                button?.click();
              }
            }}
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 hover:from-purple-600 hover:via-blue-600 hover:to-teal-600 text-white text-lg px-8 py-6 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all backdrop-blur-sm"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Talk to Troy's AI Assistant
          </Button>
          <Button size="lg" className="border-white/30 text-white bg-white/10 hover:bg-white hover:text-[#0A101E] text-lg px-8 py-6 h-auto rounded-lg transition-all backdrop-blur-sm" asChild>
            <Link to="/executive-profile">
              View Executive Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white hover:text-[#0A101E] text-lg px-8 py-6 h-auto rounded-lg transition-all backdrop-blur-sm" asChild>
            <Link to="/core-competencies">
              Explore AI Capabilities
            </Link>
          </Button>
        </div>
        
        <div className="text-lg text-gray-300 flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          Sydney, Australia | AGSVA NV2 Security Clearance | AI/ML Certified
        </div>
      </div>
    </div>
  );
};
