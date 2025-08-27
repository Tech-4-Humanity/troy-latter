
import { PageTitle } from '@/components/PageTitle';
import { FileQuestion, Award, Layers, Users, ArrowUp, ChartLine, Shield, Rocket, FileCode, AlertTriangle, Copy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const FAQs = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "Answer copied successfully",
      });
    });
  };

  const envatoQA = [
    {
      question: "What does AI Product Management mean to you?",
      answer: "Most think it's about features or prompt-tuning. For me, it's about aligning people and outcomes: Define the asset model so it scales across contributors and customers. Make sure contributors get paid fairly and stay loyal. Deliver customer outcomes that are faster, safer, and easier. The tech is the easy part. The hard part is getting people on the bus."
    },
    {
      question: "How would you align Envato's AI strategy with its business model?",
      answer: "I've mapped five strategic paths: Infrastructure, Network, Vertical Expansion, Platform Enabler, and Radical Play. Each is viable, but Infrastructure is the core play for defensible ARR. Platform Enabler keeps us in SaaS ecosystems. The others are bets. My role is to help balance the portfolio so Envato has a floor, an upside, and a moonshot."
    },
    {
      question: "How do customers benefit from AI here?",
      answer: "A small business in Jakarta can download a Ramadan campaign kit in minutes. A teacher can build compliant courseware packs. A brand manager gets provenance-stamped assets safe for enterprise use. That's customer obsession in action: faster campaigns, safer licensing, easier discovery."
    },
    {
      question: "How do contributors benefit?",
      answer: "Contributors are the moat. AI isn't there to replace them but to multiply their earnings: Path 1: earn through enterprise kits. Path 2: earn via storefront subs and sponsorships. Path 5: earn royalties through API usage across SaaS platforms. And they get analytics, tagging, and forecast tools so they know what to create next."
    },
    {
      question: "What's the monetisation model?",
      answer: "Infrastructure: $100–200M ARR potential. Network: $500M+ GMV, $50–100M revenue. Vertical Expansion: $50–100M ARR per sector. Platform APIs: $100M ARR within 3–4 years if embedded broadly. Radical Play: $1B+ TAM moonshot. Each is backed by realistic revenue levers—subs, usage fees, royalties, ads."
    },
    {
      question: "How do you handle provenance, safety, and trust?",
      answer: "Trust has to be part of the product, not bolted on: C2PA signing on all AI outputs. Provenance APIs for license verification. Region pinning and audit exports for enterprise. Moderation AI and human review queues for community. That turns AI Labs from 'fun' into production-grade tools."
    },
    {
      question: "How do you integrate with partners and external tools?",
      answer: "I'd standardise around a single asset manifest and unified index. That becomes the contract. Then SDKs and APIs for Figma, Premiere, Shopify, Unity plug into the same backend services. Every integration reuses one spec—not ten."
    },
    {
      question: "How would you handle mergers and acquisitions?",
      answer: "Unify contributors and customers first, then tech. That means one contributor dashboard, one payout ledger, one customer contract. Behind the scenes, crosswalk IDs, harmonised manifests, and unified provenance rules. Done in 90-day sprints: payouts → provenance → workflows."
    },
    {
      question: "How do you keep speed?",
      answer: "Speed comes from contracts and SLAs. The infra team owns the index, APIs, lineage. Feature squads build storefronts, kits, or agentic workflows on top. If search is <200ms and provenance API is reliable, teams can ship without bottlenecking each other."
    },
    {
      question: "Can you build a team without a product?",
      answer: "Yes—if the charter is clear. The mission is to get assets from contributor → safe and useful for customer → contributor gets paid. Teams form around flows, not features: Contributor success (tools, analytics, payouts). Customer experience (search, gen, packs). Trust and provenance (C2PA, compliance, moderation). Platform (APIs, SDKs, partner integrations)."
    },
    {
      question: "What are your first 90 days?",
      answer: "Ship one manifest (asset, license, lineage, region). Stand up a unified index (lexical + vector). Add C2PA signing on all AI Labs outputs with a public verify page. Pilot one enterprise connector with audit export. Launch contributor insights v1 (auto tags, price hints, forecast report). Run one agentic workflow pilot (social variants from one brief)."
    },
    {
      question: "Why should we trust you to lead this?",
      answer: "Because I don't treat AI as a feature. I treat it as alignment of people, trust, and monetisation. Products don't fail because the models aren't good enough. They fail when contributors don't lean in, customers don't see value, or enterprises don't trust compliance. My role is to make sure they all get on the bus and stay there."
    }
  ];

  return (
    <div>
      <PageTitle title="Frequently Asked Questions" />
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">About Troy Latter - Key Questions</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <FileQuestion className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">What makes Troy unique as a strategic technology leader?</p>
              <p>Troy combines deep technical expertise (AWS Top Secret clearance, multi-cloud certifications) with proven business development capabilities in defense and enterprise markets. His experience spans from hands-on system architecture to C-suite strategic advisory roles, making him equally effective in technical deep-dives and boardroom discussions.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Layers className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">How does Troy approach innovation leadership?</p>
              <p>Troy's innovation methodology focuses on rapid prototyping, customer co-design, and scalable implementation. He believes in "innovation with purpose", ensuring every R&D initiative aligns with clear business outcomes and customer value propositions, while maintaining technical excellence and security compliance.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Rocket className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">What is Troy's track record in defense and security markets?</p>
              <p>Troy has successfully navigated complex defense procurement cycles, held AWS Top Secret clearance, and built relationships with major primes including Lockheed Martin and Northrop Grumman. His experience includes ISR systems, autonomous platforms, and multi-agent AI architectures for mission-critical applications.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Users className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">How does Troy build and lead high-performing teams?</p>
              <p>Troy's leadership philosophy centers on "servant leadership", empowering team members, fostering psychological safety, and creating environments where innovation thrives. He combines technical mentorship with strategic vision, ensuring teams understand both the "how" and the "why" behind their work.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <ArrowUp className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">What is Troy's approach to scaling technology solutions?</p>
              <p>Troy excels at taking proof-of-concepts to production-ready solutions. His methodology includes robust architecture design, compliance frameworks, and phased rollout strategies that minimize risk while maximizing business impact. He's particularly skilled at navigating regulatory requirements in defense and critical infrastructure sectors.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <ChartLine className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">How does Troy measure success in innovation roles?</p>
              <p>Troy defines success through multiple metrics: technical delivery (on-time, on-budget, exceeding performance requirements), business impact (revenue growth, cost reduction, market expansion), and strategic positioning (competitive advantage, thought leadership, partnership development).</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Shield className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">What is Troy's expertise in security and compliance?</p>
              <p>Troy maintains AGSVA NV2 clearance and has extensive experience with IRAP assessments, AWS compliance frameworks, and defense security protocols. He understands how to balance innovation velocity with security requirements, ensuring solutions meet both technical and regulatory standards.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Award className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">What certifications and credentials does Troy hold?</p>
              <p>Troy is an AWS Solutions Architect, Azure AI Certified, and GCP certified professional. He serves on the QLD Government AI Hub Board and holds Standards Australia Business Continuity Institute credentials. His academic background includes advanced studies in AI/ML and innovation management.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <FileCode className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">How does Troy stay current with emerging technologies?</p>
              <p>Troy maintains active involvement in research communities, contributes to industry whitepapers, and regularly engages with academic institutions including QUT and TAS. He believes in continuous learning and applies emerging technologies through controlled pilots before scaling to production environments.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <AlertTriangle className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">How does Troy handle risk management in innovation projects?</p>
              <p>Troy implements structured risk frameworks that balance innovation velocity with prudent oversight. He uses staged gates, rapid feedback loops, and "fail-fast" methodologies to minimize exposure while maximizing learning. His approach includes contingency planning and clear escalation paths for both technical and business risks.</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Portfolio Resources</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <Link to="/executive-profile" className="hover:text-blue-600 transition-colors">
              <span><strong>Executive Profile:</strong> Comprehensive overview of Troy's leadership experience and strategic capabilities.</span>
            </Link>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <Link to="/resources/whitepapers" className="hover:text-blue-600 transition-colors">
              <span><strong>Technical Whitepapers:</strong> Deep dives on AI, cloud architecture, and innovation frameworks authored by Troy.</span>
            </Link>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <Link to="/resources/lean-canvas" className="hover:text-blue-600 transition-colors">
              <span><strong>Innovation Methodology:</strong> Troy's proven frameworks for strategic planning and business model development.</span>
            </Link>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <Link to="/industry-expertise" className="hover:text-blue-600 transition-colors">
              <span><strong>Industry Expertise:</strong> Deep sector knowledge and thought leadership across defense, enterprise, and innovation markets.</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
          <Rocket className="h-5 w-5 text-green-600" />
          Envato – Principal AI PM: Pre-empted Q&A
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          "Just in case we don't get to them" — Strategic questions with ready answers for the interview
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {envatoQA.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg mb-2 bg-white">
              <AccordionTrigger className="px-4 py-3 text-left hover:no-underline">
                <span className="font-medium text-gray-900">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="flex justify-between items-start gap-4">
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">{item.answer}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(item.answer)}
                    className="flex-shrink-0"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-4 p-3 bg-white rounded border border-green-200">
          <p className="text-xs text-gray-600">
            💡 <strong>Usage tip:</strong> Use these as backup material if conversation runs short, or reference specific points during technical discussions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
