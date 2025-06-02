
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, DollarSign, Building } from 'lucide-react';

const Index = () => {
  const keyMetrics = [
    {
      icon: DollarSign,
      value: "$350M+",
      label: "Revenue Generated"
    },
    {
      icon: Users,
      value: "200+",
      label: "CIO/CTO Network"
    },
    {
      icon: Building,
      value: "$3B+",
      label: "Enterprise Transformation"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="bg-[#0A101E] text-white px-8 py-20 md:py-24 text-center -mt-8 mx-[-24px]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Vice President | CIO & CTO Leader</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-gray-200">Strategic Technology Advisor</h2>
          
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold">TL</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Former APAC CTO and CIO Adviser with 15+ years driving enterprise transformation across government, financial services, and telecommunications sectors.
          </p>
          
          <div className="text-lg text-gray-300 mb-8">
            Sydney, Australia | AGSVA NV2 Security Clearance
          </div>
        </div>
      </div>
      
      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="text-center">
            <CardContent className="p-8">
              <metric.icon className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <div className="text-3xl font-bold text-brand-primary mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Executive Summary */}
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Executive Summary</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              A strategic technology leader with proven track record building CIO/CTO networks and translating complex technical solutions into business value for C-suite executives. Deep multi-cloud expertise (AWS, Azure, GCP) with hands-on experience in AI-enabled enterprise solutions, data architecture, and digital transformation at scale.
            </p>
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="font-semibold text-brand-primary mb-3">Core Value Proposition</h3>
              <p className="text-gray-700">
                Uniquely positioned to bridge the gap between technical innovation and business outcomes, with established relationships across 200+ CIOs/CTOs in APAC and proven ability to mobilize sales teams around executive-level value propositions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-brand-primary mb-6">Ready to Transform Your Technology Strategy?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#56A4E3] hover:bg-[#4290D3] text-white text-lg px-8 py-6 h-auto rounded-md" asChild>
            <Link to="/executive-profile">
              View Executive Profile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto rounded-md" asChild>
            <Link to="/core-competencies">
              Explore Capabilities
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
