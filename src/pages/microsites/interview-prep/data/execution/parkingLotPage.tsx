import React from 'react';
import { PresentationPage } from '../../types';

export const parkingLotPage: PresentationPage = {
  id: 11,
  title: "Parking Lot: Deep Dive Reference",
  subtitle: "Strategic Repository for Q&A and Planning",
  content: (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-6 rounded-xl border border-blue-200">
        <p className="text-lg font-medium text-gray-800 mb-4">
          <strong>Purpose:</strong> A vault of extra insights, references, and details for discussion, Q&A, or strategic planning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Market Landscape & Procurement</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• AUSTENDER: LAND 129, LAND 156, Mission Syracuse</li>
            <li>• <strong>Mission Syracuse:</strong> Advanced Strategic Capabilities Accelerator (ASCA) initiative developing sovereign counter small uncrewed aerial systems (CsUAS) capabilities. Focuses on advanced technology to intercept drones, integrating with existing ADF systems. Complements LAND 156 for comprehensive CsUAS detection, tracking, and neutralization. Proposals due via AusTender by June 6, 2025.</li>
            <li>• Standing Offers: SON4095403</li>
            <li>• Sovereign Industrial Capability</li>
            <li>• IRAP Certification</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Cultural Alignment</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Mission-Critical Focus</li>
            <li>• Honor & Integrity</li>
            <li>• Servant Leadership</li>
            <li>• Pursuit of Excellence</li>
            <li>• Human Empowerment</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Partnerships & Relationships</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• AWS Top Secret & Snowcone</li>
            <li>• Primes: Lockheed Martin, Northrop Grumman</li>
            <li>• Industry Memberships (AAUS, AIDN)</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Deep Dives</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Multi-Agent Orchestration</li>
            <li>• HoloOrg Architecture</li>
            <li>• Swarm AI (Louis Rosenberg)</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Real-World Examples</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• V-BAT deployments (Ukraine)</li>
            <li>• F-16 autonomous combat flight</li>
            <li>• AWS Snowcone ISR deployments</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Communications Strategy</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Outcome-Driven Messaging</li>
            <li>• Defense-First Focus</li>
            <li>• Speaker Notes Style</li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 rounded-xl border border-orange-200">
        <p className="text-sm text-gray-600 italic text-center">
          Strategic repository for comprehensive discussion support and Q&A preparation
        </p>
      </div>
    </div>
  ),
  speakerNotes: "This parking lot is a strategic repository, consolidating insights from my market analysis, cultural fit, and technical expertise to support Shield AI's ADF dominance. It encompasses LAND 129's ISR potential enhancing Insitu's Integrator with Hivemind and LAND 156's counter-UAS needs, outpacing DroneShield's $10M LAND 19/7 sensors with swarm autonomy, alongside Mission Syracuse's rapid deployment edge (Page 134) for 3-6 month integration proof. Standing Offer SON4095403 provides a direct sales channel, while Sentient's acquisition (Page 125) boosts sovereign capability with 30% AIC via TAS's Brisbane R&D and QUT's innovation. The IRAP gap (Page 136) drives a 6-9 month ACSC assessment, ensured by AWS compliance if delayed, a risk managed from my ISR projects. My AWS Top Secret and prime relationships (Lockheed Martin, Northrop Grumman) enable edge ISR, aligning with Shield AI's fast-paced culture (Page 124), while HoloOrg's multi-agent systems and Ukraine-proven V-BAT deployments (Page 125) showcase my technical depth. Non-defense markets, ABF's $1M-$5M pilot via maritime expos and DCCEEW's $2M environmental contracts, bridge ADF's 12-36 month cycles. AUKUS Pillar II trials by 2027 with DARPA and RAF 617 Squadron, using Sentient's ViDAR (Page 135), target $15M. If competitors lobby, Appen and Fivecast partnerships for 30% AIC counter, ensuring a $20M+ pipeline that matches ADF's Indo-Pacific tempo. This depth, grounded in my procurement and partnership mastery, positions me to win for Shield AI."
};
