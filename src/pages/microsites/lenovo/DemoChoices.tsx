import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Users, Target, Zap, Shield, Building, Cog, BarChart3, Image, Presentation } from 'lucide-react';

const DemoChoices = () => {
  const navigate = useNavigate();

  const demoOptions = [
    {
      title: 'Strategy Overview',
      description: 'Complete strategic foundation and transformation roadmap from $10.5M baseline to $65M+ target.',
      icon: Target,
      action: () => document.getElementById('strategy')?.scrollIntoView({ behavior: 'smooth' }),
      link: '/microsites/lenovo#strategy',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      title: 'Vertical Packs Demo',
      description: 'Education, Healthcare, Government, and SMB workforce transformation packages.',
      icon: Building,
      action: () => document.getElementById('packs')?.scrollIntoView({ behavior: 'smooth' }),
      link: '/microsites/lenovo#packs',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      title: 'Stakeholder Vignettes',
      description: 'Real customer scenarios and engagement frameworks for different stakeholders.',
      icon: Users,
      action: () => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' }),
      link: '/microsites/lenovo#stories',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    },
    {
      title: 'Customer Engagement Vignettes',
      description: 'Interactive customer journey and engagement scenarios.',
      icon: Zap,
      action: () => document.getElementById('vignettes')?.scrollIntoView({ behavior: 'smooth' }),
      link: '/microsites/lenovo#vignettes',
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100'
    },
    {
      title: 'Revenue Projections',
      description: '5-year growth trajectory with sector-specific ROI models and financial projections.',
      icon: BarChart3,
      action: () => document.getElementById('trajectory')?.scrollIntoView({ behavior: 'smooth' }),
      link: '/microsites/lenovo#trajectory',
      color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
    },
    {
      title: 'JD Alignment',
      description: 'Solution architect role alignment and competency mapping.',
      icon: Shield,
      action: () => document.getElementById('jd-alignment')?.scrollIntoView({ behavior: 'smooth' }),
      link: '/microsites/lenovo#jd-alignment',
      color: 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100'
    },
    {
      title: 'Focus Images Gallery',
      description: 'Strategic visualizations and frameworks for stakeholder presentations.',
      icon: Image,
      link: '/microsites/lenovo/focus-images',
      color: 'bg-pink-50 border-pink-200 hover:bg-pink-100'
    },
    {
      title: 'Tactical Deck',
      description: 'Interactive product catalog and sales enablement tools.',
      icon: Presentation,
      link: '/microsites/lenovo/tactical-deck',
      color: 'bg-red-50 border-red-200 hover:bg-red-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <div className="sticky top-0 z-20 bg-red-600 border-b border-red-700">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-3 items-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/microsites/lenovo')}
            className="text-white hover:bg-white/20 hover:text-white border-white/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Lenovo Site
          </Button>
          <div className="h-4 w-px bg-white/30" />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/20 hover:text-white border-white/30"
          >
            <Home className="w-4 h-4 mr-2" />
            Main Portfolio
          </Button>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-br from-black to-gray-800 text-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Demo Choices</h1>
          <p className="text-xl mb-6 opacity-90">
            Explore different aspects of the Lenovo ANZ services transformation strategy
          </p>
          <p className="text-lg opacity-75 max-w-3xl mx-auto">
            Choose from interactive demonstrations of strategy, vertical packs, customer scenarios, 
            revenue projections, and enablement tools designed for the ANZ market.
          </p>
        </div>
      </header>

      {/* Demo Options Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoOptions.map((demo, index) => {
              const IconComponent = demo.icon;
              
              return (
                <Card key={index} className={`${demo.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        <IconComponent className="w-5 h-5 text-red-600" />
                      </div>
                      <CardTitle className="text-lg font-bold text-gray-900">{demo.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                      {demo.description}
                    </p>
                    {demo.link ? (
                      <Button 
                        asChild 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                      >
                        <Link to={demo.link}>
                          Explore Demo
                        </Link>
                      </Button>
                    ) : (
                      <Button 
                        onClick={demo.action}
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                      >
                        View Section
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Each demo showcases a different aspect of the comprehensive Lenovo ANZ transformation strategy. 
            Start with any section that interests you most.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              <Link to="/microsites/lenovo">
                Return to Main Site
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/microsites/lenovo/tactical-deck">
                Jump to Tactical Deck
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoChoices;