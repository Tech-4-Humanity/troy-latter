import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';

export const CultureFitSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Culture Fit Snapshot
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Alignment with Agentforce values and commitment to customer-first innovation through collaborative excellence.
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              Customer Obsession & V2MOM Alignment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Deep commitment to putting customers at the center of every technical decision, with proven track record of translating business needs into scalable AI solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Customer-First Mindset</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Direct customer engagement in solution design</li>
                  <li>• Rapid prototyping for immediate feedback</li>
                  <li>• Continuous improvement based on usage data</li>
                  <li>• Success metrics tied to customer outcomes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Business Value Focus</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ROI-driven feature prioritization</li>
                  <li>• Clear business case for technical decisions</li>
                  <li>• Stakeholder communication in business terms</li>
                  <li>• Measurable impact on customer satisfaction</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-6 w-6 text-blue-500" />
              Collaborative Innovation & Ohana Spirit
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Strong belief in collective intelligence and cross-functional collaboration to solve complex problems and drive breakthrough innovations.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Collaboration Philosophy</h4>
              <p className="text-sm text-gray-700">
                "The best AI agents emerge from diverse perspectives - combining customer insights, technical expertise, and business strategy. 
                I thrive in environments where engineering, product, and customer success teams work as one unified force."
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              Innovation & Continuous Learning
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Passionate about staying at the forefront of AI/ML advances while maintaining pragmatic focus on delivering production-ready solutions.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">12+</div>
                <div className="text-xs text-gray-600">Tech Conferences/Year</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">3</div>
                <div className="text-xs text-gray-600">Patents Filed</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">85%</div>
                <div className="text-xs text-gray-600">Knowledge Sharing</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-green-500" />
              Equality & Inclusive Excellence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700">
              Committed to building diverse, inclusive teams and ensuring AI solutions work fairly and effectively for all users regardless of background.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Diversity Advocacy</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mentorship program leadership</li>
                  <li>• Inclusive hiring practices champion</li>
                  <li>• Bias detection in AI systems</li>
                  <li>• Accessibility-first design approach</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Ethical AI Leadership</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Responsible AI governance frameworks</li>
                  <li>• Transparency in algorithmic decisions</li>
                  <li>• User privacy and data protection</li>
                  <li>• Ethical AI training and education</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Mission Alignment</h3>
          <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
            "I'm energized by the opportunity to democratize AI capabilities through Salesforce's platform, 
            making sophisticated customer service automation accessible to organizations of all sizes while 
            maintaining the highest standards of security, privacy, and ethical AI deployment."
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
};