import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { FlipCard } from '@/components/ui/FlipCard';
import { TwoByTwoHeatmap } from '@/components/ui/TwoByTwoHeatmap';
import { ScrollArea } from '@/components/ui/scroll-area';

const LenovoMicrosite = () => {
  const [storiesValue, setStoriesValue] = useState<string[]>([]);

  useEffect(() => {
    // Set noindex for SEO protection
    const metaTag = document.createElement('meta');
    metaTag.name = 'robots';
    metaTag.content = 'noindex,nofollow';
    document.head.appendChild(metaTag);
    
    // Set page title
    document.title = 'Solution Sales Australia';
    
    return () => {
      document.head.removeChild(metaTag);
      document.title = "Troy Latter - Executive Portfolio";
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const expandAllStories = () => {
    setStoriesValue(['story-health-gov', 'story-education', 'story-health-procurement', 'story-gov-exec', 'story-smb-msp', 'story-am-expand', 'story-board']);
  };

  const collapseAllStories = () => {
    setStoriesValue([]);
  };

  const scrollToStory = (storyId: string) => {
    document.getElementById(storyId)?.scrollIntoView({ behavior: 'smooth' });
    // Open the specific story if not already open
    if (!storiesValue.includes(storyId)) {
      setStoriesValue([...storiesValue, storyId]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Tagline */}
      <div className="bg-red-600 text-white text-center py-3">
        <p className="font-semibold">Transforming Lenovo ANZ into a services-led growth engine</p>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-br from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Solution Sales Australia</h1>
          <p className="text-xl mb-6 opacity-90">$10.5M baseline → $65M+ target by Year 5. Workforce Transformation as-a-Service.</p>
          
          {/* Navigation - Simplified to 4 key items */}
          <nav className="flex flex-wrap justify-center gap-4 mt-6">
            <button
              onClick={() => scrollToSection('stories')}
              className="px-4 py-2 text-white hover:text-red-300 font-semibold transition-colors border border-white/20 rounded-md hover:bg-white/10"
            >
              Stakeholder Vignettes
            </button>
            <button
              onClick={() => scrollToSection('vignettes')}
              className="px-4 py-2 text-white hover:text-red-300 font-semibold transition-colors border border-white/20 rounded-md hover:bg-white/10"
            >
              Customer Engagement Vignettes
            </button>
            <Link
              to="/microsites/lenovo/focus-images"
              className="px-4 py-2 text-white hover:text-red-300 font-semibold transition-colors border border-white/20 rounded-md hover:bg-white/10"
            >
              Focus Images
            </Link>
            <Link
              to="/microsites/lenovo/tactical-deck"
              className="px-4 py-2 text-white hover:text-red-300 font-semibold transition-colors border border-white/20 rounded-md hover:bg-white/10"
            >
              Tactical Deck
            </Link>
          </nav>
        </div>
      </header>

      {/* About This Playbook */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">About This Playbook</h2>
          <div className="space-y-6 text-lg">
            <p>
              This site is the outcome of my work building an integrated services playbook for Lenovo ANZ. 
              It combines strategy, architecture, competitive insight, and enablement in one place so teams and partners 
              can see the full picture — not just devices or deals, but the pathways to long-term growth.
            </p>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">About Me</h3>
              <p>
                I'm a technology strategist and architect with 15+ years across AWS, Oracle, Gartner, and Unisys. 
                My work has focused on helping enterprises and governments adopt new models — from cloud and AI 
                through to agentic automation and ESG-linked transformation. At Lenovo, that translates into 
                making sure our services business grows beyond hardware into true "Workforce Transformation as-a-Service."
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Why I Created This</h3>
              <p>
                As I prepared for this interview, I wanted to make sure I could show up as a serious candidate who understands both Lenovo's business and the ANZ market. In doing the work, I uncovered a clear pattern: too many sales conversations stall at devices, when the real opportunity is in DaaS expanding into vertical packs, managed services, and long-tail subscriptions.
              </p>
              <p className="mt-3">
                I built this playbook to organise that insight. Sometimes I work visually, sometimes in words, and by structuring it this way I created both an update for myself and a way to demonstrate to you that I understand the customer journey, the partner ecosystem, and the path Lenovo is on. It's not just research — it's evidence I'm ready to contribute immediately.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">What You'll Find Here</h3>
              <ul className="space-y-2">
                <li>• <b>Strategy:</b> Clear trajectory from $10.5M baseline to $65M+ expanded revenue.</li>
                <li>• <b>Vertical Packs:</b> Education, Healthcare, Government, SMB — each mapped to Lenovo services and partner pathways.</li>
                <li>• <b>Revenue Projections:</b> 5-year growth trajectory with sector-specific ROI models.</li>
                <li>• <b>Stories & Vignettes:</b> Real customer scenarios and engagement frameworks.</li>
                <li>• <b>Sales Support:</b> Enablement tools, proposal development, and delivery frameworks.</li>
                <li>• <b>Focus Images:</b> Strategic visualizations and frameworks for stakeholder presentations.</li>
                <li>• <b>Interview Prep:</b> Alignment with Lenovo's architect JD, plus Q&A for exec-level conversations.</li>
              </ul>
            </div>

            <p>
              This is both a sales tool and an architectural guide. It's designed for Lenovo teams, partners, 
              and customers who want to see the future of our services business in ANZ and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Foundation */}
      <section id="strategy" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">1. Strategy Foundation</h2>
          
          <Card className="bg-white border border-gray-200 shadow-sm">
            <CardContent className="p-6 space-y-6 text-lg">
              <div>
                <p><strong>Baseline</strong><br />
                  Today, Lenovo ANZ DaaS contracts often stop at device + warranty + lifecycle wrap. This delivers stability but caps growth. Value is typically &lt;$15M per vertical, with outcomes limited to hardware refresh and basic support. It's predictable but leaves margin on the table.
                </p>
              </div>
              
              <div>
                <p><strong>Target</strong><br />
                  Shift to verticalised workforce subscriptions that combine <strong>TruScale, AI, ESG, security, and cloud services</strong>. These packs move Lenovo from a "box seller" to a <strong>strategic workforce platform provider</strong>, embedding Lenovo across compliance, sustainability, and productivity domains.
                </p>
              </div>
              
              <div>
                <p><strong>Customer Journey</strong><br />
                  1. <strong>Support stage:</strong> Start with devices, Premier Support, and standard lifecycle services.<br />
                  2. <strong>Managed stage:</strong> Add service desk integration, Autopilot/Intune, ZTNA, device analytics.<br />
                  3. <strong>Advisory stage:</strong> Evolve into a true workforce platform subscription with TruScale hybrid cloud, AI copilots, and ESG Navigator dashboards — giving CIOs unified control and boards measurable ROI.
                </p>
              </div>
              
              <div>
                <p><strong>Strategic Outcome</strong><br />
                  A stable baseline of &lt;$15M becomes a <strong>growth trajectory of $50M+ per vertical</strong> over 3–5 years, with stronger partner attach and stickier client relationships.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>


      {/* Customer Value Framework */}
      <section id="value-framework" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">2. Customer Value Framework</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-red-600">OPEX Simplicity</h3>
                <p className="text-gray-700">Single monthly fee covers everything: devices, support, security, AI tools, and ESG reporting.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Platform Growth</h3>
                <p className="text-gray-700">Start with devices, expand to TruScale cloud, AI productivity, and vertical-specific solutions.</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-3 text-red-600">Measurable Impact</h3>
                <p className="text-gray-700">ESG dashboards, productivity metrics, and compliance reporting built into every solution.</p>
              </CardContent>
            </Card>
          </div>
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
                value: '$8–15M',
                backContent: {
                  summary: 'Lenovo helps universities move beyond device refresh into Smart Campus platforms. By bundling VDI, LMS integration, AI copilots, and ESG dashboards into one predictable fee, we align with student expectations and grant funding rules.',
                  benefits: [
                    'CIOs get lifecycle control and ESG compliance.',
                    'Faculty see faster onboarding and better access to learning apps.',
                    'Students gain hybrid learning anywhere, anytime.'
                  ],
                  roi: 'Reduced lab costs, faster deployment, improved satisfaction scores.'
                }
              },
              {
                title: '🏥 Digital Hospital',
                description: 'Rugged devices + TruScale infra + telehealth kits + AI Edge + ESG Navigator.',
                outcome: 'Secure, sustainable digital hospital.',
                value: '$12–20M',
                backContent: {
                  summary: 'Hospitals need compliance, uptime, and trust. Lenovo\'s Digital Hospital Pack bundles rugged devices, TruScale infra, telehealth kits, and ESG Navigator into a secure OPEX model.',
                  benefits: [
                    'Procurement gains predictable cost and compliance dashboards.',
                    'Clinicians gain reliable, patched devices and AI copilots that reduce admin by 20%.',
                    'Boards see improved audit scores and ESG transparency.'
                  ],
                  roi: 'Downtime cut by 30%, compliance fines avoided, $12–20M long-term uplift.'
                }
              },
              {
                title: '🏛 Gov Compliance',
                description: 'Devices + service desk + ZTNA + TruScale hybrid + ESG dashboards.',
                outcome: 'Procurement-ready, compliance-ready workplace.',
                value: '$15–25M',
                backContent: {
                  summary: 'Governments demand accountability and transparency. Lenovo\'s Compliance Pack turns devices into full workplace platforms with service desk, ZTNA, TruScale hybrid, and ESG dashboards.',
                  benefits: [
                    'Executives gain simple OPEX control.',
                    'IT leads gain standard secure builds and faster audits.',
                    'Boards and ministers gain ESG reporting they can take to the public.'
                  ],
                  roi: 'Faster compliance cycles, carbon footprint visibility, $15–25M program value.'
                }
              },
              {
                title: '💼 SMB Workforce',
                description: 'Devices + MSP service desk + TruScale SMB + AI copilots + simplified ESG.',
                outcome: 'Workforce transformation without enterprise cost.',
                value: '$2–5M',
                backContent: {
                  summary: 'Small and mid-market businesses need enterprise-grade capability without enterprise cost. Lenovo\'s Workforce Pack gives MSPs a white-labeled solution that scales.',
                  benefits: [
                    'Owners gain predictable monthly pricing.',
                    'Employees get full kits (laptop, dock, monitor, headset) supported by MSP-led service desk.',
                    'MSPs unlock recurring revenue and margin.'
                  ],
                  roi: 'Reduced churn, workforce productivity gains, $2–5M deal size with multi-client rollouts.'
                }
              }
            ].map((pack, index) => (
              <FlipCard
                key={index}
                front={
                  <div className="h-full flex flex-col p-1">
                    <h3 className="text-lg font-bold mb-2 text-red-600">{pack.title}</h3>
                    <p className="mb-3 flex-grow text-sm leading-relaxed">{pack.description}</p>
                    <div className="space-y-1">
                      <p className="text-sm"><strong>Outcome:</strong> {pack.outcome}</p>
                      <p className="text-sm"><strong>Value:</strong> {pack.value}</p>
                    </div>
                  </div>
                }
                back={
                  <div className="h-full flex flex-col p-1">
                    <h3 className="text-lg font-bold mb-2 text-red-600">{pack.title} - Details</h3>
                    <p className="mb-3 text-sm leading-relaxed">{pack.backContent.summary}</p>
                    <div className="mb-3 flex-grow">
                      <ul className="space-y-1">
                        {pack.backContent.benefits.map((benefit, i) => (
                          <li key={i} className="text-xs leading-relaxed">• <strong>{benefit.split(' ')[0]}</strong> {benefit.substring(benefit.indexOf(' ') + 1)}</li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-xs leading-relaxed"><strong>ROI:</strong> {pack.backContent.roi}</p>
                  </div>
                }
                className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enablement Assets */}
      <section id="enablement" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">4. Enablement Assets</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">🔹 Customer One-Pager</h3>
                <p className="mb-4 font-semibold">One predictable monthly fee. Everything your workforce needs.</p>
                
                <p className="mb-4">
                  Lenovo's Device-as-a-Service (DaaS) model in ANZ is built to shift the conversation from hardware refresh to workforce transformation. Every subscription bundles devices, service desk, security, AI productivity tools, and ESG dashboards — wrapped into a single OPEX line.
                </p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Education – Smart Campus ($8–15M)</h4>
                    <p className="text-sm"><strong>Baseline:</strong> fleet refresh with ThinkPads + Premier Support.</p>
                    <p className="text-sm"><strong>Expansion:</strong> TruScale VDI for labs, LMS integration, Autopilot for faculty onboarding.</p>
                    <p className="text-sm"><strong>ROI:</strong> lower lab operating costs, faster student access, compliance with sustainability grants.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Healthcare – Digital Hospital ($12–20M)</h4>
                    <p className="text-sm"><strong>Baseline:</strong> rugged devices with secure imaging and patch compliance.</p>
                    <p className="text-sm"><strong>Expansion:</strong> TruScale hybrid cloud for patient record access, AI copilots for clinicians, telehealth kits.</p>
                    <p className="text-sm"><strong>ROI:</strong> downtime reduced 30%, compliance penalties avoided, measurable patient experience improvements.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Government – Compliance-Ready Workplace ($15–25M)</h4>
                    <p className="text-sm"><strong>Baseline:</strong> standard secure builds with Premier Support.</p>
                    <p className="text-sm"><strong>Expansion:</strong> TruScale hybrid + ESG Navigator dashboards, managed service desk, ZTNA.</p>
                    <p className="text-sm"><strong>ROI:</strong> faster audits, carbon tracking per device, predictable budget cycles.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">SMB – Workforce Packs ($2–5M)</h4>
                    <p className="text-sm"><strong>Baseline:</strong> laptops, docking, monitors, Premier Support.</p>
                    <p className="text-sm"><strong>Expansion:</strong> MSP-delivered service desk, Autopilot, AI copilots, ESG dashboards.</p>
                    <p className="text-sm"><strong>ROI:</strong> reduced churn, improved staff experience, simple billing per headcount.</p>
                  </div>
                </div>

                <p className="mt-4 font-medium">Why it matters: Customers move from device churn to a 5-year transformation journey. Each step adds services, margin, and measurable business outcomes.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">🔹 Partner One-Pager</h3>
                <p className="mb-4 font-semibold">Every device becomes a 5-year services relationship.</p>
                
                <p className="mb-4">
                  Lenovo's DaaS and TruScale model is designed for partner profitability and client stickiness. Instead of one-off hardware deals, partners lock in recurring revenue streams tied to devices, services, and ESG/AI value.
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Partner Benefits</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Recurring revenue:</strong> Shift from transactional hardware sales to annuity-style income.</li>
                    <li>• <strong>Higher margins:</strong> Services, AI copilots, and ESG Navigator add 15–25% uplift.</li>
                    <li>• <strong>Stickier clients:</strong> Bundles embed Lenovo into daily operations, raising renewal rates.</li>
                    <li>• <strong>Rebates:</strong> Up to 4% for TruScale and DaaS contracts.</li>
                    <li>• <strong>Revenue uplift:</strong> 5–10x baseline deal size when bundles are fully adopted.</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Partner Motions</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>MSPs:</strong> White-label Lenovo Workforce Packs for SMB, with Lenovo brand + partner delivery.</li>
                    <li>• <strong>GSIs:</strong> Integrate Lenovo's compliance and ESG tools into large government and healthcare programs.</li>
                    <li>• <strong>ISVs:</strong> Package LMS, telehealth, or retail POS software with Lenovo DaaS bundles.</li>
                  </ul>
                </div>

                <p className="font-medium">Why it matters: Partners don't just sell boxes. They own multi-year client relationships, with Lenovo as the backbone for compliance, ESG, and workforce productivity.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section id="competitive" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">5. Competitive Comparison</h2>
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

      {/* Stories */}
      <section id="stories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">6. Stakeholder Vignettes</h2>
          <p className="text-lg text-gray-700 mb-8">
            Real scenarios that show the architect role in action. Each story maps to the job description pillars. 
            Pick a card or open them all.
          </p>

          {/* Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                id: 'story-health-gov',
                title: 'Digital health plus government',
                description: 'Compliance ready hospital network with public reporting and steady OPEX.',
                tags: 'Health • Government • Compliance • ESG',
                fullContent: {
                  context: 'State hospitals face outages and audit findings. The ministry needs trust back. The network needs a plan that works across sites and budgets.',
                  pain: 'Unpatched devices. Slow ticket times. No clear ESG view. Headlines and board pressure.',
                  engagement: 'Set the journey. Support then managed then advisory. Use the risk and opportunity 2x2 to move off device only. Build a joint plan with the CIO and procurement.',
                  solution: 'Rugged ThinkPads and ThinkSmart. Premier Support with service desk integration. TruScale VDI for secure access. Intune and ZTNA. AI copilots for notes and asset health. ESG Navigator with site and fleet views. One OPEX line.',
                  enablement: 'Baseline three million then grow to twenty million across eight hospitals. Downtime down by a third. Compliance penalties avoided. Clear service levels and value reviews.',
                  market: 'HP strong in tenders. Dell infra heavy. HPE program led. Lenovo wins with ESG Navigator and TruScale with partner delivery.',
                  influence: 'Board wants a clean story. Show quick wins in year one and a platform by year five. Use the execution horizon 2x2. Make outcomes plain.',
                  outcomes: 'Year one stability and audit fixes. Year three VDI and AI in service. Year five ESG reporting at network level and steady OPEX. Public trust improves.',
                  lessons: 'Compliance drives adoption. OPEX plus ESG plus AI is the winning mix. Partners extend reach without noise.',
                  jdAlignment: 'Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset'
                }
              },
              {
                id: 'story-education',
                title: 'Smart campus',
                description: 'Hybrid learning that scales with ESG and VDI. Clear ROI for the board.',
                tags: 'Education • CIO • VDI • AI',
                fullContent: {
                  context: 'A university wants hybrid learning that works and a footprint that meets ESG rules. Spend is tight and student demand is high.',
                  pain: 'Lab desktops are slow. Imaging is manual. Remote access is clunky. No clean carbon view for grants.',
                  engagement: 'Map needs to the future of learning pack. Start with one faculty. Show a path to campus wide rollout. Use the customer journey 2x2 to set scope.',
                  solution: 'ThinkPad and ThinkCentre refresh. Autopilot and Intune. Premier Support with predictive care. TruScale VDI for labs. LMS links for Moodle and Canvas. AI copilots for students and staff. ESG Navigator by cohort and device.',
                  enablement: 'Baseline two million then expand to fifteen million over five years. Lower cost to run labs. Faster device setup. Better learning access.',
                  market: 'HP leads many tenders. Apple has brand pull but weak lifecycle. Lenovo wins with VDI and ESG in one plan.',
                  influence: 'Senate cares about student outcomes and grants. Show access gains and ESG proof. Keep the story in plain terms.',
                  outcomes: 'Year one pilot live. Year three campus wide VDI. Year five AI and ESG as standard practice.',
                  lessons: 'Start small. Prove value fast. Make the platform hard to replace.',
                  jdAlignment: 'Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset'
                }
              },
              {
                id: 'story-health-procurement',
                title: 'Procurement first digital hospital',
                description: 'Risk down and uptime up. Rugged fleet with service desk and TruScale.',
                tags: 'Health • Procurement • SLAs • OPEX',
                fullContent: {
                  context: 'A hospital network buys on risk and value. They want steady cost and clean contracts.',
                  pain: 'Many device models. Many vendors. SLAs missed. No one view of service.',
                  engagement: 'Lead with a compliance first pack. Show how OPEX and service desk give control. Bring the partner who runs the desk.',
                  solution: 'One fleet standard. Premier Support with a shared portal. Patch and image as code. TruScale for peak loads. Telehealth kits. AI for ticket triage.',
                  enablement: 'Uptime up. Incident time down. Cost spread over the term. Baseline three million to twenty million with scale by site.',
                  market: 'Dell will push infra and HPE will push programs. Keep the focus on outcomes and service. That is the Lenovo edge.',
                  influence: 'Keep the language in control terms. Risk down. Outcome up. Contract simple.',
                  outcomes: 'Better audits. Fewer vendors. Faster rollout. Clear value reviews.',
                  lessons: 'Procurement is a partner when you speak in their terms and show real control.',
                  jdAlignment: 'Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset'
                }
              },
              {
                id: 'story-gov-exec',
                title: 'State workplace compliance',
                description: 'Secure devices and service desk with ESG dashboards across sites.',
                tags: 'Government • Exec • Compliance • ESG',
                fullContent: {
                  context: 'A state department needs a secure workplace that meets ESG targets and public rules.',
                  pain: 'Split budgets. Inconsistent builds. No shared metrics. Slow response to audits.',
                  engagement: 'Use the gov pack. Show a secure build and a managed desk with TruScale hybrid. Tie it to ESG Navigator so reporting is instant.',
                  solution: 'Standard devices. ZTNA. Autopilot. Premier Support. TruScale for burst. Dashboards for ESG and SLAs.',
                  enablement: 'Baseline five million then move to twenty five million with a multi agency scope. One contract and a services catalog.',
                  market: 'HP strong in this space. Lenovo wins when the story is compliance and service with OPEX and partner reach.',
                  influence: 'Execs need a clean plan and a single view of value. Keep it simple and prove it in one branch first.',
                  outcomes: 'Faster audits. Measured service. Better staff experience.',
                  lessons: 'Compliance gives cover to move fast when the offer is clear and safe.',
                  jdAlignment: 'Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset'
                }
              },
              {
                id: 'story-smb-msp',
                title: 'MSP workforce pack',
                description: 'Channel led growth in mid market with white label service desk.',
                tags: 'SMB • MSP • Recurring revenue',
                fullContent: {
                  context: 'An MSP wants growth and stable margin. Their clients want simple and fast.',
                  pain: 'Many tools. Many tickets. Hard to price. Hard to scale.',
                  engagement: 'Offer the workforce pack under Lenovo brand with MSP delivery. White label the desk. Shared dashboard.',
                  solution: 'ThinkBook and ThinkCentre. Dock and monitor. Premier Support. Intune and Autopilot. TruScale SMB. AI copilots. Simple tiers.',
                  enablement: 'One client worth two to five million over term. Ten clients become a stable book. Renewals are built in.',
                  market: 'Dell will talk infra. Apple will talk devices. Lenovo gives a repeatable pack with partner margin.',
                  influence: 'Show the MSP how attach creates stickiness. Show how the desk is theirs to run.',
                  outcomes: 'Faster sales. Lower churn. Better NPS. More cross sell.',
                  lessons: 'Keep tiers clean. Keep billing simple. Share the win.',
                  jdAlignment: 'Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset'
                }
              },
              {
                id: 'story-am-expand',
                title: 'Land and expand with the AM',
                description: 'From device win to multi year program with clear attach steps.',
                tags: 'Sales • Presales • Attach',
                fullContent: {
                  context: 'An account manager wins devices. They want to grow the account but the path is not clear.',
                  pain: 'Short cycles. Price fights. No air cover for service deals.',
                  engagement: 'Build the account plan with the journey view. Set attach steps. Map roles and ownership with the roles 2x2.',
                  solution: 'From devices to Premier Support to security and desk. Then TruScale and AI. Then ESG Navigator. Each step has simple proof and a call to value review.',
                  enablement: 'Sales kit for demos. ROI slides. Competitive points that fit the sector. Clear price bands.',
                  market: 'Position against HP and Dell with the platform story. Use case links in that sector.',
                  influence: 'Coach the team. Run exec calls. Keep language plain and linked to outcomes.',
                  outcomes: 'Higher attach. Better renewals. Multi year view.',
                  lessons: 'Make the next step obvious. Always book the value review.',
                  jdAlignment: 'Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset'
                }
              },
              {
                id: 'story-board',
                title: 'Board renewal and expansion',
                description: 'Simple story that links cost trust and compliance to outcomes.',
                tags: 'Board • Renewal • ESG • Risk',
                fullContent: {
                  context: 'A large client is up for renewal. The chair wants trust and proof. The team wants a simple choice.',
                  pain: 'Many vendors. No single view of value. Fear of risk if they switch.',
                  engagement: 'Build a board brief with outcomes and numbers. Use the competitor 2x2 to show why Lenovo. Keep to one page per topic in the talk.',
                  solution: 'Devices and desk and TruScale and AI and ESG as one platform. One OPEX. One dashboard. One owner.',
                  enablement: 'Baseline to expanded curve with real dates. Audits passed. Staff scores up. Cost stable.',
                  market: 'Others can sell parts. Lenovo brings the whole. That is the win.',
                  influence: 'Speak in board terms. Risk and outcome and trust. Make it easy to say yes.',
                  outcomes: 'Renewal approved. Expansion funded. Simple plan locked.',
                  lessons: 'Boards back simple plans that show proof and control.',
                  jdAlignment: 'Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset'
                }
              }
            ].map((story) => (
              <FlipCard
                key={story.id}
                className="h-96"
                front={
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-red-600">{story.title}</h3>
                    <p className="text-gray-700 font-medium">{story.description}</p>
                    <p className="text-xs text-red-600 font-medium">{story.tags}</p>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Context:</p>
                        <p className="text-sm text-gray-700">{story.fullContent.context}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Pain:</p>
                        <p className="text-sm text-gray-700">{story.fullContent.pain}</p>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <ScrollArea className="h-full">
                    <div className="space-y-3 pr-2">
                      <h3 className="text-lg font-bold text-red-600">{story.title}</h3>
                      <div className="space-y-2 text-xs">
                        <div>
                          <p className="font-semibold text-gray-900">Engagement:</p>
                          <p className="text-gray-700">{story.fullContent.engagement}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Solution:</p>
                          <p className="text-gray-700">{story.fullContent.solution}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Market:</p>
                          <p className="text-gray-700">{story.fullContent.market}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-green-700">Outcomes:</p>
                          <p className="text-gray-700">{story.fullContent.outcomes}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Lessons:</p>
                          <p className="text-gray-700">{story.fullContent.lessons}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">JD Alignment:</p>
                          <p className="text-gray-700">{story.fullContent.jdAlignment}</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById(story.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 px-3 py-2 bg-red-600 text-white text-xs rounded-md hover:bg-red-700 transition-colors w-full"
                      >
                        View Full Vignette
                      </button>
                    </div>
                  </ScrollArea>
                }
              />
            ))}
          </div>

          {/* Controls */}
          <div className="mb-8 flex gap-3">
            <button 
              onClick={expandAllStories}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
            >
              Expand all
            </button>
            <button 
              onClick={collapseAllStories}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors font-medium"
            >
              Collapse all
            </button>
          </div>

          {/* Stories accordion */}
          <Accordion type="multiple" value={storiesValue} onValueChange={setStoriesValue} className="space-y-3">
            {/* Story 1 */}
            <AccordionItem id="story-health-gov" value="story-health-gov" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                Digital health plus government
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1">
                <div className="space-y-4 text-sm">
                  <p><strong>Context:</strong> State hospitals face outages and audit findings. The ministry needs trust back. The network needs a plan that works across sites and budgets.</p>
                  <p><strong>Pain:</strong> Unpatched devices. Slow ticket times. No clear ESG view. Headlines and board pressure.</p>
                  <p><strong>Engagement:</strong> Set the journey. Support then managed then advisory. Use the risk and opportunity 2x2 to move off device only. Build a joint plan with the CIO and procurement.</p>
                  <p><strong>Solution:</strong> Rugged ThinkPads and ThinkSmart. Premier Support with service desk integration. TruScale VDI for secure access. Intune and ZTNA. AI copilots for notes and asset health. ESG Navigator with site and fleet views. One OPEX line.</p>
                  <p><strong>Enablement:</strong> Baseline three million then grow to twenty million across eight hospitals. Downtime down by a third. Compliance penalties avoided. Clear service levels and value reviews.</p>
                  <p><strong>Market:</strong> HP strong in tenders. Dell infra heavy. HPE program led. Lenovo wins with ESG Navigator and TruScale with partner delivery.</p>
                  <p><strong>Influence:</strong> Board wants a clean story. Show quick wins in year one and a platform by year five. Use the execution horizon 2x2. Make outcomes plain.</p>
                  <p><strong>Outcomes:</strong> Year one stability and audit fixes. Year three VDI and AI in service. Year five ESG reporting at network level and steady OPEX. Public trust improves.</p>
                  <p><strong>Lessons:</strong> Compliance drives adoption. OPEX plus ESG plus AI is the winning mix. Partners extend reach without noise.</p>
                  <p><strong>JD alignment:</strong> Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Story 2 */}
            <AccordionItem id="story-education" value="story-education" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                Smart campus
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1">
                <div className="space-y-4 text-sm">
                  <p><strong>Context:</strong> A university wants hybrid learning that works and a footprint that meets ESG rules. Spend is tight and student demand is high.</p>
                  <p><strong>Pain:</strong> Lab desktops are slow. Imaging is manual. Remote access is clunky. No clean carbon view for grants.</p>
                  <p><strong>Engagement:</strong> Map needs to the future of learning pack. Start with one faculty. Show a path to campus wide rollout. Use the customer journey 2x2 to set scope.</p>
                  <p><strong>Solution:</strong> ThinkPad and ThinkCentre refresh. Autopilot and Intune. Premier Support with predictive care. TruScale VDI for labs. LMS links for Moodle and Canvas. AI copilots for students and staff. ESG Navigator by cohort and device.</p>
                  <p><strong>Enablement:</strong> Baseline two million then expand to fifteen million over five years. Lower cost to run labs. Faster device setup. Better learning access.</p>
                  <p><strong>Market:</strong> HP leads many tenders. Apple has brand pull but weak lifecycle. Lenovo wins with VDI and ESG in one plan.</p>
                  <p><strong>Influence:</strong> Senate cares about student outcomes and grants. Show access gains and ESG proof. Keep the story in plain terms.</p>
                  <p><strong>Outcomes:</strong> Year one pilot live. Year three campus wide VDI. Year five AI and ESG as standard practice.</p>
                  <p><strong>Lessons:</strong> Start small. Prove value fast. Make the platform hard to replace.</p>
                  <p><strong>JD alignment:</strong> Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Story 3 */}
            <AccordionItem id="story-health-procurement" value="story-health-procurement" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                Procurement first digital hospital
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1">
                <div className="space-y-4 text-sm">
                  <p><strong>Context:</strong> A hospital network buys on risk and value. They want steady cost and clean contracts.</p>
                  <p><strong>Pain:</strong> Many device models. Many vendors. SLAs missed. No one view of service.</p>
                  <p><strong>Engagement:</strong> Lead with a compliance first pack. Show how OPEX and service desk give control. Bring the partner who runs the desk.</p>
                  <p><strong>Solution:</strong> One fleet standard. Premier Support with a shared portal. Patch and image as code. TruScale for peak loads. Telehealth kits. AI for ticket triage.</p>
                  <p><strong>Enablement:</strong> Uptime up. Incident time down. Cost spread over the term. Baseline three million to twenty million with scale by site.</p>
                  <p><strong>Market:</strong> Dell will push infra and HPE will push programs. Keep the focus on outcomes and service. That is the Lenovo edge.</p>
                  <p><strong>Influence:</strong> Keep the language in control terms. Risk down. Outcome up. Contract simple.</p>
                  <p><strong>Outcomes:</strong> Better audits. Fewer vendors. Faster rollout. Clear value reviews.</p>
                  <p><strong>Lessons:</strong> Procurement is a partner when you speak in their terms and show real control.</p>
                  <p><strong>JD alignment:</strong> Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Story 4 */}
            <AccordionItem id="story-gov-exec" value="story-gov-exec" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                State workplace compliance
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1">
                <div className="space-y-4 text-sm">
                  <p><strong>Context:</strong> A state department needs a secure workplace that meets ESG targets and public rules.</p>
                  <p><strong>Pain:</strong> Split budgets. Inconsistent builds. No shared metrics. Slow response to audits.</p>
                  <p><strong>Engagement:</strong> Use the gov pack. Show a secure build and a managed desk with TruScale hybrid. Tie it to ESG Navigator so reporting is instant.</p>
                  <p><strong>Solution:</strong> Standard devices. ZTNA. Autopilot. Premier Support. TruScale for burst. Dashboards for ESG and SLAs.</p>
                  <p><strong>Enablement:</strong> Baseline five million then move to twenty five million with a multi agency scope. One contract and a services catalog.</p>
                  <p><strong>Market:</strong> HP strong in this space. Lenovo wins when the story is compliance and service with OPEX and partner reach.</p>
                  <p><strong>Influence:</strong> Execs need a clean plan and a single view of value. Keep it simple and prove it in one branch first.</p>
                  <p><strong>Outcomes:</strong> Faster audits. Measured service. Better staff experience.</p>
                  <p><strong>Lessons:</strong> Compliance gives cover to move fast when the offer is clear and safe.</p>
                  <p><strong>JD alignment:</strong> Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Story 5 */}
            <AccordionItem id="story-smb-msp" value="story-smb-msp" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                MSP workforce pack
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1">
                <div className="space-y-4 text-sm">
                  <p><strong>Context:</strong> An MSP wants growth and stable margin. Their clients want simple and fast.</p>
                  <p><strong>Pain:</strong> Many tools. Many tickets. Hard to price. Hard to scale.</p>
                  <p><strong>Engagement:</strong> Offer the workforce pack under Lenovo brand with MSP delivery. White label the desk. Shared dashboard.</p>
                  <p><strong>Solution:</strong> ThinkBook and ThinkCentre. Dock and monitor. Premier Support. Intune and Autopilot. TruScale SMB. AI copilots. Simple tiers.</p>
                  <p><strong>Enablement:</strong> One client worth two to five million over term. Ten clients become a stable book. Renewals are built in.</p>
                  <p><strong>Market:</strong> Dell will talk infra. Apple will talk devices. Lenovo gives a repeatable pack with partner margin.</p>
                  <p><strong>Influence:</strong> Show the MSP how attach creates stickiness. Show how the desk is theirs to run.</p>
                  <p><strong>Outcomes:</strong> Faster sales. Lower churn. Better NPS. More cross sell.</p>
                  <p><strong>Lessons:</strong> Keep tiers clean. Keep billing simple. Share the win.</p>
                  <p><strong>JD alignment:</strong> Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Story 6 */}
            <AccordionItem id="story-am-expand" value="story-am-expand" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                Land and expand with the AM
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1">
                <div className="space-y-4 text-sm">
                  <p><strong>Context:</strong> An account manager wins devices. They want to grow the account but the path is not clear.</p>
                  <p><strong>Pain:</strong> Short cycles. Price fights. No air cover for service deals.</p>
                  <p><strong>Engagement:</strong> Build the account plan with the journey view. Set attach steps. Map roles and ownership with the roles 2x2.</p>
                  <p><strong>Solution:</strong> From devices to Premier Support to security and desk. Then TruScale and AI. Then ESG Navigator. Each step has simple proof and a call to value review.</p>
                  <p><strong>Enablement:</strong> Sales kit for demos. ROI slides. Competitive points that fit the sector. Clear price bands.</p>
                  <p><strong>Market:</strong> Position against HP and Dell with the platform story. Use case links in that sector.</p>
                  <p><strong>Influence:</strong> Coach the team. Run exec calls. Keep language plain and linked to outcomes.</p>
                  <p><strong>Outcomes:</strong> Higher attach. Better renewals. Multi year view.</p>
                  <p><strong>Lessons:</strong> Make the next step obvious. Always book the value review.</p>
                  <p><strong>JD alignment:</strong> Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Story 7 */}
            <AccordionItem id="story-board" value="story-board" className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                Board renewal and expansion
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-1">
                <div className="space-y-4 text-sm">
                  <p><strong>Context:</strong> A large client is up for renewal. The chair wants trust and proof. The team wants a simple choice.</p>
                  <p><strong>Pain:</strong> Many vendors. No single view of value. Fear of risk if they switch.</p>
                  <p><strong>Engagement:</strong> Build a board brief with outcomes and numbers. Use the competitor 2x2 to show why Lenovo. Keep to one page per topic in the talk.</p>
                  <p><strong>Solution:</strong> Devices and desk and TruScale and AI and ESG as one platform. One OPEX. One dashboard. One owner.</p>
                  <p><strong>Enablement:</strong> Baseline to expanded curve with real dates. Audits passed. Staff scores up. Cost stable.</p>
                  <p><strong>Market:</strong> Others can sell parts. Lenovo brings the whole. That is the win.</p>
                  <p><strong>Influence:</strong> Speak in board terms. Risk and outcome and trust. Make it easy to say yes.</p>
                  <p><strong>Outcomes:</strong> Renewal approved. Expansion funded. Simple plan locked.</p>
                  <p><strong>Lessons:</strong> Boards back simple plans that show proof and control.</p>
                  <p><strong>JD alignment:</strong> Client engagement and strategy • Solution design and delivery • Sales enablement and execution • Market and competitive insight • Influence and mindset</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Customer Engagement Vignettes */}
      <section id="vignettes" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">7. Customer Engagement Vignettes</h2>
          <p className="text-lg text-gray-700 mb-8">
            Six real-world scenarios showing how Lenovo's DaaS strategy translates into customer engagement, 
            solution design, and revenue outcomes across different verticals and stakeholders.
          </p>

          {/* Flip Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              {
                id: 'vignette-1',
                title: 'Education CIO',
                subtitle: 'Smart Campus Transformation',
                context: 'University CIO tasked with modernising IT for hybrid learning. Budget caps, sustainability mandates.',
                pain: 'Device fleet refresh becomes another short-term patch. Multiple vendor complexity.',
                outcome: 'Multi-year Lenovo-led transformation. $2M baseline → $15M expanded.',
                alignment: 'Client engagement • Solution design • Sales enablement • Market insight • Influence',
                fullDetails: {
                  jdAlignment: [
                    'Client Engagement & Strategy: Map CIO pain into Lenovo\'s "Future of Learning" pack. Frame as multi-year journey.',
                    'Solution Design & Delivery: Orchestrate Lenovo presales + MSP for Intune/Autopilot + TruScale VDI + ESG dashboards.',
                    'Sales Enablement & Execution: Present ROI curve: $2M baseline → $15M expanded.',
                    'Market Insight: Contrast Lenovo\'s ESG Navigator + OPEX model with HP/Dell infra-heavy.',
                    'Influence & Mindset: Simplify stack → "From device refresh to Smart Campus."'
                  ],
                  narrative: 'CIO fears device fleet refresh will become another short-term patch. Troy reframes: devices + TruScale + AI copilots + ESG = Smart Campus platform. Stakeholders (faculty, IT leads, board) each see their win.'
                }
              },
              {
                id: 'vignette-2',
                title: 'Healthcare Procurement',
                subtitle: 'Digital Hospital Strategy',
                context: 'State hospital group must refresh rugged devices, meet compliance, cut downtime.',
                pain: 'Procurement sees only cost; compliance risk growing; vendor fragmentation.',
                outcome: 'Lenovo trusted partner for both procurement and clinicians. Platform approach wins.',
                alignment: 'Client engagement • Solution delivery • Sales enablement • Market insight',
                fullDetails: {
                  jdAlignment: [
                    'Client Engagement & Strategy: Reframe procurement conversation from "cost" to "compliance + control."',
                    'Solution Design & Delivery: Build sector-specific health pack with rugged devices + service desk + compliance dashboard.',
                    'Sales Enablement & Execution: Show TCO with risk mitigation vs. device-only approaches.',
                    'Market Insight: Position against Dell/HP infra complexity with simpler Lenovo platform story.'
                  ],
                  narrative: 'Procurement lead initially sees device refresh as commodity purchase. Troy demonstrates how Lenovo\'s health pack reduces vendor complexity, meets compliance mandates, and provides OPEX predictability. Board approves multi-year platform approach.'
                }
              },
              {
                id: 'vignette-3',
                title: 'State Government Executive',
                subtitle: 'Gov Compliance Platform',
                context: 'State department pressured by ESG targets, citizen trust, fragmented IT spend.',
                pain: 'Too many vendors. No clear value view. Risk of complex procurement cycles.',
                outcome: 'Lenovo positioned as strategic ANZ government partner. Compliance-ready workplace.',
                alignment: 'Client engagement • Solution delivery • Sales enablement • Market insight',
                fullDetails: {
                  jdAlignment: [
                    'Client Engagement & Strategy: Frame Lenovo as the "whole-of-government workplace" partner.',
                    'Solution Design & Delivery: Orchestrate secure devices + ESG Navigator + compliance dashboards.',
                    'Sales Enablement & Execution: Present government pack with clear ROI and risk mitigation.',
                    'Market Insight: Differentiate from HP/Dell with integrated ESG + compliance story.'
                  ],
                  narrative: 'Executive wants simple governance story for citizen trust. Troy positions Lenovo government pack as the single-vendor solution for secure, compliant, and sustainable workplace across agencies.'
                }
              },
              {
                id: 'vignette-4',
                title: 'SMB MSP Partner',
                subtitle: 'Workforce Pack Scale-out',
                context: 'MSP servicing 500-seat commercial mid-market. Seeks growth via Lenovo partnership.',
                pain: 'MSP wary of Lenovo cutting into margin. Complex integration challenges.',
                outcome: 'Lenovo sticks in SMB via MSP scale-out. Partner-led revenue growth.',
                alignment: 'Client engagement • Solution delivery • Sales enablement • Market insight',
                fullDetails: {
                  jdAlignment: [
                    'Client Engagement & Strategy: Build MSP as true partner, not just channel.',
                    'Solution Design & Delivery: Design white-label workforce packs with MSP branding.',
                    'Sales Enablement & Execution: Enable MSP with repeatable sales playbooks and ROI models.',
                    'Market Insight: Position Lenovo+MSP as alternative to Dell/HP direct approaches.'
                  ],
                  narrative: 'MSP wants growth but fears vendor conflict. Troy structures partnership where Lenovo provides platform, MSP owns client relationship, shared success metrics align both parties.'
                }
              },
              {
                id: 'vignette-5',
                title: 'Lenovo Account Manager',
                subtitle: 'Land & Expand Strategy',
                context: 'AM wins devices but wants account growth. Limited services capability.',
                pain: 'Short cycles. Price fights. No clear expansion pathway.',
                outcome: 'Higher attach rates. Better renewals. Multi-year account relationship.',
                alignment: 'Client engagement • Solution design • Sales enablement • Market insight',
                fullDetails: {
                  jdAlignment: [
                    'Client Engagement & Strategy: Coach AM to move from transactional to strategic account management.',
                    'Solution Design & Delivery: Build account expansion roadmap using vertical packs.',
                    'Sales Enablement & Execution: Provide AM with attach tools, competitive battlecards, ROI calculators.',
                    'Market Insight: Position services attach as differentiation vs. HP/Dell device-only approaches.'
                  ],
                  narrative: 'AM comfortable selling devices but struggles with services expansion. Troy enables with structured land-and-expand methodology, clear value propositions for each attach opportunity.'
                }
              },
              {
                id: 'vignette-6',
                title: 'Board Chair',
                subtitle: 'Renewal & Expansion Decision',
                context: 'Large customer board deciding renewal. Chair wants confidence in compliance and ESG.',
                pain: 'Vendor fatigue. Risk aversion. Need for simple governance story.',
                outcome: 'Renewal approved, expansion budget unlocked, board trust cemented.',
                alignment: 'Client engagement • Solution delivery • Sales enablement • Influence',
                fullDetails: {
                  jdAlignment: [
                    'Client Engagement & Strategy: Frame Lenovo as the "trusted platform partner" for board confidence.',
                    'Solution Design & Delivery: Present integrated platform story: devices + services + ESG + compliance.',
                    'Sales Enablement & Execution: Enable stakeholders with board-ready business case and ROI proof.',
                    'Influence & Mindset: Simplify complex IT landscape into single vendor relationship for governance ease.'
                  ],
                  narrative: 'Board chair tired of vendor complexity, wants simple renewal decision. Troy presents Lenovo as the single-platform solution that reduces vendor risk, meets compliance obligations, and delivers measurable outcomes.'
                }
              },
            ].map((vignette) => (
              <FlipCard
                key={vignette.id}
                className="h-96"
                front={
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-red-600">{vignette.title}</h3>
                    <p className="text-gray-700 font-medium">{vignette.subtitle}</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Context:</p>
                        <p className="text-sm text-gray-700">{vignette.context}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Challenge:</p>
                        <p className="text-sm text-gray-700">{vignette.pain}</p>
                      </div>
                    </div>
                  </div>
                }
                back={
                  <ScrollArea className="h-full">
                    <div className="space-y-3 pr-2">
                      <h3 className="text-lg font-bold text-red-600">{vignette.title}</h3>
                      <div className="space-y-2 text-xs">
                        <div>
                          <p className="font-semibold text-green-700">Outcome:</p>
                          <p className="text-gray-700">{vignette.outcome}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">JD Alignment:</p>
                          <ul className="space-y-1 text-gray-700">
                            {vignette.fullDetails.jdAlignment.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Narrative Arc:</p>
                          <p className="text-gray-700">{vignette.fullDetails.narrative}</p>
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById(vignette.id)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-4 px-3 py-2 bg-red-600 text-white text-xs rounded-md hover:bg-red-700 transition-colors w-full"
                      >
                        View Full Vignette
                      </button>
                    </div>
                  </ScrollArea>
                }
              />
            ))}
          </div>

          {/* Expand/Collapse Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => {
                const allItems = ['vignette-1', 'vignette-2', 'vignette-3', 'vignette-4', 'vignette-5', 'vignette-6'];
                // Simulate expanding all accordions by clicking each trigger
                allItems.forEach(id => {
                  const trigger = document.querySelector(`[data-state="closed"][aria-controls*="${id}"]`) as HTMLButtonElement;
                  if (trigger) trigger.click();
                });
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={() => {
                const allItems = ['vignette-1', 'vignette-2', 'vignette-3', 'vignette-4', 'vignette-5', 'vignette-6'];
                // Simulate collapsing all accordions by clicking each open trigger
                allItems.forEach(id => {
                  const trigger = document.querySelector(`[data-state="open"][aria-controls*="${id}"]`) as HTMLButtonElement;
                  if (trigger) trigger.click();
                });
              }}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Collapse All
            </button>
          </div>
          
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem id="vignette-1" value="vignette-1" className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                1. Education CIO – Smart Campus
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Context</h4>
                    <p>University CIO tasked with modernising IT for hybrid learning. Budget caps, sustainability mandates, student expectations for digital-first experience.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">JD Alignment</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Client Engagement & Strategy:</strong> Map CIO pain into Lenovo's "Future of Learning" pack. Frame as multi-year journey.</li>
                      <li><strong>Solution Design & Delivery:</strong> Orchestrate Lenovo presales + MSP for Intune/Autopilot + TruScale VDI + ESG dashboards.</li>
                      <li><strong>Sales Enablement & Execution:</strong> Present ROI curve: $2M baseline → $15M expanded.</li>
                      <li><strong>Market Insight:</strong> Contrast Lenovo's ESG Navigator + OPEX model with HP/Dell infra-heavy.</li>
                      <li><strong>Influence & Mindset:</strong> Simplify stack → "From device refresh to Smart Campus."</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Narrative Arc</h4>
                    <p>CIO fears device fleet refresh will become another short-term patch. Troy reframes: devices + TruScale + AI copilots + ESG = Smart Campus platform. Stakeholders (faculty, IT leads, board) each see their win.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
                    <p className="font-medium text-green-700">Multi-year Lenovo-led transformation.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="vignette-2" value="vignette-2" className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                2. Healthcare Procurement Lead – Digital Hospital
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Context</h4>
                    <p>State hospital group must refresh rugged devices, meet compliance, cut downtime. Procurement driven by risk, cost, and compliance obligations.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">JD Alignment</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Client Engagement:</strong> Build trust with procurement and CIO by showing compliance-first bundles.</li>
                      <li><strong>Solution Delivery:</strong> Bundle rugged devices + TruScale infra + telehealth kits + patch automation.</li>
                      <li><strong>Sales Enablement:</strong> ROI framing: downtime reduced 30%, compliance costs down, $3M baseline → $20M expanded.</li>
                      <li><strong>Market Insight:</strong> Dell pushes infra, HP pushes lifecycle only. Lenovo differentiates on compliance dashboards + telehealth kits.</li>
                      <li><strong>Influence:</strong> Translate "compliance risk" into measurable Lenovo outcomes.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Narrative Arc</h4>
                    <p>Procurement sees only cost; Troy shows compliance and resilience wins. CIO and clinicians gain secure, reliable digital hospital tools.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
                    <p className="font-medium text-green-700">Lenovo trusted partner for both procurement and clinicians.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="vignette-3" value="vignette-3" className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                3. State Government Executive – Gov Compliance
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Context</h4>
                    <p>State department pressured by ESG targets, citizen trust, and fragmented IT spend. Need predictable OPEX, compliance dashboards, and clear procurement models.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">JD Alignment</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Client Engagement:</strong> Partner with agency execs to map ESG + OPEX pain into Lenovo Gov Pack.</li>
                      <li><strong>Solution Delivery:</strong> Orchestrate service desk integration + TruScale hybrid + ESG Navigator.</li>
                      <li><strong>Sales Enablement:</strong> ROI case = $5M baseline → $25M expanded.</li>
                      <li><strong>Market Insight:</strong> HP strong in tenders, HPE infra-led, Lenovo wins with compliance story.</li>
                      <li><strong>Influence:</strong> Use frameworks to show value to both procurement and board.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Narrative Arc</h4>
                    <p>Exec wants "less vendor noise, more outcomes." Troy reframes Lenovo as compliance-ready workplace provider. Stakeholders: CIO, Procurement, ESG officer, Minister's office.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
                    <p className="font-medium text-green-700">Lenovo positioned as strategic ANZ government partner.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="vignette-4" value="vignette-4" className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                4. SMB MSP Partner – Workforce Pack
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Context</h4>
                    <p>MSP servicing 500-seat commercial mid-market. Lenovo sees growth via partner-led SMB Workforce Pack.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">JD Alignment</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Client Engagement:</strong> Work with MSP execs to package Lenovo Workforce Pack as white-label.</li>
                      <li><strong>Solution Delivery:</strong> MSP integrates Lenovo devices + service desk + TruScale SMB + AI copilots.</li>
                      <li><strong>Sales Enablement:</strong> ROI = $0.5M baseline → $5M expanded across multiple SMB clients.</li>
                      <li><strong>Market Insight:</strong> Lenovo unique for MSP-ready bundles; Dell lacks SMB focus.</li>
                      <li><strong>Influence:</strong> Position Lenovo as partner-enabler, not competitor.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Narrative Arc</h4>
                    <p>MSP wary of Lenovo cutting into margin. Troy shows Lenovo's model = more recurring revenue for MSP.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
                    <p className="font-medium text-green-700">Lenovo sticks in SMB via MSP scale-out.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="vignette-5" value="vignette-5" className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                5. Lenovo Account Manager – Land & Expand
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Context</h4>
                    <p>AM wins devices but wants account growth. Limited services experience. Customer open to more but needs guidance.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">JD Alignment</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Client Engagement:</strong> Enablement and support for AM team to drive services attach.</li>
                      <li><strong>Solution Design:</strong> Build account plan with clear growth pathways and attach points.</li>
                      <li><strong>Sales Enablement:</strong> ROI slides, competitive points, clear price bands for each service tier.</li>
                      <li><strong>Market Insight:</strong> Position against HP/Dell with platform story specific to customer sector.</li>
                      <li><strong>Influence:</strong> Coach team, run exec calls, keep language plain and outcome-focused.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Narrative Arc</h4>
                    <p>AM stuck in device refresh cycles. Troy provides expansion roadmap: devices → support → managed → platform. Clear steps, clear value at each stage.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
                    <p className="font-medium text-green-700">Higher attach rates, better renewals, multi-year relationship.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem id="vignette-6" value="vignette-6" className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                6. Board Chair – Renewal & Expansion
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Context</h4>
                    <p>Large customer's board deciding renewal. Chair wants confidence in compliance, ESG, long-term partnership.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">JD Alignment</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>Client Engagement:</strong> Engage at board level with simple, outcome-first framing.</li>
                      <li><strong>Solution Delivery:</strong> Position TruScale + ESG Navigator + AI copilots as the platform.</li>
                      <li><strong>Sales Enablement:</strong> ROI story baseline → expanded, with compliance dashboards.</li>
                      <li><strong>Market Insight:</strong> Show why Lenovo vs Dell/HP/HPE in long-term governance.</li>
                      <li><strong>Influence:</strong> Translate complexity into a simple story the board can back.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Narrative Arc</h4>
                    <p>Board wary of another vendor cycle. Troy reframes Lenovo as partner in compliance + ESG + digital workplace strategy.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
                    <p className="font-medium text-green-700">Renewal approved, expansion budget unlocked, board trust cemented.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Enhancements & Differentiators */}
      <section id="enhancements-expanded" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">8. Enhancements & Differentiators</h2>

          <p className="text-lg mb-8">
            DaaS is the start. The edge comes from turning every deal into a platform subscription. 
            Hardware plus cloud plus AI plus ESG plus employee experience. One predictable fee. 
            This is how Lenovo becomes a strategic partner, not a box supplier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Unified CIO Dashboard */}
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3">Unified CIO Dashboard</h3>
                <p className="mb-4">
                  One control plane. CIOs see device health, ticket volume, SLA trends, AI usage, and ESG metrics. 
                  Reports are ready for exec and board review. Risk is visible and managed. 
                  Actions tie back to services and renewals, which keeps Lenovo at the table.
                </p>
                <p className="text-sm text-gray-600">
                  Value to customer is faster decisions and cleaner audits. 
                  Value to Lenovo is stickier services and clear expansion paths.
                </p>
              </CardContent>
            </Card>

            {/* TruScale Cloud Credits */}
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3">TruScale Cloud Credits</h3>
                <p className="mb-4">
                  Every DaaS deal includes cloud credits. Azure or AWS or GCP on Lenovo infrastructure. 
                  Devices lead to hybrid use cases. VDI. App hosting. Data workloads. 
                  Credits convert to steady TruScale consumption.
                </p>
                <p className="text-sm text-gray-600">
                  Customers move from refresh cycles to a simple OPEX model. 
                  Lenovo grows as usage grows. Partners can attach migration and ops services.
                </p>
              </CardContent>
            </Card>

            {/* Employee Experience Tier */}
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3">Employee Experience Tier</h3>
                <p className="mb-4">
                  Beyond uptime. Add ThinkSmart rooms, headset and monitor kits, and AI copilots. 
                  Layer in wellbeing and productivity insights. Tie telemetry to actions like image fixes and device swaps.
                </p>
                <p className="text-sm text-gray-600">
                  HR sees better retention signals. IT sees fewer tickets. 
                  Finance sees value per headcount. This turns DEX into a renewal driver.
                </p>
              </CardContent>
            </Card>

            {/* Sustainability Guarantee */}
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3">Sustainability Guarantee</h3>
                <p className="mb-4">
                  ESG Navigator is included. Carbon per device is tracked. Asset reuse and recycling are logged. 
                  Optional offsets close the loop. Reports align to state and federal rules in ANZ.
                </p>
                <p className="text-sm text-gray-600">
                  Boards get proof. Procurement gets a safer tender response. 
                  Lenovo stands out when price is close and risk is the tie breaker.
                </p>
              </CardContent>
            </Card>

            {/* Named Vertical Packs */}
            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-red-600 mb-3">Named Vertical Packs</h3>
                <p className="mb-4">
                  Future of Learning. Digital Hospital. Gov Compliance. SMB Workforce. 
                  Each pack is a ready path from device to platform. Clear steps. Clear pricing bands. Clear ROI ranges.
                </p>
                <p className="text-sm text-gray-600">
                  Sales teams move fast. Partners see where they fit. 
                  Customers know the next step after the pilot. Deals scale to program size.
                </p>
              </CardContent>
            </Card>
          </div>

          <p className="text-lg mt-8 text-center">
            Strategic outcome is simple. Higher attach. Larger average deal size. 
            Better renewals. A services led business that compounds over time.
          </p>
        </div>
      </section>

      {/* Revenue Trajectory */}
      <section id="trajectory" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">9. 5-Year Revenue Trajectory</h2>
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

      {/* JD Alignment & Interview Prep */}
      <section id="jd-alignment" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">10. JD Alignment & Interview Prep</h2>

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

      {/* Sales & Delivery Support */}
      <section id="sales-support" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">11. Sales & Delivery Support</h2>
          
          <Accordion type="single" collapsible className="space-y-3">
            <AccordionItem value="sow-proposal" className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                SoW & Proposal Development
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="mb-4">Proven record in <strong>structuring Statements of Work (SoWs), RFP/RFI responses, and commercial proposals</strong> that align technical scope with client outcomes. Skilled in:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Translating solution architecture into contractual deliverables and service-level definitions.</li>
                  <li>• Negotiating scope, acceptance criteria, and change controls with procurement and legal stakeholders.</li>
                  <li>• Building pricing and delivery models that balance customer value with Lenovo margin and partner contribution.</li>
                </ul>
                <p><strong>Outcome:</strong> Faster bid cycles, reduced rework, and stronger win rates across enterprise and government accounts.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="governance-risk" className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                Governance & Risk Management
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="mb-4">Deep experience in <strong>navigating internal approvals and compliance frameworks</strong> to protect both Lenovo and client interests. Competencies include:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Running structured risk assessments on large-scale bids and complex service engagements.</li>
                  <li>• Ensuring workflows meet corporate governance, security, and financial controls.</li>
                  <li>• Maintaining bid discipline through gated reviews, steering committees, and documented sign-offs.</li>
                </ul>
                <p><strong>Outcome:</strong> Predictable execution, fewer escalations, and a reputation as a safe partner in regulated sectors.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="evangelism-enablement" className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                Internal Evangelism & Enablement
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="mb-4">Trusted <strong>bridge between field sales, product management, and delivery teams</strong>. Contributions include:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Feeding market and client insights back to offering teams to improve Lenovo service packs.</li>
                  <li>• Designing and running enablement sessions for account managers and presales, using 2×2 frameworks and sector packs.</li>
                  <li>• Creating proposal toolkits, playbooks, and ROI models that improve attach rates and average deal size.</li>
                </ul>
                <p><strong>Outcome:</strong> Sales teams become more confident positioning Lenovo services; product teams gain market validation.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="order-escalation" className="bg-white border border-gray-200 rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4 font-semibold text-left hover:bg-gray-50">
                Order & Escalation Support
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-2">
                <p className="mb-4">Hands-on experience <strong>supporting delivery transitions and resolving deal blockers</strong>. Activities include:</p>
                <ul className="space-y-2 mb-4">
                  <li>• Coordinating with PMOs on go-to-delivery handoffs and ensuring contracts are operationalised.</li>
                  <li>• Managing exceptions in complex global deals — licensing variations, custom SLAs, multi-partner orchestrations.</li>
                  <li>• Acting as escalation point for delivery and customer success managers when contractual or scope issues arise.</li>
                </ul>
                <p><strong>Outcome:</strong> Smoother service activation, reduced delivery friction, and stronger customer trust at renewal points.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 2×2 Frameworks Summary & Key Findings */}
      <section id="two-by-two-summary" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">2×2 Frameworks – Summary & Key Findings</h2>

          <p className="text-lg mb-6">
            The 2×2 library is not theory. It is a working set of tools for sales, presales, and partners. 
            Each framework maps effort, risk, and opportunity to show where Lenovo should push and where to hold. 
            They connect directly to the DaaS packs, JD pillars, and account motions in ANZ.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Findings</h3>
          <ul className="space-y-3 text-lg mb-8">
            <li>• <strong>Customer 2×2:</strong> Most accounts sit in transactional + low maturity. Quick wins exist but must pivot to strategic + high maturity or Lenovo remains stuck in device cycles.</li>
            <li>• <strong>Technology 2×2:</strong> The uplift is in advanced stack adoption — Autopilot, Intune, TruScale hybrid, AI, ESG. This is where margins and stickiness grow.</li>
            <li>• <strong>Competitor 2×2:</strong> Competitors win on cost when outcomes aren't framed. When ROI and compliance are shown, Lenovo's platform approach wins against HP, Dell, HPE.</li>
            <li>• <strong>Roles 2×2:</strong> Expansion depends on orchestration across AMs, presales, delivery, partners, and exec sponsors. Ownership must be clear or deals stall.</li>
            <li>• <strong>Partners 2×2:</strong> MSPs scale SMB packs fast. GSIs drive health and government. Rebates and shared dashboards make Lenovo a safer attach choice.</li>
            <li>• <strong>Tactics & Orchestration 2×2:</strong> Quick motions deliver pilots. Build motions deliver multi-year programs. The balance is what creates both speed and scale.</li>
            <li>• <strong>Stakeholder 2×2:</strong> Procurement focuses on OPEX control. CIOs focus on compliance and risk. Boards focus on trust and ESG. All three must see their win.</li>
            <li>• <strong>Execution Horizon 2×2:</strong> Short-term low effort is devices + support. Long-term high effort is the platform. The path is to land small, expand big.</li>
            <li>• <strong>Risk vs Opportunity 2×2:</strong> Device-only is safe but flat. Sector transformation is high risk but delivers 4–7× revenue uplift. Strategy is to sequence moves up the curve.</li>
            <li>• <strong>Geographic 2×2:</strong> Regional ANZ growth is strong in health and universities outside capital cities. Canberra remains locked but NSW/VIC are prime for platform expansion.</li>
          </ul>

          <p className="text-lg">
            <strong>Takeaway:</strong> The 2×2s show Lenovo's ANZ services business is still weighted to the bottom left quadrants. 
            The opportunity is in moving up and right — higher maturity, advanced stack, strategic relationships, 
            and multi-year platform deals.
          </p>
        </div>
      </section>

      {/* Complete 2x2 Framework Library */}
      <section id="two-by-two-complete" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl font-bold text-red-600 mb-8">Complete 2x2 Framework Library</h2>
          
          <TwoByTwoHeatmap className="mb-8" />
          
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
                <TableCell>Bring proof with pilots and Innovation Centre. Co sell with partners. Show time to value and adoption curve.</TableCell>
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-red-400">Quick Access</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('strategy')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Strategy Foundation
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('packs')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Vertical DaaS Packs
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('trajectory')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Revenue Projections
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('jd-alignment')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    JD Alignment
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-red-400">Demos & Tools</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/microsites/lenovo/demo-choices"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Demo Choices
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/microsites/lenovo/focus-images"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Focus Images Gallery
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/microsites/lenovo/tactical-deck"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Tactical Deck
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-red-400">About</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                This site demonstrates strategic thinking for Lenovo ANZ's services transformation, 
                moving from device sales to comprehensive workforce platforms.
              </p>
              <Link 
                to="/"
                className="inline-block text-red-400 hover:text-red-300 transition-colors text-sm"
              >
                → Back to Troy's Portfolio
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
            Part of Troy Latter's Executive Portfolio - Lenovo ANZ Solution Sales Strategy
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LenovoMicrosite;