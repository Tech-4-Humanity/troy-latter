import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Zap, Globe } from 'lucide-react';

export const MarketInsightSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Market Insight – Salesforce Ecosystem Trends
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Strategic understanding of Salesforce market positioning, Agentforce evolution, and competitive landscape dynamics.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              Agentforce Market Position
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 mb-4">
              Agentforce represents Salesforce's strategic response to the conversational AI revolution, positioning as the enterprise-grade alternative to consumer-focused chatbot solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Competitive Advantages</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Native CRM integration depth</li>
                  <li>• Enterprise security and compliance</li>
                  <li>• Unified customer data platform</li>
                  <li>• Multi-channel consistency</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Market Opportunities</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Service automation ROI demonstration</li>
                  <li>• Cross-cloud agent orchestration</li>
                  <li>• Industry-specific agent templates</li>
                  <li>• Partner ecosystem expansion</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-600" />
              Customer Adoption Patterns
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 mb-4">
              Enterprise customers are prioritizing AI agents for cost reduction and 24/7 availability, with early adopters seeing 60-80% automation rates in tier-1 support scenarios.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">73%</div>
                <div className="text-xs text-gray-600">Want 24/7 Support</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">45%</div>
                <div className="text-xs text-gray-600">Cost Reduction Goal</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">2.3x</div>
                <div className="text-xs text-gray-600">ROI in Year 1</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-600" />
              Technology Evolution Trends
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 mb-4">
              The Salesforce ecosystem is rapidly evolving toward agentic AI, with Einstein 1 Platform providing the foundation for autonomous business process execution.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Einstein 1 Platform</Badge>
              <Badge variant="outline">Data Cloud Integration</Badge>
              <Badge variant="outline">Prompt Builder</Badge>
              <Badge variant="outline">Model Builder</Badge>
              <Badge variant="outline">Agent Builder</Badge>
              <Badge variant="outline">Flow Orchestration</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-blue-600" />
              Competitive Landscape Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 mb-4">
              While competitors focus on standalone AI tools, Salesforce's integrated approach creates sustainable competitive advantages through data unification and workflow automation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Salesforce Advantages</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Deep CRM data context for personalization</li>
                  <li>• Unified security and governance model</li>
                  <li>• Seamless workflow integration across clouds</li>
                  <li>• Enterprise-grade scalability and reliability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Market Challenges</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Integration complexity with legacy systems</li>
                  <li>• Need for specialized AI agent expertise</li>
                  <li>• Change management for automation adoption</li>
                  <li>• ROI measurement and success metrics</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategic Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">Focus on industry-specific use cases to demonstrate clear ROI and competitive differentiation</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">Invest in partner ecosystem development to accelerate implementation and adoption</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">Develop comprehensive success metrics framework to prove business value and guide optimization</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};