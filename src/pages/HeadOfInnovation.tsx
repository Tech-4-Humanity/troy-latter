
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const HeadOfInnovation = () => {
  return (
    <div>
      <PageTitle title="Role Overview" />
      
      <div className="text-lg mb-6 text-vault-secondary">
        <p className="mb-6">
          Lead bleeding‑edge innovation for Australia's sovereign cloud—prototype AI‑driven automation,
          miniaturised hyper‑scale nodes, and sovereign LLM frameworks. Report directly to the Founder & CEO in Sydney.
        </p>
      </div>

      <div className="space-y-6 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary">Key Responsibilities</h2>
        <ul className="list-disc list-inside space-y-3 pl-4">
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Innovate & Execute Strategy:</span> Define & drive Vault's innovation agenda.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Lead & Collaborate:</span> Build a high-performance team & partner with SMEs.
          </li>
          <li className="text-vault-secondary">
            <span className="font-medium text-vault-primary">Prototype Engineering:</span> Architect and test IaC prototypes, from battlefield nodes to LLMs.
          </li>
        </ul>
      </div>
      
      <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-8">
        <h2 className="text-xl font-semibold mb-4 text-vault-primary">Key Opportunity</h2>
        <p>
          Shape the future of Australia's sovereign cloud technology through groundbreaking innovation and 
          strategic development of first-of-kind concepts.
        </p>
      </div>
    </div>
  );
};

export default HeadOfInnovation;
