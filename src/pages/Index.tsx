
import { HeroSection } from '@/components/home/HeroSection';
import { MetricsSection } from '@/components/home/MetricsSection';
import { AchievementsSection } from '@/components/home/AchievementsSection';
import { ExecutiveSummarySection } from '@/components/home/ExecutiveSummarySection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section with Professional Background */}
      <HeroSection />
      
      {/* Key Metrics with Supporting Image */}
      <MetricsSection />
      
      {/* Key Achievements with Industry Images */}
      <AchievementsSection />
      
      {/* Executive Summary with Professional Photo */}
      <ExecutiveSummarySection />
      
      {/* Enhanced CTA Section */}
      <CTASection />
    </div>
  );
};

export default Index;
