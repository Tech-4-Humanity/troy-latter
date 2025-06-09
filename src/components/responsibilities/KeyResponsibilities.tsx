
import React from 'react';
import { KeyResponsibility } from './KeyResponsibility';

export const KeyResponsibilities = () => {
  return (
    <div className="space-y-8 mb-10">
      <ul className="list-disc list-inside space-y-4 pl-4">
        <KeyResponsibility
          title="Blueprint to Breakthrough"
          description="When Interpol asked Oracle to turn scattered AI experiments across ten bureaus into a coherent global program, I stepped in to own the execution strategy. I led 'Working Backwards' workshops with CTOs and regional CIOs, built an impact/effort scoring model tied to mission KPIs, and mapped out a six-month PoC roadmap. By embedding automated compliance gates and demo-or-die reviews into our CI/CD pipeline, we launched four first-of-their-kind AI pilots in 12 weeks, unlocking a $7 million follow-on pipeline, cutting concept-to-funding time by 60%, and earning executive sign-off to move two into full production."
        />
        <KeyResponsibility
          title="Tiger Teams & Trusted Partnerships"
          description="During ASEAN monsoon floods, regional governments and NGOs had no resilient alerts platform when networks collapsed. Tasked by AWS APAC, I formed a six-person 'tiger team,' brought in satellite, telco and social-media SMEs, and ran rapid design sprints to deliver an edge-mesh alert system. We deployed Snowball Edge and Greengrass nodes, integrated multi-channel push via SMS, Twitter and Facebook, and iterated daily with first responders. The live demo cut rescue-coordination delays by 50%, handled 500,000+ alerts, and led to a $2 million regional rollout, cementing our reputation for high-trust, hands-on collaboration."
        />
        <KeyResponsibility
          title="Edge Engineering & Real-World Prototypes"
          description="When the ADF's Secure Content & Collaboration program needed deployable cloud nodes, Unisys had no turnkey solution. I led a four-person core squad (plus systems-engineering experts) through 48-hour PoC sprints, designing, building and field-testing rugged Kubernetes clusters on AWS Snowball Edge that met zero-trust standards and survived shock, heat and total isolation. Our fail-fast culture discarded underperforming form-factors after each sprint, doubled down on a hardened rack-mount build, and demoed live at a Defence Innovation Forum. The result: a 75% cut in prototype validation time, sub-second AI inference under extreme conditions, and a $5 million funding approval to fold these battlefield-grade nodes into Unisys's core critical-infrastructure offerings."
        />
      </ul>
      
      <div className="bg-vault-accent/10 p-6 rounded-lg mt-8">
        <p className="text-vault-primary font-medium text-lg mb-4">Each of these stories demonstrates exactly how I:</p>
        <ul className="list-disc list-inside space-y-2 text-vault-secondary">
          <li>Take a vision and craft its execution roadmap</li>
          <li>Lead small, high-performing squads with domain experts</li>
          <li>Drive a fast-paced, fail-fast culture that prioritises real impact</li>
          <li>Design, build and validate bleeding-edge prototypes under real-world constraints</li>
          <li>Collect customer feedback and translate PoCs into multi-million-dollar programs</li>
        </ul>
      </div>
    </div>
  );
};
