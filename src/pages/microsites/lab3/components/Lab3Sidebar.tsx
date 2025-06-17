
import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

interface Lab3SidebarProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export const Lab3Sidebar = ({ sections, activeSection, onSectionChange }: Lab3SidebarProps) => {
  return (
    <div className="w-80 bg-gray-900 border-r border-gray-700 min-h-screen">
      <div className="p-6">
        {/* Lab3 Logo */}
        <div className="mb-6 flex justify-center">
          <img 
            src="https://www.lab3.com.au/wp-content/uploads/2021/06/logo.svg" 
            alt="Lab3 Logo" 
            className="h-12 w-auto"
          />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-2">Lab3 Principal Technologist</h1>
        
        <div className="space-y-8">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="https://www.linkedin.com/in/theinnovater/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeSection === section.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
