
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Shield, Cloud, Zap, Target, Users, Calendar, TrendingUp } from 'lucide-react';

const StrategicProjects = () => {
  const strategicProjects = [
    {
      title: "Sovereign AI Deployment",
      category: "AI & Security",
      status: "Production",
      duration: "12 months",
      stakeholders: "Intelligence Community",
      icon: Shield,
      keyMetrics: [
        { label: "Research Cycle Reduction", value: "60%" },
        { label: "Production License", value: "$2M" },
        { label: "Compliance Incidents", value: "0" }
      ],
      technologies: ["LLM", "Kubernetes", "Oracle Cloud", "Hardware Security"],
      challenge: "Intelligence agencies needed generative AI for rapid document analysis but couldn't send classified data to cloud LLM services due to sovereignty and security concerns.",
      solution: [
        "Led Vault-Oracle team to design fully on-premises sovereign LLM framework",
        "Convened cross-agency design workshops and built ruggedised LLM cluster",
        "Embedded hardware-backed key management and real-time audit logs",
        "Implemented 'Hallucination Guard' agent for cross-checking AI outputs"
      ],
      results: [
        "Analysts cut research cycles by 60%, generating actionable intelligence in under an hour instead of days",
        "Zero compliance incidents over one-year pilot period",
        "Secured $2 million production licence",
        "Established framework as blueprint for sovereign AI across National Intelligence Community"
      ]
    },
    {
      title: "Ruggedised Battlefield Cloud Nodes", 
      category: "Infrastructure",
      status: "Production Ready",
      duration: "6 months",
      stakeholders: "Australian Defence Force",
      icon: Cloud,
      keyMetrics: [
        { label: "Validation Time Reduction", value: "75%" },
        { label: "Production Funding", value: "$5M" },
        { label: "AI Inference Speed", value: "<1s" }
      ],
      technologies: ["Kubernetes", "Snowball Edge", "Edge Computing", "AI Inference"],
      challenge: "ADF's Secure Content program needed shock-proof cloud infrastructure that could operate in battlefield conditions with reliable AI inference capabilities.",
      solution: [
        "Led 48-hour PoC sprints to field-test shock-proof Kubernetes clusters",
        "Iteratively tested and discarded failed form-factors each sprint",
        "Optimised for sub-second AI inference under isolation conditions",
        "Developed ruggedised deployment patterns for edge environments"
      ],
      results: [
        "Achieved sub-second AI inference under complete network isolation",
        "Reduced validation time by 75% through rapid sprint methodology",
        "Secured $5M funding to productise battlefield-grade nodes",
        "Created reusable patterns for military edge computing deployments"
      ]
    },
    {
      title: "Security Framework Excellence",
      category: "Security & Compliance", 
      status: "Reference Architecture",
      duration: "8 months",
      stakeholders: "Defence Agencies",
      icon: Target,
      keyMetrics: [
        { label: "Certification Time", value: "6 weeks vs 6 months" },
        { label: "Compliance Automation", value: "85%" },
        { label: "Follow-on Contracts", value: "$4.5M" }
      ],
      technologies: ["ISM Controls", "HSM", "Compliance Dashboard", "Audit Trails"],
      challenge: "Critical defence agency needed to migrate sensitive workloads to cloud while maintaining PROTECTED-level security controls and continuous ISM compliance.",
      solution: [
        "Architected multi-layered security approach with automated boundary controls",
        "Implemented hardware security modules with encryption key rotation",
        "Developed continuous compliance dashboard mapping configurations to ISM controls",
        "Conducted weekly tabletop exercises to validate controls against emerging threats"
      ],
      results: [
        "Achieved ASD certification in record time (6 weeks vs typical 6 months)",
        "Automated 85% of compliance checks and reduced audit preparation by 70%",
        "Framework adopted by three additional defence agencies",
        "Generated $4.5M in follow-on contracts as reference architecture"
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-green-100 text-green-800 border-green-200';
      case 'Production Ready': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Reference Architecture': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Security': return 'bg-red-50 text-red-700 border-red-200';
      case 'Infrastructure': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Security & Compliance': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="animate-fade-in">
      <PageTitle title="Strategic Projects" />
      
      <div className="mb-8">
        <img 
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop" 
          alt="Strategic Projects" 
          className="w-full h-64 object-cover rounded-lg shadow-md mb-6" 
        />
        <p className="text-lg text-brand-secondary mb-4">
          Breakthrough initiatives delivering measurable outcomes across sovereign AI, battlefield infrastructure, and security frameworks.
        </p>
      </div>

      <div className="space-y-12 mb-8">
        {strategicProjects.map((project, index) => (
          <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <project.icon className="h-8 w-8 text-brand-primary" />
                  <div>
                    <CardTitle className="text-2xl text-brand-primary mb-2">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      <Badge className={getCategoryColor(project.category)}>
                        {project.category}
                      </Badge>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Metadata */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm"><strong>Duration:</strong> {project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm"><strong>Stakeholders:</strong> {project.stakeholders}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-gray-500" />
                  <span className="text-sm"><strong>Status:</strong> {project.status}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.keyMetrics.map((metric, i) => (
                  <div key={i} className="text-center p-4 bg-brand-accent/10 rounded-lg border border-brand-accent/20">
                    <div className="text-2xl font-bold text-brand-primary">{metric.value}</div>
                    <div className="text-sm text-brand-secondary">{metric.label}</div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Challenge */}
              <div>
                <h4 className="text-lg font-semibold text-brand-primary mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Challenge
                </h4>
                <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
              </div>

              <Separator />

              {/* Solution */}
              <div>
                <h4 className="text-lg font-semibold text-brand-primary mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Solution & Approach
                </h4>
                <ul className="space-y-2">
                  {project.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-brand-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Results */}
              <div>
                <h4 className="text-lg font-semibold text-brand-primary mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Results & Impact
                </h4>
                <ul className="space-y-2">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology Stack */}
              <div className="pt-4">
                <h5 className="text-sm font-semibold text-gray-600 mb-2">Technology Stack:</h5>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-brand-primary/5 to-brand-accent/5 p-8 rounded-lg border border-brand-accent/10">
        <h2 className="text-xl font-semibold text-brand-primary mb-4">Strategic Impact Philosophy</h2>
        <p className="text-brand-secondary leading-relaxed">
          These strategic projects showcase innovative solutions to complex security and sovereignty
          challenges, delivered with rapid turnaround times and tangible business outcomes. Each initiative
          demonstrates the ability to navigate complex stakeholder environments while delivering
          measurable value through cutting-edge technology implementation.
        </p>
      </div>
    </div>
  );
};

export default StrategicProjects;
