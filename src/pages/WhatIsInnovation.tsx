
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const WhatIsInnovation = () => {
  const innovationPages = [
    {
      title: "Innovation Definition",
      path: "/innovation-definition",
      description: "What makes something innovative and how it drives change",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "My Innovation Journey",
      path: "/innovation-journey",
      description: "Career highlights and innovation milestones across Oracle, AWS, and Unisys",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
    {
      title: "Customer Success Stories",
      path: "/customer-success-stories",
      description: "Notable innovation outcomes from customer engagements",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Frameworks I Use",
      path: "/innovation-frameworks",
      description: "Key innovation methodologies and approaches",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Leadership Style",
      path: "/leadership-style",
      description: "Innovation leadership principles and approaches",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "People Involved",
      path: "/people-involved",
      description: "Key stakeholders in successful innovation",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Upcoming Projects",
      path: "/upcoming-projects",
      description: "Innovation projects in the pipeline",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <PageTitle title="What Is Innovation?" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovationPages.map((page) => (
          <Link to={page.path} key={page.path} className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={page.image} 
                  alt={page.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-vault-primary/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">Explore</span>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-vault-primary mb-2">{page.title}</h3>
                <p className="text-sm text-gray-600">{page.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WhatIsInnovation;
