
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Organized navigation sections
  const aboutLinks = [
    { path: '/executive-profile', label: 'Executive Profile' },
    { path: '/core-competencies', label: 'Core Competencies' },
    { path: '/leadership-style', label: 'Leadership Style' },
  ];
  
  const experienceLinks = [
    { path: '/strategic-projects', label: 'Strategic Projects' },
    { path: '/responsibilities', label: 'Customer Initiatives' },
    { path: '/your-profile-stars', label: 'Customer Activations' },
  ];
  
  const expertiseLinks = [
    { path: '/industry-expertise', label: 'Industry Expertise' },
    { path: '/customer-asks-stars', label: 'Innovation Approach' },
  ];
  
  const resourceLinks = [
    { path: '/resources/whitepapers', label: 'Whitepapers' },
    { path: '/resources/lean-canvas', label: 'Lean Canvas' },
    { path: '/microsites/lab3', label: 'Lab3' },
    { path: '/what-is-innovation', label: 'What is Innovation' },
    { path: '/faqs', label: 'FAQs' },
  ];
  
  return (
    <footer className="bg-brand-primary text-white py-8 border-t border-brand-primary/50 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* Branding - Compact */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-3">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm font-bold">TL</span>
                </div>
                <div>
                  <div className="text-base font-semibold">Troy Latter</div>
                  <div className="text-xs text-gray-300">CTO & CIO Leader</div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* About */}
          <div>
            <h3 className="text-brand-accent font-medium mb-3 text-sm">About</h3>
            <div className="space-y-1">
              {aboutLinks.map((route) => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className="block text-gray-300 hover:text-brand-accent text-xs transition-colors duration-200"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Experience */}
          <div>
            <h3 className="text-brand-accent font-medium mb-3 text-sm">Experience</h3>
            <div className="space-y-1">
              {experienceLinks.map((route) => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className="block text-gray-300 hover:text-brand-accent text-xs transition-colors duration-200"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Expertise */}
          <div>
            <h3 className="text-brand-accent font-medium mb-3 text-sm">Expertise</h3>
            <div className="space-y-1">
              {expertiseLinks.map((route) => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className="block text-gray-300 hover:text-brand-accent text-xs transition-colors duration-200"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-brand-accent font-medium mb-3 text-sm">Resources</h3>
            <div className="space-y-1">
              {resourceLinks.map((route) => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className="block text-gray-300 hover:text-brand-accent text-xs transition-colors duration-200"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright - Single line at bottom */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400 text-xs">
            © {currentYear} Troy Latter. Strategic Technology Leadership & Innovation Advisory.
          </p>
        </div>
      </div>
    </footer>
  );
};
