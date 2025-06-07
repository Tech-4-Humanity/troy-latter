
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, DollarSign, Building, Award, Globe, Zap, Target } from 'lucide-react';

const Index = () => {
  const keyMetrics = [
    {
      icon: DollarSign,
      value: "$3B+",
      label: "Enterprise Transformation",
      description: "Led digital transformation projects"
    },
    {
      icon: Users,
      value: "200+",
      label: "CIO/CTO Network",
      description: "APAC senior technology executives"
    },
    {
      icon: Building,
      value: "$350M+",
      label: "Revenue Generated",
      description: "Through strategic sales enablement"
    },
    {
      icon: Globe,
      value: "10+",
      label: "ASEAN Countries",
      description: "Cross-border project delivery"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Former APAC CTO",
      description: "Led technology strategy across Asia-Pacific region",
      color: "bg-blue-500",
      image: "/lovable-uploads/5082db7f-2070-4c23-baa2-647e9d5b8818.png"
    },
    {
      icon: Zap,
      title: "AI & Digital Innovation",
      description: "Pioneered AI-enabled government solutions for millions",
      color: "bg-green-500",
      image: "/lovable-uploads/db7906e5-94ae-461a-a914-e3ca5ba5b126.png"
    },
    {
      icon: Target,
      title: "Sales Excellence",
      description: "300% YoY improvement in solution attachment rates",
      color: "bg-purple-500",
      image: "/lovable-uploads/81cbb272-6a07-41e1-8167-796bc17aa764.png"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section with Professional Background */}
      <div className="relative bg-gradient-to-br from-[#0A101E] via-[#1a2332] to-[#0f1b2e] text-white px-8 py-24 md:py-32 text-center -mt-8 mx-[-24px] overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-teal-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                Former APAC CTO & CIO Adviser
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Troy Latter
              </h1>
              
              <h2 className="text-2xl md:text-4xl font-light mb-8 text-blue-200">
                Vice President | Strategic Technology Advisor
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                Transforming enterprises through strategic technology leadership. 
                <span className="text-teal-300 font-semibold"> 15+ years</span> driving 
                <span className="text-blue-300 font-semibold"> $3B+ transformations</span> across government, 
                financial services, and telecommunications.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-lg px-8 py-6 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all" asChild>
                  <Link to="/executive-profile">
                    View Executive Profile
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0A101E] text-lg px-8 py-6 h-auto rounded-lg transition-all" asChild>
                  <Link to="/core-competencies">
                    Explore Capabilities
                  </Link>
                </Button>
              </div>
              
              <div className="text-lg text-gray-300 flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                Sydney, Australia | AGSVA NV2 Security Clearance
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/0802b80f-8d0e-4e6c-b22c-90790f6ab929.png" 
                  alt="Enterprise Technology Leadership" 
                  className="w-80 h-80 mx-auto rounded-2xl shadow-2xl object-cover border-4 border-white/20"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl blur-xl transform translate-x-4 translate-y-4"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Key Metrics with Supporting Image */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-primary mb-4">Impact & Achievement</h2>
          <p className="text-xl text-gray-600">Proven track record of delivering transformational results</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <metric.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-brand-primary mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <img 
            src="/lovable-uploads/18765b1c-6ca0-4c50-81c2-95882a6f9fa4.png" 
            alt="Digital Transformation Network" 
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
      
      {/* Key Achievements with Industry Images */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-primary mb-4">Core Expertise Areas</h2>
          <p className="text-xl text-gray-600">Strategic technology leadership across multiple domains</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 ${achievement.color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <achievement.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-brand-primary mb-3">{achievement.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Executive Summary with Professional Photo */}
      <div className="max-w-6xl mx-auto">
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-brand-primary mb-6">Executive Summary</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A strategic technology leader with proven track record building CIO/CTO networks and translating complex technical solutions into business value for C-suite executives. Deep multi-cloud expertise (AWS, Azure, GCP) with hands-on experience in AI-enabled enterprise solutions, data architecture, and digital transformation at scale.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h3 className="font-semibold text-brand-primary mb-3">Core Value Proposition</h3>
                  <p className="text-gray-700">
                    Uniquely positioned to bridge the gap between technical innovation and business outcomes, with established relationships across 200+ CIOs/CTOs in APAC and proven ability to mobilize sales teams around executive-level value propositions.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/83bdd2b0-6ff7-412c-983a-f1baf27538c4.png" 
                    alt="Troy Latter" 
                    className="w-48 h-48 mx-auto rounded-2xl shadow-lg object-cover border-4 border-gray-100 mb-4"
                  />
                  <p className="text-sm text-gray-600 font-medium">Troy Latter</p>
                  <p className="text-xs text-gray-500">VP Strategic Technology Advisor</p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-brand-primary mb-2">Current Leadership Roles</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Board Member - Queensland Government AI Hub</li>
                    <li>• Australian Committee Member - Standards Australia (BCI)</li>
                    <li>• Advisory Board Convenor - Robotics Australia Group</li>
                    <li>• Founder & CEO - Tech 4 Humanity</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <h4 className="font-semibold text-brand-primary mb-2">Key Certifications</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• AWS Professional Solutions Architect</li>
                    <li>• Azure AI Engineer Associate</li>
                    <li>• GCP Certified</li>
                    <li>• TOGAF & IT4IT Foundations</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Enhanced CTA Section */}
      <div className="relative bg-gradient-to-r from-brand-primary to-[#1a2332] text-white py-20 px-8 mx-[-24px] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-16 h-16 bg-teal-500 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Technology Strategy?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Connect with a proven technology leader who bridges innovation and business outcomes
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white text-lg px-10 py-6 h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all" asChild>
              <Link to="/executive-profile">
                View Executive Profile
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-primary text-lg px-10 py-6 h-auto rounded-lg transition-all" asChild>
              <Link to="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
