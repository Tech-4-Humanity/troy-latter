import React from 'react';

interface AgentforceLayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export const AgentforceLayout = ({ sidebar, children }: AgentforceLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {sidebar}
        <div className="flex-1">
          <div className="max-w-5xl mx-auto px-8 py-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};