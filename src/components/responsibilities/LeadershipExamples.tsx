
import React from 'react';
import { LeadershipCard } from './LeadershipCard';

export const LeadershipExamples = () => {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 gap-8">
        <LeadershipCard
          title="Security Framework Excellence"
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          situation="Unisys was engaged by the Department of Defence and Health to roll out an AI-driven patient triage system for field hospitals, but there was no established framework to ensure it met the highest national-security and medical compliance standards."
          task="Establish a repeatable governance model that would allow AI triage technology to be deployed rapidly across military medical units, while satisfying ASD, ACSC and health-regulator requirements."
          action={'I formed and led a joint working group with Unisys engineers, Defence policy officers and health regulators. We mapped out all compliance checkpoints from data handling to model validation, then built a clear "AI Governance Playbook." This guide aligned AI outputs to clinical protocols and security policies, trained operations teams through live simulations, and embedded automated compliance reviews into every deployment approval.'}
          outcome={'Within 3 months, the playbook was approved by both ASD and the health regulator. The AI triage system was safely deployed to 20 field units, cutting average patient assessment time by 35% and reducing medical backlog by 60%, all while passing every audit with zero findings and securing a $2 M multi-year support contract.'}
        />

        <LeadershipCard
          title="Collaboration & Leadership"
          imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          situation="During severe monsoon floods across ASEAN, regional governments struggled to coordinate warnings and search-and-rescue when fixed internet and cellular networks went offline. Without a unified communications platform, thousands of residents remained unaware of rising floodwaters until it was too late."
          task="Partner with AWS and multiple ASEAN government agencies, telcos and social media providers to architect and deliver an end-to-end emergency alert and rescue coordination system that worked seamlessly, even in disconnected environments, and scaled across seven countries."
          action={'I formed and led a high-trust "Tiger Team" comprising AWS Solutions Architects, government disaster-management leads, telco engineers and social-media API specialists. We ran design-thinking workshops to map stakeholder needs, then built a prototype on AWS using Lambda, SNS and API Gateway to broadcast multi-channel alerts via Twitter, Facebook and SMS. To bridge offline gaps, we deployed AWS IoT Greengrass edge nodes powered by satellite backhaul and integrated local radio gateways. We held live field drills with first responders, collecting real-time feedback and iterating daily in 24-hour sprints.'}
          outcome={'Within eight weeks, the pilot system delivered 500,000 hyper-local alerts, cut average rescue response times by 50%, and enabled direct coordination of 150 successful rescues, all with zero data lost outside sovereign AWS regions. The success unlocked a $2 million regional rollout contract and cemented AWS\'s reputation as the go-to partner for mission-critical, cross-border emergency services.'}
        />

        <LeadershipCard
          title="Oracle APAC Startup & Scale-Up Accelerator"
          imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
          situation="Oracle APAC lacked a structured channel to onboard and scale high-growth startups on OCI, limiting pipeline and regional developer talent."
          task="Launch and lead the Oracle APAC Innovation Centre in Singapore, creating a Startup & Scale-Up Accelerator that converts trial credits into paid contracts and develops a local talent pipeline."
          action={'Founded the Innovation Centre, recruited 30 early-stage and scale-up startups across fintech, healthtech and govtech. Allocated $500K in OCI credits, provided lab access and one-on-one mentorship from senior architects. Ran monthly hackathons and Demo Days with C-suite execs, then automated a "Credits-to-Contracts" process integrating PoC success metrics into Oracle\'s sales funnel. Built a developer academy that certified 150 engineers on OCI services.'}
          outcome={'Over 12 months accelerated 50 startups, achieved a 60% conversion rate (30 startups) into paying customers driving $3M ARR and established a vibrant ecosystem of 150 certified OCI architects and regional VC partners.'}
        />

        <LeadershipCard
          title="Innovation & Engineering"
          imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
          situation="At Oracle APAC, the Australian Defence Force relied on a legacy, paper-driven system to manage pay and travel allowances for 60,000 personnel, resulting in frequent reconciliation errors, delayed payments of up to six weeks, and low soldier morale."
          task="Architect and prototype a secure, cloud-native pay and travel-allowance platform that would run in Oracle Cloud Infrastructure, meet defence's zero-trust and audit requirements, and automate end-to-end allowance processing with Infrastructure-as-Code."
          action={'I led a cross-disciplinary team of Oracle cloud engineers and defence IT specialists. We designed Terraform modules to provision multi-region OCI compartments, networking and Kubernetes clusters with automated Istio-backed mTLS. Using Ansible, we scripted microservices deployments that ingested HR data, calculated entitlements, and triggered payments via secure API calls. We embedded Oracle Cloud Guard and OCI Vault for key management, and set up a GitOps pipeline with automated policy scans for each change. I presented the prototype at a national defence tech symposium, wrote the accompanying whitepaper, and built a financial model showing TCO and ROI.'}
          outcome={'The prototype cut end-to-end allowance processing from 6 weeks to under 24 hours, eliminated manual reconciliation errors (0% error rate in pilot), and demonstrated projected annual savings of $3 million. The business case secured CDF and Treasury sign-off for a $5 million production rollout next fiscal year, cementing Oracle\'s edge in sovereign defence solutions.'}
        />
      </div>
    </div>
  );
};
