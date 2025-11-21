import { useState, useEffect } from 'react';

export const useMicrositeAccess = (micrositeName: string) => {
  const [hasAccess, setHasAccess] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAccess = () => {
      const accessGranted = localStorage.getItem(`${micrositeName}-access-granted`);
      const userEmail = localStorage.getItem(`${micrositeName}-user-email`);
      
      setHasAccess(accessGranted === 'true' && !!userEmail);
      setIsChecking(false);
    };

    checkAccess();
  }, [micrositeName]);

  const grantAccess = () => {
    setHasAccess(true);
  };

  const getUserEmail = () => {
    return localStorage.getItem(`${micrositeName}-user-email`) || null;
  };

  const getUserName = () => {
    return localStorage.getItem(`${micrositeName}-user-name`) || null;
  };

  const getUserCompany = () => {
    return localStorage.getItem(`${micrositeName}-user-company`) || null;
  };

  return {
    hasAccess,
    isChecking,
    grantAccess,
    getUserEmail,
    getUserName,
    getUserCompany
  };
};
