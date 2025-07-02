import React from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

interface AgentforceSidebarProps {
  sections: Section[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export const AgentforceSidebar = ({ sections, activeSection, onSectionChange }: AgentforceSidebarProps) => {
  return (
    <div className="w-80 bg-gradient-to-b from-blue-50 to-white border-r border-gray-200 min-h-screen shadow-sm">
      <div className="p-8">
        {/* Agentforce Logo */}
        <div className="mb-8 flex justify-center">
          <div className="h-12 w-32 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            Agentforce
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Senior Principal Engineer</h1>
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