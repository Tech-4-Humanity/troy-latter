
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
        'Analyse LAB3\'s solution coverage against Microsoft Cloud Adoption Framework (CAF)'
      ],
      deliverables: [
        'Technical brief on LAB3\'s Azure solution gaps vs. CAF/WAF',
        'Matrix linking client needs to LAB3 services',
        'Prioritised list of accounts for immediate technical impact'
      ],
      color: 'blue'
    },
    {
      title: 'Days 31–60: Drive Client Value & Solution Ownership',
      objective: 'Lead technical discovery, shape Azure architectures, and mentor teams.',
      activities: [
        'Lead technical consultations for 1–2 strategic clients, aligning with CAF/WAF',
        'Co-create C-suite-ready solution presentations for enterprise accounts',
        'Refine client roadmaps to integrate LAB3\'s Azure accelerators and secure-by-design principles',
        'Pilot \'Kill-or-Scale\' framework to prioritise PoCs and minimise technical debt',
        'Embed Cloud Security Posture Management (CSPM) and DevSecOps in designs'
      ],
      deliverables: [
        'Reusable Azure cloud-native blueprint aligned with WAF',
        'Client roadmap and architecture pack for one strategic account',
        'Pre-sales readiness checklist for proposal feasibility'
      ],
      color: 'green'
    },
    {
      title: 'Days 61–90: Scale Impact & Governance',
      objective: 'Standardise patterns, lead governance, and boost innovation.',
      activities: [
        'Facilitate 2 architecture workshops for high-value clients',
        'Deliver internal tech talk on Azure speciality (e.g., Zero Trust, Azure Arc)',
        'Lead retrospective on a pre-sales win or incident to refine processes',
        'Align with Microsoft Partner team on co-sell strategies for Fabric/Copilot',
        'Mentor LAB3 architects on stakeholder engagement and technical storytelling'
      ],
      deliverables: [
        'Playbook for client roadmaps using LAB3 tools and CAF/WAF',
        'Internal architecture review and incident escalation guide',
        'Opportunity assessment framework to streamline strategic pursuits'
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          title: 'text-blue-700',
          accent: 'bg-blue-500'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          title: 'text-green-700',
          accent: 'bg-green-500'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          title: 'text-purple-700',
          accent: 'bg-purple-500'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          title: 'text-gray-700',
          accent: 'bg-gray-500'
        };
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-centre mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Enhanced 30/60/90 Day Plan</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-4"></div>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">LAB3 Principal Technologist (Sydney) - This streamlined plan ensures rapid alignment with LAB3's client-first, Microsoft Azure-focused model, emphasising pre-sales, technical leadership, and scalable delivery.</p>
      </div>
      
      <div className="grid gap-12">
        {phases.map((phase, index) => {
          const colours = getColorClasses(phase.color);
          return (
            <Card key={index} className={`${colours.bg} ${colours.border} border-2 shadow-lg`}>
              <CardContent className="p-10">
                <div className="flex items-centre mb-6">
                  <div className={`w-3 h-12 ${colours.accent} rounded-full mr-6`}></div>
                  <h3 className={`text-2xl font-bold ${colours.title}`}>{phase.title}</h3>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-centre">
                    🎯 <span className="ml-2">Objective</span>
                  </h4>
                  <p className="text-gray-800 text-lg leading-relaxed">{phase.objective}</p>
                </div>

                <div className="mb-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-centre">
                    ⚡ <span className="ml-2">Key Activities</span>
                  </h4>
                  <ul className="text-gray-800 space-y-3">
                    {phase.activities.map((activity, activityIndex) => (
                      <li key={activityIndex} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-centre">
                    🎁 <span className="ml-2">Deliverables</span>
                  </h4>
                  <ul className="text-gray-800 space-y-3">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="leading-relaxed font-medium">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
