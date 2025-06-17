
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const TechnicalStrengthsSection = () => {
  const capabilities = [
    { capability: 'Azure & Data Services', evidence: 'SageMaker, Kinesis, CAF, Terraform' },
    { capability: 'Pre-Sales Leadership', evidence: '72-hour AI PoC with $2.5M follow-on' },
    { capability: 'Zero Trust Compliance', evidence: 'ASD-certified, live dashboards' },
    { capability: 'Edge-to-Cloud IoT', evidence: '12K events/sec, low-latency architecture' },
    { capability: 'C-Suite Engagement', evidence: 'CTO councils, Secretaries, ROI roadmaps' },
    { capability: 'GitOps + CI/CD Automation', evidence: 'Terraform, GitHub Actions, pipelines' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Technical Strengths & Patterns</h2>
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-gray-300">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left p-3 text-blue-400">Capability</th>
                  <th className="text-left p-3 text-blue-400">Evidence</th>
                </tr>
              </thead>
              <tbody>
                {capabilities.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="p-3 font-medium">{item.capability}</td>
                    <td className="p-3">{item.evidence}</td>
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
