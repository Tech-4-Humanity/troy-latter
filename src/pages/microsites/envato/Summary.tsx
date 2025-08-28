import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, ChevronDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Summary = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/microsites">Microsites</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/microsites/envato">Envato</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Summary</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-8">
            <Link to="/microsites/envato" className="inline-flex items-center text-envato-green-600 hover:text-envato-green-700 mb-4 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Envato Overview
            </Link>
            <h1 className="text-4xl font-bold text-envato-gray-900 mb-4">Context, Messaging and Experience</h1>
            <p className="text-lg text-envato-gray-600">
              Understanding Envato's current position and strategic opportunities in the evolving creative economy.
            </p>
        </div>

        {/* Context Items */}
        <div className="space-y-8">
          {[
            {
              title: "Acquired by Shutterstock (2024) - anchor in APAC",
              story: "When I was at AWS, we knew APAC was never just a satellite - it was the testbed for global scale. Envato has that same role for Shutterstock. Australia offers sophisticated creative customers but also fast-moving SMEs. If you can succeed here, you can export the model globally. I've led region-to-global plays before, and I see the same path for Envato."
            },
            {
              title: "Getty merger pending (2025) - influx of content",
              story: "A sudden influx of assets is not just volume, it's entropy. In national-security systems I've built, the key was metadata discipline and orchestration. Envato can apply the same: rights, provenance, tags, and curation layers so scale becomes usable. That's where agentic AI plays - the governance layer that turns chaos into product."
            },
            {
              title: "Envato Elements proven subscription model",
              story: "Subscriptions are the ultimate signal of trust. At Oracle I saw the difference between transactional licensing and subscription engagement. Subscribers tell you every month whether you're relevant. Elements proves Envato already has that stickiness - and that's gold in a world where attention is scarce."
            },
            {
              title: "Multimodal assets (templates, code, audio, video)",
              story: "I've seen the mistake of monomodal bets - firms that focused on a single data type collapsed when the market shifted. Envato's diversity mirrors how I've run cross-cloud portfolios: don't silo the asset class, orchestrate them. That's how you future-proof."
            },
            {
              title: "AI leadership hiring",
              story: "The fact you're hiring a Principal AI Product Manager signals maturity: you're not just experimenting, you're productising. I've been in that exact seat - building AI strategies where the mandate was both to deliver value now and create defensible moats for later."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-envato-green-100 rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-envato-gray-900 mb-4">{item.title}</h2>
              <div className="envato-gradient-subtle border-l-4 border-envato-green-500 p-4 rounded-lg">
                <p className="text-envato-gray-700 italic">"{item.story}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Envato Labs Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-envato-gray-900 mb-8">Envato Labs: What's shipped and what's missing</h2>
          
          <div className="grid gap-8">
            <Card className="bg-envato-green-50 border border-envato-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-envato-gray-900">What's Already Live</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-envato-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-envato-gray-700">Envato Labs offers ImageGen, ImageEdit, VoiceGen, VideoGen, MusicGen, and InspoGen—all included in Elements subscriptions at no extra cost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-envato-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-envato-gray-700">Those tools are available and improving fast—AI image, video, voice, music, inspiration via moodboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-envato-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-envato-gray-700">The tools are tightly integrated—no separate logins or billing. You generate, refine, and export in one place</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-envato-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-envato-gray-700">Recent updates include enhanced ImageGen, multilingual VoiceGen, video generation with sound, and PremiumBeat catalog integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-envato-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-envato-gray-700">AI-assisted search and a Premiere Pro plugin are already live, adding search relevance and workflow access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-orange-50 border border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl text-envato-gray-900">Where the gaps lie—things they haven't yet done</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold text-envato-gray-900 mb-3">Key Missing Pieces</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-envato-gray-700">Tools are live, but workflows are disjointed. No campaign brief-to-output flow</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-envato-gray-700">Personalization for end-users—recommendations by project intent, speed-to-creative—still weak</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-envato-gray-700">Contributor tools (like auto-tagging, pricing insights) are not public</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-envato-gray-700">Enterprise-grade offerings: dashboards, campaign packs, brand compliance, analytics—missing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-envato-gray-700">Vertical-specific content (film, streaming, game dev) or integrations into agency pipelines—unfinished</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Understanding Envato's Context */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-envato-gray-900 mb-8">Understanding Envato's Context</h2>
          
          <div className="grid gap-8">
            {[
              {
                title: "AI Product Thinking",
                insights: [
                  "Envato's subscription-first approach makes it different from traditional stock photo libraries. That's why it was attractive to Shutterstock and Getty - it has proven community loyalty.",
                  "The AI opportunity is layered: asset generation, discovery, curation, workflow integration, and creative coaching.",
                  "Envato is already a global creative tech brand from Melbourne. That shows local innovation can scale - my goal would be to amplify that."
                ]
              },
              {
                title: "Community and Fairness",
                insights: [
                  "The creator community is existential - not just a content source. Without engaged contributors, the platform becomes static.",
                  "Contributors want visibility into earnings potential and fair compensation structures. Transparency builds trust.",
                  "AI tools should empower creators, not replace them. The focus should be on amplifying human creativity, not commoditizing it."
                ]
              },
              {
                title: "Global + Local Positioning",
                insights: [
                  "The opportunity isn't in asset generation alone, it's in embedding AI across workflows - search, curation, licensing, personalization.",
                  "Envato can become the creative operations layer for businesses worldwide - not just an asset library.",
                  "The timing is rare: business need for AI-first workflows is accelerating, and Envato has both content and community foundations.",
                  "The future is adaptive assets - templates, code, audio that reconfigure via AI - Envato is best placed to lead there."
                ]
              },
              {
                title: "Data, Metrics, and Impact",
                insights: [
                  "Success metrics must be bidirectional: customer satisfaction AND contributor earnings growth.",
                  "The network effect comes from community, not just algorithms. Contributors who succeed bring others.",
                  "AI performance should be transparent: show creators what's working, what's trending, where demand is heading.",
                  "Envato can measure both sides of the marketplace: usage patterns for customers, earning patterns for creators."
                ]
              }
            ].map((section, index) => (
              <Card key={index} className="bg-white border border-envato-green-100">
                <CardHeader>
                  <CardTitle className="text-xl text-envato-gray-900">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.insights.map((insight, insightIndex) => (
                      <li key={insightIndex} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-envato-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-envato-gray-700">"{insight}"</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Extra Sound Bites Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-envato-gray-900 mb-6">Additional Strategic Insights</h2>
          
          <Card className="bg-white border border-envato-green-100">
            <CardHeader>
              <CardTitle className="text-xl text-envato-gray-900">Community and Fairness</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-envato-gray-700">"The differentiator won't be who has the largest dataset - it will be who has the fairest marketplace."</p>
              <p className="text-envato-gray-700">"Envato's B Corp status shows values aren't just marketing - they're audited. I'd anchor AI development to that."</p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-envato-green-100 mt-6">
            <CardHeader>
              <CardTitle className="text-xl text-envato-gray-900">Global + Local Positioning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-envato-gray-700">"Being based in Australia gives me insight into APAC adoption patterns - mobile-first, SME-heavy, price-sensitive. That complements global strategy."</p>
              <p className="text-envato-gray-700">"Envato can pilot products in APAC that become global templates. That's how I've run innovation before - region as lab, then scale."</p>
              <p className="text-envato-gray-700">"APAC is not just a growth market - it's the proving ground for how creative tools scale globally. Envato is perfectly placed to lead that."</p>
              <p className="text-envato-gray-700">"Bridging APAC and global product is not an optional extra - it's Envato's role inside the new Shutterstock + Getty group."</p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-envato-green-100 mt-6">
            <CardHeader>
              <CardTitle className="text-xl text-envato-gray-900">Data, Metrics, and Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-envato-gray-700">"AI has to show measurable value to both sides - faster work for users, higher royalties for authors."</p>
              <p className="text-envato-gray-700">"Envato can also measure community health - are creators uploading more, are they earning more, are they satisfied with attribution?"</p>
            </CardContent>
          </Card>

          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-6">
            <CollapsibleTrigger asChild>
              <Card className="bg-envato-green-50 border border-envato-green-200 cursor-pointer hover:bg-envato-green-100 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-envato-gray-900 flex items-center justify-between">
                    Extra Interview Sound bites
                    {isOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </CardTitle>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 mt-4">
              <Card className="bg-white border border-envato-green-100">
                <CardContent className="pt-6 space-y-4">
                  <p className="text-envato-gray-700">"The marketplace of the future isn't static - it's intelligent, adaptive, and orchestrated. Envato can lead that evolution."</p>
                  <p className="text-envato-gray-700">"Envato already has the tools and subscriber base - AI is the accelerator to tie them together at scale."</p>
                  <p className="text-envato-gray-700">"AI should create compounding effects - every search, every download, every upload makes the system smarter."</p>
                  <p className="text-envato-gray-700">"This isn't just about more content - it's about making content usable at scale through orchestration."</p>
                  <p className="text-envato-gray-700">"Timing is rare: subscription model proven, assets flowing in, market demanding workflow tools - that's when transformation sticks."</p>
                </CardContent>
              </Card>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Strategic Plays Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-envato-gray-900 mb-8">The Timing Advantage</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-envato-green-50 border border-envato-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-envato-gray-900">Strategic Plays</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-envato-gray-900 mb-2">Agility Advantage</h4>
                  <p className="text-sm text-envato-gray-700">
                    "In government programs I've led, by the time scale arrived, agility was gone. Envato has an unusual window - it's large enough to matter, but small enough to still bend. That's when transformation is possible, and I know how to exploit that window."
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-envato-gray-900 mb-2">APAC Leverage</h4>
                  <p className="text-sm text-envato-gray-700">
                    "I've worked across ASEAN, and the pattern repeats: mobile-first adoption, SME-driven growth, leapfrogging legacy. APAC doesn't mimic the US - it jumps stages. That gives Envato a chance to create models here that later look innovative in Silicon Valley."
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-envato-gray-900 mb-2">Workflow Integration</h4>
                  <p className="text-sm text-envato-gray-700">
                    "Assets become infrastructure. Instead of downloading files, businesses embed creative workflows. That shift moves Envato from 'nice to have' to 'mission critical' for digital businesses."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-envato-green-100">
              <CardHeader>
                <CardTitle className="text-xl text-envato-gray-900">Strategic Context</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-envato-gray-700">
                  As AI redefines creative workflows, Envato has a unique window to become the definitive platform for trusted, compliant, and scalable creative operations - transforming from a nice-to-have asset library into mission-critical business infrastructure.
                </p>
                <p className="text-envato-gray-700">
                  The acquisition by Shutterstock and pending Getty merger provide the scale and content foundation, while Envato's B Corp values and proven subscription model create the trust and community engagement that larger platforms struggle to replicate.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Card className="envato-gradient text-white border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Asset Strategy & Market Expansion</h3>
                <p className="mb-6 text-white/90">
                  <strong>The Creator Network Imperative</strong>: Contributors aren't just suppliers - they're the core differentiator. Building direct creator-audience relationships through feeds, subscriptions, and workshop platforms creates a defensible moat that Adobe/Canva cannot replicate.
                </p>
                <Link to="/microsites/envato/assets" className="inline-flex items-center justify-center px-6 py-3 bg-white text-envato-green-700 font-semibold rounded-lg hover:bg-white/90 transition-colors">
                  View Asset Strategy
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-envato-green-500">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-envato-gray-900 mb-4">Strategic Paths</h3>
                <div className="text-sm text-envato-gray-600 mb-6 space-y-2">
                  <div>
                    <strong>Global + Local:</strong>
                  </div>
                  <div>
                    story: "Envato operates in multiple time zones and cultures - this isn't just operational complexity, it's a strategic advantage for global community building and 24/7 creator support cycles."
                  </div>
                </div>
                <Link to="/microsites/envato" className="inline-flex items-center justify-center px-6 py-3 envato-gradient text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  View Strategic Paths
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;