import { timeline } from '../data/adobeContent';
import { useInView } from '../hooks/useInView';

export const AdobeTimeline = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="journey" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-adobe-orange font-mono text-sm tracking-widest uppercase mb-4">
            Career Path
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Professional Journey
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-adobe-red via-adobe-purple to-adobe-blue" />

          {/* Timeline items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={item.company}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 200}ms`, transition: 'all 0.6s ease-out' }}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div 
                    className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-adobe-red/50 transition-all"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)' }}
                  >
                    <span className="text-adobe-orange font-mono text-sm">{item.date}</span>
                    <h3 className="text-xl font-bold text-white mt-2">{item.company}</h3>
                    <p className="text-adobe-red font-medium mt-1">{item.role}</p>
                    <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400 text-sm flex items-center gap-2 md:justify-start">
                          <span className="w-1.5 h-1.5 bg-adobe-purple rounded-full flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-adobe-red rounded-full border-4 border-black" />

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
