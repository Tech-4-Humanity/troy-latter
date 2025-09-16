import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Lock, Brain, Users, FileCheck, AlertTriangle, Target, Download, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AIEthics = () => {
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
          <Button size="lg" className="gap-2">
            <Download className="h-4 w-4" />
            Download AI Ethics Framework
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <Target className="h-4 w-4" />
            AI Ethics Assessment
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            Schedule Ethics Review
          </Button>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="principles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="principles">Core Principles</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
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
                    <Button variant="outline" size="sm" className="w-full gap-2">
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
              <h2 className="text-3xl font-bold text-foreground">Implementation Approach</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Practical steps for embedding ethical AI practices throughout the development lifecycle
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Pre-Development Phase</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Ethical Impact Assessment</h4>
                    <p className="text-xs text-muted-foreground">Comprehensive evaluation of potential risks and ethical considerations</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Stakeholder Consultation</h4>
                    <p className="text-xs text-muted-foreground">Multi-disciplinary review involving legal, technical, and ethics experts</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Risk Mitigation Planning</h4>
                    <p className="text-xs text-muted-foreground">Proactive identification and mitigation strategy development</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Development & Testing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Bias Testing Protocols</h4>
                    <p className="text-xs text-muted-foreground">Systematic evaluation across demographic and use case dimensions</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Explainability Integration</h4>
                    <p className="text-xs text-muted-foreground">Built-in transparency and interpretability mechanisms</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Security Validation</h4>
                    <p className="text-xs text-muted-foreground">Comprehensive security testing and vulnerability assessments</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Deployment & Monitoring</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Continuous Monitoring</h4>
                    <p className="text-xs text-muted-foreground">Real-time performance and fairness monitoring systems</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Human Oversight Protocols</h4>
                    <p className="text-xs text-muted-foreground">Defined escalation paths and human intervention triggers</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Audit & Compliance</h4>
                    <p className="text-xs text-muted-foreground">Regular audits and compliance verification processes</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Incident Response</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Rapid Response Teams</h4>
                    <p className="text-xs text-muted-foreground">Cross-functional teams for immediate incident management</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Root Cause Analysis</h4>
                    <p className="text-xs text-muted-foreground">Systematic investigation and documentation processes</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Corrective Action</h4>
                    <p className="text-xs text-muted-foreground">Rapid deployment of fixes and preventive measures</p>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              <Button size="lg" className="gap-2">
                <Shield className="h-4 w-4" />
                Schedule Ethics Consultation
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <Download className="h-4 w-4" />
                Download Implementation Guide
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AIEthics;