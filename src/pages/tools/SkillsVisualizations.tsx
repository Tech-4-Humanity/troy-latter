import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import RadarChart from '@/components/cv/visualizations/RadarChart';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Activity, TrendingUp, Star, Sparkles } from 'lucide-react';
import { Search } from 'lucide-react';
import { toast } from 'sonner';
import { PageTitle } from '@/components/PageTitle';

interface Skill {
  skill: string;
  domain: string;
  rating: number;
  'Proficiency Level': string;
  alignment_score?: string | number;
  Certification?: string;
  proof?: string;
  'Project Examples'?: string;
  'Tools Used'?: string;
  'Job Keywords Matched'?: string;
  impact_metric?: string;
  market_trend?: string;
  recency_year?: number | string;
  role_alignment?: string;
  evidence_level?: string;
  'Endorsements Count'?: number | string;
  [key: string]: any; // Allow other columns from DB
}

// Emoji mapping for domains
const domainEmojis: Record<string, string> = {
  'AI Engineering': '⚡',
  'Leadership & GTM': '🎯',
  'Architecture & Cloud': '☁️',
  'Governance & Ethics': '⚖️',
  'Data & Analytics': '📊',
  'Innovation': '💡',
  'Strategy': '🗺️',
  'Product': '🚀'
};

const DOMAIN_COLORS = [
  'hsl(217, 91%, 60%)',
  'hsl(142, 76%, 36%)',
  'hsl(24, 100%, 50%)',
  'hsl(280, 100%, 70%)',
  'hsl(48, 100%, 50%)',
  'hsl(200, 100%, 50%)',
];

// Fallback sample data shown when Supabase returns no rows
const SAMPLE_SKILLS: Skill[] = [
  {
    skill: 'GenAI Prompt Engineering',
    domain: 'AI Engineering',
    rating: 5,
    'Proficiency Level': 'Expert',
    Certification: 'OpenAI Certified',
    proof: 'Designed RAG pipelines and prompt libraries used across org',
    'Project Examples': 'Agent Orchestrator, RAG Copilot, CV Generator',
    'Tools Used': 'OpenAI, LangChain, Supabase',
    impact_metric: '↓ time-to-value by 40%',
    market_trend: 'Rising',
    recency_year: 2025,
    role_alignment: 'CTO',
    alignment_score: 'Rising 95',
    evidence_level: 'Strong',
    'Endorsements Count': 18,
  },
  {
    skill: 'Vector Databases',
    domain: 'Data & Analytics',
    rating: 5,
    'Proficiency Level': 'Expert',
    Certification: 'Supabase Vector',
    proof: 'Deployed pgvector + RLS for multi-tenant AI apps',
    'Project Examples': 'Knowledge RAG, Skills Matrix, Chatbot',
    'Tools Used': 'Postgres pgvector, Supabase, OpenAI Embeddings',
    impact_metric: '95%+ retrieval accuracy',
    market_trend: 'Rising',
    recency_year: 2025,
    role_alignment: 'CTO',
    alignment_score: 'Rising 92',
    evidence_level: 'Strong',
    'Endorsements Count': 12,
  },
  {
    skill: 'Cloud Architecture',
    domain: 'Architecture & Cloud',
    rating: 4,
    'Proficiency Level': 'Advanced',
    Certification: 'AWS Solutions Architect',
    proof: 'Led multi-cloud modernization with serverless patterns',
    'Project Examples': 'Event-driven data mesh, Edge Functions',
    'Tools Used': 'AWS Lambda, GCP Cloud Functions, Supabase Edge',
    impact_metric: '30% cost reduction',
    market_trend: 'Stable',
    recency_year: 2024,
    role_alignment: 'CTO',
    alignment_score: 88,
    evidence_level: 'Strong',
    'Endorsements Count': 20,
  },
  {
    skill: 'AI Governance & Ethics',
    domain: 'Governance & Ethics',
    rating: 5,
    'Proficiency Level': 'Expert',
    Certification: 'Responsible AI Certificate',
    proof: 'Rolled out AI policy framework and model governance',
    'Project Examples': 'Policy-as-code, Model cards, Bias testing',
    'Tools Used': 'Policy Engines, Ethical AI Frameworks',
    impact_metric: 'Zero critical incidents, 100% compliance',
    market_trend: 'Rising',
    recency_year: 2025,
    role_alignment: 'CTO',
    alignment_score: 91,
    evidence_level: 'Strong',
  },
  {
    skill: 'Product Strategy & Roadmapping',
    domain: 'Strategy',
    rating: 5,
    'Proficiency Level': 'Expert',
    Certification: 'Product Management Certified',
    proof: 'Launched 3 AI products to market with validated PMF',
    'Project Examples': 'Agent Platform, RAG Suite, Analytics Dashboard',
    'Tools Used': 'Jira, ProductBoard, Figma, Amplitude',
    impact_metric: 'ARR +$3.2M, NPS 72',
    market_trend: 'Stable',
    recency_year: 2024,
    role_alignment: 'CTO',
    alignment_score: 86,
    evidence_level: 'Strong',
  },
  {
    skill: 'Go-To-Market Leadership',
    domain: 'Leadership & GTM',
    rating: 5,
    'Proficiency Level': 'Expert',
    proof: 'Built cross-functional AI pod: eng + product + sales',
    'Project Examples': 'Pilot-to-scale playbooks, Sales enablement',
    'Tools Used': 'HubSpot, Salesforce, Slack',
    impact_metric: 'Win-rate +18%, pipeline velocity +25%',
    market_trend: 'Rising',
    recency_year: 2025,
    role_alignment: 'CTO',
    alignment_score: 90,
    evidence_level: 'Strong',
  },
  {
    skill: 'Agentic AI & LLM Orchestration',
    domain: 'AI Engineering',
    rating: 5,
    'Proficiency Level': 'Expert',
    Certification: 'LangChain Certified',
    proof: 'Built multi-agent systems with tool use and memory',
    'Project Examples': 'Broker Agent, Lenovo Advisor, Workflow Engine',
    'Tools Used': 'LangGraph, OpenAI Assistants, Function Calling',
    impact_metric: '60% automation of analyst tasks',
    market_trend: 'Rising',
    recency_year: 2025,
    alignment_score: 94,
    evidence_level: 'Strong',
  },
  {
    skill: 'Real-time Data Streaming',
    domain: 'Data & Analytics',
    rating: 4,
    'Proficiency Level': 'Advanced',
    proof: 'Designed event-driven pipelines for real-time insights',
    'Project Examples': 'Live dashboards, Event ingestion',
    'Tools Used': 'Kafka, Supabase Realtime, WebSockets',
    impact_metric: 'Sub-second latency',
    market_trend: 'Stable',
    recency_year: 2024,
    alignment_score: 85,
  },
  {
    skill: 'DevOps & CI/CD',
    domain: 'Architecture & Cloud',
    rating: 4,
    'Proficiency Level': 'Advanced',
    Certification: 'GitHub Actions Pro',
    proof: 'Automated deployment pipelines with zero-downtime releases',
    'Project Examples': 'Vercel + Supabase auto-deploy, Edge migrations',
    'Tools Used': 'GitHub Actions, Vercel, Docker',
    impact_metric: '10+ deploys/day, 99.9% uptime',
    market_trend: 'Stable',
    recency_year: 2024,
    alignment_score: 82,
  },
  {
    skill: 'API Design & Integration',
    domain: 'Architecture & Cloud',
    rating: 5,
    'Proficiency Level': 'Expert',
    proof: 'Designed RESTful & GraphQL APIs consumed by 100k+ users',
    'Project Examples': 'Public API Gateway, Webhook integrations',
    'Tools Used': 'PostgREST, GraphQL, OpenAPI',
    impact_metric: 'API uptime 99.95%',
    market_trend: 'Stable',
    recency_year: 2024,
    alignment_score: 87,
  },
  {
    skill: 'TypeScript & React',
    domain: 'AI Engineering',
    rating: 5,
    'Proficiency Level': 'Expert',
    proof: 'Built 15+ production React apps with TS best practices',
    'Project Examples': 'Portfolio site, CV tools, Microsites',
    'Tools Used': 'React, TypeScript, Vite, Tailwind',
    impact_metric: '90+ Lighthouse scores',
    market_trend: 'Stable',
    recency_year: 2025,
    alignment_score: 88,
  },
  {
    skill: 'Machine Learning Operations',
    domain: 'AI Engineering',
    rating: 4,
    'Proficiency Level': 'Advanced',
    Certification: 'MLOps Foundations',
    proof: 'Deployed model versioning and A/B testing infrastructure',
    'Project Examples': 'Model registry, Experiment tracking',
    'Tools Used': 'MLflow, Weights & Biases, Supabase',
    impact_metric: 'Model deployment time ↓ 60%',
    market_trend: 'Rising',
    recency_year: 2024,
    alignment_score: 86,
  },
  {
    skill: 'Data Privacy & Security',
    domain: 'Governance & Ethics',
    rating: 5,
    'Proficiency Level': 'Expert',
    Certification: 'GDPR & SOC2 Certified',
    proof: 'Led SOC2 Type II audit and GDPR compliance program',
    'Project Examples': 'RLS policies, Data encryption, Access controls',
    'Tools Used': 'Supabase RLS, Vault, SSO',
    impact_metric: 'Zero data breaches, SOC2 certified',
    market_trend: 'Rising',
    recency_year: 2025,
    alignment_score: 93,
  },
  {
    skill: 'SQL & Database Design',
    domain: 'Data & Analytics',
    rating: 5,
    'Proficiency Level': 'Expert',
    proof: 'Optimized complex queries and designed normalized schemas',
    'Project Examples': '175+ skills matrix, Multi-tenant DB design',
    'Tools Used': 'PostgreSQL, Supabase, SQL optimization',
    impact_metric: 'Query performance ↑ 10x',
    market_trend: 'Stable',
    recency_year: 2025,
    alignment_score: 89,
  },
  {
    skill: 'Technical Writing & Documentation',
    domain: 'Leadership & GTM',
    rating: 5,
    'Proficiency Level': 'Expert',
    proof: 'Published whitepapers, API docs, and technical guides',
    'Project Examples': 'Product docs, Runbooks, Blog posts',
    'Tools Used': 'Markdown, Notion, GitBook',
    impact_metric: 'Support tickets ↓ 35%',
    market_trend: 'Stable',
    recency_year: 2025,
    alignment_score: 84,
  },
  {
    skill: 'Agile & Scrum',
    domain: 'Leadership & GTM',
    rating: 4,
    'Proficiency Level': 'Advanced',
    Certification: 'Scrum Master',
    proof: 'Facilitated sprints for cross-functional teams',
    'Project Examples': 'Sprint planning, Retrospectives, Standup automation',
    'Tools Used': 'Jira, Linear, Slack',
    impact_metric: 'Velocity +30%, predictability 85%',
    market_trend: 'Stable',
    recency_year: 2024,
    alignment_score: 81,
  },
  {
    skill: 'Change Management',
    domain: 'Leadership & GTM',
    rating: 5,
    'Proficiency Level': 'Expert',
    proof: 'Led org-wide AI transformation and culture shift',
    'Project Examples': 'AI adoption playbook, Training programs',
    'Tools Used': 'Change frameworks, Town halls, OKRs',
    impact_metric: 'AI literacy +70%, adoption 85%',
    market_trend: 'Rising',
    recency_year: 2025,
    alignment_score: 92,
  },
  {
    skill: 'Customer Success & Support',
    domain: 'Leadership & GTM',
    rating: 4,
    'Proficiency Level': 'Advanced',
    proof: 'Built CS processes and feedback loops',
    'Project Examples': 'Support chatbot, Feedback analysis',
    'Tools Used': 'Intercom, Zendesk, AI triage',
    impact_metric: 'CSAT 4.7/5, resolution time ↓ 40%',
    market_trend: 'Stable',
    recency_year: 2024,
    alignment_score: 83,
  },
  {
    skill: 'Microservices Architecture',
    domain: 'Architecture & Cloud',
    rating: 4,
    'Proficiency Level': 'Advanced',
    proof: 'Decomposed monoliths into containerized services',
    'Project Examples': 'Edge Functions, Service mesh',
    'Tools Used': 'Docker, Kubernetes, Supabase Functions',
    impact_metric: 'Deployment frequency ↑ 5x',
    market_trend: 'Stable',
    recency_year: 2024,
    alignment_score: 84,
  },
  {
    skill: 'Natural Language Processing',
    domain: 'AI Engineering',
    rating: 4,
    'Proficiency Level': 'Advanced',
    proof: 'Built sentiment analysis and entity extraction pipelines',
    'Project Examples': 'JD skills extraction, Text classification',
    'Tools Used': 'spaCy, NLTK, Transformers',
    impact_metric: 'Accuracy 92%, F1 score 0.89',
    market_trend: 'Rising',
    recency_year: 2024,
    alignment_score: 87,
  },
  {
    skill: 'Business Intelligence',
    domain: 'Data & Analytics',
    rating: 4,
    'Proficiency Level': 'Advanced',
    proof: 'Created executive dashboards and KPI tracking',
    'Project Examples': 'Revenue analytics, User cohorts, Funnel analysis',
    'Tools Used': 'Metabase, Looker, SQL',
    impact_metric: 'Data-driven decisions ↑ 50%',
    market_trend: 'Stable',
    recency_year: 2024,
    alignment_score: 82,
  },
  {
    skill: 'UI/UX Design Principles',
    domain: 'Product',
    rating: 4,
    'Proficiency Level': 'Advanced',
    proof: 'Designed user flows and prototypes with high conversion',
    'Project Examples': 'CV Generator UX, Portfolio site, Microsites',
    'Tools Used': 'Figma, Tailwind, shadcn/ui',
    impact_metric: 'Conversion rate ↑ 22%',
    market_trend: 'Stable',
    recency_year: 2025,
    alignment_score: 80,
  },
  {
    skill: 'Stakeholder Management',
    domain: 'Leadership & GTM',
    rating: 5,
    'Proficiency Level': 'Expert',
    proof: 'Aligned C-suite, investors, and customers on roadmap',
    'Project Examples': 'Board presentations, QBRs, Customer steering',
    'Tools Used': 'Presentations, Strategic memos',
    impact_metric: 'Exec satisfaction 4.8/5',
    market_trend: 'Stable',
    recency_year: 2025,
    alignment_score: 91,
  },
  {
    skill: 'Budget & Resource Planning',
    domain: 'Strategy',
    rating: 4,
    'Proficiency Level': 'Advanced',
    proof: 'Managed $2M+ budgets with ROI tracking',
    'Project Examples': 'Tech stack optimization, Headcount planning',
    'Tools Used': 'Excel, Financial models',
    impact_metric: 'ROI 3.5x, budget variance <5%',
    market_trend: 'Stable',
    recency_year: 2024,
    alignment_score: 79,
  },
  {
    skill: 'Innovation & R&D',
    domain: 'Innovation',
    rating: 5,
    'Proficiency Level': 'Expert',
    proof: 'Led innovation lab and prototyping sprints',
    'Project Examples': 'AI experiments, Hackathons, Proofs-of-concept',
    'Tools Used': 'Lean startup, Design thinking',
    impact_metric: '8 innovations to production',
    market_trend: 'Rising',
    recency_year: 2025,
    alignment_score: 94,
  },
];

export default function SkillsVisualizations() {
  const [activeTab, setActiveTab] = useState('overview');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [domainFilter, setDomainFilter] = useState('all');
  const [highlightedTerm, setHighlightedTerm] = useState('');

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const { data, error } = await supabase
        .from('175+ Skills Matrix')
        .select('*')
        .order('rating', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        toast.message('Showing demo skills while data syncs');
        setSkills(SAMPLE_SKILLS);
        return;
      }
      const rows = (data as any) || [];
      console.log('Fetched skills:', rows.length);
      if (rows.length === 0) {
        toast.message('Showing demo skills while data syncs');
        setSkills(SAMPLE_SKILLS);
      } else {
        setSkills(rows);
      }
    } catch (error) {
      console.error('Error fetching skills:', error);
      toast.message('Showing demo skills while offline');
      setSkills(SAMPLE_SKILLS);
    } finally {
      setLoading(false);
    }
  };

  const topSkills = skills.slice(0, 25); // Show top 25 in comprehensive table
  const domains = Array.from(new Set(skills.map(s => s.domain))).filter(Boolean);

  // Domain distribution data
  const domainData = domains.map(domain => ({
    domain,
    count: skills.filter(s => s.domain === domain).length
  })).sort((a, b) => b.count - a.count);

  // Proficiency distribution
  const proficiencyData = [
    { name: 'Expert', value: skills.filter(s => s.rating === 5).length, color: 'hsl(142, 76%, 36%)' },
    { name: 'Advanced', value: skills.filter(s => s.rating === 4).length, color: 'hsl(217, 91%, 60%)' },
    { name: 'Intermediate', value: skills.filter(s => s.rating === 3).length, color: 'hsl(48, 100%, 50%)' },
    { name: 'Developing', value: skills.filter(s => s.rating <= 2).length, color: 'hsl(0, 84%, 60%)' },
  ];

  // Rising skills (alignment_score contains "Rising")
  const risingSkills = skills.filter(s => 
    String(s.alignment_score).toLowerCase().includes('rising')
  ).slice(0, 10);

  const filteredSkills = skills.filter(skill => {
    if (!searchTerm) {
      const matchesDomain = domainFilter === 'all' || skill.domain === domainFilter;
      return matchesDomain;
    }
    
    // Search across multiple fields
    const term = searchTerm.toLowerCase();
    const matchesInSkill = skill.skill?.toLowerCase().includes(term);
    const matchesInDomain = skill.domain?.toLowerCase().includes(term);
    const matchesInProof = skill.proof?.toLowerCase().includes(term);
    const matchesInProjects = skill['Project Examples']?.toLowerCase().includes(term);
    const matchesInTools = skill['Tools Used']?.toLowerCase().includes(term);
    const matchesInCert = skill.Certification?.toLowerCase().includes(term);
    const matchesInImpact = skill.impact_metric?.toLowerCase().includes(term);
    
    const matchesSearch = matchesInSkill || matchesInDomain || matchesInProof || 
                         matchesInProjects || matchesInTools || matchesInCert || matchesInImpact;
    const matchesDomain = domainFilter === 'all' || skill.domain === domainFilter;
    return matchesSearch && matchesDomain;
  });

  // Highlight matching text
  const highlightText = (text: string | undefined) => {
    if (!text || !searchTerm) return text || '-';
    
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <mark key={i} className="bg-yellow-300 dark:bg-yellow-600 px-0.5 rounded font-semibold">
              {part}
            </mark>
          ) : part
        )}
      </span>
    );
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  const expertCount = skills.filter(s => Number(s.rating) === 5).length;
  const avgRating = skills.length
    ? (skills.reduce((sum, s) => sum + (Number(s.rating) || 0), 0) / skills.length).toFixed(1)
    : '0.0';

  return (
    <div className="container mx-auto py-8 space-y-8">
      <PageTitle title="Skills Portfolio & Analytics" />
      
      {/* Hero Section with Search */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Troy Latter</h2>
            <p className="text-muted-foreground mt-2">
              {skills.length} tracked skills across {domains.length} domains
            </p>
          </div>
        </div>

        {/* Prominent Search Bar */}
        <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="🔍 Search across all skills, tools, projects, certifications, and impact metrics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Select value={domainFilter} onValueChange={setDomainFilter}>
                <SelectTrigger className="md:w-[200px] h-12">
                  <SelectValue placeholder="Filter domain" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Domains</SelectItem>
                  {domains.map(domain => (
                    <SelectItem key={domain} value={domain}>{domain}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {searchTerm && (
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Badge variant="secondary">{filteredSkills.length} matches</Badge>
                <span>Search highlights appear in yellow across the table</span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* TOP 25 COMPREHENSIVE SKILLS MATRIX */}
      <Card className="border-2">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            Top 25 Skills - Full Matrix View
          </CardTitle>
          <CardDescription className="text-base">
            Complete portfolio with certifications, proof points, impact metrics, and market trends
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-muted/50 sticky top-0 z-10">
                <tr>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20">#</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[220px]">💼 Skill & Alignment</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[140px]">🏷️ Domain</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20">⭐ Rating</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[180px]">🎓 Certification</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[200px]">✅ Proof Points</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[240px]">🚀 Project Examples</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[160px]">🛠️ Tools</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[200px]">📊 Impact Metrics</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[120px]">📈 Trend</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20">🔥 Match</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20">📅 Year</th>
                </tr>
              </thead>
              <tbody>
                {topSkills.map((skill, idx) => (
                  <tr 
                    key={idx} 
                    className={`border-b hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all ${
                      idx % 2 === 0 ? 'bg-muted/20' : ''
                    }`}
                  >
                    <td className="p-3 font-bold text-primary">{idx + 1}</td>
                    <td className="p-3">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">{domainEmojis[skill.domain] || '📌'}</span>
                        <div>
                          <div className="font-bold text-base mb-1">{highlightText(skill.skill)}</div>
                          <div className="text-xs text-muted-foreground flex flex-wrap gap-1">
                            {skill.role_alignment && (
                              <Badge variant="secondary" className="text-xs">
                                {highlightText(skill.role_alignment)}
                              </Badge>
                            )}
                            {skill['Proficiency Level'] && (
                              <Badge variant="outline" className="text-xs">
                                {highlightText(skill['Proficiency Level'])}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge 
                        variant="default" 
                        className="whitespace-nowrap text-xs font-semibold"
                      >
                        {highlightText(skill.domain)}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <StarRating rating={skill.rating} />
                      <div className="text-xs text-muted-foreground mt-1">
                        {skill.rating}/5
                      </div>
                    </td>
                    <td className="p-3">
                      {skill.Certification && skill.Certification !== 'None' ? (
                        <div className="flex items-start gap-1">
                          <span className="text-primary">✓</span>
                          <span className="text-xs font-medium">{highlightText(skill.Certification)}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">No certification</span>
                      )}
                    </td>
                    <td className="p-3">
                      <div className="text-xs leading-relaxed">
                        {skill.proof ? (
                          <div className="flex items-start gap-1">
                            <span className="text-primary flex-shrink-0">💎</span>
                            <span className="font-medium">{highlightText(skill.proof)}</span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                        {skill.evidence_level && (
                          <Badge variant="outline" className="text-xs mt-1">
                            {skill.evidence_level}
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-xs leading-relaxed">
                        {skill['Project Examples'] ? (
                          <div className="flex items-start gap-1">
                            <span className="flex-shrink-0">🎯</span>
                            <span>{highlightText(skill['Project Examples'])}</span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-xs">
                        {skill['Tools Used'] ? (
                          <Badge variant="secondary" className="text-xs">
                            {highlightText(skill['Tools Used'])}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-xs font-semibold">
                        {skill.impact_metric ? (
                          <div className="flex items-start gap-1 text-primary">
                            <span>📊</span>
                            <span>{highlightText(skill.impact_metric)}</span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      {skill.market_trend ? (
                        <Badge 
                          variant={skill.market_trend === 'Rising' ? 'default' : 'secondary'}
                          className="text-xs font-semibold"
                        >
                          {skill.market_trend === 'Rising' && <TrendingUp className="h-3 w-3 mr-1" />}
                          {skill.market_trend}
                        </Badge>
                      ) : (
                        <span className="text-xs text-muted-foreground">Stable</span>
                      )}
                    </td>
                    <td className="p-3">
                      {skill.alignment_score && (
                        <div className="text-center">
                          <div className={`text-xs font-bold ${
                            Number(skill.alignment_score) >= 90 ? 'text-primary' :
                            Number(skill.alignment_score) >= 80 ? 'text-foreground' :
                            'text-muted-foreground'
                          }`}>
                            {skill.alignment_score}%
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      <Badge variant="outline" className="text-xs">
                        {skill.recency_year || 'N/A'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{skills.length}</div>
            <p className="text-xs text-muted-foreground">Total Skills</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{expertCount}</div>
            <p className="text-xs text-muted-foreground">Expert-Level</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{avgRating}/5</div>
            <p className="text-xs text-muted-foreground">Avg Proficiency</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{risingSkills.length}</div>
            <p className="text-xs text-muted-foreground">Rising Skills</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-8">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="summary" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Summary
          </TabsTrigger>
          <TabsTrigger value="all" className="gap-2">
            <Activity className="h-4 w-4" />
            All Skills
          </TabsTrigger>
          <TabsTrigger value="charts" className="gap-2">
            <BarChart className="h-4 w-4" />
            Coverage
          </TabsTrigger>
        </TabsList>

        {/* Summary Tab */}
        <TabsContent value="summary" className="space-y-6 mt-6">
          {/* Radar Chart */}
          <RadarChart />
          
          {/* Rising Skills */}
          {risingSkills.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Rising Skills
                </CardTitle>
                <CardDescription>Skills with strong upward momentum</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {risingSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{domainEmojis[skill.domain] || '📌'}</span>
                        <Badge variant="secondary" className="text-xs">Rising</Badge>
                      </div>
                      <div className="font-medium text-sm">{skill.skill}</div>
                      <div className="text-xs text-muted-foreground mt-1">{skill.domain}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* All Skills Table */}
        <TabsContent value="all" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Skills ({filteredSkills.length})</CardTitle>
              <div className="flex gap-4 mt-4">
                <Input
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
                <Select value={domainFilter} onValueChange={setDomainFilter}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    {domains.map(domain => (
                      <SelectItem key={domain} value={domain}>
                        {domainEmojis[domain] || '📌'} {domain}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {filteredSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-xl">{domainEmojis[skill.domain] || '📌'}</span>
                      <div className="flex-1">
                        <div className="font-medium">{skill.skill}</div>
                        <div className="text-sm text-muted-foreground">{skill.domain}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <StarRating rating={skill.rating} />
                      {String(skill.alignment_score).toLowerCase().includes('rising') && (
                        <Badge variant="secondary" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Charts & Insights */}
        <TabsContent value="charts" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Domain Mastery */}
            <Card>
              <CardHeader>
                <CardTitle>Domain Mastery</CardTitle>
                <CardDescription>Skills distribution across domains</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={domainData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                    <YAxis 
                      dataKey="domain" 
                      type="category" 
                      width={150}
                      stroke="hsl(var(--muted-foreground))"
                      style={{ fontSize: '12px' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="count" fill="hsl(217, 91%, 60%)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Proficiency Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Proficiency Distribution</CardTitle>
                <CardDescription>Breakdown by expertise level</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={proficiencyData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {proficiencyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Rising Skills */}
          {risingSkills.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Rising Skills
                </CardTitle>
                <CardDescription>Skills with strong upward momentum</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {risingSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{domainEmojis[skill.domain] || '📌'}</span>
                        <Badge variant="secondary" className="text-xs">Rising</Badge>
                      </div>
                      <div className="font-medium text-sm">{skill.skill}</div>
                      <div className="text-xs text-muted-foreground mt-1">{skill.domain}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
