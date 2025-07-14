import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PegaIndex = () => {
  return (
    <div className="animate-fade-in">
      <Link to="/" className="inline-flex items-center text-brand-primary hover:text-brand-accent mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      
      <PageTitle title="PEGA Strategic Portfolio" />
      
      <div className="bg-brand-light p-8 rounded-lg border border-gray-200 my-6 text-center">
        <div className="mx-auto mb-8 bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center shadow-md">
          <Lock className="h-12 w-12 text-brand-accent" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Access Required</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Access to this strategic portfolio covering PEGA BPM implementation strategies, case management frameworks, and enterprise transformation methodologies requires authentication. This content contains proprietary strategic planning and competitive intelligence.
        </p>
        
        <div className="bg-white p-4 rounded-md border border-gray-200 mb-6 inline-block">
          <p className="text-sm font-medium">Please contact us for access credentials</p>
        </div>
        
        <Button asChild className="mt-2">
          <Link to="/contact">Request Access</Link>
        </Button>
      </div>
    </div>
  );
};

export default PegaIndex;