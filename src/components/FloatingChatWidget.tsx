
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Chatbot } from '@/components/Chatbot';
import { AIAccessGate } from '@/components/AIAccessGate';
import { useAIAccess } from '@/hooks/useAIAccess';

export const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hasAccess, isChecking, grantAccess } = useAIAccess();
  const isDisabled = import.meta.env.VITE_AI_ASSISTANT_DISABLED === 'true';

  if (isChecking) {
    return null;
  }

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-background border border-border rounded-lg shadow-xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h3 className="font-semibold">Troy's AI Assistant</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 overflow-hidden">
            {isDisabled ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4">
                <div className="text-center mb-4">
                  <p className="text-muted-foreground">Troy's AI Assistant is currently being reconstructed.</p>
                </div>
                <AIAccessGate 
                  onAccessGranted={grantAccess}
                  waitlistOnly={true}
                />
              </div>
            ) : hasAccess ? (
              <Chatbot className="h-full" />
            ) : (
              <div className="flex items-center justify-center h-full">
                <AIAccessGate 
                  onAccessGranted={grantAccess}
                  title="Chat with Troy's AI"
                  description="Get instant answers about Troy's expertise"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
