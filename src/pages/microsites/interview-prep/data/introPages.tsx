
import React from 'react';
import { PresentationPage } from '../types';

export const introPages: PresentationPage[] = [
  {
    id: 1,
    title: "Why Shield AI & Why Me",
    subtitle: "Mission-Ready Autonomy",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://www.nationaldefensemagazine.org/-/media/sites/magazine/2023/11/v-bat-teams-pr.jpg" 
            alt="V-BAT drone team in Indo-Pacific theater"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <ul className="space-y-3 text-gray-700">
          <li>• Shield AI's mission to deliver trusted autonomy in challenging environments aligns with my innovation and BD approach.</li>
          <li>• Background: AWS Top Secret, multi-agent AI (HoloOrg), defense primes; focus on operator empowerment mirrors Shield AI's culture.</li>
          <li>• Key Points: Fast-paced execution, trusted autonomy, defense-first focus on ADF procurement and sovereignty.</li>
        </ul>
      </div>
    ),
    speakerNotes: "Hivemind's proven resilience in Ukraine's electronic warfare zones, where it operated under intense jamming, demonstrates its readiness to tackle ADF's Indo-Pacific challenges, where rapid response can mean the difference between mission success and failure. My role as Head of BD is to position Hivemind as the gold standard for autonomy within the ADF, leveraging my extensive experience with AWS Top Secret deployments—where I've secured classified ISR systems—and my established relationships with defense primes like Lockheed Martin and Northrop Grumman. This pitch isn't just about technology; it's about transforming how ADF secures its borders and empowers operators in contested environments, aligning with Shield AI's mission to deliver trusted autonomy. My rapid prototyping approach, honed through years of delivering fast-paced solutions, matches Shield AI's culture, ensuring Hivemind meets LAND 156's 10-hour endurance and SEA 129's maritime ISR demands within the ADF's 12-36 month cycles, where CASG's 60% decision weight is pivotal."
  },
  {
    id: 2,
    title: "My BD Approach & Differentiation",
    subtitle: "Strategic Defense Leadership",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://techcrunch.com/wp-content/uploads/2022/06/AWS_snowcone_.jpg" 
            alt="AWS Snowcone edge computing device"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <ul className="space-y-3 text-gray-700">
          <li>• BD tailored for defense: building trust, accelerating adoption, aligning with mission needs.</li>
          <li>• Key Points: Integrated tech and BD, partnership-driven growth (primes, AWS), operator-focused storytelling.</li>
        </ul>
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
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://cdn.defenseone.com/media/img/cd/2025/02/09/L3_Harris_AMORPHOUS_graphic_2220x1234_1/860x394.jpg?1739148458" 
            alt="V-BAT drone swarm formation"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <ul className="space-y-3 text-gray-700">
          <li>• Shield AI's firsts: AI-piloted drone, tail-sitting drone, F-16 combat flight.</li>
          <li>• Key Points: Multi-agent orchestration (HoloOrg), AWS secure deployments, procurement pathways, operator trust.</li>
        </ul>
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
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/83bdd2b0-6ff7-412c-983a-f1baf27538c4.png" 
            alt="Troy Latter professional headshot"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-700">
            I'm ready to make Hivemind the ADF's autonomy standard, winning tenders, building ecosystems, and securing the Indo-Pacific. Let's discuss how to drive Shield AI's mission forward.
          </p>
          <div className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded cursor-pointer inline-block">
            Connect With Me
          </div>
        </div>
      </div>
    ),
    speakerNotes: "My passion for trusted autonomy stems from years leading ADF transformations, from LAND 156 to AUKUS Pillar II. This BD strategy—securing tenders with CASG's 60% influence, building a global-local ecosystem with primes and SMEs, and bridging cycles with ABF/DCCEEW deals—aligns with Shield AI's fast-paced, mission-critical goals. I'm prepared to win $10M-$50M contracts, leveraging my AWS, HoloOrg, and prime experience, outpacing DroneShield's edge. The IRAP gap drives a 6-9 month assessment, ensuring Q3 2025 compliance, while AUKUS trials by 2027 with DARPA target $15M. Whether hired or not, this plan offers Shield AI a $20M+ roadmap, showcasing my high-value leadership."
  }
];
