
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const InnovationDefinition = () => {
  return (
    <div className="animate-fade-in">
      <PageTitle title="What Is Innovation?" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
            alt="Innovation Concept" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              <ul className="list-disc list-outside ml-5 space-y-6 text-gray-700">
                <li>
                  <span className="font-semibold">Something new—for someone</span>
                  <br /> 
                  Could be a new partner, framework, technology, policy or people.
                </li>
                <li>
                  <span className="font-semibold">It drives change</span>
                  <br /> 
                  Change is complex and often stalls when only one "winner" emerges.
                </li>
                <li>
                  <span className="font-semibold">True innovation finds multiple winners</span>
                  <br /> 
                  Deliver value to more than one stakeholder and momentum builds.
                </li>
                <li>
                  <span className="font-semibold">Not always net‑new</span>
                  <br /> 
                  Often a clever reuse or repurposing of existing ideas—or even knowing when to stop.
                </li>
                <li>
                  <span className="font-semibold">Must align to needs</span>
                  <br /> 
                  Only sticks if it solves a genuine customer need and advances the organisation's goals.
                </li>
                <li>
                  <span className="font-semibold">Path of least resistance → multiple small wins</span>
                  <br /> 
                  Secure quick, easy victories that add up—real breakthroughs follow.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default InnovationDefinition;
