import React, { useEffect, useState } from 'react';
import { LeadCaptureGate } from '@/components/LeadCaptureGate';
import ProjectsContent from './ProjectsContent';

const Projects = () => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const accessGranted = localStorage.getItem('projects-access-granted') === 'true';
    const adminBypass = localStorage.getItem('admin-access') === 'true' || new URLSearchParams(window.location.search).get('admin') === 'true';
    if (adminBypass) {
      localStorage.setItem('projects-access-granted', 'true');
    }
    setHasAccess(accessGranted || adminBypass);
  }, []);

  if (!hasAccess) {
    return <LeadCaptureGate onSuccess={() => setHasAccess(true)} />;
  }

  return <ProjectsContent />;
};

export default Projects;