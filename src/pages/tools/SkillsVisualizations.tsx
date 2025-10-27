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
import { PageTitle } from '@/components/PageTitle';

interface Skill {
  skill: string;
  domain: string;
  rating: number;
  'Proficiency Level': string;
  alignment_score?: string | number;
  Certification?: string;
  proof?: string;
  'Project Examples'?: string;
  'Tools Used'?: string;
  'Job Keywords Matched'?: string;
  impact_metric?: string;
  market_trend?: string;
  recency_year?: number | string;
  role_alignment?: string;
  evidence_level?: string;
  'Endorsements Count'?: number | string;
  [key: string]: any; // Allow other columns from DB
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
        .select('*')
        .order('rating', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        toast.error('Failed to load skills data');
        setLoading(false);
        return;
      }
      
      console.log('Fetched skills:', data?.length || 0);
      setSkills((data as any) || []);
    } catch (error) {
      console.error('Error fetching skills:', error);
      toast.error('Failed to load skills data');
    } finally {
      setLoading(false);
    }
  };

  const topSkills = skills.slice(0, 25); // Show top 25 in comprehensive table
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
      <PageTitle title="Skills Portfolio & Analytics" />
      
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Troy Latter</h2>
            <p className="text-muted-foreground mt-2">
              {skills.length} tracked skills across {domains.length} domains
            </p>
          </div>
        </div>
      </div>

      {/* TOP 25 COMPREHENSIVE SKILLS MATRIX */}
      <Card className="border-2">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            Top 25 Skills - Full Matrix View
          </CardTitle>
          <CardDescription className="text-base">
            Complete portfolio with certifications, proof points, impact metrics, and market trends
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead className="bg-muted/50 sticky top-0 z-10">
                <tr>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20">#</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[220px]">💼 Skill & Alignment</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[140px]">🏷️ Domain</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20">⭐ Rating</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[180px]">🎓 Certification</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[200px]">✅ Proof Points</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[240px]">🚀 Project Examples</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[160px]">🛠️ Tools</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[200px]">📊 Impact Metrics</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20 min-w-[120px]">📈 Trend</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20">🔥 Match</th>
                  <th className="text-left p-3 font-bold border-b-2 border-primary/20">📅 Year</th>
                </tr>
              </thead>
              <tbody>
                {topSkills.map((skill, idx) => (
                  <tr 
                    key={idx} 
                    className={`border-b hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all ${
                      idx % 2 === 0 ? 'bg-muted/20' : ''
                    }`}
                  >
                    <td className="p-3 font-bold text-primary">{idx + 1}</td>
                    <td className="p-3">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0">{domainEmojis[skill.domain] || '📌'}</span>
                        <div>
                          <div className="font-bold text-base mb-1">{skill.skill}</div>
                          <div className="text-xs text-muted-foreground flex flex-wrap gap-1">
                            {skill.role_alignment && (
                              <Badge variant="secondary" className="text-xs">
                                {skill.role_alignment}
                              </Badge>
                            )}
                            {skill['Proficiency Level'] && (
                              <Badge variant="outline" className="text-xs">
                                {skill['Proficiency Level']}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge 
                        variant="default" 
                        className="whitespace-nowrap text-xs font-semibold"
                      >
                        {skill.domain}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <StarRating rating={skill.rating} />
                      <div className="text-xs text-muted-foreground mt-1">
                        {skill.rating}/5
                      </div>
                    </td>
                    <td className="p-3">
                      {skill.Certification && skill.Certification !== 'None' ? (
                        <div className="flex items-start gap-1">
                          <span className="text-primary">✓</span>
                          <span className="text-xs font-medium">{skill.Certification}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-muted-foreground">No certification</span>
                      )}
                    </td>
                    <td className="p-3">
                      <div className="text-xs leading-relaxed">
                        {skill.proof ? (
                          <div className="flex items-start gap-1">
                            <span className="text-primary flex-shrink-0">💎</span>
                            <span className="font-medium">{skill.proof}</span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                        {skill.evidence_level && (
                          <Badge variant="outline" className="text-xs mt-1">
                            {skill.evidence_level}
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-xs leading-relaxed">
                        {skill['Project Examples'] ? (
                          <div className="flex items-start gap-1">
                            <span className="flex-shrink-0">🎯</span>
                            <span>{skill['Project Examples']}</span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-xs">
                        {skill['Tools Used'] ? (
                          <Badge variant="secondary" className="text-xs">
                            {skill['Tools Used']}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="text-xs font-semibold">
                        {skill.impact_metric ? (
                          <div className="flex items-start gap-1 text-primary">
                            <span>📊</span>
                            <span>{skill.impact_metric}</span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      {skill.market_trend ? (
                        <Badge 
                          variant={skill.market_trend === 'Rising' ? 'default' : 'secondary'}
                          className="text-xs font-semibold"
                        >
                          {skill.market_trend === 'Rising' && <TrendingUp className="h-3 w-3 mr-1" />}
                          {skill.market_trend}
                        </Badge>
                      ) : (
                        <span className="text-xs text-muted-foreground">Stable</span>
                      )}
                    </td>
                    <td className="p-3">
                      {skill.alignment_score && (
                        <div className="text-center">
                          <div className={`text-xs font-bold ${
                            Number(skill.alignment_score) >= 90 ? 'text-primary' :
                            Number(skill.alignment_score) >= 80 ? 'text-foreground' :
                            'text-muted-foreground'
                          }`}>
                            {skill.alignment_score}%
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      <Badge variant="outline" className="text-xs">
                        {skill.recency_year || 'N/A'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-8">
        <TabsList className="grid w-full grid-cols-3 lg:w-auto">
          <TabsTrigger value="summary" className="gap-2">
            <Sparkles className="h-4 w-4" />
            Summary
          </TabsTrigger>
          <TabsTrigger value="all" className="gap-2">
            <Activity className="h-4 w-4" />
            All Skills
          </TabsTrigger>
          <TabsTrigger value="charts" className="gap-2">
            <BarChart className="h-4 w-4" />
            Coverage
          </TabsTrigger>
        </TabsList>

        {/* Summary Tab */}
        <TabsContent value="summary" className="space-y-6 mt-6">
          {/* Radar Chart */}
          <RadarChart />
          
          {/* Rising Skills */}
          {risingSkills.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Rising Skills
                </CardTitle>
                <CardDescription>Skills with strong upward momentum</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {risingSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20"
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
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Rising Skills
                </CardTitle>
                <CardDescription>Skills with strong upward momentum</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {risingSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20"
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
