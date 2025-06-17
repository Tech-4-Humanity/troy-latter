
import React from 'react';

interface Lab3LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export const Lab3Layout = ({ sidebar, children }: Lab3LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="flex">
        {sidebar}
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
