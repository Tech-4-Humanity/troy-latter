
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.DEV) console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const popularPages = [
    { path: '/', label: 'Home', description: 'Executive overview and key metrics' },
    { path: '/executive-profile', label: 'Executive Profile', description: 'Detailed professional background' },
    { path: '/experience-and-impact', label: 'Experience & Impact', description: 'Strategic projects and achievements' },
    { path: '/core-competencies', label: 'Core Competencies', description: 'Technical expertise and skills' },
    { path: '/tools/cv-ingestion', label: 'CV Ingestion Dashboard', description: 'Build and manage Master CV database' },
    { path: '/contact', label: 'Contact', description: 'Get in touch for opportunities' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-brand-light/30 px-4">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        {/* Error Display */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-brand-primary mb-4">404</div>
          <h1 className="text-3xl font-bold text-brand-primary mb-2">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-lg inline-block">
            Requested: <code className="font-mono">{location.pathname}</code>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild className="hover:scale-105 transition-transform">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          
          <Button variant="outline" onClick={() => window.history.back()} className="hover:scale-105 transition-transform">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          
          <Button variant="outline" asChild className="hover:scale-105 transition-transform">
            <Link to="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Support
            </Link>
          </Button>
        </div>

        {/* Popular Pages */}
        <Card className="text-left">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-brand-primary mb-4 text-center">
              <Search className="inline mr-2 h-5 w-5" />
              Popular Pages
            </h2>
            <div className="grid gap-3">
              {popularPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="block p-4 rounded-lg border border-gray-200 hover:border-brand-accent hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                >
                  <div className="font-semibold text-brand-primary">{page.label}</div>
                  <div className="text-sm text-gray-600">{page.description}</div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Text */}
        <div className="mt-8 text-sm text-gray-500">
          <p>If you believe this is an error, please <Link to="/contact" className="text-brand-accent hover:underline">contact us</Link> with the URL you were trying to access.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
