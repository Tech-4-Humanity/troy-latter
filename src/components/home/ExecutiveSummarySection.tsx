import { Card, CardContent } from '@/components/ui/card';
import { Brain, Cloud, Building2, Shield, BarChart3, Network, Users, Rocket } from 'lucide-react';

export const ExecutiveSummarySection = () => {
  const coreSkills = [
    {
      icon: Brain,
      title: "AI Strategy and Orchestration",
      description: "Architect of intelligent systems that merge human insight with agentic automation. Expert in MCP-native orchestration, LangChain, and contextual memory design for scalable, explainable AI."
    },
    {
      icon: Cloud,
      title: "Multi-Cloud and Data Architecture",
      description: "Design and optimisation of hybrid, high-trust environments across AWS, Azure, and Google. Strong in automation, security, and cost-performance governance."
    },
    {
      icon: Building2,
      title: "Enterprise AI Integration",
      description: "Deployment of generative AI and automation within enterprise workflows, combining APIs, foundation models, and edge intelligence to improve decision speed and efficiency."
    },
    {
      icon: Shield,
      title: "AI Governance and Responsible Innovation",
      description: "Contributor to global safety standards and neurotechnology ethics. Experienced embedding explainability and compliance into live AI systems."
    },
    {
      icon: BarChart3,
      title: "Data Science and Applied ML",
      description: "Practical use of models, vector databases, and streaming analytics tied to business KPIs. Focused on turning insight into immediate operational gain."
    },
    {
      icon: Network,
      title: "Ecosystem Partnerships",
      description: "Builds cross-sector partnerships with hyperscalers, startups, and academia to expand capability and accelerate innovation cycles."
    },
    {
      icon: Users,
      title: "Executive Communication",
      description: "Clear translation of complex technology for boards and policymakers. Regular keynote speaker on AI, robotics, and the human impact of automation."
    },
    {
      icon: Rocket,
      title: "Innovation Culture and Delivery Leadership",
      description: "Creates high-trust, high-speed teams using agile \"kill-or-scale\" cycles, live dashboards, and transparent progress tracking to move prototypes into production."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Executive Summary */}
      <Card className="border-0 shadow-xl bg-gradient-to-br from-background to-muted/30">
        <CardContent className="p-10">
          <h2 className="text-3xl font-bold text-primary mb-6">Executive Summary</h2>
          <div className="space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              Strategic technology executive known for turning complex AI and cloud ecosystems into measurable business outcomes. Trusted by boards, C-suite leaders, and governments to deliver transformation that blends foresight, pace, and technical precision.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Hands-on across AI orchestration, data architecture, and automation at scale, I design systems that are secure, explainable, and built for human impact. With multi-cloud fluency across AWS, Azure, and Google, I lead programs that align innovation with strategy—accelerating outcomes while maintaining trust and compliance.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Recognised globally for connecting the ethics, economics, and execution of technology, I help organisations see what's next and act on it today.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Core Value Proposition - Highlighted */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-l-4 border-primary shadow-xl">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-primary mb-6">Core Value Proposition</h3>
          <div className="space-y-4">
            <p className="text-lg text-foreground leading-relaxed">
              I bridge the language of innovation and leadership. Through an established network of 200+ CIOs and CTOs across APAC, I translate deep technology into board-level value—clarity, cost reduction, and resilience.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              My approach unites engineers, strategists, and executives around shared outcomes, proving that AI and automation deliver value when grounded in people and process.
            </p>
            <p className="text-lg text-foreground leading-relaxed font-semibold">
              The result: faster delivery, stronger adoption, and measurable business return.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Current Leadership Roles */}
      <Card className="border-0 shadow-xl bg-card">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-primary mb-6">Current Leadership Roles</h3>
          <ul className="text-lg text-foreground space-y-3 mb-6">
            <li>• Board Member – Queensland Government AI Hub</li>
            <li>• Committee Member – Standards Australia (Brain-Computer Interface)</li>
            <li>• Advisory Board Convenor – Global Council on BCI & Assistive Technology</li>
            <li>• Founder & CEO – Tech 4 Humanity</li>
          </ul>
          <p className="text-lg text-muted-foreground italic">
            All roles align with one mission: advancing responsible, human-centred innovation.
          </p>
        </CardContent>
      </Card>

      {/* Key Certifications and Modern AI Skills */}
      <Card className="border-0 shadow-xl bg-card">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-primary mb-6">Key Certifications and Modern AI Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-foreground">
              <span className="font-semibold">•</span> AWS Professional Solutions Architect – Multi-Cloud & Bedrock Integration
            </div>
            <div className="text-foreground">
              <span className="font-semibold">•</span> Microsoft Certified AI Engineer Associate – Azure OpenAI, Copilot, Cognitive Services
            </div>
            <div className="text-foreground">
              <span className="font-semibold">•</span> Google Cloud Professional – Vertex AI, BigQuery, MLOps
            </div>
            <div className="text-foreground">
              <span className="font-semibold">•</span> IBM watsonx.ai Practitioner – Foundation Model Operations
            </div>
            <div className="text-foreground">
              <span className="font-semibold">•</span> OpenAI & Anthropic Micro-Certifications – Prompting, Agent Design, Context Orchestration
            </div>
            <div className="text-foreground">
              <span className="font-semibold">•</span> LangChain & LlamaIndex – Retrieval, Reasoning, and Memory Systems
            </div>
            <div className="text-foreground">
              <span className="font-semibold">•</span> NVIDIA AI Foundations – Generative Model Optimisation and GPU Architecture
            </div>
            <div className="text-foreground">
              <span className="font-semibold">•</span> MCP-Native Development – Model Context Protocol, API Chaining, Live Data Integration
            </div>
            <div className="text-foreground">
              <span className="font-semibold">•</span> AI Governance & Ethics Credentials – Risk, Transparency, and Responsible AI Policy
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Skills and Technical Leadership */}
      <Card className="border-0 shadow-xl bg-card">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-primary mb-8">Core Skills and Technical Leadership</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {coreSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-muted/30 p-6 rounded-lg border border-border hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3 mb-3">
                    <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-semibold text-primary">{skill.title}</h4>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Industry Recognition */}
      <Card className="border-0 shadow-xl bg-card">
        <CardContent className="p-10">
          <h3 className="text-2xl font-bold text-primary mb-6">Industry Recognition</h3>
          <ul className="text-lg text-foreground space-y-3 mb-6">
            <li>• Keynote Speaker – AWS Public Sector Summit</li>
            <li>• Speaker – Defence + Industry Conference</li>
            <li>• Author – Peer-Reviewed Research on Machine Learning, Neurotech, and Security Ethics</li>
            <li>• Advisor – National and International Committees on AI Policy and Standards</li>
          </ul>
          <p className="text-lg text-muted-foreground italic">
            Recognised for advancing responsible AI and building bridges between innovation, governance, and measurable human value.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
