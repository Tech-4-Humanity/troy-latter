
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
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
  
  return (
    <header className="bg-[#0A101E]/95 backdrop-blur-sm text-white shadow-lg sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link 
              to="/"
              className="flex items-center hover:opacity-90 transition-opacity"
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
                      >
                        <ChevronDown className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                  </div>
                  <DropdownMenuContent className="bg-[#0A101E]/95 backdrop-blur-sm border-gray-700 shadow-xl min-w-[200px]">
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
          <div className="lg:hidden py-4 border-t border-gray-700 animate-fade-in backdrop-blur-sm bg-[#0A101E]/90">
            <nav className="flex flex-col space-y-1 pb-4">
              {navigationCategories.map((category) => (
                <div key={category.title} className="border-b border-gray-700 pb-2 mb-2">
                  <Link
                    to={category.mainPath}
                    className={`text-gray-200 hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-2 py-3 block mb-1 rounded-lg hover:bg-white/10 ${
                      isActivePath(category.mainPath) ? 'text-[#56A4E3] bg-white/10' : ''
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.title}
                  </Link>
                  {category.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`text-gray-200 hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-4 py-2 block rounded-lg hover:bg-white/5 ${
                        isActivePath(item.path) ? 'bg-white/10 text-[#56A4E3]' : ''
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ))}
              
              <Link
                to={standaloneRoute.path}
                className={`text-gray-200 hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-2 py-3 rounded-lg hover:bg-white/10 ${
                  isActivePath(standaloneRoute.path) ? 'bg-white/10 text-[#56A4E3]' : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {standaloneRoute.label}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
