
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentCard = ({ children, className = '' }: ContentCardProps) => {
  return (
    <Card className={`bg-white shadow-sm ${className}`}>
      <CardContent className="p-6 md:p-8">
        {children}
      </CardContent>
    </Card>
  );
};
