
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0A101E] via-[#1a2332] to-[#0f1b2e] text-white px-8 py-24 md:py-32 text-center -mt-8 mx-[-24px] overflow-visible">
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
          Board Member – QLD AI Hub | Founder – Tech 4 Humanity | Standards Australia (BCI)
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
          Troy Latter
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-8 bg-gradient-to-r from-blue-200 to-teal-200 bg-clip-text text-transparent">
          Strategic AI, Cloud & Emerging Systems Leader
        </h2>
        
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 rounded-full overflow-visible border-4 border-purple-500/30 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
            <img 
              src="https://pflisxkcxbzboxwidywf.supabase.co/storage/v1/object/public/testimonial-images/ok%20shot.png"
              alt="Troy Latter"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
          Transforming enterprises through AI, cloud, and data innovation. Over 
          <span className="text-purple-300 font-semibold"> 15 years</span> delivering 
          <span className="text-blue-300 font-semibold"> $3B+ in digital transformations</span> across government, 
          financial services, and critical industries.
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
              View Leadership Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white hover:text-[#0A101E] text-lg px-8 py-6 h-auto rounded-lg transition-all backdrop-blur-sm" asChild>
            <Link to="/strategic-projects">
              Explore Projects & Partnerships
            </Link>
          </Button>
        </div>
        
        <div className="hidden md:flex mt-8 items-center justify-center gap-3 text-xl md:text-2xl text-gray-300">
          <span className="font-light">Specialising in:</span>
          <div className="relative min-h-[3.5rem] w-64 overflow-visible">
            <span className="absolute inset-0 flex items-center justify-start font-semibold text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300 bg-clip-text animate-rotate-words">
              AI Strategy
            </span>
            <span className="absolute inset-0 flex items-center justify-start font-semibold text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300 bg-clip-text animate-rotate-words [animation-delay:2s]">
              Multi-Cloud Architecture
            </span>
            <span className="absolute inset-0 flex items-center justify-start font-semibold text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300 bg-clip-text animate-rotate-words [animation-delay:4s]">
              Neurotech Standards
            </span>
            <span className="absolute inset-0 flex items-center justify-start font-semibold text-transparent bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300 bg-clip-text animate-rotate-words [animation-delay:6s]">
              Responsible Innovation
            </span>
          </div>
        </div>
        
        <div className="text-lg text-gray-300 flex items-center justify-center gap-2 mt-4">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          Sydney, Australia | AGSVA NV2 Security Clearance | AI/ML Certified
        </div>
      </div>
    </div>
  );
};
