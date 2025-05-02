
import { PageTitle } from '@/components/PageTitle';

const TheOpportunity = () => {
  return (
    <div>
      <PageTitle title="The Opportunity" />
      
      <p className="text-lg mb-6">
        This role is unlike any other at Vault. You will shape the future of Australia's sovereign tech capability by breaking
        free of rules to demonstrate the potential future of cloud and national security systems.
      </p>
      
      <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-vault-primary">Key Aspects</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Bleeding‑edge R&D:</strong> Validate first‑of‑a‑kind concepts, not corporate theatre.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>High‑Autonomy, High‑Impact:</strong> Direct collaboration with our visionary CEO.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Mission‑Critical Scale:</strong> Drive PoCs into Vault's core offerings for Defence and Critical Infrastructure.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheOpportunity;
