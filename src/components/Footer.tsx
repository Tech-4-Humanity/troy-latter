
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Secondary navigation items moved to footer
  const secondaryRoutes = [
    { path: '/resources/90-day-plan', label: '90-Day Plan' },
    { path: '/resources/whitepapers', label: 'Whitepapers' },
    { path: '/resources/lean-canvas', label: 'Lean Canvas' },
    { path: '/your-profile-stars', label: 'Your Profile Stars' },
    { path: '/opportunity-stars', label: 'Opportunity Stars' },
    { path: '/customer-asks-stars', label: 'Customer Asks Stars' },
  ];
  
  return (
    <footer className="bg-vault-primary text-white py-8 border-t border-vault-primary/50 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
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
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <div>
              <h3 className="text-vault-accent font-semibold mb-2 text-sm">Navigation</h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-1">
                <Link to="/" className="text-gray-300 hover:text-vault-accent text-sm transition-colors duration-200">
                  Home
                </Link>
                <Link to="/about-troy" className="text-gray-300 hover:text-vault-accent text-sm transition-colors duration-200">
                  About Troy
                </Link>
                <Link to="/what-is-innovation" className="text-gray-300 hover:text-vault-accent text-sm transition-colors duration-200">
                  What Is Innovation
                </Link>
                <Link to="/the-opportunity" className="text-gray-300 hover:text-vault-accent text-sm transition-colors duration-200">
                  The Opportunity
                </Link>
                <Link to="/customer-asks" className="text-gray-300 hover:text-vault-accent text-sm transition-colors duration-200">
                  Customer Asks
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-vault-accent font-semibold mb-2 text-sm">Resources</h3>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-x-8 gap-y-1">
                {secondaryRoutes.map((route) => (
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
      </div>
    </footer>
  );
};
