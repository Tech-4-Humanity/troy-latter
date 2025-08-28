import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Envato Strategic Path Diagrams
        </h2>
        <p className="text-lg text-muted-foreground">
          B Corp + Community-First Implementation Plans
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            onClick={() => setActiveTab(tab.id)}
            className="text-sm font-medium"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Path Content */}
      <Card className="animate-fade-in">
        <CardContent className="p-8">
          {/* Path Header */}
          <div className="text-center mb-8 border-b pb-6">
            <h3 className="text-2xl font-bold mb-2">{currentPath.title}</h3>
            <p className="text-muted-foreground mb-4">{currentPath.subtitle}</p>
            <Badge className={`${currentPath.scoreClass} text-white font-bold text-lg px-4 py-2`}>
              Final Score: {currentPath.score}
            </Badge>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Implementation Flow */}
            <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-blue-500">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
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
            <div className="bg-muted/50 rounded-xl p-6 border-l-4 border-emerald-500">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
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
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
              🛡️ Risk Mitigation
            </h4>
            <p className="text-sm text-red-700">{currentPath.risk}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PathDiagrams;