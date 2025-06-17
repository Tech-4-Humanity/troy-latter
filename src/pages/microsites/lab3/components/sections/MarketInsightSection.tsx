
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Insight – Microsoft Ecosystem Trends</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <div className="grid gap-8">
        {insights.map((insight, index) => (
          <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">{insight.title}</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-sm font-bold text-blue-700 mb-3 uppercase tracking-wide">Trend:</h4>
                  <p className="text-gray-800 leading-relaxed text-lg">{insight.trend}</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-sm font-bold text-green-700 mb-3 uppercase tracking-wide">Opportunity for LAB3:</h4>
                  <p className="text-gray-800 leading-relaxed text-lg">{insight.opportunity}</p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="text-sm font-bold text-purple-700 mb-3 uppercase tracking-wide">Your Contribution:</h4>
                  <p className="text-gray-800 leading-relaxed text-lg">{insight.contribution}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
