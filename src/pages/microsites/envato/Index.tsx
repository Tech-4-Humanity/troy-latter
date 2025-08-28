import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { competencyBadges } from './curriculum';
import FullPathModal from '@/components/ui/full-path-modal';

interface Note {
  id: string;
  note_key: string;
  content: string;
  updated_at: string;
}

const EnvatoIndex = () => {
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [fullViewPath, setFullViewPath] = useState<string | null>(null);
  const { toast } = useToast();

  // State for flip cards
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const flip = (key: string) => setFlipped(p => ({ ...p, [key]: !p[key] }));
  const unflip = (key: string) => setFlipped(p => ({ ...p, [key]: false }));

  // Competency badges for this microsite
  const pathBadges = [
    { label: "AI Product Strategy", color: "bg-blue-500/10 border-blue-500/20" },
    { label: "Enterprise Architecture", color: "bg-green-500/10 border-green-500/20" },
    { label: "Platform Innovation", color: "bg-purple-500/10 border-purple-500/20" },
    { label: "Community Building", color: "bg-orange-500/10 border-orange-500/20" }
  ];

  // 14-point execution framework
  const fourteenPointFramework = [
    "Executive summary",
    "Current position", 
    "Market view",
    "Asset model",
    "Strategy by horizon",
    "Monetisation",
    "Contributor economics",
    "Data and trust",
    "Go to market",
    "Flywheel",
    "Technical priorities",
    "Risks and mitigations",
    "AI product manager role",
    "Next steps"
  ];

  // Path data with 14-point execution plans
  const pathData = {
    "Path 1 Creative Infrastructure": {
      category: "Core",
      growthThesis: "Envato's creator tools are the foundation of its ecosystem. By enhancing these with AI capabilities, we can dramatically improve creator productivity while maintaining quality standards.",
      productAIStrategy: "Integrate AI-powered templates, automated design suggestions, smart asset recommendations, and intelligent quality checking to streamline the creative process.",
      actions: "• Implement AI template generation • Add smart asset tagging • Deploy automated quality checks • Create intelligent search • Develop personalized recommendations",
      stories: [
        {
          title: "Future Case Study 1 — The Customer: Marketing Director at a Global Retail Brand",
          situation: "Priya leads marketing for a global retail chain. She manages seasonal campaigns across 12 markets, each requiring localised creative: video, social, email, print, and in-store screens.",
          problem: "Before Envato's new workflow packs, her team juggled multiple tools and agencies. Content approval cycles dragged on, and ensuring every market stayed brand-compliant was nearly impossible.",
          resolution: "Now Priya uses Envato's Campaign-in-a-Box platform. She enters a brief, uploads her brand assets, and the system auto-generates a curated campaign pack: localised video variants, approved typography, licensed music, and compliance sign-offs embedded in metadata. AI-driven translation ensures each market gets culturally relevant variants, and asset provenance (via C2PA tags) gives legal teams confidence.",
          outcome: "Her campaigns launch 4x faster, costs drop 30%, and compliance risks are near zero. Envato isn't just an asset library—it's the engine that operationalises global campaigns at scale."
        },
        {
          title: "Future Case Study 2 — The Contributor: Motion Designer in São Paulo",
          situation: "Ana is a freelance motion designer. She once sold After Effects templates, but competition was fierce and revenue inconsistent.",
          problem: "She wanted to monetise her expertise—not just raw files—but had no way to package workflows or automations into her offerings.",
          resolution: "With Envato's Creator Kits Marketplace, Ana now sells full production kits: a video opener template, accompanying sound design, brand guideline overlays, and an automation script that exports versions for TikTok, YouTube, and Instagram. AI analytics forecast demand for her kits, while Envato's contributor dashboard suggests niches (e.g., sports highlights, podcast intros) where she can thrive.",
          outcome: "Ana's earnings triple. She shifts from a one-off file seller to a workflow entrepreneur. She's building a recognised brand inside Envato, where kits—not files—are the new currency."
        },
        {
          title: "Future Case Study 3 — The Organisation: CFO of Envato + Shutterstock",
          situation: "Post-acquisition, Envato had to prove its worth not only as a subscription business but as a growth lever for Shutterstock's enterprise division.",
          problem: "Flat subscriptions capped revenue, AI commoditisation loomed, and Wall Street wanted to see innovation beyond 'cheap stock.'",
          resolution: "The CFO backed Envato's pivot into Enterprise Workflow Services. Instead of selling file access, they sold outcomes: compliance-ready content kits, campaign analytics dashboards, and vertical bundles for education, gaming, and corporate L&D. The shift was powered by Envato's Unified Asset Graph—a vector index connecting media, data, workflows, and provenance into one searchable layer.",
          outcome: "Enterprise contracts doubled in three years. Average revenue per enterprise client rose 40%. Investors now see Envato not as a stock provider but as the trusted AI-first substrate for creative operations."
        },
        {
          title: "Future Case Study 4 — The Education Vertical: University Instructional Designer",
          situation: "Mark is an instructional designer at a large Australian university. He supports faculty who need digital course materials but have limited design skills.",
          problem: "Previously, building a course meant patching together PowerPoints, unlicensed YouTube clips, and ad-hoc graphics. Quality varied wildly, compliance checks were slow, and students complained of inconsistency across courses.",
          resolution: "Now Mark uses Envato's Courseware Kit Builder. He enters the course outline, and Envato generates a full package: lecture slides, explainer video templates, animated diagrams, and AI-voiced narrations in multiple languages. All assets come with license provenance, and accessibility standards (captions, alt text) are auto-checked. Integration with the university's LMS pushes content directly into courses.",
          outcome: "Course development time is cut in half. Faculty deliver consistent, branded materials across the university. Students benefit from multimedia learning experiences that are compliant, inclusive, and engaging. Envato has become the creative infrastructure for education delivery."
        },
        {
          title: "Future Case Study 5 — The Gaming Vertical: Indie Game Studio in Berlin",
          situation: "Lena runs a 12-person indie studio building a sci-fi exploration game. Her team needs 3D assets, sound effects, motion graphics, and UI elements, but their budget can't stretch to custom production for everything.",
          problem: "Before, they scraped together assets from multiple sources, often with unclear licenses. Adapting assets for game engines like Unity or Unreal meant manual, time-consuming work.",
          resolution: "With Envato's Game Dev Asset Hub, Lena searches by gameplay intent ('alien desert biome') and gets a ready-to-use kit: 3D models, textures, ambient soundscapes, and UI overlays—already optimised for Unreal. AI automatically generates procedural variants, and provenance data ensures every asset is license-safe. Envato even suggests trending themes and helps forecast monetisation potential for in-game assets.",
          outcome: "The studio saves six months of development time, reallocating resources to storytelling and mechanics. They release faster, with higher-quality visuals and sound. Envato evolves from a stock provider into a production accelerator for gaming."
        }
      ],
      plan14: [
        { title: "Executive summary", text: "Trusted AI workflows and compliance. Enterprise ARR engine." },
        { title: "Current position", text: "Assets strong. AI labs siloed. Enterprise reach under used." },
        { title: "Market view", text: "Competes with Canva and Adobe and Getty. Win with trust and speed." },
        { title: "Asset model", text: "Kits and briefs and compliance packs with manifest and lineage." },
        { title: "Strategy by horizon", text: "H1 index and connectors. H2 packs and dashboards. H3 creative OS." },
        { title: "Monetisation", text: "Enterprise seats 100 to 5000 per month. Usage fees. Integration licences." },
        { title: "Contributor economics", text: "Premium rates for compliant assets. Bonus for enterprise adoption." },
        { title: "Data and trust", text: "C2PA signing. Audit trails. Enterprise SSO and controls." },
        { title: "Go to market", text: "Partner with consultants. Industry events. Case studies." },
        { title: "Flywheel", text: "Trust drives adoption. Adoption drives contributor quality." },
        { title: "Technical priorities", text: "Manifest schema. Lineage APIs. Enterprise integrations." },
        { title: "Risks and mitigations", text: "Adobe competition. Partner with system integrators." },
        { title: "AI product manager role", text: "Align legal and product and sales. Ship compliance features." },
        { title: "Next steps", text: "Pick 3 enterprise pilots. Build manifest schema. Ship compliance dashboard." }
      ]
    },
    "Path 2 Creative Network": {
      category: "Secondary",
      growthThesis: "Strong communities drive engagement and platform stickiness. AI can enhance community interactions through better matching, content discovery, and collaboration tools.",
      productAIStrategy: "Implement AI-driven community matching, intelligent content curation, automated moderation, and collaboration recommendations.",
      actions: "• Create smart community matching • Build content curation AI • Implement auto-moderation • Add collaboration tools • Develop engagement analytics",
      stories: [
        {
          title: "Future Case Study 1 — The Creator: Digital Illustrator in Mexico City",
          situation: "Sofia creates digital illustrations for small businesses. She struggled to build a following and monetize her work consistently on traditional platforms.",
          problem: "Her work got lost in social media noise, and she had no direct way to build subscriber relationships or charge for tutorials and live sessions.",
          resolution: "Through Envato's Creator Network, Sofia builds a dedicated following. She offers illustration tutorials via subscription, hosts live Q&As, and sells commission slots. AI suggests trending illustration styles and optimal posting times for her audience.",
          outcome: "Sofia's monthly income increases 5x through subscriptions and workshops. She builds a personal brand and direct creator-fan relationships that aren't dependent on algorithm changes."
        },
        {
          title: "Future Case Study 2 — The Community: Gaming Asset Enthusiasts",
          situation: "A community of indie game developers needed a space to share assets, get feedback, and collaborate on projects.",
          problem: "Scattered across Discord servers and Reddit threads, collaboration was difficult and asset sharing had licensing uncertainties.",
          resolution: "Envato's Community Hub allows them to create a dedicated gaming asset group. Members share work-in-progress assets, get AI-powered feedback suggestions, and collaborate on themed asset packs. Smart matching connects developers with complementary skills.",
          outcome: "The community produces collaborative asset packs that become bestsellers. Members find project partners and build lasting professional relationships within Envato's ecosystem."
        }
      ],
      plan14: [
        { title: "Executive summary", text: "Creator network with feeds and subs. Multi stream income." },
        { title: "Current position", text: "Many contributors. Community features weak. No feed mechanics." },
        { title: "Market view", text: "Competes with TikTok and Patreon and YouTube. Win with licensed creator economy." },
        { title: "Asset model", text: "Storefront bundles and services and subs tied to creator identity." },
        { title: "Strategy by horizon", text: "H1 storefronts and feeds. H2 subs and workshops. H3 ads and sponsors." },
        { title: "Monetisation", text: "Creator subs 5 to 50 per month. Ads and sponsors. Workshop fees." },
        { title: "Contributor economics", text: "Revenue share on subs. Ad revenue split. Workshop income." },
        { title: "Data and trust", text: "Creator verification. Content moderation. DMCA protection." },
        { title: "Go to market", text: "Recruit top creators. Social campaigns. Influencer partnerships." },
        { title: "Flywheel", text: "Creators bring audiences. Audiences fund creators." },
        { title: "Technical priorities", text: "Feed algorithms. Payment systems. Moderation AI." },
        { title: "Risks and mitigations", text: "Platform dependency. Build direct creator relationships." },
        { title: "AI product manager role", text: "Balance creator and audience needs. Ship engagement features." },
        { title: "Next steps", text: "Launch creator beta. Build feed MVP. Test subscription model." }
      ]
    },
    "Path 3 Vertical Expansion": {
      category: "Satellite",
      growthThesis: "Education drives platform adoption and creator success. AI-powered personalized learning can significantly improve skill development and creator retention.",
      productAIStrategy: "Create adaptive learning paths, AI tutors, skill assessment tools, and personalized content recommendations to enhance educational outcomes.",
      actions: "• Build adaptive learning system • Create AI tutoring • Develop skill assessments • Add learning analytics • Implement progress tracking",
      stories: [
        {
          title: "Future Case Study 1 — The Healthcare Organization: Medical Training Institute",
          situation: "Dr. Chen runs a medical simulation training center that needs realistic patient scenarios, medical imagery, and interactive training modules.",
          problem: "Creating medically-accurate training content required expensive specialized agencies and long development cycles.",
          resolution: "Using Envato's Healthcare Vertical Kit, Dr. Chen accesses AI-generated patient scenarios, anatomical diagrams, and interactive medical simulations. All content meets HIPAA compliance and medical education standards.",
          outcome: "Training content creation time reduced by 70%. Medical students receive more diverse, realistic scenarios. The institute saves $200K annually on content development."
        },
        {
          title: "Future Case Study 2 — The Retail Brand: Fashion E-commerce Platform",
          situation: "Maya's fashion startup needed seasonal lookbooks, product photography templates, and social media assets for rapid market entry.",
          problem: "Traditional fashion photography was too expensive for a startup, and generic templates didn't capture her brand aesthetic.",
          resolution: "Envato's Retail Vertical Hub provides fashion-specific templates, AI-generated model poses, seasonal color palettes, and brand-consistent social media templates. Everything integrates with her Shopify store.",
          outcome: "Maya launches 4 seasonal collections with professional-quality assets at 90% lower cost. Her brand establishes a consistent visual identity across all channels."
        }
      ],
      plan14: [
        { title: "Executive summary", text: "Sector specific platforms like Edu and Gaming and Retail." },
        { title: "Current position", text: "Broad reach. No deep vertical integrations yet." },
        { title: "Market view", text: "Edu 300B plus. Gaming 200B plus. Retail ad spend huge." },
        { title: "Asset model", text: "Industry kits like courseware and Unreal packs and retail ad sets." },
        { title: "Strategy by horizon", text: "H1 Edu and Gaming pilots. H2 Retail and L and D. H3 multi vertical." },
        { title: "Monetisation", text: "Vertical seats 50 to 500 per month. Asset licences. Integration fees." },
        { title: "Contributor economics", text: "Higher rates for industry assets. Vertical specific bonuses." },
        { title: "Data and trust", text: "Industry compliance. Educational standards. Age appropriate content." },
        { title: "Go to market", text: "Industry conferences. Vertical partnerships. Case studies." },
        { title: "Flywheel", text: "Industry adoption drives asset demand. Assets improve outcomes." },
        { title: "Technical priorities", text: "Vertical APIs. Industry integrations. Compliance tools." },
        { title: "Risks and mitigations", text: "Industry incumbents. Partner with leaders." },
        { title: "AI product manager role", text: "Understand vertical needs. Ship industry features." },
        { title: "Next steps", text: "Pick Education vertical. Build pilot. Recruit vertical creators." }
      ]
    },
    "Path 4 Platform Enabler": {
      category: "Satellite",
      growthThesis: "API-first approach enables platform ecosystem growth. AI can automate content creation in new domains through intelligent APIs and developer tools.",
      productAIStrategy: "Build enterprise-grade AI APIs for content generation, smart asset management, automated workflows, and creative intelligence services.",
      actions: "• Develop core creative APIs • Build AI generation services • Create developer platform • Add usage analytics • Implement enterprise features",
      stories: [
        {
          title: "Future Case Study 1 — The SaaS Platform: Project Management Tool",
          situation: "Alex's project management SaaS wanted to offer custom branded templates and visual assets to their 50,000+ business users.",
          problem: "Users constantly requested branded templates, but building an internal creative team was cost-prohibitive and outside their core competency.",
          resolution: "Integrating Envato's Creative API, Alex's platform now auto-generates branded templates using users' company colors and logos. The API provides template suggestions based on industry and use case.",
          outcome: "User engagement increased 40%, premium subscriptions grew 25%, and Alex's team could focus on their core product while offering creative capabilities."
        }
      ],
      plan14: [
        { title: "Executive summary", text: "API first creative backend for SaaS and AI tools." },
        { title: "Current position", text: "Some APIs. No developer platform. Limited enterprise tools." },
        { title: "Market view", text: "Developer platforms huge. API economy growing. SaaS needs creative." },
        { title: "Asset model", text: "API access and generation credits and enterprise integrations." },
        { title: "Strategy by horizon", text: "H1 core APIs. H2 developer platform. H3 white label solutions." },
        { title: "Monetisation", text: "API calls and developer seats and enterprise contracts." },
        { title: "Contributor economics", text: "API usage royalties. Developer marketplace fees." },
        { title: "Data and trust", text: "API authentication. Usage analytics. SLA guarantees." },
        { title: "Go to market", text: "Developer events. API documentation. Integration partnerships." },
        { title: "Flywheel", text: "More developers drive platform value. Value attracts contributors." },
        { title: "Technical priorities", text: "API infrastructure. Developer tools. Documentation platform." },
        { title: "Risks and mitigations", text: "Platform dependency risk. Multi cloud strategy." },
        { title: "AI product manager role", text: "Balance developer and contributor needs. Ship API features." },
        { title: "Next steps", text: "Launch API beta. Build documentation. Recruit key developers." }
      ]
    },
    "Path 5 Radical Play": {
      category: "Experimental",
      growthThesis: "AI transforms creative workflows fundamentally. First-mover advantage in AI-native creative tools could capture the next generation of creators.",
      productAIStrategy: "Build cutting-edge AI tools for content generation, style transfer, automated editing, and creative assistance that redefine creative workflows.",
      actions: "• Develop AI generation tools • Create style transfer systems • Build automated editing • Add creative AI assistants • Implement learning algorithms",
      stories: [
        {
          title: "Future Case Study 1 — The Content Creator: YouTube Channel Owner",
          situation: "Marcus runs a tech review channel with 2M subscribers. Content creation was becoming overwhelming with daily uploads.",
          problem: "Video editing, thumbnail creation, and content optimization took 12+ hours daily, leaving little time for the actual creative work he loved.",
          resolution: "Using Envato's AI Creative Copilot, Marcus describes his video concept and the AI generates thumbnail options, edits raw footage into polished videos, and suggests optimal content flow based on audience engagement patterns.",
          outcome: "Marcus reduced production time by 80% while improving video quality and viewer retention. He could focus on creativity while AI handled the technical execution."
        }
      ],
      plan14: [
        { title: "Executive summary", text: "Immersive and agentic AI content substrate." },
        { title: "Current position", text: "Traditional assets. Limited AI capabilities. No agentic features." },
        { title: "Market view", text: "AI content market exploding. First mover advantage possible." },
        { title: "Asset model", text: "AI generated content and agentic workflows and creative copilots." },
        { title: "Strategy by horizon", text: "H1 AI generation. H2 agentic workflows. H3 creative OS platform." },
        { title: "Monetisation", text: "AI credits and premium features and enterprise licenses." },
        { title: "Contributor economics", text: "AI training data licensing. Quality curation bonuses." },
        { title: "Data and trust", text: "AI transparency. Content attribution. Quality guarantees." },
        { title: "Go to market", text: "Creator beta program. AI conferences. Technology partnerships." },
        { title: "Flywheel", text: "Better AI attracts creators. Creator usage improves AI." },
        { title: "Technical priorities", text: "AI infrastructure. Model training. Real time processing." },
        { title: "Risks and mitigations", text: "Technology risk. Partner with AI leaders." },
        { title: "AI product manager role", text: "Balance innovation and practicality. Ship AI features." },
        { title: "Next steps", text: "AI research team. Technology partnerships. Beta program." }
      ]
    }
  };

  // Load notes from both Supabase (if authenticated) and localStorage (as backup)
  const loadNotes = async () => {
    setIsLoading(true);
    
    try {
      // Check authentication
      const { data: { user } } = await supabase.auth.getUser();
      setIsAuthenticated(!!user);

      // Load from localStorage only (no database dependency)
      const localNotes = localStorage.getItem('envato-notes');
      if (localNotes) {
        setNotes(JSON.parse(localNotes));
      }
    } catch (error) {
      console.error('Error in loadNotes:', error);
      toast({
        title: "Error",
        description: "Failed to load notes. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle note changes with debounced save
  const handleNoteChange = (key: string, value: string) => {
    setNotes(prev => ({ ...prev, [key]: value }));
    
    // Save to localStorage immediately
    const newNotes = { ...notes, [key]: value };
    localStorage.setItem('envato-notes', JSON.stringify(newNotes));

    // No database operations needed - only localStorage
  };

  // Save all notes to localStorage
  const saveAll = async () => {
    try {
      localStorage.setItem('envato-notes', JSON.stringify(notes));
      toast({
        title: "Notes saved",
        description: "All notes have been saved locally.",
      });
    } catch (error) {
      console.error('Error in saveAll:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred while saving notes.",
        variant: "destructive",
      });
    }
  };

  // Clear all notes
  const clearAll = async () => {
    try {
      setNotes({});
      localStorage.removeItem('envato-notes');

      toast({
        title: "Notes cleared",
        description: "All notes have been removed.",
      });
    } catch (error) {
      console.error('Error in clearAll:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred while clearing notes.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    loadNotes();

    // Add event listeners for save/clear buttons
    document.getElementById('saveAll')?.addEventListener('click', saveAll);
    document.getElementById('clearAll')?.addEventListener('click', clearAll);

    return () => {
      document.getElementById('saveAll')?.removeEventListener('click', saveAll);
      document.getElementById('clearAll')?.removeEventListener('click', clearAll);
    };
  }, [notes, isLoading, isAuthenticated]);

  return (
    <>
      <style>{`
        .envato-page {
          --bg:#ffffff;
          --ink:#0f172a;
          --muted:#64748b;
          --line:#e2e8f0;
          --envato:#00a862;
          --envato-dark:#00844e;
          --blue:#2463eb;
          --yellow:#eab308;
          --red:#ef4444;
          --card:#f8fafc;
        }
        .envato-page * {
          box-sizing: border-box;
        }
        .envato-page {
          margin: 0;
          background: var(--bg);
          color: var(--ink);
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }
        .envato-page a {
          color: var(--envato);
          text-decoration: none;
        }
        .envato-page .wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
        }
        .envato-page .hero {
          display: grid;
          gap: 12px;
          margin-bottom: 20px;
        }
        .envato-page .hero-image {
          width: 100%;
          max-width: 960px;
          margin: 0 auto 16px;
          background: var(--card);
          border-radius: 12px;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--line);
        }
        .envato-page .hero-text {
          color: var(--muted);
          font-size: 16px;
          font-style: italic;
        }
        .envato-page .hero-title {
          margin: 0 0 8px 0;
          font-size: 36px;
          font-weight: 600;
          color: var(--ink);
          line-height: 1.1;
        }
        .envato-page .hero-subtitle {
          margin: 0 0 16px 0;
          font-size: 18px;
          color: var(--muted);
          font-weight: 400;
          line-height: 1.4;
        }
        .envato-page .hero-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .envato-page .hero-link {
          padding: 8px 16px;
          background: var(--envato);
          color: white;
          border-radius: 6px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }
        .envato-page .hero-link:hover {
          background: var(--envato-dark);
        }
        .envato-page .section {
          margin: 32px 0;
          padding: 32px 0;
          border-top: 1px solid var(--line);
        }
        .envato-page .section:first-child {
          border-top: none;
        }
        .envato-page .section-title {
          margin: 0 0 24px 0;
          font-size: 28px;
          font-weight: 600;
          color: var(--ink);
        }
        .envato-page .grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        .envato-page .card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 24px;
          position: relative;
          height: fit-content;
        }
        .envato-page .flip-card {
          perspective: 1000px;
          height: 400px;
        }
        .envato-page .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .envato-page .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .envato-page .flip-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .envato-page .flip-back {
          transform: rotateY(180deg);
        }
        .envato-page .card-title {
          margin: 0 0 12px 0;
          font-size: 20px;
          font-weight: 600;
          color: var(--ink);
        }
        .envato-page .card-subtitle {
          margin: 0 0 16px 0;
          font-size: 14px;
          color: var(--muted);
          text-transform: uppercase;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        .envato-page .card-text {
          margin: 0 0 16px 0;
          font-size: 15px;
          color: var(--ink);
          line-height: 1.5;
        }
        .envato-page .table-wrap {
          overflow-x: auto;
          margin: 16px 0;
          border: 1px solid var(--line);
          border-radius: 8px;
        }
        .envato-page table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          table-layout: fixed;
        }
        .envato-page th,
        .envato-page td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid var(--line);
          vertical-align: top;
        }
        .envato-page th {
          background: var(--card);
          font-weight: 600;
          color: var(--ink);
        }
        /* Equal width columns for comparison table */
        .envato-page .comparison-table th:first-child,
        .envato-page .comparison-table td:first-child {
          width: 15%;
        }
        .envato-page .comparison-table th:nth-child(2),
        .envato-page .comparison-table td:nth-child(2),
        .envato-page .comparison-table th:nth-child(3),
        .envato-page .comparison-table td:nth-child(3),
        .envato-page .comparison-table th:nth-child(4),
        .envato-page .comparison-table td:nth-child(4),
        .envato-page .comparison-table th:nth-child(5),
        .envato-page .comparison-table td:nth-child(5) {
          width: 15%;
        }
        .envato-page .comparison-table th:nth-child(6),
        .envato-page .comparison-table td:nth-child(6) {
          width: 25%;
        }
        .envato-page tr:last-child th,
        .envato-page tr:last-child td {
          border-bottom: none;
        }
        .envato-page .note {
          width: 100%;
          border: 1px solid var(--line);
          border-radius: 6px;
          padding: 8px;
          font-size: 14px;
          color: var(--ink);
          resize: vertical;
          min-height: 60px;
          font-family: inherit;
          background: white;
        }
        .envato-page .note:focus {
          outline: none;
          border-color: var(--envato);
        }
        .envato-page .dim-help {
          color: var(--muted);
          font-size: 14px;
          font-style: italic;
          margin-bottom: 16px;
        }
        .envato-page details {
          border: 1px solid var(--line);
          border-radius: 8px;
          margin-bottom: 16px;
          background: var(--card);
        }
        .envato-page summary {
          padding: 16px;
          font-weight: 600;
          cursor: pointer;
          border-bottom: 1px solid var(--line);
          background: var(--card);
          border-radius: 8px 8px 0 0;
        }
        .envato-page details[open] summary {
          border-radius: 8px 8px 0 0;
        }
        .envato-page .acc-body {
          padding: 16px;
        }
        .envato-page .badge {
          display: inline-block;
          padding: 4px 8px;
          background: var(--envato);
          color: white;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          margin-right: 8px;
          margin-bottom: 4px;
        }
        .envato-page .footer-ctas {
          display: flex;
          gap: 12px;
          margin-top: 32px;
          padding-top: 32px;
          border-top: 1px solid var(--line);
          justify-content: center;
          flex-wrap: wrap;
        }
        .envato-page .cta-button {
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          border: 2px solid;
          background: transparent;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.2s;
        }
        .envato-page .cta-save {
          color: var(--envato);
          border-color: var(--envato);
        }
        .envato-page .cta-save:hover {
          background: var(--envato);
          color: white;
        }
        .envato-page .cta-clear {
          color: var(--red);
          border-color: var(--red);
        }
        .envato-page .cta-clear:hover {
          background: var(--red);
          color: white;
        }
        .envato-page .status-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
        }
        .envato-page .status-synced {
          background: #10b981;
        }
        .envato-page .status-local {
          background: var(--yellow);
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .envato-page .wrap {
            padding: 16px;
          }
          .envato-page .hero-title {
            font-size: 28px;
          }
          .envato-page .section-title {
            font-size: 24px;
          }
          .envato-page .grid {
            grid-template-columns: 1fr;
          }
          .envato-page .footer-ctas {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div className="envato-page">
        <div className="wrap">
          {/* Hero Section */}
          <section id="quick" className="hero">
            <div className="hero-image" style={{backgroundImage: 'url(/src/assets/envato-hero.png)'}}>
              <div className="hero-text">Envato Strategic Overview</div>
            </div>
            <h1 className="hero-title">Envato: 5 Strategic Growth Paths</h1>
            <p className="hero-subtitle">
              Exploring strategic directions for Envato's future growth within the Shutterstock ecosystem. 
              Each path represents a different approach to leveraging AI, community, and creative tools.
            </p>
            <div className="hero-links">
              <a href="/microsites/envato/summary" className="hero-link">📋 Envato Context & Summary</a>
              <a href="/microsites/envato/summary#asset-redefinition" className="hero-link">🔄 Asset Redefinition Guide</a>
              <a href="#comparison-table" className="hero-link">📊 Compare all paths</a>
              <a href="#framework" className="hero-link">🎯 Decision framework</a>
            </div>
          </section>

          {/* Quick view cards */}
          <section id="quick" className="section">
            <h2 className="section-title">Quick path overview</h2>
            <div className="grid">
              {Object.entries(pathData).map(([pathName, data], index) => {
                if (!data) return null;
                return (
                <div 
                  key={pathName} 
                  className={`flip-card ${flipped[`path${index + 1}`] ? 'flipped' : ''}`}
                  onMouseLeave={() => unflip(`path${index + 1}`)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-face flip-front">
                      <div>
                        <div className="card-subtitle">{data.category}</div>
                        <h3 className="card-title">{pathName}</h3>
                        <p className="card-text">{data.growthThesis}</p>
                         <div className="flex flex-wrap gap-1 mb-4">
                           {(() => {
                             const pathBadges = competencyBadges[pathName as keyof typeof competencyBadges];
                             return pathBadges?.map(badge => (
                               <Badge key={badge} variant="secondary" className="text-xs">
                                 {badge}
                               </Badge>
                             ));
                           })()}
                         </div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip(`path${index + 1}`)} variant="outline" size="sm">
                          Flip for comparison
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath(pathName)}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">Interactive comparison snapshot</h4>
                      <div className="space-y-2 text-sm">
                        <div><strong>Market Value:</strong> 4/5 - TAM $200-400M ARR</div>
                        <div><strong>Strategic Fit:</strong> 5/5 - Perfect community alignment</div>
                        <div><strong>Time to Revenue:</strong> 3/5 - 2-3 years</div>
                        <div><strong>Probability:</strong> 4/5 - High execution confidence</div>
                      </div>
                      <Button 
                        onClick={() => document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' })}
                        variant="outline" 
                        size="sm" 
                        className="mt-3 w-full"
                      >
                        View detailed comparison →
                      </Button>
                    </div>
                  </div>
                </div>
                )
              }).filter(Boolean)}
            </div>
          </section>

          {/* Path Details: Future Case Studies */}
          <section className="section">
            <h2 className="section-title">Path Details: Future Case Studies</h2>
            <p className="section-subtitle">Explore future scenarios and outcomes for each strategic pathway</p>
            
            <div className="space-y-6" style={{marginBottom: '32px'}}>
              <Accordion type="single" collapsible className="w-full">
                {Object.entries(pathData).map(([pathName, data], pathIndex) => {
                  if (!data) return null;
                  return (
                  <AccordionItem key={pathIndex} value={`path-${pathIndex}`} style={{border: '1px solid var(--line)', borderRadius: '8px', marginBottom: '16px', background: 'var(--card)'}}>
                    <AccordionTrigger style={{textAlign: 'left', padding: '24px', fontSize: '18px', fontWeight: '600'}}>
                      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                        <h3 style={{fontSize: '20px', fontWeight: '600', color: 'var(--ink)', margin: 0}}>{pathName}</h3>
                        <p style={{fontSize: '14px', color: 'var(--muted)', marginTop: '4px', margin: 0}}>{data.category} - {data.growthThesis.substring(0, 80)}...</p>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent style={{padding: '0 24px 24px'}}>
                      <div style={{display: 'grid', gap: '32px'}}>
                        {/* Path Overview */}
                        <div style={{background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '24px'}}>
                          <h4 style={{fontSize: '18px', fontWeight: '600', color: '#1e40af', marginBottom: '12px'}}>Path Overview</h4>
                          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '16px'}}>
                            <div style={{background: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #bfdbfe'}}>
                              <div style={{fontSize: '14px', color: '#3b82f6', fontWeight: '500'}}>Name</div>
                              <div style={{fontSize: '18px', fontWeight: '600', color: '#1e40af'}}>{pathName}</div>
                            </div>
                            <div style={{background: 'white', borderRadius: '8px', padding: '12px', border: '1px solid #bfdbfe'}}>
                              <div style={{fontSize: '14px', color: '#3b82f6', fontWeight: '500'}}>Type</div>
                              <div style={{fontSize: '18px', fontWeight: '600', color: '#1e40af'}}>{data.category}</div>
                            </div>
                          </div>
                          <div style={{background: 'white', borderRadius: '8px', padding: '16px', border: '1px solid #bfdbfe'}}>
                            <div style={{fontSize: '14px', color: '#3b82f6', fontWeight: '500', marginBottom: '8px'}}>Summary</div>
                            <p style={{color: '#1e40af', fontSize: '16px'}}>{data.growthThesis}</p>
                          </div>
                        </div>

                        {/* All Case Studies */}
                        {data.stories && data.stories.length > 0 && (
                          <div style={{background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '24px'}}>
                            <h4 style={{fontSize: '18px', fontWeight: '600', color: '#15803d', marginBottom: '16px'}}>All Future Case Studies</h4>
                            <div style={{display: 'grid', gap: '20px'}}>
                              {data.stories.map((story, storyIndex) => (
                                <div key={storyIndex} style={{background: 'white', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '20px'}}>
                                  <h6 style={{fontSize: '16px', fontWeight: '600', color: '#15803d', marginBottom: '12px'}}>{story.title}</h6>
                                  <div style={{display: 'grid', gap: '12px'}}>
                                    <div>
                                      <span style={{fontSize: '14px', fontWeight: '600', color: '#166534'}}>Situation:</span>
                                      <p style={{fontSize: '14px', color: '#166534', margin: '4px 0 0 0'}}>{story.situation}</p>
                                    </div>
                                    <div>
                                      <span style={{fontSize: '14px', fontWeight: '600', color: '#166534'}}>Problem:</span>
                                      <p style={{fontSize: '14px', color: '#166534', margin: '4px 0 0 0'}}>{story.problem}</p>
                                    </div>
                                    <div>
                                      <span style={{fontSize: '14px', fontWeight: '600', color: '#166534'}}>Resolution:</span>
                                      <p style={{fontSize: '14px', color: '#166534', margin: '4px 0 0 0'}}>{story.resolution}</p>
                                    </div>
                                    <div>
                                      <span style={{fontSize: '14px', fontWeight: '600', color: '#166534'}}>Outcome:</span>
                                      <p style={{fontSize: '14px', color: '#166534', margin: '4px 0 0 0'}}>{story.outcome}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  )
                }).filter(Boolean)}
              </Accordion>
            </div>
          </section>

          {/* Interactive comparison table */}
          <section id="comparison-table" className="section">
            <h2 className="section-title">Interactive comparison table</h2>

            {fourteenPointFramework.map((framework, index) => {
              const sectionNumber = index + 1;
              return (
                <details key={framework} open={sectionNumber === 1}>
                  <summary>{sectionNumber}. {framework}</summary>
                  <div className="acc-body">
                    <p className="dim-help">
                      {sectionNumber === 1 ? "High level purpose of each path. Add your notes on the right."
                       :
                       sectionNumber === 2 ? "Where is Envato now on this dimension. Add your notes on the right."
                       :
                       "Strategic considerations for this dimension. Add your notes on the right."}
                    </p>
                    <div className="table-wrap">
                      <table className="comparison-table">
                        <thead>
                          <tr>
                            <th>Path 1</th>
                            <th style={{background: '#ecfdf5', borderLeft: '2px solid #10b981', borderRight: '2px solid #10b981'}}>
                              Path 2 <span style={{background: '#10b981', color: 'white', padding: '2px 6px', borderRadius: '8px', fontSize: '10px', marginLeft: '4px'}}>Chosen</span>
                            </th>
                            <th>Path 3</th>
                            <th>Path 4</th>
                            <th>Path 5</th>
                            <th>Envato input</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sectionNumber === 1 ? (
                            <>
                              <tr>
                                <td>{pathData["Path 1 Creative Infrastructure"].plan14[sectionNumber - 1]?.text}</td>
                                <td style={{background: '#ecfdf5', borderLeft: '2px solid #10b981', borderRight: '2px solid #10b981', fontWeight: '500'}}>
                                  {pathData["Path 2 Creative Network"].plan14[sectionNumber - 1]?.text}
                                </td>
                                <td>{pathData["Path 3 Vertical Expansion"].plan14[sectionNumber - 1]?.text}</td>
                                <td>{pathData["Path 4 Platform Enabler"].plan14[sectionNumber - 1]?.text}</td>
                                <td>{pathData["Path 5 Radical Play"].plan14[sectionNumber - 1]?.text}</td>
                                <td>
                                  <textarea 
                                    className="note" 
                                    value={notes[`d${sectionNumber}`] || ''}
                                    onChange={(e) => handleNoteChange(`d${sectionNumber}`, e.target.value)}
                                    style={{minHeight: '80px'}}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td style={{fontWeight: '500'}}>Enterprise compliance and workflow automation at scale</td>
                                <td style={{background: '#ecfdf5', borderLeft: '2px solid #10b981', borderRight: '2px solid #10b981', fontWeight: '500'}}>
                                  Direct creator-fan relationships and subscription revenue
                                </td>
                                <td style={{fontWeight: '500'}}>Deep industry expertise and specialized asset collections</td>
                                <td style={{fontWeight: '500'}}>Platform integrations and developer ecosystem growth</td>
                                <td style={{fontWeight: '500'}}>AI-first content creation with professional tool integration</td>
                                <td>
                                  <textarea 
                                    className="note" 
                                    value={notes["where-wins"] || ''}
                                    onChange={(e) => handleNoteChange("where-wins", e.target.value)}
                                    placeholder="Your notes on winning strategies..."
                                    style={{minHeight: '80px'}}
                                  />
                                </td>
                              </tr>
                            </>
                          ) : (
                            <tr style={{background: sectionNumber % 2 === 0 ? '#f8fafc' : 'transparent'}}>
                              <td>{pathData["Path 1 Creative Infrastructure"].plan14[sectionNumber - 1]?.text}</td>
                              <td style={{background: '#ecfdf5', borderLeft: '2px solid #10b981', borderRight: '2px solid #10b981', fontWeight: '500'}}>
                                {pathData["Path 2 Creative Network"].plan14[sectionNumber - 1]?.text}
                              </td>
                              <td>{pathData["Path 3 Vertical Expansion"].plan14[sectionNumber - 1]?.text}</td>
                              <td>{pathData["Path 4 Platform Enabler"].plan14[sectionNumber - 1]?.text}</td>
                              <td>{pathData["Path 5 Radical Play"].plan14[sectionNumber - 1]?.text}</td>
                              <td>
                                <textarea 
                                  className="note" 
                                  value={notes[`d${sectionNumber}`] || ''}
                                  onChange={(e) => handleNoteChange(`d${sectionNumber}`, e.target.value)}
                                  style={{minHeight: '80px'}}
                                />
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>
              );
            })}
          </section>

          {/* Envato Strategic Path Decision Framework */}
          <section id="framework" className="section">
            <div className="card">
              <h2 className="section-title">Envato Strategic Path Decision Framework</h2>
              
              <div className="text-center mb-6">
                <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                  A systematic approach to evaluating and selecting the optimal strategic direction using our 14-point analysis and 5 strategic paths.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg text-left max-w-4xl mx-auto">
                  <h3 className="font-semibold text-gray-900 mb-3">How This Framework Works:</h3>
                  <p className="text-gray-700 mb-4">
                    The 14-point comparison table provides detailed analysis across all strategic dimensions. These insights feed into the scoring framework below, where each path is evaluated on key success criteria. <strong>No single path will be the complete answer</strong> - the optimal strategy will be a blend of elements from multiple paths, adapted to market conditions and organizational capabilities.
                  </p>
                  <p className="text-gray-600 text-sm">
                    <strong>Scoring Formula:</strong> Weighted average of Strategic Fit (30%), Market Opportunity (25%), Technical Feasibility (20%), Resource Requirements (15%), and Risk Level (10%).
                  </p>
                </div>
              </div>
              
              {/* Step 1: Scoring Axes */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Step 1: Scoring Axes (weighted for Envato)</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Community & Strategic Fit (30%)</strong> – aligns with Envato's contributor-first DNA and Shutterstock's enterprise expansion.</li>
                  <li><strong>Market Value / TAM (25%)</strong> – size of the opportunity.</li>
                  <li><strong>Probability of Success (20%)</strong> – likelihood of execution.</li>
                  <li><strong>Time to Revenue (15%)</strong> – speed to monetisation.</li>
                  <li><strong>Differentiation (10%)</strong> – uniqueness vs competition.</li>
                </ul>
              </div>

              {/* Step 2: Scores Table */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Step 2: Scores (indicative, directional, 1–5 scale)</h3>
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th style={{padding: '12px', fontSize: '14px', textAlign: 'left'}}>Path</th>
                        <th style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>Market Value</th>
                        <th style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>Probability</th>
                        <th style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>Time to Revenue</th>
                        <th style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>Strategic Fit</th>
                        <th style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>Differentiation</th>
                        <th style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>Weighted Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{background: '#f0f9ff', borderLeft: '3px solid #0ea5e9'}}>
                        <td style={{padding: '12px', fontSize: '14px', fontWeight: '600'}}>
                          1. Infrastructure 
                          <span style={{background: '#0ea5e9', color: 'white', padding: '2px 6px', borderRadius: '8px', fontSize: '10px', marginLeft: '8px'}}>Core play</span>
                        </td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>4 (TAM $200–400M ARR)</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>4</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>3 (2–3 yrs)</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>5</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>4</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center', fontWeight: '600', color: '#0ea5e9'}}>4.1</td>
                      </tr>
                      <tr style={{background: '#ecfdf5', borderLeft: '3px solid #10b981'}}>
                        <td style={{padding: '12px', fontSize: '14px', fontWeight: '600'}}>
                          2. Network 
                          <span style={{background: '#10b981', color: 'white', padding: '2px 6px', borderRadius: '8px', fontSize: '10px', marginLeft: '8px'}}>Chosen now</span>
                        </td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>5 (TAM $500M+ GMV)</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>2</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>3 (2–3 yrs)</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>3</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>3</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center', fontWeight: '600'}}>3.3</td>
                      </tr>
                      <tr style={{background: '#fef3c7'}}>
                        <td style={{padding: '12px', fontSize: '14px', fontWeight: '600'}}>3. Vertical Expansion</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>3 (TAM $100–200M ARR)</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>4</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>4 (1–2 yrs)</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>4</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>3</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center', fontWeight: '600'}}>3.6</td>
                      </tr>
                      <tr style={{background: '#f3f4f6'}}>
                        <td style={{padding: '12px', fontSize: '14px', fontWeight: '600'}}>4. Platform Enabler</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>4 (TAM $300–500M ARR)</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>3</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>2 (3–5 yrs)</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>2</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>4</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center', fontWeight: '600'}}>3.0</td>
                      </tr>
                      <tr style={{background: '#fef2f2'}}>
                        <td style={{padding: '12px', fontSize: '14px', fontWeight: '600'}}>5. Radical Play</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>5 (TAM $1B+ potential)</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>1</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>1 (5+ yrs)</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>2</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center'}}>5</td>
                        <td style={{padding: '12px', fontSize: '14px', textAlign: 'center', fontWeight: '600'}}>2.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Step 3: Interpretation */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Step 3: Interpretation</h3>
                <p className="text-gray-700 mb-6">
                  Based on the scores above, here's how to interpret the strategic paths:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">High Priority Paths (4.0+)</h4>
                    <ul className="text-green-800 space-y-1">
                      <li>• Path 1: Creative Infrastructure (4.1)</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">Medium Priority Paths (3.0-3.9)</h4>
                    <ul className="text-yellow-800 space-y-1">
                      <li>• Path 3: Vertical Expansion (3.6)</li>
                      <li>• Path 2: Creative Network (3.3)</li>
                      <li>• Path 4: Platform Enabler (3.0)</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Experimental Paths (2.0-2.9)</h4>
                    <ul className="text-blue-800 space-y-1">
                      <li>• Path 5: Radical Play (2.5)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Strategic Considerations</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Path 1 offers the best balance of strategic fit and feasibility</li>
                      <li>• Path 3 provides steady, sustainable growth opportunities</li>
                      <li>• Path 2 has community alignment but execution challenges</li>
                      <li>• Path 5 has high potential but significant technical risks</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4: Translate to Action */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Step 4: Translate to Action (Portfolio Approach)</h3>
                <p className="text-gray-700 mb-4">
                  Rather than choosing a single path, Envato should pursue a balanced portfolio approach:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-100 p-6 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-3">High Confidence Portfolio (70% allocation)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-green-800">Path 1: Creative Infrastructure</span>
                        <span className="font-semibold text-green-900">50%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-green-800">Path 3: Vertical Expansion</span>
                        <span className="font-semibold text-green-900">20%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-100 p-6 rounded-lg">
                    <h4 className="font-bold text-yellow-900 mb-3">Experimental Portfolio (30% allocation)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-yellow-800">Path 2: Creative Network</span>
                        <span className="font-semibold text-yellow-900">15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-800">Path 4: Platform Enabler</span>
                        <span className="font-semibold text-yellow-900">10%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-yellow-800">Path 5: Radical Play</span>
                        <span className="font-semibold text-yellow-900">5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer CTAs */}
          <div className="footer-ctas">
            <button id="saveAll" className="cta-button cta-save">
              <span className={`status-indicator ${isAuthenticated ? 'status-synced' : 'status-local'}`}></span>
              Save all notes {isAuthenticated ? 'to cloud' : 'locally'}
            </button>
            <button id="clearAll" className="cta-button cta-clear">
              Clear all notes
            </button>
          </div>
        </div>
      </div>

      {/* Full Path Modal */}
      <FullPathModal 
        isOpen={!!fullViewPath}
        onClose={() => setFullViewPath(null)}
        pathName={fullViewPath}
        pathData={fullViewPath ? pathData[fullViewPath] : null}
      />
    </>
  );
};

export default EnvatoIndex;
