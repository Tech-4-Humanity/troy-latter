
import React from 'react';
import { PresentationPage } from '../types';

export const cultureAndMarketPages: PresentationPage[] = [
  {
    id: 4,
    title: "Culture Fit Mapping",
    subtitle: "Aligning with Shield AI's Mission",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="/lovable-uploads/24ae2c57-fff3-40ab-88f1-3ad34c248fc1.png" 
            alt="V-BAT with Lockheed/Northrop logos ecosystem"
            className="w-full h-64 object-contain rounded-lg bg-white p-4"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 p-3 text-left">Shield AI Value</th>
                <th className="border border-gray-300 p-3 text-left">What It Means</th>
                <th className="border border-gray-300 p-3 text-left">How I Align</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Mission-Critical Focus</td>
                <td className="border border-gray-300 p-3">Fast-paced, outcome-driven delivery</td>
                <td className="border border-gray-300 p-3">Led AWS Top Secret ISR deployments, delivering projects 20% faster</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Honor & Integrity</td>
                <td className="border border-gray-300 p-3">Ethical conduct in mission execution</td>
                <td className="border border-gray-300 p-3">Championed transparency in AUSTENDER procurement for LAND 156</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Servant Leadership</td>
                <td className="border border-gray-300 p-3">Empowering operators and teams</td>
                <td className="border border-gray-300 p-3">Designed HoloOrg multi-agent systems to empower ADF operators</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Pursuit of Excellence</td>
                <td className="border border-gray-300 p-3">Relentless high performance</td>
                <td className="border border-gray-300 p-3">Drove F-16 autonomous flight and V-BAT deployments</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Human Empowerment</td>
                <td className="border border-gray-300 p-3">AI amplifying human capability</td>
                <td className="border border-gray-300 p-3">Focused on operator-centric AI with 3-6 month integration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    speakerNotes: "This table isn't just a checklist—it's proof of my lived alignment with Shield AI's culture. My AWS Top Secret projects delivered under pressure, embodying mission-critical focus with ISR solutions 20% faster, mirroring V-BAT's Ukraine success. Honor and integrity shine through my transparent navigation of AUSTENDER and Standing Offers, ensuring ethical procurement for LAND 156. Servant leadership drives my operator-centric HoloOrg designs, empowering ADF warfighters unlike DroneShield's sensor approach. Pursuit of excellence is evident in my F-16 autonomous flight contributions and V-BAT deployments, setting industry benchmarks. Human empowerment, central to Hivemind's 3-6 month integration, enhances decision-making in GPS-denied zones, aligning with ADF's Indo-Pacific tempo."
  },
  {
    id: 5,
    title: "Market Landscape & Insights",
    subtitle: "Seizing ADF Opportunities",
    content: (
      <div className="space-y-6">
        <div className="rounded-lg overflow-hidden">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOm_VEtgYafnwcFKhiIui215tqcdjbgNgQiA&s" 
            alt="Australian Defence Force crest"
            className="w-full h-64 object-contain rounded-lg bg-white p-8"
          />
        </div>
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Market Opportunities</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Australian Defence Force presents significant opportunities across multiple programs including LAND 129 for ISR capabilities, LAND 156 for Counter-UAS systems, and Mission Syracuse for rapid counter-UAS deployment. These programs represent billions in potential contracts over the next decade.
              </p>
              <p>
                Standing Offers like SON4095403 for Pacific UAVs provide direct sales channels, while the recent Sentient acquisition demonstrates ADF's commitment to sovereign capability development, creating additional pathways for Hivemind integration.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Strategic Positioning</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                IRAP readiness is crucial for classified deployments, and while Hivemind currently lacks this certification, my experience with ACSC assessments provides a clear pathway to compliance. Prime contractor relationships with Lockheed Martin and Northrop Grumman, combined with AWS Snowcone for edge ISR, create powerful integration opportunities.
              </p>
              <p>
                This strategic positioning enables Shield AI to compete effectively against established players like DroneShield while leveraging superior autonomous capabilities that have proven themselves in Ukraine's contested electromagnetic environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "My market research positions Shield AI to seize ADF opportunities, starting with LAND 129's ISR potential and LAND 156's counter-UAS demand, where Hivemind's autonomy outshines DroneShield's sensors. Mission Syracuse's rapid deployment focus, backed by ASCA, aligns with my innovation track record, while SON4095403 offers a direct sales channel for Pacific UAVs, leveraging my AUSTENDER expertise. Sovereign capability, enhanced by Sentient's acquisition, meets ADF's 30% AIC priority, supported by my TAS and QUT connections. IRAP readiness, absent for Hivemind, drives my 6-9 month ACSC assessment plan, ensuring compliance by Q3 2025. Primes like Lockheed and Northrop, plus AWS Snowcone, enable edge ISR, countering Anduril's limited traction."
  }
];
