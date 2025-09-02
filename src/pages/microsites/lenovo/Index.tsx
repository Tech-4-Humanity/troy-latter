import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const LenovoMicrosite = () => {
  useEffect(() => {
    // Set noindex for SEO protection
    const metaTag = document.createElement('meta');
    metaTag.name = 'robots';
    metaTag.content = 'noindex,nofollow';
    document.head.appendChild(metaTag);
    
    // Set page title
    document.title = 'Lenovo ANZ DaaS Strategy Pack';
    
    return () => {
      document.head.removeChild(metaTag);
      document.title = "Troy Latter - Executive Portfolio";
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Lenovo ANZ DaaS Strategy Pack</h1>
          <p className="text-xl mb-6 opacity-90">$10.5M baseline → $65M+ target by Year 5. Workforce Transformation as-a-Service.</p>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              { id: 'strategy', label: 'Strategy' },
              { id: 'trajectory', label: 'Revenue' },
              { id: 'packs', label: 'Vertical Packs' },
              { id: '2x2s', label: '2×2 Library' },
              { id: 'enablement', label: 'Enablement' },
              { id: 'competitive', label: 'Competitive' },
              { id: 'enhancements', label: 'Enhancements' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 text-red-500 hover:text-white font-semibold transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Strategy Foundation */}
      <section id="strategy" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">1. Strategy Foundation</h2>
          <div className="space-y-4 text-lg">
            <p><strong>Baseline:</strong> Device + warranty + lifecycle. &lt;$15M, stable but limited.</p>
            <p><strong>Target:</strong> Verticalised workforce subscriptions with TruScale, AI, ESG, security, and cloud.</p>
            <p><strong>Customer Journey:</strong> Support → Managed → Advisory.</p>
          </div>
        </div>
      </section>

      {/* Revenue Trajectory */}
      <section id="trajectory" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">2. 5-Year Revenue Trajectory</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-semibold">Sector</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Baseline Year 5</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Expanded Year 5</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Growth Multiple</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 p-3">Education</td><td className="border border-gray-300 p-3">$2M</td><td className="border border-gray-300 p-3">$15M</td><td className="border border-gray-300 p-3">4–7x</td></tr>
                <tr><td className="border border-gray-300 p-3">Healthcare</td><td className="border border-gray-300 p-3">$3M</td><td className="border border-gray-300 p-3">$20M</td><td className="border border-gray-300 p-3">5–6x</td></tr>
                <tr><td className="border border-gray-300 p-3">Government</td><td className="border border-gray-300 p-3">$5M</td><td className="border border-gray-300 p-3">$25M</td><td className="border border-gray-300 p-3">4–5x</td></tr>
                <tr><td className="border border-gray-300 p-3">SMB</td><td className="border border-gray-300 p-3">$0.5M</td><td className="border border-gray-300 p-3">$5M</td><td className="border border-gray-300 p-3">5–10x</td></tr>
                <tr className="bg-gray-50 font-semibold"><td className="border border-gray-300 p-3">Total</td><td className="border border-gray-300 p-3">$10.5M</td><td className="border border-gray-300 p-3">$65M</td><td className="border border-gray-300 p-3">~6x</td></tr>
              </tbody>
            </table>
          </div>
          
          {/* Revenue Chart */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <ChartContainer
              config={{
                baseline: {
                  label: "Baseline Year 5",
                  color: "#777777",
                },
                expanded: {
                  label: "Expanded Year 5", 
                  color: "#e2231a",
                },
              }}
              className="h-80 w-full"
            >
              <BarChart
                data={[
                  { sector: "Education", baseline: 2, expanded: 15 },
                  { sector: "Healthcare", baseline: 3, expanded: 20 },
                  { sector: "Government", baseline: 5, expanded: 25 },
                  { sector: "SMB", baseline: 0.5, expanded: 5 },
                ]}
              >
                <XAxis dataKey="sector" />
                <YAxis label={{ value: 'Revenue ($M)', angle: -90, position: 'insideLeft' }} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="baseline" fill="#777777" />
                <Bar dataKey="expanded" fill="#e2231a" />
              </BarChart>
            </ChartContainer>
          </div>
          
          <p className="mt-6 text-lg"><strong>Takeaway:</strong> Cross-sell is not optional. Bundled + advisory moves DaaS into $60M+ territory.</p>
        </div>
      </section>

      {/* Vertical Packs */}
      <section id="packs" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">3. Vertical DaaS Packs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: '🎓 Future of Learning',
                description: 'Devices + LMS integration + TruScale VDI + AI copilots + ESG dashboards.',
                outcome: 'Smart campus, grant compliance.',
                value: '$8–15M'
              },
              {
                title: '🏥 Digital Hospital',
                description: 'Rugged devices + TruScale infra + telehealth kits + AI Edge + ESG Navigator.',
                outcome: 'Secure, sustainable digital hospital.',
                value: '$12–20M'
              },
              {
                title: '🏛 Gov Compliance',
                description: 'Devices + service desk + ZTNA + TruScale hybrid + ESG dashboards.',
                outcome: 'Procurement-ready, compliance-ready workplace.',
                value: '$15–25M'
              },
              {
                title: '💼 SMB Workforce',
                description: 'Devices + MSP service desk + TruScale SMB + AI copilots + simplified ESG.',
                outcome: 'Workforce transformation without enterprise cost.',
                value: '$2–5M'
              }
            ].map((pack, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{pack.title}</h3>
                  <p className="mb-3">{pack.description}</p>
                  <p><strong>Outcome:</strong> {pack.outcome} <strong>Value:</strong> {pack.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2x2 Framework Library */}
      <section id="2x2s" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">4. 2×2 Framework Library</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { title: 'Customer Relationship', desc: 'Start small → grow to strategic partner.' },
              { title: 'Technology', desc: 'Core devices → TruScale → AI/ESG integration.' },
              { title: 'Competitor', desc: 'Position against HP, Dell, HPE, Apple.' },
              { title: 'Roles & Ownership', desc: 'Sales, architects, delivery tagged per pathway.' },
              { title: 'Partners', desc: 'MSPs, GSIs, resellers mapped to packs.' },
              { title: 'Tactics', desc: 'Win fast with bundled services.' },
              { title: 'Orchestration', desc: 'Pull Lenovo + partner ecosystem together.' },
              { title: 'Stakeholder', desc: 'Board, CIO, IT leads aligned by value.' },
              { title: 'Execution Horizon', desc: 'Immediate, mid-term, long-tail steps.' },
              { title: 'Risk vs Opportunity', desc: 'Baseline DaaS flat vs bundled growth.' },
              { title: 'Geographic Growth', desc: 'State health, universities, SMB clusters.' },
              { title: 'Customer Journey', desc: 'Support → Managed → Advisory.' }
            ].map((framework, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                  {framework.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-1">
                  <p>{framework.desc}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Enablement Assets */}
      <section id="enablement" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">5. Enablement Assets</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Customer One-Pager</h3>
                <p className="mb-4 font-medium">"One predictable monthly fee. Everything your workforce needs."</p>
                <ul className="space-y-2">
                  <li>• Education: Smart campus, $8–15M.</li>
                  <li>• Healthcare: Digital hospital, $12–20M.</li>
                  <li>• Government: Compliance-ready workplace, $15–25M.</li>
                  <li>• SMB: Workforce packs, $2–5M.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Partner One-Pager</h3>
                <p className="mb-4 font-medium">"Every device becomes a 5-year services relationship."</p>
                <ul className="space-y-2">
                  <li>• Recurring revenue, higher margins, sticky clients.</li>
                  <li>• Rebates up to 4% TruScale/DaaS.</li>
                  <li>• Revenue uplift: 5–10x baseline.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section id="competitive" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">6. Competitive Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-semibold">Sector</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Lenovo Strength</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">HP</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Dell</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">HPE</th>
                  <th className="border border-gray-300 p-3 text-left font-semibold">Apple</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 p-3">Education</td><td className="border border-gray-300 p-3 text-green-600 font-bold">✔ LMS, VDI, ESG</td><td className="border border-gray-300 p-3">Strong tenders</td><td className="border border-gray-300 p-3">Moderate</td><td className="border border-gray-300 p-3 text-red-600 font-bold">✘ Weak</td><td className="border border-gray-300 p-3">Brand pull, poor lifecycle</td></tr>
                <tr><td className="border border-gray-300 p-3">Healthcare</td><td className="border border-gray-300 p-3 text-green-600 font-bold">✔ Rugged, telehealth, ESG</td><td className="border border-gray-300 p-3">Lifecycle only</td><td className="border border-gray-300 p-3">Infra-strong</td><td className="border border-gray-300 p-3">Infra-led</td><td className="border border-gray-300 p-3 text-red-600 font-bold">✘ iPads, compliance weak</td></tr>
                <tr><td className="border border-gray-300 p-3">Government</td><td className="border border-gray-300 p-3 text-green-600 font-bold">✔ Service desk, ESG</td><td className="border border-gray-300 p-3">DaaS leader</td><td className="border border-gray-300 p-3">Moderate</td><td className="border border-gray-300 p-3">PointNext strong</td><td className="border border-gray-300 p-3 text-red-600 font-bold">✘ Weak</td></tr>
                <tr><td className="border border-gray-300 p-3">SMB</td><td className="border border-gray-300 p-3 text-green-600 font-bold">✔ MSP packs, AI, ESG</td><td className="border border-gray-300 p-3">Channel strong</td><td className="border border-gray-300 p-3">APEX infra</td><td className="border border-gray-300 p-3 text-red-600 font-bold">✘ Weak</td><td className="border border-gray-300 p-3">Leasing, no MSP depth</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enhancements */}
      <section id="enhancements" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">7. Enhancements & Differentiators</h2>
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-6">
              <ul className="space-y-3 text-lg">
                <li>• Unified CIO Dashboard.</li>
                <li>• TruScale Cloud Credits with every deal.</li>
                <li>• Employee Experience Tier.</li>
                <li>• Sustainability Guarantee.</li>
                <li>• Named Vertical Packs.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-3">Strategy</h3>
              <button onClick={() => scrollToSection('strategy')} className="block text-red-400 hover:text-white mb-1">Foundation</button>
              <button onClick={() => scrollToSection('trajectory')} className="block text-red-400 hover:text-white mb-1">Revenue</button>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Packs</h3>
              <button onClick={() => scrollToSection('packs')} className="block text-red-400 hover:text-white mb-1">Education</button>
              <button onClick={() => scrollToSection('packs')} className="block text-red-400 hover:text-white mb-1">Healthcare</button>
              <button onClick={() => scrollToSection('packs')} className="block text-red-400 hover:text-white mb-1">Gov</button>
              <button onClick={() => scrollToSection('packs')} className="block text-red-400 hover:text-white mb-1">SMB</button>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Resources</h3>
              <button onClick={() => scrollToSection('2x2s')} className="block text-red-400 hover:text-white mb-1">2×2 Library</button>
              <button onClick={() => scrollToSection('competitive')} className="block text-red-400 hover:text-white mb-1">Competitive</button>
              <button onClick={() => scrollToSection('enhancements')} className="block text-red-400 hover:text-white mb-1">Enhancements</button>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-700 pt-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block text-red-400 hover:text-white mb-4 text-sm"
            >
              ↑ Back to top
            </button>
            <p>&copy; Lenovo ANZ Strategy Project | DaaS Growth Playbook</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LenovoMicrosite;