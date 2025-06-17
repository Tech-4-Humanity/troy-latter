
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const QuestionsSection = () => {
  const questions = [
    "Given my work on Azure AI pilots delivering 95% accuracy in 72 hours, I'm curious how LAB3 prioritizes integrating emerging Azure trends like Fabric into client roadmaps under your practice-building vision?",
    "With my experience leading zero trust architectures for ASD certification in 6 weeks, how does LAB3 plan to expand these security models for government clients as you shape this new practice?",
    "Having fostered cross-functional tiger teams for rapid delivery, like a $2.5M utility PoC, how does LAB3 encourage collaboration between pre-sales and engineering to accelerate client outcomes in this emerging practice?",
    "Based on my success codifying reusable Azure blueprints for government portfolios, what role does LAB3 envision for IP in scaling solutions across clients as you establish this practice?",
    "With my background in technical governance during compliance reviews, how does LAB3 balance innovation and compliance in Azure deployments as you build out this practice?",
    "Given my work translating complex requirements into $5M roadmaps for Home Affairs, how does LAB3 approach aligning client technical strategies with business goals in this new practice phase?",
    "Having led pre-sales engagements securing $7M pipelines with C-suite demos, how does LAB3 plan to leverage partnerships, like with Microsoft, to drive practice growth under your leadership?"
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions I'd Ask You</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
      
      <div className="grid gap-6">
        {questions.map((question, index) => (
          <Card key={index} className="bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">{question}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
