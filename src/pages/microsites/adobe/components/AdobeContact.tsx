import { Mail, Linkedin, Github, FileText } from 'lucide-react';

export const AdobeContact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-adobe-red/10 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto relative text-center">
        <p className="text-adobe-orange font-mono text-sm tracking-widest uppercase mb-4">
          Let's Connect
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Build the Future?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          I'm passionate about bringing AI innovation to creative workflows. Whether you're exploring 
          Firefly integrations, GenStudio implementations, or custom AI solutions, let's talk.
        </p>

        {/* Contact buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:troy@tech4humanity.com.au"
            className="group inline-flex items-center gap-3 bg-adobe-red hover:bg-adobe-deep-red text-white px-8 py-4 font-semibold transition-all duration-300"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
          <a
            href="https://www.linkedin.com/in/troylatter/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 font-semibold transition-all duration-300 border border-white/20"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 100%, 0% 100%)' }}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/troylatter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-adobe-red transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="/tools/cv-generator"
            className="text-gray-500 hover:text-adobe-red transition-colors"
          >
            <FileText className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
