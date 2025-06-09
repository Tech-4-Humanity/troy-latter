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
    subtitle: "Learn, Engage, Deliver Framework",
    content: (
      <div className="space-y-8">
        {/* Strategic Framework */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Strategic Execution Framework</h3>
            <p className="text-lg text-gray-600">Learn → Engage → Deliver for maximum impact</p>
          </div>

          {/* 30-60-90 Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* 30 Days - Learn */}
            <Card className="bg-gradient-to-br from-teal-50 to-teal-100 border-2 border-teal-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center">30 Days</CardTitle>
                <p className="text-center text-teal-100 font-medium">LEARN & FOUNDATION</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-teal-800 mb-2">Market Intelligence</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Submit EOIs for LAND 156, SEA 129</li>
                      <li>• Map CASG decision-making process</li>
                      <li>• Engage TAS, QUT for Mission Syracuse</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-teal-800 mb-2">Foundation Building</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Draft Innovation Hub proposal ($5M)</li>
                      <li>• Secure $1M ABF pilot deal</li>
                      <li>• Advance IRAP assessment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 60 Days - Engage */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center">60 Days</CardTitle>
                <p className="text-center text-green-100 font-medium">ENGAGE & PARTNER</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-green-800 mb-2">Strategic Partnerships</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Submit RFPs, conduct CASG demo</li>
                      <li>• Secure Mission Syracuse trial ($2M)</li>
                      <li>• Partner with Appen, Fivecast</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-green-800 mb-2">Market Expansion</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Finalize DCCEEW contract ($2M)</li>
                      <li>• Engage US Navy for AUKUS</li>
                      <li>• Build prime contractor relationships</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 90 Days - Deliver */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center">90 Days</CardTitle>
                <p className="text-center text-orange-100 font-medium">DELIVER & WIN</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-orange-800 mb-2">Major Wins</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Shortlist LAND 156, SEA 129</li>
                      <li>• Secure $10M Innovation Hub</li>
                      <li>• Launch AUKUS demo ($15M target)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-orange-800 mb-2">Market Leadership</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Secure $5M ABF surveillance</li>
                      <li>• Complete IRAP certification</li>
                      <li>• Establish ADF autonomy leadership</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold text-center mb-6 text-slate-800">90-Day Success Metrics</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">$20M+</div>
                <div className="text-sm text-gray-600 font-medium">Pipeline Value</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-600 font-medium">Major Contracts</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">IRAP Compliance</div>
              </div>
              <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">#1</div>
                <div className="text-sm text-gray-600 font-medium">ADF Autonomy Position</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "This 30/60/90 plan follows a Learn-Engage-Deliver framework that builds a $20M+ pipeline while establishing Shield AI as the ADF autonomy leader. In the LEARN phase (30 days), I focus on market intelligence through LAND 156/SEA 129 EOIs, mapping CASG processes, and building foundation partnerships with TAS/QUT for Mission Syracuse, plus securing a $1M ABF pilot. The ENGAGE phase (60 days) deepens strategic partnerships through RFPs, CASG demos, securing a $2M ASCA trial, partnering with Appen/Fivecast for 30% AIC compliance, and expanding into DCCEEW contracts while engaging US Navy for AUKUS planning. The DELIVER phase (90 days) focuses on major wins: shortlisting key tenders, securing $10M Innovation Hub funding, launching a $15M AUKUS demo with RAF 617 Squadron, completing $5M ABF surveillance deals, and achieving IRAP certification. This comprehensive approach delivers immediate value while building long-term strategic positioning that establishes Shield AI's dominance in Australian defense autonomy."
  }
];
