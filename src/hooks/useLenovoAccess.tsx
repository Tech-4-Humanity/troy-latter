import { useState, useEffect } from 'react';

export const useLenovoAccess = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAccess = () => {
      const accessGranted = localStorage.getItem('lenovo-access-granted');
      const userEmail = localStorage.getItem('lenovo-user-email');
      
      setHasAccess(accessGranted === 'true' && !!userEmail);
      setIsChecking(false);
    };

    checkAccess();
  }, []);

  const grantAccess = () => {
    setHasAccess(true);
  };

  const getUserEmail = () => {
    return localStorage.getItem('lenovo-user-email') || null;
  };

  return {
    hasAccess,
    isChecking,
    grantAccess,
    getUserEmail
  };
};