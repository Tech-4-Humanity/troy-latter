
import React from 'react';
import { Card } from "@/components/ui/card";

export const RequiredSkills = () => {
  const skills = [
    {
      title: "Technical Leadership",
      description: "Guide technical direction of innovation teams, lead architecture decisions, and oversee implementation of emerging technologies."
    },
    {
      title: "Strategic Vision",
      description: "Develop and articulate a compelling innovation roadmap aligned with business goals and customer needs."
    },
    {
      title: "Rapid Prototyping",
      description: "Design and build functional demos and proofs-of-concept to validate ideas quickly and efficiently."
    },
    {
      title: "Stakeholder Management",
      description: "Communicate effectively with leadership, customers, and engineering teams to align on priorities and outcomes."
    },
    {
      title: "Security Expertise",
      description: "Ensure all innovation initiatives meet rigorous security standards and compliance requirements."
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-brand-primary">Required Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <Card key={index} className="p-4 border-l-4 border-l-brand-accent">
            <h4 className="font-medium text-brand-primary">{skill.title}</h4>
            <p className="text-brand-secondary text-sm mt-2">{skill.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
