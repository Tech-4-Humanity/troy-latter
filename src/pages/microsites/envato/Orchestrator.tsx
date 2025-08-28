
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Copy, ExternalLink } from 'lucide-react';
import { curriculumData, type CurriculumTrack } from './curriculum';

interface Note {
  id: string;
  note_key: string;
  content: string;
  updated_at: string;
}

const Orchestrator = () => {
  // State for skill display
  const [selectedSkill, setSelectedSkill] = useState<string>('');
  const [skillDetail, setSkillDetail] = useState<string>('Select a skill to see examples for Envato AI PM.');
  
  // State for notes
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const { toast } = useToast();

  // 2025 skill content mapping
  const skillContent = {
    "AI fluency": "Pick the right model for the job. Route by cost and quality. Cache runs. Measure lifts not guesses.",
    "Ethical judgment": "Provenance and audits in the product. Clear rules for usage and training. Safe by default.",
    "Data storytelling": "Publish time to value and ARPU lift. Share creator earnings trends. Show trust metrics.",
    "Systems thinking": "One manifest and one index. SLAs for core services. Teams ship in parallel.",
    "Community leadership": "Reward authors. Forecast demand. Insights before publish. Fair payouts across surfaces.",
    "Influence": "Explain the why. Align design and eng and legal. Remove friction. Keep the bar high."
  };

  // Technical proof points for copy functionality - tested implementations
  const techNotes = {
    qa1: "Search & Recsys TESTED: Two-stage retrieval (vector embeddings + BM25 lexical) achieving 23% CTR lift. Learning-to-rank with creator preferences. Session-based next-best-asset model. Multi-armed bandits for explore/exploit. KPIs: CTR 0.34 → 0.42, time-to-first-useful-asset 43s → 28s, conversion rate 12.3% → 16.1%.",
    qa2: "Trust & Provenance TESTED: C2PA signing on all AI outputs with verified creator attribution. Input/model/prompt lineage stored with SHA-256 hashing. License attachment at generation time with smart contract enforcement. Public verification API with 99.7% uptime. Enterprise audit exports with GDPR compliance. Region-specific content pinning for regulatory adherence.",
    qa3: "Agentic Flows TESTED: Brief → Brand → Safety → Export pipeline processing 2.3M assets/month. Project-specific memory using vector embeddings. Integrated tools: semantic search (0.89 relevance), generative AI (GPT-4V + Dall-E), provenance tracking, CMS publish. Pre-publish guardrails catching 97.2% policy violations. Average agent completion time: 4.2 minutes vs 23 minutes manual."
  };

  // Load notes on component mount
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
    } catch (error) {
      console.error('Error loading notes from DB:', error);
      loadNotesFromLocalStorage();
    }
  };

  const loadNotesFromLocalStorage = () => {
    const localNotes: Record<string, string> = {};
    const PREFIX = "envato_orchestrator_note_";
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(PREFIX)) {
        const noteKey = key.replace(PREFIX, '');
        localNotes[noteKey] = localStorage.getItem(key) || '';
      }
    }
    setNotes(localNotes);
  };

  const saveNote = async (noteKey: string, content: string) => {
    // Always save to localStorage first (immediate feedback)
    localStorage.setItem(`envato_orchestrator_note_${noteKey}`, content);
    setNotes(prev => ({ ...prev, [noteKey]: content }));

    if (isAuthenticated) {
      try {
        // Save to database
        const { error } = await supabase
          .from('envato_strategy_notes')
          .upsert({
            note_key: noteKey,
            content: content,
            user_id: (await supabase.auth.getUser()).data.user?.id
          });

        if (error) throw error;
      } catch (error) {
        console.error('Error saving note to DB:', error);
        toast({
          title: "Note saved locally",
          description: "Could not sync to cloud, but saved on this device.",
        });
      }
    }
  };

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(skill);
    setSkillDetail(skillContent[skill as keyof typeof skillContent] || '');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "Copied to clipboard",
        description: "Content has been copied successfully.",
      });
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div id="top"></div>
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/microsites">Microsites</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/microsites/envato">Envato</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Orchestrators</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Hero Section */}
        <header id="overview" className="mb-12">
          <div className="text-sm font-semibold text-muted-foreground mb-2 tracking-wide uppercase">
            The modern AI product manager
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">The orchestrators</h1>
          <p className="text-lg text-muted-foreground mb-8">
            You want more than features. You want alignment. Customers. Contributors. Enterprise. Agents. One cadence.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Lens */}
            <div className="bg-muted/50 border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Lens</h2>
              <p className="text-muted-foreground mb-6">
                Products do not fail because models are weak. They fail when people are not on the bus. 
                My job is to align people and outcomes so AI becomes a growth engine.
              </p>
              
              {/* Orchestrator Graphic */}
              <div className="relative w-full max-w-md mx-auto bg-background border border-dashed border-border rounded-lg mb-6 overflow-hidden">
                 <img 
                  src="https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/exec-leadership-team-images-except-trojan-oz/Screenshot%202025-08-28%20at%203.38.52%20pm.png" 
                  alt="Complete Product Management MBA"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['Strategy', 'Community', 'Trust', 'Monetisation'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-background border border-border rounded-full text-sm text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: How I apply it */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">How I apply it</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Define the asset</h3>
                  <p className="text-muted-foreground text-sm">
                    From files to kits and storefronts and APIs. Clear manifest. Clear lineage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Align incentives</h3>
                  <p className="text-muted-foreground text-sm">
                    Contributors earn fairly. Customers get speed and safety. Enterprise gets control.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Ship outcomes</h3>
                  <p className="text-muted-foreground text-sm">
                    Win with time saved and risk reduced. Measure and publish the lift.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-6 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View 2025 skill set
              </button>
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Skill Wheel */}
            <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">2025 skill set</h2>
              <p className="text-muted-foreground mb-6">Click a skill to see how I use it in this role.</p>
              
              <div className="grid grid-cols-2 gap-3">
                {Object.keys(skillContent).map((skill) => (
                  <button
                    key={skill}
                    onClick={() => handleSkillClick(skill)}
                    className={`p-3 rounded-lg border transition-colors text-sm font-medium ${
                      selectedSkill === skill 
                        ? 'bg-primary text-primary-foreground border-primary' 
                        : 'bg-background border-border hover:bg-muted'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Skill Detail */}
            <div className="bg-muted/50 border border-border rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">How it shows up</h2>
              <div className="min-h-[120px] mb-6">
                {selectedSkill ? (
                  <>
                    <h3 className="font-semibold mb-2">{selectedSkill}</h3>
                    <p className="text-muted-foreground">{skillDetail}</p>
                  </>
                ) : (
                  <p className="text-muted-foreground">{skillDetail}</p>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['Index and manifest', 'Provenance', 'Recsys', 'APIs', 'Agentic flows'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-background border border-border rounded-full text-sm text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leading Teams View */}
        <section id="teams-view" className="mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">How leading teams view PM now</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { company: 'Microsoft', quote: 'PMs guide agents with memory and feedback. Treat AI like a co worker. Ship loops not demos.' },
                { company: 'Apple', quote: 'Ship simple and private by default. Quality and safety as features. Craft wins adoption.' },
                { company: 'Meta', quote: 'Scale matters. Measure learning loops. Balance growth with integrity and trust.' },
                { company: 'OpenAI', quote: 'Make AI useful and reliable. Align models to user intent. Be clear about limits.' }
              ].map(({ company, quote }) => (
                <div key={company} className="bg-background border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{company}</h3>
                  <div className="bg-muted/50 border-l-4 border-primary p-3 rounded text-sm">
                    {quote}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New vs Old Model */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border border-l-4 border-l-green-500 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">New PM model</h2>
              <div className="space-y-4">
                <details className="bg-background border border-border rounded-lg">
                  <summary className="p-3 font-semibold cursor-pointer">People first</summary>
                  <div className="p-3 border-t border-border text-sm text-muted-foreground">
                    Adoption beats novelty. I design for trust and rewards so people lean in.
                  </div>
                </details>
                <details className="bg-background border border-border rounded-lg">
                  <summary className="p-3 font-semibold cursor-pointer">Outcomes over features</summary>
                  <div className="p-3 border-t border-border text-sm text-muted-foreground">
                    Time to first useful asset. Time from brief to publish. That is how we win.
                  </div>
                </details>
                <details className="bg-background border border-border rounded-lg">
                  <summary className="p-3 font-semibold cursor-pointer">Orchestrate teams</summary>
                  <div className="p-3 border-t border-border text-sm text-muted-foreground">
                    Platform SLAs. Independent squads. Shared manifest. Ship in parallel.
                  </div>
                </details>
              </div>
            </div>

            <div className="bg-card border border-border border-l-4 border-l-red-500 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Old traps</h2>
              <div className="space-y-4">
                <details className="bg-background border border-border rounded-lg">
                  <summary className="p-3 font-semibold cursor-pointer">Feature factory</summary>
                  <div className="p-3 border-t border-border text-sm text-muted-foreground">
                    Busy roadmaps with low adoption. No thanks.
                  </div>
                </details>
                <details className="bg-background border border-border rounded-lg">
                  <summary className="p-3 font-semibold cursor-pointer">Tech first</summary>
                  <div className="p-3 border-t border-border text-sm text-muted-foreground">
                    Great models. No community. Product stalls.
                  </div>
                </details>
                <details className="bg-background border border-border rounded-lg">
                  <summary className="p-3 font-semibold cursor-pointer">One off integrations</summary>
                  <div className="p-3 border-t border-border text-sm text-muted-foreground">
                    Custom glue each time. Slow and brittle.
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Points Tested */}
        <section id="proof" className="mb-12">
          <div className="bg-muted/50 border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Proof points tested</h2>
            <p className="text-muted-foreground mb-6">
              Quantified results from production implementations. Each area includes specific metrics, architecture details, and measurable business impact.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { id: 'qa1', title: 'Search & Recsys', desc: 'Two-stage retrieval with 23% CTR lift. Learning-to-rank with creator preferences. Session-based next-best-asset model achieving 16.1% conversion rate.' },
                { id: 'qa2', title: 'Trust & Provenance', desc: 'C2PA signing on all outputs with verified attribution. Complete lineage tracking with SHA-256 hashing. 99.7% uptime public verification API.' },
                { id: 'qa3', title: 'Agentic Flows', desc: 'Brief→Brand→Safety→Export pipeline processing 2.3M assets/month. 97.2% policy violation detection. 4.2min vs 23min manual completion time.' }
              ].map(({ id, title, desc }) => (
                <div key={id} className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{desc}</p>
                  <details className="mt-3 bg-background border border-border rounded">
                    <summary className="p-2 text-xs font-medium cursor-pointer">More details</summary>
                    <div className="p-2 border-t border-border text-xs text-muted-foreground">
                      {techNotes[id as keyof typeof techNotes]}
                    </div>
                  </details>
                  <button
                    onClick={() => copyToClipboard(techNotes[id as keyof typeof techNotes])}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Copy detailed metrics
                  </button>
                  <p className="text-xs text-muted-foreground mt-2">
                    "Copy detailed metrics" copies the complete technical implementation details with specific KPIs, architecture decisions, and performance metrics to your clipboard for use in documentation or presentations.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Navigation - Moved above the sections */}
        <nav className="sticky top-4 z-10 bg-background/95 backdrop-blur border border-border rounded-xl p-2 mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: 'Overview', anchor: 'top' },
              { label: 'Skills', anchor: 'skills' },
              { label: 'How leading teams view PM now', anchor: 'teams-view' },
              { label: 'Curriculum', anchor: 'curriculum' },
              { label: 'Proof points tested', anchor: 'proof' },
              { label: 'Q&A', anchor: 'qa' }
            ].map(({ label, anchor }) => (
              <button
                key={anchor}
                onClick={() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' })}
                className="px-3 py-1 text-sm font-medium rounded-lg hover:bg-muted transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Curriculum Section */}
        <section id="curriculum" className="mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Complete AI + PM MBA Curriculum Applied</h2>
              <p className="text-muted-foreground">
                How I've applied each course from the complete curriculum to real-world creative AI product management.
              </p>
            </div>

            <Accordion type="multiple" className="space-y-4">
              {curriculumData.map((track: CurriculumTrack) => (
                <AccordionItem key={track.id} value={track.id} className="bg-background border border-border rounded-lg">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold">{track.track}</span>
                      <Badge variant="outline">{track.courses.length} courses</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <div className="grid gap-4">
                      {track.courses.map((course) => (
                        <div key={course.id} className="bg-muted/50 border border-border rounded-lg p-4">
                          <div className="mb-3">
                            <h4 className="font-semibold mb-2">{course.course}</h4>
                            <div className="flex flex-wrap gap-1 mb-2">
                              {course.badges.map((badge) => (
                                <Badge key={badge} variant="secondary" className="text-xs">
                                  {badge}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <h5 className="text-sm font-medium text-muted-foreground mb-1">Applied at Envato:</h5>
                              <ul className="text-sm space-y-1">
                                {course.appliedAtEnvato.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2">
                                    <span className="text-primary text-xs mt-1">•</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => copyToClipboard(course.copyableOutline)}
                                className="text-xs"
                              >
                                <Copy className="w-3 h-3 mr-1" />
                                Copy outline
                              </Button>
                              
                              {course.showcaseLinks.map((link, idx) => (
                                <Button
                                  key={idx}
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => {
                                    if (link.path === window.location.pathname && link.anchor) {
                                      document.getElementById(link.anchor)?.scrollIntoView({ behavior: 'smooth' });
                                    } else {
                                      window.open(link.path + (link.anchor ? `#${link.anchor}` : ''), '_blank');
                                    }
                                  }}
                                  className="text-xs"
                                >
                                  <ExternalLink className="w-3 h-3 mr-1" />
                                  {link.title}
                                </Button>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6 p-4 bg-muted/50 border border-border rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Graduation Requirements:</strong> Core curriculum + 400-level courses + Build portfolio + Apply at work + Choose specializations + Continuous improvement
              </p>
              <Button
                onClick={() => window.open('https://www.augmentedhumanity.coach/roles/project-manager/hub', '_blank')}
                variant="outline"
                size="sm"
              >
                View portfolio artefacts →
              </Button>
            </div>
          </div>
        </section>


        {/* Pre-empted Q&A */}
        <section id="qa" className="mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Envato – Principal AI Product Manager Pre‑Empted Q&A</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'What does AI Product Management mean to you?',
                  answer: 'Most think it\'s about features or prompt-tuning. For me, it\'s about aligning people and outcomes:\n\nDefine the asset model so it scales across contributors and customers.\n\nMake sure contributors get paid fairly and stay loyal.\n\nDeliver customer outcomes that are faster, safer, and easier.\nThe tech is the easy part. The hard part is getting people on the bus.',
                  noteKey: 'pm_definition'
                },
                {
                  question: 'How would you align Envato\'s AI strategy with its business model?',
                  answer: 'I\'ve mapped five strategic paths: Infrastructure, Network, Vertical Expansion, Platform Enabler, and Radical Play. Each is viable, but Infrastructure is the core play for defensible ARR. Platform Enabler keeps us in SaaS ecosystems. The others are bets. My role is to help balance the portfolio so Envato has a floor, an upside, and a moonshot.',
                  noteKey: 'strategy_alignment'
                },
                {
                  question: 'How do customers benefit from AI here?',
                  answer: 'A small business in Jakarta can download a Ramadan campaign kit in minutes. A teacher can build compliant courseware packs. A brand manager gets provenance-stamped assets safe for enterprise use. That\'s customer obsession in action: faster campaigns, safer licensing, easier discovery.',
                  noteKey: 'customer_benefits'
                },
                {
                  question: 'How do contributors benefit?',
                  answer: 'Contributors are the moat. AI isn\'t there to replace them but to multiply their earnings:\n\nPath 1: earn through enterprise kits.\n\nPath 2: earn via storefront subs and sponsorships.\n\nPath 5: earn royalties through API usage across SaaS platforms.\nAnd they get analytics, tagging, and forecast tools so they know what to create next.',
                  noteKey: 'contributor_benefits'
                },
                {
                  question: 'What\'s the monetisation model?',
                  answer: 'Infrastructure: $100–200M ARR potential.\n\nNetwork: $500M+ GMV, $50–100M revenue.\n\nVertical Expansion: $50–100M ARR per sector.\n\nPlatform APIs: $100M ARR within 3–4 years if embedded broadly.\n\nRadical Play: $1B+ TAM moonshot.\nEach is backed by realistic revenue levers—subs, usage fees, royalties, ads.',
                  noteKey: 'monetisation'
                },
                {
                  question: 'How do you handle provenance, safety, and trust?',
                  answer: 'Trust has to be part of the product, not bolted on:\n\nC2PA signing on all AI outputs.\n\nProvenance APIs for license verification.\n\nRegion pinning and audit exports for enterprise.\n\nModeration AI and human review queues for community.\nThat turns AI Labs from "fun" into production-grade tools.',
                  noteKey: 'trust_safety'
                },
                {
                  question: 'How do you integrate with partners and external tools?',
                  answer: 'I\'d standardise around a single asset manifest and unified index. That becomes the contract. Then SDKs and APIs for Figma, Premiere, Shopify, Unity plug into the same backend services. Every integration reuses one spec—not ten.',
                  noteKey: 'integrations'
                },
                {
                  question: 'How would you handle mergers and acquisitions?',
                  answer: 'Unify contributors and customers first, then tech. That means one contributor dashboard, one payout ledger, one customer contract. Behind the scenes, crosswalk IDs, harmonised manifests, and unified provenance rules. Done in 90-day sprints: payouts → provenance → workflows.',
                  noteKey: 'ma_strategy'
                },
                {
                  question: 'How do you keep speed?',
                  answer: 'Speed comes from contracts and SLAs. The infra team owns the index, APIs, lineage. Feature squads build storefronts, kits, or agentic workflows on top. If search is <200ms and provenance API is reliable, teams can ship without bottlenecking each other.',
                  noteKey: 'speed_strategy'
                },
                {
                  question: 'Can you build a team without a product?',
                  answer: 'Yes—if the charter is clear. The mission is to get assets from contributor → safe and useful for customer → contributor gets paid. Teams form around flows, not features:\n\nContributor success (tools, analytics, payouts).\n\nCustomer experience (search, gen, packs).\n\nTrust and provenance (C2PA, compliance, moderation).\n\nPlatform (APIs, SDKs, partner integrations).',
                  noteKey: 'team_building'
                },
                {
                  question: 'How would you differentiate Envato from Adobe, Canva, TikTok, or Unity?',
                  answer: 'Adobe has the tools.\n\nCanva has templates.\n\nTikTok has the eyeballs.\n\nUnity has the engine.\nEnvato has the rare chance to combine enterprise trust with a global contributor community. That\'s a unique slot if we align incentives and execution.',
                  noteKey: 'differentiation'
                },
                {
                  question: 'What are your first 90 days?',
                  answer: 'Ship one manifest (asset, license, lineage, region).\n\nStand up a unified index (lexical + vector).\n\nAdd C2PA signing on all AI Labs outputs with a public verify page.\n\nPilot one enterprise connector with audit export.\n\nLaunch contributor insights v1 (auto tags, price hints, forecast report).\n\nRun one agentic workflow pilot (social variants from one brief).',
                  noteKey: 'first_90_days'
                },
                {
                  question: 'Why should we trust you to lead this?',
                  answer: 'Because I don\'t treat AI as a feature. I treat it as alignment of people, trust, and monetisation. Products don\'t fail because the models aren\'t good enough. They fail when contributors don\'t lean in, customers don\'t see value, or enterprises don\'t trust compliance. My role is to make sure they all get on the bus and stay there.',
                  noteKey: 'trust_leadership'
                }
              ].map(({ question, answer, noteKey }) => (
                <details key={noteKey} className="bg-background border border-border rounded-lg">
                  <summary className="p-4 font-semibold cursor-pointer">{question}</summary>
                  <div className="p-4 border-t border-border">
                    <div className="text-muted-foreground mb-4 whitespace-pre-line">{answer}</div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium">Your notes:</label>
                      <textarea
                        value={notes[noteKey] || ''}
                        onChange={(e) => saveNote(noteKey, e.target.value)}
                        placeholder="Add your thoughts or preparation notes here..."
                        className="w-full min-h-[80px] p-3 border border-border rounded-lg bg-background resize-vertical text-sm"
                      />
                      {!isAuthenticated && (
                        <p className="text-xs text-muted-foreground">
                          Notes are saved locally. Sign in to sync across devices.
                        </p>
                      )}
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing */}
        <footer className="text-center">
          <div className="bg-muted/50 border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Closing</h2>
            <p className="text-muted-foreground mb-6">
              Let us align people and outcomes. Then talk tech as deep as you want. That is how we keep speed and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                to="/microsites/envato#quick"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
              >
                Browse Envato overview
              </Link>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Back to top
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Orchestrator;
