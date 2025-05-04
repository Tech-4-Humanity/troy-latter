
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

const WhatIsInnovation = () => {
  return (
    <div className="animate-fade-in">
      <PageTitle title="What Is Innovation?" />
      
      <section className="mb-12">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              <ul className="list-disc list-outside ml-5 space-y-6 text-gray-700">
                <li>
                  <span className="font-semibold">Something new—for someone</span>
                  <br /> 
                  Could be a new partner, framework, technology, policy or people.
                </li>
                <li>
                  <span className="font-semibold">It drives change</span>
                  <br /> 
                  Change is complex and often stalls when only one "winner" emerges.
                </li>
                <li>
                  <span className="font-semibold">True innovation finds multiple winners</span>
                  <br /> 
                  Deliver value to more than one stakeholder and momentum builds.
                </li>
                <li>
                  <span className="font-semibold">Not always net‑new</span>
                  <br /> 
                  Often a clever reuse or repurposing of existing ideas—or even knowing when to stop.
                </li>
                <li>
                  <span className="font-semibold">Must align to needs</span>
                  <br /> 
                  Only sticks if it solves a genuine customer need and advances the organisation's goals.
                </li>
                <li>
                  <span className="font-semibold">Path of least resistance → multiple small wins</span>
                  <br /> 
                  Secure quick, easy victories that add up—real breakthroughs follow.
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>
      
      <section id="journey" className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 text-vault-primary">My Innovation Journey</h2>
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-6 text-gray-700">
              <li>
                <span className="font-semibold">Chief Innovation Adviser, Oracle (2016–2019)</span>
                <br />
                • Built humanitarian relief platforms for ASEAN governments—integrating real‑time Twitter, Facebook and agency feeds.
                <br />
                • Led expansion of Oracle Cloud regions and sovereign‑cloud deployments with data‑residency controls.
                <br />
                • Piloted Halal‑blockchain proofs‑of‑origin for supply transparency.
              </li>
              <li>
                <span className="font-semibold">Principal Solutions Architect, AWS (2019–2023)</span>
                <br />
                • Designed digital‑twin frameworks for smart‑city simulations—meshed networks mapping transport and services.
                <br />
                • Deployed edge‑powered meshed networks for low‑latency IoT in urban and remote zones.
                <br />
                • Advised on AI policy & legislation balancing innovation with public trust.
              </li>
              <li>
                <span className="font-semibold">APAC CTO & Head of Strategic Foresight, Unisys (2024–Mar '25)</span>
                <br />
                • <em>Internal Innovation:</em> Rolled out Microsoft Kernel, Google AI and IBM Watson to automate ticket triage and reporting.
                <br />
                • <em>Agent‑Powered Augmentation:</em> Developed AI agents for service‑desk, finance and HR—boosting productivity 30% in six months.
                <br />
                • <em>Customer Transformation:</em> Re‑architected legacy SaaS contracts for Home Affairs and DFAT into cloud‑native microservices.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      
      <section id="success-stories" className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 text-vault-primary">Customer Success Stories</h2>
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">$3B Digital Precinct (AWS)</span> &mdash; Unified cloud ops, 70% faster provisioning, single‑pane catalogue.
              </li>
              <li>
                <span className="font-semibold">Halal Food Traceability (Oracle)</span> &mdash; Blockchain proofs‑of‑origin pilot → 40% drop in exceptions.
              </li>
              <li>
                <span className="font-semibold">RFT‑Parsing & Scoring (Unisys)</span> &mdash; NLP pipeline + SFIA scoring → 60% faster shortlists.
              </li>
              <li>
                <span className="font-semibold">National Cyber Resilience (Indonesia)</span> &mdash; AI anomaly detection + SOAR runbooks → 70% MTTR reduction.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      
      <section id="frameworks" className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 text-vault-primary">Frameworks I Use</h2>
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Amazon's Culture of Innovation</span>
                <br /> 
                Working Backwards, Two‑Pizza Teams, Day 1 Mindset.
              </li>
              <li>
                <span className="font-semibold">Experiment‑to‑Leadership Pathway</span>
                <br /> 
                Bottom‑up hackathons → top‑down sponsorship; Hackathon → Pilot → Gate → Scale.
              </li>
              <li>
                <span className="font-semibold">Design Thinking & Empathy Mapping</span>
                <br /> 
                Deep customer immersion, rapid prototyping guided by user journeys.
              </li>
              <li>
                <span className="font-semibold">Systems Thinking & Orderly Mapping</span>
                <br /> 
                Visualise processes, identify leverage points, de‑risk complexity.
              </li>
              <li>
                <span className="font-semibold">Lean Business Canvas</span>
                <br /> 
                One‑page plan for alignment, pivots and stakeholder buy‑in.
              </li>
              <li>
                <span className="font-semibold">Lean & Six Sigma</span>
                <br /> 
                Continuous improvement through waste elimination and data‑driven controls.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      
      <section id="leadership" className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 text-vault-primary">My Leadership Style</h2>
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Think Big</span>
                <br /> 
                Amazon‑rated extremely high on Think Big, pushing teams toward bold visions.
              </li>
              <li>
                <span className="font-semibold">Empathy‑Driven Collaboration</span>
                <br /> 
                Mentored on AI‑agent design, built e‑learning & live webinars, frequent speaker.
              </li>
              <li>
                <span className="font-semibold">Right, Accurate, Real‑Time Data</span>
                <br /> 
                Early SMS alerts for sales targets; self‑serve dashboards for all audiences.
              </li>
              <li>
                <span className="font-semibold">Transparent Communication</span>
                <br /> 
                Live dashboards + show & tell events; tailored updates for execs vs teams.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
      
      <section id="people" className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 text-vault-primary">People Involved</h2>
        <Card className="bg-white shadow-sm">
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
            </ul>
          </CardContent>
        </Card>
      </section>
      
      <section id="upcoming" className="mb-12">
        <h2 className="text-2xl font-semibold mb-5 text-vault-primary">Upcoming Customer Innovation Projects</h2>
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 md:p-8">
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Digital Health Cloud (QLD Health)</span>
                <br /> 
                K8s microservices, zero‑trust, regional sovereignty → 99.99% SLA.
              </li>
              <li>
                <span className="font-semibold">Procurement Analytics (DoF)</span>
                <br /> 
                Serverless NLP RFT pipelines → 60% faster reviews & auditable shortlists.
              </li>
              <li>
                <span className="font-semibold">Sovereign Hybrid Cloud (Def Intel)</span>
                <br /> 
                Air‑gapped K8s + policy‑as‑code → IL2/IL3 compliance, 50% faster deploys.
              </li>
              <li>
                <span className="font-semibold">Economic Data Mesh (Treasury)</span>
                <br /> 
                Federated streams + lineage → near‑real‑time dashboards, 85% faster reporting.
              </li>
              <li>
                <span className="font-semibold">Cyber Resilience (DVA)</span>
                <br /> 
                AI detection + SOAR → 70% MTTR reduction & proactive threat hunting.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default WhatIsInnovation;
