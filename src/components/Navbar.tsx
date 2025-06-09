import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

// Main navigation routes - executive focused
const routes = [
  { path: '/executive-profile', label: 'Executive Profile' },
  { path: '/core-competencies', label: 'Core Competencies' },
  { path: '/industry-expertise', label: 'Industry Expertise' },
  { path: '/customer-success-stories', label: 'Success Stories' },
  { path: '/thought-leadership', label: 'Thought Leadership' },
  { path: '/current-roles', label: 'Current Roles' },
  { path: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header className="bg-[#0A101E] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link 
              to="/"
              className="flex items-center hover:opacity-90 transition-opacity"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-lg font-bold">TL</span>
              </div>
              <div>
                <span className="text-xl font-semibold">Troy Latter</span>
                <div className="text-xs text-gray-300">VP | CTO & CIO Leader</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-white hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-2 py-1 ${
                  location.pathname === route.path ? 'text-[#56A4E3]' : ''
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
            className="lg:hidden text-white hover:bg-[#0A101E]/80"
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
          <div className="lg:hidden py-4 border-t border-gray-700 animate-fade-in">
            <nav className="flex flex-col space-y-3 pb-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`text-gray-200 hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-2 py-1 ${
                    location.pathname === route.path ? 'bg-[#0A101E]/30 text-[#56A4E3] rounded' : ''
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
