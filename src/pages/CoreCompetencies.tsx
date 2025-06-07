import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Users, TrendingUp, Settings, Briefcase, Award, Target } from 'lucide-react';

const CoreCompetencies = () => {
  const competencies = [
    {
      icon: Users,
      title: "Strategic Leadership",
      image: "/lovable-uploads/7e6000f2-9818-40fc-9191-2549b09f49da.png",
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
      image: "/lovable-uploads/24ae2c57-fff3-40ab-88f1-3ad34c248fc1.png",
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
      image: "/lovable-uploads/f9deef88-c299-4f35-ad6f-4585c24d056a.png",
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
      image: "/lovable-uploads/99250b03-5ffe-4fee-a51d-8f8636ad4975.png",
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
    <div className="animate-fade-in space-y-12">
      <PageTitle title="Core Competencies & Technical Expertise" />
      
      {/* Hero Section with Background */}
      <div className="bg-gradient-to-br from-brand-primary to-[#1a2332] text-white py-16 rounded-2xl overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technology Leadership Expertise</h2>
              <p className="text-lg text-gray-200 mb-6">
                Comprehensive technical and leadership capabilities spanning cloud architecture, 
                AI/ML implementation, enterprise sales, and strategic transformation across 
                multiple industry sectors.
              </p>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-semibold mb-3">Competency Highlights</h3>
                <ul className="text-sm space-y-2">
                  <li>• 15+ AWS, Azure, GCP certifications</li>
                  <li>• $350M+ in enterprise sales generated</li>
                  <li>• 200+ C-level relationships across APAC</li>
                  <li>• 50+ digital transformation projects</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/f9deef88-c299-4f35-ad6f-4585c24d056a.png" 
                alt="Technology Architecture and Solutions" 
                className="w-80 h-64 rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Strategic Competencies with Side-by-Side Layout */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-brand-primary text-center">Strategic Competencies</h2>
        
        {competencies.map((competency, index) => (
          <Card key={index} className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className={`grid md:grid-cols-2 gap-0`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={competency.image} 
                    alt={competency.title} 
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className={`p-10 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <competency.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-primary">{competency.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {competency.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technical Skills Detailed */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-brand-primary text-center">Technical Skills & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                    {index === 0 && <Settings className="h-6 w-6 text-white" />}
                    {index === 1 && <Target className="h-6 w-6 text-white" />}
                    {index === 2 && <Award className="h-6 w-6 text-white" />}
                    {index === 3 && <Briefcase className="h-6 w-6 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary">{category}</h3>
                </div>
                <ul className="space-y-3">
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
      </div>

      {/* Professional Certifications */}
      <Card className="overflow-hidden">
        <CardContent className="p-10">
          <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center">Professional Certifications</h2>
          <div className="grid md:grid-cols-4 gap-4">
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
              <div key={index} className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg text-center border border-blue-100 hover:shadow-md transition-all">
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
