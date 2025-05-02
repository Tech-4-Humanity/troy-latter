
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
  const [showStar, setShowStar] = useState(false);
  
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
          {showStar ? "Hide STAR Details" : "Show STAR Details"}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          
          {showStar && children}
        </div>
      </CardContent>
    </Card>
  );
};
