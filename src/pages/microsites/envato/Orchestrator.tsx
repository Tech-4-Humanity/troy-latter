
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

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

  // Skill content mapping
  const skillContent = {
    "AI fluency": "Pick the right model for the job. Route by cost and quality. Cache runs. Measure lifts not guesses.",
    "Ethical judgment": "Provenance and audits in the product. Clear rules for usage and training. Safe by default.",
    "Data storytelling": "Publish time to value and ARPU lift. Share creator earnings trends. Show trust metrics.",
    "Systems thinking": "One manifest and one index. SLAs for core services. Teams ship in parallel.",
    "Community leadership": "Reward authors. Forecast demand. Insights before publish. Fair payouts across surfaces.",
    "Influence": "Explain the why. Align design and eng and legal. Remove friction. Keep the bar high."
  };

  // Technical notes for copy functionality
  const techNotes = {
    qa1: "Retrieval: vector then lexical. Ranker with LTR. Session model for next best. Bandits for exploration. Metrics: CTR and time to first useful asset and conversion.",
    qa2: "C2PA sign on output. Store inputs and model and prompt. License attach at gen time. Public verify. Audit export for enterprise. Region pin.",
    qa3: "Agents: brief then brand then safety then export. Memory per project. Tools: Search and gen and provenance and CMS publish. Guardrails before publish."
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
            <BreadcrumbPage>Orchestrator</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Hero Section */}
        <header className="mb-12">
          <div className="text-sm font-semibold text-muted-foreground mb-2 tracking-wide uppercase">
            The modern AI product manager
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">The orchestrator</h1>
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
                  src="https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/images/Complete%20Product%20Management%20MBA%20(1).png" 
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
              <h2 className="text-2xl font-semibold mb-4">Skill wheel</h2>
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
        <section className="mb-12">
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

        {/* Proof Points */}
        <section className="mb-12">
          <div className="bg-muted/50 border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Proof points I can show</h2>
            <p className="text-muted-foreground mb-6">
              Pick any area and I can go deep. If we run short on time, here is a quick index.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { id: 'qa1', title: 'Search and recsys', desc: 'Two stage retrieval. Session model. Bandits for exploration. Clear KPIs and lifts.' },
                { id: 'qa2', title: 'Trust and provenance', desc: 'C2PA on outputs. License attach. Public verify. Audit exports. Region pinning.' },
                { id: 'qa3', title: 'Agentic flows', desc: 'Brief and brand and safety and export agents. Guardrails before publish.' }
              ].map(({ id, title, desc }) => (
                <div key={id} className="bg-card border border-border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{desc}</p>
                  <button
                    onClick={() => copyToClipboard(techNotes[id as keyof typeof techNotes])}
                    className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Copy notes
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pre-empted Q&A */}
        <section className="mb-12">
          <div className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Pre empted Q and A</h2>
            <div className="space-y-4">
              {[
                {
                  question: 'What is AI product management to you',
                  answer: 'Align people and outcomes. Define the asset. Reward contributors. Make customer outcomes faster and safer. The model is a lever. The community is the moat.',
                  noteKey: 'pm_definition'
                },
                {
                  question: 'How do you handle integrations',
                  answer: 'One manifest and one unified index. Public APIs and SDKs reuse the same contract. Every plugin rides that contract.',
                  noteKey: 'integrations'
                },
                {
                  question: 'How do you handle M and A',
                  answer: 'Unify contributors and customers first. One payout ledger. One contract. Then harmonise manifests and provenance.',
                  noteKey: 'ma_strategy'
                },
                {
                  question: 'How do you keep speed',
                  answer: 'Infra SLAs. Independent squads. Canary and kill switch. Measure time to value.',
                  noteKey: 'speed_strategy'
                },
                {
                  question: 'What are your first 90 days',
                  answer: 'Ship manifest and index. C2PA by default. One enterprise connector. Contributor insights. One agentic workflow pilot.',
                  noteKey: 'first_90_days'
                }
              ].map(({ question, answer, noteKey }) => (
                <details key={noteKey} className="bg-background border border-border rounded-lg">
                  <summary className="p-4 font-semibold cursor-pointer">{question}</summary>
                  <div className="p-4 border-t border-border">
                    <div className="text-muted-foreground mb-4">{answer}</div>
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
