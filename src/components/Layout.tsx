
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingChatWidget } from './FloatingChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-brand-light/30">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-8 animate-fade-in max-w-7xl">
        {children}
      </main>
      <Footer />
      <div data-floating-chat>
        <FloatingChatWidget />
      </div>
    </div>
  );
};
