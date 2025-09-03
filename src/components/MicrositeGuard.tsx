import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface MicrositeGuardProps {
  children: React.ReactNode;
}

export const MicrositeGuard = ({ children }: MicrositeGuardProps) => {
  const location = useLocation();
  
  // Block all microsite access - redirect to homepage
  if (location.pathname.startsWith('/microsites')) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};