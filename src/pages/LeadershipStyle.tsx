
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';

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

  const leadershipQualities = [
    {
      title: "Hands‑On Technologist",
      description: "My GitHub is filled with real‑world modules: Terraform templates for multi‑region container clusters, Ansible playbooks for hardened OS builds, Kubernetes Operators for automated deployment, and post‑quantum key management scripts using CloudHSM/Oracle Vault. I've personally provisioned edge compute nodes on AWS Snowball Edge, stood up sovereign LLM frameworks on Outposts, and overseen the full CI/CD pipeline—bridging theory and practice in production environments."
    },
    {
      title: "Agile Leader",
      description: "I've built and mentored \"tiger teams\" of 3–8 specialists at AWS APAC and Unisys—mixing engineers, data scientists and compliance experts. By instituting two‑week \"Sprint Marathons,\" daily standups and Friday demo‑or‑die sessions tied to kill/scale metrics, we tripled PoC throughput, cut cycle times by 60% and increased funding conversion rates from 20% to over 60%. This lean, high‑trust culture keeps bureaucracy at bay and puts execution front and center."
    },
    {
      title: "Data‑Driven",
      description: "No prototype ships without instrumentation. I've embedded OpenTelemetry‑powered metrics, Prometheus/Grafana dashboards and AWS Cost Explorer integrations into every PoC—tracking usage, latency, anomaly‑rates and cost savings in real time. I then layer on QuickSight or Kibana ROI dashboards that translate raw KPIs into business impact (e.g. $150K/month savings, 85% reduction in audit prep). These live insights turn demos into indisputable cases for scale‑up."
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="My Leadership Style" />
      
      <section className="mb-12">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/83bdd2b0-6ff7-412c-983a-f1baf27538c4.png" 
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
          {leadershipQualities.map((quality, index) => (
            <Card key={index} className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-vault-primary mb-4">{quality.title}</h3>
                <p className="text-gray-700">{quality.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeadershipStyle;
