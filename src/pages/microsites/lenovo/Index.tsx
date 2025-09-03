import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { FlipCard } from '@/components/ui/FlipCard';
import { TwoByTwoHeatmap } from '@/components/ui/TwoByTwoHeatmap';
import { ScrollArea } from '@/components/ui/scroll-area';

const LenovoMicrosite = () => {
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