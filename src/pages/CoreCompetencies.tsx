
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Users, TrendingUp, Settings, Briefcase } from 'lucide-react';

const CoreCompetencies = () => {
  const competencies = [
    {
      icon: Users,
      title: "Strategic Leadership",
      skills: [
        "CIO advisory and stakeholder management",
        "Digital transformation strategy development",
        "Technology roadmap planning and execution",
        "Executive relationship building (200+ CIO/CTO network)",
        "Change management and organizational transformation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Sales Excellence",
      skills: [
        "Enterprise account management and growth",
        "C-suite relationship building and influence",
        "Technical sales enablement and team development",
        "GTM strategy creation and execution",
        "Revenue generation ($350M+ track record)"
      ]
    },
    {
      icon: Settings,
      title: "Solution Architecture",
      skills: [
        "Multi-cloud integration (AWS, Azure, GCP)",
        "AI/ML platform implementation and strategy",
        "Enterprise data architecture and governance",
        "Microservices and API-first design",
        "Security frameworks and compliance"
      ]
    },
    {
      icon: Briefcase,
      title: "Industry Expertise",
      skills: [
        "Government and public sector transformation",
        "Telecommunications infrastructure and innovation",
        "Financial services technology modernization",
        "Healthcare and critical infrastructure",
        "Cross-industry digital strategy consulting"
      ]
    }
  ];

  const technicalSkills = {
    "Cloud Platforms & Architecture": [
      "AWS Professional Solutions Architect (EC2, S3, Lambda, SageMaker, Bedrock)",
      "Microsoft Azure AI Engineer Associate (Functions, ML Studio, Cognitive Services)",
      "Google Cloud Platform Certified (BigQuery, Kubernetes Engine, Vertex AI)",
      "Oracle Cloud Infrastructure (Autonomous Database, Analytics Cloud)",
      "Multi-cloud strategy, hybrid architectures, cost optimization"
    ],
    "Data & AI Technologies": [
      "Data Platforms: Snowflake, Databricks, Supabase, Amazon Redshift, Azure Synapse",
      "AI/ML Frameworks: TensorFlow, PyTorch, Semantic Kernel, LangChain, OpenAI APIs",
      "Analytics Tools: Tableau, Power BI, Looker, Apache Spark, Kafka",
      "Data Engineering: ETL/ELT processes, data lakes, real-time streaming"
    ],
    "Enterprise Architecture": [
      "TOGAF, IT4IT, microservices, event-driven architecture",
      "API Management: REST, GraphQL, API gateways, security",
      "DevOps & CI/CD: Jenkins, GitLab, Docker, Kubernetes, Terraform",
      "Security: OAuth, SAML, zero trust, identity management"
    ],
    "Emerging Technologies": [
      "Brain-Computer Interfaces: BCI standards, assistive technology",
      "IoT & Edge Computing: Sensor networks, industrial IoT, smart city infrastructure",
      "Robotics & Automation: ROS, industrial automation, autonomous systems",
      "Spatial Computing: AR/VR platforms, digital twins, metaverse technologies"
    ]
  };

  return (
    <div className="animate-fade-in">
      <PageTitle title="Core Competencies & Technical Expertise" />
      
      {/* Core Competencies Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {competencies.map((competency, index) => (
          <Card key={index} className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <competency.icon className="h-8 w-8 text-brand-accent mr-3" />
                <h2 className="text-xl font-bold text-brand-primary">{competency.title}</h2>
              </div>
              <ul className="space-y-3">
                {competency.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <span className="text-brand-accent mr-3 mt-1 text-sm">▪</span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technical Skills Detailed */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-brand-primary mb-6">Technical Skills & Certifications</h2>
        
        {Object.entries(technicalSkills).map(([category, skills], index) => (
          <Card key={index}>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-brand-primary mb-4">{category}</h3>
              <ul className="grid md:grid-cols-2 gap-3">
                {skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start">
                    <span className="text-brand-accent mr-3 mt-1 text-sm">▪</span>
                    <span className="text-gray-700 text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Professional Certifications */}
      <Card className="mt-8">
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">Professional Certifications</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "AWS Professional Solutions Architect",
              "Azure AI Engineer Associate", 
              "GCP Certified",
              "PRINCE2 Practitioner",
              "Prosci ADKAR Change Management",
              "ITIL v3",
              "TOGAF Foundations",
              "IT4IT Foundations",
              "Science of Happiness (Yale)"
            ].map((cert, index) => (
              <div key={index} className="bg-brand-light p-4 rounded-lg text-center">
                <span className="text-sm font-medium text-brand-primary">{cert}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CoreCompetencies;
