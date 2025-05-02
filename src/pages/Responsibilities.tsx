
import { PageTitle } from '@/components/PageTitle';

const Responsibilities = () => {
  return (
    <div>
      <PageTitle title="Responsibilities" />
      
      <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-vault-primary">Core Responsibilities</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Innovate & Execute Strategy:</strong> Shape and prioritize Vault's R&D pipeline to deliver measurable breakthroughs.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Lead & Collaborate:</strong> Build a high‑trust team and partner with Defence, Intelligence and domain experts.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Culture & Pace:</strong> Embed a fail‑fast mindset—iterate quickly, learn and scale.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Prototype Engineering:</strong> Design, build and test IaC prototypes: from battlefield clusters to LLM frameworks.</span>
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
