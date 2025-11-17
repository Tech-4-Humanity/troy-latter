import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Cloud, Code, Database } from 'lucide-react';

export const TechnicalStrengthsSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Technical Strengths & Patterns
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Deep technical expertise across AI/ML, Salesforce platform, and enterprise integration patterns.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-blue-600" />
              AI & Machine Learning Expertise
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Specialized in developing and deploying production-grade AI agents with natural language understanding, sentiment analysis, and predictive capabilities.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Einstein AI</Badge>
              <Badge variant="outline">Large Language Models</Badge>
              <Badge variant="outline">Natural Language Processing</Badge>
              <Badge variant="outline">Sentiment Analysis</Badge>
              <Badge variant="outline">Predictive Analytics</Badge>
              <Badge variant="outline">Computer Vision</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-6 w-6 text-blue-600" />
              Salesforce Platform Mastery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Comprehensive expertise across the Salesforce ecosystem with focus on agent development, service automation, and customer experience optimization.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Service Cloud</Badge>
              <Badge variant="outline">Sales Cloud</Badge>
              <Badge variant="outline">Experience Cloud</Badge>
              <Badge variant="outline">Apex Development</Badge>
              <Badge variant="outline">Lightning Web Components</Badge>
              <Badge variant="outline">Flow Builder</Badge>
              <Badge variant="outline">Platform Events</Badge>
              <Badge variant="outline">Omni-Channel</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-6 w-6 text-blue-600" />
              Enterprise Integration & Architecture
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Proven ability to architect scalable, secure solutions that integrate seamlessly with enterprise systems and external APIs.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">REST/GraphQL APIs</Badge>
              <Badge variant="outline">MuleSoft</Badge>
              <Badge variant="outline">Microservices</Badge>
              <Badge variant="outline">Event-Driven Architecture</Badge>
              <Badge variant="outline">OAuth & SAML</Badge>
              <Badge variant="outline">Docker/Kubernetes</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-6 w-6 text-blue-600" />
              Data & Analytics Excellence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Expert in designing data pipelines, implementing real-time analytics, and creating actionable insights from customer interaction data.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Tableau CRM</Badge>
              <Badge variant="outline">Snowflake</Badge>
              <Badge variant="outline">Data Lake Architecture</Badge>
              <Badge variant="outline">Real-time Streaming</Badge>
              <Badge variant="outline">ETL/ELT Pipelines</Badge>
              <Badge variant="outline">Customer 360</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Micro Credentials & Technical Certifications */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Micro Credentials & Technical Certifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Cloud Platforms</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>AWS Solutions Architect</li>
                <li>Azure AI Engineer</li>
                <li>Google Cloud Architect</li>
                <li>Oracle Cloud</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">AI & ML Platforms</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>OpenAI</li>
                <li>Claude (Anthropic)</li>
                <li>Hugging Face</li>
                <li>NVIDIA NIM</li>
                <li>Snowflake</li>
                <li>Databricks</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Agentic Frameworks</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>LangChain</li>
                <li>LangGraph</li>
                <li>Semantic Kernel</li>
                <li>MCP Practitioner</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Automation & Integration</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>n8n</li>
                <li>Make</li>
                <li>Pipedream</li>
                <li>Supabase</li>
                <li>Relevance AI</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Development Tools</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>GitHub Copilot</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">AI Governance & Ethics</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>Responsible AI Governance</li>
                <li>AI Ethics and Policy</li>
                <li>Data Privacy and Security</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">Delivery Methodologies</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                <li>PRINCE2</li>
                <li>Prosci ADKAR</li>
                <li>ITIL</li>
                <li>TOGAF</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Architectural Patterns & Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Agent Development Patterns</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Modular agent architecture for easy scaling</li>
                <li>• Event-driven communication between agents</li>
                <li>• Continuous learning and model improvement</li>
                <li>• Fallback strategies and human handoff protocols</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Integration Excellence</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• API-first design with comprehensive versioning</li>
                <li>• Resilient error handling and retry mechanisms</li>
                <li>• Real-time monitoring and alerting systems</li>
                <li>• Security-first approach with end-to-end encryption</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};