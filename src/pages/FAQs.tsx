
import { PageTitle } from '@/components/PageTitle';

const FAQs = () => {
  return (
    <div>
      <PageTitle title="FAQs & Candidate Resources" />
      
      <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-vault-primary">Key Questions</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>What are the top 3 outcomes you'd like to see in the first quarter?</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Which existing PoCs will I inherit & how do they map to strategic goals?</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>How do you prioritize & fund PoCs vs. core product development?</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Which stakeholders will I engage with most, and how often?</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>What mechanisms exist for transitioning PoCs into production?</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>How does Vault measure & report innovation ROI to executives?</strong></span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>How are "kill or scale" decisions made on experimental projects?</strong></span>
          </li>
        </ul>
      </div>
      
      <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-vault-primary">Bonus Resources</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>90‑Day Plan Template:</strong> A fillable roadmap to map objectives, stakeholders & metrics.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Vault Whitepapers & Tech Talks:</strong> Deep dives on sovereign AI, zero‑trust architecture & battlefield clouds.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Lean Business Canvas:</strong> A streamlined canvas for developing and validating concise business models from PoC insights.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQs;
