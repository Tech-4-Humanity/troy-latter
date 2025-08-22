import React, { useState } from 'react';
import { MessageCircle, X, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Chatbot } from './Chatbot';

export const FloatingChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleChat = () => {
    if (isOpen && !isMinimized) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
      setIsMinimized(false);
    }
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={toggleChat}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 hover:from-purple-600 hover:via-blue-600 hover:to-teal-600 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
            size="icon"
          >
            <MessageCircle className="h-7 w-7 text-white group-hover:animate-pulse" />
          </Button>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Talk to Troy's AI Assistant
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}

      {/* Minimized Chat Bar */}
      {isOpen && isMinimized && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-lg shadow-xl p-4 max-w-xs">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">Troy's Assistant</span>
              </div>
              <div className="flex space-x-1">
                <Button
                  onClick={() => setIsMinimized(false)}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-white hover:bg-white/20"
                >
                  <Minimize2 className="h-3 w-3 rotate-180" />
                </Button>
                <Button
                  onClick={closeChat}
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0 text-white hover:bg-white/20"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full Chat Panel */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Troy's AI Assistant</h3>
                <p className="text-xs opacity-90">Ask about experience, expertise & insights</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button
                onClick={minimizeChat}
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-white hover:bg-white/20"
              >
                <Minimize2 className="h-3 w-3" />
              </Button>
              <Button
                onClick={closeChat}
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 text-white hover:bg-white/20"
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Chat Content */}
          <div className="flex-1 overflow-hidden">
            <Chatbot className="h-full border-0 rounded-none" />
          </div>
        </div>
      )}
    </>
  );
};