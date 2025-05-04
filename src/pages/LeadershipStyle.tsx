
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
      title: "Why I'm Your Go‑To Technologist",
      description: "Hands‑On Generalist\nI move fast from whiteboard to production—building cloud‑native stacks, edge prototypes and security controls that go live in days, not months. Always curious and never afraid to ask, I bridge gaps by tapping into broad relationships across teams and vendors, connecting dots that speed outcomes."
    },
    {
      title: "Agile Catalyst",
      description: "I lead small, high‑trust \"tiger teams\" of engineers, data scientists and compliance experts through two‑week sprints, daily standups and Friday kill/scale demos. This collaborative, learn‑fast culture tripled our proof‑of‑concept throughput, cut delivery cycles by 60% and lifted pilot funding conversion from 20% to over 60%."
    },
    {
      title: "Outcome‑Obsessed",
      description: "Every project ships with live dashboards—usage, performance and cost visible in real time. By translating metrics into hard business value (for example, $150K/month saved and 85% faster audit prep), I turn prototypes into must‑scale initiatives."
    },
    {
      title: "Team‑First Collaborator",
      description: "People are at the heart of every solution. I invest in coaching, knowledge‑sharing and cross‑functional workshops that empower everyone to contribute ideas and learn new skills. By building inclusive, psychologically safe environments, we unlock creativity, accelerate problem‑solving and make big goals feel achievable."
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="My Leadership Style" />
      
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="md:w-2/5 flex flex-col items-center justify-center">
            <div className="max-w-xs">
              <img 
                src="/lovable-uploads/81cbb272-6a07-41e1-8167-796bc17aa764.png" 
                alt="Leadership Award" 
                className="w-full h-auto object-contain rounded-lg shadow-md" 
              />
            </div>
          </div>
          
          <Card className="md:w-3/5 border rounded-xl overflow-hidden">
            <CardContent className="p-6">
              <ul className="space-y-4">
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
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipQualities.map((quality, index) => (
            <Card key={index} className="bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-vault-primary mb-4">{quality.title}</h3>
                <p className="text-gray-700 whitespace-pre-line">{quality.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LeadershipStyle;
