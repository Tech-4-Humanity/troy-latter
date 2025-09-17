import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const routes = [
  { path: '/', name: 'Home', selectors: ['[data-testid="hero-section"]', 'nav'] },
  { path: '/about', name: 'About', selectors: ['h1', 'main'] },
  { path: '/about-troy', name: 'About Troy', selectors: ['h1', 'main'] },
  { path: '/executive-profile', name: 'Executive Profile', selectors: ['h1', 'main'] },
  { path: '/core-competencies', name: 'Core Competencies', selectors: ['h1', 'main'] },
  { path: '/leadership-style', name: 'Leadership Style', selectors: ['h1', 'main'] },
  { path: '/responsibilities', name: 'Responsibilities', selectors: ['h1', 'main'] },
  { path: '/experience-and-impact', name: 'Experience & Impact', selectors: ['h1', 'main'] },
  { path: '/industry-expertise', name: 'Industry Expertise', selectors: ['h1', 'main'] },
  { path: '/strategic-projects', name: 'Strategic Projects', selectors: ['h1', 'main'] },
  { path: '/upcoming-projects', name: 'Upcoming Projects', selectors: ['h1', 'main'] },
  { path: '/projects', name: 'Projects', selectors: ['h1', 'main'] },
  { path: '/innovation-definition', name: 'Innovation Definition', selectors: ['h1', 'main'] },
  { path: '/what-is-innovation', name: 'What Is Innovation', selectors: ['h1', 'main'] },
  { path: '/innovation-frameworks', name: 'Innovation Frameworks', selectors: ['h1', 'main'] },
  { path: '/innovation-journey', name: 'Innovation Journey', selectors: ['h1', 'main'] },
  { path: '/the-opportunity', name: 'The Opportunity', selectors: ['h1', 'main'] },
  { path: '/ninety-day-plan', name: '90 Day Plan', selectors: ['h1', 'main'] },
  { path: '/lean-canvas', name: 'Lean Canvas', selectors: ['h1', 'main'] },
  { path: '/people-involved', name: 'People Involved', selectors: ['h1', 'main'] },
  { path: '/opportunity-stars', name: 'Opportunity Stars', selectors: ['h1', 'main'] },
  { path: '/customer-asks-stars', name: 'Customer Asks Stars', selectors: ['h1', 'main'] },
  { path: '/your-profile-stars', name: 'Your Profile Stars', selectors: ['h1', 'main'] },
  { path: '/customer-success-stories', name: 'Customer Success Stories', selectors: ['h1', 'main'] },
  { path: '/you', name: 'You', selectors: ['h1', 'main'] },
  { path: '/your-pitch', name: 'Your Pitch', selectors: ['h1', 'main'] },
  { path: '/contact', name: 'Contact', selectors: ['h1', 'main'] },
  { path: '/faqs', name: 'FAQs', selectors: ['h1', 'main'] },
  { path: '/whitepapers', name: 'Whitepapers', selectors: ['h1', 'main'] },
  { path: '/microsites/lenovo', name: 'Lenovo Microsite', selectors: ['h1', 'main'] },
  { path: '/microsites/lenovo/focus-images', name: 'Lenovo Focus Images', selectors: ['h1', 'main'] },
  { path: '/microsites/lenovo/technical-stack', name: 'Lenovo Technical Stack', selectors: ['h1', 'main'] }
];

interface TestResult {
  route: string;
  name: string;
  status: 'pending' | 'pass' | 'fail';
  missing?: string[];
  error?: string;
}

export const SmokeTest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<TestResult[]>(
    routes.map(r => ({ route: r.path, name: r.name, status: 'pending' }))
  );
  const [isRunning, setIsRunning] = useState(false);

  const testRoute = (routeIndex: number) => {
    const route = routes[routeIndex];
    
    setTimeout(() => {
      try {
        const missing: string[] = [];
        
        route.selectors.forEach(selector => {
          if (!document.querySelector(selector)) {
            missing.push(selector);
          }
        });

        setResults(prev => prev.map((result, i) => 
          i === routeIndex 
            ? { 
                ...result, 
                status: missing.length === 0 ? 'pass' : 'fail',
                missing: missing.length > 0 ? missing : undefined
              }
            : result
        ));

        // Move to next route
        if (routeIndex < routes.length - 1) {
          setCurrentIndex(routeIndex + 1);
          navigate(routes[routeIndex + 1].path);
        } else {
          setIsRunning(false);
          if (import.meta.env.DEV) console.log('✅ Smoke test completed');
        }
      } catch (error) {
        setResults(prev => prev.map((result, i) => 
          i === routeIndex 
            ? { 
                ...result, 
                status: 'fail',
                error: error instanceof Error ? error.message : 'Unknown error'
              }
            : result
        ));
        setIsRunning(false);
      }
    }, 1000); // Wait 1s for route to load
  };

  useEffect(() => {
    if (isRunning && currentIndex < routes.length) {
      testRoute(currentIndex);
    }
  }, [currentIndex, isRunning, location.pathname]);

  const startTest = () => {
    setIsRunning(true);
    setCurrentIndex(0);
    setResults(routes.map(r => ({ route: r.path, name: r.name, status: 'pending' })));
    navigate(routes[0].path);
  };

  const passCount = results.filter(r => r.status === 'pass').length;
  const failCount = results.filter(r => r.status === 'fail').length;

  return (
    <div className="min-h-screen bg-background p-6">
      <Helmet>
        <title>Smoke Test - Dev Only</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Route Smoke Test</h1>
        
        <div className="mb-6">
          <button
            onClick={startTest}
            disabled={isRunning}
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50"
          >
            {isRunning ? 'Testing...' : 'Start Test'}
          </button>
          
          <div className="mt-4">
            <div className="text-sm text-muted-foreground">
              Progress: {passCount + failCount} / {routes.length} completed
            </div>
            <div className="text-sm">
              <span className="text-green-500">✓ {passCount} passed</span>
              {failCount > 0 && <span className="text-red-500 ml-4">✗ {failCount} failed</span>}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {results.map((result, i) => (
            <div
              key={result.route}
              className={`p-3 rounded border ${
                result.status === 'pass' 
                  ? 'bg-green-50 border-green-200' 
                  : result.status === 'fail'
                  ? 'bg-red-50 border-red-200'
                  : 'bg-gray-50 border-gray-200'
              } ${i === currentIndex && isRunning ? 'ring-2 ring-blue-500' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">{result.name}</span>
                  <span className="text-sm text-muted-foreground ml-2">{result.route}</span>
                </div>
                <div className="text-sm">
                  {result.status === 'pass' && '✓'}
                  {result.status === 'fail' && '✗'}
                  {result.status === 'pending' && (i === currentIndex && isRunning ? '🔄' : '⏳')}
                </div>
              </div>
              
              {result.missing && (
                <div className="mt-2 text-sm text-red-600">
                  Missing elements: {result.missing.join(', ')}
                </div>
              )}
              
              {result.error && (
                <div className="mt-2 text-sm text-red-600">
                  Error: {result.error}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};