import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AgentforceIndex = () => {
  return (
    <div className="animate-fade-in">
      <Link to="/microsites" className="inline-flex items-center text-brand-primary hover:text-brand-accent mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Micro-Sites
      </Link>
      
      <PageTitle title="Agentforce Strategic Portfolio" />
      
      <div className="bg-brand-light p-8 rounded-lg border border-gray-200 my-6 text-center">
        <div className="mx-auto mb-8 bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center shadow-md">
          <Lock className="h-12 w-12 text-brand-accent" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-brand-primary">Access Required</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Access to this strategic portfolio covering Agentforce implementation strategies, technical architecture patterns, and confidential market insights requires authentication. This content contains proprietary strategic planning and competitive intelligence.
        </p>
        
        <div className="bg-white p-4 rounded-md border border-gray-200 mb-6 inline-block">
          <p className="text-sm font-medium">Please request access from troy.latter@gmail.com</p>
        </div>
        
        <Button asChild className="mt-2">
          <a href="mailto:troy.latter@gmail.com?subject=Agentforce%20Microsite%20Access%20Request&body=Hi%20Troy%2C%0A%0AI%20would%20like%20to%20request%20access%20to%20the%20Agentforce%20strategic%20portfolio%20microsite.%0A%0AThank%20you%2C%0A[Your%20Name]">
            Request Access
          </a>
        </Button>
      </div>
    </div>
  );
};

export default AgentforceIndex;