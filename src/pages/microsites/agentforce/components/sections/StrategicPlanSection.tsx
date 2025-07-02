import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Target, Rocket } from 'lucide-react';

export const StrategicPlanSection = () => {
  const plans = [
    {
      period: "30 Days",
      icon: Target,
      color: "bg-green-100 text-green-800",
      goals: [
        "Complete comprehensive Agentforce platform assessment and current state analysis",
        "Establish relationships with key engineering teams and product stakeholders",
        "Review existing AI agent implementations and identify optimization opportunities",
        "Conduct architecture review of current Service Cloud and Einstein AI integrations",
        "Define success metrics and KPIs for agent performance and customer experience"
      ],
      deliverables: [
        "Current state assessment report",
        "Stakeholder mapping and engagement plan",
        "Technical architecture review document",
        "Quick wins identification matrix"
      ]
    },
    {
      period: "60 Days",
      icon: Rocket,
      color: "bg-blue-100 text-blue-800",
      goals: [
        "Design and prototype next-generation agent capabilities with advanced NLP integration",
        "Implement pilot program for autonomous case resolution in controlled environment",
        "Establish CI/CD pipeline for agent model deployment and continuous improvement",
        "Create comprehensive testing framework for agent behavior validation",
        "Build cross-functional collaboration framework with Product, UX, and Customer Success"
      ],
      deliverables: [
        "Advanced agent prototype with measurable improvements",
        "Pilot program results and expansion recommendations",
        "Automated deployment pipeline for agent updates",
        "Testing framework and quality assurance protocols"
      ]
    },
    {
      period: "90 Days",
      icon: Calendar,
      color: "bg-purple-100 text-purple-800",
      goals: [
        "Launch production-ready enhanced agent platform across primary customer segments",
        "Establish center of excellence for AI agent development and best practices",
        "Implement advanced analytics and machine learning for predictive customer insights",
        "Scale successful patterns across multiple business units and use cases",
        "Create knowledge sharing program and technical mentorship initiatives"
      ],
      deliverables: [
        "Production agent platform serving 100K+ interactions",
        "Center of excellence charter and operational framework",
        "Advanced analytics dashboard and predictive models",
        "Scaling playbook and replication strategy"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Strategic 30/60/90 Day Plan
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Accelerated ramp-up plan to deliver immediate value while building foundation for long-term AI agent platform excellence.
        </p>
      </div>

      <div className="space-y-8">
        {plans.map((plan, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <plan.icon className="h-8 w-8 text-gray-700" />
                  <span className="text-2xl">First {plan.period}</span>
                </div>
                <Badge className={plan.color}>{plan.period}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Strategic Goals</h4>
                <ul className="space-y-3">
                  {plan.goals.map((goal, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Deliverables</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {plan.deliverables.map((deliverable, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{deliverable}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Success Metrics & Accountability</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">&lt; 48hrs</div>
              <div className="text-sm text-gray-600">Average response time improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">90%+</div>
              <div className="text-sm text-gray-600">Customer satisfaction target</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">$2M+</div>
              <div className="text-sm text-gray-600">Annual operational savings</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};