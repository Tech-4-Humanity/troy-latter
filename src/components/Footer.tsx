
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Main navigation routes - these will be in the footer navbar section
  const routes = [
    { path: '/', label: 'Home' },
    { path: '/about-troy', label: 'About Troy' },
    { path: '/innovation-definition', label: 'Innovation Definition' },
    { path: '/innovation-journey', label: 'Innovation Journey' },
    { path: '/customer-success-stories', label: 'Success Stories' },
    { path: '/innovation-frameworks', label: 'Frameworks' },
    { path: '/faqs', label: 'FAQs' },
  ];
  
  // Secondary navigation items moved to footer
  const resourceLinks = [
    { path: '/resources/90-day-plan', label: '90-Day Plan' },
    { path: '/resources/whitepapers', label: 'Whitepapers' },
    { path: '/resources/lean-canvas', label: 'Lean Canvas' },
    { path: '/your-profile-stars', label: 'Your Profile Stars' },
    { path: '/opportunity-stars', label: 'Opportunity Stars' },
    { path: '/customer-asks-stars', label: 'Customer Asks Stars' },
  ];
  
  // Pages moved from navbar to footer
  const mainPagesInFooter = [
    { path: '/the-opportunity', label: 'The Opportunity' },
    { path: '/responsibilities', label: 'Responsibilities' },
    { path: '/you', label: 'Skills & Experience' },
    { path: '/customer-asks', label: 'Customer Asks' },
  ];
  
  // New leadership pages in footer
  const leadershipPages = [
    { path: '/leadership-style', label: 'Leadership Style' },
    { path: '/people-involved', label: 'People Involved' },
    { path: '/upcoming-projects', label: 'Upcoming Projects' },
  ];
  
  return (
    <footer className="bg-vault-primary text-white py-8 border-t border-vault-primary/50 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
          
          <div>
            <h3 className="text-vault-accent font-semibold mb-3 text-sm">Navigation</h3>
            <div className="grid grid-cols-1 gap-y-2">
              {routes.map((route) => (
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
          
          <div>
            <h3 className="text-vault-accent font-semibold mb-3 text-sm">Key Pages</h3>
            <div className="grid grid-cols-1 gap-y-2">
              {mainPagesInFooter.map((route) => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className="text-gray-300 hover:text-vault-accent text-sm transition-colors duration-200"
                >
                  {route.label}
                </Link>
              ))}
              {leadershipPages.map((route) => (
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
          
          <div>
            <h3 className="text-vault-accent font-semibold mb-3 text-sm">Resources</h3>
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
