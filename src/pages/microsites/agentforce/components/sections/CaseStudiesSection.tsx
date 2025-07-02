import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, MessageSquare, Zap } from 'lucide-react';

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Intelligent Service Agent Platform",
      icon: Bot,
      challenge: "Enterprise needed to reduce customer service costs while improving response times and customer satisfaction across multiple channels.",
      solution: "Built AI-powered service agent platform with natural language processing, sentiment analysis, and automated escalation workflows.",
      results: [
        "75% reduction in average response time",
        "$2.3M annual cost savings through automation",
        "92% customer satisfaction score improvement",
        "Zero-downtime deployment across 15 global regions"
      ],
      technologies: ["Einstein AI", "Service Cloud", "Platform Events", "Apex"]
    },
    {
      title: "Conversational Commerce Bot",
      icon: MessageSquare,
      challenge: "Retail client needed to capture and convert leads through conversational interfaces while maintaining personalized customer experiences.",
      solution: "Developed intelligent commerce bot with product recommendation engine, inventory integration, and seamless handoff to human agents.",
      results: [
        "40% increase in conversion rates",
        "60% reduction in cart abandonment",
        "3x faster lead qualification process",
        "Integrated with 12 external systems"
      ],
      technologies: ["Sales Cloud", "Einstein Discovery", "MuleSoft", "Lightning Web Components"]
    },
    {
      title: "Autonomous Support Escalation",
      icon: Zap,
      challenge: "Support organization struggled with case routing efficiency and ensuring critical issues reached appropriate specialists quickly.",
      solution: "Created AI-driven case classification and routing system with predictive escalation and automatic skill-based assignment.",
      results: [
        "85% improvement in first-call resolution",
        "50% reduction in escalation time",
        "99.9% system uptime maintained",
        "Compliance with GDPR and SOX requirements"
      ],
      technologies: ["Service Cloud", "Flow Builder", "Omni-Channel", "Salesforce Shield"]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Case Study Highlights
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Proven success delivering AI-powered customer experience solutions on the Salesforce platform.
        </p>
      </div>

      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <Card key={index} className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <study.icon className="h-8 w-8 text-blue-600" />
                {study.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                <p className="text-gray-700">{study.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                <p className="text-gray-700">{study.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                <div className="grid grid-cols-2 gap-3">
                  {study.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="font-medium text-gray-900 mb-2">Technology Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};