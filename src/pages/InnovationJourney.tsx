
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ContentCard } from '@/components/ContentCard';
import { ListItem } from '@/components/ListItem';
import { LeadershipCard } from '@/components/responsibilities/LeadershipCard';

const InnovationJourney = () => {
  const journeyItems = [
    {
      title: "Government Industry Engagement",
      description: "Working with Australian Government Trade and Investment Commission to drive innovation initiatives across public sector."
    },
    {
      title: "AWS Innovation Factory",
      description: "Led AWS' innovation accelerator focusing on generative AI, medical devices and Zambrero CSR."
    },
    {
      title: "Oracle Labs FastTrack",
      description: "Machine learning for post-quantum cryptography; blockchain & dynamic data masking."
    },
    {
      title: "First POC Verified Model",
      description: "Created $1.7 million in converted pipeline and trained 30+ sellers in 6 months."
    },
    {
      title: "Edge & Sovereign Cloud",
      description: "Pioneered on-prem innovation for sovereignty-sensitive sectors (defence, critical infrastructure)."
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="My Innovation Journey" />

      <section className="mb-8">
        <ContentCard>
          <div className="prose max-w-none">
            <h3 className="text-xl font-bold text-vault-primary mb-4">Chief Innovation Adviser, Oracle (2016–2019)</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Built humanitarian relief platforms for ASEAN governments - integrating real-time Twitter, Facebook and agency feeds.</li>
              <li>Led expansion of Oracle Cloud regions and first sovereign-cloud deployments with data-residency controls.</li>
              <li>Piloted Halal-blockchain proofs-of-origin for regulated-supply transparency.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-vault-primary mb-4">Principal Solutions Architect, AWS (2019–2023)</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Designed digital-twin frameworks for smart-city simulations - meshed networks mapping utilities, transport and services.</li>
              <li>Deployed edge-powered meshed networks for low-latency IoT in urban and remote zones.</li>
              <li>Advised on AI policy & responsible-AI legislation balancing innovation with public trust.</li>
            </ul>
            
            <h3 className="text-xl font-bold text-vault-primary mb-4">APAC CTO & Head of Strategic Foresight, Unisys (2024–Mar '25)</h3>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li><span className="font-medium">Internal Innovation:</span> Rolled out Microsoft Semantic Kernel, Google AI and IBM Watson to automate ticket triage, procurement and reporting.</li>
              <li><span className="font-medium">Agent-Powered Augmentation:</span> Developed AI agents for service-desk, finance and HR - boosting productivity 30 % in six months.</li>
              <li><span className="font-medium">Customer Transformation:</span> Re-architected legacy SaaS contracts for Home Affairs and DFAT into cloud-native microservices - escaping technical debt and accelerating delivery.</li>
            </ul>
          </div>
        </ContentCard>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">Scaling Innovation</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <ContentCard>
              <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
                {journeyItems.map((item, index) => (
                  <ListItem key={index} title={item.title} description={item.description} />
                ))}
              </ul>
            </ContentCard>
          </div>
          
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">
              <img 
                src="/lovable-uploads/24ae2c57-fff3-40ab-88f1-3ad34c248fc1.png" 
                alt="Oracle and AWS innovation partnerships" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">Case Studies</h2>
        <div className="grid grid-cols-1 gap-8">
          <LeadershipCard
            title="Security Framework Excellence"
            imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
            situation="Unisys was engaged by the Department of Defence and Health to roll out an AI-driven patient triage system for field hospitals - but there was no established framework to ensure it met the highest national-security and medical compliance standards."
            task="Establish a repeatable governance model that would allow AI triage technology to be deployed rapidly across military medical units, while satisfying ASD, ACSC and health-regulator requirements."
            action={'I formed and led a joint working group with Unisys engineers, Defence policy officers and health regulators. We mapped out all compliance checkpoints - from data handling to model validation - then built a clear "AI Governance Playbook." This guide aligned AI outputs to clinical protocols and security policies, trained operations teams through live simulations, and embedded automated compliance reviews into every deployment approval.'}
            outcome={'Within 3 months, the playbook was approved by both ASD and the health regulator. The AI triage system was safely deployed to 20 field units, cutting average patient assessment time by 35% and reducing medical backlog by 60%, all while passing every audit with zero findings - and securing a $2 M multi-year support contract.'}
          />

          <LeadershipCard
            title="Collaboration & Leadership"
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
            situation="During severe monsoon floods across ASEAN, regional governments struggled to coordinate warnings and search-and-rescue when fixed internet and cellular networks went offline. Without a unified communications platform, thousands of residents remained unaware of rising floodwaters until it was too late."
            task="Partner with AWS and multiple ASEAN government agencies, telcos and social media providers to architect and deliver an end-to-end emergency alert and rescue coordination system that worked seamlessly - even in disconnected environments - and scaled across seven countries."
            action={'I formed and led a high-trust "Tiger Team" comprising AWS Solutions Architects, government disaster-management leads, telco engineers and social-media API specialists. We ran design-thinking workshops to map stakeholder needs, then built a prototype on AWS using Lambda, SNS and API Gateway to broadcast multi-channel alerts via Twitter, Facebook and SMS. To bridge offline gaps, we deployed AWS IoT Greengrass edge nodes powered by satellite backhaul and integrated local radio gateways. We held live field drills with first responders, collecting real-time feedback and iterating daily in 24-hour sprints.'}
            outcome={'Within eight weeks, the pilot system delivered 500,000 hyper-local alerts, cut average rescue response times by 50%, and enabled direct coordination of 150 successful rescues - all with zero data lost outside sovereign AWS regions. The success unlocked a $2 million regional rollout contract and cemented AWS\'s reputation as the go-to partner for mission-critical, cross-border emergency services.'}
          />

          <LeadershipCard
            title="Oracle APAC Startup & Scale-Up Accelerator"
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
            situation="Oracle APAC lacked a structured channel to onboard and scale high-growth startups on OCI - limiting pipeline and regional developer talent."
            task="Launch and lead the Oracle APAC Innovation Centre in Singapore, creating a Startup & Scale-Up Accelerator that converts trial credits into paid contracts and develops a local talent pipeline."
            action={'Founded the Innovation Centre, recruited 30 early-stage and scale-up startups across fintech, healthtech and govtech. Allocated $500K in OCI credits, provided lab access and one-on-one mentorship from senior architects. Ran monthly hackathons and Demo Days with C-suite execs, then automated a "Credits-to-Contracts" process integrating PoC success metrics into Oracle\'s sales funnel. Built a developer academy that certified 150 engineers on OCI services.'}
            outcome={'Over 12 months accelerated 50 startups, achieved a 60% conversion rate (30 startups) into paying customers - driving $3M ARR - and established a vibrant ecosystem of 150 certified OCI architects and regional VC partners.'}
          />

          <LeadershipCard
            title="Innovation & Engineering"
            imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
            situation="At Oracle APAC, the Australian Defence Force relied on a legacy, paper-driven system to manage pay and travel allowances for 60,000 personnel - resulting in frequent reconciliation errors, delayed payments of up to six weeks, and low soldier morale."
            task="Architect and prototype a secure, cloud-native pay and travel-allowance platform that would run in Oracle Cloud Infrastructure, meet defence's zero-trust and audit requirements, and automate end-to-end allowance processing with Infrastructure-as-Code."
            action={'I led a cross-disciplinary team of Oracle cloud engineers and defence IT specialists. We designed Terraform modules to provision multi-region OCI compartments, networking and Kubernetes clusters with automated Istio-backed mTLS. Using Ansible, we scripted microservices deployments that ingested HR data, calculated entitlements, and triggered payments via secure API calls. We embedded Oracle Cloud Guard and OCI Vault for key management, and set up a GitOps pipeline with automated policy scans for each change. I presented the prototype at a national defence tech symposium, wrote the accompanying whitepaper, and built a financial model showing TCO and ROI.'}
            outcome={'The prototype cut end-to-end allowance processing from 6 weeks to under 24 hours, eliminated manual reconciliation errors (0% error rate in pilot), and demonstrated projected annual savings of $3 million. The business case secured CDF and Treasury sign-off for a $5 million production rollout next fiscal year - cementing Oracle\'s edge in sovereign defence solutions.'}
          />
        </div>
      </section>
    </div>
  );
};

export default InnovationJourney;
