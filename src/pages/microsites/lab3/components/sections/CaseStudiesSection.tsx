
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: '🏛 Operational Cost Creep – Energy Grid Operator',
      points: [
        'Saved $500K/month via predictive scaling with CloudWatch + SageMaker.',
        'Reduced capacity spikes by 80%.'
      ]
    },
    {
      title: '🏦 Sovereign AI Deployment – Intelligence Agency',
      points: [
        'On-prem LLM with AWS Outposts. Weekly CTO demos.',
        '$1.8M multi-year agreement. 60% time reduction.'
      ]
    },
    {
      title: '🏢 APAC Smart Building IoT – Government Asset Manager',
      points: [
        'IoT + Greengrass pipeline for 1,200 buildings.',
        '12,000+ events/sec, <150ms latency, 40% storage cost reduction.'
      ]
    },
    {
      title: '🛡️ Complex Security Compliance – Defence',
      points: [
        'ASD-certified in 6 weeks, 85% of checks automated.'
      ]
    },
    {
      title: '🧾 Business Case Translation – Home Affairs',
      points: [
        '$5M AI funding secured via C-suite demo + TCO model.'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Case Study Highlights</h2>
      <div className="grid gap-6">
        {caseStudies.map((study, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">{study.title}</h3>
              <ul className="text-gray-300 space-y-2">
                {study.points.map((point, pointIndex) => (
                  <li key={pointIndex}>• {point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
