import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, Zap } from 'lucide-react';

export default function SkillsAnalytics() {
  const [metrics, setMetrics] = useState({ adoption: 0, drift: 0, velocity: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const { data: skillsData } = await supabase.from('175+ Skills Matrix').select('*');
      const { data: metricsData } = await supabase.from('skills_metrics').select('*').order('timestamp', { ascending: false }).limit(100);

      const total = skillsData?.length || 0;
      const newSkills = metricsData?.filter(m => m.action === 'added').length || 0;
      const adoption = total > 0 ? (newSkills / total) * 100 : 0;
      const drift = total > 0 ? ((newSkills - 5) / total) * 100 : 0;
      const avgDelta = metricsData?.reduce((acc, m) => acc + (Number(m.alignment_delta) || 0), 0) / (metricsData?.length || 1);

      setMetrics({ adoption: Math.round(adoption), drift: Math.round(drift), velocity: Math.round(avgDelta * 10) });
    } catch (error) {
      console.error('Error fetching metrics:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="container mx-auto py-8"><div className="animate-pulse h-64 bg-muted rounded"></div></div>;

  return (
    <div className="container mx-auto py-8 space-y-6">
      <h1 className="text-4xl font-bold">Skills Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Adoption Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold">{metrics.adoption}%</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Drift Index</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold">{metrics.drift}%</div></CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Skill Velocity</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent><div className="text-2xl font-bold">{metrics.velocity}</div></CardContent>
        </Card>
      </div>
    </div>
  );
}
