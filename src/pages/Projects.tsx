import React, { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { GlassmorphismCard, GlassmorphismCardContent } from '@/components/ui/glassmorphism-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Globe, Users, Zap, Shield, Building, Bot, Star, Wrench, Heart, Brain, ChartBar, Activity, Filter } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  icon: React.ElementType;
  category: string;
}

const ProjectCard = ({ title, description, url, icon: Icon, category }: ProjectProps) => (
  <GlassmorphismCard className="group hover:scale-[1.02] transition-all duration-300 h-full flex flex-col">
    <GlassmorphismCardContent className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-sm">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {title}
            </h3>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          className="opacity-70 hover:opacity-100 transition-opacity shrink-0"
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
      
      <Badge variant="secondary" className="self-start mb-3 text-xs">
        {category}
      </Badge>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
        {description}
      </p>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:shadow-lg"
      >
        Visit Project
        <ExternalLink className="ml-2 h-3 w-3" />
      </Button>
    </GlassmorphismCardContent>
  </GlassmorphismCard>
);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
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
    },
    {
      title: "Enter Australia",
      description: "Immigration and relocation services platform for Australia. Comprehensive guidance and resources for individuals and families moving to Australia.",
      url: "https://enteraustralia.tech",
      icon: Globe,
      category: "Immigration Services"
    },
    {
      title: "Extreme Spotto",
      description: "Interactive location-based gaming and social discovery app. Gamifying exploration and social connections through location-aware challenges.",
      url: "https://extremespotto.com",
      icon: Activity,
      category: "Gaming & Social"
    },
    {
      title: "Apex Predator Insurance",
      description: "Specialized insurance solutions for high-risk and unique coverage needs. Innovative insurance products for extreme sports and unconventional risks.",
      url: "https://apexpredatorinsurance.com",
      icon: Shield,
      category: "Insurance Innovation"
    },
    {
      title: "RatPak",
      description: "Community organization and resource management platform. Building stronger communities through collaborative resource sharing and organization.",
      url: "https://ratpak.org",
      icon: Users,
      category: "Community Platform"
    },
    {
      title: "NeuroPak",
      description: "Neuroscience research and cognitive enhancement tools. Advanced platforms for brain research, training, and cognitive optimization.",
      url: "https://neuropak.org",
      icon: Brain,
      category: "Neuroscience Research"
    },
    {
      title: "Own Your AI",
      description: "AI education and ownership platform empowering individuals to understand and control their AI interactions. Democratizing AI literacy and autonomy.",
      url: "https://OwnYourAI.com",
      icon: Bot,
      category: "AI Education"
    }
  ];

  const categories = [...new Set(projects.map(p => p.category))];
  const filteredProjects = selectedCategory 
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <PageTitle title="Projects & Ventures" />
        <p className="text-muted-foreground text-lg leading-relaxed mt-6 max-w-3xl mx-auto">
          A portfolio of innovative platforms and businesses driving technology-forward solutions across multiple industries.
          Each project represents a commitment to leveraging technology for positive impact and human advancement.
        </p>
      </div>
      
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Filter by Category</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className="rounded-full"
          >
            All Projects ({projects.length})
          </Button>
          {categories.sort().map(category => {
            const count = projects.filter(p => p.category === category).length;
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category} ({count})
              </Button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} {...project} />
        ))}
      </div>

      {/* About Section */}
      <GlassmorphismCard className="mb-8">
        <GlassmorphismCardContent>
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Star className="h-5 w-5 text-primary" />
            About This Portfolio
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            This collection represents a diverse ecosystem of technology ventures spanning artificial intelligence, 
            privacy technology, organizational innovation, and human potential optimization. Each project reflects 
            a deep commitment to leveraging cutting-edge technology for positive impact—whether through advancing 
            social good, driving business innovation, or pushing the frontiers of human-computer interaction and 
            cognitive enhancement.
          </p>
        </GlassmorphismCardContent>
      </GlassmorphismCard>
    </div>
  );
};

export default Projects;