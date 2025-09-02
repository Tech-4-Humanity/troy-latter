import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GlassmorphismCard, GlassmorphismCardContent } from '@/components/ui/glassmorphism-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ExternalLink, Globe, Users, Zap, Shield, Building, Bot, Star, Wrench, Heart, Brain, ChartBar, Activity, Filter, Search, X } from 'lucide-react';
import { LeadCaptureGate } from '@/components/LeadCaptureGate';

interface ProjectProps {
  title: string;
  description: string;
  url: string;
  icon: React.ElementType;
  category: string;
}

const ProjectCard = ({ title, description, url, icon: Icon, category }: ProjectProps) => {
  // Create favicon URL for the project
  const getFaviconUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname;
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
    } catch {
      return null;
    }
  };

  const faviconUrl = getFaviconUrl(url);

  return (
    <GlassmorphismCard className="group hover:scale-[1.02] hover:shadow-xl transition-all duration-500 h-full flex flex-col border border-white/10 hover:border-primary/30 bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-md">
      <GlassmorphismCardContent className="flex flex-col h-full p-6">
        {/* Header with favicon and icon */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent backdrop-blur-sm border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
              <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              {faviconUrl && (
                <img 
                  src={faviconUrl} 
                  alt={`${title} favicon`}
                  className="absolute -top-1 -right-1 w-4 h-4 rounded-sm bg-background/80 p-0.5"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-1">
                {title}
              </h3>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
            className="opacity-60 hover:opacity-100 transition-all duration-300 shrink-0 hover:bg-primary/10"
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Category badge with gradient */}
        <Badge 
          variant="secondary" 
          className="self-start mb-4 text-xs bg-gradient-to-r from-muted to-muted/50 border border-border/50 group-hover:border-primary/30 transition-all duration-300"
        >
          {category}
        </Badge>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* CTA Button */}
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
          className="w-full group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground group-hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20"
        >
          Visit Project
          <ExternalLink className="ml-2 h-3 w-3 group-hover:translate-x-0.5 transition-transform duration-300" />
        </Button>
      </GlassmorphismCardContent>
    </GlassmorphismCard>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasAccess, setHasAccess] = useState(false);
  const { t } = useTranslation();

  // Check if user has already gained access
  useEffect(() => {
    const accessGranted = localStorage.getItem('projects-access-granted');
    setHasAccess(accessGranted === 'true');
  }, []);

  // Handle successful form submission
  const handleAccessGranted = () => {
    setHasAccess(true);
  };

  // If no access, show the gate
  if (!hasAccess) {
    return <LeadCaptureGate onSuccess={handleAccessGranted} />;
  }
  
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
  
  // Search with relevance scoring
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    
    const query = searchQuery.toLowerCase().trim();
    return projects
      .map(project => {
        let score = 0;
        const title = project.title.toLowerCase();
        const description = project.description.toLowerCase();
        const category = project.category.toLowerCase();
        
        // Get domain from URL for domain matching
        let domain = '';
        try {
          domain = new URL(project.url).hostname.toLowerCase();
        } catch {}
        
        // Scoring system
        if (title === query) score += 100;
        else if (title.includes(query)) score += 50;
        if (domain.includes(query)) score += 20;
        if (category.includes(query)) score += 30;
        if (description.includes(query)) score += 10;
        
        return { ...project, score };
      })
      .filter(project => project.score > 0)
      .sort((a, b) => b.score - a.score);
  }, [searchQuery, projects]);

  const filteredProjects = selectedCategory 
    ? searchResults.filter(p => p.category === selectedCategory)
    : searchResults;
    
  const hasActiveFilters = selectedCategory || searchQuery.trim();
  const clearFilters = () => {
    setSelectedCategory(null);
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Modern Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-6">
          <Star className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Portfolio Showcase</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6">
          {t('projects.title')}
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </div>
      
      {/* Search Bar */}
      <div className="mb-8">
        <div className="flex items-center gap-4 max-w-lg">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full border-border/50 focus:border-primary/50 bg-background/50 backdrop-blur-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="text-sm text-muted-foreground whitespace-nowrap">
            Showing {filteredProjects.length} of {projects.length}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} {...project} />
        ))}
      </div>

      {/* Category Filter - Moved Below Cards */}
      <div className="border-t border-border/50 pt-8">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Filter className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Filter by Category</span>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-foreground ml-2"
            >
              <X className="h-3 w-3 mr-1" />
              Clear filters
            </Button>
          )}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className="rounded-full px-4 py-1.5 text-xs hover:scale-105 transition-transform duration-200"
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
                className="rounded-full px-4 py-1.5 text-xs hover:scale-105 transition-transform duration-200"
              >
                {category} ({count})
              </Button>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Projects;