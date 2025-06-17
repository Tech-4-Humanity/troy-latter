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
    {
      title: 'Copilot Everywhere',
      trend: 'Copilot integration is expanding across M365, Dynamics, and GitHub, driving productivity but requiring client enablement.',
      opportunity: 'Position LAB3 as a trusted partner to guide clients through Copilot adoption, leveraging Azure AI and data services to customize workflows.',
      contribution: 'Leverage experience with Azure AI pilots (e.g., 95% accuracy in 72-hour utility PoC) to lead enablement workshops, aligning Copilot with client KPIs and securing pre-sales wins.'
    },
    {
      title: 'M365, Dynamics, GitHub – Clients Need Enablement',
      trend: 'Adoption of M365, Dynamics, and GitHub is accelerating, but clients lack expertise to maximize value.',
      opportunity: 'Offer tailored Azure-based enablement services, integrating DevOps pipelines and secure collaboration models.',
      contribution: 'Apply cross-agency collaboration experience (e.g., Defence, Home Affairs) to design reusable Azure blueprints for M365/Dynamics integration, enhancing pre-sales demos with proven patterns.'
    },
    {
      title: 'Fabric Convergence',
      trend: 'Microsoft Fabric unifies analytics, AI, and data management, creating a consulting opportunity for seamless implementation.',
      opportunity: 'Develop Fabric-focused consulting packages, combining Azure Data Services with LAB3\'s accelerators for rapid deployment.',
      contribution: 'Use IoT pipeline expertise (e.g., 12,000 events/sec on Azure Kinesis) to architect Fabric solutions, delivering client roadmaps that drive $1M+ contracts, as seen in prior engagements.'
    },
    {
      title: 'Analytics Meets Automation – Consulting Opportunity',
      trend: 'AI-driven analytics and automation are converging, demanding end-to-end Azure solutions for real-time insights.',
      opportunity: 'Capitalize on this by offering Azure Cognitive Services and automation frameworks, targeting critical infrastructure clients.',
      contribution: 'Draw on strategic roadmap delivery (e.g., $5M Home Affairs AI funding) to lead technical consultations, embedding automation in client architectures for measurable ROI.'
    },
    {
      title: 'Zero Trust by Default',
      trend: 'Security-as-strategy is now a deal-winner, with zero trust becoming a baseline requirement in Azure deployments.',
      opportunity: 'Position LAB3 as a zero trust leader, using Azure Security Services and CSPM to win government and enterprise deals.',
      contribution: 'Apply zero trust governance experience (e.g., 6-week ASD certification) to embed secure-by-design practices, enhancing pre-sales credibility and client trust.'
    },
    {
      title: 'Security-as-Strategy Now Wins Deals',
      trend: 'Clients prioritize security posture over cost, favoring vendors with robust Azure security frameworks.',
      opportunity: 'Develop security-as-strategy offerings, integrating Azure baselines and compliance tools for competitive edge.',
      contribution: 'Leverage escalation and governance skills (e.g., incident resolution, 85% automated compliance checks) to lead governance forums, driving $3M+ service contracts.'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Market Insight – Microsoft Ecosystem Trends</h2>
      <div className="space-y-6">
        {insights.map((insight, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{insight.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Trend:</h4>
                  <p className="text-gray-300 leading-relaxed">{insight.trend}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-yellow-400 mb-2">Opportunity for LAB3:</h4>
                  <p className="text-gray-300 leading-relaxed">{insight.opportunity}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Your Contribution:</h4>
                  <p className="text-gray-300 leading-relaxed">{insight.contribution}</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
        <p>
          LAB3's culture—cloud-native, agile, and focused on disrupting legacy thinking—resonates deeply with me. I thrive in environments where delivery is driven by a strong culture, reusable IP, and technical authenticity, values I've lived through my career. For example, I've led fast-moving tiger teams across government and enterprise projects, like a 72-hour Azure AI pilot that delivered 95% accuracy and a $2.5M contract, fostering transparency and scalability without ego. I've also codified Azure blueprints, such as zero trust frameworks used across portfolios, aligning with LAB3's IP focus. Mentoring engineers and engaging stakeholders with trust-first approaches, as seen in my Home Affairs $5M roadmap win, mirrors LAB3's collaborative spirit. This blend of agility and technical rigor makes me a natural fit to contribute to LAB3's innovative delivery model.
        </p>
      </div>
    </div>
  );
};

export const QuestionsSection = () => {
  const questions = [
    "Given my work on Azure AI pilots delivering 95% accuracy in 72 hours, I'm curious how LAB3 prioritizes integrating emerging Azure trends like Fabric into client roadmaps under your practice-building vision?",
    "With my experience leading zero trust architectures for ASD certification in 6 weeks, how does LAB3 plan to expand these security models for government clients as you shape this new practice?",
    "Having fostered cross-functional tiger teams for rapid delivery, like a $2.5M utility PoC, how does LAB3 encourage collaboration between pre-sales and engineering to accelerate client outcomes in this emerging practice?",
    "Based on my success codifying reusable Azure blueprints for government portfolios, what role does LAB3 envision for IP in scaling solutions across clients as you establish this practice?",
    "With my background in technical governance during compliance reviews, how does LAB3 balance innovation and compliance in Azure deployments as you build out this practice?",
    "Given my work translating complex requirements into $5M roadmaps for Home Affairs, how does LAB3 approach aligning client technical strategies with business goals in this new practice phase?",
    "Having led pre-sales engagements securing $7M pipelines with C-suite demos, how does LAB3 plan to leverage partnerships, like with Microsoft, to drive practice growth under your leadership?"
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
