import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CustomerSuccessStories = () => {
  const successStories = [
    {
      title: "$3B Digital Precinct (AWS)",
      description: "Unified cloud ops, 70% faster provisioning, single-pane catalogue."
    },
    {
      title: "Halal Food Traceability (Oracle)",
      description: "Blockchain proofs-of-origin pilot → 40% drop in exceptions."
    },
    {
      title: "RFT-Parsing & Scoring (Unisys)",
      description: "NLP pipeline + SFIA scoring → 60% faster shortlists."
    },
    {
      title: "National Cyber Resilience (Indonesia)",
      description: "AI anomaly detection + SOAR runbooks → 70% MTTR reduction."
    }
  ];

  const breakthroughStories = [
    {
      title: "Blueprint to Breakthrough",
      image: "/lovable-uploads/99250b03-5ffe-4fee-a51d-8f8636ad4975.png",
      description: "When Interpol needed to turn scattered data operations and experiments into a global programme, I ran \"Design Thinking\" workshops with global stakeholders, scored use-cases against mission KPIs, then embedded compliance gates and \"demo or die\" reviews.\n\nIn 12 weeks we launched four first-of-their-kind pilots, unlocked a $7 M follow-on pipeline, cut concept-to-funding time by 60%, and got executive sign-off on two full-production rollouts."
    },
    {
      title: "Tiger Teams & Trusted Partnerships",
      image: "https://theaseanpost.com/sites/default/files/2020-11/11AM-WIRE-FRI-13112020.jpg",
      description: "During ASEAN monsoon floods, I formed a six-person AWS \"tiger team\" with satellite, telco & social-media experts to build an edge-mesh alert platform across 6 countries, IRT for free.\n\nLive demos with first responders cut coordination delays 50%, handled 500K+ alerts and seeded a $2 M regional rollout."
    },
    {
      title: "Edge Engineering & Real-World Prototypes",
      image: "/lovable-uploads/6c065077-2a06-4fc0-8ee5-a1aebd89d0b8.png",
      description: "For the ADF's Secure Content programme, I led 48-hour PoC sprints to field-test shock-proof HR systems at sea.\n\nBy discarding failures - fast, we achieved, cut validation time 75%, and secured $5 M to productise battlefield-grade nodes."
    }
  ];

  return (
    <div className="animate-fade-in space-y-12">
      <PageTitle title="Client Success Stories & Project Highlights" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-primary to-[#1a2332] text-white py-16 rounded-2xl overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Delivering Transformational Results</h2>
              <p className="text-lg text-gray-200 mb-6">
                My proven track record of delivering innovative solutions has created measurable impact 
                across government and enterprise clients. I focus on understanding client needs deeply, 
                building the right teams, and implementing practical solutions that drive real business outcomes.
              </p>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-semibold mb-3">Success Metrics</h3>
                <ul className="text-sm space-y-2">
                  <li>• $3B+ in transformation value delivered</li>
                  <li>• 90%+ stakeholder satisfaction across projects</li>
                  <li>• 70%+ average efficiency improvements</li>
                  <li>• 60%+ reduction in time-to-market</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/24ae2c57-fff3-40ab-88f1-3ad34c248fc1.png" 
                alt="Client Success and Business Growth" 
                className="w-80 h-64 rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Wins Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Key Project Outcomes</h2>
            <ul className="space-y-6">
              {successStories.map((story, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{story.title}</h3>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded">{story.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <div className="flex items-center">
          <div className="w-full px-6">
            <img 
              src="/lovable-uploads/db7906e5-94ae-461a-a914-e3ca5ba5b126.png" 
              alt="AI-powered technology solutions" 
              className="w-full h-auto rounded-lg shadow-lg object-cover" 
            />
            <p className="text-sm text-gray-500 italic mt-3 text-center">
              AI-powered innovation driving client transformation
            </p>
          </div>
        </div>
      </div>
      
      {/* Deep Dive Case Studies */}
      <div>
        <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">Deep Dive Case Studies</h2>
        
        <div className="space-y-12">
          {breakthroughStories.map((story, index) => (
            <Card key={index} className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-0`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={story.image} 
                      alt={story.title === "Tiger Teams & Trusted Partnerships" ? "ASEAN Regional Cooperation and Technology Integration" : story.title} 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className={`p-10 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-brand-primary mb-6">{story.title}</h3>
                    {story.description.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-gray-700 mb-4 last:mb-0 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Summary */}
      <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
        <CardContent className="p-10 text-center">
          <h3 className="text-xl font-bold text-brand-primary mb-4">Execution Excellence</h3>
          <p className="text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
            These deep dives illustrate how I craft an execution roadmap, lead small high-performing squads, 
            drive a fail-fast culture and translate PoCs into multi-million-dollar programmes. My approach 
            consistently delivers measurable business value while building lasting partnerships with clients.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerSuccessStories;
