import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

// Organized navigation structure
const navigationCategories = [
  {
    title: 'About Troy',
    mainPath: '/executive-profile',
    items: [
      { path: '/executive-profile', label: 'Executive Profile' },
      { path: '/leadership-style', label: 'Leadership Style' },
      { path: '/your-profile-stars', label: 'Customer Activations' },
    ]
  },
  {
    title: 'Experience & Impact',
    mainPath: '/experience-and-impact',
    items: [
      { path: '/strategic-projects', label: 'Strategic Projects' },
      { path: '/responsibilities', label: 'Customer Initiatives' },
      { path: '/customer-asks-stars', label: 'Innovation Approach' },
    ]
  },
  {
    title: 'Team & Capabilities',
    mainPath: '/core-competencies',
    items: [
      { path: '/core-competencies', label: 'Core Competencies' },
      { path: '/industry-expertise', label: 'Industry Expertise' },
      { path: '/people-involved', label: 'People Involved' },
    ]
  },
  {
    title: 'Microsites',
    mainPath: '/microsites',
    items: [
      { path: '/microsites/envato', label: 'Envato Strategic Paths' },
      { path: '/microsites/agentforce', label: 'Agentforce Portfolio' },
      { path: '/microsites/lab3', label: 'Lab3 Analysis' },
      { path: '/microsites/interview-prep', label: 'Shield AI' },
      { path: '/microsites/pega', label: 'PEGA' },
    ]
  }
];

const standaloneRoute = { path: '/contact', label: 'Contact' };

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActiveCategory = (category: typeof navigationCategories[0]) => {
    return category.items.some(item => location.pathname === item.path);
  };

  const isActivePath = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  
  return (
    <header className="bg-[#0A101E]/95 backdrop-blur-sm text-white shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link 
              to="/"
              className="flex items-center hover:opacity-90 transition-opacity"
              onClick={closeMobileMenu}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-3 shadow-lg">
                <span className="text-lg font-bold">TL</span>
              </div>
              <div>
                <span className="text-xl font-semibold">Troy Latter</span>
                <div className="text-xs text-gray-300">AI & Technology Leader</div>
              </div>
            </Link>
          </div>

          {/* Talk to Troy CTA */}
          <div className="hidden lg:flex items-center">
            <Button
              onClick={() => {
                const widget = document.querySelector('[data-floating-chat]');
                if (widget) {
                  const button = widget.querySelector('button');
                  button?.click();
                }
              }}
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 hover:from-purple-600 hover:via-blue-600 hover:to-teal-600 text-white text-sm px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mr-4"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Talk to Troy
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigationCategories.map((category) => (
              <div key={category.title} className="relative">
                <DropdownMenu>
                  <div className="flex items-center">
                    <Link
                      to={category.mainPath}
                      className={`text-white hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-2 py-2 ${
                        isActivePath(category.mainPath) ? 'text-[#56A4E3]' : ''
                      }`}
                    >
                      {category.title}
                    </Link>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`text-white hover:text-[#56A4E3] hover:bg-white/10 p-1 ml-1 ${
                          isActiveCategory(category) ? 'text-[#56A4E3]' : ''
                        }`}
                        aria-label={`Open ${category.title} submenu`}
                      >
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                  </div>
                  <DropdownMenuContent className="bg-[#0A101E]/95 backdrop-blur-sm border-gray-700 shadow-xl min-w-[200px] z-50">
                    {category.items.map((item) => (
                      <DropdownMenuItem key={item.path} className="focus:bg-white/10 p-0">
                        <Link
                          to={item.path}
                          className={`w-full px-3 py-2 text-sm text-gray-200 hover:text-[#56A4E3] transition-colors ${
                            isActivePath(item.path) ? 'text-[#56A4E3] bg-white/10' : ''
                          }`}
                        >
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
            
            <Link
              to={standaloneRoute.path}
              className={`text-white hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-3 py-2 ${
                isActivePath(standaloneRoute.path) ? 'text-[#56A4E3]' : ''
              }`}
            >
              {standaloneRoute.label}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700 animate-fade-in backdrop-blur-sm bg-[#0A101E]/90">
            <nav className="flex flex-col space-y-1 pb-4">
              {navigationCategories.map((category) => (
                <div key={category.title} className="border-b border-gray-700 pb-2 mb-2">
                  <Link
                    to={category.mainPath}
                    className={`text-gray-200 hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-2 py-3 block mb-1 rounded-lg hover:bg-white/10 active:bg-white/20 ${
                      isActivePath(category.mainPath) ? 'text-[#56A4E3] bg-white/10' : ''
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {category.title}
                  </Link>
                  {category.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-gray-200 hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-4 py-2 block rounded-lg hover:bg-white/5 active:bg-white/10 ${
                        isActivePath(item.path) ? 'bg-white/10 text-[#56A4E3]' : ''
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              
              <Link
                to={standaloneRoute.path}
                className={`text-gray-200 hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-2 py-3 rounded-lg hover:bg-white/10 active:bg-white/20 ${
                  isActivePath(standaloneRoute.path) ? 'bg-white/10 text-[#56A4E3]' : ''
                }`}
                onClick={closeMobileMenu}
              >
                {standaloneRoute.label}
              </Link>
              
              {/* Mobile Talk to Troy CTA */}
              <Button
                onClick={() => {
                  const widget = document.querySelector('[data-floating-chat]');
                  if (widget) {
                    const button = widget.querySelector('button');
                    button?.click();
                  }
                  closeMobileMenu();
                }}
                className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 hover:from-purple-600 hover:via-blue-600 hover:to-teal-600 text-white text-sm px-4 py-3 rounded-lg shadow-lg mx-2 mt-4 flex items-center justify-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Talk to Troy
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
