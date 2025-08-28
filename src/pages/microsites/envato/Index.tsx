import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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

  // Debounce timer for DB sync
  const [debounceTimers, setDebounceTimers] = useState<Record<string, NodeJS.Timeout>>({});

  // State for flip cards
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  
  const flip = (key: string) => setFlipped(p => ({ ...p, [key]: !p[key] }));
  const unflip = (key: string) => setFlipped(p => ({ ...p, [key]: false }));

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
      plan14: [
        { title: "Executive summary", text: "API first creative backend for SaaS and AI tools." },
        { title: "Current position", text: "Few integrations. No API first posture." },
        { title: "Market view", text: "SaaS and AI need content APIs. Usage revenue at scale." },
        { title: "Asset model", text: "APIs for search and recommend and license verify and provenance." },
        { title: "Strategy by horizon", text: "H1 core APIs. H2 workflow APIs. H3 default creative backend." },
        { title: "Monetisation", text: "Usage based pricing. Enterprise contracts. Developer fees." },
        { title: "Contributor economics", text: "Revenue share on API usage. Premium for API ready assets." },
        { title: "Data and trust", text: "API rate limits. Usage analytics. Enterprise SLAs." },
        { title: "Go to market", text: "Developer conferences. API partnerships. Technical content." },
        { title: "Flywheel", text: "Developers build demand. Usage drives revenue." },
        { title: "Technical priorities", text: "API infrastructure. Rate limiting. Usage tracking." },
        { title: "Risks and mitigations", text: "Platform competition. Focus on creative specialization." },
        { title: "AI product manager role", text: "Balance developer and business needs. Ship platform features." },
        { title: "Next steps", text: "Launch API beta. Build developer portal. Create usage pricing." }
      ]
    },
    "Path 5 Radical Play": {
      category: "Satellite",
      growthThesis: "Expanding into adjacent creative verticals can capture new market segments. AI can accelerate this expansion by automating content creation in new domains.",
      productAIStrategy: "Leverage AI to quickly establish presence in new creative verticals through automated content generation, market analysis, and rapid prototyping.",
      actions: "• Research new verticals • Build content generation AI • Create market analysis tools • Develop rapid prototyping • Test market validation",
      plan14: [
        { title: "Executive summary", text: "Immersive and agentic AI content substrate." },
        { title: "Current position", text: "2D focus. No VR or immersive pipeline." },
        { title: "Market view", text: "Immersive economies 500B plus by 2030." },
        { title: "Asset model", text: "3D kits and world packs and avatar and agent bundles." },
        { title: "Strategy by horizon", text: "H1 3D kits. H2 world builder and agent packs. H3 synthetic substrate." },
        { title: "Monetisation", text: "Premium immersive assets. World licences. Agent subscriptions." },
        { title: "Contributor economics", text: "High rates for 3D content. World building bonuses." },
        { title: "Data and trust", text: "3D asset verification. World ownership. Agent behavior controls." },
        { title: "Go to market", text: "VR conferences. Gaming partnerships. Metaverse marketing." },
        { title: "Flywheel", text: "Immersive demand drives content. Content enables experiences." },
        { title: "Technical priorities", text: "3D pipelines. World engines. Agent frameworks." },
        { title: "Risks and mitigations", text: "Technology maturity. Start with simple 3D assets." },
        { title: "AI product manager role", text: "Understand immersive needs. Ship experimental features." },
        { title: "Next steps", text: "Build 3D prototype. Partner with VR studio. Test market demand." }
      ]
    }
  };

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo({ top: 0 });
    
    const initializeNotes = async () => {
      try {
        // Check authentication
        const { data: { session } } = await supabase.auth.getSession();
        const authenticated = !!session?.user;
        setIsAuthenticated(authenticated);

        if (authenticated) {
          // Load from database
          await loadNotesFromDB();
        } else {
          // Load from localStorage as fallback
          loadNotesFromLocalStorage();
        }
      } catch (error) {
        console.error('Error initializing notes:', error);
        loadNotesFromLocalStorage();
      } finally {
        setIsLoading(false);
      }
    };

    initializeNotes();
  }, []);

  const loadNotesFromDB = async () => {
    try {
      const { data, error } = await supabase
        .from('envato_strategy_notes')
        .select('*');

      if (error) throw error;

      const notesMap: Record<string, string> = {};
      data?.forEach((note: Note) => {
        notesMap[note.note_key] = note.content;
      });
      setNotes(notesMap);
      
      // Sync DB notes to localStorage for offline access
      Object.entries(notesMap).forEach(([key, value]) => {
        localStorage.setItem(`envato_strategy_note_${key}`, value);
      });
    } catch (error) {
      console.error('Error loading notes from DB:', error);
      loadNotesFromLocalStorage();
    }
  };

  const loadNotesFromLocalStorage = () => {
    const localNotes: Record<string, string> = {};
    const PREFIX = "envato_strategy_note_";
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(PREFIX)) {
        const noteKey = key.replace(PREFIX, '');
        localNotes[noteKey] = localStorage.getItem(key) || '';
      }
    }
    setNotes(localNotes);
  };

  const saveNoteToDB = async (noteKey: string, content: string) => {
    if (!isAuthenticated) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { error } = await supabase
        .from('envato_strategy_notes')
        .upsert({
          note_key: noteKey,
          content: content,
          user_id: user.id
        });

      if (error) throw error;
      
      // Show subtle success indicator
      toast({
        title: "Saved",
        description: "Notes synced to cloud",
        duration: 2000,
      });
    } catch (error) {
      console.error('Error saving note to DB:', error);
    }
  };

  const handleNoteChange = (noteKey: string, content: string) => {
    // Always save to localStorage immediately (offline-first)
    localStorage.setItem(`envato_strategy_note_${noteKey}`, content);
    setNotes(prev => ({ ...prev, [noteKey]: content }));

    // Clear existing debounce timer for this note
    if (debounceTimers[noteKey]) {
      clearTimeout(debounceTimers[noteKey]);
    }

    // Debounce DB save
    if (isAuthenticated) {
      const timer = setTimeout(() => {
        saveNoteToDB(noteKey, content);
      }, 1000); // 1 second debounce

      setDebounceTimers(prev => ({ ...prev, [noteKey]: timer }));
    }
  };

  const saveAll = async () => {
    if (!isAuthenticated) {
      // Just save to localStorage for non-authenticated users
      document.querySelectorAll('.note').forEach((area: any) => {
        const key = area.dataset.key;
        localStorage.setItem(`envato_strategy_note_${key}`, area.value);
      });
      toast({
        title: "Saved locally",
        description: "Notes saved on this device",
      });
      return;
    }

    // Save all notes to database for authenticated users
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const promises: Promise<any>[] = [];
      document.querySelectorAll('.note').forEach((area: any) => {
        const key = area.dataset.key;
        const content = area.value;
        localStorage.setItem(`envato_strategy_note_${key}`, content);
        
        const upsertPromise = supabase.from('envato_strategy_notes').upsert({
          note_key: key,
          content: content,
          user_id: user.id
        });
        promises.push(Promise.resolve(upsertPromise));
      });

      await Promise.all(promises);
      toast({
        title: "All notes saved",
        description: "Successfully synced to cloud",
      });
    } catch (error) {
      console.error('Error saving all notes:', error);
      toast({
        title: "Error saving",
        description: "Could not sync to cloud, but saved locally",
        variant: "destructive",
      });
    }
  };

  const clearAll = async () => {
    if (!confirm("Clear all notes on this device and cloud?")) return;

    // Clear localStorage
    document.querySelectorAll('.note').forEach((area: any) => {
      const key = area.dataset.key;
      localStorage.removeItem(`envato_strategy_note_${key}`);
      area.value = '';
    });

    // Clear database if authenticated
    if (isAuthenticated) {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { error } = await supabase
          .from('envato_strategy_notes')
          .delete()
          .eq('user_id', user.id);

        if (error) throw error;
      } catch (error) {
        console.error('Error clearing notes from DB:', error);
      }
    }

    setNotes({});
    toast({
      title: "Notes cleared",
      description: "All notes have been removed",
    });
  };

  useEffect(() => {
    const loadNotes = () => {
      document.querySelectorAll('.note').forEach((area: any) => {
        const key = area.dataset.key;
        const value = notes[key] || localStorage.getItem(`envato_strategy_note_${key}`) || '';
        area.value = value;
        area.addEventListener('input', () => handleNoteChange(key, area.value));
      });
    };

    document.getElementById('saveAll')?.addEventListener('click', saveAll);
    document.getElementById('clearAll')?.addEventListener('click', clearAll);
    
    if (!isLoading) {
      loadNotes();
    }

    return () => {
      document.getElementById('saveAll')?.removeEventListener('click', saveAll);
      document.getElementById('clearAll')?.removeEventListener('click', clearAll);
      // Clear debounce timers
      Object.values(debounceTimers).forEach(timer => clearTimeout(timer));
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
          border-radius: 14px;
          border: 1px solid var(--line);
          overflow: hidden;
        }
        .envato-page .hero-image img {
          width: 100%;
          height: auto;
          max-height: 520px;
          object-fit: contain;
          object-position: center;
        }
        .envato-page .kicker {
          color: var(--muted);
          font-weight: 600;
          letter-spacing: .02em;
        }
        .envato-page h1 {
          margin: 0;
          font-size: 32px;
          line-height: 1.1;
        }
        .envato-page .sub {
          color: var(--muted);
        }
        .envato-page .grid-2 {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 20px;
        }
        @media (max-width: 980px) {
          .envato-page .grid-2 {
            grid-template-columns: 1fr;
          }
        }
        .envato-page .card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 16px;
        }
        .envato-page .section {
          margin-bottom: 32px;
        }
        .envato-page .section-title {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .envato-page .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 16px;
          margin-top: 16px;
        }
        .envato-page .meta {
          color: var(--muted);
          font-size: 14px;
          margin: 8px 0;
        }
        .envato-page .table-wrap {
          overflow: auto;
          border: 1px solid var(--line);
          border-radius: 8px;
          margin: 16px 0;
        }
        .envato-page table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
          min-width: 800px;
        }
        .envato-page th {
          background: var(--card);
          border-bottom: 1px solid var(--line);
          padding: 12px;
          text-align: left;
          font-weight: 600;
        }
        .envato-page td {
          border-bottom: 1px solid var(--line);
          padding: 12px;
          vertical-align: top;
        }
        .envato-page tr:last-child td {
          border-bottom: none;
        }
        .envato-page .col-path {
          width: 18%;
        }
        .envato-page .col-notes {
          width: 28%;
        }
        .envato-page .note {
          width: 100%;
          min-height: 70px;
          border: 1px solid var(--line);
          border-radius: 10px;
          padding: 10px;
          font-size: 14px;
          resize: vertical;
          background: #fff;
        }
        .envato-page .tag {
          display: inline-block;
          padding: 4px 8px;
          border: 1px solid var(--line);
          border-radius: 999px;
          font-size: 11px;
          margin-right: 6px;
          margin-bottom: 6px;
        }
        .envato-page .tag.core {
          border-color: var(--envato);
          color: var(--envato-dark);
        }
        .envato-page .tag.secondary {
          border-color: var(--blue);
          color: var(--blue);
        }
        .envato-page .tag.satellite {
          border-color: var(--yellow);
          color: #8a6b00;
        }
        .envato-page .tag.moonshot {
          border-color: var(--red);
          color: var(--red);
        }
        .envato-page .flip-card {
          perspective: 1000px;
        }
        .envato-page .flip-inner {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.6s;
          min-height: 200px;
        }
        .envato-page .flip-card.is-flipped .flip-inner {
          transform: rotateY(180deg);
        }
        .envato-page .flip-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          padding: 16px;
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 14px;
        }
        .envato-page .flip-back {
          transform: rotateY(180deg);
          overflow: auto;
          pointer-events: none;
        }
        .envato-page .flip-card.is-flipped .flip-back {
          pointer-events: auto;
        }
        .envato-page .flip-card.is-flipped .flip-front {
          pointer-events: none;
        }
        .envato-page .foot-cta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin: 24px 0 8px;
        }
        .envato-page .muted {
          color: var(--muted);
        }
      `}</style>

      <div className="envato-page min-h-screen">
        <header className="wrap hero">
          <div className="kicker">Envato strategy options</div>
          <h1>Core, satellite, moonshot</h1>
          <p className="sub">Five paths. Clear benefits. Click to go deeper. Add your notes.</p>
          <div className="mb-4">
            <a 
              href="/microsites/envato/summary" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              📋 Context overview: Where Envato is now →
            </a>
          </div>
          
          {/* Hero Image */}
          <div className="hero-image">
            <img 
              src="https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/exec-leadership-team-images-except-trojan-oz/Screenshot%202025-08-28%20at%203.38.52%20pm.png"
              alt="AI Product Manager Strategy Visualization"
              loading="lazy"
            />
          </div>

          {/* Move CTA above quick cards */}
          <div className="mb-4">
            <a 
              href="/microsites/envato/orchestrator" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              🎯 View The Orchestrators Profile
            </a>
            <p className="text-xs text-muted-foreground mt-1">
              Deep dive into the modern AI product manager skillset and approach
            </p>
          </div>
        </header>

        <main className="wrap">
          <section id="quick">
            <div className="card">
              <h2 className="section-title">Quick view cards</h2>
              <p className="text-sm text-muted mb-4">
                These cards represent five strategic growth paths for Envato. Each path includes the growth thesis, product AI strategy, and key actions. 
                Flip a card to see the 14-point execution plan for that path, or open the full view for comprehensive context.
              </p>
              
              <div className="cards">
                {/* Path 1 Creative Infrastructure */}
                <div className={`flip-card ${flipped['path1'] ? 'is-flipped' : ''}`}>
                  <div className="flip-inner">
                    <div className="flip-face flip-front">
                      <h3>Path 1 Creative Infrastructure</h3>
                      <div className="meta">Enterprise workflows and compliance</div>
                      <p className="meta">Indicative 100–200M ARR in 3 to 5 years</p>
                       <span className="tag core">Low risk</span>
                       <span className="tag">ARR focus</span>
                       <div className="mt-2 flex flex-wrap gap-1">
                         {competencyBadges["Core - Creator Tools"]?.map((badge) => (
                           <Badge key={badge} variant="secondary" className="text-xs">
                             {badge}
                           </Badge>
                         ))}
                       </div>
                       <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip('path1')} variant="outline" size="sm">
                          Flip for steps
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath("Path 1 Creative Infrastructure")}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">14-Point Execution Plan</h4>
                      <div className="space-y-2">
                        {pathData["Path 1 Creative Infrastructure"].plan14.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                              {idx + 1}
                            </span>
                            <div>
                              <div className="font-semibold text-sm">{item.title}</div>
                              <div className="text-xs text-muted-foreground">{item.text}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" onClick={() => flip('path1')}>
                          Back to front
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath("Path 1 Creative Infrastructure")}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                 {/* Path 2 Creative Network */}
                <div className={`flip-card ${flipped['path2'] ? 'is-flipped' : ''}`} style={{background: 'linear-gradient(135deg, #ecfdf5, #f0fdf4)', border: '2px solid #10b981', position: 'relative'}}>
                  <div className="flip-inner">
                    <div className="flip-face flip-front">
                      <div style={{position: 'absolute', top: '8px', right: '8px', background: '#10b981', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '10px', fontWeight: 'bold'}}>Chosen now</div>
                      <h3>Path 2 Creative Network</h3>
                      <div className="meta">Community, feeds, creator subs</div>
                      <p className="meta">Indicative 500M plus GMV potential</p>
                       <span className="tag satellite">Higher risk</span>
                       <span className="tag">Ads and subs</span>
                       <div className="mt-2 flex flex-wrap gap-1">
                         {competencyBadges["Secondary - Community"]?.map((badge) => (
                           <Badge key={badge} variant="secondary" className="text-xs">
                             {badge}
                           </Badge>
                         ))}
                       </div>
                       <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip('path2')} variant="outline" size="sm">
                          Flip for steps
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath("Path 2 Creative Network")}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">14-Point Execution Plan</h4>
                      <div className="space-y-2">
                        {pathData["Path 2 Creative Network"].plan14.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                              {idx + 1}
                            </span>
                            <div>
                              <div className="font-semibold text-sm">{item.title}</div>
                              <div className="text-xs text-muted-foreground">{item.text}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" onClick={() => flip('path2')}>
                          Back to front
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath("Path 2 Creative Network")}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Path 3 Vertical Expansion */}
                <div className={`flip-card ${flipped['path3'] ? 'is-flipped' : ''}`}>
                  <div className="flip-inner">
                    <div className="flip-face flip-front">
                      <h3>Path 3 Vertical Expansion</h3>
                      <div className="meta">Industry solutions like Edu and Gaming</div>
                      <p className="meta">Indicative 50–100M ARR per vertical</p>
                       <span className="tag satellite">Higher risk</span>
                       <span className="tag">Sector SaaS</span>
                       <div className="mt-2 flex flex-wrap gap-1">
                         {competencyBadges["Satellite - New Verticals"]?.map((badge) => (
                           <Badge key={badge} variant="secondary" className="text-xs">
                             {badge}
                           </Badge>
                         ))}
                       </div>
                       <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip('path3')} variant="outline" size="sm">
                          Flip for steps
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath("Path 3 Vertical Expansion")}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">14-Point Execution Plan</h4>
                      <div className="space-y-2">
                        {pathData["Path 3 Vertical Expansion"].plan14.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                              {idx + 1}
                            </span>
                            <div>
                              <div className="font-semibold text-sm">{item.title}</div>
                              <div className="text-xs text-muted-foreground">{item.text}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" onClick={() => flip('path3')}>
                          Back to front
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath("Path 3 Vertical Expansion")}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Path 4 Platform Enabler */}
                <div className={`flip-card ${flipped['path4'] ? 'is-flipped' : ''}`}>
                  <div className="flip-inner">
                    <div className="flip-face flip-front">
                      <h3>Path 4 Platform Enabler</h3>
                      <div className="meta">API backend for SaaS and AI tools</div>
                      <p className="meta">Indicative 200–500M ARR opportunity</p>
                       <span className="tag satellite">Higher risk</span>
                       <span className="tag">API revenue</span>
                       <div className="mt-2 flex flex-wrap gap-1">
                         {competencyBadges["Secondary - Community"]?.map((badge) => (
                           <Badge key={badge} variant="secondary" className="text-xs">
                             {badge}
                           </Badge>
                         ))}
                       </div>
                       <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip('path4')} variant="outline" size="sm">
                          Flip for steps
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath("Path 4 Platform Enabler")}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">14-Point Execution Plan</h4>
                      <div className="space-y-2">
                        {pathData["Path 4 Platform Enabler"].plan14.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                              {idx + 1}
                            </span>
                            <div>
                              <div className="font-semibold text-sm">{item.title}</div>
                              <div className="text-xs text-muted-foreground">{item.text}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" onClick={() => flip('path4')}>
                          Back to front
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath("Path 4 Platform Enabler")}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Path 5 Radical Play */}
                <div className={`flip-card ${flipped['path5'] ? 'is-flipped' : ''}`}>
                  <div className="flip-inner">
                    <div className="flip-face flip-front">
                      <h3>Path 5 Radical Play</h3>
                      <div className="meta">Immersive and synthetic content</div>
                      <p className="meta">Moonshot with massive upside potential</p>
                       <span className="tag moonshot">Highest risk</span>
                       <span className="tag">Future bet</span>
                       <div className="mt-2 flex flex-wrap gap-1">
                         {competencyBadges["Satellite - New Verticals"]?.map((badge) => (
                           <Badge key={badge} variant="secondary" className="text-xs">
                             {badge}
                           </Badge>
                         ))}
                       </div>
                       <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip('path5')} variant="outline" size="sm">
                          Flip for steps
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath("Path 5 Radical Play")}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">14-Point Execution Plan</h4>
                      <div className="space-y-2">
                        {pathData["Path 5 Radical Play"].plan14.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0">
                              {idx + 1}
                            </span>
                            <div>
                              <div className="font-semibold text-sm">{item.title}</div>
                              <div className="text-xs text-muted-foreground">{item.text}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" onClick={() => flip('path5')}>
                          Back to front
                        </Button>
                        <Button 
                          size="sm" 
                          style={{background: 'var(--envato)', color: '#fff'}}
                          onClick={() => setFullViewPath("Path 5 Radical Play")}
                        >
                          Full view
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="table" className="section">
            <h2 className="section-title">Interactive comparison table</h2>

            <details open>
              <summary>1 Executive summary</summary>
              <div className="acc-body">
                <p className="dim-help">High level purpose of each path. Add your notes on the right.</p>
                <div className="table-wrap">
                  <table>
                        <thead>
                          <tr>
                            <th className="col-path" style={{padding: '12px', fontSize: '14px'}}>Path 1</th>
                            <th className="col-path" style={{padding: '12px', fontSize: '14px', background: '#ecfdf5', borderLeft: '2px solid #10b981', borderRight: '2px solid #10b981'}}>
                              Path 2 <span style={{background: '#10b981', color: 'white', padding: '2px 6px', borderRadius: '8px', fontSize: '10px', marginLeft: '4px'}}>Chosen</span>
                            </th>
                            <th className="col-path" style={{padding: '12px', fontSize: '14px'}}>Path 3</th>
                            <th className="col-path" style={{padding: '12px', fontSize: '14px'}}>Path 4</th>
                            <th className="col-path" style={{padding: '12px', fontSize: '14px'}}>Path 5</th>
                            <th className="col-notes" style={{padding: '12px', fontSize: '14px'}}>Envato input</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{padding: '16px', fontSize: '14px', lineHeight: '1.6'}}>Trusted AI workflows and compliance. Enterprise ARR engine.</td>
                            <td style={{padding: '16px', fontSize: '14px', lineHeight: '1.6', background: '#ecfdf5', borderLeft: '2px solid #10b981', borderRight: '2px solid #10b981', fontWeight: '500'}}>Creator network with feeds and subs. Multi stream income.</td>
                            <td style={{padding: '16px', fontSize: '14px', lineHeight: '1.6'}}>Sector specific platforms like Edu and Gaming and Retail.</td>
                            <td style={{padding: '16px', fontSize: '14px', lineHeight: '1.6'}}>API first creative backend for SaaS and AI tools.</td>
                            <td style={{padding: '16px', fontSize: '14px', lineHeight: '1.6'}}>Immersive and agentic AI content substrate.</td>
                            <td style={{padding: '16px'}}><textarea className="note" data-key="d1" style={{minHeight: '80px', padding: '12px', fontSize: '14px', lineHeight: '1.6'}}></textarea></td>
                          </tr>
                        </tbody>
                  </table>
                </div>
              </div>
            </details>

            {/* Continue with other 13 sections */}
            {Array.from({ length: 13 }, (_, i) => {
              const sectionNumber = i + 2;
              const sectionTitle = fourteenPointFramework[sectionNumber - 1];
              return (
                <details key={sectionNumber}>
                  <summary>{sectionNumber} {sectionTitle}</summary>
                  <div className="acc-body">
                    <div className="table-wrap">
                      <table>
                        <thead>
                          <tr>
                            <th style={{padding: '12px', fontSize: '14px'}}>Path 1</th>
                            <th style={{padding: '12px', fontSize: '14px', background: '#ecfdf5', borderLeft: '2px solid #10b981', borderRight: '2px solid #10b981'}}>
                              Path 2 <span style={{background: '#10b981', color: 'white', padding: '2px 6px', borderRadius: '8px', fontSize: '10px', marginLeft: '4px'}}>Chosen</span>
                            </th>
                            <th style={{padding: '12px', fontSize: '14px'}}>Path 3</th>
                            <th style={{padding: '12px', fontSize: '14px'}}>Path 4</th>
                            <th style={{padding: '12px', fontSize: '14px'}}>Path 5</th>
                            <th style={{padding: '12px', fontSize: '14px'}}>Envato input</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{background: sectionNumber % 2 === 0 ? '#f8fafc' : 'transparent'}}>
                            <td style={{padding: '16px', fontSize: '14px', lineHeight: '1.6'}}>{pathData["Path 1 Creative Infrastructure"].plan14[sectionNumber - 1]?.text}</td>
                            <td style={{padding: '16px', fontSize: '14px', lineHeight: '1.6', background: '#ecfdf5', borderLeft: '2px solid #10b981', borderRight: '2px solid #10b981', fontWeight: '500'}}>{pathData["Path 2 Creative Network"].plan14[sectionNumber - 1]?.text}</td>
                            <td style={{padding: '16px', fontSize: '14px', lineHeight: '1.6'}}>{pathData["Path 3 Vertical Expansion"].plan14[sectionNumber - 1]?.text}</td>
                            <td style={{padding: '16px', fontSize: '14px', lineHeight: '1.6'}}>{pathData["Path 4 Platform Enabler"].plan14[sectionNumber - 1]?.text}</td>
                            <td style={{padding: '16px', fontSize: '14px', lineHeight: '1.6'}}>{pathData["Path 5 Radical Play"].plan14[sectionNumber - 1]?.text}</td>
                            <td style={{padding: '16px'}}><textarea className="note" data-key={`d${sectionNumber}`} style={{minHeight: '80px', padding: '12px', fontSize: '14px', lineHeight: '1.6'}}></textarea></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </details>
              );
            })}
          </section>

          <div className="foot-cta">
            <div>
              <button id="saveAll" className="px-4 py-2 bg-green-600 text-white rounded">Save All</button>
              <button id="clearAll" className="px-4 py-2 bg-red-600 text-white rounded ml-2">Clear All</button>
            </div>
            <div className="text-sm muted">
              {isAuthenticated ? 'Notes sync to cloud' : 'Login to sync notes to cloud'}
            </div>
          </div>
        </main>
      </div>

      {/* Full Path Modal */}
      {fullViewPath && (
        <FullPathModal
          isOpen={!!fullViewPath}
          onClose={() => setFullViewPath(null)}
          pathName={fullViewPath}
          pathData={{
            category: pathData[fullViewPath as keyof typeof pathData]?.category || "",
            growthThesis: pathData[fullViewPath as keyof typeof pathData]?.growthThesis || "",
            productAIStrategy: pathData[fullViewPath as keyof typeof pathData]?.productAIStrategy || "",
            actions: pathData[fullViewPath as keyof typeof pathData]?.actions || "",
            steps: [],
            plan14: pathData[fullViewPath as keyof typeof pathData]?.plan14 || []
          }}
        />
      )}
    </>
  );
};

export default EnvatoIndex;