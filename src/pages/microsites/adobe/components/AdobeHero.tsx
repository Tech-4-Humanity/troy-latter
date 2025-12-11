import { useEffect, useState } from 'react';
import { heroContent } from '../data/adobeContent';

export const AdobeHero = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % heroContent.rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <p className="text-adobe-orange font-mono text-sm tracking-widest uppercase">
            {heroContent.greeting}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {heroContent.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-adobe-red font-semibold">
            {heroContent.title}
          </h2>
          <p className="text-xl text-gray-300">
            {heroContent.subtitle}{' '}
            <span className="text-adobe-purple font-semibold inline-block min-w-[200px]">
              {heroContent.rotatingWords[currentWord]}
            </span>
          </p>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            {heroContent.description}
          </p>
          <button
            onClick={scrollToWork}
            className="group inline-flex items-center gap-3 bg-adobe-red hover:bg-adobe-deep-red text-white px-8 py-4 font-semibold transition-all duration-300"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
          >
            {heroContent.cta}
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>

        {/* Photo */}
        <div className="relative">
          <div 
            className="relative overflow-hidden"
            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 90%, 90% 100%, 0 100%, 0 10%)' }}
          >
            <img
              src="/lovable-uploads/troy-adobe-photo.png"
              alt="Troy Latter - Forward Deployed AI Engineer"
              className="w-full max-w-md mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-adobe-red/30" 
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%)' }} />
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-adobe-purple/20 blur-xl" />
        </div>
      </div>
    </section>
  );
};
