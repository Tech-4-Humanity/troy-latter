
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
      <div className="flex flex-col md:flex-row gap-6 items-center mb-8">
        <Avatar className="h-32 w-32 border-2 border-vault-accent">
          <AvatarImage src="/lovable-uploads/9aa17449-1c27-48be-9aaf-34170ae5e122.png" alt="Troy Latter" />
          <AvatarFallback>TL</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-vault-primary">
            Australia's sovereign cloud is only as strong as its innovators—here's how Troy builds that strength.
          </h1>
        </div>
      </div>

      {/* 2-Line Bio + Key Wins */}
      <p className="text-lg text-vault-secondary mb-4">
        I'm Troy Latter—a technology leader with 15 years driving sovereign-grade AI, security and infrastructure
        programs at AWS, Unisys and Oracle across APAC.
      </p>
      
      <ul className="list-disc list-outside ml-5 text-vault-secondary mb-8 space-y-2">
        <li>Delivered an ASD-certified Government Cloud enclave in 4 months, template for all future sovereign launches.</li>
        <li>Built a Rapid-Start PoC framework that cut time-to-demo from 10 weeks to 48 hrs, unlocking $4M follow-on funding.</li>
        <li>Automated compliance pipelines reducing audit prep from 2 weeks to &lt;1 hr, saving agencies $2M+ in effort.</li>
      </ul>

      <Separator className="my-8 bg-vault-accent/30" />

      {/* About Troy Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-vault-primary">About Troy</h2>
        
        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-vault-primary mb-2">Tell Me About Yourself</h3>
            <p className="text-vault-secondary">
              I'm Troy Latter—a technology leader with 15 years in sovereign cloud, AI-driven automation and national-security transformation for AWS, Unisys and Oracle across APAC. I thrive on turning mission-critical PoCs into production-grade capabilities under stringent compliance and zero-trust controls.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-vault-primary mb-2">Why Vault?</h3>
            <p className="text-vault-secondary">
              Vault's sovereign, hyperscale mission aligns with my experience and passion for delivering secure, mission-grade solutions that protect Australia's critical infrastructure. I've followed Vault's journey as Australia's first ASD-certified cloud provider and am eager to contribute to its next phase of innovation and growth.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-vault-primary mb-2">Why This Role?</h3>
            <p className="text-vault-secondary">
              Hands-on R&D under a visionary CEO is where I deliver my best work—rapid PoCs, strategic roadmap and seamless integration into core products. This position combines my passion for innovation with my deep expertise in secure, sovereign cloud technologies.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-vault-primary mb-2">Why You?</h3>
            <p className="text-vault-secondary">
              My NV2 clearance, Standards Australia committee role, and track record of shipping 10+ First-of-a-Kind solutions make me uniquely suited to drive Vault's innovation agenda. I bring a rare combination of technical depth, security clearance, and innovation leadership that aligns perfectly with Vault's mission-critical needs.
            </p>
          </CardContent>
        </Card>

        <Separator className="my-8 bg-vault-accent/30" />

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-vault-primary mb-2">Application Motivations</h3>
            <ul className="space-y-4 text-vault-secondary">
              <li>
                <strong className="text-vault-primary">Mission Alignment:</strong> Vault's sovereign, hyperscale mandate matches my passion for secure national-security tech. I've dedicated my career to building secure, compliant cloud solutions for government and critical infrastructure, making this role a natural progression.
              </li>
              <li>
                <strong className="text-vault-primary">Proven Track Record:</strong> Delivered ASD-accredited enclaves at AWS and classified PoCs at Unisys under mission SLAs. My experience spans the entire lifecycle of secure cloud solutions, from initial concept to ASD-certified production deployments for intelligence and defence clients.
              </li>
              <li>
                <strong className="text-vault-primary">Culture Fit:</strong> I thrive in founder-driven, fail-fast, high-autonomy teams—exactly Vault's ethos. Throughout my career, I've consistently delivered best results in environments that value rapid innovation, technical excellence, and mission focus—all hallmarks of Vault's organisational culture.
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default YourPitch;
