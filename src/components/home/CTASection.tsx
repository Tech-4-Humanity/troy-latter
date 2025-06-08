
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <div className="relative bg-gradient-to-r from-brand-primary to-[#1a2332] text-white py-20 px-8 mx-[-24px] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-16 h-16 bg-teal-500 rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Technology Strategy?</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Connect with a proven technology leader who bridges innovation and business outcomes
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-lg px-10 py-6 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all" asChild>
            <Link to="/executive-profile">
              View Executive Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-brand-primary text-lg px-10 py-6 h-auto rounded-lg transition-all" asChild>
            <Link to="/contact">
              Get In Touch
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
