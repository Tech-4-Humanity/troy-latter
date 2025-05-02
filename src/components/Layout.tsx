
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-vault-light/30">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};
