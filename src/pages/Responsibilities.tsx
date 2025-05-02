
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Separator } from '@/components/ui/separator';

const Responsibilities = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="Responsibilities" />
      
      <div className="text-lg mb-8">
        <p className="mb-6">
          As Head of Innovation, you'll drive breakthrough initiatives while building a culture of rapid experimentation and measurable outcomes.
        </p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-8">My Leadership Examples</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="NatSec Fluency"
            imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-6 rounded-lg">
                <details>
                  <summary className="font-medium text-vault-primary cursor-pointer">Click to reveal STAR story</summary>
                  <div className="pt-4 space-y-4">
                    <p className="text-vault-secondary">
                      <span className="font-medium">Situation:</span> Unisys was engaged by the Department of Defence and Health to roll out an AI-driven patient triage system for field hospitals—but there was no established framework to ensure it met the highest national‑security and medical compliance standards.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Task:</span> Establish a repeatable governance model that would allow AI triage technology to be deployed rapidly across military medical units, while satisfying ASD, ACSC and health‑regulator requirements.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Action:</span> I formed and led a joint working group with Unisys engineers, Defence policy officers and health regulators. We mapped out all compliance checkpoints—from data handling to model validation—then built a clear "AI Governance Playbook." This guide aligned AI outputs to clinical protocols and security policies, trained operations teams through live simulations, and embedded automated compliance reviews into every deployment approval.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Outcome:</span> Within 3 months, the playbook was approved by both ASD and the health regulator. The AI triage system was safely deployed to 20 field units, cutting average patient assessment time by 35% and reducing medical backlog by 60%, all while passing every audit with zero findings—and securing a $2 M multi‑year support contract.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Collaboration & Leadership"
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-6 rounded-lg">
                <details>
                  <summary className="font-medium text-vault-primary cursor-pointer">Click to reveal STAR story</summary>
                  <div className="pt-4 space-y-4">
                    <p className="text-vault-secondary">
                      <span className="font-medium">Situation:</span> During severe monsoon floods across ASEAN, regional governments struggled to coordinate warnings and search‑and‑rescue when fixed internet and cellular networks went offline. Without a unified communications platform, thousands of residents remained unaware of rising floodwaters until it was too late.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Task:</span> Partner with AWS and multiple ASEAN government agencies, telcos and social media providers to architect and deliver an end‑to‑end emergency alert and rescue coordination system that worked seamlessly—even in disconnected environments—and scaled across seven countries.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Action:</span> I formed and led a high‑trust "Tiger Team" comprising AWS Solutions Architects, government disaster‑management leads, telco engineers and social‑media API specialists. We ran design‑thinking workshops to map stakeholder needs, then built a prototype on AWS using Lambda, SNS and API Gateway to broadcast multi‑channel alerts via Twitter, Facebook and SMS. To bridge offline gaps, we deployed AWS IoT Greengrass edge nodes powered by satellite backhaul and integrated local radio gateways. We held live field drills with first responders, collecting real‑time feedback and iterating daily in 24‑hour sprints.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Outcome:</span> Within eight weeks, the pilot system delivered 500,000 hyper‑local alerts, cut average rescue response times by 50%, and enabled direct coordination of 150 successful rescues—all with zero data lost outside sovereign AWS regions. The success unlocked a $2 million regional rollout contract and cemented AWS's reputation as the go‑to partner for mission‑critical, cross‑border emergency services.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Innovation & Engineering"
            imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-6 rounded-lg">
                <details>
                  <summary className="font-medium text-vault-primary cursor-pointer">Click to reveal STAR story</summary>
                  <div className="pt-4 space-y-4">
                    <p className="text-vault-secondary">
                      <span className="font-medium">Situation:</span> At Oracle APAC, the Australian Defence Force relied on a legacy, paper‑driven system to manage pay and travel allowances for 60,000 personnel—resulting in frequent reconciliation errors, delayed payments of up to six weeks, and low soldier morale.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Task:</span> Architect and prototype a secure, cloud‑native pay and travel‑allowance platform that would run in Oracle Cloud Infrastructure, meet defence's zero‑trust and audit requirements, and automate end‑to‑end allowance processing with Infrastructure‑as‑Code.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Action:</span> I led a cross‑disciplinary team of Oracle cloud engineers and defence IT specialists. We designed Terraform modules to provision multi‑region OCI compartments, networking and Kubernetes clusters with automated Istio‑backed mTLS. Using Ansible, we scripted microservices deployments that ingested HR data, calculated entitlements, and triggered payments via secure API calls. We embedded Oracle Cloud Guard and OCI Vault for key management, and set up a GitOps pipeline with automated policy scans for each change. I presented the prototype at a national defence tech symposium, wrote the accompanying whitepaper, and built a financial model showing TCO and ROI.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Outcome:</span> The prototype cut end‑to‑end allowance processing from 6 weeks to under 24 hours, eliminated manual reconciliation errors (0% error rate in pilot), and demonstrated projected annual savings of $3 million. The business case secured CDF and Treasury sign‑off for a $5 million production rollout next fiscal year—cementing Oracle's edge in sovereign defence solutions.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Key Responsibilities</h2>
        <ul className="list-disc list-inside space-y-4 pl-4">
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Strategy & Execution:</span> Shape and prioritise Vault's R&D pipeline to deliver measurable breakthroughs while maintaining SDLC integrity in regulated environments.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Collaboration & Leadership:</span> Build high‑trust teams and partner with Defence, Intelligence and domain experts to validate concepts and scale innovations.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Innovation & Engineering:</span> Design, build and test IaC prototypes: from battlefield clusters to LLM frameworks with technical evangelism and business case translation.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Culture & Pace:</span> Embed a fail‑fast mindset—iterate quickly, learn and scale.
            <div className="bg-vault-light p-6 mt-3 rounded-lg">
              <details>
                <summary className="font-medium text-vault-primary cursor-pointer">Click to reveal STAR story</summary>
                <div className="pt-4 space-y-4">
                  <p className="text-vault-secondary">
                    <span className="font-medium">Situation:</span> At Amazon APAC's Rapid Innovation Lab, PoCs routinely languished for 12 weeks, with only 20% ever winning follow‑on funding—eroding stakeholder trust and slowing business impact.
                  </p>
                  <p className="text-vault-secondary">
                    <span className="font-medium">Task:</span> Inject Amazon's "Day 1" bias for action to slash cycle times, maximize high‑value experiments, and reestablish confidence in rapid innovation.
                  </p>
                  <p className="text-vault-secondary">
                    <span className="font-medium">Action:</span> I personally pushed the fast‑pace ethos at Amazon—launching two‑week "Sprint Marathons" with Friday C‑suite Demo Days, hard kill/scale metrics tied directly to projected ROI, and a live "Innovation Scoreboard" tracking time‑to‑insight and funding likelihood. I convinced senior leaders to back immediate pivot or kill decisions, embedded daily standups, and coached teams to treat every sprint as a business mini‑investment.
                  </p>
                  <p className="text-vault-secondary">
                    <span className="font-medium">Outcome:</span> In six months, PoC duration collapsed from 12 weeks to 4 weeks, throughput tripled, funding conversion jumped from 20% to 65%, and we unlocked a $6 million innovation pipeline—with executive sponsor satisfaction soaring to a 4.8/5 rating.
                  </p>
                </div>
              </details>
            </div>
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Customer Validation:</span> Demo PoCs, gather feedback, and refine real‑world applications.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Technical Evangelism:</span> Represent Vault at industry forums, publish whitepapers, host Tech Talks.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Business Case Translation:</span> Convert PoC results into ROI‑driven proposals for executive buy‑in.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Responsibilities;
