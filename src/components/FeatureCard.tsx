
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  children?: React.ReactNode;
  icon?: React.ElementType;
}

export const FeatureCard = ({ title, imageSrc, children }: FeatureCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div 
        className="w-full h-64 overflow-hidden cursor-pointer relative"
        onClick={() => setShowDetails(!showDetails)}
      >
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-vault-primary text-white px-3 py-1 rounded text-sm">
          {showDetails ? "Hide details" : "Click for full STAR story"}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-xl font-semibold text-vault-primary">{title}</h3>
          
          {showDetails && (
            <div className="bg-vault-light/70 p-4 rounded-lg w-full animate-fade-in">
              {children}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
