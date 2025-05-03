
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Whitepapers = () => {
  return (
    <div className="animate-fade-in">
      <Link to="/faqs" className="inline-flex items-center text-vault-primary hover:text-vault-accent mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to FAQs & Resources
      </Link>
      
      <PageTitle title="Vault Whitepapers & Tech Talks" />
      
      <div className="bg-vault-light p-8 rounded-lg border border-gray-200 my-6 text-center">
        <div className="mx-auto mb-8 bg-white rounded-full p-6 w-24 h-24 flex items-center justify-center shadow-md">
          <FileText className="h-12 w-12 text-vault-accent" />
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-vault-primary">Coming Soon</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our technical team is preparing a curated collection of whitepapers and technical talks covering sovereign AI implementations, zero - trust architecture for classified environments, and battlefield - ready cloud deployments. These resources will provide valuable insights into Vault's technical capabilities and innovation roadmap.
        </p>
        
        <div className="bg-white p-4 rounded-md border border-gray-200 mb-6 inline-block">
          <p className="text-sm font-medium">Expected release: July 2025</p>
        </div>
        
        <Button asChild className="mt-2">
          <Link to="/faqs">Return to Resources</Link>
        </Button>
      </div>
    </div>
  );
};

export default Whitepapers;
