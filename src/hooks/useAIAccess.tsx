
import { useState, useEffect } from 'react';

export const useAIAccess = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAccess = () => {
      const accessGranted = localStorage.getItem('ai-assistant-access-granted');
      const userEmail = localStorage.getItem('ai-assistant-user-email');
      
      setHasAccess(accessGranted === 'true' && !!userEmail);
      setIsChecking(false);
    };

    checkAccess();
  }, []);

  const grantAccess = () => {
    setHasAccess(true);
  };

  const getUserEmail = () => {
    return localStorage.getItem('ai-assistant-user-email') || null;
  };

  return {
    hasAccess,
    isChecking,
    grantAccess,
    getUserEmail
  };
};
