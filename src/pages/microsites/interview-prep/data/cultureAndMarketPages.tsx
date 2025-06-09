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
            src="https://shield.ai/wp-content/uploads/2025/03/values-4.jpg" 
            alt="Shield AI core values and principles"
            className="w-full h-64 object-cover rounded-lg"
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
                <td className="border border-gray-300 p-3">At AWS, triangulated policy, sales and tech teams to lead COVID response in ASEAN, activating 10-country IRT flood program</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Honor & Integrity</td>
                <td className="border border-gray-300 p-3">Ethical conduct in mission execution</td>
                <td className="border border-gray-300 p-3">Championed transparency in AUSTENDER procurement for LAND 156</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Servant Leadership</td>
                <td className="border border-gray-300 p-3">Empowering operators and teams</td>
                <td className="border border-gray-300 p-3">As Advisory Board Member of Queensland Government AI Hub, advised state agencies on ethical AI adoption strategies and governance frameworks</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Pursuit of Excellence</td>
                <td className="border border-gray-300 p-3">Relentless high performance</td>
                <td className="border border-gray-300 p-3">At ABF, led technology changes to map and share data across countries, including Pacific region partnerships</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-3 font-medium">Human Empowerment</td>
                <td className="border border-gray-300 p-3">AI amplifying human capability</td>
                <td className="border border-gray-300 p-3">Employed the successor who would take over the area; for customers, unlocked banking, gave health solutions, and built tunnels using digital twins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
    speakerNotes: "This table isn't just a checklist - it's proof of my lived alignment with Shield AI's culture. My AWS COVID response work triangulated policy, sales and tech teams across ASEAN, embodying mission-critical focus with rapid cross-functional coordination. Honor and integrity shine through my transparent navigation of AUSTENDER and Standing Offers, ensuring ethical procurement for LAND 156. Servant leadership drives my Queensland Government AI Hub advisory role, empowering state agencies with ethical AI governance frameworks. Pursuit of excellence is evident in my ABF technology transformation, mapping and sharing data across Pacific countries, setting regional collaboration benchmarks. Human empowerment, central to my leadership philosophy, includes developing successor talent and delivering customer solutions that unlock banking, provide health outcomes, and enable infrastructure through digital twins."
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
                The Australian Defence Force presents significant opportunities across multiple programs including LAND 129 for ISR capabilities, enhancing Insitu's Integrator with Hivemind's multi-agent orchestration, and LAND 156 for Counter-UAS systems, where autonomous swarm capabilities outshine traditional sensor approaches. Mission Syracuse offers rapid deployment pathways with 3-6 month integration timelines.
              </p>
              <p>
                Standing Offers like SON4095403 for Pacific UAVs provide direct sales channels, while the recent Sentient acquisition demonstrates ADF's commitment to sovereign capability development and 30% Australian Industry Capability priorities, creating strategic pathways for Hivemind integration through established procurement frameworks.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-8 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Strategic Positioning</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                IRAP readiness is crucial for classified deployments, and while Hivemind currently lacks this certification, my experience with ACSC assessments provides a clear 6-9 month pathway to Q3 2025 compliance. Prime contractor relationships with Lockheed Martin and Northrop Grumman, combined with AWS Snowcone for edge ISR, create powerful integration opportunities that counter competitors' limited ADF traction.
              </p>
              <p>
                AUKUS Pillar II trials by 2027 with DARPA and RAF 617 Squadron, utilizing Sentient's ViDAR capabilities, target $15M opportunities. Non-defense markets including ABF pilots and DCCEEW environmental contracts provide bridge opportunities during ADF's 12-36 month procurement cycles, ensuring sustained pipeline development and market presence.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    speakerNotes: "My market research positions Shield AI to seize ADF opportunities, starting with LAND 129's ISR potential - enhancing Insitu's Integrator with Hivemind's multi-agent orchestration (Page 130) - and LAND 156's counter-UAS demand, outshining DroneShield's $10M LAND 19/7 sensors with swarm autonomy. Mission Syracuse's rapid deployment focus, backed by ASCA (Page 134), aligns with my innovation track record, offering a 3-6 month integration proof point to meet ADF's urgent needs. Standing Offer SON4095403 provides a direct sales channel for Pacific UAVs, leveraging my AUSTENDER expertise to navigate CASG's 60% decision weight (Page 127). Sovereign capability, enhanced by Sentient's acquisition (Page 125), meets ADF's 30% AIC priority, supported by my TAS and QUT partnerships. IRAP readiness, absent for Hivemind (Page 136), drives a 6-9 month ACSC assessment, ensuring Q3 2025 compliance, with AWS compliance mitigating delays if needed. This is a risk managed from my ISR projects. Primes like Lockheed and Northrop, plus AWS Snowcone, enable edge ISR, countering Anduril's limited ADF traction with Ukraine-proven deployments. Non-defense markets - ABF's $1M pilot mirroring DJI trials and DCCEEW's $2M environmental UAS contracts - bridge ADF's 12-36 month cycles, accessed via my procurement skills. AUKUS Pillar II trials by 2027 with DARPA and RAF 617 Squadron, using Sentient's ViDAR (Page 135), target $15M, aligning with trilateral goals. If competitors lobby, Appen and Fivecast partnerships for 30% AIC reinforce our bid, ensuring a $20M+ pipeline that matches ADF's Indo-Pacific tempo."
  }
];
