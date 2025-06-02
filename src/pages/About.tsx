
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Shield, Clock, Database, Cpu, LineChart, LightbulbIcon } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      {/* Header Section */}
      <PageTitle title="Technology Challenges & Innovative Solutions" />
      
      <div className="text-lg mb-8">
        <p className="mb-4">
          As an experienced technology leader, I specialize in tackling the most pressing challenges 
          facing government agencies and critical infrastructure operators. 
        </p>
        <p className="mb-6">
          My innovative solutions combine deep expertise in secure cloud architecture with agile 
          delivery methods to create transformative outcomes for high-security environments.
        </p>
      </div>

      {/* Key Challenges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          title="Compliance & Audit Fatigue" 
          imageSrc="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-brand-primary" />
              <p className="font-medium">Challenge:</p>
            </div>
            <p className="text-sm">
              Organizations spend weeks on manual audit preparation, tying up scarce security teams 
              and delaying critical feature releases.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Shield size={18} className="text-green-600" />
              <p className="font-medium">Solution:</p>
            </div>
            <p className="text-sm">
              Continuous Compliance automation reduces audit preparation effort by 85% and 
              certification time by half.
            </p>
          </div>
        </FeatureCard>

        <FeatureCard 
          title="Threat Detection Overload" 
          imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-brand-primary" />
              <p className="font-medium">Challenge:</p>
            </div>
            <p className="text-sm">
              SOCs are drowning in thousands of daily alerts, leading to alert fatigue, 
              delayed incident response, and rising operational risk.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Shield size={18} className="text-green-600" />
              <p className="font-medium">Solution:</p>
            </div>
            <p className="text-sm">
              AI-powered anomaly detection and playbook orchestration cut false positives by 92% and 
              reduce containment time from hours to minutes.
            </p>
          </div>
        </FeatureCard>

        <FeatureCard 
          title="Sovereign AI & LLM Risks" 
          imageSrc="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Cpu size={18} className="text-brand-primary" />
              <p className="font-medium">Challenge:</p>
            </div>
            <p className="text-sm">
              Organizations need generative AI for document analysis but fear sending 
              classified data to cloud LLM services.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Cpu size={18} className="text-green-600" />
              <p className="font-medium">Solution:</p>
            </div>
            <p className="text-sm">
              Fully on-prem sovereign LLM frameworks with hardware-backed key management and 
              "Hallucination Guard" cut research cycles by 60%.
            </p>
          </div>
        </FeatureCard>

        <FeatureCard 
          title="Operational Cost Creep" 
          imageSrc="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <LineChart size={18} className="text-brand-primary" />
              <p className="font-medium">Challenge:</p>
            </div>
            <p className="text-sm">
              Over-provisioned VMs and storage drive up monthly cloud bills by 25%, with no 
              real-time insight into usage patterns.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <LineChart size={18} className="text-green-600" />
              <p className="font-medium">Solution:</p>
            </div>
            <p className="text-sm">
              Autonomous Resource management with ML forecasting cuts monthly costs by 28% 
              ($500K/month) without service degradation.
            </p>
          </div>
        </FeatureCard>

        <FeatureCard 
          title="Knowledge Transfer Gaps" 
          imageSrc="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Database size={18} className="text-brand-primary" />
              <p className="font-medium">Challenge:</p>
            </div>
            <p className="text-sm">
              Critical domain expertise resides with a few experts, creating bottlenecks and 
              risks when they're unavailable or leave the organization.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Database size={18} className="text-green-600" />
              <p className="font-medium">Solution:</p>
            </div>
            <p className="text-sm">
              Knowledge Graph platforms extract, structure, and preserve institutional 
              expertise, reducing onboarding time by 65%.
            </p>
          </div>
        </FeatureCard>

        <FeatureCard 
          title="Innovation Velocity" 
          imageSrc="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <LightbulbIcon size={18} className="text-brand-primary" />
              <p className="font-medium">Challenge:</p>
            </div>
            <p className="text-sm">
              PoC teams work in isolation, lacking consistent processes for ideation and validation,
              resulting in fewer than 1 in 5 PoCs reaching production.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <LightbulbIcon size={18} className="text-green-600" />
              <p className="font-medium">Solution:</p>
            </div>
            <p className="text-sm">
              Integrated innovation methodologies cut ideation-to-PoC time in half and double 
              the PoC success rate through disciplined experimentation.
            </p>
          </div>
        </FeatureCard>
      </div>
      
      <Separator className="my-8 bg-brand-accent/30" />
      
      {/* Value Proposition */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-brand-primary mb-6">Innovation-Driven Solutions</h2>
        <p className="text-lg mb-6">
          My approach transforms complex security and operational challenges into strategic advantages, 
          delivering measurable outcomes through cutting-edge technology solutions built specifically for high-security environments.
        </p>
        
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-brand-primary mb-3">Security by Design</h3>
                <p className="text-brand-secondary">
                  Every solution maintains complete data sovereignty and meets the highest security standards
                  required by government agencies and critical infrastructure operators.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-brand-primary mb-3">Rapid Innovation Cycle</h3>
                <p className="text-brand-secondary">
                  Agile delivery approach cuts time-to-value, with most solutions delivering measurable 
                  improvements within 90 days of project inception.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
