
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Zap, Target } from 'lucide-react';

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: Brain,
      title: "AI & Automation Leadership",
      description: "Sovereign AI platforms serving 3M+ citizens with 100% security compliance",
      color: "bg-purple-500",
      image: "/lovable-uploads/5082db7f-2070-4c23-baa2-647e9d5b8818.png",
      badges: ["AWS AI/ML", "Azure AI", "Government AI"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Led $3B+ enterprise transformations across APAC region",
      color: "bg-green-500",
      image: "/lovable-uploads/db7906e5-94ae-461a-a914-e3ca5ba5b126.png",
      badges: ["Cloud Migration", "DevOps", "Agile"]
    },
    {
      icon: Target,
      title: "Sales Excellence",
      description: "300% YoY improvement in solution attachment rates",
      color: "bg-blue-500",
      image: "/lovable-uploads/81cbb272-6a07-41e1-8167-796bc17aa764.png",
      badges: ["Sales Enablement", "Customer Success", "Revenue Growth"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-brand-primary mb-4">Leadership Impact Areas</h2>
        <p className="text-xl text-gray-600">Strategic technology leadership across multiple domains</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 shadow-lg overflow-hidden backdrop-blur-sm bg-white/95">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={achievement.image} 
                  alt={achievement.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className={`absolute top-4 left-4 ${achievement.color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform backdrop-blur-sm`}>
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                {/* Floating badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1">
                  {achievement.badges.slice(0, 2).map((badge, badgeIndex) => (
                    <span key={badgeIndex} className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-purple-600 transition-colors">{achievement.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{achievement.description}</p>
                {/* All badges visible on hover */}
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {achievement.badges.map((badge, badgeIndex) => (
                    <span key={badgeIndex} className="px-3 py-1 text-xs bg-gradient-to-r from-purple-100 to-blue-100 text-brand-primary rounded-full border border-purple-200">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
