
import { PageTitle } from '@/components/PageTitle';

const About = () => {
  return (
    <div>
      <PageTitle title="About Vault Cloud" />
      
      <p className="text-lg mb-6">
        Vault Cloud is Australia's only ASD‑certified, hyperscale sovereign cloud operator—trusted by the Australian Government,
        National Intelligence Community and Critical Infrastructure sector.
      </p>
      
      <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-vault-primary">Company Highlights</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>100% Australian‑owned:</strong> Data centres in Canberra & Sydney.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Security by Design:</strong> Zero‑Trust networking, quantum‑hardened key management & SCEC Zone 5 SOC.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Innovation DNA:</strong> First‑of‑a‑Kind PoCs in sovereign AI, battlefield clouds and regulated environments.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
