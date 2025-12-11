import { projects } from '../data/adobeContent';
import { useInView } from '../hooks/useInView';

export const AdobeProjects = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-adobe-orange font-mono text-sm tracking-widest uppercase mb-4">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Projects & Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-adobe-red/50 transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Tag */}
              <div className="px-6 pt-6">
                <span 
                  className="inline-block bg-adobe-red/20 text-adobe-red text-xs font-mono tracking-wider px-3 py-1"
                  style={{ clipPath: 'polygon(4px 0, 100% 0, calc(100% - 4px) 100%, 0 100%)' }}
                >
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-adobe-red transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-adobe-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
