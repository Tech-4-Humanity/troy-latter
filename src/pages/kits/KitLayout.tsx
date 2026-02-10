import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SkillCard {
  title: string;
  level: string;
  description: string;
}

interface StarStory {
  situation: string;
  task: string;
  action: string;
  result: string;
}

interface KitLayoutProps {
  company: string;
  role: string;
  location: string;
  date: string;
  fitScore: number;
  fitLabel: string;
  accentColor: string;
  accentLight: string;
  coverLetter: ReactNode;
  skills: SkillCard[];
  starStories: StarStory[];
  gapAnalysis?: ReactNode;
  whySection?: ReactNode;
}

export const KitLayout = ({
  company,
  role,
  location,
  date,
  fitScore,
  fitLabel,
  accentColor,
  accentLight,
  coverLetter,
  skills,
  starStories,
  gapAnalysis,
  whySection,
}: KitLayoutProps) => {
  const fitBand = fitScore >= 85 ? 'Strong Fit' : fitScore >= 60 ? 'Standard Fit' : 'Development Fit';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg">
            T<span style={{ color: accentColor }}>L</span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link to="/executive-profile" className="text-slate-500 hover:text-slate-900 transition-colors">Profile</Link>
            <Link to="/tools/skills" className="text-slate-500 hover:text-slate-900 transition-colors">Skills</Link>
            <a href="#cover-letter" className="text-slate-500 hover:text-slate-900 transition-colors">Cover Letter</a>
            <a href="#skills" className="text-slate-500 hover:text-slate-900 transition-colors">Skills</a>
            <a href="#stars" className="text-slate-500 hover:text-slate-900 transition-colors">STAR Stories</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: accentColor }}>{company}</p>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{role}</h1>
          <p className="text-slate-500 text-sm">{location} · Application Kit · {date}</p>
        </div>

        {/* Fit Score */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-2xl border-2 px-12 py-6" style={{ borderColor: accentColor }}>
            <div className="text-5xl font-extrabold" style={{ color: accentColor }}>{fitScore}%</div>
            <div className="text-slate-500 text-sm mt-1">PLMOS Fit Score — {fitBand}</div>
            <span
              className="inline-block mt-2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
              style={{ backgroundColor: accentLight, color: accentColor }}
            >
              {fitLabel}
            </span>
          </div>
        </div>

        {/* Cover Letter */}
        <section id="cover-letter" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
            Cover Letter
          </h2>
          <div className="prose prose-slate max-w-none text-[0.92rem] leading-relaxed">
            {coverLetter}
          </div>
        </section>

        {/* Skill Alignment */}
        <section id="skills" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
            Skill Alignment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((s, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                <h3 className="text-sm font-bold mb-1" style={{ color: accentColor }}>{s.title}</h3>
                <p className="text-xs text-slate-400 mb-1">{s.level}</p>
                <p className="text-sm text-slate-600">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STAR Stories */}
        <section id="stars" className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
            STAR Stories
          </h2>
          {starStories.map((star, i) => (
            <div key={i} className="rounded-r-lg p-4 mb-4 border-l-4" style={{ backgroundColor: accentLight, borderColor: accentColor }}>
              <p className="text-sm mb-1"><span className="font-bold">S:</span> {star.situation}</p>
              <p className="text-sm mb-1"><span className="font-bold">T:</span> {star.task}</p>
              <p className="text-sm mb-1"><span className="font-bold">A:</span> {star.action}</p>
              <p className="text-sm"><span className="font-bold">R:</span> {star.result}</p>
            </div>
          ))}
        </section>

        {/* Gap Analysis */}
        {gapAnalysis && (
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
              Gap Analysis
            </h2>
            <div className="text-sm text-slate-700">{gapAnalysis}</div>
          </section>
        )}

        {/* Why Section */}
        {whySection && (
          <section className="mb-12">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
              Why {company}
            </h2>
            <div className="text-sm text-slate-700">{whySection}</div>
          </section>
        )}

        {/* Links */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 pb-2 border-b-2" style={{ borderColor: accentColor, color: accentColor }}>
            Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li><strong>Portfolio:</strong> <Link to="/" className="underline" style={{ color: accentColor }}>troylatter.com</Link></li>
            <li><strong>Executive Profile:</strong> <Link to="/executive-profile" className="underline" style={{ color: accentColor }}>Executive Profile</Link></li>
            <li><strong>Skills Matrix:</strong> <Link to="/tools/skills" className="underline" style={{ color: accentColor }}>175+ Skills Assessed</Link></li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-center pt-8 mt-8 border-t border-slate-200 text-xs text-slate-400">
          Generated by JET Engine — Evidence-Gated Application Kit<br />
          Tech 4 Humanity · troylatter.com
        </footer>
      </main>
    </div>
  );
};
