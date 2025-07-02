import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Zap, Target, TrendingUp } from 'lucide-react';

export const QuestionsSection = () => {
  const questionCategories = [
    {
      title: "Strategic Vision & Roadmap",
      icon: Target,
      questions: [
        "What are Agentforce's top 3 strategic priorities for the next 18 months, and how do they align with Salesforce's broader AI strategy?",
        "How is the team balancing innovation velocity with enterprise-grade reliability and security requirements?",
        "What metrics define success for Agentforce, and how do we measure the impact of AI agents on customer business outcomes?",
        "How do you envision Agentforce evolving the traditional customer service operating model across different industries?"
      ]
    },
    {
      title: "Technical Architecture & Platform",
      icon: Zap,
      questions: [
        "What are the current technical challenges in scaling AI agents across the Salesforce platform ecosystem?",
        "How is the team approaching multi-modal AI integration (text, voice, visual) within the agent framework?",
        "What's the strategy for maintaining consistent agent performance and reliability across different customer environments?",
        "How do we handle complex escalation scenarios where agents need to seamlessly hand off to human experts?"
      ]
    },
    {
      title: "Market Position & Competition",
      icon: TrendingUp,
      questions: [
        "How does Agentforce differentiate from standalone AI chatbot solutions and Microsoft's Copilot ecosystem?",
        "What are the key customer adoption barriers we're focused on removing in the next year?",
        "How is the team addressing customer concerns about AI replacing human jobs versus augmenting human capabilities?",
        "What role do industry-specific agent templates play in our go-to-market strategy?"
      ]
    },
    {
      title: "Team Culture & Collaboration",
      icon: MessageCircle,
      questions: [
        "How does the Agentforce engineering team collaborate with product, customer success, and field teams to drive adoption?",
        "What's the approach to fostering innovation while maintaining the high-quality standards Salesforce customers expect?",
        "How do you support continuous learning and skill development in such a rapidly evolving AI landscape?",
        "What opportunities exist for cross-functional impact beyond the immediate Agentforce platform?"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Questions I'd Ask You
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Strategic questions to understand Agentforce's vision, challenges, and opportunities for collaborative impact.
        </p>
      </div>

      <div className="space-y-8">
        {questionCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <category.icon className="h-8 w-8 text-blue-600" />
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {category.questions.map((question, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-gray-700 leading-relaxed">{question}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">My Approach to Strategic Dialogue</h3>
          <p className="text-gray-700 leading-relaxed">
            These questions reflect my belief that the best technical solutions emerge from deep understanding of business context, 
            customer needs, and organizational dynamics. I'm most energized by opportunities where technical excellence directly 
            translates to customer success and business impact. I look forward to exploring how my experience in enterprise AI 
            deployment, Salesforce platform expertise, and customer-obsessed approach can contribute to Agentforce's mission.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};