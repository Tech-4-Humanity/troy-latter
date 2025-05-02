
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
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

const TheOpportunity = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="The Opportunity" />
      
      <div className="text-lg mb-8">
        <p className="mb-6">
          This role is a rare chance to drive sovereign‑grade cloud innovation at the intersection of AI, security,
          and national defence. You'll break rules, prototype new paradigms, and forge Vault's future offering.
        </p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-8">Customer Success Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
        <h2 className="text-2xl font-semibold text-vault-primary">Key Aspects</h2>
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
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">How I Drive Vault's Vision</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-medium text-xl text-vault-primary">From Vision to Roadmap</h3>
            <p className="text-vault-secondary mt-2">
              Shape and prioritise the innovation pipeline<br/>
              At Unisys I took five siloed AI pilots across government, ran Working‑Backwards strategy sprints, and delivered a six‑month PoC roadmap that unlocked an $8 M follow‑on pipeline in 12 weeks.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Building Tiger Teams</h3>
            <p className="text-vault-secondary mt-2">
              Lead small, high‑trust squads with external experts<br/>
              At AWS APAC I formed a lean group of five data scientists and DevOps engineers, ran two‑week "Sprint Marathons," and achieved a 65% PoC funding conversion—tripling throughput and restoring executive faith.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Breaking the Prototype‑to‑Reality Barrier</h3>
            <p className="text-vault-secondary mt-2">
              Design, build and test bleeding‑edge IaC demos<br/>
              At Oracle I authored modular playbooks and orchestrated CI/CD tests for rugged edge clusters and LLM frameworks—then presented live demos to Defence leadership, securing $5 M in production funding.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Culture & Pace</h3>
            <p className="text-vault-secondary mt-2">
              Embed a fail‑fast, learn‑fast ethos<br/>
              I've introduced weekly "kill/scale" criteria, Friday C‑suite Demo Days, and real‑time innovation dashboards at every company—cutting PoC cycle times from 12 weeks to as little as 4 weeks.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Customer‑first Validation</h3>
            <p className="text-vault-secondary mt-2">
              Showcase PoCs, iterate on feedback<br/>
              I've demoed AI agents and edge‑mesh solutions at AWS summits, Unisys innovation forums and government roadshows—capturing operator feedback that directly drove our next sprint and built customer evangelists.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Technical Evangelism & Business Case Translation</h3>
            <p className="text-vault-secondary mt-2">
              Bridge R&D to board‑room buy‑in<br/>
              Whether publishing whitepapers on neurotech standards, hosting Tech Talks for 200+ executives, or crafting ROI models that secured $2–5 M in follow‑on contracts, I've turned technical wins into strategic wins for every stakeholder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheOpportunity;
