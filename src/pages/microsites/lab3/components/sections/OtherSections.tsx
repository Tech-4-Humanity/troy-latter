import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const TechnicalStrengthsSection = () => {
  const capabilities = [
    { 
      capability: 'Cloud Architecture at Scale', 
      evidence: 'Led multi-cloud transformations across government agencies, designing federated control planes, consistent policy enforcement, and scalable shared services across Azure, AWS, and hybrid environments.' 
    },
    { 
      capability: 'Cross-Tenant, Cross-Agency Models', 
      evidence: 'Delivered secure, repeatable architectures for identity, collaboration, and data sharing across departments like Defence, Home Affairs, Foreign Affairs, and Agriculture.' 
    },
    { 
      capability: 'Disruptive Program Readiness', 
      evidence: 'Turned "impossible" asks — like AI readiness, legacy decommissioning, or IRAP alignment — into structured roadmaps with prioritised delivery tiers and aligned funding.' 
    },
    { 
      capability: 'Organisational Change Awareness', 
      evidence: 'Designed solutions that account for cultural resistance, capability gaps, and change fatigue — combining technical patterns with communication strategy and stakeholder workshops.' 
    },
    { 
      capability: 'Pre-Sales and Strategy Formation', 
      evidence: 'Bridged the gap between technical possibility and business appetite by shaping early solution strategy, managing C-suite engagement, and embedding design-thinking at the front of the sales cycle.' 
    },
    { 
      capability: 'Trusted Escalation & Governance', 
      evidence: 'Acted as escalation lead during major incidents and compliance reviews, simplifying complex multi-vendor environments and returning stability with stakeholder confidence intact.' 
    },
    { 
      capability: 'Reusable Pattern Creation', 
      evidence: 'Codified delivery patterns for government cloud onboarding, AI agents, zero trust frameworks, and low-code environments, reused across portfolios and departments.' 
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">🔧 Technical Strengths & Delivery Patterns</h2>
      
      <div className="text-gray-300 space-y-4 mb-8">
        <p>
          My technical leadership spans far beyond tools and platforms — it's about architecting change in complex, high-stakes environments. Across federal government, critical infrastructure, and large-scale enterprise, I've consistently delivered outcomes where the challenge isn't just technical — it's organisational, political, and cultural.
        </p>
        <p>
          What sets my approach apart is the ability to align architecture with intent: bringing together cross-functional teams, legacy infrastructure, sovereign constraints, and strategic priorities to design futures that are secure, scalable, and human-aware. Whether working across Microsoft, AWS, or hybrid ecosystems, I help organisations navigate ambiguity, prioritise clarity, and operationalise transformation.
        </p>
        <p>
          My delivery patterns reflect this blend of rigour and agility — focused not only on what gets built, but how people experience the change.
        </p>
      </div>

      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-gray-300">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left p-3 text-blue-400 font-semibold">Capability Area</th>
                  <th className="text-left p-3 text-blue-400 font-semibold">Pattern of Practice</th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="p-3 font-medium text-green-400 align-top">{item.capability}</td>
                    <td className="p-3 leading-relaxed">{item.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const MarketInsightSection = () => {
  const insights = [
    { title: 'Copilot Everywhere', description: 'M365, Dynamics, GitHub — clients need enablement.' },
    { title: 'Fabric Convergence', description: 'Analytics meets automation — consulting opportunity.' },
    { title: 'Zero Trust by Default', description: 'Security-as-strategy now wins deals.' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Market Insight – Microsoft Ecosystem Trends</h2>
      <div className="space-y-4 text-gray-300">
        {insights.map((insight, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{insight.title}</h3>
            <p>{insight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CultureFitSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Culture Fit Snapshot</h2>
      <div className="text-gray-300 space-y-4">
        <p>Lab3 builds with speed, shares IP, and respects engineering talent. That's the same way I lead. I mentor, codify success, and turn ideas into patterns that scale.</p>
      </div>
    </div>
  );
};

export const QuestionsSection = () => {
  const questions = [
    "What's Lab3's next reusable asset milestone?",
    "How can I unblock the handoff between sales and engineering?",
    "Who's leading your future-of-work/Copilot vision?",
    "What's Lab3's internal Tiger Team model?"
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Questions I'd Ask You</h2>
      <div className="space-y-4">
        {questions.map((question, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-4">
              <p className="text-gray-300">{question}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
