
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Resource links for the Resources section
  const resourceLinks = [
    { path: '/resources/90-day-plan', label: '90-Day Plan' },
    { path: '/resources/whitepapers', label: 'Whitepapers' },
    { path: '/resources/lean-canvas', label: 'Lean Canvas' },
    { path: '/innovation-frameworks', label: 'Frameworks' },
  ];
  
  return (
    <footer className="bg-vault-primary text-white py-8 border-t border-vault-primary/50 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Logo and legal */}
          <div>
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/debf0aec-1583-4cf6-9bce-523fdf3eb009.png" 
                alt="Vault Cloud" 
                className="h-10 mb-4" 
              />
            </Link>
            <p className="text-gray-300 text-sm">
              © {currentYear} REAL Innovation starts
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Australia's sovereign cloud provider
            </p>
          </div>
          
          {/* FAQs - no heading */}
          <div className="flex flex-col justify-start">
            <Link 
              to="/faqs" 
              className="text-vault-accent hover:text-vault-accent text-lg font-medium transition-colors duration-200"
            >
              FAQs
            </Link>
          </div>
          
          {/* Resources section */}
          <div>
            <h3 className="text-vault-accent font-medium mb-3 text-lg">Resources</h3>
            <div className="grid grid-cols-1 gap-y-2">
              {resourceLinks.map((route) => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className="text-gray-300 hover:text-vault-accent text-sm transition-colors duration-200"
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
