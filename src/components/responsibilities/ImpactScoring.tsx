
import React from 'react';
import { Card } from "@/components/ui/card";

export const ImpactScoring = () => {
  const scoringCriteria = [
    {
      title: "Business Value",
      description: "Quantify potential revenue growth, cost reduction, or efficiency improvements with measurable KPIs."
    },
    {
      title: "Technical Feasibility",
      description: "Evaluate implementation complexity, resource requirements, and technical risks against existing capabilities."
    },
    {
      title: "Strategic Alignment",
      description: "Assess how initiatives support long-term organizational goals and competitive positioning."
    },
    {
      title: "Time to Value",
      description: "Measure the expected timeframe from concept to tangible results, prioritizing quick wins alongside transformational projects."
    },
    {
      title: "Scalability Potential",
      description: "Determine how solutions can grow across business units, regions, or customer segments with minimal rework."
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-vault-primary">Impact Scoring</h3>
      <p className="text-vault-secondary mb-6">
        A structured framework for prioritizing innovation initiatives based on potential business impact and implementation feasibility.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {scoringCriteria.map((criteria, index) => (
          <Card key={index} className="p-4 border-l-4 border-l-vault-accent">
            <h4 className="font-medium text-vault-primary">{criteria.title}</h4>
            <p className="text-vault-secondary text-sm mt-2">{criteria.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
