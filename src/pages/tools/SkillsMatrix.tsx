import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus, Plus, Download, Search, Upload, RefreshCw, BarChart, Star } from 'lucide-react';
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
  const [sortColumn, setSortColumn] = useState<'skill' | 'domain' | 'alignment' | 'demand' | 'rating'>('alignment');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
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

  const handleSort = (column: typeof sortColumn) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('desc');
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
      let aVal: any = 0;
      let bVal: any = 0;

      switch (sortColumn) {
        case 'skill':
          aVal = a.skill || '';
          bVal = b.skill || '';
          break;
        case 'domain':
          aVal = a.domain || '';
          bVal = b.domain || '';
          break;
        case 'alignment':
          aVal = Number(a.alignment_score) || 0;
          bVal = Number(b.alignment_score) || 0;
          break;
        case 'demand':
          aVal = Number(a.market_demand_score) || 0;
          bVal = Number(b.market_demand_score) || 0;
          break;
        case 'rating':
          aVal = Number(a.rating) || 0;
          bVal = Number(b.rating) || 0;
          break;
      }

      if (typeof aVal === 'string') {
        return sortDirection === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
      }
      return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
    });

    setFilteredSkills(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const getPaginatedSkills = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredSkills.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
  const paginatedSkills = getPaginatedSkills();

  const domains = ['all', ...Array.from(new Set(skills.map(s => s.domain).filter(Boolean)))];

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i <= (rating || 0)
              ? 'fill-warning text-warning'
              : 'fill-muted text-muted-foreground/30'
          }`}
        />
      ))}
    </div>
  );

  const getProficiencyBadge = (level: string) => {
    const variants: Record<string, { variant: any; className: string }> = {
      'Expert': { variant: 'default', className: 'bg-primary' },
      'Advanced': { variant: 'secondary', className: 'bg-secondary' },
      'Intermediate': { variant: 'outline', className: '' },
      'Beginner': { variant: 'outline', className: 'text-muted-foreground' },
    };
    const config = variants[level] || variants['Intermediate'];
    return <Badge variant={config.variant} className={config.className}>{level}</Badge>;
  };

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

  const SortButton = ({ column, label }: { column: typeof sortColumn; label: string }) => (
    <button
      onClick={() => handleSort(column)}
      className="flex items-center gap-1 hover:text-foreground transition-colors font-semibold"
    >
      {label}
      {sortColumn === column && (
        <span className="text-xs">{sortDirection === 'asc' ? '↑' : '↓'}</span>
      )}
    </button>
  );

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

      {/* Skills Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b">
                <tr>
                  <th className="text-left p-4 text-muted-foreground">
                    <SortButton column="skill" label="Skill" />
                  </th>
                  <th className="text-left p-4 text-muted-foreground">
                    <SortButton column="domain" label="Domain" />
                  </th>
                  <th className="text-center p-4 text-muted-foreground">
                    <SortButton column="rating" label="Rating" />
                  </th>
                  <th className="text-left p-4 text-muted-foreground">Proficiency</th>
                  <th className="text-center p-4 text-muted-foreground">
                    <SortButton column="alignment" label="Alignment" />
                  </th>
                  <th className="text-center p-4 text-muted-foreground">
                    <SortButton column="demand" label="Market" />
                  </th>
                  <th className="text-center p-4 text-muted-foreground">Trend</th>
                </tr>
              </thead>
              <tbody>
                {paginatedSkills.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-muted-foreground">
                      No skills match your filters
                    </td>
                  </tr>
                ) : (
                  paginatedSkills.map((skill, idx) => (
                    <tr key={idx} className="border-b hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{skill.skill}</td>
                      <td className="p-4">
                        <Badge variant="outline" className="text-xs">
                          {skill.domain || 'General'}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center">
                          <StarRating rating={skill.rating || 0} />
                        </div>
                      </td>
                      <td className="p-4">
                        {getProficiencyBadge(skill['Proficiency Level'] || 'Intermediate')}
                      </td>
                      <td className="p-4 text-center">
                        <div className="inline-flex items-center gap-2">
                          <span className="text-lg font-bold">{Math.round(Number(skill.alignment_score) || 0)}</span>
                          <span className="text-xs text-muted-foreground">%</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="inline-flex items-center gap-2">
                          <span className="font-medium">{Math.round(Number(skill.market_demand_score) || 0)}</span>
                          <span className="text-xs text-muted-foreground">%</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex justify-center">
                          {getTrendIcon(skill.trend || '')}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {filteredSkills.length > 0 && (
            <div className="flex items-center justify-between p-4 border-t bg-muted/20">
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  Showing {(currentPage - 1) * itemsPerPage + 1} to{' '}
                  {Math.min(currentPage * itemsPerPage, filteredSkills.length)} of{' '}
                  {filteredSkills.length} skills
                </div>
                <Select value={itemsPerPage.toString()} onValueChange={(v) => setItemsPerPage(Number(v))}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 per page</SelectItem>
                    <SelectItem value="25">25 per page</SelectItem>
                    <SelectItem value="50">50 per page</SelectItem>
                    <SelectItem value="100">100 per page</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                <div className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
