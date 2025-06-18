import React from 'react';
import { Link } from 'react-router-dom';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, Lightbulb } from 'lucide-react';

const ExperienceAndImpact = () => {
  const sections = [
    {
      title: 'Strategic Projects',
      description: 'Breakthrough initiatives delivering measurable outcomes across sovereign AI, battlefield cloud, and security frameworks.',
      icon: Target,
      path: '/strategic-projects',
      highlight: '$2M+ in secured production funding',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop'
    },
    {
      title: 'Initiatives',
      description: 'Building cultures of rapid experimentation while driving ecosystem alliances and thought leadership.',
      icon: Users,
      path: '/responsibilities',
      highlight: '40+ qualified leads per quarter',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Innovation Leadership Approach',
      description: 'Systematic approaches to customer-driven innovation with practical frameworks and real-world applications.',
      icon: Lightbulb,
      path: '/customer-asks-stars',
      highlight: '60% faster research cycles',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="animate-fade-in">
      <PageTitle title="Experience & Impact" />
      
      <div className="mb-8">
        <p className="text-lg text-vault-secondary mb-6">
          Transforming complex challenges into breakthrough solutions through strategic leadership, 
          rapid prototyping, and customer-driven innovation.
        </p>
        
        <div className="bg-gradient-to-r from-vault-primary/10 to-vault-accent/10 p-6 rounded-lg border border-vault-accent/20">
          <h2 className="text-xl font-semibold text-vault-primary mb-4">Key Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-vault-primary">$15M+</div>
              <div className="text-sm text-vault-secondary">Revenue Impact</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-vault-primary">70%</div>
              <div className="text-sm text-vault-secondary">Faster Deployments</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-vault-primary">85%</div>
              <div className="text-sm text-vault-secondary">Compliance Automation</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {sections.map((section, index) => (
          <Link key={index} to={section.path} className="block">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 focus:ring-2 focus:ring-vault-primary focus:outline-none h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-3">
                  <section.icon className="h-5 w-5 text-vault-primary" />
                  <h3 className="text-xl font-semibold text-vault-primary">{section.title}</h3>
                </div>
                
                <p className="text-vault-secondary text-sm mb-4 flex-grow">
                  {section.description}
                </p>
                
                <div className="bg-vault-accent/10 p-3 rounded-lg mb-4">
                  <p className="text-vault-primary font-medium text-sm">{section.highlight}</p>
                </div>
                
                <div className="w-full bg-vault-primary hover:bg-vault-primary/90 text-white rounded-md px-4 py-2 flex items-center justify-center transition-colors">
                  Explore Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-vault-primary mb-4">Impact Philosophy</h2>
        <p className="text-vault-secondary">
          My approach combines deep technical expertise with strategic vision to deliver solutions that 
          not only solve immediate challenges but establish frameworks for sustained innovation. Every project 
          is measured by tangible outcomes: reduced cycle times, increased revenue, enhanced security, 
          and strengthened market position.
        </p>
      </div>
    </div>
  );
};

export default ExperienceAndImpact;
