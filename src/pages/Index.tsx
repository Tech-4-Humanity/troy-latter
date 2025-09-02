
import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { ExecutiveSummarySection } from '@/components/home/ExecutiveSummarySection';
import { MetricsSection } from '@/components/home/MetricsSection';
import { AchievementsSection } from '@/components/home/AchievementsSection';
import { AIStrategySection } from '@/components/home/AIStrategySection';
import { CTASection } from '@/components/home/CTASection';
import { AIAccessGate } from '@/components/AIAccessGate';
import { Chatbot } from '@/components/Chatbot';
import { useAIAccess } from '@/hooks/useAIAccess';

export default function Index() {
  const { hasAccess, grantAccess } = useAIAccess();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExecutiveSummarySection />
      <MetricsSection />
      <AchievementsSection />
      <AIStrategySection />
      
      {/* AI Assistant Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Chat with Troy's AI Assistant
            </h2>
            <p className="text-muted-foreground text-lg">
              Get instant answers about Troy's experience, expertise, and approach to innovation
            </p>
          </div>
          
          {hasAccess ? (
            <Chatbot />
          ) : (
            <div className="flex justify-center">
              <AIAccessGate 
                onAccessGranted={grantAccess}
                title="Try Troy's AI Assistant"
                description="Experience AI-powered insights about Troy's expertise and track record"
              />
            </div>
          )}
        </div>
      </section>
      
      <CTASection />
    </div>
  );
}
