import { useState, useEffect } from 'react';
import { PageTitle } from '@/components/PageTitle';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Loader2, Download, FileText, Calendar, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

interface CVGeneration {
  id: string;
  created_at: string;
  job_description: string;
  match_score: number;
  generated_cv: string;
  user_email: string | null;
  skill_alignment_score: number;
}

export default function CVGenerationHistory() {
  const [generations, setGenerations] = useState<CVGeneration[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchGenerations();
  }, []);

  const fetchGenerations = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('cv_generations')
        .select('id, created_at, job_description, match_score, generated_cv, user_email, skill_alignment_score')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      setGenerations(data || []);
    } catch (error) {
      console.error('Error fetching CV generations:', error);
      toast.error('Failed to load CV generation history');
    } finally {
      setIsLoading(false);
    }
  };

  const downloadCV = (cv: string, id: string, format: 'txt' | 'md') => {
    const blob = new Blob([cv], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `CV-${id}.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`CV downloaded as ${format.toUpperCase()}`);
  };

  const getMatchScoreColor = (score: number) => {
    if (score >= 85) return 'bg-green-500';
    if (score >= 70) return 'bg-blue-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <PageTitle title="CV Generation History" />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">CV Generation History</h1>
          <p className="text-muted-foreground">
            View and download all your generated CVs. Total: {generations.length}
          </p>
        </div>

        {generations.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">No CVs Generated Yet</h3>
              <p className="text-muted-foreground mb-4">
                Start by generating your first tailored CV
              </p>
              <Button asChild>
                <a href="/tools/cv-generator">Generate CV</a>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {generations.map((gen) => (
              <Card key={gen.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">
                        {gen.job_description.substring(0, 100)}...
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {format(new Date(gen.created_at), 'MMM d, yyyy h:mm a')}
                        </div>
                        {gen.user_email && (
                          <Badge variant="outline">
                            {gen.user_email}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 items-end">
                      <Badge 
                        className={`${getMatchScoreColor(gen.match_score)} text-white px-3 py-1`}
                      >
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {Math.round(gen.match_score)}% Match
                      </Badge>
                      {gen.skill_alignment_score > 0 && (
                        <Badge variant="secondary">
                          {Math.round(gen.skill_alignment_score)}% Skills Used
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadCV(gen.generated_cv, gen.id, 'md')}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download MD
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadCV(gen.generated_cv, gen.id, 'txt')}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download TXT
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        navigator.clipboard.writeText(gen.generated_cv);
                        toast.success('CV copied to clipboard');
                      }}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
