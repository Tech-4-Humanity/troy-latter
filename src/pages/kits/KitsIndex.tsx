import { useState } from 'react';
import { Link } from 'react-router-dom';

type Status = 'pipeline' | 'scoring' | 'draft' | 'review' | 'ready' | 'submitted' | 'interview';

interface Job {
  id: string;
  slug?: string;
  company: string;
  role: string;
  location: string;
  fitScore: number;
  fitLabel: string;
  accentColor: string;
  status: Status;
  source: string;
  discoveredDate: string;
  applyUrl?: string;
  notes?: string;
}

const PIPELINE: Job[] = [
  {
    id: 'hashi-001',
    slug: 'hashicorp',
    company: 'HashiCorp',
    role: 'Field CTO — Asia Pacific Japan',
    location: 'APAC',
    fitScore: 89,
    fitLabel: 'Executive Technical Leadership',
    accentColor: '#7C3AED',
    status: 'ready',
    source: 'PLMOS',
    discoveredDate: '2026-02-05',
  },
  {
    id: 'actgov-001',
    slug: 'act-gov',
    company: 'ACT Government',
    role: 'Executive Branch Manager — Data, AI & Digital Records',
    location: 'Canberra, ACT',
    fitScore: 87,
    fitLabel: 'Government AI & Data Leadership',
    accentColor: '#1D4ED8',
    status: 'ready',
    source: 'PLMOS',
    discoveredDate: '2026-02-04',
  },
  {
    id: 'anth-001',
    slug: 'anthropic',
    company: 'Anthropic',
    role: 'Principal Solutions Architect',
    location: 'APAC / Remote',
    fitScore: 85,
    fitLabel: 'Production Claude Practitioner',
    accentColor: '#D97706',
    status: 'ready',
    source: 'PLMOS',
    discoveredDate: '2026-02-06',
  },
  {
    id: 'anth-002',
    company: 'Anthropic',
    role: 'Chief AI Officer',
    location: 'San Francisco / Remote',
    fitScore: 98,
    fitLabel: 'Exceptional Match',
    accentColor: '#D97706',
    status: 'pipeline',
    source: 'PLMOS',
    discoveredDate: '2026-02-10',
  },
  {
    id: 'openai-001',
    company: 'OpenAI',
    role: 'Solutions Architect',
    location: 'Remote',
    fitScore: 95,
    fitLabel: 'AI Platform Leadership',
    accentColor: '#10B981',
    status: 'pipeline',
    source: 'PLMOS',
    discoveredDate: '2026-02-09',
  },
];

const STATUS_CONFIG: Record<Status, { label: string; color: string; bg: string; order: number }> = {
  pipeline:  { label: 'In Pipeline',  color: 'text-slate-600',  bg: 'bg-slate-100',  order: 0 },
  scoring:   { label: 'Scoring',      color: 'text-purple-600', bg: 'bg-purple-100', order: 1 },
  draft:     { label: 'Draft Kit',    color: 'text-amber-600',  bg: 'bg-amber-100',  order: 2 },
  review:    { label: 'In Review',    color: 'text-orange-600', bg: 'bg-orange-100', order: 3 },
  ready:     { label: 'Ready to Send',color: 'text-green-600',  bg: 'bg-green-100',  order: 4 },
  submitted: { label: 'Submitted',    color: 'text-blue-600',   bg: 'bg-blue-100',   order: 5 },
  interview: { label: 'Interviewing', color: 'text-indigo-600', bg: 'bg-indigo-100', order: 6 },
};

const WORKFLOW_STEPS = [
  { key: 'pipeline',  label: '1. Discover',   desc: 'PLMOS finds & scores jobs from Indeed, LinkedIn, direct' },
  { key: 'scoring',   label: '2. Score',       desc: 'Fit scoring: Tech 35% · Leadership 30% · Domain 25% · Cultural 10%' },
  { key: 'draft',     label: '3. Draft Kit',   desc: 'Cover letter, skills grid, STAR stories generated' },
  { key: 'review',    label: '4. You Review',  desc: 'Q&A session — refine gaps, adjust tone, add assets' },
  { key: 'ready',     label: '5. Ready',       desc: 'Final kit page at /kits/{slug} — shareable URL' },
  { key: 'submitted', label: '6. Submitted',   desc: 'Application sent — tracking begins' },
];

const fitBand = (score: number) => {
  if (score >= 85) return { label: 'Strong Fit', color: 'text-green-600 bg-green-50 border-green-200' };
  if (score >= 60) return { label: 'Standard Fit', color: 'text-blue-600 bg-blue-50 border-blue-200' };
  return { label: 'Explore', color: 'text-amber-600 bg-amber-50 border-amber-200' };
};

type FilterTab = 'all' | Status;

const KitsIndex = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filtered = activeTab === 'all' ? PIPELINE : PIPELINE.filter(j => j.status === activeTab);
  const sorted = [...filtered].sort((a, b) => b.fitScore - a.fitScore);

  const counts: Partial<Record<Status, number>> = {};
  PIPELINE.forEach(j => { counts[j.status] = (counts[j.status] || 0) + 1; });

  const readyCount = counts.ready || 0;
  const pipelineCount = counts.pipeline || 0;
  const totalCount = PIPELINE.length;
  const avgScore = Math.round(PIPELINE.reduce((s, j) => s + j.fitScore, 0) / totalCount);

  const tabs: { key: FilterTab; label: string; count: number }[] = [
    { key: 'all',       label: 'All',           count: totalCount },
    { key: 'pipeline',  label: 'Pipeline',      count: pipelineCount },
    { key: 'scoring',   label: 'Scoring',       count: counts.scoring || 0 },
    { key: 'draft',     label: 'Drafts',        count: counts.draft || 0 },
    { key: 'review',    label: 'In Review',     count: counts.review || 0 },
    { key: 'ready',     label: 'Ready',         count: readyCount },
    { key: 'submitted', label: 'Submitted',     count: counts.submitted || 0 },
    { key: 'interview', label: 'Interviewing',  count: counts.interview || 0 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">JET Command Centre</h1>
            <p className="text-sm text-slate-500">Daily pipeline · Score · Draft · Review · Send</p>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="/executive-profile" className="text-slate-500 hover:text-slate-900">Profile</a>
            <a href="/tools/skills" className="text-slate-500 hover:text-slate-900">Skills</a>
            <a href="/" className="text-slate-500 hover:text-slate-900">Portfolio</a>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-6">
        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
            <div className="text-2xl font-bold text-slate-900">{totalCount}</div>
            <div className="text-xs text-slate-500">Total Jobs</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">{pipelineCount}</div>
            <div className="text-xs text-slate-500">Awaiting Score</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
            <div className="text-2xl font-bold text-green-600">{readyCount}</div>
            <div className="text-xs text-slate-500">Ready to Send</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4 text-center">
            <div className="text-2xl font-bold text-slate-900">{avgScore}%</div>
            <div className="text-xs text-slate-500">Avg Fit Score</div>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6">
          <div className="flex items-center gap-1 overflow-x-auto">
            {WORKFLOW_STEPS.map((step, i) => (
              <div key={step.key} className="flex items-center">
                <button
                  onClick={() => setActiveTab(step.key as FilterTab)}
                  className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    activeTab === step.key
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                  title={step.desc}
                >
                  {step.label}
                </button>
                {i < WORKFLOW_STEPS.length - 1 && (
                  <span className="text-slate-300 mx-1">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {tabs.filter(t => t.count > 0 || t.key === 'all').map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === tab.key
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-400'
              }`}
            >
              {tab.label} {tab.count > 0 && <span className="ml-1 opacity-70">({tab.count})</span>}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="space-y-3">
          {sorted.map((job) => {
            const band = fitBand(job.fitScore);
            const statusCfg = STATUS_CONFIG[job.status];
            const hasKit = !!job.slug;

            return (
              <div
                key={job.id}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all p-5"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: job.accentColor }}>
                        {job.company}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusCfg.color} ${statusCfg.bg}`}>
                        {statusCfg.label}
                      </span>
                      <span className="text-xs text-slate-400">{job.discoveredDate}</span>
                    </div>
                    <h2 className="text-base font-semibold text-slate-900">{job.role}</h2>
                    <p className="text-sm text-slate-500">{job.location}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold" style={{ color: job.accentColor }}>
                      {job.fitScore}%
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${band.color}`}>
                      {band.label}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full"
                      style={{ width: `${job.fitScore}%`, backgroundColor: job.accentColor }}
                    />
                  </div>
                  <span className="text-xs text-slate-400">{job.fitLabel}</span>
                </div>

                {/* Actions */}
                <div className="mt-3 flex items-center gap-2 flex-wrap">
                  {hasKit && (
                    <Link
                      to={`/kits/${job.slug}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg hover:bg-slate-700 transition-colors"
                    >
                      View Kit →
                    </Link>
                  )}
                  {!hasKit && job.status === 'pipeline' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-medium rounded-lg border border-purple-200">
                      Run: /score {job.company.toLowerCase()} in Claude
                    </span>
                  )}
                  {job.status === 'ready' && (
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-lg border border-green-200">
                      ✓ Kit ready — share URL with hiring team
                    </span>
                  )}
                  {job.status === 'pipeline' && (
                    <span className="text-xs text-slate-400 italic">
                      Open a Claude session → paste JD → run PLMOS scoring → generate kit → review → publish
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* How to use — daily workflow */}
        <div className="mt-8 bg-slate-50 rounded-xl border border-slate-200 p-6">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">Daily Workflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="font-semibold text-slate-900 mb-2">1. Open Claude Session</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Start a new Claude thread. Paste the job description. Claude will run PLMOS scoring, generate a cover letter, skills grid, and STAR stories.
              </p>
              <div className="mt-2 px-2 py-1 bg-slate-50 rounded text-xs font-mono text-slate-500">
                "Score this role for me: [paste JD]"
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="font-semibold text-slate-900 mb-2">2. Q&A Review</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Claude presents the draft kit. You ask questions, adjust tone, highlight specific assets, close gaps. At least 1 round of Q&A before publishing.
              </p>
              <div className="mt-2 px-2 py-1 bg-slate-50 rounded text-xs font-mono text-slate-500">
                "Strengthen the cloud gov angle" / "Add the NV2 clearance story"
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 border border-slate-200">
              <div className="font-semibold text-slate-900 mb-2">3. Publish & Send</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Claude writes the React page, commits to GitHub, deploys to Vercel. You get a clean URL to share: troylatter.com/kits/company-name
              </p>
              <div className="mt-2 px-2 py-1 bg-slate-50 rounded text-xs font-mono text-slate-500">
                "Ship it" → deploys to /kits/company-slug
              </div>
            </div>
          </div>
        </div>

        {/* Scoring methodology */}
        <div className="mt-4 bg-white rounded-xl border border-slate-200 p-6">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-3">Scoring Dimensions</h3>
          <div className="grid grid-cols-4 gap-4 text-center text-sm">
            <div><div className="font-bold text-slate-900">Technical</div><div className="text-slate-500">35%</div></div>
            <div><div className="font-bold text-slate-900">Leadership</div><div className="text-slate-500">30%</div></div>
            <div><div className="font-bold text-slate-900">Domain</div><div className="text-slate-500">25%</div></div>
            <div><div className="font-bold text-slate-900">Cultural</div><div className="text-slate-500">10%</div></div>
          </div>
          <p className="text-xs text-slate-400 mt-3 text-center">
            ≥85% Strong Fit · ≥60% Standard Fit · &lt;60% Explore · Evidence-gated: MIN_EVIDENCE=8, MIN_COMPANY_FACTS=3
          </p>
        </div>

        <footer className="mt-10 py-6 text-center text-xs text-slate-400 border-t border-slate-100">
          JET Command Centre — Evidence-Gated Employment Engine<br />
          Tech 4 Humanity · troylatter.com
        </footer>
      </div>
    </div>
  );
};

export default KitsIndex;
