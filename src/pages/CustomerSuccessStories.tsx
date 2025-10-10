import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Award, Shield, Users, Network, Brain, Cloud, CheckCircle, Star } from 'lucide-react';

const CustomerSuccessStories = () => {
  const successStories = [
    {
      title: "$3B Digital Precinct (AWS)",
      description: "Unified cloud ops, 70% faster provisioning, single-pane catalogue."
    },
    {
      title: "Halal Food Traceability (Oracle)",
      description: "Blockchain proofs-of-origin pilot → 40% drop in exceptions."
    },
    {
      title: "RFT-Parsing & Scoring (Unisys)",
      description: "NLP pipeline + SFIA scoring → 60% faster shortlists."
    },
    {
      title: "National Cyber Resilience (Indonesia)",
      description: "AI anomaly detection + SOAR runbooks → 70% MTTR reduction."
    }
  ];

  const breakthroughStories = [
    {
      title: "Blueprint to Breakthrough",
      image: "/lovable-uploads/99250b03-5ffe-4fee-a51d-8f8636ad4975.png",
      description: "When Interpol needed to turn scattered data operations and experiments into a global programme, I ran \"Design Thinking\" workshops with global stakeholders, scored use-cases against mission KPIs, then embedded compliance gates and \"demo or die\" reviews.\n\nIn 12 weeks we launched four first-of-their-kind pilots, unlocked a $7 M follow-on pipeline, cut concept-to-funding time by 60%, and got executive sign-off on two full-production rollouts."
    },
    {
      title: "Tiger Teams & Trusted Partnerships",
      image: "https://theaseanpost.com/sites/default/files/2020-11/11AM-WIRE-FRI-13112020.jpg",
      description: "During ASEAN monsoon floods, I formed a six-person AWS \"tiger team\" with satellite, telco & social-media experts to build an edge-mesh alert platform across 6 countries, IRT for free.\n\nLive demos with first responders cut coordination delays 50%, handled 500K+ alerts and seeded a $2 M regional rollout."
    },
    {
      title: "Edge Engineering & Real-World Prototypes",
      image: "/lovable-uploads/6c065077-2a06-4fc0-8ee5-a1aebd89d0b8.png",
      description: "For the ADF's Secure Content programme, I led 48-hour PoC sprints to field-test shock-proof HR systems at sea.\n\nBy discarding failures - fast, we achieved, cut validation time 75%, and secured $5 M to productise battlefield-grade nodes."
    }
  ];

  return (
    <div className="animate-fade-in space-y-12">
      <PageTitle title="Client Success Stories & Project Highlights" />
      
      {/* Executive Profile Section */}
      <div className="space-y-8">
        {/* Executive Header */}
        <div className="bg-gradient-to-br from-brand-primary to-[#1a2332] text-white py-12 px-8 rounded-2xl text-center">
          <h2 className="text-4xl font-bold mb-3">TROY LATTER</h2>
          <p className="text-xl mb-2">Board Advisor | CTO | Founder – Tech 4 Humanity</p>
          <p className="text-lg text-gray-200">AI, Multi-Cloud, and Emerging Systems Leader</p>
        </div>

        {/* Executive Summary */}
        <Card className="shadow-lg">
          <CardContent className="p-10">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Executive Summary</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Strategic technology executive known for turning complex AI and cloud ecosystems into measurable business outcomes. Trusted by boards, C-suite leaders, and governments to deliver transformation that blends foresight, pace, and technical precision.
              </p>
              <p>
                Hands-on across AI orchestration, data architecture, and automation at scale, I design systems that are secure, explainable, and built for human impact. With multi-cloud fluency across AWS, Azure, and Google, I lead programs that align innovation with strategy—accelerating outcomes while maintaining trust and compliance.
              </p>
               <p>
                 Recognised globally for connecting the ethics, economics, and execution of technology, I help organisations see what's next and act on it today.
               </p>
            </div>
          </CardContent>
        </Card>

        {/* Core Value Proposition */}
        <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-brand-primary shadow-lg">
          <CardContent className="p-10">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Core Value Proposition</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                I bridge the language of innovation and leadership. Through an established network of 200+ CIOs and CTOs across APAC, I translate deep technology into board-level value—clarity, cost reduction, and resilience.
              </p>
              <p>
                My approach unites engineers, strategists, and executives around shared outcomes, proving that AI and automation deliver value when grounded in people and process.
              </p>
              <p className="font-semibold">
                The result: faster delivery, stronger adoption, and measurable business return.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Current Leadership Roles */}
        <Card className="shadow-lg">
          <CardContent className="p-10">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Current Leadership Roles</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-gray-700"><strong>Board Member</strong> – Queensland Government AI Hub</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-gray-700"><strong>Committee Member</strong> – Standards Australia (Brain-Computer Interface)</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-gray-700"><strong>Advisory Board Convenor</strong> – Global Council on BCI & Assistive Technology</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <span className="text-gray-700"><strong>Founder & CEO</strong> – Tech 4 Humanity</span>
              </li>
            </ul>
            <p className="text-gray-600 italic text-center">
              All roles align with one mission: advancing responsible, human-centred innovation.
            </p>
          </CardContent>
        </Card>

        {/* Key Certifications and Modern AI Skills */}
        <div className="bg-gray-50 p-10 rounded-2xl">
          <h3 className="text-2xl font-bold text-brand-primary mb-6 text-center">Key Certifications and Modern AI Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <Cloud className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-800">Cloud Certifications</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 ml-7">
                <li>• AWS Professional Solutions Architect</li>
                <li>• Microsoft Certified AI Engineer Associate</li>
                <li>• Google Cloud Professional</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-gray-800">AI Platforms</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 ml-7">
                <li>• IBM watsonx.ai Practitioner</li>
                <li>• OpenAI & Anthropic Micro-Certifications</li>
                <li>• LangChain & LlamaIndex</li>
                <li>• NVIDIA AI Foundations</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-gray-800">AI Governance</h4>
              </div>
              <ul className="text-sm text-gray-700 space-y-1 ml-7">
                <li>• MCP-Native Development</li>
                <li>• AI Governance & Ethics Credentials</li>
                <li>• Risk & Transparency Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Skills and Technical Leadership */}
        <div>
          <h3 className="text-2xl font-bold text-brand-primary mb-8 text-center">Core Skills and Technical Leadership</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Brain,
                title: "AI Strategy and Orchestration",
                description: "Architect of intelligent systems that merge human insight with agentic automation. Expert in MCP-native orchestration, LangChain, and contextual memory design for scalable, explainable AI."
              },
              {
                icon: Cloud,
                title: "Multi-Cloud and Data Architecture",
                description: "Design and optimisation of hybrid, high-trust environments across AWS, Azure, and Google. Strong in automation, security, and cost-performance governance."
              },
              {
                icon: Network,
                title: "Enterprise AI Integration",
                description: "Deployment of generative AI and automation within enterprise workflows, combining APIs, foundation models, and edge intelligence to improve decision speed and efficiency."
              },
              {
                icon: Shield,
                title: "AI Governance and Responsible Innovation",
                description: "Contributor to global safety standards and neurotechnology ethics. Experienced embedding explainability and compliance into live AI systems."
              },
              {
                icon: CheckCircle,
                title: "Data Science and Applied ML",
                description: "Practical use of models, vector databases, and streaming analytics tied to business KPIs. Focused on turning insight into immediate operational gain."
              },
              {
                icon: Users,
                title: "Ecosystem Partnerships",
                description: "Builds cross-sector partnerships with hyperscalers, startups, and academia to expand capability and accelerate innovation cycles."
              },
              {
                icon: Star,
                title: "Executive Communication",
                description: "Clear translation of complex technology for boards and policymakers. Regular keynote speaker on AI, robotics, and the human impact of automation."
              },
              {
                icon: Award,
                title: "Innovation Culture and Delivery Leadership",
                description: "Creates high-trust, high-speed teams using agile \"kill-or-scale\" cycles, live dashboards, and transparent progress tracking to move prototypes into production."
              }
            ].map((skill, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-primary mb-2">{skill.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{skill.description}</p>
                </div>
              </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Recognition */}
        <Card className="border-l-4 border-brand-primary shadow-lg">
          <CardContent className="p-10">
            <h3 className="text-2xl font-bold text-brand-primary mb-6">Industry Recognition</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Keynote Speaker</strong> – AWS Public Sector Summit</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Speaker</strong> – Defence + Industry Conference</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Author</strong> – Peer-Reviewed Research on Machine Learning, Neurotech, and Security Ethics</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700"><strong>Advisor</strong> – National and International Committees on AI Policy and Standards</span>
              </li>
            </ul>
            <p className="text-gray-600 italic text-center">
              Recognised for advancing responsible AI and building bridges between innovation, governance, and measurable human value.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-12" />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-primary to-[#1a2332] text-white py-16 rounded-2xl overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Delivering Transformational Results</h2>
              <p className="text-lg text-gray-200 mb-6">
                My proven track record of delivering innovative solutions has created measurable impact 
                across government and enterprise clients. I focus on understanding client needs deeply, 
                building the right teams, and implementing practical solutions that drive real business outcomes.
              </p>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="font-semibold mb-3">Success Metrics</h3>
                <ul className="text-sm space-y-2">
                  <li>• $3B+ in transformation value delivered</li>
                  <li>• 90%+ stakeholder satisfaction across projects</li>
                  <li>• 70%+ average efficiency improvements</li>
                  <li>• 60%+ reduction in time-to-market</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/24ae2c57-fff3-40ab-88f1-3ad34c248fc1.png" 
                alt="Client Success and Business Growth" 
                className="w-80 h-64 rounded-xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Wins Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="border rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Key Project Outcomes</h2>
            <ul className="space-y-6">
              {successStories.map((story, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{story.title}</h3>
                    <p className="text-gray-700 bg-gray-50 p-3 rounded">{story.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <div className="flex items-center">
          <div className="w-full px-6">
            <img 
              src="/lovable-uploads/db7906e5-94ae-461a-a914-e3ca5ba5b126.png" 
              alt="AI-powered technology solutions" 
              className="w-full h-auto rounded-lg shadow-lg object-cover" 
            />
            <p className="text-sm text-gray-500 italic mt-3 text-center">
              AI-powered innovation driving client transformation
            </p>
          </div>
        </div>
      </div>
      
      {/* Deep Dive Case Studies */}
      <div>
        <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">Deep Dive Case Studies</h2>
        
        <div className="space-y-12">
          {breakthroughStories.map((story, index) => (
            <Card key={index} className="overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-2 gap-0`}>
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img 
                      src={story.image} 
                      alt={story.title === "Tiger Teams & Trusted Partnerships" ? "ASEAN Regional Cooperation and Technology Integration" : story.title} 
                      className="w-full h-80 object-cover"
                    />
                  </div>
                  <div className={`p-10 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold text-brand-primary mb-6">{story.title}</h3>
                    {story.description.split("\n\n").map((paragraph, i) => (
                      <p key={i} className="text-gray-700 mb-4 last:mb-0 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Summary */}
      <Card className="bg-gradient-to-r from-blue-50 to-teal-50 border-blue-200">
        <CardContent className="p-10 text-center">
          <h3 className="text-xl font-bold text-brand-primary mb-4">Execution Excellence</h3>
          <p className="text-gray-700 italic leading-relaxed max-w-4xl mx-auto">
            These deep dives illustrate how I craft an execution roadmap, lead small high-performing squads, 
            drive a fail-fast culture and translate PoCs into multi-million-dollar programmes. My approach 
            consistently delivers measurable business value while building lasting partnerships with clients.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomerSuccessStories;
