
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Resource links for the Resources section
  const resourceLinks = [
    { path: '/resources/90-day-plan', label: '90-Day Plan' },
    { path: '/resources/whitepapers', label: 'Whitepapers' },
    { path: '/resources/lean-canvas', label: 'Lean Canvas' },
  ];
  
  return (
    <footer className="bg-brand-primary text-white py-8 border-t border-brand-primary/50 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Logo and legal */}
          <div>
            <Link to="/" className="inline-block">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-lg font-bold">TL</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm">
              © {currentYear} Troy Latter
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Innovation & Technology Leadership
            </p>
          </div>
          
          {/* FAQs only */}
          <div className="flex flex-col justify-start">
            <Link 
              to="/faqs" 
              className="text-brand-accent hover:text-brand-accent text-lg font-medium transition-colors duration-200"
            >
              FAQs
            </Link>
          </div>
          
          {/* Resources section */}
          <div>
            <h3 className="text-brand-accent font-medium mb-3 text-lg">Resources</h3>
            <div className="grid grid-cols-1 gap-y-2">
              {resourceLinks.map((route) => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className="text-gray-300 hover:text-brand-accent text-sm transition-colors duration-200"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
