import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Mail, Linkedin, Download } from 'lucide-react';

const Lab3Index = () => {
  const [activeSection, setActiveSection] = useState('why-lab3');

  const sections = [
    { id: 'why-lab3', label: 'Why Lab3 & Why Me' },
    { id: 'case-studies', label: 'Case Study Highlights' },
    { id: 'strategic-plan', label: 'Strategic 30/60/90 Plan' },
    { id: 'technical-strengths', label: 'Technical Strengths & Patterns' },
    { id: 'market-insight', label: 'Market Insight – Microsoft Ecosystem Trends' },
    { id: 'culture-fit', label: 'Culture Fit Snapshot' },
    { id: 'questions', label: 'Questions I\'d Ask You' },
    { id: 'connect', label: 'Let\'s Connect' },
    { id: 'related', label: 'Related Microsites' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'why-lab3':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Why Lab3 & Why Me</h2>
            <div className="text-gray-300 space-y-4">
              <p>Lab3's engineering-first culture, reusable IP focus, and Microsoft-first strategy align with how I've delivered transformation across APAC.</p>
              <p>I've built sovereign AI deployments, zero-trust enclaves, edge-to-cloud IoT, and agentic automation platforms in regulated, secure, and fast-moving environments.</p>
              <p>I help customers see around corners — blending security, speed, and clarity with stakeholder engagement and scalable design.</p>
            </div>
          </div>
        );

      case 'case-studies':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Case Study Highlights</h2>
            <div className="grid gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">🏛 Operational Cost Creep – Energy Grid Operator</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Saved $500K/month via predictive scaling with CloudWatch + SageMaker.</li>
                    <li>• Reduced capacity spikes by 80%.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">🏦 Sovereign AI Deployment – Intelligence Agency</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• On-prem LLM with AWS Outposts. Weekly CTO demos.</li>
                    <li>• $1.8M multi-year agreement. 60% time reduction.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">🏢 APAC Smart Building IoT – Government Asset Manager</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• IoT + Greengrass pipeline for 1,200 buildings.</li>
                    <li>• 12,000+ events/sec, &lt;150ms latency, 40% storage cost reduction.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">🛡️ Complex Security Compliance – Defence</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• ASD-certified in 6 weeks, 85% of checks automated.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">🧾 Business Case Translation – Home Affairs</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• $5M AI funding secured via C-suite demo + TCO model.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'strategic-plan':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Strategic 30/60/90 Plan</h2>
            <div className="grid gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">30 Days</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Align with delivery and pre-sales</li>
                    <li>• Review accelerators and build value-mapping plan</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">60 Days</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Run workshops (Copilot readiness, Zero Trust)</li>
                    <li>• Launch blueprint delivery on 1–2 key accounts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">90 Days</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Propose go-to-market uplift</li>
                    <li>• Launch Tiger Team for reusable AI agent automation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 'technical-strengths':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Technical Strengths & Patterns</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-gray-300">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left p-3 text-blue-400">Capability</th>
                        <th className="text-left p-3 text-blue-400">Evidence</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="p-3 font-medium">Azure & Data Services</td>
                        <td className="p-3">SageMaker, Kinesis, CAF, Terraform</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-3 font-medium">Pre-Sales Leadership</td>
                        <td className="p-3">72-hour AI PoC with $2.5M follow-on</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-3 font-medium">Zero Trust Compliance</td>
                        <td className="p-3">ASD-certified, live dashboards</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-3 font-medium">Edge-to-Cloud IoT</td>
                        <td className="p-3">12K events/sec, low-latency architecture</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-3 font-medium">C-Suite Engagement</td>
                        <td className="p-3">CTO councils, Secretaries, ROI roadmaps</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">GitOps + CI/CD Automation</td>
                        <td className="p-3">Terraform, GitHub Actions, pipelines</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'market-insight':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Market Insight – Microsoft Ecosystem Trends</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Copilot Everywhere</h3>
                <p>M365, Dynamics, GitHub — clients need enablement.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Fabric Convergence</h3>
                <p>Analytics meets automation — consulting opportunity.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Zero Trust by Default</h3>
                <p>Security-as-strategy now wins deals.</p>
              </div>
            </div>
          </div>
        );

      case 'culture-fit':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Culture Fit Snapshot</h2>
            <div className="text-gray-300 space-y-4">
              <p>Lab3 builds with speed, shares IP, and respects engineering talent. That's the same way I lead. I mentor, codify success, and turn ideas into patterns that scale.</p>
            </div>
          </div>
        );

      case 'questions':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Questions I'd Ask You</h2>
            <div className="space-y-4">
              {[
                "What's Lab3's next reusable asset milestone?",
                "How can I unblock the handoff between sales and engineering?",
                "Who's leading your future-of-work/Copilot vision?",
                "What's Lab3's internal Tiger Team model?"
              ].map((question, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <p className="text-gray-300">{question}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'connect':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Let's Connect</h2>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="mailto:troy.latter@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email me
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://www.linkedin.com/in/theinnovater/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn – theinnovater
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://tech4humanity.com.au/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Tech 4 Humanity
                </a>
              </Button>
            </div>
          </div>
        );

      case 'related':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-6">Related Microsites</h2>
            <div className="space-y-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <p className="text-gray-400">CTO Strategy – Coming Soon</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <p className="text-gray-400">GovAI Wins – Coming Soon</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <p className="text-gray-400">Secure Agentic Frameworks – Coming Soon</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-gray-900 border-r border-gray-700 min-h-screen">
          <div className="p-6">
            {/* Lab3 Logo */}
            <div className="mb-6 flex justify-center">
              <img 
                src="https://www.lab3.com.au/wp-content/uploads/2021/06/logo.svg" 
                alt="Lab3 Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <h1 className="text-2xl font-bold text-white mb-2">Lab3 Principal Technologist</h1>
            <p className="text-gray-400 text-sm mb-6">Public showcase of readiness for Lab3 Principal Technologist</p>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="mailto:troy.latter@gmail.com">
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://www.linkedin.com/in/theinnovater/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>

              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab3Index;
