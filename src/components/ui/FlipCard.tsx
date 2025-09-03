import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
  heightClass?: string;
  hideFlipHint?: boolean;
}

export const FlipCard = ({ front, back, className, heightClass = "h-80", hideFlipHint = false }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={cn(
        "relative w-full perspective-1000 cursor-pointer group",
        heightClass,
        className
      )}
      onClick={() => setIsFlipped(!isFlipped)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          setIsFlipped(!isFlipped);
        }
      }}
      aria-label="Click to flip card"
    >
      {/* Card Inner */}
      <div 
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
          isFlipped ? "rotate-y-180" : ""
        )}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-card border rounded-lg shadow-sm">
          <div className="p-6 h-full flex flex-col">
            {front}
            {!hideFlipHint && (
              <div className="mt-auto text-xs text-muted-foreground text-center">
                Click to flip
              </div>
            )}
          </div>
        </div>
        
        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-card border rounded-lg shadow-sm">
          <div className="p-6 h-full flex flex-col">
            {back}
            {!hideFlipHint && (
              <div className="mt-auto text-xs text-muted-foreground text-center">
                Click to return
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};