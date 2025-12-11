import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { LenovoAccessGate } from './LenovoAccessGate';
import { MicrositeAccessGate } from './MicrositeAccessGate';
import { useLenovoAccess } from '@/hooks/useLenovoAccess';
import { useMicrositeAccess } from '@/hooks/useMicrositeAccess';

interface MicrositeGuardProps {
  children: React.ReactNode;
}

interface MicrositeConfig {
  protected: boolean;
  publicPaths: string[];
  brandColor?: string;
  customGate?: boolean;
  title?: string;
  description?: string;
}

// Microsite configuration - controls which microsites are protected
const micrositeConfig: Record<string, MicrositeConfig> = {
  lenovo: { 
    protected: true, 
    publicPaths: ['/microsites/lenovo/technical-stack'],
    brandColor: 'red',
    customGate: true // Uses custom LenovoAccessGate
  },
  atlassian: { 
    protected: true, 
    publicPaths: [],
    brandColor: 'blue',
    title: 'Access Atlassian Portfolio',
    description: "View Troy's design technology portfolio and strategic insights tailored for Atlassian's design systems and collaboration tools."
  },
  lab3: { 
    protected: true, 
    publicPaths: [],
    brandColor: 'indigo',
    title: 'Access Lab3 Analysis',
    description: "View comprehensive technical analysis and strategic recommendations for Lab3's Microsoft ecosystem opportunities."
  },
  wns: { 
    protected: true, 
    publicPaths: [],
    brandColor: 'purple',
    title: 'Access WNS Portfolio',
    description: "View expertise in hyperautomation, low-code platforms, and enterprise integration tailored for WNS delivery excellence."
  },
  agentforce: { 
    protected: true, 
    publicPaths: [],
    brandColor: 'blue',
    title: 'Access Agentforce Portfolio',
    description: "View strategic insights on Agentforce implementation, AI-powered workflows, and Salesforce ecosystem integration."
  },
  pega: { 
    protected: true, 
    publicPaths: [],
    brandColor: 'blue',
    title: 'Access Pega Portfolio',
    description: "View financial services transformation expertise, decisioning frameworks, and APAC regulatory compliance patterns."
  },
  envato: { 
    protected: false, 
    publicPaths: []
  },
  'interview-prep': { 
    protected: false, 
    publicPaths: []
  },
  adobe: { 
    protected: false, 
    publicPaths: [],
    brandColor: 'red',
    title: 'Adobe Forward Deployed AI Engineer',
    description: "Troy Latter's portfolio showcasing GenAI expertise for Adobe's creative AI ecosystem."
  }
};

export const MicrositeGuard = ({ children }: MicrositeGuardProps) => {
  const location = useLocation();
  
  // Extract microsite name from path
  const pathMatch = location.pathname.match(/^\/microsites\/([^\/]+)/);
  if (!pathMatch) {
    return <>{children}</>;
  }
  
  const micrositeName = pathMatch[1];
  const config = micrositeConfig[micrositeName as keyof typeof micrositeConfig];
  
  // If microsite not in config or not protected, allow access
  if (!config || !config.protected) {
    return <>{children}</>;
  }
  
  // Check if current path is in public paths
  const isPublicPath = config.publicPaths?.some(path => 
    location.pathname.startsWith(path)
  );
  
  if (isPublicPath) {
    return <>{children}</>;
  }
  
  // In development, check environment variable
  if (import.meta.env.DEV) {
    return <>{children}</>;
  }
  
  // Check environment variable to enable gate
  const gateEnabled = import.meta.env[`VITE_ENABLE_${micrositeName.toUpperCase()}_GATE`] === 'true';
  if (!gateEnabled) {
    return <>{children}</>;
  }
  
  // Handle Lenovo with custom gate
  if (micrositeName === 'lenovo' && config.customGate) {
    const { hasAccess, isChecking, grantAccess } = useLenovoAccess();
    
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
  
  // Handle all other microsites with generic gate
  const { hasAccess, isChecking, grantAccess } = useMicrositeAccess(micrositeName);
  
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (!hasAccess) {
    return (
      <MicrositeAccessGate
        micrositeName={micrositeName.charAt(0).toUpperCase() + micrositeName.slice(1)}
        onAccessGranted={grantAccess}
        customTitle={config.title}
        customDescription={config.description}
        brandColor={config.brandColor}
      />
    );
  }
  
  return <>{children}</>;
};
