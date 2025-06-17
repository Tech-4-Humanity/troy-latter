
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      icon: '📈',
      title: 'AI-Augmented Sales & Marketing – Unisys Internal Transformation',
      context: 'Enhancing internal sales and marketing efficiency using Microsoft-native tools.',
      actions: [
        'Unified CRM, marketing, and operations data via Azure Synapse',
        'Integrated Azure OpenAI to generate marketing content and sales responses',
        'Deployed 11 Azure AI agents using Semantic Kernel for lead scoring, reporting, and follow-ups'
      ],
      outcomes: [
        'Boosted lead conversion and pipeline visibility',
        'Reduced time spent on content creation and CRM tasks',
        'Established reusable internal blueprint for intelligent sales ops'
      ],
      fit: 'Azure AI, Semantic Kernel, agent-based automation, enterprise sales enablement',
      summary: 'Saved $500K/month via predictive scaling with CloudWatch + SageMaker. Reduced capacity spikes by 80%.'
    },
    {
      icon: '🏛️',
      title: 'Citizen Services Modernisation – Government Client',
      context: 'Legacy citizen service platform with fragmented data and rising case volumes.',
      actions: [
        'Used Azure Synapse to integrate siloed systems for a unified citizen record',
        'Developed virtual agents with Azure OpenAI to manage FAQs and tier-1 interactions',
        'Focused on secure integration with M365, Outlook, and Teams for service continuity'
      ],
      outcomes: [
        'Improved service response time and frontline agent availability',
        'Enhanced data quality and visibility for policy teams',
        'Accelerated digital trust and usability for public-facing services'
      ],
      fit: 'GovTech, data integration, Microsoft-first stack, service automation',
      summary: 'On-prem LLM with AWS Outposts. Weekly CTO demos. $1.8M multi-year agreement. 60% time reduction.'
    },
    {
      icon: '💳',
      title: 'Cloud Identity Transformation – Financial Sector Client',
      context: 'A financial institution with ageing infrastructure and poor access controls.',
      actions: [
        'Migrated workloads to Azure, ensuring secure, scalable cloud foundations',
        'Implemented Azure Active Directory, MFA, SSPR, and Conditional Access',
        'Designed automated user lifecycle and access provisioning workflows'
      ],
      outcomes: [
        'Strengthened security posture and audit traceability',
        'Improved employee access and reduced service desk tickets',
        'Enabled secure hybrid work and faster onboarding'  
      ],
      fit: 'Azure identity, security & compliance, enterprise migration',
      summary: 'IoT + Greengrass pipeline for 1,200 buildings. 12,000+ events/sec, <150ms latency, 40% storage cost reduction.'
    },
    {
      icon: '🗄️',
      title: 'Legacy System Rationalisation – Fisheries Portfolio',
      context: 'Overlapping systems handling environmental, licensing, and field data caused duplication and low trust in reporting.',
      actions: [
        'Led assessment and rationalisation across ~15 apps',
        'Migrated core workflows to SharePoint Online with embedded Power Automate approvals',
        'Integrated with existing Microsoft security posture for unified access control'
      ],
      outcomes: [
        'Reduced app maintenance cost by ~30%',
        'Enabled mobile field reporting via secure Teams channels',
        'Established central data lake for fisheries analytics (Azure Data Lake)'
      ],
      fit: 'Government modernisation, Microsoft 365 integration, field ops enablement',
      summary: 'ASD-certified in 6 weeks, 85% of checks automated.'
    },
    {
      icon: '📦',
      title: 'Azure Landing Zone + Blueprint Deployment – Multi-Agency Environment',
      context: 'Inconsistent Azure usage and manual provisioning across agencies (Agriculture, Fisheries, Environment).',
      actions: [
        'Designed and rolled out a reusable Azure Landing Zone framework',
        'Applied Microsoft CAF, Policy-as-Code, and DevOps automation via GitHub',
        'Embedded cost tracking via Azure Cost Management and tagging policies'
      ],
      outcomes: [
        'Cut provisioning lead times from weeks to hours',
        'Gained executive approval to expand to six departments',
        'Reduced cost overruns in Azure by >20%'
      ],
      fit: 'Azure governance, scalable design, Microsoft CAF alignment',
      summary: '$5M AI funding secured via C-suite demo + TCO model.'
    },
    {
      icon: '🧑‍🤝‍🧑',
      title: 'Digital Uplift for Inter-Agency Coordination – Foreign Affairs & Home Affairs',
      context: 'Difficulty coordinating secure digital operations across departments and regions.',
      actions: [
        'Designed integrated Microsoft 365 environments with B2B identity trust',
        'Embedded Microsoft Defender across tenant boundaries',
        'Standardised Power Platform use across agencies with shared templates'
      ],
      outcomes: [
        'Reduced duplication of effort for international coordination projects',
        'Achieved alignment with Protective Security Policy Framework (PSPF)',
        'Created platform for rapid-response taskforce deployments'
      ],
      fit: 'Collaboration, identity federation, inter-agency governance',
      summary: 'Complex security compliance achieved with automated checks and frameworks.'
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Case Study Highlights</h2>
      <div className="grid gap-6">
        {caseStudies.map((study, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-2xl">{study.icon}</span>
                <h3 className="text-xl font-semibold text-blue-400 flex-1">{study.title}</h3>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">Context:</h4>
                  <p>{study.context}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-2">Action:</h4>
                  <ul className="space-y-1">
                    {study.actions.map((action, actionIndex) => (
                      <li key={actionIndex}>• {action}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-orange-400 mb-2">Outcome:</h4>
                  <ul className="space-y-1">
                    {study.outcomes.map((outcome, outcomeIndex) => (
                      <li key={outcomeIndex}>• {outcome}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-purple-400 mb-2">Fit:</h4>
                  <Badge variant="outline" className="text-purple-300 border-purple-400">
                    {study.fit}
                  </Badge>
                </div>
                
                <div className="border-t border-gray-600 pt-3 mt-4">
                  <h4 className="font-semibold text-gray-400 mb-2 text-sm">Key Highlights:</h4>
                  <p className="text-sm text-gray-400 italic">• {study.summary}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
