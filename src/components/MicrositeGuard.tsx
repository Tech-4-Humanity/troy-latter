import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface MicrositeGuardProps {
  children: React.ReactNode;
}

export const MicrositeGuard = ({ children }: MicrositeGuardProps) => {
  const location = useLocation();
  
  // Allow direct access to Lenovo microsite
  if (location.pathname.startsWith('/microsites/lenovo')) {
    return <>{children}</>;
  }
  
  // Block all other microsite access - redirect to homepage
  if (location.pathname.startsWith('/microsites')) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};