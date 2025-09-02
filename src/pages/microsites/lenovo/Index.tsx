import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
              { id: 'enhancements', label: 'Enhancements' },
              { id: 'jd-alignment', label: 'JD Alignment' },
              { id: 'two-by-two-complete', label: 'Complete 2x2' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 text-white hover:text-red-300 font-semibold transition-colors border border-white/20 rounded-md hover:bg-white/10"
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

      {/* JD Alignment & Interview Prep */}
      <section id="jd-alignment" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">8. JD Alignment & Interview Prep</h2>

          {/* JD Alignment Accordions */}
          <div className="mb-8">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="jd-1" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                  1. Client Engagement & Strategy
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-1">
                  <p><strong>JD asks for:</strong> Strategic account planning, relationships, advocacy inside Lenovo.</p>
                  <p><strong>Troy brings:</strong> Sector-specific DaaS packs (Education, Healthcare, Gov, SMB), cross-sell pathways (Support → Managed → Advisory), and 2×2 frameworks for customers, partners, stakeholders.</p>
                  <p><strong>Troy's comment:</strong> "I take device refresh conversations and reframe them as transformation journeys. That's how Lenovo earns trust as a partner, not a supplier."</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="jd-2" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                  2. Solution Design & Delivery
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-1">
                  <p><strong>JD asks for:</strong> Lead solution development, provide consultative advice, orchestrate technical program discussions.</p>
                  <p><strong>Troy brings:</strong> Designed bundled solutions (Lenovo hardware + TruScale + AI copilots + ESG Navigator), orchestration frameworks (tactics, stakeholder, partner 2×2s), and mapped integration points (M365, Intune, ZTNA, Azure/AWS/GCP).</p>
                  <p><strong>Troy's comment:</strong> "My architecture method is orchestration. I define Lenovo building blocks and pull them together with partners so the client gets a complete, compliant solution."</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="jd-3" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                  3. Sales Enablement & Execution
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-1">
                  <p><strong>JD asks for:</strong> Shape sales process, ROI-driven business cases, pricing alignment.</p>
                  <p><strong>Troy brings:</strong> Customer and Partner one-pagers, ROI trajectories ($10.5M → $65M), clear competitive differentiation (Lenovo vs HP/Dell/HPE/Apple), and OPEX/TruScale pricing framing.</p>
                  <p><strong>Troy's comment:</strong> "I don't just describe Lenovo technology. I show how a $2M deal becomes $15M over five years with bundled services. That's ROI in a story CFOs understand."</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="jd-4" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                  4. Market & Competitive Insight
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-1">
                  <p><strong>JD asks for:</strong> Stay ahead of trends, use competitive intelligence to position Lenovo's strengths.</p>
                  <p><strong>Troy brings:</strong> Competitive tables with ticks/crosses, identified white-space growth in ANZ (universities, state health, SMB), and positioned Lenovo as "Workforce Platform Subscription."</p>
                  <p><strong>Troy's comment:</strong> "AI is a given. The real differentiator is AI tied to compliance, ESG, and cost transparency. That's Lenovo's angle against HP and Dell in ANZ."</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="jd-5" className="bg-white rounded-lg shadow-sm">
                <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                  5. Influence & Mindset
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 pt-1">
                  <p><strong>JD asks for:</strong> Confident with C-suite, simplify complexity, consultative style.</p>
                  <p><strong>Troy brings:</strong> Executive-ready frameworks (2×2s, ROI curves), outcome-first narratives (CIO dashboards, compliance, ESG guarantees), and consultative approach that guides transformation.</p>
                  <p><strong>Troy's comment:</strong> "C-level leaders don't want another vendor. They want a partner who can simplify complexity into outcomes. That's how I position Lenovo."</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-8">Mock Interview Q&A</h3>

          {/* Q&A Accordions */}
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="q1" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q1. How do you see Lenovo's services opportunity in ANZ?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: Lenovo has a strong baseline in devices and Premier Support, but the opportunity is in evolving DaaS into "Workforce Transformation as-a-Service" with TruScale, AI, ESG, and managed services. That shifts a $2M education deal into a $15M platform.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q2. How would you engage Country Client Managers to build account strategy?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: Start with journey mapping—Support → Managed → Advisory. Align sector packs with account priorities (Smart Campus, Digital Hospital, Gov Compliance, SMB Workforce). Co-own the plan with ROI trajectories and competitive positioning baked in.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q3. What would you say to a CIO who sees Lenovo only as a hardware vendor?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: Reframe Lenovo as a platform partner. In healthcare, it's not "here's a rugged device." It's "here's a Digital Hospital with secure devices, TruScale cloud, telehealth kits, and ESG reporting." That shifts Lenovo from supplier to transformation partner.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q4. How do you lead solution design in complex environments?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: By orchestrating across presales, delivery, and partners. Define the building blocks—devices, TruScale, managed security, AI—and map them to the customer's environment. Always ensure compliance and integration with M365, Intune, ZTNA, cloud credits.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q5. What makes Lenovo's proposition different from HP, Dell, or HPE?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: Three differentiators: ESG Navigator and lifecycle reporting; TruScale as the bridge to hybrid cloud; and MSP enablement for SMB. Together, they create stickier, higher-margin deals.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q6" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q6. How do you simplify complex solutions for C-level executives?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: Use frameworks—2×2s, ROI curves, customer journeys. Instead of technical dives, show baseline vs expanded and the growth impact. A CFO sees the $10.5M → $65M curve and immediately understands.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q7" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q7. How would you influence a buying coalition with multiple stakeholders?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: Map the coalition by role: CIO cares about compliance, Procurement about OPEX, Operations about SLAs. I orchestrate Lenovo + partners so each stakeholder sees their outcome delivered in the solution.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q8" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q8. What role do partners play in your architectural approach?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: Partners are multipliers. MSPs extend Lenovo into SMB, GSIs drive government projects, ISVs support education. I design Lenovo's stack so it's consumable by partners while retaining Lenovo branding.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q9" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q9. How do you build competitive differentiation into a sales process?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: Bake it into presales deliverables. Position ESG Navigator as compliance differentiator, TruScale credits as OPEX lever. Always shift discussion to total cost-to-outcome, not unit pricing.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q10" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q10. How do you stay ahead of market trends?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: Track three lenses: AI productivity, ESG compliance, OPEX-driven models. Lenovo's unique position is combining these into one subscription. That's the market lead story.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q11" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q11. How do you approach ROI-driven business cases?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: By quantifying growth multipliers. Example: $2M education baseline → $15M if we add LMS integration, TruScale VDI, AI copilots. Show the uplift curves sector by sector.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q12" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-4 py-3 font-semibold text-left hover:bg-gray-50">
                Q12. What's your leadership style with presales and delivery teams?
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 pt-1">
                <p>A: Collaborative and orchestration-focused. Tag ownership by role, provide clarity on architecture, and let specialists own their domains. Builds accountability and accelerates execution.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Full 2x2 Tables Section */}
      <section id="two-by-two-complete" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-red-600 mb-8">Complete 2x2 Framework Library</h2>
          
          {/* Customer Relationship */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Customer Relationship 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Customer maturity low</TableHead>
                <TableHead>Customer maturity high</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Relationship transactional</TableHead>
                <TableCell>Quote cycles for devices and support. Land quick wins with Premier Support plus collaboration kits and ESG dashboards. Prove delivery speed and quality.</TableCell>
                <TableCell>Risk of being sidelined on price. Move to platform talk with TruScale credits and service desk attach. Set a three step adoption plan.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Relationship strategic</TableHead>
                <TableCell>Define a roadmap. Phase one DaaS baseline. Phase two security and Autopilot. Phase three VDI or cloud tie in.</TableCell>
                <TableCell>Multi year program. Digital campus or digital hospital or gov workplace. Joint steering group. Quarterly value reviews.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Technology */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Technology 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Core stack</TableHead>
                <TableHead>Advanced stack</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>End user layer</TableHead>
                <TableCell>ThinkPad ThinkBook ThinkCentre. Premier Support. Imaging and asset recovery.</TableCell>
                <TableCell>DaaS with Autopilot and Intune. Endpoint security and ZTNA. Collaboration kits with ThinkSmart.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Platform layer</TableHead>
                <TableCell>Service desk integration. Device analytics. VDI starter on TruScale.</TableCell>
                <TableCell>TruScale hybrid cloud. AI copilots. AI Edge for sites. ESG Navigator dashboards.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Competitor */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Competitor 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Customer priority cost</TableHead>
                <TableHead>Customer priority outcome</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Competitor strength weak</TableHead>
                <TableCell>Lead with bundle TCO. Devices plus support plus security. Fast rollout and one invoice.</TableCell>
                <TableCell>Land the platform story. DaaS plus service desk plus TruScale. Clear success metrics and SLA gains.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Competitor strength strong</TableHead>
                <TableCell>Reframe to risk and compliance. ESG reporting and lifecycle proof. Reduce hidden costs from breaches and rework.</TableCell>
                <TableCell>Bring proof with pilots and Innovation Center. Co sell with partners. Show time to value and adoption curve.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Roles and Ownership */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Roles and Ownership 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Pre sale</TableHead>
                <TableHead>Post sale</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Customer facing</TableHead>
                <TableCell>Account manager and solution architect. Discovery and value map. Competitive position.</TableCell>
                <TableCell>Success manager and exec sponsor. Quarterly value review. Expansion plan.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Delivery teams</TableHead>
                <TableCell>Presales engineer and partner manager. Scope and sizing. Statement of work.</TableCell>
                <TableCell>Delivery lead and service desk lead and security lead and cloud lead. Run and improve.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Partners */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Partners 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>MSP focus</TableHead>
                <TableHead>GSI focus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Co sell motion</TableHead>
                <TableCell>SMB Workforce packs with MSP service desk. Lenovo brand with partner delivery.</TableCell>
                <TableCell>State health and state gov programs. Lenovo stack inside GSI program plan.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Resell motion</TableHead>
                <TableCell>Device and support resale with light managed add ons. Quick throughput.</TableCell>
                <TableCell>Framework supply where GSI primes the deal. Align rebates and attach targets.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Tactics */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Tactics 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Quick motion</TableHead>
                <TableHead>Build motion</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Direct led</TableHead>
                <TableCell>Bundle security and collaboration and ESG with DaaS. Pilot in one site and then expand.</TableCell>
                <TableCell>Create sector blueprint and reference kit. Publish pricing bands and service catalog.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Partner led</TableHead>
                <TableCell>MSP sells Workforce pack. Fast device swaps and remote setup.</TableCell>
                <TableCell>GSI joint solution for gov or health. Shared pipeline and executive cover.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Orchestration */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Orchestration 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Early stage</TableHead>
                <TableHead>Late stage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Business track</TableHead>
                <TableCell>Map outcomes and value metrics. Approve scope and timeline. Secure sponsor.</TableCell>
                <TableCell>Run value reviews and renewals. Expand to new sites and teams.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Technical track</TableHead>
                <TableCell>Environment fit and privacy. Integration plan for M365 and identity and network.</TableCell>
                <TableCell>Cutover and steady state. Telemetry and SLA dashboards and change plan.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Stakeholder */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Stakeholder 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Tactical focus</TableHead>
                <TableHead>Strategic focus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Operational roles</TableHead>
                <TableCell>IT leads want uptime and ticket speed and image control.</TableCell>
                <TableCell>Ops managers want lifecycle analytics and ESG reporting and budget predictability.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Executive roles</TableHead>
                <TableCell>Procurement wants clean OPEX and clear terms.</TableCell>
                <TableCell>CIO and board want compliance and resilience and long term value.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Execution Horizon */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Execution Horizon 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Short term</TableHead>
                <TableHead>Long term</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Low effort</TableHead>
                <TableCell>Wrap DaaS with collaboration kits and security and ESG dashboards. Target education and SMB.</TableCell>
                <TableCell>Basic managed services add. Service desk and patch and device analytics. Keeps footprint sticky.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>High effort</TableHead>
                <TableCell>Launch sector packs in pilots. Orchestrate MSP delivery and light GSI input.</TableCell>
                <TableCell>Full platform subscription with TruScale and AI copilots and ESG guarantee. ANZ flagship model.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Risk vs Opportunity */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Risk vs Opportunity 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Low opportunity</TableHead>
                <TableHead>High opportunity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Low risk</TableHead>
                <TableCell>Device only DaaS. Predictable yet flat. Margin pressure.</TableCell>
                <TableCell>Bundled add ons like security and ESG and collaboration. Clear ROI. Partner friendly.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>High risk</TableHead>
                <TableCell>Point tools with little reuse. High cost and little payoff.</TableCell>
                <TableCell>Sector transformation such as Gov Compliance or Digital Hospital. Needs orchestration yet gives four to seven times revenue.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Geographic Growth */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Geographic Growth 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Growth potential low</TableHead>
                <TableHead>Growth potential high</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Lenovo presence low</TableHead>
                <TableCell>Small councils and one off buys. Keep light touch and nurture.</TableCell>
                <TableCell>Regional health in QLD and WA. Regional universities. NZ SMB via MSPs. Prioritise packs.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Lenovo presence strong</TableHead>
                <TableCell>Federal areas under SI strongholds in Canberra. Maintain device share and wait for entry point.</TableCell>
                <TableCell>NSW and VIC state agencies. Top universities. Large health networks. Push platform subscription.</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {/* Customer Journey */}
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Customer Journey 2x2</h3>
          <Table className="mb-8">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>Device scope</TableHead>
                <TableHead>Platform scope</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Early stage</TableHead>
                <TableCell>DaaS baseline with Premier Support. Imaging and recycling. One site or one unit.</TableCell>
                <TableCell>Add service desk and endpoint security and Autopilot. Start with one function such as finance or field.</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Advanced stage</TableHead>
                <TableCell>Fleet wide refresh and standard build. Stable run and simple adds and moves.</TableCell>
                <TableCell>TruScale hybrid and VDI and AI copilots. ESG Navigator live. Multi year program with value reviews.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-3">Strategy</h3>
              <button onClick={() => scrollToSection('strategy')} className="block text-gray-300 hover:text-white mb-1 transition-colors">Foundation</button>
              <button onClick={() => scrollToSection('trajectory')} className="block text-gray-300 hover:text-white mb-1 transition-colors">Revenue</button>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Packs</h3>
              <button onClick={() => scrollToSection('packs')} className="block text-gray-300 hover:text-white mb-1 transition-colors">Education</button>
              <button onClick={() => scrollToSection('packs')} className="block text-gray-300 hover:text-white mb-1 transition-colors">Healthcare</button>
              <button onClick={() => scrollToSection('packs')} className="block text-gray-300 hover:text-white mb-1 transition-colors">Gov</button>
              <button onClick={() => scrollToSection('packs')} className="block text-gray-300 hover:text-white mb-1 transition-colors">SMB</button>
            </div>
            <div>
              <h3 className="text-white font-bold mb-3">Resources</h3>
              <button onClick={() => scrollToSection('2x2s')} className="block text-gray-300 hover:text-white mb-1 transition-colors">2×2 Library</button>
              <button onClick={() => scrollToSection('competitive')} className="block text-gray-300 hover:text-white mb-1 transition-colors">Competitive</button>
              <button onClick={() => scrollToSection('enhancements')} className="block text-gray-300 hover:text-white mb-1 transition-colors">Enhancements</button>
              <button onClick={() => scrollToSection('jd-alignment')} className="block text-gray-300 hover:text-white mb-1 transition-colors">JD Alignment</button>
              <button onClick={() => scrollToSection('two-by-two-complete')} className="block text-gray-300 hover:text-white mb-1 transition-colors">Complete 2x2 Library</button>
            </div>
          </div>
          
          <div className="text-center border-t border-gray-700 pt-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-block text-white hover:text-red-300 mb-4 text-sm transition-colors"
            >
              ↑ Back to top
            </button>
            <p className="text-gray-400">&copy; Lenovo ANZ Strategy Project | DaaS Growth Playbook</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LenovoMicrosite;