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
  
  // Handle Lenovo microsite access with authorization
  if (location.pathname.startsWith('/microsites/lenovo')) {
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
  
  // Block all other microsite access - redirect to homepage
  if (location.pathname.startsWith('/microsites')) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};