
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Users, Building, Globe } from 'lucide-react';

export const MetricsSection = () => {
  const keyMetrics = [
    {
      icon: DollarSign,
      value: "$3B+",
      label: "Enterprise Transformation",
      description: "Led digital transformation projects"
    },
    {
      icon: Users,
      value: "200+",
      label: "CIO/CTO Network",
      description: "APAC senior technology executives"
    },
    {
      icon: Building,
      value: "$350M+",
      label: "Revenue Generated",
      description: "Through strategic sales enablement"
    },
    {
      icon: Globe,
      value: "10+",
      label: "ASEAN Countries",
      description: "Cross-border project delivery"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-brand-primary mb-4">Impact & Achievement</h2>
        <p className="text-xl text-gray-600">Proven track record of delivering transformational results</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-brand-primary mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
