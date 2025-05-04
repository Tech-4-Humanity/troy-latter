
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const LeadershipStyle = () => {
  return (
    <div className="animate-fade-in">
      <PageTitle title="My Leadership Style" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="Leadership Style" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Think Big</span>
                <br /> 
                Amazon‑rated extremely high on Think Big, pushing teams toward bold visions.
              </li>
              <li>
                <span className="font-semibold">Empathy‑Driven Collaboration</span>
                <br /> 
                Mentored on AI‑agent design, built e‑learning & live webinars, frequent speaker.
              </li>
              <li>
                <span className="font-semibold">Right, Accurate, Real‑Time Data</span>
                <br /> 
                Early SMS alerts for sales targets; self‑serve dashboards for all audiences.
              </li>
              <li>
                <span className="font-semibold">Transparent Communication</span>
                <br /> 
                Live dashboards + show & tell events; tailored updates for execs vs teams.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default LeadershipStyle;
