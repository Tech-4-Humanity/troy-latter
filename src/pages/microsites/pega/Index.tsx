import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { ArrowLeft, Building, Shield, TrendingUp, Users, Mail, Linkedin, Brain, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const PegaIndex = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/microsites">Microsites</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>PEGA</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
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

      {/* APAC FSI Focus & Agentic AI Vision */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center">
            <Globe className="h-6 w-6 mr-3" />
            APAC Financial Services & Agentic AI Leadership
          </h2>
          <p className="text-brand-secondary leading-relaxed">
            Over 15+ years delivering FSI transformations across APAC markets — from Australian superannuation to regional banking compliance frameworks. I specialize in bridging the gap between AI promise and practical delivery in highly regulated environments.
          </p>
          <p className="text-brand-secondary leading-relaxed mt-4">
            <strong>The challenge:</strong> Banks aren't prepared for autonomous AI. <strong>My solution:</strong> Building the governance, orchestration, and decisioning layers that make agentic AI safe and scalable — turning Pega's intelligent automation into measurable business outcomes across complex regulatory landscapes.
          </p>
          <div className="bg-brand-accent/10 p-4 rounded-lg mt-4 border-l-4 border-brand-accent">
            <p className="text-brand-secondary text-sm italic">
              "I help FSI leaders move beyond the AI hype to deliver the orchestrated, compliant, and measurable transformation that regulators and boards demand."
            </p>
          </div>
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
            
            <div className="bg-brand-accent/10 p-6 rounded-lg border border-brand-accent/30">
              <h3 className="text-lg font-semibold text-brand-primary mb-3">Multi-Country AML/KYC Hub</h3>
              <p className="text-sm text-brand-secondary mb-2 italic">Regional Bank (APAC)</p>
              <ul className="text-brand-secondary text-sm space-y-2 mb-4">
                <li>• Centralised compliance workflows with APRA, MAS, and HKMA localisation</li>
                <li>• Agentic decisioning for cross-border transaction monitoring</li>
                <li>• Integrated core banking, SWIFT, and multi-jurisdiction reporting</li>
                <li>• <strong>30% fewer false positives, 50% faster SAR turnaround across 6 countries</strong></li>
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

      {/* Addressing the AI Delivery Gap */}
      <Card className="mb-8">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center">
            <Shield className="h-6 w-6 mr-3" />
            Bridging AI Promise & Regulated Reality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">The Challenge You're Facing</h3>
              <ul className="text-brand-secondary text-sm space-y-2">
                <li>• Banks making AI bets without governance foundations</li>
                <li>• Autonomous agents in compliance-heavy environments</li>
                <li>• Board pressure for measurable AI ROI</li>
                <li>• Multi-jurisdiction regulatory complexity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-brand-primary mb-2">How I Deliver Solutions</h3>
              <ul className="text-brand-secondary text-sm space-y-2">
                <li>• Agentic decisioning with built-in audit trails</li>
                <li>• Orchestration layers that embed compliance logic</li>
                <li>• Human-AI handoff frameworks for risk management</li>
                <li>• APAC-specific regulatory integration patterns</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Perfect Fit for APAC FSI Field Role */}
      <Card className="bg-gradient-to-r from-brand-primary/10 to-brand-accent/10 border-brand-accent/20">
        <CardContent className="p-8">
          <h2 className="text-2xl font-semibold mb-4 text-brand-primary flex items-center">
            <Users className="h-6 w-6 mr-3" />
            Your Perfect APAC FSI Implementation Partner
          </h2>
          <p className="text-brand-secondary leading-relaxed mb-4">
            I'm the practitioner who turns your Pega vision into client reality. While others promise AI transformation, I deliver it — with the governance, integration complexity, and regulatory expertise that APAC financial services demand.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-semibold text-brand-primary mb-2">Field Alignment</h4>
              <p className="text-brand-secondary">Partner-led delivery, CxO engagement, multi-region scaling experience</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-semibold text-brand-primary mb-2">APAC Expertise</h4>
              <p className="text-brand-secondary">15+ years in Australian, Singaporean, and regional FSI markets</p>
            </div>
            <div className="bg-white/50 p-4 rounded-lg">
              <h4 className="font-semibold text-brand-primary mb-2">Proven Results</h4>
              <p className="text-brand-secondary">Measurable AI outcomes in the exact regulatory environments you serve</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PegaIndex;