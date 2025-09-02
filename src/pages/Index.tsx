
import { useTranslation } from 'react-i18next';
import { HeroSection } from '@/components/home/HeroSection';
import { MetricsSection } from '@/components/home/MetricsSection';
import { AIStrategySection } from '@/components/home/AIStrategySection';
import { AchievementsSection } from '@/components/home/AchievementsSection';
import { ExecutiveSummarySection } from '@/components/home/ExecutiveSummarySection';
import { CTASection } from '@/components/home/CTASection';
import { Chatbot } from '@/components/Chatbot';

const Index = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-20">
      {/* Hero Section with Professional Background */}
      <HeroSection />
      
      {/* Key Metrics with Supporting Image */}
      <MetricsSection />
      
      {/* AI Strategy & Transformation */}
      <AIStrategySection />
      
      {/* Key Achievements with Industry Images */}
      <AchievementsSection />
      
      {/* Executive Summary with Professional Photo */}
      <ExecutiveSummarySection />
      
      {/* Enhanced CTA Section */}
      <CTASection />
      
      {/* AI Chatbot */}
      <section className="relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('home.chatbotTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('home.chatbotSubtitle')}
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Chatbot />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
