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
      
      <div className="bg-brand-light p-8 rounded-lg border border-gray-200 my-6">
        <h2 className="text-2xl font-semibold mb-6 text-brand-primary">PEGA BPM Strategic Portfolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Case Management Excellence</h3>
            <p className="text-brand-secondary mb-4">
              Implemented PEGA's case management framework across multiple government agencies, reducing case resolution time by 60% while improving compliance tracking.
            </p>
            <ul className="text-brand-secondary text-sm space-y-1">
              <li>• Dynamic case routing</li>
              <li>• Automated compliance checks</li>
              <li>• Real-time status tracking</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Process Automation</h3>
            <p className="text-brand-secondary mb-4">
              Designed and deployed intelligent automation workflows that eliminated 80% of manual processing while maintaining audit trails for sensitive operations.
            </p>
            <ul className="text-brand-secondary text-sm space-y-1">
              <li>• Smart workflow orchestration</li>
              <li>• Decision engine optimization</li>
              <li>• Exception handling automation</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h3 className="text-lg font-semibold text-brand-primary mb-3">Enterprise Transformation Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">60%</div>
              <div className="text-sm text-brand-secondary">Faster Case Resolution</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">80%</div>
              <div className="text-sm text-brand-secondary">Process Automation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-brand-primary">$2.5M</div>
              <div className="text-sm text-brand-secondary">Annual Savings</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 p-6 rounded-lg border border-brand-accent/20">
          <h3 className="text-lg font-semibold text-brand-primary mb-3">Strategic Approach</h3>
          <p className="text-brand-secondary">
            My PEGA implementations focus on rapid value delivery through iterative development, stakeholder engagement, and security-first architecture. Each deployment includes comprehensive training, change management, and performance monitoring to ensure sustainable adoption and continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PegaIndex;