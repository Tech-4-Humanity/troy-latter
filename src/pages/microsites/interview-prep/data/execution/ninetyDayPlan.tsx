
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PresentationPage } from '../../types';

export const ninetyDayPlan: PresentationPage = {
  id: 8,
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
  speakerNotes: "This 30/60/90 plan builds a $20M+ pipeline, aligning with Shield AI's fast-paced goal to dominate ADF autonomy. By day 30, submitting EOIs for LAND 156 and SEA 129 via AUSTENDER, engaging TAS and QUT for Mission Syracuse (Page 134), drafting a $5M Innovation Hub proposal, securing a $1M ABF pilot via Standing Offer SON4095403, and advancing IRAP lay a foundation, leveraging CASG's 60% influence (Page 127). By day 60, RFPs, a $2M ASCA trial, $2M DCCEEW contract, Appen/Fivecast partnerships for 30% AIC, and US Navy AUKUS planning deepen our position, countering DroneShield's $10M LAND 19/7 edge. By day 90, shortlisting tenders, $10M funding, a $15M AUKUS demo with DARPA and RAF 617 Squadron (Page 135) by 2026, $5M ABF deal, and IRAP completion (Q3 2025) ensure dominance, addressing the Page 136 gap. To match ADF's Indo-Pacific tempo, integration takes 3-6 months with operator training, using Mission Syracuse as proof. If RFPs fail, SON4095403 pivots us; if competitors lobby, Appen/Fivecast reinforce with 30% AIC, driving a $20M+ pipeline. My CASG, prime, and SME experience, honed through AWS and HoloOrg, delivers a high-value path, whether hired or not."
};
