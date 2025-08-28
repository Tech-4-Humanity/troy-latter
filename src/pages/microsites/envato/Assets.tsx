import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Assets = () => {
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

        {/* Header */}
        <div className="mb-8">
          <Link to="/microsites/envato" className="inline-flex items-center text-primary hover:text-primary/80 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Envato Overview
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Asset Strategy & Market Expansion</h1>
          <p className="text-lg text-muted-foreground">
            Exploring how Envato can evolve beyond traditional media libraries to become essential business infrastructure.
          </p>
        </div>

        {/* Asset Redefinition */}
        <div id="asset-redefinition" className="mt-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Asset Redefinition: Beyond Media Libraries</h2>
          <p className="text-lg text-muted-foreground mb-8">
            How Envato can evolve from "media library" to "asset kit factory" – expanding into knowledge, data, automation, and vertical-specific solutions that make every business dependent on the platform.
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

          {/* Asset Category Deep Dives */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground">Asset Category Deep Dives</h3>
            
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

          {/* Market Size Comparison */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Market Opportunity: Asset Library vs Asset Kit Factory</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Traditional Asset Library</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Creative professionals</span>
                    <span className="font-semibold">~5M users</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ARPU (per month)</span>
                    <span className="font-semibold">$16-30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total addressable market</span>
                    <span className="font-semibold">~$5B</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Asset Kit Factory</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Every business with digital presence</span>
                    <span className="font-semibold text-primary">~500M+ businesses</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">ARPU (enterprise workflow tools)</span>
                    <span className="font-semibold text-primary">$50-500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Total addressable market</span>
                    <span className="font-semibold text-primary">$300B+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Every Business Needs Envato */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Why Every Business Will Need Envato</h2>
          <p className="text-lg text-muted-foreground mb-8">
            As businesses become increasingly digital, the need for consistent, efficient, and compliant creative workflows becomes universal. Envato's expanded asset ecosystem addresses these universal business needs.
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

          <div className="mt-8 bg-primary/10 border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">The Network Effect</h3>
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
                <p className="text-sm text-muted-foreground">Find exactly what they need faster, reducing creative costs</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-primary/20">
                <h4 className="font-semibold text-primary mb-2">Platform</h4>
                <p className="text-sm text-muted-foreground">Becomes essential infrastructure for business operations</p>
              </div>
            </div>
          </div>
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
  );
};

export default Assets;