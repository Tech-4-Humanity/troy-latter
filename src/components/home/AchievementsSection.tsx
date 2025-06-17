import { Card, CardContent } from '@/components/ui/card';
import { Award, Zap, Target } from 'lucide-react';

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Rising APAC CTO",
      description: "Led technology strategy across Asia-Pacific region",
      color: "bg-blue-500",
      image: "/lovable-uploads/5082db7f-2070-4c23-baa2-647e9d5b8818.png"
    },
    {
      icon: Zap,
      title: "AI & Digital Innovation",
      description: "Pioneered AI-enabled government solutions for millions",
      color: "bg-green-500",
      image: "/lovable-uploads/db7906e5-94ae-461a-a914-e3ca5ba5b126.png"
    },
    {
      icon: Target,
      title: "Sales Excellence",
      description: "300% YoY improvement in solution attachment rates",
      color: "bg-purple-500",
      image: "/lovable-uploads/81cbb272-6a07-41e1-8167-796bc17aa764.png"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-brand-primary mb-4">Core Expertise Areas</h2>
        <p className="text-xl text-gray-600">Strategic technology leadership across multiple domains</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className={`absolute top-4 left-4 ${achievement.color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-brand-primary mb-3">{achievement.title}</h3>
                <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
