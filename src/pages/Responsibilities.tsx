
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { ListChecks, Handshake, Lightbulb } from 'lucide-react';

const Responsibilities = () => {
  return (
    <div>
      <PageTitle title="Responsibilities" />
      
      <div className="text-center mb-10">
        <p className="text-lg max-w-3xl mx-auto">
          As Head of Innovation, you'll drive breakthrough initiatives while building a culture of rapid experimentation and measurable outcomes.
        </p>
      </div>
      
      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Key Responsibilities</h2>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Strategy & Execution:</span> Shape and prioritize Vault's R&D pipeline to deliver measurable breakthroughs while maintaining SDLC integrity in regulated environments.
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
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">My Leadership Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={ListChecks}
            title="R&D Roadmap Delivery"
            imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Situation:</strong> Lack of unified AI roadmap.</p>
              <p><strong>Action:</strong> Facilitated workshops & built a prioritized PoC pipeline.</p>
              <p><strong>Outcome:</strong> Launched 5 PoCs & generated $3M pipeline in 12 weeks.</p>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Handshake}
            title="Agile Team Scaling"
            imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Situation:</strong> Small team with high demand.</p>
              <p><strong>Action:</strong> Expanded team & introduced sprint-based innovation cycles.</p>
              <p><strong>Outcome:</strong> Delivery velocity +40%; PoC output tripled.</p>
            </div>
          </FeatureCard>

          <FeatureCard
            icon={Lightbulb}
            title="Fail-Fast Culture"
            imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
          >
            <div className="space-y-2">
              <p><strong>Situation:</strong> Bureaucratic PoC delays.</p>
              <p><strong>Action:</strong> Implemented lean Kanban & strict kill criteria.</p>
              <p><strong>Outcome:</strong> Cut cycle time from 16 to 4 weeks; improved stakeholder trust.</p>
            </div>
          </FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;
