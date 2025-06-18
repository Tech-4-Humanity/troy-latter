
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Users, Building, Globe } from 'lucide-react';

export const MetricsSection = () => {
  const keyMetrics = [
    {
      icon: DollarSign,
      value: "$3B+",
      label: "Enterprise Transformation",
      description: "Led digital transformation projects",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      value: "200+",
      label: "CIO/CTO Network",
      description: "APAC senior technology executives",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building,
      value: "$350M+",
      label: "Revenue Generated",
      description: "Through strategic sales enablement",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      value: "10+",
      label: "ASEAN Countries",
      description: "Cross-border project delivery",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-brand-primary mb-4">Proven Track Record</h2>
        <p className="text-xl text-gray-600">Measurable impact across enterprise transformation initiatives</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="text-center group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg backdrop-blur-sm bg-white/95 hover:bg-white">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${metric.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-brand-primary mb-2 group-hover:text-purple-600 transition-colors">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
              {/* Progress bar animation */}
              <div className="w-full bg-gray-200 rounded-full h-1 mb-2 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${metric.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}
                ></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
