
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
            title="Strategy & Execution"
            imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-6 rounded-lg">
                <details>
                  <summary className="font-medium text-vault-primary cursor-pointer">Click to reveal STAR story</summary>
                  <div className="pt-4 space-y-4">
                    <p className="text-vault-secondary">
                      <span className="font-medium">Situation:</span> As Oracle's APAC Cloud Architect, I was brought in by Interpol to address a critical gap: ten regional bureaus were each running their own isolated AI proofs of concept, duplicating work and budget without any shared roadmap or compliance framework.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Task:</span> My mandate was to shape and prioritise a unified, mission‑critical R&D pipeline of first‑of‑a‑kind AI PoCs that would deliver tangible breakthroughs for global law enforcement, while enforcing Oracle's SDLC guardrails and meeting Interpol's stringent cross‑border data sovereignty requirements.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Action:</span> I led "Working Backwards" strategy workshops with Interpol's CTO council and regional technology leads, translating crime‑fighting objectives into an impact/effort scoring model. We mapped out a phased six‑month roadmap, built automated compliance gates into our CI/CD pipelines using Terraform Sentinel and Oracle Cloud Guardrails, and embedded continuous policy checks aligned to Interpol's governance rules.
                    </p>
                    <p className="text-vault-secondary">
                      <span className="font-medium">Outcome:</span> Within twelve weeks, we delivered four high‑impact PoCs—from automated cross‑border forensic video analysis to a sovereign LLM summarisation engine—unlocking a €7 million follow‑on pipeline, slashing "concept‑to‑funding" lead times by 60%, and earning executive approval to transition two pilots into global production in the next quarter.
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
