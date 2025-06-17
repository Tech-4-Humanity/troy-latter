
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
    <div className="w-80 bg-gradient-to-b from-blue-50 to-white border-r border-gray-200 min-h-screen shadow-sm">
      <div className="p-8">
        {/* Lab3 Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="https://www.lab3.com.au/wp-content/uploads/2021/06/logo.svg" 
            alt="Lab3 Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Principal Technologist</h1>
          <p className="text-sm text-gray-600">Application & Interview Materials</p>
        </div>
        
        <div className="space-y-8">
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full border-blue-200 hover:bg-blue-50" asChild>
              <a href="https://www.linkedin.com/in/theinnovater/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                Connect on LinkedIn
              </a>
            </Button>
          </div>

          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
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
