
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const InnovationFrameworks = () => {
  return (
    <div className="animate-fade-in">
      <PageTitle title="Frameworks I Use" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
            alt="Innovation Frameworks" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Amazon's Culture of Innovation</span>
                <br /> 
                Working Backwards, Two‑Pizza Teams, Day 1 Mindset.
              </li>
              <li>
                <span className="font-semibold">Experiment‑to‑Leadership Pathway</span>
                <br /> 
                Bottom‑up hackathons → top‑down sponsorship; Hackathon → Pilot → Gate → Scale.
              </li>
              <li>
                <span className="font-semibold">Design Thinking & Empathy Mapping</span>
                <br /> 
                Deep customer immersion, rapid prototyping guided by user journeys.
              </li>
              <li>
                <span className="font-semibold">Systems Thinking & Orderly Mapping</span>
                <br /> 
                Visualise processes, identify leverage points, de‑risk complexity.
              </li>
              <li>
                <span className="font-semibold">Lean Business Canvas</span>
                <br /> 
                One‑page plan for alignment, pivots and stakeholder buy‑in.
              </li>
              <li>
                <span className="font-semibold">Lean & Six Sigma</span>
                <br /> 
                Continuous improvement through waste elimination and data‑driven controls.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default InnovationFrameworks;
