
import { PageTitle } from '@/components/PageTitle';

const HeadOfInnovation = () => {
  return (
    <div>
      <PageTitle title="Role Overview" />
      <div className="prose max-w-none">
        <p className="text-lg mb-6 text-vault-secondary">
          Lead bleeding‑edge innovation for Australia's sovereign cloud. This high‑stakes, high‑autonomy mandate
          empowers you to prototype AI‑driven automation, miniaturised hyper‑scale nodes, and sovereign LLM frameworks,
          reporting directly to our Founder & CEO in Sydney.
        </p>
        
        <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-8">
          <h2 className="text-xl font-semibold mb-4 text-vault-primary">Key Opportunity</h2>
          <p>
            Shape the future of Australia's sovereign cloud technology through groundbreaking innovation and 
            strategic development of first-of-kind concepts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeadOfInnovation;
