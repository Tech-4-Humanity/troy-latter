
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Whitepapers = () => {
  return (
    <div className="animate-fade-in">
      <Link to="/faqs" className="inline-flex items-center text-brand-primary hover:text-brand-accent mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to FAQs & Resources
      </Link>
      
      <PageTitle title="Technical Publications & Presentations" />
      
      <div className="bg-brand-light p-8 rounded-lg border border-gray-200 my-6">
        <h2 className="text-2xl font-semibold mb-6 text-brand-primary">Technical Publications & Presentations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Sovereign AI Implementations</h3>
            <p className="text-brand-secondary mb-4">
              Comprehensive guide to deploying AI systems in sovereign environments with complete data locality and security compliance.
            </p>
            <ul className="text-brand-secondary text-sm space-y-1">
              <li>• Data sovereignty frameworks</li>
              <li>• AI model validation processes</li>
              <li>• Compliance automation strategies</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Zero-Trust Architecture</h3>
            <p className="text-brand-secondary mb-4">
              Detailed blueprints for implementing zero-trust security models in classified and high-security environments.
            </p>
            <ul className="text-brand-secondary text-sm space-y-1">
              <li>• Identity verification protocols</li>
              <li>• Network segmentation strategies</li>
              <li>• Continuous monitoring frameworks</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
          <h3 className="text-lg font-semibold text-brand-primary mb-3">Battlefield-Ready Cloud Deployments</h3>
          <p className="text-brand-secondary mb-4">
            Technical specifications and implementation guides for deploying cloud infrastructure in challenging operational environments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-xl font-bold text-brand-primary">99.9%</div>
              <div className="text-sm text-brand-secondary">Uptime Achieved</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-brand-primary">30sec</div>
              <div className="text-sm text-brand-secondary">Recovery Time</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-brand-primary">256-bit</div>
              <div className="text-sm text-brand-secondary">Encryption Standard</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 p-6 rounded-lg border border-brand-accent/20">
          <h3 className="text-lg font-semibold text-brand-primary mb-3">Research & Development</h3>
          <p className="text-brand-secondary">
            These technical publications represent years of field-tested implementations and continuous refinement based on real-world deployments. Each document includes practical implementation guides, lessons learned, and performance benchmarks from actual production environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Whitepapers;
