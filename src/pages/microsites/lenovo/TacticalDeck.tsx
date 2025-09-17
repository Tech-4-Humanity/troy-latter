import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import { ChevronDown, ChevronUp, Users, Target, Zap, Shield, Building, Cog, Layers, DollarSign, Monitor, Laptop, Server, HardDrive, Settings, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { LenovoAdvisor } from '@/components/lenovo/LenovoAdvisor';

// Enhanced product data with comprehensive details
const productData = {
  'ThinkPad': {
    icon: Laptop,
    category: 'Endpoint Computing',
    description: 'Business laptops and mobile workstations for professionals',
    whatItDoes: 'Secure, reliable mobile computing for business users, executives, and mobile professionals',
    keyUseCases: [
      'Executive and management mobile computing',
      'Field worker and remote employee devices', 
      'Secure endpoint computing for regulated industries',
      'High-performance mobile workstations for creators'
    ],
    targetUsers: 'Business executives, knowledge workers, field technicians, creative professionals',
    ecosystemFit: 'Integrates with ThinkShield security platform, managed via Lenovo cloud services',
    competitiveEdge: 'Military-grade durability, comprehensive security features, spill-resistant keyboards',
    pricingModel: 'Purchase or TruScale lease options',
    relatedProducts: ['ThinkShield', 'TruScale', 'ThinkVision'],
    industryFit: ['Banking', 'Government', 'Healthcare', 'Education']
  },
  'ThinkStation': {
    icon: Cog,
    category: 'Professional Computing',
    description: 'Professional workstations for demanding applications',
    whatItDoes: 'High-performance desktop workstations for compute-intensive professional workflows',
    keyUseCases: [
      'CAD/CAM design and engineering',
      '3D rendering and animation',
      'Scientific computing and analysis',
      'Financial modeling and trading applications'
    ],
    targetUsers: 'Engineers, architects, data scientists, financial analysts, content creators',
    ecosystemFit: 'Pairs with ThinkVision professional displays, integrates with ThinkSystem infrastructure',
    competitiveEdge: 'ISV certifications, thermal management, tool-free serviceability',
    pricingModel: 'Purchase, lease, or TruScale consumption',
    relatedProducts: ['ThinkVision', 'ThinkSystem', 'TruScale'],
    industryFit: ['Banking', 'Government', 'Healthcare', 'Education']
  },
  'ThinkSystem': {
    icon: Server,
    category: 'Infrastructure',
    description: 'Servers and enterprise infrastructure',
    whatItDoes: 'Enterprise-grade servers and infrastructure for data centers and edge computing',
    keyUseCases: [
      'AI and machine learning workloads',
      'Database and application hosting',
      'Virtualization and cloud infrastructure',
      'High-performance computing clusters'
    ],
    targetUsers: 'IT administrators, data center managers, cloud architects',
    ecosystemFit: 'Foundation for ThinkAgile solutions, integrates with Lenovo storage and networking',
    competitiveEdge: 'Superior performance per watt, advanced thermal design, comprehensive management tools',
    pricingModel: 'Purchase, lease, or TruScale as-a-service',
    relatedProducts: ['ThinkAgile', 'TruScale', 'Storage'],
    industryFit: ['Banking', 'Government', 'Healthcare', 'Education']
  },
  'ThinkAgile': {
    icon: Layers,
    category: 'Infrastructure',
    description: 'Hyper-converged infrastructure and software-defined solutions',
    whatItDoes: 'Simplified, integrated infrastructure combining compute, storage, and networking',
    keyUseCases: [
      'Virtual desktop infrastructure (VDI)',
      'Cloud-native application platforms',
      'Edge computing deployments',
      'Disaster recovery and backup'
    ],
    targetUsers: 'IT architects, virtualization administrators, cloud platform teams',
    ecosystemFit: 'Built on ThinkSystem hardware, managed through unified console',
    competitiveEdge: 'Single-vendor support, pre-validated configurations, rapid deployment',
    pricingModel: 'Integrated solutions via purchase or TruScale',
    relatedProducts: ['ThinkSystem', 'TruScale', 'SE350'],
    industryFit: ['Banking', 'Government', 'Healthcare', 'Education']
  },
  'ThinkCentre': {
    icon: Monitor,
    category: 'Endpoint Computing',
    description: 'Desktop computers and workstations',
    whatItDoes: 'Reliable desktop computing for office environments and specialized applications',
    keyUseCases: [
      'General office productivity',
      'Call center and customer service',
      'Kiosk and digital signage',
      'Secure desktop environments'
    ],
    targetUsers: 'Office workers, customer service representatives, front-desk staff',
    ecosystemFit: 'Managed with ThinkShield security, pairs with ThinkVision displays',
    competitiveEdge: 'Small form factors, energy efficiency, comprehensive security',
    pricingModel: 'Volume purchase or TruScale fleet management',
    relatedProducts: ['ThinkShield', 'ThinkVision', 'TruScale'],
    industryFit: ['Banking', 'Government', 'Healthcare', 'Education']
  },
  'ThinkVision': {
    icon: Monitor,
    category: 'Displays',
    description: 'Professional monitors for productivity',
    whatItDoes: 'High-quality displays optimized for professional workflows and multi-monitor setups',
    keyUseCases: [
      'Trading floor multi-monitor arrays',
      'Design and creative workflows',
      'Data analysis and visualization',
      'Medical imaging and diagnostics'
    ],
    targetUsers: 'Financial traders, graphic designers, data analysts, medical professionals',
    ecosystemFit: 'Complements ThinkStation and ThinkPad deployments',
    competitiveEdge: 'Color accuracy, ergonomic design, daisy-chaining capabilities',
    pricingModel: 'Purchase or include in TruScale device packages',
    relatedProducts: ['ThinkStation', 'ThinkPad', 'TruScale'],
    industryFit: ['Banking', 'Government', 'Healthcare', 'Education']
  },
  'ThinkBook': {
    icon: Laptop,
    category: 'Endpoint Computing', 
    description: 'Business laptops for SMB and enterprise users',
    whatItDoes: 'Modern, stylish laptops designed for contemporary business environments',
    keyUseCases: [
      'SMB employee computing',
      'Hybrid work environments',
      'Student and faculty devices',
      'Modern office productivity'
    ],
    targetUsers: 'SMB employees, hybrid workers, students, young professionals',
    ecosystemFit: 'Entry point to Lenovo business ecosystem',
    competitiveEdge: 'Modern design, competitive pricing, business-grade reliability',
    pricingModel: 'Competitive purchase pricing, volume discounts',
    relatedProducts: ['ThinkShield', 'TruScale'],
    industryFit: ['Education', 'SMB', 'Government']
  },
  'ThinkShield': {
    icon: Shield,
    category: 'Security',
    description: 'Comprehensive security platform across devices',
    whatItDoes: 'End-to-end security from hardware to cloud for all Lenovo devices',
    keyUseCases: [
      'Device fleet security management',
      'Zero-trust endpoint protection',
      'Compliance and audit requirements',
      'Threat detection and response'
    ],
    targetUsers: 'CISOs, IT security teams, compliance officers',
    ecosystemFit: 'Integrates across all Lenovo device categories',
    competitiveEdge: 'Hardware-rooted security, comprehensive coverage, integrated management',
    pricingModel: 'Included with devices, premium tiers available',
    relatedProducts: ['ThinkPad', 'ThinkCentre', 'ThinkStation'],
    industryFit: ['Banking', 'Government', 'Healthcare']
  },
  'SE350': {
    icon: Building,
    category: 'Edge Computing',
    description: 'Edge servers and micro data centers',
    whatItDoes: 'Compact, rugged servers designed for edge computing and remote locations',
    keyUseCases: [
      'Remote site computing',
      'IoT data processing',
      'Branch office infrastructure',
      'Industrial edge computing'
    ],
    targetUsers: 'Edge architects, site managers, IoT engineers',
    ecosystemFit: 'Extends ThinkSystem capabilities to the edge',
    competitiveEdge: 'Extreme durability, fanless operation, space efficiency',
    pricingModel: 'Purchase or TruScale edge-as-a-service',
    relatedProducts: ['ThinkSystem', 'ThinkAgile', 'TruScale'],
    industryFit: ['Government', 'Manufacturing', 'Retail']
  },
  'TruScale': {
    icon: DollarSign,
    category: 'Services',
    description: 'As-a-service consumption model',
    whatItDoes: 'Flexible, consumption-based pricing for all Lenovo infrastructure and devices',
    keyUseCases: [
      'OpEx vs CapEx optimization',
      'Elastic capacity scaling',
      'Predictable monthly costs',
      'End-of-life device management'
    ],
    targetUsers: 'CFOs, procurement teams, IT leaders',
    ecosystemFit: 'Available across entire Lenovo portfolio',
    competitiveEdge: 'No lock-in contracts, transparent pricing, comprehensive service',
    pricingModel: 'Pay-per-use, monthly subscriptions, outcome-based pricing',
    relatedProducts: ['ThinkSystem', 'ThinkPad', 'ThinkAgile'],
    industryFit: ['Banking', 'Government', 'Healthcare', 'Education']
  },
  'P1': {
    icon: Laptop,
    category: 'Mobile Workstations',
    description: 'Premium mobile workstations',
    whatItDoes: 'Ultra-thin, high-performance mobile workstations for professional workflows',
    keyUseCases: [
      'Mobile CAD and design work',
      'On-site engineering and consulting',
      'Creative content creation',
      'Data science and analytics'
    ],
    targetUsers: 'Mobile professionals, consultants, field engineers, creative professionals',
    ecosystemFit: 'Premium tier of ThinkPad family',
    competitiveEdge: 'Thin and light design with workstation performance, ISV certifications',
    pricingModel: 'Premium pricing, lease and TruScale options',
    relatedProducts: ['ThinkPad', 'ThinkVision', 'TruScale'],
    industryFit: ['Banking', 'Government', 'Healthcare', 'Education']
  }
};

const TacticalDeck = () => {
  const [filter, setFilter] = useState('');
  const [activeChip, setActiveChip] = useState('');
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  const clearFilter = () => {
    setFilter('');
    setActiveChip('');
    setExpandedProduct(null);
  };

  const handleChipClick = (query: string) => {
    // Toggle product expansion
    if (expandedProduct === query) {
      setExpandedProduct(null);
      setActiveChip('');
      setFilter('');
    } else {
      setExpandedProduct(query);
      setActiveChip(query);
      setFilter(query);
    }
  };

  const applyFilter = (term: string) => {
    const t = term.trim().toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    
    rows.forEach((row) => {
      row.classList.remove('highlight');
      if (!t) return;
      const hit = row.textContent?.toLowerCase().includes(t);
      if (hit) row.classList.add('highlight');
    });
  };

  const measureHeader = useCallback(() => {
    if (headerRef.current) {
      const height = headerRef.current.offsetHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty('--deck-header-h', `${height}px`);
    }
  }, []);

  useEffect(() => {
    applyFilter(filter);
  }, [filter]);

  useEffect(() => {
    measureHeader();
    
    const observer = new ResizeObserver(measureHeader);
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    window.addEventListener('resize', measureHeader);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measureHeader);
    };
  }, [measureHeader]);

  const chips = [
    'ThinkPad', 'ThinkStation', 'ThinkSystem', 'ThinkAgile', 'ThinkCentre',
    'ThinkVision', 'ThinkBook', 'ThinkShield', 'TruScale', 'SE350', 'P1'
  ];

  return (
    <div id="tactical-deck" className="min-h-screen" style={{ 
      background: 'hsl(220 20% 7%)',
      color: 'hsl(220 15% 92%)',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
      lineHeight: '1.5'
    }}>
      <Helmet>
        <title>Lenovo Tactical Deck</title>
        <meta name="description" content="Concise Lenovo product tactics by industry with vignettes and competitor context." />
        <meta name="robots" content="noindex,nofollow" />
        <style type="text/css">{`
          :root {
            --deck-header-h: 100px;
          }
          tbody tr.highlight {
            background: rgba(108, 212, 255, 0.18) !important;
          }
          thead th.sticky-header {
            position: sticky;
            top: var(--deck-header-h);
            z-index: 20;
            background: hsl(220 20% 7%) !important;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          }
          #tactical-deck table td,
          #tactical-deck table th {
            white-space: normal !important;
            overflow-wrap: anywhere;
            word-break: break-word;
            line-height: 1.5;
          }
          #tactical-deck .deck-card,
          #tactical-deck .deck-note,
          #tactical-deck .deck-vignette {
            white-space: normal;
            overflow-wrap: anywhere;
            word-break: break-word;
            line-height: 1.5;
          }
          #tactical-deck .chip {
            white-space: nowrap;
          }
        `}</style>
      </Helmet>

      {/* Header */}
      <header ref={headerRef} className="sticky top-0 z-10" style={{
        background: 'linear-gradient(180deg, rgba(15,18,32,0.98), rgba(15,18,32,0.85))',
        backdropFilter: 'saturate(1.2) blur(6px)',
        borderBottom: '1px solid hsl(225 15% 15%)'
      }}>
        <div className="max-w-[1200px] mx-auto px-6 py-3 grid grid-cols-2 gap-3 items-center">
          <div className="text-lg font-bold tracking-wide">Lenovo tactical deck</div>
          <div className="flex gap-2 justify-end">
            <input
              type="search"
              placeholder="Filter by product or keyword"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="min-w-[240px] px-3 py-2 rounded-lg border outline-none"
              style={{
                background: 'hsl(225 20% 12%)',
                color: 'hsl(220 15% 92%)',
                border: '1px solid hsl(225 15% 15%)'
              }}
            />
            <button
              onClick={clearFilter}
              className="px-3 py-2 rounded-lg border cursor-pointer text-sm hover:border-[hsl(195_100%_70%)]"
              style={{
                background: 'hsl(225 15% 11%)',
                color: 'hsl(220 15% 92%)',
                border: '1px solid hsl(225 15% 15%)'
              }}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-6 pb-3">
          <div className="flex gap-2 flex-wrap">
            {chips.map((chip) => {
              const tooltips = {
                'ThinkPad': 'Business laptops & mobile workstations',
                'ThinkStation': 'Professional workstations for demanding applications',
                'ThinkSystem': 'Servers & enterprise infrastructure',
                'ThinkAgile': 'Hyper-converged infrastructure solutions',
                'ThinkCentre': 'Desktop computers & workstations',
                'ThinkVision': 'Professional monitors & displays',
                'ThinkBook': 'SMB business laptops',
                'ThinkShield': 'Comprehensive security platform',
                'TruScale': 'As-a-service consumption model',
                'SE350': 'Edge servers & micro data centers',
                'P1': 'Premium mobile workstations'
              };
              
              return (
                <span
                  key={chip}
                  onClick={() => handleChipClick(chip)}
                  className={`px-3 py-2 rounded-full text-xs cursor-pointer border transition-all hover:border-[hsl(195_100%_70%)] flex items-center gap-1.5 ${
                    activeChip === chip 
                      ? 'text-[hsl(220_15%_92%)] border-[hsl(195_100%_70%)]' 
                      : 'text-[hsl(220_15%_70%)] border-[hsl(225_15%_15%)]'
                  }`}
                  style={{
                    background: activeChip === chip 
                      ? 'rgba(108,212,255,0.12)' 
                      : 'hsl(225 15% 11%)'
                  }}
                  title={`Click to see detailed info about ${chip}`}
                >
                  {chip}
                  {expandedProduct === chip ? (
                    <ChevronUp className="h-3 w-3" />
                  ) : (
                    <ChevronDown className="h-3 w-3 opacity-60" />
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </header>

      {/* Expanded Product Detail Panel */}
      {expandedProduct && productData[expandedProduct] && (
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <Card className="border-[hsl(195_100%_50%/0.3)] bg-[hsl(225_20%_12%)]">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {React.createElement(productData[expandedProduct].icon, { 
                    className: "h-6 w-6 text-[hsl(195_100%_70%)]" 
                  })}
                  <div>
                    <CardTitle className="text-[hsl(220_15%_92%)] text-xl">
                      {expandedProduct}
                    </CardTitle>
                    <CardDescription className="text-[hsl(220_15%_70%)]">
                      {productData[expandedProduct].category}
                    </CardDescription>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedProduct(null)}
                  className="p-2 hover:bg-[hsl(225_15%_15%)] rounded-lg transition-colors"
                >
                  <ChevronUp className="h-4 w-4 text-[hsl(220_15%_70%)]" />
                </button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* What it does */}
              <div>
                <h4 className="text-sm font-semibold text-[hsl(220_15%_92%)] mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-[hsl(195_100%_70%)]" />
                  What it does
                </h4>
                <p className="text-[hsl(220_15%_78%)] text-sm leading-relaxed">
                  {productData[expandedProduct].whatItDoes}
                </p>
              </div>

              {/* Key use cases */}
              <div>
                <h4 className="text-sm font-semibold text-[hsl(220_15%_92%)] mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[hsl(195_100%_70%)]" />
                  Key use cases
                </h4>
                <ul className="space-y-1">
                  {productData[expandedProduct].keyUseCases.map((useCase, index) => (
                    <li key={index} className="text-[hsl(220_15%_78%)] text-sm flex items-start gap-2">
                      <ArrowRight className="h-3 w-3 text-[hsl(195_100%_70%)] mt-0.5 flex-shrink-0" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Target users */}
                <div>
                  <h4 className="text-sm font-semibold text-[hsl(220_15%_92%)] mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-[hsl(195_100%_70%)]" />
                    Target users
                  </h4>
                  <p className="text-[hsl(220_15%_78%)] text-sm leading-relaxed">
                    {productData[expandedProduct].targetUsers}
                  </p>
                </div>

                {/* Competitive edge */}
                <div>
                  <h4 className="text-sm font-semibold text-[hsl(220_15%_92%)] mb-2 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[hsl(195_100%_70%)]" />
                    Competitive edge
                  </h4>
                  <p className="text-[hsl(220_15%_78%)] text-sm leading-relaxed">
                    {productData[expandedProduct].competitiveEdge}
                  </p>
                </div>

                {/* Ecosystem fit */}
                <div>
                  <h4 className="text-sm font-semibold text-[hsl(220_15%_92%)] mb-2 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-[hsl(195_100%_70%)]" />
                    Ecosystem fit
                  </h4>
                  <p className="text-[hsl(220_15%_78%)] text-sm leading-relaxed">
                    {productData[expandedProduct].ecosystemFit}
                  </p>
                </div>

                {/* Pricing model */}
                <div>
                  <h4 className="text-sm font-semibold text-[hsl(220_15%_92%)] mb-2 flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-[hsl(195_100%_70%)]" />
                    Pricing model
                  </h4>
                  <p className="text-[hsl(220_15%_78%)] text-sm leading-relaxed">
                    {productData[expandedProduct].pricingModel}
                  </p>
                </div>
              </div>

              {/* Related products */}
              <div>
                <h4 className="text-sm font-semibold text-[hsl(220_15%_92%)] mb-3 flex items-center gap-2">
                  <Settings className="h-4 w-4 text-[hsl(195_100%_70%)]" />
                  Works well with
                </h4>
                <div className="flex flex-wrap gap-2">
                  {productData[expandedProduct].relatedProducts.map((related) => (
                    <Badge
                      key={related}
                      variant="outline"
                      className="text-[hsl(220_15%_78%)] border-[hsl(225_15%_25%)] hover:border-[hsl(195_100%_70%)] cursor-pointer transition-colors"
                      onClick={() => handleChipClick(related)}
                    >
                      {related}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Industry fit indicators */}
              <div>
                <h4 className="text-sm font-semibold text-[hsl(220_15%_92%)] mb-3 flex items-center gap-2">
                  <Building className="h-4 w-4 text-[hsl(195_100%_70%)]" />
                  Industry fit
                </h4>
                <div className="flex flex-wrap gap-2">
                  {productData[expandedProduct].industryFit.map((industry) => (
                    <Badge
                      key={industry}
                      className="bg-[hsl(120_60%_50%/0.15)] text-[hsl(120_60%_70%)] border-[hsl(120_60%_50%/0.3)]"
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Jump to examples */}
              <div className="pt-4 border-t border-[hsl(225_15%_15%)]">
                <button
                  onClick={() => {
                    const firstMatch = document.querySelector('tbody tr.highlight') || 
                                     document.querySelector(`tbody tr:has(*:contains("${expandedProduct}"))`);
                    if (firstMatch) {
                      firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className="text-sm text-[hsl(195_100%_70%)] hover:text-[hsl(195_100%_80%)] flex items-center gap-2 transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                  Jump to examples in tactical sections
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-6 py-6">
        <h1 className="text-2xl font-bold mb-1">Fast read</h1>
        <p className="text-[hsl(220_15%_70%)] mb-4 max-w-[80ch]">
          Use this to map pain to stack to outcome. Keep it clean. Say when it fits. Say when it does not. Name a competitor. Close with a result.
        </p>

        {/* Lenovo Tactical Advisor */}
        <LenovoAdvisor 
          activeChip={activeChip} 
          currentSection="tactical-deck"
        />

        {/* Product Quick Guide */}
        <section id="product-guide" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Product quick guide</h2>
          <p className="text-[hsl(220_15%_70%)] mb-3 max-w-[90ch]">
            Short descriptions and where each product shines.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'ThinkPad', desc: 'Laptops and mobile workstations for professionals', summary: 'Secure, reliable endpoints for staff and execs.' },
              { name: 'ThinkStation', desc: 'Professional workstations for demanding applications', summary: 'High-performance compute for CAD, rendering, and analysis.' },
              { name: 'ThinkSystem', desc: 'Servers and enterprise infrastructure', summary: 'Core compute for AI, databases, and virtualization.' },
              { name: 'ThinkAgile', desc: 'Hyper-converged infrastructure and software-defined solutions', summary: 'Simplified infrastructure for cloud-native workloads.' },
              { name: 'ThinkEdge', desc: 'Edge computing and IoT solutions', summary: 'Rugged edge nodes for sites, branches, and transport.' },
              { name: 'ThinkCentre', desc: 'Desktop computers and workstations', summary: 'Managed desktops for contact centres and wards.' },
              { name: 'ThinkVision', desc: 'Professional monitors for productivity', summary: 'High‑density screens for trading floors and design teams.' },
              { name: 'ThinkBook', desc: 'Business laptops for SMB and enterprise users', summary: 'Modern productivity devices for growing teams.' },
              { name: 'ThinkShield', desc: 'Comprehensive security platform across devices', summary: 'End-to-end security from chip to cloud.' },
              { name: 'SE350', desc: 'Edge servers and micro data centres', summary: 'Compact edge compute for constrained spaces.' },
              { name: 'Storage', desc: 'Enterprise storage solutions', summary: 'Storage for AI models, imaging sets, and training data.' },
              { name: 'TruScale', desc: 'As‑a‑service consumption model', summary: 'Elastic spend aligned to usage and peaks.' }
            ].map((p) => (
              <article key={p.name} className="deck-card p-4 rounded-lg border" style={{
                background: 'hsl(220 20% 7%)',
                border: '1px solid hsl(225 15% 15%)'
              }}>
                <h3 className="font-semibold mb-1 text-[hsl(220_15%_92%)]">{p.name}</h3>
                <p className="text-[hsl(220_15%_78%)] text-sm">{p.desc}</p>
                <p className="text-[hsl(220_15%_70%)] text-sm mt-1">{p.summary}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Banking Section */}
        <section id="banking" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Banking</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Where this helps</strong>
              <p className="text-[hsl(220_15%_70%)]">Fraud detection. Secure device fleets. High‑density trader screens.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Why it matters (and to whom)</strong>
              <p className="text-[hsl(220_15%_70%)]">CFOs: elastic spend via TruScale. CISOs: device control with ThinkShield.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Watch-outs</strong>
              <p className="text-[hsl(220_15%_70%)]">Mac fleets in exec teams. Validate ISV needs for traders.</p>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                   <th key={header} className="sticky-header text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
                      background: 'hsl(220 20% 7%)',
                      color: 'hsl(220 15% 70%)',
                      borderBottom: '1px solid hsl(225 15% 15%)'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                 <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Device sprawl and risk">Device sprawl and risk</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkPad T14s Gen 6 with ThinkShield">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkPad</span>
                     T14s Gen 6 with 
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] ml-1">ThinkShield</span>
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Encrypted fleet</span>
                    <span>clean manage</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell Latitude HP EliteBook Apple MacBook">Dell Latitude HP EliteBook Apple MacBook</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Bank rolled 20k ThinkPads and cut breaches in year one
                    </div>
                  </td>
                </tr>
                 <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Fraud detection speed">Fraud detection speed</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkSystem with AI starter kit and TruScale">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkSystem</span>
                     with AI starter kit and 
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] ml-1">TruScale</span>
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Faster scores</span>
                    <span>elastic spend</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell PowerEdge HPE ProLiant">Dell PowerEdge HPE ProLiant</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Pilot scaled at peaks only and saved millions
                    </div>
                  </td>
                </tr>
                 <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Trading floor density">Trading floor density</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkVision multi screen plus P series workstations">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkVision</span>
                     multi screen plus 
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] ml-1">P series</span>
                     workstations
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Lower energy</span>
                    <span>higher focus</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell UltraSharp HP Z Displays">Dell UltraSharp HP Z Displays</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Energy use fell on the floor after panel swap
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="deck-note text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If macOS is mandated then pivot to device services and monitors.
          </p>
        </section>

        {/* Government Section */}
        <section id="government" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Government</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Where this helps</strong>
              <p className="text-[hsl(220_15%_70%)]">Sovereign data. Transport signals. Branch sites.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Why it matters (and to whom)</strong>
              <p className="text-[hsl(220_15%_70%)]">Ministers & agency heads: measurable outcomes. CIOs: edge‑to‑core with a service wrap.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Watch-outs</strong>
              <p className="text-[hsl(220_15%_70%)]">Legacy vendor lock. Formal frameworks. Procurement cycles.</p>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                   <th key={header} className="sticky-header text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
                      background: 'hsl(220 20% 7%)',
                      color: 'hsl(220 15% 70%)',
                      borderBottom: '1px solid hsl(225 15% 15%)'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="IoT and transport data">IoT and transport data</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="SE350 at depots with ThinkAgile in core">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">SE350</span>
                     at depots with 
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] ml-1">ThinkAgile</span>
                     in core
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Real time</span>
                    <span>better plans</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HPE Edgeline Cisco HyperFlex">HPE Edgeline Cisco HyperFlex</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Agency forecast congestion and moved crews early
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Secure desktop fleets">Secure desktop fleets</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkCentre Neo with ThinkShield">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkCentre</span>
                     Neo with 
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] ml-1">ThinkShield</span>
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Stable fleet</span>
                    <span>fewer tickets</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell OptiPlex HP ProDesk">Dell OptiPlex HP ProDesk</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Five thousand units went in and calls dropped fast
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Data stays onshore">Data stays onshore</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkSystem DG7200 for records and imaging">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkSystem</span>
                     DG7200 for records and imaging
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Audit clean</span>
                    <span>sovereign store</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell EMC NetApp">Dell EMC NetApp</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Records processed onshore with audit paths clean
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="deck-note text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If a rival owns the DC then lead with device and edge first.
          </p>
        </section>

        {/* Healthcare Section */}
        <section id="healthcare" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Healthcare</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Where this helps</strong>
              <p className="text-[hsl(220_15%_70%)]">Imaging, triage, ward endpoints, clinician rounds.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Why it matters (and to whom)</strong>
              <p className="text-[hsl(220_15%_70%)]">Clinical leads: device safety for wards (ThinkShield). Data teams: storage for AI imaging/training (ThinkSystem DG series).</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Watch-outs</strong>
              <p className="text-[hsl(220_15%_70%)]">Clinical ISV needs. Peripherals. Wifi zones.</p>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                   <th key={header} className="sticky-header text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
                      background: 'hsl(220 20% 7%)',
                      color: 'hsl(220 15% 70%)',
                      borderBottom: '1px solid hsl(225 15% 15%)'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Imaging choke">Imaging choke</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkSystem DG7200 for imaging sets">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkSystem</span>
                     DG7200 for imaging sets
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Faster reads</span>
                    <span>smarter care</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell EMC PowerStore GE Healthcare">Dell EMC PowerStore GE Healthcare</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      AI reads are live and helping triage faster
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Doctor mobility">Doctor mobility</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkPad X1 Yoga with secure sync">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkPad</span>
                     X1 Yoga with secure sync
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Live notes</span>
                    <span>ward ready</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HP Elite x360 iPad Pro">HP Elite x360 iPad Pro</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Doctors take notes that sync and stay private
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Endpoint sprawl">Endpoint sprawl</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkCentre with ThinkShield in wards">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkCentre</span>
                     with 
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] ml-1">ThinkShield</span>
                     in wards
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Safe fleet</span>
                    <span>clean rooms</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell OptiPlex HP ProDesk">Dell OptiPlex HP ProDesk</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Endpoints deployed safely in every ward and cleaned easy
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="deck-note text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If they are Apple heavy then lead with monitors and infrastructure.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Education</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Use case focus</strong>
              <p className="text-[hsl(220_15%_70%)]">Research compute. Labs. Student fleets. Semester spikes.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Why it matters (and to whom)</strong>
              <p className="text-[hsl(220_15%_70%)]">IT Directors: rugged devices for classrooms. CFOs: TruScale for seasonal demand spikes.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Watchouts</strong>
              <p className="text-[hsl(220_15%_70%)]">Budget cycles. Student damage. Summer cooling fell</p>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                   <th key={header} className="sticky-header text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
                      background: 'hsl(220 20% 7%)',
                      color: 'hsl(220 15% 70%)',
                      borderBottom: '1px solid hsl(225 15% 15%)'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HPC demand in research">HPC demand in research</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkSystem clusters with ThinkAgile">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkSystem</span>
                     clusters with 
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] ml-1">ThinkAgile</span>
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Research boost</span>
                    <span>grant ready</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Dell VxRail HPE SimpliVity">Dell VxRail HPE SimpliVity</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Research lab got faster results and more funding
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Student fleets">Student fleets</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkBook and ThinkPad EDU bundles">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkBook</span>
                     and 
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] ml-1">ThinkPad</span>
                     EDU bundles
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Rugged fleet</span>
                    <span>low break</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HP ProBook Dell Latitude EDU">HP ProBook Dell Latitude EDU</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Student damage dropped and IT calls fell fast
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Teaching labs">Teaching labs</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkStation P series for CAD and VR">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkStation</span>
                     P series for CAD and VR
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Ready labs</span>
                    <span>simple care</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HP Z Workstations Dell Precision">HP Z Workstations Dell Precision</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      VR units ran stable on P7 in live classes
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="deck-note text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If campus is Apple heavy then lean on clusters and monitors first.
          </p>
        </section>

        {/* Startup Section */}
        <section id="startup" className="mt-7 p-4 rounded-2xl border" style={{
          background: 'hsl(225 20% 12%)',
          border: '1px solid hsl(225 15% 15%)'
        }}>
          <h2 className="text-xl font-bold mb-2">Startup and scale up</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Use case focus</strong>
              <p className="text-[hsl(220_15%_70%)]">Cloud gaps. GPU need. Cash care. Fast hires.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Why it matters (and to whom)</strong>
              <p className="text-[hsl(220_15%_70%)]">CTOs: hybrid flexibility. CFOs: OPEX models that keep burn low.</p>
            </div>
            <div className="deck-card p-4 rounded-lg border text-sm leading-relaxed" style={{
              background: 'hsl(220 20% 7%)',
              border: '1px solid hsl(225 15% 15%)'
            }}>
              <strong className="text-[hsl(220_15%_92%)] block mb-2">Watchouts</strong>
              <p className="text-[hsl(220_15%_70%)]">Pure cloud rules. Zero DC ops. Short cycles.</p>
            </div>
          </div>
          <div className="overflow-auto rounded-lg border" style={{ border: '1px solid hsl(225 15% 15%)' }}>
            <table className="w-full border-collapse min-w-[820px]" style={{ background: 'hsl(220 20% 7%)' }}>
              <thead>
                <tr>
                  {['Pain', 'Lenovo stack', 'Outcome', 'Competitors', 'Vignette'].map((header) => (
                   <th key={header} className="sticky-header text-left text-xs font-semibold tracking-wide px-3 py-2 border-b" style={{
                      background: 'hsl(220 20% 7%)',
                      color: 'hsl(220 15% 70%)',
                      borderBottom: '1px solid hsl(225 15% 15%)'
                    }}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Cloud GPU shortage">Cloud GPU shortage</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkStation P8 with TruScale GPU nodes">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkStation</span>
                     P8 with 
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] ml-1">TruScale</span>
                     GPU nodes
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Local train</span>
                    <span>hybrid flex</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="HP Z series Dell Precision XPS">HP Z series Dell Precision XPS</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Models trained on site and spend stayed sane
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-[rgba(124,135,255,0.06)]">
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Budget guard">Budget guard</td>
                   <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="ThinkBook fleets">
                     <span className="inline-block px-2 py-1 rounded text-xs font-medium text-[hsl(220_15%_92%)] bg-[hsl(195_100%_50%/0.15)] border border-[hsl(195_100%_50%/0.3)] mr-1">ThinkBook</span>
                     fleets
                   </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <span className="chip inline-block px-2 py-0.5 rounded-full text-xs border mr-2" style={{
                      color: 'hsl(120 60% 70%)',
                      border: '1px solid rgba(122,247,200,0.4)',
                      background: 'hsl(225 20% 10%)'
                    }}>Durable</span>
                    <span>fair OPEX</span>
                  </td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }} title="Acer HP ProBook">Acer HP ProBook</td>
                  <td className="border-b px-3 py-4 text-sm align-top leading-relaxed break-words" style={{ borderBottom: '1px solid hsl(225 15% 15%)' }}>
                    <div className="deck-vignette mt-2 p-3 rounded border-l-4 text-sm leading-relaxed" style={{
                      background: 'rgba(122,247,200,0.06)',
                      borderLeft: '4px solid hsl(120 60% 70%)'
                    }}>
                      Two hundred staff kitted and spend stayed in check with no fuss
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="deck-note text-xs mt-2" style={{ color: 'hsl(220 15% 70%)' }}>
            If they insist on pure cloud then offer device services only.
          </p>
        </section>
      </main>
    </div>
  );
};

export default TacticalDeck;