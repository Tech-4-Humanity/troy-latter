import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, Plus, Download, Search, Upload, RefreshCw, BarChart } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface Skill {
  skill: string;
  domain?: string;
  rating?: number;
  status?: string;
  trend?: string;
  proof?: string;
  'Proficiency Level'?: string;
  alignment_score?: string | number;
  market_demand_score?: string | number;
  skill_usage_count?: string | number;
  auto_weight?: number;
  last_jd_match?: string;
  last_updated?: string;
}

export default function SkillsMatrix() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [domainFilter, setDomainFilter] = useState('all');
  const [trendFilter, setTrendFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'alignment' | 'demand' | 'usage' | 'recent'>('alignment');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newSkill, setNewSkill] = useState({
    skill: '',
    domain: '',
    rating: 3,
    proficiency: 'Intermediate',
    proof: '',
  });

  useEffect(() => {
    fetchSkills();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [skills, searchTerm, domainFilter, trendFilter, sortBy]);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('175+ Skills Matrix')
        .select('*')
        .order('alignment_score', { ascending: false });

      if (error) {
        // Check if it's a column doesn't exist error (migration not run)
        if (error.message?.includes('column') || error.message?.includes('does not exist')) {
          toast.warning('Skills matrix is being updated. Some features may be limited.');
          // Try basic query without sorting
          const { data: basicData } = await supabase
            .from('175+ Skills Matrix')
            .select('*');
          setSkills(basicData || []);
        } else {
          throw error;
        }
      } else {
        setSkills(data || []);
      }
    } catch (error: any) {
      console.error('Error fetching skills:', error);
      toast.error('Failed to load skills matrix');
      setSkills([]);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...skills];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(s =>
        s.skill?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.domain?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Domain filter
    if (domainFilter !== 'all') {
      filtered = filtered.filter(s => s.domain === domainFilter);
    }

    // Trend filter
    if (trendFilter !== 'all') {
      filtered = filtered.filter(s => s.trend === trendFilter);
    }

    // Sort with defensive checks
    filtered.sort((a, b) => {
      try {
        switch (sortBy) {
          case 'alignment':
            return (Number(b.alignment_score) || 0) - (Number(a.alignment_score) || 0);
          case 'demand':
            return (Number(b.market_demand_score) || 0) - (Number(a.market_demand_score) || 0);
          case 'usage':
            return (Number(b.skill_usage_count) || 0) - (Number(a.skill_usage_count) || 0);
          case 'recent':
            return new Date(b.last_updated || 0).getTime() - new Date(a.last_updated || 0).getTime();
          default:
            return 0;
        }
      } catch (err) {
        console.warn('Sorting error:', err);
        return 0;
      }
    });

    setFilteredSkills(filtered);
  };

  const domains = ['all', ...Array.from(new Set(skills.map(s => s.domain).filter(Boolean)))];

  const getTrendIcon = (trend: string) => {
    switch (trend?.toLowerCase()) {
      case 'rising':
        return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'declining':
        return <TrendingDown className="w-4 h-4 text-red-500" />;
      default:
        return <Minus className="w-4 h-4 text-yellow-500" />;
    }
  };

  const getAlignmentColor = (score: string | number) => {
    const numScore = Number(score);
    if (numScore >= 85) return 'bg-green-500';
    if (numScore >= 70) return 'bg-blue-500';
    if (numScore >= 50) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const handleAddSkill = async () => {
    try {
      const skillData: any = {
        skill: newSkill.skill,
        domain: newSkill.domain,
        rating: newSkill.rating,
        'Proficiency Level': newSkill.proficiency,
        proof: newSkill.proof,
        status: 'Active',
        trend: 'Stable',
      };

      // Add optional fields if columns exist
      try {
        skillData.alignment_score = '50';
        skillData.market_demand_score = '50';
        skillData.skill_usage_count = '0';
        skillData.auto_weight = 0.5;
      } catch {
        // These fields may not exist yet
      }

      const { error } = await supabase
        .from('175+ Skills Matrix')
        .insert([skillData]);

      if (error) {
        if (error.message?.includes('column') || error.message?.includes('does not exist')) {
          toast.warning('Some advanced features not available yet. Basic skill added.');
          // Try with just basic fields
          const { error: basicError } = await supabase
            .from('175+ Skills Matrix')
            .insert([{
              skill: newSkill.skill,
              domain: newSkill.domain,
              rating: newSkill.rating,
              'Proficiency Level': newSkill.proficiency,
              proof: newSkill.proof,
            }]);
          if (basicError) throw basicError;
        } else {
          throw error;
        }
      }

      toast.success('Skill added successfully');
      setIsAddDialogOpen(false);
      setNewSkill({ skill: '', domain: '', rating: 3, proficiency: 'Intermediate', proof: '' });
      fetchSkills();
    } catch (error: any) {
      console.error('Error adding skill:', error);
      toast.error('Failed to add skill');
    }
  };

  const syncFromCSV = async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const { data, error } = await supabase.functions.invoke('sync-csv-to-db', {
        body: formData
      });

      if (error) throw error;

      toast.success(`Synced ${data.added} new skills, updated ${data.updated} existing skills`);
      fetchSkills();
    } catch (error: any) {
      console.error('Error syncing CSV:', error);
      toast.error('Failed to sync CSV to database');
    }
  };

  const syncToCSV = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('sync-db-to-csv');
      
      if (error) throw error;

      const blob = new Blob([data], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'skills_master.csv';
      a.click();
      
      toast.success('Downloaded skills matrix as CSV');
    } catch (error: any) {
      console.error('Error downloading CSV:', error);
      toast.error('Failed to export to CSV');
    }
  };

  const exportSkills = (format: 'csv' | 'json') => {
    if (format === 'csv') {
      const headers = ['Skill', 'Domain', 'Alignment Score', 'Market Demand', 'Usage Count', 'Trend', 'Proficiency'];
      const rows = filteredSkills.map(s => [
        s.skill,
        s.domain || '',
        Number(s.alignment_score) || 0,
        Number(s.market_demand_score) || 0,
        Number(s.skill_usage_count) || 0,
        s.trend || '',
        s['Proficiency Level'] || ''
      ]);
      const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'skills-matrix.csv';
      a.click();
    } else {
      const json = JSON.stringify(filteredSkills, null, 2);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'skills-matrix.json';
      a.click();
    }
    toast.success(`Exported ${filteredSkills.length} skills`);
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Skills Matrix</h1>
          <p className="text-muted-foreground mt-2">
            Self-learning skills inventory with {skills.length} tracked competencies
          </p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => navigate('/tools/skills-visualizations')} variant="outline">
            <BarChart className="w-4 h-4 mr-2" />
            View Visualizations
          </Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
              </Button>
            </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Skill</DialogTitle>
              <DialogDescription>
                Add a new skill to your matrix for tracking and CV generation
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="skill">Skill Name</Label>
                <Input
                  id="skill"
                  value={newSkill.skill}
                  onChange={(e) => setNewSkill({ ...newSkill, skill: e.target.value })}
                  placeholder="e.g., AI Strategy"
                />
              </div>
              <div>
                <Label htmlFor="domain">Domain</Label>
                <Input
                  id="domain"
                  value={newSkill.domain}
                  onChange={(e) => setNewSkill({ ...newSkill, domain: e.target.value })}
                  placeholder="e.g., AI Engineering"
                />
              </div>
              <div>
                <Label htmlFor="proficiency">Proficiency Level</Label>
                <Select value={newSkill.proficiency} onValueChange={(v) => setNewSkill({ ...newSkill, proficiency: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="proof">Evidence / Proof</Label>
                <Textarea
                  id="proof"
                  value={newSkill.proof}
                  onChange={(e) => setNewSkill({ ...newSkill, proof: e.target.value })}
                  placeholder="Projects, certifications, or achievements demonstrating this skill"
                />
              </div>
              <Button onClick={handleAddSkill} className="w-full">Add Skill</Button>
            </div>
          </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Filters & Controls */}
      <Card>
        <CardHeader>
          <CardTitle>Filters & Export</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={domainFilter} onValueChange={setDomainFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Domain" />
              </SelectTrigger>
              <SelectContent>
                {domains.map(d => (
                  <SelectItem key={d} value={d}>{d === 'all' ? 'All Domains' : d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={trendFilter} onValueChange={setTrendFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Trend" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Trends</SelectItem>
                <SelectItem value="Rising">Rising</SelectItem>
                <SelectItem value="Stable">Stable</SelectItem>
                <SelectItem value="Declining">Declining</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={(v: any) => setSortBy(v)}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alignment">Alignment Score</SelectItem>
                <SelectItem value="demand">Market Demand</SelectItem>
                <SelectItem value="usage">Usage Count</SelectItem>
                <SelectItem value="recent">Recently Updated</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" size="sm" onClick={syncToCSV}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Sync to CSV
            </Button>
            <label htmlFor="csv-upload">
              <Button variant="outline" size="sm" asChild>
                <span>
                  <Upload className="w-4 h-4 mr-2" />
                  Sync from CSV
                </span>
              </Button>
            </label>
            <input
              id="csv-upload"
              type="file"
              accept=".csv"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) syncFromCSV(file);
              }}
            />
            <Button variant="outline" size="sm" onClick={() => exportSkills('csv')}>
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button variant="outline" size="sm" onClick={() => exportSkills('json')}>
              <Download className="w-4 h-4 mr-2" />
              Export JSON
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, idx) => (
          <Card key={idx} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{skill.skill}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <Badge variant="outline">{skill.domain || 'General'}</Badge>
                    {getTrendIcon(skill.trend || '')}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{Math.round(Number(skill.alignment_score) || 0)}</div>
                  <div className="text-xs text-muted-foreground">Alignment</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-muted-foreground">Market Demand</span>
                  <span className="font-medium">{Math.round(Number(skill.market_demand_score) || 0)}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getAlignmentColor(Number(skill.market_demand_score) || 0)}`}
                    style={{ width: `${Number(skill.market_demand_score) || 0}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Usage Count</span>
                <Badge variant="secondary">{Number(skill.skill_usage_count) || 0}</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Proficiency</span>
                <Badge>{skill['Proficiency Level'] || 'N/A'}</Badge>
              </div>
              {skill.last_jd_match && (
                <div className="text-xs text-muted-foreground pt-2 border-t">
                  Last matched: {skill.last_jd_match}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredSkills.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No skills found matching your filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
