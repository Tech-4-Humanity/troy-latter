import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Award, Users, Building, Zap, Globe, Target } from 'lucide-react';

const ExecutiveProfile = () => {
  const contactInfo = [
    { icon: Mail, label: 'troy.latter@gmail.com', href: 'mailto:troy.latter@gmail.com' },
    { icon: Phone, label: '+61 424 882 136', href: 'tel:+61424882136' },
    { icon: Linkedin, label: 'linkedin.com/in/theinnovater', href: 'https://linkedin.com/in/theinnovater' },
  ];

  const achievements = [
    "$3B+ Enterprise Transformation: Orchestrated digital transformation across government, financial services, and telecommunications sectors",
    "$350M+ Revenue Generation: Created new sales channels and GTM strategies resulting in annual oversales across government and enterprise sectors",
    "Multi-Cloud Architecture Leadership: Led Salesforce-adjacent transformations integrating AWS, Azure, Snowflake, and enterprise data platforms for 40+ organizations",
    "CIO Network & Influence: Established relationships with 200+ senior technology executives across APAC through advisory roles and strategic consulting",
    "Sales Enablement Success: Developed and delivered 50+ technical workshops, improving solution attachment rates by 300% YoY",
    "Digital Transformation at Scale: Orchestrated $100M+ projects across 10 ASEAN countries, achieving 90%+ stakeholder satisfaction",
    "AI & Data Strategy: Pioneered AI-enabled government solutions serving millions of citizens through connected ecosystems"
  ];

  const currentRoles = [
    {
      title: "Chief Technology Officer & Strategic Foresight",
      company: "Unisys Corporation",
      period: "January 2024 - March 2025",
      highlights: [
        "Advised 15+ government CIOs on AI-enabled transformation strategies, resulting in $60M+ pipeline growth",
        "Developed industry-specific value propositions for public sector technology leaders",
        "Collaborated with sales teams to deliver contracted cloud services, contributing to 45% increase in service revenues"
      ]
    },
    {
      title: "Global Capability Advisor - Principal Architect",
      company: "Amazon Web Services",
      period: "December 2019 - May 2023",
      highlights: [
        "Established partnerships with 50+ CIOs across government, healthcare, and financial services sectors",
        "Generated $100M+ in new business opportunities through strategic stakeholder relationships",
        "Led Cross River Rail project technical advisory, managing hundreds of millions in infrastructure investment"
      ]
    },
    {
      title: "APAC Innovation Advisor",
      company: "Oracle Corporation",
      period: "July 2016 - September 2019",
      highlights: [
        "Advocated culture of innovation resulting in 150% increase in customer growth and revenue across APAC",
        "Led Malaysian Government digital transformation across 150 medical facilities",
        "Guided Singapore Government's 100,000 smart light pole project"
      ]
    }
  ];

  const leadershipRoles = [
    {
      icon: Building,
      title: "Founder & CEO",
      organisation: "Tech 4 Humanity",
      period: "2023 - Present",
      description: "Leading humanitarian technology initiatives"
    },
    {
      icon: Users,
      title: "Board Member",
      organisation: "Queensland Government AI Hub",
      period: "2022 - Present",
      description: "Strategic advisor on AI policy, ethics, and adoption across public sector"
    },
    {
      icon: Award,
      title: "Australian Committee Member",
      organisation: "Standards Australia (BCI)",
      period: "2023 - Present",
      description: "Contributing to national Brain Computer Interface standards and assistive technology frameworks"
    },
    {
      icon: Target,
      title: "Advisory Board Convenor",
      organisation: "Robotics Australia Group",
      period: "2023",
      description: "Leading national robotics strategy and industry development initiatives"
    }
  ];

  return (
    <div className="animate-fade-in space-y-12">
      {/* Hero Section - Updated without CV download button */}
      <section className="relative bg-gradient-to-br from-gray-900 via-[#1a2332] to-gray-900 text-white py-20 rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-teal-500 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Rising APAC CTO & CIO Adviser
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Troy Latter</h1>
              <h2 className="text-2xl md:text-3xl text-blue-200 mb-6">CIO & CTO Leader | Strategic Technology Advisor</h2>
              
              <p className="text-lg text-gray-300 mb-6">
                Sydney, Australia | AGSVA NV2 Security Clearance
              </p>
              
              <div className="flex flex-wrap gap-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors">
                      <contact.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm">{contact.label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://pflisxkcxbzboxwidywf.supabase.co/storage/v1/object/public/testimonial-images/ok%20shot.png" 
                  alt="Troy Latter"
                  className="w-72 h-72 rounded-2xl shadow-2xl object-cover border-4 border-white/20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl blur-xl transform translate-x-4 translate-y-4 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section>
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-10">
            <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">Executive Summary</h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Rising APAC CTO and CIO Adviser. A strategic technology leader with 15+ years driving $3B+ in enterprise transformation across government, financial services, and telecommunications sectors. Proven track record building CIO/CTO networks and translating complex technical solutions into business value for C-suite executives.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Deep multi-cloud expertise (AWS, Azure, GCP) with hands-on experience in AI-enabled enterprise solutions, data architecture, and digital transformation at scale.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl border-l-4 border-blue-500">
                <h3 className="font-semibold text-brand-primary mb-4 text-xl">Core Value Proposition</h3>
                <p className="text-gray-700 leading-relaxed">
                  Uniquely positioned to bridge the gap between technical innovation and business outcomes, with established relationships across 200+ CIOs/CTOs in APAC and proven ability to mobilize sales teams around executive-level value propositions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Key Achievements */}
      <section>
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-brand-primary text-center">Key Achievements</CardTitle>
          </CardHeader>
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start group">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-2 group-hover:scale-125 transition-transform"></div>
                  <p className="text-gray-700 leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Professional Experience */}
      <section>
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-brand-primary text-center">Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="p-10">
            <div className="space-y-10">
              {currentRoles.map((role, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-8 hover:border-teal-500 transition-colors">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-brand-primary">{role.title}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{role.company}</p>
                    <p className="text-gray-600">{role.period}</p>
                  </div>
                  <ul className="space-y-3">
                    {role.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <Zap className="h-5 w-5 text-teal-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Current Leadership Roles */}
      <section>
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-brand-primary text-center">Current Leadership Roles</CardTitle>
          </CardHeader>
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-8">
              {leadershipRoles.map((role, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all group">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <role.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-brand-primary">{role.title}</h4>
                      <p className="text-blue-600 font-semibold">{role.organisation}</p>
                      <p className="text-sm text-gray-600 mb-2">{role.period}</p>
                      <p className="text-gray-700 text-sm">{role.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Certifications & Credentials */}
      <section>
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-brand-primary text-center">Certifications & Credentials</CardTitle>
          </CardHeader>
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border border-blue-200">
                <h4 className="text-lg font-bold text-brand-primary mb-4">Cloud Platforms</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Award className="h-4 w-4 text-blue-500 mr-2" /> AWS Solutions Architect</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-blue-500 mr-2" /> Azure AI Engineer</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-blue-500 mr-2" /> Google Cloud Architect</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-blue-500 mr-2" /> Oracle Cloud</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-teal-50 to-white p-6 rounded-xl border border-teal-200">
                <h4 className="text-lg font-bold text-brand-primary mb-4">AI & ML Platforms</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Award className="h-4 w-4 text-teal-500 mr-2" /> OpenAI</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-teal-500 mr-2" /> Claude (Anthropic)</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-teal-500 mr-2" /> Hugging Face</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-teal-500 mr-2" /> NVIDIA NIM</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-teal-500 mr-2" /> Snowflake</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-teal-500 mr-2" /> Databricks</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl border border-purple-200">
                <h4 className="text-lg font-bold text-brand-primary mb-4">Agentic Frameworks</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Award className="h-4 w-4 text-purple-500 mr-2" /> LangChain</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-purple-500 mr-2" /> LangGraph</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-purple-500 mr-2" /> Semantic Kernel</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-purple-500 mr-2" /> MCP Practitioner</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-white p-6 rounded-xl border border-green-200">
                <h4 className="text-lg font-bold text-brand-primary mb-4">Automation & Integration</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Award className="h-4 w-4 text-green-500 mr-2" /> n8n</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-green-500 mr-2" /> Make</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-green-500 mr-2" /> Pipedream</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-green-500 mr-2" /> Supabase</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-green-500 mr-2" /> Relevance AI</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-green-500 mr-2" /> GitHub Copilot</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-200">
                <h4 className="text-lg font-bold text-brand-primary mb-4">AI Governance & Ethics</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Award className="h-4 w-4 text-orange-500 mr-2" /> Responsible AI Governance</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-orange-500 mr-2" /> AI Ethics and Policy</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-orange-500 mr-2" /> Data Privacy and Security</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                <h4 className="text-lg font-bold text-brand-primary mb-4">Delivery Methodologies</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><Award className="h-4 w-4 text-gray-500 mr-2" /> PRINCE2</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-gray-500 mr-2" /> Prosci ADKAR</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-gray-500 mr-2" /> ITIL</li>
                  <li className="flex items-center"><Award className="h-4 w-4 text-gray-500 mr-2" /> TOGAF</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ExecutiveProfile;
