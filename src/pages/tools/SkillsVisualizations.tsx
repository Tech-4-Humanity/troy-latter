import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import RadarChart from '@/components/cv/visualizations/RadarChart';
import { PageTitle } from '@/components/PageTitle';
import { BarChart, PieChart, Activity, Network } from 'lucide-react';

export default function SkillsVisualizations() {
  const [activeTab, setActiveTab] = useState('radar');

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="space-y-2">
        <PageTitle title="Skills Visualizations" />
        <p className="text-muted-foreground">
          Interactive visualizations of your skill portfolio across multiple dimensions
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto">
          <TabsTrigger value="radar" className="gap-2">
            <Activity className="h-4 w-4" />
            Radar
          </TabsTrigger>
          <TabsTrigger value="bubble" className="gap-2" disabled>
            <PieChart className="h-4 w-4" />
            Bubble
            <Badge variant="secondary" className="ml-1 text-xs">Soon</Badge>
          </TabsTrigger>
          <TabsTrigger value="heatmap" className="gap-2" disabled>
            <BarChart className="h-4 w-4" />
            Heatmap
            <Badge variant="secondary" className="ml-1 text-xs">Soon</Badge>
          </TabsTrigger>
          <TabsTrigger value="galaxy" className="gap-2" disabled>
            <Network className="h-4 w-4" />
            Galaxy
            <Badge variant="secondary" className="ml-1 text-xs">Soon</Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="radar" className="space-y-6 mt-6">
          <RadarChart />

          {/* Interpretation Guide */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="text-lg">Interpretation Guide</CardTitle>
              <CardDescription>Understanding your radar chart</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">For Executives</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Quick visual assessment of portfolio strength</li>
                    <li>Identify strategic capability gaps at a glance</li>
                    <li>Export-ready graphics for presentations</li>
                    <li>Benchmark against market standards</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">For Career Planning</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>See exactly where to focus learning efforts</li>
                    <li>Track progress over time</li>
                    <li>Identify emerging skill domains</li>
                    <li>Understand specialization vs generalization</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">For Recruiters</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Visual proof of competency breadth</li>
                    <li>Easy comparison against role requirements</li>
                    <li>Highlight unique strengths and specializations</li>
                    <li>Professional visualization for candidate profiles</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">For Proposals</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    <li>Professional visualization for RFPs</li>
                    <li>Demonstrate capability coverage</li>
                    <li>Show alignment with client needs</li>
                    <li>Evidence-based competency claims</li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold text-sm mb-2">What Different Shapes Mean</h4>
                <div className="grid gap-3 md:grid-cols-3 text-sm">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="font-medium mb-1">Balanced Circle</div>
                    <div className="text-muted-foreground text-xs">
                      Strong generalist with well-rounded skills across all domains
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="font-medium mb-1">Spiky/Uneven</div>
                    <div className="text-muted-foreground text-xs">
                      Specialist with deep expertise in specific domains
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="font-medium mb-1">Small Area</div>
                    <div className="text-muted-foreground text-xs">
                      Early career or transitioning - focus on building breadth
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bubble" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Bubble Chart (Coming Soon)</CardTitle>
              <CardDescription>
                Visualize skill positioning based on alignment vs market demand
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
              This visualization is under development
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="heatmap" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Market vs Internal Heatmap (Coming Soon)</CardTitle>
              <CardDescription>
                Compare skill gaps across domains and job requirements
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
              This visualization is under development
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="galaxy" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Galaxy (Coming Soon)</CardTitle>
              <CardDescription>
                Force-directed network showing skill relationships and clustering
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center text-muted-foreground">
              This visualization is under development
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
