
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const StrategicProjects = () => {
  const strategicProjects = [
    {
      title: "Sovereign AI Deployment",
      description: "When intelligence agencies craved generative AI for rapid document analysis but feared sending classified data to cloud LLM services due to sovereignty and security concerns, I led a Vault‑Oracle team to design a fully on‑prem sovereign LLM framework that gave analysts the power of GPT‑style models without a single data leak or reliance on external APIs. We convened cross‑agency design workshops and built a ruggedised LLM cluster in Oracle Cloud's private data centre, embedding hardware‑backed key management and real-time audit logs. We layered in a \"Hallucination Guard\" agent that cross‑checked every AI output against internal knowledge bases. Through weekly demos to intelligence heads, we polished fine‑tuning on domain‑specific corpora and hardened our chain‑of‑custody controls in continuous‑integration pipelines. Analysts cut research cycles by 60%, generating actionable intelligence in under an hour instead of days, with zero compliance incidents over a one‑year pilot. This breakthrough secured a $2 million production license and established Vault's framework as the blueprint for sovereign AI across the National Intelligence Community."
    },
    {
      title: "Ruggedised Battlefield Cloud Nodes",
      description: "For the ADF's Secure Content program, I led 48‑hour PoC sprints to field‑test shock‑proof Kubernetes clusters on Snowball Edge. By discarding failed form‑factors each sprint, we achieved sub‑second AI inference under isolation, cut validation time 75%, and secured $5 M to productise battlefield‑grade nodes."
    },
    {
      title: "Security Framework Excellence",
      description: "A critical defence agency needed to migrate sensitive workloads to the cloud while maintaining PROTECTED-level security controls and demonstrating continuous compliance with the ISM. I led a combined technical and compliance team to architect a multi-layered security approach. We implemented automated security boundary controls with hardware security modules and encryption key rotation, developed a continuous compliance dashboard that mapped all cloud configurations to specific ISM controls and alerted on any drift, created custom audit trails and implemented least-privilege access controls across all system boundaries, and conducted weekly tabletop exercises with security stakeholders to validate controls against emerging threats. We successfully achieved ASD certification in record time (6 weeks vs typical 6 months), delivered a security framework that automated 85% of compliance checks and reduced audit preparation by 70%. The solution became a reference architecture adopted by three additional defence agencies, generating $4.5M in follow-on contracts."
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="Strategic Projects" />
      
      <div className="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" 
          alt="Strategic Projects" 
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
        />
      </div>

      <div className="space-y-8 mb-8">
        {strategicProjects.map((project, index) => (
          <Card key={index} className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-vault-primary mb-4">{project.title}</h3>
              <div className="text-gray-700 space-y-4">
                {project.description.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-700">{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <p className="text-gray-700 italic">
          These strategic projects showcase innovative solutions to complex security and sovereignty
          challenges, delivered with rapid turnaround times and tangible business outcomes.
        </p>
      </div>
    </div>
  );
};

export default StrategicProjects;
