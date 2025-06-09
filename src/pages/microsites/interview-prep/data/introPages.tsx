
import React from 'react';
import { PresentationPage } from '../types';

export const introPages: PresentationPage[] = [
  {
    id: 1,
    title: "Why Shield AI & Why Me",
    subtitle: "Mission-Ready Autonomy",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://www.nationaldefensemagazine.org/-/media/sites/magazine/2023/11/v-bat-teams-pr.jpg" 
            alt="V-BAT drone team in Indo-Pacific theater"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Strategic Alignment</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">•</span>
                <span>Shield AI's mission to deliver trusted autonomy in challenging environments aligns perfectly with my innovation and BD approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">•</span>
                <span>Background: AWS Top Secret clearance, multi-agent AI (HoloOrg), defense prime partnerships</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">•</span>
                <span>Focus on operator empowerment mirrors Shield AI's culture of fast-paced execution</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">ADF Focus</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>Defense-first approach targeting ADF procurement and sovereignty requirements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>Proven track record with classified ISR systems and prime contractor relationships</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "Hivemind's proven resilience in Ukraine's electronic warfare zones, operating under intense jamming as noted on Page 125, underscores its readiness for ADF's Indo-Pacific challenges, where rapid ISR can prevent escalation. My role as Head of BD is to establish Hivemind as the ADF's autonomy standard, drawing on my AWS Top Secret deployments—where I've secured classified ISR systems—and partnerships with Lockheed Martin and Northrop Grumman, who've integrated similar technologies (Page 130). This pitch transforms ADF border security and operator empowerment, aligning with Shield AI's mission to deliver trusted autonomy. My rapid prototyping, proven in AWS projects, matches their fast-paced culture, ensuring Hivemind meets likely 10-hour endurance needs for LAND 156 and maritime ISR for SEA 129 within the ADF's 12-36 month cycles, where CASG's 60% decision weight (Page 127) is decisive. To align with ADF's Indo-Pacific tempo, I'll prioritize 3-6 month operator training via Standing Offer SON4095403 pathways. The IRAP gap (Page 136) necessitates a 6-9 month ACSC assessment, with AWS compliance bridging delays if needed. AUKUS Pillar II trials by 2027 with DARPA and RAF 617 Squadron, leveraging Sentient's ViDAR (Page 135), target $15M. Non-defense markets like ABF's $1M pilot, mirroring DJI trials, and DCCEEW's $2M environmental UAS contracts bridge cycles. DroneShield's $10M LAND 19/7 edge is countered with Hivemind's autonomy, ensuring a $20M+ pipeline. This depth positions me to win for Shield AI."
  },
  {
    id: 2,
    title: "My BD Approach & Differentiation",
    subtitle: "Strategic Defense Leadership",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://techcrunch.com/wp-content/uploads/2022/06/AWS_snowcone_.jpg" 
            alt="AWS Snowcone edge computing device"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Defense-Tailored BD</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Building trust and accelerating adoption aligned with mission-critical needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">•</span>
                <span>Integrated technology and business development approach</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Partnership Excellence</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-500 font-bold mr-2">•</span>
                <span>Partnership-driven growth with defense primes and AWS ecosystem</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 font-bold mr-2">•</span>
                <span>Operator-focused storytelling that translates technology into mission outcomes</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "My BD approach in defense transcends traditional sales—it's about forging trust and delivering operational value, a philosophy honed through years of navigating ADF procurement cycles (12-36 months). I integrate my technical expertise from AWS Top Secret deployments with strategic foresight, ensuring Hivemind's edge computing with Snowcone meets LAND 156's ISR needs. Partnership-driven growth is my strength, leveraging relationships with Lockheed Martin and Northrop Grumman to accelerate adoption, countering DroneShield's $10M LAND 19/7 dominance. Operator-focused storytelling translates Hivemind's decentralized AI into life-saving outcomes, outpacing Anduril's Ghost, which lacks ADF traction. The lack of Hivemind's IRAP status drives my plan for a 6-9 month ACSC assessment, using AWS compliance as a bridge if delayed, a risk mitigated by my prior experience."
  },
  {
    id: 3,
    title: "Capabilities & Real-World Fit",
    subtitle: "From Concept to Mission",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://cdn.defenseone.com/media/img/cd/2025/02/09/L3_Harris_AMORPHOUS_graphic_2220x1234_1/860x394.jpg?1739148458" 
            alt="V-BAT drone swarm formation"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Shield AI's Legacy of Firsts</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>First AI-piloted drone in combat operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>Revolutionary tail-sitting V-BAT drone technology</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <span>Breakthrough autonomous F-16 combat flight capabilities</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">My Strategic Contributions</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">•</span>
                <span>Multi-agent orchestration expertise (HoloOrg platform)</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">•</span>
                <span>AWS secure deployment experience with classified systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-bold mr-2">•</span>
                <span>Established procurement pathways and operator trust frameworks</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "Shield AI's legacy of firsts—AI-piloted drones in combat, tail-sitting V-BAT, and autonomous F-16 flights—inspires my contribution to their ADF dominance. My HoloOrg expertise in multi-agent orchestration, developed with David Baxter, ensures Hivemind's swarm logic thrives in contested environments, outpacing Anduril's Ghost with its Ukraine-proven resilience. AWS Top Secret deployments, where I've secured ISR systems, align Hivemind's edge computing with LAND 156's needs, using Snowcone for tactical ops. My procurement pathways—navigating AUSTENDER, Standing Offers like SON4095403, and IRAP readiness—address the current gap with a 6-9 month ACSC assessment, ensuring compliance by Q3 2025. Operator trust, central to my human-centric design, empowers ADF warfighters, contrasting with DroneShield's sensor focus."
  },
  {
    id: 8,
    title: "Let's Connect",
    subtitle: "Driving Shield AI's Future",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/83bdd2b0-6ff7-412c-983a-f1baf27538c4.png" 
            alt="Troy Latter professional headshot"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="text-center space-y-6">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-xl border border-orange-200">
            <p className="text-xl text-gray-800 font-medium leading-relaxed">
              I'm ready to make Hivemind the ADF's autonomy standard, winning tenders, building ecosystems, and securing the Indo-Pacific.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Let's discuss how to drive Shield AI's mission forward together.
            </p>
          </div>
          <div className="inline-block">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold text-lg">
              Connect With Me
            </div>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "My passion for trusted autonomy stems from years leading ADF transformations, from LAND 156 to AUKUS Pillar II. This BD strategy—securing tenders with CASG's 60% influence, building a global-local ecosystem with primes and SMEs, and bridging cycles with ABF/DCCEEW deals—aligns with Shield AI's fast-paced, mission-critical goals. I'm prepared to win $10M-$50M contracts, leveraging my AWS, HoloOrg, and prime experience, outpacing DroneShield's edge. The IRAP gap drives a 6-9 month assessment, ensuring Q3 2025 compliance, while AUKUS trials by 2027 with DARPA target $15M. Whether hired or not, this plan offers Shield AI a $20M+ roadmap, showcasing my high-value leadership."
  }
];
