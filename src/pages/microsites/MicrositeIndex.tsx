
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BriefcaseIcon, ArrowRight, Target } from 'lucide-react';

const MicrositeIndex = () => {
  const microsites = [
    {
      id: 'interview-prep',
      title: 'Shield AI',
      description: 'Comprehensive Shield AI interview preparation materials for executive technology leadership roles',
      icon: BriefcaseIcon,
      path: '/microsites/interview-prep',
      status: 'Available',
      features: ['Executive frameworks', 'Case studies', 'Strategic thinking tools']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Specialized Micro-Sites
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Focused resources and tools designed for specific professional needs and opportunities
        </p>
      </div>

      <div className="grid gap-6">
        {microsites.map((site) => (
          <Card key={site.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <site.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{site.title}</CardTitle>
                    <CardDescription className="text-base mt-1">
                      {site.description}
                    </CardDescription>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {site.status}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {site.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Target className="h-3 w-3 text-blue-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link to={site.path}>
                    Access {site.title}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          More Micro-Sites Coming Soon
        </h3>
        <p className="text-gray-600">
          Additional specialized resources and tools are in development to support various professional scenarios.
        </p>
      </div>
    </div>
  );
};

export default MicrositeIndex;
