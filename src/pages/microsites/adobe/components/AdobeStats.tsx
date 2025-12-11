import { useEffect, useState } from 'react';
import { stats } from '../data/adobeContent';
import { useInView } from '../hooks/useInView';

const useCountAnimation = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const StatCard = ({ value, label, suffix = '', delay = 0 }: { value: number; label: string; suffix?: string; delay?: number }) => {
  const { ref, isInView } = useInView({ threshold: 0.5 });
  const count = useCountAnimation(value, 2000, isInView);

  return (
    <div
      ref={ref}
      className="relative group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div 
        className="bg-gradient-to-br from-adobe-red/20 to-adobe-purple/20 backdrop-blur-sm border border-white/10 p-8 text-center hover:border-adobe-red/50 transition-all duration-300"
        style={{ clipPath: 'polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)' }}
      >
        <div className="text-5xl md:text-6xl font-bold text-white mb-2">
          {count}{suffix}
        </div>
        <div className="text-gray-400 text-sm uppercase tracking-wider">
          {label}
        </div>
      </div>
    </div>
  );
};

export const AdobeStats = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-adobe-red/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <p className="text-adobe-orange font-mono text-sm tracking-widest uppercase mb-4">
            Impact & Scale
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            By The Numbers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
