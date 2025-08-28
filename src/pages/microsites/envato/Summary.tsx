import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const Summary = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div id="top"></div>
        
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
            <BreadcrumbPage>Context Overview</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Header */}
        <div className="mb-8">
          <Link to="/microsites/envato" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Envato Overview
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">context, messaging</h1>
          <p className="text-lg text-muted-foreground">
            Understanding Envato's current position and strategic opportunities in the evolving creative economy.
          </p>
        </div>

        {/* Context Items */}
        <div className="space-y-8">
          {[
            {
              title: "Acquired by Shutterstock (2024) – anchor in APAC",
              story: "When I was at AWS, we knew APAC was never just a satellite—it was the testbed for global scale. Envato has that same role for Shutterstock. Australia offers sophisticated creative customers but also fast-moving SMEs. If you can succeed here, you can export the model globally. I've led region-to-global plays before, and I see the same path for Envato."
            },
            {
              title: "Getty merger pending (2025) – influx of content",
              story: "A sudden influx of assets is not just volume, it's entropy. In national-security systems I've built, the key was metadata discipline and orchestration. Envato can apply the same: rights, provenance, tags, and curation layers so scale becomes usable. That's where agentic AI plays—the governance layer that turns chaos into product."
            },
            {
              title: "Envato Elements proven subscription model",
              story: "Subscriptions are the ultimate signal of trust. At Oracle I saw the difference between transactional licensing and subscription engagement. Subscribers tell you every month whether you're relevant. Elements proves Envato already has that stickiness—and that's gold in a world where attention is scarce."
            },
            {
              title: "Multimodal assets (templates, code, audio, video)",
              story: "I've seen the mistake of monomodal bets—firms that focused on a single data type collapsed when the market shifted. Envato's diversity mirrors how I've run cross-cloud portfolios: don't silo the asset class, orchestrate them. That's how you future-proof."
            },
            {
              title: "AI leadership hiring",
              story: "The fact you're hiring a Principal AI Product Manager signals maturity: you're not just experimenting, you're productising. I've been in that exact seat—building AI strategies where the mandate was both to deliver value now and create defensible moats for later."
            }
          ].map((item, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">{item.title}</h2>
              <div className="bg-muted/50 border-l-4 border-primary p-4 rounded">
                <p className="text-muted-foreground italic">"{item.story}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Understanding Envato's Context */}
        <div className="mt-12 bg-card border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Understanding Envato's Context</h2>
          <div className="space-y-4">
            {[
              "Envato's subscription-first approach makes it different from traditional stock photo libraries. That's why it was attractive to Shutterstock and Getty—it has proven community loyalty.",
              "Envato gives the combined group a true APAC footprint, not just sales offices. That makes it strategic, not peripheral.",
              "Shutterstock and Getty are scale players. Envato is the innovation edge. My role would be to make sure innovation flows upward into the global roadmap.",
              "Envato is already a global creative tech brand from Melbourne. That shows local innovation can scale—my goal would be to amplify that."
            ].map((quote, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground italic">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Product Thinking */}
        <div className="mt-8 bg-card border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">AI Product Thinking</h2>
          <div className="space-y-4">
            {[
              "The opportunity isn't in asset generation alone, it's in embedding AI across workflows—search, curation, licensing, personalization.",
              "AI can make it easier for subscribers to find the right asset faster, with trust built in. That's where productivity gains come.",
              "AI features need to augment both sides: authors get better discovery and royalties, users get better access and tools.",
              "If Envato builds AI agents that act on behalf of creators and subscribers, you've essentially made the marketplace intelligent.",
              "The future is adaptive assets—templates, code, audio that reconfigure via AI—Envato is best placed to lead there."
            ].map((quote, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground italic">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community and Fairness */}
        <div className="mt-8 bg-card border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Community and Fairness</h2>
          <div className="space-y-4">
            {[
              "Envato's strength is community loyalty. AI has to extend that, not erode it.",
              "Royalties, licensing, and attribution need to be non-negotiables. That's how you win trust in a world where AI blurs lines.",
              "The differentiator won't be who has the largest dataset—it will be who has the fairest marketplace.",
              "Envato's B Corp status shows values aren't just marketing—they're audited. I'd anchor AI development to that.",
              "Protecting creators while scaling AI is not a constraint, it's a competitive advantage."
            ].map((quote, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground italic">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Global + Local */}
        <div className="mt-8 bg-card border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Global + Local Positioning</h2>
          <div className="space-y-4">
            {[
              "Being based in Australia gives me insight into APAC adoption patterns—mobile-first, SME-heavy, price-sensitive. That complements global strategy.",
              "Envato can pilot products in APAC that become global templates. That's how I've run innovation before—region as lab, then scale.",
              "I can translate between enterprise expectations in the US/EU and fast-moving creative SMEs in APAC. That's rare.",
              "APAC is not just a growth market—it's the proving ground for how creative tools scale globally. Envato is perfectly placed to lead that.",
              "Bridging APAC and global product is not an optional extra—it's Envato's role inside the new Shutterstock + Getty group."
            ].map((quote, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground italic">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>


        {/* Data, Metrics, and Impact */}
        <div className="mt-12 bg-card border border-border rounded-xl p-6">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Data, Metrics, and Impact</h2>
          <div className="space-y-4">
            {[
              "I'd define success by adoption, retention, and productivity gains, not just feature launches.",
              "Metrics that matter include search-to-download time, subscriber engagement per session, and author revenue uplift.",
              "AI has to show measurable value to both sides—faster work for users, higher royalties for authors.",
              "Retention will be the key metric. A sticky AI feature keeps users subscribed longer. That drives growth more than one-off sales.",
              "Envato can also measure community health—are creators uploading more, are they earning more, are they satisfied with attribution?"
            ].map((quote, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground italic">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Extra Interview Soundbites */}
        <div className="mt-12">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="w-full">
              <Card className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Extra Interview Soundbites</CardTitle>
                    <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                  <p className="text-muted-foreground text-left">Click to expand additional strategic talking points and interview soundbites</p>
                </CardHeader>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-4">
              <div className="space-y-4">
                {[
                  "Envato is the subscription model; Getty and Shutterstock are the scale models. The merger only works if Envato leads on innovation.",
                  "Data without trust is a liability. Envato's brand gives permission to innovate with AI responsibly.",
                  "Community is Envato's moat. AI must be built to strengthen that moat.",
                  "The marketplace of the future isn't static—it's intelligent, adaptive, and orchestrated. Envato can lead that evolution.",
                  "Workflow augmentation is a bigger prize than asset generation. That's how you integrate into the daily lives of creators.",
                  "Envato already has the tools and subscriber base—AI is the accelerator to tie them together at scale.",
                  "Envato is at the sweet spot: small enough to innovate, big enough to matter.",
                  "AI should create compounding effects—every search, every download, every upload makes the system smarter.",
                  "Envato can set the global standard for ethical AI in creative marketplaces, from Australia outward.",
                  "The merger brings assets, but assets without orchestration are just noise. Envato is the orchestrator.",
                  "This isn't just about more content—it's about making content usable at scale through orchestration.",
                  "Envato can be the innovation lab for Shutterstock and Getty, with APAC as the proving ground.",
                  "The differentiator is trust: protecting and empowering authors while scaling AI workflows.",
                  "Timing is rare: subscription model proven, assets flowing in, market demanding workflow tools—that's when transformation sticks."
                ].map((quote, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4">
                    <p className="text-muted-foreground italic">"{quote}"</p>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* The Timing Advantage */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">The Timing Advantage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Proven scale yet still agile",
                story: "In government programs I've led, by the time scale arrived, agility was gone. Envato has an unusual window—it's large enough to matter, but small enough to still bend. That's when transformation is possible, and I know how to exploit that window."
              },
              {
                title: "APAC growth > US/EU",
                story: "I've worked across ASEAN, and the pattern repeats: mobile-first adoption, SME-driven growth, leapfrogging legacy. APAC doesn't mimic the US—it jumps stages. That gives Envato a chance to create models here that later look innovative in New York."
              },
              {
                title: "Positioned as innovation hub",
                story: "When I built innovation labs at Oracle and AWS, the lab wasn't just about ideas—it was the place where enterprise risk could be lowered. Envato can be Shutterstock's lab: try fast in APAC, de-risk before global rollout. That's how you turn regional into strategic."
              },
              {
                title: "Connect assets, people, tools",
                story: "My background in orchestration—whether AI agents, BCI standards, or multi-cloud—teaches one thing: the connective tissue is the product. Envato can be the integrator of assets, authors, and workflows. That's a bigger moat than any single library."
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 border-l-4 border-primary p-4 rounded">
                    <p className="text-muted-foreground italic text-sm">"{item.story}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Strategic Plays */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Strategic Plays</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Workflow Integration",
                story: "At Unisys, I ran AI programs where the killer feature wasn't AI output but embedding in ServiceNow and Microsoft. Envato must do the same—meet designers and marketers in Figma, Canva, Adobe. Integration wins more than raw assets."
              },
              {
                title: "Rights & Trust Orchestration",
                story: "In national security I built systems where provenance wasn't optional. In creative AI, rights are the new provenance. Envato can lead by baking in licensing clarity and creator royalties at the agentic level. That makes trust the product."
              },
              {
                title: "Developer Empowerment",
                story: "Envato's authors are its crown jewels. But if they only upload assets, they risk being commoditised. At AWS I helped partners shift from products to platforms. Here, developers can build agents, plug-ins, adaptive workflows. That's how you protect and grow the ecosystem."
              },
              {
                title: "APAC Leverage",
                story: "Australia and ASEAN SMEs don't want complexity—they want affordability and automation. If Envato tailors products here, those models become global exports. I've seen APAC innovations reverse-flow into the US before—this can be another case."
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted/50 border-l-4 border-primary p-4 rounded">
                    <p className="text-muted-foreground italic text-sm">"{item.story}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action for Asset Strategy */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Explore Asset Strategy & Market Expansion</h3>
          <p className="text-muted-foreground mb-4">
            Learn how Envato can evolve beyond traditional media libraries to become essential business infrastructure.
          </p>
          <Link 
            to="/microsites/envato/assets" 
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View Asset Strategy
          </Link>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-secondary/10 to-primary/10 border border-border rounded-xl p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Ready to explore the strategic paths?</h3>
          <p className="text-muted-foreground mb-4">
            See how these contextual insights translate into actionable strategic options for Envato's AI future.
          </p>
          <Link 
            to="/microsites/envato" 
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View Strategic Paths
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Summary;