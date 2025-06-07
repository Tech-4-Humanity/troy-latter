
import { Card, CardContent } from '@/components/ui/card';

export const ExecutiveSummarySection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
        <CardContent className="p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-6">Executive Summary</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A strategic technology leader with proven track record building CIO/CTO networks and translating complex technical solutions into business value for C-suite executives. Deep multi-cloud expertise (AWS, Azure, GCP) with hands-on experience in AI-enabled enterprise solutions, data architecture, and digital transformation at scale.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border-l-4 border-blue-500">
                <h3 className="font-semibold text-brand-primary mb-3">Core Value Proposition</h3>
                <p className="text-gray-700">
                  Uniquely positioned to bridge the gap between technical innovation and business outcomes, with established relationships across 200+ CIOs/CTOs in APAC and proven ability to mobilize sales teams around executive-level value propositions.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="font-semibold text-brand-primary mb-2">Current Leadership Roles</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Board Member - Queensland Government AI Hub</li>
                  <li>• Australian Committee Member - Standards Australia (BCI)</li>
                  <li>• Advisory Board Convenor - Robotics Australia Group</li>
                  <li>• Founder & CEO - Tech 4 Humanity</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="font-semibold text-brand-primary mb-2">Key Certifications</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AWS Professional Solutions Architect</li>
                  <li>• Azure AI Engineer Associate</li>
                  <li>• GCP Certified</li>
                  <li>• TOGAF & IT4IT Foundations</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <h4 className="font-semibold text-brand-primary mb-2">Industry Recognition</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Keynote Speaker - AWS Public Sector Summit</li>
                  <li>• Defense+Industry Conference Speaker</li>
                  <li>• Published ML/Security Research Papers</li>
                  <li>• 40+ Qualified Leads Generated Per Quarter</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
