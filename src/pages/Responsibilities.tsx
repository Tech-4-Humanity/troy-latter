
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Separator } from '@/components/ui/separator';

const Responsibilities = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <PageTitle title="Responsibilities" />
      
      <div className="text-center mb-10">
        <p className="text-lg max-w-4xl mx-auto">
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
            title="Agile Team Scaling"
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-6 rounded-lg">
                <p className="text-vault-secondary">
                  Led a small innovation team (4 engineers) facing increasing demands from multiple business units and external partners. Scale team capabilities while maintaining high quality standards and rapid delivery pace. Implemented structured hiring process focused on versatile full-stack engineers. Introduced two-week "innovation sprints" with dedicated discovery and delivery phases. Created modular PoC architecture to enable component reuse across projects. Grew team to 10 engineers while maintaining culture and quality. Increased delivery velocity by 40% and tripled PoC output. Reduced average time-to-MVP from 8 weeks to 3 weeks. Achieved 95% stakeholder satisfaction rating across all projects.
                </p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Fail-Fast Culture"
            imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-6 rounded-lg">
                <p className="text-vault-secondary">
                  Innovation projects were suffering from bureaucratic processes and delayed decision-making, with PoCs lingering in development for months. Accelerate innovation cycle time by embracing fail-fast principles and removing organisational barriers. Implemented lean Kanban system with WIP limits. Established clear "kill criteria" for all projects with bi-weekly go/no-go decision points. Created innovation showcase framework for rapid stakeholder feedback. Reduced average innovation cycle time from 16 weeks to 4 weeks. Improved resource allocation by identifying non-viable concepts early. Significantly enhanced stakeholder trust through transparent process and consistent delivery.
                </p>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="space-y-8 mb-12">
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
