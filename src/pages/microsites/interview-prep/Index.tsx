
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';

const InterviewPrepIndex = () => {
  const preparationAreas = [
    {
      title: 'Executive Frameworks',
      description: 'Strategic thinking models and leadership frameworks for C-level discussions',
      icon: Target,
      status: 'Coming Soon'
    },
    {
      title: 'Case Studies & Examples',
      description: 'Real-world scenarios and transformation stories with measurable outcomes',
      icon: TrendingUp,
      status: 'Coming Soon'
    },
    {
      title: 'Technical Leadership',
      description: 'Modern technology stack discussions and architectural decision-making',
      icon: BookOpen,
      status: 'Coming Soon'
    },
    {
      title: 'Team & Culture',
      description: 'Building high-performing teams and driving organizational change',
      icon: Users,
      status: 'Coming Soon'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Interview Preparation Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive preparation materials specifically designed for executive technology leadership interviews
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <CheckCircle className="h-6 w-6 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">Preparation Content In Development</h3>
            <p className="text-blue-800">
              This micro-site is being prepared with targeted content for specific interview opportunities. 
              Materials will include frameworks, case studies, and strategic examples tailored to demonstrate 
              executive technology leadership capabilities.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {preparationAreas.map((area, index) => (
          <Card key={index} className="relative">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <area.icon className="h-5 w-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{area.title}</CardTitle>
                  <span className="text-xs text-orange-600 font-medium bg-orange-100 px-2 py-1 rounded">
                    {area.status}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {area.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-4">
          Ready to provide content for specific interview preparation needs
        </p>
        <Button variant="outline" size="lg">
          Request Specific Content
        </Button>
      </div>
    </div>
  );
};

export default InterviewPrepIndex;
