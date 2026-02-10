import { Link } from 'react-router-dom';

interface KitCard {
  slug: string;
  company: string;
  role: string;
  location: string;
  fitScore: number;
  fitLabel: string;
  accentColor: string;
  status: 'ready' | 'draft' | 'submitted';
}

const kits: KitCard[] = [
  {
    slug: 'hashicorp',
    company: 'HashiCorp',
    role: 'Field CTO — Asia Pacific Japan',
    location: 'APAC',
    fitScore: 89,
    fitLabel: 'Executive Technical Leadership',
    accentColor: '#7C3AED',
    status: 'ready',
  },
  {
    slug: 'act-gov',
    company: 'ACT Government',
    role: 'Executive Branch Manager — Data, AI & Digital Records',
    location: 'Canberra, ACT',
    fitScore: 87,
    fitLabel: 'Government AI & Data Leadership',
    accentColor: '#1D4ED8',
    status: 'ready',
  },
  {
    slug: 'anthropic',
    company: 'Anthropic',
    role: 'Principal Solutions Architect',
    location: 'APAC / Remote',
    fitScore: 85,
    fitLabel: 'Production Claude Practitioner',
    accentColor: '#D97706',
    status: 'ready',
  },
];

const fitBand = (score: number) => {
  if (score >= 85) return { label: 'Strong Fit', color: 'text-green-600 bg-green-50 border-green-200' };
  if (score >= 60) return { label: 'Standard Fit', color: 'text-blue-600 bg-blue-50 border-blue-200' };
  return { label: 'Development Fit', color: 'text-amber-600 bg-amber-50 border-amber-200' };
};

const statusBadge = (status: KitCard['status']) => {
  const map = {
    ready: { label: 'Ready to Send', color: 'bg-green-100 text-green-700' },
    draft: { label: 'Draft', color: 'bg-gray-100 text-gray-600' },
    submitted: { label: 'Submitted', color: 'bg-blue-100 text-blue-700' },
  };
  return map[status];
};

const KitsIndex = () => {
  const readyCount = kits.filter(k => k.status === 'ready').length;
  const avgScore = Math.round(kits.reduce((sum, k) => sum + k.fitScore, 0) / kits.length);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Application Kits</h1>
            <p className="text-sm text-slate-500">Evidence-gated application packages — JET Engine</p>
          </div>
          <div className="flex gap-4 text-sm">
            <a href="https://troylatter.com" className="text-slate-500 hover:text-slate-900">Portfolio</a>
            <a href="https://troylatter.com/executive-profile" className="text-slate-500 hover:text-slate-900">Profile</a>
            <a href="https://troylatter.com/tools/skills" className="text-slate-500 hover:text-slate-900">Skills</a>
          </div>
        </div>
      </header>

      {/* Dashboard Stats */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center">
            <div className="text-3xl font-bold text-slate-900">{kits.length}</div>
            <div className="text-sm text-slate-500 mt-1">Total Kits</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center">
            <div className="text-3xl font-bold text-green-600">{readyCount}</div>
            <div className="text-sm text-slate-500 mt-1">Ready to Send</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-5 text-center">
            <div className="text-3xl font-bold text-slate-900">{avgScore}%</div>
            <div className="text-sm text-slate-500 mt-1">Avg Fit Score</div>
          </div>
        </div>

        {/* Kit Cards */}
        <div className="space-y-4">
          {kits
            .sort((a, b) => b.fitScore - a.fitScore)
            .map((kit) => {
              const band = fitBand(kit.fitScore);
              const badge = statusBadge(kit.status);
              return (
                <Link
                  key={kit.slug}
                  to={`/kits/${kit.slug}`}
                  className="block bg-white rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all p-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: kit.accentColor }}
                        >
                          {kit.company}
                        </span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badge.color}`}>
                          {badge.label}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-slate-900">{kit.role}</h2>
                      <p className="text-sm text-slate-500 mt-1">{kit.location}</p>
                    </div>
                    <div className="text-right ml-6">
                      <div
                        className="text-3xl font-bold"
                        style={{ color: kit.accentColor }}
                      >
                        {kit.fitScore}%
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full border font-medium ${band.color}`}>
                        {band.label}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 bg-slate-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all"
                        style={{ width: `${kit.fitScore}%`, backgroundColor: kit.accentColor }}
                      />
                    </div>
                    <span className="text-xs text-slate-400">{kit.fitLabel}</span>
                  </div>
                </Link>
              );
            })}
        </div>

        {/* Pipeline Summary */}
        <div className="mt-10 bg-slate-50 rounded-xl border border-slate-200 p-6">
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">Scoring Methodology</h3>
          <div className="grid grid-cols-4 gap-4 text-center text-sm">
            <div>
              <div className="font-bold text-slate-900">Technical</div>
              <div className="text-slate-500">35% weight</div>
            </div>
            <div>
              <div className="font-bold text-slate-900">Leadership</div>
              <div className="text-slate-500">30% weight</div>
            </div>
            <div>
              <div className="font-bold text-slate-900">Domain</div>
              <div className="text-slate-500">25% weight</div>
            </div>
            <div>
              <div className="font-bold text-slate-900">Cultural</div>
              <div className="text-slate-500">10% weight</div>
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">
            Scores calculated by PLMOS Engine using evidence-gated profile matching. ≥85% = Strong Fit · ≥60% = Standard Fit · &lt;60% = Development Fit
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-12 py-8 text-center text-sm text-slate-400 border-t border-slate-100">
          Generated by JET Engine — Evidence-Gated Application Kits<br />
          Tech 4 Humanity · troylatter.com
        </footer>
      </div>
    </div>
  );
};

export default KitsIndex;
