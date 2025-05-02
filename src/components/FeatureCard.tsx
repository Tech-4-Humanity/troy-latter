
import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
}

export const FeatureCard = ({ title, description, imageSrc, children, icon: Icon }: FeatureCardProps) => {
  const [showStar, setShowStar] = useState(false);
  
  // Extract STAR content from children if it exists
  let mainContent = null;
  let starContent = null;
  
  if (children && React.isValidElement(children)) {
    const childContent = children.props.children;
    
    if (Array.isArray(childContent)) {
      // Find the STAR content (the div with class bg-vault-light)
      const mainContentElements = [];
      
      for (const child of childContent) {
        if (React.isValidElement(child) && 
            child.props && 
            typeof child.props === 'object' &&
            'className' in child.props && 
            typeof child.props.className === 'string' && 
            child.props.className.includes('bg-vault-light')) {
          starContent = child;
        } else {
          mainContentElements.push(child);
        }
      }
      
      mainContent = <div className="space-y-4">{mainContentElements}</div>;
    } else {
      mainContent = children;
    }
  } else {
    mainContent = children;
  }
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div 
        className="w-full h-48 overflow-hidden cursor-pointer relative"
        onClick={() => setShowStar(!showStar)}
      >
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-vault-primary text-white px-2 py-1 text-xs rounded">
          Click for STAR Example
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-4">
          {Icon && (
            <div className="rounded-full bg-vault-light p-3 text-vault-primary">
              <Icon className="h-6 w-6" />
            </div>
          )}
          <h3 className="text-xl font-semibold">{title}</h3>
          {description && <p className="text-vault-secondary">{description}</p>}
          
          {showStar && starContent ? (
            <div className="space-y-4 animate-fade-in">
              {mainContent}
              {starContent}
            </div>
          ) : (
            mainContent
          )}
        </div>
      </CardContent>
    </Card>
  );
};
