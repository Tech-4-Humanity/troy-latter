import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ArrowLeft, Building, Shield, TrendingUp, Users, Mail, Linkedin, Brain, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const PegaIndex = () => {
  return (
    <div className="animate-fade-in">
      <Link to="/" className="inline-flex items-center text-brand-primary hover:text-brand-accent mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-brand-primary mb-4">Troy Latter</h1>
        <p className="text-xl text-brand-secondary mb-6">
          Driving AI-enabled workflow orchestration and decisioning at scale for financial services leaders
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="mailto:troy@innovateme.link" className="inline-flex items-center text-brand-primary hover:text-brand-accent transition-colors">
            <Mail className="h-4 w-4 mr-2" />
            troy@innovateme.link
          </a>
          <a href="https://linkedin.com/in/troylatter" className="inline-flex items-center text-brand-primary hover:text-brand-accent transition-colors">
            <Linkedin className="h-4 w-4 mr-2" />
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* Strategic Vision */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center">
            <Brain className="h-6 w-6 mr-3" />
            Strategic Vision
          </h2>
          <p className="text-brand-secondary leading-relaxed">
            Over the last 15+ years, I've led complex transformations in banking, insurance, superannuation, and payments — balancing compliance, complexity, and cost. My focus is on turning ambition into architecture, integrating platforms like Pega into real-world ecosystems with measurable results.
          </p>
          <p className="text-brand-secondary leading-relaxed mt-4">
            The future for FSIs is not just digitisation — it's decision augmentation: intelligent workflows that embed AI and compliance logic from the start, orchestrating human and autonomous agents for faster, safer outcomes.
          </p>
        </CardContent>
      </Card>

      {/* Client Transformation Examples */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-brand-primary flex items-center">
            <Building className="h-6 w-6 mr-3" />
            Client Transformation Examples – Financial Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand-light/30 p-6 rounded-lg border border-brand-primary/20">
              <h3 className="text-lg font-semibold text-brand-primary mb-3">Claims & Fraud Modernisation</h3>
              <p className="text-sm text-brand-secondary mb-2 italic">Tier-1 Insurer</p>
              <ul className="text-brand-secondary text-sm space-y-2 mb-4">
                <li>• Unified decisioning layer with Pega Customer Decision Hub</li>
                <li>• Integrated OCR, anomaly detection, and legacy policy APIs</li>
                <li>• <strong>40% faster claims cycle, 18% better fraud detection</strong></li>
              </ul>
            </div>
            
            <div className="bg-brand-light/30 p-6 rounded-lg border border-brand-primary/20">
              <h3 className="text-lg font-semibold text-brand-primary mb-3">Digital Onboarding</h3>
              <p className="text-sm text-brand-secondary mb-2 italic">Superannuation Fund</p>
              <ul className="text-brand-secondary text-sm space-y-2 mb-4">
                <li>• Built low-code microjourney with ID verification, OCR, facial recognition</li>
                <li>• Integrated ServiceNow escalations, Salesforce CRM updates</li>
                <li>• <strong>Reduced onboarding from 12 days to under 2, 95% member satisfaction</strong></li>
              </ul>
            </div>
            
            <div className="bg-brand-light/30 p-6 rounded-lg border border-brand-primary/20">
              <h3 className="text-lg font-semibold text-brand-primary mb-3">AI-Augmented Lending</h3>
              <p className="text-sm text-brand-secondary mb-2 italic">Retail Bank</p>
              <ul className="text-brand-secondary text-sm space-y-2 mb-4">
                <li>• Used Pega Process AI for dynamic routing, Microsoft AI for doc processing</li>
                <li>• Delivered predictive underwriter recommendations with confidence scores</li>
                <li>• <strong>65% faster approvals, 20% loan book growth, no default rate increase</strong></li>
              </ul>
            </div>
            
            <div className="bg-brand-light/30 p-6 rounded-lg border border-brand-primary/20">
              <h3 className="text-lg font-semibold text-brand-primary mb-3">Multi-Country AML/KYC Hub</h3>
              <p className="text-sm text-brand-secondary mb-2 italic">Regional Bank</p>
              <ul className="text-brand-secondary text-sm space-y-2 mb-4">
                <li>• Centralised compliance workflows with jurisdictional localisation</li>
                <li>• Integrated core banking, SWIFT, and APRA reporting</li>
                <li>• <strong>30% fewer false positives, 50% faster SAR turnaround</strong></li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Architecture & Integration Leadership */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center">
            <Cpu className="h-6 w-6 mr-3" />
            Architecture & Integration Leadership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">Cloud-native integrations</h3>
              <p className="text-brand-secondary text-sm">AWS, Azure, Salesforce, ServiceNow, Oracle</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">Reusable frameworks</h3>
              <p className="text-brand-secondary text-sm">Microjourneys, compliance-first decision layers, agentic automation patterns</p>
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">Ecosystem thinking</h3>
              <p className="text-brand-secondary text-sm">Multi-cloud, open standards, partner co-delivery</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Innovation in High-Trust Environments */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center">
            <Shield className="h-6 w-6 mr-3" />
            Innovation in High-Trust Environments
          </h2>
          <div className="space-y-3">
            <p className="text-brand-secondary">• Designed agentic decisioning overlays for banking compliance platforms</p>
            <p className="text-brand-secondary">• Built orchestration models for mining, insurance, and government clients</p>
            <p className="text-brand-secondary">• Delivered predictive pipelines and real-time dashboards in audit-heavy sectors</p>
          </div>
        </CardContent>
      </Card>

      {/* Why Me for Pega */}
      <Card className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border-brand-accent/20">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center">
            <TrendingUp className="h-6 w-6 mr-3" />
            Why Me for Pega
          </h2>
          <p className="text-brand-secondary leading-relaxed">
            I've delivered measurable FSI impact with the exact mix Pega brings to market: intelligent automation, low-code orchestration, and AI-powered decisioning. My track record spans CxO engagement, multi-region scaling, and partner-led go-to-market execution — all while delivering change in high-trust, compliance-driven industries.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PegaIndex;