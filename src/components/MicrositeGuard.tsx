import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface MicrositeGuardProps {
  children: React.ReactNode;
}

export const MicrositeGuard = ({ children }: MicrositeGuardProps) => {
  const location = useLocation();
  const allowedMicrosite = import.meta.env.VITE_ALLOWED_MICROSITE || 'lenovo';
  
  // Check if current path is for the allowed microsite
  if (location.pathname.startsWith(`/microsites/${allowedMicrosite}`)) {
    return <>{children}</>;
  }
  
  // Redirect /microsites base path to the allowed microsite
  if (location.pathname === '/microsites' || location.pathname === '/microsites/') {
    return <Navigate to={`/microsites/${allowedMicrosite}`} replace />;
  }
  
  // If accessing a different microsite, redirect to the allowed one
  if (location.pathname.startsWith('/microsites/') && !location.pathname.startsWith(`/microsites/${allowedMicrosite}`)) {
    return <Navigate to={`/microsites/${allowedMicrosite}`} replace />;
  }
  
  return <>{children}</>;
};