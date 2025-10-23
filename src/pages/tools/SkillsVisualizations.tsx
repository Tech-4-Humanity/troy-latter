import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import RadarChart from '@/components/cv/visualizations/RadarChart';
import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Activity, TrendingUp, Star, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

interface Skill {
  skill: string;
  domain: string;
  rating: number;
  'Proficiency Level': string;
  alignment_score?: string | number;
}

// Emoji mapping for domains
const domainEmojis: Record<string, string> = {
  'AI Engineering': '⚡',
  'Leadership & GTM': '🎯',
  'Architecture & Cloud': '☁️',
  'Governance & Ethics': '⚖️',
  'Data & Analytics': '📊',
  'Innovation': '💡',
  'Strategy': '🗺️',
  'Product': '🚀'
};

const DOMAIN_COLORS = [
  'hsl(217, 91%, 60%)',
  'hsl(142, 76%, 36%)',
  'hsl(24, 100%, 50%)',
  'hsl(280, 100%, 70%)',
  'hsl(48, 100%, 50%)',
  'hsl(200, 100%, 50%)',
];

export default function SkillsVisualizations() {
  const [activeTab, setActiveTab] = useState('overview');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [domainFilter, setDomainFilter] = useState('all');

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const { data, error } = await supabase
        .from('175+ Skills Matrix')
        .select('skill, domain, rating, "Proficiency Level", alignment_score')
        .order('rating', { ascending: false });

      if (error) throw error;
      setSkills(data || []);
    } catch (error) {
      console.error('Error fetching skills:', error);
      toast.error('Failed to load skills data');
    } finally {
      setLoading(false);
    }
  };

  const topSkills = skills.slice(0, 25);
  const domains = Array.from(new Set(skills.map(s => s.domain))).filter(Boolean);

  // Domain distribution data
  const domainData = domains.map(domain => ({
    domain,
    count: skills.filter(s => s.domain === domain).length
  })).sort((a, b) => b.count - a.count);

  // Proficiency distribution
  const proficiencyData = [
    { name: 'Expert', value: skills.filter(s => s.rating === 5).length, color: 'hsl(142, 76%, 36%)' },
    { name: 'Advanced', value: skills.filter(s => s.rating === 4).length, color: 'hsl(217, 91%, 60%)' },
    { name: 'Intermediate', value: skills.filter(s => s.rating === 3).length, color: 'hsl(48, 100%, 50%)' },
    { name: 'Developing', value: skills.filter(s => s.rating <= 2).length, color: 'hsl(0, 84%, 60%)' },
  ];

  // Rising skills (alignment_score contains "Rising")
  const risingSkills = skills.filter(s => 
    String(s.alignment_score).toLowerCase().includes('rising')
  ).slice(0, 10);

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.skill.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = domainFilter === 'all' || skill.domain === domainFilter;
    return matchesSearch && matchesDomain;
  });

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'fill-muted text-muted'
          }`}
        />
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/3"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  const expertCount = skills.filter(s => s.rating === 5).length;
  const avgRating = (skills.reduce((sum, s) => sum + s.rating, 0) / skills.length).toFixed(1);

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Troy's Skills Portfolio</h1>
            <p className="text-muted-foreground mt-2">
              {skills.length} tracked skills across {domains.length} domains
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{skills.length}</div>
              <p className="text-xs text-muted-foreground">Total Skills</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{expertCount}</div>
              <p className="text-xs text-muted-foreground">Expert-Level</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{avgRating}/5</div>
              <p className="text-xs text-muted-foreground">Avg Proficiency</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{risingSkills.length}</div>
              <p className="text-xs text-muted-foreground">Rising Skills</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="overview" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Top 25
          </TabsTrigger>
          <TabsTrigger value="all" className="gap-2">
            <Activity className="h-4 w-4" />
            All Skills
          </TabsTrigger>
          <TabsTrigger value="charts" className="gap-2">
            <BarChart className="h-4 w-4" />
            Insights
          </TabsTrigger>
        </TabsList>

        {/* Top 25 Skills */}
        <TabsContent value="overview" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-500" />
                Troy's Top 25 Skills
              </CardTitle>
              <CardDescription>
                Expert-level capabilities spanning AI Engineering to Executive Leadership
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-2xl">{domainEmojis[skill.domain] || '📌'}</span>
                      {String(skill.alignment_score).toLowerCase().includes('rising') && (
                        <Badge variant="secondary" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                          Rising
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-semibold mb-1 line-clamp-2">{skill.skill}</h3>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {skill.domain}
                    </Badge>
                    <div className="mt-2">
                      <StarRating rating={skill.rating} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Radar Chart */}
          <RadarChart />
        </TabsContent>

        {/* All Skills Table */}
        <TabsContent value="all" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>All Skills ({filteredSkills.length})</CardTitle>
              <div className="flex gap-4 mt-4">
                <Input
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-sm"
                />
                <Select value={domainFilter} onValueChange={setDomainFilter}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Domains</SelectItem>
                    {domains.map(domain => (
                      <SelectItem key={domain} value={domain}>
                        {domainEmojis[domain] || '📌'} {domain}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {filteredSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-xl">{domainEmojis[skill.domain] || '📌'}</span>
                      <div className="flex-1">
                        <div className="font-medium">{skill.skill}</div>
                        <div className="text-sm text-muted-foreground">{skill.domain}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <StarRating rating={skill.rating} />
                      {String(skill.alignment_score).toLowerCase().includes('rising') && (
                        <Badge variant="secondary" className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Charts & Insights */}
        <TabsContent value="charts" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Domain Mastery */}
            <Card>
              <CardHeader>
                <CardTitle>Domain Mastery</CardTitle>
                <CardDescription>Skills distribution across domains</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={domainData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                    <YAxis 
                      dataKey="domain" 
                      type="category" 
                      width={150}
                      stroke="hsl(var(--muted-foreground))"
                      style={{ fontSize: '12px' }}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="count" fill="hsl(217, 91%, 60%)" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Proficiency Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Proficiency Distribution</CardTitle>
                <CardDescription>Breakdown by expertise level</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={proficiencyData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {proficiencyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Rising Skills */}
          {risingSkills.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Rising Skills
                </CardTitle>
                <CardDescription>Skills with strong upward momentum</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {risingSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{domainEmojis[skill.domain] || '📌'}</span>
                        <Badge variant="secondary" className="text-xs">Rising</Badge>
                      </div>
                      <div className="font-medium text-sm">{skill.skill}</div>
                      <div className="text-xs text-muted-foreground mt-1">{skill.domain}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
