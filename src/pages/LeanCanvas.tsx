
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LeanCanvas = () => {
  return (
    <div className="animate-fade-in">
      <Link to="/faqs" className="inline-flex items-center text-brand-primary hover:text-brand-accent mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to FAQs & Resources
      </Link>
      
      <PageTitle title="Lean Business Canvas" />
      
      <div className="bg-brand-light p-8 rounded-lg border border-gray-200 my-6">
        <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Defence-Grade Innovation Canvas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Problem</h3>
            <p className="text-brand-secondary text-sm">
              Complex security requirements, compliance overhead, and fragmented innovation processes slow time-to-value for defence organizations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Solution</h3>
            <p className="text-brand-secondary text-sm">
              Rapid prototyping framework with built-in security controls, compliance automation, and sovereign technology stack validation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Value Proposition</h3>
            <p className="text-brand-secondary text-sm">
              Deploy mission-critical innovations 70% faster while maintaining rigorous security standards and regulatory compliance.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Key Metrics</h3>
            <ul className="text-brand-secondary text-sm space-y-2">
              <li>• Time-to-prototype: 2-4 weeks</li>
              <li>• Security compliance: 100% automated</li>
              <li>• Cost reduction: 40-60%</li>
              <li>• Stakeholder satisfaction: 95%+</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Customer Segments</h3>
            <ul className="text-brand-secondary text-sm space-y-2">
              <li>• Defence agencies</li>
              <li>• Government contractors</li>
              <li>• Critical infrastructure providers</li>
              <li>• Classified environment operators</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeanCanvas;
