import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FeatureCard } from '@/components/FeatureCard';

const opportunityExamples = {
  accelerated: {
    title: 'Accelerated AI Pilot',
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    content: "Situation: The Chief Data Officer of a major Australian utility approached AWS to prove real‑time anomaly detection on power‑grid sensor feeds under tight 72‑hour deadlines and strict government encryption standards. Their traditional analytics took days, leaving them blind to emerging faults and costly downtime.\n\nTask: Stand up an end‑to‑end, fully managed AWS AI/ML pipeline—using SageMaker, Kinesis Data Streams, and IoT Greengrass—capable of ingesting high‑velocity sensor data, training custom models, and serving inferences at the edge, all within a sovereign AWS region and FIPS 140‑2 compliance.\n\nAction: I architected and deployed a CloudFormation blueprint that spun up Kinesis shard autoscaling, SageMaker training jobs with use of custom Docker containers, and Greengrass core on AWS Snowball Edge for offline edge inference. We secured keys with AWS KMS and CloudHSM, enforced policy drift checks via AWS Config Rules, and automated end‑to‑end CI/CD through CodePipeline and CodeBuild. In parallel, I led daily \"fail‑fast\" sprints with utility engineers and AWS Solutions Architects to validate each component in 24‑hr cycles.\n\nOutcome: In just 60 hours (vs. 3 weeks normally) we delivered a pilot that detected voltage anomalies with 95% accuracy. This reduced unplanned outages by 40%, saving the utility an estimated $300K per month in incident response costs—and directly led to a $2.5 million follow‑on contract to productionalize the solution across all grid regions."
  },
  edge: {
    title: 'Edge Compute for Pacific HADR',
    imageSrc: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80",
    content: "Situation: At the behest of the Royal Australian Navy, multiple defence units and humanitarian agencies lacked real‑time analytic capabilities in the field during Pacific disaster relief operations. They needed to process sensitive imagery and sensor data on‑site—under strict sovereign data requirements—and then sync only approved outputs back into AWS.\n\nTask: Prove that a fleet of AWS Snowcone edge devices could:\n\nRun AI inference on classified data in austere, disconnected environments.\n\nAutomatically and securely synchronize only vetted results to AWS Cloud.\n\nUncover where this edge‑to‑cloud pattern delivers lasting business value for defence and critical infrastructure.\n\nAction: I led a joint AWS‑Navy‑NGO \"tiger team,\" kicking off with Working Backwards workshops to align on mission‑critical use cases. We developed Terraform/Ansible modules to automate Snowcone provisioning, embedded AWS IoT Greengrass for on‑device inference pipelines, and built encrypted S3 sync scripts that only transmitted approved metadata back to AWS. Throughout 24‑hour sprint cycles, we ran simulated network outages, gathered user feedback, and tuned our mesh and security protocols.\n\nOutcome: The PoC delivered sub‑second object detection on live disaster imagery, reducing decision cycles by 60% and cutting air‑lift planning time from 8 hours to 4 hours per mission. Critically, the exercise surfaced a clear business opportunity: an AWS Outposts‑backed edge service that can slash egress costs by 30%, empower frontline units with sovereign‑controlled compute, and unlock multi‑million‑dollar region expansions—paving the way for Vault‑powered edge solutions of the future."
  },
  automation: {
    title: 'Automation Framework',
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
    content: "Situation: A leading Australian bank engaged Unisys to migrate mission‑critical trading and settlement platforms to the cloud, but their manual change‑control reviews on Terraform and ARM templates were creating 10‑day bottlenecks—threatening regulatory deadlines and exposing them to security patch delays.\n\nTask: Devise a bleeding‑edge, high‑autonomy automation solution that validated every IaC change against policy, auto‑remediated low‑risk infra drifts, and delivered full audit trails to satisfy ACSC and APRA reviews—all without human intervention delaying releases.\n\nAction: I assembled a cross‑functional \"tiger team\" of Unisys DevOps, security architects and bank compliance officers. We built a multi‑agent framework:\n\nInnovation & Engineering: Used Terraform Sentinel policies for pre‑commit checks and AWS Config Rules to detect drift in real time.\n\nAutomation Agents: Wrote Python‑based Lambda bots that applied approved remediation playbooks for low‑risk findings.\n\nAudit Dashboard: Streamed CloudTrail and Config logs into an Elasticsearch‑Kibana portal for live customer validation.\n\nCulture & Pace: Ran daily fail‑fast sprints, integrating stakeholder feedback and refining playbooks in 24 hr cycles.\n\nOutcome: The PoC slashed change‑control lead time from 10 days to just 2 hours, boosted deployment velocity by 70%, and achieved zero non‑compliance findings during ACSC readiness drills. This rapid success converted the pilot into a $1.2 million enterprise rolling‑wave contract, cementing Unisys's mission‑critical cloud innovation leadership."
  }
};

const InnovationJourney = () => {
  return (
    <div className="animate-fade-in">
      <PageTitle title="My Innovation Journey" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
            alt="Innovation Journey" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <Card className="bg-white shadow-sm mb-8">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-6 text-gray-700">
              <li>
                <span className="font-semibold">Chief Innovation Adviser, Oracle (2016–2019)</span>
                <br />
                • Built humanitarian relief platforms for ASEAN governments—integrating real‑time Twitter, Facebook and agency feeds.
                <br />
                • Led expansion of Oracle Cloud regions and sovereign‑cloud deployments with data‑residency controls.
                <br />
                • Piloted Halal‑blockchain proofs‑of‑origin for supply transparency.
                <br />
                • <span className="text-vault-accent">Oracle APAC Startup & Scale-Up Accelerator</span>
              </li>
              <li>
                <span className="font-semibold">Principal Solutions Architect, AWS (2019–2023)</span>
                <br />
                • Designed digital‑twin frameworks for smart‑city simulations—meshed networks mapping transport and services.
                <br />
                • Deployed edge‑powered meshed networks for low‑latency IoT in urban and remote zones.
                <br />
                • Advised on AI policy & legislation balancing innovation with public trust.
                <br />
                • At AWS APAC, founded a cross‑industry AI consortium (ISVs, research bodies, agencies) → 3× faster partner certifications & $15 M new marketplace revenue in year 1.
              </li>
              <li>
                <span className="font-semibold">APAC CTO & Head of Strategic Foresight, Unisys (2024–Mar '25)</span>
                <br />
                • <em>Internal Innovation:</em> Rolled out Microsoft Kernel, Google AI and IBM Watson to automate ticket triage and reporting.
                <br />
                • <em>Agent‑Powered Augmentation:</em> Developed AI agents for service‑desk, finance and HR—boosting productivity 30% in six months.
                <br />
                • <em>Customer Transformation:</em> Re‑architected legacy SaaS contracts for Home Affairs and DFAT into cloud‑native microservices.
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-vault-primary mb-6">Strategic Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {Object.entries(opportunityExamples).map(([key, example]) => (
              <FeatureCard
                key={key}
                title={example.title}
                imageSrc={example.imageSrc}
              >
                <div className="text-vault-secondary space-y-4">
                  {example.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </FeatureCard>
            ))}
          </div>
        </div>
        
        <Separator className="my-10 bg-vault-accent/30" />
        
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold text-vault-primary">The Many Faces of Innovation</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-xl text-vault-primary">Proven First‑of‑a‑Kind R&D</h3>
              <p className="text-vault-secondary mt-2">
                Bleeding‑edge concepts, real-world impact<br/>
                At AWS, I led a two‑day AI anomaly‑detection pilot in 48 hours (vs. 3 weeks), embedding real sensor feeds and hitting 90% accuracy under ASD‑grade controls. At Unisys, I spun up battlefield‑ready Kubernetes clusters on Snowball Edge in under one week—surviving shock, heat and network outages. These aren't slide decks; they're hardened prototypes that won follow‑on funding.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-xl text-vault-primary">Empowered Autonomous Innovation</h3>
              <p className="text-vault-secondary mt-2">
                High‑autonomy, high‑impact leadership<br/>
                At Oracle APAC, I built and mentored a four‑person "tiger team" with embedded SMEs to smash through bureaucracy. We ran sprint marathons with "demo‑or‑die" gates, killing underperformers overnight and doubling PoC success rates. Executives saw that speed plus rigor drives real breakthroughs.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-xl text-vault-primary">Mission‑Critical Scale</h3>
              <p className="text-vault-secondary mt-2">
                From lab demos into core offerings<br/>
                Whether it was rolling out an on‑prem LLM for a top‑tier intelligence agency (saving 60% in briefing time) or delivering a sovereign pay‑and‑travel platform for the Australian Defence Force (cutting a six‑week backlog to 24 hours), I've translated prototypes into million‑dollar production lines—exactly the scale Vault needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationJourney;
