
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';

// Define the customer asks examples
const customerAsksData = {
  compliance: {
    title: "Compliance & Audit Fatigue",
    imageSrc: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'The Department of Human Services spent two weeks manually preparing ASD/ACSC compliance reports for myGov.' },
      { label: 'Task', text: 'Automate compliance checks and generate audit-ready reports without lowering security standards.' },
      { label: 'Action', text: 'Built a Continuous Compliance Agent that scanned Terraform and Ansible definitions in real time, surfaced policy drifts, and auto-generated ASD-compliant audit documents.' },
      { label: 'Outcome', text: 'Reduced audit prep from 2 weeks to under 1 hour and cut manual effort by 85%, significantly accelerating certification cycles.' },
    ]
  },
  threat: {
    title: "Threat Detection Overload",
    imageSrc: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'A major transport client at AWS faced over 1,200 security alerts per day, overwhelming their SOC and delaying incident response.' },
      { label: 'Task', text: 'Filter noise, surface genuine threats, and automate initial containment steps.' },
      { label: 'Action', text: 'Deployed an Autonomous Anomaly-Detection Agent trained on customer network baselines and a Multi-Agent Playbook Orchestrator to auto-launch forensic and containment workflows.' },
      { label: 'Outcome', text: 'Cut false positives by 92% and reduced mean-time-to-contain from 4 hours to 20 minutes, improving overall security posture.' },
    ]
  },
  sovereign: {
    title: "Sovereign AI & LLM Risks",
    imageSrc: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'Unisys intelligence analysts needed on-prem Generative AI capabilities but feared data leakage and model hallucinations.' },
      { label: 'Task', text: 'Deliver an audited, self-hosted LLM framework with strict governance and bias controls.' },
      { label: 'Action', text: 'Architected an ASD-certified on-prem LLM cluster with token-level telemetry, Bias & Hallucination Guard agents, and fine-tuning pipelines.' },
      { label: 'Outcome', text: 'Enabled analysts to process 10,000+ pages/day with 98% accuracy, and maintained zero data leak incidents over 12 months.' },
    ]
  },
  cost: {
    title: "Operational Cost Creep",
    imageSrc: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'An AWS energy sector client was overspending by 25% monthly due to manual resource provisioning and idle VMs.' },
      { label: 'Task', text: 'Implement automated rightsizing and predictive capacity planning to optimize costs without service impact.' },
      { label: 'Action', text: 'Deployed an Autonomous Resource Broker and a Predictive Capacity Forecasting pipeline on CIC to schedule and resize workloads.' },
      { label: 'Outcome', text: 'Achieved 28% monthly cost savings, eliminated surprise egress charges, and maintained performance SLAs.' },
    ]
  },
  agility: {
    title: "Speed & Agility in High‑Stakes",
    imageSrc: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'An Oracle digital‑twin PoC had stalled for 10 weeks without delivering measurable value.' },
      { label: 'Task', text: 'Accelerate PoC delivery to demonstrate tangible outcomes within 48 hours.' },
      { label: 'Action', text: 'Implemented a Rapid-Start PoC Generator with sector-specific IaC templates and pre-trained Demo Agents like "CityOps Coordinator."' },
      { label: 'Outcome', text: 'Delivered a working demo in 42 hours, secured a $1M follow-on contract, and adopted the framework enterprise-wide.' },
    ]
  },
  frameworks: {
    title: "Innovation Frameworks",
    imageSrc: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80",
    star: [
      { label: 'Situation', text: 'Teams lacked structured processes for ideation and rapid validation, leading to low PoC success rates.' },
      { label: 'Task', text: 'Embed proven techniques—Design Thinking, Working Backwards, Lean UX—to streamline ideation and prototyping.' },
      { label: 'Action', text: 'Ran Working Backwards workshops with stakeholders, introduced Lean UX sprints, and codified a kill-or-scale decision framework.' },
      { label: 'Outcome', text: 'Halved ideation-to-PoC time, increased stakeholder alignment by 40%, and doubled successful PoC conversions within one quarter.' },
    ]
  }
};

const CustomerAsks = () => {
  // Add console log to verify data
  console.log("Customer Asks Data:", Object.keys(customerAsksData));
  
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">
        Customer Asks & Vault's Edge
      </h1>
      <p className="text-gray-700 mb-8">
        Vault Cloud, as Australia's only ASD‑certified hyperscale sovereign cloud operator,
        is uniquely positioned to deliver innovation at scale for national security and
        critical infrastructure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(customerAsksData).map(([key, ask]) => (
          <FeatureCard
            key={key}
            title={ask.title}
            imageSrc={ask.imageSrc}
          >
            <div className="space-y-3">
              {ask.star.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="font-medium text-vault-primary">{item.label}:</p>
                  <p className="text-vault-secondary text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerAsks;
