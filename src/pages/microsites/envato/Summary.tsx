import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ArrowLeft } from 'lucide-react';

const Summary = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Context – Where Envato Is Now</h1>
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

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 border border-border rounded-xl p-6 text-center">
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