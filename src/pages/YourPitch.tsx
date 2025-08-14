import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const YourPitch = () => {
  const [viewOption, setViewOption] = useState('profile');

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      {/* Elevator Hook */}
      <div className="flex flex-col gap-6 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-brand-primary">
            Strategic AI & Technology Leader - Building Australia's Innovation Future
          </h1>
        </div>
      </div>

      {/* 2-Line Bio + Key Wins */}
      <p className="text-lg text-brand-secondary mb-4">
        I'm Troy Latter - a technology leader with 15 years driving sovereign-grade AI, security and infrastructure
        programmes at AWS, Unisys and Oracle across APAC.
      </p>
      
      <ul className="list-disc list-outside ml-5 text-brand-secondary mb-8 space-y-2">
        <li>Delivered an ASD-certified Government Cloud enclave in 4 months, template for all future sovereign launches.</li>
        <li>Built a Rapid-Start PoC framework that cut time-to-demo from 10 weeks to 48 hrs, unlocking $4M follow-on funding.</li>
        <li>Automated compliance pipelines reducing audit prep from 2 weeks to &lt;1 hr, saving agencies $2M+ in effort.</li>
      </ul>

      <Separator className="my-8 bg-brand-accent/30" />

      {/* About Troy Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-brand-primary">About Troy</h2>
        
        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-brand-primary mb-2">Tell Me About Yourself</h3>
            <p className="text-brand-secondary">
              I'm Troy Latter - a technology leader with 15 years in sovereign cloud, AI-driven automation and national-security transformation for AWS, Unisys and Oracle across APAC. I thrive on turning mission-critical PoCs into production-grade capabilities under stringent compliance and zero-trust controls.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-brand-primary mb-2">Why Innovation Leadership?</h3>
            <p className="text-brand-secondary">
              Australia's sovereign technology future requires leaders who can bridge cutting-edge innovation with mission-critical security requirements. My passion is delivering secure, mission-grade solutions that protect Australia's critical infrastructure while driving technological advancement.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-brand-primary mb-2">Why Strategic Innovation?</h3>
            <p className="text-brand-secondary">
              Hands-on R&D leadership is where I deliver my best work - rapid PoCs, strategic roadmaps and seamless integration into core products. This approach combines my passion for innovation with my deep expertise in secure, sovereign cloud technologies.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-brand-primary mb-2">Why Troy?</h3>
            <p className="text-brand-secondary">
              My NV2 clearance, Standards Australia committee role, and track record of shipping 10+ First-of-a-Kind solutions make me uniquely suited to drive strategic innovation. I bring a rare combination of technical depth, security clearance, and innovation leadership.
            </p>
          </CardContent>
        </Card>

        <Separator className="my-8 bg-brand-accent/30" />

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-brand-primary mb-2">Core Motivations</h3>
            <ul className="space-y-4 text-brand-secondary">
              <li>
                <strong className="text-brand-primary">Mission Alignment:</strong> Australia's sovereign technology future requires secure national-security innovation. I've dedicated my career to building secure, compliant cloud solutions for government and critical infrastructure.
              </li>
              <li>
                <strong className="text-brand-primary">Proven Track Record:</strong> Delivered ASD-accredited enclaves at AWS and classified PoCs at Unisys under mission SLAs. My experience spans the entire lifecycle of secure cloud solutions, from initial concept to ASD-certified production deployments for intelligence and defence clients.
              </li>
              <li>
                <strong className="text-brand-primary">Culture Fit:</strong> I thrive in founder-driven, fail-fast, high-autonomy teams. Throughout my career, I've consistently delivered best results in environments that value rapid innovation, technical excellence, and mission focus.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default YourPitch;
