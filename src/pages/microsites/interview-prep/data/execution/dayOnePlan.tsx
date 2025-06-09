
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Target, Users, FileCheck, TrendingUp } from 'lucide-react';
import { PresentationPage } from '../../types';

export const dayOnePlan: PresentationPage = {
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
  speakerNotes: "Day 1 launches Shield AI's Australian BD with rapid impact through this strategic framework, encapsulated in the business canvas. The canvas addresses ADF's autonomy gaps - lacking trusted solutions in the Indo-Pacific, facing GPS-denied challenges, enduring 12-36 month cycles, and needing sovereign capability (Page 133) - with Hivemind's decentralized AI, V-BAT's likely 10-hour endurance, Ukraine-proven resilience, and operator-centric design. This targets a $20M+ pipeline, leveraging CASG's 60% decision weight (Page 127) and AUSTENDER/SON4095403 channels. The action plan unfolds three workstreams: stakeholder engagement with CASG briefings (2-4 hours) for LAND 156/SEA 129 and ASCA for Mission Syracuse (1-2 hours, Page 134); compliance with a 6-9 month IRAP assessment (Q3 2025) via ACSC, bridged by AWS compliance if delayed; and market validation with an ABF $1M pilot and AAUS/AIDN joins. This connects tactical moves to revenue - $10M-$50M fleets, $1M-$5M pilots, $2M DCCEEW, $15M AUKUS - using resources like Hivemind, V-BAT, and primes (Lockheed, Northrop). To match ADF's Indo-Pacific tempo, I'll ensure 3-6 month integration with operator training. Risks like IRAP delays are mitigated with AWS, and if DroneShield lobbies, Appen/Fivecast partnerships for 30% AIC counter. AUKUS trials by 2027 with DARPA and RAF 617 Squadron, via Sentient's ViDAR (Page 135), target $15M. This depth, grounded in my procurement and prime expertise, builds Shield AI's dominance."
};
