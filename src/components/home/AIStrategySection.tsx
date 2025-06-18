
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Cpu, Zap, Shield } from 'lucide-react';

export const AIStrategySection = () => {
  const aiMetrics = [
    {
      icon: Brain,
      value: "15+",
      label: "AI Projects Led",
      description: "Sovereign AI & ML platforms"
    },
    {
      icon: Cpu,
      value: "3M+",
      label: "Citizens Served",
      description: "Through AI-enabled solutions"
    },
    {
      icon: Zap,
      value: "40%",
      label: "Efficiency Gains",
      description: "Via intelligent automation"
    },
    {
      icon: Shield,
      value: "100%",
      label: "Security Compliant",
      description: "Sovereign AI implementations"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
          AI Transformation Leader
        </div>
        <h2 className="text-4xl font-bold text-brand-primary mb-4">Strategic AI & Automation</h2>
        <p className="text-xl text-gray-600">Driving enterprise transformation through sovereign AI and intelligent automation</p>
      </div>
      
      {/* AI Metrics */}
      <div className="grid md:grid-cols-4 gap-6">
        {aiMetrics.map((metric, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg backdrop-blur-sm bg-white/90">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <metric.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-brand-primary mb-2">{metric.value}</div>
              <div className="font-semibold text-gray-800 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.description}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
