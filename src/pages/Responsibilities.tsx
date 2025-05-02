
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';

const Responsibilities = () => {
  return (
    <div>
      <PageTitle title="Responsibilities" />
      
      <div className="text-center mb-10">
        <p className="text-lg max-w-3xl mx-auto">
          As Head of Innovation, you'll drive breakthrough initiatives while building a culture of rapid experimentation and measurable outcomes.
        </p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">My Leadership Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="R&D Roadmap Delivery"
            imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-4 rounded-lg">
                <p className="text-vault-secondary text-sm">
                  Joined a high-growth defence tech company with siloed AI initiatives across multiple business units. Consolidated fragmented R&D efforts into a unified roadmap and establish clear prioritisation criteria. Conducted cross-functional workshops with technical and business stakeholders. Created evaluation framework for initiatives based on technical feasibility, market potential and strategic alignment. Established quarterly review cadence for roadmap updates. Delivered cohesive AI roadmap that secured C-level buy-in. Successfully launched 5 proof-of-concepts that generated £3M in qualified pipeline within 12 weeks. Improved cross-team collaboration and reduced duplicate efforts by 30%.
                </p>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Agile Team Scaling"
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          >
            <div className="space-y-4">
              <div className="bg-vault-light p-4 rounded-lg">
                <p className="text-vault-secondary text-sm">
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
              <div className="bg-vault-light p-4 rounded-lg">
                <p className="text-vault-secondary text-sm">
                  Innovation projects were suffering from bureaucratic processes and delayed decision-making, with PoCs lingering in development for months. Accelerate innovation cycle time by embracing fail-fast principles and removing organisational barriers. Implemented lean Kanban system with WIP limits. Established clear "kill criteria" for all projects with bi-weekly go/no-go decision points. Created innovation showcase framework for rapid stakeholder feedback. Reduced average innovation cycle time from 16 weeks to 4 weeks. Improved resource allocation by identifying non-viable concepts early. Significantly enhanced stakeholder trust through transparent process and consistent delivery.
                </p>
              </div>
            </div>
          </FeatureCard>
        </div>
      </div>
      
      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Key Responsibilities</h2>
        <ul className="list-disc list-inside space-y-3 pl-4">
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
