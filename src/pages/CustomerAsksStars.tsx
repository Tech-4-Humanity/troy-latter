
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const asksExamples = {
  compliance: {
    title: 'Compliance & Audit Fatigue',
    imageSrc: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: 'The Department of Human Services spent two weeks manually preparing ASD/ACSC compliance reports for myGov.'
      },
      {
        label: 'Task',
        text: 'Automate compliance checks and generate audit-ready reports without lowering security standards.'
      },
      {
        label: 'Action',
        text: 'Built a Continuous Compliance Agent that scanned Terraform and Ansible definitions in real time, surfaced drifts, and auto-generated ASD-compliant audit documents.'
      },
      {
        label: 'Outcome',
        text: 'Reduced audit prep from 2 weeks to under 1 hour and cut manual effort by 85%, significantly accelerating certification cycles.'
      }
    ]
  },
  threat: {
    title: 'Threat Detection Overload',
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: 'A major transport client at AWS faced over 1,200 security alerts per day, overwhelming their SOC and delaying incident response.'
      },
      {
        label: 'Task',
        text: 'Filter noise, surface real threats, and automate initial containment steps.'
      },
      {
        label: 'Action',
        text: 'Deployed an Autonomous Anomaly-Detection Agent trained on customer network baselines and a Multi-Agent Playbook Orchestrator to auto-launch forensic and containment workflows.'
      },
      {
        label: 'Outcome',
        text: 'Cut false positives by 92% and reduced mean-time-to-contain from 4 hours to 20 minutes, improving overall security posture.'
      }
    ]
  },
  sovereign: {
    title: 'Sovereign AI & LLM Risks',
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: 'Unisys intelligence analysts needed on-prem Generative AI capabilities but feared data leakage and hallucinations.'
      },
      {
        label: 'Task',
        text: 'Deliver a fully audited, self-hosted LLM framework with strict governance controls.'
      },
      {
        label: 'Action',
        text: 'Architected an ASD-certified on-prem LLM cluster with token-level telemetry, bias/hallucination guard agents, and fine-tuning pipelines.'
      },
      {
        label: 'Outcome',
        text: 'Enabled analysts to process 10,000+ pages/day with 98% accuracy, with zero data leak incidents over a year.'
      }
    ]
  },
  cost: {
    title: 'Operational Cost Creep',
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: 'An AWS energy sector client was overspending by 25% monthly due to manual resource management and over-provisioning.'
      },
      {
        label: 'Task',
        text: 'Implement automated rightsizing and predictive capacity planning to optimize costs.'
      },
      {
        label: 'Action',
        text: 'Deployed an Autonomous Resource Broker agent and Predictive Capacity Planning pipeline on the Critical Infrastructure Cloud.'
      },
      {
        label: 'Outcome',
        text: 'Achieved 28% monthly cost savings, eliminated surprise egress fees, and maintained service levels without performance impact.'
      }
    ]
  },
  agility: {
    title: 'Speed & Agility',
    imageSrc: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80",
    star: [
      {
        label: 'Situation',
        text: 'An Oracle digital-twin PoC had stalled for 10 weeks with no measurable outcomes.'
      },
      {
        label: 'Task',
        text: 'Accelerate PoC delivery to demonstrate tangible value in under 48 hours.'
      },
      {
        label: 'Action',
        text: 'Implemented a Rapid-Start PoC Generator with ready-to-use IaC templates and pre-trained Demo Agents like the "CityOps Coordinator."'
      },
      {
        label: 'Outcome',
        text: 'Delivered a working demo in 42 hours, secured a £1M follow-on contract, and adopted the framework company-wide.'
      }
    ]
  }
};

const CustomerAsksStars = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div>
      <PageTitle title="Customer Asks" />
      
      <div className="mb-6">
        <p className="text-lg text-vault-secondary">
          Real-world challenges our customers face that you'll help solve through innovation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(asksExamples).map(([key, example]) => (
          <Card key={key} className="overflow-hidden">
            <div 
              className="cursor-pointer"
              onClick={() => setOpenKey(openKey === key ? null : key)}
            >
              <AspectRatio ratio={16/9}>
                <img 
                  src={example.imageSrc} 
                  alt={example.title}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </AspectRatio>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-vault-primary mb-2">{example.title}</h3>
              <p className="text-vault-secondary text-sm mb-3">Click the image to view STAR details</p>
              {openKey === key && (
                <div className="bg-vault-light p-4 rounded-lg text-left space-y-3 animate-fade-in">
                  {example.star.map((item) => (
                    <div key={item.label} className="space-y-1">
                      <p className="font-medium text-vault-primary">{item.label}:</p>
                      <p className="text-vault-secondary text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomerAsksStars;
