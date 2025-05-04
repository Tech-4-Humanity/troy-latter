
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
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="My Leadership Style" />
      
      <Card className="border rounded-xl overflow-hidden">
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
    </div>
  );
};

export default LeadershipStyle;
