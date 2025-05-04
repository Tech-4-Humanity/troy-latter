
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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

  // STAR method example
  const leadershipExample = {
    title: "Leading Platform Innovation",
    situation: "Enterprise customers struggling with complex regulatory compliance across multiple cloud environments.",
    task: "Create a unified platform to simplify governance and accelerate product delivery.",
    action: "Led cross-functional team to develop a platform that automated compliance checks, standardized infrastructure, and provided self-service tools.",
    outcome: "Reduced time-to-production by 60%, eliminated 85% of manual compliance work, and enabled 3x faster innovation cycles."
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <PageTitle title="My Leadership Style" />
      
      <div className="text-lg mb-8">
        <p className="mb-6">
          Leadership driven by clear principles, empathy, and measurable outcomes.
        </p>
      </div>
      
      {/* Main feature section with image and text side-by-side */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row bg-vault-light rounded-lg overflow-hidden">
          <div className="md:w-1/3 p-6 flex justify-center items-center">
            <img 
              src="/lovable-uploads/18765b1c-6ca0-4c50-81c2-95882a6f9fa4.png" 
              alt="Leadership Recognition Plaque" 
              className="max-h-80 object-contain rounded-md shadow-md"
            />
          </div>
          <div className="md:w-2/3 p-6">
            <h3 className="text-xl font-semibold text-vault-primary mb-4">{leadershipExample.title}</h3>
            <div className="space-y-4 text-vault-secondary">
              <p><span className="font-medium">Situation:</span> {leadershipExample.situation}</p>
              <p><span className="font-medium">Task:</span> {leadershipExample.task}</p>
              <p><span className="font-medium">Action:</span> {leadershipExample.action}</p>
              <p><span className="font-medium">Outcome:</span> {leadershipExample.outcome}</p>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-10 bg-vault-accent/30" />
      
      {/* Leadership Principles */}
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">Leadership Principles</h2>
        
        <div className="bg-vault-light p-6 rounded-lg">
          <ul className="space-y-6">
            {leadershipStyles.map((style, index) => (
              <li key={index}>
                <h3 className="font-medium text-lg text-vault-primary mb-2">{style.title}</h3>
                <p className="text-vault-secondary">{style.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Leadership Qualities */}
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-semibold text-vault-primary mb-6">Leadership Qualities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipQualities.map((quality, index) => (
            <div key={index} className="bg-vault-light p-6 rounded-lg">
              <h3 className="font-medium text-lg text-vault-primary mb-4">{quality.title}</h3>
              <p className="text-vault-secondary whitespace-pre-line">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipStyle;
