import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { competencyBadges } from './curriculum';
import FullPathModal from '@/components/ui/full-path-modal';
import BcorpDecisionFramework from './components/BcorpDecisionFramework';
import PathDiagrams from './components/PathDiagrams';

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
    "Executive Summary",
    "Current Position", 
    "Market View",
    "Asset Model",
    "Strategy by Horizon",
    "Monetisation",
    "Contributor Economics",
    "Data & Trust",
    "Go-to-Market",
    "Flywheel",
    "Technical Priorities",
    "Risks & Mitigations",
    "AI Product Manager Role",
    "Next Steps"
  ];

  // Path data with 14-point execution plans
  const pathData = {
    "Path 1 Creative Infrastructure": {
      category: "Strategic Support",
      allocationPercent: "15%",
      chosen: false,
      growthThesis: "Envato's creator tools are the foundation of its ecosystem. By enhancing these with AI capabilities, we can dramatically improve creator productivity while maintaining quality standards.",
      productAIStrategy: "Integrate AI-powered templates, automated design suggestions, smart asset recommendations, and intelligent quality checking to streamline the creative process.",
      actions: "• Implement AI template generation • Add smart asset tagging • Deploy automated quality checks • Create intelligent search • Develop personalized recommendations",
      stories: [
        {
          title: "Future Case Study 1 - The Customer: Marketing Director at a Global Retail Brand",
          situation: "Priya leads marketing for a global retail chain. She manages seasonal campaigns across 12 markets, each requiring localised creative: video, social, email, print, and in-store screens.",
          problem: "Before Envato's new workflow packs, her team juggled multiple tools and agencies. Content approval cycles dragged on, and ensuring every market stayed brand-compliant was nearly impossible.",
          resolution: "Now Priya uses Envato's Campaign-in-a-Box platform. She enters a brief, uploads her brand assets, and the system auto-generates a curated campaign pack: localised video variants, approved typography, licensed music, and compliance sign-offs embedded in metadata. AI-driven translation ensures each market gets culturally relevant variants, and asset provenance (via C2PA tags) gives legal teams confidence.",
          outcome: "Her campaigns launch 4x faster, costs drop 30%, and compliance risks are near zero. Envato isn't just an asset library - it's the engine that operationalises global campaigns at scale."
        },
        {
          title: "Future Case Study 2 - The Contributor: Motion Designer in São Paulo",
          situation: "Ana is a freelance motion designer. She once sold After Effects templates, but competition was fierce and revenue inconsistent.",
          problem: "She wanted to monetise her expertise - not just raw files - but had no way to package workflows or automations into her offerings.",
          resolution: "With Envato's Creator Kits Marketplace, Ana now sells full production kits: a video opener template, accompanying sound design, brand guideline overlays, and an automation script that exports versions for TikTok, YouTube, and Instagram. AI analytics forecast demand for her kits, while Envato's contributor dashboard suggests niches (e.g., sports highlights, podcast intros) where she can thrive.",
          outcome: "Ana's earnings triple. She shifts from a one-off file seller to a workflow entrepreneur. She's building a recognised brand inside Envato, where kits - not files - are the new currency."
        },
        {
          title: "Future Case Study 3 - The Organisation: CFO of Envato + Shutterstock",
          situation: "Post-acquisition, Envato had to prove its worth not only as a subscription business but as a growth lever for Shutterstock's enterprise division.",
          problem: "Flat subscriptions capped revenue, AI commoditisation loomed, and Wall Street wanted to see innovation beyond 'cheap stock.'",
          resolution: "The CFO backed Envato's pivot into Enterprise Workflow Services. Instead of selling file access, they sold outcomes: compliance-ready content kits, campaign analytics dashboards, and vertical bundles for education, gaming, and corporate L&D. The shift was powered by Envato's Unified Asset Graph - a vector index connecting media, data, workflows, and provenance into one searchable layer.",
          outcome: "Enterprise contracts doubled in three years. Average revenue per enterprise client rose 40%. Investors now see Envato not as a stock provider but as the trusted AI-first substrate for creative operations."
        },
        {
          title: "Future Case Study 4 - The Education Vertical: University Instructional Designer",
          situation: "Mark is an instructional designer at a large Australian university. He supports faculty who need digital course materials but have limited design skills.",
          problem: "Previously, building a course meant patching together PowerPoints, unlicensed YouTube clips, and ad-hoc graphics. Quality varied wildly, compliance checks were slow, and students complained of inconsistency across courses.",
          resolution: "Now Mark uses Envato's Courseware Kit Builder. He enters the course outline, and Envato generates a full package: lecture slides, explainer video templates, animated diagrams, and AI-voiced narrations in multiple languages. All assets come with license provenance, and accessibility standards (captions, alt text) are auto-checked. Integration with the university's LMS pushes content directly into courses.",
          outcome: "Course development time is cut in half. Faculty deliver consistent, branded materials across the university. Students benefit from multimedia learning experiences that are compliant, inclusive, and engaging. Envato has become the creative infrastructure for education delivery."
        },
        {
          title: "Future Case Study 5 - The Gaming Vertical: Indie Game Studio in Berlin",
          situation: "Lena runs a 12-person indie studio building a sci-fi exploration game. Her team needs 3D assets, sound effects, motion graphics, and UI elements, but their budget can't stretch to custom production for everything.",
          problem: "Before, they scraped together assets from multiple sources, often with unclear licenses. Adapting assets for game engines like Unity or Unreal meant manual, time-consuming work.",
          resolution: "With Envato's Game Dev Asset Hub, Lena searches by gameplay intent ('alien desert biome') and gets a ready-to-use kit: 3D models, textures, ambient soundscapes, and UI overlays - already optimised for Unreal. AI automatically generates procedural variants, and provenance data ensures every asset is license-safe. Envato even suggests trending themes and helps forecast monetisation potential for in-game assets.",
          outcome: "The studio saves six months of development time, reallocating resources to storytelling and mechanics. They release faster, with higher-quality visuals and sound. Envato evolves from a stock provider into a production accelerator for gaming."
        }
      ],
      plan14: [
        { title: "Executive Summary", text: "Trusted AI workflows and compliance. Enterprise ARR engine." },
        { title: "Current Position", text: "Strong asset base. AI Labs live but siloed. Enterprise integrations underused." },
        { title: "Market View", text: "Competes with Canva, Adobe, Getty. Win with trust, compliance, speed." },
        { title: "Asset Model", text: "Kits, briefs, compliance packs, manifests, lineage." },
        { title: "Strategy by Horizon", text: "H1 unified index + connectors. H2 enterprise packs + dashboards. H3 creative OS." },
        { title: "Monetisation", text: "Enterprise seats ($100-$5,000/mo). Usage fees. Integration licences." },
        { title: "Contributor Economics", text: "Premium rates for compliant assets. Bonus on enterprise adoption." },
        { title: "Data & Trust", text: "C2PA signing, audit trails, enterprise SSO + governance." },
        { title: "Go-to-Market", text: "Consultants, enterprise events, case studies." },
        { title: "Flywheel", text: "Trust → adoption → better assets → more enterprise wins." },
        { title: "Technical Priorities", text: "Manifest schema, lineage APIs, enterprise DAM integrations." },
        { title: "Risks & Mitigations", text: "Adobe/Canva threat - mitigate via compliance/enterprise." },
        { title: "AI Product Manager Role", text: "Align legal/product/sales. Ship compliance." },
        { title: "Next Steps", text: "Pick 3 enterprise pilots. Build manifest schema. Ship compliance dashboard." }
      ]
    },
    "Path 2 Creative Network": {
      category: "Primary Focus",
      allocationPercent: "50%",
      chosen: true,
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
        },
        {
          title: "Future Case Study 3 — The Music Producer: Electronic Music Creator in Berlin",
          situation: "Lars produces electronic music and has built a following through Spotify and SoundCloud, but struggled to monetize his music production skills.",
          problem: "Traditional music licensing was complex and often resulted in his tracks being buried in massive libraries. He wanted to build direct relationships with creators who used his music.",
          resolution: "Through Envato's Creator Network, Lars creates a subscription tier offering exclusive stems, loops, and full tracks. He hosts live production sessions where subscribers can influence his creative process and get first access to new releases.",
          outcome: "Lars builds a dedicated community of 500+ subscribers paying $20/month. He collaborates with video creators and gets attribution for his work, leading to commissioned projects worth $50K annually."
        },
        {
          title: "Future Case Study 4 — The Photography Collective: Street Photography Group in Tokyo",
          situation: "A group of 12 street photographers wanted to showcase their work collectively and build an audience for urban photography in Asia.",
          problem: "Individual photographers struggled for visibility in oversaturated stock photo markets. Their unique perspective on Asian urban life was undervalued.",
          resolution: "Using Envato's Community Features, they form the 'Tokyo Streets Collective' - sharing photography techniques, organizing photo walks, and curating themed collections. AI helps match their urban photography with creators looking for authentic Asian city visuals.",
          outcome: "The collective becomes a recognized brand within Envato, with their urban photography commanding premium prices. They launch photography workshops and sell 'Tokyo Streets' branded presets, expanding beyond individual sales."
        },
        {
          title: "Future Case Study 5 — The Code Community: WordPress Theme Developers",
          situation: "A network of WordPress developers wanted to collaborate on complex themes while maintaining individual creative control and recognition.",
          problem: "Complex themes required diverse skills (frontend, backend, design, UX) that individual developers struggled to master alone.",
          resolution: "Envato's Developer Community enables them to form project teams, share revenue based on contribution, and maintain attribution. AI suggests optimal team compositions based on skills and past collaboration success.",
          outcome: "Their collaborative themes achieve higher quality and broader market appeal. Individual developers specialize in their strengths while participating in bigger projects, increasing everyone's earnings by 200%."
        }
      ],
      plan14: [
        { title: "Executive Summary", text: "Creator network with feeds, storefronts, subs, workshops. Multi-stream creator economy." },
        { title: "Current Position", text: "Millions of contributors. Community features weak. No feed/follow mechanics." },
        { title: "Market View", text: "Competes with TikTok, Patreon, YouTube. Win with licensed, monetised creator economy." },
        { title: "Asset Model", text: "Creator storefront bundles, services, subscriptions, audience engagement." },
        { title: "Strategy by Horizon", text: "H1 storefronts + feeds. H2 subscriptions + workshops. H3 ads/sponsors." },
        { title: "Monetisation", text: "Creator subs ($5-$50/mo). Ads, sponsors, workshops." },
        { title: "Contributor Economics", text: "Revenue share on subs, ads, sponsorships, workshops." },
        { title: "Data & Trust", text: "Creator verification, moderation AI, DMCA compliance." },
        { title: "Go-to-Market", text: "Recruit top creators, social campaigns, influencer loops." },
        { title: "Flywheel", text: "Creators → bring audiences → fund creators → loyalty loop." },
        { title: "Technical Priorities", text: "Feed algorithms, payment infra, moderation AI." },
        { title: "Risks & Mitigations", text: "Dependency + moderation risk - mitigate with direct creator revenue streams." },
        { title: "AI Product Manager Role", text: "Balance creator + audience. Ship engagement tools." },
        { title: "Next Steps", text: "Launch creator beta. Build feed MVP. Test subscription." }
      ]
    },
    "Path 3 Vertical Expansion": {
      category: "Primary Focus",
      allocationPercent: "20%",
      chosen: false,
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
        },
        {
          title: "Future Case Study 3 — The Gaming Company: Mobile Game Developer in Seoul",
          situation: "Jin's mobile gaming startup needed consistent art styles, UI elements, and promotional materials for their RPG game targeting global markets.",
          problem: "Hiring dedicated artists for every game asset was financially prohibitive, but inconsistent art styles from different freelancers hurt their brand.",
          resolution: "Using Envato's Gaming Vertical Platform, Jin accesses a curated library of RPG-specific assets with consistent art styles, plus AI tools that adapt colors and themes to match his game's aesthetic. The platform provides game-ready sprites, UI kits, and marketing materials.",
          outcome: "Jin's game launches with AAA-quality visuals at indie budgets. The consistent art style helps build brand recognition, leading to 300% higher user retention and successful series expansion."
        },
        {
          title: "Future Case Study 4 — The Education Platform: Online Learning Startup",
          situation: "Dr. Amanda runs an online platform teaching programming to children. She needed engaging, age-appropriate visuals and interactive elements to make coding concepts accessible.",
          problem: "Educational content that was both technically accurate and engaging for kids required specialized knowledge that was expensive to source.",
          resolution: "Envato's Education Vertical provides programming-specific illustration kits, animated explanation templates, and interactive coding game assets. AI suggests age-appropriate visual metaphors for complex concepts.",
          outcome: "Student engagement increases 250%, course completion rates rise to 85%, and parents report children are excited about programming. The platform expands to serve 50,000 students globally."
        },
        {
          title: "Future Case Study 5 — The Manufacturing Company: Industrial Training Division",
          situation: "Sarah leads safety training for a global manufacturing company. She needed to create consistent training materials across 15 countries with different languages and safety regulations.",
          problem: "Creating localized safety training content that met regional compliance standards while maintaining visual consistency was complex and expensive.",
          resolution: "Envato's Industrial Training Vertical provides safety-specific illustration libraries, compliance-ready templates, and AI-powered localization that adapts content for regional safety standards while maintaining visual consistency.",
          outcome: "Training standardization across all facilities is achieved. Workplace incidents drop 40%, compliance audit scores improve, and training content creation costs decrease by 60%."
        }
      ],
      plan14: [
        { title: "Executive Summary", text: "Sector-specific platforms (Edu, Gaming, Retail, L&D)." },
        { title: "Current Position", text: "Broad reach across industries. No deep vertical platforms yet." },
        { title: "Market View", text: "Edu $300B+, Gaming $200B+, Retail spend huge. TAM is vast." },
        { title: "Asset Model", text: "Industry kits (courseware, Unreal packs, retail ad sets, training material)." },
        { title: "Strategy by Horizon", text: "H1 Edu/gaming pilots. H2 retail/L&D expansion. H3 multi-vertical platforms." },
        { title: "Monetisation", text: "Vertical licences ($50-$500/mo). Industry bundles." },
        { title: "Contributor Economics", text: "Higher rates for industry assets. Vertical-specific bonuses." },
        { title: "Data & Trust", text: "Industry compliance: education standards, age-appropriate content." },
        { title: "Go-to-Market", text: "Industry conferences, sector pilots, proof partnerships." },
        { title: "Flywheel", text: "Industry adoption → demand for kits → improved outcomes." },
        { title: "Technical Priorities", text: "Vertical APIs, compliance kits, domain-specific integrations." },
        { title: "Risks & Mitigations", text: "Incumbents - mitigate with vertical partnerships/pilots." },
        { title: "AI Product Manager Role", text: "Define vertical ontologies. Build industry APIs." },
        { title: "Next Steps", text: "Pick Education pilot. Build MVP. Recruit vertical creators." }
      ]
    },
    "Path 4 Platform Enabler": {
      category: "Strategic Support",
      allocationPercent: "5%",
      chosen: false,
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
        },
        {
          title: "Future Case Study 2 — The E-commerce Platform: Shopify Plugin Developer",
          situation: "Maria's team built Shopify plugins for small businesses, but users constantly requested help with product photography and marketing visuals.",
          problem: "Their technical expertise was in e-commerce functionality, not creative design, but visual content was essential for user success.",
          resolution: "Integrating Envato's API, Maria's plugins now auto-generate product photography templates, email headers, and social media assets directly within Shopify. The API provides industry-specific suggestions and brand consistency.",
          outcome: "Plugin adoption increases 300%, user satisfaction scores double, and Maria's team becomes the go-to solution for e-commerce businesses needing both functionality and design."
        },
        {
          title: "Future Case Study 3 — The AI Company: Document Generation Platform",
          situation: "Tom's startup automates legal document creation, but clients wanted professional-looking templates and branding options.",
          problem: "Legal accuracy was their strength, but document design and visual appeal were limiting client adoption.",
          resolution: "Using Envato's API, their platform automatically applies professional legal document templates, letterheads, and formatting while maintaining legal compliance. The API suggests templates based on document type and jurisdiction.",
          outcome: "Client onboarding accelerates 500%, document approval rates by end clients increase 80%, and the platform expands from legal firms to corporate legal departments."
        },
        {
          title: "Future Case Study 4 — The Marketing Agency: Automation Platform",
          situation: "Lisa's marketing agency served 200+ small businesses but couldn't scale creative asset production to match demand.",
          problem: "Each client needed custom branded materials, but hiring enough designers would eliminate profit margins.",
          resolution: "Envato's API integration enables automated brand asset generation for each client. The system ingests brand guidelines and automatically produces social media templates, email headers, and presentation formats.",
          outcome: "The agency serves 3x more clients with the same team, profit margins increase 150%, and client satisfaction improves due to faster turnaround times."
        },
        {
          title: "Future Case Study 5 — The Enterprise Software: CRM Platform",
          situation: "David's enterprise CRM needed to help sales teams create professional proposals and presentations quickly.",
          problem: "Sales teams spent too much time on formatting and design instead of selling, leading to lost opportunities and poor-looking proposals.",
          resolution: "Integrating Envato's API, the CRM auto-generates professional proposal templates, case study layouts, and presentation designs based on industry and deal size. Everything maintains brand consistency.",
          outcome: "Sales cycle time decreases 30%, proposal win rates increase 45%, and sales teams can focus on relationship building rather than document formatting."
        }
      ],
      plan14: [
        { title: "Executive Summary", text: "API-first creative backend for SaaS and AI ecosystems." },
        { title: "Current Position", text: "Plugins/APIs exist, but not unified developer platform. Limited enterprise SDKs." },
        { title: "Market View", text: "Developer platform TAM massive. API economy booming. SaaS needs creative APIs." },
        { title: "Asset Model", text: "API access, usage credits, workflow connectors, enterprise SDKs." },
        { title: "Strategy by Horizon", text: "H1 core APIs. H2 developer ecosystem. H3 white-label creative infrastructure." },
        { title: "Monetisation", text: "API call revenue. Developer seats. Enterprise SaaS contracts." },
        { title: "Contributor Economics", text: "API usage royalties. Developer marketplace rev share." },
        { title: "Data & Trust", text: "API authentication, SLA-backed metrics, usage analytics." },
        { title: "Go-to-Market", text: "Dev events, API docs, SaaS partnerships." },
        { title: "Flywheel", text: "More devs → more integrations → more contributors." },
        { title: "Technical Priorities", text: "API infra, dev tools, doc platform." },
        { title: "Risks & Mitigations", text: "Partner dependency → mitigate with multi-cloud + open APIs." },
        { title: "AI Product Manager Role", text: "Architect Creative API Suite. Balance dev + contributors." },
        { title: "Next Steps", text: "Launch API beta. Publish docs. Recruit lighthouse devs." }
      ]
    },
    "Path 5 Radical Play": {
      category: "Future Optionality",
      allocationPercent: "10%",
      chosen: false,
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
        },
        {
          title: "Future Case Study 2 — The VR Developer: Immersive Experience Creator",
          situation: "Elena develops VR training experiences for companies but struggled to create realistic 3D environments quickly enough to meet client demands.",
          problem: "3D asset creation and environment building required weeks of work for each project, limiting her ability to take on multiple clients.",
          resolution: "Using Envato's AI 3D World Generator, Elena describes the training scenario ('factory floor with safety hazards') and the AI creates photorealistic 3D environments with interactive elements. She can modify and customize these environments in real-time.",
          outcome: "Elena's project delivery time reduces from weeks to days. She can serve 5x more clients and her VR training experiences achieve 90% knowledge retention rates due to higher realism."
        },
        {
          title: "Future Case Study 3 — The Film Director: Independent Filmmaker",
          situation: "Carlos makes independent films but needed high-quality visual effects and post-production work that exceeded his budget.",
          problem: "Professional VFX and post-production costs were $50,000+ per project, making independent filmmaking financially impossible.",
          resolution: "Envato's AI Film Assistant analyzes his raw footage and automatically applies appropriate visual effects, color grading, and post-production enhancements. The AI learns from his creative preferences and suggests improvements.",
          outcome: "Carlos produces festival-quality films for under $5,000. His latest film wins three independent film awards and gets distributed globally, launching his professional career."
        },
        {
          title: "Future Case Study 4 — The Brand Designer: AI-Augmented Creative Agency",
          situation: "Sophie runs a boutique branding agency but clients increasingly expected AI-enhanced creativity and faster concept iterations.",
          problem: "Traditional design processes couldn't compete with AI-augmented agencies in speed or creative breadth, risking client losses.",
          resolution: "Integrating Envato's Creative AI Suite, Sophie's agency offers 'AI-Augmented Branding' - where AI generates hundreds of concept variations while she provides creative direction and refinement. The AI learns her aesthetic preferences and brand strategy insights.",
          outcome: "Sophie's agency becomes known for impossible creative breadth and speed. Client budgets increase 200% as they value the AI-human creative partnership, and Sophie wins pitches against much larger agencies."
        },
        {
          title: "Future Case Study 5 — The Music Producer: AI Collaborative Artist",
          situation: "Jake produces electronic music but wanted to explore musical styles outside his expertise while maintaining his unique creative voice.",
          problem: "Learning new instruments and music theory would take years, limiting his ability to experiment with different genres.",
          resolution: "Using Envato's AI Music Collaborator, Jake describes musical concepts and emotions, and the AI generates musical arrangements in various styles. Jake then guides, refines, and adds his creative elements to create unique hybrid compositions.",
          outcome: "Jake releases genre-crossing albums that establish him as an innovative artist. His AI-collaborated track reaches #1 on electronic charts and leads to commissioned work scoring films and games."
        }
      ],
      plan14: [
        { title: "Executive Summary", text: "Immersive and agentic AI substrate (3D/VR/AR content economy)." },
        { title: "Current Position", text: "AI Gen tools exist, but no immersive/agentic layer." },
        { title: "Market View", text: "AI/immersive content exploding. First-mover optionality, volatile." },
        { title: "Asset Model", text: "Agentic workflows, AI-generated worlds, creative copilots." },
        { title: "Strategy by Horizon", text: "H1 AI Gen pilots. H2 agentic workflows. H3 immersive creative OS." },
        { title: "Monetisation", text: "AI credits, premium tiers, immersive licensing." },
        { title: "Contributor Economics", text: "AI training data licensing. Curation bonuses. Immersive royalties." },
        { title: "Data & Trust", text: "AI transparency, attribution, provenance on synthetic content." },
        { title: "Go-to-Market", text: "AI creator betas, AI/tech conferences, vendor partners." },
        { title: "Flywheel", text: "Better AI → attracts creators → improves AI → cycle." },
        { title: "Technical Priorities", text: "AI infra, model routing, real-time agent frameworks." },
        { title: "Risks & Mitigations", text: "Adoption uncertainty → mitigate with small R&D pilots." },
        { title: "AI Product Manager Role", text: "Prototype agentic pipelines. Balance innovation vs risk." },
        { title: "Next Steps", text: "Stand up AI research team. Partner with vendors. Launch beta." }
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
          {/* Hero Section - Moved to Top */}
          <section id="quick" className="hero">
            <h1 className="hero-title">Envato: 5 Strategic Growth Paths</h1>
            <p className="hero-subtitle">
              Exploring strategic directions for Envato's future growth within the Shutterstock ecosystem. 
              Each path represents a different approach to leveraging AI, community, and creative tools.
            </p>
            <div className="hero-links">
              <a href="/microsites/envato/summary" className="hero-link">📋 Envato Context & Summary</a>
              <a href="/microsites/envato/assets" className="hero-link">🔄 Asset Redefinition Guide</a>
              <a href="#comparison-table" className="hero-link">📊 Compare all paths</a>
              <a href="#framework" className="hero-link">🎯 Decision framework</a>
            </div>
          </section>

          {/* Strategic Path Diagrams */}
          <section className="section" style={{ marginBottom: '48px' }}>
            <div className="card">
              <PathDiagrams />
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
                  className={`flip-card ${flipped[`path${index + 1}`] ? 'flipped' : ''} ${data.chosen ? 'ring-2 ring-primary/20' : ''}`}
                  onMouseLeave={() => unflip(`path${index + 1}`)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-face flip-front">
                      <div>
                        <div className="card-subtitle">
                          {data.category} · {data.allocationPercent}
                          {data.chosen && <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary">Chosen</Badge>}
                        </div>
                        <h3 className={`card-title ${data.chosen ? 'text-primary' : ''}`}>{pathName}</h3>
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
            <h2 className="section-title">future case studies - all paths</h2>
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
                            <th>Envato Input</th>
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
                                     placeholder="Your notes on winning strategies…"
                                     style={{minHeight: '80px'}}
                                   />
                                 </td>
                               </tr>
                               <tr style={{background: '#f8fafc', fontSize: '12px'}}>
                                 <td colSpan={6} style={{padding: '8px 16px'}}>
                                   <details>
                                     <summary style={{cursor: 'pointer', fontWeight: '600', color: '#3b82f6'}}>Show Details: Agentic AI & Automation Breakdown</summary>
                                     <div style={{marginTop: '12px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', fontSize: '12px'}}>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#1e40af', marginBottom: '4px'}}>Agentic AI Leverage</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>Compliance automation agents</li>
                                           <li>Asset quality verification</li>
                                           <li>Enterprise workflow optimization</li>
                                           <li>Legal metadata generation</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#1e40af', marginBottom: '4px'}}>Agentic AI Leverage</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>Creator-audience matching</li>
                                           <li>Content curation agents</li>
                                           <li>Engagement optimization</li>
                                           <li>Revenue optimization AI</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#1e40af', marginBottom: '4px'}}>Agentic AI Leverage</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>Industry-specific AI agents</li>
                                           <li>Vertical workflow automation</li>
                                           <li>Domain expertise bots</li>
                                           <li>Compliance verification</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#1e40af', marginBottom: '4px'}}>Agentic AI Leverage</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>API orchestration agents</li>
                                           <li>Integration automation</li>
                                           <li>Developer workflow bots</li>
                                           <li>Platform sync agents</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#1e40af', marginBottom: '4px'}}>Agentic AI Leverage</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>AI-first content generation</li>
                                           <li>Professional tool agents</li>
                                           <li>Creative process automation</li>
                                           <li>Quality assurance bots</li>
                                         </ul>
                                       </div>
                                     </div>
                                     <div style={{marginTop: '12px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', fontSize: '12px'}}>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#dc2626', marginBottom: '4px'}}>Automation Candidates</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>Legal approval workflows</li>
                                           <li>Asset tagging & metadata</li>
                                           <li>Quality control checks</li>
                                           <li>Enterprise onboarding</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#dc2626', marginBottom: '4px'}}>Automation Candidates</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>Creator payment processing</li>
                                           <li>Community moderation</li>
                                           <li>Subscriber management</li>
                                           <li>Content recommendation</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#dc2626', marginBottom: '4px'}}>Automation Candidates</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>Industry compliance checks</li>
                                           <li>Vertical asset curation</li>
                                           <li>Educational content paths</li>
                                           <li>Professional certification</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#dc2626', marginBottom: '4px'}}>Automation Candidates</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>API documentation</li>
                                           <li>Integration testing</li>
                                           <li>Developer onboarding</li>
                                           <li>Platform monitoring</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#dc2626', marginBottom: '4px'}}>Automation Candidates</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>Creative brief generation</li>
                                           <li>Asset rendering pipelines</li>
                                           <li>Professional tool sync</li>
                                           <li>Client approval workflows</li>
                                         </ul>
                                       </div>
                                     </div>
                                     <div style={{marginTop: '12px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', fontSize: '12px'}}>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#16a34a', marginBottom: '4px'}}>Augmented Workflows</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>AI-enhanced compliance dashboards</li>
                                           <li>Predictive workflow optimization</li>
                                           <li>Smart asset lifecycle management</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#16a34a', marginBottom: '4px'}}>Augmented Workflows</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>AI-powered creator insights</li>
                                           <li>Intelligent audience growth</li>
                                           <li>Revenue optimization recommendations</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#16a34a', marginBottom: '4px'}}>Augmented Workflows</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>Industry-aware asset suggestions</li>
                                           <li>Vertical performance analytics</li>
                                           <li>Smart educational pathways</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#16a34a', marginBottom: '4px'}}>Augmented Workflows</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>Intelligent API orchestration</li>
                                           <li>Smart developer tooling</li>
                                           <li>Automated integration testing</li>
                                         </ul>
                                       </div>
                                       <div>
                                         <div style={{fontWeight: '600', color: '#16a34a', marginBottom: '4px'}}>Augmented Workflows</div>
                                         <ul style={{margin: 0, paddingLeft: '12px', lineHeight: '1.4'}}>
                                           <li>AI-driven creative direction</li>
                                           <li>Professional tool integration</li>
                                           <li>Smart creative feedback loops</li>
                                         </ul>
                                       </div>
                                     </div>
                                   </details>
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

          {/* B Corp Decision Framework */}
          <section id="framework" className="section">
            <div className="card">
              <BcorpDecisionFramework />
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
