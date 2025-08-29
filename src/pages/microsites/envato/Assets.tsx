import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft, TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import EnvatoSubnav from './components/EnvatoSubnav';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import EnvatoEcosystemDiagram from './components/EnvatoEcosystemDiagram';

const Assets = () => {
  const [activeTab, setActiveTab] = useState<'library' | 'factory'>('library');

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
            <BreadcrumbPage>Asset Strategy</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Envato Subnav */}
        <EnvatoSubnav />

        {/* Header */}
        <div className="mb-8">
          <Link to="/microsites/envato" className="inline-flex items-center text-envato-green-600 hover:text-envato-green-700 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Envato Overview
          </Link>
          <h1 className="text-4xl font-bold text-envato-gray-900 mb-4">Increased Assets and Increased Markets</h1>
          <p className="text-lg text-envato-gray-600">
            Expanding the asset universe and the markets Envato serves—growing from media library to workflow infrastructure.
          </p>
        </div>

        {/* Market Opportunity */}
        <div className="mt-12 envato-gradient-subtle border border-envato-green-200 rounded-2xl overflow-hidden">
          <div className="envato-gradient text-white p-6">
            <h2 className="text-3xl font-bold mb-2">Agentic AI Market Opportunity</h2>
            <p className="text-white/90">As businesses become increasingly digital, agentic AI and automation transform creative workflows from manual tasks to intelligent, autonomous operations. Many creative functions are ripe for automation—we need to be integral to this transformation, not just a content library.</p>
          </div>

          {/* Key Metrics at a Glance */}
          <div className="p-6 bg-white/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary">100x</div>
                <div className="text-sm text-muted-foreground">Market Expansion</div>
                <div className="text-xs text-muted-foreground">5M → 500M+ users</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-full mx-auto mb-3">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600">3-6x</div>
                <div className="text-sm text-muted-foreground">Revenue Per User</div>
                <div className="text-xs text-muted-foreground">$16-30 → $50-200</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-full mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600">10x</div>
                <div className="text-sm text-muted-foreground">Market Size</div>
                <div className="text-xs text-muted-foreground">$5B → $50B+</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-500/10 rounded-full mx-auto mb-3">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                 <div className="text-3xl font-bold text-purple-600">∞</div>
                 <div className="text-sm text-muted-foreground">Stickiness</div>
                 <div className="text-xs text-muted-foreground">Nice-to-have - Mission-critical</div>
              </div>
            </div>
          </div>

          {/* Interactive Comparison */}
          <div className="p-6">
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'library' | 'factory')}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="library" className="data-[state=active]:bg-muted">Asset Library (Current)</TabsTrigger>
                <TabsTrigger value="factory" className="data-[state=active]:bg-primary data-[state=active]:text-white">Asset Kit Factory (Vision)</TabsTrigger>
              </TabsList>
              
              <TabsContent value="library" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-muted">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-muted-foreground mb-2">5M</div>
                        <div className="text-sm font-medium">Creative Professionals</div>
                        <div className="text-xs text-muted-foreground mt-1">Designers, Video Editors, Developers</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-muted">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-muted-foreground mb-2">$16-30</div>
                        <div className="text-sm font-medium">ARPU/Month</div>
                        <div className="text-xs text-muted-foreground mt-1">Subscription-based access</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-muted">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-muted-foreground mb-2">~$5B</div>
                        <div className="text-sm font-medium">Total Market</div>
                        <div className="text-xs text-muted-foreground mt-1">Creative asset industry</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold text-muted-foreground mb-2">Current Limitations</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Limited to creative professionals</li>
                    <li>• One-time download model</li>
                    <li>• Low switching costs</li>
                    <li>• Commoditized market</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="factory" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-primary bg-primary/5">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">500M+</div>
                        <div className="text-sm font-medium text-primary">All Businesses</div>
                        <div className="text-xs text-muted-foreground mt-1">Every company with digital presence</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-primary bg-primary/5">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">$50-200</div>
                        <div className="text-sm font-medium text-primary">ARPU/Month</div>
                        <div className="text-xs text-muted-foreground mt-1">Enterprise workflow pricing</div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-primary bg-primary/5">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">~$50B+</div>
                        <div className="text-sm font-medium text-primary">Total Market</div>
                        <div className="text-xs text-muted-foreground mt-1">Workflow automation + enterprise tools</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Strategic Advantages</h4>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• Mission-critical business infrastructure</li>
                    <li>• Recurring workflow dependencies</li>
                    <li>• High switching costs</li>
                    <li>• Network effects at scale</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Transformation Journey */}
          <div className="p-6 bg-gradient-to-r from-muted/50 to-primary/10">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">The Strategic Transformation</h3>
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-3 mx-auto">
                  <span className="text-2xl font-bold text-muted-foreground">5M</span>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Creative Professionals</div>
                <div className="text-xs text-muted-foreground">Current Market</div>
              </div>
              
              <div className="flex-1 mx-8">
                <div className="relative">
                  <div className="h-1 bg-gradient-to-r from-muted via-primary/50 to-primary rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-primary rounded-full p-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <div className="text-xs font-medium text-primary">AI + Workflows</div>
                  <div className="text-xs text-muted-foreground">Transformation Engine</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-3 mx-auto">
                  <span className="text-xl font-bold text-white">500M+</span>
                </div>
                <div className="text-sm font-medium text-primary">All Businesses</div>
                <div className="text-xs text-muted-foreground">Target Market</div>
              </div>
            </div>
          </div>
        </div>

        {/* Asset Redefinition */}
        <div id="asset-redefinition" className="mt-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Asset Strategy & Market Expansion</h2>
          <p className="text-lg text-muted-foreground mb-8">
            How Envato can evolve from "media library" to "agentic workflow factory" - expanding into AI-powered automation, intelligent data assets, and augmented creative processes that make every business operationally dependent on the platform.
          </p>

          {/* Current vs Expanded Definition */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Current Asset Definition</CardTitle>
                <p className="text-muted-foreground">Traditional media library approach</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Images & Photography",
                    "Video & Motion Graphics", 
                    "Audio & Music",
                    "Templates & Graphics",
                    "Fonts & Typography",
                    "Code & Themes"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground italic">
                    <strong>Market Size:</strong> ~$5B creative asset market
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Expanded Asset Definition</CardTitle>
                <p className="text-muted-foreground">Next-generation asset ecosystem</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: "Knowledge Assets", items: ["Style guides", "Design systems", "Prompt libraries", "Brand taxonomies"] },
                    { category: "Data Assets", items: ["Curated datasets", "Embeddings", "Metadata schemas", "Feature stores"] },
                    { category: "Automation Assets", items: ["AI workflows", "Plugins", "Connectors", "Scripts"] },
                    { category: "Compliance Packs", items: ["License bundles", "Provenance proofs", "Audit templates"] },
                    { category: "Learning Capsules", items: ["Micro-lessons", "AI upskilling", "Best practices"] },
                    { category: "Vertical Kits", items: ["Industry-specific bundles", "Workflow templates", "Campaign starters"] }
                  ].map((group, index) => (
                    <div key={index} className="border-l-2 border-primary pl-3">
                      <h4 className="font-semibold text-primary text-sm uppercase tracking-wide">{group.category}</h4>
                      <div className="mt-1 space-y-1">
                        {group.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="text-sm text-muted-foreground">• {item}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary italic">
                    <strong>Addressable Market:</strong> ~$50B+ workflow automation + enterprise tools market
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        {/* Why Every Business Needs Envato */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Every Business Will Need Envato</h2>
          <p className="text-lg text-muted-foreground mb-8">
            As businesses become increasingly digital, agentic AI systems are automating creative workflows at unprecedented scale. Every marketing campaign, product launch, and customer touchpoint requires intelligent, automated creative production. Many of these functions are ripe for automation - Envato must be the integral infrastructure powering this transformation.
          </p>

          <div className="grid gap-6">
            {[
              {
                business: "E-commerce Companies",
                needs: "Product photography, social media content, email templates, seasonal campaigns",
                solution: "Automated product-to-social workflows, brand-consistent templates, seasonal content kits",
                frequency: "Daily content creation needs"
              },
              {
                business: "SaaS Startups",
                needs: "UI kits, onboarding flows, marketing assets, documentation templates",
                solution: "Design system libraries, user flow templates, feature announcement kits",
                frequency: "Continuous product marketing needs"
              },
              {
                business: "Professional Services",
                needs: "Presentation templates, proposal formats, client communication assets",
                solution: "Industry-specific proposal kits, client presentation automation, brand compliance tools",
                frequency: "Every client engagement"
              },
              {
                business: "Healthcare Organizations",
                needs: "Patient education materials, compliance documentation, accessibility-ready designs",
                solution: "Medical-grade templates, HIPAA-compliant designs, accessibility verification tools",
                frequency: "Ongoing patient communication"
              },
              {
                business: "Educational Institutions",
                needs: "Course materials, student engagement content, administrative templates",
                solution: "Interactive learning templates, assessment tools, institutional branding kits",
                frequency: "Every semester/course"
              },
              {
                business: "Financial Services",
                needs: "Data visualization, regulatory compliance, client reporting",
                solution: "Financial dashboard templates, compliance-ready designs, client report automation",
                frequency: "Monthly/quarterly reporting cycles"
              }
            ].map((use_case, index) => (
              <Card key={index} className="border border-border">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">{use_case.business}</h4>
                      <p className="text-sm text-muted-foreground">{use_case.frequency}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Current Needs</h5>
                      <p className="text-sm text-muted-foreground">{use_case.needs}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Envato Solution</h5>
                      <p className="text-sm text-muted-foreground">{use_case.solution}</p>
                    </div>
                    <div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="text-xs text-green-600 font-medium uppercase tracking-wide">Dependency Level</div>
                        <div className="text-sm font-semibold text-green-900">Mission Critical</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Envato Ecosystem */}
        <EnvatoEcosystemDiagram />

        {/* The Network Effect */}
        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-xl p-6">
          <h2 className="text-3xl font-bold text-foreground mb-6">The Network Effect</h2>
          <p className="text-muted-foreground mb-4">
            As more businesses depend on Envato's asset ecosystem, the platform becomes increasingly valuable:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Contributors</h4>
              <p className="text-sm text-muted-foreground">Create industry-specific assets based on demand signals</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Businesses</h4>
              <p className="text-sm text-muted-foreground">Get precisely what they need, when they need it</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Platform</h4>
              <p className="text-sm text-muted-foreground">Becomes indispensable business infrastructure</p>
            </div>
          </div>
        </div>

          {/* NEW Asset Category Deep Dives */}
          <div className="mt-12 space-y-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">NEW Asset Category Deep Dives</h2>
              <p className="text-lg text-muted-foreground max-w-4xl">
                Beyond traditional media assets, these new categories represent the future of creative workflow automation. Each category transforms manual creative processes into intelligent, scalable systems that businesses can't operate without.
              </p>
            </div>
            
            {[
              {
                title: "Plans & Blueprints",
                description: "Strategic frameworks and planning assets",
                examples: ["Campaign briefs with AI-generated mood boards", "Storyboard templates that adapt to brand guidelines", "Standard Operating Procedures for creative workflows", "Brand strategy frameworks with industry customization"],
                value: "Replaces $50k strategy consultants with $50/month subscription access",
                businesses: "Marketing agencies, in-house brand teams, startups"
              },
              {
                title: "Knowledge Assets", 
                description: "Structured expertise and best practices",
                examples: ["Design system component libraries with usage guidelines", "Prompt engineering libraries for different creative outcomes", "Brand voice taxonomies with tone examples", "Color palette generators with accessibility compliance"],
                value: "Eliminates need for expensive design system consultants",
                businesses: "Every company building digital products, design teams"
              },
              {
                title: "Data Assets",
                description: "Curated, structured data for AI and analytics",
                examples: ["Trend datasets showing emerging visual styles", "Demographic preference data for creative targeting", "Performance metrics for different creative formats", "Metadata schemas for automated content tagging"],
                value: "Replaces custom data science teams for creative insights",
                businesses: "E-commerce, social media, advertising agencies"
              },
              {
                title: "Automation Assets",
                description: "Workflow connectors and AI agents",
                examples: ["AI agents that generate social posts from product catalogs", "Plugins connecting Figma to brand asset libraries", "Scripts automating video creation from templates", "Workflow connectors for Shopify → social media"],
                value: "Eliminates need for custom integration development",
                businesses: "SMEs, e-commerce, social media managers"
              },
              {
                title: "Compliance Packs",
                description: "Legal, ethical, and regulatory frameworks",
                examples: ["GDPR-compliant template bundles", "Copyright provenance tracking", "AI transparency disclosure templates", "Accessibility compliance checklists"],
                value: "Reduces legal risk and compliance costs",
                businesses: "Enterprise, government, regulated industries"
              },
              {
                title: "Vertical Kits",
                description: "Industry-specific asset collections",
                examples: ["Gaming: character sheets + environment assets + UI kits", "Education: course templates + interactive elements + assessment tools", "Healthcare: compliant imagery + patient education templates", "Finance: data visualization templates + regulatory-safe designs"],
                value: "Replaces industry-specific design agencies",
                businesses: "Every vertical - healthcare, finance, education, gaming, retail"
              }
            ].map((category, index) => (
              <Card key={index} className="border border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Examples & Use Cases</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {category.examples.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="bg-muted/50 rounded-lg p-3">
                            <p className="text-sm text-muted-foreground">{example}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-semibold text-green-900 mb-2">Value Proposition</h4>
                        <p className="text-sm text-green-800">{category.value}</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">Target Businesses</h4>
                        <p className="text-sm text-blue-800">{category.businesses}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-xl p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Ready to explore the strategic paths?</h3>
            <p className="text-muted-foreground mb-4">
              See how these asset strategy insights translate into actionable strategic options for Envato's AI future.
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
    </div>
  );
};

export default Assets;