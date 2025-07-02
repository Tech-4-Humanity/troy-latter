import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Zap, Target, TrendingUp } from 'lucide-react';

export const WhyAgentforceSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Why Agentforce & Why Me
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Bringing enterprise-grade AI agent expertise to transform customer experiences through the Salesforce platform.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-blue-600" />
              AI Agent Platform Expertise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Deep experience building autonomous AI agents and conversational AI systems that integrate seamlessly with enterprise CRM platforms.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">LLM Integration</Badge>
              <Badge variant="outline">Conversational AI</Badge>
              <Badge variant="outline">Agent Orchestration</Badge>
              <Badge variant="outline">Einstein AI</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-600" />
              Salesforce Ecosystem Mastery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Proven track record of architecting and scaling enterprise solutions within the Salesforce ecosystem, with focus on AI-driven customer engagement.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Service Cloud</Badge>
              <Badge variant="outline">Sales Cloud</Badge>
              <Badge variant="outline">Platform Events</Badge>
              <Badge variant="outline">Apex/Lightning</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-600" />
              Customer Experience Innovation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Specialized in transforming customer service operations through intelligent automation and AI-powered self-service capabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Customer Journey Mapping</Badge>
              <Badge variant="outline">Omnichannel Strategy</Badge>
              <Badge variant="outline">Service Automation</Badge>
              <Badge variant="outline">Experience Analytics</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              Enterprise Scale Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Track record of delivering measurable business outcomes through technology leadership in enterprise environments with millions of users.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">60%</div>
                <div className="text-sm text-gray-600">Faster Resolution</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">$5M+</div>
                <div className="text-sm text-gray-600">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">90%</div>
                <div className="text-sm text-gray-600">Automation Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};