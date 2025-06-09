import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Main navigation links
  const mainLinks = [
    { path: '/executive-profile', label: 'Executive Profile' },
    { path: '/core-competencies', label: 'Core Competencies' },
    { path: '/contact', label: 'Contact' },
  ];
  
  // Resource links
  const resourceLinks = [
    { path: '/resources/whitepapers', label: 'Whitepapers' },
    { path: '/resources/lean-canvas', label: 'Lean Canvas' },
    { path: '/microsites/interview-prep', label: 'Shield AI' },
  ];

  // Contact information
  const contactInfo = [
    { icon: Mail, label: 'troy.latter@gmail.com', href: 'mailto:troy.latter@gmail.com' },
    { icon: Phone, label: '+61 424 882 136', href: 'tel:+61424882136' },
    { icon: Linkedin, label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/theinnovater/' },
  ];
  
  return (
    <footer className="bg-brand-primary text-white py-12 border-t border-brand-primary/50 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and contact */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg font-bold">TL</span>
                </div>
                <div>
                  <div className="text-lg font-semibold">Troy Latter</div>
                  <div className="text-xs text-gray-300">VP | CTO & CIO Leader</div>
                </div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm mb-4">
              Strategic Technology Leader
            </p>
            <div className="space-y-2">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center text-gray-300 hover:text-brand-accent text-sm transition-colors"
                >
                  <contact.icon className="h-4 w-4 mr-2" />
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-brand-accent font-medium mb-4">Navigation</h3>
            <div className="space-y-2">
              {mainLinks.map((route) => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className="block text-gray-300 hover:text-brand-accent text-sm transition-colors duration-200"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-brand-accent font-medium mb-4">Resources</h3>
            <div className="space-y-2">
              {resourceLinks.map((route) => (
                <Link 
                  key={route.path}
                  to={route.path} 
                  className="block text-gray-300 hover:text-brand-accent text-sm transition-colors duration-200"
                >
                  {route.label}
                </Link>
              ))}
              <Link 
                to="/faqs" 
                className="block text-gray-300 hover:text-brand-accent text-sm transition-colors duration-200"
              >
                FAQs
              </Link>
            </div>
          </div>

          {/* Credentials */}
          <div>
            <h3 className="text-brand-accent font-medium mb-4">Credentials</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>AGSVA NV2 Clearance</div>
              <div>AWS Solutions Architect</div>
              <div>Azure AI Certified</div>
              <div>GCP Certified</div>
              <div>Standards Australia BCI</div>
              <div>QLD Gov AI Hub Board</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Troy Latter. Strategic Technology Leadership & Innovation Advisory.
          </p>
        </div>
      </div>
    </footer>
  );
};
