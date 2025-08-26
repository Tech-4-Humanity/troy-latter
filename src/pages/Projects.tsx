import React from 'react';
import { Layout } from '@/components/Layout';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Globe, Users, Zap, Shield, Building, Bot, Star, Wrench, Heart, Brain, ChartBar, Activity } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  icon: React.ElementType;
  category: string;
}

const ProjectCard = ({ title, description, url, icon: Icon, category }: ProjectProps) => (
  <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-brand-primary">
    <CardHeader>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-brand-primary/10">
            <Icon className="h-5 w-5 text-brand-primary" />
          </div>
          <div>
            <CardTitle className="text-lg group-hover:text-brand-primary transition-colors">
              {title}
            </CardTitle>
            <div className="text-sm text-muted-foreground mt-1 font-medium">
              {category}
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-sm leading-relaxed mb-4">
        {description}
      </CardDescription>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
        className="w-full group-hover:bg-brand-primary group-hover:text-white transition-colors"
      >
        Visit Site
        <ExternalLink className="ml-2 h-3 w-3" />
      </Button>
    </CardContent>
  </Card>
);

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "Tech4Humanity",
      description: "Technology solutions focused on human-centered innovation and social impact. Developing sustainable tech initiatives that benefit communities worldwide.",
      url: "https://tech4humanity.com.au",
      icon: Heart,
      category: "Social Impact Tech"
    },
    {
      title: "Augmented Humanity Coach",
      description: "Personal development and coaching platform leveraging AI and human potential optimization. Empowering individuals through technology-enhanced growth strategies.",
      url: "https://augmentedhumanity.coach",
      icon: Brain,
      category: "AI Coaching"
    },
    {
      title: "Holo-Org",
      description: "Next-generation organizational structures and holographic business models. Reimagining how modern organizations operate in the digital age.",
      url: "https://holo-org.com",
      icon: Building,
      category: "Organizational Innovation"
    },
    {
      title: "WorkFamily AI",
      description: "AI-powered solutions for work-life balance and family organization. Helping families and professionals optimize their time and relationships.",
      url: "https://workfamilyai.org",
      icon: Users,
      category: "Family & Work Tech"
    },
    {
      title: "GCBAT",
      description: "Global Collective for Brain and Technology research. Advancing understanding of human-computer interfaces and cognitive enhancement.",
      url: "https://gcbat.org",
      icon: Activity,
      category: "Research & Development"
    },
    {
      title: "InnovateMe Systems",
      description: "Comprehensive innovation management platform and methodology. Tools and frameworks for systematic innovation across organizations.",
      url: "https://innovateme.systems",
      icon: Zap,
      category: "Innovation Platform"
    },
    {
      title: "AI Oopsies",
      description: "Documenting and learning from AI implementation challenges and failures. A community-driven platform for AI safety and best practices.",
      url: "https://aioopsies.com",
      icon: Bot,
      category: "AI Safety"
    },
    {
      title: "Making You A Star",
      description: "Personal branding and professional development platform. Helping individuals build their expertise and thought leadership presence.",
      url: "https://making-you-a-star.lovable.app/",
      icon: Star,
      category: "Personal Branding"
    },
    {
      title: "Global Tyres",
      description: "International tire distribution and automotive services platform. Connecting suppliers and buyers in the global automotive market.",
      url: "https://www.globaltyres.org/",
      icon: Globe,
      category: "Automotive"
    },
    {
      title: "All-Chemist",
      description: "Comprehensive chemical industry platform and marketplace. Facilitating connections and transactions in the global chemical supply chain.",
      url: "https://www.all-chemist.org/",
      icon: Wrench,
      category: "Chemical Industry"
    },
    {
      title: "ConsentX - Westpac Demo",
      description: "Advanced consent management demonstration for financial services. Showcasing next-generation privacy and data protection solutions.",
      url: "https://consentx-westpac-demo1.lovable.app/",
      icon: Shield,
      category: "Financial Privacy"
    },
    {
      title: "ConsentX Platform",
      description: "Enterprise consent management and privacy compliance platform. Comprehensive solution for data protection and user consent workflows.",
      url: "https://consent-x.lovable.app/overview",
      icon: Shield,
      category: "Privacy Tech"
    },
    {
      title: "LifeGraph",
      description: "Personal data visualization and life analytics platform. Helping individuals understand and optimize their life patterns and decisions.",
      url: "https://lifegraph.tech4humanity.com.au/",
      icon: ChartBar,
      category: "Personal Analytics"
    },
    {
      title: "MyNeural Signal",
      description: "Brain-computer interface monitoring and analysis platform. Advanced neural signal processing for research and therapeutic applications.",
      url: "https://myneuralsignal.gcbat.org/",
      icon: Brain,
      category: "Neurotechnology"
    }
  ];

  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <PageTitle title="Projects & Ventures" />
        <p className="text-brand-secondary text-lg leading-relaxed mt-4 mb-8">
          A portfolio of innovative platforms and businesses driving technology-forward solutions across multiple industries
        </p>
        
        <div className="mt-8 space-y-8">
          {categories.map(category => (
            <div key={category}>
              <h2 className="text-xl font-semibold text-brand-primary mb-4 border-b border-brand-primary/20 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter(project => project.category === category)
                  .map((project, index) => (
                    <ProjectCard key={index} {...project} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-brand-light/30 rounded-lg">
          <h3 className="text-lg font-semibold text-brand-primary mb-3">About These Projects</h3>
          <p className="text-brand-secondary leading-relaxed">
            This portfolio represents a diverse ecosystem of technology ventures spanning AI, privacy, 
            organizational innovation, and human potential optimization. Each project reflects a commitment 
            to leveraging technology for positive impact, whether through social good, business innovation, 
            or advancing the frontiers of human-computer interaction.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;