
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Main navigation links
  const mainLinks = [
    { path: '/executive-profile', label: 'Executive Profile' },
    { path: '/core-competencies', label: 'Core Competencies' },
    { path: '/strategic-projects', label: 'Strategic Projects' },
    { path: '/responsibilities', label: 'Initiatives' },
    { path: '/industry-expertise', label: 'Industry Expertise' },
    { path: '/leadership-style', label: 'Leadership Style' },
    { path: '/your-profile-stars', label: 'Practical Examples' },
  ];
  
  // Resource links
  const resourceLinks = [
    { path: '/resources/whitepapers', label: 'Whitepapers' },
    { path: '/resources/lean-canvas', label: 'Lean Canvas' },
    { path: '/microsites/lab3', label: 'Lab3' },
    { path: '/what-is-innovation', label: 'What is Innovation' },
  ];
  
  return (
    <footer className="bg-brand-primary text-white py-12 border-t border-brand-primary/50 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and branding */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-centre justify-centre mr-3">
                  <span className="text-lg font-bold">TL</span>
                </div>
                <div>
                  <div className="text-lg font-semibold">Troy Latter</div>
                  <div className="text-xs text-gray-300">CTO & CIO Leader</div>
                </div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Strategic Technology Leader
            </p>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-brand-accent font-medium mb-4">Resources</h3>
            <div className="space-y-2">
              {resourceLinks.map((route) => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className="block text-gray-300 hover:text-brand-accent text-sm transition-colors duration-200"
                >
                  {route.label}
                </Link>
              ))}
              <Link 
                to="/faqs" 
                className="block text-gray-300 hover:text-brand-accent text-sm transition-colors duration-200"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
        
        {/* Navigation - Full width section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <h3 className="text-brand-accent font-medium mb-4">Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {mainLinks.map((route) => (
              <Link 
                key={route.path}
                to={route.path} 
                className="block text-gray-300 hover:text-brand-accent text-sm transition-colors duration-200"
              >
                {route.label}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-centre">
          <p className="text-gray-400 text-sm">
            © {currentYear} Troy Latter. Strategic Technology Leadership & Innovation Advisory.
          </p>
        </div>
      </div>
    </footer>
  );
};
