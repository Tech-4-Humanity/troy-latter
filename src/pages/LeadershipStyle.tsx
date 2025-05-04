
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const LeadershipStyle = () => {
  const leadershipStyles = [
    {
      title: "Think Big",
      description: "Amazon‑rated extremely high on Think Big, pushing teams toward bold visions."
    },
    {
      title: "Empathy‑Driven Collaboration",
      description: "Mentored on AI‑agent design, built e‑learning & live webinars, frequent speaker."
    },
    {
      title: "Right, Accurate, Real‑Time Data",
      description: "Early SMS alerts for sales targets; self‑serve dashboards for all audiences."
    },
    {
      title: "Transparent Communication",
      description: "Live dashboards + show & tell events; tailored updates for execs vs teams."
    },
    {
      title: "Thought Leadership & Visibility",
      description: "Keynoted AWS Public Sector Summit and Defence+Industry, published peer‑reviewed ML/security papers, and led exec briefings that generated 40+ qualified leads/quarter."
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="My Leadership Style" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
            alt="Leadership Team" 
            className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
          />
        </div>
        
        <Card className="border rounded-xl overflow-hidden mb-8">
          <CardContent className="p-8">
            <ul className="space-y-6">
              {leadershipStyles.map((style, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-xl mr-3">•</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{style.title}</h3>
                    <p className="text-gray-700 bg-gray-100 p-2 rounded">{style.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-vault-primary mb-4">Hands‑On Technologist</h3>
              <p className="text-gray-700">
                My GitHub is filled with real‑world modules: Terraform templates for multi‑region container clusters, Ansible playbooks for hardened OS builds, Kubernetes Operators for automated deployment, and post‑quantum key management scripts using CloudHSM/Oracle Vault. I've personally provisioned edge compute nodes on AWS Snowball Edge, stood up sovereign LLM frameworks on Outposts, and overseen the full CI/CD pipeline—bridging theory and practice in production environments.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-vault-primary mb-4">Agile Leader</h3>
              <p className="text-gray-700">
                I've built and mentored "tiger teams" of 3–8 specialists at AWS APAC and Unisys—mixing engineers, data scientists and compliance experts. By instituting two‑week "Sprint Marathons," daily standups and Friday demo‑or‑die sessions tied to kill/scale metrics, we tripled PoC throughput, cut cycle times by 60% and increased funding conversion rates from 20% to over 60%. This lean, high‑trust culture keeps bureaucracy at bay and puts execution front and center.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-vault-primary mb-4">Data‑Driven</h3>
              <p className="text-gray-700">
                No prototype ships without instrumentation. I've embedded OpenTelemetry‑powered metrics, Prometheus/Grafana dashboards and AWS Cost Explorer integrations into every PoC—tracking usage, latency, anomaly‑rates and cost savings in real time. I then layer on QuickSight or Kibana ROI dashboards that translate raw KPIs into business impact (e.g. $150K/month savings, 85% reduction in audit prep). These live insights turn demos into indisputable cases for scale‑up.
              </p>
            </CardContent>
          </Card>
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

export default LeadershipStyle;
