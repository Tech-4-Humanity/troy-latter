
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Shield, Zap, Heart, Globe, Users } from 'lucide-react';

const IndustryExpertise = () => {
  const industries = [
    {
      icon: Shield,
      title: "Government & Public Sector",
      image: "/lovable-uploads/5082db7f-2070-4c23-baa2-647e9d5b8818.png",
      description: "Leading digital transformation across federal, state, and local government agencies",
      expertise: [
        "National security and defence technology systems",
        "Smart city infrastructure and IoT deployments",
        "Citizen service digitization and accessibility",
        "Regulatory compliance and data governance",
        "Cross-border collaboration and interoperability"
      ],
      projects: "$2B+ in government transformation projects across APAC"
    },
    {
      icon: Building,
      title: "Financial Services",
      image: "/lovable-uploads/db7906e5-94ae-461a-a914-e3ca5ba5b126.png",
      description: "Modernizing core banking systems and enabling digital-first customer experiences",
      expertise: [
        "Core banking system modernization",
        "Real-time payments and blockchain integration",
        "Risk management and fraud detection systems",
        "Regulatory technology and compliance automation",
        "Customer journey optimization and personalization"
      ],
      projects: "Led transformation for 15+ financial institutions"
    },
    {
      icon: Zap,
      title: "Telecommunications",
      image: "/lovable-uploads/81cbb272-6a07-41e1-8167-796bc17aa764.png",
      description: "Network modernization and 5G infrastructure deployment strategies",
      expertise: [
        "5G network architecture and edge computing",
        "Network function virtualization (NFV)",
        "Customer experience platforms and self-service",
        "IoT connectivity and device management",
        "Revenue optimization and new service models"
      ],
      projects: "Orchestrated $500M+ in telco infrastructure upgrades"
    }
  ];

  const capabilities = [
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description: "Digital health platforms, telemedicine, and connected medical devices"
    },
    {
      icon: Globe,
      title: "Smart Cities & Infrastructure",
      description: "Connected infrastructure, sustainability platforms, and citizen engagement"
    },
    {
      icon: Users,
      title: "Cross-Industry Innovation",
      description: "Technology transfer and best practice application across sectors"
    }
  ];

  return (
    <div className="animate-fade-in space-y-12">
      <PageTitle title="Industry Expertise & Sector Leadership" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-primary to-[#1a2332] text-white py-16 rounded-2xl overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cross-Sector Technology Leadership</h2>
              <p className="text-lg text-gray-200 mb-6">
                15+ years driving digital transformation across critical infrastructure sectors. 
                Deep understanding of industry-specific challenges, regulatory requirements, and 
                technology adoption patterns.
              </p>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-semibold mb-3">Sector Impact</h3>
                <ul className="text-sm space-y-2">
                  <li>• $3B+ in enterprise transformation value delivered</li>
                  <li>• 50+ organizations across government, finance, and telco</li>
                  <li>• 10 ASEAN countries with cross-border project experience</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/0802b80f-8d0e-4e6c-b22c-90790f6ab929.png" 
                alt="Industry Innovation Leadership" 
                className="w-80 h-64 rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Industries */}
      <div className="space-y-12">
        <h2 className="text-3xl font-bold text-brand-primary text-center">Core Industry Sectors</h2>
        
        {industries.map((industry, index) => (
          <Card key={index} className="overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className={`grid md:grid-cols-${index % 2 === 0 ? '2' : '2'} gap-0`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={industry.image} 
                    alt={industry.title} 
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className={`p-10 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-primary">{industry.title}</h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-brand-primary mb-3">Key Expertise Areas</h4>
                    <ul className="space-y-2">
                      {industry.expertise.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-brand-accent mr-2 mt-1">▪</span>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
                    <span className="text-sm font-medium text-brand-primary">{industry.projects}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Capabilities */}
      <div>
        <h2 className="text-2xl font-bold text-brand-primary mb-8 text-center">Additional Sector Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-3">{capability.title}</h3>
                <p className="text-gray-700 text-sm">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
