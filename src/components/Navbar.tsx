import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
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
const useNavigationStructure = () => {
  const { t } = useTranslation('nav');
  
  return [
    {
      title: t('aboutTroy'),
      mainPath: '/executive-profile',
      items: [
        { path: '/executive-profile', label: t('executiveProfile') },
        { path: '/leadership-style', label: t('leadershipStyle') },
        { path: '/your-profile-stars', label: 'Customer Activations' },
      ]
    },
    {
      title: t('experienceAndImpact'),
      mainPath: '/experience-and-impact',
      items: [
        { path: '/strategic-projects', label: t('strategicProjects') },
        { path: '/responsibilities', label: 'Customer Initiatives' },
        { path: '/customer-asks-stars', label: 'Innovation Approach' },
      ]
    },
    {
      title: t('coreCompetencies'),
      mainPath: '/core-competencies',
      items: [
        { path: '/core-competencies', label: t('coreCompetencies') },
        { path: '/industry-expertise', label: t('industryExpertise') },
        { path: '/people-involved', label: t('peopleInvolved') },
      ]
    },
  ];
};

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation('nav');
  const navigationCategories = useNavigationStructure();
  
  const isActiveCategory = (category: typeof navigationCategories[0]) => {
    return category.items.some(item => location.pathname === item.path) || location.pathname === category.mainPath;
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

          {/* Talk to Troy CTA & Language Switcher */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <Button
              onClick={() => {
                const widget = document.querySelector('[data-floating-chat]');
                if (widget) {
                  const button = widget.querySelector('button');
                  button?.click();
                }
              }}
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 hover:from-purple-600 hover:via-blue-600 hover:to-teal-600 text-white text-sm px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              {t('talkToTroy')}
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
            
            {/* Microsites Dropdown */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-[#56A4E3] hover:bg-white/10 text-sm font-medium px-3 py-2"
                  >
                    Microsites
                    <ChevronDown className="h-3 w-3 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0A101E]/95 backdrop-blur-sm border-gray-700 shadow-xl min-w-[200px] z-50">
                  <DropdownMenuItem className="focus:bg-white/10 p-0">
                    <Link
                      to="/microsites/lenovo"
                      className="w-full px-3 py-2 text-sm text-gray-200 hover:text-[#56A4E3] transition-colors"
                    >
                      Lenovo Playbook
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-white/10 p-0">
                    <Link
                      to="/microsites/lenovo/focus-images"
                      className="w-full px-3 py-2 text-sm text-gray-200 hover:text-[#56A4E3] transition-colors"
                    >
                      Focus Images
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <Link
              to="/contact"
              className={`text-white hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-3 py-2 ${
                isActivePath('/contact') ? 'text-[#56A4E3]' : ''
              }`}
            >
              {t('contact')}
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
              
              {/* Mobile Microsites Section */}
              <div className="border-b border-gray-700 pb-2 mb-2">
                <div className="text-gray-200 text-sm font-medium px-2 py-3 block mb-1">
                  Microsites
                </div>
                <Link
                  to="/microsites/lenovo"
                  className="text-gray-200 hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-4 py-2 block rounded-lg hover:bg-white/5 active:bg-white/10"
                  onClick={closeMobileMenu}
                >
                  Lenovo Playbook
                </Link>
                <Link
                  to="/microsites/lenovo/focus-images"
                  className="text-gray-200 hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-4 py-2 block rounded-lg hover:bg-white/5 active:bg-white/10"
                  onClick={closeMobileMenu}
                >
                  Focus Images
                </Link>
              </div>
              
              <Link
                to="/contact"
                className={`text-gray-200 hover:text-[#56A4E3] transition-colors duration-200 text-sm font-medium px-2 py-3 rounded-lg hover:bg-white/10 active:bg-white/20 ${
                  isActivePath('/contact') ? 'bg-white/10 text-[#56A4E3]' : ''
                }`}
                onClick={closeMobileMenu}
              >
                {t('contact')}
              </Link>
              
              {/* Mobile Talk to Troy CTA */}
              {/* Mobile Language Switcher */}
              <div className="px-2 py-2">
                <LanguageSwitcher />
              </div>
              
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
                {t('talkToTroy')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
