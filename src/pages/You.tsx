
import { PageTitle } from '@/components/PageTitle';

const You = () => {
  return (
    <div>
      <PageTitle title="Your Profile" />
      
      <p className="text-lg mb-6">
        You bring breakthrough innovation skills and national‑security domain mastery, with proven delivery in regulated environments.
      </p>
      
      <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-vault-primary">Key Qualifications</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Visionary Innovator:</strong> Led AI‑agent frameworks and zero‑trust architectures in NatSec settings.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>NatSec Fluency:</strong> NV2‑cleared, Standards Australia BCI committee member.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Hands‑On Technologist:</strong> Terraform, Ansible, Kubernetes & post‑quantum KMS in your GitHub.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Agile Leader:</strong> Built "tiger teams" of 3–8 high‑performers with lean kill/scale criteria.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Data‑Driven:</strong> Every prototype instrumented with live metrics and ROI dashboards.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default You;
