
import { PageTitle } from '@/components/PageTitle';
import { FileQuestion, Award, Layers, Users, ArrowUp, ChartLine, Shield, Rocket, FileCode, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQs = () => {
  return (
    <div>
      <PageTitle title="Frequently Asked Questions" />
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">About Troy Latter - Key Questions</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <FileQuestion className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">What makes Troy unique as a strategic technology leader?</p>
              <p>Troy combines deep technical expertise (AWS Top Secret clearance, multi-cloud certifications) with proven business development capabilities in defense and enterprise markets. His experience spans from hands-on system architecture to C-suite strategic advisory roles, making him equally effective in technical deep-dives and boardroom discussions.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Layers className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">How does Troy approach innovation leadership?</p>
              <p>Troy's innovation methodology focuses on rapid prototyping, customer co-design, and scalable implementation. He believes in "innovation with purpose", ensuring every R&D initiative aligns with clear business outcomes and customer value propositions, while maintaining technical excellence and security compliance.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Rocket className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">What is Troy's track record in defense and security markets?</p>
              <p>Troy has successfully navigated complex defense procurement cycles, held AWS Top Secret clearance, and built relationships with major primes including Lockheed Martin and Northrop Grumman. His experience includes ISR systems, autonomous platforms, and multi-agent AI architectures for mission-critical applications.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Users className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">How does Troy build and lead high-performing teams?</p>
              <p>Troy's leadership philosophy centers on "servant leadership", empowering team members, fostering psychological safety, and creating environments where innovation thrives. He combines technical mentorship with strategic vision, ensuring teams understand both the "how" and the "why" behind their work.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <ArrowUp className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">What is Troy's approach to scaling technology solutions?</p>
              <p>Troy excels at taking proof-of-concepts to production-ready solutions. His methodology includes robust architecture design, compliance frameworks, and phased rollout strategies that minimize risk while maximizing business impact. He's particularly skilled at navigating regulatory requirements in defense and critical infrastructure sectors.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <ChartLine className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">How does Troy measure success in innovation roles?</p>
              <p>Troy defines success through multiple metrics: technical delivery (on-time, on-budget, exceeding performance requirements), business impact (revenue growth, cost reduction, market expansion), and strategic positioning (competitive advantage, thought leadership, partnership development).</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Shield className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">What is Troy's expertise in security and compliance?</p>
              <p>Troy maintains AGSVA NV2 clearance and has extensive experience with IRAP assessments, AWS compliance frameworks, and defense security protocols. He understands how to balance innovation velocity with security requirements, ensuring solutions meet both technical and regulatory standards.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <Award className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">What certifications and credentials does Troy hold?</p>
              <p>Troy is an AWS Solutions Architect, Azure AI Certified, and GCP certified professional. He serves on the QLD Government AI Hub Board and holds Standards Australia Business Continuity Institute credentials. His academic background includes advanced studies in AI/ML and innovation management.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <FileCode className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">How does Troy stay current with emerging technologies?</p>
              <p>Troy maintains active involvement in research communities, contributes to industry whitepapers, and regularly engages with academic institutions including QUT and TAS. He believes in continuous learning and applies emerging technologies through controlled pilots before scaling to production environments.</p>
            </div>
          </li>
          
          <li className="flex items-start">
            <AlertTriangle className="text-blue-600 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
            <div>
              <p className="font-semibold">How does Troy handle risk management in innovation projects?</p>
              <p>Troy implements structured risk frameworks that balance innovation velocity with prudent oversight. He uses staged gates, rapid feedback loops, and "fail-fast" methodologies to minimize exposure while maximizing learning. His approach includes contingency planning and clear escalation paths for both technical and business risks.</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Portfolio Resources</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <Link to="/executive-profile" className="hover:text-blue-600 transition-colors">
              <span><strong>Executive Profile:</strong> Comprehensive overview of Troy's leadership experience and strategic capabilities.</span>
            </Link>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <Link to="/resources/whitepapers" className="hover:text-blue-600 transition-colors">
              <span><strong>Technical Whitepapers:</strong> Deep dives on AI, cloud architecture, and innovation frameworks authored by Troy.</span>
            </Link>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <Link to="/resources/lean-canvas" className="hover:text-blue-600 transition-colors">
              <span><strong>Innovation Methodology:</strong> Troy's proven frameworks for strategic planning and business model development.</span>
            </Link>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <Link to="/industry-expertise" className="hover:text-blue-600 transition-colors">
              <span><strong>Industry Expertise:</strong> Deep sector knowledge and thought leadership across defense, enterprise, and innovation markets.</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQs;
