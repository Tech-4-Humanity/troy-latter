
import { PageTitle } from '@/components/PageTitle';

const WhyIApplied = () => {
  return (
    <div>
      <PageTitle title="Why I Applied" />
      
      <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-vault-primary">Application Motivations</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Mission Alignment:</strong> Vault's sovereign, hyperscale mandate matches my passion for secure national‑security tech.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Proven Track Record:</strong> Delivered ASD‑accredited enclaves at AWS and classified PoCs at Unisys under mission SLAs.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Culture Fit:</strong> I thrive in founder‑driven, fail‑fast, high‑autonomy teams—exactly Vault's ethos.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyIApplied;
