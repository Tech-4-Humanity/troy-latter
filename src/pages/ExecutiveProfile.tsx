
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Mail, Phone, Linkedin } from 'lucide-react';

const ExecutiveProfile = () => {
  const contactInfo = [
    { icon: Mail, label: 'troy.latter@gmail.com', href: 'mailto:troy.latter@gmail.com' },
    { icon: Phone, label: '+61 424 882 136', href: 'tel:+61424882136' },
    { icon: Linkedin, label: 'linkedin.com/in/theinnovater', href: 'https://linkedin.com/in/theinnovater' },
  ];

  const achievements = [
    "$350M+ Revenue Generation: Created new sales channels and GTM strategies resulting in annual oversales across government and enterprise sectors",
    "Multi-Cloud Architecture Leadership: Led Salesforce-adjacent transformations integrating AWS, Azure, Snowflake, and enterprise data platforms for 40+ organizations",
    "CIO Network & Influence: Established relationships with 200+ senior technology executives across APAC through advisory roles and strategic consulting",
    "Sales Enablement Success: Developed and delivered 50+ technical workshops, improving solution attachment rates by 300% YoY",
    "Digital Transformation at Scale: Orchestrated $100M+ projects across 10 ASEAN countries, achieving 90%+ stakeholder satisfaction",
    "AI & Data Strategy: Pioneered AI-enabled government solutions serving millions of citizens through connected ecosystems"
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="Executive Profile" />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-16 md:py-20 rounded-lg overflow-hidden mb-10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: "url('/lovable-uploads/42060213-a44a-4960-a413-f2f2798fbbce.png')", 
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Troy Latter</h1>
              <h2 className="text-2xl md:text-3xl text-gray-200 mb-6">Vice President | CIO & CTO Leader | Strategic Technology Advisor</h2>
              <p className="text-lg text-gray-300 mb-6">
                Sydney, Australia | AGSVA NV2 Security Clearance
              </p>
              <div className="flex flex-wrap gap-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <contact.icon className="h-4 w-4 mr-2" />
                    <span className="text-sm">{contact.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/83bdd2b0-6ff7-412c-983a-f1baf27538c4.png" 
                alt="Troy Latter" 
                className="w-64 h-64 rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="mb-12">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Executive Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Former APAC CTO and CIO Adviser. A strategic technology leader with 15+ years driving $3B+ in enterprise transformation across government, financial services, and telecommunications sectors. Proven track record building CIO/CTO networks and translating complex technical solutions into business value for C-suite executives. Deep multi-cloud expertise (AWS, Azure, GCP) with hands-on experience in AI-enabled enterprise solutions, data architecture, and digital transformation at scale.
            </p>
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="font-semibold text-brand-primary mb-3">Core Value Proposition</h3>
              <p className="text-gray-700">
                Uniquely positioned to bridge the gap between technical innovation and business outcomes, with established relationships across 200+ CIOs/CTOs in APAC and proven ability to mobilize sales teams around executive-level value propositions.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Key Achievements */}
      <section className="mb-12">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Key Achievements</h2>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-accent mr-3 mt-1">•</span>
                  <p className="text-gray-700">{achievement}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Download CV */}
      <section className="text-center">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Complete CV & Credentials</h2>
            <p className="text-gray-700 mb-6">
              Download my complete CV including detailed professional experience, certifications, and thought leadership portfolio.
            </p>
            <Button size="lg" className="bg-brand-accent hover:bg-brand-accent/90">
              <Download className="mr-2 h-5 w-5" />
              Download Full CV (PDF)
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ExecutiveProfile;
