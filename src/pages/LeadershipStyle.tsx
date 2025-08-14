
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const LeadershipStyle = () => {
  const leadershipStyles = [
    {
      title: "Think Big",
      description: "Amazon-rated extremely high on Think Big, pushing teams toward bold visions."
    },
    {
      title: "Empathy-Driven Collaboration",
      description: "Mentored on AI-agent design, built e-learning & live webinars, frequent speaker."
    },
    {
      title: "Right, Accurate, Real-Time Data",
      description: "Early SMS alerts for sales targets; self-serve dashboards for all audiences."
    },
    {
      title: "Transparent Communication",
      description: "Live dashboards + show & tell events; tailored updates for execs vs teams."
    },
    {
      title: "Thought Leadership & Visibility",
      description: "Keynoted AWS Public Sector Summit and Defence+Industry, published peer-reviewed ML/security papers, and led exec briefings that generated 40+ qualified leads/quarter."
    }
  ];

  const leadershipQualities = [
    {
      title: "Why I'm Your Go-To Technologist",
      description: "Hands-On Generalist\nI move fast from whiteboard to production, building cloud-native stacks, edge prototypes and security controls that go live in days, not months. Always curious and never afraid to ask, I bridge gaps by tapping into broad relationships across teams and vendors, connecting dots that speed outcomes."
    },
    {
      title: "Agile Catalyst",
      description: "I lead small, high-trust \"tiger teams\" of engineers, data scientists and compliance experts through two-week sprints, daily standups and Friday kill/scale demos. This collaborative, learn-fast culture tripled our proof-of-concept throughput, cut delivery cycles by 60% and lifted pilot funding conversion from 20% to over 60%."
    },
    {
      title: "Outcome-Obsessed",
      description: "Every project ships with live dashboards: usage, performance and cost visible in real time. By translating metrics into hard business value (for example, $150K/month saved and 85% faster audit prep), I turn prototypes into must-scale initiatives."
    },
    {
      title: "Team-First Collaborator",
      description: "People are at the heart of every solution. I invest in coaching, knowledge-sharing and cross-functional workshops that empower everyone to contribute ideas and learn new skills. By building inclusive, psychologically safe environments, we unlock creativity, accelerate problem-solving and make big goals feel achievable."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <PageTitle title="My Leadership Style" />
      
      <div className="text-lg mb-8">
        <p className="mb-6">
          Leadership driven by clear principles, empathy, and measurable outcomes.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row bg-brand-light rounded-lg overflow-hidden mb-12">
        <div className="md:w-1/3 p-6 flex justify-center items-center">
          <img 
            src="/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png" 
            alt="Strategic Leadership and Team Collaboration" 
            className="max-h-80 object-contain rounded-md shadow-md"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <h2 className="text-2xl font-semibold text-brand-primary mb-6">Leadership Principles</h2>
          <ul className="space-y-6">
            {leadershipStyles.map((style, index) => (
              <li key={index}>
                <h3 className="font-medium text-lg text-brand-primary mb-2">{style.title}</h3>
                <p className="text-brand-secondary">{style.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <Separator className="my-10 bg-brand-accent/30" />
      
      {/* Leadership Qualities */}
      <div className="space-y-8 mb-10">
        <h2 className="text-2xl font-semibold text-brand-primary mb-6">Leadership Qualities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipQualities.map((quality, index) => (
            <div key={index} className="bg-brand-light p-6 rounded-lg">
              <h3 className="font-medium text-lg text-brand-primary mb-4">{quality.title}</h3>
              <p className="text-brand-secondary whitespace-pre-line">{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipStyle;
