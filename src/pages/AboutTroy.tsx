
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const AboutTroy = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Title */}
      <PageTitle title="Troy Latter: Innovation Leader & Technology Strategist" />
      
      {/* Hero Section with Fixed Background */}
      <section className="relative bg-gray-900 text-white py-16 md:py-20 rounded-lg overflow-hidden mb-10 md:mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: "url('/lovable-uploads/42060213-a44a-4960-a413-f2f2798fbbce.png')", 
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
        <div className="relative container mx-auto px-4 md:px-6">
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            Troy Latter is an accomplished technology leader with over 15 years of experience pioneering sovereign‑grade AI, security and cloud transformation across APAC for leading technology companies including AWS, Unisys and Oracle.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            His proven track record of transforming bleeding‑edge proof-of-concepts into multi‑million‑dollar production solutions makes him an ideal innovation leader for any forward-thinking organization.
          </p>
        </div>
      </section>

      {/* About Troy Section */}
      <section className="container mx-auto px-4 md:px-6 mb-10">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-5 text-brand-primary">About Troy</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              A visionary technologist and strategic leader, Troy has guided governments and enterprises through some of their toughest digital transformations. From building battlefield‑ready assets in the field to architecting on‑prem LLM environments for top‑secret document analysis, he thrives on solving mission‑critical challenges under zero‑trust and stringent compliance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A member of Standards Australia's BCI & Robotics Committee and the QLD Government AI Hub advisory board, Troy is equally at home presenting whitepapers at global forums as he is coaching "tiger teams" in rapid‑sprint rooms.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-10">
          {/* Why Troy Section */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-semibold mb-5 text-brand-primary">Why Choose Troy?</h2>
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Cleared & Connected:</span> Active NV2 clearance plus deep policy influence through national standards bodies.
              </li>
              <li>
                <span className="font-semibold">Proven Delivery:</span> 10+ first‑of‑their‑kind solutions under mission SLAs, with zero compliance incidents.
              </li>
              <li>
                <span className="font-semibold">Technical Depth:</span> Hands‑on mastery of multi-cloud, SAAS, apps and Security.
              </li>
              <li>
                <span className="font-semibold">Agile Leadership:</span> Built high‑trust "tiger teams" that triple PoC throughput and secure multi‑million‑dollar follow‑on budgets.
              </li>
            </ul>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-full max-w-md">
              <img 
                src="/lovable-uploads/83bdd2b0-6ff7-412c-983a-f1baf27538c4.png" 
                alt="Troy Latter" 
                className="w-full rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>

        {/* Career Focus & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-5 text-brand-primary">Career Focus</h2>
              <p className="text-gray-700 leading-relaxed">
                Troy's career has been dedicated to delivering truly sovereign, hyperscale technology solutions for Defence, Intelligence and critical infrastructure. His expertise in secure cloud architecture and AI implementation has made him a sought-after leader in the industry.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-5 text-brand-primary">Innovation Approach</h2>
              <p className="text-gray-700 leading-relaxed">
                Troy excels at blending hands‑on R&D with strategic vision. He rapidly prototypes first‑of‑a‑kind concepts (from battlefield cloud nodes to sovereign LLM frameworks), embeds a fail‑fast culture, and translates every breakthrough into core product features and executive‑ready business cases.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Motivated by Mission */}
        <div className="mb-12">
          <Card className="bg-gray-50 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-5 text-brand-primary">Motivated by Mission</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Troy's career has been defined by one objective: empowering digital sovereignty and technological independence. From classified AI enclaves to resilient edge networks, he's delivered real‑world impact and millions in strategic value.
              </p>
              <p className="text-gray-700 leading-relaxed">
                He's ready to drive the next wave of mission‑critical innovation for any organization committed to technological excellence and national security.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutTroy;
