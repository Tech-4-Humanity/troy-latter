import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download, Eye, Copy, Check } from 'lucide-react';

interface JobSiteConfig {
  companyName: string;
  role: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  headline: string;
  stat1: string;
  stat1Value: string;
  stat2: string;
  stat2Value: string;
  stat3: string;
  stat3Value: string;
  linkedInArticles: string[];
  subdomain: string;
}

const JobSiteGenerator: React.FC = () => {
  const [config, setConfig] = useState<JobSiteConfig>({
    companyName: '',
    role: '',
    primaryColor: '#ef4444',
    secondaryColor: '#ec4899',
    accentColor: '#9333ea',
    headline: '',
    stat1: 'Articles Written',
    stat1Value: '500+',
    stat2: 'CIOs Advised',
    stat2Value: '50+',
    stat3: 'Years Experience',
    stat3Value: '15+',
    linkedInArticles: [],
    subdomain: ''
  });

  const [generatedCode, setGeneratedCode] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [copied, setCopied] = useState(false);

  // Company presets for quick setup
  const companyPresets = {
    adobe: {
      companyName: 'Adobe',
      role: 'AI Evangelist APJ',
      primaryColor: '#ef4444',
      secondaryColor: '#ec4899',
      accentColor: '#9333ea',
      headline: 'Marketing Has Always Been AI',
      subdomain: 'adobe'
    },
    notion: {
      companyName: 'Notion',
      role: 'Professional Services',
      primaryColor: '#000000',
      secondaryColor: '#333333',
      accentColor: '#ffffff',
      headline: 'Productivity = Memory',
      subdomain: 'notion'
    },
    salesforce: {
      companyName: 'Salesforce',
      role: 'Solution Architect',
      primaryColor: '#0176d3',
      secondaryColor: '#00a1e0',
      accentColor: '#032d60',
      headline: 'CRM = Intelligence',
      subdomain: 'salesforce'
    },
    microsoft: {
      companyName: 'Microsoft',
      role: 'Cloud Solution Architect',
      primaryColor: '#0078d4',
      secondaryColor: '#50e6ff',
      accentColor: '#004578',
      headline: 'Cloud = Transformation',
      subdomain: 'microsoft'
    },
    google: {
      companyName: 'Google',
      role: 'Cloud Solutions Lead',
      primaryColor: '#4285f4',
      secondaryColor: '#ea4335',
      accentColor: '#34a853',
      headline: 'Platform = Possibility',
      subdomain: 'google'
    }
  };

  const loadPreset = (preset: keyof typeof companyPresets) => {
    setConfig({ ...config, ...companyPresets[preset] });
  };

  const generateSiteCode = () => {
    const code = `import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, Download, Linkedin, Mail } from 'lucide-react';

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: \`linear-gradient(135deg, ${config.primaryColor}ee 0%, ${config.secondaryColor}ee 50%, ${config.accentColor}ee 100%)\`,
            backgroundSize: '200% 200%',
            animation: 'gradient-shift 15s ease infinite'
          }}
        />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Digital background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <motion.div 
        className="relative z-20 text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-7xl md:text-9xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          TROY LATTER
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl font-light tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ${config.role} at ${config.companyName}
        </motion.p>
      </motion.div>
    </section>
  );
};

// Thesis Section
const ThesisSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          ${config.headline}
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed opacity-80">
          For 15+ years, I've been at the intersection of technology and transformation,
          helping leaders navigate the future. From AWS to Oracle, from government to enterprise,
          I've seen how the right strategy transforms organizations.
        </p>
      </motion.div>
    </section>
  );
};

// Numbers Section with animated counters
const NumbersSection = () => {
  const stats = [
    { label: '${config.stat1}', value: '${config.stat1Value}' },
    { label: '${config.stat2}', value: '${config.stat2Value}' },
    { label: '${config.stat3}', value: '${config.stat3Value}' }
  ];

  return (
    <section 
      className="py-32 px-4"
      style={{
        background: \`linear-gradient(135deg, ${config.primaryColor} 0%, ${config.secondaryColor} 100%)\`
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="text-center text-white"
            >
              <div className="text-6xl md:text-7xl font-bold mb-4">{stat.value}</div>
              <div className="text-xl opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-20">
      <div className="max-w-4xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold mb-12"
        >
          LET'S BUILD THE FUTURE TOGETHER
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <a 
            href="https://drive.google.com/file/d/YOUR_CV_FILE_ID/view"
            className="flex flex-col items-center space-y-4 p-8 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition"
          >
            <Download className="w-12 h-12" />
            <span className="text-lg font-semibold">Download Full CV</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/theinnovater"
            className="flex flex-col items-center space-y-4 p-8 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition"
          >
            <Linkedin className="w-12 h-12" />
            <span className="text-lg font-semibold">LinkedIn Profile</span>
          </a>
          
          <a 
            href="https://calendly.com/tech4humanity/30min"
            className="flex flex-col items-center space-y-4 p-8 bg-white/10 backdrop-blur rounded-lg hover:bg-white/20 transition"
          >
            <Calendar className="w-12 h-12" />
            <span className="text-lg font-semibold">Schedule Meeting</span>
          </a>
        </motion.div>
        
        <p className="text-xl">troy@tech4humanity.com.au</p>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-sm"
        >
          Made with ❤️ for ${config.companyName}
        </motion.p>
      </div>
    </section>
  );
};

// Main App Component
const ${config.companyName}CVSite = () => {
  return (
    <div className="font-sans antialiased">
      <HeroSection />
      <ThesisSection />
      <NumbersSection />
      <ContactSection />
    </div>
  );
};

export default ${config.companyName}CVSite;`;

    setGeneratedCode(code);
    setShowPreview(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCode = () => {
    const blob = new Blob([generatedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${config.subdomain}-cv-site.tsx`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-3"
        >
          <Sparkles className="w-8 h-8 text-purple-500" />
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Job Site Generator
          </h2>
        </motion.div>
        <p className="text-gray-600 text-lg">
          Create company-specific portfolio sites in 5 minutes
        </p>
      </div>

      {/* Quick Presets */}
      <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-100">
        <h3 className="text-xl font-semibold mb-4">Quick Presets</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {Object.keys(companyPresets).map((preset) => (
            <button
              key={preset}
              onClick={() => loadPreset(preset as keyof typeof companyPresets)}
              className="px-4 py-3 rounded-lg border-2 hover:border-purple-500 transition-all font-medium capitalize"
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* Configuration Form */}
      <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-100 space-y-6">
        <h3 className="text-xl font-semibold mb-4">Site Configuration</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Company Name *</label>
            <input
              type="text"
              value={config.companyName}
              onChange={(e) => setConfig({ ...config, companyName: e.target.value })}
              className="w-full px-4 py-2 border-2 rounded-lg focus:border-purple-500 outline-none"
              placeholder="e.g., Adobe"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Role/Position *</label>
            <input
              type="text"
              value={config.role}
              onChange={(e) => setConfig({ ...config, role: e.target.value })}
              className="w-full px-4 py-2 border-2 rounded-lg focus:border-purple-500 outline-none"
              placeholder="e.g., AI Evangelist APJ"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subdomain *</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={config.subdomain}
                onChange={(e) => setConfig({ ...config, subdomain: e.target.value.toLowerCase() })}
                className="flex-1 px-4 py-2 border-2 rounded-lg focus:border-purple-500 outline-none"
                placeholder="adobe"
              />
              <span className="text-gray-500">.tech4humanity.com.au</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Headline/Thesis *</label>
            <input
              type="text"
              value={config.headline}
              onChange={(e) => setConfig({ ...config, headline: e.target.value })}
              className="w-full px-4 py-2 border-2 rounded-lg focus:border-purple-500 outline-none"
              placeholder="e.g., Marketing Has Always Been AI"
            />
          </div>
        </div>

        {/* Color Pickers */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Primary Color</label>
            <input
              type="color"
              value={config.primaryColor}
              onChange={(e) => setConfig({ ...config, primaryColor: e.target.value })}
              className="w-full h-12 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Secondary Color</label>
            <input
              type="color"
              value={config.secondaryColor}
              onChange={(e) => setConfig({ ...config, secondaryColor: e.target.value })}
              className="w-full h-12 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Accent Color</label>
            <input
              type="color"
              value={config.accentColor}
              onChange={(e) => setConfig({ ...config, accentColor: e.target.value })}
              className="w-full h-12 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Statistics Configuration */}
        <div className="space-y-4">
          <h4 className="font-semibold">Statistics Section</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <input
                type="text"
                value={config.stat1}
                onChange={(e) => setConfig({ ...config, stat1: e.target.value })}
                className="w-full px-4 py-2 border-2 rounded-lg focus:border-purple-500 outline-none"
                placeholder="Stat 1 Label"
              />
              <input
                type="text"
                value={config.stat1Value}
                onChange={(e) => setConfig({ ...config, stat1Value: e.target.value })}
                className="w-full px-4 py-2 border-2 rounded-lg focus:border-purple-500 outline-none"
                placeholder="Stat 1 Value"
              />
            </div>

            <div className="space-y-2">
              <input
                type="text"
                value={config.stat2}
                onChange={(e) => setConfig({ ...config, stat2: e.target.value })}
                className="w-full px-4 py-2 border-2 rounded-lg focus:border-purple-500 outline-none"
                placeholder="Stat 2 Label"
              />
              <input
                type="text"
                value={config.stat2Value}
                onChange={(e) => setConfig({ ...config, stat2Value: e.target.value })}
                className="w-full px-4 py-2 border-2 rounded-lg focus:border-purple-500 outline-none"
                placeholder="Stat 2 Value"
              />
            </div>

            <div className="space-y-2">
              <input
                type="text"
                value={config.stat3}
                onChange={(e) => setConfig({ ...config, stat3: e.target.value })}
                className="w-full px-4 py-2 border-2 rounded-lg focus:border-purple-500 outline-none"
                placeholder="Stat 3 Label"
              />
              <input
                type="text"
                value={config.stat3Value}
                onChange={(e) => setConfig({ ...config, stat3Value: e.target.value })}
                className="w-full px-4 py-2 border-2 rounded-lg focus:border-purple-500 outline-none"
                placeholder="Stat 3 Value"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={generateSiteCode}
        disabled={!config.companyName || !config.role || !config.subdomain}
        className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5" />
          Generate Job Site Code
        </div>
      </motion.button>

      {/* Generated Code Output */}
      {showPreview && generatedCode && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 rounded-lg p-6 text-white space-y-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Generated Site Code</h3>
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition flex items-center gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <button
                onClick={downloadCode}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>

          <pre className="overflow-x-auto text-sm bg-black/50 p-4 rounded">
            <code>{generatedCode}</code>
          </pre>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-blue-400">Deployment URL</h4>
            <p className="text-blue-300">
              {config.subdomain}.tech4humanity.com.au
            </p>
            <p className="text-sm text-gray-400">
              Deploy this code to your hosting platform and point your subdomain to it.
            </p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 space-y-2">
            <h4 className="font-semibold text-purple-400">Next Steps</h4>
            <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
              <li>Copy or download the generated code</li>
              <li>Create a new React project or add to existing</li>
              <li>Install dependencies: framer-motion, lucide-react</li>
              <li>Deploy to Vercel/Netlify or your hosting platform</li>
              <li>Configure DNS for {config.subdomain}.tech4humanity.com.au</li>
              <li>Update CV download link with your Google Drive file ID</li>
            </ol>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default JobSiteGenerator;
