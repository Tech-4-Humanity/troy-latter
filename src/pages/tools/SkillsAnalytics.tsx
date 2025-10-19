import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Target, Zap, AlertTriangle } from 'lucide-react';

export default function SkillsAnalytics() {
  const [metrics, setMetrics] = useState({ adoption: 0, drift: 0, velocity: 0 });
  const [velocityData, setVelocityData] = useState<any[]>([]);
  const [decayingSkills, setDecayingSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const { data: skillsData, error: skillsError } = await supabase
        .from('175+ Skills Matrix')
        .select('*');

      if (skillsError) {
        console.error('Error fetching skills:', skillsError);
        // If migration not run, show graceful message
        if (skillsError.message?.includes('column') || skillsError.message?.includes('does not exist')) {
          console.info('Analytics features are being set up. Migration in progress.');
          setMetrics({ adoption: 0, drift: 0, velocity: 0 });
          setLoading(false);
          return;
        }
      }

      // Try to fetch metrics, but don't fail if table doesn't exist yet
      const { data: metricsData, error: metricsError } = await supabase
        .from('skills_metrics')
        .select('*')
        .order('timestamp', { ascending: false })
        .limit(100);

      if (metricsError && metricsError.message?.includes('does not exist')) {
        console.info('Metrics table not available yet. Using basic analytics.');
      }

      const total = skillsData?.length || 0;
      const newSkills = metricsData?.filter(m => m.action === 'added').length || 0;
      const adoption = total > 0 ? (newSkills / total) * 100 : 0;
      const drift = total > 0 ? ((newSkills - 5) / total) * 100 : 0;
      const avgDelta = metricsData?.reduce((acc, m) => acc + (Number(m.alignment_delta) || 0), 0) / (metricsData?.length || 1);

      setMetrics({ adoption: Math.round(adoption), drift: Math.round(drift), velocity: Math.round(avgDelta * 10) });

      // Calculate velocity trend (skills added per week)
      const now = new Date();
      const weeklyData = [];
      for (let i = 6; i >= 0; i--) {
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - (i * 7));
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 7);
        
        const weekMetrics = metricsData?.filter(m => {
          const mDate = new Date(m.timestamp);
          return mDate >= weekStart && mDate < weekEnd && m.action === 'added';
        }) || [];
        
        weeklyData.push({
          week: `Week ${7-i}`,
          skills: weekMetrics.length
        });
      }
      setVelocityData(weeklyData);

      // Find skills not updated in 6+ months
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(now.getMonth() - 6);
      const stale = skillsData?.filter(s => {
        const lastUpdate = s.last_updated ? new Date(s.last_updated) : null;
        return !lastUpdate || lastUpdate < sixMonthsAgo;
      }).slice(0, 10) || [];
      setDecayingSkills(stale);
    } catch (error: any) {
      console.error('Unexpected analytics error:', error);
      setMetrics({ adoption: 0, drift: 0, velocity: 0 });
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
          <CardContent>
            <div className="text-2xl font-bold">{metrics.adoption}%</div>
            <p className="text-xs text-muted-foreground mt-1">New skills vs total inventory</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Drift Index</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.drift}%</div>
            <p className="text-xs text-muted-foreground mt-1">Rate of skill portfolio change</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Skill Velocity</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metrics.velocity}</div>
            <p className="text-xs text-muted-foreground mt-1">Average alignment improvement</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Skills Velocity (7 Week Trend)</CardTitle>
            <CardDescription>New skills added per week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={velocityData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="skills" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Decay Alert
            </CardTitle>
            <CardDescription>Skills not updated in 6+ months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {decayingSkills.length > 0 ? (
                decayingSkills.map((skill, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <div className="font-medium">{skill.skill}</div>
                      <div className="text-xs text-muted-foreground">{skill.domain}</div>
                    </div>
                    <div className="text-sm text-warning">
                      {skill.last_updated ? new Date(skill.last_updated).toLocaleDateString() : 'Never'}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-sm">All skills are up to date!</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
