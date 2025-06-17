
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const StrategicPlanSection = () => {
  const phases = [
    {
      title: 'First 30 Days: Build Trust & Technical Foundation',
      objective: 'Establish credibility, understand LAB3\'s Azure ecosystem, and map client needs.',
      activities: [
        'Meet Heads of Cloud, Data, DevOps, Security to grasp LAB3\'s Azure offerings and differentiators',
        'Shadow pre-sales and client engagements to learn solution design processes',
        'Review LAB3\'s Terraform modules, Azure DevOps pipelines, and Well-Architected Framework (WAF) alignment',
        'Map stakeholders for top 3 client accounts',
        'Analyze LAB3\'s solution coverage against Microsoft Cloud Adoption Framework (CAF)'
      ],
      deliverables: [
        'Technical brief on LAB3\'s Azure solution gaps vs. CAF/WAF',
        'Matrix linking client needs to LAB3 services',
        'Prioritized list of accounts for immediate technical impact'
      ]
    },
    {
      title: 'Days 31–60: Drive Client Value & Solution Ownership',
      objective: 'Lead technical discovery, shape Azure architectures, and mentor teams.',
      activities: [
        'Lead technical consultations for 1–2 strategic clients, aligning with CAF/WAF',
        'Co-create C-suite-ready solution presentations for enterprise accounts',
        'Refine client roadmaps to integrate LAB3\'s Azure accelerators and secure-by-design principles',
        'Pilot \'Kill-or-Scale\' framework to prioritize PoCs and minimize technical debt',
        'Embed Cloud Security Posture Management (CSPM) and DevSecOps in designs'
      ],
      deliverables: [
        'Reusable Azure cloud-native blueprint aligned with WAF',
        'Client roadmap and architecture pack for one strategic account',
        'Pre-sales readiness checklist for proposal feasibility'
      ]
    },
    {
      title: 'Days 61–90: Scale Impact & Governance',
      objective: 'Standardize patterns, lead governance, and boost innovation.',
      activities: [
        'Facilitate 2 architecture workshops for high-value clients',
        'Deliver internal tech talk on Azure specialty (e.g., Zero Trust, Azure Arc)',
        'Lead retrospective on a pre-sales win or incident to refine processes',
        'Align with Microsoft Partner team on co-sell strategies for Fabric/Copilot',
        'Mentor LAB3 architects on stakeholder engagement and technical storytelling'
      ],
      deliverables: [
        'Playbook for client roadmaps using LAB3 tools and CAF/WAF',
        'Internal architecture review and incident escalation guide',
        'Opportunity assessment framework to streamline strategic pursuits'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Enhanced 30/60/90 Day Plan – LAB3 Principal Technologist (Sydney)</h2>
      <p className="text-gray-300 mb-8">This streamlined plan ensures rapid alignment with LAB3's client-first, Microsoft Azure-focused model, emphasizing pre-sales, technical leadership, and scalable delivery.</p>
      
      <div className="grid gap-8">
        {phases.map((phase, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">{phase.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">🎯 Objective</h4>
                <p className="text-gray-300">{phase.objective}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">⚡ Key Activities</h4>
                <ul className="text-gray-300 space-y-2">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex}>• {activity}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">🎁 Deliverables</h4>
                <ul className="text-gray-300 space-y-2">
                  {phase.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex}>• {deliverable}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
