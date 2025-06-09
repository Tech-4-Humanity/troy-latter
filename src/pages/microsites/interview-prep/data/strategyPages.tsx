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
            alt="V-BAT drone patrolling coastline for maritime surveillance operations"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Dominating ADF Autonomy</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Position Hivemind as the definitive autonomous solution for ADF operations across LAND 156 counter-UAS and SEA 129 maritime ISR, outpacing Anduril's Ghost with superior decentralized AI proven in Ukraine's contested electromagnetic environment.
              </p>
              <p>
                Drive AUKUS Pillar II ISR trials by 2027 with DARPA and RAF 617 Squadron, targeting $15M contracts while leveraging Mission Syracuse for rapid deployment validation and trilateral strategic alignment.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Market Bridge Strategy</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Non-defense markets including ABF pilots ($1M-$5M) and DCCEEW environmental contracts ($2M) provide revenue bridges during ADF's 12-36 month procurement cycles, accessed through maritime expo networks and environmental partnerships.
              </p>
              <p>
                Sovereign capability development through TAS Brisbane R&D and QUT innovation partnerships ensures 30% Australian Industry Capability compliance while building competitive moats against international competitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "My strategic vision positions Hivemind to dominate ADF autonomy, leading LAND 156's counter-UAS and SEA 129's maritime ISR by outpacing Anduril's Ghost (lacking ADF traction) and DroneShield's $10M LAND 19/7 sensor contracts with superior decentralized AI, proven in Ukraine's contested electromagnetic environment. I'll drive AUKUS Pillar II ISR trials by 2027 with DARPA and RAF 617 Squadron, targeting a $15M contract, aligning with trilateral strategic objectives and leveraging Mission Syracuse for rapid deployment proof. Non-defense markets bridge ADF's 12-36 month procurement cycles: ABF pilots ($1M-$5M) accessed via maritime expos, and DCCEEW environmental UAS contracts ($2M) through my established networks. Sovereign capability, enhanced by TAS Brisbane R&D and QUT partnerships, ensures 30% AIC compliance while building competitive moats. This strategy transforms Shield AI from startup to ADF's autonomous backbone, capturing the Indo-Pacific's $50M+ opportunity through my unique blend of technical depth, procurement mastery, and strategic partnerships."
  },
  {
    id: 7,
    title: "Why Shield AI & Why Me",
    subtitle: "Ecosystem & Partnerships",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://supportourtroops.org/images/04_V_BAT_uncrewed_aerial_vehicle_UAV__USS_Carter_Hall_reconnaissance_Support_Our_Troops.jpg" 
            alt="V-BAT uncrewed aerial vehicle on USS Carter Hall for reconnaissance operations"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Shield AI</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Mission-Critical Innovation:</strong> Hivemind's combat-proven autonomous systems align with ADF's urgent capability gaps</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Proven Performance:</strong> V-BAT deployments in Ukraine demonstrate real-world effectiveness under contested conditions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Scale & Growth:</strong> Positioned to dominate autonomous systems market with established prime partnerships</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Me</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>ADF Market Mastery:</strong> Deep AUSTENDER expertise with active LAND 156 and Mission Syracuse engagement</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Strategic Partnerships:</strong> Established relationships with Lockheed Martin, Northrop Grumman, and AWS Top Secret</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span><strong>Technical Integration:</strong> HoloOrg multi-agent architecture complements Hivemind's distributed AI approach</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Strategic Alignment</h3>
          <p className="text-gray-700 leading-relaxed">
            My expertise in sovereign cloud architectures, IRAP-compliant deployments, and multi-prime orchestration 
            creates the perfect foundation for Shield AI's Australian expansion. Together, we'll transform ADF capability 
            while building the region's most advanced autonomous systems ecosystem.
          </p>
        </div>
      </div>
    ),
    speakerNotes: "This slide crystallizes our mutual value proposition - Shield AI brings combat-proven Hivemind autonomy (Page 125) while I deliver ADF market access and sovereign integration expertise. Shield AI's V-BAT success in Ukraine (Page 125) and F-16 autonomous flight (Page 124) prove mission-critical innovation, positioning us ahead of Anduril's limited ADF traction and DroneShield's sensor-only approach to LAND 19/7's $10M. My value lies in AUSTENDER mastery - active LAND 156 and Mission Syracuse engagement (Page 134) - plus strategic partnerships with Lockheed Martin and Northrop Grumman for prime integration, and AWS Top Secret for edge ISR deployments. My HoloOrg multi-agent architecture complements Hivemind's distributed AI, enabling rapid 3-6 month integration cycles that match ADF's urgent Indo-Pacific tempo. Sovereign capability through TAS Brisbane R&D and QUT partnerships ensures 30% AIC compliance, while my IRAP pathway (6-9 month ACSC assessment) unlocks classified deployments by Q3 2025. This alignment transforms Shield AI from Silicon Valley startup to ADF's autonomous backbone, capturing AUKUS Pillar II's $15M trials and the broader $50M+ Indo-Pacific opportunity through our combined technical excellence and market execution."
  }
];
