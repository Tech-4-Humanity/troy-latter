
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
            title="Security Framework Excellence"
            imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-6 rounded-lg">
                <div className="space-y-4">
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
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Collaboration & Leadership"
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-6 rounded-lg">
                <div className="space-y-4">
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
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Innovation & Engineering"
            imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-6 rounded-lg">
                <div className="space-y-4">
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
            <span className="font-medium text-vault-primary">Blueprint to Breakthrough:</span>
            <div className="bg-vault-light p-6 mt-3 rounded-lg">
              <div className="space-y-4">
                <p className="text-vault-secondary">
                  When Interpol asked Oracle to turn scattered AI experiments across ten bureaus into a coherent global program, I stepped in to own the execution strategy. I led "Working Backwards" workshops with CTOs and regional CIOs, built an impact/effort scoring model tied to mission KPIs, and mapped out a six‑month PoC roadmap. By embedding automated compliance gates and demo‑or‑die reviews into our CI/CD pipeline, we launched four first‑of‑their‑kind AI pilots in 12 weeks—unlocking a $7 million follow‑on pipeline, cutting concept‑to‑funding time by 60%, and earning executive sign‑off to move two into full production.
                </p>
              </div>
            </div>
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Tiger Teams & Trusted Partnerships:</span>
            <div className="bg-vault-light p-6 mt-3 rounded-lg">
              <div className="space-y-4">
                <p className="text-vault-secondary">
                  During ASEAN monsoon floods, regional governments and NGOs had no resilient alerts platform when networks collapsed. Tasked by AWS APAC, I formed a six‑person "tiger team," brought in satellite, telco and social‑media SMEs, and ran rapid design sprints to deliver an edge‑mesh alert system. We deployed Snowball Edge and Greengrass nodes, integrated multi‑channel push via SMS, Twitter and Facebook, and iterated daily with first responders. The live demo cut rescue‑coordination delays by 50%, handled 500,000+ alerts, and led to a $2 million regional rollout— cementing our reputation for high‑trust, hands‑on collaboration.
                </p>
              </div>
            </div>
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Edge Engineering & Real‑World Prototypes:</span>
            <div className="bg-vault-light p-6 mt-3 rounded-lg">
              <div className="space-y-4">
                <p className="text-vault-secondary">
                  When the ADF's Secure Content & Collaboration program needed deployable cloud nodes, Unisys had no turnkey solution. I led a four‑person core squad (plus systems‑engineering experts) through 48‑hour PoC sprints—designing, building and field‑testing rugged Kubernetes clusters on AWS Snowball Edge that met zero‑trust standards and survived shock, heat and total isolation. Our fail‑fast culture discarded underperforming form‑factors after each sprint, doubled down on a hardened rack‑mount build, and demoed live at a Defence Innovation Forum. The result: a 75% cut in prototype validation time, sub‑second AI inference under extreme conditions, and a $5 million funding approval to fold these battlefield‑grade nodes into Unisys's core critical‑infrastructure offerings.
                </p>
              </div>
            </div>
          </li>
        </ul>
        
        <div className="bg-vault-accent/10 p-6 rounded-lg mt-8">
          <p className="text-vault-primary font-medium text-lg mb-4">Each of these stories demonstrates exactly how I:</p>
          <ul className="list-disc list-inside space-y-2 text-vault-secondary">
            <li>Take a vision and craft its execution roadmap</li>
            <li>Lead small, high‑performing squads with domain experts</li>
            <li>Drive a fast‑paced, fail‑fast culture that prioritises real impact</li>
            <li>Design, build and validate bleeding‑edge prototypes under real‑world constraints</li>
            <li>Collect customer feedback and translate PoCs into multi‑million‑dollar programs</li>
          </ul>
        </div>
      </div>
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Required Skills & Experience</h2>
        <ul className="list-disc list-inside space-y-4 pl-4">
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Visionary Innovator:</span>
            <div className="bg-vault-light p-6 mt-3 rounded-lg">
              <div className="space-y-4">
                <p className="text-vault-secondary">
                  Across AWS, Oracle and Unisys, I've repeatedly turned bold ideas into first‑of‑their‑kind capabilities. At AWS APAC I launched an AI anomaly‑detection pilot in 48 hours—skipping months of red tape—to prove real‑time sensor analytics under sovereign controls. At Oracle I designed a hybrid pay‑and‑travel platform for the ADF that became the blueprint for future defence deployments. These high‑autonomy initiatives weren't just "innovation theatre" but delivered measurable business value and follow‑on funding.
                </p>
              </div>
            </div>
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">NatSec Fluency:</span>
            <div className="bg-vault-light p-6 mt-3 rounded-lg">
              <div className="space-y-4">
                <p className="text-vault-secondary">
                  I hold an active NV2 clearance and have served as a member of Standards Australia's BCI & Robotics Committee and the Queensland Government AI Hub advisory board. I've navigated ASD and ACSC accreditation processes firsthand—building zero‑trust enclaves and publishing neurotech and robotics guidelines that became national standards. This deep policy and compliance expertise ensures any Vault PoC aligns seamlessly with Australia's most stringent security mandates.
                </p>
              </div>
            </div>
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Hands‑On Technologist:</span>
            <div className="bg-vault-light p-6 mt-3 rounded-lg">
              <div className="space-y-4">
                <p className="text-vault-secondary">
                  My GitHub is filled with real‑world modules: Terraform templates for multi‑region container clusters, Ansible playbooks for hardened OS builds, Kubernetes Operators for automated deployment, and post‑quantum key management scripts using CloudHSM/Oracle Vault. I've personally provisioned edge compute nodes on AWS Snowball Edge, stood up sovereign LLM frameworks on Outposts, and overseen the full CI/CD pipeline—bridging theory and practice in production environments.
                </p>
              </div>
            </div>
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Agile Leader:</span>
            <div className="bg-vault-light p-6 mt-3 rounded-lg">
              <div className="space-y-4">
                <p className="text-vault-secondary">
                  I've built and mentored "tiger teams" of 3–8 specialists at AWS APAC and Unisys—mixing engineers, data scientists and compliance experts. By instituting two‑week "Sprint Marathons," daily standups and Friday demo‑or‑die sessions tied to kill/scale metrics, we tripled PoC throughput, cut cycle times by 60% and increased funding conversion rates from 20% to over 60%. This lean, high‑trust culture keeps bureaucracy at bay and puts execution front and center.
                </p>
              </div>
            </div>
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Data‑Driven:</span>
            <div className="bg-vault-light p-6 mt-3 rounded-lg">
              <div className="space-y-4">
                <p className="text-vault-secondary">
                  No prototype ships without instrumentation. I've embedded OpenTelemetry‑powered metrics, Prometheus/Grafana dashboards and AWS Cost Explorer integrations into every PoC—tracking usage, latency, anomaly‑rates and cost savings in real time. I then layer on QuickSight or Kibana ROI dashboards that translate raw KPIs into business impact (e.g. $150K/month savings, 85% reduction in audit prep). These live insights turn demos into indisputable cases for scale‑up.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Responsibilities;
