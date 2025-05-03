
import React from 'react';
import { PageTitle } from '@/components/PageTitle';

const AboutTroy = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Title */}
      <PageTitle title="About Troy" />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 rounded-lg overflow-hidden mb-12">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-30"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Australia's sovereign cloud deserves world‑class innovators—here's how I deliver.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            I'm Troy Latter, a technology leader with 15 years of architecting and deploying sovereign‑grade AI, security and cloud solutions for AWS, Unisys and Oracle across APAC.
          </p>
        </div>
      </section>

      {/* Profile Image and Achievements */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg border border-gray-100 max-w-md">
              <img 
                src="/lovable-uploads/83bdd2b0-6ff7-412c-983a-f1baf27538c4.png" 
                alt="Troy Latter" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Key Achievements */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6 text-vault-primary">Key Achievements</h2>
            <ul className="list-disc list-outside ml-5 space-y-4 text-gray-700">
              <li>
                As Unisys APAC's CTO & Head of Strategic Foresight, I led cross‑government AI and automation programs supporting over <span className="font-semibold">$100 million</span> in modernization projects for Defence, Health and Transport—embedding reusable agent frameworks that halved manual effort and slashed procurement cycles.
              </li>
              <li>
                Built a Rapid‑Start PoC engine that cut time‑to‑demo from <span className="font-semibold">10 weeks to 48 hours</span>, unlocking <span className="font-semibold">$4 million</span> in follow‑on funding and proving that true "fast fails" deliver real impact.
              </li>
              <li>
                Automated compliance pipelines at Oracle and AWS, reducing audit preparation from <span className="font-semibold">two weeks to under one hour</span>—saving agencies over <span className="font-semibold">$2 million</span> in manual effort and accelerating release cadences.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* About Troy */}
      <section className="container mx-auto px-6 py-8">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-vault-primary">About Troy</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            A visionary technologist and strategic leader, Troy specializes in transforming mission‑critical proofs of concept into production-grade capabilities under zero‑trust and stringent compliance controls. He has built battlefield‑ready edge clusters, deployed sovereign LLM frameworks, and driven multi‑million‑dollar innovation pipelines for top‑tier government and enterprise clients.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Troy holds an active NV2 security clearance and serves on Standards Australia's BCI & Robotics Committee as well as the QLD Government AI Hub advisory board. His unique blend of policy fluency, hands‑on technical expertise, and agile leadership makes him ideally placed to guide Vault Cloud's next wave of sovereign innovation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutTroy;
