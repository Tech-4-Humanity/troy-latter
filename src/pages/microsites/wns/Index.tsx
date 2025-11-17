import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Linkedin, Globe } from 'lucide-react';

const WnsIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <Link to="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link to="/microsites" className="hover:text-foreground transition-colors">
          Microsites
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">WNS</span>
      </nav>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto bg-card shadow-lg rounded-lg p-8 md:p-12">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground border-b-2 border-primary pb-3 mb-4">
          Troy Latter
        </h1>
        
        {/* Contact Info */}
        <div className="text-sm text-muted-foreground mb-8 flex flex-wrap items-center gap-4">
          <span>Grays Point, Australia</span>
          <span className="hidden sm:inline">•</span>
          <a href="tel:+61424882136" className="flex items-center gap-1 text-primary hover:underline">
            <Phone className="h-3 w-3" />
            +61 424 882 136
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="https://troy-latter.lovable.app/" className="flex items-center gap-1 text-primary hover:underline">
            <Globe className="h-3 w-3" />
            troy-latter.lovable.app
          </a>
          <span className="hidden sm:inline">•</span>
          <a href="https://linkedin.com/in/theinnovater" className="flex items-center gap-1 text-primary hover:underline">
            <Linkedin className="h-3 w-3" />
            linkedin.com/in/theinnovater
          </a>
        </div>

        {/* Subtitle */}
        <div className="text-xl md:text-2xl text-primary font-semibold mb-6">
          Lead Technical Consultant
        </div>

        {/* Executive Summary */}
        <section className="mb-8">
          <p className="text-foreground mb-4">
            <strong>Hyperautomation | Low Code | Appian | Integration | Delivery Leadership</strong>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Senior technical leader with deep experience in enterprise automation, low-code platforms, cloud integration and customer delivery. Strong background in public sector and regulated environments. Skilled in guiding teams, defining architecture patterns, creating technical standards, and leading customers through complex delivery cycles.
            <br /><br />
            Works well in dynamic projects with high expectations. Focus: build clean solutions, reduce friction, and help teams solve problems faster.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Skills</h2>
          <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-muted-foreground">
            <li>Low-code architecture</li>
            <li>Integration design</li>
            <li>Data modelling</li>
            <li>Solution design & HLD</li>
            <li>Technical standards</li>
            <li>Automation strategy</li>
            <li>Agile delivery</li>
            <li>Sprint leadership</li>
            <li>Infrastructure setup</li>
            <li>On-prem deployment</li>
            <li>Network & OS (Linux, Windows)</li>
            <li>CI/CD pipelines</li>
            <li>Quality reviews</li>
            <li>UAT leadership</li>
            <li>Enterprise documentation</li>
            <li>AI-assisted automation</li>
          </ul>
        </section>

        {/* Key Strengths */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Key Strengths</h2>
          <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-muted-foreground">
            <li>Clear communicator with customers</li>
            <li>Strong mentor for technical teams</li>
            <li>Reliable in high-pressure cycles</li>
            <li>Rapidly turn requirements into designs</li>
            <li>Known for simple patterns that scale</li>
            <li>Bridge business, BA, engineering teams</li>
          </ul>
        </section>

        {/* Micro Credentials & Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Micro Credentials & Certifications</h2>
          <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2 list-disc list-inside text-muted-foreground">
            <li>AWS Solutions Architect</li>
            <li>Azure AI Engineer</li>
            <li>Google Cloud Architect</li>
            <li>Oracle Cloud</li>
            <li>OpenAI, Claude, LangChain, LangGraph, Semantic Kernel</li>
            <li>MCP Practitioner</li>
            <li>Supabase, n8n, Make, Pipedream, Hugging Face, Relevance AI, GitHub Copilot, Snowflake, Databricks, NVIDIA NIM</li>
            <li>Responsible AI Governance</li>
            <li>AI Ethics & Policy</li>
            <li>Data Privacy & Security</li>
            <li>PRINCE2, Prosci ADKAR, ITIL, TOGAF</li>
          </ul>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Professional Experience</h2>

          <div className="mb-6">
            <div className="mb-2">
              <span className="font-bold text-lg text-foreground">Chief Technology Officer & Strategic Foresight</span>
              <span className="text-primary">, Unisys</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">Jan 2024 – Mar 2025, Sydney</div>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Led multi-cloud and automation programs for government, telco, banking, retail.</li>
              <li>Delivered enterprise AI and workflow pilots with low-code design.</li>
              <li>Established solution and service standards.</li>
              <li>Coordinated sprints, demos, and delivery teams with improved quality.</li>
              <li>Supported UAT and managed deployment and release paths.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="mb-2">
              <span className="font-bold text-lg text-foreground">Principal Solutions Architect</span>
              <span className="text-primary">, Amazon Web Services</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">Dec 2019 – May 2023, Sydney</div>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Defined integration patterns and modernised legacy systems.</li>
              <li>Built data models and automation for health, transport, government.</li>
              <li>Ran workshops, shaped specs, and guided migrations.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="mb-2">
              <span className="font-bold text-lg text-foreground">Innovation Adviser</span>
              <span className="text-primary">, Oracle</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">Jul 2016 – Sep 2019, Canberra & APAC</div>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Designed integration and data models for healthcare, immigration, infrastructure.</li>
              <li>Established architectural standards across countries.</li>
              <li>Oversaw offshore dev teams and infrastructure reviews.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="mb-2">
              <span className="font-bold text-lg text-foreground">Business Value Consultant</span>
              <span className="text-primary">, Hewlett Packard Enterprise</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">Jan 2013 – May 2016, Canberra</div>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Supported government automation and workflow improvements.</li>
              <li>Created technical specifications and business-aligned solutions.</li>
              <li>Reviewed code, led UAT, documentation, deployments.</li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="mb-2">
              <span className="font-bold text-lg text-foreground">Senior Consultant</span>
              <span className="text-primary">, SMS Management & Technology</span>
            </div>
            <div className="text-sm text-muted-foreground mb-2">Jul 2013 – Dec 2015, Canberra</div>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
              <li>Worked on workflow, model, integration changes for government.</li>
              <li>Defined requirements, managed blockers, coordinated teams.</li>
              <li>Standardised architecture and service patterns.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Education</h2>
          <div className="mb-2">
            <strong className="text-foreground">Master of Commerce (Marketing)</strong>, University of NSW
          </div>
          <div>
            <strong className="text-foreground">Bachelor of Economics, Law & Industrial Relations</strong>, University of Wollongong
          </div>
        </section>

        {/* Additional Information */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Additional Information</h2>
          <ul className="list-disc list-inside text-muted-foreground space-y-1">
            <li>Australian working rights</li>
            <li>Based in Sydney</li>
            <li>Daily collaboration with offshore teams</li>
            <li>Experience with on-prem & cloud environments</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default WnsIndex;
