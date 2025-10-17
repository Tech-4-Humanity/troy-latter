import React from 'react';
import { PageTitle } from '@/components/PageTitle';
import { Link } from 'react-router-dom';

export default function CVGenerator() {
  return (
    <div className="min-h-screen">
      <PageTitle title="AI CV Generator" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-card rounded-lg shadow-lg p-6 border-l-4 border-primary">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              How It Works
            </h2>
            <p className="text-muted-foreground mb-4">
              Paste any job description below to instantly generate a tailored CV that highlights 
              relevant experience, skills, and achievements. Powered by advanced AI that understands 
              context, industry terminology, and executive positioning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-2xl">📋</span>
                <div>
                  <div className="font-semibold text-foreground">Paste Job Description</div>
                  <div className="text-muted-foreground">Copy requirements from any job posting</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">🤖</span>
                <div>
                  <div className="font-semibold text-foreground">AI Analysis</div>
                  <div className="text-muted-foreground">Smart matching of skills and experience</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-2xl">📄</span>
                <div>
                  <div className="font-semibold text-foreground">Tailored CV</div>
                  <div className="text-muted-foreground">Board-ready document in seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded CV Generator Tool */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <iframe 
              src="https://cvgen-ui.vercel.app" 
              className="w-full border-2 border-border rounded-xl shadow-2xl"
              style={{ height: '85vh', minHeight: '600px' }}
              title="AI CV Generator Tool"
              sandbox="allow-scripts allow-forms allow-popups allow-modals"
              allow="clipboard-read; clipboard-write"
              onError={(e) => {
                console.error('Iframe failed to load:', e);
                const target = e.target as HTMLIFrameElement;
                target.style.display = 'none';
                const errorDiv = document.getElementById('iframe-error');
                if (errorDiv) errorDiv.style.display = 'block';
              }}
            />
            <div 
              id="iframe-error" 
              className="hidden p-8 text-center bg-destructive/10 border-2 border-destructive rounded-xl"
              style={{ minHeight: '600px', display: 'none' }}
            >
              <div className="flex flex-col items-center justify-center h-full gap-4">
                <div className="text-6xl">⚠️</div>
                <h3 className="text-xl font-bold text-foreground">CV Generator Temporarily Unavailable</h3>
                <p className="text-muted-foreground max-w-md">
                  The CV generation service is currently experiencing issues. Please try again later or contact support.
                </p>
                <Link 
                  to="/contact" 
                  className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="font-bold text-lg text-foreground mb-2">
              🎯 Context-Aware Matching
            </h3>
            <p className="text-sm text-muted-foreground">
              AI understands industry nuances and matches your experience to job requirements 
              with precision, highlighting transferable skills across domains.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-6 rounded-lg border border-secondary/20">
            <h3 className="font-bold text-lg text-foreground mb-2">
              ⚡ Instant Generation
            </h3>
            <p className="text-sm text-muted-foreground">
              No manual formatting or rewriting. Get a professional, ATS-optimized CV 
              in seconds, ready for executive-level applications.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg border border-accent/20">
            <h3 className="font-bold text-lg text-foreground mb-2">
              🔒 Privacy First
            </h3>
            <p className="text-sm text-muted-foreground">
              Your data is processed securely and never stored. Generate unlimited CVs 
              without compromising your privacy.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-6 rounded-lg border border-primary/20">
            <h3 className="font-bold text-lg text-foreground mb-2">
              📊 Executive-Ready Format
            </h3>
            <p className="text-sm text-muted-foreground">
              Optimised for C-suite and senior leadership roles with emphasis on strategic 
              impact, governance experience, and transformation delivery.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-12 text-center bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-bold mb-3">Need Strategic AI Advisory?</h3>
          <p className="mb-6 opacity-90">
            This tool showcases how AI can transform traditional processes. 
            Let's discuss how AI can accelerate innovation in your organisation.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-all transform hover:scale-105 shadow-lg"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
