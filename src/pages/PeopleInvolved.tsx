
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PeopleInvolved = () => {
  return (
    <div className="animate-fade-in">
      <PageTitle title="People Involved" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="People Involved" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <Card className="bg-white shadow-sm mb-8">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Policy & Legislation</span>
                <br /> 
                Government liaisons, industry boards, advisory groups shaping standards.
              </li>
              <li>
                <span className="font-semibold">Executive Leadership & Sponsors</span>
                <br /> 
                CIOs, board members and deputies funding and mandating innovation.
              </li>
              <li>
                <span className="font-semibold">Sales & Go‑to‑Market Teams</span>
                <br /> 
                Sales, channel and marketing leads capturing signals and driving adoption.
              </li>
              <li>
                <span className="font-semibold">Technical & Delivery</span>
                <br /> 
                Architects, engineers, PMs translating ideas into solutions.
              </li>
              <li>
                <span className="font-semibold">Partners & Ecosystem</span>
                <br /> 
                ISVs, integrators, research institutions co‑innovating on pilots.
              </li>
              <li>
                <span className="font-semibold">Customers & Citizens</span>
                <br /> 
                End‑users whose needs and feedback create multiple winners.
              </li>
              <li>
                <span className="font-semibold">Customer Innovation Councils & Advocates</span>
                <br /> 
                Built embedded PoC councils with key customers—turned 5 case‑studies into $8 M in follow‑on business and created a network of vocal promoters.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <p className="text-gray-700 italic">
            Successful innovation requires collaboration across all stakeholders, from policy makers to end users.
            Building strong relationships with champions at each level creates momentum and ensures alignment.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PeopleInvolved;
