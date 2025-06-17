
import React from 'react';

interface Lab3LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export const Lab3Layout = ({ sidebar, children }: Lab3LayoutProps) => {
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
