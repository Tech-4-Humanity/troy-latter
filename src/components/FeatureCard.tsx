
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, imageSrc }: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      {imageSrc && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-4">
          <div className="rounded-full bg-vault-light p-3 text-vault-primary">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-vault-secondary">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};
