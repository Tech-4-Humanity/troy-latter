import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer, Tooltip } from 'recharts';
import { Download, Info } from 'lucide-react';
import { toast } from 'sonner';

interface DomainData {
  domain: string;
  yourScore: number;
  marketScore: number;
  skillCount: number;
  gap: number;
}

interface Skill {
  skill: string;
  domain?: string;
  alignment_score?: string | number;
  market_demand_score?: string | number;
}

export default function RadarChart() {
  const [domainData, setDomainData] = useState<DomainData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDomains, setSelectedDomains] = useState<string[]>([]);
  const [allDomains, setAllDomains] = useState<string[]>([]);

  useEffect(() => {
    fetchAndTransformData();
  }, []);

  const fetchAndTransformData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('175+ Skills Matrix')
        .select('skill, domain, alignment_score, market_demand_score');

      if (error) throw error;

      if (!data || data.length === 0) {
        toast.info('No skills data available yet');
        setLoading(false);
        return;
      }

      // Group skills by domain and calculate averages
      const domainMap = new Map<string, { yourScores: number[], marketScores: number[], count: number }>();

      data.forEach((skill: Skill) => {
        const domain = skill.domain || 'Uncategorized';
        const yourScore = parseFloat(String(skill.alignment_score || 0));
        const marketScore = parseFloat(String(skill.market_demand_score || 50));

        if (!domainMap.has(domain)) {
          domainMap.set(domain, { yourScores: [], marketScores: [], count: 0 });
        }

        const domainStats = domainMap.get(domain)!;
        domainStats.yourScores.push(yourScore);
        domainStats.marketScores.push(marketScore);
        domainStats.count++;
      });

      // Calculate averages and transform to chart data
      const transformedData: DomainData[] = Array.from(domainMap.entries()).map(([domain, stats]) => {
        const yourScore = stats.yourScores.reduce((a, b) => a + b, 0) / stats.yourScores.length;
        const marketScore = stats.marketScores.reduce((a, b) => a + b, 0) / stats.marketScores.length;
        
        return {
          domain,
          yourScore: Math.round(yourScore),
          marketScore: Math.round(marketScore),
          skillCount: stats.count,
          gap: Math.round(marketScore - yourScore)
        };
      }).sort((a, b) => b.skillCount - a.skillCount); // Sort by skill count

      setDomainData(transformedData);
      setAllDomains(transformedData.map(d => d.domain));
      setSelectedDomains(transformedData.slice(0, 8).map(d => d.domain)); // Show top 8 by default
    } catch (error: any) {
      console.error('Error fetching skills data:', error);
      toast.error('Failed to load radar chart data');
    } finally {
      setLoading(false);
    }
  };

  const handleExportPNG = () => {
    toast.info('PNG export coming soon');
  };

  const getFilteredData = () => {
    if (selectedDomains.length === 0) return domainData;
    return domainData.filter(d => selectedDomains.includes(d.domain));
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (!active || !payload || !payload.length) return null;

    const data = payload[0].payload;
    
    return (
      <Card className="shadow-lg border-border">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">{data.domain}</CardTitle>
        </CardHeader>
        <CardContent className="text-xs space-y-1">
          <div className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">Your Score:</span>
            <Badge variant="default" className="bg-[hsl(217.2,91.2%,59.8%)] hover:bg-[hsl(217.2,91.2%,59.8%)]">
              {data.yourScore}/100
            </Badge>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">Market Avg:</span>
            <Badge variant="default" className="bg-[hsl(142.1,76.2%,36.3%)] hover:bg-[hsl(142.1,76.2%,36.3%)]">
              {data.marketScore}/100
            </Badge>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">Gap:</span>
            <Badge variant={data.gap > 0 ? "destructive" : "default"} className={data.gap <= 0 ? "bg-[hsl(142.1,76.2%,36.3%)] hover:bg-[hsl(142.1,76.2%,36.3%)]" : ""}>
              {data.gap > 0 ? '+' : ''}{data.gap}
            </Badge>
          </div>
          <div className="pt-1 text-muted-foreground">
            {data.skillCount} skill{data.skillCount !== 1 ? 's' : ''}
          </div>
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Skills Radar Chart</CardTitle>
          <CardDescription>Loading visualization...</CardDescription>
        </CardHeader>
        <CardContent className="h-[500px] flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading chart data...</div>
        </CardContent>
      </Card>
    );
  }

  const filteredData = getFilteredData();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle>Skills Competency Radar</CardTitle>
            <CardDescription>
              Compare your skill portfolio across domains vs market benchmarks
            </CardDescription>
          </div>
          <Button onClick={handleExportPNG} variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export PNG
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Info Banner */}
        <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/50 border border-border">
          <Info className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
          <div className="text-sm space-y-1">
            <p className="font-medium">How to Read This Chart:</p>
            <ul className="text-muted-foreground space-y-0.5 list-disc list-inside">
              <li><span className="text-[hsl(217.2,91.2%,59.8%)]">Blue filled area</span> = Your current competency</li>
              <li><span className="text-[hsl(142.1,76.2%,36.3%)]">Green line</span> = Market average benchmark</li>
              <li>Larger gaps = Learning/growth opportunities</li>
              <li>Uneven shape = Specialization vs generalization</li>
            </ul>
          </div>
        </div>

        {/* Domain Filter */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Show Domains:</label>
          <Select
            value={selectedDomains.length === allDomains.length ? 'all' : 'custom'}
            onValueChange={(value) => {
              if (value === 'all') {
                setSelectedDomains(allDomains);
              } else if (value === 'top5') {
                setSelectedDomains(domainData.slice(0, 5).map(d => d.domain));
              } else if (value === 'top8') {
                setSelectedDomains(domainData.slice(0, 8).map(d => d.domain));
              }
            }}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Domains ({allDomains.length})</SelectItem>
              <SelectItem value="top5">Top 5 Domains</SelectItem>
              <SelectItem value="top8">Top 8 Domains</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-muted-foreground">
            Showing {filteredData.length} domains
          </span>
        </div>

        {/* Radar Chart */}
        <div className="h-[500px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsRadar data={filteredData}>
              <PolarGrid stroke="hsl(var(--border))" />
              <PolarAngleAxis 
                dataKey="domain" 
                tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
              />
              <PolarRadiusAxis 
                angle={90} 
                domain={[0, 100]} 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
              />
              <Radar
                name="Your Skills"
                dataKey="yourScore"
                stroke="hsl(217.2, 91.2%, 59.8%)"
                fill="hsl(217.2, 91.2%, 59.8%)"
                fillOpacity={0.6}
              />
              <Radar
                name="Market Average"
                dataKey="marketScore"
                stroke="hsl(142.1, 76.2%, 36.3%)"
                fill="hsl(142.1, 76.2%, 36.3%)"
                fillOpacity={0.3}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="circle"
              />
            </RechartsRadar>
          </ResponsiveContainer>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <div className="text-sm text-muted-foreground">Total Domains</div>
            <div className="text-2xl font-bold">{filteredData.length}</div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <div className="text-sm text-muted-foreground">Avg Your Score</div>
            <div className="text-2xl font-bold">
              {Math.round(filteredData.reduce((sum, d) => sum + d.yourScore, 0) / filteredData.length || 0)}
              <span className="text-sm text-muted-foreground">/100</span>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-muted/50 border border-border">
            <div className="text-sm text-muted-foreground">Total Skills</div>
            <div className="text-2xl font-bold">
              {filteredData.reduce((sum, d) => sum + d.skillCount, 0)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
