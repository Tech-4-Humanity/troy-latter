
import React from 'react';
import { PresentationPage } from '../types';

export const strategyPages: PresentationPage[] = [
  {
    id: 6,
    title: "Strategic Vision",
    subtitle: "Dominating Defence & Beyond",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://www.dcms.uscg.mil/Portals/10/082820_RDTE_Master_MainPage.png" 
            alt="V-BAT drone patrolling coastline"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <ul className="space-y-3 text-gray-700">
          <li>• Defense Use Case: Lead LAND 156, SEA 129, AUKUS, outpacing Anduril and DroneShield</li>
          <li>• Why Unique: Hivemind's AI, ViDAR for AUKUS; ABF/DCCEEW bridge cycles</li>
          <li>• Impact: Defence dominance, $1M-$5M non-defense deals</li>
        </ul>
      </div>
    ),
    speakerNotes: "My strategic vision positions Hivemind to dominate ADF autonomy, leading LAND 156 and SEA 129 while outpacing Anduril's Ghost and DroneShield's contracts with superior decentralized AI. I'll drive AUKUS Pillar II ISR trials by 2027 with DARPA and RAF 617 Squadron, targeting a $15M contract, aligning with trilateral focus. Non-defense markets bridge ADF's 12-36 month cycles: ABF's Maritime Operations Group offers $1M-$5M surveillance deals, building on their 2024 DJI trials, and DCCEEW's $2M environmental UAS contracts add revenue. CASG's 60% decision weight drives success, with Hivemind's 10-hour endurance meeting LAND 156's capability criteria."
  },
  {
    id: 7,
    title: "Ecosystem & Partnerships",
    subtitle: "Global-Local Powerhouse",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/24ae2c57-fff3-40ab-88f1-3ad34c248fc1.png" 
            alt="V-BAT with AWS/TAS/Appen logos ecosystem"
            className="w-full h-64 object-contain rounded-lg bg-white p-4"
          />
        </div>
        <ul className="space-y-3 text-gray-700">
          <li>• Defense Use Case: Consortium with AWS, Lockheed, Appen, Fivecast for tenders ($240M funding)</li>
          <li>• Why Unique: Global scale, 30% AIC via TAS, QUT, AIDN</li>
          <li>• Impact: Sovereign, winning solutions for CASG, AUKUS</li>
        </ul>
      </div>
    ),
    speakerNotes: "Shield AI's $5.3B valuation, backed by $240M funding, enables $10M-$50M V-BAT fleet deals, as seen in Japan's JMSDF contract. I'd build a consortium with AWS for cloud infrastructure, Lockheed Martin for integration, Appen for Hivemind training ($500K), and Fivecast for ISR analytics ($1M), ensuring 30% AIC via TAS's Brisbane R&D and QUT's innovation. AIDN's network connects SMEs for LAND 156 and SEA 129, outpacing DroneShield's local edge. My prime relationships accelerate adoption, aligning with CASG's 60% weight, while the IRAP gap drives a 6-9 month ACSC assessment. Non-defense markets—ABF's pilot and DCCEEW's contracts—bridge ADF cycles."
  }
];
