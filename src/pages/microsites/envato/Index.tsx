
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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
  const { toast } = useToast();

  // Debounce timer for DB sync
  const [debounceTimers, setDebounceTimers] = useState<Record<string, NodeJS.Timeout>>({});

  // State for flip cards
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  
  const flip = (key: string) => setFlipped(p => ({ ...p, [key]: true }));
  const unflip = (key: string) => setFlipped(p => ({ ...p, [key]: false }));

  // Path data for detailed views
  const pathData = {
    "Core - Creator Tools": {
      category: "Core",
      growthThesis: "Envato's creator tools are the foundation of its ecosystem. By enhancing these with AI capabilities, we can dramatically improve creator productivity while maintaining quality standards.",
      productAIStrategy: "Integrate AI-powered templates, automated design suggestions, smart asset recommendations, and intelligent quality checking to streamline the creative process.",
      actions: "• Implement AI template generation • Add smart asset tagging • Deploy automated quality checks • Create intelligent search • Develop personalized recommendations",
      steps: [
        { phase: '0–30 days', items: [
          'Define enterprise design/brand compliance rules',
          'Ship AI-assisted template suggestions (beta) in the editor',
          'Pilot intelligent asset tagging on a subset of the library',
          'Instrument metrics: time-to-complete, rejection rate, NPS'
        ]},
        { phase: '31–60 days', items: [
          'Roll out automated quality checks (moderation + brand rules)',
          'Add semantic search with usage context',
          'Launch personalized creator recommendations',
          'Begin enterprise early-adopter program (5–10 customers)'
        ]},
        { phase: '61–90 days', items: [
          'Scale to additional enterprise tenants with SSO + audit',
          'Expand template generation coverage and languages',
          'Ship workflow analytics dashboard',
          'Publish case studies and quantified ROI'
        ]}
      ]
    },
    "Core - Enterprise": {
      category: "Core", 
      growthThesis: "Enterprise clients need scalable, compliant, and integrated creative solutions. AI can automate workflow management and ensure brand consistency across large organizations.",
      productAIStrategy: "Build enterprise-grade AI tools for brand management, automated compliance checking, workflow optimization, and creative asset governance.",
      actions: "• Develop brand consistency AI • Create compliance automation • Build workflow optimization • Implement asset governance • Add enterprise analytics",
      steps: [
        { phase: '0–30 days', items: [
          'Community matching algorithm (creator skills + project needs)',
          'Ship social feeds with curated content discovery',
          'Implement creator verification and moderation system',
          'Launch creator subscription beta with select influencers'
        ]},
        { phase: '31–60 days', items: [
          'Scale creator subscription platform',
          'Add creator analytics dashboard and revenue insights',
          'Deploy AI-powered community recommendations',
          'Begin advertiser pilot program with sponsored content'
        ]},
        { phase: '61–90 days', items: [
          'Launch full advertising platform with targeting',
          'Expand creator monetization tools (tips, premium content)',
          'Ship community challenges and collaborative projects',
          'Publish creator economy impact metrics'
        ]}
      ]
    },
    "Secondary - Learning": {
      category: "Secondary",
      growthThesis: "Education drives platform adoption and creator success. AI-powered personalized learning can significantly improve skill development and creator retention.",
      productAIStrategy: "Create adaptive learning paths, AI tutors, skill assessment tools, and personalized content recommendations to enhance educational outcomes.",
      actions: "• Build adaptive learning system • Create AI tutoring • Develop skill assessments • Add learning analytics • Implement progress tracking",
      steps: [
        { phase: '0–30 days', items: [
          'Select target verticals (Education, Gaming, Retail)',
          'Validate ICP through customer interviews',
          'Build MVP for Education vertical with templates',
          'Create vertical-specific asset libraries'
        ]},
        { phase: '31–60 days', items: [
          'Launch Education vertical with 5 pilot customers',
          'Develop Gaming vertical MVP (character assets, UI kits)',
          'Add vertical-specific integrations (LMS, game engines)',
          'Build vertical sales playbooks and go-to-market'
        ]},
        { phase: '61–90 days', items: [
          'Scale Education and Gaming verticals',
          'Begin Retail vertical development (product photography)',
          'Launch vertical partner program',
          'Measure vertical-specific retention and expansion metrics'
        ]}
      ]
    },
    "Secondary - Community": {
      category: "Secondary",
      growthThesis: "Strong communities drive engagement and platform stickiness. AI can enhance community interactions through better matching, content discovery, and collaboration tools.",
      productAIStrategy: "Implement AI-driven community matching, intelligent content curation, automated moderation, and collaboration recommendations.",
      actions: "• Create smart community matching • Build content curation AI • Implement auto-moderation • Add collaboration tools • Develop engagement analytics",
      steps: [
        { phase: '0–30 days', items: [
          'Design API-first architecture and developer portal',
          'Ship core creative APIs (templates, assets, generation)',
          'Launch usage-based pricing model',
          'Build developer documentation and SDKs'
        ]},
        { phase: '31–60 days', items: [
          'Add advanced AI APIs (style transfer, smart cropping)',
          'Create reference applications and code samples',
          'Launch partner integration program',
          'Implement API analytics and usage dashboards'
        ]},
        { phase: '61–90 days', items: [
          'Scale API adoption with enterprise customers',
          'Add white-label solutions for SaaS providers',
          'Launch API marketplace for third-party tools',
          'Publish platform adoption and revenue metrics'
        ]}
      ]
    },
    "Satellite - New Verticals": {
      category: "Satellite",
      growthThesis: "Expanding into adjacent creative verticals can capture new market segments. AI can accelerate this expansion by automating content creation in new domains.",
      productAIStrategy: "Leverage AI to quickly establish presence in new creative verticals through automated content generation, market analysis, and rapid prototyping.",
      actions: "• Research new verticals • Build content generation AI • Create market analysis tools • Develop rapid prototyping • Test market validation",
      steps: [
        { phase: '0–30 days', items: [
          'Prototype immersive content creation pipeline',
          'Build agentic AI substrate for autonomous creation',
          'Partner with VR/AR studios for validation',
          'Create experimental immersive asset library'
        ]},
        { phase: '31–60 days', items: [
          'Launch immersive content beta with select creators',
          'Add AI agent marketplace for creative tasks',
          'Implement spatial computing integrations',
          'Begin enterprise pilots for immersive experiences'
        ]},
        { phase: '61–90 days', items: [
          'Scale immersive platform with consumer launch',
          'Deploy autonomous creative agents at scale',
          'Create immersive creator economy',
          'Establish market leadership in spatial content'
        ]}
      ]
    }
  };

  useEffect(() => {
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
          aspect-ratio: 21/9;
          border-radius: 14px;
          border: 1px solid var(--line);
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .envato-page .hero-image { 
            aspect-ratio: 16/9; 
          }
        }
        .envato-page .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
        .envato-page .chip {
          display: inline-flex;
          gap: 8px;
          align-items: center;
          border-radius: 9999px;
          padding: 6px 10px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid var(--line);
          background: #fff;
        }
        .envato-page .chip.core {
          border-color: var(--envato);
          color: var(--envato-dark);
        }
        .envato-page .chip.secondary {
          border-color: var(--blue);
          color: var(--blue);
        }
        .envato-page .chip.satellite {
          border-color: var(--yellow);
          color: #8a6b00;
        }
        .envato-page .chip.moonshot {
          border-color: var(--red);
          color: var(--red);
        }
        .envato-page .cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          margin: 14px 0 8px;
        }
        @media (max-width: 1200px) {
          .envato-page .cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 580px) {
          .envato-page .cards {
            grid-template-columns: 1fr;
          }
        }
        .envato-page .card h3 {
          margin: 2px 0 6px;
          font-size: 16px;
        }
        .envato-page .meta {
          color: var(--muted);
          font-size: 13px;
        }
        .envato-page .btn {
          display: inline-block;
          padding: 10px 12px;
          border-radius: 10px;
          background: var(--envato);
          color: #fff;
          font-weight: 600;
        }
        .envato-page .btn:hover {
          background: var(--envato-dark);
        }
        .envato-page .section-title {
          margin: 26px 0 10px;
          font-size: 20px;
        }
        .envato-page details {
          border: 1px solid var(--line);
          border-radius: 14px;
          margin: 10px 0;
          background: #fff;
          overflow: hidden;
        }
        .envato-page summary {
          cursor: pointer;
          list-style: none;
          padding: 14px 16px;
          font-weight: 600;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .envato-page summary::-webkit-details-marker {
          display: none;
        }
        .envato-page details[open] summary {
          border-bottom: 1px solid var(--line);
          background: linear-gradient(#fff, #fdfefe);
        }
        .envato-page .acc-body {
          padding: 10px 14px 16px;
        }
        .envato-page .dim-help {
          color: var(--muted);
          font-size: 13px;
          margin: 0 0 8px;
        }
        .envato-page .table-wrap {
          overflow: auto;
          border: 1px solid var(--line);
          border-radius: 12px;
        }
        .envato-page table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          min-width: 980px;
        }
        .envato-page thead th {
          position: sticky;
          top: 0;
          background: #fbfbfd;
          border-bottom: 1px solid var(--line);
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .04em;
          color: var(--muted);
          padding: 12px;
        }
        .envato-page tbody td {
          padding: 12px;
          vertical-align: top;
          border-top: 1px solid var(--line);
        }
        .envato-page tbody tr:first-child td {
          border-top: none;
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
        .envato-page .map {
          background: #fff;
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 10px;
        }
        .envato-page .legend {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .envato-page .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .envato-page .dot.core {
          background: var(--envato);
        }
        .envato-page .dot.secondary {
          background: var(--blue);
        }
        .envato-page .dot.satellite {
          background: var(--yellow);
        }
        .envato-page .dot.moonshot {
          background: var(--red);
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
        }
      `}</style>

      <div className="envato-page min-h-screen">
        <header className="wrap hero">
          <div className="kicker">Envato strategy options</div>
          <h1>Core, satellite, moonshot</h1>
          <p className="sub">Five paths. Clear benefits. Click to go deeper. Add your notes.</p>
          
          {/* Hero Image */}
          <div className="hero-image">
            <img 
              src="https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/ChatGPT%20Image%20Aug%2027,%202025,%2002_37_22%20PM.png"
              alt="AI Product Manager Strategy Visualization"
              loading="lazy"
            />
          </div>
        </header>

        <main className="wrap">
          <section id="quick">
            <div className="card">
              <h2 className="section-title">Quick view cards</h2>
              <p className="text-sm text-muted mb-4">
                These cards represent five strategic growth paths for Envato. Each path includes the growth thesis, product AI strategy, and key actions. 
                Flip a card to see the step-by-step execution plan for that path, or open the full view for context across all dimensions.
              </p>
              <div className="mb-4">
                <a 
                  href="/microsites/envato/orchestrator" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  🎯 View The Orchestrator Profile
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Deep dive into the modern AI product manager skillset and approach
                </p>
              </div>
              <div className="cards">
                <div className={`flip-card ${flipped['path1'] ? 'is-flipped' : ''}`}>
                  <div className="flip-inner">
                    <div className="flip-face flip-front">
                      <h3>Path 1 Creative Infrastructure</h3>
                      <div className="meta">Enterprise workflows and compliance</div>
                      <p className="meta">Indicative 100–200M ARR in 3 to 5 years</p>
                      <span className="tag core">Low risk</span>
                      <span className="tag">ARR focus</span>
                      <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip('path1')} variant="outline" size="sm">
                          Flip for steps
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" style={{background: 'var(--envato)', color: '#fff'}}>
                              Full view
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Core - Creator Tools: Detailed Strategy</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-green-700 mb-2">Growth Thesis</h4>
                                  <p className="text-sm">{pathData["Core - Creator Tools"].growthThesis}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-blue-700 mb-2">Product AI Strategy</h4>
                                  <p className="text-sm">{pathData["Core - Creator Tools"].productAIStrategy}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-purple-700 mb-2">Key Actions</h4>
                                  <p className="text-sm whitespace-pre-line">{pathData["Core - Creator Tools"].actions}</p>
                                </div>
                              </div>
                              <div className="text-center">
                                <Button onClick={() => document.getElementById('table')?.scrollIntoView({behavior: 'smooth'})} variant="outline">
                                  View Full Comparison Table
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">Step-by-step execution plan</h4>
                      <div className="grid md:grid-cols-3 gap-3 mb-4">
                        {pathData["Core - Creator Tools"].steps.map((step, idx) => (
                          <div key={idx}>
                            <div className="font-semibold text-sm mb-2">{step.phase}</div>
                            <ul className="list-disc pl-4 text-xs space-y-1">
                              {step.items.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => unflip('path1')}>
                          Back
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" style={{background: 'var(--envato)', color: '#fff'}}>
                              Full view
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Core - Creator Tools: Detailed Strategy</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-green-700 mb-2">Growth Thesis</h4>
                                  <p className="text-sm">{pathData["Core - Creator Tools"].growthThesis}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-blue-700 mb-2">Product AI Strategy</h4>
                                  <p className="text-sm">{pathData["Core - Creator Tools"].productAIStrategy}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-purple-700 mb-2">Key Actions</h4>
                                  <p className="text-sm whitespace-pre-line">{pathData["Core - Creator Tools"].actions}</p>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`flip-card ${flipped['path2'] ? 'is-flipped' : ''}`}>
                  <div className="flip-inner">
                    <div className="flip-face flip-front">
                      <h3>Path 2 Creative Network</h3>
                      <div className="meta">Community, feeds, creator subs</div>
                      <p className="meta">Indicative 500M plus GMV potential</p>
                      <span className="tag satellite">Higher risk</span>
                      <span className="tag">Ads and subs</span>
                      <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip('path2')} variant="outline" size="sm">
                          Flip for steps
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" style={{background: 'var(--envato)', color: '#fff'}}>
                              Full view
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Core - Enterprise: Detailed Strategy</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-green-700 mb-2">Growth Thesis</h4>
                                  <p className="text-sm">{pathData["Core - Enterprise"].growthThesis}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-blue-700 mb-2">Product AI Strategy</h4>
                                  <p className="text-sm">{pathData["Core - Enterprise"].productAIStrategy}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-purple-700 mb-2">Key Actions</h4>
                                  <p className="text-sm whitespace-pre-line">{pathData["Core - Enterprise"].actions}</p>
                                </div>
                              </div>
                              <div className="text-center">
                                <Button onClick={() => document.getElementById('table')?.scrollIntoView({behavior: 'smooth'})} variant="outline">
                                  View Full Comparison Table
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">Step-by-step execution plan</h4>
                      <div className="grid md:grid-cols-3 gap-3 mb-4">
                        {pathData["Core - Enterprise"].steps.map((step, idx) => (
                          <div key={idx}>
                            <div className="font-semibold text-sm mb-2">{step.phase}</div>
                            <ul className="list-disc pl-4 text-xs space-y-1">
                              {step.items.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => unflip('path2')}>
                          Back
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" style={{background: 'var(--envato)', color: '#fff'}}>
                              Full view
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Core - Enterprise: Detailed Strategy</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-green-700 mb-2">Growth Thesis</h4>
                                  <p className="text-sm">{pathData["Core - Enterprise"].growthThesis}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-blue-700 mb-2">Product AI Strategy</h4>
                                  <p className="text-sm">{pathData["Core - Enterprise"].productAIStrategy}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-purple-700 mb-2">Key Actions</h4>
                                  <p className="text-sm whitespace-pre-line">{pathData["Core - Enterprise"].actions}</p>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`flip-card ${flipped['path4'] ? 'is-flipped' : ''}`}>
                  <div className="flip-inner">
                    <div className="flip-face flip-front">
                      <h3>Path 4 Vertical Expansion</h3>
                      <div className="meta">Industry solutions like Edu and Gaming</div>
                      <p className="meta">Indicative 50–100M ARR per vertical</p>
                      <span className="tag satellite">Higher risk</span>
                      <span className="tag">Sector SaaS</span>
                      <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip('path4')} variant="outline" size="sm">
                          Flip for steps
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" style={{background: 'var(--envato)', color: '#fff'}}>
                              Full view
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Secondary - Learning: Detailed Strategy</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-green-700 mb-2">Growth Thesis</h4>
                                  <p className="text-sm">{pathData["Secondary - Learning"].growthThesis}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-blue-700 mb-2">Product AI Strategy</h4>
                                  <p className="text-sm">{pathData["Secondary - Learning"].productAIStrategy}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-purple-700 mb-2">Key Actions</h4>
                                  <p className="text-sm whitespace-pre-line">{pathData["Secondary - Learning"].actions}</p>
                                </div>
                              </div>
                              <div className="text-center">
                                <Button onClick={() => document.getElementById('table')?.scrollIntoView({behavior: 'smooth'})} variant="outline">
                                  View Full Comparison Table
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">Step-by-step execution plan</h4>
                      <div className="grid md:grid-cols-3 gap-3 mb-4">
                        {pathData["Secondary - Learning"].steps.map((step, idx) => (
                          <div key={idx}>
                            <div className="font-semibold text-sm mb-2">{step.phase}</div>
                            <ul className="list-disc pl-4 text-xs space-y-1">
                              {step.items.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => unflip('path4')}>
                          Back
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" style={{background: 'var(--envato)', color: '#fff'}}>
                              Full view
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Secondary - Learning: Detailed Strategy</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-green-700 mb-2">Growth Thesis</h4>
                                  <p className="text-sm">{pathData["Secondary - Learning"].growthThesis}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-blue-700 mb-2">Product AI Strategy</h4>
                                  <p className="text-sm">{pathData["Secondary - Learning"].productAIStrategy}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-purple-700 mb-2">Key Actions</h4>
                                  <p className="text-sm whitespace-pre-line">{pathData["Secondary - Learning"].actions}</p>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`flip-card ${flipped['path5'] ? 'is-flipped' : ''}`}>
                  <div className="flip-inner">
                    <div className="flip-face flip-front">
                      <h3>Path 5 Platform Enabler</h3>
                      <div className="meta">API first creative backend</div>
                      <p className="meta">Indicative 100M ARR in 3 to 4 years</p>
                      <span className="tag secondary">Medium risk</span>
                      <span className="tag">Usage fees</span>
                      <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip('path5')} variant="outline" size="sm">
                          Flip for steps
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" style={{background: 'var(--envato)', color: '#fff'}}>
                              Full view
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Secondary - Community: Detailed Strategy</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-green-700 mb-2">Growth Thesis</h4>
                                  <p className="text-sm">{pathData["Secondary - Community"].growthThesis}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-blue-700 mb-2">Product AI Strategy</h4>
                                  <p className="text-sm">{pathData["Secondary - Community"].productAIStrategy}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-purple-700 mb-2">Key Actions</h4>
                                  <p className="text-sm whitespace-pre-line">{pathData["Secondary - Community"].actions}</p>
                                </div>
                              </div>
                              <div className="text-center">
                                <Button onClick={() => document.getElementById('table')?.scrollIntoView({behavior: 'smooth'})} variant="outline">
                                  View Full Comparison Table
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">Step-by-step execution plan</h4>
                      <div className="grid md:grid-cols-3 gap-3 mb-4">
                        {pathData["Secondary - Community"].steps.map((step, idx) => (
                          <div key={idx}>
                            <div className="font-semibold text-sm mb-2">{step.phase}</div>
                            <ul className="list-disc pl-4 text-xs space-y-1">
                              {step.items.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => unflip('path5')}>
                          Back
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" style={{background: 'var(--envato)', color: '#fff'}}>
                              Full view
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Secondary - Community: Detailed Strategy</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-green-700 mb-2">Growth Thesis</h4>
                                  <p className="text-sm">{pathData["Secondary - Community"].growthThesis}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-blue-700 mb-2">Product AI Strategy</h4>
                                  <p className="text-sm">{pathData["Secondary - Community"].productAIStrategy}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-purple-700 mb-2">Key Actions</h4>
                                  <p className="text-sm whitespace-pre-line">{pathData["Secondary - Community"].actions}</p>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`flip-card ${flipped['path6'] ? 'is-flipped' : ''}`}>
                  <div className="flip-inner">
                    <div className="flip-face flip-front">
                      <h3>Path 6 Radical Play</h3>
                      <div className="meta">Immersive and agentic AI substrate</div>
                      <p className="meta">Indicative 1B plus TAM moonshot</p>
                      <span className="tag moonshot">Extreme risk</span>
                      <span className="tag">Long horizon</span>
                      <div className="mt-4 flex gap-2">
                        <Button onClick={() => flip('path6')} variant="outline" size="sm">
                          Flip for steps
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" style={{background: 'var(--envato)', color: '#fff'}}>
                              Full view
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Satellite - New Verticals: Detailed Strategy</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-green-700 mb-2">Growth Thesis</h4>
                                  <p className="text-sm">{pathData["Satellite - New Verticals"].growthThesis}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-blue-700 mb-2">Product AI Strategy</h4>
                                  <p className="text-sm">{pathData["Satellite - New Verticals"].productAIStrategy}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-purple-700 mb-2">Key Actions</h4>
                                  <p className="text-sm whitespace-pre-line">{pathData["Satellite - New Verticals"].actions}</p>
                                </div>
                              </div>
                              <div className="text-center">
                                <Button onClick={() => document.getElementById('table')?.scrollIntoView({behavior: 'smooth'})} variant="outline">
                                  View Full Comparison Table
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                    <div className="flip-face flip-back">
                      <h4 className="font-semibold mb-3">Step-by-step execution plan</h4>
                      <div className="grid md:grid-cols-3 gap-3 mb-4">
                        {pathData["Satellite - New Verticals"].steps.map((step, idx) => (
                          <div key={idx}>
                            <div className="font-semibold text-sm mb-2">{step.phase}</div>
                            <ul className="list-disc pl-4 text-xs space-y-1">
                              {step.items.map((item, itemIdx) => (
                                <li key={itemIdx}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => unflip('path6')}>
                          Back
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" style={{background: 'var(--envato)', color: '#fff'}}>
                              Full view
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Satellite - New Verticals: Detailed Strategy</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-green-700 mb-2">Growth Thesis</h4>
                                  <p className="text-sm">{pathData["Satellite - New Verticals"].growthThesis}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-blue-700 mb-2">Product AI Strategy</h4>
                                  <p className="text-sm">{pathData["Satellite - New Verticals"].productAIStrategy}</p>
                                </div>
                                <div className="p-4 border rounded-lg">
                                  <h4 className="font-semibold text-purple-700 mb-2">Key Actions</h4>
                                  <p className="text-sm whitespace-pre-line">{pathData["Satellite - New Verticals"].actions}</p>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
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
                        <th className="col-path">Path 1</th>
                        <th className="col-path">Path 2</th>
                        <th className="col-path">Path 4</th>
                        <th className="col-path">Path 5</th>
                        <th className="col-path">Path 6</th>
                        <th className="col-notes">Envato input</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Trusted AI workflows and compliance. Enterprise ARR engine.</td>
                        <td>Creator network with feeds and subs. Multi stream income.</td>
                        <td>Sector specific platforms like Edu and Gaming and Retail.</td>
                        <td>API first creative backend for SaaS and AI tools.</td>
                        <td>Immersive and agentic AI content substrate.</td>
                        <td><textarea className="note" data-key="d1"></textarea></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>2 Current position</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Assets strong. AI labs siloed. Enterprise reach under used.</td>
                      <td>Many contributors. Community features weak. No feed mechanics.</td>
                      <td>Broad reach. No deep vertical integrations yet.</td>
                      <td>Few integrations. No API first posture.</td>
                      <td>2D focus. No VR or immersive pipeline.</td>
                      <td><textarea className="note" data-key="d2"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>3 Market view</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Competes with Canva and Adobe and Getty. Win with trust and speed.</td>
                      <td>Competes with TikTok and Patreon and YouTube. Win with licensed creator economy.</td>
                      <td>Edu 300B plus. Gaming 200B plus. Retail ad spend huge.</td>
                      <td>SaaS and AI need content APIs. Usage revenue at scale.</td>
                      <td>Immersive economies 500B plus by 2030.</td>
                      <td><textarea className="note" data-key="d3"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>4 Asset model</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Kits and briefs and compliance packs with manifest and lineage.</td>
                      <td>Storefront bundles and services and subs tied to creator identity.</td>
                      <td>Industry kits like courseware and Unreal packs and retail ad sets.</td>
                      <td>APIs for search and recommend and license verify and provenance.</td>
                      <td>3D kits and world packs and avatar and agent bundles.</td>
                      <td><textarea className="note" data-key="d4"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>5 Strategy by horizon</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>H1 index and connectors. H2 packs and dashboards. H3 creative OS.</td>
                      <td>H1 storefronts and feeds. H2 subs and workshops. H3 ads and sponsors.</td>
                      <td>H1 Edu and Gaming pilots. H2 Retail and L and D. H3 multi vertical.</td>
                      <td>H1 core APIs. H2 workflow APIs. H3 default creative backend.</td>
                      <td>H1 3D kits. H2 world builder and agent packs. H3 synthetic substrate.</td>
                      <td><textarea className="note" data-key="d5"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>6 Monetisation</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Subs and enterprise contracts and usage fees. 100–200M ARR in 3 to 5 years.</td>
                      <td>Ads and subs and workshops. 500M plus GMV. 50–100M net in 3 years.</td>
                      <td>Vertical SaaS. 50–100M ARR per vertical.</td>
                      <td>API usage and royalties. 100M ARR in 3 to 4 years if embedded broadly.</td>
                      <td>Immersive assets and agents and XR contracts. 1B plus TAM moonshot.</td>
                      <td><textarea className="note" data-key="d6"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>7 Contributor economics</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Sell kits. Higher margins. Guidance tools.</td>
                      <td>Audience and subs and sponsors. Long tail and star earners.</td>
                      <td>Specialise by sector. Premium pricing.</td>
                      <td>Royalties from API usage across SaaS partners.</td>
                      <td>Earnings from immersive packs and agent deployments.</td>
                      <td><textarea className="note" data-key="d7"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>8 Data and trust</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Provenance and C2PA and audits and region pinning.</td>
                      <td>Moderation AI and verified creators and copyright checks.</td>
                      <td>FERPA and GDPR and ad safety per sector.</td>
                      <td>Provenance APIs and usage logs and SLAs.</td>
                      <td>IP rights for avatars and agents and immersive outputs.</td>
                      <td><textarea className="note" data-key="d8"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>9 Go to market</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Agencies and corporates and studios and universities.</td>
                      <td>SMBs and indie creators and influencers.</td>
                      <td>Education and gaming and retail and gov.</td>
                      <td>SaaS vendors and hyperscalers.</td>
                      <td>Gaming studios and XR agencies and brand labs.</td>
                      <td><textarea className="note" data-key="d9"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>10 Flywheel</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Faster workflows then renewals then ARPU up.</td>
                      <td>Creators upload then followers grow then engagement then revenue.</td>
                      <td>Industry packs then contracts then more experts.</td>
                      <td>More partners then more calls then more royalties then more assets.</td>
                      <td>More immersive content then more brand spend then more creators.</td>
                      <td><textarea className="note" data-key="d10"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>11 Technical priorities</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Unified index and manifest and compliance AI and connectors.</td>
                      <td>Feeds and recsys and moderation AI and storefronts.</td>
                      <td>Ontologies and Unity and LMS and Shopify integrations.</td>
                      <td>API gateway and SDKs and usage attribution.</td>
                      <td>Text to world and engine SDKs and immersive provenance.</td>
                      <td><textarea className="note" data-key="d11"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>12 Risks and mitigations</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Slow adoption and infra cost and author pushback. Answer with revenue share and trust moat.</td>
                      <td>Compete with big social and heavy moderation and ad swings. Answer with licensing and pro tools.</td>
                      <td>Spread thin and niche risk. Answer with two pilot sectors and big TAM focus.</td>
                      <td>Invisible backend and partner risk. Answer with powered by and wide partner base.</td>
                      <td>Hype risk and IP disputes and cost. Answer with gaming first and strong rights layer.</td>
                      <td><textarea className="note" data-key="d12"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>13 AI product manager role</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Asset manifest and index and compliance features. KPIs time to output and ARPU.</td>
                      <td>Feeds and recsys and storefront AI and moderation. KPIs DAU and creator ARPU.</td>
                      <td>Vertical ontologies and transform tools and sector integrations. KPIs sector ARR.</td>
                      <td>API suite and pricing and royalties and docs. KPIs API calls and partner count.</td>
                      <td>Immersive asset classes and pipelines and rights rules. KPIs XR sales and agent use.</td>
                      <td><textarea className="note" data-key="d13"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>

            <details>
              <summary>14 Next steps</summary>
              <div className="acc-body">
                <div className="table-wrap">
                  <table>
                    <thead><tr>
                      <th>Path 1</th><th>Path 2</th><th>Path 4</th><th>Path 5</th><th>Path 6</th><th>Envato input</th>
                    </tr></thead>
                    <tbody><tr>
                      <td>Ship index and first connector and trust report. Land two enterprise lifts.</td>
                      <td>Launch feeds and storefronts and subs. Publish moderation framework.</td>
                      <td>Pick two pilots. Build MVP kits. Sign early contracts.</td>
                      <td>Build MVP API. Sign one lighthouse partner. Open dev program.</td>
                      <td>Extend manifest to 3D. Launch XR kits. Partner with Unity or Unreal.</td>
                      <td><textarea className="note" data-key="d14"></textarea></td>
                    </tr></tbody>
                  </table>
                </div>
              </div>
            </details>
          </section>

          <section className="foot-cta">
            <p className="muted">
              Add notes in the right column. Content saves {isAuthenticated ? 'to cloud and' : 'in'} your browser{!isAuthenticated ? ' (sign in to sync across devices)' : ''}.
            </p>
            <div>
              <button className="btn" id="saveAll">Save now</button>
              <button className="btn" id="clearAll" style={{background: '#0f172a'}}>Clear notes</button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default EnvatoIndex;
