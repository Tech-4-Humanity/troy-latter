
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const routes = [
  { path: '/head-of-innovation', label: 'Role Overview' },
  { path: '/about', label: 'About Vault' },
  { path: '/the-opportunity', label: 'The Opportunity' },
  { path: '/responsibilities', label: 'Responsibilities' },
  { path: '/you', label: 'Your Profile' },
  { path: '/why-i-applied', label: 'Why I Applied' },
  { path: '/faqs', label: 'FAQs' },
  { path: '/your-pitch', label: 'Your Pitch' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-vault-primary text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
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
                className="text-gray-100 hover:text-vault-accent transition-colors duration-200 text-sm font-medium"
              >
                {route.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
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
                  className="text-gray-200 hover:text-vault-accent transition-colors duration-200 text-sm font-medium px-2 py-1"
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
