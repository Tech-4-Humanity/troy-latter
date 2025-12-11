import { AdobeHero } from './components/AdobeHero';
import { AdobeTechStack } from './components/AdobeTechStack';
import { AdobeStats } from './components/AdobeStats';
import { AdobeProjects } from './components/AdobeProjects';
import { AdobeTimeline } from './components/AdobeTimeline';
import { AdobeContact } from './components/AdobeContact';

const AdobeIndex = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated mesh background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-adobe-red/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-adobe-purple/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-adobe-blue/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-white font-bold text-xl">
            <span className="text-adobe-red">T</span>L
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#tech" className="text-gray-400 hover:text-white transition-colors text-sm">Tech Stack</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#journey" className="text-gray-400 hover:text-white transition-colors text-sm">Journey</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>
          <a 
            href="#contact"
            className="bg-adobe-red hover:bg-adobe-deep-red text-white px-4 py-2 text-sm font-medium transition-colors"
            style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0% 100%)' }}
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Main content */}
      <main className="relative z-10">
        <AdobeHero />
        <AdobeTechStack />
        <AdobeStats />
        <AdobeProjects />
        <AdobeTimeline />
        <AdobeContact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Troy Latter. Built with passion for Adobe.
          </p>
          <div className="flex items-center gap-6">
            <a href="/" className="text-gray-500 hover:text-adobe-red transition-colors text-sm">
              Main Portfolio
            </a>
            <a href="/microsites" className="text-gray-500 hover:text-adobe-red transition-colors text-sm">
              All Microsites
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdobeIndex;
