import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Mic, MicOff } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface HeyGenAvatarProps {
  onMessageReceived?: (message: string) => void;
  className?: string;
}

declare global {
  interface Window {
    HeyGenStreamingAvatarAPI: any;
  }
}

export const HeyGenAvatar: React.FC<HeyGenAvatarProps> = ({ 
  onMessageReceived, 
  className = '' 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  const streamingAvatarRef = useRef<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    initializeAvatar();
    return () => {
      if (streamingAvatarRef.current) {
        streamingAvatarRef.current.disconnect();
      }
    };
  }, []);

  const initializeAvatar = async () => {
    try {
      // Load HeyGen SDK if not already loaded
      if (!window.HeyGenStreamingAvatarAPI) {
        await loadHeyGenSDK();
      }

      if (avatarRef.current) {
        streamingAvatarRef.current = new window.HeyGenStreamingAvatarAPI({
          token: await getSessionToken(),
          avatar_id: "default", // This would be configured based on Troy's avatar
          quality: "high",
          background: "transparent",
        });

        await streamingAvatarRef.current.init(avatarRef.current);
        
        streamingAvatarRef.current.on('avatar_start_talking', () => {
          setIsSpeaking(true);
        });

        streamingAvatarRef.current.on('avatar_stop_talking', () => {
          setIsSpeaking(false);
        });

        setIsConnected(true);
        setIsLoading(false);
        
        toast({
          title: "Avatar Ready",
          description: "Troy's AI avatar is now available",
        });
      }
    } catch (error) {
      console.error('Failed to initialize avatar:', error);
      setIsLoading(false);
      toast({
        title: "Avatar Unavailable",
        description: "Using text chat instead",
        variant: "destructive",
      });
    }
  };

  const loadHeyGenSDK = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.HeyGenStreamingAvatarAPI) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.heygen.ai/streaming-avatar-sdk/v1.0.0/streaming-avatar-sdk.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load HeyGen SDK'));
      document.head.appendChild(script);
    });
  };

  const getSessionToken = async (): Promise<string> => {
    // This would call a Supabase Edge Function to get a HeyGen session token
    // For now, return a placeholder - this needs to be implemented with actual HeyGen API integration
    throw new Error('HeyGen session token not configured');
  };

  const speakText = async (text: string) => {
    if (!streamingAvatarRef.current || !isConnected) {
      throw new Error('Avatar not connected');
    }

    try {
      await streamingAvatarRef.current.speak({
        text,
        emotion: "friendly",
      });
    } catch (error) {
      console.error('Failed to make avatar speak:', error);
      throw error;
    }
  };

  const startListening = () => {
    setIsListening(true);
    // Implement voice recognition here
    // This would integrate with the existing voice-to-text functionality
  };

  const stopListening = () => {
    setIsListening(false);
  };

  if (isLoading) {
    return (
      <Card className={`p-6 ${className}`}>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
            <p className="text-muted-foreground">Loading Troy's Avatar...</p>
          </div>
        </div>
      </Card>
    );
  }

  if (!isConnected) {
    return (
      <Card className={`p-6 ${className}`}>
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Avatar temporarily unavailable</p>
            <p className="text-sm text-muted-foreground">Please use text chat instead</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="relative">
        <div 
          ref={avatarRef} 
          className="w-full h-64 bg-gradient-to-b from-background to-muted"
          style={{ minHeight: '400px' }}
        />
        
        {isSpeaking && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
            Speaking...
          </div>
        )}
        
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button
            size="sm"
            variant={isListening ? "destructive" : "default"}
            onClick={isListening ? stopListening : startListening}
            className="rounded-full"
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default HeyGenAvatar;