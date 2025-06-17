
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const WhyLab3Section = () => {
  const valuePropositions = [
    {
      title: "Enterprise Architecture with Real-World Impact",
      description: "I've led multi-cloud, Microsoft-first transformations across Defence, Home Affairs, Foreign Affairs, Agriculture, and Fisheries - balancing compliance, cost, and capability in high-trust, politically sensitive environments."
    },
    {
      title: "Delivery Patterns that Scale",
      description: "I don't just deliver once - I codify outcomes. I've created reusable frameworks for secure collaboration, AI adoption, zero trust, and landing zone governance that have been adopted across multiple government departments."
    },
    {
      title: "Credibility from the C-Suite to the Engineer",
      description: "I've earned trust from Secretaries and CTOs through clear roadmaps and outcomes. At the same time, I've mentored engineering teams and worked shoulder-to-shoulder during major incidents, AI pilots, and cloud cutovers."
    },
    {
      title: "Pre-Sales to Production Execution",
      description: "From shaping the initial solution narrative to leading delivery design, I support sales without overselling. I know how to frame risk, define MVPs, and land practical outcomes that build long-term client confidence."
    },
    {
      title: "A Secure, Composable Mindset",
      description: "Whether it's Azure, AWS, or hybrid - I deliver with a security-by-default approach, using policy-driven automation, DevSecOps pipelines, and a strong grasp of IRAP, ISM, and agency-specific controls."
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-centre mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Lab3 & Why Me</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <div className="text-gray-700 space-y-6 mb-12 text-lg leading-relaxed">
        <p>
          Lab3 is unapologetically modern - outcome-led, automation-driven, and built around reusable patterns that move fast and scale well. That matches how I've always delivered.
        </p>
        <p>
          At Unisys, AWS, and Oracle, I've consistently led high-trust transformations across government and critical sectors - often where the challenge isn't just about technology, but about navigating risk, policy, and people. I've worked with customers like Home Affairs, Defence, Foreign Affairs, Agriculture, and Fisheries, helping modernise platforms, de-risk compliance, and drive secure collaboration - all within Microsoft-first environments.
        </p>
        <p>
          What Lab3 calls "fusing innovation and pragmatism," I've lived. I bring experience codifying success into delivery frameworks, mentoring technical teams across security, cloud, AI, and workplace platforms, and shaping pre-sales narratives that win executive trust.
        </p>
        <p className="text-xl font-semibold text-blue-700">
          I'm not looking to be the smartest in the room - I'm here to help make everyone better, faster, and more confident in how we deliver together.
        </p>
      </div>

      <div className="space-y-8">
        <h3 className="text-3xl font-bold text-blue-600 mb-8 text-centre">🎯 What I Bring to Lab3</h3>
        
        <div className="grid gap-6">
          {valuePropositions.map((prop, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-centre justify-centre">
                      <span className="text-white text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">{prop.title}</h4>
                    <p className="text-gray-700 leading-relaxed text-lg">{prop.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
