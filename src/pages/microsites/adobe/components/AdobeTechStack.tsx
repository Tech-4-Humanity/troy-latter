import { techStack } from '../data/adobeContent';
import { useInView } from '../hooks/useInView';

export const AdobeTechStack = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="tech" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-adobe-orange font-mono text-sm tracking-widest uppercase mb-4">
            Technical Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Technology Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStack.map((category, index) => (
            <div
              key={category.title}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-adobe-red/50 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-adobe-red transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-adobe-red rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
