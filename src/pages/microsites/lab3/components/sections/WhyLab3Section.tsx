
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const WhyLab3Section = () => {
  const valuePropositions = [
    {
      title: "Enterprise Architecture with Real-World Impact",
      description: "I've led multi-cloud, Microsoft-first transformations across Defence, Home Affairs, Foreign Affairs, Agriculture, and Fisheries — balancing compliance, cost, and capability in high-trust, politically sensitive environments."
    },
    {
      title: "Delivery Patterns that Scale",
      description: "I don't just deliver once — I codify outcomes. I've created reusable frameworks for secure collaboration, AI adoption, zero trust, and landing zone governance that have been adopted across multiple government departments."
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
      description: "Whether it's Azure, AWS, or hybrid — I deliver with a security-by-default approach, using policy-driven automation, DevSecOps pipelines, and a strong grasp of IRAP, ISM, and agency-specific controls."
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-white mb-6">Why Lab3 & Why Me</h2>
      
      <div className="text-gray-300 space-y-4 mb-8">
        <p>
          Lab3 is unapologetically modern — outcome-led, automation-driven, and built around reusable patterns that move fast and scale well. That matches how I've always delivered.
        </p>
        <p>
          At Unisys, AWS, and Oracle, I've consistently led high-trust transformations across government and critical sectors — often where the challenge isn't just about technology, but about navigating risk, policy, and people. I've worked with customers like Home Affairs, Defence, Foreign Affairs, Agriculture, and Fisheries, helping modernise platforms, de-risk compliance, and drive secure collaboration — all within Microsoft-first environments.
        </p>
        <p>
          What Lab3 calls "fusing innovation and pragmatism," I've lived. I bring experience codifying success into delivery frameworks, mentoring technical teams across security, cloud, AI, and workplace platforms, and shaping pre-sales narratives that win executive trust.
        </p>
        <p>
          I'm not looking to be the smartest in the room — I'm here to help make everyone better, faster, and more confident in how we deliver together.
        </p>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">🎯 What I Bring to Lab3</h3>
        
        <div className="space-y-4">
          {valuePropositions.map((prop, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-green-400 text-lg font-bold mt-1">✅</div>
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-2">{prop.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{prop.description}</p>
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
