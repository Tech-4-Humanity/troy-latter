import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, Send, Volume2 } from 'lucide-react';
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
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();

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

            <div className="flex items-center gap-2 ml-auto">
              <input
                type="checkbox"
                id="speak-answer"
                checked={speakEnabled}
                onChange={(e) => setSpeakEnabled(e.target.checked)}
                className="rounded"
              />
              <label htmlFor="speak-answer" className="text-sm flex items-center gap-1">
                <Volume2 className="h-3 w-3" />
                Speak answer
              </label>
            </div>
          </div>
        </div>

        {response && (
          <div className="border-t pt-4 space-y-4">
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
      </CardContent>
    </Card>
  );
};