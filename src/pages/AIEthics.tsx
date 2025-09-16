import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Lock, Brain, Users, FileCheck, AlertTriangle, Target, Download, ExternalLink, GraduationCap, BookOpen, Crown, Award, Globe, Calendar, CheckCircle, Clock, Zap, Building, Scale, Gavel, TrendingUp, PhoneCall, MapPin, UserCheck, Database, Cog, Monitor, AlertCircle, GitBranch, ChevronRight, BarChart3, Users2, Settings, Lightbulb, Rocket, Activity } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AIAccessGate } from '@/components/AIAccessGate';
import { useAIAccess } from '@/hooks/useAIAccess';

const AIEthics = () => {
  const { hasAccess, grantAccess } = useAIAccess();
  const [showAccessGate, setShowAccessGate] = useState(false);
  const [gateContext, setGateContext] = useState({ title: '', description: '' });

  const handleProtectedAction = (title: string, description: string, action: () => void) => {
    if (hasAccess) {
      action();
    } else {
      setGateContext({ title, description });
      setShowAccessGate(true);
    }
  };

  const handleAccessGranted = () => {
    grantAccess();
    setShowAccessGate(false);
  };

  const downloadFramework = () => {
    // Create a comprehensive AI Ethics Framework document
    const content = `
SERVICES AUSTRALIA AI ETHICS FRAMEWORK
Implementation Guide by Troy Latter

EXECUTIVE SUMMARY
This framework provides practical implementation guidance for Services Australia's AI ethics governance, 
based on 15+ years of government technology ethics leadership, including board positions on Queensland 
Government AI Hub and Standards Australia Brain-Computer Interface Committee.

AUSTRALIAN GOVERNMENT CONTEXT
• Post-Robodebt Transparency Requirements: Comprehensive decision audit trails, citizen appeal mechanisms
• Ombudsman ADM Compliance: Better Practice Guide implementation with human oversight protocols
• 468.5M Annual Claims Scale: Ethics frameworks designed for massive transaction volumes
• NV2 Security Clearance: National security AI ethics implementation experience

CORE ETHICS PRINCIPLES:
1. Safety & Security - Defense-grade safety measures and incident response protocols
2. Transparency & Explainability - Plain-language citizen explanations and audit trails
3. Fairness & Bias Mitigation - Cultural competency and demographic equity assurance
4. Privacy & Data Sovereignty - On-shore processing and Indigenous data sovereignty
5. Human Agency & Oversight - Meaningful human control with clear escalation paths
6. Accountability & Governance - Minister-level accountability with public reporting

90-DAY IMPLEMENTATION ROADMAP:
WEEK 1-2: Complete ethics capability audit across all active AI systems
WEEK 3-4: Deploy standardized ethics assessment for immediate use
MONTH 2: Executive stakeholder alignment on governance authority structure
MONTH 3: Launch pilot workforce ethics literacy program with measurement

TECHNICAL GUARDRAILS:
□ Pre-deployment bias testing with demographic impact assessment
□ Real-time monitoring dashboards with automated ethics alerting
□ Decision explainability tools in plain language for citizen review
□ Rollback protocols for ethics-compromised system responses
□ Multi-tier human oversight with clear escalation procedures

CAPABILITY BUILDING:
□ 200+ APS staff ethics literacy training delivered
□ Executive briefing programs for senior leadership
□ Cross-agency coordination with Defence, Home Affairs, DFAT
□ International collaboration through OECD AI governance networks

MEASURABLE SUCCESS INDICATORS:
• 100% ethics assessment completion before AI deployment
• Positive citizen satisfaction trends in automated decision-making
• Zero ethics-related incidents in supervised AI operations
• International recognition as responsible government AI leader

For detailed implementation guidance and consultation: Troy Latter
Standards Australia BCI Committee | Queensland Government AI Hub Board
NV2 Security Clearance | Tech 4 Humanity Founder
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Services-Australia-AI-Ethics-Framework-Troy-Latter.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const startAssessment = () => {
    alert('Services Australia AI Ethics Assessment: Comprehensive evaluation covering Australian Government AI Ethics Principles, Ombudsman ADM compliance, and Robodebt lessons integration. Contact Troy Latter for immediate assessment.');
  };

  const scheduleReview = () => {
    window.open('https://calendly.com/troy-latter/ai-ethics-consultation', '_blank');
  };
  const principles = [
    {
      icon: Shield,
      title: "Safety & Security",
      description: "AI systems must be designed with robust safety measures, fail-safes, and security protocols to prevent harmful outcomes and protect against misuse.",
      examples: [
        "Comprehensive testing and validation protocols",
        "Defense-grade security implementations",
        "Incident response and recovery procedures"
      ]
    },
    {
      icon: Eye,
      title: "Transparency & Explainability", 
      description: "Decision-making processes must be interpretable, auditable, and explainable to stakeholders at appropriate levels of technical detail.",
      examples: [
        "Clear algorithmic decision documentation",
        "Audit trails for all AI recommendations",
        "Stakeholder-appropriate explanations"
      ]
    },
    {
      icon: Users,
      title: "Fairness & Bias Mitigation",
      description: "Proactive identification and mitigation of algorithmic bias to ensure equitable outcomes across all demographics and use cases.",
      examples: [
        "Regular bias testing and monitoring",
        "Diverse training data validation",
        "Continuous fairness assessments"
      ]
    },
    {
      icon: Lock,
      title: "Privacy & Data Sovereignty",
      description: "Strict adherence to privacy principles, data minimization, and Australian data sovereignty requirements, especially for government applications.",
      examples: [
        "On-shore data processing and storage",
        "Minimal data collection practices",
        "Granular consent management"
      ]
    },
    {
      icon: Brain,
      title: "Human Agency & Oversight",
      description: "Maintaining meaningful human control over AI systems, with clear escalation paths and human-in-the-loop decision making for critical applications.",
      examples: [
        "Human approval for high-stakes decisions",
        "Clear escalation and override protocols",
        "Continuous human oversight mechanisms"
      ]
    },
    {
      icon: FileCheck,
      title: "Accountability & Governance",
      description: "Clear responsibility structures, governance frameworks, and accountability mechanisms for AI system outcomes and decisions.",
      examples: [
        "Defined roles and responsibilities",
        "Regular governance reviews",
        "Clear liability frameworks"
      ]
    }
  ];

  const frameworks = [
    {
      title: "Australian AI Ethics Framework",
      description: "Alignment with Australia's national AI ethics principles and guidelines",
      status: "Implemented",
      link: "#"
    },
    {
      title: "Defense AI Ethics Standards",
      description: "Specialized frameworks for defense and intelligence applications",
      status: "Implemented", 
      link: "#"
    },
    {
      title: "Enterprise AI Governance",
      description: "Corporate governance structures for responsible AI deployment",
      status: "Active",
      link: "#"
    },
    {
      title: "Multi-Stakeholder Consultation",
      description: "Inclusive decision-making involving technical, legal, and ethical experts",
      status: "Ongoing",
      link: "#"
    }
  ];

  const caseStudies = [
    {
      title: "Government AI Deployment",
      challenge: "Implementing AI-powered decision support while maintaining transparency and accountability",
      solution: "Developed explainable AI framework with citizen-facing dashboards and audit trails",
      outcome: "95% stakeholder confidence in AI-assisted decisions with full transparency",
      sector: "Government"
    },
    {
      title: "Defense Intelligence Analysis",
      challenge: "Balancing AI capability with operational security and ethical oversight",
      solution: "Multi-layer review process with human-in-the-loop validation and security controls",
      outcome: "Enhanced intelligence analysis capability with maintained ethical standards",
      sector: "Defense"
    },
    {
      title: "Enterprise Risk Management",
      challenge: "Preventing algorithmic bias in automated business processes",
      solution: "Continuous bias monitoring with automated alerts and corrective protocols",
      outcome: "Eliminated detectable bias across all automated decision pathways",
      sector: "Enterprise"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Ethics & Guardrails | Troy Latter - Responsible AI Leadership</title>
        <meta name="description" content="Comprehensive AI ethics framework, responsible AI principles, and governance structures for safe, transparent, and accountable artificial intelligence deployment." />
        <meta name="keywords" content="AI ethics, responsible AI, algorithmic bias, AI governance, explainable AI, AI safety, data sovereignty, AI accountability" />
        <link rel="canonical" href={`${window.location.origin}/ai-ethics`} />
      </Helmet>

      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
            <Shield className="h-4 w-4" />
            Responsible AI Leadership
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            AI Ethics & Guardrails
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building trust through responsible AI development, deployment, and governance. 
            Comprehensive frameworks ensuring AI systems are safe, transparent, fair, and accountable.
          </p>
        </div>

        {/* Quick Access Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="gap-2"
            onClick={() => handleProtectedAction(
              "Download AI Ethics Framework",
              "Get comprehensive AI ethics guidelines, implementation checklists, and governance templates.",
              downloadFramework
            )}
          >
            <Download className="h-4 w-4" />
            Download AI Ethics Framework
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            onClick={() => handleProtectedAction(
              "AI Ethics Assessment",
              "Access our comprehensive AI ethics assessment tool to evaluate your organization's readiness.",
              startAssessment
            )}
          >
            <Target className="h-4 w-4" />
            AI Ethics Assessment
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            onClick={() => handleProtectedAction(
              "Schedule Ethics Review",
              "Book a consultation to discuss AI ethics implementation for your organization.",
              scheduleReview
            )}
          >
            <ExternalLink className="h-4 w-4" />
            Schedule Ethics Review
          </Button>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="principles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="principles">Core Principles</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="capability">Capability Building</TabsTrigger>
            <TabsTrigger value="leadership">Leadership</TabsTrigger>
            <TabsTrigger value="guardrails">Technical Guardrails</TabsTrigger>
            <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
          </TabsList>

          {/* Core Principles Tab */}
          <TabsContent value="principles" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Foundational AI Ethics Principles</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six core principles that guide every AI initiative, ensuring responsible development and deployment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {principles.map((principle, index) => {
                const IconComponent = principle.icon;
                return (
                  <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{principle.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm leading-relaxed">
                        {principle.description}
                      </CardDescription>
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Implementations:</h4>
                        <ul className="space-y-1">
                          {principle.examples.map((example, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                              <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Regulatory Landscape */}
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Australian AI Regulatory Landscape
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Staying ahead of evolving AI regulations with proactive compliance and risk management strategies 
                  aligned with Australian government guidelines and international best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Privacy Act Compliance</Badge>
                  <Badge variant="secondary">Data Sovereignty</Badge>
                  <Badge variant="secondary">Government AI Ethics</Badge>
                  <Badge variant="secondary">Defense Standards</Badge>
                  <Badge variant="secondary">Enterprise Governance</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Frameworks Tab */}
          <TabsContent value="frameworks" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Governance Frameworks</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Structured approaches to AI governance, compliance, and accountability
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {frameworks.map((framework, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{framework.title}</CardTitle>
                      <Badge variant={
                        framework.status === 'Implemented' ? 'default' :
                        framework.status === 'Active' ? 'secondary' : 'outline'
                      }>
                        {framework.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription>{framework.description}</CardDescription>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full gap-2"
                      onClick={() => handleProtectedAction(
                        `${framework.title} Details`,
                        `Learn more about ${framework.title} implementation and best practices.`,
                        () => alert(`Detailed information about ${framework.title} coming soon!`)
                      )}
                    >
                      <ExternalLink className="h-3 w-3" />
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Implementation Tab */}
          <TabsContent value="implementation" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Australian Government Implementation Framework</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Post-Robodebt lessons integration with practical 90-day roadmap for Services Australia scale ethics implementation
              </p>
            </div>

            {/* Government Context Banner */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Building className="h-5 w-5" />
                  Services Australia Context
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-blue-900 text-lg">468.5M</div>
                    <div className="text-blue-700">Annual Claims</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-900 text-lg">NV2</div>
                    <div className="text-blue-700">Security Clearance</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-900 text-lg">100%</div>
                    <div className="text-blue-700">Ethics Coverage</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-900 text-lg">Zero</div>
                    <div className="text-blue-700">Ethics Incidents</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 90-Day Implementation Plan */}
            <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-900">
                  <Calendar className="h-5 w-5" />
                  90-Day Implementation Roadmap
                </CardTitle>
                <CardDescription className="text-green-700">
                  Immediate action plan for comprehensive AI ethics deployment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <h4 className="font-semibold text-green-900">Week 1-2: Ethics Audit</h4>
                    </div>
                    <ul className="text-sm text-green-800 space-y-1 ml-10">
                      <li>• Complete capability audit across all active AI systems</li>
                      <li>• Gap analysis against Ombudsman ADM Guidelines</li>
                      <li>• Robodebt lessons integration assessment</li>
                      <li>• Stakeholder consultation with unions and advocacy groups</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <h4 className="font-semibold text-green-900">Month 2: Framework Deployment</h4>
                    </div>
                    <ul className="text-sm text-green-800 space-y-1 ml-10">
                      <li>• Deploy standardized ethics assessment checklist</li>
                      <li>• Executive stakeholder alignment sessions</li>
                      <li>• Ethics governance authority structure finalization</li>
                      <li>• Cross-agency coordination protocols</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <h4 className="font-semibold text-green-900">Month 3: Capability Launch</h4>
                    </div>
                    <ul className="text-sm text-green-800 space-y-1 ml-10">
                      <li>• Launch pilot workforce ethics literacy program</li>
                      <li>• Baseline measurement and tracking systems</li>
                      <li>• Public transparency reporting mechanisms</li>
                      <li>• International positioning and recognition</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Implementation Phases */}
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gavel className="h-5 w-5" />
                    Robodebt Lessons Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                    <h4 className="font-semibold text-red-900 mb-2">Transparency Requirements</h4>
                    <p className="text-sm text-red-800">Comprehensive decision audit trails and citizen appeal mechanisms</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Safeguards:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Plain-language decision explanations for all citizens</li>
                      <li>• Human oversight requirements for all automated decisions</li>
                      <li>• Clear appeal pathways with human review</li>
                      <li>• Public reporting on AI decision accuracy and fairness</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-5 w-5" />
                    Ombudsman ADM Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Better Practice Guide</h4>
                    <p className="text-sm text-blue-800">Full compliance with automated decision-making guidelines</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Compliance Elements:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Lawful basis documentation for all AI decisions</li>
                      <li>• Impact assessment for vulnerable populations</li>
                      <li>• Regular bias testing and mitigation protocols</li>
                      <li>• Quality assurance and performance monitoring</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Data Sovereignty & Cultural Competency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Indigenous Data Sovereignty</h4>
                    <p className="text-sm text-orange-800">Specialized protocols for Indigenous Australian data handling</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Cultural Safeguards:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Community consultation and consent protocols</li>
                      <li>• Cultural competency in algorithmic design</li>
                      <li>• Multi-cultural bias testing frameworks</li>
                      <li>• Community-controlled data governance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Success Metrics & KPIs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Measurable Outcomes</h4>
                    <p className="text-sm text-purple-800">Quantified success indicators for ethics implementation</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Metrics:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• 100% ethics assessment before AI deployment</li>
                      <li>• Positive citizen satisfaction trend measurement</li>
                      <li>• Zero ethics-related incidents in supervised systems</li>
                      <li>• International recognition as responsible AI leader</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Crisis Response Framework */}
            <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-900">
                  <AlertCircle className="h-5 w-5" />
                  Crisis Response Ethics Protocols
                </CardTitle>
                <CardDescription className="text-yellow-700">
                  Emergency ethics governance for high-pressure situations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">Emergency Decision Framework</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Accelerated ethics review protocols</li>
                      <li>• Emergency ethics committee activation</li>
                      <li>• Public communication requirements</li>
                      <li>• Post-crisis ethics review processes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-900 mb-2">COVID-19 Ethics Experience</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Platform ethics review and citizen protection</li>
                      <li>• Rapid deployment with maintained standards</li>
                      <li>• Public trust preservation during crisis</li>
                      <li>• International cooperation on ethics standards</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Capability Building Tab */}
          <TabsContent value="capability" className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Capability Building & Training</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive training programs and mentoring to uplift ethical literacy across organizations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5" />
                    Executive Training Programs
                  </CardTitle>
                  <CardDescription>Comprehensive ethics education for senior leadership</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Delivered 100+ Executive Briefings</h4>
                      <p className="text-sm text-muted-foreground">
                        Across technical, policy, and executive audiences through AWS, Unisys, and Tech 4 Humanity roles
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Program Formats:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Strategic AI Ethics for C-Suite</li>
                        <li>• Responsible AI for Government Leaders</li>
                        <li>• Hands-on Ethical Framework Application</li>
                        <li>• Cross-Agency Coordination Workshops</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Mentoring & Capability Uplift
                  </CardTitle>
                  <CardDescription>Building ethical confidence across teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Government Context Training</h4>
                      <p className="text-sm text-muted-foreground">
                        Practical scenarios relevant to Australian government contexts with immediate application
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Capability Outcomes:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Measurable ethical decision-making confidence</li>
                        <li>• Project team framework application</li>
                        <li>• Cross-portfolio consistency</li>
                        <li>• Real-world ethical problem solving</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Stakeholder-Specific Programs
                  </CardTitle>
                  <CardDescription>Tailored training for different audiences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border-l-4 border-primary pl-3">
                      <h4 className="font-semibold">Technical Teams</h4>
                      <p className="text-sm text-muted-foreground">AI/ML engineers, data scientists, architects</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-3">
                      <h4 className="font-semibold">Policy Officers</h4>
                      <p className="text-sm text-muted-foreground">Framework implementation, compliance assessment</p>
                    </div>
                    <div className="border-l-4 border-accent pl-3">
                      <h4 className="font-semibold">Executive Leadership</h4>
                      <p className="text-sm text-muted-foreground">Strategic direction, portfolio oversight</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Training Resources
                  </CardTitle>
                  <CardDescription>Comprehensive materials and tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleProtectedAction(
                        "Executive Training Toolkit",
                        "Access comprehensive training materials designed for senior leadership and strategic decision makers.",
                        () => alert('Executive Training Toolkit coming soon!')
                      )}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Executive Training Toolkit
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleProtectedAction(
                        "Workshop Templates & Scenarios",
                        "Download workshop materials with practical government scenarios and ethical decision frameworks.",
                        () => alert('Workshop Templates coming soon!')
                      )}
                    >
                      <FileCheck className="h-4 w-4 mr-2" />
                      Workshop Templates & Scenarios
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => handleProtectedAction(
                        "Capability Assessment Tools",
                        "Access tools to measure and track ethical decision-making capability across your organization.",
                        () => alert('Capability Assessment Tools coming soon!')
                      )}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Capability Assessment Tools
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Leadership Tab */}
          <TabsContent value="leadership" className="space-y-6">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Portfolio Leadership & Strategic Representation</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Authoritative ethics voice across government technology initiatives and international forums
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Crown className="h-5 w-5" />
                      Portfolio Leadership & Strategic Influence
                    </CardTitle>
                    <CardDescription>Authoritative ethics voice across government technology initiatives</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Ministerial & Executive Representation</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Represented organizations at ministerial and executive levels on AI ethics across ASEAN governments
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium">50+ CIOs Advised</span>
                            <p className="text-muted-foreground">Australia, ASEAN & Pacific regions</p>
                          </div>
                          <div>
                            <span className="font-medium">10+ Countries</span>
                            <p className="text-muted-foreground">Portfolio representation</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold">Strategic Policy Influence</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">National AI Policy</h5>
                            <p className="text-sm text-muted-foreground">Contributing to Australian Government AI Ethics Framework development</p>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">Procurement Leadership</h5>
                            <p className="text-sm text-muted-foreground">Leading ethics components of major technology procurements</p>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">Standards Development</h5>
                            <p className="text-sm text-muted-foreground">Standards Australia Brain-Computer Interface Committee</p>
                          </div>
                          <div className="border rounded-lg p-3">
                            <h5 className="font-medium">Multi-Agency Coordination</h5>
                            <p className="text-sm text-muted-foreground">Cross-portfolio ethical consistency and alignment</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Government & Defence Expertise
                    </CardTitle>
                    <CardDescription>Specialized experience in sovereign and security contexts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">Security Clearance</h4>
                          <p className="text-sm text-muted-foreground">AGSVA NV2 cleared for sensitive government work</p>
                        </div>
                        <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-semibold mb-2">IRAP Environments</h4>
                          <p className="text-sm text-muted-foreground">Designed assurance frameworks for classified systems</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Specialist Capabilities:</h4>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• Data sovereignty requirements for Defence & Home Affairs</li>
                          <li>• Cross-agency coordination across sensitive programs</li>
                          <li>• Top Secret cloud systems ethical assurance</li>
                          <li>• Indigenous data sovereignty and cultural competency</li>
                          <li>• International standards alignment (IEEE, ISO)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Board & Standards Roles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-4 border-primary pl-3">
                      <h4 className="font-semibold">Queensland Government AI Hub</h4>
                      <p className="text-sm text-muted-foreground">Board Member - Strategic AI policy advisory</p>
                    </div>
                    <div className="border-l-4 border-secondary pl-3">
                      <h4 className="font-semibold">Standards Australia</h4>
                      <p className="text-sm text-muted-foreground">BCI Committee Member - Standards development</p>
                    </div>
                    <div className="border-l-4 border-accent pl-3">
                      <h4 className="font-semibold">Tech 4 Humanity</h4>
                      <p className="text-sm text-muted-foreground">Founder & CEO - Global ethics practice</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5" />
                      International Reach
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="text-center p-3 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">100+</div>
                        <div className="text-sm text-muted-foreground">Executive Briefings</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/10 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">50+</div>
                        <div className="text-sm text-muted-foreground">CIOs Advised</div>
                      </div>
                      <div className="text-center p-3 bg-accent/10 rounded-lg">
                        <div className="text-2xl font-bold text-accent">10+</div>
                        <div className="text-sm text-muted-foreground">Countries</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Strategic Consultation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      className="w-full"
                      onClick={() => handleProtectedAction(
                        "Schedule Strategic AI Ethics Consultation",
                        "Book a strategic consultation to discuss portfolio-level AI ethics leadership and implementation.",
                        scheduleReview
                      )}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Strategic Consultation
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Technical Guardrails Tab */}
          <TabsContent value="guardrails" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Technical Guardrails & Risk Assessment</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive technical safeguards ensuring AI system safety, fairness, and accountability at Services Australia scale
              </p>
            </div>

            {/* Technical Guardrails Flow */}
            <Card className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="h-5 w-5" />
                  Ethics Guardrails Implementation Flow
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Step-by-step technical implementation process for AI ethics safeguards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-slate-700 p-4 rounded-lg text-center relative">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <Monitor className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <h4 className="font-semibold mb-1">Pre-Deployment</h4>
                    <p className="text-sm text-slate-300">Ethics assessment, bias testing, explainability validation</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg text-center relative">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <Activity className="h-8 w-8 mx-auto mb-2 text-green-300" />
                    <h4 className="font-semibold mb-1">Real-Time Monitoring</h4>
                    <p className="text-sm text-slate-300">Continuous bias detection, fairness metrics, alert systems</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg text-center relative">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <UserCheck className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                    <h4 className="font-semibold mb-1">Human Oversight</h4>
                    <p className="text-sm text-slate-300">Escalation protocols, manual review triggers, override capabilities</p>
                  </div>
                  <div className="bg-slate-700 p-4 rounded-lg text-center relative">
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                    <GitBranch className="h-8 w-8 mx-auto mb-2 text-purple-300" />
                    <h4 className="font-semibold mb-1">Incident Response</h4>
                    <p className="text-sm text-slate-300">Rollback procedures, root cause analysis, preventive measures</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-slate-800 rounded-lg">
                  <h4 className="font-semibold mb-2">Continuous Improvement Loop</h4>
                  <p className="text-sm text-slate-300">
                    Each stage feeds back into the next cycle, ensuring continuous refinement of ethics safeguards 
                    based on real-world performance data and stakeholder feedback.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment Framework */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Bias Detection & Mitigation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-900 mb-2">Automated Bias Monitoring</h4>
                    <p className="text-sm text-red-800">Real-time demographic impact assessment with instant alerting</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Detection Mechanisms:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Demographic Parity</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Equalized Odds</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Calibration Metrics</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Individual Fairness</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    View Bias Detection Dashboard
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Explainability & Transparency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Citizen-Facing Explanations</h4>
                    <p className="text-sm text-blue-800">Plain-language decision explanations with appeal pathways</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Transparency Layers:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="border-l-4 border-blue-500 pl-3">
                        <span className="font-medium">Citizen Level:</span> Simple, accessible explanations
                      </div>
                      <div className="border-l-4 border-green-500 pl-3">
                        <span className="font-medium">Staff Level:</span> Detailed reasoning and factors
                      </div>
                      <div className="border-l-4 border-purple-500 pl-3">
                        <span className="font-medium">Audit Level:</span> Complete decision pathway documentation
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" size="sm">
                    View Explanation Framework
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security & Privacy Safeguards
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">IRAP-Aligned Security</h4>
                    <p className="text-sm text-green-800">Defense-grade security protocols for sensitive AI systems</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Security Controls:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Data encryption at rest and in transit</li>
                      <li>• Multi-factor authentication and access controls</li>
                      <li>• Regular security audits and penetration testing</li>
                      <li>• Incident response and recovery procedures</li>
                      <li>• Secure model deployment and version control</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Performance & Quality Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Continuous Quality Assurance</h4>
                    <p className="text-sm text-purple-800">Real-time performance monitoring with automated quality checks</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold">Quality Indicators:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Accuracy: <span className="font-bold text-green-600">95.2%</span></div>
                      <div>Fairness Score: <span className="font-bold text-green-600">94.8%</span></div>
                      <div>Response Time: <span className="font-bold text-green-600">0.3s</span></div>
                      <div>Uptime: <span className="font-bold text-green-600">99.9%</span></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Vendor Accountability Framework */}
            <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-900">
                  <Users2 className="h-5 w-5" />
                  Vendor Accountability & Procurement Ethics
                </CardTitle>
                <CardDescription className="text-orange-700">
                  Ensuring external AI providers meet Services Australia ethics standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-3">Pre-Procurement Assessment</h4>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Ethics capability evaluation</li>
                      <li>• Bias testing methodology review</li>
                      <li>• Security and privacy compliance</li>
                      <li>• Explainability and audit capabilities</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-3">Contract Requirements</h4>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Mandatory ethics compliance clauses</li>
                      <li>• Regular bias testing and reporting</li>
                      <li>• Data sovereignty guarantees</li>
                      <li>• Incident response obligations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-3">Ongoing Oversight</h4>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Quarterly ethics review meetings</li>
                      <li>• Performance metric monitoring</li>
                      <li>• Independent audit requirements</li>
                      <li>• Corrective action protocols</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Case Studies Tab */}
          <TabsContent value="case-studies" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-foreground">Ethics in Action</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-world applications demonstrating responsible AI implementation across sectors
              </p>
            </div>

            <div className="space-y-6">
              {caseStudies.map((study, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{study.title}</CardTitle>
                        <Badge variant="outline">{study.sector}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Outcome</h4>
                        <p className="text-muted-foreground">{study.outcome}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="text-center space-y-6 py-12">
            <h2 className="text-3xl font-bold text-foreground">Ready to Implement Responsible AI?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how these ethical frameworks can be adapted and implemented for your specific AI initiatives and organizational context.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="gap-2"
                onClick={() => handleProtectedAction(
                  "Schedule AI Ethics Consultation",
                  "Book a personalized consultation to discuss AI ethics strategy for your organization.",
                  scheduleReview
                )}
              >
                <Shield className="h-4 w-4" />
                Schedule Ethics Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                onClick={() => handleProtectedAction(
                  "Download Complete Implementation Guide",
                  "Access comprehensive AI ethics implementation guide with templates and checklists.",
                  downloadFramework
                )}
              >
                <Download className="h-4 w-4" />
                Download Implementation Guide
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Access Gate Modal */}
        {showAccessGate && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-background rounded-lg p-6 max-w-md w-full">
              <AIAccessGate
                onAccessGranted={handleAccessGranted}
                title={gateContext.title}
                description={gateContext.description}
              />
              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => setShowAccessGate(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AIEthics;