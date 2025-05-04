
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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "My Innovation Journey",
      path: "/innovation-journey",
      description: "Career highlights and innovation milestones across Oracle, AWS, and Unisys",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Customer Success Stories",
      path: "/customer-success-stories",
      description: "Notable innovation outcomes from customer engagements",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
    },
    {
      title: "Frameworks I Use",
      path: "/innovation-frameworks",
      description: "Key innovation methodologies and approaches",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b"
    },
    {
      title: "Leadership Style",
      path: "/leadership-style",
      description: "Innovation leadership principles and approaches",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "People Involved",
      path: "/people-involved",
      description: "Key stakeholders in successful innovation",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      title: "Upcoming Projects",
      path: "/upcoming-projects",
      description: "Innovation projects in the pipeline",
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9"
    }
  ];

  return (
    <div className="animate-fade-in space-y-8">
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        <div className="md:w-2/5 flex flex-col items-center justify-center">
          <div className="max-w-md">
            <img 
              src="/lovable-uploads/21d8626a-dcf2-4933-b949-d1e72347b2c7.png"
              alt="Australian Government Trade and Investment Commission" 
              className="w-full h-auto object-contain rounded-lg shadow-md" 
            />
            <p className="text-sm text-gray-600 mt-2 italic text-center">
              Partnership with Australian Government Trade and Investment Commission
            </p>
          </div>
        </div>
        
        <div className="md:w-3/5">
          <PageTitle title="What Is Innovation?" />
          <Card className="bg-white shadow-sm mb-6">
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                Innovation is about creating meaningful change that delivers real value. It's not just about new ideas, but about implementing solutions that transform how we work and live.
              </p>
              <p className="text-gray-700">
                Through my career at organizations like AWS, Oracle, and Unisys, I've developed approaches that drive practical innovation with measurable outcomes. Explore the sections below to learn more.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {innovationPages.map((page) => (
          <Link to={page.path} key={page.path} className="group">
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <div className="h-40 overflow-hidden relative">
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
