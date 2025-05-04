
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Separator } from '@/components/ui/separator';
import { FeatureCard } from '@/components/FeatureCard';

const TheOpportunity = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="Customer Success Stories" />
      
      <div className="text-lg mb-8">
        <p className="mb-6">
          I've built and scaled mission-critical cloud and IoT platforms at AWS and Oracle for national-security clients; now I'm here to break the mould at Vault - rapid-fire prototyping, respectful rule-breaking innovation, and forging the future of sovereign cloud.
        </p>
      </div>
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      <div className="space-y-8 mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary">How I Will Drive Vault's Vision</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-medium text-xl text-vault-primary">From Vision to Roadmap</h3>
            <p className="text-vault-secondary mt-2">
              Shape and prioritise the innovation pipeline<br/>
              At Unisys I took five siloed AI pilots across government, ran Working-Backwards strategy sprints, and delivered a six-month PoC roadmap that unlocked an $8 M follow-on pipeline in 12 weeks.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Building Tiger Teams</h3>
            <p className="text-vault-secondary mt-2">
              Lead small, high-trust squads with external experts<br/>
              At AWS APAC I formed a lean group of five data scientists and DevOps engineers, ran two-week "Sprint Marathons," and achieved a 65% PoC funding conversion - tripling throughput and restoring executive faith.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Breaking the Prototype-to-Reality Barrier</h3>
            <p className="text-vault-secondary mt-2">
              Design, build and test bleeding-edge IaC demos<br/>
              At Oracle I authored modular playbooks and orchestrated CI/CD tests for rugged edge clusters and LLM frameworks - then presented live demos to Defence leadership, securing $5 M in production funding.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Culture & Pace</h3>
            <p className="text-vault-secondary mt-2">
              Embed a fail-fast, learn-fast ethos<br/>
              I've introduced weekly "kill/scale" criteria, Friday C-suite Demo Days, and real-time innovation dashboards at every company - cutting PoC cycle times from 12 weeks to as little as 4 weeks.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Customer-first Validation</h3>
            <p className="text-vault-secondary mt-2">
              Showcase PoCs, iterate on feedback<br/>
              I've demoed AI agents and edge-mesh solutions at AWS summits, Unisys innovation forums and government roadshows - capturing operator feedback that directly drove our next sprint and built customer evangelists.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Technical Evangelism & Business Case Translation</h3>
            <p className="text-vault-secondary mt-2">
              Bridge R&D to board-room buy-in<br/>
              Whether publishing whitepapers on neurotech standards, hosting Tech Talks for 200+ executives, or crafting ROI models that secured $2–5 M in follow-on contracts, I've turned technical wins into strategic wins for every stakeholder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheOpportunity;
