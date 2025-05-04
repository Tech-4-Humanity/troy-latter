
import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const AboutTroy = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Title */}
      <PageTitle title="Troy Latter: The Innovator Powering Vault's Future" />
      
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
            Troy Latter has officially joined Vault Cloud as Head of Innovation, bringing over 15 years of pioneering sovereign‑grade AI, security and cloud transformation across APAC for AWS, Unisys and Oracle.
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            His track record of turning bleeding‑edge PoCs into multi‑million‑dollar production solutions made him the clear choice to lead Vault's next chapter.
          </p>
        </div>
      </section>

      {/* About Troy Section - Moved higher */}
      <section className="container mx-auto px-4 md:px-6 mb-10">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-5 text-vault-primary">About Troy</h2>
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
            <h2 className="text-2xl font-semibold mb-5 text-vault-primary">Why Troy?</h2>
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Cleared & Connected:</span> Active NV2 clearance plus deep policy influence through national standards bodies.
              </li>
              <li>
                <span className="font-semibold">Proven Delivery:</span> 10+ first‑of‑their‑kind solutions under mission SLAs, with zero compliance incidents.
              </li>
              <li>
                <span className="font-semibold">Technical Depth:</span> Hands‑on mastery of muliti cloud, SAAS, apps and Security.
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

        {/* Why Vault & Why This Role */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-5 text-vault-primary">Why Vault?</h2>
              <p className="text-gray-700 leading-relaxed">
                Vault's mandate—to deliver truly sovereign, hyperscale cloud capability for Defence, Intelligence and critical infrastructure—resonates deeply with Troy's lifelong commitment to national‑security innovation. He's followed Vault's rise as Australia's first ASD‑certified cloud provider and sees this role as the ultimate opportunity to scale the very services he has been building and securing for the past decade.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-5 text-vault-primary">Why This Role?</h2>
              <p className="text-gray-700 leading-relaxed">
                This position offers the perfect blend of hands‑on R&D and strategic vision: reporting directly to our founder‑CEO, Troy will shape Vault's entire innovation pipeline - across all iondustry sectors rapidly prototyping first‑of‑a‑kind concepts (from battlefield cloud nodes to sovereign LLM frameworks), embedding a fail‑fast culture, and translating every breakthrough into core product features and executive‑ready business cases.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Motivated by Mission */}
        <div className="mb-12">
          <Card className="bg-gray-50 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold mb-5 text-vault-primary">Motivated by Mission</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Troy's career has been defined by one objective: empowering Australia's digital sovereignty. From classified AI enclaves to resilient edge networks in the Pacific, he's delivered real‑world impact and millions in strategic value.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At Vault, he's ready to drive the next wave of mission‑critical innovation—because Australia's sovereign cloud deserves nothing less.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default AboutTroy;
