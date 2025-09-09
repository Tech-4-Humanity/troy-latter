import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Mic, Send, Volume2, History, ChevronDown, Check, Globe, AlertCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AdvisorResponse {
  pain: string;
  stack: string;
  outcomes: string;
  when_fit: string;
  when_not: string;
  competitors: string;
  vignette: string;
  notes: string;
}

interface LenovoAdvisorProps {
  activeChip?: string;
  currentSection?: string;
}

export const LenovoAdvisor: React.FC<LenovoAdvisorProps> = ({ 
  activeChip, 
  currentSection 
}) => {
  const [prompt, setPrompt] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [response, setResponse] = useState<AdvisorResponse | null>(null);
  const [speakEnabled, setSpeakEnabled] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [useWebContext, setUseWebContext] = useState(false);
  const [webUrls, setWebUrls] = useState('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();

  // Load history on component mount
  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const { data, error } = await supabase
        .from('knowledge_documents')
        .select('id, title, content, created_at')
        .eq('source_type', 'lenovo-advisor')
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      
      const parsedHistory = data?.map(doc => ({
        ...doc,
        parsedContent: JSON.parse(doc.content)
      })) || [];
      
      setHistory(parsedHistory);
    } catch (error) {
      console.error('Failed to load history:', error);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/webm;codecs=opus'
      });
      
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await processVoiceInput(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      toast({
        title: "Microphone Error",
        description: "Could not access microphone. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processVoiceInput = async (audioBlob: Blob) => {
    try {
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64Audio = reader.result?.toString().split(',')[1];
        if (!base64Audio) return;

        const { data, error } = await supabase.functions.invoke('voice-to-text', {
          body: { audio: base64Audio }
        });

        if (error) throw error;
        
        if (data?.text) {
          setPrompt(prev => prev + (prev ? ' ' : '') + data.text);
        }
      };
    } catch (error) {
      toast({
        title: "Transcription Error", 
        description: "Could not process voice input. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async () => {
    if (!prompt.trim() || isProcessing) return;

    setIsProcessing(true);
    console.log('LenovoAdvisor: Starting submission', { prompt: prompt.trim(), useWebContext, webUrls });
    
    try {
      // Parse web URLs if provided
      const urlList = useWebContext && webUrls.trim() 
        ? webUrls.split('\n').map(url => url.trim()).filter(url => url.length > 0)
        : [];

      console.log('LenovoAdvisor: Parsed URLs', urlList);

      const requestBody = { 
        prompt: prompt.trim(),
        context: {
          activeChip,
          currentSection
        },
        webUrls: urlList
      };

      console.log('LenovoAdvisor: Calling tactical-engine function with body:', requestBody);

      // Try new function name first, fallback to old name
      let data, error;
      try {
        const result = await supabase.functions.invoke('tactical-engine', {
          body: requestBody
        });
        data = result.data;
        error = result.error;
      } catch (primaryError) {
        console.log('Primary function failed, trying fallback:', primaryError);
        const fallbackResult = await supabase.functions.invoke('lenovo-advisor', {
          body: requestBody
        });
        data = fallbackResult.data;
        error = fallbackResult.error;
      }

      console.log('LenovoAdvisor: Function response', { data, error });

      if (error) {
        console.error('Lenovo advisor function error:', error);
        throw new Error(error.message || 'Failed to get recommendation');
      }

      if (data?.response) {
        setResponse(data.response);
        
        if (data.documentId) {
          setLastSaved(data.documentId);
          loadHistory(); // Refresh history
        }
        
        if (speakEnabled && data.response.vignette) {
          playTextAsAudio(data.response.vignette);
        }
      }
    } catch (error: any) {
      console.error('Submit error details:', {
        error,
        message: error?.message,
        stack: error?.stack,
        name: error?.name
      });
      
      // Show more detailed error information
      const errorMessage = error?.message || error?.toString() || "Could not analyze your request. Please try again.";
      
      toast({
        title: "Analysis Error",
        description: `${errorMessage} ${error?.details ? `(${error.details})` : ''}`,
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const playTextAsAudio = async (text: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('text-to-speech', {
        body: { text }
      });

      if (error) throw error;

      if (data?.audioContent) {
        const audio = new Audio('data:audio/mp3;base64,' + data.audioContent);
        audio.play();
      }
    } catch (error) {
      console.error('Text-to-speech error:', error);
    }
  };

  const testFunction = async () => {
    try {
      console.log('Testing tactical-engine function health...');
      // Try tactical-engine first, fallback to lenovo-advisor
      let response, data;
      try {
        response = await fetch('https://lzfgigiyqpuuxslsygjt.supabase.co/functions/v1/tactical-engine', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6ZmdpZ2l5cXB1dXhzbHN5Z2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MTc0NjksImV4cCI6MjA1OTk5MzQ2OX0.qUNzDEr2rxjRSClh5P4jeDv_18_yCCkFXTizJqNYSgg`,
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6ZmdpZ2l5cXB1dXhzbHN5Z2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MTc0NjksImV4cCI6MjA1OTk5MzQ2OX0.qUNzDEr2rxjRSClh5P4jeDv_18_yCCkFXTizJqNYSgg'
          }
        });
        data = await response.json();
      } catch (primaryError) {
        console.log('Primary function test failed, trying fallback');
        response = await fetch('https://lzfgigiyqpuuxslsygjt.supabase.co/functions/v1/lenovo-advisor', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6ZmdpZ2l5cXB1dXhzbHN5Z2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MTc0NjksImV4cCI6MjA1OTk5MzQ2OX0.qUNzDEr2rxjRSClh5P4jeDv_18_yCCkFXTizJqNYSgg`,
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6ZmdpZ2l5cXB1dXhzbHN5Z2p0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MTc0NjksImV4cCI6MjA1OTk5MzQ2OX0.qUNzDEr2rxjRSClh5P4jeDv_18_yCCkFXTizJqNYSgg'
          }
        });
        data = await response.json();
      }
      
      console.log('Function health check:', data);
      toast({
        title: "Function Test", 
        description: `Status: ${data.status || 'unknown'}, OpenAI: ${data.openai_key_available ? 'available' : 'missing'}, Service Role: ${data.service_role_key_available ? 'available' : 'missing'}`,
        variant: data.status === 'healthy' ? 'default' : 'destructive'
      });
    } catch (error) {
      console.error('Function test error:', error);
      toast({
        title: "Function Test Failed", 
        description: String(error),
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-full mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🎯 Lenovo Tactical Advisor
          <span className="text-sm font-normal text-muted-foreground">
            Ask about your IT challenges
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your IT challenge, pain point, or requirements... (type, paste, or use voice)"
            className="min-h-[120px] resize-y"
            disabled={isProcessing}
          />
          
          <div className="flex items-center gap-2 flex-wrap">
            <Button
              variant="outline"
              size="sm"
              onClick={isRecording ? stopRecording : startRecording}
              disabled={isProcessing}
              className={isRecording ? "bg-destructive text-destructive-foreground" : ""}
            >
              <Mic className="h-4 w-4" />
              {isRecording ? "Stop Recording" : "Voice Input"}
            </Button>
            
            <Button
              onClick={handleSubmit}
              disabled={!prompt.trim() || isProcessing}
              size="sm"
            >
              <Send className="h-4 w-4" />
              {isProcessing ? "Analyzing..." : "Get Recommendation"}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={testFunction}
              disabled={isProcessing}
            >
              Test Function
            </Button>

            <div className="flex items-center gap-4 ml-auto flex-wrap">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="web-context"
                  checked={useWebContext}
                  onCheckedChange={(checked) => setUseWebContext(checked as boolean)}
                />
                <label htmlFor="web-context" className="text-sm flex items-center gap-1">
                  <Globe className="h-3 w-3" />
                  Web context
                </label>
              </div>
              
              <div className="flex items-center gap-2">
                <Checkbox
                  id="auto-save"
                  checked={autoSave}
                  onCheckedChange={(checked) => setAutoSave(checked as boolean)}
                />
                <label htmlFor="auto-save" className="text-sm">Auto-save</label>
              </div>
              
              <div className="flex items-center gap-2">
                <Checkbox
                  id="speak-answer"
                  checked={speakEnabled}
                  onCheckedChange={(checked) => setSpeakEnabled(checked as boolean)}
                />
                <label htmlFor="speak-answer" className="text-sm flex items-center gap-1">
                  <Volume2 className="h-3 w-3" />
                  Speak answer
                </label>
              </div>
            </div>
          </div>
        </div>

        {useWebContext && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">Lenovo Web Sources</span>
              <AlertCircle className="h-3 w-3 text-muted-foreground" />
            </div>
            <Textarea
              value={webUrls}
              onChange={(e) => setWebUrls(e.target.value)}
              placeholder="Enter Lenovo URLs (one per line, e.g., https://www.lenovo.com/us/en/laptops/thinkpad/)"
              className="min-h-[100px] resize-y"
              disabled={isProcessing}
            />
            <p className="text-xs text-muted-foreground">
              Only Lenovo.com domains are allowed for security. URLs will be fetched to provide current product context.
            </p>
          </div>
        )}

        {response && (
          <div className="border-t pt-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Recommendation</h3>
              {lastSaved && (
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <Check className="h-3 w-3" />
                  Saved
                </div>
              )}
            </div>
            
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm text-primary mb-2">Pain Point</h4>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{response.pain}</p>
                </div>
                
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm text-primary mb-2">Recommended Lenovo Stack</h4>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{response.stack}</p>
                </div>
                
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm text-primary mb-2">Expected Outcomes</h4>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{response.outcomes}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-700">
                  <h4 className="font-semibold text-sm text-green-700 dark:text-green-400 mb-2">When It Fits</h4>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap text-green-800 dark:text-green-300">{response.when_fit}</p>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-700">
                  <h4 className="font-semibold text-sm text-orange-700 dark:text-orange-400 mb-2">When to Consider Alternatives</h4>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap text-orange-800 dark:text-orange-300">{response.when_not}</p>
                </div>
                
                <div className="bg-accent/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm text-primary mb-2">Key Competitors</h4>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{response.competitors}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
              <h4 className="font-semibold text-sm text-blue-700 dark:text-blue-400 mb-2">Success Vignette</h4>
              <p className="text-sm italic leading-relaxed whitespace-pre-wrap text-blue-800 dark:text-blue-300">"{response.vignette}"</p>
            </div>
            
            {response.notes && (
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-semibold text-sm text-muted-foreground mb-2">Additional Notes</h4>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">{response.notes}</p>
              </div>
            )}
          </div>
        )}

        {/* History Section */}
        <Collapsible open={showHistory} onOpenChange={setShowHistory}>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="sm" className="w-full">
              <History className="h-4 w-4 mr-2" />
              View History ({history.length})
              <ChevronDown className={`h-4 w-4 ml-auto transition-transform ${showHistory ? 'rotate-180' : ''}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 mt-2">
            {history.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">No previous recommendations</p>
            ) : (
              history.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 text-sm space-y-3 bg-accent/10">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-primary leading-relaxed">{item.parsedContent.prompt}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {new Date(item.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">Recommended Stack:</p>
                    <p className="text-muted-foreground leading-relaxed">{item.parsedContent.response?.stack}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setPrompt(item.parsedContent.prompt);
                      setResponse(item.parsedContent.response);
                    }}
                    className="h-8 text-xs w-full mt-2"
                  >
                    Load this recommendation
                  </Button>
                </div>
              ))
            )}
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};