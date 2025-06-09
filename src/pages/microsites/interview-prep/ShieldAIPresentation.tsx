
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ArrowLeft, ArrowRight } from 'lucide-react';

const presentationPages = [
  {
    id: 1,
    title: "Why Shield AI & Why Me",
    subtitle: "Mission-Ready Autonomy",
    content: (
      <div className="space-y-6">
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 italic">Image: V-BAT drone over Indo-Pacific theater</p>
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
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 italic">Image: AWS Snowcone</p>
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
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 italic">Image: V-BAT swarm</p>
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
    id: 4,
    title: "Culture Fit Mapping",
    subtitle: "Aligning with Shield AI's Mission",
    content: (
      <div className="space-y-6">
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 italic">Image: V-BAT with Lockheed/Northrop logos</p>
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
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 italic">Image: ADF crest</p>
        </div>
        <ul className="space-y-3 text-gray-700">
          <li>• AUSTENDER: LAND 129 (ISR), LAND 156 (Counter-UAS), Mission Syracuse (Counter-UAS)</li>
          <li>• Standing Offers: SON4095403 (Pacific UAVs)</li>
          <li>• Sovereign Capability: Sentient acquisition</li>
          <li>• IRAP Readiness: Crucial for classified deployments</li>
          <li>• Primes & AWS: Lockheed, Northrop, Snowcone for edge ISR</li>
        </ul>
      </div>
    ),
    speakerNotes: "My market research positions Shield AI to seize ADF opportunities, starting with LAND 129's ISR potential and LAND 156's counter-UAS demand, where Hivemind's autonomy outshines DroneShield's sensors. Mission Syracuse's rapid deployment focus, backed by ASCA, aligns with my innovation track record, while SON4095403 offers a direct sales channel for Pacific UAVs, leveraging my AUSTENDER expertise. Sovereign capability, enhanced by Sentient's acquisition, meets ADF's 30% AIC priority, supported by my TAS and QUT connections. IRAP readiness, absent for Hivemind, drives my 6-9 month ACSC assessment plan, ensuring compliance by Q3 2025. Primes like Lockheed and Northrop, plus AWS Snowcone, enable edge ISR, countering Anduril's limited traction."
  },
  {
    id: 6,
    title: "Strategic Vision",
    subtitle: "Dominating Defence & Beyond",
    content: (
      <div className="space-y-6">
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 italic">Image: V-BAT patrolling coastline</p>
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
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 italic">Image: V-BAT with AWS/TAS/Appen logos</p>
        </div>
        <ul className="space-y-3 text-gray-700">
          <li>• Defense Use Case: Consortium with AWS, Lockheed, Appen, Fivecast for tenders ($240M funding)</li>
          <li>• Why Unique: Global scale, 30% AIC via TAS, QUT, AIDN</li>
          <li>• Impact: Sovereign, winning solutions for CASG, AUKUS</li>
        </ul>
      </div>
    ),
    speakerNotes: "Shield AI's $5.3B valuation, backed by $240M funding, enables $10M-$50M V-BAT fleet deals, as seen in Japan's JMSDF contract. I'd build a consortium with AWS for cloud infrastructure, Lockheed Martin for integration, Appen for Hivemind training ($500K), and Fivecast for ISR analytics ($1M), ensuring 30% AIC via TAS's Brisbane R&D and QUT's innovation. AIDN's network connects SMEs for LAND 156 and SEA 129, outpacing DroneShield's local edge. My prime relationships accelerate adoption, aligning with CASG's 60% weight, while the IRAP gap drives a 6-9 month ACSC assessment. Non-defense markets—ABF's pilot and DCCEEW's contracts—bridge ADF cycles."
  },
  {
    id: 8,
    title: "Let's Connect",
    subtitle: "Driving Shield AI's Future",
    content: (
      <div className="space-y-6">
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 italic">Image: Troy's headshot</p>
        </div>
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-700">
            I'm ready to make Hivemind the ADF's autonomy standard, winning tenders, building ecosystems, and securing the Indo-Pacific. Let's discuss how to drive Shield AI's mission forward.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            Connect With Me
          </Button>
        </div>
      </div>
    ),
    speakerNotes: "My passion for trusted autonomy stems from years leading ADF transformations, from LAND 156 to AUKUS Pillar II. This BD strategy—securing tenders with CASG's 60% influence, building a global-local ecosystem with primes and SMEs, and bridging cycles with ABF/DCCEEW deals—aligns with Shield AI's fast-paced, mission-critical goals. I'm prepared to win $10M-$50M contracts, leveraging my AWS, HoloOrg, and prime experience, outpacing DroneShield's edge. The IRAP gap drives a 6-9 month assessment, ensuring Q3 2025 compliance, while AUKUS trials by 2027 with DARPA target $15M. Whether hired or not, this plan offers Shield AI a $20M+ roadmap, showcasing my high-value leadership."
  },
  {
    id: 9,
    title: "Day 1 Plan",
    subtitle: "Immediate Impact for Shield AI",
    content: (
      <div className="space-y-6">
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 italic">Image: V-BAT drone</p>
        </div>
        <div className="space-y-4">
          <p className="font-semibold text-gray-800">Objective: Kickstart BD with stakeholder engagement, compliance, and market validation.</p>
          <ul className="space-y-2 text-gray-700">
            <li>• Contact CASG (Land/Maritime) and ASCA for LAND 156 and SEA 129 briefings</li>
            <li>• Initiate Hivemind IRAP assessment with ACSC to ensure tender eligibility</li>
            <li>• Join AAUS and AIDN for networking and tender visibility</li>
            <li>• Engage Insitu Pacific for LAND 129 subsystem opportunities</li>
            <li>• Pitch ABF's Maritime Operations Group for $1M surveillance trial</li>
          </ul>
          <p className="font-semibold text-blue-600">Impact: Establish presence, align with ADF priorities, and secure early wins.</p>
        </div>
      </div>
    ),
    speakerNotes: "Day 1 is about launching Shield AI's Australian BD with rapid impact. I'd contact CASG (Land/Maritime) and ASCA to shape LAND 156 and SEA 129 requirements, leveraging my ADF expertise to influence the EOI stage where CASG's 60% decision weight is decisive. Initiating an ACSC IRAP assessment addresses the current gap, targeting 6-9 months for Q3 2025 compliance, a process I've managed with AWS. Joining AAUS and AIDN taps into tender networks and SME connections for 30% AIC, while engaging Insitu Pacific opens LAND 129 subsystem roles, using my prime relationships. Pitching ABF's Maritime Operations Group for a $1M trial mirrors their DJI experience, bridging ADF's 12-36 month cycles."
  },
  {
    id: 10,
    title: "30/60/90 Day Plan",
    subtitle: "Building Momentum for Shield AI",
    content: (
      <div className="space-y-6">
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-sm text-gray-600 italic">Image: V-BAT with partnerships composite</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-lg text-blue-800">30 Days: Foundation</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2 text-sm">
                <li>• Submit EOIs for LAND 156, SEA 129</li>
                <li>• Engage TAS, QUT for Mission Syracuse</li>
                <li>• Draft Innovation Hub proposal ($5M)</li>
                <li>• Secure $1M ABF pilot deal</li>
                <li>• Advance IRAP assessment</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="bg-green-50">
              <CardTitle className="text-lg text-green-800">60 Days: Engagement</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2 text-sm">
                <li>• Submit RFPs, conduct CASG demo</li>
                <li>• Secure Mission Syracuse trial ($2M)</li>
                <li>• Finalize DCCEEW contract ($2M)</li>
                <li>• Partner with Appen, Fivecast</li>
                <li>• Engage US Navy for AUKUS</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-lg text-orange-800">90 Days: Wins</CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <ul className="space-y-2 text-sm">
                <li>• Shortlist LAND 156, SEA 129</li>
                <li>• Secure $10M Innovation Hub</li>
                <li>• Launch AUKUS demo ($15M target)</li>
                <li>• Secure $5M ABF surveillance</li>
                <li>• Complete IRAP certification</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <p className="text-xl font-bold text-green-600">Impact: $20M+ pipeline, established as ADF autonomy leader</p>
        </div>
      </div>
    ),
    speakerNotes: "This 30/60/90 plan builds a $20M+ pipeline, aligning with Shield AI's fast-paced goal to dominate ADF autonomy. By day 30, submitting EOIs for LAND 156 and SEA 129, engaging TAS and QUT for Mission Syracuse, drafting a $5M Innovation Hub proposal, securing a $1M ABF pilot, and advancing IRAP lay a foundation, leveraging CASG's 60% influence. By day 60, RFPs, a $2M ASCA trial, $2M DCCEEW contract, Appen/Fivecast partnerships for 30% AIC, and US Navy AUKUS planning deepen our position. By day 90, shortlisting tenders, $10M funding, a $15M AUKUS demo with RAF 617 Squadron, $5M ABF deal, and IRAP completion ensure dominance. This comprehensive approach delivers immediate value while building long-term strategic positioning."
  }
];

export const ShieldAIPresentation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedNotes, setExpandedNotes] = useState(false);
  
  const currentPageData = presentationPages.find(page => page.id === currentPage) || presentationPages[0];
  const totalPages = presentationPages.length;

  const goToPage = (pageId: number) => {
    setCurrentPage(pageId);
    setExpandedNotes(false);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Top Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-3">
            <h1 className="text-white font-bold text-lg">Shield AI BD Presentation</h1>
            <div className="flex flex-wrap gap-2 text-xs">
              {presentationPages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => goToPage(page.id)}
                  className={`px-3 py-1 rounded transition-colors ${
                    currentPage === page.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {page.id}. {page.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="text-orange-400 font-medium mb-2">
              Page {currentPage} of {totalPages}
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {currentPageData.title}
            </h1>
            <h2 className="text-xl text-slate-300">
              {currentPageData.subtitle}
            </h2>
          </div>

          {/* Page Content */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl mb-8">
            <CardContent className="p-8">
              {currentPageData.content}
            </CardContent>
          </Card>

          {/* Speaker Notes */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-600 mb-8">
            <Collapsible open={expandedNotes} onOpenChange={setExpandedNotes}>
              <CollapsibleTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="w-full text-white hover:bg-slate-700/50 p-4 justify-between"
                >
                  <span className="font-medium">Detailed Speaker Notes</span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${expandedNotes ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="px-4 pb-4">
                  <div className="bg-slate-700/30 rounded-lg p-4 text-slate-200 leading-relaxed">
                    {currentPageData.speakerNotes}
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center">
            <Button
              onClick={prevPage}
              disabled={currentPage === 1}
              variant="outline"
              className="border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <div className="text-slate-400 font-medium">
              {currentPage} / {totalPages}
            </div>
            
            <Button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              variant="outline"
              className="border-slate-600 bg-slate-800/50 text-white hover:bg-slate-700"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
