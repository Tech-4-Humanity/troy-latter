import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const AgentforceIndex = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Agentforce Portfolio</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
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
          <p className="text-sm font-medium">Please contact us for access credentials</p>
        </div>
        
        <Button asChild className="mt-2">
          <Link to="/contact">Request Access</Link>
        </Button>
      </div>
    </div>
  );
};

export default AgentforceIndex;