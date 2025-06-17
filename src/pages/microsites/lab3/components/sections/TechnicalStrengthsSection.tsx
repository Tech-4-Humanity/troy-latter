
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
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">🔧 Technical Strengths & Delivery Patterns</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <div className="text-gray-700 space-y-6 mb-12 text-lg leading-relaxed">
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

      <Card className="bg-white border border-gray-200 shadow-lg">
        <CardContent className="p-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="text-left p-4 text-blue-600 font-bold text-lg">Capability Area</th>
                  <th className="text-left p-4 text-blue-600 font-bold text-lg">Pattern of Practice</th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                    <td className="p-4 font-semibold text-gray-900 align-top w-1/3">{item.capability}</td>
                    <td className="p-4 leading-relaxed text-gray-700">{item.evidence}</td>
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
