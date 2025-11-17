
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '../ui/button';

interface MicrositeLayoutProps {
  children: React.ReactNode;
}

export const MicrositeLayout = ({ children }: MicrositeLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Microsite Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/" className="text-gray-600 hover:text-gray-900">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Main Site
                </Link>
              </Button>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold text-gray-900">
                {location.pathname.includes('interview-prep') ? 'Shield AI' : 
                 location.pathname.includes('agentforce') ? 'Agentforce' :
                 location.pathname.includes('lenovo') ? 'Lenovo ANZ' :
                 location.pathname.includes('wns') ? 'WNS - Lead Technical Consultant' : 'Micro-Sites'}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Microsite Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Microsite Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
          <p>
            Part of <Link to="/" className="text-blue-600 hover:underline">Troy Latter's Executive Portfolio</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};
