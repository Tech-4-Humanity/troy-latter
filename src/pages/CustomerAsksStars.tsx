import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const CustomerAsksStars = () => {
  const breakthroughStories = [
    {
      title: "Blueprint to Breakthrough",
      description: "When Interpol needed to turn scattered AI experiments into a global programme, I ran \"Working Backwards\" workshops with CTOs/CIOs, scored use-cases against mission KPIs, then embedded compliance gates and \"demo or die\" reviews.\n\nIn 12 weeks we launched four first-of-their-kind AI pilots, unlocked a $7 M follow-on pipeline, cut concept-to-funding time by 60%, and got executive sign-off on two full-production rollouts."
    },
    {
      title: "Tiger Teams & Trusted Partnerships",
      description: "During ASEAN monsoon floods, I formed a six-person AWS \"tiger team\" with satellite, telco & social-media experts to build an edge-mesh alert platform on Snowball Edge & Greengrass.\n\nLive demos with first responders cut coordination delays 50%, handled 500K+ alerts and seeded a $2 M regional rollout."
    },
    {
      title: "Edge Engineering & Real-World Prototypes",
      description: "For the ADF's Secure Content programme, I led 48-hour PoC sprints to field-test shock-proof Kubernetes clusters on Snowball Edge.\n\nBy discarding failed form-factors each sprint, we achieved sub-second AI inference under isolation, cut validation time 75%, and secured $5 M to productise battlefield-grade nodes."
    }
  ];
  
  const drivingVisionItems = [
    {
      title: "From Vision to Roadmap",
      description: "Shape and prioritise the innovation pipeline. At Unisys I took five siloed AI pilots across government, ran Working‑Backwards strategy sprints, and delivered a six‑month PoC roadmap that unlocked an $8 M follow‑on pipeline in 12 weeks."
    },
    {
      title: "Building Tiger Teams",
      description: "Lead small, high‑trust squads with external experts. At AWS APAC I formed a lean group of five data scientists and DevOps engineers, ran two‑week \"Sprint Marathons,\" and achieved a 65% PoC funding conversion—tripling throughput and restoring executive faith."
    },
    {
      title: "Breaking the Prototype‑to‑Reality Barrier",
      description: "Design, build and test bleeding‑edge IaC demos. At Oracle I authored modular playbooks and orchestrated CI/CD tests for rugged edge clusters and LLM frameworks—then presented live demos to Defence leadership, securing $5 M in production funding."
    },
    {
      title: "Culture & Pace",
      description: "Embed a fail‑fast, learn‑fast ethos. I've introduced weekly \"kill/scale\" criteria, Friday C‑suite Demo Days, and real‑time innovation dashboards at every company—cutting PoC cycle times from 12 weeks to as little as 4 weeks."
    },
    {
      title: "Customer‑first Validation",
      description: "Showcase PoCs, iterate on feedback. I've demoed AI agents and edge‑mesh solutions at AWS summits, Unisys innovation forums and government roadshows—capturing operator feedback that directly drove our next sprint and built customer evangelists."
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
      
      <h2 className="text-2xl font-bold text-vault-primary mb-6">Deep Dive Case Studies</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {breakthroughStories.map((story, index) => (
          <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-vault-primary mb-4">{story.title}</h3>
              {story.description.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-gray-700 mb-4 last:mb-0">{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <p className="text-gray-700 italic">
          These deep dives illustrate how I craft an execution roadmap, lead small high-performing squads, 
          drive a fail-fast culture and translate PoCs into multi-million-dollar programmes.
        </p>
      </div>
    </div>
  );
};

export default CustomerAsksStars;
