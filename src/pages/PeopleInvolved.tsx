
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const PeopleInvolved = () => {
  return (
    <div className="animate-fade-in">
      <PageTitle title="People Involved" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
            alt="People Involved" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <Card className="bg-white shadow-sm mb-8">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Policy & Legislation</span>
                <br /> 
                Government liaisons, industry boards, advisory groups shaping standards.
              </li>
              <li>
                <span className="font-semibold">Executive Leadership & Sponsors</span>
                <br /> 
                CIOs, board members and deputies funding and mandating innovation.
              </li>
              <li>
                <span className="font-semibold">Sales & Go‑to‑Market Teams</span>
                <br /> 
                Sales, channel and marketing leads capturing signals and driving adoption.
              </li>
              <li>
                <span className="font-semibold">Technical & Delivery</span>
                <br /> 
                Architects, engineers, PMs translating ideas into solutions.
              </li>
              <li>
                <span className="font-semibold">Partners & Ecosystem</span>
                <br /> 
                ISVs, integrators, research institutions co‑innovating on pilots.
              </li>
              <li>
                <span className="font-semibold">Customers & Citizens</span>
                <br /> 
                End‑users whose needs and feedback create multiple winners.
              </li>
              <li>
                <span className="font-semibold">Customer Innovation Councils & Advocates</span>
                <br /> 
                Built embedded PoC councils with key customers—turned 5 case‑studies into $8 M in follow‑on business and created a network of vocal promoters.
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-10">
          <p className="text-gray-700 italic">
            Successful innovation requires collaboration across all stakeholders, from policy makers to end users.
            Building strong relationships with champions at each level creates momentum and ensures alignment.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">How I Will Drive Vault's Vision</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-medium text-xl text-vault-primary">From Vision to Roadmap</h3>
            <p className="text-vault-secondary mt-2">
              Shape and prioritise the innovation pipeline<br/>
              At Unisys I took five siloed AI pilots across government, ran Working‑Backwards strategy sprints, and delivered a six‑month PoC roadmap that unlocked an $8 M follow‑on pipeline in 12 weeks.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Building Tiger Teams</h3>
            <p className="text-vault-secondary mt-2">
              Lead small, high‑trust squads with external experts<br/>
              At AWS APAC I formed a lean group of five data scientists and DevOps engineers, ran two‑week "Sprint Marathons," and achieved a 65% PoC funding conversion—tripling throughput and restoring executive faith.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Breaking the Prototype‑to‑Reality Barrier</h3>
            <p className="text-vault-secondary mt-2">
              Design, build and test bleeding‑edge IaC demos<br/>
              At Oracle I authored modular playbooks and orchestrated CI/CD tests for rugged edge clusters and LLM frameworks—then presented live demos to Defence leadership, securing $5 M in production funding.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Culture & Pace</h3>
            <p className="text-vault-secondary mt-2">
              Embed a fail‑fast, learn‑fast ethos<br/>
              I've introduced weekly "kill/scale" criteria, Friday C‑suite Demo Days, and real‑time innovation dashboards at every company—cutting PoC cycle times from 12 weeks to as little as 4 weeks.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Customer‑first Validation</h3>
            <p className="text-vault-secondary mt-2">
              Showcase PoCs, iterate on feedback<br/>
              I've demoed AI agents and edge‑mesh solutions at AWS summits, Unisys innovation forums and government roadshows—capturing operator feedback that directly drove our next sprint and built customer evangelists.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-vault-primary">Technical Evangelism & Business Case Translation</h3>
            <p className="text-vault-secondary mt-2">
              Bridge R&D to board‑room buy‑in<br/>
              Whether publishing whitepapers on neurotech standards, hosting Tech Talks for 200+ executives, or crafting ROI models that secured $2–5 M in follow‑on contracts, I've turned technical wins into strategic wins for every stakeholder.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeopleInvolved;
