
import { PageTitle } from '@/components/PageTitle';
import { FileQuestion, Award, Layers, Users, ArrowUp, ChartLine, Shield, Rocket, FileCode, FileAlert } from 'lucide-react';

const FAQs = () => {
  return (
    <div>
      <PageTitle title="FAQs & Candidate Resources" />
      
      <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-vault-primary">Key Questions</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <FileQuestion className="text-vault-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Defining Early Wins</p>
              <p>"Which three mission‑critical customer problems do you expect the Innovation team to solve in the first 90 days—and what business impact (e.g. cost savings, readiness improvements) will define success?"</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Layers className="text-vault-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Innovation Pipeline & Governance</p>
              <p>"How is the R&D pipeline currently structured, funded and governed? What review cadence and decision authorities exist for kill‑or‑scale calls?"</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Rocket className="text-vault-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Inherited PoCs & Strategic Alignment</p>
              <p>"Which live PoCs or prototypes will I inherit, and how do they map to Vault's top strategic priorities—particularly for Defence, Intelligence and Critical Infrastructure?"</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Users className="text-vault-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Customer Engagement Model</p>
              <p>"What is the established process for co‑designing and validating PoCs with Defence, Intelligence and Critical Infrastructure customers? Who are the key champions and how often do we meet?"</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <ArrowUp className="text-vault-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">From Prototype to Production</p>
              <p>"What frameworks and hand‑off mechanisms are in place to translate successful PoCs into Vault's core offerings (e.g. funding gates, product team integration, compliance certifications)?"</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <ChartLine className="text-vault-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Measuring Breakthroughs</p>
              <p>"How does Vault define and report 'innovation ROI'—in terms of revenue, operational readiness, risk reduction or customer adoption—to the CEO and board?"</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Shield className="text-vault-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Regulatory & Sovereign Controls</p>
              <p>"Given Vault's ASD certification and zero‑trust mandate, how are regulatory and compliance checkpoints embedded into each PoC sprint, and who owns those controls?"</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Award className="text-vault-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Team Structure & External Expertise</p>
              <p>"What is the current Innovation team's makeup, and how do we engage external SMEs or academic partners to accelerate first‑of‑a‑kind R&D?"</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <FileCode className="text-vault-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Technical Evangelism & Culture</p>
              <p>"What forums or channels does Vault use to showcase new capabilities—both internally (e.g. leadership demos) and externally (industry conferences, whitepapers)?"</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <FileAlert className="text-vault-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">Risk & Recovery</p>
              <p>"What risk‑mitigation practices does Vault use when pushing bleeding‑edge prototypes, and how do we ensure rapid recovery or rollback if a PoC hits an unexpected barrier?"</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-vault-light p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-vault-primary">Bonus Resources</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>90-Day Plan Template:</strong> A fillable roadmap to map objectives, stakeholders & metrics.</span>
          </li>
          <li className="flex items-start">
            <span className="text-vault-accent font-bold mr-2">•</span>
            <span><strong>Vault Whitepapers & Tech Talks:</strong> Deep dives on sovereign AI, zero-trust architecture & battlefield clouds.</span>
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
