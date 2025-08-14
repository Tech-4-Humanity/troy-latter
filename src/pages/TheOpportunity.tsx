
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Separator } from '@/components/ui/separator';
import { FeatureCard } from '@/components/FeatureCard';
import VideoEmbed from '@/components/VideoEmbed';
import { Button } from '@/components/ui/button';
import { Play, Youtube } from 'lucide-react';

const TheOpportunity = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <PageTitle title="Customer Success Stories" />
      
      {/* Hero section with video */}
      <div className="mb-10 bg-brand-light rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video container - takes full width on mobile, half on desktop */}
          <div className="w-full h-full min-h-[300px]">
            <VideoEmbed 
              src="https://www.youtube.com/embed/-BXyJSr_6Tg" 
              caption="AI, Progress, New Roles, and the Ethics of Tech"
              className="h-full"
            />
          </div>
          
          {/* Text content */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Cloud & IoT Innovation Podcast</h2>
              <p className="text-lg mb-6">
                I've built and scaled mission-critical cloud and IoT platforms at AWS and Oracle for national-security clients; now I'm here to break the mould at Vault - rapid-fire prototyping, respectful rule-breaking innovation, and forging the future of sovereign cloud.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button className="flex items-center gap-2 bg-brand-accent hover:bg-brand-accent/80">
                <Play size={16} />
                <a 
                  href="https://www.youtube.com/watch?v=-BXyJSr_6Tg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Listen to the full podcast
                </a>
              </Button>
              
              <Button variant="outline" className="flex items-center gap-2 border-brand-accent text-brand-accent hover:bg-brand-accent/10">
                <Youtube size={16} />
                <a 
                  href="https://www.youtube.com/watch?v=-BXyJSr_6Tg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on YouTube
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-10 bg-brand-accent/30" />
      
      <div className="space-y-8 mb-12">
        <h2 className="text-2xl font-semibold text-brand-primary">How I Will Drive Innovation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          <div>
            <h3 className="font-medium text-xl text-brand-primary mb-3">From Vision to Roadmap</h3>
            <p className="text-brand-secondary">
              Shape and prioritise the innovation pipeline<br/>
              At Unisys I took five siloed AI pilots across government, ran Working-Backwards strategy sprints, and delivered a six-month PoC roadmap that unlocked an $8 M follow-on pipeline in 12 weeks.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-brand-primary mb-3">Building Tiger Teams</h3>
            <p className="text-brand-secondary">
              Lead small, high-trust squads with external experts<br/>
              At AWS APAC I formed a lean group of five data scientists and DevOps engineers, ran two-week "Sprint Marathons," and achieved a 65% PoC funding conversion - tripling throughput and restoring executive faith.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-brand-primary mb-3">Breaking the Prototype-to-Reality Barrier</h3>
            <p className="text-brand-secondary">
              Design, build and test bleeding-edge IaC demos<br/>
              At Oracle I authored modular playbooks and orchestrated CI/CD tests for rugged edge clusters and LLM frameworks - then presented live demos to Defence leadership, securing $5 M in production funding.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-brand-primary mb-3">Culture & Pace</h3>
            <p className="text-brand-secondary">
              Embed a fail-fast, learn-fast ethos<br/>
              I've introduced weekly "kill/scale" criteria, Friday C-suite Demo Days, and real-time innovation dashboards at every company - cutting PoC cycle times from 12 weeks to as little as 4 weeks.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-brand-primary mb-3">Customer-first Validation</h3>
            <p className="text-brand-secondary">
              Showcase PoCs, iterate on feedback<br/>
              I've demoed AI agents and edge-mesh solutions at AWS summits, Unisys innovation forums and government roadshows - capturing operator feedback that directly drove our next sprint and built customer evangelists.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-xl text-brand-primary mb-3">Technical Evangelism & Business Case Translation</h3>
            <p className="text-brand-secondary">
              Bridge R&D to board-room buy-in<br/>
              Whether publishing whitepapers on neurotech standards, hosting Tech Talks for 200+ executives, or crafting ROI models that secured $2–5 M in follow-on contracts, I've turned technical wins into strategic wins for every stakeholder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheOpportunity;
