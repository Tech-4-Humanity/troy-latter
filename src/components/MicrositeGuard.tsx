import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LenovoAccessGate } from './LenovoAccessGate';
import { useLenovoAccess } from '@/hooks/useLenovoAccess';

interface MicrositeGuardProps {
  children: React.ReactNode;
}

export const MicrositeGuard = ({ children }: MicrositeGuardProps) => {
  const location = useLocation();
  const { hasAccess, isChecking, grantAccess } = useLenovoAccess();
  
  // Handle Lenovo microsite access - technical stack is always public
  if (location.pathname.startsWith('/microsites/lenovo')) {
    // Technical stack is always publicly accessible
    if (location.pathname.startsWith('/microsites/lenovo/technical-stack')) {
      return <>{children}</>;
    }
    
    // In development, always allow access
    if (import.meta.env.DEV) {
      return <>{children}</>;
    }
    
    // Check if Lenovo gate is enabled via environment variable
    const lenovoGateEnabled = import.meta.env.VITE_ENABLE_LENOVO_GATE === 'true';
    if (!lenovoGateEnabled) {
      return <>{children}</>;
    }
    
    // Apply authorization gate for other Lenovo content if enabled
    if (isChecking) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
        </div>
      );
    }
    
    if (!hasAccess) {
      return <LenovoAccessGate onAccessGranted={grantAccess} />;
    }
    
    return <>{children}</>;
  }
  
  // All other microsites are accessible via direct link
  return <>{children}</>;
};