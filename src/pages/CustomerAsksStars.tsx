
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const CustomerAsksStars = () => {
  const drivingVisionItems = [
    {
      title: "From Vision to Roadmap",
      description: "Shape and prioritise the innovation pipeline. At Unisys I took five siloed AI pilots across Dyson, learnt new code, found new parners, and delivered a six‑month PoC roadmap that unlocked an $8 M follow‑on pipeline in 12 weeks."
    },
    {
      title: "Building 2 Pizza Teams",
      description: "Lead small, high‑trust teams with external experts. At AWS I formed a lean group of diverse experts vto run two‑week \"Sprint Marathons,\" and achieved a 65% PoC funding conversion - tripling throughput and restoring executive faith."
    },
    {
      title: "Breaking the Prototype‑to‑Reality Barrier",
      description: "Design, build and test bleeding‑edge IaC demos. At Oracle I authored modular playbooks and orchestrated go to market resources, presented live demos to Defence leadership, securing $5 M in production funding."
    },
    {
      title: "Culture & Pace",
      description: "Embed a fail‑fast, learn‑fast ethos. I've introduced weekly \"kill/scale\" criteria, Friday C‑suite Demo Days, and real‑time innovation dashboards at every company - cutting PoC cycle times from 12 weeks to as little as 4 weeks."
    },
    {
      title: "Customer‑first Validation",
      description: "Showcase PoCs, iterate on feedback. I've demoed AI agents and edge‑mesh solutions at AWS summits, Unisys innovation forums and government roadshows - capturing operator feedback that directly drove our next sprint and built customer evangelists."
    },
    {
      title: "Technical Evangelism & Business Case Translation",
      description: "Bridge R&D to board‑room buy‑in. Whether publishing whitepapers on neurotech standards, hosting Tech Talks for 200+ executives, or crafting ROI models that secured $2–5 M in follow‑on contracts, I've turned technical wins into strategic wins for every stakeholder."
    }
  ];
  
  return (
    <div className="animate-fade-in">
      <PageTitle title="Force Multiplication" />
      
      {/* Side-by-side layout for top section */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="md:w-1/2">
          <img 
            src="/lovable-uploads/c399236d-6c48-4f68-ac88-f45ca2128b22.png" 
            alt="Profile" 
            className="w-full h-auto rounded-lg shadow-lg object-cover" 
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-vault-primary mb-4">How I Will Drive Vault's Vision</h2>
          <Card className="border rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <ul className="space-y-6">
                {drivingVisionItems.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-xl mr-3">•</span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomerAsksStars;

