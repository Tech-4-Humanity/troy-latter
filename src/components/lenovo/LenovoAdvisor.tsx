import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Checkbox } from '@/components/ui/checkbox';
import { Mic, Send, Volume2, History, ChevronDown, Check } from 'lucide-react';
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
    
    try {
      const { data, error } = await supabase.functions.invoke('lenovo-advisor', {
        body: { 
          prompt: prompt.trim(),
          context: {
            activeChip,
            currentSection
          }
        }
      });

      if (error) throw error;

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
    } catch (error) {
      toast({
        title: "Analysis Error",
        description: "Could not analyze your request. Please try again.",
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
            className="min-h-[100px] resize-none"
            disabled={isProcessing}
          />
          
          <div className="flex items-center gap-2">
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

            <div className="flex items-center gap-4 ml-auto">
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
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-primary">Pain Point</h4>
                  <p className="text-sm">{response.pain}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-primary">Recommended Lenovo Stack</h4>
                  <p className="text-sm">{response.stack}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-primary">Expected Outcomes</h4>
                  <p className="text-sm">{response.outcomes}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-green-700">When It Fits</h4>
                  <p className="text-sm">{response.when_fit}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-orange-700">When to Consider Alternatives</h4>
                  <p className="text-sm">{response.when_not}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm text-primary">Key Competitors</h4>
                  <p className="text-sm">{response.competitors}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-accent/30 p-3 rounded-md">
              <h4 className="font-semibold text-sm text-primary mb-1">Success Vignette</h4>
              <p className="text-sm italic">"{response.vignette}"</p>
            </div>
            
            {response.notes && (
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground">Additional Notes</h4>
                <p className="text-sm text-muted-foreground">{response.notes}</p>
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
                <div key={item.id} className="border rounded-md p-3 text-sm space-y-2">
                  <div className="flex justify-between items-start">
                    <p className="font-medium truncate">{item.parsedContent.prompt}</p>
                    <span className="text-xs text-muted-foreground ml-2">
                      {new Date(item.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-muted-foreground line-clamp-2">{item.parsedContent.response?.stack}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setPrompt(item.parsedContent.prompt);
                      setResponse(item.parsedContent.response);
                    }}
                    className="h-6 text-xs"
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