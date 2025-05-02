
import { useState } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { FeatureCard } from '@/components/FeatureCard';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      {/* Header Section */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-vault-primary">
        Australia's sovereign cloud deserves world-class innovators—here's how I deliver.
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-2/3">
          <p className="text-lg text-vault-secondary mb-4">
            I'm Troy Latter, a technology leader with 15 years of experience architecting and deploying sovereign-grade AI, security and cloud solutions for AWS, Unisys and Oracle across APAC.
          </p>
          
          <ul className="list-disc list-outside ml-5 text-vault-secondary mb-8 space-y-2">
            <li>Delivered an ASD-certified Government Cloud enclave in 4 months—now the blueprint for every future sovereign launch.</li>
            <li>Built a Rapid-Start PoC framework that cut time-to-demo from 10 weeks to 48 hours, unlocking $4 M in follow-on funding.</li>
            <li>Automated compliance pipelines that reduced audit preparation from 2 weeks to under 1 hour, saving agencies over $2 M in effort.</li>
          </ul>
        </div>
        
        <div className="md:w-1/3 flex justify-center">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/lovable-uploads/0802b80f-8d0e-4e6c-b22c-90790f6ab929.png" 
              alt="Troy Latter" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <Separator className="my-8 bg-vault-accent/30" />

      {/* About Troy Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-vault-primary">About Troy</h2>
        <p className="text-vault-secondary mb-6">
          I specialise in transforming mission-critical PoCs into production-grade capabilities under zero-trust and government compliance. Whether leading "tiger teams" of engineers or collaborating with C-suite stakeholders, I thrive on solving complex national-security challenges with elegant, scalable technology.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-vault-primary mb-2">Why Vault?</h3>
            <p className="text-vault-secondary">
              Vault's vision of a sovereign, hyperscale cloud aligns perfectly with my passion and track record. As Australia's first ASD-certified cloud provider, Vault has proven its commitment to security and innovation. I'm eager to join the team driving the next wave of mission-critical capabilities for Defence, Intelligence and critical infrastructure.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <h3 className="font-medium text-lg text-vault-primary mb-2">Why This Role?</h3>
            <p className="text-vault-secondary">
              Hands-on R&D—building prototypes that move fast, learn fast, and scale—is where I do my best work. Reporting directly to a visionary CEO, I'll shape and execute Vault's innovation pipeline, turning bleeding-edge concepts into real-world solutions that integrate seamlessly into your core offerings.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-8 bg-vault-accent/30" />

      {/* Why Me Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-vault-primary">Why Me?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg text-vault-primary mb-2">Cleared & Connected</h3>
              <p className="text-vault-secondary">
                NV2 clearance and Standards Australia BCI & Robotics committee membership give me deep NatSec fluency.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg text-vault-primary mb-2">Proven Innovator</h3>
              <p className="text-vault-secondary">
                Over 10 first-of-a-kind solutions delivered under mission-grade SLAs for intelligence and defence clients.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg text-vault-primary mb-2">Technical Depth</h3>
              <p className="text-vault-secondary">
                Hands-on expertise with Kubernetes, IaC, post-quantum key management and sovereign LLM frameworks—backed by real GitHub proof.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg text-vault-primary mb-2">Agile Leadership</h3>
              <p className="text-vault-secondary">
                Built and mentored lean "tiger teams," embedding a fail-fast, high-trust culture that consistently triples PoC throughput and secures multi-million-dollar funding.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-8 bg-vault-accent/30" />

      {/* My Motivation Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-vault-primary">My Motivation</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg text-vault-primary mb-2">Mission Alignment</h3>
              <p className="text-vault-secondary">
                I've spent my career safeguarding Australia's digital frontiers—Vault's sovereign mandate is the natural next step.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg text-vault-primary mb-2">Strategic Impact</h3>
              <p className="text-vault-secondary">
                From classified AI enclaves to battlefield-grade edge nodes, I deliver solutions that matter and generate millions in strategic value.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium text-lg text-vault-primary mb-2">Cultural Fit</h3>
              <p className="text-vault-secondary">
                I thrive in founder-driven, rapid-innovation environments that value bold experimentation and unwavering execution.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <p className="text-xl text-vault-primary font-medium mb-6">
          Let's pioneer the future of Australia's sovereign cloud—together.
        </p>
        <div className="flex justify-center items-center gap-4 mb-6">
          <a 
            href="https://www.linkedin.com/in/theinnovater/recent-activity/all/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-medium"
          >
            <Linkedin size={20} />
            <span>View My Recent Activity</span>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/theinnovater" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0077B5] text-white px-6 py-3 rounded-lg hover:bg-[#005885] transition font-medium"
          >
            <Linkedin size={20} />
            <span>View Troy on LinkedIn</span>
          </a>
        </div>
        
        <RadioGroup defaultValue="default" className="flex gap-4 justify-center">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <label htmlFor="r1">Option 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="r2" />
            <label htmlFor="r2">Option 2</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option3" id="r3" />
            <label htmlFor="r3">Option 3</label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default About;
