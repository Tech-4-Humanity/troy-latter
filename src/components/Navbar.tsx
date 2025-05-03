
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const routes = [
  { path: '/your-pitch', label: 'About Troy' },
  { path: '/the-opportunity', label: 'The Opportunity' },
  { path: '/responsibilities', label: 'Responsibilities' },
  { path: '/you', label: 'My Matching Experience' },
  { path: '/customer-asks', label: 'Customer Asks' },
  { path: '/faqs', label: 'FAQs' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header className="bg-vault-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link 
              to="/head-of-innovation"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <img 
                src="/lovable-uploads/debf0aec-1583-4cf6-9bce-523fdf3eb009.png" 
                alt="Vault Cloud" 
                className="h-10" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-gray-100 hover:text-vault-accent transition-colors duration-200 text-sm font-medium px-2 py-1 border-b-2 ${
                  location.pathname === route.path ? 'border-vault-accent text-vault-accent' : 'border-transparent'
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-vault-primary/80"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700 animate-fade-in">
            <nav className="flex flex-col space-y-3 pb-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`text-gray-200 hover:text-vault-accent transition-colors duration-200 text-sm font-medium px-2 py-1 ${
                    location.pathname === route.path ? 'bg-vault-primary/30 text-vault-accent rounded' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
