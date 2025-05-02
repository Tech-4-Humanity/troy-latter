
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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <FeatureCard
          icon={ListChecks}
          title="Strategy & Execution"
          description="Shape and prioritize Vault's R&D pipeline to deliver measurable breakthroughs while maintaining SDLC integrity in regulated environments."
          imageSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
        />
        <FeatureCard
          icon={Handshake}
          title="Collaboration & Leadership"
          description="Build high‑trust teams and partner with Defence, Intelligence and domain experts to validate concepts and scale innovations."
          imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
        />
        <FeatureCard
          icon={Lightbulb}
          title="Innovation & Engineering"
          description="Design, build and test IaC prototypes: from battlefield clusters to LLM frameworks with technical evangelism and business case translation."
          imageSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
        />
      </div>
      
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4 text-vault-primary">Additional Responsibilities</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Culture & Pace:</strong> Embed a fail‑fast mindset—iterate quickly, learn and scale.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Customer Validation:</strong> Demo PoCs, gather feedback, and refine real‑world applications.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Technical Evangelism:</strong> Represent Vault at industry forums, publish whitepapers, host Tech Talks.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Business Case Translation:</strong> Convert PoC results into ROI‑driven proposals for executive buy‑in.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Responsibilities;
