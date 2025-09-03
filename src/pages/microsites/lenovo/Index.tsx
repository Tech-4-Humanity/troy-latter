import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { FlipCard } from '@/components/ui/FlipCard';
import { TwoByTwoHeatmap } from '@/components/ui/TwoByTwoHeatmap';
import { ScrollArea } from '@/components/ui/scroll-area';

const LenovoMicrosite = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Solution Sales Australia';
    
    return () => {
      document.title = "Troy Latter - Executive Portfolio";
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              { id: 'strategy', label: 'Strategy' },
              { id: 'packs', label: 'Vertical Packs' },
              { id: 'stories', label: 'Stakeholder Vignettes' },
              { id: 'vignettes', label: 'Customer Engagement Vignettes' },
              { id: 'frameworks', label: '2×2 Frameworks' },
              { id: 'trajectory', label: 'Revenue' },
              { id: 'jd-alignment', label: 'JD Alignment' }
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="px-4 py-2 text-white hover:text-red-300 font-semibold transition-colors border border-white/20 rounded-md hover:bg-white/10"
              >
                {label}
              </button>
            ))}
            <Link
              to="/microsites/lenovo/focus-images"
              className="px-4 py-2 text-white hover:text-red-300 font-semibold transition-colors border border-white/20 rounded-md hover:bg-white/10"
            >
              Focus Images
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

      {/* All remaining sections converted to flip cards */}
      {/* Strategy Foundation */}
      <section id="strategy" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">1. Strategy Foundation</h2>
          
          <FlipCard
            heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
            hideFlipHint={true}
            front={
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-red-600">Strategy Overview</h3>
                <p className="mb-4 flex-grow">Transform Lenovo ANZ from device refresh cycles to strategic workforce platform subscriptions.</p>
                <div className="space-y-2">
                  <p><strong>From:</strong> $10.5M baseline device deals</p>
                  <p><strong>To:</strong> $50M+ per vertical over 3-5 years</p>
                  <p><strong>How:</strong> TruScale + AI + ESG + Services</p>
                </div>
              </div>
            }
            back={
              <ScrollArea className="h-full">
                <div className="space-y-4 pr-2">
                  <h3 className="text-xl font-bold text-red-600">Strategy Foundation Details</h3>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Baseline</h4>
                    <p className="text-sm mb-3">
                      Today, Lenovo ANZ DaaS contracts often stop at device + warranty + lifecycle wrap. This delivers stability but caps growth. Value is typically &lt;$15M per vertical, with outcomes limited to hardware refresh and basic support. It's predictable but leaves margin on the table.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Target</h4>
                    <p className="text-sm mb-3">
                      Shift to verticalised workforce subscriptions that combine <strong>TruScale, AI, ESG, security, and cloud services</strong>. These packs move Lenovo from a "box seller" to a <strong>strategic workforce platform provider</strong>, embedding Lenovo across compliance, sustainability, and productivity domains.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Customer Journey</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>1. Support stage:</strong> Start with devices, Premier Support, and standard lifecycle services.</p>
                      <p><strong>2. Managed stage:</strong> Add service desk integration, Autopilot/Intune, ZTNA, device analytics.</p>
                      <p><strong>3. Advisory stage:</strong> Evolve into a true workforce platform subscription with TruScale hybrid cloud, AI copilots, and ESG Navigator dashboards — giving CIOs unified control and boards measurable ROI.</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Strategic Outcome</h4>
                    <p className="text-sm">
                      A stable baseline of &lt;$15M becomes a <strong>growth trajectory of $50M+ per vertical</strong> over 3–5 years, with stronger partner attach and stickier client relationships.
                    </p>
                  </div>
                </div>
              </ScrollArea>
            }
            className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          />
        </div>
      </section>

      {/* Vertical Packs */}
      <section id="packs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">2. Vertical Packs Portfolio</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Vertical Revenue Targets</h3>
                  <p className="mb-4 flex-grow">Four key verticals driving growth from $40M baseline to $130M target revenue.</p>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>🎓 Education: $8M → $25M</div>
                    <div>🏥 Healthcare: $12M → $35M</div>
                    <div>🏛️ Government: $15M → $50M</div>
                    <div>🚀 SMB: $5M → $20M</div>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-6 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Vertical Portfolio Details</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-600 pl-4">
                        <h4 className="font-semibold text-lg mb-2">🎓 Education ($8M → $25M)</h4>
                        <ul className="text-sm space-y-1">
                          <li>• K-12 Device Management with parent portal integration</li>
                          <li>• Higher Ed Research Compute clusters and GPU farms</li>
                          <li>• Campus Security & Analytics with video management</li>
                          <li>• Student Information System integrations</li>
                          <li>• Remote learning infrastructure and support</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-red-600 pl-4">
                        <h4 className="font-semibold text-lg mb-2">🏥 Healthcare ($12M → $35M)</h4>
                        <ul className="text-sm space-y-1">
                          <li>• FHIR-Compliant Workstations with patient data protection</li>
                          <li>• Telemedicine Infrastructure including video conferencing</li>
                          <li>• Clinical Analytics dashboards and reporting</li>
                          <li>• Medical device integration and IoT monitoring</li>
                          <li>• HIPAA compliance automation and auditing</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-red-600 pl-4">
                        <h4 className="font-semibold text-lg mb-2">🏛️ Government ($15M → $50M)</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Protected Utility Models for sensitive data</li>
                          <li>• Sovereign Cloud Integration with local data residency</li>
                          <li>• Compliance Automation for regulatory requirements</li>
                          <li>• Citizen service portal integrations</li>
                          <li>• Emergency response and disaster recovery</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-red-600 pl-4">
                        <h4 className="font-semibold text-lg mb-2">🚀 SMB Growth ($5M → $20M)</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Managed IT-as-a-Service with 24/7 support</li>
                          <li>• Business Continuity planning and implementation</li>
                          <li>• Growth-Stage Scaling with elastic infrastructure</li>
                          <li>• Small business collaboration tools</li>
                          <li>• Cyber security essentials packages</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Customer Value Framework</h3>
                  <p className="mb-4 flex-grow">Three-stage progression from basic support to strategic workforce platform.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Support:</strong> Device + warranty + lifecycle</p>
                    <p><strong>Managed:</strong> + Service desk + analytics</p>
                    <p><strong>Advisory:</strong> + TruScale + AI + ESG</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Customer Value Framework Details</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-green-700">Support Stage</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Device refresh + warranty coverage</li>
                        <li>• Basic lifecycle management and asset tracking</li>
                        <li>• Premier Support integration with escalation paths</li>
                        <li>• Standard security baselines and policy enforcement</li>
                        <li>• Hardware maintenance and replacement scheduling</li>
                        <li>• Basic user training and documentation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-700">Managed Stage</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Service desk integration with ticketing systems</li>
                        <li>• Autopilot/Intune management and automation</li>
                        <li>• ZTNA implementation with identity verification</li>
                        <li>• Device analytics dashboards and performance monitoring</li>
                        <li>• Proactive maintenance and issue resolution</li>
                        <li>• Advanced security monitoring and threat detection</li>
                        <li>• Application management and software deployment</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-purple-700">Advisory Stage</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• TruScale hybrid cloud infrastructure management</li>
                        <li>• AI copilot integration for productivity enhancement</li>
                        <li>• ESG Navigator dashboards for sustainability tracking</li>
                        <li>• Strategic workforce platform with unified control</li>
                        <li>• Advanced analytics and business intelligence</li>
                        <li>• Digital transformation consulting and roadmapping</li>
                        <li>• Custom solution development and integration</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Stakeholder Vignettes */}
      <section id="stories" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">3. Stakeholder Vignettes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FlipCard
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">CIO Vignette</h3>
                  <p className="mb-4 flex-grow">From device management headaches to strategic workforce platform control.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Challenge:</strong> Fragmented vendor ecosystem</p>
                    <p><strong>Solution:</strong> Unified TruScale platform</p>
                    <p><strong>Outcome:</strong> 40% cost reduction, unified dashboard</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">CIO Success Story</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                      <p className="text-sm mb-3">
                        Sarah, CIO at a major healthcare network, was drowning in vendor complexity. Device refresh with HP, cloud with AWS, security with Cisco, service desk with ServiceNow. Every incident required 3-4 vendor calls, SLAs were conflicting, and the board was asking why IT spend was 15% above industry benchmarks despite poor user satisfaction scores.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Lenovo Solution</h4>
                      <p className="text-sm mb-3">
                        Lenovo's TruScale Workforce Platform consolidated her infrastructure under one commercial umbrella: devices, cloud, security, and support. Instead of managing 12 vendor relationships, Sarah now has one strategic partner with unified SLAs, single-pane-of-glass dashboards, and predictable per-user monthly costs.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Outcome</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 40% reduction in total IT costs within 18 months</li>
                        <li>• User satisfaction scores improved from 6.2 to 8.7</li>
                        <li>• 90% reduction in vendor escalation calls</li>
                        <li>• Sarah's team can focus on innovation, not vendor management</li>
                        <li>• Board sees IT as strategic enabler, not cost centre</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            <FlipCard
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">CFO Vignette</h3>
                  <p className="mb-4 flex-grow">From unpredictable capex cycles to smooth operational subscriptions.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Challenge:</strong> Lumpy capex and budget planning</p>
                    <p><strong>Solution:</strong> Subscription-based workforce platform</p>
                    <p><strong>Outcome:</strong> Predictable costs, improved cash flow</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">CFO Success Story</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                      <p className="text-sm mb-3">
                        Marcus, CFO at a growing government agency, faced massive budget volatility. Device refresh years meant $2M+ capex spikes, followed by lean years with high maintenance costs. The board wanted predictable IT costs and better cash flow management, but traditional procurement made this impossible.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Lenovo Solution</h4>
                      <p className="text-sm mb-3">
                        Lenovo's subscription model transformed IT from a capex burden to a predictable opex line item. Fixed monthly costs per user included devices, software, support, and refresh cycles. Marcus could budget with confidence and reinvest saved capital into strategic initiatives.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Outcome</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 100% predictable IT costs, no surprise capex spikes</li>
                        <li>• 25% improvement in cash flow management</li>
                        <li>• $500K capital redeployed to strategic initiatives</li>
                        <li>• Board satisfaction with budget predictability</li>
                        <li>• IT costs linked directly to headcount growth</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Customer Engagement Vignettes */}
      <section id="vignettes" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">4. Customer Engagement Vignettes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FlipCard
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Discovery Call Framework</h3>
                  <p className="mb-4 flex-grow">Strategic questioning to uncover expansion opportunities beyond device refresh.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Focus:</strong> Pain points and strategic goals</p>
                    <p><strong>Method:</strong> Value-based questioning</p>
                    <p><strong>Outcome:</strong> Platform opportunity mapping</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Discovery Call Scripts & Framework</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Opening Questions</h4>
                      <ul className="text-sm space-y-1">
                        <li>• "Walk me through your current device lifecycle. What keeps you up at night?"</li>
                        <li>• "How many vendors are you managing for your full workforce stack?"</li>
                        <li>• "What does 'good' look like for your IT strategy in 2-3 years?"</li>
                        <li>• "If budget wasn't a constraint, what would you fix first?"</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Pain Point Identification</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Vendor fragmentation and management overhead</li>
                        <li>• Unpredictable costs and budget volatility</li>
                        <li>• Security compliance and audit challenges</li>
                        <li>• User experience and productivity issues</li>
                        <li>• Lack of strategic IT metrics and dashboards</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Value Mapping</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Quantify current vendor management costs</li>
                        <li>• Calculate capex-to-opex conversion benefits</li>
                        <li>• Identify productivity gains from platform integration</li>
                        <li>• Map compliance automation value</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            <FlipCard
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Proposal Framework</h3>
                  <p className="mb-4 flex-grow">Structured approach to presenting workforce platform solutions.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Structure:</strong> Current state → Future state → ROI</p>
                    <p><strong>Focus:</strong> Business outcomes, not features</p>
                    <p><strong>Close:</strong> Implementation roadmap</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Proposal Structure & Templates</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Executive Summary</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Current state challenges and costs</li>
                        <li>• Proposed workforce platform solution</li>
                        <li>• Quantified benefits and ROI timeline</li>
                        <li>• Implementation approach and milestones</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Business Case Framework</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Vendor consolidation savings (typically 20-40%)</li>
                        <li>• Operational efficiency gains (30-50% reduction in IT overhead)</li>
                        <li>• User productivity improvements (5-15% workforce efficiency)</li>
                        <li>• Risk reduction and compliance automation benefits</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Implementation Roadmap</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Phase 1: Device migration and basic services (0-6 months)</li>
                        <li>• Phase 2: Platform integration and automation (6-12 months)</li>
                        <li>• Phase 3: Advanced services and optimisation (12-24 months)</li>
                        <li>• Success metrics and review checkpoints</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* 2x2 Strategic Frameworks */}
      <section id="frameworks" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">Strategic 2×2 Frameworks</h2>
          
          <TwoByTwoHeatmap className="mb-8" />
          
          <div id="two-by-two-complete" className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">Customer Relationship</h3>
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3"></th>
                  <th className="border border-gray-300 p-3">Transactional</th>
                  <th className="border border-gray-300 p-3">Strategic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Device-Focused</td>
                  <td className="border border-gray-300 p-3">Basic refresh cycles, minimal relationship depth</td>
                  <td className="border border-gray-300 p-3">Device lifecycle management with strategic planning</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Platform-Focused</td>
                  <td className="border border-gray-300 p-3">Service bundles sold as add-ons</td>
                  <td className="border border-gray-300 p-3">Workforce transformation partnerships</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-bold text-gray-900">Technology</h3>
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3"></th>
                  <th className="border border-gray-300 p-3">Point Solutions</th>
                  <th className="border border-gray-300 p-3">Integrated Platform</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Current State</td>
                  <td className="border border-gray-300 p-3">Fragmented vendor ecosystem</td>
                  <td className="border border-gray-300 p-3">Some integration but gaps remain</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Future State</td>
                  <td className="border border-gray-300 p-3">Best-of-breed specialist approach</td>
                  <td className="border border-gray-300 p-3">TruScale unified workforce platform</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-bold text-gray-900">Competitor</h3>
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3"></th>
                  <th className="border border-gray-300 p-3">Device Heritage</th>
                  <th className="border border-gray-300 p-3">Services Heritage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Weak Platform</td>
                  <td className="border border-gray-300 p-3">Traditional OEMs (HP, Dell) struggling with services</td>
                  <td className="border border-gray-300 p-3">Pure-play integrators without device control</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Strong Platform</td>
                  <td className="border border-gray-300 p-3">Microsoft Surface + ecosystem integration</td>
                  <td className="border border-gray-300 p-3">IBM, Accenture with consulting depth</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-bold text-gray-900">Roles and Ownership</h3>
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3"></th>
                  <th className="border border-gray-300 p-3">Lenovo-Led</th>
                  <th className="border border-gray-300 p-3">Partner-Led</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Tactical</td>
                  <td className="border border-gray-300 p-3">Device deployment and basic support</td>
                  <td className="border border-gray-300 p-3">Specialized implementation and integration</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Strategic</td>
                  <td className="border border-gray-300 p-3">Platform architecture and customer success</td>
                  <td className="border border-gray-300 p-3">Transformation consulting and change management</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-bold text-gray-900">Partners</h3>
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3"></th>
                  <th className="border border-gray-300 p-3">Tactical Partners</th>
                  <th className="border border-gray-300 p-3">Strategic Partners</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Capability</td>
                  <td className="border border-gray-300 p-3">Implementation, basic integration</td>
                  <td className="border border-gray-300 p-3">Transformation consulting, industry expertise</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Market Access</td>
                  <td className="border border-gray-300 p-3">Local presence, project delivery</td>
                  <td className="border border-gray-300 p-3">C-suite relationships, strategic advisory</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-2xl font-bold text-gray-900">Tactics</h3>
            <table className="w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3"></th>
                  <th className="border border-gray-300 p-3">Push Model</th>
                  <th className="border border-gray-300 p-3">Pull Model</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Product-Led</td>
                  <td className="border border-gray-300 p-3">Feature demonstrations and technical specs</td>
                  <td className="border border-gray-300 p-3">Trial programs and proof-of-concept</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Outcome-Led</td>
                  <td className="border border-gray-300 p-3">ROI calculators and business case development</td>
                  <td className="border border-gray-300 p-3">Customer success stories and peer references</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Revenue Trajectory */}
      <section id="trajectory" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">5. Revenue Trajectory</h2>
          
          <FlipCard
            heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
            hideFlipHint={true}
            front={
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-red-600">5-Year Growth Projection</h3>
                <p className="mb-4 flex-grow">Transform baseline $40M into $130M+ expanded revenue through platform services.</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Year 1:</strong> $45M (+12% baseline growth)</p>
                  <p><strong>Year 3:</strong> $75M (+87% platform expansion)</p>
                  <p><strong>Year 5:</strong> $130M (+225% total growth)</p>
                </div>
              </div>
            }
            back={
              <ScrollArea className="h-full">
                <div className="space-y-4 pr-2">
                  <h3 className="text-xl font-bold text-red-600">Detailed Revenue Model</h3>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Year 1-2: Foundation ($45M-$60M)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Device refresh with enhanced support packages</li>
                      <li>• Basic TruScale adoption across 2-3 key accounts</li>
                      <li>• Service desk integration and managed services pilot</li>
                      <li>• Partner ecosystem establishment and training</li>
                      <li>• Revenue mix: 70% devices, 30% services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Year 3-4: Expansion ($75M-$100M)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Platform services adoption across all verticals</li>
                      <li>• AI and automation services integration</li>
                      <li>• ESG and compliance automation rollout</li>
                      <li>• Multi-year subscription contract conversions</li>
                      <li>• Revenue mix: 50% devices, 50% services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Year 5+: Optimisation ($130M+)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Full workforce platform subscriptions</li>
                      <li>• Advanced analytics and business intelligence</li>
                      <li>• Custom vertical solutions and industry packs</li>
                      <li>• Strategic consulting and transformation services</li>
                      <li>• Revenue mix: 30% devices, 70% services</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Key Success Metrics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Contract value per customer (target: 3x increase)</li>
                      <li>• Subscription revenue percentage (target: 70%+)</li>
                      <li>• Customer retention rate (target: 95%+)</li>
                      <li>• Platform adoption rate (target: 80% by Year 3)</li>
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            }
            className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          />
        </div>
      </section>

      {/* JD Alignment */}
      <section id="jd-alignment" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">6. JD Alignment & Interview Prep</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Solution Architecture Alignment</h3>
                  <p className="mb-4 flex-grow">How my experience maps to Lenovo's Solution Sales Architect requirements.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Enterprise Architecture:</strong> 15+ years AWS/Oracle</p>
                    <p><strong>Customer Success:</strong> $500M+ deals delivered</p>
                    <p><strong>Market Knowledge:</strong> ANZ enterprise/gov expertise</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Detailed JD Mapping</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Solution Architecture (Required)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• AWS Solutions Architect Professional (current)</li>
                        <li>• Oracle Cloud Infrastructure Architect (2019-2024)</li>
                        <li>• Designed $50M+ hybrid cloud implementations</li>
                        <li>• Enterprise integration patterns and microservices</li>
                        <li>• Security, compliance, and governance frameworks</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Sales & Customer Success (Required)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• $500M+ in deals designed and delivered</li>
                        <li>• C-suite engagement across Fortune 500 accounts</li>
                        <li>• Technical sales support and solution validation</li>
                        <li>• Post-sales delivery and customer success</li>
                        <li>• Partner ecosystem development and enablement</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Market Knowledge (Preferred)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 8+ years ANZ enterprise and government</li>
                        <li>• Deep understanding of procurement frameworks</li>
                        <li>• Regulatory compliance (SOX, GDPR, local standards)</li>
                        <li>• Industry vertical expertise (FSI, Healthcare, Gov)</li>
                        <li>• Competitive landscape and positioning</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Interview Questions & Responses</h3>
                  <p className="mb-4 flex-grow">Prepared responses for key interview scenarios and executive conversations.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Strategy:</strong> Services transformation approach</p>
                    <p><strong>Technical:</strong> Platform architecture deep-dive</p>
                    <p><strong>Cultural:</strong> Lenovo values alignment</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Key Interview Preparation</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Q: How would you approach services transformation?</h4>
                      <p className="text-sm mb-2">
                        <strong>A:</strong> Start with customer pain points, not product features. Map current vendor fragmentation costs, identify high-value consolidation opportunities, and design a phased approach that delivers quick wins while building toward platform transformation. Focus on business outcomes: cost predictability, operational efficiency, and strategic enablement.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Q: Describe your enterprise architecture approach.</h4>
                      <p className="text-sm mb-2">
                        <strong>A:</strong> I believe in platform thinking over point solutions. Design for integration, automation, and observability from day one. Use APIs and microservices patterns to enable ecosystem growth. Always consider the human element: change management, training, and adoption are as critical as technical architecture.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Q: Why Lenovo, and why now?</h4>
                      <p className="text-sm mb-2">
                        <strong>A:</strong> Lenovo is at an inflection point. Strong device heritage, growing services capability, and the TruScale platform provide the foundation for true workforce transformation. ANZ market timing is perfect: enterprises want vendor consolidation, subscription models, and platform approaches. I can help accelerate this transition.
                      </p>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Troy Latter. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LenovoMicrosite;