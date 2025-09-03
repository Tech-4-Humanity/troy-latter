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

  // Revenue trajectory data
  const revenueData = [
    { year: 'Year 1', education: 8, healthcare: 12, government: 15, smb: 5, total: 40 },
    { year: 'Year 2', education: 12, healthcare: 18, government: 22, smb: 8, total: 60 },
    { year: 'Year 3', education: 18, healthcare: 25, government: 35, smb: 12, total: 90 },
    { year: 'Year 4', education: 22, healthcare: 30, government: 42, smb: 16, total: 110 },
    { year: 'Year 5', education: 25, healthcare: 35, government: 50, smb: 20, total: 130 },
  ];

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
              { id: 'about', label: 'About' },
              { id: 'strategy', label: 'Strategy' },
              { id: 'packs', label: 'Vertical Packs' },
              { id: 'stories', label: 'Stakeholder Vignettes' },
              { id: 'vignettes', label: 'Customer Engagement Vignettes' },
              { id: 'frameworks', label: '2×2 Frameworks' },
              { id: 'trajectory', label: 'Revenue' },
              { id: 'qa', label: 'Q&A' },
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

      {/* Strategy Foundation */}
      <section id="strategy" className="py-16 bg-gray-50">
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
      <section id="packs" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">2. Vertical Packs Portfolio</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Education Pack */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">🎓 Education Pack</h3>
                  <p className="mb-4 flex-grow">Comprehensive K-12 and Higher Ed solutions driving digital learning transformation.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Revenue:</strong> $8M → $25M (3x growth)</p>
                    <p><strong>Target:</strong> Universities, TAFEs, Schools</p>
                    <p><strong>Key Services:</strong> Device management, research compute, campus security</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Education Pack Details</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Core Offerings</h4>
                      <ul className="text-sm space-y-1">
                        <li>• K-12 Device Management with parent portal integration</li>
                        <li>• Higher Ed Research Compute clusters and GPU farms</li>
                        <li>• Campus Security & Analytics with video management</li>
                        <li>• Student Information System integrations</li>
                        <li>• Remote learning infrastructure and support</li>
                        <li>• Library and lab management systems</li>
                        <li>• Student device lending programs</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Value Proposition</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Reduced IT overhead with managed services</li>
                        <li>• Enhanced student outcomes through technology</li>
                        <li>• Compliance with educational data protection</li>
                        <li>• Scalable infrastructure for research projects</li>
                        <li>• Cost-effective device refresh programs</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Revenue Model</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Subscription-based device management</li>
                        <li>• Per-student licensing for educational software</li>
                        <li>• Usage-based research compute billing</li>
                        <li>• Annual security and compliance packages</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            {/* Healthcare Pack */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">🏥 Healthcare Pack</h3>
                  <p className="mb-4 flex-grow">FHIR-compliant solutions for hospitals, clinics, and healthcare providers.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Revenue:</strong> $12M → $35M (3x growth)</p>
                    <p><strong>Target:</strong> Hospitals, Clinics, Aged Care</p>
                    <p><strong>Key Services:</strong> Compliance workstations, telemedicine, analytics</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Healthcare Pack Details</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Core Offerings</h4>
                      <ul className="text-sm space-y-1">
                        <li>• FHIR-Compliant Workstations with patient data protection</li>
                        <li>• Telemedicine Infrastructure including video conferencing</li>
                        <li>• Clinical Analytics dashboards and reporting</li>
                        <li>• Medical device integration and IoT monitoring</li>
                        <li>• HIPAA compliance automation and auditing</li>
                        <li>• Electronic Health Records (EHR) integration</li>
                        <li>• Mobile clinical workstations for bedside care</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Value Proposition</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Improved patient outcomes through digital health</li>
                        <li>• Reduced administrative burden on clinical staff</li>
                        <li>• Enhanced data security and privacy compliance</li>
                        <li>• Streamlined clinical workflows and processes</li>
                        <li>• Better resource utilization and cost management</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Revenue Model</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Per-bed licensing for hospital infrastructure</li>
                        <li>• Subscription-based compliance monitoring</li>
                        <li>• Usage-based telemedicine platform fees</li>
                        <li>• Annual security and audit packages</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            {/* Government Pack */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">🏛️ Government Pack</h3>
                  <p className="mb-4 flex-grow">Sovereign cloud and compliance solutions for federal, state, and local government.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Revenue:</strong> $15M → $50M (3.3x growth)</p>
                    <p><strong>Target:</strong> Federal, State, Local Government</p>
                    <p><strong>Key Services:</strong> Protected utility, sovereign cloud, compliance</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Government Pack Details</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Core Offerings</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Protected Utility Models for sensitive data</li>
                        <li>• Sovereign Cloud Integration with local data residency</li>
                        <li>• Compliance Automation for regulatory requirements</li>
                        <li>• Citizen service portal integrations</li>
                        <li>• Emergency response and disaster recovery</li>
                        <li>• Secure collaboration platforms for inter-agency work</li>
                        <li>• Digital identity and access management</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Value Proposition</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Enhanced citizen service delivery and satisfaction</li>
                        <li>• Improved data security and sovereignty</li>
                        <li>• Streamlined inter-agency collaboration</li>
                        <li>• Cost-effective digital transformation</li>
                        <li>• Future-ready infrastructure and services</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Revenue Model</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Per-agency subscription for cloud services</li>
                        <li>• Usage-based data processing and storage</li>
                        <li>• Annual compliance and security packages</li>
                        <li>• Project-based digital transformation consulting</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            {/* SMB Pack */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">🚀 SMB Growth Pack</h3>
                  <p className="mb-4 flex-grow">Scalable IT-as-a-Service solutions for growing small and medium businesses.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Revenue:</strong> $5M → $20M (4x growth)</p>
                    <p><strong>Target:</strong> SMBs, Scale-ups, Professional Services</p>
                    <p><strong>Key Services:</strong> Managed IT, business continuity, scaling support</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">SMB Growth Pack Details</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Core Offerings</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Managed IT-as-a-Service with 24/7 support</li>
                        <li>• Business Continuity planning and implementation</li>
                        <li>• Growth-Stage Scaling with elastic infrastructure</li>
                        <li>• Small business collaboration tools</li>
                        <li>• Cyber security essentials packages</li>
                        <li>• Cloud migration and hybrid infrastructure</li>
                        <li>• Employee onboarding and device management</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Value Proposition</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Enterprise-grade IT without enterprise costs</li>
                        <li>• Focus on core business while IT is managed</li>
                        <li>• Scalable solutions that grow with the business</li>
                        <li>• Proactive security and compliance management</li>
                        <li>• Expert support and strategic guidance</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Revenue Model</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Per-employee monthly subscription</li>
                        <li>• Tiered service packages (Starter, Growth, Enterprise)</li>
                        <li>• Project-based implementation and migration fees</li>
                        <li>• Add-on services for specialized needs</li>
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
      <section id="stories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">3. Stakeholder Vignettes</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* COO Vignette */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">COO: Operational Excellence</h3>
                  <p className="mb-4 flex-grow">From fragmented operations to unified workforce management platform.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Challenge:</strong> Disparate systems, poor visibility</p>
                    <p><strong>Solution:</strong> Integrated workforce platform</p>
                    <p><strong>Outcome:</strong> 35% efficiency gain, real-time dashboards</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">COO Success Story</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                      <p className="text-sm mb-3">
                        Emma, COO at a major logistics company, struggled with operational visibility. Her workforce was spread across warehouses, offices, and mobile workers, but she had no unified view of productivity, asset utilization, or operational bottlenecks. Different departments used different systems, making cross-functional optimization impossible.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Lenovo Solution</h4>
                      <p className="text-sm mb-3">
                        Lenovo's TruScale Workforce Platform provided Emma with unified operational dashboards across all workforce segments. Device analytics, productivity metrics, and resource utilization data flowed into a single operational control center, giving her real-time visibility into workforce efficiency and asset performance.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Outcome</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 35% improvement in operational efficiency metrics</li>
                        <li>• Real-time visibility into workforce productivity</li>
                        <li>• Proactive maintenance reducing downtime by 45%</li>
                        <li>• Cross-functional optimization based on unified data</li>
                        <li>• Strategic workforce planning based on actual usage patterns</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            {/* CISO Vignette */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">CISO: Security Leadership</h3>
                  <p className="mb-4 flex-grow">From security gaps to comprehensive zero-trust workforce protection.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Challenge:</strong> Endpoint security gaps, compliance burden</p>
                    <p><strong>Solution:</strong> Integrated security platform</p>
                    <p><strong>Outcome:</strong> 90% reduction in incidents, automated compliance</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">CISO Success Story</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                      <p className="text-sm mb-3">
                        James, CISO at a financial services firm, faced constant security incidents from poorly managed endpoints. His team spent 60% of their time on basic hygiene - patch management, compliance reporting, and incident response - leaving little time for strategic security initiatives. The board was questioning security ROI.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Lenovo Solution</h4>
                      <p className="text-sm mb-3">
                        Lenovo's integrated security platform automated endpoint management, patch deployment, and compliance reporting. Zero-trust network access, device-level encryption, and AI-powered threat detection created a comprehensive security fabric that required minimal manual intervention.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Outcome</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 90% reduction in security incidents within 12 months</li>
                        <li>• Automated compliance reporting saving 20 hours/week</li>
                        <li>• Security team refocused on strategic initiatives</li>
                        <li>• Comprehensive threat visibility across all endpoints</li>
                        <li>• Board confidence in security posture and ROI</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            {/* CHRO Vignette */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">CHRO: People Experience</h3>
                  <p className="mb-4 flex-grow">From IT friction to seamless employee experience and productivity insights.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Challenge:</strong> Poor employee IT experience, no productivity data</p>
                    <p><strong>Solution:</strong> Employee-centric workforce platform</p>
                    <p><strong>Outcome:</strong> 85% employee satisfaction, data-driven insights</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">CHRO Success Story</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                      <p className="text-sm mb-3">
                        Lisa, CHRO at a consulting firm, received constant complaints about IT performance affecting productivity. Employee surveys showed technology frustration as the #2 factor in turnover decisions. She had no visibility into how technology choices impacted employee performance and satisfaction.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Lenovo Solution</h4>
                      <p className="text-sm mb-3">
                        Lenovo's employee-focused platform provided both seamless IT experiences and productivity analytics. Employees got consumer-grade device experiences with enterprise security, while Lisa gained insights into technology's impact on performance, collaboration patterns, and employee satisfaction.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Outcome</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Employee IT satisfaction improved from 45% to 85%</li>
                        <li>• Technology-related turnover reduced by 60%</li>
                        <li>• Data-driven insights for workspace optimization</li>
                        <li>• Improved collaboration patterns and productivity metrics</li>
                        <li>• Technology becomes competitive advantage for talent retention</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            {/* Head of Procurement Vignette */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Head of Procurement</h3>
                  <p className="mb-4 flex-grow">From complex vendor management to streamlined strategic partnerships.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Challenge:</strong> Multiple vendors, complex contracts, risk exposure</p>
                    <p><strong>Solution:</strong> Consolidated vendor platform</p>
                    <p><strong>Outcome:</strong> 50% vendor reduction, simplified contracts</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Procurement Success Story</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Challenge</h4>
                      <p className="text-sm mb-3">
                        Michael, Head of Procurement at a healthcare network, managed 15+ technology vendors with overlapping SLAs, conflicting contract terms, and complex renewal cycles. Risk exposure was high, administrative overhead was crushing his team, and cost optimization was limited by fragmented negotiations.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Lenovo Solution</h4>
                      <p className="text-sm mb-3">
                        Lenovo's consolidated platform approach allowed Michael to replace multiple vendor relationships with a single strategic partnership. Unified contracts, aligned SLAs, and integrated service delivery simplified procurement while maintaining competitive pricing through Lenovo's partner ecosystem.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">The Outcome</h4>
                      <ul className="text-sm space-y-1">
                        <li>• 50% reduction in active technology vendors</li>
                        <li>• Simplified contract structure with unified SLAs</li>
                        <li>• 30% reduction in procurement administrative overhead</li>
                        <li>• Improved cost optimization through consolidated negotiations</li>
                        <li>• Strategic partnership enabling innovation focus</li>
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
      <section id="vignettes" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">4. Customer Engagement Vignettes</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Objection Handling */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Objection Handling</h3>
                  <p className="mb-4 flex-grow">Turning pricing and vendor concerns into platform value conversations.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Common Objection:</strong> "Lenovo is too expensive"</p>
                    <p><strong>Strategy:</strong> Total cost of ownership analysis</p>
                    <p><strong>Outcome:</strong> Value-based purchasing decision</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Objection Handling Playbook</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">"Lenovo is too expensive"</h4>
                      <p className="text-sm mb-2"><strong>Response Framework:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• "I understand cost is important. Let's look at total value, not just device price."</li>
                        <li>• "What's your current annual cost for devices + support + security + management?"</li>
                        <li>• "Our platform typically reduces total workforce costs by 20-40% while improving outcomes."</li>
                        <li>• Present ROI calculator showing 3-year savings</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">"We're happy with our current vendor"</h4>
                      <p className="text-sm mb-2"><strong>Response Framework:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• "That's great to hear. What's working well in your current setup?"</li>
                        <li>• "If you could improve one thing about your current arrangement, what would it be?"</li>
                        <li>• "Have you considered the benefits of vendor consolidation?"</li>
                        <li>• Focus on gaps and future needs, not replacement</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">"We don't need all those services"</h4>
                      <p className="text-sm mb-2"><strong>Response Framework:</strong></p>
                      <ul className="text-sm space-y-1">
                        <li>• "You're right - let's start with what you need today."</li>
                        <li>• "Our platform grows with you. No need to buy everything upfront."</li>
                        <li>• "Many clients start with devices and expand as they see value."</li>
                        <li>• Present modular approach with expansion roadmap</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            {/* Renewal & Expansion Motion */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Renewal & Expansion</h3>
                  <p className="mb-4 flex-grow">Converting existing device clients to full platform subscribers.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Trigger:</strong> 18 months before renewal</p>
                    <p><strong>Strategy:</strong> Value demonstration and expansion</p>
                    <p><strong>Outcome:</strong> Platform upsell and multi-year commitment</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Renewal & Expansion Strategy</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Pre-Renewal Activities (18 months out)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Quarterly business reviews showcasing value delivered</li>
                        <li>• Usage analytics and optimization recommendations</li>
                        <li>• Identification of new business challenges and opportunities</li>
                        <li>• Introduction of new platform capabilities</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Expansion Conversation Framework</h4>
                      <ul className="text-sm space-y-1">
                        <li>• "Based on your usage patterns, I see opportunities to add..."</li>
                        <li>• "Your team mentioned challenges with [X]. Our platform can help."</li>
                        <li>• "Companies similar to yours typically expand into these areas..."</li>
                        <li>• Present pilot program for new services</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Value Reinforcement</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Document cost savings achieved (typically 25-40%)</li>
                        <li>• Showcase productivity improvements and user satisfaction</li>
                        <li>• Highlight security and compliance benefits</li>
                        <li>• Present roadmap for future platform enhancements</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            {/* Pilot-to-Scale Path */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Pilot-to-Scale Path</h3>
                  <p className="mb-4 flex-grow">Structured approach to proving platform value through targeted pilots.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Start:</strong> Department-level pilot (3-6 months)</p>
                    <p><strong>Prove:</strong> Measurable value and ROI</p>
                    <p><strong>Scale:</strong> Organization-wide platform adoption</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Pilot-to-Scale Framework</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Pilot Design (3-6 months)</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Select representative department (50-200 users)</li>
                        <li>• Define clear success metrics and measurement methods</li>
                        <li>• Implement core platform services with full support</li>
                        <li>• Weekly check-ins and monthly progress reviews</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Success Metrics Tracking</h4>
                      <ul className="text-sm space-y-1">
                        <li>• User satisfaction scores (target: 8.0+)</li>
                        <li>• IT support ticket reduction (target: 40-60%)</li>
                        <li>• Device performance and reliability metrics</li>
                        <li>• Cost per user compared to baseline</li>
                        <li>• Security incident reduction</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Scale Preparation</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Document pilot results and lessons learned</li>
                        <li>• Create business case for organization-wide deployment</li>
                        <li>• Design phased rollout plan for remaining users</li>
                        <li>• Establish change management and training programs</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            {/* Partner Co-Sell Play */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Partner Co-Sell</h3>
                  <p className="mb-4 flex-grow">Leveraging ecosystem partners to expand platform reach and capabilities.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Key Partners:</strong> Microsoft, VMware, ServiceNow</p>
                    <p><strong>Strategy:</strong> Joint value propositions</p>
                    <p><strong>Outcome:</strong> Expanded deal size and capabilities</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Partner Co-Sell Strategy</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Microsoft Partnership</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Lenovo devices optimized for Microsoft 365 and Teams</li>
                        <li>• Autopilot deployment and Intune management integration</li>
                        <li>• Azure hybrid cloud connectivity through TruScale</li>
                        <li>• Joint customer presentations and proposals</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">ServiceNow Integration</h4>
                      <ul className="text-sm space-y-1">
                        <li>• ITSM integration for unified service management</li>
                        <li>• Automated incident management and resolution</li>
                        <li>• Asset lifecycle management through ServiceNow ITAM</li>
                        <li>• Employee portal integration for self-service</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Co-Sell Approach</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Joint discovery calls to identify integration opportunities</li>
                        <li>• Combined proposals showcasing integrated value</li>
                        <li>• Shared customer success stories and case studies</li>
                        <li>• Partner referral programs and incentive alignment</li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              }
              className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            />

            {/* Change Management & Adoption */}
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Change Management</h3>
                  <p className="mb-4 flex-grow">Ensuring smooth adoption and maximizing value realization from platform deployment.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Focus:</strong> User adoption and business value realization</p>
                    <p><strong>Method:</strong> Structured change management</p>
                    <p><strong>Outcome:</strong> High adoption rates and customer satisfaction</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Change Management Framework</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Pre-Deployment</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Stakeholder mapping and communication planning</li>
                        <li>• Change readiness assessment and risk mitigation</li>
                        <li>• Executive sponsorship and change champion network</li>
                        <li>• Training program design and resource preparation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Deployment Phase</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Phased rollout with early adopter programs</li>
                        <li>• Intensive support during transition periods</li>
                        <li>• Regular feedback collection and issue resolution</li>
                        <li>• Success story sharing and momentum building</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Post-Deployment</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Adoption metrics tracking and reporting</li>
                        <li>• Advanced training and optimization workshops</li>
                        <li>• Continuous improvement and feature enhancement</li>
                        <li>• Customer success reviews and expansion planning</li>
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
      <section id="frameworks" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">5. Strategic 2×2 Frameworks</h2>
          
          <TwoByTwoHeatmap className="mb-8" />
          
          <div id="two-by-two-complete" className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Relationship Matrix</h3>
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
                    <td className="border border-gray-300 p-3">6</td>
                    <td className="border border-gray-300 p-3">7</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Platform-Focused</td>
                    <td className="border border-gray-300 p-3">8</td>
                    <td className="border border-gray-300 p-3">9</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology Architecture Matrix</h3>
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
                    <td className="border border-gray-300 p-3">4</td>
                    <td className="border border-gray-300 p-3">6</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Future State</td>
                    <td className="border border-gray-300 p-3">7</td>
                    <td className="border border-gray-300 p-3">9</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Competitive Positioning Matrix</h3>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3"></th>
                    <th className="border border-gray-300 p-3">Device Heritage</th>
                    <th className="border border-gray-300 p-3">Cloud Native</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Limited Services</td>
                    <td className="border border-gray-300 p-3">5</td>
                    <td className="border border-gray-300 p-3">6</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Full Platform</td>
                    <td className="border border-gray-300 p-3">8</td>
                    <td className="border border-gray-300 p-3">7</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Opportunity Matrix</h3>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3"></th>
                    <th className="border border-gray-300 p-3">Low Competition</th>
                    <th className="border border-gray-300 p-3">High Competition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Niche Market</td>
                    <td className="border border-gray-300 p-3">8</td>
                    <td className="border border-gray-300 p-3">6</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Mass Market</td>
                    <td className="border border-gray-300 p-3">9</td>
                    <td className="border border-gray-300 p-3">5</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Risk vs Opportunity Matrix</h3>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3"></th>
                    <th className="border border-gray-300 p-3">Low Risk</th>
                    <th className="border border-gray-300 p-3">High Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Low Opportunity</td>
                    <td className="border border-gray-300 p-3">4</td>
                    <td className="border border-gray-300 p-3">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">High Opportunity</td>
                    <td className="border border-gray-300 p-3">9</td>
                    <td className="border border-gray-300 p-3">7</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Horizon Matrix</h3>
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-3"></th>
                    <th className="border border-gray-300 p-3">Short Term</th>
                    <th className="border border-gray-300 p-3">Long Term</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Low Complexity</td>
                    <td className="border border-gray-300 p-3">8</td>
                    <td className="border border-gray-300 p-3">7</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">High Complexity</td>
                    <td className="border border-gray-300 p-3">6</td>
                    <td className="border border-gray-300 p-3">9</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Trajectory */}
      <section id="trajectory" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">6. Revenue Trajectory</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">5-Year Growth Projection: $40M → $130M</h3>
            <ChartContainer 
              className="h-96"
              config={{
                education: { label: "Education", color: "#3b82f6" },
                healthcare: { label: "Healthcare", color: "#10b981" },
                government: { label: "Government", color: "#f59e0b" },
                smb: { label: "SMB", color: "#ef4444" }
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="education" stackId="a" fill="#3b82f6" name="Education" />
                  <Bar dataKey="healthcare" stackId="a" fill="#10b981" name="Healthcare" />
                  <Bar dataKey="government" stackId="a" fill="#f59e0b" name="Government" />
                  <Bar dataKey="smb" stackId="a" fill="#ef4444" name="SMB" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-4 h-4 bg-blue-500 rounded mx-auto mb-2"></div>
                <p className="text-sm font-semibold">Education</p>
                <p className="text-xs text-gray-600">$8M → $25M</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-green-500 rounded mx-auto mb-2"></div>
                <p className="text-sm font-semibold">Healthcare</p>
                <p className="text-xs text-gray-600">$12M → $35M</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-amber-500 rounded mx-auto mb-2"></div>
                <p className="text-sm font-semibold">Government</p>
                <p className="text-xs text-gray-600">$15M → $50M</p>
              </div>
              <div className="text-center">
                <div className="w-4 h-4 bg-red-500 rounded mx-auto mb-2"></div>
                <p className="text-sm font-semibold">SMB</p>
                <p className="text-xs text-gray-600">$5M → $20M</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section id="qa" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">7. Questions & Strategic Responses</h2>
          
          <div className="grid md:grid-cols-1 gap-6 mb-8">
            <FlipCard
              heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
              hideFlipHint={true}
              front={
                <div className="h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-red-600">Strategic Vision & Market Analysis</h3>
                  <p className="mb-4 flex-grow">Key questions about market positioning, competitive landscape, and strategic direction.</p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Focus:</strong> Long-term strategy and market dynamics</p>
                    <p><strong>Depth:</strong> Executive-level strategic thinking</p>
                    <p><strong>Value:</strong> Demonstrating market understanding and vision</p>
                  </div>
                </div>
              }
              back={
                <ScrollArea className="h-full">
                  <div className="space-y-4 pr-2">
                    <h3 className="text-xl font-bold text-red-600">Strategic Q&A</h3>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Q: How do you see the ANZ market evolving for services-led growth?</h4>
                      <p className="text-sm mb-3">
                        <strong>A:</strong> ANZ is uniquely positioned for services transformation. Three drivers: 1) Regulatory complexity (data sovereignty, privacy) favors integrated compliance, 2) Skills shortage makes managed services attractive, 3) ESG mandates create demand for sustainability platforms. Lenovo's heritage in devices + TruScale platform positions us to capture this shift before pure-play cloud providers.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Q: What's your view on competitive threats from Microsoft, AWS, Google?</h4>
                      <p className="text-sm mb-3">
                        <strong>A:</strong> They're partners, not competitors. Microsoft needs device optimization for 365/Teams. AWS needs edge computing for hybrid workloads. Our opportunity is vertical specialization - healthcare compliance, education management, government sovereignty - areas where hyperscalers are commoditized. We become the "last mile" that makes their platforms valuable.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Q: How do you balance growth with profitability in services?</h4>
                      <p className="text-sm mb-3">
                        <strong>A:</strong> Services require different economics. Focus on recurring revenue, not transactional margins. Start with 20-25% gross margins on bundled services, expand to 35-40% as automation scales. Key is platform leverage - same TruScale infrastructure serves education, healthcare, government with vertical-specific overlays.
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

      {/* JD Alignment & Interview Prep */}
      <section id="jd-alignment" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-red-600 mb-6">8. JD Alignment & Interview Preparation</h2>
          
          <FlipCard
            heightClass="h-[36rem] md:h-[42rem] lg:h-[52rem]"
            hideFlipHint={true}
            front={
              <div className="h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-red-600">Solution Sales Australia - Role Alignment</h3>
                <p className="mb-4 flex-grow">How my experience and this playbook align with Lenovo's Solution Sales Australia requirements.</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Experience:</strong> 15+ years technology strategy and architecture</p>
                  <p><strong>Market Knowledge:</strong> ANZ enterprise and government</p>
                  <p><strong>Value Delivered:</strong> Comprehensive services playbook and execution plan</p>
                </div>
              </div>
            }
            back={
              <ScrollArea className="h-full">
                <div className="space-y-4 pr-2">
                  <h3 className="text-xl font-bold text-red-600">Role Alignment Details</h3>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Technical Architecture Experience</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 15+ years designing enterprise solutions (AWS, Oracle, Gartner, Unisys)</li>
                      <li>• Cloud and hybrid infrastructure specialization</li>
                      <li>• AI/ML and automation platform development</li>
                      <li>• Government and enterprise compliance frameworks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Market and Customer Understanding</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Deep ANZ market knowledge across verticals</li>
                      <li>• Understanding of local compliance and regulatory requirements</li>
                      <li>• Experience with government procurement and enterprise sales cycles</li>
                      <li>• Customer journey mapping and value proposition development</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Strategic Contribution</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Complete services transformation strategy and execution plan</li>
                      <li>• Vertical-specific go-to-market approaches</li>
                      <li>• Partner ecosystem strategy and integration frameworks</li>
                      <li>• Revenue growth modeling and business case development</li>
                      <li>• Sales enablement tools and customer engagement frameworks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Immediate Value</h4>
                    <p className="text-sm">
                      This playbook represents the strategic thinking and execution capability I bring to Lenovo. 
                      It's not just research - it's a comprehensive framework for transforming ANZ services revenue 
                      from $40M to $130M+ through systematic vertical specialization and platform integration.
                    </p>
                  </div>
                </div>
              </ScrollArea>
            }
            className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          />
        </div>
      </section>
    </div>
  );
};

export default LenovoMicrosite;