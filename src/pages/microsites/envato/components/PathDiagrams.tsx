import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Target, TrendingUp, Users, Brain, Lightbulb } from 'lucide-react';

const PathDiagrams = () => {
  const [activeTab, setActiveTab] = useState('path2');

  const pathData = {
    path2: {
      title: "Path 2: Creator Community Platform",
      subtitle: "Multi-stream creator economy with feeds, subscriptions, and workshops",
      score: "3.98/5",
      scoreClass: "bg-emerald-500",
      implementation: [
        { number: 1, title: "Creator Storefronts", desc: "Launch personal creator pages with subscription models" },
        { number: 2, title: "Feed Algorithms", desc: "AI-powered creator-audience matching and discovery" },
        { number: 3, title: "Workshop Platform", desc: "Live courses with revenue sharing and certifications" },
        { number: 4, title: "Community Tools", desc: "Creator collaboration, mentorship, and knowledge sharing" }
      ],
      revenue: [
        { icon: "$", title: "Creator Subscriptions", desc: "$5-50/month recurring revenue per subscriber" },
        { icon: "$", title: "Workshop Fees", desc: "Premium courses with certification programs" },
        { icon: "$", title: "Ad Revenue", desc: "Sponsored content and brand partnerships" },
        { icon: "$", title: "Premium Assets", desc: "Exclusive content for subscribers and workshop attendees" }
      ],
      metrics: [
        { value: "5.0/5", label: "Community Impact" },
        { value: "4.0/5", label: "B Corp Alignment" },
        { value: "$500M+", label: "TAM Potential" },
        { value: "70%", label: "Resource Allocation" }
      ],
      stakeholders: [
        { icon: "🎨", title: "Creators", desc: "Direct monetization & audience building" },
        { icon: "👥", title: "Community", desc: "Knowledge sharing & collaboration" },
        { icon: "📈", title: "Investors", desc: "Network effects & recurring revenue" },
        { icon: "🌱", title: "Society", desc: "Creative economy democratization" }
      ],
      risk: "Platform dependency risk mitigated through direct creator-audience relationships. Competition with TikTok/YouTube addressed by focusing on professional creators and B2B workshops rather than entertainment content."
    },
    path3: {
      title: "Path 3: Education Vertical Expansion",
      subtitle: "Sector-specific platforms for education, gaming, and retail",
      score: "3.43/5",
      scoreClass: "bg-amber-500",
      implementation: [
        { number: 1, title: "Education Pilot", desc: "Partner with universities for courseware creation" },
        { number: 2, title: "Creator Certification", desc: "Educational content quality standards and verification" },
        { number: 3, title: "Gaming Assets", desc: "Unreal Engine packs and indie game resources" },
        { number: 4, title: "Retail Integration", desc: "E-commerce ad sets and marketing templates" }
      ],
      revenue: [
        { icon: "🎓", title: "Education ($300B)", desc: "Universities, online courses, corporate training" },
        { icon: "🎮", title: "Gaming ($200B)", desc: "Indie developers, mobile games, AR/VR content" },
        { icon: "🛒", title: "Retail Marketing", desc: "E-commerce businesses, social commerce, advertising" },
        { icon: "🏢", title: "Corporate L&D", desc: "Enterprise training, skill development, onboarding" }
      ],
      metrics: [
        { value: "3.5/5", label: "Community Impact" },
        { value: "3.6/5", label: "B Corp Alignment" },
        { value: "$500B+", label: "Combined TAM" },
        { value: "20%", label: "Resource Allocation" }
      ],
      stakeholders: [
        { icon: "🎓", title: "Educators", desc: "Quality courseware creation tools" },
        { icon: "🎮", title: "Developers", desc: "Game-ready asset ecosystems" },
        { icon: "🛒", title: "Retailers", desc: "Marketing template automation" },
        { icon: "📊", title: "Enterprises", desc: "Training & onboarding efficiency" }
      ],
      risk: "Industry incumbent competition addressed through creator specialization and Envato's asset library advantage. Long sales cycles mitigated by starting with individual educators before institutional sales."
    },
    path1: {
      title: "Path 1: Trusted AI Infrastructure",
      subtitle: "Enterprise ARR engine with compliance and governance tools",
      score: "3.40/5",
      scoreClass: "bg-blue-500",
      implementation: [
        { number: 1, title: "C2PA Integration", desc: "Content provenance and AI verification systems" },
        { number: 2, title: "Compliance Dashboard", desc: "Enterprise SSO, audit trails, usage tracking" },
        { number: 3, title: "Asset Manifests", desc: "Detailed lineage and rights management" },
        { number: 4, title: "Creative OS", desc: "Integrated workflow platform for enterprises" }
      ],
      revenue: [
        { icon: "🎯", title: "Fortune 500", desc: "Large enterprise compliance requirements" },
        { icon: "🏛️", title: "Government", desc: "Public sector transparency and audit needs" },
        { icon: "📺", title: "Media/Advertising", desc: "Brand safety and content verification" },
        { icon: "⚖️", title: "Legal/Finance", desc: "Regulatory compliance and risk management" }
      ],
      metrics: [
        { value: "2.75/5", label: "Community Impact" },
        { value: "3.2/5", label: "B Corp Alignment" },
        { value: "$400M", label: "ARR Potential" },
        { value: "15%", label: "Resource Allocation" }
      ],
      stakeholders: [
        { icon: "🏢", title: "Enterprises", desc: "Compliance & governance solutions" },
        { icon: "⚖️", title: "Legal Teams", desc: "Risk mitigation & audit trails" },
        { icon: "🛡️", title: "Security", desc: "Content verification & provenance" },
        { icon: "📊", title: "Compliance", desc: "Regulatory requirement fulfillment" }
      ],
      risk: "Adobe/Canva competition addressed through specialized compliance focus and system integrator partnerships. Creator community disconnect managed by positioning as revenue stability foundation."
    },
    path4: {
      title: "Path 4: API-First Creative Backend",
      subtitle: "Developer-focused platform for SaaS and AI tool integration",
      score: "3.15/5",
      scoreClass: "bg-slate-500",
      implementation: [
        { number: 1, title: "Core APIs", desc: "Search, licensing, and asset delivery endpoints" },
        { number: 2, title: "Developer Portal", desc: "Documentation, SDKs, and integration tools" },
        { number: 3, title: "Workflow APIs", desc: "Advanced composition and automation tools" },
        { number: 4, title: "Default Backend", desc: "Embedded creative infrastructure for SaaS tools" }
      ],
      revenue: [
        { icon: "🛠️", title: "SaaS Platforms", desc: "Marketing tools, website builders, design software" },
        { icon: "🤖", title: "AI Tools", desc: "Content generation, image processing, automation" },
        { icon: "📱", title: "Mobile Apps", desc: "Creative apps, social tools, productivity software" },
        { icon: "🌐", title: "Web Platforms", desc: "CMS systems, e-commerce, social networks" }
      ],
      metrics: [
        { value: "2.25/5", label: "Community Impact" },
        { value: "2.8/5", label: "B Corp Alignment" },
        { value: "$500M", label: "ARR Potential" },
        { value: "0%", label: "Resource Allocation" }
      ],
      stakeholders: [
        { icon: "👨‍💻", title: "Developers", desc: "API access & integration tools" },
        { icon: "🏢", title: "SaaS Companies", desc: "Creative backend infrastructure" },
        { icon: "🤖", title: "AI Platforms", desc: "Content generation capabilities" },
        { icon: "📱", title: "App Builders", desc: "Embedded creative services" }
      ],
      risk: "Platform competition risk addressed through creative specialization. Creator commoditization risk makes this incompatible with B Corp community obligations - deprioritized in current strategy."
    },
    path5: {
      title: "Path 5: Immersive AI Content Substrate",
      subtitle: "3D, VR, and agentic AI content for the metaverse economy",
      score: "2.95/5",
      scoreClass: "bg-rose-500",
      implementation: [
        { number: 1, title: "3D Asset Kits", desc: "Starter collection of VR/AR ready assets" },
        { number: 2, title: "World Builder Tools", desc: "Metaverse environment creation platform" },
        { number: 3, title: "Agent Frameworks", desc: "AI personality and behavior systems" },
        { number: 4, title: "Synthetic Substrate", desc: "Full immersive content generation platform" }
      ],
      revenue: [
        { icon: "🥽", title: "VR Platforms", desc: "Virtual reality content ecosystems" },
        { icon: "🎮", title: "Gaming Metaverse", desc: "Virtual world asset marketplaces" },
        { icon: "🏢", title: "Enterprise VR", desc: "Training and collaboration environments" },
        { icon: "🎬", title: "Content Creation", desc: "3D animation and immersive media" }
      ],
      metrics: [
        { value: "3.5/5", label: "Community Impact" },
        { value: "2.6/5", label: "B Corp Alignment" },
        { value: "$100B+", label: "Future TAM" },
        { value: "10%", label: "Resource Allocation" }
      ],
      stakeholders: [
        { icon: "🎮", title: "Game Devs", desc: "Metaverse content creation" },
        { icon: "🏢", title: "Enterprises", desc: "VR training environments" },
        { icon: "🎨", title: "3D Artists", desc: "Immersive content opportunities" },
        { icon: "🔬", title: "Researchers", desc: "AI agent experimentation" }
      ],
      risk: "Market timing risk for widespread VR adoption. High technical complexity and uncertain monetization models. Positioned as future optionality rather than near-term priority."
    }
  };

  const tabs = [
    { id: 'path2', label: 'Path 2: Creator Network (3.98)', active: true },
    { id: 'path3', label: 'Path 3: Education Vertical (3.43)' },
    { id: 'path1', label: 'Path 1: Infrastructure (3.40)' },
    { id: 'path4', label: 'Path 4: Platform API (3.15)' },
    { id: 'path5', label: 'Path 5: Immersive AI (2.95)' }
  ];

  const currentPath = pathData[activeTab as keyof typeof pathData];

  return (
    <div className="space-y-8">
      {/* Enhanced Header with Gradient */}
      <div className="relative text-center py-12 bg-gradient-to-r from-envato-green-50 via-white to-envato-green-50 rounded-3xl border border-envato-green-200">
        <div className="absolute top-4 left-6">
          <MapPin className="h-6 w-6 text-envato-green-600" />
        </div>
        <div className="absolute top-4 right-6">
          <Target className="h-6 w-6 text-envato-green-600" />
        </div>
        
        <h2 className="text-4xl font-bold bg-gradient-to-r from-envato-green-700 to-envato-green-500 bg-clip-text text-transparent mb-4">
          View Envato Strategic Paths
        </h2>
        <p className="text-xl text-envato-gray-700 mb-6 max-w-3xl mx-auto">
          Interactive analysis of strategic pathways combining B Corp values, community impact, and sustainable growth
        </p>
        
        {/* Instructions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 mx-auto max-w-4xl border border-envato-green-100 shadow-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="h-5 w-5 text-envato-green-600" />
            <span className="font-semibold text-envato-gray-800">How to Navigate</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-envato-gray-600">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-envato-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-envato-green-700">1</span>
              </div>
              <span>Select any strategic path below using the colored tabs</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-envato-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-envato-green-700">2</span>
              </div>
              <span>Review implementation flow, revenue streams, and stakeholder impact</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-envato-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-envato-green-700">3</span>
              </div>
              <span>Compare B Corp alignment scores and resource allocation recommendations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Tabs with Icons and Scores */}
      <div className="bg-white rounded-2xl p-6 border border-envato-green-100 shadow-sm">
        <div className="flex items-center justify-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-envato-green-600" />
          <span className="font-semibold text-envato-gray-800">Strategic Path Options (Ranked by Score)</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const pathScore = pathData[tab.id as keyof typeof pathData];
            const iconMap = {
              path1: Brain,
              path2: Users,
              path3: Target,
              path4: Lightbulb,
              path5: MapPin
            };
            const IconComponent = iconMap[tab.id as keyof typeof iconMap];
            
            return (
              <Button
                key={tab.id}
                variant={isActive ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`relative p-4 h-auto flex-col gap-2 transition-all duration-300 ${
                  isActive 
                    ? 'bg-envato-green-600 text-white border-envato-green-600 shadow-lg scale-105' 
                    : 'hover:bg-envato-green-50 hover:border-envato-green-300 text-envato-gray-700'
                }`}
              >
                <IconComponent className={`h-5 w-5 ${isActive ? 'text-white' : 'text-envato-green-600'}`} />
                <div className="text-center">
                  <div className="text-sm font-bold">Path {tab.id.slice(-1)}</div>
                  <div className={`text-xs ${isActive ? 'text-white/90' : 'text-envato-gray-500'}`}>
                    Score: {pathScore.score}
                  </div>
                </div>
                {index === 0 && (
                  <div className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    TOP
                  </div>
                )}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Enhanced Path Content */}
      <Card className="animate-fade-in border-envato-green-200 shadow-lg">
        <CardContent className="p-0">
          {/* Enhanced Path Header */}
          <div className="bg-gradient-to-r from-envato-green-600 to-envato-green-500 text-white p-8 rounded-t-lg">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-3">{currentPath.title}</h3>
              <p className="text-envato-green-100 mb-4 text-lg">{currentPath.subtitle}</p>
              <Badge className={`${currentPath.scoreClass} bg-white/20 backdrop-blur-sm text-white font-bold text-xl px-6 py-3 border border-white/30`}>
                Final Score: {currentPath.score}
              </Badge>
            </div>
          </div>
          
          <div className="p-8">

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Implementation Flow */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 shadow-sm">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-blue-800">
                  🚀 Implementation Flow
                </h4>
              <div className="space-y-4">
                {currentPath.implementation.map((step, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 border-l-3 border-blue-500 relative">
                    <div className="absolute -left-3 top-4 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>
                    <div className="ml-6">
                      <h5 className="font-semibold text-foreground mb-1">{step.title}</h5>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

              {/* Revenue Streams / Target Markets */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200 shadow-sm">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-emerald-800">
                  💰 {activeTab === 'path3' ? 'Target Markets' : 'Revenue Streams'}
                </h4>
              <div className="space-y-4">
                {currentPath.revenue.map((item, index) => (
                  <div key={index} className="bg-card rounded-lg p-4 border-l-3 border-emerald-500 relative">
                    <div className="absolute -left-3 top-4 bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                      {item.icon}
                    </div>
                    <div className="ml-6">
                      <h5 className="font-semibold text-foreground mb-1">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {currentPath.metrics.map((metric, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-4 text-center">
                <div className="text-xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Stakeholders */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {currentPath.stakeholders.map((stakeholder, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 text-center border border-primary/20">
                <div className="text-2xl mb-2">{stakeholder.icon}</div>
                <div className="font-semibold text-foreground mb-1">{stakeholder.title}</div>
                <div className="text-xs text-muted-foreground">{stakeholder.desc}</div>
              </div>
            ))}
          </div>

            {/* Risk Mitigation */}
            <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                🛡️ Risk Mitigation & Strategy
              </h4>
              <p className="text-red-700 leading-relaxed">{currentPath.risk}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PathDiagrams;