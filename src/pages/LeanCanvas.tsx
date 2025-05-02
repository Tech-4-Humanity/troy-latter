
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ArrowLeft, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LeanCanvas = () => {
  return (
    <div className="animate-fade-in">
      <Link to="/faqs" className="inline-flex items-center text-vault-primary hover:text-vault-accent mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to FAQs & Resources
      </Link>
      
      <PageTitle title="Lean Business Canvas" />
      
      <div className="bg-vault-light p-8 rounded-lg border border-gray-200 my-6 text-center">
        <div className="mx-auto mb-8 bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center shadow-md">
          <Layers className="h-12 w-12 text-vault-accent" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-vault-primary">Coming Soon</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          We're developing a specialised Lean Business Canvas tailored for defence-grade innovation projects. This framework will help you rapidly validate and develop business models from PoC insights, with specific considerations for security compliance, sovereign requirements, and mission-critical stakeholder needs.
        </p>
        
        <div className="bg-white p-4 rounded-md border border-gray-200 mb-6 inline-block">
          <p className="text-sm font-medium">Expected release: August 2025</p>
        </div>
        
        <Button asChild className="mt-2">
          <Link to="/faqs">Return to Resources</Link>
        </Button>
      </div>
    </div>
  );
};

export default LeanCanvas;
