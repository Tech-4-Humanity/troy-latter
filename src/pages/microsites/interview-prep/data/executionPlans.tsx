
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Target, Users, FileCheck, TrendingUp } from 'lucide-react';
import { PresentationPage } from '../types';

export const executionPlans: PresentationPage[] = [
  {
    id: 9,
    title: "Day 1 Plan & Business Canvas",
    subtitle: "Strategic Framework for Immediate Impact",
    content: (
      <div className="space-y-8">
        {/* Lean Canvas */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-6 text-blue-900">Shield AI Australia Business Canvas</h3>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {/* Problem */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold text-red-800">Problem</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• ADF lacks trusted autonomy in Indo-Pacific</p>
                <p>• GPS-denied operations challenge</p>
                <p>• 12-36 month procurement cycles</p>
                <p>• Limited sovereign capability</p>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold text-blue-800">Solution</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• Hivemind AI for decentralized ops</p>
                <p>• V-BAT 10-hour endurance</p>
                <p>• Ukraine-proven resilience</p>
                <p>• Operator-centric design</p>
              </CardContent>
            </Card>

            {/* Value Proposition */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold text-green-800">Value Proposition</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• Trusted autonomy for contested environments</p>
                <p>• 3-6 month integration timeline</p>
                <p>• Human empowerment focus</p>
              </CardContent>
            </Card>

            {/* Customer Segments */}
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold text-purple-800">Customers</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• ADF (LAND 156, SEA 129)</p>
                <p>• ABF Maritime Ops</p>
                <p>• DCCEEW Environmental</p>
                <p>• AUKUS Partners</p>
              </CardContent>
            </Card>

            {/* Channels */}
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold text-orange-800">Channels</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• CASG/ASCA (60% influence)</p>
                <p>• AUSTENDER/SON4095403</p>
                <p>• Prime partnerships</p>
                <p>• AIDN network</p>
              </CardContent>
            </Card>

            {/* Revenue Streams */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold text-green-800">Revenue</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• $10M-$50M fleet contracts</p>
                <p>• $1M-$5M pilot deals</p>
                <p>• $2M environmental contracts</p>
                <p>• $15M AUKUS target</p>
              </CardContent>
            </Card>

            {/* Key Resources */}
            <Card className="bg-indigo-50 border-indigo-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold text-indigo-800">Key Resources</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• Hivemind AI platform</p>
                <p>• V-BAT hardware</p>
                <p>• AWS Top Secret clearance</p>
                <p>• IRAP certification (Q3 2025)</p>
              </CardContent>
            </Card>

            {/* Key Partners */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold text-yellow-800">Partners</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• AWS (cloud infrastructure)</p>
                <p>• Lockheed Martin/Northrop</p>
                <p>• TAS/QUT (30% AIC)</p>
                <p>• Appen/Fivecast</p>
              </CardContent>
            </Card>

            {/* Cost Structure */}
            <Card className="bg-red-50 border-red-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-bold text-red-800">Costs</CardTitle>
              </CardHeader>
              <CardContent className="text-xs space-y-1">
                <p>• R&D and compliance</p>
                <p>• IRAP assessment ($500K)</p>
                <p>• Partnership development</p>
                <p>• Trial deployments</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Day 1 Action Plan */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-6 text-blue-900">Day 1 Action Plan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Stakeholder Engagement */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="bg-blue-100">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-lg text-blue-800">Stakeholder Engagement</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-blue-500 mt-1" />
                    <div>
                      <p className="font-medium text-sm">CASG Briefings</p>
                      <p className="text-xs text-gray-600">Land/Maritime teams for LAND 156 & SEA 129</p>
                      <span className="text-xs bg-blue-100 px-2 py-1 rounded">2-4 hours</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-blue-500 mt-1" />
                    <div>
                      <p className="font-medium text-sm">ASCA Engagement</p>
                      <p className="text-xs text-gray-600">Mission Syracuse opportunities</p>
                      <span className="text-xs bg-blue-100 px-2 py-1 rounded">1-2 hours</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance & Certification */}
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="bg-green-100">
                <div className="flex items-center gap-2">
                  <FileCheck className="h-5 w-5 text-green-600" />
                  <CardTitle className="text-lg text-green-800">Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-green-500 mt-1" />
                    <div>
                      <p className="font-medium text-sm">IRAP Assessment</p>
                      <p className="text-xs text-gray-600">Initiate ACSC process for Hivemind</p>
                      <span className="text-xs bg-green-100 px-2 py-1 rounded">6-9 months</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-green-500 mt-1" />
                    <div>
                      <p className="font-medium text-sm">AWS Bridge</p>
                      <p className="text-xs text-gray-600">Leverage existing compliance</p>
                      <span className="text-xs bg-green-100 px-2 py-1 rounded">Immediate</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Market Validation */}
            <Card className="bg-orange-50 border-orange-200">
              <CardHeader className="bg-orange-100">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-orange-600" />
                  <CardTitle className="text-lg text-orange-800">Market Validation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-sm">ABF Pilot Pitch</p>
                      <p className="text-xs text-gray-600">Maritime Operations Group trial</p>
                      <span className="text-xs bg-orange-100 px-2 py-1 rounded">$1M target</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="h-4 w-4 text-orange-500 mt-1" />
                    <div>
                      <p className="font-medium text-sm">Industry Networks</p>
                      <p className="text-xs text-gray-600">Join AAUS, AIDN for visibility</p>
                      <span className="text-xs bg-orange-100 px-2 py-1 rounded">Same day</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Success Metrics Dashboard */}
          <div className="mt-6 bg-slate-100 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-4 text-slate-800">Day 1 Success Metrics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">$20M+</div>
                <div className="text-sm text-gray-600">Pipeline Target</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">6-9</div>
                <div className="text-sm text-gray-600">Months to IRAP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">$1M</div>
                <div className="text-sm text-gray-600">ABF Pilot Target</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">60%</div>
                <div className="text-sm text-gray-600">CASG Influence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "Day 1 is about launching Shield AI's Australian BD with rapid impact through this comprehensive strategic framework. The business canvas shows how each element connects: our solution addresses ADF's autonomy gaps, targeting $20M+ in revenue through multiple channels while building the ecosystem needed for long-term success. The action plan focuses on three parallel workstreams: stakeholder engagement with CASG's 60% decision influence, compliance through IRAP assessment, and market validation with ABF's $1M pilot. This isn't just a to-do list—it's a strategic framework that connects immediate tactical actions to our broader business model, ensuring every Day 1 activity builds toward Shield AI's dominance in Australian defense autonomy."
  },
  {
    id: 10,
    title: "30/60/90 Day Plan",
    subtitle: "Building Momentum for Shield AI",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/24ae2c57-fff3-40ab-88f1-3ad34c248fc1.png" 
            alt="V-BAT with partnerships composite"
            className="w-full h-64 object-contain rounded-lg bg-white p-4"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-lg text-blue-800">30 Days: Foundation</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2 text-sm">
                <li>• Submit EOIs for LAND 156, SEA 129</li>
                <li>• Engage TAS, QUT for Mission Syracuse</li>
                <li>• Draft Innovation Hub proposal ($5M)</li>
                <li>• Secure $1M ABF pilot deal</li>
                <li>• Advance IRAP assessment</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle className="text-lg text-green-800">60 Days: Engagement</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2 text-sm">
                <li>• Submit RFPs, conduct CASG demo</li>
                <li>• Secure Mission Syracuse trial ($2M)</li>
                <li>• Finalize DCCEEW contract ($2M)</li>
                <li>• Partner with Appen, Fivecast</li>
                <li>• Engage US Navy for AUKUS</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-lg text-orange-800">90 Days: Wins</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2 text-sm">
                <li>• Shortlist LAND 156, SEA 129</li>
                <li>• Secure $10M Innovation Hub</li>
                <li>• Launch AUKUS demo ($15M target)</li>
                <li>• Secure $5M ABF surveillance</li>
                <li>• Complete IRAP certification</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-green-600">Impact: $20M+ pipeline, established as ADF autonomy leader</p>
        </div>
      </div>
    ),
    speakerNotes: "This 30/60/90 plan builds a $20M+ pipeline, aligning with Shield AI's fast-paced goal to dominate ADF autonomy. By day 30, submitting EOIs for LAND 156 and SEA 129, engaging TAS and QUT for Mission Syracuse, drafting a $5M Innovation Hub proposal, securing a $1M ABF pilot, and advancing IRAP lay a foundation, leveraging CASG's 60% influence. By day 60, RFPs, a $2M ASCA trial, $2M DCCEEW contract, Appen/Fivecast partnerships for 30% AIC, and US Navy AUKUS planning deepen our position. By day 90, shortlisting tenders, $10M funding, a $15M AUKUS demo with RAF 617 Squadron, $5M ABF deal, and IRAP completion ensure dominance. This comprehensive approach delivers immediate value while building long-term strategic positioning."
  }
];
